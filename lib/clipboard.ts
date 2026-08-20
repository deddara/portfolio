/**
 * Копирует текст в буфер обмена.
 *
 * Clipboard API отсутствует в in-app браузерах (Telegram, Instagram, VK WebView)
 * и на небезопасном origin, а на iOS Safari может отклонить промис. Поэтому
 * основной путь обёрнут в try/catch, а фолбэком идёт execCommand.
 *
 * @returns true, если текст удалось скопировать хотя бы одним из способов.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            // падаем в legacy-путь ниже
        }
    }

    return legacyCopy(text);
}

/**
 * Фолбэк через document.execCommand для окружений без Clipboard API.
 */
function legacyCopy(text: string): boolean {
    if (typeof document === "undefined") return false;

    const textarea = document.createElement("textarea");
    textarea.value = text;
    // Reason: iOS Safari игнорирует select() у readonly-полей и показывает клавиатуру,
    // если элемент виден. contentEditable + прозрачный fixed-элемент обходят оба ограничения.
    textarea.contentEditable = "true";
    textarea.readOnly = false;
    textarea.setAttribute("aria-hidden", "true");
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.width = "1px";
    textarea.style.height = "1px";
    textarea.style.padding = "0";
    textarea.style.border = "none";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);

    try {
        const range = document.createRange();
        range.selectNodeContents(textarea);

        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);

        textarea.setSelectionRange(0, text.length);

        return document.execCommand("copy");
    } catch {
        return false;
    } finally {
        document.body.removeChild(textarea);
    }
}

import {cn} from "@/lib/utils";
import {BackgroundGradientAnimation} from "@/components/ui/BackgroundGradientAnimation";
import {useEffect, useState} from "react";
import MagicButton from "@/components/ui/MagicButton";
import {IoCopyOutline} from "react-icons/io5";
import animationData from "@/data/confetti.json";
import dynamic from "next/dynamic";
import {contactEmail} from "@/data";
import {copyToClipboard} from "@/lib/clipboard";

// Lazy-load GridGlobe, disable SSR, and optionally show a fallback
const SafeGridGlobe = dynamic(() => import("./GridGlobe"), {
    ssr: false,               // turn off SSR, only load on client
    loading: () => null,      // optional loading or fallback component
});

const Lottie = dynamic(() => import("react-lottie"), {
    ssr: false,
});

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  id,
                                  title,
                                  description,
                                  //   remove unecessary things here
                                  img,
                                  imgClassName,
                                  titleClassName,
                                  spareImg,
                              }: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const leftLists = ["Go", "Kotlin", "Java"];
    const rightLists = ["Postgres", "Spring Boot", "Kafka"];

    const [copied, setCopied] = useState(false);
    // Reason: в in-app браузерах недоступны и Clipboard API, и execCommand. Вместо
    // молчаливой кнопки показываем сам адрес, чтобы его можно было выделить руками.
    const [copyFailed, setCopyFailed] = useState(false);
    // Reason: react-lottie не перезапускает анимацию при смене autoplay, поэтому
    // конфетти перемонтируется через key при каждом успешном копировании.
    const [confettiRun, setConfettiRun] = useState(0);

    const confettiOptions = {
        loop: false,
        autoplay: confettiRun > 0,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    useEffect(() => {
        if (!copied) return;

        const timer = setTimeout(() => setCopied(false), 2500);
        return () => clearTimeout(timer);
    }, [copied]);

    const handleCopy = async () => {
        const ok = await copyToClipboard(contactEmail);

        if (!ok) {
            setCopyFailed(true);
            return;
        }

        setCopyFailed(false);
        setCopied(true);
        setConfettiRun((run) => run + 1);
    };

    const copyButtonTitle = copied
        ? "Email is Copied!"
        : copyFailed
            ? contactEmail
            : "Copy my email address";

    return (
        <div
            className={cn(
                // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            {/* add img divs */}
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt=""
                            aria-hidden="true"
                            className={cn(imgClassName, "object-cover object-center ")}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
                    } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt=""
                            aria-hidden="true"
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation
                        gradientBackgroundStart="rgb(6, 58, 92)"
                        gradientBackgroundEnd="rgb(0, 17, 82)"
                        firstColor="18, 113, 255"
                        secondColor="40, 200, 220"
                        thirdColor="100, 220, 255"
                        fourthColor="20, 120, 160"
                        fifthColor="90, 216, 240"
                        pointerColor="91, 216, 240"
                    >
                        <div
                            className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                    )}
                >
                    <div
                        className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                        {description}
                    </div>
                    <div
                        className={`font-display text-lg lg:text-3xl max-w-96 font-bold z-10`}
                    >
                        {title}
                    </div>

                    {/* for the github 3d globe */}
                    {id === 2 && <SafeGridGlobe/>}

                    {/* Tech stack list div */}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            {/* tech stack lists */}
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                {leftLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                    >
                    {item}
                  </span>
                                ))}
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                                {rightLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                    >
                    {item}
                  </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div
                                className="pointer-events-none absolute -bottom-5 right-0 max-w-full overflow-hidden">
                                {confettiRun > 0 && (
                                    <Lottie
                                        key={confettiRun}
                                        options={confettiOptions}
                                        height={200}
                                        width={400}
                                    />
                                )}
                            </div>

                            <MagicButton
                                title={copyButtonTitle}
                                icon={<IoCopyOutline/>}
                                position="left"
                                handleClick={handleCopy}
                                otherClasses={`!bg-[#161A31] ${copyFailed ? "select-all text-xs" : ""}`}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
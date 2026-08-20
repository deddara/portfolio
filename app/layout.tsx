
import type {Metadata} from "next";
import {Inter, Space_Grotesk} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/app/providers";

const sans = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const display = Space_Grotesk({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["500", "700"],
});

export const metadata: Metadata = {
    title: "Amir Muratov - Go Backend Engineer",
    description: "Backend engineer at 2GIS building the Otello hotel booking platform in Go. " +
        "Bookings, payments and admin tooling; features led from requirements to release.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${sans.variable} ${display.variable} antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}

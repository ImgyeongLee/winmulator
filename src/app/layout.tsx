import type {Metadata} from "next";
import {Inter, VT323} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

const xp = VT323({ weight: ['400'], subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Windows XP, 2000 and 7 emulator",
    description: "Developed by Hla Htun and Imgyeong Lee",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={xp.className}>{children}</body>
        </html>
    );
}

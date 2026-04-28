import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/menu/Navbar";
import Footer from "@/components/menu/Footer";
import {ThemeProvider} from "@/components/theme/ThemeProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Menglong's portfolio",
    description: "Portfolio talk about experience and skills",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar/>
            <main className="min-h-screen">{children}</main>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/menu/Navbar";
import Footer from "@/components/menu/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    metadataBase: new URL('https://menglong.dev'),
    title: {
        default: 'Menglong Keo | Portfolio',
        template: '%s | Menglong Keo',
    },
    description: 'Professional portfolio showcasing web development projects and skills.',
    openGraph: {
        title: 'Menglong Keo | Portfolio',
        description: 'Professional portfolio showcasing web development projects and skills.',
        url: 'https://menglong.dev',
        siteName: 'Menglong Keo Portfolio',
        images: [
            {
                url: '/thumnail.png',
                width: 1200,
                height: 630,
                alt: 'Menglong Keo Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Menglong Keo | Portfolio',
        description: 'Professional portfolio showcasing web development projects and skills.',
        images: ['https://menglong.dev/thumnail.png'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
            <body suppressHydrationWarning className="bg-background text-foreground transition-colors duration-300">
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                    <Navbar />
                    <main className="min-h-screen">{children}</main>
                    <Footer />
                    <Toaster position="top-right" />
                </ThemeProvider>
            </body>
        </html>
    );
}

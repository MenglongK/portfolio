import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/menu/Navbar";
import Footer from "@/components/menu/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "react-hot-toast";

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
        images: '/CAM-HOTEL.png',
        type: 'website',
        siteName: 'Menglong Keo Portfolio',
        url: 'https://menglong.dev',
    },
    twitter: {
        card: 'summary_large_image',
        images: ['/CAM-HOTEL.png'],
    },
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
                    <Navbar />
                    <main className="min-h-screen">{children}</main>
                    <Footer />
                    <Toaster position="bottom-right" />
                </ThemeProvider>
            </body>
        </html>
    );
}

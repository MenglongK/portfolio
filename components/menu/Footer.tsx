"use client";
import Link from "next/link";
import {menuData} from "@/data/menuData";
import {usePathname} from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    if (pathname === '/cv') return null;

    return (
        <footer className="border-t border-foreground/10 bg-background/40 backdrop-blur-2xl py-6 shadow-[0_-4px_30px_rgba(0,0,0,0.1)] relative z-10">
            <div className="container mx-auto px-6 py-10 flex flex-col items-center">
                <div className="text-2xl font-bold text-foreground tracking-widest mb-6">
                    MENGLONG<span className="text-orange-500">.</span>
                </div>
                <nav className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-foreground/60">
                    {
                        menuData.map((menu, index) => (
                            <Link key={index} href={menu.target}
                                  className="hover:text-orange-500 transition">{menu.title}</Link>
                        ))
                    }
                </nav>
                <p className="text-foreground/40 text-sm">
                    &copy; 2026 Menglong Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
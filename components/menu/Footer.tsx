import Link from "next/link";
import {menuData} from "@/data/menuData";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/30 backdrop-blur-md py-6">
            <div className="container mx-auto px-6 py-10 flex flex-col items-center">
                <div className="text-2xl font-bold text-white tracking-widest mb-6">
                    MENGLONG<span className="text-orange-500">.</span>
                </div>
                <nav className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-gray-400">
                    {
                        menuData.map((menu, index) => (
                            <Link key={index} href={menu.target}
                                  className="hover:text-orange-500 transition">{menu.title}</Link>
                        ))
                    }
                </nav>
                <p className="text-gray-500 text-sm">
                    &copy; 2026 Menglong Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
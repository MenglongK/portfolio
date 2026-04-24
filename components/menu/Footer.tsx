import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="mt-10 border-t border-white/10 bg-black/30 backdrop-blur-md">
                <div className="container mx-auto px-6 py-10 flex flex-col items-center">
                    <div className="text-2xl font-bold text-white tracking-widest mb-6">
                        JERRY<span className="text-orange-500">.</span>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400">
                        <Link href="#" className="hover:text-orange-500 transition">Home</Link>
                        <Link href="#" className="hover:text-orange-500 transition">About</Link>
                        <Link href="#" className="hover:text-orange-500 transition">Services</Link>
                        <Link href="#" className="hover:text-orange-500 transition">Portfolio</Link>
                        <Link href="#" className="hover:text-orange-500 transition">Contact</Link>
                    </nav>
                    <p className="text-gray-500 text-sm">
                        &copy; 2026 Jerry Portfolio. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}
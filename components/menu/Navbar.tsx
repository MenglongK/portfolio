import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav
                className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 transition-all duration-300">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-white tracking-widest">
                        MENGLONG<span className="text-orange-500">.</span>
                    </div>
                    <nav className="hidden md:flex space-x-8 text-sm font-medium">
                        <Link href="#" className="text-orange-500 hover:text-orange-400 transition">Home</Link>
                        <Link href="#" className="text-orange-500 hover:text-orange-400 transition">About</Link>
                        <Link href="#" className="text-orange-500 hover:text-orange-400 transition">Services</Link>
                        <Link href="#" className="text-orange-500 hover:text-orange-400 transition">Portfolio</Link>
                        <Link href="#" className="text-orange-500 hover:text-orange-400 transition">Contact</Link>
                    </nav>
                    <button
                        className="px-6 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                        Hire Me
                    </button>
                </div>
            </nav>
        </>
    )
}
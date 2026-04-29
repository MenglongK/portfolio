"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

export default function Homepage() {
    return (
        <>
            <div
                className="bg-background text-foreground/80 font-sans antialiased overflow-x-hidden relative selection:bg-orange-500 selection:text-foreground min-h-screen">
                {/* Decorative Background Blobs for Glassmorphism Effect */}
                <div
                    className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-600/20 blur-[120px] pointer-events-none z-0"></div>
                <div
                    className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none z-0"></div>
                <div
                    className="fixed top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none z-0"></div>

                {/* Main Content Wrapper */}
                <div id="home" className="relative z-10">
                    {/* Hero Section */}
                    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="pt-32 pb-20 container mx-auto px-6 min-h-screen flex flex-col justify-center">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            {/* Left Content */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h3 className="text-lg font-medium text-foreground/60 tracking-wide uppercase">Hi, I am
                                    <span
                                        className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600"> Menglong</span>
                                </h3>
                                <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight">
                                    <span
                                        className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Web</span> Developer
                                </h1>
                                <p className="text-foreground/60 leading-relaxed max-w-lg">
                                    I engineer high-performance web applications by blending Figma design and Next.js
                                    speed with the robust power of Java Spring Boot and PostgreSQL. I don’t just code; I
                                    build seamless digital experiences from the database to the interface. Let’s create
                                    something amazing together.
                                </p>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        className="px-8 py-3 rounded-full bg-orange-500 text-foreground font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-500/30">
                                        Hire Me
                                    </button>
                                    <button
                                        className="px-8 py-3 rounded-full bg-foreground/5 backdrop-blur-md border border-foreground/10 text-foreground font-semibold hover:bg-foreground/10 transition">
                                        Download CV
                                    </button>
                                </div>

                                {/* Glass Stats */}
                                <div className="flex gap-6 pt-8">
                                    <div
                                        className="bg-foreground/5 backdrop-blur-md border border-foreground/10 p-4 rounded-2xl text-center flex-1">
                                        <h4 className="text-2xl font-bold text-orange-500">0</h4>
                                        <p className="text-xs text-foreground/60 uppercase mt-1">Years Exp</p>
                                    </div>
                                    <div
                                        className="bg-foreground/5 backdrop-blur-md border border-foreground/10 p-4 rounded-2xl text-center flex-1">
                                        <h4 className="text-2xl font-bold text-orange-500">3+</h4>
                                        <p className="text-xs text-foreground/60 uppercase mt-1">Projects</p>
                                    </div>
                                    <div
                                        className="bg-foreground/5 backdrop-blur-md border border-foreground/10 p-4 rounded-2xl text-center flex-1">
                                        <h4 className="text-2xl font-bold text-orange-500">0</h4>
                                        <p className="text-xs text-foreground/60 uppercase mt-1">Clients</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
                                <div
                                    className="relative w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 mx-auto rounded-full p-2 bg-linear-to-tr from-orange-500/40 to-transparent backdrop-blur-xl border border-foreground/10 shadow-2xl">
                                    <div className="group relative w-full h-full rounded-full bg-foreground/5 border border-foreground/10">
                                        {/* Bottom Half: Clipped by the circle */}
                                        <div className="absolute inset-0 rounded-full overflow-hidden flex items-end justify-center">
                                            <Image
                                                src="/profile.png"
                                                alt="Menglong"
                                                width={300}
                                                height={400}
                                                unoptimized={true}
                                                loading="eager"
                                                className="w-[90%] h-auto object-contain opacity-100 mix-blend-normal group-hover:mix-blend-luminosity transition-all duration-700 scale-[1.15] group-hover:scale-[1.20] origin-bottom"
                                            />
                                        </div>

                                        {/* Top Half: Pop-out effect ignoring the top border */}
                                        <div className="absolute inset-0 pointer-events-none [clip-path:inset(-50%_-50%_50%_-50%)] drop-shadow-2xl flex items-end justify-center">
                                            <Image
                                                src="/profile.png"
                                                alt="Menglong"
                                                width={400}
                                                height={500}
                                                unoptimized={true}
                                                loading="eager"
                                                className="w-[90%] h-auto object-contain opacity-100 mix-blend-normal group-hover:mix-blend-luminosity transition-all duration-700 scale-[1.15] group-hover:scale-[1.20] origin-bottom"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    <About />

                    <Project />

                    <Contact />

                </div>
            </div>
        </>
    )
}
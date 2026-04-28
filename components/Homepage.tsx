"use client";

import Image from "next/image";
import { portfolioListing, skillsListing } from "@/data/mockData";
import { motion } from "framer-motion";

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
                                    <div
                                        className="w-full h-full rounded-full overflow-hidden bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                                        <Image
                                            src="/profile.png"
                                            alt="Menglong"
                                            width={100}
                                            height={100}
                                            unoptimized={true}
                                            className="object-cover w-full h-full opacity-80 mix-blend-normal hover:mix-blend-luminosity transition duration-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Skills Section */}
                    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} id="skills" className="py-20 container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills</h2>
                            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/*Skills card */}
                            {
                                skillsListing.map((item, index) => (
                                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                                        className="bg-foreground/5 backdrop-blur-md border border-foreground/10 p-8 rounded-3xl hover:bg-foreground/10 hover:border-orange-500/50 transition duration-300 group">
                                        <div
                                            className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                            <item.icon className="text-orange-500" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                                        <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </motion.section>

                    {/* About Me Section */}
                    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} id="about" className="py-20 container mx-auto px-6">
                        <div
                            className="bg-foreground/5 backdrop-blur-xl border border-foreground/10 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
                            {/* Inner glow for this specific container */}
                            <div
                                className="absolute -top-20 -left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]"></div>

                            <div className="w-full max-w-xs md:max-w-sm mx-auto lg:max-w-none lg:w-1/3 relative z-10">
                                <div className="rounded-2xl overflow-hidden border-2 border-foreground/10 shadow-xl">
                                    <Image
                                        src="/profile.png"
                                        alt="About Menglong"
                                        width={100}
                                        height={100}
                                        unoptimized={true}
                                        className="w-full h-auto hover:grayscale-0 transition duration-500" />
                                </div>
                            </div>

                            <div className="w-full lg:w-2/3 space-y-6 relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
                                <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
                                    I bridge the gap between elegant pixels and robust logic, living at the intersection
                                    of high-fidelity design and high-performance code. I leverage Figma to map out
                                    intuitive user journeys, then bring them to life with the fluid speed of Next.js.
                                    Beneath the surface, I engineer scalable, enterprise-ready architectures using Java
                                    Spring Boot, grounded by the rock-solid reliability of PostgreSQL. I don’t just
                                    build apps; I craft seamless digital ecosystems where complex engineering meets
                                    effortless aesthetic.
                                </p>
                                <button
                                    className="px-8 py-3 rounded-full bg-orange-500 text-foreground font-semibold hover:bg-orange-600 transition shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                                    Download CV
                                </button>

                                {/* Circular Stats */}
                                <div
                                    className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-foreground/10 mt-8">
                                    <div className="text-center">
                                        <div
                                            className="w-16 h-16 mx-auto rounded-full bg-foreground/5 border border-orange-500/50 flex items-center justify-center text-xl font-bold text-orange-500 mb-2 shadow-[0_0_10px_rgba(249,115,22,0.2)]">98%
                                        </div>
                                        <p className="text-xs text-foreground/60 uppercase">Success Rate</p>
                                    </div>
                                    <div className="text-center">
                                        <div
                                            className="w-16 h-16 mx-auto rounded-full bg-foreground/5 border border-orange-500/50 flex items-center justify-center text-xl font-bold text-orange-500 mb-2 shadow-[0_0_10px_rgba(249,115,22,0.2)]">3
                                        </div>
                                        <p className="text-xs text-foreground/60 uppercase">Happy Clients</p>
                                    </div>
                                    <div className="text-center">
                                        <div
                                            className="w-16 h-16 mx-auto rounded-full bg-foreground/5 border border-orange-500/50 flex items-center justify-center text-xl font-bold text-orange-500 mb-2 shadow-[0_0_10px_rgba(249,115,22,0.2)]">3+
                                        </div>
                                        <p className="text-xs text-foreground/60 uppercase">Projects</p>
                                    </div>
                                    <div className="text-center">
                                        <div
                                            className="w-16 h-16 mx-auto rounded-full bg-foreground/5 border border-orange-500/50 flex items-center justify-center text-xl font-bold text-orange-500 mb-2 shadow-[0_0_10px_rgba(249,115,22,0.2)]">3
                                        </div>
                                        <p className="text-xs text-foreground/60 uppercase">Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Portfolio Section */}
                    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} id="portfolio" className="py-20 container mx-auto px-6">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Portfolio</h2>
                            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-10"></div>

                            {/* Filter Tabs */}
                            <div className="flex flex-wrap justify-center gap-4">
                                <button
                                    className="px-6 py-2 rounded-full bg-orange-500 text-foreground text-sm font-medium transition">All
                                </button>
                                <button
                                    className="px-6 py-2 rounded-full bg-foreground/5 backdrop-blur-md border border-foreground/10 text-foreground/70 hover:bg-foreground/10 text-sm font-medium transition">Web
                                    Design
                                </button>
                            </div>
                        </div>

                        {/* Portfolio Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Item 1 */}
                            {
                                portfolioListing.map((item, index) => (
                                    <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                                        className="group relative rounded-2xl overflow-hidden bg-foreground/5 backdrop-blur-sm border border-foreground/10 p-2 aspect-4/3">
                                        <div className="w-full h-full rounded-xl overflow-hidden relative">
                                            <Image
                                                src={item.image}
                                                alt="Project"
                                                width={100}
                                                height={100}
                                                unoptimized={true}
                                                className="w-full h-full object-fit group-hover:scale-110 transition duration-500" />
                                            <div
                                                className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                                                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                                <a href={item.href}
                                                    target="_blank"
                                                    className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-foreground hover:bg-orange-600">
                                                    &rarr;
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </motion.section>

                    {/* Contact Section */}
                    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} id="contact" className="py-20 container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Me</h2>
                            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
                        </div>

                        <div
                            className="bg-foreground/5 backdrop-blur-lg border border-foreground/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-foreground/60 pl-2">Name</label>
                                        <input type="text"
                                            className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600"
                                            placeholder="Menglong Keo" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-foreground/60 pl-2">Email</label>
                                        <input type="email"
                                            className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600"
                                            placeholder="menglong@example.com" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-foreground/60 pl-2">Phone</label>
                                        <input type="text"
                                            className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600"
                                            placeholder="+855 012 345 678" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-foreground/60 pl-2">Subject</label>
                                        <input type="text"
                                            className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600"
                                            placeholder="Subject Inquiry" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-foreground/60 pl-2">Message</label>
                                    <textarea rows={4}
                                        className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600 resize-none"
                                        placeholder="Tell me about your messages..."></textarea>
                                </div>
                                <div className="text-center pt-4">
                                    <button type="button"
                                        className="px-10 py-3 rounded-full bg-orange-500 text-foreground font-semibold hover:bg-orange-600 transition shadow-[0_0_15px_rgba(249,115,22,0.4)] w-full md:w-auto">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.section>
                </div>
            </div>
        </>
    )
}
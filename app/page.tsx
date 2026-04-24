import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div
                className="bg-gray-950 text-gray-200 font-sans antialiased overflow-x-hidden relative selection:bg-orange-500 selection:text-white min-h-screen">
                {/* Decorative Background Blobs for Glassmorphism Effect */}
                <div
                    className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-600/20 blur-[120px] pointer-events-none z-0"></div>
                <div
                    className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none z-0"></div>
                <div
                    className="fixed top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none z-0"></div>

                {/* Main Content Wrapper */}
                <div className="relative z-10">
                    {/* Navbar */}
                    <header
                        className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 transition-all duration-300">
                        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                            <div className="text-2xl font-bold text-white tracking-widest">
                                JERRY<span className="text-orange-500">.</span>
                            </div>
                            <nav className="hidden md:flex space-x-8 text-sm font-medium">
                                <Link href="#" className="text-orange-500 hover:text-orange-400 transition">Home</Link>
                                <Link href="#" className="hover:text-orange-400 transition">About</Link>
                                <Link href="#" className="hover:text-orange-400 transition">Services</Link>
                                <Link href="#" className="hover:text-orange-400 transition">Portfolio</Link>
                                <Link href="#" className="hover:text-orange-400 transition">Contact</Link>
                            </nav>
                            <button
                                className="px-6 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                                Hire Me
                            </button>
                        </div>
                    </header>

                    {/* Hero Section */}
                    <section className="pt-32 pb-20 container mx-auto px-6 min-h-screen flex flex-col justify-center">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Left Content */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <h3 className="text-lg font-medium text-gray-400 tracking-wide uppercase">Hi, I am
                                    Jerry</h3>
                                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                                    <span
                                        className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">UI/UX</span> Designer
                                </h1>
                                <p className="text-gray-400 leading-relaxed max-w-lg">
                                    I am a professional UI/UX designer with over 5 years of experience building
                                    beautiful and functional digital products. Let&apos;s create something amazing
                                    together.
                                </p>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        className="px-8 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-500/30">
                                        Hire Me
                                    </button>
                                    <button
                                        className="px-8 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold hover:bg-white/10 transition">
                                        Download CV
                                    </button>
                                </div>

                                {/* Glass Stats */}
                                <div className="flex gap-6 pt-8">
                                    <div
                                        className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-center flex-1">
                                        <h4 className="text-2xl font-bold text-orange-500">5+</h4>
                                        <p className="text-xs text-gray-400 uppercase mt-1">Years Exp</p>
                                    </div>
                                    <div
                                        className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-center flex-1">
                                        <h4 className="text-2xl font-bold text-orange-500">120+</h4>
                                        <p className="text-xs text-gray-400 uppercase mt-1">Projects</p>
                                    </div>
                                    <div
                                        className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-center flex-1">
                                        <h4 className="text-2xl font-bold text-orange-500">80+</h4>
                                        <p className="text-xs text-gray-400 uppercase mt-1">Clients</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div
                                    className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-2 bg-linear-to-tr from-orange-500/40 to-transparent backdrop-blur-xl border border-white/10 shadow-2xl">
                                    <div
                                        className="w-full h-full rounded-full overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                                        <Image
                                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Jerry"
                                            width={100}
                                            height={100}
                                            className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition duration-500"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="py-20 container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
                            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Service Card 1 */}
                            <div
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-orange-500/50 transition duration-300 group">
                                <div
                                    className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Creating intuitive, user-centric
                                    interfaces that engage and convert users effectively.</p>
                            </div>
                            {/* Service Card 2 */}
                            <div
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-orange-500/50 transition duration-300 group">
                                <div
                                    className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Web Design</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Building modern, responsive, and
                                    blazing-fast websites tailored to your brand.</p>
                            </div>
                            {/* Service Card 3 */}
                            <div
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-orange-500/50 transition duration-300 group">
                                <div
                                    className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">App Design</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Designing beautiful mobile
                                    application experiences for iOS and Android.</p>
                            </div>
                            {/* Service Card 4 */}
                            <div
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-orange-500/50 transition duration-300 group">
                                <div
                                    className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Branding</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Developing cohesive visual
                                    identities that resonate with your target audience.</p>
                            </div>
                            {/* Service Card 5 */}
                            <div
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-orange-500/50 transition duration-300 group">
                                <div
                                    className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Prototyping</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Building interactive prototypes to
                                    validate ideas before development.</p>
                            </div>
                            {/* Service Card 6 */}
                            <div
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-orange-500/50 transition duration-300 group">
                                <div
                                    className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Consulting</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Providing expert advice to improve
                                    your existing product&apos;s user experience.</p>
                            </div>
                        </div>
                    </section>

                    {/* About Me Section */}
                    <section className="py-20 container mx-auto px-6">
                        <div
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                            {/* Inner glow for this specific container */}
                            <div
                                className="absolute -top-20 -left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]"></div>

                            <div className="w-full md:w-1/3 relative z-10">
                                <div className="rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt="About Jerry"
                                        width={100}
                                        height={100}
                                        className="w-full h-auto grayscale hover:grayscale-0 transition duration-500"/>
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 space-y-6 relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    I am an enthusiastic and detail-oriented UI/UX designer. I have a passion for
                                    solving complex problems and creating simple, elegant, and intuitive designs. With a
                                    strong background in visual design and user psychology, I strive to deliver
                                    experiences that not only look great but also perform exceptionally well.
                                </p>
                                <button
                                    className="px-8 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                                    Download CV
                                </button>

                                {/* Circular Stats */}
                                <div
                                    className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 mt-8">
                                    <div className="text-center">
                                        <div
                                            className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-orange-500/50 flex items-center justify-center text-xl font-bold text-orange-500 mb-2 shadow-[0_0_10px_rgba(249,115,22,0.2)]">98%
                                        </div>
                                        <p className="text-xs text-gray-400 uppercase">Success Rate</p>
                                    </div>
                                    <div className="text-center">
                                        <div
                                            className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-orange-500/50 flex items-center justify-center text-xl font-bold text-orange-500 mb-2 shadow-[0_0_10px_rgba(249,115,22,0.2)]">120
                                        </div>
                                        <p className="text-xs text-gray-400 uppercase">Happy Clients</p>
                                    </div>
                                    <div className="text-center">
                                        <div
                                            className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-orange-500/50 flex items-center justify-center text-xl font-bold text-orange-500 mb-2 shadow-[0_0_10px_rgba(249,115,22,0.2)]">150
                                        </div>
                                        <p className="text-xs text-gray-400 uppercase">Projects</p>
                                    </div>
                                    <div className="text-center">
                                        <div
                                            className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-orange-500/50 flex items-center justify-center text-xl font-bold text-orange-500 mb-2 shadow-[0_0_10px_rgba(249,115,22,0.2)]">15
                                        </div>
                                        <p className="text-xs text-gray-400 uppercase">Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Portfolio Section */}
                    <section className="py-20 container mx-auto px-6">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Portfolio</h2>
                            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-10"></div>

                            {/* Filter Tabs */}
                            <div className="flex flex-wrap justify-center gap-4">
                                <button
                                    className="px-6 py-2 rounded-full bg-orange-500 text-white text-sm font-medium transition">All
                                </button>
                                <button
                                    className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 hover:bg-white/10 text-sm font-medium transition">Web
                                    Design
                                </button>
                                <button
                                    className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 hover:bg-white/10 text-sm font-medium transition">UI/UX
                                    Design
                                </button>
                                <button
                                    className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 hover:bg-white/10 text-sm font-medium transition">App
                                    Design
                                </button>
                            </div>
                        </div>

                        {/* Portfolio Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Item 1 */}
                            <div
                                className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-2 aspect-4/3">
                                <div className="w-full h-full rounded-xl overflow-hidden relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Project"
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"/>
                                    <div
                                        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                                        <h3 className="text-xl font-bold text-white mb-2">Finance App</h3>
                                        <Link href="#"
                                              className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600">
                                            &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div
                                className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-2 aspect-4/3">
                                <div className="w-full h-full rounded-xl overflow-hidden relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Project"
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal"/>
                                    <div
                                        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                                        <h3 className="text-xl font-bold text-white mb-2">Crypto Dashboard</h3>
                                        <Link href="#"
                                              className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600">
                                            &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div
                                className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-2 aspect-4/3">
                                <div className="w-full h-full rounded-xl overflow-hidden relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Project"
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"/>
                                    <div
                                        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                                        <h3 className="text-xl font-bold text-white mb-2">E-Commerce Web</h3>
                                        <Link href="#"
                                              className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600">
                                            &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Item 4 */}
                            <div
                                className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-2 aspect-4/3">
                                <div className="w-full h-full rounded-xl overflow-hidden relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Project"
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal"/>
                                    <div
                                        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                                        <h3 className="text-xl font-bold text-white mb-2">Task Manager</h3>
                                        <Link href="#"
                                              className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600">
                                            &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Item 5 */}
                            <div
                                className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-2 aspect-4/3">
                                <div className="w-full h-full rounded-xl overflow-hidden relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Project"
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"/>
                                    <div
                                        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                                        <h3 className="text-xl font-bold text-white mb-2">Social Platform</h3>
                                        <Link href="#"
                                              className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600">
                                            &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Item 6 */}
                            <div
                                className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-2 aspect-4/3">
                                <div className="w-full h-full rounded-xl overflow-hidden relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Project"
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal"/>
                                    <div
                                        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                                        <h3 className="text-xl font-bold text-white mb-2">Travel App UI</h3>
                                        <Link href="#"
                                              className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600">
                                            &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="py-20 container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Me</h2>
                            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
                        </div>

                        <div
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 pl-2">Name</label>
                                        <input type="text"
                                               className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600"
                                               placeholder="John Doe"/>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 pl-2">Email</label>
                                        <input type="email"
                                               className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600"
                                               placeholder="john@example.com"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 pl-2">Phone</label>
                                        <input type="text"
                                               className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600"
                                               placeholder="+1 234 567 890"/>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 pl-2">Subject</label>
                                        <input type="text"
                                               className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600"
                                               placeholder="Project Inquiry"/>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 pl-2">Message</label>
                                    <textarea rows={4}
                                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600 resize-none"
                                              placeholder="Tell me about your project..."></textarea>
                                </div>
                                <div className="text-center pt-4">
                                    <button type="button"
                                            className="px-10 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition shadow-[0_0_15px_rgba(249,115,22,0.4)] w-full md:w-auto">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>

                    {/* Footer */}
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
                </div>
            </div>
        </>
    );
}

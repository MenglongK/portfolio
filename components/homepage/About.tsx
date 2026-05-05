import { skillsListing } from "@/data/mockData";
import { motion } from "framer-motion";
import Image from "next/image";
import { SiTiktok, SiTelegram, SiFacebook, SiInstagram, SiYoutube, SiGithub } from "@icons-pack/react-simple-icons";


export default function About() {
    const handleDownloadCV = () => {
        const pdfUrl = '/resume.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            {/* Skills Section */}
            <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} id="skills" className="py-20 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills</h2>
                    <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        skillsListing.map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
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
            <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} id="about" className="py-20 container mx-auto px-6">
                <div
                    className="bg-foreground/5 backdrop-blur-xl border border-foreground/10 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
                    <div
                        className="absolute -top-20 -left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]"></div>

                    <div className="w-full max-w-xs md:max-w-sm mx-auto lg:max-w-none lg:w-1/3 relative z-10">
                        <div className="rounded-2xl overflow-hidden border-2 border-foreground/10 shadow-xl">
                            <Image
                                src="/profile.png"
                                alt="About Menglong"
                                width={400}
                                height={400}
                                priority
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
                        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6">
                            <button
                                className="px-8 py-3 rounded-full bg-orange-500 text-foreground font-semibold hover:bg-orange-600 transition shadow-[0_0_15px_rgba(249,115,22,0.4)] whitespace-nowrap">
                                Download CV
                            </button>
                            <div className="flex flex-wrap items-center gap-3">
                                <a href="https://www.facebook.com/menglongkeo07" target="_blank" aria-label="Facebook" className="p-2.5 rounded-full bg-foreground/5 hover:bg-orange-500/20 hover:text-orange-500 hover:border-orange-500/50 transition border border-foreground/10 text-foreground/70"><SiFacebook size={18} /></a>
                                <a href="https://www.instagram.com/menglongkeo" target="_blank" aria-label="Instagram" className="p-2.5 rounded-full bg-foreground/5 hover:bg-orange-500/20 hover:text-orange-500 hover:border-orange-500/50 transition border border-foreground/10 text-foreground/70"><SiInstagram size={18} /></a>
                                <a href="https://www.youtube.com/@GoWithLong" target="_blank" aria-label="Youtube" className="p-2.5 rounded-full bg-foreground/5 hover:bg-orange-500/20 hover:text-orange-500 hover:border-orange-500/50 transition border border-foreground/10 text-foreground/70"><SiYoutube size={18} /></a>
                                <a href="https://www.tiktok.com/@m3ngl0ng" target="_blank" aria-label="TikTok" className="p-2.5 rounded-full bg-foreground/5 hover:bg-orange-500/20 hover:text-orange-500 hover:border-orange-500/50 transition border border-foreground/10 text-foreground/70"><SiTiktok size={18} /></a>
                                <a href="https://t.me/menglongkeo" target="_blank" aria-label="Telegram" className="p-2.5 rounded-full bg-foreground/5 hover:bg-orange-500/20 hover:text-orange-500 hover:border-orange-500/50 transition border border-foreground/10 text-foreground/70"><SiTelegram size={18} /></a>
                                <a href="https://github.com/MenglongK" target="_blank" aria-label="GitHub" className="p-2.5 rounded-full bg-foreground/5 hover:bg-orange-500/20 hover:text-orange-500 hover:border-orange-500/50 transition border border-foreground/10 text-foreground/70"><SiGithub size={18} /></a>
                            </div>
                        </div>
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
        </>
    )
}
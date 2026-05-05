"use client";
import { User, Briefcase, LayoutGrid, GraduationCap, Mail, Share2 } from 'lucide-react';

export default function Page() {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 font-sans text-slate-900">
            <style>{`
                @media print {
                    @page { size: A4; margin: 0; }
                    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                }
            `}</style>
            {/* Side Navigation */}
            <aside className="relative lg:fixed left-0 top-0 h-auto lg:h-screen w-full lg:w-80 border-b lg:border-r border-slate-200 bg-white flex flex-col justify-between py-10 px-8 gap-10 lg:gap-0 print:hidden z-10">
                <div>
                    <div className="mb-12">
                        <div className="w-20 h-20 rounded-xl mb-6 bg-slate-200 overflow-hidden shadow-sm">
                            {/* Replace with your image */}
                            <img src="/api/placeholder/150/150" alt="Alex Rivera" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <h1 className="text-xl font-bold">Alex Rivera</h1>
                        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700 mt-1">Senior Product Designer</p>
                        <p className="text-xs text-slate-500">Product Strategy & Visual Design</p>
                    </div>

                    <nav className="space-y-6">
                        <NavItem href="#summary" icon={<User size={20} />} label="Professional Summary" active />
                        <NavItem href="#experience" icon={<Briefcase size={20} />} label="Work Experience" />
                        <NavItem href="#skills" icon={<LayoutGrid size={20} />} label="Core Skills" />
                        <NavItem href="#education" icon={<GraduationCap size={20} />} label="Education" />
                    </nav>
                </div>

                <div className="space-y-8">
                    <button onClick={() => window.print()} className="w-full bg-slate-900 text-white py-3 rounded-lg text-sm font-bold hover:bg-emerald-700 transition-colors print:hidden">
                        Download Resume
                    </button>
                    <div className="flex flex-col gap-4">
                        <SocialLink icon={<Mail size={16} />} label="Contact" />
                        <SocialLink icon={<Share2 size={16} />} label="LinkedIn" />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 w-full lg:ml-80 bg-white print:ml-0 print:w-full">
                <div className="max-w-[850px] mx-auto px-12 py-20">
                    <header className="mb-16">
                        <h1 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">Alex Rivera</h1>
                        <p className="text-lg text-slate-600 max-w-xl">
                            Senior Product Designer & Systems Architect crafting scalable design foundations for the next generation of enterprise tools.
                        </p>
                        <div className="hidden print:flex items-center gap-6 mt-6">
                            <SocialLink icon={<Mail size={16} />} label="Contact" />
                            <SocialLink icon={<Share2 size={16} />} label="LinkedIn" />
                        </div>
                    </header>

                    <Section id="summary" title="Summary">
                        <p className="text-slate-600 leading-relaxed">
                            A Senior Product Designer and Systems Architect with over 8 years of experience building high-impact digital products. Specialist in creating and scaling complex enterprise design systems that bridge the gap between creative vision and engineering execution.
                        </p>
                    </Section>

                    <hr className="my-10 border-slate-100" />

                    <Section id="experience" title="Experience">
                        <ExperienceItem
                            title="Senior Product Designer"
                            company="TechFlow Systems"
                            date="2021 – Present"
                            points={[
                                "Led the redesign of the core enterprise dashboard, resulting in a 40% increase in daily active user engagement.",
                                "Maintained and expanded a multi-platform design system.",
                                "Collaborated with product leadership to define the three-year visual roadmap."
                            ]}
                        />
                    </Section>
                </div>
            </main>
        </div>
    );
};

// Helper Components
const NavItem = ({ href, icon, label, active = false }: any) => (
    <a href={href} className={`flex items-center gap-3 font-semibold transition-all ${active ? 'text-emerald-700 border-r-2 border-emerald-700' : 'text-slate-500 hover:text-slate-900'}`}>
        {icon} <span>{label}</span>
    </a>
);

const Section = ({ title, children, id }: any) => (
    <section id={id} className="grid grid-cols-1 lg:grid-cols-10 gap-6 print:grid-cols-10">
        <h2 className="lg:col-span-3 print:col-span-3 text-xs font-bold uppercase tracking-widest text-slate-400">{title}</h2>
        <div className="lg:col-span-7 print:col-span-7">{children}</div>
    </section>
);

const ExperienceItem = ({ title, company, date, points }: any) => (
    <div className="relative pl-8 border-l-2 border-slate-100 pb-10">
        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-emerald-700 rounded-full"></div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-1 sm:gap-0 print:flex-row print:items-center print:gap-0">
            <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-xs uppercase tracking-wider text-emerald-700 font-bold">{company}</p>
            </div>
            <span className="text-sm text-slate-500">{date}</span>
        </div>
        <ul className="space-y-3">
            {points.map((p: string, i: number) => (
                <li key={i} className="text-slate-600 text-sm">• {p}</li>
            ))}
        </ul>
    </div>
);

const SocialLink = ({ icon, label }: any) => (
    <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-slate-900 text-xs font-medium">
        {icon} {label}
    </a>
);
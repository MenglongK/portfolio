import {PortfolioType, SkillType} from "@/type/type";
import {SiFigma, SiNextdotjs, SiPostgresql, SiSpringboot} from "@icons-pack/react-simple-icons";

export const skillsListing: SkillType[] = [
    {
        title: "Next.js",
        description: "Developing high-performance, SEO-friendly React applications with server-side rendering and static generation.",
        icon: SiNextdotjs
    },
    {
        title: "Java (Spring Boot)",
        description: "Architecting robust, scalable back-end systems and RESTful APIs using enterprise-grade frameworks.",
        icon: SiSpringboot
    },
    {
        title: "PostgreSQL",
        description: "Designing efficient relational database schemas and managing complex data with reliability and integrity.",
        icon: SiPostgresql
    },
    {
        title: "Figma",
        description: "Crafting high-fidelity interface designs and interactive prototypes to bridge the gap between idea and code.",
        icon: SiFigma
    }
]

export const portfolioListing: PortfolioType[] = [
    {
        title: "CAM-HOTEL",
        image: "/CAM-HOTEL.png",
        href: "https://cam-hotel.menglong.dev"
    },
]
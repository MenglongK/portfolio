import { ComponentType } from "react";
import { LucideProps } from "lucide-react";

export type MenuType = {
    title: string,
    target: string
}

export type SkillType = {
    title: string,
    description: string,
    icon: ComponentType<LucideProps>
}

export type PortfolioType = {
    title: string,
    image: string,
    href: string
}

export type ExperienceType = {
    role: string;
    company: string;
    period: string;
    description: string;
}

export type EducationType = {
    degree: string;
    institution: string;
    period: string;
    description: string;
}

import {ComponentType} from "react";
import {LucideProps} from "lucide-react";

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
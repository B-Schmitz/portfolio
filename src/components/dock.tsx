"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import {BriefcaseIcon, MedalIcon, BookIcon, EnvelopeSimpleIcon} from "@phosphor-icons/react";

export function Dock() {
    return (
        <nav className="fixed top-1/2 left-6 z-50 -translate-y-1/2 flex flex-col gap-2 bg-background/80 border border-border shadow-xl rounded-2xl px-2 py-6 backdrop-blur-md items-center">
            <div className="relative group">
                <Link href="#about" className="dock-btn" aria-label="Sobre">
                    <BookIcon size={24} weight="fill" />
                </Link>
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded bg-foreground text-background text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg">
                  Sobre
                </span>
            </div>
            <div className="relative group">
                <Link href="#projects" className="dock-btn" aria-label="Projetos">
                    <MedalIcon size={24} weight="fill" />
                </Link>
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded bg-foreground text-background text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg">
                  Projetos
                </span>
            </div>
            <div className="relative group">
                <Link href="#experience" className="dock-btn" aria-label="Experiência">
                    <BriefcaseIcon size={24} weight="fill" />
                </Link>
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded bg-foreground text-background text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg">
                  Experiência
                </span>
            </div>
            <div className="relative group">
                <Link href="#contact" className="dock-btn" aria-label="Contato">
                    <EnvelopeSimpleIcon size={24} weight="fill" />
                </Link>
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded bg-foreground text-background text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg">
                  Contato
                </span>
            </div>
            <ThemeToggle />
        </nav>
    );
}

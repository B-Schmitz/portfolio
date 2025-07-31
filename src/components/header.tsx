"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { strings } from "@/lib/strings";
import { cn } from "@/lib/utils";
import { ListIcon } from "@phosphor-icons/react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: strings.nav.about, href: "#about" },
        { name: strings.nav.projects, href: "#projects" },
        { name: strings.nav.experience, href: "#experience" },
    ];

    const NavLinks = ({ inSheet = false }: { inSheet?: boolean }) => (
        <>
            {navItems.map((item) => {
                const link = (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                            inSheet && "block py-2 text-base",
                        )}
                    >
                        {item.name}
                    </Link>
                );

                if (inSheet) {
                    return (
                        <SheetClose key={item.name} asChild>
                            {link}
                        </SheetClose>
                    );
                }

                return link;
            })}
        </>
    );

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-sm border-b border-border"
                    : "bg-transparent",
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/astronauta.png"
                        alt={strings.hero.avatarAlt}
                        width={32}
                        height={32}
                        className="rounded-full"
                        data-ai-hint="astronaut space"
                    />
                    <span className="text-xl font-bold text-foreground">{strings.hero.name}</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex items-center gap-6">
                        <NavLinks />
                    </nav>
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <ListIcon className="h-5 w-5" />
                                <span className="sr-only">Abrir menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <VisuallyHidden>
                                <SheetTitle>Navigation Menu</SheetTitle>
                            </VisuallyHidden>
                            <nav className="flex flex-col gap-4 mt-8">
                                <NavLinks inSheet={true} />
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}

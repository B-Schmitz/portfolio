"use client";

import { motion } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { strings } from "@/lib/strings";
import { LinkIcon } from "@phosphor-icons/react";
import { Typewriter } from "@/components/ui/typewriter";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export function Hero() {
    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
        >
            {/* Efeito de background animado removido */}
            {/* <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-accent/10 animate-[gradient_15s_ease_infinite]"
                    style={{ backgroundSize: "200% 200%" }}
                />
            </div> */}

            <motion.div
                className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4 sm:px-6 lg:px-8 z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="text-center md:text-left max-w-2xl"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-foreground font-headline"
                        variants={itemVariants}
                    >
                        {strings.hero.name}
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-xl md:text-2xl text-primary min-h-[2.5rem]"
                        variants={itemVariants}
                    >
                        <Typewriter
                          prefix="Desenvolvedor "
                          words={["JavaScript", "TypeScript", "Node.js", "React", "Next.js", "Front-end", "Back-end", "Fullstack"]}
                        />
                    </motion.p>
                    <motion.p
                        className="mt-6 text-base md:text-lg text-muted-foreground"
                        variants={itemVariants}
                    >
                        {strings.hero.bio}
                    </motion.p>
                    <motion.div
                        className="mt-8 flex justify-center md:justify-start gap-4"
                        variants={itemVariants}
                    >
                        <Button size="lg" asChild>
                            <a href="#projects">{strings.projects.title}</a>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a
                                href={
                                    "https://drive.google.com/file/d/1hykLXSWL3SRtCLIEnup0ZEGhyYwY7BZO/view"
                                }
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkIcon className="mr-2 h-4 w-4" /> {strings.contact.button}
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

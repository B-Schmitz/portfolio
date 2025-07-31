"use client";

import { motion } from "@/components/motion";
import { data } from "@/lib/data";
import { strings } from "@/lib/strings";
import { BriefcaseIcon, MapPinIcon } from "@phosphor-icons/react";

export function Journey() {
    const experiences = data.experiences.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    return (
        <section id="experience" className="py-24 sm:py-32 overflow-hidden bg-background/80">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold tracking-tight text-foreground font-headline sm:text-5xl">
                        {strings.experience.title}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {strings.experience.subtitle}
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="relative max-w-2xl mx-auto">
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-border/50 -z-10" />

                    <div className="space-y-12">
                        {experiences.map((item) => (
                            <motion.div
                                key={item.id}
                                className="pl-12 relative"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="absolute left-4 top-2 -translate-x-1/2 z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full shadow-lg ring-4 ring-background">
                                    <BriefcaseIcon className="w-4 h-4 text-primary-foreground" />
                                </div>
                                <p className="text-sm text-primary mb-1">{item.duration}</p>
                                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                                <p className="text-md text-muted-foreground flex items-center gap-2">
                                    <MapPinIcon />
                                    {item.company}
                                </p>
                                <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-muted-foreground">
                                    {item.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

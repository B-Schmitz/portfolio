"use client";

import { motion } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { data } from "@/lib/data";
import { strings } from "@/lib/strings";
import { GithubLogoIcon, LinkIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
    return (
        <section id="projects" className="py-24 sm:py-32 bg-background/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold tracking-tight text-foreground font-headline sm:text-5xl">
                        {strings.projects.title}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {strings.projects.subtitle}
                    </p>
                </motion.div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        {data.projects.map((project) => (
                            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                                        <CardHeader>
                                            <div className="aspect-video relative overflow-hidden rounded-t-lg group">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    data-ai-hint={project.imageHint}
                                                />
                                            </div>
                                            <CardTitle className="pt-4">{project.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.techStack.map((tech) => (
                                                    <Badge key={tech} variant="secondary">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <p className="text-muted-foreground text-sm">
                                                {project.description}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="flex flex-wrap items-center gap-2 sm:gap-4">
                                            {project.liveUrl && (
                                                <Button asChild className="flex-1 min-w-[140px]">
                                                    <Link href={project.liveUrl} target="_blank">
                                                        <LinkIcon className="mr-2 h-4 w-4" />
                                                        {strings.projects.viewButton}
                                                    </Link>
                                                </Button>
                                            )}
                                            <Button
                                                variant="outline"
                                                asChild
                                                className="flex-1 min-w-[140px]"
                                            >
                                                {project.githubUrl && (
                                                    <Link href={project.githubUrl} target="_blank">
                                                        <GithubLogoIcon className="mr-2 h-4 w-4" />
                                                        {strings.projects.gitLink}
                                                    </Link>
                                                )}
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}

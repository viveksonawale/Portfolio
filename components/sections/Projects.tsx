"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "AI Audio Transcriber",
        description: "An intelligent audio transcription service powered by Spring Boot and Google Gemini. Features real-time transcription and waveform visualization.",
        tags: ["Spring Boot", "Google Gemini API", "React", "Java", "TailwindCSS"],
        github: "https://github.com/viveksonawale/AI-Audio-Transcriber.git",
        demo: "#",
        image: "/project-audio.png"
    },
    {
        title: "Real-time Chat Application",
        description: "A robust chat platform built with socket programming, enabling instant messaging and real-time user status updates.",
        tags: ["Java", "Socket.IO", "React", "Node.js", "WebSockets"],
        github: "https://github.com/viveksonawale/Chat-Application.git",
        demo: "#",
        image: "/project-chat.png"
    },
    {
        title: "Portfolio Website",
        description: "Modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features AI chatbot and dynamic animations.",
        tags: ["Next.js", "Tailwind", "Framer Motion", "TypeScript", "AI SDK"],
        github: "https://github.com/viveksonawale/Portfolio",
        demo: "#",
        image: "/project-portfolio.png"
    },
];

export function Projects() {
    return (
        <section id="projects" className="pb-10">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    <div className="mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-['Times_New_Roman',_serif] text-foreground">my projects.</h1>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="h-full"
                            >
                                <Card className="h-full bg-card/50 hover:bg-card border-border/50 transition-all duration-300 hover:shadow-lg flex flex-col overflow-hidden group">
                                    <div className="relative h-48 w-full bg-muted/50 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <CardHeader>
                                        <div className="flex justify-between items-start gap-4">
                                            <CardTitle className="text-xl font-bold font-serif">{project.title}</CardTitle>
                                            <div className="flex gap-2 shrink-0">
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" asChild>
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                                        <Github className="w-4 h-4" />
                                                    </a>
                                                </Button>
                                                {project.demo !== "#" && (
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" asChild>
                                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                                                            <ExternalLink className="w-4 h-4" />
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow space-y-4">
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-secondary/50 text-secondary-foreground border border-border/50">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

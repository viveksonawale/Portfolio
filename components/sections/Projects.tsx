"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
        image: "/ai_audio_transcriber_project.png"
    },
    {
        title: "Real-time Chat Application",
        description: "A robust chat platform built with socket programming, enabling instant messaging and real-time user status updates.",
        tags: ["Java", "Socket.IO", "React", "Node.js", "WebSockets"],
        github: "https://github.com/viveksonawale/Chat-Application.git",
        demo: "#",
        image: "/project-placeholder.jpg"
    },
    {
        title: "Portfolio Website",
        description: "Modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features AI chatbot and dynamic animations.",
        tags: ["Next.js", "Tailwind", "Framer Motion", "TypeScript", "AI SDK"],
        github: "https://github.com/viveksonawale/Portfolio",
        demo: "#",
        image: "/project-placeholder.jpg" // You might want to take a screenshot of this site later
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-10">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12 max-w-4xl mx-auto"
                >
                    <div className="space-y-4 mb-12">
                        <h1 className="text-4xl font-bold tracking-tight text-left pl-5" style={{ fontFamily: '"Times New Roman", Times, serif' }}>my projects.</h1>
                    </div>

                    <div className="grid gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-card/50 hover:bg-card border-border/50 transition-colors">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                            <h3 className="text-2xl font-bold hover:text-primary transition-colors font-serif">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                                        <Github className="w-4 h-4" />
                                                    </a>
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/50">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center pt-8">
                        <Button variant="secondary" size="lg" asChild>
                            <a href="/projects">View All Projects</a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

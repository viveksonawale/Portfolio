"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "FileCon",
        description: "A versatile file converter application supporting various formats including PDF, DOCX, JPG, and PNG. Features drag-and-drop functionality and dark mode.",
        tags: ["React", "Next.js", "File Processing", "TailwindCSS"],
        github: "https://github.com/viveksonawale/FileCon.git",
        demo: "https://file-con.vercel.app/",
        image: "/projects/filecon.png",
        status: "working"
    },
    {
        title: "Ai Resume Builder",
        description: "An interactive resume builder helping users create professional resumes with ease. Customizable templates and real-time preview.",
        tags: ["Spring Boot", "Next.js", "OpenAI"],
        github: "https://github.com/viveksonawale/ResuMax.git",
        demo: "https://resustack-ai.vercel.app/",
        image: "/projects/resume-builder.png",
        status: "working"
    },
    {
        title: "AI Audio Transcriber",
        description: "An intelligent audio transcription service powered by Spring Boot and Google Gemini. Features real-time transcription and waveform visualization.",
        tags: ["Spring Boot", "Google Gemini API", "React", "Java", "TailwindCSS"],
        github: "https://github.com/viveksonawale/AI-Audio-Transcriber.git",
        demo: "#",
        image: "/project-audio.png",
        status: "completed"
    },
];

export function FeaturedProjects() {
    return (
        <section id="featured-projects" className="py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-['Times_New_Roman',_serif] text-foreground">featured projects.</h2>
                    <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                        view more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
                            <Card className="h-full bg-card/50 hover:bg-card border-border/50 transition-all duration-300 hover:shadow-lg flex flex-col p-4 rounded-xl group">
                                <Link href={project.demo !== "#" ? project.demo : project.github} target="_blank" className="block cursor-pointer">
                                    <div className="relative aspect-video w-full bg-muted/50 overflow-hidden rounded-lg mb-4 border border-border/50">
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full bg-secondary/20 text-muted-foreground">
                                                <span>Coming Soon</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-xl font-bold font-serif group-hover:text-primary transition-colors">{project.title}</h3>
                                            {project.status === "working" && (
                                                <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 whitespace-nowrap shrink-0">
                                                    Working On
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </Link>
                                <div className="mt-auto space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground border border-border/50 font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3 w-full">
                                        <Button variant="outline" size="sm" className="flex-1 gap-2 text-xs h-9" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-3.5 h-3.5" />
                                                View Source
                                            </a>
                                        </Button>
                                        <Button size="sm" className="flex-1 gap-2 text-xs h-9" asChild>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-3.5 h-3.5" />
                                                Visit Website
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

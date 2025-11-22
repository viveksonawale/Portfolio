"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
        tags: ["Java", "Spring Boot", "React", "MySQL"],
        github: "https://github.com/viveksonawale", /* REPLACE_ME_PROJECT_LINK */
        demo: "#",
        image: "/project-1.jpg", // Placeholder
    },
    {
        title: "Task Management API",
        description: "RESTful API for task management with JWT authentication and role-based access.",
        tags: ["Java", "Spring Security", "PostgreSQL"],
        github: "https://github.com/viveksonawale", /* REPLACE_ME_PROJECT_LINK */
        demo: "#",
        image: "/project-2.jpg", // Placeholder
    },
    {
        title: "Portfolio Website",
        description: "Modern portfolio website built with Next.js and Tailwind CSS.",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        github: "https://github.com/viveksonawale", /* REPLACE_ME_PROJECT_LINK */
        demo: "#",
        image: "/project-3.jpg", // Placeholder
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-serif">my projects.</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A selection of my recent work.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50">
                                    <div className="relative h-48 w-full bg-muted overflow-hidden">
                                        {/* Placeholder for project image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/30">
                                            <span className="text-sm">Project Screenshot</span>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription className="text-base">
                                            {project.description}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter className="gap-4">
                                        <Button variant="outline" size="sm" className="gap-2" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4" />
                                                Code
                                            </a>
                                        </Button>
                                        <Button size="sm" className="gap-2" asChild>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4" />
                                                Demo
                                            </a>
                                        </Button>
                                    </CardFooter>
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

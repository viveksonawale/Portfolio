"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
    {
        title: "TT4D",
        description: "Generate winning combinations, view past results, and analyze lottery trends all in one place",
        tags: ["BS4", "Docker", "FastAPI", "Fly.io", "NextJS", "PostgreSQL", "Python", "TailwindCSS"],
        github: "https://github.com/viveksonawale",
        demo: "#",
        image: "/project-placeholder.jpg" // You'll need to add real images
    },
    {
        title: "Tradingview Telegram Alerts",
        description: "Real-time trading alerts with chart snapshots sent to Telegram, designed to keep traders informed and responsive to market changes",
        tags: ["Docker", "FastAPI", "Fly.io", "Python", "Selenium", "Telegram Bot API"],
        github: "https://github.com/viveksonawale",
        demo: "#",
        image: "/project-placeholder.jpg"
    }
];

export function FeaturedProjects() {
    return (
        <section id="featured-projects" className="py-10">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold tracking-tight font-serif text-foreground">featured projects</h2>
                    <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                        view more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredProjects.map((project, index) => (
                        <Card key={index} className="flex flex-col h-full border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300 overflow-hidden group">
                            <div className="relative h-48 w-full bg-muted/50 overflow-hidden">
                                {/* Placeholder for project image - replace with actual images */}
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 bg-secondary/20">
                                    [Project Image]
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-4">
                                <CardDescription className="text-base leading-relaxed">
                                    {project.description}
                                </CardDescription>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium border border-border/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="gap-3 pt-0">
                                <Button variant="outline" size="sm" className="gap-2 h-8" asChild>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-3 h-3" />
                                        Website
                                    </a>
                                </Button>
                                <Button variant="outline" size="sm" className="gap-2 h-8" asChild>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-3 h-3" />
                                        Source
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

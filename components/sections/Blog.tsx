"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
    {
        title: "My Quest for the Most Cost-Effective AI Tools",
        date: "November 16, 2025",
        readTime: "7 min read",
        excerpt: "A personal journey of testing and comparing free, cheap, and value-oriented AI tools.",
        tags: ["Agentic AI", "Developer-Tools", "Coding Assistant"],
        slug: "#",
    },
    {
        title: "Making TACOS: Ted's AI Chatbot & Obsidian Sync",
        date: "October 21, 2025",
        readTime: "6 min read",
        excerpt: "From Obsidian sync to a full RAG-powered chatbot. The journey of building my own custom backend.",
        tags: ["AI-Chatbot", "Obsidian", "Sync"],
        slug: "#",
    },
    {
        title: "This blog post was written with Obsidian",
        date: "September 14, 2025",
        readTime: "3 min read",
        excerpt: "I migrated my blog posts from being committed in GitHub to a fully self-hosted Obsidian LiveSync setup.",
        tags: ["FastAPI", "Obsidian", "CouchDB"],
        slug: "#",
    },
];

export function Blog() {
    return (
        <section id="blog" className="py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-['Times_New_Roman',_serif]">my blog.</h2>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                            view all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid gap-6">
                        {posts.map((post, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-card/50 hover:bg-card border-border/50 transition-all duration-300 hover:shadow-lg">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                            <div className="space-y-2">
                                                <h3 className="text-xl font-bold hover:text-primary transition-colors font-serif">
                                                    <Link href={post.slug}>{post.title}</Link>
                                                </h3>
                                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                                    <span>{post.date}</span>
                                                    <span>•</span>
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-secondary/50 text-secondary-foreground border border-border/50">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

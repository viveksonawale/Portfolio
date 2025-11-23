"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Post } from "@/lib/blog";

interface BlogListProps {
    posts: Post[];
}

export function BlogList({ posts }: BlogListProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-12 max-w-4xl mx-auto"
        >
            <div className="space-y-4 mt-4 mb-12">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-left pl-5 font-['Times_New_Roman',_serif]">my blog.</h1>
            </div>

            <div className="grid gap-6">
                {posts.map((post, index) => (
                    <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <Card className="bg-card/50 hover:bg-card border-border/50 transition-colors">
                            <CardContent className="p-6 space-y-4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <h3 className="text-2xl font-bold hover:text-primary transition-colors font-serif">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground whitespace-nowrap">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="pt-2">
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4">
                                        Read more <ArrowRight className="ml-1 w-4 h-4" />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

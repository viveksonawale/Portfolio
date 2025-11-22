import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Header />
            <div className="container mx-auto px-4 md:px-6 py-32 max-w-4xl flex-grow">
                <div className="space-y-4 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight font-serif">my blog.</h1>
                    <p className="text-muted-foreground text-lg">
                        Thoughts on software engineering, AI, and building things.
                    </p>
                </div>

                <div className="grid gap-6">
                    {posts.map((post) => (
                        <Card key={post.slug} className="bg-card/50 hover:bg-card border-border/50 transition-colors">
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
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}

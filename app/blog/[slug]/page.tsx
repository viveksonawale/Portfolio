import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Header />
            <article className="container mx-auto px-4 md:px-6 py-32 max-w-3xl">
                <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
                </Link>

                <header className="mb-12 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-serif text-foreground leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {post.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/50">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="prose prose-slate dark:prose-invert max-w-none prose-lg prose-headings:font-serif prose-a:text-primary hover:prose-a:text-primary/80">
                    <MDXRemote source={post.content} />
                </div>
            </article>
            <Footer />
        </main>
    );
}

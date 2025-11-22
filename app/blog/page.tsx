import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogList } from "@/components/sections/BlogList";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Header />
            <div className="container mx-auto px-4 md:px-6 py-24 pb-32 max-w-4xl flex-grow">
                <BlogList posts={posts} />
            </div>
            <Footer />
        </main>
    );
}

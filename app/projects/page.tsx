import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Projects } from "@/components/sections/Projects";

export default function ProjectsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Header />
            <div className="pt-20">
                <Projects />
            </div>
            <Footer />
        </main>
    );
}

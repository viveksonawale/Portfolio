import { Footer } from "@/components/layout/Footer";
import { Projects } from "@/components/sections/Projects";

export default function ProjectsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <div className="pt-4 md:pt-24 pb-24">
                <Projects />
            </div>
            <Footer />
        </main>
    );
}

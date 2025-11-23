import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <div className="container mx-auto px-4 md:px-6 pt-4 md:pt-24 pb-32 max-w-4xl flex-grow">
                <Contact />
            </div>
            <Footer />
        </main>
    );
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Header />
            <div className="pt-20">
                <Contact />
            </div>
            <Footer />
        </main>
    );
}

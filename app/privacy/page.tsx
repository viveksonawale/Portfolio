import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Header />
            <div className="container mx-auto px-4 md:px-6 py-32 max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight font-serif mb-8">Privacy Policy</h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
                    <p>
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <p>
                        This Privacy Policy describes how Vivek Ramesh Sonawale ("I", "me", or "my") collects, uses, and discloses your information when you use my portfolio website.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Information Collection</h2>
                    <p>
                        I collect minimal information to provide a better experience. This includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Contact Form Data:</strong> When you send a message via the contact form, the information you provide (Name, Email, Message) is processed by Formspree to deliver the email to me. I do not store this data on my own servers.
                        </li>
                        <li>
                            <strong>Chatbot Interactions:</strong> Interactions with the "Ted Support" chatbot are processed by OpenAI/Vercel AI SDK. These conversations are not permanently stored by me but may be processed by the AI provider.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> I may use basic analytics to understand how visitors interact with the site. This data is anonymized.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
                    <p>
                        This website uses local storage to remember your theme preference (light/dark mode). No tracking cookies are used for advertising purposes.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Services</h2>
                    <p>
                        I use the following third-party services:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Vercel:</strong> For hosting the website.</li>
                        <li><strong>Formspree:</strong> For contact form processing.</li>
                        <li><strong>OpenAI:</strong> For the chatbot functionality.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Contact Me</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact me at: <a href="mailto:viveksonawale@example.com" className="text-primary hover:underline">viveksonawale@example.com</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}

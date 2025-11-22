import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border/50 py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-muted/20 -z-10" />
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center gap-8 text-center">

                <div className="flex flex-col items-center gap-4">
                    <span className="text-3xl font-bold font-serif tracking-tight">VS</span>
                    <p className="text-muted-foreground max-w-md">
                        Building digital experiences with passion and precision.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href="https://github.com/viveksonawale" /* REPLACE_ME_GITHUB */
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/vivek-sonawale" /* REPLACE_ME_LINKEDIN */
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                        href="mailto:vivek+portfolio@example.com" /* REPLACE_ME_EMAIL */
                        className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </Link>
                </div>

                <div className="pt-8 border-t border-border/30 w-full max-w-xs mx-auto">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Vivek Ramesh Sonawale. <br />
                        Built with Next.js & Tailwind.
                    </p>
                </div>
            </div>
        </footer>
    );
}

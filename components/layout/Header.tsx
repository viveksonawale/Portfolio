"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
    { name: "home", href: "/" },
    { name: "projects", href: "/projects" },
    { name: "blog", href: "/blog" },
    { name: "contact", href: "/contact" },
];

export function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Desktop Floating Nav */}
            <header className="hidden md:flex fixed top-6 left-0 right-0 mx-auto max-w-3xl z-50 items-center justify-center transition-all duration-300">
                <nav className="flex items-center gap-2 bg-black/20 dark:bg-white/5 backdrop-blur-2xl border border-white/10 dark:border-white/10 rounded-full px-2 py-2 shadow-2xl supports-[backdrop-filter]:bg-black/20">
                    <div className="flex items-center px-2 gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "relative px-5 py-2 text-base font-medium transition-colors lowercase rounded-full",
                                        isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-nav"
                                            className="absolute inset-0 bg-primary rounded-full shadow-md"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-2 pr-2">
                        <div className="w-px h-6 bg-white/10 mx-1" />
                        <ThemeToggle />
                    </div>
                </nav>
            </header>

            {/* Mobile Header (Simplified) */}
            <header className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
                <ThemeToggle />
                <button
                    className="text-foreground p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-[65px] left-0 right-0 bg-background border-b border-border md:hidden shadow-lg z-40"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 lowercase"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Home, Folder, FileText, Mail } from "lucide-react";

const navItems = [
    { name: "home", href: "/", icon: Home },
    { name: "projects", href: "/projects", icon: Folder },
    { name: "blog", href: "/blog", icon: FileText },
    { name: "contact", href: "/contact", icon: Mail },
];

export function Header() {
    const pathname = usePathname();

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed z-50 left-0 right-0 mx-auto transition-all duration-300 
            bottom-6 md:bottom-auto md:top-6 
            max-w-[90%] md:max-w-3xl flex justify-center"
        >
            <nav className="flex items-center gap-2 bg-black/20 dark:bg-white/5 backdrop-blur-2xl border border-white/10 dark:border-white/10 rounded-full px-2 py-2 shadow-2xl supports-[backdrop-filter]:bg-black/20">
                <div className="flex items-center px-2 gap-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative px-4 md:px-5 py-2 text-sm md:text-base font-medium transition-colors lowercase rounded-full flex items-center gap-2",
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
                                <span className="relative z-10 hidden md:inline">{item.name}</span>
                                <span className="relative z-10 md:hidden">
                                    <item.icon className="w-5 h-5" />
                                </span>
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2 pr-2">
                    <div className="w-px h-6 bg-white/10 mx-1" />
                    <ThemeToggle />
                </div>
            </nav>
        </motion.header>
    );
}

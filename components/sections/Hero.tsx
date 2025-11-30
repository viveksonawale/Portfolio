"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { m, Variants } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { DraggableStack } from "@/components/ui/draggable-stack";

export function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const waveVariants: Variants = {
        hidden: { rotate: 0 },
        visible: {
            rotate: [0, 14, -8, 14, -4, 10, 0],
            transition: {
                duration: 1,
                delay: 0.8, // Wait for text to appear
                ease: "easeInOut",
                repeat: 0,
            },
        },
    };

    return (
        <section className="pt-24 pb-0 md:pt-32 md:pb-0">
            <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 max-w-3xl">

                {/* Left Column: Text */}
                <m.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex-[2] flex flex-col items-center md:items-start text-center md:text-left space-y-6 will-change-transform"
                >
                    <div className="space-y-3">
                        <m.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                            hi vivek here. <m.span variants={waveVariants} className="inline-block origin-[70%_70%]">👋</m.span>
                        </m.h1>
                        <m.p variants={itemVariants} className="text-lg md:text-xl text-foreground">
                            20 yo software engineer from India 🇮🇳
                        </m.p>
                        <m.p variants={itemVariants} className="text-lg md:text-xl text-foreground max-w-md leading-relaxed">
                            <span className="relative inline-block font-semibold text-primary/90">
                                Backend
                                <m.span
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                                    className="absolute left-0 bottom-0 h-[2px] bg-primary"
                                />
                            </span>
                            {" "}at core,{" "}
                            <span className="relative inline-block font-semibold text-primary/90">
                                DevOps
                                <m.span
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                                    className="absolute left-0 bottom-0 h-[2px] bg-primary"
                                />
                            </span>
                            {" "}throughout. I design, build, and self-host the entire ecosystem end to end.
                        </m.p>
                    </div>

                    <m.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-3">
                        <m.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Button
                                variant="default"
                                size="sm"
                                className="gap-2 rounded-lg px-6 py-5 text-base font-medium transition-all duration-300 border border-transparent hover:border-blue-500/50 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6),0_0_40px_rgba(59,130,246,0.4)]"
                                asChild
                            >
                                <a href="https://drive.google.com/file/d/14R-4oDCANATzdSPCstGOkPqw8zecR22j/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    Resume
                                    <FileText className="w-5 h-5" />
                                </a>
                            </Button>
                        </m.div>

                        <m.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Button variant="ghost" size="icon" className="rounded-lg hover:bg-primary/10 hover:text-primary h-12 w-12 transition-all duration-300" asChild>
                                <a href="https://www.linkedin.com/in/vivek-sonawale" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </Button>
                        </m.div>

                        <m.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Button variant="ghost" size="icon" className="rounded-lg hover:bg-primary/10 hover:text-primary h-12 w-12 transition-all duration-300" asChild>
                                <a href="https://github.com/viveksonawale" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <Github className="w-6 h-6" />
                                </a>
                            </Button>
                        </m.div>

                        <m.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Button variant="ghost" size="icon" className="rounded-lg hover:bg-primary/10 hover:text-primary h-12 w-12 transition-all duration-300" asChild>
                                <a href="mailto:sonawalevivek777@gmail.com" aria-label="Email">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </Button>
                        </m.div>
                    </m.div>
                </m.div>

                {/* Right Column: Portrait */}
                <div
                    className="flex-[1] flex justify-center relative max-w-[200px] md:max-w-[250px]"
                >
                    <DraggableStack />
                </div>
            </div>
        </section>
    );
}

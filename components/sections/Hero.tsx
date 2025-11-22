"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { DraggableStack } from "@/components/ui/draggable-stack";

export function Hero() {
    return (
        <section className="pt-24 pb-0 md:pt-32 md:pb-0">
            <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 max-w-3xl">

                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-[2] flex flex-col items-center md:items-start text-center md:text-left space-y-6"
                >
                    <div className="space-y-3">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-foreground">
                            hi vivek here. <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground">
                            20 yo software engineer from India 🇮🇳
                        </p>
                        <p className="text-lg md:text-xl text-foreground max-w-md leading-relaxed">
                            Backend logic, frontend polish, DevOps automation — I run the whole circuit.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Button variant="default" size="sm" className="gap-2 rounded-lg px-6 py-5 text-base font-medium shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-3px_rgba(255,255,255,0.5)] transition-all duration-300" asChild>
                                <a href="https://drive.google.com/file/d/14R-4oDCANATzdSPCstGOkPqw8zecR22j/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    Resume
                                    <FileText className="w-5 h-5" />
                                </a>
                            </Button>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Button variant="ghost" size="icon" className="rounded-lg hover:bg-primary/10 hover:text-primary h-12 w-12 transition-all duration-300" asChild>
                                <a href="https://www.linkedin.com/in/vivek-sonawale" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </Button>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Button variant="ghost" size="icon" className="rounded-lg hover:bg-primary/10 hover:text-primary h-12 w-12 transition-all duration-300" asChild>
                                <a href="https://github.com/viveksonawale" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <Github className="w-6 h-6" />
                                </a>
                            </Button>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Button variant="ghost" size="icon" className="rounded-lg hover:bg-primary/10 hover:text-primary h-12 w-12 transition-all duration-300" asChild>
                                <a href="mailto:sonawalevivek777@gmail.com" aria-label="Email">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column: Portrait */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-[1] flex justify-center relative max-w-[200px] md:max-w-[250px]"
                >
                    <DraggableStack />
                </motion.div>
            </div>
        </section>
    );
}

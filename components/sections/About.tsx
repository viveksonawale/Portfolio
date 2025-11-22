"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                    </div>

                    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                        <CardContent className="p-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I am a passionate <strong>Java Full Stack Developer</strong> with a strong foundation in building scalable backend systems and intuitive user interfaces. With expertise in <strong>Java, Spring Boot, and React</strong>, I enjoy bridging the gap between complex server-side logic and seamless client-side experiences.
                            </p>
                            <p>
                                My journey involves solving real-world problems through code, optimizing performance, and adhering to clean architecture principles. Whether it's designing a RESTful API, optimizing database queries, or crafting a responsive UI, I am driven by the challenge of creating efficient and robust software solutions.
                            </p>
                            <p>
                                When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest trends in software development.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}

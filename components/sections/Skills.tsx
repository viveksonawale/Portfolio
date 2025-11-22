"use client";

import { motion } from "framer-motion";

const skills = [
    "Java",
    "Spring Boot",
    "MySQL",
    "Thymeleaf",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Docker",
    "Git",
    "REST APIs",
    "Microservices",
    "Algorithms",
    "System Design",
];

export function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technical Skills</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A collection of technologies and tools I work with to build robust applications.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                className="px-6 py-3 bg-secondary/50 hover:bg-primary/10 hover:text-primary border border-border rounded-full text-sm font-medium transition-colors cursor-default"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

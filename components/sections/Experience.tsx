"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Calendar, Code, Video, Book } from "lucide-react";

const workExperience = [
    {
        role: "Java Developer Intern",
        company: "Software Development Internship", // Updated from placeholder
        period: "Jun 2025 - Jul 2025",
        description: [
            "Completed internship with hands-on experience in Spring Boot and Hibernate.",
            "Collaborated on backend development tasks and learned enterprise application structure.",
        ],
    },
    {
        role: "Video Editor",
        company: "Ouradrop",
        period: "Jan 2024 - Mar 2024",
        description: [
            "Handled 3 clients for content creation and video editing.",
            "Delivered high-quality video content meeting client specifications.",
        ],
    },
];

const education = [
    {
        school: "Datta Megha College of Engineering",
        degree: "B.Tech in Computer Engineering",
        period: "Sep 2024 - Dec 2027 (Ongoing)",
        icon: "degree",
        description: [
            "Pursuing Bachelor of Technology in Computer Engineering.",
        ],
    },
    {
        school: "Polytechnic",
        degree: "Diploma in Information Technology",
        period: "Jan 2021 - Jun 2024",
        grade: "90%",
        board: "MSBTE",
        icon: "diploma",
        description: [
            "Completed Diploma with 90% aggregate.",
            "Maharashtra State Board of Technical Education (MSBTE).",
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <Tabs defaultValue="work" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-secondary/20 p-1 rounded-t-lg border-x border-t border-border/50">
                            <TabsTrigger value="work" className="data-[state=active]:bg-secondary/40">Work</TabsTrigger>
                            <TabsTrigger value="education" className="data-[state=active]:bg-secondary/40">Education</TabsTrigger>
                        </TabsList>

                        <div className="border border-border/50 bg-card/30 rounded-b-lg p-6 md:p-8 relative overflow-hidden">
                            <TabsContent value="work" className="space-y-12 relative mt-0">
                                {/* Vertical Line */}
                                <div className="absolute left-[28px] top-2 bottom-2 w-px bg-border/50" />

                                {workExperience.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-20"
                                    >
                                        {/* Logo/Icon on Line */}
                                        <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                                            {index === 0 ? (
                                                <Code className="w-7 h-7 text-primary" />
                                            ) : (
                                                <Video className="w-7 h-7 text-primary" />
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                                <span className="text-base text-muted-foreground">{item.period}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-foreground">{item.company}</h3>
                                            <p className="text-lg text-muted-foreground">{item.role}</p>

                                            <ul className="space-y-2 list-disc pl-4 text-muted-foreground/80 text-base leading-relaxed pt-2">
                                                {item.description.map((desc, i) => (
                                                    <li key={i}>{desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </TabsContent>

                            <TabsContent value="education" className="space-y-12 relative mt-0">
                                {/* Vertical Line */}
                                <div className="absolute left-[28px] top-2 bottom-2 w-px bg-border/50" />

                                {education.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-20"
                                    >
                                        {/* Logo/Icon on Line */}
                                        <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                                            {/* @ts-ignore */}
                                            {item.icon === "degree" ? (
                                                <GraduationCap className="w-7 h-7 text-primary" />
                                            ) : (
                                                <Book className="w-7 h-7 text-primary" />
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                                <span className="text-base text-muted-foreground">{item.period}</span>
                                                {/* @ts-ignore */}
                                                {item.grade && (
                                                    <span className="text-sm font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                        {/* @ts-ignore */}
                                                        Grade: {item.grade}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-2xl font-bold text-foreground">{item.school}</h3>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <p className="text-lg text-muted-foreground">{item.degree}</p>
                                                {/* @ts-ignore */}
                                                {item.board && (
                                                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                                                        {/* @ts-ignore */}
                                                        {item.board}
                                                    </span>
                                                )}
                                            </div>

                                            <ul className="space-y-2 list-disc pl-4 text-muted-foreground/80 text-base leading-relaxed pt-2">
                                                {item.description.map((desc, i) => (
                                                    <li key={i}>{desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </TabsContent>
                        </div>
                    </Tabs>
                </motion.div>
            </div>
        </section>
    );
}

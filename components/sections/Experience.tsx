"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const workExperience = [
    {
        role: "Java Developer Intern",
        company: "Tech Company Inc.", // Placeholder if company name wasn't specified, user said "java developer intership"
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
    {
        role: "Java Full Stack Developer",
        company: "Tech Company Inc.",
        period: "Jul 2023 - Present",
        description: [
            "Developed the Java backend for a bank account servicing process with multiple channel integrations.",
            "Built a custom database migration tool using Python and MariaDB.",
        ],
    },
    {
        role: "Software Developer (Contract)",
        company: "Singapore Institute of Technology",
        period: "Apr 2023 - Jun 2023",
        description: [
            "Built NFTVue, a NFT gallery website allowing students to connect crypto wallets.",
            "Worked on DemoConstruct, a full-stack web application using Meshroom.",
        ],
    },
    {
        role: "Software Developer (Intern)",
        company: "DBS Bank",
        period: "May 2022 - Dec 2022",
        description: [
            "Worked on the backend for the digital exchange and asset custody application using Spring Boot.",
        ],
    },
];

const education = [
    {
        school: "Datta Megha College of Engineering",
        degree: "B.Tech in Computer Engineering",
        period: "Sep 2024 - Dec 2027 (Ongoing)",
        logo: "/dmce-logo.png",
        description: [
            "Pursuing Bachelor of Technology in Computer Engineering.",
        ],
    },
    {
        school: "Polytechnic", // User didn't specify college name for diploma, just "Diploma in information technology" and "MSBTE"
        degree: "Diploma in Information Technology",
        period: "Jan 2021 - Jun 2024",
        grade: "90%",
        board: "MSBTE",
        description: [
            "Completed Diploma with 90% aggregate.",
            "Maharashtra State Board of Technical Education (MSBTE).",
        ],
    },
    {
        school: "Digipen Institute of Technology Singapore",
        degree: "BS in Computer Science in Real-Time Interactive Simulation",
        period: "Sep 2019 - Apr 2023",
        description: [
            "Graduated with a Minor in Mathematics",
            "President of Digipen Student Management Committee",
            "3-time recipient of the Dean's Honor List",
        ],
    },
    {
        school: "Singapore Polytechnic",
        degree: "Diploma in Games Design and Development",
        period: "Apr 2014 - May 2017",
        description: [
            "Final Year Project",
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
                                        <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center z-10">
                                            <Briefcase className="w-6 h-6 text-primary" />
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
                                        <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center z-10 overflow-hidden">
                                            {/* @ts-ignore */}
                                            {item.logo ? (
                                                /* @ts-ignore */
                                                <img src={item.logo} alt={item.school} className="w-full h-full object-cover" />
                                            ) : (
                                                <GraduationCap className="w-6 h-6 text-primary" />
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

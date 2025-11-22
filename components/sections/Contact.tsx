"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", { /* REPLACE_ME_FORMSPREE_ID */
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    }

    return (
        <section id="contact" className="py-12 mb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-muted/20 -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-background via-transparent to-background -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-2xl mx-auto"
                >

                    <Card className="border-border/50 bg-card/80 backdrop-blur-md shadow-xl overflow-hidden">
                        <CardContent className="p-0">
                            <div className="grid md:grid-cols-5 h-full">
                                {/* Decorative Side Panel (Hidden on mobile) */}
                                <div className="hidden md:flex md:col-span-2 bg-primary/5 flex-col justify-between p-8 border-r border-border/50">
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-xl">Contact Info</h3>
                                        <p className="text-sm text-muted-foreground">Feel free to reach out directly.</p>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center">
                                                <Send className="w-4 h-4 text-primary" />
                                            </div>
                                            <span>Mumbai, India</span>
                                        </div>
                                        {/* Add more contact info here if needed */}
                                    </div>
                                </div>

                                {/* Form Section */}
                                <div className="md:col-span-3 p-8">
                                    {status === "success" ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col items-center justify-center h-full py-10 text-center space-y-4"
                                        >
                                            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                                                <CheckCircle className="w-10 h-10 text-green-500" />
                                            </div>
                                            <h3 className="text-2xl font-bold">Message Sent!</h3>
                                            <p className="text-muted-foreground">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                            <Button onClick={() => setStatus("idle")} variant="outline" className="mt-4">Send another</Button>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    required
                                                    className="bg-background/50 focus:bg-background transition-colors"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    required
                                                    className="bg-background/50 focus:bg-background transition-colors"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    placeholder="How can I help you?"
                                                    className="min-h-[150px] bg-background/50 focus:bg-background transition-colors resize-none"
                                                    required
                                                />
                                            </div>

                                            {status === "error" && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-md"
                                                >
                                                    <AlertCircle className="w-4 h-4" />
                                                    <span>Something went wrong. Please try again later.</span>
                                                </motion.div>
                                            )}

                                            <Button
                                                type="submit"
                                                className="w-full gap-2 h-11 text-base font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
                                                disabled={status === "submitting"}
                                            >
                                                {status === "submitting" ? (
                                                    <>Sending...</>
                                                ) : (
                                                    <>Send Message <Send className="w-4 h-4" /></>
                                                )}
                                            </Button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}

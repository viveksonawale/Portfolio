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
        data.append("access_key", "0813cf06-ad6a-4e15-b1e1-10f6b5770cee");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                form.reset();
            } else {
                console.error("Web3Forms error:", result);
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    }

    return (
        <section id="contact">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* <div className="mb-12 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-serif mb-4">get in touch.</h2>
                        <p className="text-muted-foreground text-lg">
                            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                        </p>
                    </div> */}
                    <div className="space-y-4 mt-4 mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-left pl-5 font-['Times_New_Roman',_serif]">contact me.</h1>
                    </div>

                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6 md:p-8">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-10 text-center space-y-4"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                                        <CheckCircle className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                                    <p className="text-muted-foreground">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                    <Button onClick={() => setStatus("idle")} variant="outline" className="mt-4">Send another</Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Your Name"
                                                required
                                                className="bg-background/50"
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
                                                className="bg-background/50"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="How can I help you?"
                                            className="min-h-[150px] bg-background/50 resize-none"
                                            required
                                        />
                                    </div>

                                    {status === "error" && (
                                        <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-md">
                                            <AlertCircle className="w-4 h-4" />
                                            <span>Something went wrong. Please try again later.</span>
                                        </div>
                                    )}

                                    <div className="flex justify-end">
                                        <Button
                                            type="submit"
                                            className="w-full md:w-auto gap-2"
                                            disabled={status === "submitting"}
                                        >
                                            {status === "submitting" ? (
                                                <>Sending...</>
                                            ) : (
                                                <>Send Message <Send className="w-4 h-4" /></>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}

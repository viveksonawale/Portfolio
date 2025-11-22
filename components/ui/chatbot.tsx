"use client";

import { useChat } from "ai/react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-4 z-50 w-[95vw] max-w-[450px] sm:right-8"
                    >
                        <Card className="shadow-2xl border-primary/20 h-[600px] flex flex-col backdrop-blur-xl bg-background/95">
                            <CardHeader className="bg-primary/5 border-b p-5 flex flex-row items-center justify-between space-y-0">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-primary/10 rounded-full">
                                        <Bot className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg font-semibold">Vivek Support</CardTitle>
                                        <p className="text-sm text-muted-foreground">Ask me about Vivek!</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setIsOpen(false)}>
                                    <X className="w-5 h-5" />
                                </Button>
                            </CardHeader>

                            <CardContent className="flex-1 overflow-y-auto p-5 space-y-4">
                                {messages.length === 0 && (
                                    <div className="text-center text-base text-muted-foreground mt-12 space-y-2">
                                        <p className="text-2xl">👋</p>
                                        <p className="font-medium">Hi! I'm an AI assistant.</p>
                                        <p>Ask me anything about Vivek's work, skills, or experience.</p>
                                    </div>
                                )}

                                {messages.map((m) => (
                                    <div
                                        key={m.id}
                                        className={cn(
                                            "flex w-max max-w-[85%] flex-col gap-2 rounded-xl px-4 py-3 text-base leading-relaxed",
                                            m.role === "user"
                                                ? "ml-auto bg-primary text-primary-foreground shadow-md"
                                                : "bg-muted shadow-sm"
                                        )}
                                    >
                                        {m.content}
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex w-max max-w-[85%] flex-col gap-2 rounded-xl px-4 py-3 text-base bg-muted shadow-sm">
                                        <span className="flex items-center gap-2">
                                            <span className="animate-pulse">●</span>
                                            <span className="animate-pulse animation-delay-200">●</span>
                                            <span className="animate-pulse animation-delay-400">●</span>
                                        </span>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </CardContent>

                            <CardFooter className="p-4 border-t bg-background/50">
                                <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                                    <Input
                                        value={input}
                                        onChange={handleInputChange}
                                        placeholder="Type a message..."
                                        className="flex-1 h-11 text-base"
                                    />
                                    <Button type="submit" size="icon" disabled={isLoading} className="h-11 w-11">
                                        <Send className="w-5 h-5" />
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] sm:bottom-8 sm:right-8"
            >
                {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
                <span className="sr-only">Toggle Chat</span>
            </motion.button>
        </>
    );
}

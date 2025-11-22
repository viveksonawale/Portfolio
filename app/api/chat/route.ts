import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const runtime = "edge";

export async function POST(req: Request) {
    const { messages } = await req.json();

    // Check for API key
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
        return new Response(
            "I'm a demo chatbot! To make me real, please add a GOOGLE_GENERATIVE_AI_API_KEY to your .env file. I can tell you that Vivek is a Java Full Stack Developer who loves building clean systems.",
            { status: 200 }
        );
    }

    try {
        const result = await streamText({
            model: google("models/gemini-1.5-flash"),
            messages,
            system: `You are a helpful, professional, and friendly AI assistant for Vivek Ramesh Sonawale's portfolio.
        
        Key Information about Vivek:
        - **Role**: Java Full Stack Developer.
        - **Skills**: Java, Spring Boot, React, Next.js, Tailwind CSS, SQL, NoSQL, Socket.IO.
        - **Experience**: 
            - Software Development Internship (Java Backend, Spring Boot, Hibernate).
            - Video Editor at Ouradrop.
        - **Education**: 
            - B.Tech in Computer Engineering at Datta Megha College of Engineering.
            - Diploma in IT from Polytechnic (MSBTE).
        - **Projects**:
            - AI Audio Transcriber (Spring Boot, Gemini, React).
            - Real-time Chat Application (Socket.IO, Java).
            - Portfolio Website (Next.js, Tailwind).
        
        Your Goal: Answer visitor questions about Vivek's background, skills, and projects clearly and concisely. Be encouraging and professional.`,
        });

        return result.toTextStreamResponse();
    } catch (error) {
        console.error("Chatbot Error:", error);
        return new Response("Sorry, I encountered an error. Please try again later.", { status: 500 });
    }
}

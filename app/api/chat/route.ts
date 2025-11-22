import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

export const runtime = "edge";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "mock-key",
});

export async function POST(req: Request) {
    const { messages } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
        return new Response(
            "I'm a demo chatbot! To make me real, please add an OPENAI_API_KEY to your .env file. I can tell you that Vivek is a Java Full Stack Developer who loves building clean systems.",
            { status: 200 }
        );
    }

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        stream: true,
        messages: [
            {
                role: "system",
                content: `You are a helpful assistant for Vivek Ramesh Sonawale's portfolio website.
    
    About Vivek:
    - Role: Java Full Stack Developer
    - Skills: Java, Spring Boot, React, Next.js, Tailwind CSS, SQL, NoSQL.
    - Experience: Tech Company Inc. (Java Backend), Singapore Institute of Technology (NFTVue), DBS Bank (Backend Intern).
    - Education: Digipen Institute of Technology (BS in CS), Singapore Polytechnic (Game Design).
    - Location: Singapore (based on education/experience context).
    
    Tone: Professional, friendly, and concise.
    Goal: Answer questions about Vivek's skills, experience, and projects based on the portfolio content.`,
            },
            ...messages,
        ],
    });

    const stream = OpenAIStream(response as any);
    return new StreamingTextResponse(stream);
}

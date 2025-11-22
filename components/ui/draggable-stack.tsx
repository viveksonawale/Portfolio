"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

const initialCards = [
    { id: 1, img: "/me-1.jpg" },
    { id: 2, img: "/me-2.jpg" },
    { id: 3, img: "/me-1.jpg" }, // Repeating for stack effect
];

export function DraggableStack() {
    const [cards, setCards] = useState(initialCards);

    const removeCard = (index: number) => {
        setCards((prev) => {
            const newCards = [...prev];
            const removed = newCards.splice(index, 1)[0];
            newCards.unshift(removed); // Move to back
            return newCards;
        });
    };

    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Decorative background elements to match reference */}
            <div className="absolute inset-0 bg-secondary/30 rounded-3xl rotate-6 scale-105 z-0" />
            <div className="absolute inset-0 bg-secondary/60 rounded-3xl -rotate-3 scale-105 z-0" />

            <div className="relative w-full h-full z-10">
                {cards.map((card, index) => {
                    const isTop = index === cards.length - 1;
                    return (
                        <Card
                            key={card.id + "-" + index} // Unique key
                            src={card.img}
                            index={index}
                            isTop={isTop}
                            onRemove={() => removeCard(index)}
                            total={cards.length}
                        />
                    );
                })}
            </div>
        </div>
    );
}

function Card({
    src,
    index,
    isTop,
    onRemove,
    total,
}: {
    src: string;
    index: number;
    isTop: boolean;
    onRemove: () => void;
    total: number;
}) {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-150, 150], [-18, 18]);
    const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

    const handleDragEnd = () => {
        if (Math.abs(x.get()) > 100) {
            onRemove();
        }
    };

    return (
        <motion.div
            style={{
                x: isTop ? x : 0,
                rotate: isTop ? rotate : (index - total + 1) * 2, // Stack rotation effect
                zIndex: index,
                opacity: isTop ? opacity : 1 - (total - 1 - index) * 0.1,
                scale: isTop ? 1 : 1 - (total - 1 - index) * 0.05,
            }}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted cursor-grab active:cursor-grabbing"
            whileTap={{ cursor: "grabbing" }}
        >
            <Image
                src={src}
                alt="Vivek Ramesh Sonawale"
                fill
                className="object-cover object-top pointer-events-none" // Prevent native drag
                priority={isTop}
            />
        </motion.div>
    );
}

"use client";

import { useState, useEffect } from "react";
import { m, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

// Use 4 cards to ensure smooth cycling without repetition
const initialCards = [
    { id: 1, img: "/me-2.jpg" },
    { id: 2, img: "/me-1.jpg" },
    { id: 3, img: "/me-2.jpg" },
    { id: 4, img: "/me-1.jpg" },
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
            <div className="relative w-full h-full z-10">
                {cards.map((card, index) => {
                    const isTop = index === cards.length - 1;
                    return (
                        <Card
                            key={card.id} // Stable key based on ID
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

    // Reset position when card is no longer top (recycled)
    useEffect(() => {
        if (!isTop) {
            x.set(0);
        }
    }, [isTop, x]);

    const handleDragEnd = () => {
        if (Math.abs(x.get()) > 100) {
            onRemove();
        }
    };

    // Calculate fan positions
    const offset = total - 1 - index; // 0 = top, 1 = 2nd, 2 = 3rd

    let baseRotate = 0;
    let baseX = 0;
    let baseScale = 1;

    if (offset === 1) {
        baseRotate = -12; // Left tilt
        baseX = -35; // Left peek
        baseScale = 0.95;
    } else if (offset === 2) {
        baseRotate = 12; // Right tilt
        baseX = 35; // Right peek
        baseScale = 0.9;
    }

    return (
        <m.div
            initial={{ x: 50, opacity: 0, rotate: 5 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.15 + 0.2, // Staggered delay
            }}
            className="absolute inset-0"
            style={{ zIndex: index }}
        >
            <m.div
                style={{
                    x: isTop ? x : baseX,
                    rotate: isTop ? rotate : baseRotate,
                    zIndex: index,
                    opacity: isTop ? opacity : 1,
                    scale: isTop ? 1 : baseScale,
                }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted cursor-grab active:cursor-grabbing will-change-transform"
                whileTap={{ cursor: "grabbing" }}
            >
                <Image
                    src={src}
                    alt="Vivek Ramesh Sonawale"
                    fill
                    className="object-cover object-top pointer-events-none" // Prevent native drag
                    priority={isTop}
                />
            </m.div>
        </m.div>
    );
}

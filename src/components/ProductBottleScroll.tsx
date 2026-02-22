"use client";

import React, { useRef, useEffect } from "react";
import { useScroll, motion } from "framer-motion";

interface ProductBottleScrollProps {
    folderPath: string;
}

export default function ProductBottleScroll({ folderPath }: ProductBottleScrollProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // This hook tracks scroll progress in the whole window. We'll refine it in the parent
    // using useScroll with a container ref if we want section-specific scrolling.
    // Using global page scroll for a standard scrollytelling effect.
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const frameCount = 80;
        const images: HTMLImageElement[] = [];

        // Preload images
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            const idxStr = i.toString().padStart(3, "0");
            // Using correct naming pattern observed in folder
            img.src = `${folderPath}/d4f3e0e8-af24-46fc-8089-4e028f717dd7_${idxStr}.jpg`;
            images.push(img);
        }

        const updateImage = (index: number) => {
            if (images[index] && images[index].complete) {
                requestAnimationFrame(() => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
                });
            }
        };

        // Draw the first image initially when it's loaded
        images[0].onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
        };

        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const frameIndex = Math.floor(latest * (frameCount - 1));
            updateImage(frameIndex);
        });

        return () => unsubscribe();
    }, [folderPath, scrollYProgress]);

    return (
        <div className="sticky top-0 w-full h-[100dvh] flex justify-center items-center overflow-hidden pointer-events-none z-10">
            <motion.canvas
                ref={canvasRef}
                width={1080}
                height={1080}
                className="w-full h-full object-cover mix-blend-multiply drop-shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />
        </div>
    );
}

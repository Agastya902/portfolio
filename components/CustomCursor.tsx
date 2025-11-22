"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only enable on devices with fine pointer (mouse)
        if (window.matchMedia("(pointer: fine)").matches) {
            setIsVisible(true);
            document.body.style.cursor = "none";
        }

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", updateMousePosition);

        // Add listeners to clickable elements
        const clickables = document.querySelectorAll("a, button, [role='button']");
        clickables.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            clickables.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
            document.body.style.cursor = "auto";
        };
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-cyber-green rounded-full pointer-events-none z-[100] mix-blend-difference"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                scale: isHovering ? 1.5 : 1,
                backgroundColor: isHovering ? "rgba(0, 255, 159, 0.2)" : "transparent",
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
            }}
        >
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyber-green rounded-full -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
    );
}

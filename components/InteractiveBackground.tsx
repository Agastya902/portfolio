"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.scrollHeight; // Full content height, not just viewport
            } else {
                canvas.width = window.innerWidth;
                canvas.height = document.documentElement.scrollHeight;
            }
            initParticles();
        };

        const initParticles = () => {
            const particles: Particle[] = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 8000); // More particles

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.8, // Increased movement speed
                    vy: (Math.random() - 0.5) * 0.8,
                    radius: Math.random() * 2 + 1.5, // Bigger particles (1.5-3.5px)
                });
            }

            particlesRef.current = particles;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top + window.scrollY
            };
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Animation loop
        const animate = () => {
            ctx.fillStyle = "rgba(2, 6, 23, 0.08)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;
            const particles = particlesRef.current;

            particles.forEach((particle, i) => {
                // Mouse interaction
                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const distToMouse = Math.sqrt(dx * dx + dy * dy);

                if (distToMouse < 200) {
                    const force = (200 - distToMouse) / 200;
                    particle.vx -= (dx / distToMouse) * force * 0.3;
                    particle.vy -= (dy / distToMouse) * force * 0.3;
                }

                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Damping
                particle.vx *= 0.96;
                particle.vy *= 0.96;

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Draw connections to nearby particles
                particles.slice(i + 1).forEach((otherParticle) => {
                    const dx = otherParticle.x - particle.x;
                    const dy = otherParticle.y - particle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 150;

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.25; // More visible lines

                        ctx.strokeStyle = `rgba(0, 255, 159, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();

                        // Glow near mouse
                        if (distToMouse < 150) {
                            const glowOpacity = opacity * ((150 - distToMouse) / 150) * 0.6;
                            ctx.strokeStyle = `rgba(0, 255, 159, ${glowOpacity})`;
                            ctx.lineWidth = 1.5;
                            ctx.shadowBlur = 10;
                            ctx.shadowColor = "rgba(0, 255, 159, 0.5)";
                            ctx.beginPath();
                            ctx.moveTo(particle.x, particle.y);
                            ctx.lineTo(otherParticle.x, otherParticle.y);
                            ctx.stroke();
                            ctx.shadowBlur = 0;
                        }
                    }
                });

                // Draw particle
                const isNearMouse = distToMouse < 150;
                const particleOpacity = isNearMouse ? 0.8 : 0.5;

                ctx.fillStyle = `rgba(0, 255, 159, ${particleOpacity})`;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fill();

                // Glow on nearby particles
                if (isNearMouse) {
                    const glowIntensity = (150 - distToMouse) / 150;
                    ctx.shadowBlur = 12 * glowIntensity;
                    ctx.shadowColor = `rgba(0, 255, 159, ${glowIntensity * 0.7})`;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.radius + 1, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{ background: "transparent" }}
        />
    );
}

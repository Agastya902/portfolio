"use client";

import { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    connections: number[];
}

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const nodesRef = useRef<Node[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Initialize neural network nodes
        const nodeCount = 45;
        const nodes: Node[] = [];

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4, // Moderate velocity
                vy: (Math.random() - 0.5) * 0.4,
                connections: [],
            });
        }

        // Create connections between nearby nodes
        nodes.forEach((node, i) => {
            nodes.forEach((other, j) => {
                if (i !== j) {
                    const dx = node.x - other.x;
                    const dy = node.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 180 && node.connections.length < 4) {
                        node.connections.push(j);
                    }
                }
            });
        });

        nodesRef.current = nodes;

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Animation loop
        let pulseTime = 0;
        const animate = () => {
            pulseTime += 0.02;
            ctx.fillStyle = "rgba(2, 6, 23, 0.08)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;
            const pulse = Math.sin(pulseTime) * 0.5 + 0.5; // 0 to 1 pulsing

            nodesRef.current.forEach((node, i) => {
                // Mouse interaction - attraction and repulsion
                const dx = mouse.x - node.x;
                const dy = mouse.y - node.y;
                const distToMouse = Math.sqrt(dx * dx + dy * dy);

                if (distToMouse < 300) {
                    const force = (300 - distToMouse) / 300;
                    // Repel from mouse
                    node.vx -= (dx / distToMouse) * force * 0.3;
                    node.vy -= (dy / distToMouse) * force * 0.3;
                }

                // Update position
                node.x += node.vx;
                node.y += node.vy;

                // Moderate damping
                node.vx *= 0.96;
                node.vy *= 0.96;

                // Boundaries with bounce
                if (node.x < 0 || node.x > canvas.width) {
                    node.vx *= -1;
                    node.x = Math.max(0, Math.min(canvas.width, node.x));
                }
                if (node.y < 0 || node.y > canvas.height) {
                    node.vy *= -1;
                    node.y = Math.max(0, Math.min(canvas.height, node.y));
                }

                // Draw connections with cyberpunk glow
                node.connections.forEach((connectedIndex) => {
                    const other = nodesRef.current[connectedIndex];
                    const dx = other.x - node.x;
                    const dy = other.y - node.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 220) {
                        const opacity = 1 - distance / 220;
                        const isNearMouse = distToMouse < 250;

                        // Base connection
                        ctx.strokeStyle = `rgba(0, 255, 159, ${opacity * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();

                        // Cyberpunk glow effect near mouse
                        if (isNearMouse) {
                            const glowIntensity = (250 - distToMouse) / 250;
                            ctx.strokeStyle = `rgba(0, 255, 159, ${opacity * glowIntensity * 0.6})`;
                            ctx.lineWidth = 2;
                            ctx.shadowBlur = 15;
                            ctx.shadowColor = `rgba(0, 255, 159, ${glowIntensity * 0.8})`;
                            ctx.beginPath();
                            ctx.moveTo(node.x, node.y);
                            ctx.lineTo(other.x, other.y);
                            ctx.stroke();
                            ctx.shadowBlur = 0;
                        }
                    }
                });

                // Draw node with pulsing effect
                const isNearMouse = distToMouse < 250;
                const nodeSize = isNearMouse ? 5 + pulse : 3 + pulse * 0.5;
                const nodeOpacity = isNearMouse ? 0.9 : 0.5;

                ctx.fillStyle = `rgba(0, 255, 159, ${nodeOpacity})`;
                ctx.beginPath();
                ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
                ctx.fill();

                // Enhanced glow for nodes near mouse
                if (isNearMouse) {
                    const glowIntensity = (250 - distToMouse) / 250;
                    ctx.shadowBlur = 20 * glowIntensity;
                    ctx.shadowColor = `rgba(0, 255, 159, ${glowIntensity})`;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
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

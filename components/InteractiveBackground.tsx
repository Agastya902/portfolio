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
        const nodeCount = 40; // Reduced for less clutter
        const nodes: Node[] = [];

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.2, // Reduced velocity for stability
                vy: (Math.random() - 0.5) * 0.2,
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
                    if (distance < 200 && node.connections.length < 4) { // Increased connection distance
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
        const animate = () => {
            ctx.fillStyle = "rgba(2, 6, 23, 0.05)"; // Lighter fade for trails
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;

            nodesRef.current.forEach((node, i) => {
                // Mouse repulsion - reduced force
                const dx = mouse.x - node.x;
                const dy = mouse.y - node.y;
                const distToMouse = Math.sqrt(dx * dx + dy * dy);

                if (distToMouse < 250) {
                    const force = (250 - distToMouse) / 250;
                    node.vx -= (dx / distToMouse) * force * 0.15; // Reduced repulsion
                    node.vy -= (dy / distToMouse) * force * 0.15;
                }

                // Update position
                node.x += node.vx;
                node.y += node.vy;

                // Damping - increased for more stability
                node.vx *= 0.98;
                node.vy *= 0.98;

                // Boundaries with bounce
                if (node.x < 0 || node.x > canvas.width) {
                    node.vx *= -1;
                    node.x = Math.max(0, Math.min(canvas.width, node.x));
                }
                if (node.y < 0 || node.y > canvas.height) {
                    node.vy *= -1;
                    node.y = Math.max(0, Math.min(canvas.height, node.y));
                }

                // Draw connections - lighter
                node.connections.forEach((connectedIndex) => {
                    const other = nodesRef.current[connectedIndex];
                    const dx = other.x - node.x;
                    const dy = other.y - node.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 250) {
                        const opacity = 1 - distance / 250;
                        ctx.strokeStyle = `rgba(0, 255, 159, ${opacity * 0.15})`; // Much lighter
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();

                        // Glow effect on active connections near mouse - lighter
                        if (distToMouse < 200) {
                            ctx.strokeStyle = `rgba(0, 255, 159, ${opacity * 0.25})`; // Reduced glow
                            ctx.lineWidth = 1.5;
                            ctx.shadowBlur = 8;
                            ctx.shadowColor = "rgba(0, 255, 159, 0.3)";
                            ctx.beginPath();
                            ctx.moveTo(node.x, node.y);
                            ctx.lineTo(other.x, other.y);
                            ctx.stroke();
                            ctx.shadowBlur = 0;
                        }
                    }
                });

                // Draw node - bigger
                const nodeSize = distToMouse < 200 ? 5 : 3; // Bigger nodes
                ctx.fillStyle = distToMouse < 200 ? "rgba(0, 255, 159, 0.8)" : "rgba(0, 255, 159, 0.4)"; // Lighter
                ctx.beginPath();
                ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
                ctx.fill();

                if (distToMouse < 200) {
                    ctx.shadowBlur = 12;
                    ctx.shadowColor = "rgba(0, 255, 159, 0.5)";
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
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: "transparent" }}
        />
    );
}

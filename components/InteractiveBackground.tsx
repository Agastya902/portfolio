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
        const nodeCount = 50;
        const nodes: Node[] = [];

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
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
                    if (distance < 150 && node.connections.length < 3) {
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
            ctx.fillStyle = "rgba(2, 6, 23, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;

            nodesRef.current.forEach((node, i) => {
                // Mouse repulsion
                const dx = mouse.x - node.x;
                const dy = mouse.y - node.y;
                const distToMouse = Math.sqrt(dx * dx + dy * dy);

                if (distToMouse < 200) {
                    const force = (200 - distToMouse) / 200;
                    node.vx -= (dx / distToMouse) * force * 0.5;
                    node.vy -= (dy / distToMouse) * force * 0.5;
                }

                // Update position
                node.x += node.vx;
                node.y += node.vy;

                // Damping
                node.vx *= 0.95;
                node.vy *= 0.95;

                // Boundaries with bounce
                if (node.x < 0 || node.x > canvas.width) {
                    node.vx *= -1;
                    node.x = Math.max(0, Math.min(canvas.width, node.x));
                }
                if (node.y < 0 || node.y > canvas.height) {
                    node.vy *= -1;
                    node.y = Math.max(0, Math.min(canvas.height, node.y));
                }

                // Draw connections
                node.connections.forEach((connectedIndex) => {
                    const other = nodesRef.current[connectedIndex];
                    const dx = other.x - node.x;
                    const dy = other.y - node.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 200) {
                        const opacity = 1 - distance / 200;
                        ctx.strokeStyle = `rgba(0, 255, 159, ${opacity * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();

                        // Glow effect on active connections near mouse
                        if (distToMouse < 150) {
                            ctx.strokeStyle = `rgba(0, 255, 159, ${opacity * 0.6})`;
                            ctx.lineWidth = 2;
                            ctx.shadowBlur = 10;
                            ctx.shadowColor = "rgba(0, 255, 159, 0.8)";
                            ctx.beginPath();
                            ctx.moveTo(node.x, node.y);
                            ctx.lineTo(other.x, other.y);
                            ctx.stroke();
                            ctx.shadowBlur = 0;
                        }
                    }
                });

                // Draw node
                const nodeSize = distToMouse < 150 ? 4 : 2;
                ctx.fillStyle = distToMouse < 150 ? "#00ff9f" : "rgba(0, 255, 159, 0.6)";
                ctx.beginPath();
                ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
                ctx.fill();

                if (distToMouse < 150) {
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = "#00ff9f";
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

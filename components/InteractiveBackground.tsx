"use client";

import { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseX: number;
    baseY: number;
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

        // Initialize nodes
        const nodeCount = 50;
        const nodes: Node[] = [];

        for (let i = 0; i < nodeCount; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            nodes.push({
                x,
                y,
                baseX: x,
                baseY: y,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                connections: [],
            });
        }

        // Create connections
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

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Animation
        let time = 0;
        const animate = () => {
            time += 0.01;
            ctx.fillStyle = "rgba(2, 6, 23, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;

            nodesRef.current.forEach((node, i) => {
                // Strong mouse interaction
                const dx = mouse.x - node.x;
                const dy = mouse.y - node.y;
                const distToMouse = Math.sqrt(dx * dx + dy * dy);

                // Attraction to base position
                const dxBase = node.baseX - node.x;
                const dyBase = node.baseY - node.y;
                node.vx += dxBase * 0.01;
                node.vy += dyBase * 0.01;

                // Mouse repulsion
                if (distToMouse < 200) {
                    const force = (200 - distToMouse) / 200;
                    node.vx -= (dx / distToMouse) * force * 2;
                    node.vy -= (dy / distToMouse) * force * 2;
                }

                // Subtle wave motion
                node.vx += Math.sin(time + i * 0.1) * 0.02;
                node.vy += Math.cos(time + i * 0.1) * 0.02;

                // Update position
                node.x += node.vx;
                node.y += node.vy;

                // Damping
                node.vx *= 0.94;
                node.vy *= 0.94;

                // Draw connections with dynamic opacity
                node.connections.forEach((connectedIndex) => {
                    const other = nodesRef.current[connectedIndex];
                    const dx = other.x - node.x;
                    const dy = other.y - node.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 180) {
                        const opacity = 1 - distance / 180;
                        const isActive = distToMouse < 200;

                        // Base line
                        ctx.strokeStyle = `rgba(0, 255, 159, ${opacity * 0.25})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();

                        // Glow on hover
                        if (isActive) {
                            const intensity = (200 - distToMouse) / 200;
                            ctx.strokeStyle = `rgba(0, 255, 159, ${opacity * intensity * 0.8})`;
                            ctx.lineWidth = 2;
                            ctx.shadowBlur = 20;
                            ctx.shadowColor = `rgba(0, 255, 159, ${intensity})`;
                            ctx.beginPath();
                            ctx.moveTo(node.x, node.y);
                            ctx.lineTo(other.x, other.y);
                            ctx.stroke();
                            ctx.shadowBlur = 0;
                        }
                    }
                });

                // Draw nodes with pulsing
                const pulse = Math.sin(time * 2 + i * 0.5) * 0.3 + 0.7;
                const isActive = distToMouse < 200;
                const size = isActive ? 4 + pulse : 2.5 + pulse * 0.5;
                const nodeOpacity = isActive ? 0.95 : 0.6;

                ctx.fillStyle = `rgba(0, 255, 159, ${nodeOpacity * pulse})`;
                ctx.beginPath();
                ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
                ctx.fill();

                // Enhanced glow
                if (isActive) {
                    const intensity = (200 - distToMouse) / 200;
                    ctx.shadowBlur = 25 * intensity;
                    ctx.shadowColor = `rgba(0, 255, 159, ${intensity})`;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, size + 2, 0, Math.PI * 2);
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

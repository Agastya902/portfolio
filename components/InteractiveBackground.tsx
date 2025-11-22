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

        // Initialize nodes with even distribution
        const cols = 12;
        const rows = 8;
        const nodeCount = cols * rows;
        const nodes: Node[] = [];

        const spacingX = canvas.width / (cols + 1);
        const spacingY = canvas.height / (rows + 1);

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                // Add some random offset for natural look
                const offsetX = (Math.random() - 0.5) * spacingX * 0.3;
                const offsetY = (Math.random() - 0.5) * spacingY * 0.3;

                nodes.push({
                    x: (col + 1) * spacingX + offsetX,
                    y: (row + 1) * spacingY + offsetY,
                    vx: (Math.random() - 0.5) * 0.2, // Very subtle velocity
                    vy: (Math.random() - 0.5) * 0.2,
                    connections: [],
                });
            }
        }

        // Create connections
        nodes.forEach((node, i) => {
            nodes.forEach((other, j) => {
                if (i !== j) {
                    const dx = node.x - other.x;
                    const dy = node.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 180 && node.connections.length < 3) {
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

        // Animation loop
        let pulseTime = 0;
        const animate = () => {
            pulseTime += 0.015;
            ctx.fillStyle = "rgba(2, 6, 23, 0.08)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;
            const pulse = Math.sin(pulseTime) * 0.5 + 0.5;

            nodesRef.current.forEach((node, i) => {
                // Very subtle mouse interaction
                const dx = mouse.x - node.x;
                const dy = mouse.y - node.y;
                const distToMouse = Math.sqrt(dx * dx + dy * dy);

                if (distToMouse < 250) {
                    const force = (250 - distToMouse) / 250;
                    node.vx -= (dx / distToMouse) * force * 0.2; // Subtle repulsion
                    node.vy -= (dy / distToMouse) * force * 0.2;
                }

                // Update position
                node.x += node.vx;
                node.y += node.vy;

                // Strong damping for minimal movement
                node.vx *= 0.97;
                node.vy *= 0.97;

                // Soft boundaries
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

                    if (distance < 220) {
                        const opacity = 1 - distance / 220;
                        const isNearMouse = distToMouse < 200;

                        // Base connection
                        ctx.strokeStyle = `rgba(0, 255, 159, ${opacity * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();

                        // Subtle glow on hover
                        if (isNearMouse) {
                            const glowIntensity = (200 - distToMouse) / 200;
                            ctx.strokeStyle = `rgba(0, 255, 159, ${opacity * glowIntensity * 0.5})`;
                            ctx.lineWidth = 1.5;
                            ctx.shadowBlur = 12;
                            ctx.shadowColor = `rgba(0, 255, 159, ${glowIntensity * 0.6})`;
                            ctx.beginPath();
                            ctx.moveTo(node.x, node.y);
                            ctx.lineTo(other.x, other.y);
                            ctx.stroke();
                            ctx.shadowBlur = 0;
                        }
                    }
                });

                // Draw nodes
                const isNearMouse = distToMouse < 200;
                const nodeSize = isNearMouse ? 4 + pulse * 0.5 : 2.5 + pulse * 0.3;
                const nodeOpacity = isNearMouse ? 0.85 : 0.5;

                ctx.fillStyle = `rgba(0, 255, 159, ${nodeOpacity})`;
                ctx.beginPath();
                ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
                ctx.fill();

                // Subtle glow for nodes near mouse
                if (isNearMouse) {
                    const glowIntensity = (200 - distToMouse) / 200;
                    ctx.shadowBlur = 15 * glowIntensity;
                    ctx.shadowColor = `rgba(0, 255, 159, ${glowIntensity * 0.7})`;
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

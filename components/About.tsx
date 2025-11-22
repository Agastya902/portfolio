"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ArrowRight, Box, User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
    return (
        <section id="about" className="scroll-mt-24">
            <ScrollReveal>
                <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-cyber-green via-emerald-400 to-cyan-500 max-w-4xl mx-auto">
                    <div className="bg-cyber-black/40 backdrop-blur-sm rounded-[23px] p-8 md:p-10 overflow-hidden relative">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="grid md:grid-cols-[240px_1fr] gap-8 relative z-10 items-start">
                            {/* Left Column - Photo & Stats */}
                            <div className="space-y-6">
                                {/* Profile Image */}
                                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 group">
                                    {/* Replace src with your actual photo path */}
                                    <img
                                        src="/placeholder-profile.jpg"
                                        alt="Agastya"
                                        className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 to-transparent opacity-40" />
                                </div>

                                {/* Current Role */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-green/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-1.5 rounded-lg bg-cyber-green/10 text-cyber-green">
                                            <Briefcase className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-[10px] text-cyber-green font-mono uppercase tracking-wider">Current Role</span>
                                    </div>
                                    <div className="font-bold text-white text-sm">Computer Vision Intern</div>
                                    <div className="text-xs text-gray-400">Playar Inc.</div>
                                </div>

                                {/* Education */}
                                <div className="flex items-start gap-3 px-2">
                                    <div className="p-1.5 rounded-lg bg-white/5 text-gray-300">
                                        <GraduationCap className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-0.5">Education</div>
                                        <div className="font-bold text-white text-sm">B.S. Math-CS</div>
                                        <div className="text-xs text-gray-400">UC San Diego</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Intro */}
                            <div className="space-y-6 pt-2">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                                        Hello, I'm <span className="text-cyber-green">Agastya</span>
                                    </h2>
                                    <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                                        <p>
                                            I am a Computer Vision Engineer at UCSD, decoding the visual world through algorithms.
                                            My work bridges the gap between mathematical theory and real-world perception.
                                        </p>
                                        <p>
                                            I build intelligent systems that see, understand, and interact with their environment,
                                            focusing on real-time inference and 3D reconstruction.
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <a href="#projects" className="inline-flex items-center gap-2 text-cyber-green hover:text-emerald-400 transition-colors font-medium text-sm group/link">
                                        See my projects
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}

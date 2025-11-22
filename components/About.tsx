"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ArrowRight, Box, User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
    return (
        <section id="about" className="scroll-mt-24">
            <ScrollReveal>
                {/* Removed the opaque gradient wrapper, using a subtle border instead */}
                <div className="relative max-w-4xl mx-auto rounded-[23px] border border-white/10 bg-cyber-black/20 backdrop-blur-sm overflow-hidden group transition-all duration-500 hover:border-cyber-green/30">

                    {/* Subtle top gradient line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent opacity-50" />

                    {/* Background Glow - reduced opacity */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="p-8 md:p-10 relative z-10">
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                            {/* Left Column - Photo & Stats */}
                            <div className="space-y-6">
                                {/* Profile Image */}
                                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 group/image shadow-lg shadow-black/20">
                                    <img
                                        src="/profile.jpg"
                                        alt="Agastya"
                                        className="object-cover w-full h-full opacity-90 group-hover/image:opacity-100 transition-opacity duration-500"
                                    />
                                    {/* Minimal overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Current Role */}
                                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyber-green/20 transition-colors">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <div className="p-1 rounded bg-cyber-green/10 text-cyber-green">
                                            <Briefcase className="w-3 h-3" />
                                        </div>
                                        <span className="text-[10px] text-cyber-green font-mono uppercase tracking-wider">Current Role</span>
                                    </div>
                                    <div className="font-bold text-white text-sm">Computer Vision Intern</div>
                                    <div className="text-[11px] text-gray-400">Playar Inc.</div>
                                </div>

                                {/* Education */}
                                <div className="flex items-start gap-3 px-1">
                                    <div className="p-1.5 rounded-lg bg-white/5 text-gray-400">
                                        <GraduationCap className="w-3.5 h-3.5" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-0.5">Education</div>
                                        <div className="font-bold text-white text-sm">B.S. Math-CS</div>
                                        <div className="text-[11px] text-gray-400">UC San Diego</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Intro */}
                            <div className="space-y-5 pt-1">
                                <div>
                                    <h2 className="text-3xl font-bold font-heading mb-3 text-white">
                                        Hello, I'm <span className="text-cyber-green">Agastya</span>
                                    </h2>
                                    <div className="space-y-3 text-gray-300 text-[15px] leading-relaxed font-light">
                                        <p>
                                            I am a Computer Vision Engineer at UCSD, decoding the visual world through algorithms.
                                        </p>
                                        <p>
                                            I build intelligent systems that see, understand, and interact with their environment,
                                            focusing on <span className="text-white font-medium">real-time inference</span> and <span className="text-white font-medium">3D reconstruction</span>.
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-2">
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

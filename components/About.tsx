"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ArrowRight, Box, User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
    return (
        <section id="about" className="scroll-mt-24">
            <ScrollReveal>
                <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-cyber-green via-emerald-400 to-cyan-500">
                    <div className="bg-cyber-black rounded-[23px] p-8 md:p-12 overflow-hidden relative">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="grid md:grid-cols-[300px_1fr] gap-12 relative z-10">
                            {/* Left Column */}
                            <div className="space-y-6">
                                {/* Profile Image */}
                                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 to-transparent opacity-60" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-cyber-green font-mono text-sm tracking-widest group-hover:scale-110 transition-transform duration-500">
                                            [IMAGE_PLACEHOLDER]
                                        </span>
                                    </div>
                                </div>

                                {/* Current Role */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-green/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-cyber-green/10 text-cyber-green">
                                            <Briefcase className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs text-cyber-green font-mono uppercase tracking-wider">Current Role</span>
                                    </div>
                                    <div className="font-bold text-white">Computer Vision Intern</div>
                                    <div className="text-sm text-gray-400">Playar Inc.</div>
                                </div>

                                {/* Education */}
                                <div className="flex items-start gap-4 p-2">
                                    <div className="p-2 rounded-lg bg-white/5 text-gray-300">
                                        <GraduationCap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-1">Education</div>
                                        <div className="font-bold text-white">B.S. Math-CS</div>
                                        <div className="text-sm text-gray-400">UC San Diego</div>
                                        <div className="text-xs text-gray-500 mt-1">Minor in Economics</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">
                                        Hello, I'm <span className="text-cyber-green">Agastya</span>
                                    </h2>
                                    <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                                        <p>
                                            I am a Computer Vision Engineer at UCSD, passionate about decoding the visual world through algorithms.
                                            My work bridges the gap between mathematical theory and real-world perception.
                                        </p>
                                        <p>
                                            I build intelligent systems that see, understand, and interact with their environment, leveraging generative models and deep learning to solve complex visual problems.
                                        </p>
                                    </div>
                                </div>

                                {/* Research Interests */}
                                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-green/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyber-green/20 transition-colors duration-500" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Box className="w-5 h-5 text-cyber-green" />
                                            <h3 className="text-xl font-bold text-white">Research Interests</h3>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed mb-6">
                                            I'm interested in training and leveraging generative models for computer vision,
                                            especially pushing towards <span className="text-white font-medium">real-time inference</span>,
                                            <span className="text-white font-medium"> 3D reconstruction</span>, and
                                            <span className="text-white font-medium"> photorealistic generation</span>.
                                        </p>

                                        <a href="#projects" className="inline-flex items-center gap-2 text-cyber-green hover:text-emerald-400 transition-colors font-medium group/link">
                                            See my projects
                                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}

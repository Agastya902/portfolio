"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ArrowRight, Box, User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
    return (
        <div className="relative max-w-4xl mx-auto rounded-[23px] border border-white/10 bg-cyber-black/20 backdrop-blur-sm overflow-hidden group transition-all duration-500 hover:border-cyber-green/30 min-h-[500px] flex flex-col justify-center">

            {/* Subtle top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent opacity-50" />

            {/* Background Glow - reduced opacity */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="p-8 md:p-12 relative z-10">
                <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
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
                    <div className="space-y-6 pt-2">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
                                Hello, I'm <span className="text-cyber-green">Agastya</span>
                            </h2>
                            <div className="space-y-4 text-gray-300 text-base leading-relaxed font-light">
                                <p>
                                    I am a Math-Computer Science major with a minor in Economics at <span className="text-white font-medium">UC San Diego</span>.
                                </p>
                                <p>
                                    My interests lie in <span className="text-white font-medium">Computer Vision</span> and <span className="text-white font-medium">Deep Learning</span>, specifically pushing towards real-time inference and 3D reconstruction.
                                </p>
                                <p>
                                    Currently, I am working as a Computer Vision Intern at <span className="text-white font-medium">Playar Inc.</span>, where I build object detection and trajectory analysis software for sports simulators.
                                </p>
                                <p>
                                    I am also developing an app with them that performs real-time trajectory analysis and ball tracking for sports.
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
    );
}

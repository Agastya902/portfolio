"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-cyber-black">\n            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
            >
                <source src="/hero-background.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-cyber-black/70 z-20" />

            {/* Content */}
            <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel p-8 md:p-12 rounded-2xl border-cyber-green/30 bg-cyber-black/40 backdrop-blur-xl"
                >
                    <h2 className="text-cyber-green font-mono text-xs md:text-sm mb-3 tracking-[0.3em] uppercase">
                        Computer Vision Engineer
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-4 leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-emerald-400 to-cyan-500">Agastya</span>
                    </h1>
                    <p className="text-gray-200 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-light">
                        I build intelligent systems that see and understand the world
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-cyber-green/20 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-black transition-all duration-300 font-medium tracking-wide rounded-sm uppercase text-sm backdrop-blur-sm"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wide hover:bg-white/5 rounded-sm"
                        >
                            Get in Touch
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-cyber-green/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
}

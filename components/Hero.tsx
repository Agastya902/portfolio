"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/hero-background.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-cyber-black/70 z-10" />

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel p-8 md:p-12 rounded-2xl border-cyber-green/30 bg-cyber-black/40 backdrop-blur-xl"
                >
                    <h2 className="text-cyber-green font-mono text-sm md:text-base mb-4 tracking-[0.2em]">
                        SYSTEM ONLINE // WELCOME USER
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-emerald-600">Agastya</span>
                    </h1>
                    <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Computer Vision Engineer specializing in deep learning,
                        3D reconstruction, and real-time perception systems.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <button className="px-8 py-3 bg-cyber-green/20 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-black transition-all duration-300 font-medium tracking-wide rounded-sm uppercase text-sm backdrop-blur-sm">
                            View Projects
                        </button>
                        <button className="px-8 py-3 text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wide hover:bg-white/5 rounded-sm">
                            Learn More
                        </button>
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

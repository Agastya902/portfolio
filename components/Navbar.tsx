"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { id: "about", label: "ABOUT" },
        { id: "experience", label: "EXPERIENCE" },
        { id: "projects", label: "PROJECTS" },
        { id: "education", label: "TIMELINE" },
        { id: "contact", label: "CONTACT" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-40 bg-cyber-black/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="text-xl font-bold font-heading tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-emerald-400 to-cyan-500">
                    AS
                </span>

                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-sm font-mono tracking-widest transition-all duration-300 hover:text-cyber-green ${activeSection === item.id ? "text-cyber-green drop-shadow-[0_0_5px_rgba(0,255,159,0.5)]" : "text-gray-400"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}

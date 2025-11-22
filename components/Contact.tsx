"use client";

import { useState } from "react";
import { Send, Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            // Using Web3Forms for form submission (free service)
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "e33fa976-4730-42bc-b6cb-14f7f65d5151",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="scroll-mt-24 py-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-cyber-green mb-4 tracking-wider text-center">
                    GET IN TOUCH
                </h2>
                <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? I'd love to hear from you.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="glass-panel p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-cyber-green mb-4">Let's Connect</h3>
                            <p className="text-gray-300 mb-6">
                                Feel free to reach out for opportunities, collaborations, or just to say hi!
                            </p>

                            <div className="space-y-4">
                                <a
                                    href="mailto:agastyarajsingh2004@gmail.com"
                                    className="flex items-center gap-3 text-gray-300 hover:text-cyber-green transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-cyber-green/10 flex items-center justify-center group-hover:bg-cyber-green/20 transition-colors">
                                        <Mail size={20} className="text-cyber-green" />
                                    </div>
                                    <span>agastyarajsingh2004@gmail.com</span>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/agastya-raj-singh-8548101b2/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-300 hover:text-cyber-green transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-cyber-green/10 flex items-center justify-center group-hover:bg-cyber-green/20 transition-colors">
                                        <Linkedin size={20} className="text-cyber-green" />
                                    </div>
                                    <span>LinkedIn</span>
                                </a>

                                <a
                                    href="https://github.com/Agastya902"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-300 hover:text-cyber-green transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-cyber-green/10 flex items-center justify-center group-hover:bg-cyber-green/20 transition-colors">
                                        <Github size={20} className="text-cyber-green" />
                                    </div>
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="glass-panel p-6 rounded-lg space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-cyber-black/50 border border-cyber-green/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-green transition-colors"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-cyber-black/50 border border-cyber-green/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-green transition-colors"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-4 py-3 bg-cyber-black/50 border border-cyber-green/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-green transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full px-6 py-3 bg-cyber-green/20 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-black transition-all duration-300 font-medium tracking-wide rounded-lg uppercase text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "sending" ? (
                                "Sending..."
                            ) : status === "success" ? (
                                "Message Sent!"
                            ) : (
                                <>
                                    Send Message
                                    <Send size={16} />
                                </>
                            )}
                        </button>

                        {status === "error" && (
                            <p className="text-red-400 text-sm text-center">
                                Something went wrong. Please try again or email me directly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

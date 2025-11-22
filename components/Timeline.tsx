"use client";

import { motion } from "framer-motion";

interface TimelineEvent {
    id: string;
    title: string;
    subtitle?: string;
    date: string;
    description: string;
    type: "education" | "achievement" | "work" | "project";
    logo?: string;
    children?: TimelineEvent[];
}

const timelineData: TimelineEvent[] = [
    {
        id: "playar",
        title: "Playar Inc.",
        subtitle: "Computer Vision Intern",
        date: "Jan 2025 - Present",
        description: "Cricket ball tracking with YOLOv11, MediaPipe gesture estimation, TensorRT optimization",
        type: "work",
        logo: "placeholder",
        children: [
            {
                id: "playar-project",
                title: "Real-time Match Simulator",
                date: "2025",
                description: "Ball trajectory prediction with DeepSORT tracking",
                type: "project",
            },
        ],
    },
    {
        id: "ucsd-aio",
        title: "UCSD - Academic Integrity Office",
        subtitle: "Peer Educator",
        date: "Mar 2025 - Present",
        description: "Facilitated group meetings, strengthened communication and leadership",
        type: "work",
        logo: "/logos/ucsd.png",
    },
    {
        id: "tech-mahindra",
        title: "Tech Mahindra",
        subtitle: "Computer Vision Intern",
        date: "Jul - Sep 2024",
        description: "Built farming datasets, generated 100k+ synthetic images in Blender",
        type: "work",
        logo: "/logos/tech-mahindra.png",
        children: [
            {
                id: "smartvision",
                title: "SmartVision",
                date: "2024",
                description: "Object detection software using YOLOv5 for factory safety compliance",
                type: "project",
            },
        ],
    },
    {
        id: "vertexplus",
        title: "VertexPlus Technologies",
        subtitle: "Computer Vision Intern",
        date: "Jun - Aug 2024",
        description: "Real-time object detection with YOLOv5, integrated into security infrastructure",
        type: "work",
        logo: "placeholder",
    },
    {
        id: "ucsd",
        title: "UC San Diego",
        subtitle: "B.S. Mathematics-Computer Science",
        date: "2022 - 2026",
        description: "Relevant Coursework: Data Analysis, Software Tools, Theory of Computability, Computer Vision, Deep Learning",
        type: "education",
        logo: "/logos/ucsd.png",
    },
    {
        id: "shooter",
        title: "Competitive Shooter",
        subtitle: "Esports / Athletics",
        date: "2019 - 2022",
        description: "Developed discipline, strategic thinking, and performance under pressure",
        type: "achievement",
    },
    {
        id: "school",
        title: "High School",
        date: "2018 - 2022",
        description: "Academic foundation in mathematics and computer science",
        type: "education",
    },
];

export default function Timeline() {
    const getTypeColor = (type: string) => {
        switch (type) {
            case "education":
                return "border-blue-500/50 bg-blue-500/10";
            case "achievement":
                return "border-purple-500/50 bg-purple-500/10";
            case "work":
                return "border-cyber-green/50 bg-cyber-green/10";
            case "project":
                return "border-cyan-500/50 bg-cyan-500/10";
            default:
                return "border-gray-500/50 bg-gray-500/10";
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "education":
                return "🎓";
            case "achievement":
                return "🏆";
            case "work":
                return "💼";
            case "project":
                return "🚀";
            default:
                return "•";
        }
    };

    return (
        <section id="timeline" className="scroll-mt-24 py-20">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-cyber-green mb-12 tracking-wider text-center">
                JOURNEY
            </h2>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-green/50 via-cyber-green/30 to-transparent" />

                {timelineData.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`relative mb-12 ${index % 2 === 0 ? "md:pr-[50%] md:pl-0 pl-12" : "md:pl-[50%] md:pr-0 pl-12"
                            }`}
                    >
                        {/* Node */}
                        <div
                            className={`absolute left-0 md:left-1/2 top-4 -translate-x-1/2 w-12 h-12 rounded-full border-2 ${getTypeColor(
                                event.type
                            )} flex items-center justify-center z-10 backdrop-blur-md overflow-hidden bg-white/90`}
                        >
                            {event.logo && event.logo !== "placeholder" ? (
                                <img
                                    src={event.logo}
                                    alt={`${event.title} logo`}
                                    className="w-10 h-10 object-contain p-1"
                                />
                            ) : (
                                <span className="text-lg">{getTypeIcon(event.type)}</span>
                            )}
                        </div>

                        {/* Content card */}
                        <div className={`glass-panel p-6 rounded-lg ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                                    {event.subtitle && <p className="text-cyber-green text-sm">{event.subtitle}</p>}
                                </div>
                                <span className="text-xs text-gray-400 font-mono whitespace-nowrap ml-4">{event.date}</span>
                            </div>
                            <p className="text-gray-300 text-sm">{event.description}</p>

                            {/* Child projects */}
                            {event.children && event.children.length > 0 && (
                                <div className="mt-4 ml-4 pl-4 border-l-2 border-cyan-500/30 space-y-3">
                                    {event.children.map((child) => (
                                        <div key={child.id} className="relative">
                                            <div className="absolute left-0 top-3 -translate-x-[21px] w-4 h-0.5 bg-cyan-500/30" />
                                            <div className="text-sm">
                                                <p className="text-cyan-400 font-medium">{child.title}</p>
                                                <p className="text-gray-400 text-xs">{child.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

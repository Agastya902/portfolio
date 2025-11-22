"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import InteractiveBackground from "@/components/InteractiveBackground";
import GlassCard from "@/components/GlassCard";
import Modal from "@/components/Modal";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

type ModalContent = "playar" | "techmahindra" | "vertexplus" | "smartvision" | "intellirest" | null;

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalContent>(null);

  const modalData = {
    playar: {
      title: "Playar Inc. - Computer Vision Intern",
      content: (
        <>
          <p className="text-lg mb-4"><strong>Duration:</strong> Jan 2025 - Present | San Diego, CA</p>
          <h3 className="text-xl font-bold text-cyber-green mb-3">Key Responsibilities</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Developing cricket ball tracking algorithms for real-time match-play simulators using virtual match-play trajectories and outcomes</li>
            <li>Built YOLOv11-based real-time cricket ball detection model integrated with MediaPipe for gesture estimation, achieving high-precision tracking</li>
            <li>Optimized inference with TensorRT & ONNX for real-time analysis</li>
            <li>Collaborated on ball trajectory prediction algorithms using DeepSORT tracking to estimate post-contact outcomes</li>
          </ul>
          <h3 className="text-xl font-bold text-cyber-green mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">YOLOv11</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">MediaPipe</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">TensorRT</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">ONNX</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">DeepSORT</span>
          </div>
        </>
      ),
    },
    techmahindra: {
      title: "Tech Mahindra - Computer Vision Intern",
      content: (
        <>
          <p className="text-lg mb-4"><strong>Duration:</strong> Jul - Sep 2025 | India</p>
          <h3 className="text-xl font-bold text-cyber-green mb-3">Key Achievements</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Built custom farming datasets with semantic segmentation capabilities</li>
            <li>Augmented datasets using ByteTrack/DeepSORT, improving mAP@[.5:.95] metrics</li>
            <li>Generated 100k+ fully labeled synthetic images in Blender</li>
            <li>Optimized for various lighting conditions, leaf density variations, and occlusion scenarios</li>
          </ul>
          <h3 className="text-xl font-bold text-cyber-green mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">Blender</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">ByteTrack</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30  rounded text-sm">DeepSORT</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">Python</span>
          </div>
        </>
      ),
    },
    vertexplus: {
      title: "VertexPlus Technologies - Computer Vision Intern",
      content: (
        <>
          <p className="text-lg mb-4"><strong>Duration:</strong> Jun - Aug 2024 | India</p>
          <h3 className="text-xl font-bold text-cyber-green mb-3">Key Responsibilities</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Collaborated with a development team to build real-time object detection software</li>
            <li>Implemented advanced Convolutional Neural Networks using YOLOv5 architecture</li>
            <li>Assisted in integrating computer vision architecture into existing security infrastructure</li>
            <li>Enabled real-time compliance tracking and notifications for non-compliant behavior</li>
          </ul>
          <h3 className="text-xl font-bold text-cyber-green mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">YOLOv5</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">PyTorch</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">OpenCV</span>
          </div>
        </>
      ),
    },
    smartvision: {
      title: "SmartVision - Neural-Network Object Detection",
      content: (
        <>
          <h3 className="text-xl font-bold text-cyber-green mb-3">Project Overview</h3>
          <p className="mb-4">
            Developed SmartVision, a real-time object detection software using advanced Computational Neural Networks
            and YOLOv5 architectures to enhance safety compliance monitoring in factory environments.
          </p>
          <h3 className="text-xl font-bold text-cyber-green mb-3">Technical Details</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Collaborated with a team to curate and pre-process diverse datasets</li>
            <li>Optimized the model using TensorFlow for enhanced accuracy and reliability</li>
            <li>Achieved real-time inference speeds suitable for factory deployment</li>
            <li>Integrated with existing monitoring systems for seamless operation</li>
          </ul>
          <h3 className="text-xl font-bold text-cyber-green mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">PyTorch</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">YOLOv5</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">TensorFlow</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">OpenCV</span>
          </div>
        </>
      ),
    },
    intellirest: {
      title: "IntelliRest™ - Smart Pillow Project",
      content: (
        <>
          <h3 className="text-xl font-bold text-cyber-green mb-3">Project Overview</h3>
          <p className="mb-4">
            Designed a smart pillow featuring biometric sleep analysis using heart rate sensors and galvanic skin response
            monitors for personalized sleep tracking.
          </p>
          <h3 className="text-xl font-bold text-cyber-green mb-3">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Implemented smartphone app interface for real-time sleep data visualization</li>
            <li>Built-in charging station for seamless device integration</li>
            <li>Surround sound speakers with customizable ambient noise options</li>
            <li>Biometric sleep analysis for personalized insights and improved sleep quality</li>
          </ul>
          <h3 className="text-xl font-bold text-cyber-green mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">Python</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">IoT</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">Mobile App Development</span>
            <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-sm">Biometric Sensors</span>
          </div>
        </>
      ),
    },
  };

  return (
    <main className="min-h-screen bg-cyber-black text-white selection:bg-cyber-green selection:text-cyber-black">
      <Navbar />
      <Hero />

      <div className="relative min-h-screen py-20 px-4 md:px-8 overflow-hidden">
        <InteractiveBackground />

        <div className="max-w-5xl mx-auto space-y-32 relative z-10">
          {/* About Section */}
          <section id="about" className="scroll-mt-32">
            <div className="grid md:grid-cols-[1.5fr,1fr] gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-8 tracking-tight">
                  About Me
                </h2>
                <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                  <p>
                    I am a Computer Vision Engineer at UCSD, majoring in Math-Computer Science with a minor in Economics.
                    My passion lies in decoding the visual world through algorithms, bridging the gap between mathematical theory and real-world perception.
                  </p>
                  <p>
                    I build systems that see, understand, and interact with their environment.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-cyber-black/50 border border-white/10 group">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 font-mono text-sm tracking-widest group-hover:text-cyber-green/50 transition-colors duration-500">
                    [IMAGE_PLACEHOLDER]
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-32">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-12 tracking-tight">
              Experience
            </h2>
            <div className="space-y-12">
              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyber-green transition-colors">Playar Inc.</h3>
                  <span className="text-gray-400 font-mono text-sm">Jan 2025 - Present</span>
                </div>
                <p className="text-lg text-gray-300 mb-4">Computer Vision Intern</p>
                <ul className="space-y-2 text-gray-400 font-light leading-relaxed max-w-3xl">
                  <li>Developing cricket ball tracking algorithms for real-time match-play simulators</li>
                  <li>Built YOLOv11-based real-time cricket ball detection model with MediaPipe</li>
                  <li>Optimized inference with TensorRT & ONNX for real-time analysis</li>
                </ul>
                <button
                  onClick={() => setActiveModal("playar")}
                  className="mt-4 text-sm text-cyber-green hover:text-white transition-colors uppercase tracking-wider font-medium"
                >
                  Read More →
                </button>
              </div>

              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyber-green transition-colors">Tech Mahindra</h3>
                  <span className="text-gray-400 font-mono text-sm">Jul - Sep 2025</span>
                </div>
                <p className="text-lg text-gray-300 mb-4">Computer Vision Intern</p>
                <ul className="space-y-2 text-gray-400 font-light leading-relaxed max-w-3xl">
                  <li>Built custom farming datasets with semantic segmentation</li>
                  <li>Generated 100k+ fully labeled synthetic images in Blender</li>
                </ul>
                <button
                  onClick={() => setActiveModal("techmahindra")}
                  className="mt-4 text-sm text-cyber-green hover:text-white transition-colors uppercase tracking-wider font-medium"
                >
                  Read More →
                </button>
              </div>

              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyber-green transition-colors">VertexPlus Technologies</h3>
                  <span className="text-gray-400 font-mono text-sm">Jun - Aug 2024</span>
                </div>
                <p className="text-lg text-gray-300 mb-4">Computer Vision Intern</p>
                <ul className="space-y-2 text-gray-400 font-light leading-relaxed max-w-3xl">
                  <li>Implemented advanced Convolutional Neural Networks using YOLOv5</li>
                  <li>Enabled real-time compliance tracking and notifications</li>
                </ul>
                <button
                  onClick={() => setActiveModal("vertexplus")}
                  className="mt-4 text-sm text-cyber-green hover:text-white transition-colors uppercase tracking-wider font-medium"
                >
                  Read More →
                </button>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <Contact />
        </div>
      </div>

      {/* Modals */}
      {activeModal && modalData[activeModal] && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title={modalData[activeModal].title}
        >
          {modalData[activeModal].content}
        </Modal>
      )}
    </main>
  );
}

"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import InteractiveBackground from "@/components/InteractiveBackground";
import GlassCard from "@/components/GlassCard";
import Modal from "@/components/Modal";
import Timeline from "@/components/Timeline";

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

        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          {/* About Section */}
          <section id="about" className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-cyber-green mb-8 tracking-wider">
              ABOUT ME
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard className="h-full">
                <p className="text-lg leading-relaxed mb-4">
                  I am a Computer Vision Engineer at UCSD, majoring in Math-Computer Science with a minor in Economics.
                  My passion lies in decoding the visual world through algorithms, bridging the gap between mathematical theory and real-world perception.
                </p>
                <p className="text-lg leading-relaxed">
                  I build systems that see, understand, and interact with their environment.
                </p>
              </GlassCard>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden border border-cyber-green/30 bg-cyber-black/50 flex items-center justify-center group">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent opacity-60" />
                <span className="text-cyber-green font-mono text-sm tracking-widest group-hover:scale-110 transition-transform duration-500">
                  [IMAGE_PLACEHOLDER]
                </span>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-cyber-green mb-8 tracking-wider">
              EXPERIENCE
            </h2>
            <div className="space-y-6">
              <GlassCard
                title="Playar Inc. | Computer Vision Intern"
                showLearnMore
                onLearnMore={() => setActiveModal("playar")}
              >
                <p className="text-sm text-cyber-green/80 font-mono mb-2">San Diego, CA | Jan 2025 - Present</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Developing cricket ball tracking algorithms for real-time match-play simulators</li>
                  <li>Built YOLOv11-based real-time cricket ball detection model with MediaPipe</li>
                  <li>Optimized inference with TensorRT & ONNX for real-time analysis</li>
                </ul>
              </GlassCard>

              <GlassCard
                title="Tech Mahindra | Computer Vision Intern"
                showLearnMore
                onLearnMore={() => setActiveModal("techmahindra")}
              >
                <p className="text-sm text-cyber-green/80 font-mono mb-2">India | Jul - Sep 2025</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Built custom farming datasets with semantic segmentation</li>
                  <li>Generated 100k+ fully labeled synthetic images in Blender</li>
                </ul>
              </GlassCard>

              <GlassCard
                title="VertexPlus Technologies Ltd. | Computer Vision Intern"
                showLearnMore
                onLearnMore={() => setActiveModal("vertexplus")}
              >
                <p className="text-sm text-cyber-green/80 font-mono mb-2">India | Jun - Aug 2024</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Developed real-time Object Detection software using YOLOv5</li>
                  <li>Integrated computer vision architecture into security infrastructure</li>
                </ul>
              </GlassCard>

              <GlassCard title="UCSD - Academic Integrity Office | Peer Educator">
                <p className="text-sm text-cyber-green/80 font-mono mb-2">San Diego, CA | Mar 2025 - Present</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Facilitated group meetings for academic integrity violations</li>
                  <li>Strengthened communication and leadership abilities</li>
                </ul>
              </GlassCard>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-cyber-green mb-8 tracking-wider">
              PROJECTS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              <GlassCard
                title="SmartVision | Object Detection Software"
                className="hover:scale-[1.02]"
                showLearnMore
                onLearnMore={() => setActiveModal("smartvision")}
              >
                <div className="h-40 bg-cyber-black/50 rounded mb-4 border border-cyber-green/10 flex items-center justify-center">
                  <span className="text-xs font-mono text-gray-500">PROJECT_PREVIEW</span>
                </div>
                <p className="text-sm mb-4">
                  Real-time object detection software using YOLOv5 for factory safety compliance monitoring.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">PyTorch</span>
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">YOLOv5</span>
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">TensorFlow</span>
                </div>
              </GlassCard>

              <GlassCard
                title="IntelliRest™ | Smart Pillow Project"
                className="hover:scale-[1.02]"
                showLearnMore
                onLearnMore={() => setActiveModal("intellirest")}
              >
                <div className="h-40 bg-cyber-black/50 rounded mb-4 border border-cyber-green/10 flex items-center justify-center">
                  <span className="text-xs font-mono text-gray-500">PROJECT_PREVIEW</span>
                </div>
                <p className="text-sm mb-4">
                  Smart pillow with biometric sleep analysis using heart rate sensors and galvanic skin response monitoring.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">Python</span>
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">IoT</span>
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">Mobile App</span>
                </div>
              </GlassCard>
            </div>
          </section>

          {/* Timeline Section */}
          <Timeline />
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

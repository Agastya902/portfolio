import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import InteractiveBackground from "@/components/InteractiveBackground";
import GlassCard from "@/components/GlassCard";

export default function Home() {
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
              01. ABOUT ME
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
              02. EXPERIENCE
            </h2>
            <div className="space-y-6">
              <GlassCard title="Playar Inc. | Computer Vision Intern">
                <p className="text-sm text-cyber-green/80 font-mono mb-2">San Diego, CA | Jan 2025 - Present</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Developing cricket ball tracking algorithms for real-time match-play simulators using virtual match-play trajectories</li>
                  <li>Built YOLOv11-based real-time cricket ball detection model integrated with MediaPipe for gesture estimation</li>
                  <li>Optimized inference with TensorRT & ONNX for real-time analysis, collaborated on ball trajectory prediction with DeepSORT tracking</li>
                </ul>
              </GlassCard>

              <GlassCard title="Tech Mahindra | Computer Vision Intern">
                <p className="text-sm text-cyber-green/80 font-mono mb-2">India | Jul - Sep 2025</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Built custom farming datasets with semantic segmentation and augmented datasets (+[X%] mAP@[.5:.95]) using ByteTrack/DeepSORT</li>
                  <li>Generated 100k+ fully labeled synthetic images in Blender for lighting/leaf density/occlusions</li>
                </ul>
              </GlassCard>

              <GlassCard title="VertexPlus Technologies Ltd. | Computer Vision Intern">
                <p className="text-sm text-cyber-green/80 font-mono mb-2">India | Jun - Aug 2024</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Collaborated with a team to develop real-time Object Detection software using advanced Convolutional Neural Networks and YOLOv5</li>
                  <li>Assisted in integrating the computer vision architecture into existing security infrastructure with real-time compliance tracking</li>
                </ul>
              </GlassCard>

              <GlassCard title="UCSD - Academic Integrity Office | Peer Educator">
                <p className="text-sm text-cyber-green/80 font-mono mb-2">San Diego, CA | Mar 2025 - Present</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Facilitated in-person group meetings for students who violated university academic integrity standards</li>
                  <li>Strengthened interpersonal communication and leadership abilities by guiding constructive dialogue</li>
                </ul>
              </GlassCard>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-cyber-green mb-8 tracking-wider">
              03. PROJECTS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              <GlassCard title="SmartVision | Object Detection Software" className="hover:scale-[1.02]">
                <div className="h-40 bg-cyber-black/50 rounded mb-4 border border-cyber-green/10 flex items-center justify-center">
                  <span className="text-xs font-mono text-gray-500">PROJECT_PREVIEW</span>
                </div>
                <p className="text-sm mb-4">
                  Developed SmartVision, a real-time object detection software using advanced Convolutional Neural Networks and YOLOv5 architectures to enhance safety compliance monitoring in factory environments.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">PyTorch</span>
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">YOLOv5</span>
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">TensorFlow</span>
                </div>
                <button className="text-cyber-green hover:text-cyber-green/80 text-sm font-medium">
                  Learn More →
                </button>
              </GlassCard>

              <GlassCard title="IntelliRest™ | Smart Pillow Project" className="hover:scale-[1.02]">
                <div className="h-40 bg-cyber-black/50 rounded mb-4 border border-cyber-green/10 flex items-center justify-center">
                  <span className="text-xs font-mono text-gray-500">PROJECT_PREVIEW</span>
                </div>
                <p className="text-sm mb-4">
                  Designed a smart pillow featuring biometric sleep analysis using heart rate sensors and galvanic skin response monitor for personalized sleep tracking with smartphone app integration.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">Python</span>
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">IoT</span>
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">Mobile App</span>
                </div>
                <button className="text-cyber-green hover:text-cyber-green/80 text-sm font-medium">
                  Learn More →
                </button>
              </GlassCard>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

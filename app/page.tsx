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
              <GlassCard title="Computer Vision Engineer @ UCSD">
                <p className="text-sm text-cyber-green/80 font-mono mb-2">2023 - PRESENT</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Developing advanced perception algorithms for autonomous systems.</li>
                  <li>Researching 3D reconstruction and semantic segmentation techniques.</li>
                  <li>Collaborating with cross-functional teams to deploy ML models to edge devices.</li>
                </ul>
              </GlassCard>

              <GlassCard title="Research Intern @ Tech Institute">
                <p className="text-sm text-cyber-green/80 font-mono mb-2">SUMMER 2023</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Implemented state-of-the-art object detection models (YOLOv8).</li>
                  <li>Optimized inference pipelines for real-time performance.</li>
                </ul>
              </GlassCard>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-cyber-green mb-8 tracking-wider">
              03. PROJECTS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GlassCard title="Autonomous Drone Navigation" className="hover:scale-[1.02]">
                <div className="h-40 bg-cyber-black/50 rounded mb-4 border border-cyber-green/10 flex items-center justify-center">
                  <span className="text-xs font-mono text-gray-500">VIDEO_PREVIEW</span>
                </div>
                <p className="text-sm mb-4">
                  Real-time obstacle avoidance and path planning using monocular SLAM.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">Python</span>
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">ROS2</span>
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">OpenCV</span>
                </div>
              </GlassCard>

              <GlassCard title="3D Scene Reconstruction" className="hover:scale-[1.02]">
                <div className="h-40 bg-cyber-black/50 rounded mb-4 border border-cyber-green/10 flex items-center justify-center">
                  <span className="text-xs font-mono text-gray-500">VIDEO_PREVIEW</span>
                </div>
                <p className="text-sm mb-4">
                  Reconstructing detailed 3D models from 2D image collections using NeRFs.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">PyTorch</span>
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">NeRF</span>
                </div>
              </GlassCard>

              <GlassCard title="Gesture Control Interface" className="hover:scale-[1.02]">
                <div className="h-40 bg-cyber-black/50 rounded mb-4 border border-cyber-green/10 flex items-center justify-center">
                  <span className="text-xs font-mono text-gray-500">VIDEO_PREVIEW</span>
                </div>
                <p className="text-sm mb-4">
                  Controlling UI elements using hand gestures captured via webcam.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">MediaPipe</span>
                  <span className="text-xs px-2 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">React</span>
                </div>
              </GlassCard>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

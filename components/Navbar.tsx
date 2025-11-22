export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-black/80 backdrop-blur-md border-b border-cyber-green/20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
                <div className="flex justify-between items-center">
                    <a href="#" className="text-xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-emerald-400 to-cyan-500">
                        AS
                    </a>
                    <div className="flex gap-6 md:gap-8">
                        <a href="#about" className="text-sm md:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-emerald-400 to-cyan-500 hover:from-emerald-400 hover:via-cyan-500 hover:to-cyber-green transition-all duration-300">About</a>
                        <a href="#experience" className="text-sm md:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-emerald-400 to-cyan-500 hover:from-emerald-400 hover:via-cyan-500 hover:to-cyber-green transition-all duration-300">Experience</a>
                        <a href="#projects" className="text-sm md:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-emerald-400 to-cyan-500 hover:from-emerald-400 hover:via-cyan-500 hover:to-cyber-green transition-all duration-300">Projects</a>
                        <a href="#timeline" className="text-sm md:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-emerald-400 to-cyan-500 hover:from-emerald-400 hover:via-cyan-500 hover:to-cyber-green transition-all duration-300">Journey</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

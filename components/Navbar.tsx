import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-transparent backdrop-blur-sm">
            <div className="text-xl font-bold font-heading tracking-widest text-cyber-green">
                AGASTYA
            </div>
            <div className="flex gap-8 text-sm font-medium tracking-wide text-gray-300">
                <Link href="#about" className="hover:text-cyber-green transition-colors">
                    ABOUT
                </Link>
                <Link href="#experience" className="hover:text-cyber-green transition-colors">
                    EXPERIENCE
                </Link>
                <Link href="#projects" className="hover:text-cyber-green transition-colors">
                    PROJECTS
                </Link>
                <Link href="#contact" className="hover:text-cyber-green transition-colors">
                    CONTACT
                </Link>
            </div>
        </nav>
    );
}

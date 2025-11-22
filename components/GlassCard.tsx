import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    title?: string;
    showLearnMore?: boolean;
    onLearnMore?: () => void;
}

export default function GlassCard({ children, className, title, showLearnMore, onLearnMore }: GlassCardProps) {
    return (
        <div className={cn("glass-panel p-6 rounded-lg transition-all duration-300 hover:cyber-glow", className)}>
            {title && (
                <h3 className="text-xl font-bold text-cyber-green mb-4 font-heading tracking-wide uppercase border-b border-cyber-green/20 pb-2">
                    {title}
                </h3>
            )}
            <div className="text-gray-300">
                {children}
            </div>
            {showLearnMore && onLearnMore && (
                <button
                    onClick={onLearnMore}
                    className="mt-4 text-cyber-green hover:text-cyber-green/80 text-sm font-medium transition-colors inline-flex items-center gap-1"
                >
                    Learn More →
                </button>
            )}
        </div>
    );
}

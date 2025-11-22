/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "cyber-green": {
                    DEFAULT: "#00ff9f", // Brighter neon green
                    400: "#00ffaa",
                    300: "#66ffcc",
                    glow: "rgba(0, 255, 159, 0.6)",
                },
                "cyber-black": "#020617", // slate-950
                "glass-slate": "rgba(15, 23, 42, 0.6)", // slate-900 with opacity
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-orbitron)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};

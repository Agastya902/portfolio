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
                    DEFAULT: "#10b981", // emerald-500
                    400: "#34d399", // emerald-400
                    300: "#6ee7b7", // emerald-300
                    glow: "rgba(16, 185, 129, 0.5)",
                },
                "cyber-black": "#020617", // slate-950
                "glass-slate": "rgba(15, 23, 42, 0.6)", // slate-900 with opacity
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-outfit)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};

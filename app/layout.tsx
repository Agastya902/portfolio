import type { Metadata } from "next";
import { Inter, Outfit, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: '--font-orbitron',
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: "Agastya | Computer Vision Engineer",
  description: "Portfolio of Agastya, a Computer Vision Engineer specializing in ML and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Utkarsh Vidwat | Full-Stack Engineer & AI/FinTech Developer",
  description:
    "Portfolio of Utkarsh Vidwat — Computer Science undergraduate, Full-Stack Web Developer, AI & FinTech Enthusiast.",
  keywords: [
    "Utkarsh Vidwat",
    "Utkarsh9090",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "FinTech",
    "Stock Screener",
    "SwingTrade India",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#07090e] text-zinc-100 antialiased font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}

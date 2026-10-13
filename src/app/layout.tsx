import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Utkarsh Vidwat | Full-Stack & FinTech Software Engineer",
  description:
    "Portfolio of Utkarsh Vidwat — Computer Science undergraduate at NMIET, Full-Stack Web Developer, FinTech & Stock Screener Architect.",
  keywords: [
    "Utkarsh Vidwat",
    "Utkarsh9090",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "FinTech",
    "Stock Screener",
    "SwingTrade India",
    "NMIMS Indore",
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
      className={`${montserrat.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FBF7F6] text-[#2A1418] antialiased selection:bg-[#9B4A57]/20 selection:text-[#7A3441]">
        {children}
      </body>
    </html>
  );
}

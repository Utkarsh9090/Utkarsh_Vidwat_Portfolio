"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  Cpu,
  ChevronRight,
  Terminal,
  TrendingUp,
  ShoppingCart,
  Phone,
  Check,
  ArrowUpRight,
  GitBranch,
  GitCommit,
  ArrowUp,
  MapPin,
  Activity,
  Layers,
  Sparkle,
  Copy,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [projectFilter, setProjectFilter] = useState<"all" | "lead" | "collab">("all");
  const [heroCardMode, setHeroCardMode] = useState<"photo" | "commits" | "terminal">("photo");
  const [selectedStock, setSelectedStock] = useState<"RELIANCE" | "TCS" | "HDFCBANK" | "TATAMOTORS">("RELIANCE");
  const [terminalInput, setTerminalInput] = useState<string>("skills");

  const LINKEDIN_URL = "https://www.linkedin.com/in/utkarsh-vidwat/";
  const GITHUB_URL = "https://github.com/Utkarsh9090";
  const EMAIL = "utkarshvidwat@gmail.com";
  const PHONE = "+91-9637569090";

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Live stock simulation data for SwingTrade India interactive demo
  const stockData = {
    RELIANCE: {
      price: 2984.5,
      score: 8.8,
      trend: "Strong Bullish",
      momentum: 82,
      volumeRatio: "2.4x avg",
      entry: 2990.0,
      target: 3120.0,
      stopLoss: 2930.0,
      pattern: "Bullish Engulfing + Volume Surge",
    },
    TCS: {
      price: 4180.2,
      score: 7.4,
      trend: "Moderate Bullish",
      momentum: 68,
      volumeRatio: "1.6x avg",
      entry: 4195.0,
      target: 4340.0,
      stopLoss: 4120.0,
      pattern: "Ascending Support Rebound",
    },
    HDFCBANK: {
      price: 1688.0,
      score: 8.1,
      trend: "Consolidation Breakout",
      momentum: 74,
      volumeRatio: "1.9x avg",
      entry: 1695.0,
      target: 1770.0,
      stopLoss: 1655.0,
      pattern: "EMA 20 Pullback Validation",
    },
    TATAMOTORS: {
      price: 942.8,
      score: 9.1,
      trend: "Aggressive Trend Continuation",
      momentum: 89,
      volumeRatio: "3.1x avg",
      entry: 946.0,
      target: 998.0,
      stopLoss: 918.0,
      pattern: "Multi-Week High Breakout",
    },
  };

  const commitLogs = [
    {
      repo: "Utkarsh9090/swingtrade-india",
      hash: "8f3b21c",
      message: "feat(screener): fuse momentum oscillator with volume anomaly threshold",
      date: "2 days ago",
      branch: "main",
      commits: "48 commits",
    },
    {
      repo: "BanksBuddy/platform-core",
      hash: "4d1a99e",
      message: "feat(auth): integrate firebase session token verification & GoDaddy routing",
      date: "Feb 2026",
      branch: "feat/auth-pipeline",
      commits: "28 commits (Collaborator)",
    },
    {
      repo: "Utkarsh9090/bros24-commerce",
      hash: "e67b140",
      message: "perf(edge): optimize Bun runtime and UPI checkout callback state",
      date: "Jan 2026",
      branch: "main",
      commits: "34 commits",
    },
    {
      repo: "Execute-NMIMS/hackathon-platform",
      hash: "7c9082a",
      message: "feat(realtime): edge optimization and live jury demonstration build",
      date: "Finalist run",
      branch: "main",
      commits: "22 commits (Collaborator)",
    },
  ];

  const terminalOutputs: Record<string, string[]> = {
    skills: [
      "$ dev --inspect-stack",
      "Languages  :: C, C++, Python, Java, JavaScript, TypeScript, SQL",
      "Frontend   :: React.js, Next.js 16 (App Router), Tailwind CSS, Vite",
      "Backend    :: Node.js, Express.js, Bun runtime, RESTful APIs",
      "Databases  :: MongoDB, MySQL, Firebase Firestore",
      "AI & Data  :: Pandas, NumPy, OpenAI API, NLP Pipelines, PyTorch",
      "DevOps     :: Vercel Edge, Git, GitHub, Postman, GoDaddy DNS",
    ],
    experience: [
      "$ dev --experience-log",
      "🏢 BanksBuddy (Dec 2025 – Feb 2026) | Full-Stack Web Intern",
      "   • Role: Frontend & Backend collaborator across authentication & database architecture",
      "   • Delivered: React (Vite + Bun) interface + Node.js/Firebase real-time synchronization",
      "   • Production: Vercel cloud deployment with GoDaddy custom DNS configuration",
    ],
    hackathons: [
      "$ dev --hackathon-records",
      "🏆 .Execute (NMIMS Indore) — National Level Hackathon Finalist",
      "🏆 2-Time National Hackathon Finalist recognition",
      "🏆 Contender: .Execute (NMIMS Indore), INNOHACK 2.0, Techathon 3.0, TENET, SIH 2025",
    ],
    academics: [
      "$ dev --education",
      "🎓 B.E. in Computer Science and Engineering (2024 – 2028)",
      "📍 Nutan Maharashtra Institute of Engineering & Technology, Talegaon Dabhade",
      "📈 Academic Standing: Average CGPA 8.923 / 10.0",
    ],
    contact: [
      "$ dev --contact-info",
      `📧 Email: ${EMAIL}`,
      `📞 Mobile: ${PHONE}`,
      `🐙 GitHub: ${GITHUB_URL}`,
      `💼 LinkedIn: ${LINKEDIN_URL}`,
    ],
  };

  const projects = [
    {
      id: "swingtrade",
      title: "SwingTrade India",
      role: "Lead Architect & Developer",
      roleType: "lead",
      category: "fintech",
      period: "Nov 2025 – Present",
      gitBadge: "48 commits · main",
      tagline: "Proprietary Stock Screener & Quantitative Market Analytics",
      description:
        "High-performance market screener executing an algorithmic 0–10 scoring model that fuses multi-timeframe Trend, Momentum, and Volume parameters to identify institutional breakouts.",
      highlights: [
        "Proprietary 0–10 composite ranking engine dynamically evaluating NIFTY constituent stocks.",
        "Instant calculation of volatility-adjusted Entry, Target 1/2, and Stop Loss thresholds.",
        "Interactive TradingView technical chart canvas with overlay indicator signals.",
        "Automated pattern recognition for Bullish Engulfing, Morning Star, and volume anomalies.",
      ],
      tech: ["Next.js", "TypeScript", "TradingView Canvas", "Tailwind CSS", "Financial Algorithms"],
      github: "https://github.com/Utkarsh9090",
      icon: TrendingUp,
    },
    {
      id: "bros24",
      title: "Bros@24",
      role: "Full-Stack Lead Engineer",
      roleType: "lead",
      category: "fintech",
      period: "Jan 2026",
      gitBadge: "34 commits · main",
      tagline: "Quick-Commerce Essentials Delivery Platform with UPI Payments",
      description:
        "Full-stack e-commerce web platform architected for lightning-fast grocery ordering and immediate doorstep dispatch with sub-second page transitions.",
      highlights: [
        "Full-stack reactive architecture using React, Node.js, Express, Firebase, and MongoDB.",
        "Integrated seamless UPI (GPay) deep-link payment processing with webhook order confirmations.",
        "Engineered deployment pipelines with Vite and Bun runtime, hosted on Vercel Edge for sub-second TTFB.",
        "Responsive cart state synchronization with real-time stock inventory verification.",
      ],
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Firebase", "Bun", "UPI Gateway"],
      github: "https://github.com/Utkarsh9090",
      icon: ShoppingCart,
    },
    {
      id: "banksbuddy",
      title: "BanksBuddy",
      role: "Full-Stack Collaborator & Backend Integration",
      roleType: "collab",
      category: "fintech",
      period: "Dec 2025 – Feb 2026",
      gitBadge: "28 commits · 6 PRs merged",
      collabNote: "Collaborative project during digital banking internship",
      tagline: "Digital Banking Assistance & Automated Customer Operations",
      description:
        "Enterprise-grade banking support web interface designed to streamline customer inquiries, transaction dispute tracking, and authenticated workflow routing.",
      highlights: [
        "Co-developed the React (Vite + Bun) frontend with clean accessibility and micro-interactions.",
        "Architected Firebase Auth tokens and Node.js backend endpoints for secure customer record retrieval.",
        "Configured continuous deployment pipeline on Vercel with GoDaddy domain SSL routing.",
        "Conducted security reviews protecting against credential exposure and malicious API payloads.",
      ],
      tech: ["React.js", "Vite", "Bun", "Node.js", "Firebase", "Vercel", "GoDaddy DNS"],
      github: "https://github.com/Utkarsh9090",
      icon: Briefcase,
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (projectFilter === "all") return true;
    if (projectFilter === "lead") return p.roleType === "lead";
    if (projectFilter === "collab") return p.roleType === "collab";
    return true;
  });

  const skillsCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Frontend Architecture",
      skills: ["React.js", "Next.js 16 (App Router)", "Tailwind CSS", "Vite", "HTML5 / CSS3"],
    },
    {
      title: "Backend & Systems",
      skills: ["Node.js", "Express.js", "Bun", "RESTful APIs", "Authentication / JWT"],
    },
    {
      title: "Databases & Cloud",
      skills: ["MongoDB", "MySQL", "Firebase Firestore", "Vercel Edge", "GoDaddy DNS"],
    },
    {
      title: "AI, NLP & Data",
      skills: ["Pandas", "NumPy", "OpenAI API", "NLP Pipelines", "Scikit-Learn", "PyTorch"],
    },
    {
      title: "Tooling & Workflow",
      skills: ["Git", "GitHub (25+ repos)", "VS Code", "Postman", "Figma", "Netlify"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#FBF7F6] text-[#2A1418] font-sans">
      {/* Soft Morphed Ambient Highlights */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#9B4A57]/6 via-[#D2410D]/3 to-transparent blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute top-[35%] -left-64 w-[500px] h-[500px] bg-[#9B4A57]/4 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute top-[65%] -right-64 w-[500px] h-[500px] bg-[#D2410D]/3 blur-[130px] rounded-full" />

      {/* ===================== NAVBAR ===================== */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FBF7F6]/85 border-b border-[#9B4A57]/10">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-9 h-9 rounded-xl bg-white border border-[#9B4A57]/20 flex items-center justify-center font-heading font-bold text-xs text-[#9B4A57] shadow-sm group-hover:border-[#9B4A57] group-hover:text-[#7A3441] transition-all">
              UV
            </span>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-[#2A1418] group-hover:text-[#9B4A57] transition-colors">
                Utkarsh Vidwat
              </span>
              <span className="text-[11px] text-[#7C6A6D]">
                Full-Stack & FinTech Software Engineer
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-[#7C6A6D]">
            <a href="#about" className="hover:text-[#2A1418] transition-colors">
              About
            </a>
            <a href="#screener" className="hover:text-[#2A1418] transition-colors">
              Live Screener
            </a>
            <a href="#projects" className="hover:text-[#2A1418] transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-[#2A1418] transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-[#2A1418] transition-colors">
              Arsenal
            </a>
            <a href="#contact" className="hover:text-[#2A1418] transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white border border-[#9B4A57]/15 text-[#7C6A6D] hover:text-[#2A1418] hover:border-[#9B4A57]/40 shadow-xs transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white border border-[#9B4A57]/15 text-[#7C6A6D] hover:text-[#9B4A57] hover:border-[#9B4A57]/40 shadow-xs transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={copyEmail}
              className="btn-blood-orange px-3.5 py-1.5 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-white/90" />
                  <span>Get in Touch</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-28">
        {/* ===================== HERO SECTION ===================== */}
        <section id="about" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Formal Executive Summary */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs morphism-card bg-white/90 text-[#9B4A57] border border-[#9B4A57]/15 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#D2410D] animate-pulse" />
                <span className="font-medium">Open for SDE / Full-Stack Summer & Fall Internships</span>
              </div>

              {/* Title & Introduction */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-[#2A1418] leading-[1.12]">
                  Engineering elegant web products, FinTech engines & algorithms.
                </h1>
                <p className="text-base sm:text-lg text-[#7C6A6D] leading-[1.65] font-normal">
                  I’m <strong className="text-[#2A1418] font-semibold">Utkarsh Vidwat</strong> — a Computer Science
                  undergraduate at NMIET holding an average CGPA of <span className="text-[#9B4A57] font-semibold">8.923/10</span>.
                  I specialize in architecting responsive web applications, financial stock screeners, and
                  clean, resilient user interfaces with strict engineering standards.
                </p>
              </div>

              {/* Real Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="morphism-card p-4">
                  <div className="eyebrow-label">Academia</div>
                  <div className="text-2xl font-heading font-bold text-[#2A1418] mt-1">8.92</div>
                  <div className="text-[11px] text-[#7C6A6D] mt-0.5">CGPA / 10.0 (2024–28)</div>
                </div>
                <div className="morphism-card p-4">
                  <div className="eyebrow-label">Hackathons</div>
                  <div className="text-2xl font-heading font-bold text-[#D2410D] mt-1">Finalist</div>
                  <div className="text-[11px] text-[#7C6A6D] mt-0.5">.Execute · NMIMS Indore</div>
                </div>
                <div className="morphism-card p-4">
                  <div className="eyebrow-label">Open Source</div>
                  <div className="text-2xl font-heading font-bold text-[#9B4A57] mt-1">25+</div>
                  <div className="text-[11px] text-[#7C6A6D] mt-0.5">GitHub Repositories</div>
                </div>
                <div className="morphism-card p-4">
                  <div className="eyebrow-label">Industry</div>
                  <div className="text-2xl font-heading font-bold text-[#7A3441] mt-1">Intern</div>
                  <div className="text-[11px] text-[#7C6A6D] mt-0.5">BanksBuddy Web Platform</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#projects"
                  className="btn-blood-orange px-6 py-3 text-sm flex items-center gap-2"
                >
                  <span>Explore Featured Work</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-maroon-ghost px-5 py-3 text-sm flex items-center gap-2"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#9B4A57]" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-maroon-ghost px-5 py-3 text-sm flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Right Column: High-Fidelity Profile Workstation Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm morphism-card p-3 shadow-lg border border-[#9B4A57]/15">
                {/* Header Switcher */}
                <div className="p-2.5 bg-[#FBF7F6] rounded-xl border border-[#9B4A57]/10 flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#9B4A57]" />
                    <span className="text-xs font-heading font-semibold text-[#2A1418]">
                      Utkarsh Vidwat
                    </span>
                  </div>

                  <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-[#9B4A57]/12 shadow-xs">
                    <button
                      onClick={() => setHeroCardMode("photo")}
                      className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md transition-all ${
                        heroCardMode === "photo"
                          ? "bg-[#9B4A57] text-white shadow-xs"
                          : "text-[#7C6A6D] hover:text-[#2A1418]"
                      }`}
                    >
                      Photo
                    </button>
                    <button
                      onClick={() => setHeroCardMode("commits")}
                      className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md flex items-center gap-1 transition-all ${
                        heroCardMode === "commits"
                          ? "bg-[#9B4A57] text-white shadow-xs"
                          : "text-[#7C6A6D] hover:text-[#2A1418]"
                      }`}
                    >
                      <GitCommit className="w-3 h-3" />
                      <span>Commits</span>
                    </button>
                    <button
                      onClick={() => setHeroCardMode("terminal")}
                      className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md flex items-center gap-1 transition-all ${
                        heroCardMode === "terminal"
                          ? "bg-[#9B4A57] text-white shadow-xs"
                          : "text-[#7C6A6D] hover:text-[#2A1418]"
                      }`}
                    >
                      <Terminal className="w-3 h-3" />
                      <span>CLI</span>
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                {heroCardMode === "photo" && (
                  <div className="space-y-3">
                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-white border border-[#9B4A57]/10 shadow-xs">
                      <Image
                        src="/utkarsh.jpg"
                        alt="Utkarsh Vidwat"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="380px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2A1418]/85 via-transparent to-transparent" />

                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#9B4A57]/15 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs font-heading font-bold text-[#2A1418]">
                              Utkarsh Vidwat
                            </div>
                            <div className="text-[11px] text-[#7C6A6D]">
                              B.E. Computer Science · 2nd Year
                            </div>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#9B4A57]/10 text-[#7A3441] border border-[#9B4A57]/20">
                            Pune, IN
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#7C6A6D] px-1 pt-1">
                      <span className="flex items-center gap-1 text-[#9B4A57] font-medium">
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>branch: main</span>
                      </span>
                      <span>NMIET · 2024–2028</span>
                    </div>
                  </div>
                )}

                {heroCardMode === "commits" && (
                  <div className="p-2 space-y-2.5 max-h-[460px] overflow-y-auto">
                    <div className="text-xs font-semibold text-[#7C6A6D] flex items-center justify-between pb-1.5 border-b border-[#9B4A57]/10">
                      <span>Recent Commits & Contributions</span>
                      <span className="text-[#9B4A57]">@Utkarsh9090</span>
                    </div>

                    {commitLogs.map((log) => (
                      <div
                        key={log.hash}
                        className="p-3 rounded-xl bg-white border border-[#9B4A57]/10 space-y-1 shadow-xs"
                      >
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-[#9B4A57] font-semibold">{log.repo}</span>
                          <span className="text-[#7C6A6D] font-mono">{log.hash}</span>
                        </div>
                        <p className="text-xs text-[#2A1418] leading-snug">{log.message}</p>
                        <div className="flex items-center justify-between text-[10px] text-[#7C6A6D] pt-0.5">
                          <span>{log.commits}</span>
                          <span>{log.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {heroCardMode === "terminal" && (
                  <div className="p-3 bg-white rounded-xl border border-[#9B4A57]/10 text-xs min-h-[440px] flex flex-col justify-between shadow-xs">
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1 pb-1">
                        {["skills", "experience", "hackathons", "academics", "contact"].map((cmd) => (
                          <button
                            key={cmd}
                            onClick={() => setTerminalInput(cmd)}
                            className={`text-[10px] px-2.5 py-1 rounded-lg border transition-all ${
                              terminalInput === cmd
                                ? "bg-[#9B4A57] text-white border-[#7A3441] font-medium"
                                : "bg-[#FBF7F6] text-[#7C6A6D] border-[#9B4A57]/15 hover:text-[#2A1418]"
                            }`}
                          >
                            --{cmd}
                          </button>
                        ))}
                      </div>

                      <div className="space-y-1.5 text-xs leading-relaxed font-mono">
                        {terminalOutputs[terminalInput]?.map((line, idx) => (
                          <p
                            key={idx}
                            className={
                              line.startsWith("$")
                                ? "text-[#9B4A57] font-bold"
                                : line.startsWith("🏢") || line.startsWith("🏆") || line.startsWith("🎓")
                                ? "text-[#D2410D] font-medium"
                                : "text-[#2A1418]"
                            }
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#9B4A57]/10 flex items-center justify-between text-[11px] text-[#7C6A6D]">
                      <span>Interactive developer console</span>
                      <span className="text-[#9B4A57] font-medium">status: ready</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ===================== INTERACTIVE LIVE SCREENER DEMO (SWINGTRADE INDIA) ===================== */}
        <section id="screener" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#9B4A57]/15 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#9B4A57]/10 border border-[#9B4A57]/20 flex items-center justify-center text-[#9B4A57]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold text-[#2A1418] flex items-center gap-2.5">
                  <span>Interactive Screener Engine: SwingTrade India</span>
                  <span className="text-[10px] font-heading font-semibold px-2.5 py-0.5 rounded-full bg-[#D2410D]/10 text-[#D2410D] border border-[#D2410D]/20">
                    Live Demo
                  </span>
                </h2>
                <p className="text-xs text-[#7C6A6D]">
                  Proprietary 0–10 ranking logic fusing Trend, Momentum & Volume indicators
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#7C6A6D] font-medium">Select Asset:</span>
              {(["RELIANCE", "TCS", "HDFCBANK", "TATAMOTORS"] as const).map((ticker) => (
                <button
                  key={ticker}
                  onClick={() => setSelectedStock(ticker)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                    selectedStock === ticker
                      ? "bg-[#9B4A57] border-[#7A3441] text-white shadow-xs"
                      : "bg-white border-[#9B4A57]/15 text-[#7C6A6D] hover:text-[#2A1418]"
                  }`}
                >
                  {ticker}
                </button>
              ))}
            </div>
          </div>

          {/* Screener Interactive Output Card */}
          <div className="morphism-card p-7 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-[#9B4A57]/15">
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="eyebrow-label">NSE Ticker Analysis</span>
                <span className="text-xs font-medium text-[#9B4A57] bg-[#9B4A57]/10 px-2 py-0.5 rounded-full">
                  Status: Validated
                </span>
              </div>
              <div className="text-3xl font-heading font-bold text-[#2A1418] flex items-center gap-3">
                <span>{selectedStock}</span>
                <span className="text-lg font-normal text-[#7C6A6D]">
                  ₹{stockData[selectedStock].price.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-[#7C6A6D] leading-relaxed">
                Detected Pattern:{" "}
                <strong className="text-[#2A1418] font-semibold">{stockData[selectedStock].pattern}</strong>
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#9B4A57]/12 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-[#7C6A6D]">Composite Signal Score</span>
                  <span className="text-[#D2410D] font-heading font-bold text-lg">
                    {stockData[selectedStock].score} / 10.0
                  </span>
                </div>
                <div className="w-full bg-[#FBF7F6] rounded-full h-2 overflow-hidden border border-[#9B4A57]/10">
                  <div
                    className="bg-gradient-to-r from-[#9B4A57] to-[#D2410D] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(stockData[selectedStock].score / 10) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-xl bg-white border border-[#9B4A57]/12 shadow-xs">
                <div className="eyebrow-label">Trend Direction</div>
                <div className="text-sm font-semibold text-[#2A1418] mt-1.5">
                  {stockData[selectedStock].trend}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#9B4A57]/12 shadow-xs">
                <div className="eyebrow-label">RSI Momentum</div>
                <div className="text-sm font-semibold text-[#2A1418] mt-1.5">
                  {stockData[selectedStock].momentum} / 100
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#9B4A57]/12 shadow-xs">
                <div className="eyebrow-label">Volume Anomaly</div>
                <div className="text-sm font-semibold text-[#2A1418] mt-1.5">
                  {stockData[selectedStock].volumeRatio}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#9B4A57]/12 shadow-xs">
                <div className="eyebrow-label">Target Level</div>
                <div className="text-sm font-bold text-[#D2410D] font-heading mt-1.5">
                  ₹{stockData[selectedStock].target}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#9B4A57]/12 shadow-xs">
                <div className="eyebrow-label">Stop Loss (ATR)</div>
                <div className="text-sm font-bold text-[#7A3441] font-heading mt-1.5">
                  ₹{stockData[selectedStock].stopLoss}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#9B4A57]/12 shadow-xs">
                <div className="eyebrow-label">Entry Trigger</div>
                <div className="text-sm font-bold text-[#9B4A57] font-heading mt-1.5">
                  ₹{stockData[selectedStock].entry}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== PROJECTS & COLLABORATIONS ===================== */}
        <section id="projects" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#9B4A57]/15 pb-4">
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#2A1418] tracking-tight">
                Featured Systems & Collaborations
              </h2>
              <p className="text-xs text-[#7C6A6D] mt-0.5">
                Flagship production software engineered with modern stacks and verifiable commits
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                { id: "all", label: "All Systems (3)" },
                { id: "lead", label: "Lead Author (2)" },
                { id: "collab", label: "Collaborations (1)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectFilter(tab.id as typeof projectFilter)}
                  className={`px-3.5 py-1.5 rounded-xl border font-medium transition-all ${
                    projectFilter === tab.id
                      ? "bg-[#9B4A57] border-[#7A3441] text-white shadow-xs"
                      : "bg-white border-[#9B4A57]/15 text-[#7C6A6D] hover:text-[#2A1418]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  className="morphism-card p-6 flex flex-col justify-between border border-[#9B4A57]/15 hover:border-[#9B4A57]/35"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FBF7F6] border border-[#9B4A57]/15 flex items-center justify-center text-[#9B4A57] shadow-xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-heading font-bold text-[#2A1418]">
                            {p.title}
                          </h3>
                          <span
                            className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                              p.roleType === "lead"
                                ? "bg-[#D2410D]/10 text-[#D2410D] border border-[#D2410D]/20"
                                : "bg-[#9B4A57]/10 text-[#7A3441] border border-[#9B4A57]/20"
                            }`}
                          >
                            {p.role}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] text-[#7C6A6D] bg-[#FBF7F6] px-2.5 py-1 rounded-md border border-[#9B4A57]/10 w-fit">
                      <GitCommit className="w-3.5 h-3.5 text-[#9B4A57]" />
                      <span>{p.gitBadge}</span>
                    </div>

                    <p className="text-xs text-[#9B4A57] font-medium leading-normal">{p.tagline}</p>
                    <p className="text-xs text-[#7C6A6D] leading-relaxed">{p.description}</p>

                    {p.collabNote && (
                      <div className="text-[11px] text-[#7A3441] bg-[#9B4A57]/6 p-2 rounded-lg border border-[#9B4A57]/15">
                        ⚡ {p.collabNote}
                      </div>
                    )}

                    <div className="space-y-1.5 pt-1">
                      {p.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#7C6A6D]">
                          <span className="text-[#9B4A57] font-bold mt-0.5">·</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#9B4A57]/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-white text-[#7C6A6D] border border-[#9B4A57]/12 shadow-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white border border-[#9B4A57]/15 text-[#7C6A6D] hover:text-[#9B4A57] hover:border-[#9B4A57]/40 shadow-xs transition-all"
                      title="Inspect Code"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== EXPERIENCE & ACADEMICS ===================== */}
        <section id="experience" className="scroll-mt-24 space-y-6">
          <div className="border-b border-[#9B4A57]/15 pb-4">
            <h2 className="text-2xl font-heading font-bold text-[#2A1418] tracking-tight">
              Experience & Academic Track Record
            </h2>
            <p className="text-xs text-[#7C6A6D] mt-0.5">
              Industry software engineering internship, national collegiate honors, and degree progress
            </p>
          </div>

          <div className="space-y-4">
            {/* BanksBuddy Internship */}
            <div className="morphism-card p-6 border border-[#9B4A57]/15">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#9B4A57]/10 pb-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-heading font-bold text-[#2A1418]">BanksBuddy</h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#9B4A57]/10 text-[#7A3441] border border-[#9B4A57]/20 font-medium">
                      Full-Stack Web Intern
                    </span>
                  </div>
                  <p className="text-xs text-[#7C6A6D] mt-0.5">
                    Digital Banking Assistance Platform
                  </p>
                </div>
                <div className="text-xs text-[#7C6A6D] bg-[#FBF7F6] px-3 py-1 rounded-md border border-[#9B4A57]/10 w-fit">
                  Dec 2025 — Feb 2026
                </div>
              </div>

              <ul className="space-y-2 text-sm text-[#7C6A6D] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#9B4A57] font-bold">›</span>
                  <span>
                    Developed responsive digital banking customer support interface using <strong>React</strong> with <strong>Vite + Bun runtime</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9B4A57] font-bold">›</span>
                  <span>
                    Integrated backend session authentication, live ticket data listeners, and cloud deployment pipelines via <strong>Node.js</strong> and <strong>Firebase</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9B4A57] font-bold">›</span>
                  <span>
                    Managed DNS record configuration and custom domain mapping using <strong>GoDaddy</strong> and <strong>Vercel</strong> edge networking.
                  </span>
                </li>
              </ul>
            </div>

            {/* .Execute NMIMS Indore */}
            <div className="morphism-card p-6 border border-[#9B4A57]/15">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#9B4A57]/10 pb-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-heading font-bold text-[#2A1418]">.Execute — NMIMS Indore</h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D2410D]/10 text-[#D2410D] border border-[#D2410D]/20 font-medium">
                      National Level Hackathon Finalist
                    </span>
                  </div>
                  <p className="text-xs text-[#7C6A6D] mt-0.5">
                    Flagship national collegiate hackathon by NMIMS MPSTME, Indore
                  </p>
                </div>
                <div className="text-xs text-[#7C6A6D] bg-[#FBF7F6] px-3 py-1 rounded-md border border-[#9B4A57]/10 w-fit">
                  National Competitions · 2025–2026
                </div>
              </div>

              <ul className="space-y-2 text-sm text-[#7C6A6D] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#D2410D] font-bold">›</span>
                  <span>
                    National Level Hackathon Finalist at <strong>.Execute (NMIMS Indore)</strong> representing collegiate engineering team.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D2410D] font-bold">›</span>
                  <span>
                    Active competitive contributor across major hackathons: <strong>.Execute (NMIMS Indore)</strong>, <strong>INNOHACK 2.0</strong>, <strong>Techathon 3.0</strong>, <strong>TENET</strong>, and <strong>SIH 2025</strong>.
                  </span>
                </li>
              </ul>
            </div>

            {/* Education Degree */}
            <div className="morphism-card p-6 border border-[#9B4A57]/15">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#9B4A57]/10 pb-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-heading font-bold text-[#2A1418]">B.E. in Computer Science and Engineering</h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#9B4A57]/10 text-[#7A3441] border border-[#9B4A57]/20 font-semibold">
                      Avg. CGPA: 8.923 / 10.0
                    </span>
                  </div>
                  <p className="text-xs text-[#7C6A6D] mt-0.5">
                    Nutan Maharashtra Institute of Engineering and Technology, Talegaon Dabhade, Maharashtra
                  </p>
                </div>
                <div className="text-xs text-[#7C6A6D] bg-[#FBF7F6] px-3 py-1 rounded-md border border-[#9B4A57]/10 w-fit">
                  2024 — 2028
                </div>
              </div>
              <p className="text-sm text-[#7C6A6D] leading-relaxed">
                Focus on Advanced Data Structures, Object-Oriented Software Design, Financial Systems, and Database Architectures.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== TECHNICAL ARSENAL ===================== */}
        <section id="skills" className="scroll-mt-24 space-y-6">
          <div className="border-b border-[#9B4A57]/15 pb-4">
            <h2 className="text-2xl font-heading font-bold text-[#2A1418] tracking-tight">
              Technical Arsenal
            </h2>
            <p className="text-xs text-[#7C6A6D] mt-0.5">
              Curated language proficiencies, development frameworks, and analytical toolsets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsCategories.map((cat) => (
              <div
                key={cat.title}
                className="morphism-card p-5 border border-[#9B4A57]/15"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D2410D]" />
                  <h3 className="eyebrow-label">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white text-[#2A1418] border border-[#9B4A57]/12 shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== PRE-FOOTER INTERACTIVE CTA ===================== */}
        <section
          id="contact"
          className="scroll-mt-24 relative rounded-3xl overflow-hidden border border-[#9B4A57]/20 bg-gradient-to-b from-white via-[#FBF7F6] to-white p-8 sm:p-14 shadow-lg text-center"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs morphism-card bg-white text-[#9B4A57] border border-[#9B4A57]/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D2410D] animate-pulse" />
              <span>Available for Summer & Fall 2026 Internships</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#2A1418] tracking-tight leading-tight">
                Let’s engineer something exceptional together.
              </h2>
              <p className="text-sm sm:text-base text-[#7C6A6D] max-w-xl mx-auto leading-relaxed">
                Whether you’re recruiting for a software engineering internship, want to collaborate on FinTech stock screener algorithms, or discuss hackathons — I’m always open to talking tech.
              </p>
            </div>

            {/* Tactile Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left pt-2">
              <button
                onClick={copyEmail}
                className="morphism-card p-4 border border-[#9B4A57]/15 hover:border-[#9B4A57]/35 group transition-all"
              >
                <div className="flex items-center justify-between text-xs text-[#7C6A6D] mb-2">
                  <span className="font-heading font-semibold">Direct Email</span>
                  {copied ? (
                    <span className="text-[#D2410D] text-[11px] font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#9B4A57] group-hover:scale-105 transition-transform" />
                  )}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#2A1418] group-hover:text-[#9B4A57] transition-colors truncate">
                  {EMAIL}
                </div>
                <div className="text-[10px] text-[#7C6A6D] mt-1">Click to copy address</div>
              </button>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="morphism-card p-4 border border-[#9B4A57]/15 hover:border-[#9B4A57]/35 group transition-all"
              >
                <div className="flex items-center justify-between text-xs text-[#7C6A6D] mb-2">
                  <span className="font-heading font-semibold">LinkedIn Network</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9B4A57] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#2A1418] group-hover:text-[#9B4A57] transition-colors truncate">
                  /in/utkarsh-vidwat
                </div>
                <div className="text-[10px] text-[#7C6A6D] mt-1">Connect professionally</div>
              </a>

              <a
                href={`tel:${PHONE}`}
                className="morphism-card p-4 border border-[#9B4A57]/15 hover:border-[#9B4A57]/35 group transition-all"
              >
                <div className="flex items-center justify-between text-xs text-[#7C6A6D] mb-2">
                  <span className="font-heading font-semibold">Direct Telephone</span>
                  <Phone className="w-3.5 h-3.5 text-[#9B4A57] group-hover:scale-105 transition-transform" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#2A1418] group-hover:text-[#9B4A57] transition-colors">
                  {PHONE}
                </div>
                <div className="text-[10px] text-[#7C6A6D] mt-1">IST (UTC +5:30)</div>
              </a>
            </div>

            {/* Quick Live Context Bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs text-[#7C6A6D] border-t border-[#9B4A57]/12">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#9B4A57]" />
                <span>Pune, Maharashtra, India</span>
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#9B4A57]" />
                <span>CGPA 8.923 / 10.0 · NMIET</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#D2410D]" />
                <span>Status: Actively Building</span>
              </span>
            </div>
          </div>
        </section>

        {/* ===================== MORPHISM MULTI-COLUMN FOOTER ===================== */}
        <footer className="pt-8 pb-12 border-t border-[#9B4A57]/15 space-y-12 relative overflow-hidden">
          {/* Subtle Watermark */}
          <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 text-[110px] sm:text-[170px] font-heading font-black tracking-tighter text-[#9B4A57]/[0.03] select-none whitespace-nowrap">
            UTKARSH VIDWAT
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs relative z-10">
            {/* Col 1: Identity */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-white border border-[#9B4A57]/20 flex items-center justify-center font-heading font-bold text-[#9B4A57] text-xs shadow-xs">
                  UV
                </span>
                <span className="font-heading font-bold text-sm tracking-tight text-[#2A1418]">
                  Utkarsh Vidwat
                </span>
              </div>
              <p className="text-[#7C6A6D] text-xs leading-relaxed max-w-sm">
                Computer Science undergraduate specializing in full-stack architecture, FinTech market screeners, and high-performance web systems. National Hackathon Finalist.
              </p>
              <div className="pt-1 flex items-center gap-2 text-[11px] text-[#7C6A6D]">
                <span className="w-2 h-2 rounded-full bg-[#D2410D]" />
                <span>git status: clean · main branch</span>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="md:col-span-2 space-y-2.5">
              <div className="eyebrow-label">Navigation</div>
              <ul className="space-y-1.5 text-[#7C6A6D]">
                <li>
                  <a href="#about" className="hover:text-[#2A1418] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#screener" className="hover:text-[#2A1418] transition-colors">
                    Live Screener
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#2A1418] transition-colors">
                    Featured Systems
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-[#2A1418] transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-[#2A1418] transition-colors">
                    Arsenal
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Flagship Systems */}
            <div className="md:col-span-3 space-y-2.5">
              <div className="eyebrow-label">Flagship Systems</div>
              <ul className="space-y-1.5 text-[#7C6A6D]">
                <li>
                  <a href="#screener" className="hover:text-[#2A1418] transition-colors flex items-center gap-1.5">
                    <span>SwingTrade India</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#D2410D]/10 text-[#D2410D]">Lead</span>
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#2A1418] transition-colors flex items-center gap-1.5">
                    <span>Bros@24 E-Commerce</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#D2410D]/10 text-[#D2410D]">Lead</span>
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#2A1418] transition-colors flex items-center gap-1.5">
                    <span>BanksBuddy Platform</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#9B4A57]/10 text-[#7A3441]">Collab</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Network & Connect */}
            <div className="md:col-span-2 space-y-2.5">
              <div className="eyebrow-label">Connect</div>
              <ul className="space-y-1.5 text-[#7C6A6D]">
                <li>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#9B4A57] flex items-center gap-1.5 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2A1418] flex items-center gap-1.5 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="hover:text-[#2A1418] flex items-center gap-1.5 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PHONE}`}
                    className="hover:text-[#2A1418] flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sub-Footer Bottom Bar */}
          <div className="pt-6 border-t border-[#9B4A57]/12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7C6A6D] relative z-10">
            <div>
              © {new Date().getFullYear()} Utkarsh Vidwat · Pune, Maharashtra, India
            </div>

            <div className="flex items-center gap-6">
              <span className="text-[11px] text-[#7C6A6D] hidden sm:inline">
                Next.js 16 · React 19 · Tailwind CSS · Morphism UI
              </span>
              <button
                onClick={scrollToTop}
                className="btn-maroon-ghost px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 transition-all"
                title="Scroll back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

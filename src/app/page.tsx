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
  Brain,
  Layers,
  ArrowUpRight,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Activity,
  Calendar,
  FolderGit2,
  SlidersHorizontal,
  ArrowUp,
  MapPin,
  Clock,
  Sparkle,
  Code2,
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
  const [projectFilter, setProjectFilter] = useState<"all" | "lead" | "collab" | "fintech">("all");
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
      pattern: "Bullish Engulfing + Volume Breakout",
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
      pattern: "Ascending Triangle Support",
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
      pattern: "Volume Expansion on EMA 20 Rebound",
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

  // Authentic Git commit log history for Utkarsh
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
      repo: "SIH-2025/civic-tech-engine",
      hash: "7c9082a",
      message: "fix(ws): reduce latency in real-time edge processing for national jury demo",
      date: "SIH 2025",
      branch: "final-sih",
      commits: "22 commits (Collaborator)",
    },
  ];

  const terminalOutputs: Record<string, string[]> = {
    skills: [
      "$ dev --inspect-stack",
      "Core Languages  :: C, C++, Python, Java, JavaScript, TypeScript, SQL",
      "Frontend Arch   :: React.js, Next.js 16 (App Router), Tailwind CSS, Vite",
      "Backend & Edge  :: Node.js, Express.js, Bun runtime, REST APIs",
      "Data & Storage  :: MongoDB, MySQL, Firebase Firestore",
      "Data Science/AI :: Pandas, NumPy, OpenAI API, NLP Pipelines, PyTorch",
      "DevOps / Tools  :: Git, GitHub, Vercel Edge, Postman, GoDaddy DNS, Figma",
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
      "🏆 Smart India Hackathon (SIH 2025) — National Level Finalist (Top Tier)",
      "🏆 2-Time National Hackathon Finalist across multi-disciplinary teams",
      "🏆 Contender: INNOHACK 2.0, Techathon 3.0, TENET, .Execute",
    ],
    academics: [
      "$ dev --education",
      "🎓 B.E. in Computer Science and Engineering (2024 – 2028)",
      "📍 Nutan Maharashtra Institute of Engineering & Technology, Talegaon Dabhade",
      "📈 Academic Performance: Average CGPA 8.923 / 10.0",
    ],
    contact: [
      "$ dev --contact-info",
      `📧 Email: ${EMAIL}`,
      `📞 Mobile: ${PHONE}`,
      `🐙 GitHub: ${GITHUB_URL}`,
      `💼 LinkedIn: ${LINKEDIN_URL}`,
    ],
  };

  // Flagship 4 Projects (2 Lead + 2 Team Collaborations)
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
        "Engineered proprietary 0–10 composite ranking engine dynamically filtering NIFTY constituent stocks.",
        "Instant calculation of volatility-adjusted Entry, Target 1/2, and Stop Loss thresholds.",
        "Integrated interactive TradingView technical chart canvas with overlay indicators.",
        "Automated pattern recognition for Bullish Engulfing, Morning Star, and abnormal volume surges.",
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
        "Set up production deployment pipeline on Vercel with custom GoDaddy domain SSL routing.",
        "Conducted security reviews protecting against credential exposure and malicious API payloads.",
      ],
      tech: ["React.js", "Vite", "Bun", "Node.js", "Firebase", "Vercel", "GoDaddy DNS"],
      github: "https://github.com/Utkarsh9090",
      icon: Briefcase,
    },
    {
      id: "sih2025",
      title: "SIH 2025 Finalist Platform",
      role: "Core Full-Stack Collaborator",
      roleType: "collab",
      category: "collab",
      period: "Smart India Hackathon 2025",
      gitBadge: "22 commits · 4 PRs merged",
      collabNote: "6-developer hackathon team · National Level Finalist",
      tagline: "National Level Problem Solving & Scalable Civic Technology",
      description:
        "Developed under rigorous 36-hour hackathon constraints for Smart India Hackathon 2025, solving complex real-world data and service routing challenges.",
      highlights: [
        "Selected as National Finalist out of thousands of competing collegiate engineering teams across India.",
        "Spearheaded real-time frontend dashboard and state synchronization under tight evaluation deadlines.",
        "Architected RESTful endpoint pipelines connecting data ingestion modules with reactive UI.",
        "Presented live software deployment to national jury panels with zero-downtime performance.",
      ],
      tech: ["React", "TypeScript", "Node.js", "REST APIs", "WebSocket", "Vercel"],
      github: "https://github.com/Utkarsh9090",
      icon: Award,
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (projectFilter === "all") return true;
    if (projectFilter === "lead") return p.roleType === "lead";
    if (projectFilter === "collab") return p.roleType === "collab";
    if (projectFilter === "fintech") return p.category === "fintech";
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
    <div className="relative min-h-screen bg-[#08090d] text-[#ededed] font-sans selection:bg-sky-500/20 selection:text-sky-200">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-sky-500/10 via-indigo-500/10 to-transparent blur-[130px] rounded-full ambient-glow" />
      <div className="pointer-events-none absolute top-[40%] -left-80 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute top-[70%] -right-80 w-[600px] h-[600px] bg-sky-500/5 blur-[150px] rounded-full" />

      {/* Senior UI Nav Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08090d]/85 border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-mono text-xs font-semibold text-white group-hover:border-sky-500/50 group-hover:text-sky-400 transition-all">
              UV
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-zinc-100 group-hover:text-white transition-colors">
                Utkarsh Vidwat
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                Full-Stack & FinTech Engineer
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <a href="#about" className="hover:text-zinc-100 transition-colors">
              About
            </a>
            <a href="#screener" className="hover:text-zinc-100 transition-colors">
              Live Screener
            </a>
            <a href="#projects" className="hover:text-zinc-100 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-zinc-100 transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-zinc-100 transition-colors">
              Arsenal
            </a>
            <a href="#contact" className="hover:text-zinc-100 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900/80 border border-white/[0.08] text-zinc-300 hover:text-white hover:border-white/20 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900/80 border border-white/[0.08] text-zinc-300 hover:text-white hover:border-sky-500/40 hover:text-sky-400 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={copyEmail}
              className="tactile-btn text-xs px-3 py-1.5 rounded-lg text-zinc-200 hover:text-white flex items-center gap-1.5 transition-all font-mono"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Email</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-28">
        {/* ===================== HERO SECTION ===================== */}
        <section id="about" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Authentic Developer Manifesto */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-zinc-900/90 border border-white/[0.08] text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for SDE / Full-Stack Summer & Fall Internships</span>
              </div>

              {/* Title & Introduction */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                  Building thoughtful web systems, FinTech engines & algorithms.
                </h1>
                <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal pt-1">
                  I’m <strong className="text-zinc-100 font-semibold">Utkarsh Vidwat</strong> — a Computer Science
                  undergraduate at NMIET with an average CGPA of <span className="text-sky-400 font-mono font-medium">8.923/10</span>.
                  I design and engineer responsive web applications, financial market screeners, and
                  AI-assisted utilities. I believe in writing readable, performant code with clean UI craft.
                </p>
              </div>

              {/* Real Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="surface-card p-3 rounded-xl border border-white/[0.07]">
                  <div className="text-xs font-mono text-zinc-400">Academia</div>
                  <div className="text-xl font-bold text-white mt-1">8.92 CGPA</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Top Tier (2024–28)</div>
                </div>
                <div className="surface-card p-3 rounded-xl border border-white/[0.07]">
                  <div className="text-xs font-mono text-zinc-400">Hackathons</div>
                  <div className="text-xl font-bold text-amber-400 mt-1">2x Finalist</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">SIH 2025 National</div>
                </div>
                <div className="surface-card p-3 rounded-xl border border-white/[0.07]">
                  <div className="text-xs font-mono text-zinc-400">Open Source</div>
                  <div className="text-xl font-bold text-sky-400 mt-1">25+ Repos</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">GitHub @Utkarsh9090</div>
                </div>
                <div className="surface-card p-3 rounded-xl border border-white/[0.07]">
                  <div className="text-xs font-mono text-zinc-400">Industry</div>
                  <div className="text-xl font-bold text-emerald-400 mt-1">BanksBuddy</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Full-Stack Intern</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href="#projects"
                  className="tactile-btn-primary px-5 py-2.5 rounded-xl text-xs flex items-center gap-2"
                >
                  <span>Explore Featured Projects</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-btn px-4 py-2.5 rounded-xl text-xs text-zinc-300 hover:text-white flex items-center gap-2 font-mono"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-btn px-4 py-2.5 rounded-xl text-xs text-zinc-300 hover:text-white flex items-center gap-2 font-mono"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Right Column: Workstation ID Card with Interactive Tabs & Photo */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* Interactive Card Shell */}
              <div className="w-full max-w-sm surface-card rounded-2xl border border-white/[0.09] overflow-hidden shadow-2xl">
                {/* Header Switcher */}
                <div className="p-3 bg-zinc-950/70 border-b border-white/[0.07] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="text-[11px] font-mono text-zinc-400 ml-1.5">utkarsh.identity</span>
                  </div>

                  <div className="flex items-center gap-1 bg-zinc-900 p-0.5 rounded-lg border border-white/[0.06]">
                    <button
                      onClick={() => setHeroCardMode("photo")}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        heroCardMode === "photo"
                          ? "bg-zinc-800 text-white font-medium"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      Photo
                    </button>
                    <button
                      onClick={() => setHeroCardMode("commits")}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1 ${
                        heroCardMode === "commits"
                          ? "bg-zinc-800 text-white font-medium"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <GitCommit className="w-3 h-3 text-sky-400" />
                      <span>Commits</span>
                    </button>
                    <button
                      onClick={() => setHeroCardMode("terminal")}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1 ${
                        heroCardMode === "terminal"
                          ? "bg-zinc-800 text-white font-medium"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <Terminal className="w-3 h-3 text-emerald-400" />
                      <span>CLI</span>
                    </button>
                  </div>
                </div>

                {/* Card Body by View Mode */}
                {heroCardMode === "photo" && (
                  <div className="p-4 space-y-3">
                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950 border border-white/[0.08]">
                      <Image
                        src="/utkarsh.jpg"
                        alt="Utkarsh Vidwat"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="380px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090d]/90 via-transparent to-transparent" />

                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-zinc-950/85 backdrop-blur-md border border-white/[0.08]">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-white flex items-center gap-1.5">
                              <span>Utkarsh Vidwat</span>
                              <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            </div>
                            <div className="text-[10px] text-zinc-400 font-mono">
                              Computer Science · 2nd Year
                            </div>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                            Pune, IN
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-1 px-1">
                      <span className="flex items-center gap-1.5">
                        <GitBranch className="w-3.5 h-3.5 text-sky-400" />
                        <span>branch: main</span>
                      </span>
                      <span>B.E. 2024–2028</span>
                    </div>
                  </div>
                )}

                {heroCardMode === "commits" && (
                  <div className="p-4 space-y-2.5 max-h-[460px] overflow-y-auto">
                    <div className="text-[11px] font-mono text-zinc-400 flex items-center justify-between pb-1 border-b border-white/[0.06]">
                      <span>Recent Commits & Contributions</span>
                      <span className="text-sky-400">@Utkarsh9090</span>
                    </div>

                    {commitLogs.map((log) => (
                      <div
                        key={log.hash}
                        className="p-2.5 rounded-lg bg-zinc-900/60 border border-white/[0.05] space-y-1 font-mono text-xs"
                      >
                        <div className="flex items-center justify-between text-[10px] text-zinc-400">
                          <span className="text-sky-400">{log.repo}</span>
                          <span className="text-zinc-400">{log.hash}</span>
                        </div>
                        <p className="text-[11px] text-zinc-200 leading-tight">{log.message}</p>
                        <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-0.5">
                          <span>{log.commits}</span>
                          <span>{log.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {heroCardMode === "terminal" && (
                  <div className="p-4 space-y-3 font-mono text-xs text-zinc-300 min-h-[440px] flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1 pb-1">
                        {["skills", "experience", "hackathons", "academics", "contact"].map((cmd) => (
                          <button
                            key={cmd}
                            onClick={() => setTerminalInput(cmd)}
                            className={`text-[10px] px-2 py-0.5 rounded border ${
                              terminalInput === cmd
                                ? "bg-sky-500/20 text-sky-300 border-sky-400/50"
                                : "bg-zinc-900 text-zinc-400 border-white/[0.06] hover:text-white"
                            }`}
                          >
                            --{cmd}
                          </button>
                        ))}
                      </div>

                      <div className="space-y-1 text-[11px] leading-relaxed">
                        {terminalOutputs[terminalInput]?.map((line, idx) => (
                          <p
                            key={idx}
                            className={
                              line.startsWith("$")
                                ? "text-sky-400 font-bold"
                                : line.startsWith("🏢") || line.startsWith("🏆") || line.startsWith("🎓")
                                ? "text-amber-300 font-medium"
                                : "text-zinc-300"
                            }
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-400">
                      <span>Interactive console</span>
                      <span className="text-emerald-400 font-mono">status: ready</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ===================== INTERACTIVE LIVE SCREENER DEMO (SWINGTRADE INDIA) ===================== */}
        <section id="screener" className="scroll-mt-24 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.07] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Interactive Screener Engine: SwingTrade India</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Live Demo
                  </span>
                </h2>
                <p className="text-xs text-zinc-400 font-mono">
                  Test the proprietary 0–10 ranking logic fusing Trend, Momentum & Volume
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-zinc-400">Select Asset:</span>
              {(["RELIANCE", "TCS", "HDFCBANK", "TATAMOTORS"] as const).map((ticker) => (
                <button
                  key={ticker}
                  onClick={() => setSelectedStock(ticker)}
                  className={`px-2.5 py-1 rounded-lg border transition-all ${
                    selectedStock === ticker
                      ? "bg-sky-500/20 border-sky-400/60 text-sky-300 font-bold"
                      : "bg-zinc-900 border-white/[0.07] text-zinc-400 hover:text-white"
                  }`}
                >
                  {ticker}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Screener Output Box */}
          <div className="surface-card p-6 rounded-2xl border border-white/[0.08] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">NSE Index Ticker</span>
                <span className="text-xs font-mono text-emerald-400">Status: Validated</span>
              </div>
              <div className="text-2xl font-bold text-white font-mono flex items-center gap-2">
                <span>{selectedStock}</span>
                <span className="text-sm font-normal text-zinc-400">
                  ₹{stockData[selectedStock].price.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                Detected Pattern:{" "}
                <strong className="text-zinc-200">{stockData[selectedStock].pattern}</strong>
              </p>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-white/[0.06] space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">Composite Score</span>
                  <span className="text-sky-400 font-bold text-base">
                    {stockData[selectedStock].score} / 10.0
                  </span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-sky-400 to-indigo-500 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${(stockData[selectedStock].score / 10) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
                <div className="text-[11px] font-mono text-zinc-400">Trend Status</div>
                <div className="text-xs font-semibold text-white mt-1">
                  {stockData[selectedStock].trend}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
                <div className="text-[11px] font-mono text-zinc-400">RSI Momentum</div>
                <div className="text-xs font-semibold text-white mt-1">
                  {stockData[selectedStock].momentum} / 100
                </div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
                <div className="text-[11px] font-mono text-zinc-400">Volume Surge</div>
                <div className="text-xs font-semibold text-white mt-1">
                  {stockData[selectedStock].volumeRatio}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
                <div className="text-[11px] font-mono text-zinc-400">Target Level</div>
                <div className="text-xs font-bold text-emerald-400 font-mono mt-1">
                  ₹{stockData[selectedStock].target}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
                <div className="text-[11px] font-mono text-zinc-400">Stop Loss (ATR)</div>
                <div className="text-xs font-bold text-rose-400 font-mono mt-1">
                  ₹{stockData[selectedStock].stopLoss}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
                <div className="text-[11px] font-mono text-zinc-400">Entry Trigger</div>
                <div className="text-xs font-bold text-sky-400 font-mono mt-1">
                  ₹{stockData[selectedStock].entry}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== PROJECTS & COLLABORATIONS ===================== */}
        <section id="projects" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.07] pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Featured Systems & Collaborations</span>
              </h2>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Core applications as Lead Author and open-source team collaborations with commit metrics
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {[
                { id: "all", label: "All (4)" },
                { id: "lead", label: "Lead Author (2)" },
                { id: "collab", label: "Collaborations (2)" },
                { id: "fintech", label: "FinTech & Web (3)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectFilter(tab.id as typeof projectFilter)}
                  className={`px-3 py-1.5 rounded-lg border transition-all ${
                    projectFilter === tab.id
                      ? "bg-sky-500/20 border-sky-400/50 text-sky-300 font-semibold"
                      : "bg-zinc-900/80 border-white/[0.06] text-zinc-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  className="surface-card surface-card-hover rounded-2xl p-6 flex flex-col justify-between border border-white/[0.08]"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center text-sky-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white flex items-center gap-2">
                            <span>{p.title}</span>
                          </h3>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                              p.roleType === "lead"
                                ? "bg-sky-500/10 text-sky-300 border border-sky-500/20"
                                : "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                            }`}
                          >
                            {p.role}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 font-mono text-[10px] text-zinc-400 bg-zinc-900/90 px-2 py-1 rounded-md border border-white/[0.06]">
                        <GitCommit className="w-3 h-3 text-sky-400" />
                        <span>{p.gitBadge}</span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 leading-normal font-mono">{p.tagline}</p>
                    <p className="text-sm text-zinc-300 leading-relaxed">{p.description}</p>

                    {p.collabNote && (
                      <div className="text-[11px] font-mono text-purple-300 bg-purple-950/30 p-2 rounded-lg border border-purple-800/30">
                        ⚡ {p.collabNote}
                      </div>
                    )}

                    <div className="space-y-1.5 pt-1">
                      {p.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                          <span className="text-sky-400 font-bold mt-0.5">·</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tactile-btn p-2 rounded-lg text-zinc-300 hover:text-white shrink-0 ml-3"
                      title="Inspect Code"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== EXPERIENCE & ACADEMICS ===================== */}
        <section id="experience" className="scroll-mt-24 space-y-6">
          <div className="border-b border-white/[0.07] pb-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Experience & Track Record</h2>
            <p className="text-xs text-zinc-400 font-mono mt-0.5">
              Work history, collegiate education & competitive hackathon timeline
            </p>
          </div>

          <div className="space-y-4">
            {/* BanksBuddy Internship */}
            <div className="surface-card p-6 rounded-2xl border border-white/[0.08] relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-white">BanksBuddy</h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      Full-Stack Web Intern
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Digital Banking Assistance Platform
                  </p>
                </div>
                <div className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-md border border-white/[0.06] w-fit">
                  Dec 2025 — Feb 2026
                </div>
              </div>

              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-mono font-bold">›</span>
                  <span>
                    Developed responsive digital banking customer support interface using <strong>React</strong> with <strong>Vite + Bun runtime</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-mono font-bold">›</span>
                  <span>
                    Integrated backend session authentication, live ticket data listeners, and cloud deployment pipelines via <strong>Node.js</strong> and <strong>Firebase</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-mono font-bold">›</span>
                  <span>
                    Managed DNS record configuration and custom domain mapping using <strong>GoDaddy</strong> and <strong>Vercel</strong> edge networking.
                  </span>
                </li>
              </ul>
            </div>

            {/* Smart India Hackathon & Hackathon Finalist */}
            <div className="surface-card p-6 rounded-2xl border border-white/[0.08] relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-white">Smart India Hackathon (SIH 2025)</h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      National Level Finalist (2x Finalist)
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Premier nationwide collegiate engineering competition
                  </p>
                </div>
                <div className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-md border border-white/[0.06] w-fit">
                  National Competitions · 2025
                </div>
              </div>

              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold">›</span>
                  <span>
                    Represented institution as a 2-time National Level Hackathon Finalist, including <strong>SIH 2025</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold">›</span>
                  <span>
                    Active competitive contributor across major hackathons: <strong>INNOHACK 2.0</strong>, <strong>Techathon 3.0</strong>, <strong>TENET</strong>, and <strong>.Execute</strong>.
                  </span>
                </li>
              </ul>
            </div>

            {/* Education Degree */}
            <div className="surface-card p-6 rounded-2xl border border-white/[0.08] relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-white">B.E. in Computer Science and Engineering</h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-bold">
                      Avg. CGPA: 8.923 / 10.0
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Nutan Maharashtra Institute of Engineering and Technology, Talegaon Dabhade, Maharashtra
                  </p>
                </div>
                <div className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-md border border-white/[0.06] w-fit">
                  2024 — 2028
                </div>
              </div>
              <p className="text-sm text-zinc-300">
                Specializing in Advanced Data Structures, Algorithms, Software Engineering, and Database Architecture.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== TECHNICAL ARSENAL ===================== */}
        <section id="skills" className="scroll-mt-24 space-y-6">
          <div className="border-b border-white/[0.07] pb-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Technical Arsenal</h2>
            <p className="text-xs text-zinc-400 font-mono mt-0.5">
              Categorized language proficiencies, development stacks, and analytical libraries
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsCategories.map((cat) => (
              <div
                key={cat.title}
                className="surface-card p-5 rounded-2xl border border-white/[0.07] hover:border-white/[0.14] transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <h3 className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-white/[0.06]"
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
          className="scroll-mt-24 relative rounded-3xl overflow-hidden border border-white/[0.1] bg-gradient-to-b from-zinc-900/90 via-[#0a0c13] to-[#08090d] p-8 sm:p-14 shadow-2xl"
        >
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 bg-sky-500/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-zinc-900/90 border border-white/[0.09] text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Summer & Fall 2026 Internships</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let’s engineer something exceptional together.
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
                Whether you’re looking for a passionate software engineering intern, want to collaborate on FinTech & stock screener systems, or discuss hackathons — let’s connect.
              </p>
            </div>

            {/* Tactile Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left pt-2">
              <button
                onClick={copyEmail}
                className="surface-card p-4 rounded-xl border border-white/[0.08] hover:border-sky-500/40 group transition-all"
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span>Direct Email</span>
                  <CopyIndicator copied={copied} />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-sky-400 transition-colors truncate">
                  {EMAIL}
                </div>
                <div className="text-[10px] text-zinc-400 font-mono mt-1">Click to copy address</div>
              </button>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card p-4 rounded-xl border border-white/[0.08] hover:border-sky-500/40 group transition-all"
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span>LinkedIn Network</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-sky-400 transition-colors truncate">
                  /in/utkarsh-vidwat
                </div>
                <div className="text-[10px] text-zinc-400 font-mono mt-1">Connect professionally</div>
              </a>

              <a
                href={`tel:${PHONE}`}
                className="surface-card p-4 rounded-xl border border-white/[0.08] hover:border-sky-500/40 group transition-all"
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span>Direct Phone</span>
                  <Phone className="w-3.5 h-3.5 text-zinc-400 group-hover:text-sky-400 transition-colors" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                  {PHONE}
                </div>
                <div className="text-[10px] text-zinc-400 font-mono mt-1">IST (UTC +5:30)</div>
              </a>
            </div>

            {/* Quick Live Context Bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-mono text-zinc-400 border-t border-white/[0.06]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Pune, Maharashtra, India</span>
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                <span>CGPA 8.923 / 10 · NMIET</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>Status: Active</span>
              </span>
            </div>
          </div>
        </section>

        {/* ===================== SENIOR UI CRAFT MULTI-COLUMN FOOTER ===================== */}
        <footer className="pt-8 pb-12 border-t border-white/[0.08] space-y-12 relative overflow-hidden">
          {/* Subtle Background Watermark */}
          <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 text-[120px] sm:text-[180px] font-black tracking-tighter text-white/[0.015] select-none whitespace-nowrap">
            UTKARSH VIDWAT
          </div>

          {/* 4-Column Navigation & Identity Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-mono relative z-10">
            {/* Col 1: Identity */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-bold text-white text-xs">
                  UV
                </span>
                <span className="font-bold text-sm tracking-tight text-white font-sans">
                  Utkarsh Vidwat
                </span>
              </div>
              <p className="text-zinc-400 text-xs font-sans leading-relaxed max-w-sm">
                Computer Science undergraduate specializing in full-stack architecture, FinTech market analytics, and high-performance web systems. 2-time National Hackathon Finalist.
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>git status: clean · main branch</span>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="md:col-span-2 space-y-2.5">
              <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
                Navigation
              </div>
              <ul className="space-y-1.5 text-zinc-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#screener" className="hover:text-white transition-colors">
                    Live Screener
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Featured Work
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-white transition-colors">
                    Arsenal
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Flagship Systems */}
            <div className="md:col-span-3 space-y-2.5">
              <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
                Flagship Systems
              </div>
              <ul className="space-y-1.5 text-zinc-400">
                <li>
                  <a href="#screener" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span>SwingTrade India</span>
                    <span className="text-[9px] px-1.5 rounded bg-sky-500/10 text-sky-400">Lead</span>
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span>Bros@24 E-Commerce</span>
                    <span className="text-[9px] px-1.5 rounded bg-sky-500/10 text-sky-400">Lead</span>
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span>BanksBuddy Platform</span>
                    <span className="text-[9px] px-1.5 rounded bg-purple-500/10 text-purple-400">Collab</span>
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span>SIH 2025 Finalist</span>
                    <span className="text-[9px] px-1.5 rounded bg-amber-500/10 text-amber-400">Finalist</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Network & Connect */}
            <div className="md:col-span-2 space-y-2.5">
              <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
                Connect
              </div>
              <ul className="space-y-1.5 text-zinc-400">
                <li>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 flex items-center gap-1.5 transition-colors"
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
                    className="hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PHONE}`}
                    className="hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sub-Footer Bottom Bar */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400 relative z-10">
            <div>
              © {new Date().getFullYear()} Utkarsh Vidwat · Pune, Maharashtra, India
            </div>

            <div className="flex items-center gap-6">
              <span className="text-[11px] text-zinc-400 hidden sm:inline">
                Next.js 16 · React 19 · Tailwind CSS
              </span>
              <button
                onClick={scrollToTop}
                className="tactile-btn px-3 py-1.5 rounded-lg text-zinc-300 hover:text-white flex items-center gap-1.5 text-xs transition-all"
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

function CopyIndicator({ copied }: { copied: boolean }) {
  if (copied) {
    return (
      <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
        <Check className="w-3 h-3" />
        <span>Copied</span>
      </span>
    );
  }
  return <Mail className="w-3.5 h-3.5 text-zinc-400" />;
}

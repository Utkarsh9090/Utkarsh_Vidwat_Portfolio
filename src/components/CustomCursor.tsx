"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [cursorText, setCursorText] = useState<string>("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "accent" | "copy" | "arrow">("default");

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad) and if motion is enabled
    if (typeof window === "undefined") return;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let glowX = -100;
    let glowY = -100;

    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        ringX = mouseX;
        ringY = mouseY;
        glowX = mouseX;
        glowY = mouseY;
      }

      // Update immediate dot position instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Dynamic hover listener using event delegation
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor], .morphism-card'
      ) as HTMLElement | null;

      if (interactive) {
        setIsHovered(true);

        const customText = interactive.getAttribute("data-cursor-text");
        if (customText) {
          setCursorText(customText);
        } else if (interactive.tagName.toLowerCase() === "a") {
          const isExternal = interactive.getAttribute("target") === "_blank";
          setCursorText(isExternal ? "↗" : "");
          setCursorVariant(isExternal ? "arrow" : "accent");
        } else if (interactive.getAttribute("data-cursor") === "copy") {
          setCursorText("COPY");
          setCursorVariant("copy");
        } else {
          setCursorText("");
          setCursorVariant("accent");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver);

    // Physics Lerp Loop for the smooth follower ring & ambient glow
    const render = () => {
      // Ring follows mouse with 0.18 lerp coefficient (fluid responsiveness)
      const ringLerp = 0.18;
      ringX += (mouseX - ringX) * ringLerp;
      ringY += (mouseY - ringY) * ringLerp;

      // Glow follows with slower 0.08 lerp for floating atmosphere
      const glowLerp = 0.08;
      glowX += (mouseX - glowX) * glowLerp;
      glowY += (mouseY - glowY) * glowLerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [isVisible]);

  return (
    <div
      className={`custom-cursor-container fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* 1. Ambient Cursor Glow (Soft Morphed Light) */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full pointer-events-none transition-transform duration-75 will-change-transform"
        style={{
          background:
            cursorVariant === "accent"
              ? "radial-gradient(circle, rgba(210, 65, 13, 0.06) 0%, rgba(155, 74, 87, 0.03) 40%, transparent 70%)"
              : "radial-gradient(circle, rgba(155, 74, 87, 0.045) 0%, transparent 65%)",
        }}
      />

      {/* 2. Primary Responsive Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none will-change-transform transition-[width,height,background-color,transform] duration-150 ease-out ${
          isMouseDown
            ? "w-1.5 h-1.5 bg-[#D2410D]"
            : isHovered
            ? "w-2.5 h-2.5 bg-[#D2410D] shadow-[0_0_10px_rgba(210,65,13,0.5)]"
            : "w-2 h-2 bg-[#9B4A57]"
        }`}
      />

      {/* 3. Outer Morphism Follower Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none will-change-transform flex items-center justify-center transition-[width,height,border-color,background-color,box-shadow,transform] duration-200 ease-out ${
          isMouseDown
            ? "w-7 h-7 border border-[#D2410D]/60 bg-[#D2410D]/10 scale-90"
            : isHovered
            ? cursorText
              ? "w-16 h-16 border border-[#D2410D]/40 bg-white/80 backdrop-blur-md shadow-[0_8px_20px_-4px_rgba(155,74,87,0.15)] scale-100"
              : "w-12 h-12 border border-[#9B4A57]/35 bg-white/40 backdrop-blur-[2px] shadow-[0_4px_16px_-2px_rgba(155,74,87,0.1)] scale-105"
            : "w-9 h-9 border border-[#9B4A57]/20 bg-transparent shadow-none"
        }`}
      >
        {/* Optional Micro-label for interactive elements */}
        {cursorText && (
          <span className="text-[9px] font-heading font-bold tracking-wider uppercase text-[#D2410D] select-none animate-in fade-in duration-150">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}

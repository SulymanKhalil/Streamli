"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Cog, Layers, Cpu, Globe, Building2, Network } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────────────
   Design token map — exact values from the supplied HTML / Tailwind config
   ──────────────────────────────────────────────────────────────────────── */
const C = {
  /* surfaces */
  surfaceLowest: "#FFFFFF",
  surfaceLow: "#F0F7FF",
  surface: "#FFFFFF",
  surfaceHigh: "#FFFFFF",
  surfaceHighest: "#F8FAFC",
  /* text */
  onSurface: "#0F172A",
  onSurfaceVariant: "#475569",
  /* primary */
  primary: "#0066FF",
  primaryContainer: "#0284C7",
  onPrimary: "#FFFFFF",
  onPrimaryContainer: "#FFFFFF",
  /* borders */
  outlineVariant: "#E2E8F0",
  outline: "#CBD5E1",
};

/* ─────────────────────────────────────────────────────────────────────────
   Typography helpers (exact font-size / line-height / letter-spacing from
   the HTML Tailwind config)
   ──────────────────────────────────────────────────────────────────────── */
const T = {
  displayXl: { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "4.5rem", lineHeight: "5rem", letterSpacing: "-0.035em", fontWeight: 600 },
  displayXlMobile: { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "2.75rem", lineHeight: "3.25rem", letterSpacing: "-0.025em", fontWeight: 600 },
  displayLg: { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "3.5rem", lineHeight: "4rem", letterSpacing: "-0.03em", fontWeight: 600 },
  displayLgMobile: { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "2.25rem", lineHeight: "2.75rem", letterSpacing: "-0.02em", fontWeight: 600 },
  headlineLg: { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "2.5rem", lineHeight: "3rem", letterSpacing: "-0.02em", fontWeight: 500 },
  headlineLgMob: { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "1.75rem", lineHeight: "2.25rem", letterSpacing: "-0.015em", fontWeight: 500 },
  headlineMd: { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "1.75rem", lineHeight: "2.25rem", letterSpacing: "-0.015em", fontWeight: 500 },
  headlineSm: { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "1.25rem", lineHeight: "1.75rem", letterSpacing: "-0.01em", fontWeight: 500 },
  bodyLg: { fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", lineHeight: "1.75rem", letterSpacing: "-0.011em", fontWeight: 400 },
  bodyMd: { fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: "1.5rem", letterSpacing: "-0.006em", fontWeight: 400 },
  labelMd: { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "0.75rem", lineHeight: "1rem", letterSpacing: "0.06em", fontWeight: 600 },
  labelSm: { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "0.6875rem", lineHeight: "0.875rem", letterSpacing: "0.08em", fontWeight: 600 },
};

/* Spacing from the HTML config */
const SP = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.75rem",
  xl: "3rem",
  gutter: "1.5rem",
  gutterLg: "2.5rem",
  gutterSm: "1rem",
  marginSm: "1.25rem",
  margin: "3rem",
  marginLg: "5rem",
};

function SystemTaxonomySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      num: "01",
      title: "Web Applications",
      desc: "High-throughput, reactive client interfaces operating seamlessly over distributed edge instances.",
      icon: <Globe className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "02",
      title: "Enterprise Software",
      desc: "Monolithic and service-oriented systems engineered for governance, longevity, and zero-loss durability.",
      icon: <Building2 className="w-5 h-5 text-purple-600" />,
    },
    {
      num: "03",
      title: "Distributed Systems",
      desc: "Decentralized computational fabrics engineered with deterministic concurrency and mathematically verified integrity.",
      icon: <Network className="w-5 h-5 text-indigo-600" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: C.surfaceLowest,
        borderBottom: `1px solid ${C.outlineVariant}`,
        paddingTop: SP.xl,
        paddingBottom: SP.xl,
      }}
      className="w-full md:py-[5rem]"
    >
      <div
        className="max-w-7xl mx-auto"
        style={{ paddingLeft: SP.marginSm, paddingRight: SP.marginSm }}
      >
        {/* 1. TOP: Full-width Header */}
        <div className="w-full flex flex-col gap-3 mb-8 md:mb-12">
          <div
            style={{
              ...T.labelSm,
              color: C.primary,
              letterSpacing: inView ? "0.08em" : "0.02em",
              opacity: inView ? 1 : 0.6,
              transition: "letter-spacing 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease",
            }}
          >
            SYSTEM TAXONOMY
          </div>

          <h2
            style={{
              ...T.headlineLgMob,
              color: C.onSurface,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="md:text-[2.5rem] md:leading-[3rem] md:tracking-[-0.02em] max-w-3xl"
          >
            Foundational platforms constructed for mission-critical load.
          </h2>

          {/* Full-width animated divider */}
          <div
            style={{
              height: "1px",
              backgroundColor: C.outlineVariant,
              width: "100%",
              marginTop: "0.5rem",
              transformOrigin: "left",
              transform: inView ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 100ms",
            }}
          />
        </div>

        {/* 2. PART A: Connected Architecture Diagram (Decorative SVG Visual) */}
        <div className="w-full relative overflow-hidden py-4 mb-8 md:mb-10 flex justify-center items-center">
          <svg
            viewBox="0 0 900 180"
            className="w-full max-w-4xl h-auto max-h-[180px] overflow-visible select-none pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Central Node Gradient */}
              <linearGradient id="centralNodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>

            {/* Connecting Bezier Paths — aligned to column centers (150, 450, 750) */}
            {/* Path 1: Central (450, 35) -> Node 1 (150, 135) */}
            <motion.path
              d="M 450 35 C 300 35, 150 70, 150 135"
              stroke="rgba(37, 99, 235, 0.35)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            {/* Path 2: Central (450, 35) -> Node 2 (450, 135) */}
            <motion.path
              d="M 450 35 C 450 65, 450 95, 450 135"
              stroke="rgba(37, 99, 235, 0.35)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.15 }}
            />
            {/* Path 3: Central (450, 35) -> Node 3 (750, 135) */}
            <motion.path
              d="M 450 35 C 600 35, 750 70, 750 135"
              stroke="rgba(37, 99, 235, 0.35)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            />

            {/* Traveling Pulse Dots along connecting paths */}
            {inView && (
              <>
                <circle r="4" fill="#2563eb" filter="drop-shadow(0px 0px 6px #2563eb)">
                  <animateMotion path="M 450 35 C 300 35, 150 70, 150 135" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle r="4" fill="#7c3aed" filter="drop-shadow(0px 0px 6px #7c3aed)">
                  <animateMotion path="M 450 35 C 450 65, 450 95, 450 135" dur="3.8s" repeatCount="indefinite" />
                </circle>
                <circle r="4" fill="#3b82f6" filter="drop-shadow(0px 0px 6px #3b82f6)">
                  <animateMotion path="M 450 35 C 600 35, 750 70, 750 135" dur="4.2s" repeatCount="indefinite" />
                </circle>
              </>
            )}

            {/* Central Core Node (~60px diameter) */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
              style={{ transformOrigin: "450px 35px" }}
            >
              <circle cx="450" cy="35" r="36" fill="rgba(37, 99, 235, 0.12)" />
              <circle cx="450" cy="35" r="30" fill="url(#centralNodeGradient)" filter="drop-shadow(0px 6px 16px rgba(37, 99, 235, 0.35))" />
              <foreignObject x="436" y="21" width="28" height="28">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <Cpu className="w-5 h-5" />
                </div>
              </foreignObject>
            </motion.g>

            {/* Outer Node 1 (Web Applications - Column 1 Center) */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              style={{ transformOrigin: "150px 135px" }}
            >
              <circle cx="150" cy="135" r="20" fill="#FFFFFF" stroke="#2563eb" strokeWidth="2" filter="drop-shadow(0px 4px 10px rgba(37, 99, 235, 0.2))" />
              <circle cx="150" cy="135" r="6" fill="#2563eb" />
            </motion.g>

            {/* Outer Node 2 (Enterprise Software - Column 2 Center) */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              style={{ transformOrigin: "450px 135px" }}
            >
              <circle cx="450" cy="135" r="20" fill="#FFFFFF" stroke="#7c3aed" strokeWidth="2" filter="drop-shadow(0px 4px 10px rgba(124, 58, 237, 0.2))" />
              <circle cx="450" cy="135" r="6" fill="#7c3aed" />
            </motion.g>

            {/* Outer Node 3 (Distributed Systems - Column 3 Center) */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              style={{ transformOrigin: "750px 135px" }}
            >
              <circle cx="750" cy="135" r="20" fill="#FFFFFF" stroke="#3b82f6" strokeWidth="2" filter="drop-shadow(0px 4px 10px rgba(59, 130, 246, 0.2))" />
              <circle cx="750" cy="135" r="6" fill="#3b82f6" />
            </motion.g>
          </svg>
        </div>

        {/* 3. PART B: Bento Grid Cards (Equal 3-column single row layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
          {/* Bento Card 1: Web Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -8px rgba(37, 99, 235, 0.15)", borderColor: "rgba(37, 99, 235, 0.25)" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            className="h-full relative overflow-hidden flex flex-col justify-between p-7 sm:p-8 rounded-[20px]"
            style={{
              background: "linear-gradient(145deg, #ffffff, #f8fafc)",
              border: "1px solid rgba(37, 99, 235, 0.08)",
              boxShadow: "0 4px 20px -4px rgba(15, 23, 42, 0.03)",
            }}
          >
            {/* Background Circuit Pattern */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.8) 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            />

            {/* Connecting Node Dot in Corner */}
            <div className="absolute top-5 right-5 flex items-center gap-2 pointer-events-none z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
              <span className="w-6 h-[1px] bg-gradient-to-r from-blue-500/30 to-transparent" />
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#2563eb] to-[#7c3aed] shadow-sm flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-white" />
              </div>
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-blue-600 border border-blue-100/80">
                {items[0].icon}
              </div>
              <h3 style={{ ...T.headlineSm, color: C.onSurface }} className="font-semibold mb-2">
                {items[0].title}
              </h3>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
                {items[0].desc}
              </p>
            </div>

            {/* Faint Background Number (01) */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                right: "1.25rem",
                bottom: "0.75rem",
                fontSize: "4.5rem",
                fontWeight: 300,
                fontFamily: "'Hanken Grotesk', sans-serif",
                lineHeight: 1,
                color: "rgba(15, 23, 42, 0.04)",
                letterSpacing: "-0.04em",
                pointerEvents: "none",
                userSelect: "none",
                zIndex: 0,
              }}
            >
              {items[0].num}
            </span>
          </motion.div>

          {/* Bento Card 2: Enterprise Software */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -8px rgba(37, 99, 235, 0.15)", borderColor: "rgba(37, 99, 235, 0.25)" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.45 }}
            className="h-full relative overflow-hidden flex flex-col justify-between p-7 sm:p-8 rounded-[20px]"
            style={{
              background: "linear-gradient(145deg, #ffffff, #f8fafc)",
              border: "1px solid rgba(37, 99, 235, 0.08)",
              boxShadow: "0 4px 20px -4px rgba(15, 23, 42, 0.03)",
            }}
          >
            {/* Background Circuit Pattern */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.8) 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            />

            {/* Connecting Node Dot in Corner */}
            <div className="absolute top-5 right-5 flex items-center gap-2 pointer-events-none z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40" />
              <span className="w-6 h-[1px] bg-gradient-to-r from-purple-500/30 to-transparent" />
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#3b82f6] shadow-sm flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-white" />
              </div>
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center mb-4 text-purple-600 border border-purple-100/80">
                {items[1].icon}
              </div>
              <h3 style={{ ...T.headlineSm, color: C.onSurface }} className="font-semibold mb-2">
                {items[1].title}
              </h3>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
                {items[1].desc}
              </p>
            </div>

            {/* Faint Background Number (02) */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                right: "1.25rem",
                bottom: "0.75rem",
                fontSize: "4.5rem",
                fontWeight: 300,
                fontFamily: "'Hanken Grotesk', sans-serif",
                lineHeight: 1,
                color: "rgba(15, 23, 42, 0.04)",
                letterSpacing: "-0.04em",
                pointerEvents: "none",
                userSelect: "none",
                zIndex: 0,
              }}
            >
              {items[1].num}
            </span>
          </motion.div>

          {/* Bento Card 3: Distributed Systems */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -8px rgba(37, 99, 235, 0.15)", borderColor: "rgba(37, 99, 235, 0.25)" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
            className="h-full relative overflow-hidden flex flex-col justify-between p-7 sm:p-8 rounded-[20px]"
            style={{
              background: "linear-gradient(145deg, #ffffff, #f8fafc)",
              border: "1px solid rgba(37, 99, 235, 0.08)",
              boxShadow: "0 4px 20px -4px rgba(15, 23, 42, 0.03)",
            }}
          >
            {/* Background Circuit Pattern */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.8) 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            />

            {/* Connecting Node Dot in Corner */}
            <div className="absolute top-5 right-5 flex items-center gap-2 pointer-events-none z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40" />
              <span className="w-6 h-[1px] bg-gradient-to-r from-indigo-500/30 to-transparent" />
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#2563eb] shadow-sm flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-white" />
              </div>
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center mb-4 text-indigo-600 border border-indigo-100/80">
                {items[2].icon}
              </div>
              <h3 style={{ ...T.headlineSm, color: C.onSurface }} className="font-semibold mb-2">
                {items[2].title}
              </h3>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
                {items[2].desc}
              </p>
            </div>

            {/* Faint Background Number (03) */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                right: "1.25rem",
                bottom: "0.75rem",
                fontSize: "4.5rem",
                fontWeight: 300,
                fontFamily: "'Hanken Grotesk', sans-serif",
                lineHeight: 1,
                color: "rgba(15, 23, 42, 0.04)",
                letterSpacing: "-0.04em",
                pointerEvents: "none",
                userSelect: "none",
                zIndex: 0,
              }}
            >
              {items[2].num}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({
  num,
  title,
  desc,
  index,
  inView,
}: {
  num: string;
  title: string;
  desc: string;
  index: number;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setHasAnimatedIn(true), (index + 1) * 120 + 600);
      return () => clearTimeout(timer);
    }
  }, [inView, index]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    if (cardRef.current) {
      cardRef.current.style.setProperty("--mouse-x", `${x}px`);
      cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    }
  }, []);

  const staggerDelay = index * 120; // 0.12s stagger

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -1000, y: -1000 });
      }}
      className="group relative overflow-hidden"
      style={{
        padding: "24px",
        borderRadius: "16px",
        backgroundColor: C.surfaceLowest,
        border: `1px solid ${isHovered ? "rgba(37, 99, 235, 0.3)" : "rgba(37, 99, 235, 0.08)"}`,
        boxShadow: isHovered
          ? "0 20px 40px -8px rgba(37, 99, 235, 0.16)"
          : "0 4px 12px -2px rgba(15, 23, 42, 0.03)",
        transform: inView ? "translateY(0)" : "translateY(40px) scale(0.95)",
        opacity: inView ? 1 : 0,
        transition: !inView
          ? "none"
          : hasAnimatedIn
            ? "box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease"
            : isHovered
              ? "box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease"
              : `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${staggerDelay}ms, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${staggerDelay}ms, box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1)`,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        willChange: "transform, opacity",
      }}
    >
      {/* Spotlight cursor radial glow (300px circle) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "16px",
          pointerEvents: "none",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          background: `radial-gradient(150px circle at var(--mouse-x, ${mousePos.x}px) var(--mouse-y, ${mousePos.y}px), rgba(37, 99, 235, 0.15), transparent 80%)`,
          zIndex: 0,
        }}
      />

      {/* Header row with Circular Number Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            color: "#FFFFFF",
            fontSize: "12px",
            fontWeight: 700,
            fontFamily: "'Hanken Grotesk', sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: isHovered ? "rotate(360deg)" : "rotate(0deg)",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 2px 8px rgba(37, 99, 235, 0.25)",
            flexShrink: 0,
          }}
        >
          {num}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-1.5">
        <h3
          style={{
            ...T.headlineSm,
            color: isHovered ? "#2563eb" : C.onSurface,
            transition: "color 0.3s ease",
          }}
        >
          {title}
        </h3>
        <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>{desc}</p>
      </div>
    </div>
  );
}

function ArchitecturalCapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const capabilities = [
    { num: "01", title: "Web Applications", desc: "Deterministic rendering engines, zero-hydration architectures, and accessible responsive interfaces compliant with global regulatory standards." },
    { num: "02", title: "Mobile Applications", desc: "Native platform compilation providing sub-millisecond thread execution, hardware acceleration, and seamless off-grid state sync." },
    { num: "03", title: "Full Stack Development", desc: "Vertically integrated systems where data structures transition with strict mathematical continuity from hardware memory to the user viewpoint." },
    { num: "04", title: "Backend Systems", desc: "Asynchronous event loops, actor-model concurrency, and non-blocking I/O architectures engineered for predictable tail latency under load spikes." },
    { num: "05", title: "API Architecture", desc: "Strict contract-first protocols leveraging gRPC, Protocol Buffers, and strictly validated GraphQL runtime schemas." },
    { num: "06", title: "SaaS Platforms", desc: "Multi-tenant compute isolation, programmatic cryptographic scoping, and horizontally partitioned database sharding topologies." },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: C.surfaceLow,
        borderBottom: `1px solid ${C.outlineVariant}`,
        paddingTop: SP.xl,
        paddingBottom: SP.xl,
      }}
      className="w-full md:py-[5rem]"
    >
      <div
        className="max-w-7xl mx-auto"
        style={{ paddingLeft: SP.marginSm, paddingRight: SP.marginSm }}
      >
        {/* Header */}
        <div style={{ maxWidth: "42rem", marginBottom: SP.xl }}>
          <div style={{ ...T.labelSm, color: C.primary, marginBottom: SP.sm }}>EXECUTION DOMAINS</div>
          <h2
            style={{ ...T.headlineLgMob, color: C.onSurface }}
            className="md:text-[2.5rem] md:leading-[3rem]"
          >
            Architectural Capabilities
          </h2>
          <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, marginTop: SP.sm }}>
            A comprehensive discipline spanning low-level operating frameworks to ultra-resilient distributed software planes.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: "1.5rem",
            borderTop: `1px solid ${C.outlineVariant}`,
            paddingTop: SP.xl,
          }}
        >
          {capabilities.map((item, index) => (
            <CapabilityCard
              key={item.num}
              num={item.num}
              title={item.title}
              desc={item.desc}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TypewriterText({ text, active, delay = 0 }: { text: string; active: boolean; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const hasTyped = useRef(false);

  useEffect(() => {
    if (!active) return;
    if (hasTyped.current) {
      setDisplayed(text);
      return;
    }

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      hasTyped.current = true;
      setDisplayed(text);
      return;
    }

    const timer = setTimeout(() => {
      hasTyped.current = true;
      let currentIndex = 0;
      const interval = setInterval(() => {
        currentIndex++;
        setDisplayed(text.slice(0, currentIndex));
        if (currentIndex >= text.length) {
          clearInterval(interval);
        }
      }, 18);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [active, text, delay]);

  return (
    <span className="inline-block relative">
      {/* Invisible placeholder to reserve exact width and prevent layout shift */}
      <span className="invisible select-none opacity-0 pointer-events-none" aria-hidden="true">
        {text}
      </span>
      {/* Typed text */}
      <span className="absolute left-0 top-0 whitespace-nowrap">
        {active ? displayed : ""}
      </span>
    </span>
  );
}

function TerminalColumnCard({
  heading,
  rows,
  colIndex,
  inView,
}: {
  heading: string;
  rows: [string, string?][];
  colIndex: number;
  inView: boolean;
}) {
  const colDelay = colIndex * 150; // 0.15s stagger between columns

  return (
    <div
      className="relative overflow-hidden flex flex-col"
      style={{
        backgroundColor: "#0F172A",
        borderRadius: "12px",
        padding: "20px",
        fontFamily: "'JetBrains Mono', 'Fira Code', 'DM Mono', monospace",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        transform: inView ? "translateY(0)" : "translateY(30px)",
        opacity: inView ? 1 : 0,
        transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${colDelay}ms, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${colDelay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {/* Terminal window header */}
      <div style={{ marginBottom: "16px" }}>
        <h3
          className="terminal-cursor"
          style={{
            fontSize: "0.8125rem",
            fontWeight: 700,
            color: "#60A5FA",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            display: "inline-block",
            marginBottom: "6px",
          }}
        >
          {heading}
        </h3>
        {/* Header 24px wide, 2px tall gradient underline accent */}
        <div
          style={{
            width: "24px",
            height: "2px",
            background: "linear-gradient(90deg, #2563eb, transparent)",
            borderRadius: "1px",
          }}
        />
      </div>

      {/* Rows */}
      <ul style={{ display: "flex", flexDirection: "column", gap: "4px", margin: 0, padding: 0, listStyle: "none" }}>
        {rows.map(([name, role], rowIdx) => {
          const rowDelay = colDelay + 100 + rowIdx * 60;

          return (
            <li
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px",
                borderRadius: "6px",
              }}
            >
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#E2E8F0",
                }}
              >
                <TypewriterText text={name} active={inView} delay={rowDelay} />
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#94A3B8",
                  letterSpacing: "0.02em",
                }}
              >
                {role}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const columns = [
    {
      heading: "Core Languages",
      rows: [
        ["Rust"],
        ["Go (Golang)"],
        ["TypeScript"],
        ["C++ / CUDA"],
        ["Modern Python"],
      ] as [string][],
    },
    {
      heading: "Frameworks & Runtimes",
      rows: [
        ["Tokio / Actix"],
        ["Next.js / React"],
        ["Node / Bun"],
        ["gRPC / Protobuf"],
        ["Flutter / Swift"],
      ] as [string][],
    },
    {
      heading: "Cloud Infrastructure",
      rows: [
        ["Kubernetes (K8s)"],
        ["Terraform"],
        ["AWS & GCP"],
        ["Cloudflare Workers"],
        ["OpenTelemetry"],
      ] as [string][],
    },
    {
      heading: "Database Systems",
      rows: [
        ["PostgreSQL"],
        ["ClickHouse"],
        ["Redis Cluster"],
        ["CockroachDB"],
        ["Apache Kafka"],
      ] as [string][],
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: C.surfaceLow,
        borderBottom: `1px solid ${C.outlineVariant}`,
        paddingTop: SP.xl,
        paddingBottom: SP.xl,
      }}
      className="w-full md:py-[5rem]"
    >
      <div
        className="max-w-7xl mx-auto relative z-10"
        style={{ paddingLeft: SP.marginSm, paddingRight: SP.marginSm }}
      >
        {/* Section header row */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between"
          style={{
            marginBottom: SP.xl,
            paddingBottom: SP.md,
            borderBottom: `1px solid ${C.outlineVariant}`,
            gap: SP.sm,
          }}
        >
          <div>
            <div style={{ ...T.labelSm, color: C.primary, marginBottom: SP.xs }}>TECHNICAL FOUNDATION</div>
            <h2
              style={{ ...T.headlineLgMob, color: C.onSurface }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              Engineered Tooling &amp; Infrastructure
            </h2>
          </div>
        </div>

        {/* 4-column terminal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: SP.gutterLg }}>
          {columns.map((col, colIdx) => (
            <TerminalColumnCard
              key={col.heading}
              heading={col.heading}
              rows={col.rows}
              colIndex={colIdx}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DevelopmentProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const fillLineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // Kill any existing triggers tied to this section element to prevent duplicates
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars.trigger === el) {
        trigger.kill();
      }
    });

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop } = context.conditions as { isDesktop: boolean; isMobile: boolean };

        if (isDesktop) {
          ScrollTrigger.create({
            trigger: el,
            start: "top top",
            end: "+=2000",
            pin: true,
            pinSpacing: true,
            refreshPriority: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            scrub: 1,
            onUpdate: (self) => {
              const p = self.progress;
              const step = Math.min(3, Math.floor(p * 4));
              setActiveStep(step);
              if (fillLineRef.current) {
                fillLineRef.current.style.height = `${p * 100}%`;
              }
            },
          });
        } else {
          ScrollTrigger.create({
            trigger: el,
            start: "top center",
            end: "bottom center",
            scrub: 0.5,
            onUpdate: (self) => {
              const p = self.progress;
              const step = Math.min(3, Math.floor(p * 4));
              setActiveStep(step);
              if (fillLineRef.current) {
                fillLineRef.current.style.height = `${p * 100}%`;
              }
            },
          });
        }

        // Refresh ScrollTrigger after mount and layout settlement
        setTimeout(() => {
          ScrollTrigger.sort();
          ScrollTrigger.refresh();
        }, 100);
      }
    );

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      mm.revert();
    };
  }, []);

  const steps = [
    {
      num: "01",
      title: "Architecture & Strategy",
      desc: "Formal schema definitions, threat models, database sharding protocols, and performance budgets established before a single line is written.",
    },
    {
      num: "02",
      title: "Precision Execution",
      desc: "Sprint development grounded in peer-reviewed modular units, strict type contracts, and continuous component isolation.",
    },
    {
      num: "03",
      title: "Continuous Verification",
      desc: "Automated fuzzing pipelines, concurrency stress tests, memory allocation audits, and cryptographic validation passes.",
    },
    {
      num: "04",
      title: "Deployment & Scale",
      desc: "Canary orchestrations across geographically distributed edge instances with zero-downtime database migrations.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        zIndex: 10,
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
      className="w-full md:min-h-screen relative"
    >
      {/* 100% Width x 100% Height Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/visuals/software/3129595-uhd_3840_2160_30fps.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        controls={false}
      />

      {/* Subtle dark gradient overlay behind glass for crystal readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(15, 23, 42, 0.85) 100%)",
        }}
      />

      {/* Glass Content Box */}
      <div className="max-w-[1280px] w-full mx-auto relative z-10 px-6 sm:px-8 md:px-10">
        <div
          className="w-full relative overflow-hidden methodology-card p-6 sm:p-8 md:py-8 md:px-12"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: "24px",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 0 40px rgba(255, 255, 255, 0.02)",
          }}
        >
          {/* Top-edge glass highlight pseudo-element replacement */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: "10%",
              right: "10%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
              pointerEvents: "none",
            }}
          />

          {/* Header text */}
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ ...T.labelSm, color: "#60a5fa", marginBottom: "0.35rem" }}>METHODOLOGY</div>
            <h2
              style={{ ...T.headlineLgMob, color: "#FFFFFF", marginBottom: "0.5rem" }}
              className="md:text-[2.25rem] md:leading-[2.75rem]"
            >
              Our Development Process
            </h2>
            <p style={{ ...T.bodyMd, color: "rgba(255, 255, 255, 0.85)", marginTop: "0.25rem" }}>
              Engineering milestones executed through absolute predictability, mathematical proofs, and unyielding code quality parameters.
            </p>
          </div>

          {/* Timeline container */}
          <div
            className="relative"
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              paddingTop: "0.875rem",
              paddingLeft: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {/* Base Timeline Line */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "8px",
                top: "1.25rem",
                bottom: "1.25rem",
                width: "2px",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                borderRadius: "9999px",
              }}
            />

            {/* Animated Progress Overlay Line */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "8px",
                top: "1.25rem",
                bottom: "1.25rem",
                width: "2px",
                overflow: "hidden",
                borderRadius: "9999px",
              }}
            >
              <div
                ref={fillLineRef}
                style={{
                  width: "100%",
                  height: "0%",
                  backgroundColor: "#60a5fa",
                  borderRadius: "9999px",
                  boxShadow: "0 0 10px rgba(96, 165, 250, 0.6)",
                }}
              />
            </div>

            {steps.map(({ num, title, desc }, i) => {
              const isActive = activeStep === i;

              return (
                <div
                  key={num}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.25rem",
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                    borderTop: i > 0 ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <span
                    style={{
                      ...T.labelMd,
                      color: isActive ? "#60a5fa" : "rgba(255, 255, 255, 0.45)",
                      opacity: isActive ? 1 : 0.6,
                      transform: isActive ? "scale(1.1)" : "scale(1)",
                      transformOrigin: "left center",
                      lineHeight: "1.4",
                      paddingTop: "0.1rem",
                      flexShrink: 0,
                      fontWeight: isActive ? 700 : 600,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      display: "inline-block",
                    }}
                  >
                    {num}
                  </span>
                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        ...T.headlineSm,
                        color: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.55)",
                        fontWeight: isActive ? 600 : 500,
                        lineHeight: "1.4",
                        transition: "color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {title}
                    </h4>
                    <p
                      style={{
                        ...T.bodyMd,
                        color: isActive ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.35)",
                        marginTop: "0.25rem",
                        transition: "color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyStreamliSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const points = [
    {
      title: "Architectural Resilience",
      desc: "Self-healing micro-fabrics designed to absorb localized network partitions and infrastructure faults without impacting operational continuity.",
      icon: <Shield className="w-5 h-5 text-white" />,
    },
    {
      title: "Engineering Rigor",
      desc: "Every interface complies with rigorous static typing, zero implicit dependencies, and mathematically provable concurrency limits.",
      icon: <Cog className="w-5 h-5 text-white" />,
    },
    {
      title: "Long-Term Maintainability",
      desc: "Clean architectural boundaries decouple enterprise logic from framework idiosyncrasies, dramatically reducing lifecycle maintenance overhead.",
      icon: <Layers className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)",
        borderBottom: `1px solid ${C.outlineVariant}`,
        paddingTop: SP.xl,
        paddingBottom: SP.xl,
      }}
      className="w-full md:py-[5rem]"
    >
      <div
        className="max-w-7xl mx-auto relative z-10"
        style={{ paddingLeft: SP.marginSm, paddingRight: SP.marginSm }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center" style={{ gap: SP.gutterLg }}>
          {/* Rationale left */}
          <div className="lg:col-span-6" style={{ display: "flex", flexDirection: "column", gap: SP.md }}>
            <div style={{ ...T.labelSm, color: C.primary }}>ARCHITECTURAL IMPERATIVES</div>
            <h2
              style={{ ...T.headlineLgMob, color: C.onSurface }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              Why Streamli?
            </h2>
            <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
              We design software for organizations where systemic failure is not an option. Our systems are engineered to endure beyond generational hardware cycles.
            </p>

            <div
              style={{
                paddingTop: SP.md,
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                borderTop: `1px solid ${C.outlineVariant}`,
              }}
            >
              {points.map(({ title, desc, icon }, i) => {
                const staggerDelay = i * 150;
                return (
                  <div
                    key={title}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(-20px)",
                      transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${staggerDelay}ms, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${staggerDelay}ms`,
                      paddingTop: i > 0 ? "0.75rem" : "0",
                      borderTop: i > 0 ? `1px solid ${C.outlineVariant}88` : "none",
                    }}
                  >
                    <div
                      className="why-icon"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25)",
                      }}
                    >
                      {icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ ...T.headlineSm, color: C.onSurface }}>{title}</h4>
                      <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, marginTop: "0.25rem" }}>{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image right with subtle parallax & decorative organic blobs */}
          <div className="lg:col-span-6 relative p-4 sm:p-8 md:p-12">
            <motion.div style={{ y: parallaxY }} className="relative w-full">
              {/* Blob 1: Top-Left (blue to purple gradient) */}
              <motion.div
                className="absolute -top-8 -left-8 md:-top-14 md:-left-14 w-28 h-28 md:w-44 md:h-44 opacity-50 blur-[2px] pointer-events-none z-0"
                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="blobGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#blobGradient1)"
                    d="M45.3,-58.5C58.5,-49.5,68.6,-34.8,72.5,-18.5C76.4,-2.2,74.1,15.7,66.1,30.6C58.1,45.5,44.4,57.4,28.8,64.5C13.2,71.6,-4.3,73.9,-20.9,70C-37.5,66.1,-53.2,56,-62.8,41.6C-72.4,27.2,-75.9,8.5,-72.6,-8.2C-69.3,-24.9,-59.2,-39.6,-46,-49C-32.8,-58.4,-16.4,-62.5,0.7,-63.4C17.8,-64.3,35.6,-62,45.3,-58.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </motion.div>

              {/* Blob 2: Bottom-Right (light blue to lavender accent) */}
              <motion.div
                className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-24 h-24 md:w-36 md:h-36 opacity-40 blur-[2px] pointer-events-none z-0"
                animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="blobGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#blobGradient2)"
                    d="M39.5,-51.8C50.3,-42.6,57.4,-29.4,61.8,-14.9C66.2,-0.4,67.9,15.4,62.1,28.5C56.3,41.6,43,52,28.2,59.6C13.4,67.2,-2.9,72,-18.6,69.3C-34.3,66.6,-49.4,56.4,-58.9,42.5C-68.4,28.6,-72.3,11,-70.2,-5.3C-68.1,-21.6,-60,-36.6,-48.1,-46.3C-36.2,-56,-18.1,-60.4,-1.1,-58.9C15.9,-57.4,31.8,-49,39.5,-51.8Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </motion.div>

              {/* Main image container */}
              <div
                className="relative z-10 w-full overflow-hidden flex items-center justify-center"
                style={{
                  aspectRatio: "4/3",
                  borderRadius: "16px",
                  backgroundColor: C.surface,
                  border: `1px solid rgba(37, 99, 235, 0.1)`,
                  boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.2)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "scale(1)" : "scale(0.95)",
                  transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
                }}
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/images/software/pexels-thisisengineering-3861951.jpg"
                  alt="Crystalline structural columns and balanced cantilevers"
                  style={{ borderRadius: "16px" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ borderRadius: "16px", backgroundColor: `${C.surfaceLowest}22` }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductDevelopmentView() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const section2 = section2Ref.current;
    if (!wrapper || !section2) return;

    // Start section 2 fully hidden (clipped upward — curtain from top)
    gsap.set(section2, { clipPath: "inset(100% 0% 0% 0%)" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: true,
        refreshPriority: 2,
        anticipatePin: 1,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // 1. Hold PHASE TRANSITION overlay visible for the first half of the pin distance
    tl.to({}, { duration: 1 });

    // 2. Reveal TOPOLOGY & INTEGRITY overlay over PHASE TRANSITION during the second half
    tl.to(section2, {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "none",
      duration: 1,
    });

    setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <main
      style={{ backgroundColor: C.surfaceLowest, color: C.onSurface, WebkitFontSmoothing: "antialiased", overflowX: "hidden" }}
      className="w-full"
    >

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — 90vh cinematic viewport
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{ borderBottom: `1px solid ${C.outlineVariant}`, height: "100vh" }}
        className="relative w-full overflow-hidden flex flex-col justify-end"
        data-section="hero"
      >
        {/* Background video + overlays */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/software/6963744-hd_1920_1080_25fps.mp4"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          controls={false}
        />
        {/* Subtle dark gradient so text stays readable without washing out the video */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)" }}
        />

        {/* Hero copy — pb matches margin-lg */}
        <div
          className="relative z-20 w-full max-w-7xl mx-auto"
          style={{
            paddingLeft: SP.marginSm,
            paddingRight: SP.marginSm,
            paddingBottom: SP.marginLg,
            paddingTop: SP.xl,
          }}
        >
          <div className="max-w-4xl" style={{ padding: "0 clamp(0px, 2vw, 0px)" }}>
            {/* Label */}
            <div
              className="inline-flex items-center"
              style={{ ...T.labelSm, color: "#60a5fa", marginBottom: SP.md }}
            >
              <span>SYSTEM ARCHITECTURE</span>
            </div>

            {/* H1 */}
            <h1
              style={{
                ...T.displayXlMobile,
                color: "#FFFFFF",
                marginBottom: SP.md,
              }}
              className="md:text-[4.5rem] md:leading-[5rem]"
            >
              Software Architecture at Global Scale
            </h1>

            {/* Subline */}
            <p style={{ ...T.bodyLg, color: "rgba(255,255,255,0.8)", maxWidth: "42rem" }}>
              Engineered systems designed with structural permanence. We design and deliver distributed runtime environments, fault-tolerant enterprise layers, and computational infrastructure for complex operational domains.
            </p>
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════════════════
          2. WHAT WE BUILD — Split composition (SYSTEM TAXONOMY)
      ═══════════════════════════════════════════════════════════════ */}
      <SystemTaxonomySection />

      {/* ═══════════════════════════════════════════════════════════════
          3. CAPABILITIES — Editorial typographic grid (no media)
      ═══════════════════════════════════════════════════════════════ */}
      <ArchitecturalCapabilitiesSection />


      {/* ═══════════════════════════════════════════════════════════════
          4 + 5. PINNED OVERLAY TRANSITION
          Wrapper is 100vh — GSAP pin:true adds 200vh of scroll distance.
          Section 2 is revealed over section 1 via a scrubbed clip-path wipe.
      ═══════════════════════════════════════════════════════════════ */}
      <div
        ref={wrapperRef}
        style={{
          position: "relative",
          height: "100vh",
          // overflow:hidden removed — GSAP pin needs the wrapper to be
          // fully visible; horizontal overflow is prevented at <main> level
        }}
      >
        {/* ── SECTION 1: PHASE TRANSITION ─────────────────────────────── */}
        <div
          ref={section1Ref}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {/* Full-cover video */}
          <video
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            src="/visuals/software/13161043_3840_2160_30fps.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Subtle bottom gradient for text legibility */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)",
            }}
          />

          {/* Content overlay — bottom-left */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: `${SP.marginLg} ${SP.marginSm}`,
              maxWidth: "80rem",
              margin: "0 auto",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <div style={{ maxWidth: "48rem" }}>
              <div style={{ ...T.labelSm, color: "#60a5fa", marginBottom: SP.xs }}>
                PHASE TRANSITION
              </div>
              <h2
                style={{ ...T.headlineLgMob, color: "#FFFFFF" }}
                className="md:text-[2.5rem] md:leading-[3rem]"
              >
                From Idea to Product
              </h2>
              <p style={{ ...T.bodyLg, color: "rgba(255,255,255,0.75)", marginTop: SP.sm }}>
                Abstract conceptualization translated through rigorous architectural schemas into executable software artifacts.
              </p>
            </div>
          </div>
        </div>

        {/* ── SECTION 2: TOPOLOGY & INTEGRITY ─────────────────────────── */}
        {/* Absolute on top of the sticky section; clip-path driven by GSAP */}
        <div
          ref={section2Ref}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            // Initial state set by GSAP: clipPath inset(100% 0% 0% 0%)
            willChange: "clip-path",
          }}
        >
          {/* Full-cover video */}
          <video
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            src="/visuals/software/14824847_1920_1080_30fps.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Subtle bottom gradient for text legibility */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)",
            }}
          />

          {/* Content overlay — bottom-left */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: `${SP.marginLg} ${SP.marginSm}`,
              maxWidth: "80rem",
              margin: "0 auto",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <div style={{ maxWidth: "48rem" }}>
              <div style={{ ...T.labelSm, color: "#60a5fa", marginBottom: SP.xs }}>
                TOPOLOGY &amp; INTEGRITY
              </div>
              <h2
                style={{ ...T.headlineLgMob, color: "#FFFFFF" }}
                className="md:text-[2.5rem] md:leading-[3rem]"
              >
                Engineering &amp; Architecture
              </h2>
              <p style={{ ...T.bodyLg, color: "rgba(255,255,255,0.75)", marginTop: SP.sm }}>
                Systems delineated across decoupled planes: presentation isolation, high-speed routing cores, deterministic data governance, and immutable audit logs.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* ═══════════════════════════════════════════════════════════════
          6. TECH STACK — Terminal blocks & typewriter reveal
      ═══════════════════════════════════════════════════════════════ */}
      <TechStackSection />

      {/* ═══════════════════════════════════════════════════════════════
          7. DEVELOPMENT PROCESS — Image left, steps right
      ═══════════════════════════════════════════════════════════════ */}
      <DevelopmentProcessSection />

      {/* ═══════════════════════════════════════════════════════════════
          8. WHY OUR SERVICE — Rationale left, image right
      ═══════════════════════════════════════════════════════════════ */}
      <WhyStreamliSection />

      {/* ═══════════════════════════════════════════════════════════════
          10. FINAL CTA — Full-width visual with consultation prompt
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "520px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
        className="w-full relative"
      >
        {/* Background image — full section coverage */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/software/pexels-merlin-14314638.jpg"
          alt="Advanced computational laboratory pavilion"
        />
        {/* Subtle dark overlay for text contrast without washing out the image */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.65) 45%, rgba(15,23,42,0.3) 100%)",
          }}
        />

        {/* CTA content */}
        <div
          className="relative z-20 w-full max-w-7xl mx-auto"
          style={{ paddingLeft: SP.marginSm, paddingRight: SP.marginSm }}
        >
          <div style={{ maxWidth: "44rem" }}>
            <h2
              style={{ ...T.displayLgMobile, color: "#FFFFFF", marginBottom: SP.sm }}
              className="md:text-[2.5rem] md:leading-[3rem] md:tracking-[-0.02em]"
            >
              Ready to engineer your next technological milestone?
            </h2>
            <p style={{ ...T.bodyLg, color: "rgba(255,255,255,0.85)", marginBottom: SP.lg }}>
              Engage with our principal software architects. We analyze your requirements and construct a resilient technical roadmap.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center" style={{ gap: "1rem" }}>
              <Link
                href="/contact"
                className="cta-btn inline-flex justify-center items-center"
                style={{
                  padding: "0.75rem 1.55rem",
                  fontSize: "0.84rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  backgroundColor: C.primary,
                  color: "#FFFFFF",
                  border: `1px solid ${C.primary}`,
                  textDecoration: "none",
                }}
              >
                Schedule Architecture Review
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

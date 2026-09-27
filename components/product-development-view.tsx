"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Cog, Layers } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────────────
   Design token map — exact values from the supplied HTML / Tailwind config
   ──────────────────────────────────────────────────────────────────────── */
const C = {
  /* surfaces */
  surfaceLowest:     "#FFFFFF",
  surfaceLow:        "#F0F7FF",
  surface:           "#FFFFFF",
  surfaceHigh:       "#FFFFFF",
  surfaceHighest:    "#F8FAFC",
  /* text */
  onSurface:         "#0F172A",
  onSurfaceVariant:  "#475569",
  /* primary */
  primary:           "#0066FF",
  primaryContainer:  "#0284C7",
  onPrimary:         "#FFFFFF",
  onPrimaryContainer:"#FFFFFF",
  /* borders */
  outlineVariant:    "#E2E8F0",
  outline:           "#CBD5E1",
};

/* ─────────────────────────────────────────────────────────────────────────
   Typography helpers (exact font-size / line-height / letter-spacing from
   the HTML Tailwind config)
   ──────────────────────────────────────────────────────────────────────── */
const T = {
  displayXl:       { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "4.5rem",    lineHeight: "5rem",    letterSpacing: "-0.035em", fontWeight: 600 },
  displayXlMobile: { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "2.75rem",   lineHeight: "3.25rem", letterSpacing: "-0.025em", fontWeight: 600 },
  displayLg:       { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "3.5rem",    lineHeight: "4rem",    letterSpacing: "-0.03em",  fontWeight: 600 },
  displayLgMobile: { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "2.25rem",   lineHeight: "2.75rem", letterSpacing: "-0.02em",  fontWeight: 600 },
  headlineLg:      { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "2.5rem",    lineHeight: "3rem",    letterSpacing: "-0.02em",  fontWeight: 500 },
  headlineLgMob:   { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "1.75rem",   lineHeight: "2.25rem", letterSpacing: "-0.015em", fontWeight: 500 },
  headlineMd:      { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "1.75rem",   lineHeight: "2.25rem", letterSpacing: "-0.015em", fontWeight: 500 },
  headlineSm:      { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "1.25rem",   lineHeight: "1.75rem", letterSpacing: "-0.01em",  fontWeight: 500 },
  bodyLg:          { fontFamily: "'Inter', sans-serif",          fontSize: "1.125rem",  lineHeight: "1.75rem", letterSpacing: "-0.011em", fontWeight: 400 },
  bodyMd:          { fontFamily: "'Inter', sans-serif",          fontSize: "0.9375rem", lineHeight: "1.5rem",  letterSpacing: "-0.006em", fontWeight: 400 },
  labelMd:         { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "0.75rem",   lineHeight: "1rem",    letterSpacing: "0.06em",   fontWeight: 600 },
  labelSm:         { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "0.6875rem", lineHeight: "0.875rem",letterSpacing: "0.08em",   fontWeight: 600 },
};

/* Spacing from the HTML config */
const SP = {
  xs:  "0.25rem",
  sm:  "0.5rem",
  md:  "1rem",
  lg:  "1.75rem",
  xl:  "3rem",
  gutter:   "1.5rem",
  gutterLg: "2.5rem",
  gutterSm: "1rem",
  marginSm: "1.25rem",
  margin:   "3rem",
  marginLg: "5rem",
};

function TaxonomyImageCard({ src, alt, inView }: { src: string; alt: string; inView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full max-w-[560px] mx-auto" style={{ padding: "12px" }}>
      {/* Sky Blue gradient background layer behind (rotated +2deg, inset relative to image) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "0px",
          borderRadius: "20px",
          background: "linear-gradient(135deg, rgba(109, 201, 240, 0.75) 0%, rgba(127, 203, 239, 0.65) 50%, rgba(0, 102, 255, 0.55) 100%)",
          transform: inView ? "rotate(2deg)" : "rotate(2deg) translateY(30px) scale(0.95)",
          opacity: inView ? (isHovered ? 1 : 0.85) : 0,
          transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Floating Card Image Wrapper */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          aspectRatio: "4/3",
          borderRadius: "16px",
          overflow: "hidden",
          backgroundColor: "#0F172A",
          border: `1px solid rgba(56, 189, 248, 0.3)`,
          boxShadow: isHovered
            ? "0 32px 64px -12px rgba(14, 165, 233, 0.28), 0 20px 40px -10px rgba(15, 23, 42, 0.2)"
            : "0 25px 50px -12px rgba(14, 165, 233, 0.2), 0 15px 30px -10px rgba(15, 23, 42, 0.15)",
          transform: !inView
            ? "translateY(30px) scale(0.95) rotate(-1deg)"
            : isHovered
            ? "translateY(0) scale(1) rotate(0deg)"
            : "translateY(0) scale(1) rotate(-1deg)",
          opacity: inView ? 1 : 0,
          transition: !inView
            ? "none"
            : isHovered
            ? "transform 0.4s ease, box-shadow 0.4s ease"
            : "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s, box-shadow 0.4s ease",
          willChange: "transform, opacity",
          cursor: "pointer",
        }}
      >
        <img
          className="w-full h-full object-cover select-none pointer-events-none"
          src={src}
          alt={alt}
          style={{
            borderRadius: "16px",
            transform: isHovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "transform",
          }}
        />
        {/* Subtle glass / sky blue tone overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "16px",
            backgroundColor: "rgba(14, 165, 233, 0.08)",
          }}
        />
      </div>
    </div>
  );
}

function SystemTaxonomySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
    { num: "01", title: "Web Applications", desc: "High-throughput, reactive client interfaces operating seamlessly over distributed edge instances." },
    { num: "02", title: "Enterprise Software", desc: "Monolithic and service-oriented systems engineered for governance, longevity, and zero-loss durability." },
    { num: "03", title: "Distributed Systems", desc: "Decentralized computational fabrics engineered with deterministic concurrency and mathematically verified integrity." },
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
        <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: SP.gutterLg }}>

          {/* Left — typography */}
          <div className="lg:col-span-6" style={{ display: "flex", flexDirection: "column", gap: SP.lg }}>
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
              className="md:text-[2.5rem] md:leading-[3rem] md:tracking-[-0.02em]"
            >
              Foundational platforms constructed for mission-critical load.
            </h2>

            <div
              style={{
                paddingTop: SP.md,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {/* Top animated divider */}
              <div
                style={{
                  height: "1px",
                  backgroundColor: C.outlineVariant,
                  width: "100%",
                  transformOrigin: "left",
                  transform: inView ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0ms",
                }}
              />

              {items.map(({ num, title, desc }, i) => {
                const isHovered = hoveredIdx === i;
                const staggerDelay = i * 150; // 150ms stagger
                return (
                  <div
                    key={title}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{
                      position: "relative",
                      paddingTop: "0.875rem",
                      paddingBottom: "0.875rem",
                      paddingLeft: "1rem",
                      paddingRight: "0.5rem",
                      cursor: "pointer",
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(24px)",
                      transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${staggerDelay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${staggerDelay}ms`,
                    }}
                  >
                    {/* Background Index Number (01, 02, 03) */}
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        right: "0.75rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "3.75rem",
                        fontWeight: 300,
                        fontFamily: "'Hanken Grotesk', sans-serif",
                        lineHeight: 1,
                        color: "rgba(15, 23, 42, 0.05)",
                        letterSpacing: "-0.04em",
                        pointerEvents: "none",
                        userSelect: "none",
                        zIndex: 0,
                      }}
                    >
                      {num}
                    </span>

                    {/* Left Accent Bar on Hover (height 0 -> full height) */}
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "3px",
                        backgroundColor: C.primary,
                        transformOrigin: "top",
                        transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />

                    {/* Content wrapper with translateX on hover */}
                    <div
                      style={{
                        position: "relative",
                        zIndex: 1,
                        transform: isHovered ? "translateX(8px)" : "translateX(0)",
                        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <span
                        style={{
                          ...T.headlineSm,
                          color: isHovered ? C.primary : C.onSurface,
                          display: "block",
                          transition: "color 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        {title}
                      </span>
                      <p
                        style={{
                          ...T.bodyMd,
                          color: C.onSurfaceVariant,
                          marginTop: "0.25rem",
                        }}
                      >
                        {desc}
                      </p>
                    </div>

                    {/* Bottom animated divider with blue accent transition on hover */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "1px",
                        backgroundColor: isHovered ? "rgba(0, 102, 255, 0.4)" : C.outlineVariant,
                        transformOrigin: "left",
                        transform: inView ? "scaleX(1)" : "scaleX(0)",
                        transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${staggerDelay + 100}ms, background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1)`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — image with floating card & hover zoom */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <TaxonomyImageCard
              src="/images/software/pexels-googledeepmind-18069694.jpg"
              alt="Interlocking glass and reinforced titanium building planes"
              inView={inView}
            />
          </div>
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
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      stepRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const stepCenter = rect.top + rect.height / 2;
        const distance = Math.abs(stepCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveStep(closestIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
        backgroundColor: C.surface,
        paddingTop: SP.xl,
        paddingBottom: SP.xl,
      }}
      className="w-full md:py-[5rem]"
    >
      <div
        className="max-w-7xl mx-auto relative z-10"
        style={{ paddingLeft: SP.marginSm, paddingRight: SP.marginSm }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start" style={{ gap: SP.gutterLg }}>
          {/* Sticky Image left */}
          <div
            className="lg:col-span-6 w-full lg:sticky lg:top-[100px]"
            style={{ alignSelf: "flex-start" }}
          >
            <div
              className="relative w-full overflow-hidden flex items-center justify-center"
              style={{
                aspectRatio: "4/5",
                borderRadius: "16px",
                backgroundColor: C.surface,
                border: `1px solid ${C.outlineVariant}`,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="/images/software/pexels-jakubzerdzicki-36496927.jpg"
                alt="Immaculate industrial design lab with technical blueprints"
                style={{ borderRadius: "16px" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: `${C.surfaceLowest}22`, borderRadius: "16px" }}
              />
            </div>
          </div>

          {/* Steps right */}
          <div className="lg:col-span-6" style={{ display: "flex", flexDirection: "column", gap: SP.lg }}>
            <div>
              <div style={{ ...T.labelSm, color: C.primary, marginBottom: SP.xs }}>METHODOLOGY</div>
              <h2
                style={{ ...T.headlineLgMob, color: C.onSurface }}
                className="md:text-[2.5rem] md:leading-[3rem]"
              >
                Our Development Process
              </h2>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, marginTop: SP.sm }}>
                Engineering milestones executed through absolute predictability, mathematical proofs, and unyielding code quality parameters.
              </p>
            </div>

            {/* Timeline container */}
            <div
              className="relative"
              style={{
                borderTop: `1px solid ${C.outlineVariant}`,
                paddingTop: SP.md,
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
                  top: "2.25rem",
                  bottom: "2.5rem",
                  width: "2px",
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                  borderRadius: "9999px",
                }}
              />

              {/* Animated Progress Overlay Line */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "8px",
                  top: "2.25rem",
                  bottom: "2.5rem",
                  width: "2px",
                  overflow: "hidden",
                  borderRadius: "9999px",
                }}
              >
                <motion.div
                  style={{
                    width: "100%",
                    height: lineHeight,
                    backgroundColor: "#2563eb",
                    borderRadius: "9999px",
                  }}
                />
              </div>

              {steps.map(({ num, title, desc }, i) => {
                const isActive = activeStep === i;

                return (
                  <div
                    key={num}
                    ref={(el) => {
                      stepRefs.current[i] = el;
                    }}
                    style={{
                      display: "flex",
                      gap: SP.md,
                      paddingTop: i > 0 ? SP.md : "0.5rem",
                      paddingBottom: SP.md,
                      borderTop: i > 0 ? `1px solid ${C.outlineVariant}66` : "none",
                      transition: "all 0.4s ease",
                    }}
                  >
                    <span
                      style={{
                        ...T.labelMd,
                        color: isActive ? "#2563eb" : C.primary,
                        opacity: isActive ? 1 : 0.4,
                        transform: isActive ? "scale(1.15)" : "scale(1)",
                        transformOrigin: "left center",
                        paddingTop: "0.125rem",
                        flexShrink: 0,
                        fontWeight: isActive ? 700 : 600,
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        display: "inline-block",
                      }}
                    >
                      {num}
                    </span>
                    <div>
                      <h4
                        style={{
                          ...T.headlineSm,
                          color: isActive ? C.onSurface : "#94A3B8",
                          fontWeight: isActive ? 600 : 500,
                          transition: "color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {title}
                      </h4>
                      <p
                        style={{
                          ...T.bodyMd,
                          color: isActive ? C.onSurfaceVariant : "#94A3B8",
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
      </div>

      {/* Cross-section background transition gradient into Why Streamli */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(238,242,255,0.7) 60%, #eef2ff 100%)",
          pointerEvents: "none",
        }}
      />
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

          {/* Image right with subtle parallax */}
          <div className="lg:col-span-6">
            <motion.div style={{ y: parallaxY }} className="w-full">
              <div
                className="relative w-full overflow-hidden flex items-center justify-center"
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
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const section1Ref  = useRef<HTMLDivElement>(null);
  const section2Ref  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper  = wrapperRef.current;
    const section2 = section2Ref.current;
    if (!wrapper || !section2) return;

    // Start section 2 fully hidden (clipped upward — curtain from top)
    gsap.set(section2, { clipPath: "inset(100% 0% 0% 0%)" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        // Dedicated scroll distance for the transition
        end: "+=200%",
        // GSAP pins the wrapper to the viewport and inserts a spacer
        // so the document does NOT advance past this block until done
        pin: true,
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(section2, {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "none",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
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

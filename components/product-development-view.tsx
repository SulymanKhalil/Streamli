"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

function TiltImage({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(hover: none)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
    }
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Extremely subtle professional tilt: max ~3.5 degrees
    const rotateX = (-y * 4.5).toFixed(2);
    const rotateY = (x * 4.5).toFixed(2);

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(hover: none)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
    }
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        aspectRatio: "4/3",
        backgroundColor: C.surface,
        border: `1px solid ${C.outlineVariant}`,
        transform,
        transformStyle: "preserve-3d",
        transition: isHovered
          ? "transform 0.12s ease-out"
          : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform",
      }}
    >
      <img
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        src={src}
        alt={alt}
      />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: `${C.surfaceLowest}33` }} />
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

          {/* Right — image with subtle 3D tilt */}
          <div className="lg:col-span-6">
            <TiltImage
              src="/images/software/pexels-googledeepmind-18069694.jpg"
              alt="Interlocking glass and reinforced titanium building planes"
            />
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
      <section
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
              columnGap: SP.gutterLg,
              rowGap: SP.xl,
              borderTop: `1px solid ${C.outlineVariant}`,
              paddingTop: SP.xl,
            }}
          >
            {[
              { num: "01", title: "Web Applications",       desc: "Deterministic rendering engines, zero-hydration architectures, and accessible responsive interfaces compliant with global regulatory standards." },
              { num: "02", title: "Mobile Applications",    desc: "Native platform compilation providing sub-millisecond thread execution, hardware acceleration, and seamless off-grid state sync." },
              { num: "03", title: "Full Stack Development", desc: "Vertically integrated systems where data structures transition with strict mathematical continuity from hardware memory to the user viewpoint." },
              { num: "04", title: "Backend Systems",        desc: "Asynchronous event loops, actor-model concurrency, and non-blocking I/O architectures engineered for predictable tail latency under load spikes." },
              { num: "05", title: "API Architecture",       desc: "Strict contract-first protocols leveraging gRPC, Protocol Buffers, and strictly validated GraphQL runtime schemas." },
              { num: "06", title: "SaaS Platforms",         desc: "Multi-tenant compute isolation, programmatic cryptographic scoping, and horizontally partitioned database sharding topologies." },
            ].map(({ num, title, desc }) => (
              <div key={num} style={{ display: "flex", flexDirection: "column", gap: SP.xs }}>
                <div style={{ ...T.labelSm, color: C.primary }}>{num}- DISCIPLINE</div>
                <h3 style={{ ...T.headlineSm, color: C.onSurface }}>{title}</h3>
                <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


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
              // make the padding act from left
              boxSizing: "border-box",
            }}
          >
            <div
              className="flex flex-col md:flex-row md:items-end justify-between"
              style={{ gap: SP.md }}
            >
              <div>
                <div style={{ ...T.labelSm, color: "#60a5fa", marginBottom: SP.xs }}>
                  PHASE TRANSITION
                </div>
                <h2
                  style={{ ...T.headlineLgMob, color: "#FFFFFF" }}
                  className="md:text-[2.5rem] md:leading-[3rem]"
                >
                  From Idea to Product
                </h2>
              </div>
              <p style={{ ...T.bodyMd, color: "rgba(255,255,255,0.75)", maxWidth: "28rem" }}>
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
          6. TECH STACK — Typography & structured grouping (no media)
      ═══════════════════════════════════════════════════════════════ */}
      <section
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

          {/* 4-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: SP.gutterLg }}>
            {[
              {
                heading: "Core Languages",
                rows: [
                  ["Rust",          "Systems & Runtime"],
                  ["Go (Golang)",   "Microservices"],
                  ["TypeScript",    "Full-Stack Type Safety"],
                  ["C++ / CUDA",    "Compute Optimization"],
                  ["Modern Python", "Scientific & Analytics"],
                ],
              },
              {
                heading: "Frameworks & Runtimes",
                rows: [
                  ["Tokio / Actix",   "Async Systems"],
                  ["Next.js / React", "Edge Render"],
                  ["Node / Bun",      "Event Runtimes"],
                  ["gRPC / Protobuf", "Serialization"],
                  ["Flutter / Swift", "Native Mobile"],
                ],
              },
              {
                heading: "Cloud Infrastructure",
                rows: [
                  ["Kubernetes (K8s)",    "Orchestration"],
                  ["Terraform",          "Immutable IaC"],
                  ["AWS & GCP",          "Multi-Cloud Fabric"],
                  ["Cloudflare Workers", "Edge Execution"],
                  ["OpenTelemetry",      "Observability"],
                ],
              },
              {
                heading: "Database Systems",
                rows: [
                  ["PostgreSQL",  "ACID Relational"],
                  ["ClickHouse",  "Analytical Columnar"],
                  ["Redis Cluster","In-Memory Store"],
                  ["CockroachDB", "Distributed SQL"],
                  ["Apache Kafka","Event Log Engine"],
                ],
              },
            ].map(({ heading, rows }) => (
              <div key={heading} style={{ display: "flex", flexDirection: "column", gap: SP.md }}>
                <h3
                  style={{
                    ...T.labelMd,
                    color: C.primary,
                    textTransform: "uppercase",
                    borderBottom: `1px solid ${C.outlineVariant}`,
                    paddingBottom: SP.xs,
                  }}
                >
                  {heading}
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {rows.map(([name, role]) => (
                    <li
                      key={name}
                      style={{
                        ...T.bodyMd,
                        color: C.onSurface,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "0.25rem",
                        paddingBottom: "0.25rem",
                        borderBottom: `1px solid ${C.outlineVariant}66`,
                      }}
                    >
                      <span>{name}</span>
                      <span style={{ ...T.labelSm, color: C.onSurfaceVariant }}>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. DEVELOPMENT PROCESS — Image left, steps right
      ═══════════════════════════════════════════════════════════════ */}
      <section
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
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center" style={{ gap: SP.gutterLg }}>

            {/* Image left */}
            <div className="lg:col-span-6">
              <div
                className="relative w-full overflow-hidden flex items-center justify-center"
                style={{
                  aspectRatio: "4/5",
                  backgroundColor: C.surface,
                  border: `1px solid ${C.outlineVariant}`,
                }}
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/images/software/pexels-jakubzerdzicki-36496927.jpg"
                  alt="Immaculate industrial design lab with technical blueprints"
                />
                <div className="absolute inset-0" style={{ backgroundColor: `${C.surfaceLowest}33` }} />
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

              <div style={{ borderTop: `1px solid ${C.outlineVariant}`, paddingTop: SP.md, display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { num: "01", title: "Architecture & Strategy",  desc: "Formal schema definitions, threat models, database sharding protocols, and performance budgets established before a single line is written." },
                  { num: "02", title: "Precision Execution",      desc: "Sprint development grounded in peer-reviewed modular units, strict type contracts, and continuous component isolation." },
                  { num: "03", title: "Continuous Verification",  desc: "Automated fuzzing pipelines, concurrency stress tests, memory allocation audits, and cryptographic validation passes." },
                  { num: "04", title: "Deployment & Scale",       desc: "Canary orchestrations across geographically distributed edge instances with zero-downtime database migrations." },
                ].map(({ num, title, desc }, i) => (
                  <div
                    key={num}
                    style={{
                      display: "flex",
                      gap: SP.md,
                      paddingTop: i > 0 ? SP.md : 0,
                      paddingBottom: SP.md,
                      borderTop: i > 0 ? `1px solid ${C.outlineVariant}` : "none",
                    }}
                  >
                    <span style={{ ...T.labelMd, color: C.primary, paddingTop: "0.125rem", flexShrink: 0 }}>{num}</span>
                    <div>
                      <h4 style={{ ...T.headlineSm, color: C.onSurface }}>{title}</h4>
                      <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, marginTop: "0.25rem" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. WHY OUR SERVICE — Rationale left, image right
      ═══════════════════════════════════════════════════════════════ */}
      <section
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

              <div style={{ paddingTop: SP.md, display: "flex", flexDirection: "column", gap: 0, borderTop: `1px solid ${C.outlineVariant}` }}>
                {[
                  { title: "Architectural Resilience",  desc: "Self-healing micro-fabrics designed to absorb localized network partitions and infrastructure faults without impacting operational continuity." },
                  { title: "Engineering Rigor",         desc: "Every interface complies with rigorous static typing, zero implicit dependencies, and mathematically provable concurrency limits." },
                  { title: "Long-Term Maintainability", desc: "Clean architectural boundaries decouple enterprise logic from framework idiosyncrasies, dramatically reducing lifecycle maintenance overhead." },
                ].map(({ title, desc }, i) => (
                  <div
                    key={title}
                    style={{
                      paddingTop: i > 0 ? SP.sm : 0,
                      paddingBottom: SP.sm,
                      borderTop: i > 0 ? `1px solid ${C.outlineVariant}` : "none",
                    }}
                  >
                    <h4 style={{ ...T.headlineSm, color: C.onSurface }}>{title}</h4>
                    <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, marginTop: "0.25rem" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image right */}
            <div className="lg:col-span-6">
              <div
                className="relative w-full overflow-hidden flex items-center justify-center"
                style={{
                  aspectRatio: "4/3",
                  backgroundColor: C.surface,
                  border: `1px solid ${C.outlineVariant}`,
                }}
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/images/software/pexels-thisisengineering-3861951.jpg"
                  alt="Crystalline structural columns and balanced cantilevers"
                />
                <div className="absolute inset-0" style={{ backgroundColor: `${C.surfaceLowest}33` }} />
              </div>
            </div>
          </div>
        </div>
      </section>

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

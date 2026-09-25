"use client";

import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────────────
   Design token map — exact hex values from the supplied HTML / Tailwind config
   ──────────────────────────────────────────────────────────────────────── */
const C = {
  surfaceLowest:    "#FFFFFF",
  surfaceLow:       "#F0F7FF",
  surface:          "#FFFFFF",
  surfaceContainer: "#F0F7FF",
  surfaceContainerHigh: "#F0F7FF",
  surfaceContainerHighest: "#F8FAFC",
  onSurface:        "#0F172A",
  onSurfaceVariant: "#475569",
  primary:          "#0066FF",
  primaryContainer: "#0284C7",
  secondary:        "#0066FF",
  outlineVariant:   "#E2E8F0",
  outline:          "#CBD5E1",
};

/* ─────────────────────────────────────────────────────────────────────────
   Typography — exact values from the HTML Tailwind config
   ──────────────────────────────────────────────────────────────────────── */
const T = {
  displayXl:       { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "4.5rem",    lineHeight: "5rem",    letterSpacing: "-0.035em", fontWeight: 600 },
  displayXlMobile: { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "2.75rem",   lineHeight: "3.25rem", letterSpacing: "-0.025em", fontWeight: 600 },
  displayLg:       { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "3.5rem",    lineHeight: "4rem",    letterSpacing: "-0.03em",  fontWeight: 600 },
  displayLgMobile: { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "2.25rem",   lineHeight: "2.75rem", letterSpacing: "-0.02em",  fontWeight: 600 },
  headlineLg:      { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "2.5rem",    lineHeight: "3rem",    letterSpacing: "-0.02em",  fontWeight: 500 },
  headlineLgMobile:{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "1.75rem",   lineHeight: "2.25rem", letterSpacing: "-0.015em", fontWeight: 500 },
  headlineMd:      { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "1.75rem",   lineHeight: "2.25rem", letterSpacing: "-0.015em", fontWeight: 500 },
  headlineSm:      { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "1.25rem",   lineHeight: "1.75rem", letterSpacing: "-0.01em",  fontWeight: 500 },
  bodyLg:          { fontFamily: "'Inter', sans-serif",          fontSize: "1.125rem",  lineHeight: "1.75rem", letterSpacing: "-0.011em", fontWeight: 400 },
  bodyMd:          { fontFamily: "'Inter', sans-serif",          fontSize: "0.9375rem", lineHeight: "1.5rem",  letterSpacing: "-0.006em", fontWeight: 400 },
  bodySm:          { fontFamily: "'Inter', sans-serif",          fontSize: "0.8125rem", lineHeight: "1.25rem", letterSpacing: "0em",      fontWeight: 400 },
  labelMd:         { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "0.75rem",   lineHeight: "1rem",    letterSpacing: "0.06em",   fontWeight: 600 },
  labelSm:         { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "0.6875rem", lineHeight: "0.875rem",letterSpacing: "0.08em",   fontWeight: 600 },
};

/* Spacing from the design */
const SP = {
  xs:       "0.25rem",
  sm:       "0.5rem",
  md:       "1rem",
  lg:       "1.75rem",
  xl:       "3rem",
  gutter:   "1.5rem",
  gutterLg: "2.5rem",
  marginSm: "1.25rem",
  margin:   "3rem",
  marginLg: "5rem",
};

export function CareersView() {
  return (
    <main
      style={{
        backgroundColor: C.surfaceLowest,
        color: C.onSurface,
        WebkitFontSmoothing: "antialiased",
        overflowX: "hidden",
      }}
      className="w-full min-h-screen"
    >
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          borderBottom: `1px solid ${C.outlineVariant}4d`,
        }}
        className="relative w-full min-h-[921px] lg:min-h-screen flex flex-col justify-between pt-[1.25rem] md:pt-[3rem] pb-[1.25rem] md:pb-[3rem] px-[1.25rem] md:px-[3rem] lg:px-[5rem]"
      >
        {/* Video Container Frame */}
        <div
          style={{
            position: "relative",
            width: "100%",
            backgroundColor: C.surfaceLow,
            border: `1px solid ${C.outlineVariant}66`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
          className="h-[614px] md:h-[696px] lg:h-[737px]"
        >
          {/* Structural hairline coordinate grid overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              display: "grid",
              gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              opacity: 0.4,
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                style={{
                  borderRight: i < 11 ? `1px solid ${C.outlineVariant}33` : "none",
                  height: "100%",
                }}
              />
            ))}
          </div>

          {/* Single Video Placeholder (Media 1/3) */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              ...T.bodySm,
              color: C.onSurfaceVariant,
              letterSpacing: "0.025em",
            }}
          >
            attach image, visual or video
          </div>

          {/* Video Transport Architectural Accent */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "4px",
              backgroundColor: `${C.outlineVariant}33`,
            }}
          >
            <div
              style={{
                height: "100%",
                width: "33.333%",
                backgroundColor: C.primary,
                transition: "all 300ms",
              }}
            />
          </div>
        </div>

        {/* Hero Typographic Surface */}
        <div
          style={{
            marginTop: SP.xl,
            maxWidth: "80rem",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-[1.5rem] items-end"
        >
          <div className="lg:col-span-8">
            <span
              style={{
                ...T.labelMd,
                color: C.primary,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: SP.sm,
              }}
            >
              Careers &amp; Engineering
            </span>
            <h1
              style={{
                ...T.displayXlMobile,
                color: C.onSurface,
                lineHeight: 1,
              }}
              className="hidden md:block md:text-[4.5rem] md:leading-[5rem] md:tracking-[-0.035em]"
            >
              Build What&apos;s Next With Us
            </h1>
            <h1
              style={{
                ...T.displayXlMobile,
                color: C.onSurface,
              }}
              className="block md:hidden"
            >
              Build What&apos;s Next With Us
            </h1>
          </div>

          <div className="lg:col-span-4 pb-2">
            <p
              style={{
                ...T.bodyLg,
                color: C.onSurfaceVariant,
                maxWidth: "28rem",
              }}
            >
              We architect future-defining compute substrates and planetary systems with enduring structural craft and uncompromising rigor.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: LIFE AT THE COMPANY
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          borderBottom: `1px solid ${C.outlineVariant}4d`,
          backgroundColor: C.surface,
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
        }}
        className="w-full md:py-28 px-[1.25rem] md:px-[3rem] lg:px-[5rem]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[1.5rem] lg:gap-[2.5rem] items-center">
            {/* Narrative Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <span
                style={{
                  ...T.labelMd,
                  color: C.primary,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: SP.sm,
                  display: "block",
                }}
              >
                Environment
              </span>
              <h2
                style={{
                  ...T.headlineLgMobile,
                  color: C.onSurface,
                  marginBottom: SP.md,
                }}
                className="hidden md:block md:text-[2.5rem] md:leading-[3rem] md:tracking-[-0.02em]"
              >
                Intellectual rigor, quiet excellence.
              </h2>
              <h2
                style={{
                  ...T.headlineLgMobile,
                  color: C.onSurface,
                  marginBottom: SP.md,
                }}
                className="block md:hidden"
              >
                Intellectual rigor, quiet excellence.
              </h2>
              <p
                style={{
                  ...T.bodyMd,
                  color: C.onSurfaceVariant,
                  lineHeight: "1.75rem",
                  marginBottom: SP.lg,
                }}
              >
                Our studio operates with the deliberateness of an architectural laboratory. We protect long arcs of uninterrupted thought, prioritizing deep individual craftsmanship over operational noise.
              </p>
              <div
                style={{
                  borderTop: `1px solid ${C.outlineVariant}66`,
                  paddingTop: SP.md,
                }}
              >
                <p
                  style={{
                    ...T.bodySm,
                    color: C.onSurface,
                    fontWeight: 500,
                  }}
                >
                  Pristine execution across distributed systems and visual computing.
                </p>
              </div>
            </div>

            {/* Asymmetric Image Surface (Media 2/3) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  backgroundColor: C.surfaceLowest,
                  border: `1px solid ${C.outlineVariant}66`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
                className="h-[400px] md:h-[520px] lg:h-[600px]"
              >
                {/* Spatial axis lines */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: "50%",
                    height: "1px",
                    backgroundColor: `${C.outlineVariant}33`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: "50%",
                    width: "1px",
                    backgroundColor: `${C.outlineVariant}33`,
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    ...T.bodySm,
                    color: C.onSurfaceVariant,
                    letterSpacing: "0.025em",
                  }}
                >
                  attach image, visual or video
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: HOW WE WORK
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          borderBottom: `1px solid ${C.outlineVariant}4d`,
          backgroundColor: C.surfaceLowest,
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
        }}
        className="w-full md:py-28 px-[1.25rem] md:px-[3rem] lg:px-[5rem]"
      >
        <div className="max-w-7xl mx-auto">
          <div style={{ marginBottom: SP.xl, maxWidth: "42rem" }}>
            <span
              style={{
                ...T.labelMd,
                color: C.primary,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: SP.sm,
                display: "block",
              }}
            >
              Methodology
            </span>
            <h2
              style={{
                ...T.headlineLgMobile,
                color: C.onSurface,
              }}
              className="hidden md:block md:text-[2.5rem] md:leading-[3rem] md:tracking-[-0.02em]"
            >
              Iterative convergence.
            </h2>
            <h2
              style={{
                ...T.headlineLgMobile,
                color: C.onSurface,
              }}
              className="block md:hidden"
            >
              Iterative convergence.
            </h2>
            <p
              style={{
                ...T.bodyMd,
                color: C.onSurfaceVariant,
                marginTop: SP.sm,
              }}
            >
              Collaboration structured around pure logic, geometric alignment, and autonomous technical leadership.
            </p>
          </div>

          {/* Custom Geometric Architectural Visual Container (Media 3/3) */}
          <div
            style={{
              position: "relative",
              width: "100%",
              backgroundColor: C.surfaceLow,
              border: `1px solid ${C.outlineVariant}66`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: SP.md,
              overflow: "hidden",
            }}
            className="h-[380px] md:h-[460px] lg:h-[540px] md:p-[1.75rem]"
          >
            {/* Subtle Top Coordinate */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: C.outline,
                ...T.labelSm,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <span>Spatial Framework</span>
              <span>Aetheric Architecture</span>
            </div>

            {/* Abstract Geometric Blueprint Composition */}
            <div
              style={{
                position: "relative",
                width: "100%",
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Verbatim Placeholder Overlay */}
              <div
                style={{
                  position: "relative",
                  zIndex: 20,
                  ...T.bodySm,
                  color: C.onSurfaceVariant,
                  letterSpacing: "0.025em",
                  backgroundColor: `${C.surfaceLowest}cc`,
                  backdropFilter: "blur(4px)",
                  padding: `${SP.sm} ${SP.md}`,
                  border: `1px solid ${C.outlineVariant}66`,
                }}
              >
                attach image, visual or video
              </div>

              {/* Kinetic structural grid lines representing iteration */}
              <svg
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  stroke: `${C.primary}4d`,
                }}
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line strokeDasharray="4 8" strokeWidth="1" x1="0" x2="100%" y1="0" y2="100%" />
                <line strokeDasharray="4 8" strokeWidth="1" x1="100%" x2="0" y1="0" y2="100%" />
                <circle cx="50%" cy="50%" fill="none" r="120" stroke={`${C.primary}33`} strokeWidth="1" />
                <circle cx="50%" cy="50%" fill="none" r="220" stroke={`${C.outlineVariant}4d`} strokeWidth="1" />
              </svg>
            </div>

            {/* Subtle Bottom Coordinate */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: C.outline,
                ...T.labelSm,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <span>Iterative Precision</span>
              <span>Scalable Geometry</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: OPEN POSITIONS (Single opening only)
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: C.surface,
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
        }}
        className="w-full md:py-32 px-[1.25rem] md:px-[3rem] lg:px-[5rem]"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderBottom: `1px solid ${C.outlineVariant}66`,
              paddingBottom: SP.lg,
              marginBottom: SP.xl,
            }}
            className="md:flex-row md:items-end"
          >
            <div>
              <span
                style={{
                  ...T.labelMd,
                  color: C.primary,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: SP.sm,
                  display: "block",
                }}
              >
                Current Availability
              </span>
              <h2
                style={{
                  ...T.headlineLgMobile,
                  color: C.onSurface,
                }}
                className="hidden md:block md:text-[2.5rem] md:leading-[3rem] md:tracking-[-0.02em]"
              >
                Open Positions
              </h2>
              <h2
                style={{
                  ...T.headlineLgMobile,
                  color: C.onSurface,
                }}
                className="block md:hidden"
              >
                Open Positions
              </h2>
            </div>
            <div
              style={{
                ...T.labelMd,
                color: C.onSurfaceVariant,
                marginTop: "0.5rem",
              }}
              className="md:mt-0"
            >
              1 Available Role
            </div>
          </div>

          {/* Architectural Single Role Presentation */}
          <div
            style={{
              backgroundColor: C.surfaceLowest,
              border: `1px solid ${C.outlineVariant}66`,
              padding: SP.lg,
              transition: "all 200ms",
            }}
            className="md:p-[3rem]"
          >
            {/* Top Row: Role Title & Meta */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: SP.md,
                paddingBottom: SP.lg,
                borderBottom: `1px solid ${C.outlineVariant}4d`,
              }}
              className="lg:flex-row lg:items-center"
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: SP.sm, marginBottom: SP.xs }}>
                  <span
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "50%",
                      backgroundColor: C.primary,
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      ...T.labelSm,
                      color: C.onSurfaceVariant,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Engineering &amp; Infrastructure
                  </span>
                </div>
                <h3
                  style={{
                    ...T.headlineMd,
                    color: C.onSurface,
                    fontWeight: 600,
                  }}
                  className="hidden md:block"
                >
                  Video Streaming Expert
                </h3>
                <h3
                  style={{
                    ...T.headlineSm,
                    color: C.onSurface,
                    fontWeight: 600,
                  }}
                  className="block md:hidden"
                >
                  Video Streaming Expert
                </h3>
              </div>
              <div>
                <a
                  href="#apply"
                  style={{
                    ...T.labelMd,
                    letterSpacing: "0.06em",
                    backgroundColor: C.primary,
                    color: C.surfaceLowest,
                    padding: `${SP.sm} ${SP.md}`,
                    borderRadius: "0.5rem",
                    textTransform: "uppercase",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    boxShadow: "none",
                    transition: "background-color 150ms",
                  }}
                >
                  Apply for Position
                </a>
              </div>
            </div>

            {/* Structured Summary */}
            <div
              style={{
                paddingTop: SP.lg,
              }}
              className="grid grid-cols-1 md:grid-cols-12 gap-[1.5rem]"
            >
              <div className="md:col-span-7">
                <h4
                  style={{
                    ...T.headlineSm,
                    color: C.onSurface,
                    marginBottom: SP.sm,
                  }}
                >
                  Scope &amp; Impact
                </h4>
                <p
                  style={{
                    ...T.bodyMd,
                    color: C.onSurfaceVariant,
                    lineHeight: "1.75rem",
                    marginBottom: SP.md,
                  }}
                >
                  Lead the architecture and implementation of our next-generation video streaming pipelines. You will design deterministic, ultra-low latency playback systems capable of planetary-scale real-time distribution across heterogeneous network conditions.
                </p>
                <p
                  style={{
                    ...T.bodyMd,
                    color: C.onSurfaceVariant,
                    lineHeight: "1.75rem",
                  }}
                >
                  Work directly on custom protocol implementations, hardware-accelerated transcoding topologies, and edge delivery algorithms engineered to the absolute boundary of physics.
                </p>
              </div>

              <div
                style={{
                  borderLeft: `1px solid ${C.outlineVariant}4d`,
                  paddingLeft: "1.5rem",
                }}
                className="md:col-span-5"
              >
                <h4
                  style={{
                    ...T.headlineSm,
                    color: C.onSurface,
                    marginBottom: SP.sm,
                  }}
                >
                  Core Disciplines
                </h4>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: SP.sm,
                    ...T.bodySm,
                    color: C.onSurfaceVariant,
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <li style={{ display: "flex", alignItems: "flex-start", gap: SP.xs }}>
                    <span style={{ color: C.primary, fontWeight: "bold", userSelect: "none" }}>—</span>
                    <span>WebRTC, SRT, and modern real-time streaming architectures</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: SP.xs }}>
                    <span style={{ color: C.primary, fontWeight: "bold", userSelect: "none" }}>—</span>
                    <span>Low-level codec optimization (AV1, HEVC, H.264)</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: SP.xs }}>
                    <span style={{ color: C.primary, fontWeight: "bold", userSelect: "none" }}>—</span>
                    <span>Distributed edge orchestration and adaptive bitrate algorithms</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: SP.xs }}>
                    <span style={{ color: C.primary, fontWeight: "bold", userSelect: "none" }}>—</span>
                    <span>Systems-level software engineering with minimal overhead</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Expandable Technical Inquiry Trigger */}
            <div
              id="apply"
              style={{
                marginTop: SP.xl,
                paddingTop: SP.md,
                borderTop: `1px solid ${C.outlineVariant}4d`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: SP.sm,
              }}
              className="flex-col sm:flex-row sm:items-center"
            >
              <span
                style={{
                  ...T.bodySm,
                  color: C.onSurfaceVariant,
                }}
              >
                Direct technical evaluation. No automated recruitment screenings.
              </span>
              <a
                href="mailto:careers@streamli.example?subject=Application:%20Video%20Streaming%20Expert"
                style={{
                  ...T.labelMd,
                  color: C.primary,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
                className="hover:underline underline-offset-4"
              >
                Submit Dossier &amp; Code
                <span className="material-symbols-outlined" style={{ fontSize: "0.875rem", marginLeft: "0.25rem" }}>
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

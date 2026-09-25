"use client";

/* ─────────────────────────────────────────────────────────────────────────
   Design token map — exact hex values from the supplied HTML / Tailwind config
   ──────────────────────────────────────────────────────────────────────── */
const C = {
  surfaceLowest:    "#FFFFFF",
  surfaceLow:       "#F0F7FF",
  surface:          "#FFFFFF",
  surfaceContainer: "#F0F7FF",
  surfaceHighest:   "#F8FAFC",
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

const container: React.CSSProperties = {
  maxWidth: "1600px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: SP.marginSm,
  paddingRight: SP.marginSm,
  width: "100%",
};

export function OurMissionView() {
  return (
    <main
      style={{
        backgroundColor: C.surfaceLowest,
        color: C.onSurface,
        WebkitFontSmoothing: "antialiased",
        overflowX: "hidden",
      }}
      className="w-full"
    >
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — HERO: Turning Possibility Into Reality
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          ...container,
          paddingTop: "4rem",
          paddingBottom: SP.xl,
        }}
        className="md:px-[3rem] lg:px-[5rem]"
        id="mission"
      >
        {/* Context Identifier */}
        <div style={{ marginBottom: SP.lg }}>
          <span
            style={{
              ...T.labelSm,
              color: C.primary,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Our Mission
          </span>
        </div>

        {/* Architectural Grid Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2.5rem] items-end">
          {/* Left: Decisive Headline & Purpose Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <div>
              <h1
                style={{
                  ...T.displayLgMobile,
                  color: C.onSurface,
                  marginBottom: SP.lg,
                }}
                className="md:text-[3.5rem] md:leading-[4rem] md:tracking-[-0.03em]"
              >
                Turning Possibility Into Reality
              </h1>
              <p
                style={{
                  ...T.bodyLg,
                  color: C.onSurfaceVariant,
                  maxWidth: "36rem",
                  lineHeight: "1.75rem",
                }}
              >
                We convert theoretical breakthroughs into resilient, mission-critical infrastructure. Grounded in architectural rigor and execution certainty, we construct systems designed to perform at planetary scale.
              </p>
            </div>

            <div
              style={{
                paddingTop: SP.xl,
                marginTop: SP.xl,
                borderTop: `1px solid ${C.outlineVariant}4d`,
              }}
              className="grid grid-cols-2 gap-[1.5rem]"
            >
              <div>
                <span
                  style={{
                    ...T.labelSm,
                    color: C.outline,
                    display: "block",
                    marginBottom: "0.25rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Methodology
                </span>
                <p
                  style={{
                    ...T.bodyMd,
                    color: C.onSurface,
                    fontWeight: 500,
                  }}
                >
                  Deterministic Engineering
                </p>
              </div>

              <div>
                <span
                  style={{
                    ...T.labelSm,
                    color: C.outline,
                    display: "block",
                    marginBottom: "0.25rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Target Domain
                </span>
                <p
                  style={{
                    ...T.bodyMd,
                    color: C.onSurface,
                    fontWeight: 500,
                  }}
                >
                  Planetary Infrastructure
                </p>
              </div>
            </div>
          </div>

          {/* Right: Major Viewport Media Placement (Image 1 of 1) */}
          <div className="lg:col-span-7">
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/11",
                backgroundColor: C.surfaceLow,
                border: `1px solid ${C.outlineVariant}66`,
                borderRadius: "0.5rem",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
              }}
              className="group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaRsWUAD8Ey--wA1mS9e-P3B2LRMgyIZy44QdMmZiIoTrkskHaKgxQam4SVQ3JBtA_SVXeW0-RNj-GvzsrgC8Wkx9ONtC4JW8lkbvhqdVHjUH95-jUy6ikEWyGOaGCTAN2sU9PKZ63s5asy6veyRHru2kv-D2kiuAKIWH21ofZI5VhmWklINO-v_Le4gZcY64HMgp_WcOngbrayUUdVtgkwyYX-1UehKg6I1iUllFO69ookkQf8ACc9Q"
                alt="A striking architectural perspective of modern engineering infrastructure with pure white geometric facades, sharp glass reflections, and subtle cool slate tonal surfaces."
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.9,
                  transition: "opacity 300ms",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 10,
                  backgroundColor: `${C.surfaceLowest}e6`,
                  backdropFilter: "blur(12px)",
                  padding: "1rem 1.5rem",
                  border: `1px solid ${C.outlineVariant}99`,
                  borderRadius: "0.25rem",
                }}
              >
                <span
                  style={{
                    ...T.labelMd,
                    color: C.onSurface,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Attach image, visual or video
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — WHAT DRIVES US (Pure Typographic Cadence)
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          borderTop: `1px solid ${C.outlineVariant}4d`,
          backgroundColor: C.surface,
        }}
        id="philosophy"
      >
        <div
          style={{
            ...container,
            paddingTop: "8rem",
            paddingBottom: "8rem",
          }}
          className="md:px-[3rem] lg:px-[5rem]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2.5rem]">
            {/* Left Label Column */}
            <div className="lg:col-span-3">
              <span
                style={{
                  ...T.labelSm,
                  color: C.primary,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  position: "sticky",
                  top: "3rem",
                  display: "block",
                }}
              >
                What Drives Us
              </span>
            </div>

            {/* Right Content: Asymmetrical Typographic Rhythm */}
            <div className="lg:col-span-9" style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
              {/* Driving Principle 01 */}
              <div
                style={{
                  borderBottom: `1px solid ${C.outlineVariant}33`,
                  paddingBottom: "4rem",
                }}
              >
                <span
                  style={{
                    ...T.labelSm,
                    color: C.outline,
                    display: "block",
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Directives — 01
                </span>
                <h2
                  style={{
                    ...T.headlineLgMobile,
                    color: C.onSurface,
                    marginBottom: "1.5rem",
                  }}
                  className="md:text-[2.5rem] md:leading-[3rem]"
                >
                  Hypothesis without deployment is incomplete.
                </h2>
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurfaceVariant,
                    maxWidth: "48rem",
                    lineHeight: "1.75rem",
                  }}
                >
                  We reject speculative computing that halts at laboratory demonstrations. True innovation manifests when algorithmic discovery withstands the immutable pressures of production environments, continuous concurrency, and unpredictable global demand.
                </p>
              </div>

              {/* Driving Principle 02 */}
              <div
                style={{
                  borderBottom: `1px solid ${C.outlineVariant}33`,
                  paddingBottom: "4rem",
                }}
              >
                <span
                  style={{
                    ...T.labelSm,
                    color: C.outline,
                    display: "block",
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Directives — 02
                </span>
                <h2
                  style={{
                    ...T.headlineLgMobile,
                    color: C.onSurface,
                    marginBottom: "1.5rem",
                  }}
                  className="md:text-[2.5rem] md:leading-[3rem]"
                >
                  Precision is an active, human discipline.
                </h2>
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurfaceVariant,
                    maxWidth: "48rem",
                    lineHeight: "1.75rem",
                  }}
                >
                  Reliability is not an emergent trait; it is authored deliberately through mathematical validation, uncompromising architectural criteria, and zero tolerance for systemic opacity. We design every subsystem to operate with absolute predictability.
                </p>
              </div>

              {/* Driving Principle 03 */}
              <div>
                <span
                  style={{
                    ...T.labelSm,
                    color: C.outline,
                    display: "block",
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Directives — 03
                </span>
                <h2
                  style={{
                    ...T.headlineLgMobile,
                    color: C.onSurface,
                    marginBottom: "1.5rem",
                  }}
                  className="md:text-[2.5rem] md:leading-[3rem]"
                >
                  Velocity through absolute structural integrity.
                </h2>
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurfaceVariant,
                    maxWidth: "48rem",
                    lineHeight: "1.75rem",
                  }}
                >
                  Long-term momentum is achieved by building foundations that never require reinvention. By engineering bedrock platforms with modular permanence, our partners scale their operational reach without accumulating technical debt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — IDEAS INTO IMPACT (Visual 1 of 1)
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          borderTop: `1px solid ${C.outlineVariant}4d`,
          backgroundColor: C.surfaceLowest,
        }}
        id="vision"
      >
        <div
          style={{
            ...container,
            paddingTop: "8rem",
            paddingBottom: "8rem",
          }}
          className="md:px-[3rem] lg:px-[5rem]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2.5rem] items-center">
            {/* Text Framing */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <span
                style={{
                  ...T.labelSm,
                  color: C.primary,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Translation Engine
              </span>
              <h2
                style={{
                  ...T.displayLgMobile,
                  color: C.onSurface,
                  marginBottom: SP.lg,
                }}
                className="md:text-[3.5rem] md:leading-[4rem] md:tracking-[-0.03em]"
              >
                Ideas Into Impact
              </h2>
              <p
                style={{
                  ...T.bodyLg,
                  color: C.onSurfaceVariant,
                  marginBottom: "2rem",
                  lineHeight: "1.75rem",
                }}
              >
                Translating research into production systems requires bridging theoretical physics, software architecture, and real-time streaming pipelines. Our verification pipelines convert abstract breakthroughs into provable, scalable software artifacts.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  paddingTop: "1.5rem",
                  borderTop: `1px solid ${C.outlineVariant}4d`,
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <span style={{ ...T.bodyMd, color: C.onSurface, fontWeight: 500 }}>
                    Algorithmic Formulation
                  </span>
                  <span style={{ ...T.labelSm, color: C.outline, letterSpacing: "0.08em" }}>
                    Phase 01
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <span style={{ ...T.bodyMd, color: C.onSurface, fontWeight: 500 }}>
                    Architectural Hardening
                  </span>
                  <span style={{ ...T.labelSm, color: C.outline, letterSpacing: "0.08em" }}>
                    Phase 02
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <span style={{ ...T.bodyMd, color: C.onSurface, fontWeight: 500 }}>
                    Production Orchestration
                  </span>
                  <span style={{ ...T.labelSm, color: C.primary, letterSpacing: "0.08em" }}>
                    Execution
                  </span>
                </div>
              </div>
            </div>

            {/* Structured Layered Custom Visual Container (Visual 1 of 1) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  backgroundColor: C.surfaceLow,
                  border: `1px solid ${C.outlineVariant}66`,
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "3rem",
                }}
              >
                {/* Geometric Layered Architecture */}
                <div
                  style={{
                    position: "absolute",
                    inset: "2rem",
                    border: `1px solid ${C.outlineVariant}4d`,
                    borderRadius: "0.25rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "2rem",
                    pointerEvents: "none",
                  }}
                >
                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ width: "6rem", height: "6rem", borderLeft: `1px solid ${C.primary}66`, borderTop: `1px solid ${C.primary}66` }} />
                    <div style={{ width: "6rem", height: "6rem", borderRight: `1px solid ${C.primary}66`, borderTop: `1px solid ${C.primary}66` }} />
                  </div>

                  {/* Precision Hairline Grid Lines */}
                  <div style={{ width: "100%", borderBottom: `1px dashed ${C.outlineVariant}66` }} />

                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div style={{ width: "6rem", height: "6rem", borderLeft: `1px solid ${C.primary}66`, borderBottom: `1px solid ${C.primary}66` }} />
                    <div style={{ width: "6rem", height: "6rem", borderRight: `1px solid ${C.primary}66`, borderBottom: `1px solid ${C.primary}66` }} />
                  </div>
                </div>

                {/* Media Placeholder Label */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    backgroundColor: `${C.surfaceLowest}f2`,
                    backdropFilter: "blur(12px)",
                    padding: "1rem 1.5rem",
                    border: `1px solid ${C.outlineVariant}99`,
                    borderRadius: "0.25rem",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      ...T.labelMd,
                      color: C.onSurface,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      display: "block",
                    }}
                  >
                    Attach image, visual or video
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — THE CHANGE WE CREATE (Closing Monolithic Typography)
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          borderTop: `1px solid ${C.outlineVariant}4d`,
          backgroundColor: C.surface,
        }}
      >
        <div
          style={{
            ...container,
            paddingTop: "10rem",
            paddingBottom: "10rem",
          }}
          className="md:px-[3rem] lg:px-[5rem]"
        >
          <div style={{ maxWidth: "64rem" }}>
            <span
              style={{
                ...T.labelSm,
                color: C.primary,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.5rem",
              }}
            >
              Systemic Impact
            </span>
            <h2
              style={{
                ...T.displayXlMobile,
                color: C.onSurface,
                marginBottom: SP.xl,
              }}
              className="md:text-[4.5rem] md:leading-[5rem] md:tracking-[-0.035em]"
            >
              The Change We Create
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-[2.5rem] pt-6">
              <div className="md:col-span-8">
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurfaceVariant,
                    lineHeight: "1.75rem",
                    marginBottom: "2rem",
                  }}
                >
                  We measure our success not by transient adoption cycles, but by the quiet permanence of systems that never fail. When vital compute, distributed intelligence, and high-concurrency data flows operate without latency or degradation, technology recedes into the background—enabling human enterprise to build with unbounded certainty.
                </p>

                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
                  <span
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "50%",
                      backgroundColor: C.primary,
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      ...T.labelSm,
                      color: C.onSurface,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Built for permanence. Engineered to scale.
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
                className="md:col-span-4 border-t md:border-t-0 md:border-l border-[#bfc7d2]/30 pt-6 md:pt-0 md:pl-8"
              >
                <span
                  style={{
                    ...T.labelSm,
                    color: C.outline,
                    display: "block",
                    marginBottom: "0.25rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Institutional Scope
                </span>
                <p
                  style={{
                    ...T.headlineSm,
                    color: C.onSurface,
                    fontWeight: 500,
                  }}
                >
                  Foundational Architecture For The Decade Ahead
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

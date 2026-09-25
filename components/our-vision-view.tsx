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

export function OurVisionView() {
  return (
    <main
      style={{
        backgroundColor: C.surfaceLowest,
        color: C.onSurface,
        WebkitFontSmoothing: "antialiased",
        overflowX: "hidden",
      }}
      className="w-full flex flex-col min-h-screen"
    >
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — HERO: A Glimpse of Tomorrow
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: C.surfaceLowest,
          borderBottom: `1px solid ${C.outlineVariant}4d`,
        }}
        className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-between p-[1.25rem] md:p-[3rem] lg:p-[5rem]"
        id="vision-hero"
      >
        {/* Top Meta Track */}
        <div className="w-full flex items-center justify-between pb-[1.75rem]">
          <span
            style={{
              ...T.labelSm,
              color: C.outline,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            AETHER TECHNOLOGIES / VISION
          </span>
          <span
            style={{
              ...T.labelSm,
              color: C.primary,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            PERSPECTIVE 2025
          </span>
        </div>

        {/* Integrated Video Block (Media Placeholder 1 of 3: Video) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            backgroundColor: C.surfaceLow,
            border: `1px solid ${C.outlineVariant}66`,
            overflow: "hidden",
            margin: "1rem 0",
          }}
          className="flex-1 flex flex-col justify-end min-h-[460px] md:min-h-[560px] lg:min-h-[640px] p-[1rem] md:p-[3rem]"
        >
          {/* Video Canvas Placeholder Surface */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: `${C.surfaceContainer}66`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: SP.sm,
                padding: "0.5rem 1rem",
                backgroundColor: `${C.surfaceLowest}e6`,
                border: `1px solid ${C.outlineVariant}66`,
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                borderRadius: "0.125rem",
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  color: C.primary,
                  fontSize: "1.125rem",
                  lineHeight: 1,
                }}
              >
                videocam
              </span>
              <span
                style={{
                  ...T.labelSm,
                  color: C.onSurface,
                  letterSpacing: "0.02em",
                  textTransform: "none",
                }}
              >
                Attach image, visual or video
              </span>
            </div>
          </div>

          {/* Floating Minimal Typography Container */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              maxWidth: "56rem",
              backgroundColor: `${C.surfaceLowest}f2`,
              border: `1px solid ${C.outlineVariant}4d`,
              padding: "1.25rem 1.75rem",
              backdropFilter: "blur(4px)",
              borderRadius: "0.125rem",
            }}
          >
            <h1
              style={{
                ...T.headlineLgMobile,
                color: C.onSurface,
                marginBottom: "0.25rem",
              }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              A Glimpse of Tomorrow
            </h1>
            <p
              style={{
                ...T.bodyMd,
                color: C.onSurfaceVariant,
                maxWidth: "42rem",
              }}
            >
              Perceiving horizon-scale systems engineered beyond present constraints.
            </p>
          </div>
        </div>

        {/* Bottom Hairline Alignment */}
        <div className="w-full pt-[1rem] flex items-center justify-between">
          <span
            style={{
              ...T.labelSm,
              color: C.outline,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            ARCHITECTURAL DISCIPLINE
          </span>
          <span
            style={{
              ...T.labelSm,
              color: C.outline,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            01 / 04
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — THE FUTURE WE IMAGINE
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: C.surfaceLowest,
          borderBottom: `1px solid ${C.outlineVariant}4d`,
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
        className="w-full px-[1.25rem] md:px-[3rem] lg:px-[5rem]"
        id="future"
      >
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[1.5rem] lg:gap-[2.5rem] items-start">
          {/* Left Editorial Narrative Column */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-1">
            <div>
              <div style={{ marginBottom: SP.lg }}>
                <span
                  style={{
                    ...T.labelSm,
                    color: C.primary,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: SP.xs,
                  }}
                >
                  STRUCTURAL MANDATE
                </span>
                <h2
                  style={{
                    ...T.headlineLgMobile,
                    color: C.onSurface,
                  }}
                  className="md:text-[2.5rem] md:leading-[3rem]"
                >
                  The Future We Imagine
                </h2>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: SP.md,
                  maxWidth: "36rem",
                }}
              >
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurfaceVariant,
                    lineHeight: "1.75rem",
                  }}
                >
                  We conceive computing not as fragmented software silos, but as unified, deterministic architectures capable of enduring sustained structural pressure across decades.
                </p>
                <p
                  style={{
                    ...T.bodyMd,
                    color: C.outline,
                    lineHeight: "1.5rem",
                  }}
                >
                  Our trajectory focuses on building intelligent self-evolving computational platforms and fluid real-time fabrics designed for seamless planetary-scale coordination. Every system is drafted with uncompromising mathematical rigor.
                </p>
              </div>
            </div>

            <div
              style={{
                paddingTop: SP.xl,
                marginTop: SP.xl,
                borderTop: `1px solid ${C.outlineVariant}4d`,
              }}
            >
              <span
                style={{
                  ...T.labelSm,
                  color: C.outline,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  display: "block",
                }}
              >
                SYSTEM SCOPE
              </span>
              <span
                style={{
                  ...T.headlineSm,
                  color: C.onSurface,
                  marginTop: SP.xs,
                  display: "block",
                }}
              >
                Self-Evolving Fabrics
              </span>
            </div>
          </div>

          {/* Right Large Editorial Image Block (Media Placeholder 2 of 3: Image) */}
          <div className="lg:col-span-7">
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
                borderRadius: "0.125rem",
              }}
              className="aspect-[4/3] md:aspect-[16/11]"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: SP.sm,
                  padding: "0.5rem 1rem",
                  backgroundColor: `${C.surfaceLowest}e6`,
                  border: `1px solid ${C.outlineVariant}66`,
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  borderRadius: "0.125rem",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    color: C.primary,
                    fontSize: "1.125rem",
                    lineHeight: 1,
                  }}
                >
                  image
                </span>
                <span
                  style={{
                    ...T.labelSm,
                    color: C.onSurface,
                    letterSpacing: "0.02em",
                    textTransform: "none",
                  }}
                >
                  Attach image, visual or video
                </span>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: SP.sm,
              }}
            >
              <span style={{ ...T.labelSm, color: C.outline, letterSpacing: "0.08em" }}>
                SURFACE / 02
              </span>
              <span style={{ ...T.labelSm, color: C.outline, letterSpacing: "0.08em" }}>
                SCALE DYNAMICS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — BEYOND WHAT EXISTS
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: `${C.surfaceLow}66`,
          borderBottom: `1px solid ${C.outlineVariant}4d`,
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
        className="w-full px-[1.25rem] md:px-[3rem] lg:px-[5rem]"
        id="axioms"
      >
        <div className="max-w-[1600px] mx-auto flex flex-col">
          {/* Section Sub-Track */}
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: `1px solid ${C.outlineVariant}66`,
              paddingBottom: SP.md,
              marginBottom: SP.xl,
            }}
          >
            <span
              style={{
                ...T.labelSm,
                color: C.primary,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              FRAMEWORK TRANSFORMATION
            </span>
            <span
              style={{
                ...T.labelSm,
                color: C.outline,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              03 / 04
            </span>
          </div>

          {/* Pure Typography-Driven Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[1.5rem] lg:gap-[2.5rem] items-baseline py-[1.75rem]">
            <div className="lg:col-span-3">
              <h3
                style={{
                  ...T.headlineSm,
                  color: C.onSurface,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Beyond What Exists
              </h3>
            </div>
            <div className="lg:col-span-9">
              <p
                style={{
                  ...T.displayLgMobile,
                  color: C.onSurface,
                  lineHeight: "1.08",
                  marginBottom: SP.xl,
                }}
                className="md:text-[3.5rem] md:leading-[3.8rem] md:tracking-[-0.03em]"
              >
                Transcending legacy computing paradigms through crystalline architectural precision.
              </p>
            </div>
          </div>

          {/* Asymmetric Structural Grid (3 Axiom cards) */}
          <div
            style={{
              borderTop: `1px solid ${C.outlineVariant}4d`,
              paddingTop: SP.lg,
              marginTop: SP.lg,
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]"
          >
            {/* Axiom I */}
            <div
              style={{
                padding: SP.md,
                backgroundColor: C.surfaceLowest,
                borderLeft: `2px solid ${C.primary}`,
              }}
            >
              <span
                style={{
                  ...T.labelSm,
                  color: C.outline,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: SP.xs,
                }}
              >
                AXIOM I
              </span>
              <h4
                style={{
                  ...T.headlineSm,
                  color: C.onSurface,
                  marginBottom: SP.sm,
                }}
              >
                Deterministic Foundations
              </h4>
              <p
                style={{
                  ...T.bodySm,
                  color: C.onSurfaceVariant,
                  lineHeight: "1.25rem",
                }}
              >
                Eliminating non-deterministic execution environments in favor of provable, reproducible computational invariants.
              </p>
            </div>

            {/* Axiom II */}
            <div
              style={{
                padding: SP.md,
                backgroundColor: C.surfaceLowest,
                borderLeft: `2px solid ${C.outlineVariant}`,
              }}
            >
              <span
                style={{
                  ...T.labelSm,
                  color: C.outline,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: SP.xs,
                }}
              >
                AXIOM II
              </span>
              <h4
                style={{
                  ...T.headlineSm,
                  color: C.onSurface,
                  marginBottom: SP.sm,
                }}
              >
                Latent Intelligence
              </h4>
              <p
                style={{
                  ...T.bodySm,
                  color: C.onSurfaceVariant,
                  lineHeight: "1.25rem",
                }}
              >
                Embedding generative neural pipelines directly inside core protocols rather than treating them as auxiliary external layers.
              </p>
            </div>

            {/* Axiom III */}
            <div
              style={{
                padding: SP.md,
                backgroundColor: C.surfaceLowest,
                borderLeft: `2px solid ${C.outlineVariant}`,
              }}
            >
              <span
                style={{
                  ...T.labelSm,
                  color: C.outline,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: SP.xs,
                }}
              >
                AXIOM III
              </span>
              <h4
                style={{
                  ...T.headlineSm,
                  color: C.onSurface,
                  marginBottom: SP.sm,
                }}
              >
                Sub-Millisecond Coherence
              </h4>
              <p
                style={{
                  ...T.bodySm,
                  color: C.onSurfaceVariant,
                  lineHeight: "1.25rem",
                }}
              >
                Re-engineering transport mediums for ultra-dense multimedia distribution with absolute zero-compromise fidelity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — WHERE WE'RE GOING
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: C.surfaceLowest,
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
        className="w-full px-[1.25rem] md:px-[3rem] lg:px-[5rem]"
        id="horizon"
      >
        <div className="max-w-[1600px] mx-auto flex flex-col">
          {/* Header Strip */}
          <div
            style={{
              borderBottom: `1px solid ${C.outlineVariant}4d`,
              paddingBottom: SP.xl,
            }}
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-[1.5rem] items-end"
          >
            <div className="lg:col-span-6">
              <span
                style={{
                  ...T.labelSm,
                  color: C.primary,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: SP.xs,
                }}
              >
                THE HORIZON
              </span>
              <h2
                style={{
                  ...T.headlineLgMobile,
                  color: C.onSurface,
                }}
                className="md:text-[2.5rem] md:leading-[3rem]"
              >
                Where We're Going
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p
                style={{
                  ...T.bodyLg,
                  color: C.onSurfaceVariant,
                  lineHeight: "1.75rem",
                }}
              >
                Establishing foundational technology standards for generations to come. We build enduring infrastructure that elevates human capability and structural certainty.
              </p>
            </div>
          </div>

          {/* Large Closing Horizontal Visual Surface (Media Placeholder 3 of 3: Image) */}
          <div className="w-full mt-[3rem]">
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
                borderRadius: "0.125rem",
              }}
              className="aspect-[21/9] md:aspect-[24/9]"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: SP.sm,
                  padding: "0.5rem 1rem",
                  backgroundColor: `${C.surfaceLowest}e6`,
                  border: `1px solid ${C.outlineVariant}66`,
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  borderRadius: "0.125rem",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    color: C.primary,
                    fontSize: "1.125rem",
                    lineHeight: 1,
                  }}
                >
                  image
                </span>
                <span
                  style={{
                    ...T.labelSm,
                    color: C.onSurface,
                    letterSpacing: "0.02em",
                    textTransform: "none",
                  }}
                >
                  Attach image, visual or video
                </span>
              </div>
            </div>
          </div>

          {/* Terminal Architectural Coordinates */}
          <div
            style={{
              borderTop: `1px solid ${C.outlineVariant}33`,
              marginTop: SP.lg,
              paddingTop: SP.lg,
            }}
            className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-[0.5rem]"
          >
            <span
              style={{
                ...T.labelSm,
                color: C.outline,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              ENGINEERED FOR PRECISION AND SCALE
            </span>
            <span
              style={{
                ...T.labelSm,
                color: C.primary,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              AETHER INTERNAL VISION DIRECTIVE
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

/* ─────────────────────────────────────────────────────────────────────────
   Design token map — exact hex values from the supplied HTML / Tailwind config
   ──────────────────────────────────────────────────────────────────────── */
const C = {
  surfaceLowest:    "#FFFFFF",
  surfaceLow:       "#F0F7FF",
  surface:          "#FFFFFF",
  surfaceContainer: "#F0F7FF",
  surfaceHigh:      "#FFFFFF",
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

export function OurPhilosophyView() {
  return (
    <main
      style={{
        backgroundColor: C.surface,
        color: C.onSurface,
        WebkitFontSmoothing: "antialiased",
        overflowX: "hidden",
      }}
      className="w-full min-h-screen"
    >
      <div className="w-full max-w-[1600px] mx-auto px-[1.25rem] md:px-[3rem] lg:px-[5rem]">
        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1 — HERO: How We See the World
        ═══════════════════════════════════════════════════════════════ */}
        <section
          style={{
            borderBottom: `1px solid ${C.outlineVariant}4d`,
          }}
          className="pt-24 pb-32 md:pt-36 md:pb-44"
          id="philosophy-hero"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[1.5rem] lg:gap-[2.5rem]">
            <div className="md:col-span-12 lg:col-span-10">
              <p
                style={{
                  ...T.labelMd,
                  color: C.primary,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "2rem",
                }}
              >
                Philosophy &amp; Foundation
              </p>
              <h1
                style={{
                  ...T.displayLgMobile,
                  color: C.onSurface,
                  maxWidth: "64rem",
                }}
                className="md:text-[4.5rem] md:leading-[5rem] md:tracking-[-0.035em] text-balance"
              >
                How We See the World
              </h1>
            </div>

            <div
              style={{
                borderTop: `1px solid ${C.outlineVariant}4d`,
                paddingTop: "3rem",
              }}
              className="md:col-span-12 lg:col-span-10 mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-[1.5rem]"
            >
              <div className="md:col-span-4">
                <span
                  style={{
                    ...T.labelSm,
                    color: C.onSurfaceVariant,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "block",
                  }}
                >
                  Orientation
                </span>
              </div>
              <div className="md:col-span-8" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurfaceVariant,
                    lineHeight: "1.75rem",
                  }}
                >
                  We operate in an industry fascinated by velocity at the expense of endurance. Modern digital systems often mistake complication for sophistication, piling ephemeral layers onto uninspected premises.
                </p>
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurface,
                    lineHeight: "1.75rem",
                  }}
                >
                  Our view begins with quiet subtraction. We believe true technical leverage resides in structural clarity, deliberate restraint, and foundational durability. When the core architecture is sound, speed is an effortless consequence rather than a reckless pursuit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 2 — THE WAY WE THINK
        ═══════════════════════════════════════════════════════════════ */}
        <section
          style={{
            borderBottom: `1px solid ${C.outlineVariant}4d`,
          }}
          className="py-32 md:py-44"
          id="perspective"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[1.5rem] lg:gap-[2.5rem] items-start">
            <div className="lg:col-span-5" style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              <div>
                <p
                  style={{
                    ...T.labelMd,
                    color: C.primary,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  Perspective
                </p>
                <h2
                  style={{
                    ...T.headlineLgMobile,
                    color: C.onSurface,
                  }}
                  className="md:text-[3.5rem] md:leading-[4rem] md:tracking-[-0.03em]"
                >
                  The Way We Think
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "36rem" }}>
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurfaceVariant,
                    lineHeight: "1.75rem",
                  }}
                >
                  Every system is an argument. It asserts what matters, what can be deferred, and where responsibility rests. We approach engineering not as an assembly of disjointed tools, but as an editorial exercise in decisive judgment.
                </p>
                <p
                  style={{
                    ...T.bodyMd,
                    color: C.onSurfaceVariant,
                    lineHeight: "1.5rem",
                  }}
                >
                  Before a single line of execution is laid down, we interrogate assumptions. We examine edge-case behavior under strain, isolate second-order dependencies, and engineer for environments where failure is not a viable option. We prize the calm confidence of a mechanism that simply does what it says it will do.
                </p>
              </div>

              <div
                style={{
                  borderTop: `1px solid ${C.outlineVariant}4d`,
                  paddingTop: "2rem",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <span
                    style={{
                      ...T.labelSm,
                      color: C.onSurfaceVariant,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "block",
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
                    Deep structural deduction over surface iteration.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 mt-12 lg:mt-0">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  backgroundColor: C.surfaceLow,
                  border: `1px solid ${C.outlineVariant}66`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2rem",
                }}
              >
                <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", maxWidth: "24rem" }}>
                  <span
                    className="material-symbols-outlined"
                    style={{
                      color: C.outline,
                      fontSize: "2.25rem",
                    }}
                  >
                    crop_original
                  </span>
                  <p
                    style={{
                      ...T.labelMd,
                      color: C.onSurfaceVariant,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Attach image, visual or video
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 3 — PRINCIPLES WE BUILD BY
        ═══════════════════════════════════════════════════════════════ */}
        <section
          style={{
            borderBottom: `1px solid ${C.outlineVariant}4d`,
          }}
          className="py-32 md:py-44"
          id="principles"
        >
          <div className="max-w-3xl mb-24 md:mb-32">
            <p
              style={{
                ...T.labelMd,
                color: C.primary,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Framework
            </p>
            <h2
              style={{
                ...T.headlineLgMobile,
                color: C.onSurface,
              }}
              className="md:text-[3.5rem] md:leading-[4rem] md:tracking-[-0.03em]"
            >
              Principles We Build By
            </h2>
            <p
              style={{
                ...T.bodyLg,
                color: C.onSurfaceVariant,
                marginTop: "1.5rem",
                lineHeight: "1.75rem",
              }}
            >
              These tenets govern our architectural reviews, our algorithmic design, and our codebases. They are not aspirational slogans; they are active design constraints.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }} className="md:gap-[9rem]">
            {/* Principle 1 */}
            <article
              style={{
                borderTop: `1px solid ${C.outlineVariant}4d`,
                paddingTop: "2rem",
              }}
              className="grid grid-cols-1 md:grid-cols-12 gap-[1.5rem]"
            >
              <div className="md:col-span-5">
                <h3
                  style={{
                    ...T.headlineMd,
                    color: C.onSurface,
                  }}
                  className="md:text-[2.5rem] md:leading-[3rem] md:tracking-[-0.02em]"
                >
                  Simplicity over Cleverness
                </h3>
              </div>
              <div className="md:col-span-7 mt-4 md:mt-0 max-w-2xl">
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurfaceVariant,
                    lineHeight: "1.75rem",
                  }}
                >
                  Clever solutions are fragile. They rely on transient context and burden future engineers with deciphering implicit intent. True technical mastery produces designs so obvious and natural that their elegance appears unremarkable. We choose plain, robust logic every single time.
                </p>
              </div>
            </article>

            {/* Principle 2 */}
            <article
              style={{
                borderTop: `1px solid ${C.outlineVariant}4d`,
                paddingTop: "2rem",
              }}
              className="grid grid-cols-1 md:grid-cols-12 gap-[1.5rem]"
            >
              <div className="md:col-span-5">
                <h3
                  style={{
                    ...T.headlineMd,
                    color: C.onSurface,
                  }}
                  className="md:text-[2.5rem] md:leading-[3rem] md:tracking-[-0.02em]"
                >
                  Deterministic Guarantees
                </h3>
              </div>
              <div className="md:col-span-7 mt-4 md:mt-0 max-w-2xl">
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurfaceVariant,
                    lineHeight: "1.75rem",
                  }}
                >
                  Heuristics and statistical approximations have their place, but foundational primitives require exactness. In compute, networking, and distributed data state, we engineer explicit invariants. When systems guarantee predictable boundaries, entire categories of catastrophic failure cease to exist.
                </p>
              </div>
            </article>

            {/* Principle 3 */}
            <article
              style={{
                borderTop: `1px solid ${C.outlineVariant}4d`,
                paddingTop: "2rem",
              }}
              className="grid grid-cols-1 md:grid-cols-12 gap-[1.5rem]"
            >
              <div className="md:col-span-5">
                <h3
                  style={{
                    ...T.headlineMd,
                    color: C.onSurface,
                  }}
                  className="md:text-[2.5rem] md:leading-[3rem] md:tracking-[-0.02em]"
                >
                  Integrity at Scale
                </h3>
              </div>
              <div className="md:col-span-7 mt-4 md:mt-0 max-w-2xl">
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurfaceVariant,
                    lineHeight: "1.75rem",
                  }}
                >
                  A distributed protocol that behaves impeccably at ten nodes must preserve its semantic correctness across ten thousand. We do not accept silent state drift or eventual consistency when strong coherence can be architected. Reliability is not an add-on layer; it is the fabric of the substrate.
                </p>
              </div>
            </article>

            {/* Principle 4 */}
            <article
              style={{
                borderTop: `1px solid ${C.outlineVariant}4d`,
                paddingTop: "2rem",
              }}
              className="grid grid-cols-1 md:grid-cols-12 gap-[1.5rem]"
            >
              <div className="md:col-span-5">
                <h3
                  style={{
                    ...T.headlineMd,
                    color: C.onSurface,
                  }}
                  className="md:text-[2.5rem] md:leading-[3rem] md:tracking-[-0.02em]"
                >
                  Engineering as Craft
                </h3>
              </div>
              <div className="md:col-span-7 mt-4 md:mt-0 max-w-2xl">
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurfaceVariant,
                    lineHeight: "1.75rem",
                  }}
                >
                  Software engineering is neither pure math nor disposable production line work. It is an exacting craft practiced by humans who care deeply about durability, beauty, and operational balance. We respect the medium, respect the machines, and respect the people who rely on our work every day.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 4 — THINK DIFFERENT. BUILD BETTER.
        ═══════════════════════════════════════════════════════════════ */}
        <section
          style={{
            borderBottom: `1px solid ${C.outlineVariant}4d`,
          }}
          className="py-32 md:py-44"
          id="execution"
        >
          <div className="mb-16 md:mb-20">
            <p
              style={{
                ...T.labelMd,
                color: C.primary,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Execution
            </p>
            <h2
              style={{
                ...T.headlineLgMobile,
                color: C.onSurface,
                maxWidth: "48rem",
              }}
              className="md:text-[3.5rem] md:leading-[4rem] md:tracking-[-0.03em]"
            >
              Think Different. Build Better.
            </h2>
            <p
              style={{
                ...T.bodyLg,
                color: C.onSurfaceVariant,
                marginTop: "1.5rem",
                maxWidth: "42rem",
                lineHeight: "1.75rem",
              }}
            >
              A commitment to first principles over industry conformity. Designing instruments of scale that outlast the cycles of hype.
            </p>
          </div>

          {/* Video Surface Placeholder */}
          <div
            style={{
              position: "relative",
              width: "100%",
              backgroundColor: C.surfaceLow,
              border: `1px solid ${C.outlineVariant}66`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
            className="aspect-[16/9] md:aspect-[21/9]"
          >
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", maxWidth: "24rem" }}>
              <span
                className="material-symbols-outlined"
                style={{
                  color: C.outline,
                  fontSize: "2.25rem",
                }}
              >
                movie
              </span>
              <p
                style={{
                  ...T.labelMd,
                  color: C.onSurfaceVariant,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Attach image, visual or video
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 5 — OUR WAY FORWARD
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-32 md:py-48" id="horizon">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[1.5rem] lg:gap-[2.5rem]">
            <div className="md:col-span-12 lg:col-span-8">
              <p
                style={{
                  ...T.labelMd,
                  color: C.primary,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "2rem",
                }}
              >
                Horizon
              </p>
              <h2
                style={{
                  ...T.headlineLgMobile,
                  color: C.onSurface,
                  marginBottom: "3rem",
                }}
                className="md:text-[3.5rem] md:leading-[4rem] md:tracking-[-0.03em]"
              >
                Our Way Forward
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "48rem" }}>
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurface,
                    lineHeight: "1.75rem",
                  }}
                >
                  We continue forward by holding fast to what does not change: precision in execution, clarity in thought, and an unrelenting respect for foundational engineering.
                </p>
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurfaceVariant,
                    lineHeight: "1.75rem",
                  }}
                >
                  In an era dominated by ephemeral trends, our ambition remains unhurried and absolute: to construct systems that stand firm decades from now.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

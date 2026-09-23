"use client";

import { FormEvent, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────
   Design token map — exact hex values from the supplied HTML / Tailwind config
   ──────────────────────────────────────────────────────────────────────── */
const C = {
  surfaceLowest:    "#ffffff",
  surfaceLow:       "#eff4ff",
  surface:          "#f8f9ff",
  surfaceBright:    "#f8f9ff",
  surfaceContainer: "#e5eeff",
  surfaceContainerHigh: "#dce9ff",
  surfaceContainerHighest: "#d3e4fe",
  onSurface:        "#0b1c30",
  onSurfaceVariant: "#3f4850",
  primary:          "#006194",
  primaryContainer: "#007bb9",
  secondary:        "#006591",
  outlineVariant:   "#bfc7d2",
  outline:          "#707881",
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

export function ContactView() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setError(result.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

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
          SECTION 1 — HERO: Let's Build Something Together
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          borderBottom: `1px solid ${C.outlineVariant}4d`,
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
        }}
        className="relative overflow-hidden"
      >
        {/* Architectural Framing Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="max-w-7xl mx-auto h-full px-[1.25rem] md:px-[3rem] lg:px-[5rem] relative">
            <div
              style={{ backgroundColor: `${C.outlineVariant}33` }}
              className="absolute top-0 bottom-0 left-[1.25rem] md:left-[3rem] lg:left-[5rem] w-[1px]"
            />
            <div
              style={{ backgroundColor: `${C.outlineVariant}33` }}
              className="absolute top-0 bottom-0 right-[1.25rem] md:right-[3rem] lg:right-[5rem] w-[1px]"
            />
            <div
              style={{ backgroundColor: `${C.primary}1a` }}
              className="absolute top-1/2 left-0 right-0 h-[1px]"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-[1.25rem] md:px-[3rem] lg:px-[5rem] relative z-10">
          <div className="pt-8 md:pt-16 pb-12 md:pb-20 max-w-5xl">
            {/* Subtle Category Anchor */}
            <div style={{ display: "flex", alignItems: "center", gap: SP.sm, marginBottom: SP.lg }}>
              <span style={{ width: "1.5rem", height: "1px", backgroundColor: C.primary, display: "inline-block" }} />
              <span
                style={{
                  ...T.labelSm,
                  color: C.primary,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Engagement &amp; Advisory
              </span>
            </div>

            {/* Oversized Display Headline */}
            <h1
              style={{
                ...T.displayXlMobile,
                color: C.onSurface,
                marginBottom: SP.lg,
              }}
              className="md:text-[4.5rem] md:leading-[5rem] md:tracking-[-0.035em]"
            >
              Let&apos;s Build Something Together
            </h1>

            {/* Minimal Supporting Thesis */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[1.5rem] items-start">
              <div className="md:col-span-8">
                <p
                  style={{
                    ...T.bodyLg,
                    color: C.onSurfaceVariant,
                    lineHeight: "1.75rem",
                    fontWeight: 300,
                  }}
                >
                  Direct engagement for complex technical systems. We partner with leadership and engineering teams to conceptualize, architect, and execute high-resilience software, production AI models, and real-time streaming infrastructure.
                </p>
              </div>
              <div
                style={{
                  borderLeft: `1px solid ${C.outlineVariant}66`,
                  paddingLeft: SP.md,
                }}
                className="md:col-span-4 hidden md:block"
              >
                <span
                  style={{
                    ...T.labelSm,
                    color: C.onSurfaceVariant,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: SP.xs,
                  }}
                >
                  Technical Alignment
                </span>
                <p
                  style={{
                    ...T.bodySm,
                    color: C.onSurfaceVariant,
                    lineHeight: "1.25rem",
                  }}
                >
                  Every technical relationship is initiated with an architectural briefing led by senior systems engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — START A CONVERSATION
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          borderBottom: `1px solid ${C.outlineVariant}4d`,
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
        }}
        className="relative"
      >
        <div className="max-w-7xl mx-auto px-[1.25rem] md:px-[3rem] lg:px-[5rem]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2.5rem] items-center">
            {/* Editorial Narrative Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <div style={{ display: "inline-flex", alignItems: "center", gap: SP.xs, marginBottom: SP.md }}>
                <span
                  style={{
                    ...T.labelSm,
                    color: C.secondary,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Initiation Vector
                </span>
              </div>
              <h2
                style={{
                  ...T.headlineLgMobile,
                  color: C.onSurface,
                  marginBottom: SP.md,
                }}
                className="md:text-[2.5rem] md:leading-[3rem] md:tracking-[-0.02em]"
              >
                Start a Conversation
              </h2>
              <p
                style={{
                  ...T.bodyMd,
                  color: C.onSurfaceVariant,
                  marginBottom: SP.md,
                  lineHeight: "1.75rem",
                }}
              >
                Initiating an architectural briefing or technical consultation begins with articulating your core systems challenges. We bypass standard sales layers to establish a direct dialog between technical leaders and our engineering leads.
              </p>
              <p
                style={{
                  ...T.bodySm,
                  color: `${C.onSurfaceVariant}cc`,
                  borderTop: `1px solid ${C.outlineVariant}4d`,
                  paddingTop: SP.md,
                  lineHeight: "1.25rem",
                }}
              >
                Consultations evaluate scale prerequisites, algorithmic dependencies, latency tolerances, and system topology.
              </p>
            </div>

            {/* Editorial Image Column (Exactly 1 Image Placeholder) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  backgroundColor: C.surfaceLow,
                  border: `1px solid ${C.outlineVariant}66`,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: SP.md,
                }}
                className="aspect-[16/10] md:aspect-[16/9]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDweru6B5_Zae3uNa5p8leG1a04DAQC1sLC0qAMkZWEo33MntZN8bbcnqjpFTWOif6DdsmL4EY4uWKtQNBu2jkz9bPzXEG6IWEdluwbjcJg262hj2u3ik8oJeH5a0Sz92MrLRD28C89i-8Bql2ezRIeJU-FCqIOOJwLBnrPMaO8BEHd6gNNs2G7_79IAzy9eRmYndthxYTjr2MPTc2ELNSB4BDnqNP-DSJ8-jgL--k8m0phrKPDHPTLcg"
                  alt="An expansive, brightly lit architectural design studio and engineering laboratory in high-key natural illumination."
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    ...T.labelSm,
                    color: C.onSurface,
                    backgroundColor: `${C.surfaceLowest}e6`,
                    padding: `${SP.sm} ${SP.md}`,
                    border: `1px solid ${C.outlineVariant}4d`,
                    backdropFilter: "blur(4px)",
                    borderRadius: "0.125rem",
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
          SECTION 3 — CONTACT / INQUIRY FORM
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
          backgroundColor: C.surfaceBright,
        }}
        className="relative"
        id="contact-form-section"
      >
        <div className="max-w-7xl mx-auto px-[1.25rem] md:px-[3rem] lg:px-[5rem]">
          {/* Asymmetric Layout: Column 1 Context, Column 2 Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2.5rem]">
            {/* Architectural Context & Form Orientation */}
            <div className="lg:col-span-4">
              <div className="sticky top-12">
                <span
                  style={{
                    ...T.labelSm,
                    color: C.primary,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: SP.xs,
                  }}
                >
                  Structured Inquiry
                </span>
                <h3
                  style={{
                    ...T.headlineMd,
                    color: C.onSurface,
                    marginBottom: SP.md,
                  }}
                >
                  Project Parameters &amp; Briefing
                </h3>
                <p
                  style={{
                    ...T.bodySm,
                    color: C.onSurfaceVariant,
                    marginBottom: SP.lg,
                    lineHeight: "1.5rem",
                  }}
                >
                  Provide essential context regarding your project scope, technical requirements, or organizational objectives. Submissions route directly to our principal technical practice leaders.
                </p>

                {/* Structural Architectural Indicator */}
                <div
                  style={{
                    borderTop: `1px solid ${C.outlineVariant}66`,
                    paddingTop: SP.md,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: SP.sm, color: C.onSurfaceVariant }}>
                    <span
                      className="material-symbols-outlined"
                      style={{
                        color: C.primary,
                        fontSize: "1rem",
                      }}
                    >
                      lock
                    </span>
                    <span
                      style={{
                        ...T.labelSm,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Protected Transmission &amp; Direct Ingestion
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* The Un-Card Architectural Inquiry Form */}
            <div className="lg:col-span-8">
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: C.surfaceLowest,
                  border: `1px solid ${C.outlineVariant}66`,
                  padding: SP.md,
                }}
                className="space-y-[1.75rem] md:p-[3rem]"
              >
                {status === "success" ? (
                  <div
                    style={{
                      padding: "2rem",
                      backgroundColor: C.surfaceLow,
                      border: `1px solid ${C.primary}4d`,
                      borderRadius: "0.5rem",
                      textAlign: "center",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        color: C.primary,
                        fontSize: "2.5rem",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      verified
                    </span>
                    <h4 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: "0.5rem" }}>
                      Inquiry Transmitted
                    </h4>
                    <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
                      Thank you. Your architectural briefing has been received. Our systems engineering practice directors will review and respond within one business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
                      {/* Name */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                        <label
                          htmlFor="full-name"
                          style={{
                            ...T.labelMd,
                            color: C.onSurface,
                            display: "block",
                          }}
                        >
                          Name <span style={{ color: C.primary }}>*</span>
                        </label>
                        <input
                          id="full-name"
                          name="name"
                          placeholder="Jane Doe"
                          required
                          type="text"
                          style={{
                            ...T.bodyMd,
                            height: "2.5rem",
                            paddingLeft: SP.md,
                            paddingRight: SP.md,
                            backgroundColor: C.surfaceLowest,
                            border: `1px solid ${C.outlineVariant}99`,
                            borderRadius: "0.5rem",
                            color: C.onSurface,
                            outline: "none",
                            width: "100%",
                          }}
                        />
                      </div>

                      {/* Email */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                        <label
                          htmlFor="work-email"
                          style={{
                            ...T.labelMd,
                            color: C.onSurface,
                            display: "block",
                          }}
                        >
                          Email <span style={{ color: C.primary }}>*</span>
                        </label>
                        <input
                          id="work-email"
                          name="email"
                          placeholder="j.doe@organization.com"
                          required
                          type="email"
                          style={{
                            ...T.bodyMd,
                            height: "2.5rem",
                            paddingLeft: SP.md,
                            paddingRight: SP.md,
                            backgroundColor: C.surfaceLowest,
                            border: `1px solid ${C.outlineVariant}99`,
                            borderRadius: "0.5rem",
                            color: C.onSurface,
                            outline: "none",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                      <label
                        htmlFor="company-name"
                        style={{
                          ...T.labelMd,
                          color: C.onSurface,
                          display: "block",
                        }}
                      >
                        Company <span style={{ color: C.primary }}>*</span>
                      </label>
                      <input
                        id="company-name"
                        name="company"
                        placeholder="Enterprise or Institution Name"
                        required
                        type="text"
                        style={{
                          ...T.bodyMd,
                          height: "2.5rem",
                          paddingLeft: SP.md,
                          paddingRight: SP.md,
                          backgroundColor: C.surfaceLowest,
                          border: `1px solid ${C.outlineVariant}99`,
                          borderRadius: "0.5rem",
                          color: C.onSurface,
                          outline: "none",
                          width: "100%",
                        }}
                      />
                    </div>

                    {/* Message */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                      <label
                        htmlFor="inquiry-message"
                        style={{
                          ...T.labelMd,
                          color: C.onSurface,
                          display: "block",
                        }}
                      >
                        Message <span style={{ color: C.primary }}>*</span>
                      </label>
                      <textarea
                        id="inquiry-message"
                        name="message"
                        placeholder="Describe your technical challenge, platform scaling parameters, or engineering scope..."
                        required
                        rows={5}
                        style={{
                          ...T.bodyMd,
                          padding: SP.md,
                          backgroundColor: C.surfaceLowest,
                          border: `1px solid ${C.outlineVariant}99`,
                          borderRadius: "0.5rem",
                          color: C.onSurface,
                          outline: "none",
                          width: "100%",
                          resize: "vertical",
                        }}
                      />
                    </div>

                    {/* Honeypot field */}
                    <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                    {status === "error" && (
                      <div
                        style={{
                          padding: "0.75rem 1rem",
                          backgroundColor: "#ffdad6",
                          border: "1px solid #ba1a1a",
                          borderRadius: "0.5rem",
                          color: "#93000a",
                          fontSize: "0.875rem",
                        }}
                      >
                        {error}
                      </div>
                    )}

                    {/* Form Submission Action */}
                    <div
                      style={{
                        paddingTop: SP.sm,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: SP.md,
                        borderTop: `1px solid ${C.outlineVariant}4d`,
                      }}
                      className="flex-col sm:flex-row"
                    >
                      <span
                        style={{
                          ...T.labelSm,
                          color: C.onSurfaceVariant,
                        }}
                      >
                        Direct inquiry to systems engineering directors.
                      </span>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        style={{
                          ...T.labelMd,
                          backgroundColor: C.primary,
                          color: C.surfaceLowest,
                          borderRadius: "0.5rem",
                          padding: `${SP.sm} ${SP.lg}`,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.375rem",
                          border: "none",
                          cursor: status === "loading" ? "not-allowed" : "pointer",
                          transition: "background-color 150ms",
                        }}
                        className="w-full sm:w-auto"
                      >
                        <span>{status === "loading" ? "Transmitting..." : "Initiate Conversation"}</span>
                        <span className="material-symbols-outlined" style={{ fontSize: "0.875rem" }}>
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

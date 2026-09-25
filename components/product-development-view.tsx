"use client";

import Image from "next/image";
import Link from "next/link";

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

export function ProductDevelopmentView() {
  return (
    <main
      style={{ backgroundColor: C.surfaceLowest, color: C.onSurface, WebkitFontSmoothing: "antialiased" }}
      className="w-full"
    >

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — 90vh cinematic viewport
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{ borderBottom: `1px solid ${C.outlineVariant}` }}
        className="relative w-full overflow-hidden flex flex-col justify-end"
        data-section="hero"
      >
        {/* Background image + overlays */}
        <div
          style={{ backgroundColor: C.surface }}
          className="absolute inset-0 w-full h-[90vh] flex items-center justify-center"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAW9HRUs4DNLbbVUImO3W2f5KfhhxBgspg6TW1Cz2Rl9X71uFoGx58yXOfJf5pdWI4lXtgBHurWhgkEFcbaSa2N59gky397Ja6vF3PayRCXDi9NMX7RgRwFYnNleH3VsW24ke7FVNOFR-0vNqQKct719tvNODYP9cvSCRYxxHtLhl4ktymxTsDTMZNDUbBMPVMmMEkodOzZ-j0oc5GCgpjrOvjVArhoJ3knjy_KUZyz4ZsVJBONE8SPxQ')`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${C.surfaceLowest}cc`, backdropFilter: "blur(2px)" }}
          />
        </div>

        {/* Hero copy — pb matches margin-lg */}
        <div
          className="relative z-20 w-full max-w-7xl mx-auto"
          style={{
            paddingLeft: SP.marginSm,
            paddingRight: SP.marginSm,
            paddingBottom: SP.marginLg,
            paddingTop: "calc(90vh - 22rem)",
          }}
        >
          <div className="max-w-4xl" style={{ padding: "0 clamp(0px, 2vw, 0px)" }}>
            {/* Label */}
            <div
              className="inline-flex items-center"
              style={{ ...T.labelSm, color: C.primary, marginBottom: SP.md, gap: SP.xs }}
            >
              <span>DOMAIN 01</span>
              <span style={{ width: "0.375rem", height: "0.375rem", backgroundColor: C.primary, display: "inline-block" }} />
              <span>SYSTEM ARCHITECTURE</span>
            </div>

            {/* H1 */}
            <h1
              style={{
                ...T.displayXlMobile,
                color: C.onSurface,
                marginBottom: SP.md,
              }}
              className="md:text-[4.5rem] md:leading-[5rem]"
            >
              Software Architecture at Global Scale
            </h1>

            {/* Subline */}
            <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, maxWidth: "42rem" }}>
              Engineered systems designed with structural permanence. We design and deliver distributed runtime environments, fault-tolerant enterprise layers, and computational infrastructure for complex operational domains.
            </p>
          </div>
        </div>

        {/* Spacer to push section height to 90vh */}
        <div className="h-[90vh] pointer-events-none" aria-hidden />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. WHAT WE BUILD — Split composition
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
          <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: SP.gutterLg }}>

            {/* Left — typography */}
            <div className="lg:col-span-6" style={{ display: "flex", flexDirection: "column", gap: SP.lg }}>
              <div style={{ ...T.labelSm, color: C.primary }}>SYSTEM TAXONOMY</div>

              <h2
                style={{ ...T.headlineLgMob, color: C.onSurface }}
                className="md:text-[2.5rem] md:leading-[3rem] md:tracking-[-0.02em]"
              >
                Foundational platforms constructed for mission-critical load.
              </h2>

              <div style={{ paddingTop: SP.md, borderTop: `1px solid ${C.outlineVariant}`, display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { title: "Web Applications",   desc: "High-throughput, reactive client interfaces operating seamlessly over distributed edge instances." },
                  { title: "Enterprise Software", desc: "Monolithic and service-oriented systems engineered for governance, longevity, and zero-loss durability." },
                  { title: "Distributed Systems", desc: "Decentralized computational fabrics engineered with deterministic concurrency and mathematically verified integrity." },
                ].map(({ title, desc }, i) => (
                  <div
                    key={title}
                    style={{
                      paddingTop: SP.sm,
                      paddingBottom: SP.sm,
                      borderTop: i > 0 ? `1px solid ${C.outlineVariant}` : "none",
                    }}
                  >
                    <span style={{ ...T.headlineSm, color: C.onSurface, display: "block" }}>{title}</span>
                    <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, marginTop: "0.25rem" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image */}
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGrUVd23CFxlK8mUn_t3E3U4G-cPxTx4JBex01buZs0PwRUHQ-B39stF3sNkDoWAaRhBACxg5gwooP5fIFVoIEe97fS5t-kFgABpEYmvAN-dcYdD_Qk2TiYVtdEdr5M1oTy9AFf-Wpl9WocjvNKqkIssWMKr6QwklpT-ZsN_uoGdFKkr8AMx6uhP4zaYGhmfEr2-AGCMono_p_mMBUlIQdTQ6TSMNsy243V9j2n2jVSD3kpXn8hGgeIg"
                  alt="Interlocking glass and reinforced titanium building planes"
                />
                <div className="absolute inset-0" style={{ backgroundColor: `${C.surfaceLowest}33` }} />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <div style={{ ...T.labelSm, color: C.primary }}>{num} / DISCIPLINE</div>
                <h3 style={{ ...T.headlineSm, color: C.onSurface }}>{title}</h3>
                <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>{desc}</p>
              </div>
            ))}

            {/* Span-full 07 */}
            <div
              className="md:col-span-2 lg:col-span-3"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: SP.xs,
                paddingTop: SP.md,
                borderTop: `1px solid ${C.outlineVariant}`,
              }}
            >
              <div style={{ ...T.labelSm, color: C.primary }}>07 / DISCIPLINE</div>
              <h3 style={{ ...T.headlineSm, color: C.onSurface }}>Custom Enterprise Solutions</h3>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, maxWidth: "48rem" }}>
                Tailored software fabrics engineered for multinational governance, strict data residency requirements, and legacy bridge integration without operational downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. FROM IDEA TO PRODUCT — Full-width visual 480 px
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
          {/* Row header */}
          <div
            className="flex flex-col md:flex-row md:items-end justify-between"
            style={{ marginBottom: SP.lg, gap: SP.md }}
          >
            <div>
              <div style={{ ...T.labelSm, color: C.primary, marginBottom: SP.xs }}>PHASE TRANSITION</div>
              <h2
                style={{ ...T.headlineLgMob, color: C.onSurface }}
                className="md:text-[2.5rem] md:leading-[3rem]"
              >
                From Idea to Product
              </h2>
            </div>
            <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, maxWidth: "28rem" }}>
              Abstract conceptualization translated through rigorous architectural schemas into executable software artifacts.
            </p>
          </div>

          {/* Visual container */}
          <div
            className="relative w-full overflow-hidden flex items-center justify-center"
            style={{
              height: "480px",
              backgroundColor: C.surface,
              border: `1px solid ${C.outlineVariant}`,
            }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuTJYlHT9C2Qpw_LVgll9_52DUFogOj2rkGEn-1Bnp2hIcXjPRuGXjU_ixkAVnLR7A4eyj9ccOHaLrtnk4GhB4dpEM-_tP2hk1TaZM6kLrGmgIBVf5cS1QUwW2yIcdevnWbXqVawLnFXl4HAR4squFsjbb6HZc3wKV4Grwh4Vvg32YTH4hWiz2NKeaHgS0bQ3u-mMr96yPeWB67gM-cOnPvwVQAoRWKTh2bCDGkyo-upXtiQLikoYWoQ"
              alt="Abstract visualization of digital engineering drafting"
            />
            <div className="absolute inset-0" style={{ backgroundColor: `${C.surfaceLowest}1a` }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. ENGINEERING & ARCHITECTURE — Full-width visual 520 px
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
          <div style={{ maxWidth: "48rem", marginBottom: SP.lg }}>
            <div style={{ ...T.labelSm, color: C.primary, marginBottom: SP.xs }}>TOPOLOGY &amp; INTEGRITY</div>
            <h2
              style={{ ...T.headlineLgMob, color: C.onSurface }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              Engineering &amp; Architecture
            </h2>
            <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, marginTop: SP.sm }}>
              Systems delineated across decoupled planes: presentation isolation, high-speed routing cores, deterministic data governance, and immutable audit logs.
            </p>
          </div>

          <div
            className="relative w-full overflow-hidden flex items-center justify-center"
            style={{
              height: "520px",
              backgroundColor: C.surface,
              border: `1px solid ${C.outlineVariant}`,
            }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCObYvtJfqGDdCX4ubMaP2SnW-djUIVUN63ItX8sRKMPMl6Qp60Gp7dZ0QjmdlZxcsGXfCeEaqi5FzgbO3y_Aeg0ZXT022AjkyN2vQczmnlosnVOVV1I1gLAtL0H8idKw8P7dMctGCHeMzs60hId8RuLJQiMYvrTdfP6mVJkc9Of_NTqPHAKqww077sHoBViAzpziqyAinBuuhZR_EeUXXb9YJyHU4dsC5JgsSYxBYBc3La-L1cQ8oavQ"
              alt="Three-dimensional architectural cutaway model of data infrastructure"
            />
            <div className="absolute inset-0" style={{ backgroundColor: `${C.surfaceLowest}26` }} />
          </div>
        </div>
      </section>

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
            <div style={{ ...T.labelMd, color: C.onSurfaceVariant }}>
              ZERO LEGACY DEBT / STRICT STATIC TYPING
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRAESTq5jVDqF8x3hJYjbPeZUtwyMLKCDJ2bX65661ROp7eTC6xSfa3CgNbYscDUISubq01_JHZGQ04yT3sNO-MTFGb-gNZkNV5b8viiv1wUnYtZUlVAw4jGf6oXO9yUNvJ9azazqo_9f9cRliAlYoyGQ5j_u5yeEuzruIIXYybvCXE4rUsFb5IY0eLCpPkO-wfJwNlJBEEXwuPoMWc6kDILctGD7i4X-snRck__I22WdQL9ACOUTm5g"
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
                Why Aether Software Systems?
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ6CUrN3vxYPwVvv36GQMQUWluVXJgqUPc-vl9suew0875OXuIc5ivowB8rHM634wfkf3vqEz1hnyn6imSu5G-aGfepQwxj5-7oGx5yDAnDlPqpUtu6Nv_adP5UC-G8dogZqyvFNUawck06J_H_jlnVXY3cZ_sjs86DMbZT5Xk4HKs5dyASvSdYjVQK1pUp-2p7ZQaxhxW4Fd46ZzJmxV8p7cP-I6IP1OPFmM1PDIGy169idpztkOEtA"
                  alt="Crystalline structural columns and balanced cantilevers"
                />
                <div className="absolute inset-0" style={{ backgroundColor: `${C.surfaceLowest}33` }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          9. FAQ — Minimalist accordion
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
          className="max-w-4xl mx-auto"
          style={{ paddingLeft: SP.marginSm, paddingRight: SP.marginSm }}
        >
          <div style={{ marginBottom: SP.xl }}>
            <div style={{ ...T.labelSm, color: C.primary, marginBottom: SP.xs }}>INQUIRIES &amp; PROTOCOLS</div>
            <h2
              style={{ ...T.headlineLgMob, color: C.onSurface }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              Frequently Addressed Questions
            </h2>
          </div>

          <div style={{ borderTop: `1px solid ${C.outlineVariant}`, borderBottom: `1px solid ${C.outlineVariant}` }}>
            {[
              {
                q: "How does Aether approach architecture for existing legacy infrastructure?",
                a: "We employ a strangler-fig pattern orchestrated via non-blocking API proxies. Core legacy assets remain undisturbed while fresh transactional pathways are mapped into decoupled, type-safe services. This guarantees continuous operational uptime while systematically amortizing technical risk.",
              },
              {
                q: "What security and governance standards are built into the development pipeline?",
                a: "All source trees integrate static binary analysis (SAST), software bill of materials (SBOM) scanning, zero-trust secrets management, and automated SOC2 / ISO-27001 compliance verification at every pull-request boundary.",
              },
              {
                q: "How are intellectual property and source code rights structured?",
                a: "Complete, unencumbered ownership of all custom software artifacts, infrastructure schemas, and algorithmic models is assigned directly to the client upon milestone delivery. No proprietary vendor lock-in runtime modules are introduced.",
              },
              {
                q: "What is the standard engagement timeline from architectural review to production?",
                a: "An architectural sprint typically spans two to three weeks, culminating in a mathematically defined specification document and runtime prototype. Full enterprise builds scale from eight to twenty-four weeks depending on distributed cluster complexity.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group"
                style={{
                  borderTop: `1px solid ${C.outlineVariant}`,
                  paddingTop: SP.md,
                  paddingBottom: SP.md,
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    ...T.headlineSm,
                    color: C.onSurface,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    listStyle: "none",
                  }}
                  className="focus:outline-none"
                >
                  <span>{q}</span>
                  <span
                    className="material-symbols-outlined group-open:rotate-180 transition-transform duration-200"
                    style={{ color: C.outline, marginLeft: SP.md, flexShrink: 0 }}
                  >
                    expand_more
                  </span>
                </summary>
                <div style={{ ...T.bodyMd, color: C.onSurfaceVariant, paddingTop: SP.md, lineHeight: "1.75rem" }}>
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          10. FINAL CTA — Full-width visual with consultation prompt
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: C.surfaceLowest,
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
          overflow: "hidden",
        }}
        className="relative w-full md:py-[5rem]"
      >
        <div
          className="max-w-7xl mx-auto"
          style={{ paddingLeft: SP.marginSm, paddingRight: SP.marginSm }}
        >
          <div
            className="relative w-full flex flex-col justify-center overflow-hidden"
            style={{
              minHeight: "460px",
              backgroundColor: C.surface,
              border: `1px solid ${C.outlineVariant}`,
              padding: SP.lg,
            }}
          >
            {/* Background image */}
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLqz5PKFVue378N6rpWPdxhJ9FSdamHeqGPtmBFV12sEcsJJk4h8BEjPwQGLjKvPwmrWD6clkKq7GOeARcQCowR8Me44SovrgPyWcIP3E5Xg5o3v0Ox84aYG6bIPzlVAobxIFp4-AY6h1PluuzlxK4WSTVF465jIAKScZqbLLhXpX_-2tcDldmHLRFkeEvErqfAjPQ3N0got5ufaHEL7UK2Rg82N3IRZOLEhdN_a8h-CCm7KRKnrGhZg"
              alt="Advanced computational laboratory pavilion"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: `${C.surfaceLowest}d9`, backdropFilter: "blur(1px)" }}
            />

            {/* CTA content */}
            <div className="relative z-20" style={{ maxWidth: "42rem" }}>
              <div style={{ ...T.labelSm, color: C.primary, marginBottom: SP.sm }}>INITIATION</div>
              <h2
                style={{ ...T.displayLgMobile, color: C.onSurface, marginBottom: SP.sm }}
                className="md:text-[2.5rem] md:leading-[3rem] md:tracking-[-0.02em]"
              >
                Ready to engineer your next technological milestone?
              </h2>
              <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, marginBottom: SP.lg }}>
                Engage with our principal software architects. We analyze your requirements and construct a resilient technical roadmap.
              </p>

              <div className="flex flex-col sm:flex-row" style={{ gap: SP.md }}>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center transition-colors duration-200"
                  style={{
                    ...T.labelMd,
                    backgroundColor: C.primary,
                    color: C.onPrimary,
                    paddingTop: SP.sm,
                    paddingBottom: SP.sm,
                    paddingLeft: SP.lg,
                    paddingRight: SP.lg,
                    borderRadius: "0.5rem",
                  }}
                >
                  Contact Us
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center transition-colors duration-150"
                  style={{
                    ...T.labelMd,
                    backgroundColor: C.surfaceLowest,
                    color: C.onSurface,
                    border: `1px solid ${C.outlineVariant}`,
                    paddingTop: SP.sm,
                    paddingBottom: SP.sm,
                    paddingLeft: SP.lg,
                    paddingRight: SP.lg,
                    borderRadius: "0.5rem",
                  }}
                >
                  Schedule Architecture Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

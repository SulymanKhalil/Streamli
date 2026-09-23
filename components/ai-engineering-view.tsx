"use client";

import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────────────
   Design token map — exact hex values from the supplied HTML / Tailwind config
   ──────────────────────────────────────────────────────────────────────── */
const C = {
  surfaceLowest:    "#ffffff",
  surfaceLow:       "#eff4ff",
  surface:          "#f8f9ff",
  surfaceHigh:      "#dce9ff",
  surfaceHighest:   "#d3e4fe",
  surfaceContainer: "#e5eeff",
  onSurface:        "#0b1c30",
  onSurfaceVariant: "#3f4850",
  primary:          "#006194",
  primaryContainer: "#007bb9",
  secondary:        "#006591",
  onPrimary:        "#ffffff",
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
  headlineLgMob:   { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "1.75rem",   lineHeight: "2.25rem", letterSpacing: "-0.015em", fontWeight: 500 },
  headlineSm:      { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "1.25rem",   lineHeight: "1.75rem", letterSpacing: "-0.01em",  fontWeight: 500 },
  bodyLg:          { fontFamily: "'Inter', sans-serif",          fontSize: "1.125rem",  lineHeight: "1.75rem", letterSpacing: "-0.011em", fontWeight: 400 },
  bodyMd:          { fontFamily: "'Inter', sans-serif",          fontSize: "0.9375rem", lineHeight: "1.5rem",  letterSpacing: "-0.006em", fontWeight: 400 },
  bodySm:          { fontFamily: "'Inter', sans-serif",          fontSize: "0.8125rem", lineHeight: "1.25rem", letterSpacing: "0em",      fontWeight: 400 },
  labelMd:         { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "0.75rem",   lineHeight: "1rem",    letterSpacing: "0.06em",   fontWeight: 600 },
  labelSm:         { fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "0.6875rem", lineHeight: "0.875rem",letterSpacing: "0.08em",   fontWeight: 600 },
};

/* Spacing */
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
  maxWidth: "80rem",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: SP.marginSm,
  paddingRight: SP.marginSm,
  width: "100%",
};

/* Reusable background-image div */
function BgImage({ url, style }: { url: string; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url('${url}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...style,
      }}
    />
  );
}

export function AiEngineeringView() {
  return (
    <main
      style={{ backgroundColor: C.surfaceLowest, color: C.onSurface, WebkitFontSmoothing: "antialiased", overflow: "hidden" }}
      className="w-full"
    >

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — min-h 870px, full-width cinematic video surface
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "870px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: C.surfaceLowest,
          borderBottom: `1px solid ${C.outlineVariant}`,
        }}
      >
        {/* Full-width cinematic background */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", backgroundColor: C.surfaceLow }}>
          <BgImage
            url="https://lh3.googleusercontent.com/aida-public/AB6AXuCOUWczD0OXmgzJapOYSc1wV-hLVV6JYYJd00sgjLS0i6bAnHgbxS6uJu3ZhZqazu5GdfCnZEh1RMNuSQtPsMBvp4bdaM6e2s2V0SKZk_z9hfVLvpM9Eupmayt81nQzDXZdQv2pTpXpa0OyiW_ChAaCf8ZYgk6pwKG8IPuMLsy7anpfOG8LdmF-527K7hEu3tQZfEhu_ujW2bYwsmjkn59rO-xhEG1PEC09WlRRAWc-XLAxlPaKvwu8MQ"
            style={{ opacity: 0.85 }}
          />
          <div style={{ position: "absolute", inset: 0, backgroundColor: `${C.surfaceLowest}99`, backdropFilter: "blur(2px)" }} />
        </div>

        {/* Typography layer */}
        <div style={{ ...container, position: "relative", zIndex: 10, paddingTop: SP.xl, paddingBottom: SP.xl }}>
          <div
            style={{
              maxWidth: "48rem",
              backgroundColor: `${C.surfaceLowest}f2`,
              backdropFilter: "blur(12px)",
              padding: SP.lg,
              borderLeft: `2px solid ${C.primary}`,
            }}
            className="md:p-[3rem]"
          >
            <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: SP.sm }}>
              Adaptive Systems Architecture
            </span>
            <h1
              style={{ ...T.displayLgMobile, color: C.onSurface, marginBottom: SP.md }}
              className="md:text-[3.5rem] md:leading-[4rem] md:tracking-[-0.03em]"
            >
              Autonomous Intelligence. Adaptive Systems.
            </h1>
            <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, maxWidth: "42rem", lineHeight: "1.75rem", marginBottom: SP.lg }}>
              Engineering deterministic, high-throughput cognitive systems that transition enterprise operations from reactive computational procedures into continuous, verifiable reasoning engines.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: SP.md }}>
              <a
                href="#architecture"
                style={{
                  ...T.labelMd,
                  backgroundColor: C.primary,
                  color: C.onPrimary,
                  padding: `${SP.sm} ${SP.lg}`,
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Explore Architecture
              </a>
              <a
                href="#solutions"
                style={{
                  ...T.labelMd,
                  border: `1px solid ${C.outlineVariant}`,
                  color: C.onSurface,
                  padding: `${SP.sm} ${SP.lg}`,
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  display: "inline-block",
                  backgroundColor: "transparent",
                }}
              >
                AI Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. WHAT WE BUILD — Image 1, wide horizontal + dual text cols
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
          borderBottom: `1px solid ${C.outlineVariant}`,
          backgroundColor: C.surfaceLowest,
        }}
      >
        <div style={container}>
          {/* Section label */}
          <div style={{ marginBottom: SP.lg }}>
            <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase" }}>Engineering Scope</span>
            <h2
              style={{ ...T.headlineLgMob, color: C.onSurface, marginTop: SP.xs }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              What We Build
            </h2>
          </div>

          {/* Wide horizontal image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "20rem",
              backgroundColor: C.surfaceContainer,
              border: `1px solid ${C.outlineVariant}`,
              borderRadius: "0.25rem",
              overflow: "hidden",
              marginBottom: SP.xl,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="md:h-[420px]"
          >
            <BgImage url="https://lh3.googleusercontent.com/aida-public/AB6AXuBJbkH5OJpKtlkVH7To2qkCbUOE646Y4SybbhpxbSll2plPzrZpjRMFJG50RHvAESMvQUWkMvP9vKeYBRDBs2-NVzoEq5SuZdOa83skPblZIJZ5KbNG68EI2LV85FRzm1jABqHV7Y6AlvTHNb2VBmWwzyQuN21d_XcMsxHiTSXVkGx2k7IzgEWHvORWTKLt1hVmA_mLCeGCJ7FLCuPUqW_v9WuFHc0d2ZECF5zoWeygEUj85uc3aupsfQ" />
          </div>

          {/* Dual editorial text columns */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: SP.xl, paddingTop: SP.md }}>
            <div style={{ display: "flex", flexDirection: "column", gap: SP.md, borderTop: `1px solid ${C.outlineVariant}`, paddingTop: SP.md }}>
              <h3 style={{ ...T.headlineSm, color: C.onSurface }}>Deterministic Cognitive Pipelines</h3>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, lineHeight: "1.75rem" }}>
                We design and operationalize resilient enterprise intelligence layers that integrate deeply with foundational data stores. Our systems emphasize zero-hallucination protocols, predictable token consumption, and low-latency inference orchestration engineered for high-concurrency environments.
              </p>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, lineHeight: "1.75rem" }}>
                By separating reasoning orchestration from static storage, our architectures adapt dynamically to shifts in workload scale without degrading precision or computational integrity.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: SP.md, borderTop: `1px solid ${C.outlineVariant}`, paddingTop: SP.md }}>
              <h3 style={{ ...T.headlineSm, color: C.onSurface }}>Continuous Domain Adaptation</h3>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, lineHeight: "1.75rem" }}>
                Standard models lack domain velocity. We build real-time vector indexing, fine-tuned parameter routing, and autonomous evaluation harness systems that continuously absorb proprietary operational knowledge while enforcing strict data governance boundaries.
              </p>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, lineHeight: "1.75rem" }}>
                The resulting infrastructure provides organizations with sovereign intellectual assets that compound in accuracy, resilience, and operational value over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. AI CAPABILITIES — Visual 1 + 3-col capability cards
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
          borderBottom: `1px solid ${C.outlineVariant}`,
          backgroundColor: C.surface,
        }}
      >
        <div style={container}>
          {/* Header row */}
          <div
            className="flex flex-col md:flex-row md:items-end justify-between"
            style={{ gap: SP.md, marginBottom: SP.xl }}
          >
            <div>
              <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase" }}>Cognitive Scope</span>
              <h2
                style={{ ...T.headlineLgMob, color: C.onSurface, marginTop: SP.xs }}
                className="md:text-[2.5rem] md:leading-[3rem]"
              >
                AI Capabilities
              </h2>
            </div>
            <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, maxWidth: "28rem" }}>
              Custom engineered architectural capabilities designed to anchor mission-critical workflows with verifiable mathematical rigor.
            </p>
          </div>

          {/* Visual 1 */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "24rem",
              backgroundColor: C.surfaceLowest,
              border: `1px solid ${C.outlineVariant}`,
              borderRadius: "0.25rem",
              overflow: "hidden",
              marginBottom: SP.xl,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="md:h-[480px]"
          >
            <BgImage url="https://lh3.googleusercontent.com/aida-public/AB6AXuBeKS1F0mVBEthV2qrSPlkt06xk75jq5FFUPmHTohaoPU21MzJbfxEyJHH-ZBUcMWywBVKlSKeUgsEStqJWLuaLwFeqoEdvoYOcca34Xd7JTrgiZ4mivM6UZ77IMhdU-JbDVFYwi6zZnJd_4rzdRF0xCrqEGeKMJSAHhl67DeJQnnx42yx-bZe7ckJRHUqQKvD3Mhp_oUZdyZUbgEJRGQkGxaEOtGe9LDiLAbQMXTHutntPXKk77sPUFg" />
            <div style={{ position: "absolute", inset: 0, backgroundColor: `${C.surfaceLowest}4d`, backdropFilter: "blur(1px)" }} />
          </div>

          {/* 3-col capability cards */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: SP.lg }}>
            {[
              { num: "01 / REASONING", title: "Autonomous Agent Graphs",   desc: "Multi-step decision trees and self-correcting cognitive loops engineered for enterprise automation and mission execution." },
              { num: "02 / RETRIEVAL", title: "Hybrid Context Engines",     desc: "Dense vector embeddings synthesized with sparse semantic indexing for sub-millisecond factual verification across billions of records." },
              { num: "03 / INFERENCE", title: "Edge & Cloud Acceleration",  desc: "Quantized model runtime engines delivering predictable latency benchmarks across heterogeneous hardware infrastructure." },
            ].map(({ num, title, desc }) => (
              <div
                key={num}
                style={{
                  padding: SP.lg,
                  backgroundColor: C.surfaceLowest,
                  border: `1px solid ${C.outlineVariant}`,
                  borderRadius: "0.25rem",
                }}
              >
                <span style={{ ...T.labelSm, color: C.primary, display: "block", marginBottom: SP.sm, textTransform: "uppercase" }}>{num}</span>
                <h3 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: SP.xs }}>{title}</h3>
                <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. AI SOLUTIONS — Video 2 backdrop + 8-card grid
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="solutions"
        style={{
          position: "relative",
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
          borderBottom: `1px solid ${C.outlineVariant}`,
          backgroundColor: C.surfaceLow,
        }}
      >
        <div style={container}>
          <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase" }}>Enterprise Application</span>
          <h2
            style={{ ...T.headlineLgMob, color: C.onSurface, marginTop: SP.xs, marginBottom: SP.md }}
            className="md:text-[2.5rem] md:leading-[3rem]"
          >
            AI Solutions
          </h2>
        </div>

        {/* Backdrop video surface */}
        <div style={{ ...container, marginBottom: SP.xl }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "20rem",
              backgroundColor: C.surfaceContainer,
              border: `1px solid ${C.outlineVariant}`,
              borderRadius: "0.25rem",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="md:h-[440px]"
          >
            <BgImage url="https://lh3.googleusercontent.com/aida-public/AB6AXuCX9pOlJI7UEVg_RcsISy4yXUl7q_0kMxZwwSYsXwVutBXhXQh-w0KJCmAF9kt3vf0MTxNdVBR8WNzffKA08npIxH5Gp3Ley5sG4XclmPcK588yj1rTwdVHmCCo9sGTrM69XU3hVI4vYgef8Ys2B54z094FV69jjp8-sKTTbVIGxCGESpTvAue1SpWPort-loTIs0I8lVFMV6_zRk6KDk3E1Kg1Z4lSX5hITgOr_1rObKG8Q_eCcMbl4g" />
            <div style={{ position: "absolute", inset: 0, backgroundColor: `${C.surfaceLowest}80`, backdropFilter: "blur(2px)" }} />
          </div>
        </div>

        {/* 8-card grid (alternating primary / secondary top border) */}
        <div style={container}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: SP.lg }}>
            {[
              { title: "AI Applications",       desc: "Turnkey production applications embedding custom-tailored cognitive systems into daily operational software environments.",                                            accent: C.primary },
              { title: "Generative AI",          desc: "Synthetic data synthesis, automated technical documentation, and dynamic code generation with verified architectural correctness.",                                 accent: C.secondary },
              { title: "AI Agents",              desc: "Autonomous micro-services executing asynchronous operational goals with tool execution, memory, and validation checks.",                                             accent: C.primary },
              { title: "Intelligent Automation", desc: "Replacing brittle deterministic scripts with adaptive reasoning logic capable of parsing unstructured institutional data.",                                          accent: C.secondary },
              { title: "LLM Applications",       desc: "Fine-tuned and distilled open-weight and proprietary language models calibrated specifically for domain-specific taxonomy.",                                        accent: C.primary },
              { title: "RAG Systems",            desc: "State-of-the-art retrieval-augmented generation architectures incorporating re-ranking algorithms and verifiable source citations.",                                 accent: C.secondary },
              { title: "Conversational AI",      desc: "High-fidelity conversational interfaces capable of managing complex state, user intent transitions, and regulatory guardrails.",                                    accent: C.primary },
              { title: "AI-Powered Workflows",   desc: "End-to-end human-in-the-loop review orchestration pipelines with intelligent fallback mechanics and audit telemetry.",                                              accent: C.secondary },
            ].map(({ title, desc, accent }) => (
              <div
                key={title}
                style={{
                  padding: SP.lg,
                  backgroundColor: C.surfaceLowest,
                  borderTop: `2px solid ${accent}`,
                }}
              >
                <h4 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: SP.xs }}>{title}</h4>
                <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. AI ARCHITECTURE — Visual 2, 4-stage pipeline steps
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="architecture"
        style={{
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
          borderBottom: `1px solid ${C.outlineVariant}`,
          backgroundColor: C.surfaceLowest,
        }}
      >
        <div style={container}>
          <div style={{ maxWidth: "48rem", marginBottom: SP.lg }}>
            <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase" }}>System Mechanics</span>
            <h2
              style={{ ...T.headlineLgMob, color: C.onSurface, marginTop: SP.xs, marginBottom: SP.sm }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              AI Architecture
            </h2>
            <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
              A modular four-stage cognitive pipeline designed for end-to-end transparency, auditability, and sub-second execution.
            </p>
          </div>

          {/* Visual 2 */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "24rem",
              backgroundColor: C.surfaceContainer,
              border: `1px solid ${C.outlineVariant}`,
              borderRadius: "0.25rem",
              overflow: "hidden",
              marginBottom: SP.xl,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="md:h-[500px]"
          >
            <BgImage url="https://lh3.googleusercontent.com/aida-public/AB6AXuCt4OGN4b3hIndjN4o7P9hyiPK04TyYuTBUkLxfy-x_CxdQPmvTIlgpemPSL3-ScgBSkaO8Zg3cSBhNWSMdpV6-IUtVr0Ybalb5tD4I8ZvO5MpLjMgHQKB500wftE59aEVsANZ3XOMaDSDN1UiBVY4EcX1aql32p_C7vp9xG5SiLqF37B48jMY4Umk688VJiSqei_IHWSHVmRh5fEc9Knon3HvedsA2Y8orxrNPrAleZ4bPuvehFd5bUw" />
            <div style={{ position: "absolute", inset: 0, backgroundColor: `${C.surfaceLowest}4d`, backdropFilter: "blur(1px)" }} />
          </div>

          {/* 4-stage pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: SP.lg }}>
            {[
              { stage: "Stage 01", title: "Input Vectorization", desc: "Multimodal parsing, token hygiene, identity isolation, and high-dimension semantic embedding ingestion." },
              { stage: "Stage 02", title: "Context Synthesis",   desc: "Dynamic RAG orchestration, temporal relevance weighting, and metadata filtering via distributed vector indices." },
              { stage: "Stage 03", title: "Inference Core",      desc: "Model routing, chain-of-thought verification, guardrail enforcement, and deterministic temperature controls." },
              { stage: "Stage 04", title: "Validated Output",    desc: "Schema conformance checks, citation mapping, telemetry emission, and real-time operational actuation." },
            ].map(({ stage, title, desc }) => (
              <div
                key={stage}
                style={{
                  borderLeft: `1px solid ${C.outlineVariant}`,
                  paddingLeft: SP.md,
                  paddingTop: SP.sm,
                  paddingBottom: SP.sm,
                }}
              >
                <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: SP.xs }}>{stage}</span>
                <h3 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: SP.xs }}>{title}</h3>
                <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. AI TECHNOLOGY STACK — No media, 4-col cards
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
          borderBottom: `1px solid ${C.outlineVariant}`,
          backgroundColor: C.surface,
        }}
      >
        <div style={container}>
          <div style={{ marginBottom: SP.xl }}>
            <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase" }}>Underlying Tooling</span>
            <h2
              style={{ ...T.headlineLgMob, color: C.onSurface, marginTop: SP.xs }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              AI Technology Stack
            </h2>
            <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, maxWidth: "42rem", marginTop: SP.xs }}>
              Disciplined selection of foundational protocols and runtimes engineered for deterministic predictability and maximum compute efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: SP.lg }}>
            {[
              {
                heading: "Foundation Models",
                rows: [
                  ["Anthropic Claude 3.5", "Reasoning"],
                  ["OpenAI GPT-4o",        "Multimodal"],
                  ["Meta Llama 3.3",       "Open Weights"],
                  ["Mistral Large & Pixtral","Efficiency"],
                  ["DeepSeek-V3",          "Distillation"],
                ],
              },
              {
                heading: "Frameworks & Orchestration",
                rows: [
                  ["LangGraph & LangChain", "Graphs"],
                  ["LlamaIndex",            "Context"],
                  ["Haystack",              "Pipelines"],
                  ["Semantic Kernel",       "Enterprise"],
                  ["DSPy",                  "Optimization"],
                ],
              },
              {
                heading: "Inference & Acceleration",
                rows: [
                  ["vLLM Engine",           "Throughput"],
                  ["TensorRT-LLM",          "Nvidia"],
                  ["Triton Inference Server","Scale"],
                  ["ONNX Runtime",          "Portability"],
                  ["SGLang",                "KV Cache"],
                ],
              },
              {
                heading: "Vector & Memory Stores",
                rows: [
                  ["Pinecone Serverless",   "Managed"],
                  ["Qdrant",                "HNSW/Rust"],
                  ["pgvector / PostgreSQL", "Relational"],
                  ["Milvus Distributed",    "Ultra-Scale"],
                  ["Weaviate",              "Hybrid"],
                ],
              },
            ].map(({ heading, rows }) => (
              <div
                key={heading}
                style={{
                  border: `1px solid ${C.outlineVariant}`,
                  backgroundColor: C.surfaceLowest,
                  padding: SP.lg,
                  borderRadius: "0.25rem",
                }}
              >
                <span
                  style={{
                    ...T.labelSm,
                    color: C.secondary,
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: SP.md,
                    paddingBottom: SP.xs,
                    borderBottom: `1px solid ${C.outlineVariant}`,
                  }}
                >
                  {heading}
                </span>
                <ul style={{ display: "flex", flexDirection: "column", gap: SP.sm }}>
                  {rows.map(([name, role]) => (
                    <li
                      key={name}
                      style={{
                        ...T.bodySm,
                        color: C.onSurface,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{name}</span>
                      <span style={{ ...T.labelSm, color: C.outline }}>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. OUR AI PROCESS — Image 2, stepped editorial flow
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
          borderBottom: `1px solid ${C.outlineVariant}`,
          backgroundColor: C.surfaceLowest,
        }}
      >
        <div style={container}>
          <div style={{ marginBottom: SP.lg }}>
            <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase" }}>Execution Methodology</span>
            <h2
              style={{ ...T.headlineLgMob, color: C.onSurface, marginTop: SP.xs }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              Our AI Process
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: SP.xl, alignItems: "flex-start" }}>
            {/* Image 2 */}
            <div
              className="lg:col-span-5"
              style={{
                position: "relative",
                height: "24rem",
                backgroundColor: C.surfaceContainer,
                border: `1px solid ${C.outlineVariant}`,
                borderRadius: "0.25rem",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BgImage url="https://lh3.googleusercontent.com/aida-public/AB6AXuAsJ7RxaJzn-x_n3GBPBlF7nh6NB_zHCY0BskcGPUBp5ue7xmzTsfnEP1FjsR_Uho4AC_tz3rhGFQaPc0wHTp1ckqGRuGTXygMt4F_pNZl0EaZVznLIXYvzwHza3aHfzSs-w0UkLXPldUiYrK3GZX-e82pZdnb_ex4Dr7nO7uvHct1N3sH_QQ7dqn6ene2T676AR36jH6tg25AgqEX2jk5La7A6ZLWOKhWpNB0yXClHvQeOxogjitIQLQ" />
            </div>

            {/* Stepped editorial flow */}
            <div className="lg:col-span-7" style={{ display: "flex", flexDirection: "column", gap: SP.lg }}>
              {[
                {
                  num: "PHASE 01",
                  title: "1. Discovery & Boundary Formulation",
                  desc: "We identify specific high-impact leverage vectors, conduct risk modeling, establish latency budgets, and define mathematical success metrics before writing a single line of orchestration code.",
                  border: true,
                },
                {
                  num: "PHASE 02",
                  title: "2. Data Synthesis & Grounding Infrastructure",
                  desc: "Constructing robust data chunking, semantic parsing, and continuous indexing pipelines. We structure raw institutional datasets into high-fidelity context stores optimized for contextual recall.",
                  border: true,
                },
                {
                  num: "PHASE 03",
                  title: "3. Model Orchestration & Guardrail Tuning",
                  desc: "Deploying prompt compilers, multi-agent arbitration harnesses, and automated red-teaming scripts to enforce zero unauthorized leaks and deterministic outputs across edge cases.",
                  border: true,
                },
                {
                  num: "PHASE 04",
                  title: "4. Production Telemetry & Continuous Optimization",
                  desc: "Integrating real-time token tracking, user feedback loops, and automated fine-tuning datasets that preserve system reliability and cost predictability under multi-tenant enterprise loads.",
                  border: false,
                },
              ].map(({ num, title, desc, border }) => (
                <div
                  key={num}
                  style={{
                    paddingBottom: border ? SP.md : 0,
                    borderBottom: border ? `1px solid ${C.outlineVariant}` : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: SP.xs }}>
                    <h3 style={{ ...T.headlineSm, color: C.onSurface }}>{title}</h3>
                    <span style={{ ...T.labelSm, color: C.primary, marginLeft: SP.md, flexShrink: 0 }}>{num}</span>
                  </div>
                  <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. RESPONSIBLE AI — Visual 3, principles triad
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
          borderBottom: `1px solid ${C.outlineVariant}`,
          backgroundColor: C.surface,
        }}
      >
        <div style={container}>
          {/* Header */}
          <div
            className="flex flex-col md:flex-row md:items-end justify-between"
            style={{ gap: SP.md, marginBottom: SP.xl }}
          >
            <div>
              <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase" }}>Governance &amp; Compliance</span>
              <h2
                style={{ ...T.headlineLgMob, color: C.onSurface, marginTop: SP.xs }}
                className="md:text-[2.5rem] md:leading-[3rem]"
              >
                Responsible AI Governance
              </h2>
            </div>
            <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, maxWidth: "28rem" }}>
              Architectural guarantees designed to safeguard enterprise sovereignty, legal defensibility, and algorithmic transparency.
            </p>
          </div>

          {/* Visual 3 */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "20rem",
              backgroundColor: C.surfaceLowest,
              border: `1px solid ${C.outlineVariant}`,
              borderRadius: "0.25rem",
              overflow: "hidden",
              marginBottom: SP.xl,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="md:h-[400px]"
          >
            <BgImage url="https://lh3.googleusercontent.com/aida-public/AB6AXuCe1-VI-tKS5WTdWa3pm8vn2myti65FGYUuzfZbhEs8PgDSihPRhvIGrVvjwOP5RZKPxWdkrwUeVr6jUEH5SOyomgUL-I6RMq4qtk47ae1MnE4duxnXf8hq0jV6CUiwgpmA4_12VXBubZnAgM5pl2zxRQpJURka-EX_kzhISfnIlEDOq-HcnUjatR2FpGsgBwKXjbUJZU9RR7pt3hVMDAZTRx3XS93889UIyhveZA2J735rEUI8A-K3bg" />
            <div style={{ position: "absolute", inset: 0, backgroundColor: `${C.surfaceLowest}4d`, backdropFilter: "blur(1px)" }} />
          </div>

          {/* Principles triad */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: SP.lg }}>
            {[
              {
                label: "Sovereignty",
                title: "Zero Data Contamination",
                desc: "Every inference request is stateless and encrypted in transit. Proprietary enterprise data is strictly firewalled from foundational public model retraining loops.",
              },
              {
                label: "Auditability",
                title: "Verifiable Traceability",
                desc: "Complete provenance tracking for every generated artifact, documenting the exact embedding source, retrieval timestamp, and agent decision logic.",
              },
              {
                label: "Reliability",
                title: "Deterministic Guardrails",
                desc: "Programmatic structural schema enforcement and automated bias arbitration ensure model outputs operate strictly within legal and corporate policies.",
              },
            ].map(({ label, title, desc }) => (
              <div
                key={label}
                style={{
                  borderTop: `1px solid ${C.primary}`,
                  paddingTop: SP.md,
                }}
              >
                <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: SP.xs }}>{label}</span>
                <h3 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: SP.xs }}>{title}</h3>
                <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          9. FAQ — No media, accordion
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
          borderBottom: `1px solid ${C.outlineVariant}`,
          backgroundColor: C.surfaceLowest,
        }}
      >
        <div
          style={{
            maxWidth: "56rem",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: SP.marginSm,
            paddingRight: SP.marginSm,
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: SP.xl }}>
            <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: SP.xs }}>
              Inquiries &amp; Clarifications
            </span>
            <h2
              style={{ ...T.headlineLgMob, color: C.onSurface, marginTop: SP.xs }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ borderTop: `1px solid ${C.outlineVariant}` }}>
            {[
              {
                q: "How do you evaluate and prevent model hallucinations in production?",
                a: "We implement multi-stage programmatic evaluation pipelines using synthetic validation suites, RAG source-grounding checks, and output schema assertions. Every response must cross-reference verifiable source citations with high semantic similarity thresholds before downstream delivery.",
              },
              {
                q: "How is proprietary intellectual property and customer data isolated?",
                a: "We deploy within your dedicated cloud tenancy (AWS, Azure, GCP, or on-premise Kubernetes clusters) using Zero Data Retention agreements with model providers or hosting private open-weights models (e.g., Llama 3, Mistral) with complete local inference sovereignty.",
              },
              {
                q: "What latency profiles are achievable for real-time applications?",
                a: "By pairing optimized vLLM or TensorRT runtimes with speculatively decoded quantized models, time-to-first-token (TTFT) can be reduced to under 80 milliseconds, with streaming inference rates reaching 100+ tokens per second on standard acceleration hardware.",
              },
              {
                q: "Can outputs be constrained to deterministic JSON or structured formats?",
                a: "Yes. We utilize context-free grammar constraints and Outlines-level logit masking at the inference engine layer, ensuring 100% strict mathematical adherence to specified JSON schemas, typed interfaces, and domain protocols.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group"
                style={{ borderBottom: `1px solid ${C.outlineVariant}`, paddingTop: SP.md, paddingBottom: SP.md, cursor: "pointer" }}
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
                <div style={{ ...T.bodyMd, color: C.onSurfaceVariant, paddingTop: SP.sm, lineHeight: "1.75rem" }}>
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          10. FINAL CTA — Image 3, split layout with email form
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="contact"
        style={{ paddingTop: SP.xl, paddingBottom: SP.xl, backgroundColor: C.surfaceLowest }}
      >
        <div style={container}>
          <div
            style={{
              position: "relative",
              border: `1px solid ${C.outlineVariant}`,
              borderRadius: "0.25rem",
              padding: SP.lg,
              overflow: "hidden",
              backgroundColor: C.surfaceLow,
            }}
            className="md:p-[3rem]"
          >
            {/* Top gradient accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "4px",
                background: `linear-gradient(to right, ${C.primary}, ${C.secondary}, ${C.primary})`,
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: SP.xl, alignItems: "center" }}>
              {/* Text + form — left */}
              <div className="lg:col-span-7">
                <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: SP.xs }}>
                  Initiate Systems Architecture
                </span>
                <h2
                  style={{ ...T.headlineLgMob, color: C.onSurface, marginBottom: SP.md }}
                  className="md:text-[2.5rem] md:leading-[3rem]"
                >
                  Deploy Verified Intelligence.
                </h2>
                <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, maxWidth: "36rem", marginBottom: SP.lg }}>
                  Engage our specialized AI Engineering team to design, evaluate, and scale deterministic cognitive systems for your enterprise.
                </p>
                <div
                  className="flex flex-col sm:flex-row items-stretch sm:items-center"
                  style={{ gap: SP.sm, maxWidth: "28rem" }}
                >
                  <input
                    type="email"
                    placeholder="Enter corporate email address"
                    style={{
                      ...T.bodyMd,
                      padding: `${SP.sm} ${SP.md}`,
                      backgroundColor: C.surfaceLowest,
                      border: `1px solid ${C.outlineVariant}`,
                      borderRadius: "0.25rem",
                      color: C.onSurface,
                      outline: "none",
                      width: "100%",
                    }}
                  />
                  <button
                    style={{
                      ...T.labelMd,
                      backgroundColor: C.primary,
                      color: C.onPrimary,
                      padding: `${SP.sm} ${SP.lg}`,
                      borderRadius: "0.5rem",
                      border: "none",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Request Technical Briefing
                  </button>
                </div>
              </div>

              {/* Image 3 — right */}
              <div
                className="lg:col-span-5"
                style={{
                  position: "relative",
                  height: "16rem",
                  backgroundColor: C.surfaceLowest,
                  border: `1px solid ${C.outlineVariant}`,
                  borderRadius: "0.25rem",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                  >
                <BgImage url="https://lh3.googleusercontent.com/aida-public/AB6AXuC9koz1dd8JgxWOULMUxGaeGm9jg8F9IyLuC-Q1LfOdSPdD22uTYXE3NZE_VEyou6mTGdLGzTUUPRNAmoFibP_KlImU5eAW52p-txFUFLlaeGPAfqzKHoYLYrHLo7PSJ4IBF0vDVSBhe88PtXsJsPNCndOQfVwfAZ7X1W9qadFhFLHSIzPExQLX6y-7uPDix0DkNSktOBlPDjNpNy4OcuCG7OciFY4nF-9VQyQyz1cBh87yzcWA8SgEOA" />
                <div style={{ position: "absolute", inset: 0, backgroundColor: `${C.surfaceLowest}66`, backdropFilter: "blur(1px)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

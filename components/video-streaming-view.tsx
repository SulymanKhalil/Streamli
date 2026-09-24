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
  surfaceVariant:   "#d3e4fe",
  onSurface:        "#0b1c30",
  onSurfaceVariant: "#3f4850",
  primary:          "#006194",
  primaryContainer: "#007bb9",
  onPrimary:        "#ffffff",
  outlineVariant:   "#bfc7d2",
  outline:          "#707881",
};

/* ─────────────────────────────────────────────────────────────────────────
   Typography — exact font-size / line-height / letter-spacing / weight
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

/* Shared container style */
const container: React.CSSProperties = {
  maxWidth: "80rem",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: SP.marginSm,
  paddingRight: SP.marginSm,
};

export function VideoStreamingView() {
  return (
    <main
      style={{ backgroundColor: C.surfaceLowest, color: C.onSurface, WebkitFontSmoothing: "antialiased" }}
      className="w-full"
    >

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — 921 px tall cinematic viewport
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: C.surfaceLow, height: "921px", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end" }}
      >
        {/* Background image */}
        <div
          style={{ position: "absolute", inset: 0, backgroundColor: C.surfaceHigh, overflow: "hidden" }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAewdcHMb3wrTTjTYRG8LdXgkIwXIy9xJz6rOMqDotg9xIwfXUTPP8MJXPNVAJkO7ua1I-wofhaOP5RvmzTPYLnmcul8977oVs2vcMZ_kTxNN04jNtqssC9lC-VS5iLVwxIJhqr79xB7Fik_aVlfDFWpEqi3TO7EENbIK32yKl4TKTjRJ4VzaAfwzqRYp1TNjFNyAXWCpjLRnn1JMjuLGyMhYOPnQGk68Y0li75QsbEJ5yZbXA9VGnACg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(1.02)",
            }}
          />
          {/* Atmospheric gradient wash */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to top, ${C.surfaceLowest}, transparent, transparent)`,
            }}
          />
        </div>

        {/* Floating Typography Ribbon */}
        <div style={{ ...container, position: "relative", zIndex: 10, paddingBottom: SP.xl, width: "100%" }}>
          <div style={{ maxWidth: "56rem" }}>
            <span
              style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "inline-block", marginBottom: "0.75rem" }}
            >
              Next-Generation Streaming Engine
            </span>
            <h1
              style={{ ...T.displayXlMobile, color: C.onSurface, marginBottom: "1.5rem" }}
              className="md:text-[4.5rem] md:leading-[5rem] md:tracking-[-0.035em]"
            >
              Ultra-Low Latency. Global Media Delivery.
            </h1>
            <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, maxWidth: "42rem" }}>
              Engineered for continuous media throughput. A fluid distribution pipeline delivering glass-to-glass sub-second streaming at uninterrupted planetary scale.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. WHAT WE BUILD — Image 1, asymmetric split
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: SP.xl, paddingBottom: SP.xl, backgroundColor: C.surfaceLowest }} className="md:py-32">
        <div style={container}>
          <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: SP.gutterLg, alignItems: "center" }}>

            {/* Media frame */}
            <div className="lg:col-span-7">
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/10",
                  backgroundColor: C.surfaceLow,
                  border: `1px solid ${C.outlineVariant}`,
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                }}
                className="group"
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIfG4fCFTbShnjISZa_aWHEU1xG9IfyGoVLDSKk4tdET5ejfRu2oGdlxf6UvMZfsVq7jlbMX27nqDLSmX6sUQ3N9ZyXX1thF42kSci-peLlGevEvsX3BEq4ZQZHEFdaQcoXWf6eCOswke9Ue3hNefA576kyaNC5St-qsZvmNb8fo1ZIhshNeHdguTtm6o_TCKUmahtCWPRmM4ntwgijMV9_0BHue3PDtMQDfJh3GxFa-bqsj2EdUlFrg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 700ms",
                  }}
                  className="group-hover:scale-105"
                />
              </div>
            </div>

            {/* Narrative column */}
            <div className="lg:col-span-5" style={{ paddingLeft: "1rem" }}>
              <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                What We Build
              </span>
              <h2
                style={{ ...T.headlineLgMob, color: C.onSurface, marginBottom: "1.5rem" }}
                className="md:text-[2.5rem] md:leading-[3rem]"
              >
                Architected for Uninterrupted Streaming
              </h2>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, marginBottom: "1.5rem", lineHeight: "1.75rem" }}>
                We eliminate the friction points of conventional broadcasting. Our unified video framework harmonizes adaptive packaging, hardware-accelerated transcoding, and responsive playback clients into a single, continuous stream pipeline.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "1rem", borderTop: `1px solid ${C.outlineVariant}` }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span className="material-symbols-outlined" style={{ color: C.primary, fontSize: "1.25rem", marginTop: "0.125rem" }}>stream</span>
                  <p style={{ ...T.bodyMd, color: C.onSurface }}>Universal edge transcoding dynamically tuned to network fluctuations.</p>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span className="material-symbols-outlined" style={{ color: C.primary, fontSize: "1.25rem", marginTop: "0.125rem" }}>timer</span>
                  <p style={{ ...T.bodyMd, color: C.onSurface }}>Sub-second synchronization across synchronous global audiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. STREAMING CAPABILITIES — Visual 1, full-width + 3-col pillars
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: SP.xl, paddingBottom: SP.xl, backgroundColor: C.surface }}>
        <div style={container}>
          {/* Header */}
          <div style={{ maxWidth: "48rem", marginBottom: "3rem" }}>
            <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
              Streaming Capabilities
            </span>
            <h2
              style={{ ...T.headlineLgMob, color: C.onSurface }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              Continuous Flow Across the Edge
            </h2>
          </div>

          {/* Fluid visual canvas 21:9 */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "21/9",
              backgroundColor: C.surfaceLowest,
              border: `1px solid ${C.outlineVariant}`,
              borderRadius: "0.5rem",
              overflow: "hidden",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2OD3DNJATlSk9XWY-R_zHGqbrwNhQbPzlblWH7dixCQ7_ROLLrJnfpsyeveQ5ZaVckhM4zxC1CIpDfqDFdPKwVee2WkIY2niEazvLne6llM_psio3qNoUx1Kjrz_pzehKvUK4UadwWdUMEW4xsIZyS-RCwpdnXdpYTjM9MuW9GR1HJ3v8YPIi-Yahxrmr1af3kBt0Tv16BjReghvB67PLiq8qbJ9TCOMe4hm7B9uZercVmB081_nm1g')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          {/* 3-column capability pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: SP.gutter }}>
            {[
              {
                title: "Hyper-Scale Concurrency",
                desc: "Seamless multi-million concurrent viewer throughput sustained with elastic edge offloading and real-time peering optimization.",
                accent: C.primary,
              },
              {
                title: "Adaptive Bitrate Matrix",
                desc: "Granular ladder creation switching instantly across fluctuating mobile cellular and broadband connections without artifacting.",
                accent: C.outlineVariant,
              },
              {
                title: "Zero-Buffer Cold Starts",
                desc: "Instantaneous video rendering utilizing smart manifest pre-fetching and client-side segment acceleration caches.",
                accent: C.outlineVariant,
              },
            ].map(({ title, desc, accent }) => (
              <div
                key={title}
                style={{
                  padding: "1.5rem",
                  backgroundColor: C.surfaceLowest,
                  borderTop: `2px solid ${accent}`,
                }}
              >
                <h3 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: "0.75rem" }}>{title}</h3>
                <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. VIDEO INFRASTRUCTURE — Visual 2, reverse split
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
          backgroundColor: C.surfaceLowest,
          borderTop: `1px solid ${C.outlineVariant}`,
        }}
      >
        <div style={container}>
          <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: SP.gutterLg, alignItems: "center" }}>

            {/* Text details — left on desktop */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                Video Infrastructure
              </span>
              <h2
                style={{ ...T.headlineLgMob, color: C.onSurface, marginBottom: "1.5rem" }}
                className="md:text-[2.5rem] md:leading-[3rem]"
              >
                Multi-Tiered Delivery Mesh
              </h2>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, marginBottom: "1.5rem", lineHeight: "1.75rem" }}>
                Our infrastructure is modeled around physical wave propagation. Point of ingest connects directly to software-defined points of presence worldwide, transforming source streams at proximity to the viewer.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { title: "Global PoP Ingestion",      desc: "Distributed point-of-presence rings receiving RTMP, SRT, and WebRTC simultaneously." },
                  { title: "Decentralized Packaging",   desc: "Just-in-time segmentation into HLS, DASH, and low-latency chunk protocols." },
                ].map(({ title, desc }) => (
                  <div
                    key={title}
                    style={{ padding: "1rem", backgroundColor: C.surface, borderRadius: "0.5rem" }}
                  >
                    <h4 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: "0.25rem" }}>{title}</h4>
                    <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Infrastructure visual — right on desktop */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/11",
                  backgroundColor: C.surfaceLow,
                  border: `1px solid ${C.outlineVariant}`,
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSo8GAxtabuJMyw4PS-7nh9z9U_UgJxNZlRfbSJQ8AP7borseOT2CprVl67w-76InT_Y-O4psYzbCFWOzB9JqFrMk0IQjwVziTQo6E--x4NkvW4Mge74bc-5R8IO3NI__Oeh7tCHh7w8wkWyaC5Gtb7tqHhwcGHoCuLpN4IMuPcvCXAo-b4OF8gxtRrwApJs9L8ZcGjyElC4B7-KSRf51cukU-Sin3_FRHS8aWbicRvkOto2a6D1HXrg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. STREAMING EXPERIENCE — Video 2, cinematic 21:9 with scrubber
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: SP.xl, paddingBottom: SP.xl, backgroundColor: C.surface }}>
        <div style={container}>
          {/* Centred header */}
          <div style={{ textAlign: "center", maxWidth: "42rem", margin: "0 auto 2.5rem" }}>
            <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
              Streaming Experience
            </span>
            <h2
              style={{ ...T.headlineLgMob, color: C.onSurface }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              Immersive Player Telemetry
            </h2>
          </div>

          {/* Cinematic video surface */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              backgroundColor: C.surfaceHigh,
              border: `1px solid ${C.outlineVariant}`,
              borderRadius: "0.5rem",
              overflow: "hidden",
            }}
            className="md:aspect-[21/9]"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXZ9ZIFFbkpoN_fjDFpxQnWPh1IxJOHvXnZM2AgjywAdIQqbnCtHkb9_GwuS9UEJwrG6TzQ25Fr5aLR3_f_JXzLSdd02awLJYXl9vBelt995TzwT90rf16QdBAMea2M9bfcws-saLbBYhOEF3yL0O9dT0NYLtPj-UUlJ9MPpLEVEnAehpCxcllL-9ExtPZJziwGJRFn39F9trr3u-3ZgOonECtQmFZGUQ5XZ0y1fvyk5-Q0yN1xy53_A')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Video scrubber overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1.5rem",
                background: `linear-gradient(to top, ${C.surfaceLowest}e6, transparent)`,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {/* Progress bar */}
              <div style={{ width: "100%", height: "2px", backgroundColor: C.outlineVariant, position: "relative", cursor: "pointer" }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "66.66%", backgroundColor: C.primary }} />
                <div style={{
                  position: "absolute",
                  left: "66.66%",
                  top: "-3px",
                  width: "8px",
                  height: "8px",
                  backgroundColor: C.primary,
                  borderRadius: 0,
                }} />
              </div>
              {/* Time label row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0.25rem" }}>
                <span style={{ ...T.labelSm, color: C.onSurface }}>LIVE // 01:48:22</span>
                <span style={{ ...T.labelSm, color: C.onSurface }}>4K 60FPS // ADAPTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. PLATFORM FEATURES — Image 2, feature grid left + image right
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: SP.xl, paddingBottom: SP.xl, backgroundColor: C.surfaceLowest }}>
        <div style={container}>
          <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: SP.gutterLg, alignItems: "flex-start" }}>

            {/* Feature grid — left */}
            <div className="lg:col-span-6">
              <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                Platform Features
              </span>
              <h2
                style={{ ...T.headlineLgMob, color: C.onSurface, marginBottom: "2rem" }}
                className="md:text-[2.5rem] md:leading-[3rem]"
              >
                Complete Real-Time Media Suite
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ columnGap: "1.5rem", rowGap: "2rem" }}>
                {[
                  { title: "Live Streaming",        desc: "Glass-to-glass latency under one second via WebRTC and Low-Latency HLS protocols." },
                  { title: "Video on Demand",        desc: "Instant asset ingestion, algorithmic chaptering, and automated cloud transcoding." },
                  { title: "Resilient Players",      desc: "Lightweight player frameworks for iOS, Android, Smart TVs, and modern web clients." },
                  { title: "Content Management",     desc: "Intuitive media catalogs with real-time metadata indexing and edge caching hooks." },
                  { title: "Dynamic Experiences",    desc: "Server-side ad insertion and interactive synchronizations built right into the stream." },
                  { title: "Global Media Delivery",  desc: "Multi-CDN failover and dynamic traffic steering to assure 99.999% uptime." },
                ].map(({ title, desc }) => (
                  <div key={title}>
                    <h3 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: "0.5rem" }}>{title}</h3>
                    <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Large visual — right */}
            <div className="lg:col-span-6" style={{ marginTop: 0 }}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  backgroundColor: C.surfaceLow,
                  border: `1px solid ${C.outlineVariant}`,
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbJ9E1RytBx7AQ_vqbxTWymb11PPbvuxJ0uGljD4-AqccQDp9le6TKI3BUEJpDvPDqEMfi9VJym5aXHesQjKtfHCJaaS-3BFWgEoscP-3nPCsQ9EIETt3shC5MNrG5hESqbp7ly7LPULj_mWMOEblq6v8Z9gwWzhso6MrXx4BBZMc-9_sZx-15y5qvgy3cumlzPLwUirgrnRwQQK_rlvRYc_S9MWhE0TWxOBZgrXoGpYDlX-Uxmyimcg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. TECHNOLOGY STACK — No media, 4-col cards
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
          backgroundColor: C.surface,
          borderTop: `1px solid ${C.outlineVariant}`,
          borderBottom: `1px solid ${C.outlineVariant}`,
        }}
      >
        <div style={container}>
          <div style={{ maxWidth: "48rem", marginBottom: "3rem" }}>
            <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
              Technology Stack
            </span>
            <h2
              style={{ ...T.headlineLgMob, color: C.onSurface }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              Zero-Compromise Engineering Protocols
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: SP.gutter }}>
            {[
              {
                num: "Protocols",
                title: "Streaming Protocols",
                items: ["WebRTC Core", "LL-HLS & HLS", "MPEG-DASH", "RTMP / SRT Ingestion"],
              },
              {
                num: "Encoders",
                title: "Codecs",
                items: ["AV1 Next-Gen", "HEVC (H.265)", "AVC (H.264) High Profile", "VP9 & Opus Audio"],
              },
              {
                num: "Compute",
                title: "Edge Ingestion",
                items: ["Anycast Routing", "GPU Accelerated Nodes", "Dynamic Manifest Rewriting", "Real-Time Watermarking"],
              },
              {
                num: "Client",
                title: "Player Frameworks",
                items: ["React Native & Flutter", "Native iOS AVPlayer", "Android ExoPlayer", "Headless Web SDKs"],
              },
            ].map(({ num, title, items }) => (
              <div
                key={title}
                style={{
                  padding: "1.5rem",
                  backgroundColor: C.surfaceLowest,
                  border: `1px solid ${C.outlineVariant}`,
                  borderRadius: "0.25rem",
                }}
              >
                <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                  {num}
                </span>
                <h3 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: "1rem" }}>{title}</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", ...T.bodySm, color: C.onSurfaceVariant }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: C.primary, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. STREAMING PROCESS — Visual 3, 21:8 + 4-phase steps
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: SP.xl, paddingBottom: SP.xl, backgroundColor: C.surfaceLowest }}>
        <div style={container}>
          <div style={{ maxWidth: "48rem", marginBottom: "3rem" }}>
            <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
              Our Streaming Process
            </span>
            <h2
              style={{ ...T.headlineLgMob, color: C.onSurface }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              The Continuous Pipeline
            </h2>
          </div>

          {/* Process visual */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "21/8",
              backgroundColor: C.surfaceLow,
              border: `1px solid ${C.outlineVariant}`,
              borderRadius: "0.5rem",
              overflow: "hidden",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4g5aQJ4WqS5LfX2TWI4CwiHJNuz16kOJHUfiWsq-vJXEXN3xVz5gdFJTkAz9XvFJWF7hFdwiIfm9W-1ATseeU16qrBBpw3_S81LWo3JUFjWhv-ZAEzDKqqr-29qSooZV1w2-_EFCXS8Lq03XujXi2_BZuj8ZLvnWMPNeTuopwTrogyGZbHuqfDJFKCUniEB1NBx7S_0fdpX7hvR77NRMphTkY1jyBrRRRvOVM17VID88Zma10phKQAw')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          {/* 4 phase steps */}
          <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: SP.gutter }}>
            {[
              { phase: "Phase 01", title: "Ingest",             desc: "Global entry points accept live broadcast feeds across redundant RTMP and SRT gateways." },
              { phase: "Phase 02", title: "Transcode",          desc: "Hardware GPUs segment media streams into multi-resolution adaptive rendition sets." },
              { phase: "Phase 03", title: "Package",            desc: "Dynamic encryption and just-in-time formatting for HLS and DASH manifests." },
              { phase: "Phase 04", title: "Edge Distribution",  desc: "Ultra-low latency chunks delivered via distributed edge caches directly to the player." },
            ].map(({ phase, title, desc }) => (
              <div key={phase}>
                <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}>
                  {phase}
                </span>
                <h3 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          9. SECURITY & SCALABILITY — Image 3, editorial split
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
          backgroundColor: C.surface,
          borderTop: `1px solid ${C.outlineVariant}`,
        }}
      >
        <div style={container}>
          <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: SP.gutterLg, alignItems: "center" }}>

            {/* Editorial image — left */}
            <div className="lg:col-span-7">
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/10",
                  backgroundColor: C.surfaceLow,
                  border: `1px solid ${C.outlineVariant}`,
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLKTpnYrwpEe6wNL5se5fnzpRkTiVB04zr1hEE1Jgw2XeFcvosMuZKOwXBfmnZcLefXp6i3YWSeRue0LavR2UKy1KK2tjThZJ4NZgo5wSV9nEbzwHRLmssuD73ftsM3OURbRzw9l6QLGxK6DPWUxPQKCaEUvcZ4Qig3wrriKvyC7y005rkhQiND2I7WCreQsrlVqzzW00rVrbsegabq5pN9rnioOM5cB42ZUhGPk_Fc7f8LAmhqCo-bg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>

            {/* Text — right */}
            <div className="lg:col-span-5">
              <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                Security &amp; Scalability
              </span>
              <h2
                style={{ ...T.headlineLgMob, color: C.onSurface, marginBottom: "1.5rem" }}
                className="md:text-[2.5rem] md:leading-[3rem]"
              >
                Hardened Stream Protection
              </h2>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, marginBottom: "1.5rem", lineHeight: "1.75rem" }}>
                Enterprise content protection without player playback latency. We integrate multi-DRM licensing, geo-fenced tokens, and cryptographic stream watermarking natively into each edge node.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  {
                    icon: "verified_user",
                    title: "Multi-DRM Orchestration",
                    desc: "Automated key rotation across Apple FairPlay, Google Widevine, and Microsoft PlayReady.",
                  },
                  {
                    icon: "token",
                    title: "Tokenized URL Security",
                    desc: "Time-expiring cryptographic signatures blocking unauthorized restreaming and hotlinking.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} style={{ display: "flex", gap: "1rem" }}>
                    <span className="material-symbols-outlined" style={{ color: C.primary, fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                    <div>
                      <h4 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: "0.25rem" }}>{title}</h4>
                      <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          10. FAQ — No media, accordion
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: SP.xl, paddingBottom: SP.xl, backgroundColor: C.surfaceLowest }}>
        <div
          style={{
            maxWidth: "56rem",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: SP.marginSm,
            paddingRight: SP.marginSm,
          }}
        >
          {/* Centred header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
              Frequently Asked Questions
            </span>
            <h2
              style={{ ...T.headlineLgMob, color: C.onSurface }}
              className="md:text-[2.5rem] md:leading-[3rem]"
            >
              Streaming Architecture Insights
            </h2>
          </div>

          <div style={{ borderTop: `1px solid ${C.outlineVariant}` }}>
            {[
              {
                q: "What latency thresholds can be achieved in production?",
                a: "Using our WebRTC infrastructure, glass-to-glass latency is consistently maintained between 300ms to 800ms globally. When deploying Low-Latency HLS (LL-HLS) for massive concurrent broadcasts, latency operates reliably within the 2 to 3-second threshold.",
                open: true,
              },
              {
                q: "How does the system orchestrate multi-CDN routing?",
                a: "Our autonomous routing mesh evaluates real-time player telemetry, regional latency spikes, and peering costs. If an upstream CDN degrades or drops frames, traffic redirects dynamically within 15 milliseconds without user re-buffering.",
              },
              {
                q: "Are player SDKs customizable to bespoke interfaces?",
                a: "Yes. We provide completely headless player libraries alongside pre-built components for iOS, Android, and modern Web frameworks. Developers retain complete freedom over UI layout, telemetry events, and custom gesture overlays.",
              },
              {
                q: "How does DRM integration function during live ingestion?",
                a: "Content is encrypted at the ingest boundary using Common Encryption (CENC). Multi-DRM license servers automatically issue targeted keys according to the viewer's device architecture (FairPlay for Apple, Widevine for Chromium/Android, PlayReady for Windows).",
              },
            ].map(({ q, a, open }) => (
              <details
                key={q}
                open={open}
                className="group"
                style={{ borderBottom: `1px solid ${C.outlineVariant}`, paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
              >
                <summary
                  style={{
                    ...T.headlineSm,
                    color: C.onSurface,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    listStyle: "none",
                  }}
                  className="focus:outline-none"
                >
                  <span>{q}</span>
                  <span
                    className="material-symbols-outlined group-open:rotate-180 transition-transform"
                    style={{ color: C.onSurfaceVariant, marginLeft: "1rem", flexShrink: 0 }}
                  >
                    expand_more
                  </span>
                </summary>
                <div style={{ ...T.bodyMd, color: C.onSurfaceVariant, paddingTop: "1rem", lineHeight: "1.75rem" }}>
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          11. FINAL CTA — No media, centred
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="cta"
        style={{
          paddingTop: SP.xl,
          paddingBottom: SP.xl,
          backgroundColor: C.surface,
          borderTop: `1px solid ${C.outlineVariant}`,
          overflow: "hidden",
          position: "relative",
        }}
        className="md:py-32"
      >
        <div style={{ ...container, textAlign: "center", position: "relative", zIndex: 10 }}>
          <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
            <span style={{ ...T.labelSm, color: C.primary, textTransform: "uppercase", display: "block", marginBottom: "0.75rem" }}>
              Enterprise Deployment
            </span>
            <h2
              style={{ ...T.displayLgMobile, color: C.onSurface, marginBottom: "1.5rem" }}
              className="md:text-[3.5rem] md:leading-[4rem] md:tracking-[-0.03em]"
            >
              Ready to Deliver Media Without Delay?
            </h2>
            <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, marginBottom: "2.5rem" }}>
              Partner with our video engineering team to architect, migrate, and scale your global streaming infrastructure today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center" style={{ gap: "1rem" }}>
              <Link
                href="/contact"
                className="w-full sm:w-auto transition-colors duration-150 inline-flex items-center justify-center"
                style={{
                  ...T.labelMd,
                  backgroundColor: C.primary,
                  color: C.onPrimary,
                  padding: "0.875rem 2rem",
                  borderRadius: "0.5rem",
                }}
              >
                Schedule Architecture Briefing
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto transition-colors duration-150 inline-flex items-center justify-center"
                style={{
                  ...T.labelMd,
                  backgroundColor: C.surfaceLowest,
                  color: C.onSurface,
                  border: `1px solid ${C.outlineVariant}`,
                  padding: "0.875rem 2rem",
                  borderRadius: "0.5rem",
                }}
              >
                Explore SDK Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

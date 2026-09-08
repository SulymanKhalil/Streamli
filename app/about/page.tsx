import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PinnedStory, HorizontalRail } from "@/components/motion-scenes";
import { teamMembers } from "@/lib/site";

const technologySteps = [
  { index: "01", title: "Architecture over agglomeration.", text: "The best streaming stack is a cohesive, measurable system — not an accidental cluster of mismatched vendors.", label: "ARCHITECTURE" },
  { index: "02", title: "Built on resilient open standards.", text: "We prioritize HLS, CMAF, WebRTC, and open container standards so our partners retain complete independence and agility.", label: "STANDARDS" },
  { index: "03", title: "Push computation to the edge.", text: "Dynamic manifest generation, token verification, and ad-insertion belong at the nearest CDN edge node.", label: "EDGE CLOUD" },
  { index: "04", title: "Continuous telemetry & observability.", text: "Real-time QoS/QoE monitoring ensures every playback anomaly is identified and resolved before viewers feel friction.", label: "TELEMETRY" },
];

const processSteps = [
  { index: "01", title: "Surface the core streaming requirements.", text: "We audit peak concurrency projections, geographical footprints, latency tolerance, and DRM obligations.", label: "DISCOVER" },
  { index: "02", title: "Architect the pipeline collaboratively.", text: "We model the cost curves, multi-CDN topologies, and transcode workflows with full transparency.", label: "STRATEGY" },
  { index: "03", title: "Build, bench-test & stress-simulate.", text: "Engineering and interface design iterate as one, subjecting pipelines to automated load simulations.", label: "BUILD" },
  { index: "04", title: "Launch with live operational support.", text: "Production rollout backed by live telemetry dashboards and proactive edge tuning.", label: "OPERATE" },
];

export default function About() {
  return (
    <main>
      <PageHero
        kicker="About Stream / Our Point of View"
        title={
          <>
            Engineered for the media that <span className="serif">moves millions.</span>
          </>
        }
        description="Stream is a specialized streaming and media technology partner for organisations that demand bulletproof media distribution, low latency, and superior playback craft."
        mark="✦"
      />

      {/* Narrative Intro */}
      <section className="shell section">
        <div className="minimal-grid-2col">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> OUR CORE PURPOSE
            </span>
            <h2 className="h2" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", margin: "1rem 0" }}>
              We build the invisible foundations of modern digital culture.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8", margin: "0 0 1.5rem" }}>
              When a million viewers simultaneously tune into a championship final or a live keynote, there is zero tolerance for buffering wheels, audio drift, or dropped frames. Technology should never get between human emotion and the story being told.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8", margin: 0 }}>
              We bring together deep video codec engineering, distributed edge routing, and meticulous UI craftsmanship into a single cohesive practice.
            </p>
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="shell section" id="philosophy" style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ marginBottom: "3rem" }}>
          <p className="eyebrow"><span className="eyebrow-dot" /> Our Vision &amp; Philosophy</p>
          <h2 className="h2" style={{ fontSize: "clamp(2rem, 3.2vw, 2.8rem)", margin: ".6rem 0" }}>
            Built with intention. Tested under pressure.
          </h2>
        </div>

        <div className="detail-features-grid">
          <div className="detail-feature-card">
            <span className="mono" style={{ fontSize: "10px", color: "var(--sky-deep)", letterSpacing: ".1em", display: "block", marginBottom: "8px" }}>
              01 // VISION
            </span>
            <h4>Enduring Digital Media</h4>
            <p>
              We build on open standards (CMAF, WebRTC, LL-HLS) that allow streaming platforms to evolve cleanly over decades with zero vendor lock-in.
            </p>
          </div>

          <div className="detail-feature-card">
            <span className="mono" style={{ fontSize: "10px", color: "var(--sky-deep)", letterSpacing: ".1em", display: "block", marginBottom: "8px" }}>
              02 // PHILOSOPHY
            </span>
            <h4>Sub-Second Latency Synchronization</h4>
            <p>
              When live audience interaction, betting, and chat sync within 600ms, digital broadcasts feel as immediate as physical reality.
            </p>
          </div>

          <div className="detail-feature-card">
            <span className="mono" style={{ fontSize: "10px", color: "var(--sky-deep)", letterSpacing: ".1em", display: "block", marginBottom: "8px" }}>
              03 // VALUES
            </span>
            <h4>Radical Craft &amp; Transparency</h4>
            <p>
              We model egress costs openly, measure real-world 99th percentile playback metrics, and hold ourselves to 99.999% availability standards.
            </p>
          </div>

          <div className="detail-feature-card">
            <span className="mono" style={{ fontSize: "10px", color: "var(--sky-deep)", letterSpacing: ".1em", display: "block", marginBottom: "8px" }}>
              04 // INNOVATION
            </span>
            <h4>Edge-Native Computation</h4>
            <p>
              From dynamic per-title encoding to WebAssembly player runtimes and real-time metadata tagging, we push computation to the edge.
            </p>
          </div>
        </div>
      </section>

      <PinnedStory
        id="technology"
        kicker="Streaming Philosophy"
        title={<>A coherent media ecosystem, not an <span className="serif">unstable stack.</span></>}
        steps={technologySteps}
        tone="ink"
      />

      <PinnedStory
        id="process"
        kicker="Working Rhythm"
        title={<>How we engineer <span className="serif">with precision.</span></>}
        steps={processSteps}
      />

      {/* Editorial Asymmetric Team Section */}
      <section className="editorial-team-section" id="team">
        <div className="shell">
          <div className="editorial-team-header">
            <div className="editorial-team-intro">
              <p className="eyebrow"><span className="eyebrow-dot" /> THE COLLECTIVE // LEADERSHIP</p>
              <h2 className="editorial-team-title">Senior specialists in video, cloud &amp; UI.</h2>
            </div>
            <span className="editorial-team-counter">[04 SPECIALISTS]</span>
          </div>

          <div className="editorial-team-grid">
            {/* Column 1: Member 01 & Member 03 */}
            <div className="editorial-team-col">
              {/* Member 01: Qadeer Amin */}
              <article className="team-editorial-card">
                <div className="team-image-frame">
                  <span className="team-card-idx-badge">01</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="team-meta-stack">
                  <h3 className="team-member-name">{teamMembers[0].name}</h3>
                  <p className="team-member-role">{teamMembers[0].role}</p>
                </div>
              </article>

              {/* Member 03: Sulyman Khalil */}
              <article className="team-editorial-card">
                <div className="team-image-frame">
                  <span className="team-card-idx-badge">03</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={teamMembers[2].image}
                    alt={teamMembers[2].name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="team-meta-stack">
                  <h3 className="team-member-name">{teamMembers[2].name}</h3>
                  <p className="team-member-role">{teamMembers[2].role}</p>
                </div>
              </article>
            </div>

            {/* Column 2: Member 02 & Member 04 (Staggered Rhythm) */}
            <div className="editorial-team-col editorial-team-col--staggered">
              {/* Member 02: Anas Ali */}
              <article className="team-editorial-card">
                <div className="team-image-frame">
                  <span className="team-card-idx-badge">02</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={teamMembers[1].image}
                    alt={teamMembers[1].name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="team-meta-stack">
                  <h3 className="team-member-name">{teamMembers[1].name}</h3>
                  <p className="team-member-role">{teamMembers[1].role}</p>
                </div>
              </article>

              {/* Member 04: Shumail */}
              <article className="team-editorial-card">
                <div className="team-image-frame">
                  <span className="team-card-idx-badge">04</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={teamMembers[3].image}
                    alt={teamMembers[3].name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="team-meta-stack">
                  <h3 className="team-member-name">{teamMembers[3].name}</h3>
                  <p className="team-member-role">{teamMembers[3].role}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



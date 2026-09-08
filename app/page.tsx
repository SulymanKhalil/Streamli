import Link from "next/link";
import { servicesData, teamMembers } from "@/lib/site";
import { HeroScene, HorizontalRail, ParallaxSection, PinnedStory, ScaleCta, TestimonialStack } from "@/components/motion-scenes";

const processSteps = [
  { index: "01", title: "Map the streaming topology.", text: "We analyze viewer distribution, protocol requirements, and codec strategies before laying architectural foundations.", label: "DISCOVERY" },
  { index: "02", title: "Architect resilient pipelines.", text: "We design multi-region edge ingestion, adaptive transcode clusters, and zero-failover CDN routing matrices.", label: "ARCHITECTURE" },
  { index: "03", title: "Craft high-fidelity interfaces.", text: "From web players to custom Smart TV apps, we create intuitive media experiences that captivate audiences.", label: "INTERFACE" },
  { index: "04", title: "Stream, monitor & scale.", text: "Production deployment with real-time QoE telemetry, sub-second latency tuning, and automated autoscaling.", label: "SCALE" },
];

export default function Home() {
  return (
    <main>
      <HeroScene />

      <ParallaxSection className="manifesto parallax-field">
        <div className="shell">
          <p className="eyebrow" style={{ color: "#0284c7" }}>
            <span className="eyebrow-dot" /> A specialized streaming &amp; technology partner
          </p>
          <h2 className="h2">
            Mission-critical video requires more than generic cloud tools. It needs a <span className="serif">dedicated streaming architecture.</span>
          </h2>
          <div className="manifesto-grid">
            <p>
              We engineer at the intersection of media pipelines, edge infrastructure, and bespoke digital applications — joining the dots between ultra-low latency playback, studio-grade DRM protection, and scalable revenue models.
            </p>
            <p>
              Our engineering approach is direct, transparent, and built to handle millions of simultaneous concurrent viewers without breaking stride.
            </p>
          </div>
          <div className="signal" aria-hidden="true">
            {Array.from({ length: 36 }, (_, i) => (
              <span key={i} />
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Services Carousel-on-Scroll */}
      <section className="service-showcase" id="capabilities">
        <div className="shell service-showcase__intro">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Core Products // 03 Domains</p>
            <h2 className="case-title">From video ingest to global living room screens.</h2>
          </div>
          <div>
            <p className="lede">
              Explore our core capabilities across video streaming, live latency optimization, OTT platforms, and cloud infrastructure.
            </p>
            <Link href="/services" className="btn btn--sky" style={{ marginTop: "1.8rem" }}>
              Explore all capabilities <span className="arrow">↗</span>
            </Link>
          </div>
        </div>

        <HorizontalRail className="service-horizontal">
          {servicesData.map((s) => (
            <article className="service" key={s.slug}>
              <span className="service-index">{s.index} // {s.shortTitle.toUpperCase()}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
              </div>
              <Link className="eyebrow" style={{ color: "#0284c7" }} href={`/services/${s.slug}`}>
                Explore {s.shortTitle} ↗
              </Link>
            </article>
          ))}
        </HorizontalRail>
      </section>

      <section className="section rule">
        <div className="shell">
          <p className="eyebrow"><span className="eyebrow-dot" /> Purpose-Built Media Infrastructure</p>
          <div className="case-grid">
            <div>
              <h2 className="case-title">Move with broadcast reliability.</h2>
              <p className="lede" style={{ marginTop: "1.5rem" }}>
                We empower OTT networks, live broadcasters, and modern digital product companies with the engineering capacity and confidence to deliver buffer-free streaming at scale.
              </p>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/services/video-streaming" className="btn btn--ghost">
                  View Technical Architecture <span className="arrow">↗</span>
                </Link>
              </div>
            </div>
            <div className="case-art parallax-art" />
          </div>
        </div>
      </section>

      <PinnedStory
        kicker="The Engineering Lifecycle"
        title={<>Disciplined execution. <span className="serif">Flawless playback.</span></>}
        steps={processSteps}
      />

      {/* Editorial Asymmetric Team Section */}
      <section className="editorial-team-section" id="team">
        <div className="shell">
          <div className="editorial-team-header">
            <div className="editorial-team-intro">
              <p className="eyebrow"><span className="eyebrow-dot" /> THE COLLECTIVE // LEADERSHIP</p>
              <h2 className="editorial-team-title">The minds behind the streaming architecture.</h2>
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

      <TestimonialStack />
      <ScaleCta />
    </main>
  );
}



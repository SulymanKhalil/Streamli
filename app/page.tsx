"use client";

import Link from "next/link";
import { servicesData, teamMembers } from "@/lib/site";
import { HeroScene, HorizontalRail, ParallaxSection, PinnedStory, ScaleCta, TestimonialStack } from "@/components/motion-scenes";

const processSteps = [
  { index: "01", title: "Map system architecture & topology.", text: "We analyze product requirements, data flows, and scalability constraints before laying architectural foundations.", label: "DISCOVERY" },
  { index: "02", title: "Architect resilient pipelines.", text: "We design multi-region edge ingestion, adaptive transcode clusters, and zero-failover CDN routing matrices.", label: "ARCHITECTURE" },
  { index: "03", title: "Craft high-fidelity interfaces.", text: "From web players to custom Smart TV apps, we create intuitive media experiences that captivate audiences.", label: "INTERFACE" },
  { index: "04", title: "Stream, monitor & scale.", text: "Production deployment with real-time telemetry, continuous monitoring, and automated cloud autoscaling.", label: "SCALE" },
];

export default function Home() {
  return (
    <main>
      <HeroScene />

      <ParallaxSection className="manifesto parallax-field">
        <div className="shell">
          <p className="eyebrow" style={{ color: "#0066FF" }}>
            A full-service software &amp; engineering partner
          </p>
          <h2 className="h2">
            Modern digital products require more than generic templates. They demand <span className="serif">dedicated software architecture.</span>
          </h2>
          <div className="manifesto-grid">
            <p>
              We engineer at the intersection of enterprise software, intelligent AI systems, and high-concurrency video pipelines — building scalable web platforms, custom machine learning models, and resilient digital products.
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
            <p className="eyebrow">Domains</p>
            <h2 className="case-title">From video ingest to global living room screens.</h2>
          </div>
          <div>
            <p className="lede">
              Explore our core capabilities across software development, AI engineering, and video streaming systems.
            </p>
            <a
              href="#domains-cards"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("domains-cards");
                if (el) {
                  const headerOffset = 90;
                  const elementPosition = el.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
              className="btn btn--sky"
              style={{ marginTop: "1.8rem" }}
            >
              Explore Our Capabilities
            </a>
          </div>
        </div>

        <HorizontalRail className="service-horizontal" id="domains-cards">
          {servicesData.map((s) => (
            <article className="service" key={s.slug}>
              <span className="service-index">{s.shortTitle.toUpperCase()}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
              </div>
              <Link className="eyebrow" style={{ color: "#0066FF" }} href={`/services/${s.slug}`}>
                Explore {s.shortTitle} ↗
              </Link>
            </article>
          ))}
        </HorizontalRail>
      </section>

      <section className="section rule">
        <div className="shell">
          <p className="eyebrow">Enterprise-Grade Software &amp; Systems</p>
          <div className="case-grid">
            <div>
              <h2 className="case-title">Engineered for high scale &amp; performance.</h2>
              <p className="lede" style={{ marginTop: "1.5rem" }}>
                We empower enterprise organizations, tech startups, and digital product companies with the engineering capacity to deploy scalable software, intelligent AI models, and resilient media infrastructure.
              </p>
              <div style={{ marginTop: "2rem" }}>
                <a
                  href="#domains-cards"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("domains-cards");
                    if (el) {
                      const headerOffset = 90;
                      const elementPosition = el.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  }}
                  className="btn btn--ghost"
                >
                  View Our Capabilities
                </a>
              </div>
            </div>
            <div className="case-art parallax-art" />
          </div>
        </div>
      </section>

      <PinnedStory
        kicker="The Engineering Lifecycle"
        title={<>Disciplined execution. <span className="serif">High-performance software.</span></>}
        steps={processSteps}
      />

      <section className="editorial-team-section" id="team">
        <div className="shell">
          <div className="editorial-team-header">
            <div className="editorial-team-intro">
              <p className="eyebrow">Minds Behind</p>
              <h2 className="editorial-team-title">The minds behind the software architecture.</h2>
            </div>
          </div>

          <div className="editorial-team-grid">
            {/* Member 01: Anas Ali */}
            <article className="team-editorial-card">
              <div className="team-image-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={teamMembers[1].image}
                  alt={teamMembers[1].name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="team-floating-badge">
                <h3 className="team-member-name">{teamMembers[1].name}</h3>
                <div className="team-badge-divider" />
                <p className="team-member-role">{teamMembers[1].role}</p>
              </div>
            </article>

            {/* Member 02: Shumail */}
            <article className="team-editorial-card">
              <div className="team-image-frame">
                <img
                  src={teamMembers[3].image}
                  alt={teamMembers[3].name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="team-floating-badge">
                <h3 className="team-member-name">{teamMembers[3].name}</h3>
                <div className="team-badge-divider" />
                <p className="team-member-role">{teamMembers[3].role}</p>
              </div>
            </article>

            {/* Member 03: Qadeer Amin */}
            <article className="team-editorial-card">
              <div className="team-image-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="team-floating-badge">
                <h3 className="team-member-name">{teamMembers[0].name}</h3>
                <div className="team-badge-divider" />
                <p className="team-member-role">{teamMembers[0].role}</p>
              </div>
            </article>

            {/* Member 04: Sulyman Khalil */}
            <article className="team-editorial-card">
              <div className="team-image-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={teamMembers[2].image}
                  alt={teamMembers[2].name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="team-floating-badge">
                <h3 className="team-member-name">{teamMembers[2].name}</h3>
                <div className="team-badge-divider" />
                <p className="team-member-role">{teamMembers[2].role}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <TestimonialStack />
      <ScaleCta />
    </main>
  );
}



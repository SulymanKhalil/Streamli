"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { servicesData, ServiceDetail } from "@/lib/site";

// Custom SVG Visuals for each service category
function ServiceDiagram({ slug }: { slug: string }) {
  if (slug === "product-development") {
    return (
      <svg viewBox="0 0 340 200" width="100%" height="100%" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="pdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect x="20" y="30" width="85" height="140" rx="10" fill="rgba(11, 19, 41, 0.7)" stroke="#38bdf8" strokeWidth="1.5" />
        <rect x="125" y="20" width="100" height="160" rx="12" fill="rgba(11, 19, 41, 0.9)" stroke="#0284c7" strokeWidth="2" />
        <rect x="245" y="45" width="75" height="110" rx="8" fill="rgba(11, 19, 41, 0.7)" stroke="#38bdf8" strokeWidth="1.5" />
        {/* Mock UI player lines */}
        <circle cx="175" cy="80" r="18" fill="url(#pdGrad)" />
        <polygon points="171,73 182,80 171,87" fill="#ffffff" />
        <rect x="140" y="115" width="70" height="6" rx="3" fill="#38bdf8" />
        <rect x="140" y="130" width="45" height="5" rx="2" fill="rgba(255,255,255,0.4)" />
        <line x1="105" y1="100" x2="125" y2="100" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="225" y1="100" x2="245" y2="100" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    );
  }

  if (slug === "app-development") {
    return (
      <svg viewBox="0 0 340 200" width="100%" height="100%" style={{ overflow: "visible" }}>
        <rect x="40" y="25" width="120" height="150" rx="16" fill="rgba(11, 19, 41, 0.85)" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="100" cy="40" r="4" fill="#38bdf8" />
        <rect x="55" y="55" width="90" height="50" rx="6" fill="#0c2340" stroke="rgba(56,189,248,0.4)" />
        {/* Play icon in mobile screen */}
        <circle cx="100" cy="80" r="12" fill="#0284c7" />
        <polygon points="97,75 106,80 97,85" fill="#fff" />
        {/* Desktop Browser frame behind */}
        <rect x="180" y="40" width="130" height="110" rx="8" fill="rgba(15, 28, 63, 0.9)" stroke="rgba(255,255,255,0.3)" />
        <circle cx="195" cy="52" r="3" fill="#ef4444" />
        <circle cx="205" cy="52" r="3" fill="#eab308" />
        <circle cx="215" cy="52" r="3" fill="#22c55e" />
        <line x1="180" y1="62" x2="310" y2="62" stroke="rgba(255,255,255,0.15)" />
        {/* Waveform in browser */}
        <path d="M 195 110 Q 215 85 235 110 T 275 110 T 300 110" fill="none" stroke="#38bdf8" strokeWidth="2" />
      </svg>
    );
  }

  if (slug === "video-streaming") {
    return (
      <svg viewBox="0 0 340 200" width="100%" height="100%" style={{ overflow: "visible" }}>
        {/* Transcode Ladder */}
        <g transform="translate(20, 20)">
          <rect x="0" y="10" width="70" height="30" rx="6" fill="#0c2340" stroke="#38bdf8" />
          <text x="35" y="30" fill="#38bdf8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="monospace">4K HDR</text>
          
          <rect x="0" y="55" width="70" height="30" rx="6" fill="#0c2340" stroke="#38bdf8" />
          <text x="35" y="75" fill="#38bdf8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="monospace">1080p60</text>
          
          <rect x="0" y="100" width="70" height="30" rx="6" fill="#0c2340" stroke="rgba(56,189,248,0.5)" />
          <text x="35" y="120" fill="#bae6fd" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="monospace">720p ABR</text>

          {/* Connected distribution node */}
          <path d="M 70 25 L 150 70" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 70 70 L 150 70" stroke="#38bdf8" strokeWidth="2" />
          <path d="M 70 115 L 150 70" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Central CMAF Packager Hub */}
          <circle cx="150" cy="70" r="28" fill="#0284c7" />
          <text x="150" y="68" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="monospace">CMAF</text>
          <text x="150" y="80" fill="#bae6fd" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="monospace">DRM</text>

          {/* Multi-CDN lines out */}
          <line x1="178" y1="70" x2="250" y2="40" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="178" y1="70" x2="250" y2="70" stroke="#38bdf8" strokeWidth="2" />
          <line x1="178" y1="70" x2="250" y2="100" stroke="#38bdf8" strokeWidth="1.5" />

          <circle cx="260" cy="40" r="10" fill="#0c2340" stroke="#38bdf8" />
          <circle cx="260" cy="70" r="12" fill="#0c2340" stroke="#38bdf8" />
          <circle cx="260" cy="100" r="10" fill="#0c2340" stroke="#38bdf8" />
          <text x="260" y="74" fill="#38bdf8" fontSize="8" fontWeight="700" textAnchor="middle">CDN</text>
        </g>
      </svg>
    );
  }

  if (slug === "live-streaming") {
    return (
      <svg viewBox="0 0 340 200" width="100%" height="100%" style={{ overflow: "visible" }}>
        {/* Radar concentric circles */}
        <circle cx="170" cy="100" r="75" fill="none" stroke="rgba(56,189,248,0.15)" />
        <circle cx="170" cy="100" r="50" fill="none" stroke="rgba(56,189,248,0.3)" />
        <circle cx="170" cy="100" r="25" fill="none" stroke="rgba(56,189,248,0.6)" strokeDasharray="3 3" />
        {/* Central WebRTC Beacon */}
        <circle cx="170" cy="100" r="14" fill="#0284c7" />
        <circle cx="170" cy="100" r="5" fill="#ffffff" />
        {/* Latency Tag */}
        <rect x="110" y="30" width="120" height="26" rx="13" fill="rgba(11, 19, 41, 0.9)" stroke="#38bdf8" />
        <circle cx="125" cy="43" r="4" fill="#ef4444" />
        <text x="175" y="47" fill="#38bdf8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="monospace">&lt; 800ms WEBRTC</text>
        {/* Ingest arrows */}
        <line x1="50" y1="100" x2="140" y2="100" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="290" y1="100" x2="200" y2="100" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    );
  }

  if (slug === "ott-solutions") {
    return (
      <svg viewBox="0 0 340 200" width="100%" height="100%" style={{ overflow: "visible" }}>
        {/* Large Living Room Smart TV Screen */}
        <rect x="60" y="25" width="220" height="125" rx="8" fill="rgba(11, 19, 41, 0.9)" stroke="#38bdf8" strokeWidth="2" />
        <polygon points="160,150 180,150 185,170 155,170" fill="rgba(255,255,255,0.4)" />
        <rect x="140" y="170" width="60" height="4" rx="2" fill="#0284c7" />
        {/* TV Grid layout */}
        <rect x="75" y="40" width="80" height="65" rx="6" fill="#0c2340" stroke="rgba(56,189,248,0.5)" />
        <rect x="165" y="40" width="100" height="18" rx="4" fill="#0284c7" />
        <rect x="165" y="65" width="85" height="12" rx="3" fill="rgba(255,255,255,0.3)" />
        <rect x="165" y="83" width="60" height="10" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="75" y="115" width="190" height="22" rx="4" fill="rgba(56,189,248,0.15)" stroke="rgba(56,189,248,0.3)" />
      </svg>
    );
  }

  if (slug === "streaming-infrastructure") {
    return (
      <svg viewBox="0 0 340 200" width="100%" height="100%" style={{ overflow: "visible" }}>
        {/* Edge Cloud Mesh */}
        <circle cx="170" cy="100" r="60" fill="none" stroke="rgba(56,189,248,0.25)" strokeDasharray="4 4" />
        {/* Nodes */}
        <circle cx="90" cy="65" r="18" fill="#0c2340" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="90" y="69" fill="#38bdf8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="monospace">US-E</text>
        
        <circle cx="250" cy="65" r="18" fill="#0c2340" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="250" y="69" fill="#38bdf8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="monospace">EU-W</text>
        
        <circle cx="170" cy="155" r="18" fill="#0c2340" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="170" y="159" fill="#38bdf8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="monospace">AP-S</text>

        <circle cx="170" cy="100" r="24" fill="#0284c7" />
        <text x="170" y="104" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="monospace">K8S</text>

        <line x1="105" y1="75" x2="150" y2="90" stroke="#38bdf8" strokeWidth="2" />
        <line x1="235" y1="75" x2="190" y2="90" stroke="#38bdf8" strokeWidth="2" />
        <line x1="170" y1="137" x2="170" y2="124" stroke="#38bdf8" strokeWidth="2" />
      </svg>
    );
  }

  // custom-solutions
  return (
    <svg viewBox="0 0 340 200" width="100%" height="100%" style={{ overflow: "visible" }}>
      {/* AI & Custom Labs Matrix */}
      <rect x="30" y="35" width="280" height="130" rx="12" fill="rgba(11, 19, 41, 0.85)" stroke="#38bdf8" strokeWidth="1.5" />
      <path d="M 50 100 L 90 60 L 130 110 L 170 80 L 210 120 L 250 70 L 290 100" fill="none" stroke="#38bdf8" strokeWidth="2" />
      <circle cx="90" cy="60" r="4" fill="#ffffff" />
      <circle cx="170" cy="80" r="4" fill="#ffffff" />
      <circle cx="250" cy="70" r="4" fill="#ffffff" />
      <rect x="100" y="130" width="140" height="22" rx="11" fill="#0284c7" />
      <text x="170" y="145" fill="#ffffff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="monospace">WASM // AI VIDEO</text>
    </svg>
  );
}

export default function Services() {
  const [activeHash, setActiveHash] = useState<string>("product-development");

  useEffect(() => {
    // Check initial hash on load
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && servicesData.some((s) => s.slug === hash)) {
        setActiveHash(hash);
        const el = document.getElementById(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }

    // Scroll-spy observer to track which service section is currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveHash(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    servicesData.forEach((s) => {
      const el = document.getElementById(s.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToService = (slug: string) => {
    setActiveHash(slug);
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `/services#${slug}`);
    }
  };

  return (
    <main>
      <PageHero
        kicker="Capabilities / Streaming & Media Engineering"
        title={
          <>
            Engineering the future of <span className="serif">video &amp; media.</span>
          </>
        }
        description="Stream combines deep video encoding pipelines, ultra-low latency streaming infrastructure, and modern product engineering into a unified practice."
        mark="✦"
      />

      {/* Sticky Floating Anchor Quick-Jumper */}
      <nav className="services-tabs-container" aria-label="Services quick navigation">
        <div className="shell">
          <div className="services-tabs-rail" role="tablist">
            {servicesData.map((s) => {
              const isActive = activeHash === s.slug;
              return (
                <button
                  key={s.slug}
                  role="tab"
                  aria-selected={isActive}
                  className={`service-tab-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => scrollToService(s.slug)}
                >
                  <span className="tab-idx">{s.index}</span>
                  <span>{s.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Dedicated Anchor Sections for All 7 Services */}
      <div className="shell services-sections-stack">
        {servicesData.map((service, index) => (
          <section
            key={service.slug}
            id={service.slug}
            className={`service-anchor-card ${activeHash === service.slug ? "is-focused" : ""}`}
          >
            <div className="service-anchor-header">
              <div className="service-index-badge">
                <span className="eyebrow-dot" /> 0{index + 1} // {service.kicker.toUpperCase()}
              </div>
              <span className="service-spec-badge">{service.visualBadge}</span>
            </div>

            <div className="service-anchor-grid">
              {/* Left Column: Heading, Description & Specifications */}
              <div className="service-anchor-main">
                <h2>{service.title}</h2>
                <p className="service-tagline-text">{service.tagline}</p>
                <p className="service-detail-desc">{service.description}</p>

                {/* Specs Matrix */}
                <div className="service-specs-grid">
                  {service.specs.map((spec) => (
                    <div key={spec.label} className="spec-box">
                      <small>{spec.label}</small>
                      <strong>{spec.value}</strong>
                    </div>
                  ))}
                </div>

                {/* Engineering Features */}
                <div className="service-features-list">
                  {service.features.map((feat) => (
                    <div key={feat.title} className="feature-item">
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="service-action-row" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link className="btn btn--sky" href={`/services/${service.slug}`}>
                    Dedicated Service Page <span className="arrow">↗</span>
                  </Link>
                  <Link className="btn btn--ghost" href="/contact">
                    {service.ctaText} <span className="arrow">→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Architectural Visual Diagram, Benefits & Real Use Cases */}
              <div className="service-anchor-aside">
                <div className="service-interactive-card">
                  <span className="service-badge-pill">ARCHITECTURE // TOPOLOGY</span>
                  
                  {/* Service Specific Vector Diagram */}
                  <div className="service-diagram-wrap" aria-hidden="true">
                    <ServiceDiagram slug={service.slug} />
                  </div>

                  {/* Strategic Benefits */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <h5 className="service-aside-heading">Verified Strategic Benefits</h5>
                    <ul className="service-benefits-list">
                      {service.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Real World Deployments */}
                  <div className="usecase-box">
                    <h5 className="service-aside-heading">Real-World Deployments</h5>
                    {service.useCases.map((uc) => (
                      <div key={uc.name} className="usecase-item">
                        <strong>{uc.name}</strong>
                        <span>{uc.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Complete Capability Directory / Footer Anchor Jump */}
      <section className="shell section rule" style={{ paddingTop: "4rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p className="eyebrow">Comprehensive Practice Directory</p>
          <h3 style={{ fontSize: "2.4rem", letterSpacing: "-.06em", margin: ".5rem 0 0" }}>
            Explore every dimension of our engineering
          </h3>
        </div>

        <div className="capability-list">
          {servicesData.map((s) => (
            <article
              className="capability"
              key={s.slug}
              onClick={() => scrollToService(s.slug)}
            >
              <span>{s.index}</span>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <span className="plus" style={{ fontSize: "1.1rem" }}>↗</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}



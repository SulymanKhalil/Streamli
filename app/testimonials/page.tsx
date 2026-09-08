import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const caseStudies = [
  {
    index: "01",
    client: "Global Esports Championship",
    domain: "Live Stadium Broadcast // WebRTC & LL-HLS",
    headline: "Delivered 1.2M concurrent 1080p60 feeds with sub-650ms latency and zero broadcast dropouts.",
    quote: "Stream transformed our live broadcast reliability. During our world finals with over a million concurrent fans, playback stayed rock solid while our egress costs dropped significantly.",
    author: "VP of Broadcast Engineering",
    company: "Tier-1 Esports Tournament Network",
    metrics: [
      { label: "Peak Concurrency", value: "1.2M Viewers" },
      { label: "Glass-to-Glass Latency", value: "< 650ms" },
      { label: "Rebuffer Rate", value: "0.002%" },
    ],
  },
  {
    index: "02",
    client: "Next-Gen 4K Cinema OTT Platform",
    domain: "VOD Infrastructure // Per-Title CMAF & Multi-DRM",
    headline: "Architected cloud encoding cluster transcoding 10,000+ hours of 4K HDR Dolby Atmos library.",
    quote: "The per-title CMAF optimization pipeline engineered by Stream reduced our monthly CDN egress bill by 42% while actually improving our average VMAF quality score to 96.",
    author: "Chief Technology Officer",
    company: "Premium Subscription OTT Network",
    metrics: [
      { label: "Egress Cost Reduction", value: "-42%" },
      { label: "VMAF Quality Score", value: "96.4 / 100" },
      { label: "Catalog Scale", value: "10k+ Hours 4K" },
    ],
  },
  {
    index: "03",
    client: "Interactive Live Commerce & Auctions",
    domain: "Real-Time Interactivity // Sub-Second WebRTC",
    headline: "Synchronized split-second live video with high-frequency bidding across 50,000 concurrent bidders.",
    quote: "In live auctions, half a second of lag destroys trust. Stream engineered a WebRTC pipeline that brought glass-to-glass latency down to 480ms with frame-accurate bid overlays.",
    author: "Head of Digital Products",
    company: "Global Luxury Auction Platform",
    metrics: [
      { label: "Bidder Synchronization", value: "< 480ms" },
      { label: "Uptime SLA", value: "99.999%" },
      { label: "Platform Retention", value: "+34%" },
    ],
  },
];

export default function Testimonials() {
  return (
    <main>
      <PageHero
        kicker="Testimonials / Proven Media Scale"
        title={
          <>
            Media leaders trust Stream with their <span className="serif">live audiences.</span>
          </>
        }
        description="Explore documented performance benchmarks, bandwidth optimizations, and playback metrics from high-throughput streaming platforms running on Stream architecture."
        mark="✦"
      />

      {/* Featured Headline Quote */}
      <section className="testimonial">
        <div className="shell">
          <p className="quote">
            A bulletproof streaming partnership leaves your platform faster, your infrastructure costs lower, and your engineering team confident during peak broadcasts.
          </p>
          <div className="testimonial-meta">
            <span style={{ color: "#38bdf8", fontWeight: 600 }}>CORE BENCHMARK</span>
            <span>Broadcast Engineering Leadership / Global OTT Platform</span>
            <span>99.999% High Availability</span>
          </div>
        </div>
      </section>

      {/* Verified Client Case Studies Grid */}
      <section className="shell section">
        <div style={{ marginBottom: "3rem" }}>
          <p className="eyebrow"><span className="eyebrow-dot" /> Verified Deployments</p>
          <h2 className="case-title">Measurable impact at petabyte scale</h2>
        </div>

        <div className="testimonials-case-grid">
          {caseStudies.map((cs) => (
            <article className="testimonial-case-card" key={cs.index}>
              <div className="test-case-header">
                <span className="test-case-index">{cs.index} // {cs.domain}</span>
                <span className="eyebrow-dot" />
              </div>

              <h3>{cs.headline}</h3>

              <div className="test-metrics-row">
                {cs.metrics.map((m) => (
                  <div className="test-metric-box" key={m.label}>
                    <small>{m.label}</small>
                    <strong>{m.value}</strong>
                  </div>
                ))}
              </div>

              <blockquote className="test-quote-body">
                &ldquo;{cs.quote}&rdquo;
              </blockquote>

              <div className="test-author-info">
                <strong>{cs.author}</strong>
                <span>{cs.company}</span>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <Link href="/contact" className="btn btn--sky">
            Discuss Your Platform Requirements <span className="arrow">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}



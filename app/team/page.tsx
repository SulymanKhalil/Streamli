import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { HorizontalRail } from "@/components/motion-scenes";
import { teamMembers } from "@/lib/site";

export default function Team() {
  return (
    <main>
      <PageHero
        kicker="Team / The Engineering Collective"
        title={
          <>
            Specialized minds behind <span className="serif">the live stream.</span>
          </>
        }
        description="Stream brings together senior video streaming architects, low-level codec specialists, cloud engineers, and living-room UX designers dedicated to high-concurrency media performance."
        mark="✦"
      />

      {/* Team Introduction */}
      <section className="shell section">
        <div className="minimal-grid-2col">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> ENGINEERING LEADERSHIP
            </span>
            <h2 className="h2" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", margin: "1rem 0" }}>
              Deep domain mastery across codecs, protocols &amp; platforms.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8", margin: "0 0 1.5rem" }}>
              Our collective consists of seasoned engineers who have built global sports broadcast pipelines, authored low-latency media RFC contributions, and deployed native TV runtimes running on millions of living room screens.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/careers" className="btn btn--sky">
                Join The Collective <span className="arrow">↗</span>
              </Link>
              <Link href="/about" className="btn btn--ghost">
                Our Engineering Point of View <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Asymmetric Team Section */}
      <section className="editorial-team-section" id="collective">
        <div className="shell">
          <div className="editorial-team-header">
            <div className="editorial-team-intro">
              <p className="eyebrow"><span className="eyebrow-dot" /> THE COLLECTIVE // SPECIALISTS</p>
              <h2 className="editorial-team-title">Architects &amp; engineers behind the stream.</h2>
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

      {/* Single Opening Callout */}
      <section className="shell section rule">
        <div className="minimal-card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> WE ARE EXPANDING</span>
            <h3 style={{ fontSize: "1.8rem", margin: ".5rem 0 .5rem" }}>
              Looking for a Video Streaming Engineer / Developer
            </h3>
            <p style={{ color: "var(--muted)", margin: 0, fontSize: ".95rem" }}>
              1+ year experience in WebRTC, HLS/DASH pipelines, and player optimization.
            </p>
          </div>
          <Link href="/careers" className="btn btn--sky">
            View Job Opening <span className="arrow">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}



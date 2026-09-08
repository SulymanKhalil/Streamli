import { notFound } from "next/navigation";
import Link from "next/link";
import { solutionsData } from "@/lib/site";
import { PageHero } from "@/components/page-hero";

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutionsData.map((sol) => ({
    slug: sol.slug,
  }));
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const sol = solutionsData.find((s) => s.slug === slug);

  if (!sol) {
    notFound();
  }

  return (
    <main className="service-detail-shell">
      <PageHero
        kicker={"Solutions / " + sol.kicker}
        title={sol.title}
        description={sol.tagline}
        mark="✦"
      />

      <section className="shell section">
        <div className="minimal-grid-2col">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> ARCHITECTURAL BLUEPRINT
            </span>
            <h2 className="h2" style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", margin: "1rem 0" }}>
              {sol.tagline}
            </h2>
            <div style={{ font: "600 12px 'DM Mono', monospace", color: "var(--sky-deep)", marginTop: "1rem" }}>
              BENCHMARK: {sol.metrics}
            </div>
          </div>
          <div>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8", margin: "0 0 1.5rem" }}>
              {sol.description}
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn--sky">
                Deploy This Solution <span className="arrow">↗</span>
              </Link>
              <Link href="/solutions" className="btn btn--ghost">
                All Solutions <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "4rem" }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" /> CORE CAPABILITIES
          </div>
          <h3 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", letterSpacing: "-.04em", margin: ".8rem 0 2rem" }}>
            System Architecture & Features
          </h3>

          <div className="detail-features-grid">
            {sol.features.map((feat) => (
              <div key={feat.title} className="detail-feature-card">
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="minimal-card" style={{ marginTop: "3.5rem" }}>
          <span className="eyebrow">
            <span className="eyebrow-dot" /> KEY DELIVERABLES MATRIX
          </span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
            {sol.capabilities.map((cap, i) => (
              <div key={i} style={{ borderLeft: "2px solid var(--sky)", paddingLeft: "1rem" }}>
                <strong style={{ fontSize: ".95rem", color: "var(--ink)" }}>{cap}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
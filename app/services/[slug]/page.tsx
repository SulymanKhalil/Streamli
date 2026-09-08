import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/lib/site";
import { PageHero } from "@/components/page-hero";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData
    .filter((service) => service.slug !== "ai-solutions" && service.slug !== "video-streaming")
    .map((service) => ({
      slug: service.slug,
    }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="service-detail-shell">
      <PageHero
        kicker={"Services / " + service.kicker}
        title={service.title}
        description={service.tagline}
        mark="✦"
      />

      <section className="shell section">
        <div className="minimal-grid-2col">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> ARCHITECTURAL PURPOSE
            </span>
            <h2 className="h2" style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", margin: "1rem 0" }}>
              {service.summary}
            </h2>
          </div>
          <div>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8", margin: "0 0 1.5rem" }}>
              {service.description}
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn--sky">
                {service.ctaText || "Consult With Our Architects"} <span className="arrow">↗</span>
              </Link>
              <Link href="/services" className="btn btn--ghost">
                View All Services <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="detail-specs-grid">
          {service.specs.map((spec) => (
            <div key={spec.label} className="detail-spec-card">
              <small>{spec.label}</small>
              <strong>{spec.value}</strong>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "4rem" }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" /> CORE DELIVERABLES
          </div>
          <h3 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", letterSpacing: "-.04em", margin: ".8rem 0 2rem" }}>
            Capabilities & Technical Scope
          </h3>

          <div className="detail-features-grid">
            {service.features.map((feat) => (
              <div key={feat.title} className="detail-feature-card">
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="minimal-grid-2col" style={{ marginTop: "4rem" }}>
          <div className="minimal-card">
            <span className="eyebrow">
              <span className="eyebrow-dot" /> STRATEGIC ADVANTAGES
            </span>
            <h3 style={{ fontSize: "1.4rem", margin: "1rem 0 1.5rem" }}>Why Engineering Teams Choose This Practice</h3>
            <ul style={{ paddingLeft: "1.2rem", margin: 0, lineHeight: "1.8", color: "var(--muted)" }}>
              {service.benefits.map((benefit, i) => (
                <li key={i} style={{ marginBottom: ".6rem" }}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="minimal-card">
            <span className="eyebrow">
              <span className="eyebrow-dot" /> PROVEN PRODUCTION IMPACT
            </span>
            <h3 style={{ fontSize: "1.4rem", margin: "1rem 0 1.5rem" }}>Documented Deployments</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {service.useCases.map((uc) => (
                <div key={uc.name} style={{ borderBottom: "1px solid var(--line)", paddingBottom: "1rem" }}>
                  <strong style={{ display: "block", color: "var(--ink)", marginBottom: "4px" }}>{uc.name}</strong>
                  <p style={{ margin: 0, fontSize: ".9rem", color: "var(--muted)", lineHeight: "1.6" }}>{uc.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
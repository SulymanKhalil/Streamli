import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { solutionsData } from "@/lib/site";

export default function Solutions() {
  return (
    <main>
      <PageHero
        kicker="Solutions / Engineered for Streaming Scale"
        title={
          <>
            Architectures tailored for your <span className="serif">streaming ambition.</span>
          </>
        }
        description="Whether launching a disruptive OTT subscription platform or transmitting stadium-scale live esports, we tailor the stack to your operational demands."
        mark="✦"
      />

      <section className="shell section">
        <div className="solution-grid">
          {solutionsData.map((item, index) => (
            <article className="solution" id={item.slug} key={item.slug}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="mono" style={{ color: "#0284c7", fontWeight: 700, fontSize: "11px" }}>
                  0{index + 1} // {item.metrics}
                </span>
                <span className="eyebrow-dot" />
              </div>

              <h3 style={{ fontSize: "1.5rem", margin: ".8rem 0 .5rem" }}>{item.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: ".92rem", lineHeight: "1.65", margin: "0 0 1.2rem" }}>
                {item.description}
              </p>

              <div className="solution-feature-pills">
                {item.capabilities.map((cap) => (
                  <span key={cap}>{cap}</span>
                ))}
              </div>

              <div style={{ marginTop: "1.8rem" }}>
                <Link className="btn btn--sky" href={`/solutions/${item.slug}`}>
                  Explore Solution Blueprint <span className="arrow">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}



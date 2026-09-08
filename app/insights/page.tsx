import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const posts = [
  [
    "Streaming Engineering",
    "Designing for the 99th percentile, not the happy path",
    "How media engineering teams build fault-tolerant confidence into live streaming systems when concurrency surges.",
    "06 min",
    "designing-for-the-99th-percentile",
  ],
  [
    "Product Architecture",
    "The useful tension between a roadmap and a point of view",
    "A roadmap tells you where your streaming platform is heading. A product point of view explains why it deserves to exist.",
    "05 min",
    "product-thinking-that-holds",
  ],
  [
    "AI in Video",
    "AI video workflow engineering begins where the demo ends",
    "A practical blueprint for deploying real-time automated clipping, speech transcription, and content tagging into production.",
    "07 min",
    "ai-product-work-begins-where-demo-ends",
  ],
];

export default function Insights() {
  return (
    <main>
      <PageHero
        kicker="Insights / Notes from the Streaming Practice"
        title={
          <>
            Engineering dispatches &amp; <span className="serif">architectural memos.</span>
          </>
        }
        description="A technical collection of streaming protocols, cloud architecture, and media UX patterns from the Stream team."
        mark="I"
      />

      <section className="shell section">
        <div className="insight-list">
          {posts.map(([cat, title, desc, time, slug], i) => (
            <Link href={`/insights/${slug}`} className="insight" key={title}>
              <span className="mono" style={{ color: "#0284c7" }}>
                0{i + 1} // {cat}
              </span>
              <h2>{title}</h2>
              <p>{desc}</p>
              <span className="plus" style={{ color: "#0284c7" }}>↗</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}


import Link from "next/link";
import { notFound } from "next/navigation";

const content = {
  "designing-for-the-99th-percentile": { cat: "Engineering", title: "Designing for the 99th percentile, not the happy path", dek: "The most important product moments rarely happen in ideal conditions. Treating the edge as part of the experience makes the center better, too.", heading: "Designing for confidence" },
  "product-thinking-that-holds": { cat: "Product", title: "The useful tension between a roadmap and a point of view", dek: "A roadmap gives product work a sequence. A point of view gives it a reason to matter when the sequence gets complicated.", heading: "Keeping direction useful" },
  "ai-product-work-begins-where-demo-ends": { cat: "AI & technology", title: "AI product work begins where the demo ends", dek: "A practical lens for introducing intelligence into a product without making it feel like a feature looking for a problem.", heading: "Making intelligence useful" },
};

export function generateStaticParams() { return Object.keys(content).map(slug => ({ slug })); }

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = content[slug as keyof typeof content];
  if (!post) notFound();
  return <main className="article"><Link className="eyebrow" href="/insights">← Back to insights</Link><p className="eyebrow">{post.cat} / Field note</p><h1>{post.title}</h1><p className="dek">{post.dek}</p><div className="article-meta"><span>STREAMLI EDITORIAL</span><span>7 MIN READ</span><span>AUGUST 2026</span></div><div className="article-copy"><p>Making a digital product is an exercise in choosing where to place attention. It is tempting to spend it all on the route a person is expected to take — the clean demo, the friendly default, the path with no uncertainty in it.</p><p>But real products sit inside real life. Connections hesitate. People change direction. Information arrives late. The work is not to predict every possibility; it is to make a system that responds with enough grace when life refuses to follow the diagram.</p><h2>{post.heading}</h2><p>Confidence is not the absence of complexity. It is the experience of knowing that a product has considered what might happen next. This comes from a close relationship between design, engineering and product decisions — one where each can influence the other early enough to be useful.</p><p>At Streamli, we see the edge case as a useful lens. It asks the team to look beneath the surface of the journey and understand the conditions that make the journey meaningful in the first place.</p></div></main>;
}

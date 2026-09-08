import Link from "next/link";

export default function Privacy() {
  return (
    <main className="article">
      <Link className="eyebrow" href="/" style={{ color: "#0284c7", marginBottom: "1.5rem", display: "inline-flex" }}>
        ← Back to home
      </Link>
      <p className="eyebrow">
        <span className="eyebrow-dot" /> Legal / Privacy Policy
      </p>
      <h1>Privacy policy</h1>
      <div className="article-copy">
        <p>
          This is placeholder privacy information. When official legal documentation is approved, replace this content with Stream’s audited compliance terms.
        </p>
        <h2>Data Transmission &amp; Security</h2>
        <p>
          Inquiries submitted through the Stream platform are encrypted in transit and processed strictly to respond to your technical requirements. We do not sell or monetize partner data.
        </p>
      </div>
    </main>
  );
}


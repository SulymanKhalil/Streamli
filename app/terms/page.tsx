import Link from "next/link";

export default function Terms() {
  return (
    <main className="article">
      <Link className="eyebrow" href="/" style={{ color: "#0284c7", marginBottom: "1.5rem", display: "inline-flex" }}>
        ← Back to home
      </Link>
      <p className="eyebrow">
        <span className="eyebrow-dot" /> Legal / Terms of Use
      </p>
      <h1>Terms of service</h1>
      <div className="article-copy">
        <p>
          This is placeholder terms documentation. Replace with final legal terms defining engagement terms, intellectual property ownership, and service level agreements (SLAs).
        </p>
      </div>
    </main>
  );
}


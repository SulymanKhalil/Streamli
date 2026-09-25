"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell section" style={{ minHeight: "65vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <p className="eyebrow" style={{ color: "#0066FF" }}>
        <span className="eyebrow-dot" /> 404 // SIGNAL LOST
      </p>
      <h1 className="display" style={{ margin: "1rem 0" }}>
        Frame <span className="serif">Not Found.</span>
      </h1>
      <p className="lede" style={{ margin: "0 auto 2rem" }}>
        The stream or page you are trying to reach does not exist or has been relocated across our edge mesh.
      </p>
      <Link href="/" className="btn btn--sky">
        Return to Broadcast Core <span className="arrow">↗</span>
      </Link>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="shell section" style={{ minHeight: "65vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <p className="eyebrow" style={{ color: "#ef4444" }}>
        <span className="eyebrow-dot" style={{ background: "#ef4444", boxShadow: "0 0 8px #ef4444" }} /> 500 // RUNTIME EXCEPTION
      </p>
      <h1 className="display" style={{ margin: "1rem 0" }}>
        Stream <span className="serif">Interrupted.</span>
      </h1>
      <p className="lede" style={{ margin: "0 auto 2rem" }}>
        An unexpected edge exception occurred. Our automated telemetry systems have logged the trace.
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => reset()} className="btn btn--sky">
          Retry Pipeline <span className="arrow">↺</span>
        </button>
        <Link href="/" className="btn btn--ghost">
          Return Home <span className="arrow">↗</span>
        </Link>
      </div>
    </main>
  );
}

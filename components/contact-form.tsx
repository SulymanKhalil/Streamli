"use client";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setError(result.error || "Something went wrong. Please try again or email us directly.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again or email hello@streamli.example");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-card">
        <div className="form-success-box">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: ".4rem" }}>
            <span style={{ fontSize: "1.2rem" }}>✓</span>
            <span style={{ fontWeight: 700 }}>Signal Received</span>
          </div>
          <p style={{ margin: 0, color: "#0066FF", fontSize: ".92rem", lineHeight: "1.6" }}>
            Thank you — your streaming inquiry has reached our engineering team. We will review your requirements and respond within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form onSubmit={submit}>
        <div className="mui-field-group">
          <div className="mui-field">
            <label htmlFor="name">Full Name *</label>
            <input required id="name" name="name" type="text" placeholder="e.g. Elena Rostova" />
          </div>
          <div className="mui-field">
            <label htmlFor="email">Work Email *</label>
            <input required id="email" name="email" type="email" placeholder="elena@company.com" />
          </div>
        </div>

        <div className="mui-field-group">
          <div className="mui-field">
            <label htmlFor="company">Company / Organization</label>
            <input id="company" name="company" type="text" placeholder="e.g. Horizon Media" />
          </div>
          <div className="mui-field">
            <label htmlFor="projectType">Project Focus *</label>
            <select required id="projectType" name="projectType" defaultValue="">
              <option value="" disabled>Select primary discipline</option>
              <option>Live Streaming &amp; Low Latency</option>
              <option>OTT Platform (Smart TVs &amp; Apps)</option>
              <option>VOD, Encoding &amp; Multi-CDN</option>
              <option>Web &amp; Custom Player Engineering</option>
              <option>Streaming Cloud Infrastructure</option>
              <option>Full Product Development</option>
            </select>
          </div>
        </div>

        <div className="mui-field">
          <label htmlFor="budget">Estimated Scope / Budget Range</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="" disabled>Select anticipated budget tier</option>
            <option>Discovery &amp; Prototype ($15k – $35k)</option>
            <option>Core Platform Build ($35k – $90k)</option>
            <option>Enterprise Scale Architecture ($90k – $200k+)</option>
            <option>Ongoing Engineering Partnership</option>
          </select>
        </div>

        <div className="mui-field">
          <label htmlFor="message">Project Scope &amp; Ambition *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Describe your current media architecture, audience scale, target platforms, or upcoming milestones."
          />
        </div>

        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

        {status === "error" && (
          <div style={{ padding: ".8rem 1rem", background: "#fee2e2", border: "1px solid #ef4444", borderRadius: "8px", color: "#b91c1c", fontSize: ".85rem", marginBottom: "1rem" }}>
            {error}
          </div>
        )}

        <div className="form-submit-row">
          <span className="eyebrow" style={{ color: "#64748b" }}>
            Direct senior engineer review
          </span>
          <button disabled={status === "loading"} type="submit" className="btn btn--sky">
            {status === "loading" ? "Transmitting…" : "Transmit Signal"} <span className="arrow">↗</span>
          </button>
        </div>
      </form>
    </div>
  );
}


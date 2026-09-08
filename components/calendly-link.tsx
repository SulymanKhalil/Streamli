"use client";
import { site } from "@/lib/site";
export function CalendlyLink({ className = "btn" }: { className?: string }) {
  function openCalendly() { if (!site.calendlyUrl) { alert("Add NEXT_PUBLIC_CALENDLY_URL to your environment to enable scheduling."); return; } window.open(site.calendlyUrl, "_blank", "noopener,noreferrer"); }
  return <button type="button" onClick={openCalendly} className={className}>Schedule a call <span className="arrow">↗</span></button>;
}

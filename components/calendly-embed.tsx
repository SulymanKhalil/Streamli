import Script from "next/script";
import { site } from "@/lib/site";

/** Official Calendly inline embed. Set NEXT_PUBLIC_CALENDLY_URL to activate it. */
export function CalendlyEmbed() {
  if (!site.calendlyUrl) return <div className="calendly-unconfigured"><span className="eyebrow">Calendly</span><p>Scheduling will appear here once Streamli’s Calendly URL is configured.</p></div>;
  return <section className="calendly-embed" aria-label="Schedule a call with Streamli"><link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" /><div className="calendly-inline-widget" data-url={site.calendlyUrl} style={{ minWidth: "320px", height: "700px" }} /><Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" /></section>;
}

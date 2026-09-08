import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { CalendlyLink } from "@/components/calendly-link";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <main>
      <PageHero
        kicker="Contact / Direct Technical Channel"
        title={
          <>
            Let’s engineer your <span className="serif">next milestone.</span>
          </>
        }
        description="Tell us about your streaming roadmap, current concurrency demands, or media product vision. We’ll connect you directly with a senior streaming architect."
        mark="→"
      />

      <section className="shell contact-grid">
        <aside className="contact-side">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> Direct Inquiries
          </p>
          <p>
            Share enough detail for us to understand your throughput and platform requirements. We respond with a focused technical assessment — usually within 24 hours.
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>

          <div className="calendly-box">
            <span className="eyebrow eyebrow--dark">
              <span className="eyebrow-dot" /> Live Architectural Consultation
            </span>
            <h3>Schedule a discovery call.</h3>
            <p>
              Pick a 30-minute block with our engineering team to review codecs, cloud costs, and latency targets.
            </p>
            <CalendlyLink />
          </div>
        </aside>

        <div>
          <ContactForm />
        </div>
      </section>

      <section className="shell" style={{ paddingBottom: "8vw" }}>
        <CalendlyEmbed />
      </section>
    </main>
  );
}


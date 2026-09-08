"use client";

import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { jobsData } from "@/lib/site";

export default function Careers() {
  const job = jobsData[0]; // Exactly ONE featured role: Video Streaming Engineer / Developer (1+ year)

  return (
    <main>
      <PageHero
        kicker="Careers / Open Position"
        title={
          <>
            Shape the architecture of <span className="serif">live digital media.</span>
          </>
        }
        description="We are an engineering collective building ultra-low latency streaming infrastructure, custom player runtimes, and high-concurrency media pipelines."
        mark="✦"
      />

      {/* Engineering Philosophy */}
      <section className="shell section">
        <div className="minimal-grid-2col">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> HOW WE WORK
            </span>
            <h2 className="h2" style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", margin: "1rem 0" }}>
              Autonomy, deep craft, and real technical scale.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8", margin: "0 0 1.5rem" }}>
              At Stream, we engineer high-throughput, low-latency streaming infrastructure handling millions of concurrent viewers for live sports, OTT platforms, and interactive media.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8", margin: 0 }}>
              We believe in small, autonomous teams of high agency. You will work directly with modern media protocols (WebRTC, CMAF, LL-HLS), custom WebAssembly players, and edge transcoding clusters.
            </p>
          </div>
        </div>

        {/* The Single Active Opening */}
        <article className="career-single-job" id={job.slug}>
          <div className="career-job-header">
            <div>
              <span className="eyebrow" style={{ marginBottom: "6px" }}>
                <span className="eyebrow-dot" /> {job.department}
              </span>
              <h2 className="career-job-title">{job.title}</h2>
            </div>
            <div className="career-meta-strip">
              <span className="career-pill">{job.type}</span>
              <span className="career-pill">{job.location}</span>
              <span className="career-pill" style={{ background: "rgba(2, 132, 199, 0.12)", color: "var(--sky-deep)", fontWeight: 700 }}>
                Experience: {job.experience}
              </span>
            </div>
          </div>

          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--muted)", maxWidth: "54rem", marginBottom: "2.5rem" }}>
            {job.overview}
          </p>

          {/* Key Responsibilities */}
          <div className="career-section-block">
            <h3>Key Responsibilities</h3>
            <ul className="career-list">
              {job.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="career-section-block">
            <h3>Technical Requirements</h3>
            <ul className="career-list">
              {job.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Bonus Experience */}
          {job.bonus && job.bonus.length > 0 && (
            <div className="career-section-block">
              <h3>Valued Bonus Skills</h3>
              <ul className="career-list">
                {job.bonus.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="career-tech-strip">
            <span className="mono" style={{ fontSize: "11px", fontWeight: 700, color: "var(--sky-deep)", marginRight: "6px" }}>
              CORE STACK:
            </span>
            {job.techStack.map((tech) => (
              <span key={tech} className="career-pill" style={{ background: "var(--white)" }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Direct Action Box */}
          <div className="career-action-box">
            <div>
              <strong style={{ fontSize: "1.1rem", display: "block", marginBottom: "4px" }}>
                Ready to build with us?
              </strong>
              <span style={{ fontSize: ".9rem", color: "var(--muted)" }}>
                Send your resume or multimedia project portfolio directly to our engineering lead.
              </span>
            </div>
            <a
              href={`mailto:careers@stream.example?subject=Application:%20${encodeURIComponent(job.title)}`}
              className="btn btn--sky"
            >
              Apply via Email <span className="arrow">↗</span>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}

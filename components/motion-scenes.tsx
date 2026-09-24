"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

function useSceneProgress(ref: React.RefObject<HTMLElement | null>, variable: string, mode: "section" | "sticky" = "section") {
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const travel = mode === "sticky" ? Math.max(1, rect.height - window.innerHeight) : Math.max(1, rect.height);
      const progress = clamp(-rect.top / travel);
      element.style.setProperty(variable, progress.toFixed(4));
    };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [mode, ref, variable]);
}

export function HeroScene() {
  return (
    <section className="cinematic-video-hero" aria-label="Streamli Full-Screen Cinematic Hero">
      {/* 100% Full-Viewport Cinematic Video Background */}
      <div className="hero-video-bg-wrap" aria-hidden="true">
        <video
          src="/hero/14570640_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-bg"
        />
        {/* Subtle Cinematic Vignette / Readability Overlay */}
        <div className="hero-cinematic-overlay" />
      </div>
      {/* Main Core Typography Composition Over Video */}
      <div className="shell cinematic-hero-shell">
        <div className="cinematic-hero-content">
          <h1 className="cinematic-hero-headline">
            <span className="hero-word-lead">ENGINEER</span>
            <span className="hero-phrase-sub">
              Fidelity At <span className="serif">Planetary Scale.</span>
            </span>
          </h1>

          <p className="hero-cinematic-descriptor">
            Ultra-low latency streaming infrastructure &amp; custom media product engineering.
          </p>
        </div>
      </div>
    </section>
  );
}


export function ParallaxSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  useSceneProgress(ref, "--parallax-progress");
  return <section ref={ref} className={className}>{children}</section>;
}

export function HorizontalRail({ children, className = "" }: { children: ReactNode; className?: string }) {
  const outer = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = outer.current;
    const rail = track.current;
    if (!section || !rail) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      if (window.innerWidth <= 860 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        section.style.height = "auto";
        rail.style.transform = "none";
        return;
      }

      const containerWidth = rail.parentElement ? rail.parentElement.clientWidth : window.innerWidth;
      const maxDistance = Math.max(0, rail.scrollWidth - containerWidth);

      if (maxDistance <= 0) {
        section.style.height = "auto";
        rail.style.transform = "none";
        return;
      }

      // Exact scroll travel height matching the horizontal travel distance
      section.style.height = `${window.innerHeight + maxDistance}px`;

      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / travel);

      rail.style.transform = `translate3d(${(-maxDistance * progress).toFixed(2)}px, 0, 0)`;
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(requestUpdate);
      resizeObserver.observe(rail);
    }

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (resizeObserver) resizeObserver.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={outer} className={`horizontal-rail ${className}`}>
      <div className="horizontal-sticky">
        <div className="horizontal-track-container" style={{ width: "100%", overflow: "hidden" }}>
          <div ref={track} className="horizontal-track">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}


type StoryStep = { index: string; title: string; text: string; label?: string };

export function PinnedStory({ kicker, title, steps, tone = "mint", id }: { kicker: string; title: ReactNode; steps: StoryStep[]; tone?: "mint" | "ink"; id?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / travel);
      section.style.setProperty("--story-progress", progress.toFixed(4));
      setActive(Math.min(steps.length - 1, Math.floor(progress * steps.length)));
    };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [steps.length]);

  const step = steps[active];
  return (
    <section ref={ref} id={id} className={`pinned-story pinned-story--${tone}`} style={{ "--story-count": steps.length } as React.CSSProperties}>
      <div className="pinned-story__sticky">
        <div className="shell pinned-story__grid">
          <div className="pinned-story__intro">
            <p className="eyebrow">{kicker}</p>
            <h2 className="h2">{title}</h2>
            <div className="story-progress" aria-hidden="true">
              <i />
            </div>
          </div>
          <div className="story-visual" data-active={active} aria-hidden="true">
            <span className="story-orbit story-orbit--one" />
            <span className="story-orbit story-orbit--two" />
            <span className="story-core">{step.index}</span>
            <span className="story-dot story-dot--one" />
            <span className="story-dot story-dot--two" />
            <span className="story-dot story-dot--three" />
          </div>
          <div className="story-copy">
            <span className="eyebrow">{step.index}- {step.label || "IN MOTION"}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <div className="story-count">
              {steps.map((item, index) => (
                <span className={index === active ? "is-active" : ""} key={item.index}>
                  {item.index}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialStack() {
  const ref = useRef<HTMLElement>(null);
  useSceneProgress(ref, "--stack-progress", "sticky");
  const cards = [
    ["01", "Fidelity", "A streaming system that never blinks when audience concurrency surges."],
    ["02", "Precision", "Sub-second live latency matching real-world action with split-second interactive sync."],
    ["03", "Momentum", "Reliable engineering and clean pipelines that keep evolving long after day-one launch."],
  ];
  return (
    <section ref={ref} className="testimonial-stack">
      <div className="testimonial-stack__sticky">
        <div className="shell">
          <p className="eyebrow eyebrow--dark">Engineering Trust</p>
          <h2 className="quote">High-throughput streaming platforms built with craft, conviction and zero compromise.</h2>
          <div className="stack-cards">
            {cards.map(([number, title, text], index) => (
              <article className="stack-card" style={{ "--card-index": index } as React.CSSProperties} key={number}>
                <span style={{ font: '600 11px "DM Mono", monospace', color: "#0284c7" }}>{number}- PRINCIPLE</span>
                <h3>{title}.</h3>
                <p>{text}</p>
                <small>STREAMING PLATFORM PERSPECTIVES</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ScaleCta() {
  const ref = useRef<HTMLElement>(null);
  useSceneProgress(ref, "--cta-progress", "sticky");

  return (
    <section ref={ref} className="scale-cta">
      <div className="scale-cta__sticky">
        <div className="contact-band">
          <div className="shell">
            <p className="eyebrow" style={{ color: "inherit" }}>
              Start a Technical Dialogue
            </p>
            <h2 className="display">
              Ready to take your video &amp; digital platform <span className="serif">further?</span>
            </h2>
            <Link className="btn" href="/contact">
              Discuss Your Streaming Architecture <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}



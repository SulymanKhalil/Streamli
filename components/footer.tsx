"use client";

import Link from "next/link";
import { site, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="editorial-footer" aria-label="Website footer">
      <div className="shell">
        {/* Top: Brand Monogram & Thin Horizontal Divider */}
        <div className="footer-top-bar">
          <Link className="brand" href="/" aria-label="Streamli home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/logo.png"
              alt="Streamli"
              style={{ height: "30px", width: "auto", display: "block", objectFit: "contain" }}
            />
          </Link>
        </div>

        <div className="footer-rule" aria-hidden="true" />

        {/* Section Label */}
        <div className="footer-section-label">
          <span className="eyebrow eyebrow--dark">
            CONTACT US
          </span>
        </div>

        {/* Two-Sided Editorial Composition */}
        <div className="footer-editorial-grid">
          {/* Left Side: Large Bold Editorial Statement & Primary CTA */}
          <div className="footer-statement-side">
            <h2 className="footer-statement-title">
              Have a software architecture in mind? Let’s engineer the <span className="serif">future of media</span> together.
            </h2>
            <div className="footer-statement-action">
              <Link href="/contact" className="btn btn--sky">
                Start A Dialogue <span className="arrow">↗</span>
              </Link>
            </div>
          </div>

          {/* Right Side: Compact, Art-Directed Information Area */}
          <div className="footer-info-side">
            <div className="footer-info-block">
              <span className="footer-info-heading mono">SERVICES</span>
              <ul className="footer-info-list">
                <li>
                  <Link href="/services/product-development" className="footer-link">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/video-streaming" className="footer-link">
                    Video Streaming
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-solutions" className="footer-link">
                    AI Development
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-info-block">
              <span className="footer-info-heading mono">ABOUT</span>
              <ul className="footer-info-list">
                <li>
                  <Link href="/vision" className="footer-link">
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link href="/philosophy" className="footer-link">
                    Our Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="/mission" className="footer-link">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="footer-link">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-info-block">
              <span className="footer-info-heading mono">CONTACT</span>
              <ul className="footer-info-list">
                <li>
                  <a href={`mailto:${site.email}`} className="footer-link-highlight">
                    {site.email} <span className="arrow">↗</span>
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="footer-link">
                    Schedule Architecture Discovery ↗
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="footer-link">
                    Careers ↗
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-info-block">
              <span className="footer-info-heading mono">FOLLOW</span>
              <ul className="footer-info-list">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link">
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link">
                    GitHub ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-rule footer-rule--bottom" aria-hidden="true" />

        {/* Minimal Bottom Row */}
        <div className="footer-bottom-row">
          <div className="footer-bottom-left">
            <span>© {new Date().getFullYear()} Streamli. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}




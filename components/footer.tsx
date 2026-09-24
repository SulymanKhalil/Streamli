"use client";

import Link from "next/link";
import { site, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="editorial-footer" aria-label="Website footer">
      <div className="shell">
        {/* Top: Brand Monogram & Thin Horizontal Divider */}
        <div className="footer-top-bar">
          <Link className="brand" href="/" aria-label="Stream home" style={{ color: "#ffffff" }}>
            <span className="brand-symbol" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" fill="#0284c7" />
                <path d="M7 14C7 10.134 10.134 7 14 7" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="square" />
                <path d="M10 14C10 11.7909 11.7909 10 14 10" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="square" />
                <circle cx="14" cy="14" r="2.2" fill="#ffffff" />
                <path d="M14 18C16.2091 18 18 16.2091 18 14" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="square" />
                <path d="M14 21C17.866 21 21 17.866 21 14" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="square" />
              </svg>
            </span>
            <span className="brand-text">Stream</span>
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
              Have a streaming architecture in mind? Let’s engineer the <span className="serif">future of media</span> together.
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




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

          <div className="footer-top-status mono">
            <span className="eyebrow-dot" />
            <span>ALL EDGE NODES OPERATIONAL // 99.999% SLA</span>
          </div>
        </div>

        <div className="footer-rule" aria-hidden="true" />

        {/* Section Label */}
        <div className="footer-section-label">
          <span className="eyebrow eyebrow--dark">
            <span className="eyebrow-dot" /> CONTACT US
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
              </ul>
            </div>

            <div className="footer-info-block">
              <span className="footer-info-heading mono">PRACTICE</span>
              <ul className="footer-info-list">
                {nav.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="footer-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-info-block">
              <span className="footer-info-heading mono">LOCATION</span>
              <p className="footer-info-text">
                Global Distributed Mesh
                <br />
                Remote Media Systems Practice
              </p>
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
            <span>© {new Date().getFullYear()} Streamli Inc. All rights reserved.</span>
          </div>

          <div className="footer-bottom-center mono">
            <span>STREAMLI // PLANETARY MEDIA MESH</span>
          </div>

          <div className="footer-bottom-right">
            <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <span className="footer-legal-sep" aria-hidden="true">/</span>
            <Link href="/terms" className="footer-legal-link">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}




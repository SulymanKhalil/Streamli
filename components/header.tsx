"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

interface ContextualItem {
  name: string;
  desc: string;
  href: string;
}

const servicesItems: ContextualItem[] = [
  {
    name: "Software Development",
    desc: "Build scalable digital products",
    href: "/services/product-development",
  },
  {
    name: "Video Streaming",
    desc: "Powering seamless video experiences",
    href: "/services/video-streaming",
  },
  {
    name: "AI Engineering",
    desc: "Intelligent solutions with AI",
    href: "/services/ai-solutions",
  },
];

const aboutItems: ContextualItem[] = [
  {
    name: "Our Vision",
    desc: "Where we are going",
    href: "/vision",
  },
  {
    name: "Our Philosophy",
    desc: "How we think and build",
    href: "/philosophy",
  },
  {
    name: "Our Mission",
    desc: "What drives our work",
    href: "/mission",
  },
  {
    name: "Team",
    desc: "Our people and culture",
    href: "/team",
  },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<"services" | "about" | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearHoverTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Close full-screen menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setHoveredMenu(null);
  }, [pathname]);

  // Lock body scroll when full-screen menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setMenuOpen(false);
      setHoveredMenu(null);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearHoverTimeout();
    };
  }, [handleKeyDown]);

  const handleMouseEnter = (menu: "services" | "about") => {
    clearHoverTimeout();
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    clearHoverTimeout();
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
  };

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setHoveredMenu(null);
  };

  const handleClose = () => {
    setMenuOpen(false);
    setHoveredMenu(null);
  };

  return (
    <>
      {/* =========================================================================
          CLOSED NAVBAR
          - Existing company logo at top-left
          - Minimal 3-line hamburger at top-right
          ========================================================================= */}
      <header className="site-header" aria-label="Main Website Navigation">
        <div className="site-header-inner">
          {/* Logo at Top-Left (hidden when full-screen menu is open) */}
          <Link
            href="/"
            className={`site-brand ${menuOpen ? "is-hidden" : ""}`}
            onClick={handleClose}
            aria-label="Streamli Home"
            tabIndex={menuOpen ? -1 : 0}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="site-logo-icon">
              <rect width="28" height="28" rx="6" fill="#0284c7" />
              <path d="M7 14C7 10.134 10.134 7 14 7" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
              <circle cx="14" cy="14" r="2.2" fill="#ffffff" />
              <path d="M14 21C17.866 21 21 17.866 21 14" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <span className="site-brand-text">Streamli</span>
          </Link>

          {/* Hamburger / Close Button at Top-Right (Exactly 3 lines morphing into X) */}
          <button
            type="button"
            className={`site-hamburger-btn ${menuOpen ? "is-open" : ""}`}
            onClick={handleToggleMenu}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
            <span className="hamburger-line line-3" />
          </button>
        </div>
      </header>

      {/* =========================================================================
          FULL-SCREEN NAVIGATION MENU (SLIDES IN FROM THE RIGHT)
          - No duplicate logo
          - Left-aligned, vertically centered main navigation
          - Two-column editorial composition with contextual content on the right
          ========================================================================= */}
      <div
        className={`fullscreen-nav-overlay ${menuOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Full-Screen Navigation"
        aria-hidden={!menuOpen}
      >
        <div className="fullscreen-nav-container">
          <div className="fullscreen-nav-columns">
            {/* Left Column: Main Navigation */}
            <nav className="fullscreen-nav-left" aria-label="Main Navigation">
              <ul className="fullscreen-primary-list">
                {/* 1. Home */}
                <li className="fullscreen-primary-item">
                  <Link
                    href="/"
                    className="fullscreen-primary-link"
                    onClick={handleClose}
                  >
                    Home
                  </Link>
                </li>

                {/* 2. Services (with Right-Facing Arrow & Hover Contextual Trigger) */}
                <li
                  className="fullscreen-primary-item"
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/services"
                    className="fullscreen-primary-link has-arrow"
                    onClick={handleClose}
                  >
                    <span>Services</span>
                    <span className="nav-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>

                {/* 3. About (with Right-Facing Arrow & Hover Contextual Trigger) */}
                <li
                  className="fullscreen-primary-item"
                  onMouseEnter={() => handleMouseEnter("about")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/about"
                    className="fullscreen-primary-link has-arrow"
                    onClick={handleClose}
                  >
                    <span>About</span>
                    <span className="nav-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>

                {/* 4. Careers */}
                <li className="fullscreen-primary-item">
                  <Link
                    href="/careers"
                    className="fullscreen-primary-link"
                    onClick={handleClose}
                  >
                    Careers
                  </Link>
                </li>

                {/* 5. Contact */}
                <li className="fullscreen-primary-item">
                  <Link
                    href="/contact"
                    className="fullscreen-primary-link"
                    onClick={handleClose}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right Column: Contextual Content Area (No card / dropdown container) */}
            <div
              className="fullscreen-nav-right"
              onMouseEnter={clearHoverTimeout}
              onMouseLeave={handleMouseLeave}
              aria-live="polite"
            >
              {hoveredMenu === "services" && (
                <div className="contextual-list">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="contextual-entry"
                      onClick={handleClose}
                    >
                      <span className="contextual-title">{item.name}</span>
                      <span className="contextual-desc">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}

              {hoveredMenu === "about" && (
                <div className="contextual-list">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="contextual-entry"
                      onClick={handleClose}
                    >
                      <span className="contextual-title">{item.name}</span>
                      <span className="contextual-desc">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="flex items-center gap-2 group"
          aria-label="Maple Photo Imaging — home"
        >
          <MapleLeafIcon className="w-7 h-7 text-accent flex-shrink-0" />
          <span className="font-heading text-lg leading-tight text-text-primary">
            <span className="font-bold">Maple</span>{" "}
            <span className="hidden sm:inline text-text-secondary font-normal text-base">
              Photo Imaging
            </span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-brand-bg cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("#booking")}
            className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-md cursor-pointer"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-brand-bg transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <ul className="px-4 py-3 space-y-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-brand-bg rounded-lg transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <button
              onClick={() => handleNavClick("#booking")}
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-full transition-colors cursor-pointer"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function MapleLeafIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 120"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M50 4 L56 22 L74 10 L63 30 L86 24 L72 40 L98 44 L77 56 L90 72 L68 62 L72 86 L50 74 L28 86 L32 62 L10 72 L23 56 L2 44 L28 40 L14 24 L37 30 L26 10 L44 22 Z" />
      <rect x="46" y="74" width="8" height="22" rx="2" />
    </svg>
  );
}

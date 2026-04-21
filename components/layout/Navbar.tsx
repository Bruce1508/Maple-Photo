"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled
          ? "shadow-[0_1px_3px_rgba(0,0,0,0.10),0_2px_2px_rgba(0,0,0,0.06),0_0_2px_rgba(0,0,0,0.07)]"
          : "border-b border-[#e7e7e7]"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 md:h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="flex items-center gap-2.5"
          aria-label="Maple Photo Imaging — home"
        >
          <Image src="/camera.png" alt="" width={28} height={28} className="flex-shrink-0" />
          <span className="text-base font-bold tracking-tight text-house-green">
            Maple
            <span className="hidden sm:inline font-normal text-text-secondary">
              {" "}Photo Imaging
            </span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-house-green transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => handleNavClick("#location")}
            className="text-sm font-semibold px-5 py-2 rounded-full border border-[rgba(0,0,0,0.87)] text-text-primary hover:border-primary hover:text-primary transition-colors cursor-pointer"
          >
            Walk In
          </button>
          <button
            onClick={() => handleNavClick("#booking")}
            className="bg-primary hover:bg-primary-dark active:scale-95 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 cursor-pointer"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-text-secondary hover:text-house-green transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#e7e7e7]">
          <ul className="px-4 py-3 space-y-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-text-secondary hover:text-house-green transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick("#location")}
              className="w-full border border-[rgba(0,0,0,0.87)] text-text-primary font-semibold py-3 rounded-full text-sm transition-colors cursor-pointer"
            >
              Walk In
            </button>
            <button
              onClick={() => handleNavClick("#booking")}
              className="w-full bg-primary hover:bg-primary-dark active:scale-95 text-white font-semibold py-3 rounded-full transition-all cursor-pointer"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}


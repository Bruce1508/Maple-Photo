"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import MapleMark from "@/components/ui/MapleMark";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-3 sm:top-4 z-50 px-3 sm:px-4 lg:px-6">
      <div
        className={`flex items-center h-18 md:h-20 max-w-[1440px] mx-auto rounded-[var(--radius-pill)] px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled
            ? "bg-surface/80 backdrop-blur-xl shadow-[var(--shadow-float)]"
            : "bg-surface/0 shadow-none"
        }`}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="flex items-center gap-2.5 text-ink flex-shrink-0"
          aria-label="Maple Photo Imaging, home"
        >
          <MapleMark className="w-6 h-6 md:w-7 md:h-7 text-accent flex-shrink-0" />
          <span className="font-display text-lg md:text-xl">Maple</span>
        </a>

        <ul className="hidden md:flex items-center justify-center gap-1 px-8 flex-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="px-5 py-2.5 rounded-[var(--radius-pill)] text-[length:var(--step-body)] font-medium text-ink-soft hover:text-ink hover:bg-surface-tint transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavClick("#booking")}
          className="hidden md:flex items-center ml-auto px-6 py-3 rounded-[var(--radius-pill)] bg-accent text-white text-[length:var(--step-body)] font-medium shadow-[var(--shadow-card)] hover:bg-ink transition-colors cursor-pointer flex-shrink-0"
        >
          Book now
        </button>

        <div className="flex md:hidden flex-1 items-center justify-end">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="p-3 text-ink rounded-full hover:bg-surface-tint"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 max-w-[1440px] mx-auto bg-surface rounded-[var(--radius-card)] shadow-[var(--shadow-float)] px-4 sm:px-6 py-3">
          <ul role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-2 py-3 text-[length:var(--step-body)] font-medium text-ink cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavClick("#booking")}
                className="w-full text-left px-2 py-3 text-[length:var(--step-body)] font-medium text-accent cursor-pointer"
              >
                Book now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

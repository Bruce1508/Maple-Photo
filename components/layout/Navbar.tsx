"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import MapleMark from "@/components/ui/MapleMark";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 flex items-stretch h-14 md:h-16 bg-blue">
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#hero");
        }}
        className="flex items-center gap-2 text-white px-4 md:px-6 flex-shrink-0"
        aria-label="Maple Photo Imaging, home"
      >
        <MapleMark className="w-4 h-4 text-lime flex-shrink-0" />
        <span className="font-display font-display-title text-base md:text-lg">Maple</span>
      </a>

      <ul className="hidden md:flex items-center gap-1 px-4 flex-1" role="list">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-[length:var(--step-small)] font-medium text-white/75 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => handleNavClick("#booking")}
        className="hidden md:flex items-center px-6 bg-accent text-white text-[length:var(--step-small)] font-medium hover:bg-ink transition-colors cursor-pointer flex-shrink-0"
      >
        Book now
      </button>

      <div className="flex md:hidden flex-1 items-center justify-end px-2">
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="p-2.5 text-white"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-blue border-t-4 border-ink">
          <ul className="px-4 py-3" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-2 py-3 text-[length:var(--step-body)] font-medium text-white cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavClick("#booking")}
                className="w-full text-left px-2 py-3 text-[length:var(--step-body)] font-medium text-lime cursor-pointer"
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

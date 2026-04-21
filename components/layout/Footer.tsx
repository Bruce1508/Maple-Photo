import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { BUSINESS, NAV_LINKS, HOURS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-house-green text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <Image src="/camera.png" alt="" width={24} height={24} className="flex-shrink-0" />
              <span className="text-base font-bold tracking-tight">
                Maple Photo Imaging
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {BUSINESS.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 mb-4">
              Hours
            </h3>
            <ul className="space-y-2" role="list">
              {HOURS.map((h) => (
                <li key={h.day} className="text-sm">
                  <span className="text-white/70">{h.day}</span>
                  <br />
                  <span className={h.open ? "text-white font-medium" : "text-white/40"}>
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-primary" />
                  {BUSINESS.address}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={14} className="flex-shrink-0 text-primary" />
                  {BUSINESS.phone}
                </a>
              </li>
              {BUSINESS.instagram && (
                <li>
                  <a
                    href={BUSINESS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <InstagramGlyph className="w-3.5 h-3.5 flex-shrink-0 text-primary" aria-hidden />
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 Maple Photo Imaging. All rights reserved.
          </p>
          <p className="text-xs text-white/30">Toronto, Canada</p>
        </div>
      </div>
    </footer>
  );
}

function InstagramGlyph({
  className,
  "aria-hidden": ariaHidden,
}: {
  className?: string;
  "aria-hidden"?: boolean;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={ariaHidden}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}


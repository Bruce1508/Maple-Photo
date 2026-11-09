"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { BUSINESS, HOURS } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

const STRIP_IMAGES = [
  { src: "/images/cn-tower-toronto-ontario-29969151776.jpg", alt: "Toronto's CN Tower rising above the downtown skyline" },
  { src: "/images/vintage-camera.jpg", alt: "A vintage portrait studio camera resting on its tripod" },
  { src: "/images/canadian-passport-us-uk-stamps.jpg", alt: "A stamped Canadian passport open to US and UK visa stamps" },
  { src: "/images/canadian-passports-old-and-new.jpg", alt: "Two Canadian passports, old and new editions, side by side" },
];

// ponytail: single open/close window per day from lib/constants HOURS; add split shifts if a day ever needs two.
function parseTime(t: string) {
  const m = t.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!m) return null;
  let h = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  if (/PM/i.test(m[3]) && h !== 12) h += 12;
  if (/AM/i.test(m[3]) && h === 12) h = 0;
  return h * 60 + min;
}

function useOpenNow() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const day = now.getDay(); // 0 Sun .. 6 Sat
      const idx = day === 0 ? 2 : day === 6 ? 1 : 0; // HOURS: [Mon-Fri, Sat, Sun]
      const entry = HOURS[idx];
      const [openStr, closeStr] = entry.hours.split("–").map((s) => s.trim());
      const openMin = parseTime(openStr);
      const closeMin = parseTime(closeStr);
      const nowMin = now.getHours() * 60 + now.getMinutes();
      const open = openMin !== null && closeMin !== null && nowMin >= openMin && nowMin < closeMin;
      setStatus({ open, label: open ? "Open now" : "Closed now" });
    };
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  return status;
}

export default function Location() {
  const mapsUrl =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&output=embed`;
  const openStatus = useOpenNow();

  return (
    <section id="location" className="bg-bg text-ink py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-[length:var(--step-head)] leading-[1.05] mb-10">
            Find us in Toronto.
          </h2>
        </Reveal>
      </div>

      {/* Photo strip, drifting marquee, rounded tiles — edges fade instead of hard-cutting a tile */}
      <div
        className="flex gap-3 py-2 px-4 sm:px-6 lg:px-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-hidden="true"
      >
        <div className="flex gap-3 animate-[marquee_32s_linear_infinite] motion-reduce:animate-none">
          {[...STRIP_IMAGES, ...STRIP_IMAGES].map((img, i) => (
            <div key={i} className="relative h-[110px] md:h-[150px] w-[150px] shrink-0 overflow-hidden rounded-[var(--radius-sm)]">
              <Image src={img.src} alt="" fill sizes="150px" className="object-cover grayscale contrast-[1.05]" />
            </div>
          ))}
        </div>
      </div>

      {/* Three-cell bar: address / live status / call */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:h-24">
          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface hover:bg-surface-tint transition-colors rounded-[var(--radius-sm)] flex flex-col justify-center px-6 py-5 md:py-0"
          >
            <span className="text-[length:var(--step-body)] font-medium">
              {BUSINESS.address} ({BUSINESS.addressNote})
            </span>
          </a>
          <div className="bg-surface rounded-[var(--radius-sm)] flex items-center gap-3 px-6 py-5 md:py-0">
            <span
              className={`w-2.5 h-2.5 rounded-full shrink-0 ${openStatus?.open ? "bg-sage" : "bg-accent"}`}
              aria-hidden="true"
            />
            <div>
              <span className="text-[length:var(--step-body)] font-medium block">
                {openStatus ? openStatus.label : "Hours"}
              </span>
              <div className="text-[length:var(--step-small)] text-ink-soft">
                {HOURS.map((h) => (
                  <span key={h.day} className="block">
                    {h.day} {h.hours}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="relative bg-accent text-white hover:bg-ink transition-colors rounded-[var(--radius-sm)] flex items-center justify-center px-6 py-5 md:py-0"
          >
            <span className="text-[length:var(--step-body)] font-medium">{BUSINESS.phone}</span>
            <ArrowRight size={20} className="absolute right-6" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-6">
        <Reveal>
          <a
            href="#booking"
            className="flex items-center justify-between min-h-[96px] px-6 rounded-[var(--radius-card)] bg-sage-tint text-ink hover:bg-sage hover:text-white transition-colors"
          >
            <span className="font-display text-[length:var(--step-head)]">Walk in anytime.</span>
            <ArrowRight size={28} className="flex-shrink-0" aria-hidden="true" />
          </a>
        </Reveal>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-10">
        <div className="h-[320px] lg:h-[400px] rounded-[var(--radius-card)] overflow-hidden">
          <iframe
            src={mapsUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Maple Photo Imaging location map"
          />
        </div>
      </div>
    </section>
  );
}

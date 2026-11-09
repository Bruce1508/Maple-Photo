"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import CropFrame from "./CropFrame";

export default function FormatFinder() {
  const [index, setIndex] = useState(0);
  const selected = SERVICES[index];

  return (
    <div className="w-full max-w-sm">
      <label htmlFor="format-finder" className="block text-[length:var(--step-small)] text-ink-soft mb-2">
        Find your exact photo size
      </label>
      <div className="relative mb-4">
        <select
          id="format-finder"
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
          className="w-full bg-ink text-white text-[length:var(--step-body)] font-medium pl-5 pr-11 py-3.5 rounded-[var(--radius-pill)] appearance-none cursor-pointer"
        >
          {SERVICES.map((service, i) => (
            <option key={service.name} value={i} className="bg-surface text-ink">
              {service.name}
            </option>
          ))}
        </select>
        <ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/70" aria-hidden="true" />
      </div>

      <CropFrame spec={selected.spec} note={selected.note} className="mb-5" />

      <a
        href="#booking"
        className="inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-6 py-3.5 rounded-[var(--radius-pill)] text-[length:var(--step-small)] shadow-[var(--shadow-card)] transition-colors hover:bg-ink"
      >
        Book this format
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </div>
  );
}

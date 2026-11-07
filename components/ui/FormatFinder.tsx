"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
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
      <select
        id="format-finder"
        value={index}
        onChange={(e) => setIndex(Number(e.target.value))}
        className="w-full bg-ink text-paper text-[length:var(--step-body)] font-medium px-4 py-3 mb-4 appearance-none cursor-pointer"
      >
        {SERVICES.map((service, i) => (
          <option key={service.name} value={i} className="bg-paper text-ink">
            {service.name}
          </option>
        ))}
      </select>

      <CropFrame spec={selected.spec} note={selected.note} className="mb-5" />

      <a
        href="#booking"
        className="inline-flex items-center justify-center gap-2 bg-ink text-paper font-medium px-6 py-3 text-[length:var(--step-small)] transition-[background-color] duration-150 hover:bg-accent"
      >
        Book this format
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </div>
  );
}

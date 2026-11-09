"use client";

import { useState } from "react";

const STAGES = [
  { name: "Pick your format", sub: "50+ countries, exact specs, right here.", bg: "var(--color-sage)", ink: "text-white" },
  { name: "Walk in, or book", sub: "No appointment needed, any open hour.", bg: "var(--color-sage-tint)", ink: "text-ink" },
  { name: "We shoot it", sub: "White background, centred, compliant.", bg: "var(--color-surface-tint)", ink: "text-ink" },
  { name: "Leave with prints", sub: "Or a digital file, sent the same day.", bg: "var(--color-accent-tint)", ink: "text-ink" },
];

export default function HowItWorks() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-bg text-ink py-16 md:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8">
        <h2 className="md:col-span-5 font-display text-[length:var(--step-head)] leading-[1.05]">
          How it works.
        </h2>
        <p className="md:col-start-7 md:col-span-6 text-[length:var(--step-lead)] text-ink-soft self-center max-w-[40ch]">
          Four steps, ten minutes, no surprises.
        </p>
      </div>

      {/* Desktop: horizontal accordion of rounded tinted panels */}
      <div className="hidden md:flex mt-16 h-[440px] gap-3 overflow-hidden">
        {STAGES.map((stage, i) => {
          const isOpen = open === i;
          return (
            <button
              key={stage.name}
              onClick={() => setOpen(i)}
              aria-expanded={isOpen}
              className={`relative overflow-hidden text-left rounded-[var(--radius-card)] transition-[flex-basis] duration-[450ms] ease-out cursor-pointer ${stage.ink}`}
              style={{ backgroundColor: stage.bg, flexBasis: isOpen ? "58%" : `${42 / 3}%`, flexGrow: 0, flexShrink: 0 }}
            >
              {isOpen ? (
                <span className="absolute inset-0 flex flex-col justify-between p-8">
                  <span className="font-display text-[length:var(--step-head)]">{stage.name}</span>
                  <span className="text-[length:var(--step-body)] max-w-[36ch]">{stage.sub}</span>
                </span>
              ) : (
                <span
                  className="absolute left-5 bottom-6 font-display text-[length:var(--step-body)] whitespace-nowrap"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {stage.name}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile: vertical stack, first open */}
      <div className="md:hidden mt-10 flex flex-col gap-2">
        {STAGES.map((stage, i) => {
          const isOpen = open === i;
          return (
            <button
              key={stage.name}
              onClick={() => setOpen(i)}
              aria-expanded={isOpen}
              className={`block w-full text-left px-5 rounded-[var(--radius-sm)] transition-[padding] duration-300 ${stage.ink}`}
              style={{ backgroundColor: stage.bg, paddingTop: isOpen ? "20px" : "16px", paddingBottom: isOpen ? "24px" : "16px" }}
            >
              <span className="text-[length:var(--step-body)] font-medium block">{stage.name}</span>
              {isOpen && <span className="block mt-2 text-[length:var(--step-small)]">{stage.sub}</span>}
            </button>
          );
        })}
      </div>
    </section>
  );
}

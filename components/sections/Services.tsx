"use client";

import {
  BookOpen,
  Globe,
  ShieldCheck,
  Car,
  GraduationCap,
  Plane,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const SERVICE_ICONS: LucideIcon[] = [
  BookOpen,
  Globe,
  ShieldCheck,
  Car,
  GraduationCap,
  Plane,
];

const ACCENT_COLORS = [
  "text-sky-600",
  "text-blue-600",
  "text-emerald-600",
  "text-amber-600",
  "text-violet-600",
  "text-indigo-600",
];

const ACCENT_BG = [
  "bg-sky-50 border-sky-200",
  "bg-blue-50 border-blue-200",
  "bg-emerald-50 border-emerald-200",
  "bg-amber-50 border-amber-200",
  "bg-violet-50 border-violet-200",
  "bg-indigo-50 border-indigo-200",
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">
            What We Offer
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-text-primary leading-[1.05] tracking-tight">
            Photos for Every<br />
            <span className="relative inline-block">
              <span className="relative z-10">Country &amp; Purpose</span>
              <span
                aria-hidden="true"
                className="absolute left-0 bottom-1 w-full h-[6px] bg-primary/20 rounded-full"
              />
            </span>
          </h2>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-2" />

        {/* Service rows */}
        <div className="divide-y divide-border">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
            const color = ACCENT_COLORS[i % ACCENT_COLORS.length];
            const bg = ACCENT_BG[i % ACCENT_BG.length];
            return (
              <div
                key={service.name}
                className="group flex items-center gap-5 py-5 sm:py-6 hover:bg-brand-bg transition-colors duration-150 -mx-4 px-4 sm:-mx-6 sm:px-6 cursor-default"
              >
                {/* Index number */}
                <span className="hidden sm:block text-xs font-bold text-text-secondary/40 w-5 text-right flex-shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${color} bg-opacity-10 border ${bg}`}
                  aria-hidden="true"
                >
                  <Icon size={18} strokeWidth={1.75} />
                </div>

                {/* Name + note */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-text-primary text-sm sm:text-base leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mt-0.5 truncate">
                    {service.note}
                  </p>
                </div>

                {/* Spec badge */}
                <span
                  className={`hidden sm:inline-flex text-xs font-semibold px-2.5 py-1 rounded-full border ${bg} ${color} flex-shrink-0`}
                >
                  {service.spec}
                </span>

                {/* Price */}
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-text-primary">$21.99</p>
                  <p className="text-xs text-text-secondary">from</p>
                </div>

                {/* Arrow */}
                <ArrowRight
                  size={16}
                  className="text-text-secondary/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-150 flex-shrink-0 hidden sm:block"
                />
              </div>
            );
          })}
        </div>

        {/* Bottom divider */}
        <div className="h-px bg-border mt-2" />

        {/* Footer */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            Don&apos;t see your country?{" "}
            <a
              href="#location"
              className="text-primary font-semibold hover:underline underline-offset-2"
            >
              Contact us
            </a>{" "}
            — we cover all international formats.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-150"
          >
            Book your session
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

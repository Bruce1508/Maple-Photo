"use client";

import Script from "next/script";
import { Calendar } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Booking() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <section id="booking" className="bg-paper text-ink py-16 md:py-20 min-h-[90svh] flex flex-col justify-center">
      <div className="px-4 sm:px-6 lg:px-10 grid grid-cols-12 gap-x-6">
        <Reveal className="col-span-12 md:col-span-5">
          <h2 className="font-display font-display-title text-[length:var(--step-head)] leading-[1.05]">
            Book your appointment.
          </h2>
          <p className="mt-5 text-[length:var(--step-lead)] max-w-sm">
            Pick a time that works. You&apos;ll get an email confirmation right away.
          </p>
          <p className="mt-6 text-[length:var(--step-body)] max-w-sm">
            Prefer to walk in? We welcome walk-ins during all business hours, no appointment needed.
          </p>
        </Reveal>

        <Reveal delay={120} className="col-span-12 md:col-start-7 md:col-span-6 mt-12 md:mt-0 border-4 border-ink">
          {calendlyUrl ? (
            <>
              <div
                className="calendly-inline-widget"
                data-url={calendlyUrl}
                style={{ minWidth: "320px", height: "700px" }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 px-6 text-center" style={{ minHeight: "400px" }}>
              <Calendar size={28} className="text-ink mb-4" aria-hidden="true" />
              <h3 className="font-display text-[length:var(--step-lead)] text-ink mb-2">
                Online booking coming soon
              </h3>
              <p className="text-[length:var(--step-body)] mb-6 max-w-sm">
                Call or visit to schedule your appointment, or walk in during business hours.
              </p>
              <a
                href="#location"
                className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 text-[length:var(--step-small)] hover:bg-ink transition-colors"
              >
                View contact info
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

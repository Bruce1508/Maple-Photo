"use client";

import Script from "next/script";

export default function Booking() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">
            Booking
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-house-green mb-4 tracking-tight">
            Book Your Appointment Online
          </h2>
          <p className="text-text-secondary text-lg">
            Pick a time that works for you. You&apos;ll get an email confirmation right away.
          </p>
        </div>

        {/* Walk-in notice */}
        <div className="flex items-start gap-3 bg-green-light/30 border border-primary/20 rounded-xl px-5 py-4 mb-8">
          <span className="text-primary mt-0.5 flex-shrink-0 text-lg" aria-hidden="true">ⓘ</span>
          <p className="text-sm text-text-primary">
            <strong>Prefer to walk in?</strong> We welcome walk-ins during all business hours — no appointment needed. Come in at your convenience.
          </p>
        </div>

        {/* Calendly embed */}
        <div className="rounded-xl overflow-hidden border border-[#e7e7e7] shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_1px_1px_rgba(0,0,0,0.24)] bg-brand-bg">
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
            <div
              className="flex flex-col items-center justify-center py-20 px-6 text-center"
              style={{ minHeight: "400px" }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-house-green mb-2">
                Online booking coming soon
              </h3>
              <p className="text-sm text-text-secondary mb-6 max-w-sm">
                Call or email us to schedule your appointment, or simply walk in during business hours.
              </p>
              <a
                href="#location"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark active:scale-95 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-200"
              >
                View Contact Info
              </a>
              {/* TODO: Add NEXT_PUBLIC_CALENDLY_URL to .env.local */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import { AlertCircle, Check } from "lucide-react";
import { PHOTO_PRINTING } from "@/lib/constants";

export default function Printing() {
  return (
    <section id="printing" className="pt-20 lg:pt-28 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-5">
            Digital Photo Printing &amp; Enlarging
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-house-green leading-[1.05] tracking-tight">
            Bring Your Photos,
            <br />We&apos;ll Print Them.
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl">
            High-quality prints from your digital files or original photos — ready in minutes.
          </p>
        </div>

        {/* Media requirement notice */}
        <div className="flex items-start gap-4 bg-house-green text-white rounded-xl px-6 py-5 mb-10">
          <AlertCircle size={20} className="shrink-0 mt-0.5 text-white" aria-hidden="true" />
          <div>
            <p className="font-semibold text-sm mb-1">Please bring your photos on physical media</p>
            <p className="text-white/70 text-sm leading-relaxed">
              {PHOTO_PRINTING.notAccepted} Accepted media:{" "}
              <span className="text-white font-medium">
                {PHOTO_PRINTING.acceptedMedia.join(", ")}
              </span>.
            </p>
          </div>
        </div>

        {/* Three pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* 4×6 volume pricing */}
          <article className="bg-white rounded-xl border border-[#e7e7e7] shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_1px_1px_rgba(0,0,0,0.24)] overflow-hidden">
            <div className="bg-brand-bg px-5 py-4 border-b border-[#e7e7e7]">
              <h3 className="font-bold text-house-green text-sm">4×6&quot; Prints</h3>
              <p className="text-xs text-text-secondary mt-0.5">Volume discounts available</p>
            </div>
            <div className="divide-y divide-[#e7e7e7]">
              {PHOTO_PRINTING.standardTiers.map((tier, i) => (
                <div key={tier.range} className="flex items-center justify-between px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      i === 0 ? "bg-primary/40" : i === 1 ? "bg-primary/70" : "bg-primary"
                    }`} aria-hidden="true" />
                    <span className="text-sm text-text-secondary">{tier.range}</span>
                  </div>
                  <span className="text-sm font-bold text-house-green">{tier.price}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Large format pricing */}
          <article className="bg-white rounded-xl border border-[#e7e7e7] shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_1px_1px_rgba(0,0,0,0.24)] overflow-hidden">
            <div className="bg-brand-bg px-5 py-4 border-b border-[#e7e7e7]">
              <h3 className="font-bold text-house-green text-sm">Large Format Prints</h3>
              <p className="text-xs text-text-secondary mt-0.5">Portraits &amp; keepsake prints</p>
            </div>
            <div className="divide-y divide-[#e7e7e7]">
              {PHOTO_PRINTING.largeSizes.map((item) => (
                <div key={item.size} className="flex items-center justify-between px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                    <span className="text-sm text-text-secondary">{item.size}</span>
                  </div>
                  <span className="text-sm font-bold text-house-green">{item.price}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Photo enlarging */}
          <article className="bg-white rounded-xl border border-primary/30 shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_1px_1px_rgba(0,0,0,0.24)] overflow-hidden">
            <div className="bg-green-light/20 px-5 py-4 border-b border-primary/20">
              <h3 className="font-bold text-house-green text-sm">Photo Enlarging</h3>
              <p className="text-xs text-text-secondary mt-0.5">Copy &amp; enlarge original prints</p>
            </div>
            <div className="px-5 py-4 space-y-3">
              <p className="text-xs text-text-secondary leading-relaxed">
                {PHOTO_PRINTING.enlargingNote}
              </p>
              <div className="h-px bg-[#e7e7e7]" />
              <p className="text-xs font-semibold text-house-green">Same pricing as digital prints:</p>
              <ul className="space-y-1.5">
                {['4×6" — from 25¢', '5×7" — $0.99', '8×10" — $2.99', '8×12" — $3.99'].map((line) => (
                  <li key={line} className="flex items-center gap-2 text-xs text-text-secondary">
                    <Check size={10} strokeWidth={3} className="text-primary shrink-0" aria-hidden="true" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

      </div>
    </section>
  );
}

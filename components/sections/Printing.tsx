import { PHOTO_PRINTING } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

export default function Printing() {
  return (
    <section id="printing" className="bg-bg text-ink py-16 md:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
      <div className="rounded-[var(--radius-card)] bg-ink text-white p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10">
        <Reveal className="md:col-span-5">
          <h2 className="font-display text-[length:var(--step-head)] leading-[1.05]">
            Bring your photos.
          </h2>
          <p className="mt-5 text-[length:var(--step-lead)] text-white/85 max-w-sm">
            High-quality prints from your own files or an original photo, ready in minutes.
          </p>
          <p className="mt-6 text-[length:var(--step-body)] text-white/70 max-w-[50ch]">
            {PHOTO_PRINTING.notAccepted} Accepted media: {PHOTO_PRINTING.acceptedMedia.join(", ")}.
          </p>
        </Reveal>

        <div className="md:col-start-7 md:col-span-6">
          <p className="text-[length:var(--step-small)] font-medium text-[color:var(--color-accent-on-dark)] mb-2">4×6&quot; prints</p>
          {PHOTO_PRINTING.standardTiers.map((tier, i) => (
            <Reveal
              key={tier.range}
              delay={i * 70}
              className={`flex items-baseline justify-between py-3 px-4 rounded-[var(--radius-sm)] ${i % 2 === 1 ? "bg-white/5" : ""}`}
            >
              <span className="text-[length:var(--step-body)]">{tier.range}</span>
              <span className="text-[length:var(--step-body)] font-medium">{tier.price}</span>
            </Reveal>
          ))}

          <p className="text-[length:var(--step-small)] font-medium text-[color:var(--color-accent-on-dark)] mt-8 mb-2">Large format</p>
          {PHOTO_PRINTING.largeSizes.map((item, i) => (
            <div
              key={item.size}
              className={`flex items-baseline justify-between py-3 px-4 rounded-[var(--radius-sm)] ${i % 2 === 1 ? "bg-white/5" : ""}`}
            >
              <span className="text-[length:var(--step-body)]">{item.size}</span>
              <span className="text-[length:var(--step-body)] font-medium">{item.price}</span>
            </div>
          ))}

          <p className="mt-8 text-[length:var(--step-body)] text-white/70 max-w-[60ch]">
            {PHOTO_PRINTING.enlargingNote}
          </p>
        </div>
      </div>
    </section>
  );
}

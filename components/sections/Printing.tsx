import { PHOTO_PRINTING } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

export default function Printing() {
  return (
    <section id="printing" className="bg-olive text-white py-16 md:py-20 min-h-[90svh] flex flex-col justify-center">
      <div className="px-4 sm:px-6 lg:px-10 grid grid-cols-12 gap-x-6 gap-y-10">
        <Reveal className="col-span-12 md:col-span-5">
          <h2 className="font-display font-display-title text-[length:var(--step-head)] leading-[1.05]">
            Bring your photos.
          </h2>
          <p className="mt-5 text-[length:var(--step-lead)] max-w-sm">
            High-quality prints from your own files or an original photo, ready in minutes.
          </p>
          <p className="mt-6 text-[length:var(--step-body)] text-white/75 max-w-[50ch]">
            {PHOTO_PRINTING.notAccepted} Accepted media: {PHOTO_PRINTING.acceptedMedia.join(", ")}.
          </p>
        </Reveal>

        <div className="col-span-12 md:col-start-7 md:col-span-6">
          <p className="text-[length:var(--step-small)] font-medium text-lime mb-2">4×6&quot; prints</p>
          {PHOTO_PRINTING.standardTiers.map((tier, i) => (
            <Reveal
              key={tier.range}
              delay={i * 70}
              className={`flex items-baseline justify-between py-3 px-3 ${i % 2 === 1 ? "bg-white/5" : ""}`}
            >
              <span className="text-[length:var(--step-body)]">{tier.range}</span>
              <span className="text-[length:var(--step-body)] font-medium">{tier.price}</span>
            </Reveal>
          ))}

          <p className="text-[length:var(--step-small)] font-medium text-lime mt-8 mb-2">Large format</p>
          {PHOTO_PRINTING.largeSizes.map((item, i) => (
            <div
              key={item.size}
              className={`flex items-baseline justify-between py-3 px-3 ${i % 2 === 1 ? "bg-white/5" : ""}`}
            >
              <span className="text-[length:var(--step-body)]">{item.size}</span>
              <span className="text-[length:var(--step-body)] font-medium">{item.price}</span>
            </div>
          ))}

          <p className="mt-8 text-[length:var(--step-body)] text-white/75 max-w-md">
            {PHOTO_PRINTING.enlargingNote}
          </p>
        </div>
      </div>
    </section>
  );
}

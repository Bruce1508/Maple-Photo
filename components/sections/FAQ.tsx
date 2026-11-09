import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section id="faq" className="bg-bg text-ink py-16 md:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
        <h2 className="md:col-span-4 font-display text-[length:var(--step-head)] leading-[1.02] md:sticky md:top-24 self-start mb-8 md:mb-0">
          Questions?
        </h2>

        <div className="md:col-start-5 md:col-span-8 space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              name="faq"
              className="group bg-surface open:bg-accent-tint rounded-[var(--radius-sm)] open:shadow-none"
            >
              <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-6 py-5 min-h-[72px]">
                <span className="text-[length:var(--step-body)] font-medium">{item.question}</span>
                <span className="relative w-4 h-4 shrink-0 text-accent" aria-hidden="true">
                  <span className="absolute inset-0 top-1/2 h-[3px] -translate-y-1/2 bg-current rounded-full" />
                  <span className="absolute inset-0 top-1/2 h-[3px] -translate-y-1/2 bg-current rounded-full rotate-90 group-open:rotate-0 transition-transform" />
                </span>
              </summary>
              <p className="px-6 pb-6 text-[length:var(--step-body)] text-ink-soft leading-relaxed max-w-[52ch]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <div className="pt-12 text-left">
        <p className="text-[length:var(--step-body)] text-ink-soft mb-5">
          Still have questions? We&apos;re happy to help.
        </p>
        <a
          href="#location"
          className="inline-block bg-ink text-white font-medium px-6 py-3 rounded-[var(--radius-pill)] text-[length:var(--step-small)] hover:bg-accent transition-colors"
        >
          Contact us
        </a>
      </div>
    </section>
  );
}

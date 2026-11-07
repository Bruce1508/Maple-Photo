import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section id="faq" className="bg-lime text-ink py-16 md:py-20 min-h-[90svh]">
      <div className="px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-12 gap-x-6">
        <h2 className="md:col-span-4 font-display font-display-title text-[length:var(--step-head)] leading-[1.02] md:sticky md:top-24 self-start mb-8 md:mb-0">
          Questions?
        </h2>

        <div className="md:col-start-5 md:col-span-8 space-y-2">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} name="faq" className="group bg-white open:bg-accent open:text-white">
              <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-5 py-5 min-h-[72px]">
                <span className="text-[length:var(--step-body)] font-medium">{item.question}</span>
                <span className="relative w-4 h-4 shrink-0" aria-hidden="true">
                  <span className="absolute inset-0 top-1/2 h-[3px] -translate-y-1/2 bg-current" />
                  <span className="absolute inset-0 top-1/2 h-[3px] -translate-y-1/2 bg-current rotate-90 group-open:rotate-0 transition-transform" />
                </span>
              </summary>
              <p className="px-5 pb-6 text-[length:var(--step-body)] leading-relaxed max-w-[52ch]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-10 pt-12 text-left">
        <p className="text-[length:var(--step-body)] mb-5">
          Still have questions? We&apos;re happy to help.
        </p>
        <a
          href="#location"
          className="inline-block bg-ink text-white font-medium px-6 py-3 text-[length:var(--step-small)] hover:bg-accent transition-colors"
        >
          Contact us
        </a>
      </div>
    </section>
  );
}

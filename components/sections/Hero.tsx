import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";
import FormatFinder from "@/components/ui/FormatFinder";
import Reveal from "@/components/ui/Reveal";
import MapleMark from "@/components/ui/MapleMark";

export default function Hero() {
  return (
    <section id="hero" className="bg-bg text-ink md:grid md:grid-cols-12 md:items-center md:min-h-[100svh] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-14 md:py-20 gap-x-4">
      {/* Text zone — headline, promise, the live thing */}
      <div className="md:col-span-5">
        <Reveal>
          <h1 className="font-display text-[length:var(--step-display)] text-ink">
            Maple Photo<span className="text-accent">.</span>
          </h1>
          <p className="mt-5 md:mt-6 text-[length:var(--step-lead)] text-ink-soft max-w-[32ch]">
            Walk in or book online. Exact specs for Canada, the US and 50+ countries, printed same day.
          </p>
        </Reveal>

        <Reveal delay={160} className="mt-10 md:mt-12">
          <FormatFinder />
          <p className="mt-6 text-[length:var(--step-small)] text-ink-soft max-w-[48ch]">
            {TRUST_BADGES.map((b) => b.text).join(" · ")}
          </p>
        </Reveal>
      </div>

      {/* Dominant image — a floating, layered card, the hero's one wow moment */}
      <div className="relative mt-12 md:mt-0 md:col-span-7 flex md:justify-end">
        <Reveal delay={200} className="relative w-[82%] sm:w-[70%] md:w-[85%] max-w-[560px] aspect-[5/7] animate-float motion-reduce:animate-none">
          <div className="absolute inset-0 rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-float)] rotate-[-4deg]">
            <Image
              src="/images/canadian-passports-old-and-new.jpg"
              alt="Two Canadian passports, old and new editions, side by side"
              fill
              sizes="(min-width: 768px) 38vw, 82vw"
              className="object-cover [object-position:88%_42%] grayscale contrast-[1.08] animate-[drift_20s_ease-in-out_infinite_alternate] motion-reduce:animate-none"
              priority
            />
          </div>

          <div
            className="absolute left-[-8%] bottom-[8%] bg-surface rounded-[var(--radius-sm)] shadow-[var(--shadow-card)] px-4 py-3 flex items-center gap-2 rotate-[3deg]"
            aria-hidden="true"
          >
            <BadgeCheck size={18} className="text-sage shrink-0" />
            <span className="text-[length:var(--step-small)] font-medium whitespace-nowrap">Accepted or retake free</span>
          </div>

          <div
            className="absolute right-[-6%] top-[-6%] bg-accent text-white rounded-full w-14 h-14 flex items-center justify-center shadow-[var(--shadow-card)] rotate-[8deg]"
            aria-hidden="true"
          >
            <MapleMark className="w-6 h-6" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

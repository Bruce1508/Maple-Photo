import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";
import FormatFinder from "@/components/ui/FormatFinder";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-blue text-white md:grid md:grid-cols-12">
      {/* Text zone — headline, promise, the live thing */}
      <div className="md:col-span-7 md:min-h-[100svh] flex flex-col md:items-center md:justify-center px-4 sm:px-6 lg:px-10 py-10 md:py-14">
        <div className="w-full md:max-w-[36rem]">
          {/* Group 1 — the statement: headline + promise, tight internal rhythm */}
          <div>
            <h1 className="font-display font-display-title text-[length:var(--step-display)] text-white">
              <span className="block overflow-hidden">
                <span className="block animate-rise">Maple</span>
              </span>
              <span className="block overflow-hidden text-lime">
                <span className="block animate-rise" style={{ animationDelay: "110ms" }}>
                  Photo.
                </span>
              </span>
            </h1>

            <Reveal delay={320} className="mt-6 md:mt-8 max-w-[32ch]">
              <p className="text-[length:var(--step-lead)] leading-snug mb-6">
                Walk in or book online. Exact specs for Canada, the US and 50+ countries — printed same day.
              </p>
              <a
                href="#booking"
                className="md:hidden inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 text-[length:var(--step-small)] hover:bg-lime hover:text-ink transition-colors"
              >
                Book now
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          {/* Group 2 — the live tool: one deliberate gap above, tight rhythm within */}
          <Reveal delay={420} className="mt-16 md:mt-24">
            <FormatFinder />
            <p className="mt-6 text-[length:var(--step-small)] text-white/70 max-w-[60ch]">
              {TRUST_BADGES.map((b) => b.text).join(" · ")}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Dominant image — the one focal object this chapter carries */}
      <div className="relative h-[46svh] md:h-auto md:min-h-[100svh] md:col-span-5 overflow-hidden border-t-8 md:border-t-0 md:border-l-8 border-ink">
        <Image
          src="/images/canadian-passports-old-and-new.jpg"
          alt="Two Canadian passports, old and new editions, side by side"
          fill
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-cover [object-position:90%_38%] md:[object-position:88%_42%] grayscale contrast-[1.15] animate-[drift_18s_ease-in-out_infinite_alternate] motion-reduce:animate-none"
          priority
        />
      </div>
    </section>
  );
}

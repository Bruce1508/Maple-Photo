import { REVIEWS, TRUST_BADGES, BUSINESS } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

const [FEATURED, ...REST] = REVIEWS;

export default function Reviews() {
  return (
    <section id="reviews" className="bg-bg text-ink py-16 md:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-10">
        <div className="md:col-span-5">
          <Reveal>
            <h2 className="font-display text-[length:var(--step-head)] mb-6">Toronto says.</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge.text}
                  className="inline-block bg-sage-tint text-ink text-[length:var(--step-small)] font-medium px-4 py-2 rounded-[var(--radius-pill)]"
                >
                  {badge.text}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <blockquote className="border-l-4 border-accent pl-6">
              <p className="text-[length:var(--step-lead)] leading-snug max-w-[42ch]">&ldquo;{FEATURED.quote}&rdquo;</p>
              <p className="mt-4 text-[length:var(--step-small)] text-ink-soft">
                {FEATURED.name} · {FEATURED.rating}/5 · {FEATURED.date}
              </p>
            </blockquote>
          </Reveal>
        </div>

        <div className="md:col-start-7 md:col-span-6 flex flex-col gap-8">
          {REST.map((review, i) => (
            <Reveal key={review.name} delay={200 + i * 80}>
              <blockquote className="text-[length:var(--step-body)] leading-relaxed max-w-[52ch]">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <p className="mt-3 text-[length:var(--step-small)] text-ink-soft">
                {review.name} · {review.rating}/5 · {review.date}
              </p>
            </Reveal>
          ))}

          <a
            href={BUSINESS.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pt-6 inline-block text-[length:var(--step-body)] font-medium text-accent underline underline-offset-4 hover:text-ink transition-colors"
          >
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

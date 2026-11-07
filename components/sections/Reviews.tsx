import { REVIEWS, TRUST_BADGES, BUSINESS } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-olive text-white py-16 md:py-20 min-h-[90svh] flex flex-col justify-center">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <Reveal className="col-span-2 bg-accent text-white p-6 flex items-end">
            <h2 className="font-display font-display-title text-[length:var(--step-head)]">
              Toronto says.
            </h2>
          </Reveal>

          {TRUST_BADGES.map((badge, i) => (
            <Reveal key={badge.text} delay={i * 60} className="bg-white/10 p-6 flex items-center">
              <p className="text-[length:var(--step-body)] font-medium leading-snug">{badge.text}</p>
            </Reveal>
          ))}

          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={200 + i * 80} className="bg-white/10 p-6 flex flex-col justify-between min-h-[220px]">
              <blockquote className="text-[length:var(--step-small)] leading-relaxed line-clamp-5">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-[length:var(--step-small)] text-white/75">
                {review.name} · {review.rating}/5 · {review.date}
              </p>
            </Reveal>
          ))}
        </div>

        <a
          href={BUSINESS.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 text-[length:var(--step-body)] font-medium text-lime underline underline-offset-4 hover:text-white transition-colors"
        >
          See all reviews on Google
        </a>
      </div>
    </section>
  );
}

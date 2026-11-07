import { BUSINESS, NAV_LINKS, HOURS } from "@/lib/constants";
import MapleMark from "@/components/ui/MapleMark";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <footer className="bg-olive text-white">
      <div className="px-4 sm:px-6 lg:px-10 pt-14 lg:pt-20 pb-10">
        <Reveal className="flex items-center gap-3 mb-14 lg:mb-20">
          <MapleMark className="w-8 h-8 lg:w-10 lg:h-10 text-lime shrink-0" />
          <span className="font-display font-display-title text-[length:var(--step-display)] leading-none">Maple</span>
        </Reveal>

        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-5 space-y-2">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="block text-[length:var(--step-lead)] font-display text-lime hover:text-white transition-colors"
            >
              {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[length:var(--step-lead)] font-display text-lime hover:text-white transition-colors"
            >
              {BUSINESS.address}
            </a>
          </div>

          <div className="col-span-6 md:col-start-7 md:col-span-3">
            <p className="text-[length:var(--step-small)] text-white/75 mb-3">Quick links</p>
            <ul className="space-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[length:var(--step-small)] text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <p className="text-[length:var(--step-small)] text-white/75 mb-3">Hours</p>
            <ul className="space-y-2" role="list">
              {HOURS.map((h) => (
                <li key={h.day} className="text-[length:var(--step-small)] text-white/80">
                  {h.day}: {h.hours}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[length:var(--step-small)] text-white/70">
            © 2026 Maple Photo Imaging. Toronto, Canada.
          </p>
          <a href="#hero" className="text-[length:var(--step-small)] text-white/70 hover:text-white transition-colors">
            Back to top
          </a>
        </div>

        <p className="mt-6 text-[length:var(--step-small)] text-white/65 max-w-3xl">
          Pictures:{" "}
          <a
            href="https://commons.wikimedia.org/w/index.php?curid=149895381"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/60"
          >
            &ldquo;Canadian Passports - Old and New&rdquo;
          </a>{" "}
          by Jusfiq, CC BY-SA 4.0, via Wikimedia Commons;{" "}
          <a
            href="https://commons.wikimedia.org/w/index.php?curid=88155062"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/60"
          >
            &ldquo;Canadian passport (US UK stamps)&rdquo;
          </a>{" "}
          by Jon Evans, CC BY 2.0, via Wikimedia Commons;{" "}
          <a
            href="https://commons.wikimedia.org/w/index.php?curid=115962401"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/60"
          >
            &ldquo;CN Tower, Toronto, Ontario&rdquo;
          </a>{" "}
          by Ken Lund, CC BY-SA 2.0, via Wikimedia Commons;{" "}
          <a
            href="https://www.flickr.com/photos/41869756@N05/4312513225"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/60"
          >
            &ldquo;Vintage Camera&rdquo;
          </a>{" "}
          by anniehp, CC BY 2.0, via Flickr.
        </p>
      </div>
    </footer>
  );
}

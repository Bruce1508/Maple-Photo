import {
  BookOpen,
  Globe,
  ShieldCheck,
  Car,
  GraduationCap,
  Plane,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const SERVICE_ICONS: LucideIcon[] = [
  BookOpen,      // Canadian Passport
  Globe,         // US Visa / Green Card
  ShieldCheck,   // PR Card / Citizenship
  Car,           // Ontario Driver's License
  GraduationCap, // Student / School ID
  Plane,         // International Passports
];

const ICON_STYLES = [
  "bg-sky-50 text-sky-600",
  "bg-blue-50 text-blue-600",
  "bg-green-50 text-green-600",
  "bg-amber-50 text-amber-600",
  "bg-violet-50 text-violet-600",
  "bg-indigo-50 text-indigo-600",
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-text-primary mb-4">
            Photos for Every Country &amp; Purpose
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Whether it&apos;s a Canadian passport or an international visa, we
            know the exact specifications required.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
            const iconStyle = ICON_STYLES[i % ICON_STYLES.length];
            return (
              <article
                key={service.name}
                className="group bg-brand-bg hover:bg-white border border-border hover:border-primary/30 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              >
                {/* SVG icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${iconStyle}`}
                  aria-hidden="true"
                >
                  <Icon size={20} strokeWidth={1.75} />
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-text-primary leading-snug">
                    {service.name}
                  </h3>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                    From $21.99
                  </span>
                </div>

                <p className="text-xs font-semibold text-warm mb-1">
                  {service.spec}
                </p>
                <p className="text-sm text-text-secondary">{service.note}</p>
              </article>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-text-secondary mt-10">
          Don&apos;t see your country?{" "}
          <a
            href="#location"
            className="text-primary font-medium hover:underline"
          >
            Contact us
          </a>{" "}
          — we cover all international formats.
        </p>
      </div>
    </section>
  );
}

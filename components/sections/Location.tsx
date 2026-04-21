import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { BUSINESS, HOURS } from "@/lib/constants";

export default function Location() {
  const mapsUrl =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&output=embed`;

  return (
    <section id="location" className="py-20 lg:py-28 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">
            Location
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-house-green mb-4 tracking-tight">
            Find Us in Toronto
          </h2>
          <p className="text-text-secondary text-lg">
            Conveniently located and easy to reach by transit or car.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map embed */}
          <div className="rounded-xl overflow-hidden border border-[#e7e7e7] shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_1px_1px_rgba(0,0,0,0.24)] aspect-[4/3] lg:aspect-auto lg:h-[420px] bg-white">
            {/* TODO: Replace src with NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL in .env.local */}
            <iframe
              src={mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maple Photo Imaging location map"
              className="w-full h-full"
            />
          </div>

          {/* Info card */}
          <div className="bg-white rounded-xl border border-[#e7e7e7] shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_1px_1px_rgba(0,0,0,0.24)] p-7 lg:p-8">
            <h3 className="font-heading text-xl font-bold text-house-green mb-6 tracking-tight">
              Studio Info
            </h3>

            <ul className="space-y-5" role="list">
              {/* Address */}
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-primary" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-1">Address</p>
                  <p className="text-sm text-text-primary">{BUSINESS.address}</p>
                  {BUSINESS.addressNote && (
                    <p className="text-xs text-text-secondary mt-0.5">{BUSINESS.addressNote}</p>
                  )}
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-primary" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-1">Phone</p>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="text-sm text-text-primary hover:text-primary transition-colors"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={16} className="text-primary" aria-hidden="true" />
                </span>
                <div className="flex-grow">
                  <p className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Hours</p>
                  <ul className="space-y-1.5" role="list">
                    {HOURS.map((h) => (
                      <li key={h.day} className="flex items-center justify-between gap-4">
                        <span className="text-sm text-text-secondary">{h.day}</span>
                        <span className={`text-sm font-medium ${h.open ? "text-text-primary" : "text-text-secondary"}`}>
                          {h.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            {/* Directions CTA */}
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark active:scale-95 text-white font-semibold py-3 rounded-full text-sm transition-all duration-200"
            >
              Get Directions
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

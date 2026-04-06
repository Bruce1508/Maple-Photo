// Maple Photo Imaging — centralized business content
// Replace [TODO] placeholders with real business info before launch.

export const BUSINESS = {
  name: "Maple Photo Imaging",
  tagline: "Professional ID photos for every journey.",
  address: "85 Ellesmere Rd, Scarborough, ON M1R 4B9",
  addressNote: "Located in Parkway Mall",
  phone: "(416) 391-0388",
  email: "[TODO: info@maplephotoimaging.ca]",
  googleMapsUrl: "https://maps.app.goo.gl/hvRoAXDqXbLjKkZk9",
  googleReviewsUrl: "https://g.page/r/", // TODO: Replace with real Google Business review link
  domain: "https://maplephotoimaging.ca",
  instagram: "", // TODO: Add if applicable
};

export const HOURS = [
  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM", open: true },
  { day: "Saturday", hours: "10:00 AM – 5:00 PM", open: true },
  { day: "Sunday", hours: "Closed", open: false },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book Now", href: "#booking" },
  { label: "Location", href: "#location" },
];

export interface Service {
  emoji: string;
  name: string;
  spec: string;
  note: string;
}

export const SERVICES: Service[] = [
  {
    emoji: "🇨🇦",
    name: "Canadian Passport",
    spec: "50mm × 70mm",
    note: "White background, IRCC compliant",
  },
  {
    emoji: "🇺🇸",
    name: "US Visa / Green Card",
    spec: '2" × 2"',
    note: "USCIS compliant format",
  },
  {
    emoji: "🍁",
    name: "PR Card / Citizenship",
    spec: "IRCC format",
    note: "Permanent Resident & citizenship photos",
  },
  {
    emoji: "🪪",
    name: "Ontario Driver's License",
    spec: "DriveTest approved",
    note: "MTO compliant specification",
  },
  {
    emoji: "🎓",
    name: "Student / School ID",
    spec: "Custom sizes",
    note: "University, college, and school IDs",
  },
  {
    emoji: "🌍",
    name: "International Passports",
    spec: "50+ countries",
    note: "Ask us for your country's format",
  },
];

export interface PricingTier {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
}

export const PRICING: PricingTier[] = [
  {
    name: "Print Only",
    price: "$21.99",
    description: "Essential passport photos",
    features: [
      "2 physical prints",
      "Same-day ready",
      "Government compliant",
      "Free retake guarantee",
    ],
    popular: false,
    cta: "Book Now",
  },
  {
    name: "Print + Digital",
    price: "$29.99",
    description: "Prints plus a digital copy",
    features: [
      "2 physical prints",
      "High-res digital file via email",
      "Same-day ready",
      "Free retake guarantee",
    ],
    popular: true,
    cta: "Book Now",
  },
  {
    name: "Family Bundle",
    price: "Contact Us",
    priceNote: "Group rate",
    description: "Best value for families",
    features: [
      "3+ people",
      "Discounted group rate",
      "All formats supported",
      "Free retake guarantee",
    ],
    popular: false,
    cta: "Call Us",
  },
];

export interface Review {
  quote: string;
  name: string;
  date: string;
  rating: number;
}

export const REVIEWS: Review[] = [
  {
    quote:
      "Fast, professional, and my photo was accepted first try! The staff knew exactly what was needed for my PR card application. Will definitely come back.",
    name: "Sarah T.",
    date: "March 2026",
    rating: 5,
  },
  {
    quote:
      "Very friendly staff and incredibly quick service. Got my US visa photos done in under 10 minutes. Great location and fair prices.",
    name: "Michael L.",
    date: "February 2026",
    rating: 5,
  },
  {
    quote:
      "Brought my 6-month-old in for passport photos — they were so patient and skilled with her. Got the perfect shot on the first try. Highly recommend!",
    name: "Jennifer K.",
    date: "January 2026",
    rating: 5,
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What should I wear for my passport photo?",
    answer:
      "Avoid white or very light tops — they can blend into the white background. Glasses are generally not permitted for most government IDs. Natural makeup is perfectly fine.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most appointments take 10–15 minutes from arrival to prints in hand. Walk-in sessions are similar — no long waits.",
  },
  {
    question: "Will my photo be accepted by the government?",
    answer:
      "Yes — we guarantee compliance with all applicable standards. If your photo is ever rejected, we retake it for free, no questions asked.",
  },
  {
    question: "Do you photograph children and infants?",
    answer:
      "Absolutely. We have plenty of experience with babies and young children and know how to get a clear, compliant shot quickly.",
  },
  {
    question: "Can I get a digital copy of my photo?",
    answer:
      "Yes, available in our Print + Digital package ($29.99). You receive a high-resolution digital file via email, perfect for online applications.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "No appointment is needed — walk-ins are always welcome during business hours. Book online if you'd prefer a guaranteed time slot and skip any potential wait.",
  },
];

export const TRUST_BADGES = [
  { icon: "✅", text: "Guaranteed accepted or retake free" },
  { icon: "✅", text: "Same-day prints" },
  { icon: "✅", text: "50+ country formats" },
];

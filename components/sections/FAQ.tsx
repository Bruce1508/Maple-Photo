"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-lg">
            Everything you need to know before your visit.
          </p>
        </div>

        {/* Accordion */}
        <div
          className="divide-y divide-border"
          role="list"
        >
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} role="listitem">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span
                    className={`font-medium text-sm sm:text-base transition-colors ${
                      isOpen ? "text-primary" : "text-text-primary"
                    } group-hover:text-primary`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? "bg-primary text-white"
                        : "bg-brand-bg text-text-secondary group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-48 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA below FAQ */}
        <div className="mt-12 bg-brand-bg rounded-2xl p-6 text-center border border-border">
          <p className="text-text-secondary text-sm mb-4">
            Still have questions? We&apos;re happy to help.
          </p>
          <a
            href="#location"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-primary-dark transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

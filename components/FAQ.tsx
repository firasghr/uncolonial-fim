"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Who can submit films?",
    answer:
      "Black, Indigenous, and People of Color (BiPoC) filmmakers only. All experience levels, all geographies. We do not accept submissions from white filmmakers.",
  },
  {
    question: "Is there a submission fee or screening fee?",
    answer:
      "No submission fee. We also don't pay screening fees — this is a grassroots festival with very limited resources.",
  },
  {
    question: "What lengths and formats are accepted?",
    answer: "Short films only, maximum 30 minutes. Features are not eligible.",
  },
  {
    question: "What languages do you accept?",
    answer:
      "Any language. English subtitles preferred but not required — contact us if you need translation support. We aim to provide translation for key events as capacity allows.",
  },
  {
    question: "Can I attend if I'm not BiPoC?",
    answer:
      "Yes. The festival screenings and events are open to everyone. Tickets support the infrastructure that centers BiPoC cinema.",
  },
  {
    question: "Is the venue accessible?",
    answer:
      "Accessibility is a priority. We'll share detailed venue accessibility information when the location is announced.",
  },
  {
    question: "Do you give awards?",
    answer:
      "No. We don't rank anticolonial work hierarchically. All selected films are equally valued.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="bg-black py-20 md:py-32 border-t border-white/10"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-brand-magenta text-xs font-bold tracking-[0.3em] uppercase">
            FAQ
          </span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: heading */}
          <div className="lg:col-span-1">
            <h2
              id="faq-heading"
              className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tightest text-brand-offwhite sticky top-24"
            >
              Frequently
              <br />
              <span className="text-brand-magenta">Asked.</span>
            </h2>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-2">
            <dl className="flex flex-col">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="border-b border-white/10">
                    <dt>
                      <button
                        className="w-full flex items-center justify-between gap-4 py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta"
                        onClick={() => toggle(idx)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${idx}`}
                        id={`faq-question-${idx}`}
                      >
                        <span
                          className={`font-bold text-base md:text-lg transition-colors duration-150 ${
                            isOpen
                              ? "text-brand-magenta"
                              : "text-brand-offwhite group-hover:text-brand-magenta"
                          }`}
                        >
                          {faq.question}
                        </span>
                        <span
                          className={`shrink-0 text-brand-magenta text-xl font-light transition-transform duration-200 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </button>
                    </dt>
                    <dd
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-96 pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-brand-grey text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

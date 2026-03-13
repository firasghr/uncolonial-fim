"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Who can submit a film?",
    answer:
      "BiPoC (Black, Indigenous, and People of Colour) filmmakers worldwide are invited to submit. There are no geographic restrictions — we welcome films from any country.",
  },
  {
    question: "Is there a submission fee?",
    answer:
      "No. Submissions are completely free. We believe financial barriers should never stand between a filmmaker and their audience. The festival will remain free to submit to.",
  },
  {
    question: "What formats and lengths are accepted?",
    answer:
      "We accept short films under 30 minutes. All genres are welcome — documentary, fiction, experimental, animation. We encourage work that refuses conventional frameworks.",
  },
  {
    question: "When is the submission deadline?",
    answer:
      "The submission deadline is Late April 2026. We recommend submitting early. All submissions are reviewed by our programming team.",
  },
  {
    question: "Where and when is the festival?",
    answer:
      "The UN•COLONIAL FILM FESTIVAL takes place in Münster, Germany in August 2026. Exact dates and venue will be announced in Spring 2026.",
  },
  {
    question: "How are films selected?",
    answer:
      "Films are selected by our programming team, which is composed entirely of BiPoC filmmakers, critics, and community members. We prioritise work that confronts colonial frameworks.",
  },
  {
    question: "Is the festival free to attend?",
    answer:
      "Yes. The festival is free and open to the public. We are funded entirely through donations — no state or corporate influence — so we can keep access barrier-free.",
  },
  {
    question: "Who organises the festival?",
    answer:
      "The festival is organised by the BiPoC Referat at the AStA Universität Münster. We are a student-led, community-driven initiative with no institutional agenda.",
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
                        isOpen ? "max-h-48 pb-5" : "max-h-0"
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

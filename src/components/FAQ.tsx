"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Hogyan tudok időpontot foglalni?",
    a: "Időpontot Instagram DM-ben (@mintaanna_sminkes) vagy emailben tudsz foglalni. Menyasszonyi sminkhez legalább 1-2 hónappal előre javaslom a foglalást, hogy a próbasminkre is jusson idő.",
  },
  {
    q: "Hol készülnek a sminkek?",
    a: "Városodban egyaránt dolgozom. Menyasszonyi smink esetén helyszínre is kiszállok — a pontos feltételeket a foglaláskor egyeztetjük.",
  },
  {
    q: "Mennyi ideig tart egy smink?",
    a: "Egy nappali smink kb. 45-60 perc, alkalmi smink 60-75 perc, menyasszonyi smink próbával és kész sminkkel együtt 2-3 órás élmény.",
  },
  {
    q: "Kell-e próbasmink a menyasszonyi sminkhez?",
    a: "Erősen javaslom. A próbasmink során kiderül, milyen stílust és színeket szeretnél, így az esküvő napján már nyugodtan készülhetsz. A próbasmink díja külön, de nagyban növeli a komfortérzetet.",
  },
  {
    q: "Milyen kozmetikumokkal dolgozol?",
    a: "Kizárólag professzionális, hosszan tartó és bőrbarát termékekkel dolgozom. Érzékeny bőrre is van megoldásom — kérlek, előre jelezd, ha allergia vagy különleges bőrprobléma van.",
  },
  {
    q: "Mit tegyek a smink előtt?",
    a: "Érkezz tiszta, hidratált arccal és mosott hajjal. Ha szempilla vagy szemöldök festést szeretnél, azt pár nappal előtte végeztesd el. Kerüld a vastag arckrémet közvetlenül a smink előtt.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gyik" className="py-24 sm:py-32 bg-surface-alt relative">
      <div className="absolute inset-0 dot-grid opacity-[0.12] -z-10" />

      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14 max-w-xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              GYIK
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Gyakran ismételt{" "}
              <span className="text-highlight">kérdések</span>
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div
                className={`rounded-2xl border bg-surface-card overflow-hidden transition-all duration-200 ${
                  openIndex === i ? "border-primary/20 shadow-md" : "border-border hover:border-primary/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-7 py-5 text-left cursor-pointer"
                >
                  <span className="font-heading text-[1.05rem] font-semibold text-foreground pr-4 tracking-[-0.01em]">
                    {faq.q}
                  </span>
                  <div
                    className={`shrink-0 h-7 w-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      openIndex === i ? "bg-primary/10 text-primary rotate-180" : "bg-surface text-foreground-muted"
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
                {openIndex === i && (
                  <div className="px-7 pb-6">
                    <p className="text-[0.95rem] text-foreground-secondary leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

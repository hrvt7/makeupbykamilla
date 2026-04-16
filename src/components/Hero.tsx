"use client";

import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background — brushes illustration on dark forest green */}
      <div className="absolute inset-0 -z-20">
        {/* Mobile: portrait image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-bg-mobile-v2.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover lg:hidden"
        />
        {/* Desktop: landscape image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-bg-desktop-v2.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover hidden lg:block"
        />
        {/* Subtle dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D1F2E]/70 via-[#3D1F2E]/40 to-transparent hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D1F2E]/60 via-[#3D1F2E]/30 to-[#3D1F2E]/60 lg:hidden" />
        {/* Bottom fade — blends into the Services section (surface-alt: #F5E8E8) */}
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 lg:h-56 bg-gradient-to-b from-transparent via-[#F5E8E8]/60 to-[#F5E8E8] pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — text (on dark forest green background, white text) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <FadeIn>
              <p className="text-sm font-semibold text-[#E8D4D4] uppercase tracking-wider mb-4">
                Sminkes — Város &amp; Környék
              </p>
              <h1
                className="font-heading font-extrabold leading-[1.08] tracking-[-0.03em] text-white drop-shadow-sm"
                style={{ fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)" }}
              >
                Természetes szépség,{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">maradandó élmény.</span>
                  <span className="absolute inset-x-0 bottom-1 h-[0.35em] bg-[#B88C8C]/40 -z-0" aria-hidden="true" />
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mt-7 text-lg leading-relaxed text-[#E5DDD3] max-w-[540px] mx-auto lg:mx-0">
                Menyasszonyi, alkalmi, nappali és fotó smink profi kivitelben.
                Professzionális termékekkel, személyre szabott stílussal — Városodban.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#B88C8C] hover:bg-[#9A6E6E] px-8 py-4 text-[1rem] font-bold text-white shadow-xl shadow-black/30 transition-all hover:scale-[1.02] whitespace-nowrap cursor-pointer"
                >
                  Időpontfoglalás
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a
                  href="#szolgaltatasok"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-white/40 bg-white/5 backdrop-blur-sm px-8 py-4 text-[1rem] font-bold text-white hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Szolgáltatások
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right — profile card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn direction="right" delay={0.2}>
              <div className="relative max-w-[320px]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 transform rotate-2 scale-[1.02] -z-10" />
                <div className="rounded-3xl bg-surface-card border border-white/20 shadow-2xl shadow-black/40 overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-all duration-500">
                  <div className="aspect-square overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/hero-kamilla.webp"
                      alt="Minta Anna sminkes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-heading font-bold text-foreground text-base">Minta Anna</h3>
                    <p className="text-xs text-foreground-muted mt-0.5">Sminkes — Város &amp; Környék</p>
                    <a
                      href="https://www.instagram.com/mintaanna_sminkes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary/8 text-primary font-bold text-xs py-2.5 mt-3 hover:bg-primary/15 transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      @mintaanna_sminkes
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

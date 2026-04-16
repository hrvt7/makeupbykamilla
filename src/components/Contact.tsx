"use client";

import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="kapcsolat" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-light/30 via-surface to-primary-light/20" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14 max-w-xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Kapcsolat
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Írj{" "}
              <span className="text-highlight">bátran!</span>
            </h2>
            <p className="mt-4 text-foreground-secondary text-lg">
              Időpontot Instagram DM-ben vagy emailben tudsz foglalni.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — contact info */}
          <FadeIn direction="left">
            <div className="space-y-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/mintaanna_sminkes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-border bg-surface-card p-6 hover:border-primary/25 hover:shadow-md transition-all group"
              >
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br from-[#E1306C] via-[#C13584] to-[#833AB4] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-heading font-bold text-foreground text-base mb-1">Instagram DM</p>
                  <p className="text-sm text-primary font-semibold">@mintaanna_sminkes</p>
                  <p className="text-xs text-foreground-muted mt-1.5">A leggyorsabb módja az időpont-egyeztetésnek.</p>
                </div>
                <svg className="shrink-0 text-foreground-muted group-hover:text-primary transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@mintaanna.hu"
                className="flex items-start gap-4 rounded-2xl border border-border bg-surface-card p-6 hover:border-primary/25 hover:shadow-md transition-all group"
              >
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-heading font-bold text-foreground text-base mb-1">Email</p>
                  <p className="text-sm text-primary font-semibold">hello@mintaanna.hu</p>
                  <p className="text-xs text-foreground-muted mt-1.5">Hosszabb egyeztetéshez, részletes kérdésekhez.</p>
                </div>
                <svg className="shrink-0 text-foreground-muted group-hover:text-primary transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>

              {/* Location */}
              <div className="rounded-2xl border border-border bg-surface-card p-6">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-base mb-1">Helyszínek</p>
                    <p className="text-sm text-foreground-secondary">Város &amp; Környék</p>
                    <p className="text-xs text-foreground-muted mt-1.5">
                      Menyasszonyi smink: helyszínre szállás a környéken.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — map */}
          <FadeIn direction="right" delay={0.15}>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-surface-card h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=Budapest,Hungary&z=12&hl=hu&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sminkes — helyszín"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

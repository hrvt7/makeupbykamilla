import FadeIn from "./FadeIn";

const schedule = [
  { day: "Hétfő – Péntek", hours: "Egyeztetés alapján", note: "korán reggeltől estig" },
  { day: "Szombat", hours: "Egyeztetés alapján", note: "menyasszonyi sminkek" },
  { day: "Vasárnap", hours: "Igény szerint", note: "különleges alkalmak" },
];

export default function Schedule() {
  return (
    <section id="idopont" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 dot-grid opacity-[0.15] -z-10" />

      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14 max-w-xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Időpontfoglalás
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Mikor{" "}
              <span className="text-highlight">érsz rám?</span>
            </h2>
            <p className="mt-4 text-foreground-secondary text-lg">
              Rugalmasan dolgozom — Városodban, a környéken és helyszínre szállva.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="rounded-2xl border border-border bg-surface-card shadow-lg overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-primary/5 px-6 py-3.5 text-xs font-bold text-primary uppercase tracking-wider border-b border-border">
              <span>Nap</span>
              <span className="text-center">Elérhetőség</span>
              <span className="text-right">Megjegyzés</span>
            </div>

            {/* Table rows */}
            {schedule.map((row) => (
              <div
                key={row.day}
                className="grid grid-cols-3 px-6 py-4 border-b border-border-light last:border-0 hover:bg-surface-alt/50 transition-colors"
              >
                <span className="font-heading font-semibold text-foreground text-sm">{row.day}</span>
                <span className="text-center text-sm text-foreground-secondary font-medium">{row.hours}</span>
                <span className="text-right text-sm text-foreground-muted">{row.note}</span>
              </div>
            ))}

            {/* Footer note */}
            <div className="px-6 py-4 bg-surface-alt/50 border-t border-border">
              <p className="text-xs text-foreground-muted leading-relaxed">
                Menyasszonyi sminkhez legalább 1-2 hónappal előre érdemes foglalni.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.24}>
          <div className="mt-8 space-y-4 text-center">
            <a
              href="#kapcsolat"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-accent px-8 py-4 text-[1rem] font-bold text-white shadow-lg shadow-accent/20 cta-glow cursor-pointer"
            >
              Időpont egyeztetése
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <p className="text-sm text-foreground-muted">
              Írj Instagram DM-ben vagy emailben — hamarosan jelentkezem.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

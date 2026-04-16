import FadeIn from "./FadeIn";

interface ServicePageProps {
  title: string;
  subtitle: string;
  gradient: string;
  image?: string;
  sections: { heading: string; text: string }[];
  relatedServices: { title: string; href: string }[];
}

export default function ServicePage({ title, subtitle, gradient, image, sections, relatedServices }: ServicePageProps) {
  return (
    <>
      {/* Hero area */}
      <section className="relative pt-28 sm:pt-36 overflow-hidden">
        <div className={`absolute inset-0 -z-20 bg-gradient-to-br ${gradient}`} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-surface" />

        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 sm:pb-14">
          <div className={image ? "grid lg:grid-cols-5 gap-8 lg:gap-12 items-center" : ""}>
            <div className={image ? "lg:col-span-3" : ""}>
              <FadeIn>
                <a href="/#szolgaltatasok" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary-dark transition-colors mb-5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  Vissza a szolgáltatásokhoz
                </a>
                <h1 className="font-heading font-extrabold tracking-[-0.03em] text-foreground leading-tight" style={{ fontSize: "clamp(2rem, 4vw + 0.5rem, 3rem)" }}>
                  {title}
                </h1>
                <p className="mt-4 text-lg text-foreground-secondary leading-relaxed max-w-2xl">{subtitle}</p>
              </FadeIn>
            </div>
            {image && (
              <div className="lg:col-span-2 flex justify-center lg:justify-end">
                <FadeIn direction="right" delay={0.15}>
                  <div className="relative max-w-[360px] w-full">
                    <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={image} alt={title} className="w-full h-auto object-cover" />
                    </div>
                  </div>
                </FadeIn>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <FadeIn key={section.heading} delay={i * 0.1}>
                <div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground tracking-[-0.02em] mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-foreground-secondary leading-[1.8] text-[0.95rem]">
                    {section.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA */}
          <FadeIn delay={0.3}>
            <div className="mt-12 rounded-2xl bg-primary/5 border border-primary/10 p-6 sm:p-8">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Foglalj időpontot</h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Írj Instagram DM-ben vagy emailben, és hamarosan jelentkezem.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.instagram.com/mintaanna_sminkes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/20 cta-glow"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram DM
                </a>
                <a
                  href="mailto:hello@mintaanna.hu"
                  className="inline-flex items-center gap-2.5 rounded-xl border-2 border-primary/20 px-6 py-3.5 text-sm font-bold text-primary hover:bg-primary/5 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email küldése
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Related services */}
          <FadeIn delay={0.2}>
            <div className="mt-12 rounded-2xl border border-border bg-surface-card p-6">
              <h3 className="font-heading font-bold text-foreground text-sm mb-4">További szolgáltatások</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {relatedServices.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary transition-colors py-2"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

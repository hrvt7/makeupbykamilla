import FadeIn from "./FadeIn";

const benefits = [
  {
    title: "Személyre szabott",
    desc: "Minden smink a te arcodra, bőrszínedre és stílusodra készül. Nincs sablon — csak te és az alkalom.",
    image: "/images/about-szemelyre.webp",
  },
  {
    title: "Professzionális termékek",
    desc: "Hosszan tartó, HD kamerára optimalizált, bőrbarát kozmetikumokkal dolgozom — érzékeny bőrre is.",
    image: "/images/about-termekek.webp",
  },
  {
    title: "Helyszínre kiszállás",
    desc: "Menyasszonyi smink esetén Város és Környék környékén a szállásra, esküvői helyszínre is érkezem.",
    image: "/images/about-helyszin.webp",
  },
  {
    title: "Nyugodt légkör",
    desc: "A készülődés maga is élmény: zene, kávé, pletyka — és közben professzionális munka minden pillanatban.",
    image: "/images/about-nyugodt.webp",
  },
];

export default function About() {
  return (
    <section id="rolam" className="py-24 sm:py-32 bg-surface-alt relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Rólam
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Miért{" "}
              <span className="text-highlight">válassz engem?</span>
            </h2>
            <p className="mt-6 text-lg text-foreground-secondary leading-relaxed max-w-xl mx-auto">
              Minta Anna vagyok — szenvedélyes sminkes a környékről.
              A célom, hogy minden vendégem önmagához hű, magabiztos és gyönyörű legyen.
            </p>
            <p className="mt-4 text-foreground-muted leading-relaxed max-w-xl mx-auto">
              A smink számomra nem csak szakma, hanem művészet és kapcsolódás.
              Hiszem, hogy a jó smink nem elrejti a vonásaidat, hanem kiemeli azokat.
              Minden alkalomra személyre szabott stílust hozok, legyen szó esküvőről,
              fotózásról vagy egy nappali frissítésről.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {benefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-surface-card overflow-hidden card-hover group h-full">
                {/* Visual */}
                <div className="h-52 sm:h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                {/* Text */}
                <div className="p-5 lg:p-6">
                  <h3 className="font-heading text-base font-bold text-foreground mb-2 tracking-[-0.01em]">
                    {benefit.title}
                  </h3>
                  <p className="text-[0.85rem] text-foreground-muted leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

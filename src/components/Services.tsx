"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const services = [
  {
    title: "Menyasszonyi smink",
    href: "/menyasszonyi-smink",
    short: "Ragyogó, egész napig tartó smink életed legszebb napjára.",
    detail: "A menyasszonyi smink egy személyre szabott alkotási folyamat — próbasmink keretében közösen megtaláljuk azt a stílust és színvilágot, amely kiemeli a természetes szépségedet. HD alapanyagokkal, vízálló szempillával és hosszan tartó rögzítéssel dolgozom, hogy a smink a ceremónia, a fotózás és a buli végéig is kifogástalan maradjon. Helyszínre szállás Város és Környék környékén lehetséges.",
    image: "/images/service-menyasszonyi.webp",
  },
  {
    title: "Alkalmi smink",
    href: "/alkalmi-smink",
    short: "Elegáns smink céges rendezvényre, esküvőre, ünnepségre.",
    detail: "Legyen szó koszorúslányi megbízatásról, céges gálavacsoráról, keresztelőről vagy születésnapról — az alkalmi smink célja, hogy magabiztos és csillogó legyél. Az általad hozott ruha és alkalom stílusához igazodva készítem el a sminket, figyelve arra, hogy az fotókon is jól mutasson.",
    image: "/images/service-alkalmi.webp",
  },
  {
    title: "Nappali smink",
    href: "/nappali-smink",
    short: "Természetes, friss megjelenés hétköznapra vagy fontos találkozóra.",
    detail: "A nappali smink a mindennapok diszkrét eleganciája: puha tónusok, hibátlan alapozás, finom kontúr és természetes ajak. Ideális üzleti találkozóra, randira, ebédre a barátnőkkel vagy egy különleges hétköznapra. Tanítom is a technikát, ha szeretnél otthon is magabiztosan kisminkelni.",
    image: "/images/service-nappali.webp",
  },
  {
    title: "Fotó smink",
    href: "/foto-smink",
    short: "Kamerára optimalizált smink portré-, divat- és terhes fotózáshoz.",
    detail: "A fotó smink különleges technikát igényel — a kamera érzékenyebb, mint a szabad szem, így az árnyalás, a highlight és a kontúrozás is intenzívebb. Portré, divat, terhes-, családi- vagy influencer-fotózásra dolgozom fotósokkal és magán megrendelőkkel. A smink mattosítva készül, hogy a vakufényben se csillogjon.",
    image: "/images/service-foto.webp",
  },
  {
    title: "Érettségi & bál smink",
    href: "/erettsegi-bal-smink",
    short: "Egyedi smink az életed egyik legemlékezetesebb napjára.",
    detail: "Szalagavató, ballagás, érettségi bál — ezek azok a napok, amikor szeretnél felnőttnek látszani, de mégis önmagad maradni. A tinédzser bőrre szabott, nem túlzsúfolt, de látványos sminket készítek, amely a fotókon is remekül mutat és estig kitart a táncparketten.",
    image: "/images/service-erettsegi.webp",
  },
  {
    title: "Próbasmink",
    href: "/probasmink",
    short: "Nyugodt közös tervezés a nagy nap sminkjéhez.",
    detail: "A próbasmink elengedhetetlen része a menyasszonyi és fontosabb alkalmi sminkeknek. 60-90 percben közösen megtaláljuk a nekedvaló tónusokat, szemhéjárnyékolást, ajakszínt. Fotózzuk és jegyzeteljük a receptet, hogy a nagy napon már minden a helyén legyen. Érdemes 3-6 héttel az alkalom előtt időzíteni.",
    image: "/images/service-probasmink.webp",
  },
];

/* ── Desktop: expandable card ── */
function DesktopCard({ service, index }: { service: typeof services[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.05}>
      <div
        className={`rounded-2xl border bg-surface-card overflow-hidden transition-all duration-300 group cursor-pointer ${
          open ? "border-primary/25 shadow-lg h-[480px]" : "border-border hover:border-primary/15 card-hover h-[120px]"
        }`}
        onClick={() => setOpen(!open)}
      >
        {/* Header — always visible */}
        <div className="p-4 lg:p-5 h-[120px] flex items-center gap-4">
          <div className={`h-14 w-14 shrink-0 rounded-2xl overflow-hidden transition-all duration-300 ${
            open ? "ring-2 ring-primary/30" : "ring-1 ring-border"
          }`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-heading text-[1rem] font-bold text-foreground tracking-[-0.01em] leading-tight">
                {service.title}
              </h3>
              <div className={`shrink-0 h-6 w-6 rounded-md flex items-center justify-center transition-all duration-300 ${
                open ? "bg-primary/10 text-primary rotate-180" : "bg-surface-warm text-foreground-muted"
              }`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-foreground-muted leading-relaxed mt-1 line-clamp-2">{service.short}</p>
          </div>
        </div>

        {/* Expanded content */}
        {open && (
          <div className="px-4 lg:px-5 pb-5 h-[360px] flex flex-col">
            <div className="border-t border-border-light pt-4 flex flex-col flex-1">
              <div className="mb-3 rounded-xl overflow-hidden shrink-0 h-[150px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="text-[0.85rem] text-foreground-secondary leading-[1.7] line-clamp-5 flex-1">{service.detail}</p>
              <a
                href={service.href}
                className="inline-flex items-center gap-2 mt-3 rounded-lg bg-primary/8 px-4 py-2.5 text-sm font-bold text-primary hover:bg-primary/15 transition-colors shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                Részletek megtekintése
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </FadeIn>
  );
}

/* ── Mobile: simple card → links to subpage ── */
function MobileCard({ service, index }: { service: typeof services[number]; index: number }) {
  return (
    <FadeIn delay={index * 0.04}>
      <a
        href={service.href}
        className="flex flex-col rounded-xl border border-border bg-surface-card overflow-hidden card-hover group w-full"
      >
        <div className="w-full aspect-square overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="px-2 py-2.5 text-center h-[3rem] flex items-center justify-center">
          <h3 className="font-heading text-[0.7rem] font-bold text-foreground tracking-[-0.01em] leading-tight line-clamp-2">
            {service.title}
          </h3>
        </div>
      </a>
    </FadeIn>
  );
}

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-24 sm:py-32 bg-surface-alt relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Szolgáltatások
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Sminkek minden{" "}
              <span className="text-highlight">alkalomra</span>
            </h2>
            <p className="mt-4 text-foreground-secondary text-base sm:text-lg leading-relaxed">
              A menyasszonyi sminktől a fotózáson át a nappali sminkig — mindig személyre szabva.
            </p>
          </div>
        </FadeIn>

        {/* Mobile: 3-col grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:hidden">
          {services.map((service, i) => (
            <div key={service.title} className="w-[calc(33.333%-0.5rem)]">
              <MobileCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* Desktop: expandable 2-col cards */}
        <div className="hidden sm:flex sm:flex-wrap sm:justify-center gap-4 lg:gap-5 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <div key={service.title} className="w-[calc(50%-0.625rem)]">
              <DesktopCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Fotó smink Városodban — Makeup by Anna",
  description: "Fotó smink portré-, divat- és terhes fotózáshoz Városodban. Kamerára optimalizált, HD termékek. Minta Anna sminkes.",
  alternates: { canonical: "https://makeupbykamilla.vercel.app/foto-smink" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fotó smink",
  description: "Kamerára optimalizált smink portré-, divat-, terhes- és családi fotózáshoz.",
  provider: { "@id": "https://makeupbykamilla.vercel.app/#business" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ServicePage
        title="Fotó smink — a kamera kedvence"
        subtitle="A kamerára optimalizált smink más, mint a szemnek szánt. HD alapozás, precíz kontúr, mattosított bőr — hogy minden fotón tökéletes legyél."
        gradient="from-[#BE9B9B] via-[#D1B1B1] to-[#E6C9C9]"
        image="/images/service-foto.webp"
        sections={[
          {
            heading: "Miért más a fotó smink?",
            text: "A kamera könyörtelenebb, mint a szem. Látja a legkisebb tökéletlenséget is, pedig a szabad szem ezeket elsiklik. Ugyanakkor a fény — különösen a vakufény vagy a stúdió softbox — eltünteti az árnyalást, 'laposra mossa' az arcot. Ezért a fotó smink intenzívebb a megszokottnál: erősebb kontúr, jobban hangsúlyozott szemöldök, precízen árnyalt szemhéj, mattosított bőr (a fényes bőr a kamerán izzadtnak tűnik). A cél, hogy a kész fotón természetesnek és ragyogónak tűnj — nem pedig a smink maga legyen a főszereplő.",
          },
          {
            heading: "Milyen fotózáshoz dolgozom?",
            text: "Portré-fotózás — üzleti, LinkedIn, személyes branding. Divatfotózás — kiadványokhoz, webshopokhoz, saját projektekhez. Terhes- és családi fotózás — lágyabb, érzelmesebb tónusokkal. Influencer- és content-fotózás — social media feed és video egyaránt. Modell comp card / portfólió shooting. Cover, magazin, reklámkampány. Esküvői fotózás (külön a menyasszonyi sminktől, ha csak a fotózásra van smink).",
          },
          {
            heading: "Együttműködés fotósokkal",
            text: "Szívesen dolgozom együtt fotósokkal — a közös nyelv, a gyors tempó és a stílusbeli ráhangolódás mindkettőnknek segít. Ha van preferált fotós csapatod, megyek a shoot helyszínére, hozom az asszisztenseket (igény szerint), és retus-mentén is dolgozom, hogy a fotós ne töltse a gépidejét a smink utóutózásával. Visszatérő partnereknél kedvezmény.",
          },
          {
            heading: "Mit hozz magaddal a fotózásra?",
            text: "Tiszta, hidratált bőr (smink nélkül érkezz). Ha több ruhaváltás lesz: tartsd a hajon lévő szerkezetet. Saját ajakrúzs vagy kedvenc termék (ha van ragaszkodás). Szempilla applikáció 1-2 nappal korábban, ha extra hosszú effektet szeretnél. Inspirációs képek — de fontos, hogy a modell arcformája és bőrtípusa hasonló legyen a tiedhez, különben félrevezető lehet.",
          },
          {
            heading: "Árak és foglalás",
            text: "A fotó smink díja a shoot hosszától, a változtatások számától és a helyszíntől függ. Fotósoknak visszatérő-árazás, stúdióknak keretszerződés. Írj DM-ben vagy emailben, és küldj rövid briefet a projektről — részletes árajánlatot küldök.",
          },
        ]}
        relatedServices={[
          { title: "Menyasszonyi smink", href: "/menyasszonyi-smink" },
          { title: "Alkalmi smink", href: "/alkalmi-smink" },
          { title: "Nappali smink", href: "/nappali-smink" },
          { title: "Érettségi & bál smink", href: "/erettsegi-bal-smink" },
        ]}
      />
    </>
  );
}

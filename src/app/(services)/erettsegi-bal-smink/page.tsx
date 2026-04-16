import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Érettségi és bál smink Városodban — Makeup by Anna",
  description: "Érettségi, szalagavató, bál smink Városodban. Fiatalos, estig kitartó, fotózáson is gyönyörű. Minta Anna sminkes.",
  alternates: { canonical: "https://makeupbykamilla.vercel.app/erettsegi-bal-smink" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Érettségi és bál smink",
  description: "Szalagavató, ballagás, érettségi bál, gála smink tizenéves bőrre szabva.",
  provider: { "@id": "https://makeupbykamilla.vercel.app/#business" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ServicePage
        title="Érettségi és bál smink — felnőtt pillanatok"
        subtitle="Szalagavató, ballagás, érettségi bál, gála — életed egyik legemlékezetesebb napjára egyedi, fotózáson is ragyogó smink."
        gradient="from-[#D4AFAF] via-[#E2C5C5] to-[#F0DBDB]"
        image="/images/service-erettsegi.webp"
        sections={[
          {
            heading: "Miért különleges a tinédzser smink?",
            text: "A tizenéves bőr más, mint a felnőtté — érzékenyebb, gyakran hajlamos a pattanásosságra, a pórus-problémákra, a hormonális ingadozásra. Ezért a sminkelésnél kiemelt figyelmet kap a bőrápolás, a megfelelő alapozás és a nem-comedogen termékek használata. Nem jó, ha a smink ráterhel a már amúgy is érzékeny bőrre. Ugyanakkor a fiatal bőr ragyogó és rugalmas — ezt kell kiemelni, nem elrejteni. A cél: felnőttes, de nem öregítő; ünnepi, de nem túlzó; fotózáson gyönyörű, de a 'valódi te' maradsz.",
          },
          {
            heading: "Stílusok szalagavatóra és érettségire",
            text: "Klasszikus szalagavató: finom highlight, puha szemhéjárnyékolás, rózsaszín-bíboros ajak. Szexi, ha a ruhádhoz illik. Modern hercegnő: csillogó szem, világos ajak, sok fény. Álomszerű, mesés. Merész gála: matt bőr, smokey szem, piros ajak. Ha Pinterest-en 'Old Hollywood' jön be. Fiatalos friss: természetes bőr, mascara, barackos arcpír. A 'jó napom van' változat. Rock: eyeliner wing, burgundi ajak, sötétebb szemhéj. Egyedi, bátor.",
          },
          {
            heading: "Hogyan készülj rá?",
            text: "Érkezz tiszta, smink nélküli, hidratált arccal. Frissen mosott haj — szárazon vagy félig szárazon. Ha szempilla applikáció kell, azt 1-2 nappal előtte érdemes megcsináltatni. Hozz magaddal egy tükröt (kicsi hordozható), amit a táskában tarthatsz, és egy ajakrúzst a retushoz. Ha kontaktlencsét viselsz, tedd fel a smink előtt. Egyél valamit a smink előtt — 2-3 óra, amíg dolgozunk, nem rövid.",
          },
          {
            heading: "Meddig tart ki?",
            text: "A smink 10-14 órán át viseli magát normál körülmények között. A keringő, a fotózás, a vacsora, a tánc után is kifogástalan marad — legfeljebb az ajkon érdemes egy-két alkalommal utántölteni. Ha a bál nyári időszakban van, a mattosító port a táskádba teszem, és megmutatom, hogyan használd.",
          },
          {
            heading: "Árak és csoportos foglalás",
            text: "Érettségi/bál szezonban (április–május és szeptember–november) érdemes minél előbb foglalni, mert a szombati időpontok gyorsan betelnek. Csoportos foglalás (osztálytársakkal, barátnőkkel) kedvezményes árazással — közös napon érkeztek, külön-külön dolgozom mindenkivel. Írj DM-ben, és küldd el, hány fő és milyen napon szeretnétek — összerakjuk a menetrendet.",
          },
        ]}
        relatedServices={[
          { title: "Alkalmi smink", href: "/alkalmi-smink" },
          { title: "Menyasszonyi smink", href: "/menyasszonyi-smink" },
          { title: "Fotó smink", href: "/foto-smink" },
          { title: "Nappali smink", href: "/nappali-smink" },
        ]}
      />
    </>
  );
}

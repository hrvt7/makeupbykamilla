import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Próbasmink Városodban — Makeup by Anna",
  description: "Próbasmink menyasszonyoknak és fontos alkalmakra Városodban. Közös tervezés, fotózás, jegyzetelés — magabiztosság a nagy napra. Minta Anna sminkes.",
  alternates: { canonical: "https://makeupbykamilla.vercel.app/probasmink" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Próbasmink",
  description: "Közös smink tervezés a menyasszonyi és fontos alkalmi sminkek előtt.",
  provider: { "@id": "https://makeupbykamilla.vercel.app/#business" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ServicePage
        title="Próbasmink — tervezz nyugodtan a nagy napra"
        subtitle="60-90 percben közösen megtaláljuk az ideális sminket, fotózzuk, jegyzeteljük — hogy a nagy napon már minden rutin legyen."
        gradient="from-[#CFB5B5] via-[#DEC9C9] to-[#EDDFDF]"
        image="/images/service-probasmink.webp"
        sections={[
          {
            heading: "Miért elengedhetetlen a próbasmink?",
            text: "Egyszerűen: a nagy nap nem az a pillanat, amikor először meg akarod nézni magad a tervezett sminkkel. A próbasmink nyugalmat ad — tudod, hogy ami a tükörből néz vissza rád, ismerős és jó. Nem lesz kellemetlen meglepetés: 'mégse úgy néz ki, mint ahogy képzeltem', 'túl erős a szemhéjam', 'ez a szín nem áll hozzám'. Mindezt a próbán megbeszéljük, módosítjuk, fotózzuk — és a végén lesz egy konkrét terv, amit a nagy napon csak végrehajtunk.",
          },
          {
            heading: "Hogyan zajlik egy próbasmink?",
            text: "Első 10-15 perc: beszélgetés. Mi az alkalom? Milyen stílust képzelsz? Milyen ruhát, hajat tervezel? Van inspirációs képed? Van allergiád, érzékeny bőröd, probléma? Tisztítás és bőrápolás: a sminkelés előtt mindig frissítjük a bőrt. Ha szükséges, extra hidratálást, primert adunk. Alapozás: itt kezdődik a 'munka'. Közben beszélünk arról, mit érzel, mi tetszik. Szemhéj és szem: 2-3 változatban is kipróbálunk — semlegesebb, intenzívebb, csillogóbb. Kontúr, highlight, arcpír: az arcformához illeszkedve. Ajak: 2-3 árnyalat is lehetséges. Fotózás: természetes fény, vakufény, fényben és árnyékban is. A fotók döntenek. Jegyzetelés: konkrét termékek, technikák, rétegek. Ez a 'recept' a nagy napra.",
          },
          {
            heading: "Mikor érdemes próbasmint kérni?",
            text: "Menyasszonyi smink előtt: 4-6 héttel az esküvő előtt ideális. Elég korán ahhoz, hogy ha valami nem tetszik, legyen idő módosítani, és elég közel, hogy a hangulat már az esküvői legyen. Fontos alkalmi smink előtt (nagyobb rendezvény, díjátadó, TV szereplés): 1-2 héttel előre. Érettségi bál előtt: 1-2 héttel, hogy ne stresszelj a hét utolsó napjaiban. Fotózás előtt: ha kiemelten fontos projekt, kisebb teszt sminket szívesen csinálok 1-2 nappal előtte vagy aznap reggel.",
          },
          {
            heading: "Mit hozz magaddal?",
            text: "Inspirációs képeket, de olyanokat, ahol az arcforma hasonló a tiedhez. Ruha színét, anyagát — ha lehet, egy kis mintát. Tervezett haj stílusát (fotó, vagy hasonló). A helyszín jellegét, az alkalom idejét, hosszát. Allergia-, érzékenység-információt. Ha van kedvenc termékel, amit szeretnél, hogy használjak — hozd el. Nyitott szívet és kritikus szemet — mondd el, ha valami nem tetszik. Jobb most, mint a nagy napon.",
          },
          {
            heading: "Árak és beszámítás",
            text: "A próbasmink díja külön tétel, de sok csomagban a menyasszonyi smink árába részben beszámításra kerül. Pontos információt DM-ben adok. Foglaláskor az előleg esedékes, ez biztosítja az időpontodat.",
          },
        ]}
        relatedServices={[
          { title: "Menyasszonyi smink", href: "/menyasszonyi-smink" },
          { title: "Alkalmi smink", href: "/alkalmi-smink" },
          { title: "Érettségi & bál smink", href: "/erettsegi-bal-smink" },
          { title: "Fotó smink", href: "/foto-smink" },
        ]}
      />
    </>
  );
}

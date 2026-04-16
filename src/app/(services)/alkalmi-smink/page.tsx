import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Alkalmi smink Városodban — Makeup by Anna",
  description: "Alkalmi smink Városodban — céges rendezvényre, esküvői vendégnek, ünnepségre. Tartós, hibátlan, fotózáson is gyönyörű. Minta Anna sminkes.",
  alternates: { canonical: "https://sminkes-minta.vercel.app/alkalmi-smink" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Alkalmi smink",
  description: "Alkalmi smink céges rendezvényre, esküvői vendégeknek, koszorúslányoknak, ünnepségekre.",
  provider: { "@id": "https://sminkes-minta.vercel.app/#business" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ServicePage
        title="Alkalmi smink — legyen minden pillanat tökéletes"
        subtitle="Céges rendezvény, esküvői vendég, koszorúslány, keresztelő, ünnepség — az alkalmi smink célja, hogy magabiztos és csillogó legyél."
        gradient="from-[#C9A7A7] via-[#D9BCBC] to-[#EFD5D5]"
        image="/images/service-alkalmi.webp"
        sections={[
          {
            heading: "Mikor érdemes alkalmi sminket kérni?",
            text: "Mindig, amikor szeretnéd, hogy fotókra kerülj, és ne csak 'jól' nézz ki, hanem tényleg észrevegyenek. Tipikus alkalmak: céges gálavacsora, díjátadó, networking event, koszorúslányi megbízatás, esküvői vendégség, keresztelő, konfirmáció, születésnap, évforduló, színházi bemutató, operaest. Ha bizonytalan vagy: ha az esemény megér egy ruhaválasztást, akkor megér egy sminket is. Az arcod a legfontosabb reklámod — és nem kell, hogy drasztikus legyen. Egy jól megcsinált alapozás és pár jól megválasztott hangsúly csodákra képes.",
          },
          {
            heading: "Mi különbözteti meg a jó alkalmi sminket?",
            text: "Három dolog: tartósság, természetesség és a te személyiséged. Egy jó alkalmi smink 8-12 órán át tartja magát, nem kenődik, nem esik szét, és még a meleg teremben is fennmarad. Nem lehet 'mesterséges' — a cél, hogy úgy nézz ki, mintha te magad kiválóan sminkeltél volna meg egy nyugodt hajnalon. És végül: nem egy sablonos 'bulis arc', hanem te — a te jellegzetességeidet kiemelve, nem elrejtve.",
          },
          {
            heading: "Hogyan készülünk együtt?",
            text: "Foglaláskor kérek pár kulcsinformációt: milyen jellegű az alkalom, mit fogsz viselni, milyen helyszínen, hány órás, fotózás várható-e, és van-e Pinterest/inspirációs kép. Ha valami különleges — allergia, kontaktlencse, frissen festett szempilla — azt is előre jelezd. A smink maga 60-75 percet vesz igénybe. Ha szempilla-applikációt is szeretnél, arra további 15-20 percet számolj.",
          },
          {
            heading: "Alkalmi smink stílusok",
            text: "Klasszikus elegancia: hibátlan bőr, finom szemhéj, piros vagy pirosas ajak. Időtálló, minden ruhához jól mutat. Modern matt: mattosított alapozás, definiált szemöldök, fókuszált szem, természetes száj. Mai üzleti és rendezvény-környezetbe. Csillogó glamour: highlight, merész szemhéj, piros száj. Díjátadó, operaest, különleges ünnepség. Természetes glow: no-makeup-makeup érzés, könnyed, friss. Nappali keresztelő, kerti esküvő, laza kocsmázás.",
          },
          {
            heading: "Árak és foglalás",
            text: "Az alkalmi smink díját az alkalom, a helyszín és az extra igények (szempilla, helyszínre szállás) határozzák meg. Személyes árajánlatot DM-ben vagy emailben adok — írd meg, mikor, hol és milyen alkalomra készülsz. Csoportos megrendelés (pl. koszorúslányok) kedvezményes árazással. Az időpont csak az előleg rögzítése után válik fixálttá.",
          },
        ]}
        relatedServices={[
          { title: "Menyasszonyi smink", href: "/menyasszonyi-smink" },
          { title: "Érettségi & bál smink", href: "/erettsegi-bal-smink" },
          { title: "Fotó smink", href: "/foto-smink" },
          { title: "Nappali smink", href: "/nappali-smink" },
        ]}
      />
    </>
  );
}

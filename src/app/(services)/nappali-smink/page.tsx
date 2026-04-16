import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Nappali smink Városodban — Makeup by Anna",
  description: "Nappali smink Városodban — természetes, friss, mindennapi viselhetőség. Üzleti találkozóhoz, randira, fontos napokhoz. Minta Anna sminkes.",
  alternates: { canonical: "https://sminkes-minta.vercel.app/nappali-smink" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nappali smink",
  description: "Nappali smink természetes, fényes, mindennapi viseletre alkalmas kivitelben.",
  provider: { "@id": "https://sminkes-minta.vercel.app/#business" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ServicePage
        title="Nappali smink — diszkréten, de észrevehetően"
        subtitle="Természetes, friss, hibátlan bőr, finom tónusok. A hétköznap észrevétlen eleganciája."
        gradient="from-[#D9C5C5] via-[#E5D4D4] to-[#F2E3E3]"
        image="/images/service-nappali.webp"
        sections={[
          {
            heading: "Mi a nappali smink titka?",
            text: "A nappali smink a no-makeup-makeup művészete: úgy nézel ki, mintha semmit sem tettél volna az arcodra, miközben minden hibátlan. Ez kevésbé smink, inkább a természetes szépség kiemelése. Hibátlan alapozás, diszkrét kontúr, egy csepp highlight, barackos vagy rózsaszín arcpír, természetes barna/szürke szemhéj, finom szempillaspirál, hidratált ajak — ennyi. A siker kulcsa a minőségi termékek és a jó technika: távolról nem lehet észrevenni, hogy smink van rajtad, mégis mindenki megjegyzi, hogy ma különösen jól nézel ki.",
          },
          {
            heading: "Mikor érdemes nappali sminket kérni?",
            text: "Fontos üzleti találkozó, ügyfélprezentáció, állásinterjú. Első randi, fontos családi ebéd, névnap. LinkedIn fotó, szakmai portré. Gyermekvállalás, keresztelés, kisebb családi ünnep. Ballagás, diplomaosztó (érettségi bálra inkább alkalmi kategóriát válassz). Születésnap baráti körben. Utazás, repülőtéri indulás — ha olyan helyre mész, ahol biztos találkozol ismerőssel vagy fotózkodsz.",
          },
          {
            heading: "Tanítom is a technikát",
            text: "Ha szeretnél otthon is magabiztosan kisminkelni, szívesen megosztom a technikákat. A nappali smink során végig magyarázom, mit miért csinálok, milyen termékeket használok, és mire figyelj otthon. Ha igényled, felírom az általam használt termékek listáját — a prémium alternatívákkal együtt, hogy a magad igényei szerint válogathass.",
          },
          {
            heading: "Árak és foglalás",
            text: "A nappali smink 45-60 percet vesz igénybe. Szempilla applikáció, speciális bőrápolás, smink-kísérő tanítás extra díjért kérhető. Pontos árajánlatot személyes egyeztetés után adok — írj DM-ben, és mondd el, mire készülsz.",
          },
        ]}
        relatedServices={[
          { title: "Alkalmi smink", href: "/alkalmi-smink" },
          { title: "Fotó smink", href: "/foto-smink" },
          { title: "Menyasszonyi smink", href: "/menyasszonyi-smink" },
          { title: "Érettségi & bál smink", href: "/erettsegi-bal-smink" },
        ]}
      />
    </>
  );
}

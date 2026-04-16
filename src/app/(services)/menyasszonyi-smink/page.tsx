import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Menyasszonyi smink Városodban — Makeup by Anna",
  description: "Menyasszonyi smink Városodban. HD termékek, vízálló rögzítés, helyszínre szállás. Próbasminkkel, személyre szabott stílussal. Minta Anna sminkes.",
  alternates: { canonical: "https://makeupbykamilla.vercel.app/menyasszonyi-smink" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Menyasszonyi smink",
  description: "Professzionális menyasszonyi smink HD termékekkel, próbasminkkel, helyszínre szállással Város és Környék környékén.",
  provider: { "@id": "https://makeupbykamilla.vercel.app/#business" },
  areaServed: [
    { "@type": "City", name: "Város" },
    { "@type": "City", name: "Környék" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Milyen messze előre érdemes foglalni menyasszonyi sminket?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Főszezonban (május–szeptember) 4-6 hónappal előre érdemes foglalni. Téli időszakban is minimum 2-3 hónap javasolt, hogy a próbasmink és a nagy nap is belecsússzon a naptárba.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyi ideig tart a menyasszonyi smink?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A próbasmink 60-90 perc, a nagy napon a kész smink 75-90 perc. A teljes készülődés a hajjal, ruhával együtt 2-3 óra — ezt a program összeállításakor vesszük figyelembe.",
      },
    },
    {
      "@type": "Question",
      name: "Helyszínre is kimész?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Igen, Város és Környék környékén szívesen kiszállok az esküvői helyszínre vagy a szállásra. Kiszállási díj a távolságtól függ, ezt foglaláskor egyeztetjük.",
      },
    },
    {
      "@type": "Question",
      name: "Mit tartalmaz a próbasmink?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A próbasmink során közösen végigmegyünk az ideális alapozáson, szemhéjon, szájon. Fotózzuk, jegyzeteljük a receptet, beszélünk a nap programjáról. Ha valami nem tetszik, azonnal módosítjuk — a cél, hogy a nagy napon magabiztos légy.",
      },
    },
    {
      "@type": "Question",
      name: "Meddig tart ki a menyasszonyi smink?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A használt HD és vízálló termékek 12-16 órán át megtartják a sminket. A ceremóniától a lagzi végéig (ha kell, rövid retus után) kifogástalan marad.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePage
        title="Menyasszonyi smink Városodban"
        subtitle="Ragyogó, egész napig tartó smink életed legszebb napjára. Próbasminkkel, HD termékekkel, helyszínre szállással."
        gradient="from-[#D4B8B8] via-[#E8CFCF] to-[#F5E4E4]"
        image="/images/service-menyasszonyi.webp"
        sections={[
          {
            heading: "Mi teszi különlegessé a menyasszonyi sminket?",
            text: "A menyasszonyi smink sokkal több, mint egy szép kinézet az esküvő napján. Az a célja, hogy egész napon át — a ceremóniától kezdve a fotózáson át egészen a hajnali buliig — hűen tükrözze a személyiséged, miközben kifogástalanul mutat a fotókon is. Ehhez speciális HD és vízálló termékekkel dolgozom, amelyek ellenállnak a könnyeknek, a tánc izzadásának és a hosszú órák kopásának. A kulcs a tökéletes alapozás: a hibátlan bőrkép mindent megold, és a kamera érzékenyebb, mint a szabad szem — ezt minden technikai döntésnél figyelembe veszem.",
          },
          {
            heading: "Miért fontos a próbasmink?",
            text: "A próbasmink nem luxus, hanem befektetés a nyugalomba. A találkozó során közösen végigmegyünk az arcod anatómiáján, kipróbálunk 2-3 különböző hangulatot, és fotózzuk az eredményt természetes és vakus fényben is. Beszélünk a ruhádról, a hajviseletedről, az esküvő helyszínéről és stílusáról — mindez befolyásolja a smink karakterét. A végére lesz egy konkrét 'receptünk', amit a nagy napon csak pontosan végrehajtunk. Ideális 4-6 héttel az esküvő előtt, amikor még van idő módosítani, de már közel van a nap hangulata.",
          },
          {
            heading: "Hogyan zajlik a nagy nap?",
            text: "A smink 75-90 percet vesz igénybe. A kezdés időpontját úgy kalkuláljuk, hogy a kész menyasszony 30-60 perccel a ceremónia előtt rendelkezésre álljon — ez időt ad a ruha felvételére, az utolsó fotókra és a lélegzetvételre. Helyszínre kiszállás esetén én érkezem a szállásra vagy az esküvői helyszínre, mindent magammal hozok (világítás, termékek, asszisztens igény szerint). Kávé, zene, nyugodt beszélgetés — a készülődés maga is része az élménynek.",
          },
          {
            heading: "Milyen stílusokat tervezünk együtt?",
            text: "Natural glow — hibátlan bőr, finom szemhéj, rózsaszín ajak. Ideális klasszikus, romantikus esküvőhöz. Smokey eyes — intenzívebb szemsminkel, elegánsabb hatás. Téli, estig tartó esküvőkre. Glam — highlight, contour, kihúzott szem, piros ajak. Hollywoodi érzet, kifejezetten fotózásokra és extravagáns helyszínekre. Boho — puha, földszínek, enyhén viharvert textúra. Szabadban tartott, laza esküvőhöz. A próbasmink során megkeressük, melyik áll jól neked — gyakran a válasz egy kombináció, saját ízeddel fűszerezve.",
          },
          {
            heading: "Mit hozz magaddal a próbasminkre?",
            text: "Tiszta, sminkmentes, hidratált arcot. Olyan frizurát, ami közelít a tervezett esküvői hajviselethez (ha már tudod). Inspirációs képeket, Pinterest board-ot — de szerinted is szép referenciákat, nem csak 'tetszik de nem tudom miért'-típusúakat. Az esküvői ruhád színét, anyagát — ha lehet, egy kis mintát. A hajad típusát és a tervezett hajstílust. Az esküvő helyszínének és időpontjának jellegét (kültér, beltér, nyár, tél). Ha van allergia, érzékeny bőr, kötőhártya-probléma — ezt is jelezd előre, hogy a megfelelő termékeket hozhassam.",
          },
          {
            heading: "Árak és csomagok",
            text: "A menyasszonyi smink csomag tartalmazza a próbasminket, a nagy napi sminket, szempilla-applikációt (ha kéred), és egy rövid retus útmutatót. Pontos árajánlatot a helyszín és a kiszállás távolsága alapján tudok adni — kérlek, írj DM-ben vagy emailben. Előleg a foglaláskor esedékes, ez biztosítja a dátumodat. Koszorúslány sminkek külön árazás szerint, csomagkedvezménnyel.",
          },
        ]}
        relatedServices={[
          { title: "Próbasmink", href: "/probasmink" },
          { title: "Alkalmi smink", href: "/alkalmi-smink" },
          { title: "Fotó smink", href: "/foto-smink" },
          { title: "Nappali smink", href: "/nappali-smink" },
        ]}
      />
    </>
  );
}

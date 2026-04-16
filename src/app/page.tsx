import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Schedule from "@/components/Schedule";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Hogyan tudok időpontot foglalni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Időpontot Instagram DM-ben vagy emailben tudsz foglalni. Menyasszonyi sminkhez legalább 1-2 hónappal előre javaslom a foglalást, hogy a próbasminkre is jusson idő.",
                },
              },
              {
                "@type": "Question",
                name: "Hol készülnek a sminkek?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Városodban egyaránt dolgozom. Menyasszonyi smink esetén helyszínre is kiszállok — a pontos feltételeket a foglaláskor egyeztetjük.",
                },
              },
              {
                "@type": "Question",
                name: "Mennyi ideig tart egy smink?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Egy nappali smink kb. 45-60 perc, alkalmi smink 60-75 perc, menyasszonyi smink próbával és kész sminkkel együtt 2-3 órás élmény.",
                },
              },
              {
                "@type": "Question",
                name: "Kell-e próbasmink a menyasszonyi sminkhez?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Erősen javaslom. A próbasmink során kiderül, milyen stílust és színeket szeretnél, így az esküvő napján már nyugodtan készülhetsz. A próbasmink díja külön, de nagyban növeli a komfortérzeted.",
                },
              },
              {
                "@type": "Question",
                name: "Milyen kozmetikumokkal dolgozom?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kizárólag professzionális, hosszan tartó és bőrbarát termékekkel dolgozom. Érzékeny bőrre is van megoldásom — kérlek, előre jelezd, ha allergia vagy különleges bőrprobléma van.",
                },
              },
              {
                "@type": "Question",
                name: "Mit tegyek a smink előtt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Érkezz tiszta, hidratált arccal és mosott hajjal. Ha szempilla vagy szemöldök festést szeretnél, azt pár nappal előtte végeztesd el. Kerüld a vastag arckrémet közvetlenül a smink előtt.",
                },
              },
            ],
          }),
        }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Schedule />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

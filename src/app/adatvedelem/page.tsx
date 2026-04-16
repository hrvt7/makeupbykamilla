import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató — Makeup by Anna",
  description: "A Makeup by Anna adatvédelmi tájékoztatója.",
  alternates: {
    canonical: "https://sminkes-minta.vercel.app/adatvedelem",
  },
};

export default function Adatvedelem() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-10"
        >
          &larr; Vissza a főoldalra
        </Link>

        <h1 className="font-heading text-3xl font-extrabold tracking-[-0.03em] text-foreground mb-8">
          Adatvédelmi tájékoztató
        </h1>

        <div className="max-w-none text-foreground-secondary space-y-6 leading-relaxed">
          <p>
            A Makeup by Anna (továbbiakban: Szolgáltató, Adatkezelő) elkötelezett a
            vendégek személyes adatainak védelme mellett. Jelen tájékoztató az EU 2016/679
            számú általános adatvédelmi rendelete (GDPR) és a magyar 2011. évi CXII.
            törvény (Infotv.) alapján készült.
          </p>

          <h2 className="text-xl font-bold text-foreground">1. Adatkezelő adatai</h2>
          <p>
            Név: Minta Anna (Makeup by Anna)
            <br />
            Tevékenységi hely: Város &amp; Környék
            <br />
            Email: hello@mintaanna.hu
            <br />
            Instagram: @mintaanna_sminkes
          </p>

          <h2 className="text-xl font-bold text-foreground">2. Az adatkezelés jogalapja</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Kapcsolatfelvétel (DM, email):</strong> az érintett hozzájárulása
              (GDPR 6. cikk (1) bek. a) pont)
            </li>
            <li>
              <strong>Szolgáltatás teljesítése:</strong> szerződés teljesítése
              (GDPR 6. cikk (1) bek. b) pont)
            </li>
            <li>
              <strong>Analitikai sütik:</strong> az érintett előzetes hozzájárulása
              (GDPR 6. cikk (1) bek. a) pont) — a mérés kizárólag a cookie consent
              elfogadása után indul el
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground">3. Gyűjtött adatok</h2>
          <p>
            Időpontfoglalás során az alábbi adatokat gyűjtjük: név, telefonszám (opcionális),
            email, alkalom típusa, időpont, helyszín. Fotózott próbasmink esetén képeket
            készíthetünk, amelyek jegyzeteléshez és a saját kezelésedhez szükségesek.
          </p>

          <h2 className="text-xl font-bold text-foreground">4. Adatkezelés célja</h2>
          <p>
            Az összegyűjtött adatokat kizárólag a sminkszolgáltatás teljesítéséhez és a
            kapcsolatfelvételhez használjuk. Adataidat harmadik félnek nem adjuk ki, kivéve
            a jelen tájékoztatóban felsorolt adatfeldolgozókat.
          </p>

          <h2 className="text-xl font-bold text-foreground">5. Harmadik fél adatfeldolgozók</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google LLC</strong> (Google Analytics, Google Maps) — analitika és
              térképszolgáltatás.
            </li>
            <li>
              <strong>Vercel Inc.</strong> — tárhelyszolgáltatás és analitika (Vercel
              Analytics, Speed Insights).
            </li>
            <li>
              <strong>Meta Platforms Inc.</strong> — Instagram, ha DM-en keresztül
              kommunikálunk.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground">6. Adatmegőrzés</h2>
          <p>
            A személyes adatokat a szolgáltatás teljesítését követően legfeljebb 2 évig
            őrizzük meg (későbbi foglaláshoz, visszatérő vendégekhez). Fotódokumentációt
            csak a te hozzájárulásoddal tárolunk.
          </p>

          <h2 className="text-xl font-bold text-foreground">7. Az Ön jogai (GDPR 15–22. cikk)</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hozzáférési jog</li>
            <li>Helyesbítéshez való jog</li>
            <li>Törléshez való jog („elfeledtetés&quot;)</li>
            <li>Adathordozhatósághoz való jog</li>
            <li>Tiltakozáshoz való jog</li>
            <li>Hozzájárulás visszavonása</li>
          </ul>
          <p>
            Jogait a hello@mintaanna.hu email címen gyakorolhatja. 30 napon belül
            válaszolunk.
          </p>

          <h2 className="text-xl font-bold text-foreground">8. Jogorvoslati lehetőségek</h2>
          <p>
            Panasz: Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH), 1055
            Budapest, Falk Miksa utca 9–11.
          </p>

          <p className="text-sm text-foreground-muted/60 pt-4">
            Utolsó frissítés: 2026. április 15.
          </p>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek — Makeup by Anna",
  description: "A Makeup by Anna általános szerződési feltételei.",
  alternates: {
    canonical: "https://sminkes-minta.vercel.app/aszf",
  },
};

export default function ASZF() {
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
          Általános Szerződési Feltételek
        </h1>

        <div className="max-w-none text-foreground-secondary space-y-6 leading-relaxed">
          <p className="text-sm text-foreground-muted/60">Hatályos: 2026. április 15-től</p>

          <h2 className="text-xl font-bold text-foreground">1. Szolgáltató adatai</h2>
          <p>
            Név: Minta Anna (Makeup by Anna)
            <br />
            Tevékenységi hely: Város &amp; Környék
            <br />
            Email: hello@mintaanna.hu
            <br />
            Instagram: @mintaanna_sminkes
          </p>

          <h2 className="text-xl font-bold text-foreground">2. A szolgáltatás leírása</h2>
          <p>
            A Makeup by Anna professzionális sminkszolgáltatást nyújt: menyasszonyi
            smink, alkalmi smink, nappali smink, fotó smink, érettségi és bál smink,
            próbasmink. A szolgáltatás helyszíne a Szolgáltató sminkelőhelye vagy a
            vendég által megadott helyszín (helyszínre szállás esetén).
          </p>

          <h2 className="text-xl font-bold text-foreground">3. Megrendelés és foglalás</h2>
          <p>
            A megrendelés Instagram DM-en vagy emailen keresztül történik. A Szolgáltató
            a kérést visszaigazolja, árajánlatot küld, és az előleg beérkezése után az
            időpont fixálásra kerül. Előleg nélkül foglalás nem érvényes.
          </p>

          <h2 className="text-xl font-bold text-foreground">4. Díjazás és fizetés</h2>
          <p>
            A szolgáltatás díját a Szolgáltató a megrendelés részletei alapján egyedileg
            határozza meg. Az előleg általában a teljes díj 30-50%-a. A fennmaradó összeg
            a szolgáltatás elvégzése napján, készpénzben vagy banki átutalással fizetendő.
          </p>

          <h2 className="text-xl font-bold text-foreground">5. Lemondás és módosítás</h2>
          <p>
            14 napnál korábbi lemondás esetén az előleg visszajár. 7-14 napon belüli
            lemondás esetén az előleg 50%-a visszajár. 7 napon belüli lemondás esetén az
            előleg nem visszatéríthető, de eseti méltányosságot gyakorolhat a Szolgáltató
            (pl. betegség, vis maior). Módosítási kérelmek rugalmasan kezelendőek, ha
            az időpont még szabad.
          </p>

          <h2 className="text-xl font-bold text-foreground">6. Felelősség</h2>
          <p>
            A Szolgáltató bőrbarát, professzionális termékekkel dolgozik, de az érzékeny
            bőr vagy allergia esetén a Megrendelő előre köteles jelezni. Allergiás
            reakcióért, amely ilyen előzetes jelzés hiányában következik be, a Szolgáltató
            nem vállal felelősséget.
          </p>

          <h2 className="text-xl font-bold text-foreground">7. Fotódokumentáció</h2>
          <p>
            A Szolgáltató a saját portfoliója és social media tartalma számára fotót
            készíthet a sminkről. Ehhez a Megrendelő külön hozzájárulása szükséges. Ha
            nem járulsz hozzá, jelezd a smink kezdete előtt.
          </p>

          <h2 className="text-xl font-bold text-foreground">8. Adatvédelem</h2>
          <p>
            Az adatkezelés részleteit az{" "}
            <Link href="/adatvedelem" className="text-primary underline underline-offset-2 hover:text-primary/80">
              Adatvédelmi tájékoztató
            </Link>{" "}
            tartalmazza.
          </p>

          <h2 className="text-xl font-bold text-foreground">9. Panaszkezelés</h2>
          <p>
            Panasz esetén írj a hello@mintaanna.hu email címre. A Szolgáltató
            14 napon belül válaszol. Fogyasztói jogvita esetén a lakóhely szerint
            illetékes békéltető testülethez vagy bírósághoz fordulhatsz.
          </p>

          <h2 className="text-xl font-bold text-foreground">10. Egyéb rendelkezések</h2>
          <p>Jelen ÁSZF-re a magyar jog az irányadó.</p>

          <p className="text-sm text-foreground-muted/60 pt-4">
            Utolsó frissítés: 2026. április 15.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface-card py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2.5">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-kamilla.webp"
                alt="Kovacsik Kamilla"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="font-heading text-lg font-bold tracking-[-0.02em] text-foreground">
                Makeup by Kamilla
              </span>
            </div>
            <p className="text-sm text-foreground-muted max-w-xs text-center md:text-left">
              Professzionális sminkes Győrben és Tapolcán. Menyasszonyi, alkalmi, nappali és fotó smink.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start gap-3 text-sm text-foreground-muted">
            <p className="font-heading font-semibold text-foreground-secondary text-xs uppercase tracking-wider">Navigáció</p>
            <a href="/#szolgaltatasok" className="hover:text-primary transition-colors duration-200">Szolgáltatások</a>
            <a href="/#rolam" className="hover:text-primary transition-colors duration-200">Rólam</a>
            <a href="/#idopont" className="hover:text-primary transition-colors duration-200">Időpontfoglalás</a>
            <a href="/#kapcsolat" className="hover:text-primary transition-colors duration-200">Kapcsolat</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3 text-sm text-foreground-muted">
            <p className="font-heading font-semibold text-foreground-secondary text-xs uppercase tracking-wider">Elérhetőségek</p>
            <a
              href="https://www.instagram.com/kovacsik_kamilla_sminkes/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              @kovacsik_kamilla_sminkes
            </a>
            <a href="mailto:kapcsolat@makeupbykamilla.hu" className="hover:text-primary transition-colors duration-200">
              kapcsolat@makeupbykamilla.hu
            </a>
            <span>Győr &amp; Tapolca</span>
            <a href="/adatvedelem" className="hover:text-primary transition-colors duration-200">
              Adatvédelmi tájékoztató
            </a>
            <a href="/aszf" className="hover:text-primary transition-colors duration-200">
              ÁSZF
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-border-light text-center text-xs text-foreground-muted leading-relaxed space-y-1">
          <p>
            <strong className="text-foreground-secondary">Makeup by Kamilla Kovacsik</strong> — Sminkes, Győr &amp; Tapolca
          </p>
          <p className="pt-2">
            &copy; {new Date().getFullYear()} Kovacsik Kamilla. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}

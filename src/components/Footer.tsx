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
                alt="Minta Anna"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="font-heading text-lg font-bold tracking-[-0.02em] text-foreground">
                Makeup by Anna
              </span>
            </div>
            <p className="text-sm text-foreground-muted max-w-xs text-center md:text-left">
              Professzionális sminkes Városodban. Menyasszonyi, alkalmi, nappali és fotó smink.
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
              href="https://www.instagram.com/mintaanna_sminkes/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              @mintaanna_sminkes
            </a>
            <a href="mailto:hello@mintaanna.hu" className="hover:text-primary transition-colors duration-200">
              hello@mintaanna.hu
            </a>
            <span>Város &amp; Környék</span>
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
            <strong className="text-foreground-secondary">Makeup by Anna Minta</strong> — Sminkes, Város &amp; Környék
          </p>
          <p className="pt-2">
            &copy; {new Date().getFullYear()} Minta Anna. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { IMMERSIONS } from "@/lib/checkout";

export type ImmersionItem = {
  title: string;
  when: string;
  price?: string;
  href: string;
  cta: string;
  bonuses: readonly string[];
};

export function ImmersionsSection({
  title = "Imersões e Reuniões Falaê Brasil ao vivo no Zoom",
  description = "Duas datas por mês para viver o método na prática, com professores brasileiros e americanos — e sair com bônus no mesmo dia.",
  items = IMMERSIONS,
}: {
  title?: string;
  description?: string;
  items?: readonly ImmersionItem[];
}) {
  return (
    <section id="imersoes" className="bg-gradient-corporate py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
            Eventos de lançamento quinzenal
          </span>
          <h2 className="mt-3 text-2xl font-bold !text-primary-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-blue-light sm:text-base">
            {description}
          </p>
        </div>

        <div className={items.length === 1 ? "mx-auto mt-12 grid max-w-2xl gap-6" : "mt-12 grid gap-6 md:grid-cols-2"}>
          {items.map((im) => (
            <article
              key={im.title}
              className="flex flex-col rounded-2xl border border-brand-gold/40 bg-white/5 p-7"
            >
              <h3 className="whitespace-pre-line text-lg font-bold !text-primary-foreground sm:text-xl">{im.title}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-gold">
                {im.when}
              </p>
              {im.price && (
                <>
                  <div className="mt-5 text-3xl font-bold text-primary-foreground">{im.price}</div>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-blue-light">
                    Inscrição
                  </p>
                </>
              )}

              <ul className="mt-6 flex-1 space-y-3 text-sm text-brand-blue-light">
                {im.bonuses.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      ★
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href={im.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-4 text-center text-[13px] font-bold uppercase tracking-[0.12em] text-accent-foreground shadow-cta transition-colors hover:bg-[#B98727]"
              >
                {im.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

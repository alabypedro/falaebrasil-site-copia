import { COMMUNITIES } from "@/lib/checkout";
import grupoLetsFalae from "@/assets/grupo-lets-falae.png";

export function CommunitiesSection() {
  return (
    <section id="comunidades" className="bg-brand-ice py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="flex justify-center">
            <img
              src={grupoLetsFalae}
              alt="Comunidade Let’s Falaê no WhatsApp"
              loading="lazy"
              className="w-full max-w-xs rounded-2xl bg-white p-6 shadow-soft"
            />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">
              Comunidades exclusivas
            </span>
            <h2 className="mt-3 text-2xl font-bold text-primary sm:text-3xl">
              Let’s Falaê: 2 comunidades no WhatsApp
            </h2>
            <span className="mt-4 block h-px w-16 bg-brand-gold" aria-hidden="true" />
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              Cada aluno PRO entra na comunidade do seu nível para praticar todos os dias, tirar
              dúvidas e conversar com quem está na mesma etapa.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {COMMUNITIES.map((c) => (
                <li key={c.name} className="rounded-2xl border border-border bg-white p-4 shadow-soft">
                  <h3 className="text-sm font-bold text-primary">{c.name}</h3>
                  <p className="mt-1 text-xs text-foreground/70">{c.desc}</p>
                </li>
              ))}
            </ul>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-primary p-5 text-primary-foreground">
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-gold">
                  SUPPORT Falaê
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-blue-light">
                  Professores respondem suas dúvidas em horário comercial, direto no WhatsApp.
                </p>
              </div>
              <div className="rounded-2xl bg-primary p-5 text-primary-foreground">
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-gold">
                  Intercâmbio mensal em áudio
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-blue-light">
                  Sessão intercultural todos os meses com professores americanos, em áudio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

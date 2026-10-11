import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Youtube } from "lucide-react";

import { CommunitiesSection } from "@/components/CommunitiesSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { LegalConsent } from "@/components/LegalLinks";
import { PLAN_FEATURES } from "@/lib/checkout";
import vslPlanosPro from "@/assets/vsl-planos-2026-10-09.mp4.asset.json";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Plano PRO | Falaê Brasil" },
      {
        name: "description",
        content:
          "Conheça o Plano PRO Falaê Brasil: curso por nível, aplicativo, ferramentas de inteligência artificial e aulas ao vivo para Adultos, Kids e Teens.",
      },
      { property: "og:title", content: "Plano PRO | Falaê Brasil" },
      {
        property: "og:description",
        content:
          "Um plano único e completo com conteúdo por nível, prática com IA e aulas ao vivo para cada público.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://falaebrasil.com.br/planos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/planos" }],
  }),
  component: PlanosPage,
});

function ProIntroduction() {
  return (
    <section className="bg-gradient-corporate py-16 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
          Plano PRO Falaê Brasil
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Uma escola online para quem não quer estudar sozinho
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-brand-blue-light">
          No Plano PRO, você combina a liberdade de estudar no seu ritmo com aulas ao vivo e
          ferramentas de inteligência artificial para continuar praticando durante a semana.
        </p>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-primary-foreground/90">
          <p>
            Você entra no APP Falaê Brasil, segue o conteúdo do seu nível, pratica com nossas
            ferramentas de inteligência artificial e participa das aulas ao vivo disponíveis para o
            seu público.
          </p>
          <p>Adultos possuem seus próprios grupos.</p>
          <p>Kids e Teens possuem aulas próprias para suas faixas etárias.</p>
          <p>
            Assim, o aplicativo não fica solto e a aula não fica limitada aos poucos minutos em que
            você está com o professor. Uma parte apoia a outra.
          </p>
        </div>
        <a
          href="#plano-pro"
          className="mt-9 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-cta transition-colors hover:bg-accent/90"
        >
          Conhecer o Plano PRO
        </a>
      </div>
    </section>
  );
}

function VslSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">
          Vídeo de apresentação
        </span>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
          Entenda o Plano PRO em pouco mais de 1 minuto.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Veja como aplicativo, ferramentas de IA e aulas ao vivo trabalham juntos dentro do plano.
        </p>
        <div className="mx-auto mt-8 w-full max-w-[430px] rounded-lg border border-brand-blue-mid bg-background p-[1.5px] shadow-elevated">
          <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-brand-navy">
            <video
              src={vslPlanosPro.url}
              controls
              playsInline
              preload="metadata"
              aria-label="Vídeo de apresentação do Plano PRO Falaê Brasil"
              className="absolute inset-0 h-full w-full object-contain"
            >
              Seu navegador não suporta a reprodução deste vídeo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialStrip() {
  return (
    <section className="bg-background py-14">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">
          Fique por dentro
        </span>
        <h2 className="mt-3 text-2xl font-bold text-primary sm:text-3xl">
          Conteúdos também nas redes
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Aulas, dicas e bastidores do método são publicados no nosso canal do YouTube e no
          Instagram da Jóis. Siga para acompanhar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.youtube.com/@FalaeBrasil/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border-2 border-primary bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Youtube className="h-5 w-5" aria-hidden="true" />
            @FalaeBrasil no YouTube
          </a>
          <a
            href="https://www.instagram.com/joisalaby/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border-2 border-primary bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
            @joisalaby no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function PlanosPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-gradient-ice py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">
              Seu curso Falaê Brasil!
            </span>
            <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-bold uppercase text-primary sm:text-4xl md:text-5xl">
              Esse é nosso plano único e simples
            </h1>
            <span className="mx-auto mt-5 block h-px w-20 bg-brand-gold" aria-hidden="true" />
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A experiência completa da Falaê Brasil em um só plano: conteúdo por nível, prática
              com inteligência artificial e aulas ao vivo.
            </p>
          </div>
        </section>

        <ProIntroduction />
        <VslSection />


        <section id="plano-pro" className="scroll-mt-20 bg-brand-ice py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4">
            <article className="flex flex-col rounded-2xl border border-accent bg-card p-7 shadow-elevated ring-2 ring-accent sm:p-10">
              <span className="mx-auto rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-cta">
                Plano único e completo
              </span>
              <div className="mt-5 text-center">
                <h2 className="text-3xl font-bold text-primary">Plano PRO</h2>
                <div className="mt-4 text-5xl font-bold text-primary">R$ 210,00</div>
                <div className="mt-2 text-base font-semibold text-primary">
                  Adultos 18+ e Kids &amp; Teens 8–17 anos
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  /mês — Plano Anual com aulas ao vivo via Zoom
                </div>
              </div>

              <ul className="mx-auto mt-8 w-full max-w-2xl space-y-3 text-sm sm:text-base">
                {PLAN_FEATURES.pro.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      ✓
                    </span>
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <Link
                  to="/lp/adultos"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-accent px-6 py-3 text-center text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-cta transition-colors hover:bg-accent/90"
                >
                  Plano PRO Adultos 18+
                </Link>
                <Link
                  to="/lp/kids-teens"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
                >
                  Plano PRO Kids &amp; Teens
                </Link>
              </div>
              <LegalConsent action="contratação" className="mt-5" />
            </article>
          </div>
        </section>

        <CommunitiesSection />
        <SocialStrip />
      </main>
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
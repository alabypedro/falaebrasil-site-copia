import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CircleHelp,
  MessageCircleMore,
  Plane,
  Stethoscope,
} from "lucide-react";

import bst1Cover from "@/assets/bst-hero-mockup.png.asset.json";
import bst2Cover from "@/assets/bst2-hero.jpg";
import bst4Cover from "@/assets/bst4-produto.jpg";
import bst5Cover from "@/assets/bst-step2.png.asset.json";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brasil Sem Trava | Inglês Prático para Situações Reais" },
      {
        name: "description",
        content:
          "Conheça os Guias Brasil Sem Trava da Falaê Brasil: soluções práticas de inglês para conversação, viagens, entrevistas profissionais e preparação para entrevista de visto.",
      },
      { property: "og:title", content: "Brasil Sem Trava | Inglês Prático para Situações Reais" },
      {
        property: "og:description",
        content:
          "Conheça os Guias Brasil Sem Trava da Falaê Brasil: soluções práticas de inglês para conversação, viagens, entrevistas profissionais e preparação para entrevista de visto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/" }],
  }),
  component: HomePage,
});

const guides = [
  {
    name: "Destrava Falaê",
    shortName: "Destrava Falaê",
    href: "/bst5" as const,
    image: bst5Cover.url,
    imageAlt: "Ferramenta de prática do Destrava Falaê",
    icon: MessageCircleMore,
    callout: "Para quem entende alguma coisa em inglês, mas trava justamente na hora de responder.",
    description:
      "Tenha frases e respostas prontas para ganhar tempo, pedir ajuda, recuperar uma conversa e continuar falando sem precisar construir tudo do zero na cabeça.",
    highlights: [
      "Respostas prontas para situações de travamento",
      "Roteiros curtos de conversação",
      "Prática para transformar reconhecimento em fala",
      "Treino com ferramentas de IA conforme a oferta do produto",
    ],
  },
  {
    name: "Guia de Sobrevivência 50+",
    shortName: "Guia de Sobrevivência 50+",
    href: "/bst1" as const,
    image: bst1Cover.url,
    imageAlt: "Guia de Sobrevivência 50+ em celular e computador",
    icon: Plane,
    callout: "Para quem passou dos 50 e quer mais autonomia em viagens e situações simples do dia a dia.",
    description:
      "Frases essenciais para aeroporto, hotel, restaurante, compras, transporte, família e outras situações em que depender do tradutor pode transformar algo simples em preocupação.",
    highlights: [
      "Inglês prático para viagem e cotidiano",
      "Frases organizadas por situação",
      "Consulta rápida no celular",
      "Recursos de prática conforme a oferta do produto",
    ],
  },
  {
    name: "Guia de Entrevistas em Inglês em Multinacionais",
    shortName: "Guia de Entrevistas em Inglês",
    href: "/bst2" as const,
    image: bst2Cover,
    imageAlt: "Guia de entrevistas em inglês ao lado de computador e celular",
    icon: BriefcaseBusiness,
    callout: "Para quem tem experiência profissional, mas não quer travar quando a entrevista muda para o inglês.",
    description:
      "Prepare respostas para falar sobre carreira, resultados, liderança, desafios e situações comuns de processos seletivos em empresas internacionais.",
    highlights: [
      "Respostas para perguntas frequentes de entrevista",
      "Vocabulário e estruturas profissionais",
      "Prática de respostas antes do processo seletivo",
      "Recursos de IA conforme a oferta do produto",
    ],
  },
  {
    name: "Guia de Aprovação de Vistos para os EUA",
    shortName: "Guia de Aprovação de Vistos para os EUA",
    href: "/bst4" as const,
    image: bst4Cover,
    imageAlt: "Material de preparação para entrevistas de visto exibido em computador e celular",
    icon: Stethoscope,
    callout: "Para quem quer chegar mais preparado à entrevista consular e responder de forma clara, objetiva e coerente.",
    description:
      "Pratique algumas das perguntas e situações mais comuns de entrevistas de visto, incluindo turismo, negócios, estudos, imigração e momentos em que a conversa acontece em inglês.",
    highlights: [
      "Preparação para situações da entrevista consular",
      "Frases em inglês com apoio de tradução e pronúncia",
      "Prática para respostas mais objetivas",
      "Recursos de IA conforme a oferta do produto",
    ],
    disclaimer:
      "Material educacional de preparação. A decisão sobre qualquer visto pertence exclusivamente à autoridade consular competente.",
  },
] as const;

const uses = [
  "Guia digital em PDF",
  "Frases e respostas prontas",
  "Traduções",
  "Pronúncia aproximada para brasileiros",
  "Roteiros de conversação",
  "Checklists",
  "Exercícios rápidos",
  "IA Memorizaê",
  "IA Falaê",
  "Práticas específicas para aquela situação",
];

function SectionHeading({ eyebrow, title, description, dark = false }: { eyebrow?: string; title: string; description?: string; dark?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">{eyebrow}</p> : null}
      <h2 className={`mt-3 text-3xl font-extrabold leading-tight sm:text-4xl ${dark ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      {description ? <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-brand-blue-light" : "text-muted-foreground"}`}>{description}</p> : null}
    </div>
  );
}

function GuideCard({ guide }: { guide: (typeof guides)[number] }) {
  const Icon = guide.icon;
  return (
    <article className="grid min-h-full overflow-hidden rounded-lg border border-border bg-card shadow-elevated sm:grid-cols-[.88fr_1.12fr] lg:grid-cols-1">
      <div className="flex min-h-64 items-center justify-center overflow-hidden bg-brand-ice p-5 lg:min-h-80">
        <img src={guide.image} alt={guide.imageAlt} loading="lazy" className="h-full max-h-72 w-full object-contain lg:max-h-80" />
      </div>
      <div className="flex flex-col p-6 sm:p-7">
        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-brand-blue-mid">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-2xl font-extrabold leading-tight text-primary">{guide.name}</h3>
        <p className="mt-4 font-bold leading-relaxed text-foreground">{guide.callout}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{guide.description}</p>
        <ul className="mt-5 space-y-2.5">
          {guide.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-foreground">
              <Check className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        {"disclaimer" in guide ? <p className="mt-4 border-l-2 border-accent pl-3 text-xs leading-relaxed text-muted-foreground">{guide.disclaimer}</p> : null}
        <Button asChild size="lg" className="mt-7 min-h-12 w-full whitespace-normal bg-accent px-5 py-3 text-center font-extrabold uppercase text-accent-foreground shadow-cta hover:bg-accent/90">
          <Link to={guide.href}>Quero comprar este guia <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="bg-gradient-corporate px-4 pb-16 pt-14 sm:pb-20 sm:pt-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,.95fr)] lg:gap-16">
          <div className="min-w-0 text-center lg:text-left">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">Brasil Sem Trava</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Seu inglês não precisa ser resolvido todo de uma vez.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-blue-light sm:text-xl lg:max-w-xl">
              Os Guias Brasil Sem Trava foram criados para aqueles momentos em que você não precisa de um curso inteiro. Precisa resolver uma situação específica e seguir em frente.
            </p>
            <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-primary-foreground/90">
              Uma viagem. Uma entrevista. Uma conversa que trava. Uma entrevista de visto.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
              Cada Guia Brasil Sem Trava pega um desses apertos e transforma em um material prático para abrir, consultar, praticar e usar.
            </p>
            <Button asChild size="lg" className="mt-8 min-h-14 rounded-full bg-accent px-8 font-extrabold uppercase text-accent-foreground shadow-cta hover:bg-accent/90">
              <a href="#guias">Escolher meu guia <ArrowDown className="h-4 w-4" /></a>
            </Button>
          </div>

          <div className="relative mx-auto w-full max-w-xl pb-5 pt-8 sm:px-8 lg:px-0" aria-label="Coleção dos quatro Guias Brasil Sem Trava">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-blue-light backdrop-blur-sm">
              Guias para situações reais
            </div>
            <div className="relative mt-12 grid grid-cols-3 items-end gap-2 sm:gap-4">
              <div className="translate-y-1 transition-transform duration-300 hover:-translate-y-1">
                <img
                  src={bst1Cover.url}
                  alt="Capa do Guia de Sobrevivência 50+"
                  className="aspect-[4/5] w-full rounded-md border border-primary-foreground/15 bg-brand-ice object-contain p-1 shadow-elevated"
                />
              </div>
              <div className="relative z-10 -mx-3 -translate-y-4 transition-transform duration-300 hover:-translate-y-6 sm:-mx-5">
                <img
                  src={bst5Cover.url}
                  alt="Capa do Destrava Falaê"
                  className="aspect-[4/5] w-full rounded-md border border-primary-foreground/20 bg-brand-ice object-contain p-1 shadow-elevated"
                />
              </div>
              <div className="translate-y-1 transition-transform duration-300 hover:-translate-y-1">
                <img
                  src={bst2Cover}
                  alt="Capa do Guia de Entrevistas em Inglês"
                  className="aspect-[4/5] w-full rounded-md border border-primary-foreground/15 bg-brand-ice object-contain p-1 shadow-elevated"
                />
              </div>
              <div className="col-start-2 -mt-5 w-full translate-y-4 transition-transform duration-300 hover:translate-y-2">
                <img
                  src={bst4Cover}
                  alt="Capa do Guia de Aprovação de Vistos para os EUA"
                  className="aspect-[4/5] w-full rounded-md border border-primary-foreground/15 bg-brand-ice object-contain p-1 shadow-elevated"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Uma solução prática" title="Farmácia, não hospital." description="Um Guia Brasil Sem Trava não tenta resolver todo o seu inglês." />
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p className="font-bold text-primary">Band-aid, não cirurgia.</p>
            <p>Pense assim: quando existe um problema grande, você pode precisar de um tratamento completo. Mas nem todo problema exige isso.</p>
            <p>Às vezes você precisa apenas resolver o aperto que está na sua frente agora. É essa a função dos Guias Brasil Sem Trava.</p>
            <p>Cada guia trabalha uma situação específica, com conteúdo direto, consulta rápida e prática orientada. Você não precisa aprender tudo antes de começar a usar.</p>
            <p className="font-extrabold uppercase text-primary">Abre. Entende. Pratica. Usa.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Um problema de cada vez", "Cada guia nasce para uma situação específica da vida real."],
              ["02", "Feito para usar", "Menos teoria solta. Mais frases, respostas, exemplos, roteiros e prática."],
              ["03", "Comece imediatamente", "Você não precisa concluir um curso inteiro antes de aproveitar o material."],
            ].map(([number, title, text]) => (
              <div key={number} className="border-t-4 border-accent bg-secondary p-6">
                <span className="text-xs font-extrabold tracking-[0.18em] text-brand-blue-mid">{number}</span>
                <h3 className="mt-4 text-xl font-bold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading dark eyebrow="Conteúdo para consultar e praticar" title="Não é para ficar esquecido numa pasta." description="Os Guias Brasil Sem Trava foram pensados como materiais de uso. Dependendo do produto, você pode encontrar:" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {uses.map((item) => (
              <div key={item} className="flex items-center gap-3 border-b border-primary-foreground/15 py-3 text-sm font-semibold text-primary-foreground">
                <Check className="h-4 w-4 flex-none text-accent" aria-hidden="true" /> {item}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-brand-blue-light">
            Cada produto possui seus próprios conteúdos e recursos. Veja os detalhes antes da compra na página de cada guia.
          </p>
        </div>
      </section>

      <section id="guias" className="scroll-mt-20 bg-gradient-ice px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Escolha pela sua necessidade" title="Qual problema você quer resolver agora?" description="Escolha o guia que combina com a situação que você está vivendo." />
          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {guides.map((guide) => <GuideCard key={guide.href} guide={guide} />)}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Escolha rápida" title="Não sabe qual escolher?" />
          <div className="mt-10 divide-y divide-border border-y border-border">
            {[
              ["Eu travo quando preciso responder.", "Destrava Falaê", "/bst5"],
              ["Tenho mais de 50 e quero inglês prático para viagem e situações do cotidiano.", "Guia de Sobrevivência 50+", "/bst1"],
              ["Tenho entrevista profissional em inglês.", "Guia de Entrevistas em Inglês", "/bst2"],
              ["Vou passar por entrevista de visto para os Estados Unidos.", "Guia de Aprovação de Vistos para os EUA", "/bst4"],
            ].map(([situation, answer, href]) => (
              <div key={href} className="grid gap-3 py-6 md:grid-cols-[1fr_1fr_auto] md:items-center">
                <p className="font-semibold text-foreground">“{situation}”</p>
                <p className="text-sm font-bold text-primary">→ {answer}</p>
                <Button asChild variant="link" className="h-auto justify-start p-0 font-extrabold uppercase text-brand-blue-mid md:justify-end">
                  <Link to={href}>Ver este guia <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <CircleHelp className="mx-auto h-10 w-10 text-accent" aria-hidden="true" />
          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl">
            Você não precisa esperar aprender inglês inteiro para começar a usar inglês.
          </h2>
          <div className="mx-auto mt-7 max-w-3xl space-y-4 text-base leading-relaxed text-brand-blue-light sm:text-lg">
            <p>Brasil Sem Trava nasceu de uma ideia simples: o inglês aparece em momentos reais.</p>
            <p>Uma viagem não espera você terminar um curso. Uma entrevista não espera você dominar todos os tempos verbais. Uma conversa não pausa até você lembrar a frase perfeita.</p>
            <p>Por isso, cada Guia Brasil Sem Trava começa pela situação. Depois entrega somente o que ajuda você a lidar melhor com ela.</p>
          </div>
          <Button asChild size="lg" className="mt-8 min-h-14 rounded-full bg-accent px-8 font-extrabold uppercase text-accent-foreground shadow-cta hover:bg-accent/90">
            <a href="#guias">Ver os guias <ArrowDown className="h-4 w-4" /></a>
          </Button>
        </div>
      </section>

      <section className="bg-background px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            eyebrow="Falaê Brasil"
            title="E se você quiser continuar além do guia?"
            description="A Falaê Brasil também é uma escola online de inglês. Para quem quer estudar de forma contínua, com aplicativo, inteligência artificial, conteúdo por nível e aulas ao vivo, existe o Plano PRO."
          />
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-h-14 rounded-full bg-accent px-8 font-extrabold uppercase text-accent-foreground shadow-cta hover:bg-accent/90">
              <Link to="/planos">Conhecer o Plano PRO <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-14 rounded-full border-primary/25 px-8 font-extrabold uppercase text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/adultos">Adultos <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-ice px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading eyebrow="Brasil Sem Trava" title="Resolva o problema que está na sua frente." description="Escolha seu Guia Brasil Sem Trava e veja todos os detalhes do produto antes de comprar." />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {guides.map((guide) => (
              <Button key={guide.href} asChild variant="outline" size="lg" className="min-h-14 whitespace-normal border-primary/20 px-5 py-3 font-extrabold uppercase text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to={guide.href}>{guide.shortName} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
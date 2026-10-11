import { createFileRoute, Link } from "@tanstack/react-router";
import vslLpAdultos from "@/assets/vsl-lp-adultos-2026-10-09.mp4.asset.json";
import { useState, type MouseEvent } from "react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  Headphones,
  Laptop,
  MessageCircle,
  Mic2,
  Plane,
  Smartphone,
  Sparkles,
  Users,
  Video,
  Volume2,
} from "lucide-react";

import logoFalae from "@/assets/logo-falae.png";
import joisAlaby from "@/assets/jois-alaby-new.png";
import liveClassImage from "@/assets/home-videoconf.jpg";
import clarindaImg from "@/assets/testimonials/clarinda-kipper.jpg";
import brunoImg from "@/assets/testimonials/bruno-mendonca.jpg";
import paulaImg from "@/assets/testimonials/paula-freitas.jpg";
import leonardoImg from "@/assets/testimonials/leonardo-canella.jpg";
import { ContactSection } from "@/components/ContactSection";
import { LegalConsent, LegalLinks } from "@/components/LegalLinks";
import { Button } from "@/components/ui/button";
import { CHECKOUT } from "@/lib/checkout";
import { trackCheckoutAndNavigate } from "@/lib/pixel";

const faq = [
  {
    q: "O Plano PRO é uma assinatura?",
    a: "Sim. O Plano PRO Adultos custa R$ 147,00 e é cobrado mensalmente no cartão até o cancelamento.",
  },
  {
    q: "Preciso começar do A1?",
    a: "Não necessariamente. O conteúdo é organizado por níveis e você pode iniciar de acordo com seu momento.",
  },
  {
    q: "Eu nunca estudei inglês. Posso entrar?",
    a: "Sim. A plataforma possui conteúdo inicial para quem está começando.",
  },
  {
    q: "Já sei alguma coisa. O plano serve para mim?",
    a: "Sim. Há conteúdos organizados do A1 ao C2 para diferentes momentos de estudo.",
  },
  {
    q: "Como funcionam as aulas ao vivo?",
    a: "As aulas acontecem em grupos de Adultos pelo Zoom, nos horários disponíveis para cada nível.",
  },
  {
    q: "Posso assistir a qualquer aula?",
    a: "Você participa das aulas disponíveis para o seu nível, conforme a programação vigente.",
  },
  {
    q: "O que acontece se eu perder uma aula?",
    a: "Você pode continuar estudando no aplicativo e consultar a programação para participar de outro horário disponível para seu nível.",
  },
  {
    q: "Quais ferramentas de IA estão incluídas?",
    a: "IA Falaê, IA Escutaê, IA Memorizaê, IA Escreveaê e IA Leiaê.",
  },
  {
    q: "O aplicativo substitui as aulas?",
    a: "Não. A proposta do PRO é justamente combinar estudo autônomo e prática ao vivo.",
  },
  {
    q: "Posso cancelar?",
    a: "Sim. A assinatura é cobrada mensalmente até o cancelamento, que pode ser solicitado pelos canais de atendimento da Falaê Brasil.",
  },
];

const testimonials = [
  {
    name: "Clarinda Kipper",
    role: "RH multinacional — São João D'Oeste (SC)",
    photo: clarindaImg,
    quote:
      "Como trabalho no RH de uma multinacional canadense, uso inglês toda semana. O teacher Jóis e seu método são direto ao ponto — inglês prático e funcional. A confiança veio ao longo do tempo, porque sempre fui uma pessoa mais reservada. A forma de me comunicar hoje me traz tranquilidade e objetividade para aquilo que realmente interessa.",
  },
  {
    name: "Bruno Mendonça",
    role: "Key Account Manager — São Paulo (SP)",
    photo: brunoImg,
    quote:
      "Eu já falava inglês antes de começar com o teacher Jóis. A grande sacada dele é que ele traz o inglês pra realidade que eu vivo. Mudei de empresa e agora lidero reuniões online com estrangeiros com muito mais confiança. Super recomendo.",
  },
  {
    name: "Paula Freitas",
    role: "Gerente de RH em multinacional — São Paulo (SP)",
    photo: paulaImg,
    quote:
      "Eu nunca gostei de inglês. Decorar verbo To Be, gramática chata. Conheci o teacher Jóis e o método é super solto e direto. Passei a gostar porque ele me permite falar muito e aprender com meus erros. Fui pela primeira vez à matriz da empresa no exterior. Thanks a lot, teacher!",
  },
  {
    name: "Leonardo Canella",
    role: "Controladoria em Multinacional — São Paulo (SP)",
    photo: leonardoImg,
    quote:
      "Já tive contato com inglês duas vezes com métodos que não consegui seguir e desisti. Me identifiquei com o método pela facilidade em estudar e trocar em aula. O professor Jóis é dedicado e faz intervenções pontuais para eu evoluir. Já percebo evolução a cada aula.",
  },
];

const included = [
  {
    icon: Smartphone,
    title: "APP Falaê Brasil",
    items: ["Conteúdo organizado por nível", "Atividades e quizzes", "Vídeos e PDFs disponíveis", "Progressão de estudo"],
  },
  {
    icon: Brain,
    title: "5 ferramentas de IA",
    items: ["Falaê", "Escutaê", "Memorizaê", "Escreveaê", "Leiaê"],
  },
  {
    icon: Video,
    title: "Aulas ao vivo",
    items: ["Encontros pelo Zoom", "Grupos de Adultos", "Horários por nível", "Professores conforme programação"],
  },
  {
    icon: Users,
    title: "Continuidade",
    items: ["Comunidades por nível", "Plantão de dúvidas", "Prática entre uma aula e outra", "Contato frequente com o idioma"],
  },
];

const aiTools = [
  { icon: Mic2, name: "IA Falaê", text: "Pratique fala e pronúncia." },
  { icon: Headphones, name: "IA Escutaê", text: "Pratique compreensão auditiva." },
  { icon: Brain, name: "IA Memorizaê", text: "Revise palavras e estruturas." },
  { icon: MessageCircle, name: "IA Escreveaê", text: "Pratique escrita." },
  { icon: BookOpen, name: "IA Leiaê", text: "Pratique leitura." },
];

const levels = [
  ["A1", "Básico"],
  ["A2", "Pré-intermediário"],
  ["B1", "Intermediário"],
  ["B2", "Pós-intermediário"],
  ["C1", "Pré-avançado"],
  ["C2", "Avançado"],
];

const week = [
  ["Segunda", "15 minutos no app."],
  ["Terça", "Revisão rápida com IA Memorizaê."],
  ["Quarta", "Aula ao vivo disponível para seu nível."],
  ["Quinta", "Prática de fala ou escuta com IA."],
  ["Sexta", "Continue o conteúdo no seu ritmo."],
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Plano PRO Adultos — Falaê Brasil",
  description: "Ensino contínuo de inglês com aplicativo, cinco ferramentas de IA, conteúdo por nível e aulas ao vivo via Zoom.",
  provider: { "@type": "Organization", name: "Falaê Brasil", url: "https://falaebrasil.com.br" },
  offers: {
    "@type": "Offer",
    price: "147.00",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: CHECKOUT.proAdultos,
  },
};

export const Route = createFileRoute("/lp/adultos")({
  head: () => ({
    meta: [
      { title: "Plano PRO Adultos | Inglês Online com App, IA e Aulas ao Vivo | Falaê Brasil" },
      {
        name: "description",
        content: "Estude inglês online com conteúdo por nível, cinco ferramentas de IA e aulas ao vivo via Zoom no Plano PRO Adultos da Falaê Brasil.",
      },
      { property: "og:title", content: "Plano PRO Adultos | App, IA e Aulas ao Vivo" },
      {
        property: "og:description",
        content: "Uma assinatura de ensino contínuo com estudo no seu ritmo e aulas ao vivo para praticar com pessoas reais.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://falaebrasil.com.br/lp/adultos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/lp/adultos" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(courseJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: AdultProLanding,
});

function PurchaseButton({ label = "Quero entrar no Plano PRO", full = false }: { label?: string; full?: boolean }) {
  return (
    <Button asChild className={`h-auto rounded-full bg-accent px-7 py-4 text-center text-sm font-bold uppercase text-accent-foreground shadow-cta hover:bg-accent/90 ${full ? "w-full" : "w-full sm:w-auto"}`}>
      <a
        href={CHECKOUT.proAdultos}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event: MouseEvent<HTMLAnchorElement>) => trackCheckoutAndNavigate(event, "PRO_ADULTOS")}
      >
        {label}<ArrowRight aria-hidden="true" />
      </a>
    </Button>
  );
}

function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-brand-blue-light" : "text-brand-blue-mid"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      {text && <p className={`mx-auto mt-5 max-w-2xl leading-relaxed ${light ? "text-brand-blue-light" : "text-muted-foreground"}`}>{text}</p>}
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-10 max-w-3xl divide-y divide-border border-y border-border">
      {faq.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.q}>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setOpen(expanded ? null : index)}
              aria-expanded={expanded}
              aria-controls={`faq-${index}`}
              className="h-auto w-full justify-between whitespace-normal rounded-none px-0 py-5 text-left text-base font-semibold text-primary hover:bg-transparent hover:text-primary"
            >
              <span>{item.q}</span>
              <ChevronDown className={`h-5 w-5 flex-none transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
            </Button>
            <div id={`faq-${index}`} className={`grid transition-[grid-template-rows] ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden"><p className="pb-5 leading-relaxed text-muted-foreground">{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AdultProLanding() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="bg-brand-navy px-4 py-3 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <img src={logoFalae} alt="Falaê Brasil" className="h-12 w-auto" />
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue-light hover:text-primary-foreground">Site principal</Link>
        </div>
      </header>

      <main>
        <section className="bg-gradient-ice px-4 py-12 sm:py-18 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-up">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-mid">Falaê Brasil • Plano PRO Adultos 18+</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] text-primary sm:text-5xl lg:text-6xl">Estude no seu ritmo. Pratique durante a semana. Use o inglês com pessoas reais.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground">No Plano PRO, você combina o APP Falaê Brasil, cinco ferramentas de inteligência artificial e aulas ao vivo via Zoom para não depender só de um aplicativo e também não ficar limitado ao horário de uma aula.</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Do A1 ao C2, com conteúdo organizado por nível e situações de inglês que aparecem na vida, no trabalho e nas viagens.</p>
              <ul className="mt-7 grid gap-3 text-sm font-semibold sm:grid-cols-3">
                {["Conteúdo por nível", "5 ferramentas de IA", "Aulas ao vivo no Zoom"].map((item) => <li key={item} className="flex items-center gap-2"><Check className="h-5 w-5 text-brand-gold" />{item}</li>)}
              </ul>
              <div className="mt-8 max-w-lg"><PurchaseButton label="Quero entrar no Plano PRO" /></div>
              <p className="mt-3 text-sm text-muted-foreground">R$ 147,00 por mês • assinatura recorrente mensal até o cancelamento</p>
            </div>

            <div className="relative mx-auto w-full max-w-xl pb-10">
              <div className="overflow-hidden rounded-lg border border-border bg-card shadow-elevated">
                <div className="flex items-center gap-2 bg-brand-navy px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-accent" /><span className="text-xs font-semibold text-brand-blue-light">Aula ao vivo • Zoom</span></div>
                <img src={liveClassImage} alt="Aula de inglês ao vivo pelo notebook" className="aspect-video w-full object-cover" />
              </div>
              <div className="relative -mt-14 ml-auto mr-4 w-40 rounded-[1.75rem] border-4 border-brand-navy bg-card p-3 shadow-elevated sm:w-48">
                <div className="rounded-xl bg-primary p-3 text-primary-foreground">
                  <Smartphone className="h-5 w-5 text-brand-gold" />
                  <p className="mt-3 text-xs font-bold">APP Falaê Brasil</p>
                  <div className="mt-3 space-y-2">{["A1 → C2", "IA Falaê", "IA Memorizaê"].map((item) => <div key={item} className="rounded bg-primary-foreground/10 px-2 py-1.5 text-[10px]">{item}</div>)}</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-3 rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase text-accent-foreground shadow-cta">APP + IA + aula</div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Continuidade" title="Estudar sozinho é fácil de começar. O difícil é continuar." />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-lg border border-border bg-card p-7 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Quando o curso depende só da sua motivação</p>
                <ul className="mt-5 space-y-3 text-muted-foreground">{["Você entra animado", "A rotina aperta", "Começa a adiar", "O aplicativo fica parado", "Falta um momento real de uso"].map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true">—</span>{item}</li>)}</ul>
              </article>
              <article className="rounded-lg border-2 border-accent bg-card p-7 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Com o Plano PRO</p>
                <ul className="mt-5 space-y-3">{["Estuda no seu ritmo no app", "Pratica com IA durante a semana", "Participa de aulas ao vivo", "Encontra outras pessoas para usar inglês", "Continua tendo contato com o idioma"].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 flex-none text-brand-gold" />{item}</li>)}</ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-brand-ice px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Como funciona" title="Entenda o Plano PRO em cerca de 1 minuto." text="Veja como aplicativo, IA e aulas ao vivo trabalham juntos." />
            <div className="mx-auto mt-8 w-full max-w-[430px] rounded-lg border border-brand-blue-mid bg-background p-[1.5px] shadow-elevated">
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-brand-navy">
                <video
                  src={vslLpAdultos.url}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="Vídeo do Plano PRO Adultos"
                  className="absolute inset-0 h-full w-full object-contain"
                >
                  Seu navegador não suporta a reprodução deste vídeo.
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-corporate px-4 py-16 text-primary-foreground sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading light eyebrow="Uma assinatura integrada" title="Um plano. Duas formas de continuar em contato com o inglês." />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-8">
                <Smartphone className="h-8 w-8 text-brand-gold" /><p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-light">No seu tempo</p><h3 className="mt-2 text-2xl text-primary-foreground">APP Falaê Brasil</h3><p className="mt-4 leading-relaxed text-brand-blue-light">Entre quando puder, siga o conteúdo do seu nível, faça atividades e pratique com as ferramentas de IA.</p>
              </article>
              <article className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-8">
                <Users className="h-8 w-8 text-brand-gold" /><p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-light">Com pessoas reais</p><h3 className="mt-2 text-2xl text-primary-foreground">Aulas ao vivo via Zoom</h3><p className="mt-4 leading-relaxed text-brand-blue-light">Participe dos horários disponíveis para seu nível e use o inglês junto com professores e outros alunos.</p>
              </article>
            </div>
            <p className="mt-8 text-center text-lg font-semibold">Uma parte não substitui a outra. Elas trabalham juntas.</p>
          </div>
        </section>

        <section id="plano" className="bg-brand-ice px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Oferta vigente" title="Plano PRO Adultos 18+" text="Uma única assinatura para estudar no aplicativo, praticar com IA e participar das aulas ao vivo." />
            <article className="mx-auto mt-10 max-w-4xl rounded-lg border-2 border-accent bg-card p-7 shadow-elevated sm:p-10">
              <div className="grid gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
                <div className="text-center lg:text-left">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-blue-mid">Assinatura mensal</p>
                  <span className="mt-4 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">30% OFF</span>
                  <p className="mt-2 text-5xl font-bold text-primary">R$ 147,00</p>
                  <p className="mt-2 text-muted-foreground">por mês, no cartão</p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Cobrança recorrente mensal até o cancelamento. O valor não compromete o limite do cartão como uma compra parcelada em 12 vezes.</p>
                  <div className="mt-7"><PurchaseButton full label="Quero me matricular" /></div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {included.map(({ icon: Icon, title, items }) => (
                    <div key={title} className="rounded-lg border border-border bg-background p-5">
                      <Icon className="h-6 w-6 text-brand-gold" /><h3 className="mt-3 text-base text-primary">{title}</h3>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">{items.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-brand-blue-mid" />{item}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </div>
              <LegalConsent action="matrícula" className="mt-6" />
            </article>
          </div>
        </section>

        <section className="bg-background px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="O problema da continuidade" title="O problema não é só começar a estudar. É conseguir manter o inglês presente na semana." />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                ["Só aplicativo", "Você tem liberdade, mas pode acabar adiando."],
                ["Só aula", "Você pratica naquele horário, mas ainda precisa continuar em contato com o idioma durante a semana."],
                ["APP + IA + AULA", "Você combina estudo individual e momentos reais de participação."],
              ].map(([title, text], index) => <article key={title} className={`rounded-lg border p-7 ${index === 2 ? "border-accent bg-brand-ice" : "border-border bg-card"}`}><p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue-mid">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-3 text-xl text-primary">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-brand-ice px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Nosso jeito de ensinar" title="Inglês Transversal: o idioma aparece dentro da vida." text="Em vez de deixar o inglês preso a exercícios isolados, o conteúdo conecta língua, situações, trabalho, viagens, cultura e objetivos pessoais." />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[["Contexto", "Entenda onde aquela linguagem aparece."], ["Prática", "Leia, escute, escreva, memorize e fale."], ["Aplicação", "Leve as estruturas para situações que façam sentido para sua vida."]].map(([title, text], index) => <article key={title} className="rounded-lg border border-border bg-card p-7 shadow-soft"><p className="text-3xl font-bold text-brand-gold">0{index + 1}</p><h3 className="mt-4 text-xl">{title}</h3><p className="mt-3 text-muted-foreground">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-brand-navy px-4 py-16 text-primary-foreground sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading light eyebrow="Progressão organizada" title="Do A1 ao C2, sem precisar comprar um novo curso a cada etapa." text="O conteúdo é organizado por níveis para você estudar de acordo com o momento em que se encontra." />
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {levels.map(([code, label]) => <div key={code} className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-4 text-center"><p className="text-2xl font-bold text-brand-gold">{code}</p><p className="mt-1 text-xs text-brand-blue-light">{label}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Contextos de aplicação" title="O inglês também encontra situações de trabalho." text="São contextos de aplicação presentes no conteúdo." />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                { icon: Plane, title: "Turismo", items: "Aeroporto, hotel, restaurante, atendimento e transporte." },
                { icon: Sparkles, title: "Empreendedorismo", items: "Clientes, produtos, networking, fornecedores e apresentações." },
                { icon: BriefcaseBusiness, title: "Multinacionais", items: "Reuniões, entrevistas, projetos, liderança e comunicação corporativa." },
              ].map(({ icon: Icon, title, items }) => <article key={title} className="rounded-lg border border-border bg-card p-7 shadow-soft"><Icon className="h-8 w-8 text-brand-gold" /><h3 className="mt-5 text-xl">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{items}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-brand-ice px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Prática entre aulas" title="Cinco ferramentas para continuar praticando durante a semana." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {aiTools.map(({ icon: Icon, name, text }) => <article key={name} className="rounded-lg border border-border bg-card p-6"><Icon className="h-7 w-7 text-brand-blue-mid" /><h3 className="mt-4 text-base">{name}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p></article>)}
            </div>
            <p className="mx-auto mt-7 max-w-2xl text-center text-sm text-muted-foreground">As ferramentas de IA apoiam a prática e podem apresentar limitações. Elas não substituem professores nem garantem resultados.</p>
          </div>
        </section>

        <section className="bg-background px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Exemplo ilustrativo" title="Como o Plano PRO pode entrar na sua semana?" />
            <div className="mt-10 grid gap-3 md:grid-cols-5">
              {week.map(([day, activity], index) => <article key={day} className="rounded-lg border border-border bg-card p-5"><div className="flex items-center justify-between"><CalendarDays className="h-5 w-5 text-brand-gold" /><span className="text-xs font-bold text-muted-foreground">0{index + 1}</span></div><h3 className="mt-4 text-base">{day}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activity}</p></article>)}
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground">Este é apenas um exemplo de organização. Você escolhe quando estudar e participa das aulas conforme os horários disponíveis.</p>
          </div>
        </section>

        <section className="bg-gradient-corporate px-4 py-16 text-primary-foreground sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading light eyebrow="Primeiros passos" title="Entrou no PRO. E agora?" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["Acesse", "Entre no APP Falaê Brasil."],
                ["Identifique seu nível", "Comece pelo conteúdo correspondente ao seu momento."],
                ["Pratique", "Use as atividades e ferramentas de IA."],
                ["Participe", "Entre nas aulas ao vivo disponíveis para seu nível."],
                ["Continue", "Use o app entre uma aula e outra."],
              ].map(([title, text], index) => <article key={title} className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-5"><p className="text-2xl font-bold text-brand-gold">{index + 1}</p><h3 className="mt-4 text-base text-primary-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-brand-blue-light">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <img src={joisAlaby} alt="Teacher Jóis Alaby, criador da Falaê Brasil" loading="lazy" className="mx-auto aspect-square w-full max-w-md rounded-lg object-cover shadow-elevated" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-mid">Quem está por trás da Falaê Brasil</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Teacher Jóis Alaby</h2>
              <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                <p>Jóis Alaby teve contato intenso com o inglês ainda na infância, vivendo por cinco anos nos Estados Unidos entre o português de casa e o inglês da vida cotidiana.</p>
                <p>Mais tarde, voltou aos Estados Unidos para a universidade e construiu uma trajetória profissional internacional, incluindo duas décadas de experiência ligada ao governo americano, no Ministério da Agricultura, com atuação em 23 países.</p>
                <p>Foi dessa combinação de língua, vida real, trabalho e cultura que nasceu a proposta de Inglês Transversal da Falaê Brasil.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-ice px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Vivências reais" title="Experiências de alunos da Falaê Brasil" />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {testimonials.map((item) => <figure key={item.name} className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-soft"><blockquote className="flex-1 leading-relaxed text-muted-foreground">“{item.quote}”</blockquote><figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-5"><img src={item.photo} alt={item.name} loading="lazy" className="h-14 w-14 rounded-full object-cover" /><div><p className="font-bold text-primary">{item.name}</p><p className="text-sm text-muted-foreground">{item.role}</p></div></figcaption></figure>)}
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">Experiências individuais. Resultados e evolução variam conforme participação, prática e contexto de cada aluno.</p>
          </div>
        </section>

        <section className="bg-background px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl rounded-lg border border-accent bg-card p-7 text-center shadow-elevated sm:p-10">
            <Volume2 className="mx-auto h-8 w-8 text-brand-gold" />
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Quer estudar inglês sem depender só de uma tela?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">O Plano PRO combina estudo no seu ritmo, ferramentas de prática e aulas ao vivo em uma única assinatura.</p>
            <div className="mx-auto mt-8 max-w-lg"><PurchaseButton label="Quero entrar no Plano PRO" /></div>
          </div>
        </section>

        <section className="bg-brand-navy px-4 py-16 text-primary-foreground sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-light">Oferta final</p>
              <h2 className="mt-3 text-3xl font-bold text-primary-foreground sm:text-4xl">Plano PRO Adultos 18+</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">{["APP Falaê Brasil", "5 ferramentas de IA", "Conteúdo A1 a C2", "Aulas ao vivo via Zoom", "Comunidades por nível", "Plantão de dúvidas"].map((item) => <li key={item} className="flex items-center gap-2 text-brand-blue-light"><Check className="h-5 w-5 text-brand-gold" />{item}</li>)}</ul>
            </div>
            <div className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-7 text-center">
              <p className="text-sm font-semibold text-brand-blue-light">Assinatura recorrente mensal</p><p className="mt-3 text-5xl font-bold">R$ 147,00</p><p className="mt-2 text-sm text-brand-blue-light">por mês no cartão, até o cancelamento</p>
              <div className="mt-7"><PurchaseButton full label="Quero me matricular" /></div>
              <LegalConsent action="matrícula" dark className="mt-5" />
            </div>
          </div>
        </section>

        <section className="bg-brand-ice px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Informações importantes" title="Perguntas frequentes" /><Faq /></div>
        </section>
      </main>

      <ContactSection />
      <footer className="bg-brand-navy px-4 py-10 text-center text-sm text-brand-blue-light">
        <div className="mx-auto max-w-6xl">
          <img src={logoFalae} alt="Falaê Brasil" loading="lazy" className="mx-auto h-20 w-auto" />
          <p className="mt-5 font-semibold text-primary-foreground">IBOX Centro de Idiomas Ltda. • CNPJ 18.656.810/0001-66</p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3">
            <a href="https://app.falaebrasil.com.br" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">app.falaebrasil.com.br</a>
            <a href="mailto:atendimento@falaebrasil.com.br" className="underline underline-offset-4">atendimento@falaebrasil.com.br</a>
            <a href="https://wa.me/5511981612800" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">(11) 98161-2800</a>
          </div>
          <LegalLinks className="mt-5 flex flex-wrap justify-center gap-6" />
        </div>
      </footer>
    </div>
  );
}

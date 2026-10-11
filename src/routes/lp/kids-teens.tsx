import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  Clock3,
  Headphones,
  Languages,
  Laptop,
  MessageCircle,
  Mic2,
  Music2,
  PenLine,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { MouseEvent } from "react";

import { LegalConsent, LegalLinks } from "@/components/LegalLinks";
import { ContactSection } from "@/components/ContactSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import logoFalae from "@/assets/logo-falae.png";
import joisAlaby from "@/assets/jois-alaby-new.png";
import liveClassImage from "@/assets/home-videoconf.jpg";
import capaKids from "@/assets/capa-kids.png.asset.json";
import capaTeens from "@/assets/capa-teens.png.asset.json";
import { CHECKOUT, WHATSAPP_GERAL } from "@/lib/checkout";
import { trackCheckoutAndNavigate } from "@/lib/pixel";

const faq = [
  {
    question: "Para quais idades é o Plano PRO Kids & Teens?",
    answer: "Kids atende crianças de 8 a 12 anos. Teens atende adolescentes de 13 a 17 anos, com trilhas próprias para cada faixa etária.",
  },
  {
    question: "Meu filho nunca estudou inglês. Pode começar?",
    answer: "Sim. A trilha Kids começa no Pré-A1, e a equipe orienta a entrada de acordo com a idade e o nível atual do aluno.",
  },
  {
    question: "Como vocês definem a turma?",
    answer: "A equipe considera a faixa etária e o nível do aluno para orientar a entrada na trilha e na turma adequadas.",
  },
  {
    question: "As aulas são em grupo?",
    answer: "Sim. As aulas ao vivo acontecem via Zoom em grupos próprios para Kids e Teens, organizados conforme faixa etária e nível.",
  },
  {
    question: "Como funcionam os horários?",
    answer: "Existem horários definidos e disponibilidade por turma. A equipe informa as opções compatíveis com a idade e o nível do aluno.",
  },
  {
    question: "Quantas aulas ao vivo ele pode fazer?",
    answer: "O aluno participa dos encontros disponíveis para sua faixa etária, nível e turma, conforme a programação vigente.",
  },
  {
    question: "O aplicativo pode ser usado durante a semana?",
    answer: "Sim. Durante a vigência da assinatura, o aluno pode acessar o conteúdo correspondente no app e continuar praticando entre os encontros ao vivo.",
  },
  {
    question: "Quais ferramentas de IA estão incluídas?",
    answer: "IA Falaê, IA Escutaê, IA Memorizaê, IA Escreveaê e IA Leiaê, para apoiar fala, escuta, memória, escrita e leitura.",
  },
  {
    question: "Os pais conseguem acompanhar?",
    answer: "A família pode acompanhar a rotina de uso e conversar com o canal de atendimento sobre acesso e funcionamento do plano.",
  },
  {
    question: "Posso cancelar?",
    answer: "Sim. A assinatura é cobrada mensalmente até o cancelamento, que pode ser solicitado pelos canais oficiais de atendimento.",
  },
  {
    question: "O Plano PRO garante que meu filho ficará fluente?",
    answer: "Não. A aprendizagem varia conforme idade, frequência, participação, prática e contexto de cada aluno. O Plano PRO oferece conteúdo, ferramentas e aulas para apoiar uma rotina contínua de contato com o inglês.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Plano PRO Kids & Teens — Falaê Brasil",
  description: "Assinatura de inglês online para crianças e adolescentes de 8 a 17 anos, com aplicativo, conteúdo por idade, cinco ferramentas de IA e aulas ao vivo via Zoom.",
  provider: { "@type": "Organization", name: "Falaê Brasil", url: "https://falaebrasil.com.br" },
  offers: {
    "@type": "Offer",
    price: "126.00",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: CHECKOUT.proKidsTeens,
  },
};

export const Route = createFileRoute("/lp/kids-teens")({
  head: () => ({
    meta: [
      { title: "Plano PRO Kids & Teens | Inglês Online para 8 a 17 anos | Falaê Brasil" },
      { name: "description", content: "Inglês online para crianças e adolescentes com app, conteúdo por idade, cinco ferramentas de IA e aulas ao vivo via Zoom." },
      { property: "og:title", content: "Plano PRO Kids & Teens | Falaê Brasil" },
      { property: "og:description", content: "App, conteúdo por idade, cinco ferramentas de IA e aulas ao vivo para crianças e adolescentes de 8 a 17 anos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://falaebrasil.com.br/lp/kids-teens" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/lp/kids-teens" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(courseJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: KidsTeensLandingPage,
});

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-brand-blue-light" : "text-brand-blue-mid"}`}>{children}</p>;
}

function Heading({ children, light = false, className = "" }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return <h2 className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-primary-foreground" : "text-primary"} ${className}`}>{children}</h2>;
}

function EnrollmentButton({ label = "Quero matricular meu filho", className = "" }: { label?: string; className?: string }) {
  return (
    <Button asChild className={`h-auto min-h-14 rounded-full bg-accent px-7 py-4 text-center text-sm font-bold uppercase text-accent-foreground shadow-cta hover:bg-accent/90 ${className}`}>
      <a
        href={CHECKOUT.proKidsTeens}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event: MouseEvent<HTMLAnchorElement>) => trackCheckoutAndNavigate(event, "PRO_KIDS_TEENS")}
      >
        {label}<ArrowRight aria-hidden="true" />
      </a>
    </Button>
  );
}

const contactComparison = [
  {
    title: "Quando o inglês fica só no dia da aula",
    items: ["Participa da aula", "Passa vários dias sem contato", "Esquece parte do que viu", "Depende do próximo encontro para praticar novamente"],
  },
  {
    title: "Com o Plano PRO",
    items: ["Participa das aulas ao vivo", "Continua no app durante a semana", "Usa quizzes, histórias e músicas", "Pratica com as ferramentas de IA", "Reencontra o conteúdo em outros formatos"],
  },
] as const;

const aiTools = [
  { icon: Mic2, name: "IA Falaê", text: "Fala e pronúncia." },
  { icon: Headphones, name: "IA Escutaê", text: "Compreensão auditiva." },
  { icon: Sparkles, name: "IA Memorizaê", text: "Revisão e memória." },
  { icon: PenLine, name: "IA Escreveaê", text: "Escrita." },
  { icon: BookOpen, name: "IA Leiaê", text: "Leitura." },
] as const;

const week = [
  ["Segunda", "Uma lição curta no app."],
  ["Terça", "Quiz ou música."],
  ["Quarta", "Aula ao vivo, conforme horário disponível."],
  ["Quinta", "Prática rápida com uma ferramenta de IA."],
  ["Sexta", "História, leitura ou revisão."],
] as const;

const gettingStarted = [
  ["01", "Matrícula", "Faça a matrícula no Plano PRO Kids & Teens."],
  ["02", "Idade e nível", "A equipe orienta a entrada na trilha e turma adequadas."],
  ["03", "App", "O aluno acessa o conteúdo correspondente."],
  ["04", "Aula ao vivo", "Participa dos encontros disponíveis para sua faixa etária e nível."],
  ["05", "Continuidade", "Durante a semana, continua em contato com o inglês pelo app."],
] as const;

function KidsTeensLandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="bg-brand-navy px-4 py-3 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <img src={logoFalae} alt="Falaê Brasil" className="h-12 w-auto sm:h-14" />
          <Link to="/" className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground hover:text-brand-blue-light">Site principal</Link>
        </div>
      </header>

      <main>
        <section className="bg-gradient-ice px-4 py-14 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="animate-fade-up">
              <Eyebrow>Falaê Brasil • Kids & Teens • 8 a 17 anos</Eyebrow>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] text-primary sm:text-5xl lg:text-6xl">Inglês durante a semana, não só no horário da aula.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground sm:text-xl">No Plano PRO Kids & Teens, seu filho combina aplicativo, atividades, cinco ferramentas de inteligência artificial e aulas ao vivo via Zoom, com conteúdos pensados para crianças e adolescentes.</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Kids e Teens estudam em trilhas próprias, com personagens, diálogos, músicas, histórias, quizzes e atividades adequadas à idade.</p>
              <ul className="mt-7 grid gap-3 text-sm font-semibold text-primary sm:grid-cols-3">
                {["Conteúdo por idade", "Prática durante a semana", "Aulas ao vivo via Zoom"].map((item) => <li key={item} className="flex items-center gap-2"><Check className="h-5 w-5 text-brand-gold" />{item}</li>)}
              </ul>
              <div className="mt-8 flex flex-col items-start gap-3">
                <EnrollmentButton label="Quero conhecer o Plano PRO" />
                <p className="text-sm text-muted-foreground">R$ 126,00 por mês • assinatura recorrente mensal até o cancelamento</p>
              </div>
            </div>

            <div className="relative mx-auto min-h-[470px] w-full max-w-xl sm:min-h-[540px]">
              <div className="absolute inset-x-0 top-0 overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
                <div className="flex items-center gap-2 bg-brand-navy px-4 py-3 text-xs font-semibold text-primary-foreground"><span className="h-2 w-2 rounded-full bg-accent" />Aula ao vivo • Zoom</div>
                <img src={liveClassImage} alt="Aula de inglês ao vivo por videoconferência" className="aspect-video w-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-[52%] rotate-[-3deg] overflow-hidden rounded-xl border-4 border-card bg-card shadow-elevated sm:left-4">
                <img src={capaKids.url} alt="Conteúdo Falaê Brasil Kids" className="aspect-square w-full object-cover" />
                <p className="px-3 py-2 text-center text-xs font-bold uppercase text-primary">Kids • 8 a 12 anos</p>
              </div>
              <div className="absolute bottom-2 right-0 w-[52%] rotate-[3deg] overflow-hidden rounded-xl border-4 border-card bg-card shadow-elevated sm:right-4">
                <img src={capaTeens.url} alt="Conteúdo Falaê Brasil Teens" className="aspect-square w-full object-cover" />
                <p className="px-3 py-2 text-center text-xs font-bold uppercase text-primary">Teens • 13 a 17 anos</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <Eyebrow>Continuidade</Eyebrow>
            <Heading>Uma aula por semana não precisa ser o único contato com o inglês.</Heading>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {contactComparison.map((group, index) => (
                <article key={group.title} className={`rounded-xl border p-7 text-left shadow-soft ${index === 1 ? "border-accent bg-card" : "border-border bg-secondary"}`}>
                  <h3 className="text-lg font-bold uppercase text-primary">{group.title}</h3>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {group.items.map((item) => <li key={item} className="flex gap-3"><span className="font-bold text-brand-gold">{index === 1 ? "✓" : "—"}</span>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">O objetivo é aumentar os momentos de contato com o idioma, respeitando idade, rotina e ritmo de cada aluno.</p>
          </div>
        </section>

        <section className="bg-brand-navy px-4 py-16 text-primary-foreground sm:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <Eyebrow light>App + encontro ao vivo</Eyebrow>
            <Heading light>Um plano com estudo no app e encontros ao vivo.</Heading>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 text-left">
                <Laptop className="h-9 w-9 text-brand-gold" />
                <h3 className="mt-5 text-xl font-bold text-primary-foreground">No app</h3>
                <p className="mt-3 leading-relaxed text-brand-blue-light">Conteúdo por idade e nível, histórias, diálogos, músicas, quizzes e ferramentas de prática.</p>
              </article>
              <article className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 text-left">
                <Users className="h-9 w-9 text-brand-gold" />
                <h3 className="mt-5 text-xl font-bold text-primary-foreground">Ao vivo</h3>
                <p className="mt-3 leading-relaxed text-brand-blue-light">Aulas via Zoom em grupos próprios para Kids e Teens, conforme horários e níveis disponíveis.</p>
              </article>
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-primary-foreground/90">O aplicativo mantém o contato durante a semana. A aula ao vivo cria um momento de participação com outras pessoas.</p>
          </div>
        </section>

        <section id="plano" className="scroll-mt-8 bg-brand-ice px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <article className="rounded-2xl border-2 border-accent bg-card p-7 shadow-elevated sm:p-10">
              <div className="text-center">
                <Eyebrow>Assinatura para 8 a 17 anos</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Plano PRO Kids & Teens</h2>
                <span className="mt-6 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">40% OFF</span>
                <div className="mt-2 text-5xl font-bold text-primary">R$ 126,00</div>
                <p className="mt-2 font-semibold text-muted-foreground">por mês • cobrança recorrente mensal</p>
              </div>
              <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {["APP Falaê Brasil durante a assinatura", "Trilhas próprias para Kids e Teens", "Conteúdo por idade e nível", "Diálogos, histórias, músicas e quizzes", "Cinco ferramentas de IA", "Atividades para praticar durante a semana", "Aulas ao vivo via Zoom", "Turmas conforme idade, nível e disponibilidade"].map((item) => <div key={item} className="flex items-start gap-3 text-sm leading-relaxed"><span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">✓</span>{item}</div>)}
              </div>
              <div className="mt-9 flex flex-col items-center gap-4">
                <EnrollmentButton className="w-full max-w-xl" />
                <p className="text-center text-sm leading-relaxed text-muted-foreground">A assinatura permanece ativa até o cancelamento. O cancelamento pode ser solicitado pelos canais oficiais de atendimento.</p>
                <LegalConsent action="matrícula" responsible />
              </div>
            </article>
          </div>
        </section>

        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <Eyebrow>Contato frequente</Eyebrow>
            <Heading>Crianças e adolescentes aprendem melhor quando o inglês aparece mais de uma vez na semana.</Heading>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                [Clock3, "Pouco contato", "Quando o inglês aparece só na aula, há muitos dias entre um encontro e outro."],
                [Languages, "Conteúdo distante da idade", "Exemplos muito adultos ou muito abstratos podem diminuir o interesse."],
                [Sparkles, "Falta de variedade", "Só ler ou só assistir não trabalha todas as formas de contato com o idioma."],
              ].map(([Icon, title, text]) => {
                const CardIcon = Icon as typeof Clock3;
                return <article key={String(title)} className="rounded-xl border border-border bg-card p-7 text-left shadow-soft"><CardIcon className="h-8 w-8 text-brand-blue-mid" /><h3 className="mt-5 text-lg font-bold text-primary">{String(title)}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{String(text)}</p></article>;
              })}
            </div>
            <p className="mt-8 text-lg font-semibold text-primary">O Plano PRO combina formatos diferentes para manter o inglês presente.</p>
          </div>
        </section>

        <section className="bg-brand-ice px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <Eyebrow>Inglês Transversal</Eyebrow>
            <Heading>Inglês conectado ao universo de quem está aprendendo.</Heading>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">Os conteúdos usam personagens, situações, cultura brasileira, músicas, histórias e diálogos para aproximar o idioma da realidade de crianças e adolescentes.</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[[MessageCircle, "Diálogo", "Personagens apresentam a situação."], [Sparkles, "Prática", "Quizzes, histórias, músicas e atividades retomam o conteúdo."], [Users, "Participação", "Aulas ao vivo criam momentos para usar o inglês com outras pessoas."]].map(([Icon, title, text]) => { const CardIcon = Icon as typeof MessageCircle; return <article key={String(title)} className="rounded-xl bg-card p-7 text-left shadow-soft"><CardIcon className="h-8 w-8 text-brand-gold" /><h3 className="mt-5 text-lg font-bold text-primary">{String(title)}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{String(text)}</p></article>; })}
            </div>
          </div>
        </section>

        <section className="bg-brand-navy px-4 py-16 text-primary-foreground sm:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <Eyebrow light>Conteúdo por idade</Eyebrow>
            <Heading light>Duas jornadas, de acordo com a idade.</Heading>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="overflow-hidden rounded-xl bg-card text-left text-card-foreground shadow-elevated">
                <img src={capaKids.url} alt="Capa da jornada Falaê Brasil Kids" className="aspect-[16/9] w-full object-cover object-top" />
                <div className="p-7"><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-mid">Kids • 8 a 12 anos</p><h3 className="mt-3 text-2xl font-bold text-primary">Pré-A1 ao A1</h3><p className="mt-3 leading-relaxed text-muted-foreground">Kids 1 e Kids 2: Pré-A1. Kids 3 e Kids 4: A1.</p><p className="mt-3 leading-relaxed">Mais imagens, diálogos simples, música, histórias e atividades adequadas à infância.</p></div>
              </article>
              <article className="overflow-hidden rounded-xl bg-card text-left text-card-foreground shadow-elevated">
                <img src={capaTeens.url} alt="Capa da jornada Falaê Brasil Teens" className="aspect-[16/9] w-full object-cover object-top" />
                <div className="p-7"><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-mid">Teens • 13 a 17 anos</p><h3 className="mt-3 text-2xl font-bold text-primary">A1 ao A2</h3><p className="mt-3 leading-relaxed text-muted-foreground">Teens 1 e Teens 2: A1. Teens 3 e Teens 4: A2.</p><p className="mt-3 leading-relaxed">Situações ligadas a escola, amigos, cultura, cotidiano e comunicação adolescente.</p></div>
              </article>
            </div>
            <p className="mx-auto mt-8 max-w-3xl leading-relaxed text-brand-blue-light">Depois da trilha Teens, o aluno pode continuar sua progressão dentro da Falaê Brasil em níveis posteriores.</p>
          </div>
        </section>

        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <Eyebrow>Cultura brasileira</Eyebrow>
            <Heading>O Brasil como ponto de partida.</Heading>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">O Brasil funciona como ponto de partida para muitas das situações e diálogos.</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[["Cotidiano", "Família, escola, comidas, bairros e passeios."], ["Cultura", "Música, histórias, festas, artes e esportes."], ["Troca cultural", "Apresentar-se, fazer perguntas, explicar costumes e conversar com visitantes."]].map(([title, text]) => <article key={title} className="rounded-xl border border-border bg-card p-7 text-left shadow-soft"><h3 className="text-lg font-bold text-primary">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-brand-ice px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <Eyebrow>Prática assistida</Eyebrow>
            <Heading>Cinco ferramentas para praticar habilidades diferentes.</Heading>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {aiTools.map(({ icon: Icon, name, text }) => <article key={name} className="rounded-xl border border-border bg-card p-6 text-left shadow-soft"><Icon className="h-8 w-8 text-brand-blue-mid" /><h3 className="mt-4 text-base font-bold text-primary">{name}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p></article>)}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">As ferramentas são recursos de apoio ao estudo e não substituem acompanhamento humano. Respostas e avaliações de IA podem apresentar limitações.</p>
          </div>
        </section>

        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <Eyebrow>Um exemplo possível</Eyebrow>
            <Heading>Como o inglês pode aparecer durante a semana?</Heading>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {week.map(([day, text], index) => <article key={day} className="rounded-xl border border-border bg-card p-6 text-left shadow-soft"><span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-mid">{day}</span><div className="my-4 h-px bg-border" /><p className="leading-relaxed text-foreground">{text}</p><span className="mt-5 block text-3xl font-bold text-brand-ice">0{index + 1}</span></article>)}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">Este é apenas um exemplo. A rotina varia conforme idade, turma, horários e disponibilidade da família.</p>
          </div>
        </section>

        <section className="bg-brand-navy px-4 py-16 text-primary-foreground sm:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <Eyebrow light>Da matrícula à rotina</Eyebrow>
            <Heading light>Como começar</Heading>
            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {gettingStarted.map(([number, title, text]) => <article key={number} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-left"><span className="text-2xl font-bold text-brand-gold">{number}</span><h3 className="mt-4 text-base font-bold text-primary-foreground">{title}</h3><p className="mt-3 text-sm leading-relaxed text-brand-blue-light">{text}</p></article>)}
            </div>
            <div className="mt-10"><EnrollmentButton /></div>
            <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-xl border border-primary-foreground/15 p-5 text-left text-sm leading-relaxed text-brand-blue-light"><ShieldCheck className="h-6 w-6 flex-none text-brand-gold" /><p>Alunos e famílias contam com um canal de atendimento para dúvidas sobre acesso, rotina e funcionamento do plano, dentro dos horários informados pela Falaê Brasil.</p></div>
          </div>
        </section>

        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <img src={joisAlaby} alt="Teacher Jóis Alaby, criador da Falaê Brasil" className="mx-auto w-full max-w-md rounded-2xl object-cover shadow-elevated" />
            <div>
              <Eyebrow>Quem está por trás da Falaê Brasil</Eyebrow>
              <Heading>Teacher Jóis Alaby</Heading>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>Jóis Alaby teve contato intenso com o inglês ainda na infância, vivendo por cinco anos nos Estados Unidos entre o português de casa e o inglês da vida cotidiana.</p>
                <p>Mais tarde, voltou aos Estados Unidos para a universidade e construiu uma trajetória profissional internacional, incluindo duas décadas de experiência ligada ao governo americano, no Ministério da Agricultura, com atuação em 23 países.</p>
                <p>A proposta Kids & Teens nasceu da ideia de aproximar inglês, cultura brasileira e situações que façam sentido para crianças e adolescentes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-ice px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Uma assinatura, dois momentos de aprendizagem</Eyebrow>
            <Heading>Quer que o inglês apareça mais vezes na semana do seu filho?</Heading>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">O Plano PRO Kids & Teens combina conteúdo digital e aulas ao vivo em uma única assinatura.</p>
            <div className="mt-8"><EnrollmentButton /></div>
          </div>
        </section>

        <section className="bg-brand-navy px-4 py-16 text-primary-foreground sm:py-20">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_0.85fr]">
            <div>
              <Eyebrow light>Plano PRO Kids & Teens</Eyebrow>
              <Heading light>Para crianças e adolescentes de 8 a 17 anos.</Heading>
              <ul className="mt-7 grid gap-3 text-sm sm:grid-cols-2">
                {["App Falaê Brasil", "Trilhas Kids e Teens", "Cinco ferramentas de IA", "Histórias, diálogos e atividades", "Aulas ao vivo via Zoom", "Conteúdo por idade e nível"].map((item) => <li key={item} className="flex items-start gap-2 text-brand-blue-light"><Check className="mt-0.5 h-5 w-5 flex-none text-brand-gold" />{item}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-blue-light">Assinatura mensal</p>
              <div className="mt-4 text-5xl font-bold">R$ 126,00</div>
              <p className="mt-2 text-sm text-brand-blue-light">por mês • cobrança recorrente até o cancelamento</p>
              <div className="mt-7"><EnrollmentButton className="w-full" /></div>
              <LegalConsent action="matrícula" responsible dark className="mt-5" />
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-center"><Eyebrow>Informações importantes</Eyebrow><Heading>Perguntas frequentes</Heading></div>
            <Accordion type="single" collapsible defaultValue="item-0" className="mt-10">
              {faq.map((item, index) => <AccordionItem key={item.question} value={`item-${index}`}><AccordionTrigger className="py-5 text-base font-semibold text-primary hover:no-underline">{item.question}</AccordionTrigger><AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">{item.answer}</AccordionContent></AccordionItem>)}
            </Accordion>
          </div>
        </section>
      </main>

      <ContactSection />
      <footer className="bg-brand-navy px-4 py-12 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <img src={logoFalae} alt="Falaê Brasil" className="h-20 w-auto" />
          <p className="mt-5 font-bold">IBOX Centro de Idiomas Ltda.</p>
          <p className="mt-1 text-sm text-brand-blue-light">CNPJ 18.656.810/0001-66</p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <a href="mailto:atendimento@falaebrasil.com.br" className="underline underline-offset-4">atendimento@falaebrasil.com.br</a>
            <a href={WHATSAPP_GERAL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">(11) 98161-2800</a>
            <a href="https://app.falaebrasil.com.br" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">app.falaebrasil.com.br</a>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-brand-blue-light"><LegalLinks className="contents" /></div>
        </div>
      </footer>
    </div>
  );
}

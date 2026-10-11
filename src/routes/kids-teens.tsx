import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Brain, Check, Headphones, MessageCircle, Mic2, Music2, PenLine, Smartphone, Users, Video } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import capaTeens from "@/assets/capa-teens.png.asset.json";
import capaKids from "@/assets/capa-kids.png.asset.json";
import liveClassImage from "@/assets/home-videoconf.jpg";

export const Route = createFileRoute("/kids-teens")({
  head: () => ({
    meta: [
      { title: "Kids & Teens | Inglês Online para 8 a 17 anos | Falaê Brasil" },
      { name: "description", content: "Conheça a proposta da Falaê Brasil para crianças e adolescentes: app, conteúdo por idade, cinco ferramentas de IA e aulas ao vivo." },
      { property: "og:title", content: "Kids & Teens | Inglês Online para 8 a 17 anos | Falaê Brasil" },
      { property: "og:description", content: "Conheça a proposta da Falaê Brasil para crianças e adolescentes: app, conteúdo por idade, cinco ferramentas de IA e aulas ao vivo." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://falaebrasil.com.br/kids-teens" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/kids-teens" }],
  }),
  component: KidsTeensPage,
});

const flow = [
  { icon: Smartphone, title: "App", text: "Conteúdo por idade e nível." },
  { icon: Brain, title: "IA", text: "Ferramentas para praticar fala, escuta, memória, escrita e leitura." },
  { icon: Video, title: "Aula ao vivo", text: "Encontros via Zoom conforme faixa etária, nível e disponibilidade." },
];
const aiTools = [
  { icon: Mic2, name: "Falaê", text: "Fala e pronúncia" },
  { icon: Headphones, name: "Escutaê", text: "Compreensão auditiva" },
  { icon: Brain, name: "Memorizaê", text: "Memória e revisão" },
  { icon: PenLine, name: "Escreveaê", text: "Escrita" },
  { icon: BookOpen, name: "Leiaê", text: "Leitura" },
];
const week = [["Segunda","Lição curta no app."],["Terça","Quiz ou música."],["Quarta","Aula ao vivo conforme horário disponível."],["Quinta","Prática rápida com IA."],["Sexta","História, leitura ou revisão."]];
const family = [
  "quer mais contato com inglês durante a semana",
  "procura conteúdo adequado à idade",
  "quer combinar app e aula ao vivo",
  "prefere uma proposta que use histórias, diálogos e atividades",
  "quer diferenciar a jornada de Kids e Teens",
  "procura continuidade além do horário da aula",
];

function KidsTeensPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <main>
        <section className="bg-gradient-ice px-4 py-14 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">Falaê Brasil • Kids & Teens</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-primary sm:text-5xl">Inglês para crianças e adolescentes, com conteúdo próprio para cada idade.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground">App, histórias, diálogos, atividades, cinco ferramentas de IA e aulas ao vivo via Zoom.</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Kids e Teens seguem jornadas diferentes, com linguagem, personagens e situações adequadas a cada faixa etária.</p>
              <Link to="/lp/kids-teens" className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-accent px-7 py-4 text-center text-sm font-bold uppercase text-accent-foreground shadow-cta transition-colors hover:bg-accent/90">Conhecer o Plano PRO Kids & Teens</Link>
            </div>
            <div className="relative mx-auto min-h-[470px] w-full max-w-xl sm:min-h-[540px]">
              <div className="absolute inset-x-0 top-0 overflow-hidden rounded-lg border border-border bg-card shadow-elevated"><div className="flex items-center gap-2 bg-brand-navy px-4 py-3 text-xs font-semibold text-primary-foreground"><Video className="h-4 w-4 text-brand-gold" />Aula ao vivo • Zoom</div><img src={liveClassImage} alt="Aula de inglês ao vivo para Kids e Teens" className="aspect-video w-full object-cover" /></div>
              <div className="absolute bottom-0 left-0 w-[52%] rotate-[-3deg] overflow-hidden rounded-lg border-4 border-card bg-card shadow-elevated sm:left-4"><img src={capaKids.url} alt="Conteúdo Falaê Brasil Kids" className="aspect-square w-full object-cover" /><p className="px-3 py-2 text-center text-xs font-bold uppercase text-primary">Kids • 8 a 12 anos</p></div>
              <div className="absolute bottom-2 right-0 w-[52%] rotate-[3deg] overflow-hidden rounded-lg border-4 border-card bg-card shadow-elevated sm:right-4"><img src={capaTeens.url} alt="Conteúdo Falaê Brasil Teens" className="aspect-square w-full object-cover" /><p className="px-3 py-2 text-center text-xs font-bold uppercase text-primary">Teens • 13 a 17 anos</p></div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl text-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">Duas jornadas</p><h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Kids e Teens não estudam do mesmo jeito.</h2><div className="mt-10 grid gap-6 md:grid-cols-2"><article className="rounded-lg border border-border bg-brand-ice p-8 text-left shadow-soft"><span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-mid">Kids • 8–12 anos</span><h3 className="mt-3 text-2xl font-bold text-primary">Uma jornada mais visual</h3><p className="mt-4 leading-relaxed text-muted-foreground">Mais imagens, histórias, diálogos simples, músicas e atividades adequadas à infância.</p></article><article className="rounded-lg border border-border bg-card p-8 text-left shadow-soft"><span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-mid">Teens • 13–17 anos</span><h3 className="mt-3 text-2xl font-bold text-primary">Uma jornada para adolescentes</h3><p className="mt-4 leading-relaxed text-muted-foreground">Conteúdo com temas, situações e linguagem mais próximos do universo adolescente.</p></article></div></div>
        </section>

        <section className="bg-brand-navy px-4 py-16 text-primary-foreground sm:py-20">
          <div className="mx-auto max-w-6xl text-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Como funciona</p><h2 className="mt-3 text-3xl font-bold text-primary-foreground sm:text-4xl">O inglês continua durante a semana.</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{flow.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-7 text-left"><Icon className="h-8 w-8 text-brand-gold" /><h3 className="mt-5 font-bold uppercase text-primary-foreground">{title}</h3><p className="mt-3 leading-relaxed text-brand-blue-light">{text}</p></article>)}</div></div>
        </section>

        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl text-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">Personagens e cultura</p><h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">O Brasil também entra na conversa.</h2><p className="mx-auto mt-5 max-w-3xl leading-relaxed text-muted-foreground">Os conteúdos usam situações, personagens, histórias e elementos culturais brasileiros como ponto de partida para o contato com o inglês.</p><div className="mt-10 grid gap-5 md:grid-cols-3">{[[BookOpen,"Histórias","Situações e personagens."],[Music2,"Músicas e diálogos","Contato com inglês em formatos diferentes."],[Users,"Cultura","Brasil como contexto para muitas das conversas."]].map(([Icon,title,text]) => { const ItemIcon = Icon as typeof BookOpen; return <article key={String(title)} className="rounded-lg border border-border bg-card p-7 shadow-soft"><ItemIcon className="mx-auto h-8 w-8 text-brand-gold" /><h3 className="mt-5 font-bold uppercase text-primary">{String(title)}</h3><p className="mt-3 text-muted-foreground">{String(text)}</p></article>; })}</div></div>
        </section>

        <section className="bg-brand-ice px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl text-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">Prática digital</p><h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Cinco ferramentas de apoio à prática.</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{aiTools.map(({ icon: Icon, name, text }) => <article key={name} className="rounded-lg border border-border bg-card p-6 shadow-soft"><Icon className="mx-auto h-7 w-7 text-brand-gold" /><h3 className="mt-4 font-bold text-primary">{name}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p></article>)}</div><p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">As ferramentas digitais complementam o estudo e não substituem o acompanhamento humano.</p></div>
        </section>

        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">Exemplo de rotina</p><h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Como pode ser uma semana.</h2></div><div className="mt-10 grid gap-3 sm:grid-cols-5">{week.map(([day,text]) => <article key={day} className="rounded-lg border border-border bg-card p-5 shadow-soft"><p className="text-sm font-bold text-primary">{day}</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div><p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">Exemplo ilustrativo. A rotina varia conforme turma, idade, horários e disponibilidade da família.</p></div>
        </section>

        <section className="bg-brand-navy px-4 py-16 text-primary-foreground sm:py-20">
          <div className="mx-auto max-w-5xl"><h2 className="text-center text-3xl font-bold sm:text-4xl">O Plano PRO Kids & Teens pode fazer sentido para sua família se...</h2><div className="mt-10 grid gap-4 sm:grid-cols-2">{family.map(item => <p key={item} className="flex gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-5"><Check className="h-5 w-5 flex-none text-brand-gold" /><span>{item}</span></p>)}</div></div>
        </section>

        <section className="bg-brand-ice px-4 py-16 text-center sm:py-20">
          <div className="mx-auto max-w-3xl"><h2 className="text-3xl font-bold text-primary sm:text-4xl">Quer conhecer o Plano PRO Kids & Teens?</h2><p className="mt-4 text-lg text-muted-foreground">Veja preço, funcionamento, turmas e condições de matrícula.</p><Link to="/lp/kids-teens" className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-accent px-8 py-4 text-center text-sm font-bold uppercase text-accent-foreground shadow-cta transition-colors hover:bg-accent/90">Ver o Plano PRO Kids & Teens</Link></div>
        </section>
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

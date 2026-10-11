import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Brain, BriefcaseBusiness, Check, Headphones, MessageCircle, Mic2, Plane, Smartphone, Users, Video } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import liveClassImage from "@/assets/home-videoconf.jpg";

export const Route = createFileRoute("/adultos")({
  head: () => ({
    meta: [
      { title: "Adultos | Inglês Online com App, IA e Aulas ao Vivo | Falaê Brasil" },
      { name: "description", content: "Conheça a proposta da Falaê Brasil para adultos: aplicativo, cinco ferramentas de IA, conteúdo por nível e aulas ao vivo via Zoom." },
      { property: "og:title", content: "Adultos | Inglês Online com App, IA e Aulas ao Vivo | Falaê Brasil" },
      { property: "og:description", content: "Conheça a proposta da Falaê Brasil para adultos: aplicativo, cinco ferramentas de IA, conteúdo por nível e aulas ao vivo via Zoom." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://falaebrasil.com.br/adultos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/adultos" }],
  }),
  component: AdultosPage,
});

const howItWorks = [
  { icon: Smartphone, title: "APP Falaê Brasil", text: "Conteúdo organizado por nível para estudar no seu ritmo." },
  { icon: Brain, title: "5 ferramentas de IA", text: "Pratique fala, escuta, memória, escrita e leitura." },
  { icon: Video, title: "Aulas ao vivo", text: "Participe de encontros via Zoom nos horários disponíveis para seu nível." },
];
const aiTools = [
  { icon: Mic2, name: "IA Falaê", text: "Fala e pronúncia" },
  { icon: Headphones, name: "IA Escutaê", text: "Compreensão auditiva" },
  { icon: Brain, name: "IA Memorizaê", text: "Memória e revisão" },
  { icon: MessageCircle, name: "IA Escreveaê", text: "Escrita" },
  { icon: BookOpen, name: "IA Leiaê", text: "Leitura" },
];
const situations = [
  { icon: Plane, title: "Viagens", text: "Aeroporto, hotel, restaurante, transporte e atendimento." },
  { icon: BriefcaseBusiness, title: "Trabalho", text: "Reuniões, entrevistas, apresentações e comunicação profissional." },
  { icon: Users, title: "Cotidiano", text: "Conversas, cultura, pessoas e situações do dia a dia." },
];
const audience = [
  "quer estudar inglês de forma contínua",
  "prefere combinar estudo individual com aulas ao vivo",
  "quer praticar durante a semana",
  "precisa de inglês para vida, trabalho ou viagens",
  "não quer depender só de um aplicativo",
  "também não quer depender apenas do horário da aula",
];

function AdultosPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <main>
        <section className="bg-gradient-ice px-4 py-14 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">Falaê Brasil • Adultos 18+</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-primary sm:text-5xl">Inglês para continuar praticando entre uma aula e outra.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground">Estude no APP Falaê Brasil, pratique com cinco ferramentas de IA e participe de aulas ao vivo via Zoom.</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Conteúdo organizado por nível, situações de vida real, trabalho, viagens e prática durante a semana.</p>
              <Link to="/lp/adultos" className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-accent px-7 py-4 text-center text-sm font-bold uppercase text-accent-foreground shadow-cta transition-colors hover:bg-accent/90">Conhecer o Plano PRO Adultos</Link>
            </div>
            <div className="relative mx-auto min-h-[410px] w-full max-w-xl sm:min-h-[500px]">
              <div className="absolute inset-x-0 top-0 overflow-hidden rounded-lg border border-border bg-card shadow-elevated">
                <div className="flex items-center gap-2 bg-brand-navy px-4 py-3 text-xs font-semibold text-primary-foreground"><Video className="h-4 w-4 text-brand-gold" />Aula ao vivo • Zoom</div>
                <img src={liveClassImage} alt="Adultos participando de uma aula de inglês ao vivo" className="aspect-video w-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-4 w-[44%] rounded-lg border border-border bg-card p-5 shadow-elevated sm:left-8 sm:p-7">
                <Smartphone className="h-8 w-8 text-brand-gold" /><p className="mt-4 text-xs font-bold uppercase text-primary">APP Falaê Brasil</p><p className="mt-2 text-xs leading-relaxed text-muted-foreground">Conteúdo por nível no seu ritmo.</p>
              </div>
              <div className="absolute bottom-5 right-3 w-[44%] rounded-lg border border-border bg-brand-navy p-5 text-primary-foreground shadow-elevated sm:right-8 sm:p-7">
                <Brain className="h-8 w-8 text-brand-gold" /><p className="mt-4 text-xs font-bold uppercase">5 ferramentas de IA</p><p className="mt-2 text-xs leading-relaxed text-brand-blue-light">Prática entre os encontros.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">Como funciona</p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Você não precisa escolher entre aplicativo e aula.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">{howItWorks.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-lg border border-border bg-card p-7 text-left shadow-soft"><Icon className="h-8 w-8 text-brand-gold" /><h3 className="mt-5 font-bold uppercase text-primary">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
            <p className="mt-8 text-lg font-bold text-primary">O Plano PRO combina as três coisas.</p>
          </div>
        </section>

        <section className="bg-brand-navy px-4 py-16 text-primary-foreground sm:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Cinco ferramentas de IA</p>
            <h2 className="mt-3 text-3xl font-bold text-primary-foreground sm:text-4xl">Pratique habilidades diferentes durante a semana.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{aiTools.map(({ icon: Icon, name, text }) => <article key={name} className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-6"><Icon className="mx-auto h-7 w-7 text-brand-gold" /><h3 className="mt-4 font-bold">{name}</h3><p className="mt-2 text-sm text-brand-blue-light">{text}</p></article>)}</div>
          </div>
        </section>

        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">O inglês aparece em situações diferentes.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">{situations.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-lg border border-border bg-card p-7 text-left shadow-soft"><Icon className="h-8 w-8 text-brand-gold" /><h3 className="mt-5 font-bold uppercase text-primary">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
          </div>
        </section>

        <section className="bg-brand-ice px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">Inglês Transversal</p><h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Inglês conectado à vida.</h2><p className="mt-5 leading-relaxed text-muted-foreground">A proposta da Falaê Brasil é tirar o inglês do exercício isolado e colocá-lo dentro de situações que façam sentido para quem está aprendendo.</p></div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">{[["Contexto","Entenda onde aquela linguagem aparece."],["Prática","Leia, escute, escreva, memorize e fale."],["Uso","Relacione com situações da sua rotina."]].map(([title,text], index) => <article key={title} className="rounded-lg border border-border bg-card p-7"><span className="text-sm font-bold text-brand-gold">0{index + 1}</span><h3 className="mt-3 text-xl font-bold text-primary">{title}</h3><p className="mt-3 text-muted-foreground">{text}</p></article>)}</div>
          </div>
        </section>

        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl text-center"><h2 className="text-3xl font-bold text-primary sm:text-4xl">Conteúdo organizado por nível.</h2><p className="mt-4 text-muted-foreground">O aluno segue o conteúdo de acordo com o momento em que se encontra.</p><div className="mt-9 grid grid-cols-3 gap-3 sm:grid-cols-6">{["A1","A2","B1","B2","C1","C2"].map(level => <div key={level} className="rounded-lg border border-border bg-card px-4 py-5 text-xl font-bold text-primary shadow-soft">{level}</div>)}</div></div>
        </section>

        <section className="bg-brand-navy px-4 py-16 text-primary-foreground sm:py-20">
          <div className="mx-auto max-w-5xl"><h2 className="text-center text-3xl font-bold sm:text-4xl">O Plano PRO Adultos pode fazer sentido para você se...</h2><div className="mt-10 grid gap-4 sm:grid-cols-2">{audience.map(item => <p key={item} className="flex gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-5"><Check className="h-5 w-5 flex-none text-brand-gold" /><span>{item}</span></p>)}</div></div>
        </section>

        <section className="bg-brand-ice px-4 py-16 text-center sm:py-20">
          <div className="mx-auto max-w-3xl"><h2 className="text-3xl font-bold text-primary sm:text-4xl">Quer conhecer o Plano PRO Adultos?</h2><p className="mt-4 text-lg text-muted-foreground">Veja preço, funcionamento, recursos e condições de matrícula.</p><Link to="/lp/adultos" className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-accent px-8 py-4 text-center text-sm font-bold uppercase text-accent-foreground shadow-cta transition-colors hover:bg-accent/90">Ver o Plano PRO Adultos</Link></div>
        </section>
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

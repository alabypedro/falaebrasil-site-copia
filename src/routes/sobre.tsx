import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Bot, BriefcaseBusiness, Compass, GraduationCap, HeartHandshake, Layers3, Sparkles, UsersRound } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import joisAlaby from "@/assets/jois-alaby-new.png";
import womanMission from "@/assets/woman-blue-suit.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Falaê Brasil | Escola Online e Inglês Transversal" },
      { name: "description", content: "Conheça a Falaê Brasil, escola online de inglês com aplicativo, inteligência artificial, aulas ao vivo e os Guias Brasil Sem Trava." },
      { property: "og:title", content: "Sobre a Falaê Brasil | Escola Online e Inglês Transversal" },
      { property: "og:description", content: "Conheça a escola online, o Plano PRO, os Guias Brasil Sem Trava e a proposta de Inglês Transversal." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://falaebrasil.com.br/sobre" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/sobre" }],
  }),
  component: SobrePage,
});

const values = [
  { icon: BriefcaseBusiness, title: "Praticidade", text: "Ensinar linguagem que possa ser reconhecida e usada." },
  { icon: HeartHandshake, title: "Acessibilidade", text: "Explicar de forma simples e direta." },
  { icon: Compass, title: "Cultura", text: "Manter o Brasil presente nas situações e conversas." },
  { icon: Bot, title: "Tecnologia", text: "Usar ferramentas digitais como apoio à prática." },
  { icon: GraduationCap, title: "Autonomia", text: "Dar recursos para que o aluno continue praticando fora da aula." },
  { icon: UsersRound, title: "Respeito à diversidade", text: "Reconhecer diferentes idades, histórias, objetivos e formas de aprender." },
];

function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-gradient-ice py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">Falaê Brasil • Inglês Transversal</span>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">Uma escola online para usar inglês dentro da vida real.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">A Falaê Brasil combina ensino contínuo, tecnologia, aulas ao vivo e produtos digitais criados para situações específicas em que o inglês aparece.</p>
              <div className="mt-7 max-w-2xl space-y-3 text-base leading-relaxed text-muted-foreground">
                <p>Algumas pessoas querem seguir uma jornada completa de estudo.</p>
                <p>Outras precisam resolver primeiro uma entrevista, uma viagem, uma conversa ou outra situação específica.</p>
                <p>Por isso, a Falaê Brasil trabalha com duas formas complementares de aprender e praticar.</p>
              </div>
            </div>
            <img src={womanMission} alt="Profissional brasileira usando inglês em uma situação de trabalho" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-elevated" />
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">Uma marca, duas frentes</span>
              <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Duas formas de usar a Falaê Brasil</h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <article className="border-t-4 border-brand-gold bg-brand-ice p-7 shadow-soft sm:p-9">
                <GraduationCap className="h-9 w-9 text-brand-blue-mid" aria-hidden="true" />
                <span className="mt-6 block text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-mid">Plano PRO</span>
                <h3 className="mt-2 text-2xl font-bold text-primary">Para quem quer estudar de forma contínua.</h3>
                <p className="mt-4 leading-relaxed text-foreground/80">Aplicativo, conteúdo organizado por nível, cinco ferramentas de inteligência artificial e aulas ao vivo via Zoom.</p>
                <Link to="/planos" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-cta transition-colors hover:bg-accent/90">Conhecer nosso plano</Link>
              </article>
              <article className="border-t-4 border-brand-blue-mid bg-primary p-7 text-primary-foreground shadow-soft sm:p-9">
                <BookOpen className="h-9 w-9 text-brand-blue-light" aria-hidden="true" />
                <span className="mt-6 block text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-light">Brasil Sem Trava</span>
                <h3 className="mt-2 text-2xl font-bold text-white">Para quem precisa resolver uma situação específica.</h3>
                <p className="mt-4 leading-relaxed text-white/80">Guias digitais para situações práticas como conversação, viagens, entrevistas profissionais e preparação linguística para entrevista de visto.</p>
                <Link to="/" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full border border-brand-blue-light px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10">Ver os guias</Link>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-brand-ice py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 md:grid-cols-2">
              <article className="border-l-4 border-brand-gold bg-white p-7 shadow-soft sm:p-9"><span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-mid">Missão</span><p className="mt-4 text-xl leading-relaxed text-primary">Tornar o inglês mais útil, acessível e conectado às situações que brasileiros realmente vivem.</p></article>
              <article className="border-l-4 border-brand-blue-mid bg-white p-7 shadow-soft sm:p-9"><span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-mid">Visão</span><p className="mt-4 text-xl leading-relaxed text-primary">Construir uma escola online em que o inglês possa ser estudado continuamente ou acessado por meio de soluções práticas para necessidades específicas.</p></article>
            </div>
            <div className="mt-12 text-center"><span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">Como trabalhamos</span><h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Nossos valores</h2></div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {values.map(({ icon: Icon, title, text }) => <article key={title} className="bg-white p-6 shadow-soft"><Icon className="h-7 w-7 text-brand-gold" aria-hidden="true" /><h3 className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-primary">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-brand-navy py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-3xl text-center"><span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Nossa proposta</span><h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">O que significa Inglês Transversal?</h2><p className="mt-5 text-lg leading-relaxed text-brand-blue-light">É a ideia de que o inglês não precisa existir isolado da vida. Ele pode aparecer dentro de viagens, trabalho, cultura, estudos, relações pessoais e situações cotidianas.</p></div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[['Contexto','Entender onde a linguagem aparece.'],['Prática','Ler, ouvir, memorizar, escrever e falar.'],['Aplicação','Relacionar o conteúdo a situações concretas.']].map(([title,text], index) => <article key={title} className="border border-white/15 bg-white/5 p-6"><span className="text-sm font-bold text-brand-gold">0{index + 1}</span><h3 className="mt-3 text-xl font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[.8fr_1.2fr] md:items-center">
            <img src={joisAlaby} alt="Teacher Jóis Alaby, fundador da Falaê Brasil" loading="lazy" className="aspect-square w-full max-w-md justify-self-center rounded-2xl object-cover shadow-elevated" />
            <div><span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">Teacher Jóis Alaby</span><h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Quem está por trás da Falaê Brasil</h2><div className="mt-6 space-y-4 leading-relaxed text-foreground/80"><p>Jóis Alaby teve contato intenso com o inglês ainda na infância, quando viveu nos Estados Unidos. Mais tarde, voltou ao país para sua formação universitária.</p><p>Sua trajetória profissional incluiu experiência internacional, duas décadas de trabalho para o governo americano e atuação em 23 países.</p><p>Essa vivência contribuiu para a criação da Falaê Brasil e, depois, da linha Brasil Sem Trava, voltada a necessidades específicas em que o inglês aparece.</p><p className="font-semibold text-primary">Foi dessa combinação de língua, trabalho, cultura e experiência internacional que nasceu a proposta de Inglês Transversal da Falaê Brasil.</p></div></div>
          </div>
        </section>

        <section className="bg-gradient-corporate py-16 text-center sm:py-20">
          <div className="mx-auto max-w-4xl px-4"><Sparkles className="mx-auto h-8 w-8 text-brand-gold" aria-hidden="true" /><h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Qual é o seu próximo passo?</h2><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Link to="/planos" className="inline-flex min-h-14 items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-cta">Conhecer o Plano PRO</Link><Link to="/" className="inline-flex min-h-14 items-center justify-center rounded-full border border-brand-blue-light px-7 py-3 text-sm font-bold uppercase tracking-wider text-white">Ver os Guias Brasil Sem Trava</Link></div></div>
        </section>
      </main>
      <ContactSection />
      <SiteFooter />
    </div>
  );
}

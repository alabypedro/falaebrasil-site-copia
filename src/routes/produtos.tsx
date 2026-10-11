import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo-falae.png";
import joisAlaby from "@/assets/jois-alaby-new.png";
import { LegalLinks } from "@/components/LegalLinks";

const TITLE = "Produtos | Falaê Brasil";
const DESC =
  "Guias práticos de inglês para situações reais. Escolha o produto Falaê Brasil que combina com o que você precisa agora.";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProdutosPage,
});

const GUIAS = [
  { to: "/bst1", name: "Guia 50+", text: "Frases úteis para situações de viagem ao exterior.", cta: "Conhecer o Guia 50+" },
  { to: "/bst2", name: "Entrevistas em Inglês", text: "Respostas e preparação para entrevistas profissionais.", cta: "Conhecer o Guia de Entrevistas" },
  { to: "/bst4", name: "Vistos para os EUA", text: "Inglês e preparação para situações ligadas ao processo.", cta: "Conhecer o Guia de Vistos" },
] as const;

const btn =
  "flex w-full items-center justify-center rounded-full px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.1em] transition-opacity hover:opacity-90";

function ProdutosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="bg-brand-navy px-4 pb-12 pt-10 text-center text-primary-foreground">
        <img src={logo} alt="Falaê Brasil! Inglês Transversal" className="mx-auto h-20 w-auto sm:h-24" />
        <h1 className="mx-auto mt-6 max-w-xl font-display text-3xl font-black leading-tight sm:text-5xl">
          Escolha o inglês que você precisa agora
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg font-semibold text-accent">
          Guias práticos da Falaê Brasil para situações reais.
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-primary-foreground/80">
          Escolha abaixo o guia que mais combina com o que você precisa resolver.
        </p>
      </section>

      <section className="mx-auto -mt-6 max-w-xl space-y-4 px-4">
        <article className="rounded-3xl border-2 border-accent bg-card p-6 shadow-cta">
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent-foreground">
            Destaque
          </span>
          <h2 className="mt-3 text-2xl font-black text-primary">Destrava Falaê</h2>
          <p className="mt-2 text-muted-foreground">Para quem entende alguma coisa, mas trava para responder.</p>
          <Link to="/bst5" className={`${btn} mt-5 bg-accent text-accent-foreground shadow-cta`}>
            Conhecer o Destrava Falaê
          </Link>
        </article>

        {GUIAS.map((g) => (
          <article key={g.to} className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-xl font-black text-primary">{g.name}</h2>
            <p className="mt-2 text-muted-foreground">{g.text}</p>
            <Link to={g.to} className={`${btn} mt-5 bg-primary text-primary-foreground`}>
              {g.cta}
            </Link>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-10 max-w-xl px-4">
        <div className="rounded-3xl bg-primary p-7 text-center text-primary-foreground">
          <h2 className="text-2xl font-black">Quer aprender de forma mais completa?</h2>
          <p className="mt-2 text-primary-foreground/85">Conheça também o Falaê Brasil PRO.</p>
          <Link to="/planos" className={`${btn} mt-5 bg-accent text-accent-foreground`}>
            Conhecer o PRO
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-xl px-4 pb-12">
        <div className="flex flex-col items-center gap-5 rounded-3xl border border-border bg-card p-7 text-center sm:flex-row sm:text-left">
          <img src={joisAlaby} alt="Teacher Jóis Alaby" loading="lazy" className="h-28 w-28 shrink-0 rounded-full bg-secondary object-cover" />
          <div className="w-full">
            <h2 className="text-xl font-black text-primary">Conteúdo diário com Teacher Jóis Alaby</h2>
            <p className="mt-2 text-muted-foreground">Acompanhe vídeos, Pílulas e inglês prático no Instagram.</p>
            <a href="https://www.instagram.com/joisalaby/" target="_blank" rel="noopener noreferrer" className={`${btn} mt-4 border-2 border-primary text-primary`}>
              Ir para @joisalaby
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-brand-navy px-4 py-10 text-center text-sm text-brand-blue-light">
        <p className="font-bold text-primary-foreground">Falaê Brasil</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-5 [&_a]:underline [&_a]:underline-offset-4">
          <LegalLinks className="contents" />
          <Link to="/contato">Contato</Link>
        </div>
      </footer>
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ExternalLink, GraduationCap, Instagram, Linkedin, Mail, MessageCircle, Phone, Smartphone, Youtube } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Suporte | Falaê Brasil" },
      { name: "description", content: "Fale com a Falaê Brasil sobre acesso, matrícula, Plano PRO, Kids & Teens ou Guias Brasil Sem Trava." },
      { property: "og:title", content: "Contato e Suporte | Falaê Brasil" },
      { property: "og:description", content: "Canais oficiais para suporte, matrícula, Plano PRO e Guias Brasil Sem Trava." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://falaebrasil.com.br/contato" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <section className="bg-gradient-ice py-16 text-center sm:py-20">
        <div className="mx-auto max-w-4xl px-4"><span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">Falaê Brasil • Atendimento</span><h1 className="mt-3 text-4xl font-bold text-primary sm:text-5xl">Como podemos ajudar?</h1><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Escolha o assunto e fale com a Falaê Brasil pelo canal mais adequado.</p></div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 lg:grid-cols-3">
          <article className="flex flex-col border-t-4 border-brand-gold bg-brand-ice p-7 shadow-soft"><MessageCircle className="h-8 w-8 text-brand-blue-mid" aria-hidden="true" /><h2 className="mt-5 text-xl font-bold text-primary">Já sou aluno ou comprei um Guia</h2><p className="mt-3 flex-1 leading-relaxed text-muted-foreground">Problemas de acesso, pagamento confirmado, dúvidas sobre produto ou suporte.</p><a href="https://wa.me/5511981612800" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-cta">Falar com o suporte</a></article>
          <article className="flex flex-col border-t-4 border-brand-blue-mid bg-brand-ice p-7 shadow-soft"><GraduationCap className="h-8 w-8 text-brand-blue-mid" aria-hidden="true" /><h2 className="mt-5 text-xl font-bold text-primary">Quero conhecer o Plano PRO</h2><p className="mt-3 flex-1 leading-relaxed text-muted-foreground">Informações sobre matrícula, funcionamento e aulas.</p><Link to="/planos" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-soft">Ver nosso plano</Link></article>
          <article className="flex flex-col border-t-4 border-brand-blue-light bg-brand-ice p-7 shadow-soft"><BookOpen className="h-8 w-8 text-brand-blue-mid" aria-hidden="true" /><h2 className="mt-5 text-xl font-bold text-primary">Quero um Guia Brasil Sem Trava</h2><p className="mt-3 flex-1 leading-relaxed text-muted-foreground">Conheça as soluções digitais para situações específicas com inglês.</p><Link to="/" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full border-2 border-primary px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-primary">Ver os guias</Link></article>
        </div>
      </section>

      <section className="bg-brand-navy py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4"><div className="text-center"><span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Contato direto</span><h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Canais oficiais</h2></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <a href="mailto:atendimento@falaebrasil.com.br" className="border border-white/15 bg-white/5 p-6 text-white transition-colors hover:bg-white/10"><Mail className="h-6 w-6 text-brand-gold" aria-hidden="true" /><span className="mt-4 block text-xs font-bold uppercase tracking-wider text-brand-blue-light">E-mail</span><span className="mt-2 block break-all text-sm font-semibold">atendimento@falaebrasil.com.br</span></a>
            <a href="https://wa.me/5511981612800" target="_blank" rel="noopener noreferrer" className="border border-white/15 bg-white/5 p-6 text-white transition-colors hover:bg-white/10"><Phone className="h-6 w-6 text-brand-gold" aria-hidden="true" /><span className="mt-4 block text-xs font-bold uppercase tracking-wider text-brand-blue-light">WhatsApp / Telefone</span><span className="mt-2 block font-semibold">(11) 98161-2800</span></a>
            <a href="https://app.falaebrasil.com.br" target="_blank" rel="noopener noreferrer" className="border border-white/15 bg-white/5 p-6 text-white transition-colors hover:bg-white/10"><Smartphone className="h-6 w-6 text-brand-gold" aria-hidden="true" /><span className="mt-4 block text-xs font-bold uppercase tracking-wider text-brand-blue-light">APP</span><span className="mt-2 flex items-center gap-2 font-semibold">app.FalaeBrasil.com.br <ExternalLink className="h-4 w-4" aria-hidden="true" /></span></a>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-white/15 pt-8 text-center md:flex-row md:text-left"><div><p className="font-semibold text-white">IBOX Centro de Idiomas Ltda.</p><p className="mt-1 text-sm text-white/65">CNPJ 18.656.810/0001-66</p></div><div className="flex gap-5 text-brand-blue-light"><a href="https://www.instagram.com/falae.brasil/" target="_blank" rel="noopener noreferrer" aria-label="Instagram do Falaê Brasil"><Instagram className="h-6 w-6" /></a><a href="https://www.youtube.com/@FalaeBrasil/featured" target="_blank" rel="noopener noreferrer" aria-label="YouTube do Falaê Brasil"><Youtube className="h-6 w-6" /></a><a href="https://www.linkedin.com/in/j%C3%B3is-alaby-b81563155/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Jóis Alaby"><Linkedin className="h-6 w-6" /></a></div></div>
        </div>
      </section>
    </main>
    <ContactSection />
    <SiteFooter />
  </div>;
}

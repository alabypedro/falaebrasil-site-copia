import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Check, Mail, MessageCircle } from "lucide-react";

import { ContactSection } from "@/components/ContactSection";
import logo from "@/assets/logo-falae.png";
import { WHATSAPP_GRUPO_IMERSAO } from "@/lib/checkout";

export const Route = createFileRoute("/obrigado-imersao")({
  head: () => ({
    meta: [
      { title: "Inscrição confirmada — Imersão Falaê Brasil" },
      {
        name: "description",
        content:
          "Confirmação da inscrição na Imersão Falaê Brasil e acesso ao grupo exclusivo de participantes.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Inscrição confirmada — Imersão Falaê Brasil" },
      {
        property: "og:description",
        content: "Sua vaga na Imersão Falaê Brasil está confirmada. Entre no grupo exclusivo de participantes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://falaebrasil.com.br/obrigado-imersao",
      },
    ],
  }),
  component: ObrigadoImersaoPage,
});

function ObrigadoImersaoPage() {
  return (
    <main className="min-h-screen bg-brand-navy text-primary-foreground">
      <section className="bg-gradient-corporate px-4 pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src={logo}
            alt="Falaê Brasil"
            width={152}
            height={152}
            className="mx-auto h-auto w-28 sm:w-32"
          />

          <div className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-cta">
            <Check className="h-8 w-8" strokeWidth={3} aria-hidden="true" />
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Pagamento confirmado
          </p>
          <h1 className="mt-3 text-balance text-3xl font-extrabold leading-tight !text-primary-foreground sm:text-5xl">
            Sua vaga na Imersão Falaê Brasil está reservada.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-blue-light sm:text-lg">
            Entre agora no grupo exclusivo para receber o link do Zoom, avisos e orientações do encontro.
          </p>

          <a
            href={WHATSAPP_GRUPO_IMERSAO}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-8 inline-flex min-h-14 w-full max-w-xl items-center justify-center gap-3 rounded-full bg-accent px-6 py-4 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-accent-foreground shadow-cta transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-6 w-6 flex-none" aria-hidden="true" />
            Entrar no Grupo VIP da Imersão
          </a>

          <p className="mt-4 text-xs leading-relaxed text-brand-blue-light">
            O grupo abrirá no WhatsApp. Se ele não abrir automaticamente, toque novamente no botão.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-lg border border-white/10 bg-white/5 p-6">
              <CalendarDays className="h-7 w-7 text-accent" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-bold !text-primary-foreground">
                Reserve o primeiro sábado
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-blue-light">
                A Imersão acontece das 09h às 12h, ao vivo pelo Zoom.
              </p>
            </article>

            <article className="rounded-lg border border-white/10 bg-white/5 p-6">
              <Mail className="h-7 w-7 text-accent" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-bold !text-primary-foreground">
                Acompanhe seu e-mail
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-blue-light">
                Você também receberá as orientações de acesso no endereço usado na inscrição.
              </p>
            </article>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-brand-blue-light">
              Precisa de ajuda? Fale com a equipe pelo WhatsApp comercial.
            </p>
            <Link
              to="/imersao"
              className="mt-5 inline-flex items-center justify-center text-sm font-semibold text-accent underline decoration-accent/50 underline-offset-4 hover:decoration-accent"
            >
              Voltar para a página da Imersão
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-background text-foreground">
        <ContactSection />
      </div>
    </main>
  );
}
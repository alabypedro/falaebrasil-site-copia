import { Mail, Phone, Instagram, Youtube, Linkedin } from "lucide-react";
import contatoBg from "@/assets/contato-bg.png";
import logoFalae from "@/assets/logo-falae.png";

const WHATSAPP_URL =
  "https://wa.me/5511981612800?text=Tenho%20interesse%20em%20saber%20mais%20sobre%20o%20curso%20Fala%C3%AA%20Brasil!%20Ingl%C3%AAs%C2%A0transversal.";

export function ContactSection({ variant = "full" }: { variant?: "full" | "support" }) {
  if (variant === "support") {
    return (
      <section aria-label="Suporte" className="pt-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-semibold">
          <a
            href="https://wa.me/5511981612800"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center gap-2 text-study-yellow underline underline-offset-4"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>WhatsApp (11) 98161-2800</span>
          </a>
          <a
            href="https://www.instagram.com/joisalaby/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center gap-2 text-study-yellow underline underline-offset-4"
          >
            <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>@joisalaby</span>
          </a>
        </div>
      </section>
    );
  }
  return (
    <section
      className="relative min-h-[600px] overflow-hidden bg-brand-ice bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${contatoBg})` }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-center px-4 py-14 lg:py-20">
        <div className="w-full max-w-md text-center">
          <img
            src={logoFalae}
            alt="Falaê Brasil! — Inglês Transversal"
            loading="lazy"
            className="mx-auto mb-6 h-52 w-auto"
          />

          <div className="rounded-2xl border border-white/60 bg-white/85 p-7 shadow-soft backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-primary">Entre em contato</h2>
            <span className="mx-auto mt-3 block h-px w-16 bg-brand-gold" aria-hidden="true" />

            <div className="mt-6 space-y-4 text-left">
              <a
                href="mailto:atendimento@falaebrasil.com.br"
                className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 transition-colors hover:border-brand-blue-mid"
              >
                <Mail className="mt-0.5 h-5 w-5 flex-none text-brand-blue-mid" />
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue-mid">
                    E-mail
                  </span>
                  <span className="block break-all font-semibold text-primary">
                    atendimento@falaebrasil.com.br
                  </span>
                </span>
              </a>

              <a
                href="https://wa.me/5511981612800"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 transition-colors hover:border-brand-blue-mid"
              >
                <Phone className="mt-0.5 h-5 w-5 flex-none text-brand-blue-mid" />
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue-mid">
                    WhatsApp / Telefone
                  </span>
                  <span className="block font-semibold text-primary">(11) 98161-2800</span>
                </span>
              </a>

              <div className="rounded-xl border border-border bg-white p-4">
                <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue-mid">
                  Redes sociais
                </span>
                <div className="mt-3 flex gap-5 text-primary">
                  <a
                    href="https://www.instagram.com/falae.brasil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram do Falaê Brasil"
                  >
                    <Instagram className="h-8 w-8 transition-colors hover:text-brand-blue-mid" />
                  </a>
                  <a
                    href="https://www.youtube.com/@FalaeBrasil/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube do Falaê Brasil"
                  >
                    <Youtube className="h-8 w-8 transition-colors hover:text-brand-blue-mid" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/j%C3%B3is-alaby-b81563155/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Jóis Alaby"
                  >
                    <Linkedin className="h-8 w-8 transition-colors hover:text-brand-blue-mid" />
                  </a>
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 block w-full rounded-full bg-accent px-8 py-4 text-base font-bold uppercase tracking-[0.1em] text-accent-foreground shadow-cta transition-colors hover:bg-[#B98727]"
            >
              Chame no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import logoFalae from "@/assets/logo-falae.png";
import { LegalLinks } from "@/components/LegalLinks";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Adultos", href: "/adultos" },
  { label: "Kids & Teens", href: "/kids-teens" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Nosso Plano", href: "/planos" },
  { label: "Dúvidas", href: "/duvidas" },
  { label: "Contato", href: "/contato" },
];

export function SiteFooter() {
  return (
    <footer id="contato" className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <img
            src={logoFalae}
            alt="Falaê Brasil! — Inglês Transversal"
            loading="lazy"
            className="h-20 w-auto"
          />
          <p className="mt-4 font-editorial text-lg text-brand-blue-light">
            Falaê Brasil. Inglês Transversal.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-white/70">
            CNPJ 18.656.810/0001-66
            <br />
            IBOX Centro de Idiomas Ltda.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="text-white/80 transition-colors hover:text-brand-blue-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Contato</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a
                href="mailto:atendimento@falaebrasil.com.br"
                className="transition-colors hover:text-brand-blue-light"
              >
                atendimento@falaebrasil.com.br
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5511981612800"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-blue-light"
              >
                (11) 98161-2800
              </a>
            </li>
          </ul>

          <div className="mt-5 flex gap-4 text-brand-blue-light">
            <a
              href="https://www.instagram.com/falae.brasil/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Falaê Brasil"
              className="transition-colors hover:text-white"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.youtube.com/@FalaeBrasil/featured"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube do Falaê Brasil"
              className="transition-colors hover:text-white"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/j%C3%B3is-alaby-b81563155/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Jóis Alaby"
              className="transition-colors hover:text-white"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <LegalLinks className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80 [&_a]:transition-colors [&_a]:hover:text-brand-blue-light" />
        </div>
      </div>
    </footer>
  );
}

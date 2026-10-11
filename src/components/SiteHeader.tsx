import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Adultos", href: "/adultos" },
  { label: "Kids & Teens", href: "/kids-teens" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Nosso Plano", href: "/planos" },
  { label: "Dúvidas", href: "/duvidas" },
  { label: "Contato", href: "/contato" },
];

interface SiteHeaderProps {
  enrollmentHref?: string;
}

export function SiteHeader({ enrollmentHref = "/lp" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const enrollmentIsExternal = enrollmentHref.startsWith("http");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4">
        <Link to="/" className="flex items-center">
          <span className="sr-only">Falaê Brasil!</span>
        </Link>

        <nav className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.12em] lg:flex xl:gap-7 xl:text-[12px] xl:tracking-[0.14em]">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-primary/90 transition-colors hover:text-brand-blue-mid [&.active]:text-brand-blue-mid"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={enrollmentHref}
            target={enrollmentIsExternal ? "_blank" : undefined}
            rel={enrollmentIsExternal ? "noopener noreferrer" : undefined}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-foreground shadow-cta transition-colors hover:bg-[#B98727] md:inline-flex"
          >
            Quero me matricular
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <span className="text-2xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-sm font-semibold uppercase tracking-wider">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-primary hover:bg-secondary [&.active]:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={enrollmentHref}
              target={enrollmentIsExternal ? "_blank" : undefined}
              rel={enrollmentIsExternal ? "noopener noreferrer" : undefined}
              className="mt-2 rounded-full bg-accent px-4 py-3 text-center text-accent-foreground shadow-cta"
            >
              Quero me matricular
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

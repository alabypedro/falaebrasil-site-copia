import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo-falae.png";

export const Route = createFileRoute("/lp/")({
  head: () => ({
    meta: [
      { title: "Falaê Brasil | Escolha sua jornada: Adultos ou Kids & Teens" },
      {
        name: "description",
        content:
          "Escolha sua jornada no Falaê Brasil: inglês transversal para Adultos (18+) ou Kids & Teens (8 a 17 anos), com aplicativo, 5 IAs e aulas ao vivo via Zoom.",
      },
      { property: "og:title", content: "Falaê Brasil — Escolha sua jornada" },
      {
        property: "og:description",
        content:
          "Inglês transversal para Adultos (18+) e Kids & Teens (8 a 17 anos). Escolha o caminho ideal para você ou sua família.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://falaebrasil.com.br/lp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/lp" }],
  }),
  component: LpGatePage,
});

function LpGatePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-corporate">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-14">
        <img
          src={logo}
          alt="Falaê Brasil! — Inglês Transversal"
          width={220}
          height={220}
          className="h-auto w-36 md:w-48"
        />

        <h1 className="mt-8 text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Bem-vindo ao Falaê Brasil!
        </h1>
        <p className="mt-3 max-w-xl text-center text-base text-brand-blue-light sm:text-lg">
          Escolha o caminho ideal para você ou para sua família.
        </p>

        <div className="mt-12 grid w-full gap-6 md:grid-cols-2">
          <Link
            to="/lp/adultos"
            className="group flex min-h-[220px] flex-col items-center justify-center gap-4 rounded-3xl bg-accent px-8 py-12 text-center shadow-cta transition-transform duration-200 hover:-translate-y-1 hover:bg-[#B98727] md:min-h-[280px]"
          >
            <span className="text-xl font-extrabold uppercase leading-snug tracking-wide text-accent-foreground sm:text-2xl">
              Quero conhecer o Falaê Brasil para Adultos (18+)
            </span>
            <span className="text-sm font-semibold text-accent-foreground/80">
              Do Zero A1 ao Avançado C2 — vida real e trabalho
            </span>
          </Link>

          <Link
            to="/lp/kids-teens"
            className="group flex min-h-[220px] flex-col items-center justify-center gap-4 rounded-3xl border-2 border-white/25 bg-white/10 px-8 py-12 text-center backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:bg-white/15 md:min-h-[280px]"
          >
            <span className="text-xl font-extrabold uppercase leading-snug tracking-wide text-white sm:text-2xl">
              Quero conhecer o Falaê Brasil Kids &amp; Teens (8 – 17a)
            </span>
            <span className="text-sm font-semibold text-brand-blue-light">
              Inglês com cultura brasileira e troca cultural
            </span>
          </Link>
        </div>
      </div>

      <footer className="pb-8 text-center text-xs text-white/50">
        CNPJ 18.656.810/0001-66 — IBOX Centro de Idiomas Ltda.
      </footer>
    </div>
  );
}

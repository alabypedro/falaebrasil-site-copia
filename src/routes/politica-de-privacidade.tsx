import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Falaê Brasil" },
      { name: "description", content: "Política de Privacidade oficial dos sites, produtos e serviços educacionais da Falaê Brasil." },
      { property: "og:title", content: "Política de Privacidade | Falaê Brasil" },
      { property: "og:description", content: "Consulte a Política de Privacidade oficial da Falaê Brasil." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/politica-de-privacidade" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <iframe src="/legal/politica-de-privacidade.html" title="Política de Privacidade da Falaê Brasil" className="block h-screen w-full border-0 bg-background" />;
}
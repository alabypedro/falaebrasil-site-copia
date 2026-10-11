import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Falaê Brasil" },
      { name: "description", content: "Termos de Uso oficiais dos sites, produtos e serviços educacionais da Falaê Brasil." },
      { property: "og:title", content: "Termos de Uso | Falaê Brasil" },
      { property: "og:description", content: "Consulte os Termos de Uso oficiais da Falaê Brasil." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/termos-de-uso" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return <iframe src="/legal/termos-de-uso.html" title="Termos de Uso da Falaê Brasil" className="block h-screen w-full border-0 bg-background" />;
}
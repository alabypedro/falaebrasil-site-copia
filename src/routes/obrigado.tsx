import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-falae.png";
import grupoProtocolo from "@/assets/grupo-protocolo-bst.png";
import grupoLetsFalae from "@/assets/grupo-lets-falae.png";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Missão Cumprida! Bem-vindo ao Falaê Brasil!" },
      {
        name: "description",
        content:
          "Sua jornada rumo à Soberania começou. O acesso ao Portal já está a caminho do seu email.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Bem-vindo ao Falaê Brasil!" },
      { property: "og:description", content: "Confira as orientações de acesso e os próximos passos da sua jornada no Falaê Brasil." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://falaebrasil.com.br/obrigado" },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/obrigado" }],
  }),
  component: ObrigadoPage,
});

function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="mx-auto max-w-3xl px-4 py-12 text-center md:py-16">
        <img
          src={logo}
          alt="Falaê Brasil!"
          width={160}
          height={160}
          className="mx-auto h-auto w-32 md:w-40"
        />

        <h1 className="mt-8 text-balance text-4xl font-extrabold leading-tight text-primary sm:text-6xl">
          Missão Cumprida:<br />
          Você Acaba de Assumir o Comando!
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-xl font-bold text-brand-green sm:text-2xl">
          Sua jornada rumo à Soberania começou.<br />
          O Acesso ao Portal já está a caminho do seu email.
        </p>

        <div className="mt-10 flex justify-center">
          <video
            ref={(el) => {
              if (!el) return;
              el.muted = false;
              const tryPlay = () =>
                el.play().catch(() => {
                  el.muted = true;
                  el.play().catch(() => {});
                });
              tryPlay();
              const unmute = () => {
                el.muted = false;
                el.play().catch(() => {});
                window.removeEventListener("pointerdown", unmute);
                window.removeEventListener("keydown", unmute);
                window.removeEventListener("touchstart", unmute);
              };
              window.addEventListener("pointerdown", unmute, { once: true });
              window.addEventListener("keydown", unmute, { once: true });
              window.addEventListener("touchstart", unmute, { once: true });
            }}
            autoPlay
            playsInline
            controls
            preload="auto"
            className="aspect-[9/16] w-full max-w-xs rounded-2xl bg-black shadow-soft"
          >
            <source src="/videos/tks2.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 text-center">
        <h2 className="text-balance text-4xl font-extrabold leading-tight text-primary sm:text-6xl">
          Participe dos Grupos!
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Grupo VIP */}
          <div className="flex flex-col items-center">
            <h3 className="text-balance text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
              Grupo VIP<br />
              <span className="text-brand-green">Protocolo BST Turma #9</span>
            </h3>
            <img
              src={grupoProtocolo}
              alt="Protocolo Brasil Sem Trava"
              className="mt-6 aspect-square w-full max-w-xs rounded-3xl object-cover shadow-soft"
            />
            <a
              href="https://chat.whatsapp.com/L8coGkIRab62m5W8zS27uN?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-yellow px-10 py-4 text-base font-extrabold uppercase tracking-wide text-primary shadow-soft transition hover:opacity-90"
            >
              Quero Participar
            </a>
          </div>

          {/* Comunidade */}
          <div className="flex flex-col items-center">
            <h3 className="text-balance text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
              Comunidade<br />
              <span className="text-brand-green">Let's Falaê</span>
            </h3>
            <img
              src={grupoLetsFalae}
              alt="Comunidade Let's Falaê"
              className="mt-6 aspect-square w-full max-w-xs rounded-3xl object-cover shadow-soft"
            />
            <a
              href="https://chat.whatsapp.com/IqMmUPPRhJtIeIh5bE8TJ4?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-green px-10 py-4 text-base font-extrabold uppercase tracking-wide text-white shadow-soft transition hover:opacity-90"
            >
              Quero Participar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

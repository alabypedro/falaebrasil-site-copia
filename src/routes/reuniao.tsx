import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { CHECKOUT, PLAN_FEATURES } from "@/lib/checkout";

import logoFalae from "@/assets/logo-falae.png";
import joisAlaby from "@/assets/jois-alaby-new.png";
import antesAsset from "@/assets/reuniao-antes.jpg.asset.json";
import depoisAsset from "@/assets/reuniao-depois.jpg.asset.json";
import mecanismoImg from "@/assets/lp-mecanismo.jpg";
import capaTeens from "@/assets/capa-teens.png.asset.json";
import capaKids from "@/assets/capa-kids.png.asset.json";

import clarindaImg from "@/assets/testimonials/clarinda-kipper.jpg";
import brunoImg from "@/assets/testimonials/bruno-mendonca.jpg";
import paulaImg from "@/assets/testimonials/paula-freitas.jpg";
import danielaImg from "@/assets/testimonials/daniela-bertoldo.png";
import leonardoImg from "@/assets/testimonials/leonardo-canella.jpg";
import darleneImg from "@/assets/testimonials/darlene-martins.jpg";

const CHECKOUT_REUNIAO = CHECKOUT.reuniaoKidsTeens;
/** Insira aqui o link de incorporação do VSL quando estiver disponível. */
const VSL_VIDEO_URL = "";
const WHATSAPP_URL =
  "https://wa.me/5511981612800?text=" +
  encodeURIComponent(
    "Olá! Quero saber mais sobre a Reunião com pais e aula demonstrativa Falaê Brasil Kids & Teens (gratuita)."
  );

const C = {
  black: "#023059",
  black2: "#071521",
  graphite: "#17212B",
  red: "#023059",
  blueMid: "#5F8FC4",
  blueLight: "#AFCEDB",
  paper: "#FFFFFF",
  white: "#FFFFFF",
  grayLight: "#EEF2F5",
  grayMid: "#AFCEDB",
  gold: "#D6A23D",
  goldDark: "#B98727",
};

const sans = { fontFamily: '"Poppins", ui-sans-serif, system-ui, sans-serif' } as const;
const serif = { fontFamily: '"Playfair Display", Georgia, serif' } as const;
const bodyText = "text-[17px] leading-[1.7] sm:text-[18px]";

const faq = [
  {
    q: "Quando acontece a reunião?",
    a: "Um sábado por mês, das 10h às 12h — duas horas ao vivo pelo Zoom, com pais, família e alunos.",
  },
  {
    q: "Quanto custa?",
    a: "Nada. A reunião é gratuita — basta garantir sua vaga pelo WhatsApp.",
  },
  {
    q: "Para quais idades é indicado?",
    a: "Kids de 8 a 12 anos (Kids 1 a 4, pré-A1 e A1) e Teens de 13 a 17 anos (Teens 1 a 4, A1 e A2).",
  },
  {
    q: "Precisa saber inglês para participar?",
    a: "Não. A aula demonstrativa começa do zero, mostrando como a criança ou adolescente pode falar suas primeiras frases em inglês.",
  },
  {
    q: "O que acontece depois que eu garanto minha vaga?",
    a: "Nossa equipe confirma sua participação pelo WhatsApp e você recebe um e-mail automático com o link de verificação e cadastro no APP Falaê Brasil. Ao confirmar, o acesso é liberado exclusivamente aos cursos Kids e Teens.",
  },
  {
    q: "O acesso ao aplicativo é completo?",
    a: "Não. O acesso da reunião é restrito aos cursos Falaê Brasil Kids e Teens. Todo o restante do ambiente permanece bloqueado até a assinatura de um plano.",
  },
  {
    q: "A reunião é gravada?",
    a: "A experiência é ao vivo, para pais e alunos vivenciarem o método na prática. Os materiais das lições ficam disponíveis no aplicativo durante os 30 dias.",
  },
  {
    q: "E se eu quiser continuar depois da reunião?",
    a: "No próprio sábado apresentamos o Plano PRO, que reúne todo o conteúdo do Plano OPEN mais aulas ao vivo via Zoom com professores brasileiros e americanos.",
  },
  {
    q: "Como falo com a equipe antes de me inscrever?",
    a: "Pelo WhatsApp (11) 98161-2800 ou por atendimento@falaebrasil.com.br.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Reunião com Pais e Aula Demonstrativa Falaê Brasil Kids & Teens",
  description:
    "Reunião ao vivo de 2 horas no sábado às 10h para pais e família, com aula demonstrativa para Kids (8–12a) e Teens (13–17a), 30 dias de acesso ao APP Falaê Brasil e 30 dias de aulas ao vivo via Zoom.",
  provider: { "@type": "Organization", name: "Falaê Brasil", url: "https://falaebrasil.com.br" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: "https://falaebrasil.com.br/reuniao",
  },
};

export const Route = createFileRoute("/reuniao")({
  head: () => ({
    meta: [
      { title: "Reunião Falaê Brasil Kids & Teens | Sábado 10h — Gratuita" },
      {
        name: "description",
        content:
          "Duas horas ao vivo no Zoom para pais e família, com aula demonstrativa para Kids (8–12a) e Teens (13–17a). Participação gratuita, com 30 dias de APP e 30 dias de aulas ao vivo via Zoom.",
      },
      { property: "og:title", content: "Reunião Falaê Brasil Kids & Teens — 2h ao vivo, gratuita" },
      {
        property: "og:description",
        content:
          "Sábado, 10h às 12h. Aula demonstrativa para Kids e Teens, 30 dias de acesso ao APP e 30 dias de aulas ao vivo via Zoom.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://falaebrasil.com.br/reuniao" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Reunião Falaê Brasil Kids & Teens — 2h ao vivo, gratuita" },
      {
        name: "twitter:description",
        content:
          "Sábado, 10h às 12h, ao vivo no Zoom. Aula demonstrativa, 30 dias de APP e 30 dias de aulas ao vivo.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://falaebrasil.com.br/reuniao" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(eventJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: ReuniaoPage,
});

/* ---------- dados ---------- */

const problems = [
  {
    t: "Seu filho estuda inglês, mas não fala",
    d: "Reconhece palavras na tela. Na hora de se comunicar, fica travado, sem contexto e sem confiança.",
  },
  {
    t: "Métodos genéricos não prenderam a atenção",
    d: "Exercícios sem conexão com a vida do aluno tornam o inglês chato e difícil de lembrar.",
  },
  {
    t: "Você não conhece o método antes de assinar",
    d: "É justo. Por isso a reunião é gratuita: você e seu filho experimentam antes de decidir.",
  },
  {
    t: "Falta prática ao vivo com professores",
    d: "Vídeos sozinhos não corrigem, não incentivam e não criam rotina de fala.",
  },
];

const agenda = [
  {
    n: "10h",
    t: "ABERTURA COM PAIS E FAMÍLIA",
    d: "Apresentação do método, dos níveis Kids e Teens e como o Brasil entra no centro da conversa.",
  },
  {
    n: "10h30",
    t: "AULA DEMONSTRATIVA AO VIVO",
    d: "Seu filho participa de uma micro-aula em inglês com professores brasileiros e americanos.",
  },
  {
    n: "11h15",
    t: "MÉTODO, NÍVEIS E IA",
    d: "Mostramos os personagens cartoon, os diálogos culturais, as 5 IAs e o APP Falaê Brasil.",
  },
  {
    n: "12h",
    t: "PRÓXIMO PASSO",
    d: "Apresentação do Plano PRO e da condição especial para quem participou da reunião.",
  },
];

const entregaveis = [
  {
    t: "Reunião de 2h ao vivo no Zoom",
    d: "Sábado, das 10h às 12h, com pais, família e alunos, conduzida por professores brasileiros e americanos.",
  },
  {
    t: "Aula demonstrativa na prática",
    d: "Seu filho fala, escuta e interage em inglês durante uma aula demonstrativa real.",
  },
  {
    t: "30 dias de acesso ao APP Falaê Brasil",
    d: "Acesso restrito aos cursos Falaê Brasil Kids e Teens, com lições, diálogos e exercícios.",
  },
  {
    t: "1 mês de aulas ao vivo via Zoom",
    d: "Seu filho entra nas turmas ao vivo disponíveis para Kids e Teens durante 1 mês.",
  },
  {
    t: "Ferramentas de IA nas lições",
    d: "As crianças e adolescentes experimentam as IAs Memorizaê, Falaê, Escutaê, Leiaê e Escreveaê.",
  },
  {
    t: "Condição especial do Plano PRO",
    d: "Quem participa da reunião recebe a apresentação e a condição de entrada no Plano PRO no mesmo dia.",
  },
];

const acesso = [
  {
    n: "01",
    t: "VAGA GARANTIDA",
    d: "Você garante sua vaga pelo WhatsApp — a participação é gratuita.",
  },
  {
    n: "02",
    t: "E-MAIL AUTOMÁTICO",
    d: "Após a confirmação da equipe, você recebe um e-mail automático nosso com o link de verificação e cadastro.",
  },
  {
    n: "03",
    t: "CADASTRO E VERIFICAÇÃO",
    d: "Você confirma seu e-mail, cria sua senha e entra no APP Falaê Brasil.",
  },
  {
    n: "04",
    t: "ACESSO LIBERADO AOS CURSOS KIDS E TEENS",
    d: "O ambiente abre exclusivamente nos cursos Kids e Teens. Os demais cursos, módulos e níveis ficam bloqueados até a assinatura de um plano.",
  },
];

const mecanismo = [
  { n: "01", t: "CONTEXTO", d: "Primeiro o aluno entende onde e por que aquela linguagem é usada, dentro de situações reais do Brasil." },
  { n: "02", t: "PRÁTICA", d: "Depois lê, escuta, memoriza, escreve e fala com ferramentas interativas e professores." },
  { n: "03", t: "APLICAÇÃO", d: "Por fim, leva a estrutura para conversas, viagens, escola, música e situações do dia a dia." },
];

const ias = [
  { emoji: "🎙️", name: "IA FALAÊ", sub: "Pronúncia e fala", text: "Grave a voz e receba avaliação de pronúncia, fluência e ritmo, de forma lúdica." },
  { emoji: "🎧", name: "IA ESCUTAÊ", sub: "Listening", text: "Treine compreensão auditiva com atividades progressivas e correção instantânea." },
  { emoji: "🧠", name: "IA MEMORIZAÊ", sub: "Memória e fixação", text: "Flashcards, áudio e revisão frequente para lembrar palavras na hora certa." },
  { emoji: "✍️", name: "IA ESCREVEAÊ", sub: "Writing", text: "Escreva mensagens e textos e receba feedback de gramática e vocabulário." },
  { emoji: "📖", name: "IA LEIAÊ", sub: "Reading", text: "Leia com tradução, áudio e vocabulário assistido do A1 ao C2." },
];

const niveis = [
  {
    tag: "TEENS",
    faixa: "13 a 17 anos",
    bg: C.paper,
    color: C.graphite,
    niveis: [
      { code: "Teens 1 e 2", d: "Nível A1 — primeiras frases, apresentações, família, rotina e interações simples." },
      { code: "Teens 3 e 4", d: "Nível A2 — mais autonomia para descrever, narrar e participar de conversas cotidianas." },
    ],
  },
  {
    tag: "KIDS",
    faixa: "8 a 12 anos",
    bg: C.black,
    color: C.white,
    niveis: [
      { code: "Kids 1 e 2", d: "Pré-A1 — entrada na língua por meio de sons, jogos, músicas e diálogos em cartoon." },
      { code: "Kids 3 e 4", d: "A1 — primeiras estruturas e frases completas em contextos culturais brasileiros." },
    ],
  },
];

const proExtras = [
  "Aulas ao vivo ilimitadas via Zoom com professores brasileiros e americanos",
  "Acesso a todos os horários e níveis disponíveis para Kids e Teens",
  "Comunidades exclusivas no WhatsApp “Let’s Falaê” por faixa etária",
  "Sessão intercultural mensal em áudio com professores americanos",
] as const;

const testimonials = [
  {
    name: "Clarinda Kipper",
    role: "RH multinacional — São João D'Oeste (SC)",
    photo: clarindaImg,
    quote:
      "O teacher Jóis e seu método são direto ao ponto — inglês prático e funcional. A forma de me comunicar hoje me traz tranquilidade e objetividade para aquilo que realmente interessa.",
  },
  {
    name: "Bruno Mendonça",
    role: "Key Account Manager — São Paulo (SP)",
    photo: brunoImg,
    quote:
      "A grande sacada dele é que ele traz o inglês pra realidade que eu vivo. Mudei de empresa e agora lidero reuniões online com estrangeiros com muito mais confiança.",
  },
  {
    name: "Paula Freitas",
    role: "Gerente de RH em multinacional — São Paulo (SP)",
    photo: paulaImg,
    quote:
      "Eu nunca gostei de inglês. Conheci o teacher Jóis e o método é super solto e direto. Passei a gostar porque ele me permite falar muito e aprender com meus erros.",
  },
  {
    name: "Daniela Bertoldo",
    role: "Escritora e Fundadora do Instituto Bert — Ribeirão Preto (SP)",
    photo: danielaImg,
    quote:
      "O inglês sempre foi um sonho distante pra mim. Achei que era tarde demais. Hoje já pretendo lançar um livro em inglês dentro da minha área profissional!",
  },
  {
    name: "Leonardo Canella",
    role: "Controladoria em Multinacional — São Paulo (SP)",
    photo: leonardoImg,
    quote:
      "Me identifiquei com o método pela facilidade em estudar e trocar em aula. O professor Jóis faz intervenções pontuais para eu evoluir. Já percebo evolução a cada aula.",
  },
  {
    name: "Darlene Martins",
    role: "Secretária Executiva — Valinhos (SP)",
    photo: darleneImg,
    quote:
      "O método me mostrou que dá pra ser leve e prático. Sempre fui muito travada. Fico mais relaxada e isso me dá confiança para avançar.",
  },
];

/* ---------- componentes ---------- */

function Section({
  bg,
  color,
  id,
  children,
}: {
  bg: string;
  color: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ backgroundColor: bg, color }} className="px-5 py-14 sm:py-24">
      <div className="mx-auto w-full max-w-[1150px]">{children}</div>
    </section>
  );
}

function Kicker({ children, color = C.red }: { children: React.ReactNode; color?: string }) {
  return (
    <p style={{ ...sans, color }} className="text-[12px] font-semibold tracking-[0.22em] sm:text-[13px]">
      {children}
    </p>
  );
}

function Check({
  on = true,
  checkColor,
  children,
}: {
  on?: boolean;
  checkColor?: string;
  children: React.ReactNode;
}) {
  return (
    <li className={`flex items-start gap-3 text-[15px] leading-[1.5] ${on ? "" : "opacity-45"}`}>
      <span
        aria-hidden="true"
        style={{ color: on ? checkColor ?? C.red : "currentColor" }}
        className="mt-[2px] flex-none font-bold"
      >
        {on ? "✓" : "—"}
      </span>
      <span className={on ? "" : "line-through"}>{children}</span>
    </li>
  );
}

function ReuniaoCta({ label, full = false }: { label: string; full?: boolean }) {
  return (
    <a
      href={CHECKOUT_REUNIAO}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...sans, backgroundColor: C.gold, color: C.black2 }}
      className={`lp-pulse lp-cta inline-flex items-center justify-center rounded-full px-8 py-5 text-center text-[15px] font-bold uppercase leading-snug tracking-wide shadow-lg transition-transform duration-200 hover:scale-[1.03] sm:text-[17px] ${
        full ? "w-full" : "w-full max-w-[560px]"
      }`}
    >
      {label}
    </a>
  );
}

function BeforeAfter() {
  return (
    <div className="mt-10 grid w-full items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
      <figure className="text-center">
        <figcaption
          style={{ ...sans, color: C.graphite }}
          className="mb-3 text-[15px] font-extrabold uppercase tracking-[0.3em]"
        >
          Antes
        </figcaption>
        <img
          src={antesAsset.url}
          width={1024}
          height={1024}
          alt="Família brasileira travada ao tentar se comunicar com um estrangeiro: pai consulta o tradutor no celular, mãe e filho parecem inseguros"
          className="mx-auto w-full max-w-[420px] rounded-2xl object-cover shadow-md"
        />
        <p className="mx-auto mt-4 max-w-[380px] text-[16px] leading-[1.6] opacity-80">
          Estuda, reconhece algumas palavras, mas trava quando precisa se comunicar.
        </p>
      </figure>

      <div className="flex items-center justify-center" aria-hidden="true">
        <svg className="lp-arrow hidden h-[120px] w-[140px] md:block" viewBox="0 0 140 120" fill="none">
          <path d="M8 84 C 45 20, 95 20, 126 66" stroke={C.gold} strokeWidth="9" strokeLinecap="round" />
          <path d="M126 66 L 112 40 M126 66 L 100 74" stroke={C.gold} strokeWidth="9" strokeLinecap="round" />
        </svg>
        <svg className="lp-arrow h-[110px] w-[90px] md:hidden" viewBox="0 0 90 110" fill="none">
          <path d="M20 8 C 78 40, 78 70, 45 100" stroke={C.gold} strokeWidth="9" strokeLinecap="round" />
          <path d="M45 100 L 22 88 M45 100 L 56 76" stroke={C.gold} strokeWidth="9" strokeLinecap="round" />
        </svg>
      </div>

      <figure className="text-center">
        <figcaption
          style={{ ...sans, color: C.graphite }}
          className="mb-3 text-[15px] font-extrabold uppercase tracking-[0.3em]"
        >
          Depois
        </figcaption>
        <img
          src={depoisAsset.url}
          width={1024}
          height={1024}
          alt="Filho brasileiro confiante liderando a conversa em inglês com um estrangeiro, enquanto os pais observam orgulhosos"
          className="mx-auto w-full max-w-[420px] rounded-2xl object-cover shadow-md"
        />
        <p className="mx-auto mt-4 max-w-[380px] text-[16px] leading-[1.6] opacity-80">
          Fala, escuta e interage em inglês dentro de situações reais e com apoio ao vivo.
        </p>
      </figure>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-[860px]">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} style={{ borderColor: `${C.grayMid}66` }} className="border-b">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span style={{ ...sans, color: C.black }} className="text-[17px] font-bold sm:text-[19px]">
                {item.q}
              </span>
              <span style={{ color: C.gold }} aria-hidden="true" className="text-[22px] font-bold">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p style={{ ...sans, color: C.graphite }} className="pb-6 text-[17px] leading-[1.7] opacity-85">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- página ---------- */

function ReuniaoPage() {
  return (
    <div style={{ ...sans, backgroundColor: C.paper }} className="lp-page min-h-screen overflow-x-hidden">
      <style>{`
        .lp-page h1, .lp-page h2, .lp-page h3, .lp-page h4 { color: inherit; }
        @keyframes lpPulse { 0%,100% { transform: scale(1);} 50% { transform: scale(1.02);} }
        .lp-pulse { animation: lpPulse 2.6s ease-in-out infinite; }
        .lp-cta:hover { background-color: ${C.goldDark} !important; }
        @keyframes lpFadeUp { from { opacity:0; transform: translateY(16px);} to { opacity:1; transform:none; } }
        .lp-reveal { animation: lpFadeUp .7s ease-out both; }
        @keyframes lpFloat { 0%,100% { transform: translateY(0);} 50% { transform: translateY(8px);} }
        .lp-arrow { animation: lpFloat 1.8s ease-in-out infinite; }
        .lp-page a:focus-visible, .lp-page button:focus-visible { outline: 3px solid ${C.gold}; outline-offset: 3px; }
        .lp-card { transition: transform .2s ease, box-shadow .3s ease; }
        .lp-card:hover { transform: translateY(-4px); }
        @media (prefers-reduced-motion: reduce) {
          .lp-pulse, .lp-reveal, .lp-arrow { animation: none !important; }
        }
      `}</style>

      {/* BARRA SUPERIOR */}
      <div
        style={{ ...sans, backgroundColor: C.black, color: C.white }}
        className="relative flex min-h-14 items-center justify-center px-32 py-3 text-center text-[10px] font-medium tracking-[0.1em] sm:text-[14px] sm:tracking-[0.14em]"
      >
        REUNIÃO FALAÊ BRASIL KIDS & TEENS • SÁBADO 10H ÀS 12H • GRATUITA
        <a
          href="https://falaebrasil.com.br"
          aria-label="Ir para o site principal Falaê Brasil"
          style={{ borderColor: C.gold, color: C.white }}
          className="absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-md border px-3 py-2 text-[9px] font-bold uppercase tracking-normal transition-colors hover:bg-white/10 sm:right-5 sm:text-[11px]"
        >
          Site principal
        </a>
      </div>

      {/* 1 — HERO + ANTES → DEPOIS */}
      <Section bg={C.paper} color={C.graphite}>
        <div className="lp-reveal flex flex-col items-center text-center">
          <img src={logoFalae} width={420} height={220} alt="Falaê Brasil!" className="h-24 w-auto sm:h-32" />

          <p
            style={{ ...sans, color: C.gold, borderColor: `${C.gold}88`, backgroundColor: C.black2 }}
            className="rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.08em] sm:text-[13px] sm:tracking-[0.12em]"
          >
            Encontro Familiar Gratuito • Todo 3º Sábado do Mês, das 10h às 12h
          </p>

          <h1
            style={{ ...sans, color: C.black }}
            className="mx-auto mt-5 max-w-[900px] text-[27px] font-extrabold leading-[1.18] sm:text-[40px]"
          >
            Descubra Como Seu Filho Pode Falar Inglês com Fluência e Segurança Usando Tecnologia e Aulas Práticas.
          </h1>

          <p className={`mx-auto mt-6 max-w-[800px] ${bodyText}`}>
            Participe do Encontro Online com Aula Demonstrativa para Crianças e Adolescentes (8 a 17 anos) e receba 30 Dias de Acesso Gratuito ao Método Falaê Brasil.
          </p>

          <div
            style={{ borderColor: `${C.gold}99`, backgroundColor: C.black2 }}
            className="relative mt-9 aspect-video w-full max-w-[860px] overflow-hidden rounded-2xl border shadow-2xl"
          >
            {VSL_VIDEO_URL ? (
              <iframe
                src={VSL_VIDEO_URL}
                title="Vídeo da Reunião de Pais e Família Falaê Brasil"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <span
                  style={{ backgroundColor: C.gold, color: C.black2 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full text-2xl shadow-lg"
                  aria-hidden="true"
                >
                  ▶
                </span>
                <p style={{ color: C.blueLight }} className="text-[14px] font-medium sm:text-[16px]">
                  Vídeo de apresentação do encontro — em breve por aqui
                </p>
              </div>
            )}
          </div>

          <div className="mt-9 flex w-full flex-col items-center gap-4">
            <ReuniaoCta label="Garantir Inscrição Gratuita da Minha Família" />
            <p className="text-[13px] tracking-wide opacity-70">
              Gratuito • Vagas limitadas por turma • Acesso enviado por e-mail
            </p>
          </div>

          <p
            style={{ ...sans, backgroundColor: C.black, color: C.white }}
            className="mt-7 whitespace-nowrap rounded-full px-3 py-3 text-[8px] font-semibold tracking-[0.04em] sm:px-6 sm:text-[11px] sm:tracking-[0.08em] lg:text-[13px]"
          >
            SÁBADO 10H–12H • AULA DEMONSTRATIVA • 1 MÊS DE APP • 1 MÊS DE AULAS AO VIVO
          </p>

          <BeforeAfter />

          <p
            style={{ ...serif, color: C.black }}
            className="mx-auto mt-12 max-w-[720px] text-[22px] font-bold leading-[1.35] sm:text-[28px]"
          >
            O primeiro passo para seu filho parar de apenas estudar inglês e começar a usá-lo.
          </p>

        </div>
      </Section>

      {/* 2 — O QUE É A REUNIÃO */}
      <Section bg={C.grayLight} color={C.graphite} id="reuniao">
        <div className="text-center">
          <Kicker>O QUE VOCÊ VAI VIVER</Kicker>
          <h2
            style={{ color: C.black }}
            className="mx-auto mt-3 max-w-[900px] text-[26px] font-extrabold leading-[1.2] sm:text-[38px]"
          >
            Uma reunião de 2 horas para pais e filhos conhecerem o Falaê Brasil por dentro.
          </h2>
          <p className={`mx-auto mt-5 max-w-[820px] ${bodyText}`}>
            É um encontro ao vivo pelo Zoom, um sábado por mês, das 10h às 12h. Você conhece o método, seu
            filho participa de uma aula demonstrativa e a família sai sabendo exatamente como funciona a
            jornada Kids e Teens.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            { t: "SÁBADO", d: "Um sábado por mês, das 10h às 12h." },
            { t: "AO VIVO NO ZOOM", d: "Pais, família e alunos com professores brasileiros e americanos." },
            { t: "GRATUITA", d: "Sem custo para participar e sem compromisso." },
          ].map((i) => (
            <div
              key={i.t}
              style={{ backgroundColor: C.white, border: `1px solid ${C.grayMid}55` }}
              className="lp-card lp-reveal rounded-2xl p-7 text-center"
            >
              <h3 style={{ color: C.black }} className="text-[18px] font-extrabold tracking-[0.1em]">
                {i.t}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.65] opacity-85">{i.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3 — O PROBLEMA */}
      <Section bg={C.black} color={C.white}>
        <h2 className="mx-auto max-w-[900px] text-center text-[25px] font-extrabold leading-[1.2] sm:text-[36px]" style={sans}>
          O problema não é falta de vontade do seu filho. É que ele nunca praticou inglês em situações reais.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.t}
              style={{ backgroundColor: C.black2, border: `1px solid ${C.blueLight}33` }}
              className="lp-card lp-reveal rounded-2xl p-6"
            >
              <div style={{ color: C.blueLight }} className="text-[15px] font-extrabold">
                ❌ {p.t}
              </div>
              <p className="mt-3 text-[16px] leading-[1.65] opacity-85">{p.d}</p>
            </div>
          ))}
        </div>

        <div
          style={{ backgroundColor: C.gold, color: C.black2 }}
          className="mx-auto mt-10 max-w-[900px] rounded-2xl px-6 py-6 text-center text-[17px] font-extrabold uppercase leading-snug tracking-wide sm:text-[22px]"
        >
          Comunique primeiro. Aperfeiçoe durante o caminho.
        </div>
      </Section>

      {/* 4 — AGENDA DAS 2 HORAS */}
      <Section bg={C.paper} color={C.graphite}>
        <div className="text-center">
          <Kicker>COMO SÃO AS 2 HORAS</Kicker>
          <h2
            style={{ color: C.black }}
            className="mx-auto mt-3 max-w-[880px] text-[25px] font-extrabold leading-[1.2] sm:text-[36px]"
          >
            Do primeiro “hello” à aula demonstrativa com seu filho.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {agenda.map((a) => (
            <div
              key={a.n}
              style={{ backgroundColor: C.white, border: `1px solid ${C.grayMid}55` }}
              className="lp-card lp-reveal rounded-2xl p-7"
            >
              <div style={{ ...serif, color: C.gold }} className="text-[30px] font-bold leading-none">
                {a.n}
              </div>
              <h3 style={{ color: C.black }} className="mt-3 text-[16px] font-extrabold tracking-[0.1em]">
                {a.t}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] opacity-85">{a.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-8 md:grid-cols-2">
          <img
            src={capaKids.url}
            width={1024}
            height={1024}
            loading="lazy"
            alt="Capa do Falaê Brasil Kids 1, com personagens em uma feira brasileira"
            className="w-full rounded-2xl object-cover shadow-md"
          />
          <img
            src={capaTeens.url}
            width={1024}
            height={1024}
            loading="lazy"
            alt="Capa do Falaê Brasil Teens 1, com jovens brasileiros recebendo visitantes estrangeiros"
            className="w-full rounded-2xl object-cover shadow-md"
          />
        </div>
      </Section>

      {/* 5 — O QUE VOCÊ RECEBE */}
      <Section bg={C.grayLight} color={C.graphite}>
        <div className="text-center">
          <Kicker>INCLUÍDO NA SUA PARTICIPAÇÃO — 100% GRATUITA</Kicker>
          <h2
            style={{ color: C.black }}
            className="mx-auto mt-3 max-w-[880px] text-[25px] font-extrabold leading-[1.2] sm:text-[36px]"
          >
            Você sai do sábado com uma experiência real e 30 dias de acesso.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {entregaveis.map((e) => (
            <div
              key={e.t}
              style={{ backgroundColor: C.white, border: `1px solid ${C.grayMid}55` }}
              className="lp-card lp-reveal rounded-2xl p-7"
            >
              <h3 style={{ color: C.black }} className="text-[17px] font-extrabold leading-snug">
                {e.t}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] opacity-85">{e.d}</p>
            </div>
          ))}
        </div>

        <div
          style={{ backgroundColor: C.black, color: C.white }}
          className="mx-auto mt-10 max-w-[960px] rounded-2xl px-6 py-6 text-center text-[15px] font-semibold leading-relaxed sm:text-[17px]"
        >
          Importante: o acesso incluído na reunião é <strong>restrito aos cursos Falaê Brasil Kids e Teens</strong>. Todos os demais cursos, módulos e recursos do ambiente permanecem bloqueados até a assinatura de um plano.
        </div>

        <div className="mt-9 flex flex-col items-center gap-4">
          <ReuniaoCta label="Quero minha vaga na reunião — gratuito" />
        </div>
      </Section>

      {/* 6 — COMO CHEGA O ACESSO */}
      <Section bg={C.black2} color={C.white}>
        <div className="text-center">
          <Kicker color={C.gold}>DEPOIS DE GARANTIR SUA VAGA</Kicker>
          <h2 className="mx-auto mt-3 max-w-[860px] text-[25px] font-extrabold leading-[1.2] sm:text-[36px]">
            Seu acesso chega por e-mail, em quatro passos simples.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {acesso.map((a) => (
            <div
              key={a.n}
              style={{ backgroundColor: C.black, border: `1px solid ${C.blueLight}33` }}
              className="lp-card lp-reveal rounded-2xl p-7"
            >
              <div style={{ ...serif, color: C.gold }} className="text-[30px] font-bold leading-none">
                {a.n}
              </div>
              <h3 style={{ color: C.blueLight }} className="mt-3 text-[15px] font-extrabold tracking-[0.1em]">
                {a.t}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] opacity-85">{a.d}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[820px] text-center text-[15px] leading-[1.7] opacity-80">
          Não recebeu o e-mail? Confira a caixa de spam e fale com a equipe em
          atendimento@falaebrasil.com.br ou no WhatsApp (11) 98161-2800.
        </p>
      </Section>

      {/* 7 — MÉTODO */}
      <Section bg={C.paper} color={C.graphite}>
        <div className="text-center">
          <Kicker>NOSSO JEITO DE ENSINAR</Kicker>
          <h2
            style={{ color: C.black }}
            className="mx-auto mt-3 max-w-[880px] text-[25px] font-extrabold leading-[1.2] sm:text-[36px]"
          >
            Inglês Transversal: aprender a língua dentro da vida que o aluno realmente vive.
          </h2>
          <p className={`mx-auto mt-5 max-w-[820px] ${bodyText}`}>
            Nossos personagens cartoon são crianças e adolescentes brasileiros que recebem visitantes
            estrangeiros em cenários típicos do Brasil. Os diálogos inspiram todo o conteúdo graduado e
            colocam a culinária, a música, as artes e as linguagens brasileiras no centro do aprendizado.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {mecanismo.map((m) => (
            <div
              key={m.n}
              style={{ backgroundColor: C.white, border: `1px solid ${C.grayMid}44` }}
              className="lp-card lp-reveal rounded-2xl p-7"
            >
              <div style={{ ...serif, color: C.red }} className="text-[34px] font-bold leading-none">
                {m.n}
              </div>
              <h3 style={{ color: C.black }} className="mt-3 text-[17px] font-extrabold tracking-[0.12em]">
                {m.t}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.65] opacity-85">{m.d}</p>
            </div>
          ))}
        </div>

        <img
          src={mecanismoImg}
          width={1280}
          height={864}
          loading="lazy"
          alt="Aplicativo Falaê Brasil no celular conectado a uma situação real de atendimento"
          className="mt-12 w-full rounded-2xl object-cover shadow-md"
        />
      </Section>

      {/* 8 — 5 IAs */}
      <Section bg={C.black} color={C.white}>
        <div className="text-center">
          <Kicker color={C.gold}>A PLATAFORMA TREINA COM O ALUNO</Kicker>
          <h2 className="mx-auto mt-3 max-w-[840px] text-[25px] font-extrabold leading-[1.2] sm:text-[36px]">
            Cinco ferramentas de IA que seu filho já experimenta nos 30 dias.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ias.map((ia) => (
            <div
              key={ia.name}
              style={{ backgroundColor: C.black2, border: `1px solid ${C.blueLight}33` }}
              className="lp-card lp-reveal rounded-2xl p-7"
            >
              <div className="text-[26px]" aria-hidden="true">
                {ia.emoji}
              </div>
              <h3 style={{ color: C.blueLight }} className="mt-3 text-[17px] font-extrabold tracking-[0.12em]">
                {ia.name}
              </h3>
              <p className="mt-1 text-[15px] font-semibold">{ia.sub}</p>
              <p className="mt-3 text-[16px] leading-[1.65] opacity-85">{ia.text}</p>
            </div>
          ))}
        </div>

        <p style={serif} className="mt-12 text-center text-[24px] font-bold leading-[1.3] sm:text-[30px]">
          Falar. Escutar. Memorizar. Escrever. Ler.
        </p>
      </Section>

      {/* 9 — NÍVEIS KIDS E TEENS */}
      <Section bg={C.grayLight} color={C.graphite}>
        <div className="text-center">
          <Kicker>ONDE A REUNIÃO TE COLOCA</Kicker>
          <h2
            style={{ color: C.black }}
            className="mx-auto mt-3 max-w-[880px] text-[25px] font-extrabold leading-[1.2] sm:text-[36px]"
          >
            Do Pré-A1 ao A2: uma trilha pensada para cada faixa etária.
          </h2>
          <p className={`mx-auto mt-5 max-w-[820px] ${bodyText}`}>
            A reunião apresenta os níveis Kids (8–12a) e Teens (13–17a). Seu filho começa exatamente onde
            está, com diálogos e atividades adequados à idade.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {niveis.map((n) => (
            <div
              key={n.tag}
              style={{
                backgroundColor: n.bg,
                color: n.color,
                border: `1px solid ${n.tag === "KIDS" ? C.black : `${C.grayMid}55`}`,
              }}
              className="lp-card lp-reveal flex flex-col rounded-2xl p-7"
            >
              <span
                style={{ backgroundColor: C.gold, color: C.black2 }}
                className="self-start rounded-full px-4 py-1 text-[11px] font-extrabold tracking-[0.18em]"
              >
                {n.tag}
              </span>
              <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.14em] opacity-80">{n.faixa}</p>
              <div className="mt-6 flex-1 space-y-6">
                {n.niveis.map((l) => (
                  <div key={l.code}>
                    <h3 className="text-[16px] font-extrabold tracking-[0.08em]">{l.code}</h3>
                    <p className="mt-2 text-[15px] leading-[1.6] opacity-85">{l.d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 10 — PLANO PRO (CHAMADA COMERCIAL) */}
      <Section bg={C.black2} color={C.white} id="plano-pro">
        <div className="text-center">
          <Kicker color={C.gold}>SEU PRÓXIMO PASSO APÓS A REUNIÃO</Kicker>
          <h2 className="mx-auto mt-3 max-w-[900px] text-[26px] font-extrabold leading-[1.2] sm:text-[38px]">
            Plano PRO: tudo do Plano OPEN + aulas ao vivo via Zoom com professores brasileiros e americanos.
          </h2>
          <p className="mx-auto mt-5 max-w-[840px] text-[17px] leading-[1.7] opacity-85 sm:text-[18px]">
            No sábado da reunião você conhece por dentro o plano completo do Falaê Brasil Kids & Teens e a
            condição especial de entrada para quem participou.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div
            style={{ backgroundColor: C.white, color: C.graphite, border: `1px solid ${C.grayMid}55` }}
            className="lp-card flex flex-col rounded-2xl p-7"
          >
            <span
              style={{ backgroundColor: C.grayLight, color: C.black }}
              className="self-start rounded-full px-4 py-1 text-[11px] font-extrabold tracking-[0.18em]"
            >
              BASE — PLANO OPEN
            </span>
            <h3 style={{ color: C.black }} className="mt-5 text-[22px] font-extrabold">
              Tudo o que já vem na plataforma
            </h3>
            <ul className="mt-6 flex-1 space-y-2">
              {PLAN_FEATURES.open.map((f) => (
                <Check key={f}>{f}</Check>
              ))}
            </ul>
          </div>

          <div
            style={{ backgroundColor: C.black, color: C.white, border: `2px solid ${C.gold}` }}
            className="lp-card flex flex-col rounded-2xl p-7"
          >
            <span
              style={{ backgroundColor: C.gold, color: C.black2 }}
              className="self-start rounded-full px-4 py-1 text-[11px] font-extrabold tracking-[0.18em]"
            >
              RECOMENDADO — PLANO PRO
            </span>
            <h3 className="mt-5 text-[22px] font-extrabold">E o que só o PRO adiciona</h3>
            <ul className="mt-6 flex-1 space-y-2">
              {proExtras.map((f) => (
                <Check key={f} checkColor={C.gold}>
                  {f}
                </Check>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-[1.65] opacity-85">
              Valores e horários são apresentados na reunião, com condição exclusiva para inscritos.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <ReuniaoCta label="Participar da reunião e conhecer o PRO — gratuito" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-semibold underline opacity-85"
          >
            Falar com a equipe no WhatsApp
          </a>
        </div>
      </Section>

      {/* 11 — DEPOIMENTOS */}
      <Section bg={C.paper} color={C.graphite} id="depoimentos">
        <h2
          style={{ color: C.black }}
          className="mx-auto max-w-[900px] text-center text-[25px] font-extrabold leading-[1.2] sm:text-[36px]"
        >
          O que muda quando o inglês começa a entrar na vida real?
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              style={{ backgroundColor: C.white, border: `1px solid ${C.grayMid}44` }}
              className="lp-card lp-reveal flex flex-col rounded-2xl p-6 shadow-sm"
            >
              <div style={{ ...serif, color: C.red }} className="text-[30px] leading-none" aria-hidden="true">
                “
              </div>
              <blockquote className="mt-2 flex-1 text-[15px] leading-[1.65] opacity-90">{t.quote}</blockquote>
              <figcaption
                className="mt-5 flex items-center gap-4 border-t pt-4"
                style={{ borderColor: `${C.grayMid}55` }}
              >
                <img
                  src={t.photo}
                  width={112}
                  height={112}
                  loading="lazy"
                  alt={t.name}
                  className="h-14 w-14 flex-none rounded-full object-cover"
                />
                <div>
                  <div style={{ color: C.black }} className="text-[13px] font-extrabold uppercase tracking-wider">
                    {t.name}
                  </div>
                  <div className="text-[13px] opacity-75">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* 12 — QUEM CONDUZ */}
      <Section bg={C.grayLight} color={C.graphite}>
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,340px)_1fr]">
          <img
            src={joisAlaby}
            width={680}
            height={680}
            loading="lazy"
            alt="Jóis Alaby, criador do método Falaê Brasil"
            className="mx-auto aspect-square w-full max-w-[340px] rounded-2xl object-cover shadow-md"
          />
          <div>
            <Kicker>QUEM CONDUZ A REUNIÃO</Kicker>
            <h2 style={{ color: C.black }} className="mt-3 text-[25px] font-extrabold leading-[1.2] sm:text-[34px]">
              Jóis Alaby e o método Falaê Brasil.
            </h2>
            <p className={`mt-5 ${bodyText}`}>
              Jóis Alaby aprendeu inglês na infância, morando por cinco anos nos EUA. Mais tarde, por
              mais cinco anos, fez faculdade nos EUA e trouxe para o Brasil uma forma de ensinar que
              começa pela comunicação e não pela regra.
            </p>
            <p className={`mt-4 ${bodyText}`}>
              Na reunião, ele apresenta o método para pais e família e conduz a aula demonstrativa ao
              lado de professores brasileiros e americanos, para que seu filho fale inglês desde o
              primeiro encontro.
            </p>
          </div>
        </div>
      </Section>

      {/* 13 — FAQ */}
      <Section bg={C.paper} color={C.graphite}>
        <h2
          style={{ color: C.black }}
          className="mx-auto max-w-[860px] text-center text-[25px] font-extrabold leading-[1.2] sm:text-[36px]"
        >
          Perguntas Frequentes
        </h2>
        <div className="mt-10">
          <Faq />
        </div>
        <div className="mt-12 flex flex-col items-center gap-4">
          <ReuniaoCta label="Garantir minha vaga — gratuito" />
        </div>
      </Section>

      {/* 14 — CTA FINAL + RODAPÉ */}
      <Section bg={C.black} color={C.white}>
        <h2 className="mx-auto max-w-[860px] text-center text-[25px] font-extrabold leading-[1.2] sm:text-[36px]">
          Sábado, 10h. Duas horas que mudam a relação do seu filho com o inglês.
        </h2>
        <p className="mx-auto mt-5 max-w-[780px] text-center text-[17px] leading-[1.7] opacity-85">
          Participação gratuita, com reunião para pais, aula demonstrativa, 30 dias de acesso ao
          APP Falaê Brasil Kids & Teens e 1 mês de aulas ao vivo via Zoom.
        </p>
        <div className="mt-9 flex flex-col items-center gap-4">
          <ReuniaoCta label="Quero participar da reunião — gratuito" />
          <p className="text-[13px] tracking-wide opacity-70">
            Acesso enviado por e-mail para verificação e cadastro no APP Falaê Brasil
          </p>
        </div>
      </Section>

      <footer style={{ backgroundColor: C.black2, color: C.white }} className="px-5 py-14">
        <div className="mx-auto flex w-full max-w-[1150px] flex-col items-center text-center">
          <img src={logoFalae} width={320} height={170} loading="lazy" alt="Falaê Brasil!" className="h-20 w-auto" />
          <p style={serif} className="mt-6 text-[22px] font-bold leading-[1.3] sm:text-[26px]">
            Falaê Brasil.
            <br />
            Inglês Transversal.
          </p>
          <p className="mt-4 text-[14px] leading-relaxed opacity-75">
            CNPJ 18.656.810/0001-66
            <br />
            IBOX Centro de Idiomas Ltda.
          </p>
          <p className="mt-6 text-[13px] opacity-60">
            © {new Date().getFullYear()} Falaê Brasil. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ContactSection } from "@/components/ContactSection";
import { CHECKOUT } from "@/lib/checkout";
import vslImersao from "@/assets/vsl-imersao.mp4.asset.json";
import antesImg from "@/assets/lp-antes.jpg";
import depoisImg from "@/assets/home-videoconf.jpg";
import joisAlaby from "@/assets/jois-alaby-new.png";
import mecanismoImg from "@/assets/lp-mecanismo.jpg";
import turismoImg from "@/assets/essential-pro-pousada.jpg";
import clarindaImg from "@/assets/testimonials/clarinda-kipper.jpg";
import brunoImg from "@/assets/testimonials/bruno-mendonca.jpg";
import paulaImg from "@/assets/testimonials/paula-freitas.jpg";
import danielaImg from "@/assets/testimonials/daniela-bertoldo.png";
import leonardoImg from "@/assets/testimonials/leonardo-canella.jpg";
import darleneImg from "@/assets/testimonials/darlene-martins.jpg";

const CHECKOUT_IMERSAO = CHECKOUT.imersaoAdultos;

const problems = [
  { title: "Você estuda, mas trava", description: "Na atividade você reconhece a resposta. Na hora de falar com alguém, as palavras somem." },
  { title: "Você nunca começou de verdade", description: "Fica esperando o momento, o curso ou o dinheiro certo — e o inglês continua parado." },
  { title: "Você já tentou e desistiu", description: "Métodos longos, sem contexto e sem prática ao vivo cansam antes de gerar resultado." },
  { title: "Você quer sentir antes de assinar", description: "É justo. Por isso a imersão custa R$ 21,00: você experimenta o método antes de decidir." },
];

const agenda = [
  { time: "09h", title: "Abertura e diagnóstico", description: "Você entende onde está, como o Inglês Transversal funciona e por que o contexto vem antes da regra." },
  { time: "10h", title: "Módulo 1 do A1 na prática", description: "As quatro lições de Turismo: chegada, hospedagem, restaurante e atendimento ao visitante." },
  { time: "11h", title: "Prática com professores BR + EUA", description: "Você fala, escuta, erra, corrige e repete com acompanhamento em tempo real." },
  { time: "12h", title: "Seu próximo passo", description: "Apresentação do Plano PRO e orientações para liberar seu acesso ao Módulo 1 no aplicativo." },
];

const included = [
  { title: "3 horas ao vivo no Zoom", description: "No 1º sábado do mês, das 09h às 12h, com professores brasileiros e americanos conduzindo a prática." },
  { title: "Módulo 1 do A1 Básico — Turismo", description: "O primeiro módulo completo do nível A1, com quatro lições liberadas no APP Falaê Brasil." },
  { title: "Acesso ao APP Falaê Brasil", description: "Acesso restrito ao Módulo 1 — Turismo (A1). Os demais módulos e níveis permanecem bloqueados." },
  { title: "Ferramentas de IA nas lições", description: "Você experimenta Memorizaê, Falaê, Escutaê, Leiaê e Escreveaê dentro do módulo liberado." },
  { title: "Materiais das quatro lições", description: "Vídeos curtos, quizzes e atividades para revisar o conteúdo depois do encontro ao vivo." },
  { title: "Condição especial do Plano PRO", description: "Quem participa conhece o plano completo e a condição de entrada apresentada no mesmo dia." },
];

const accessSteps = [
  { number: "01", title: "Inscrição", description: "Você finaliza a inscrição de R$ 21,00 no checkout seguro." },
  { number: "02", title: "E-mail automático", description: "Após a confirmação do pagamento, você recebe o link de verificação e cadastro." },
  { number: "03", title: "Cadastro e verificação", description: "Você confirma seu e-mail, cria sua senha e entra no APP Falaê Brasil." },
  { number: "04", title: "Módulo 1 liberado", description: "Seu ambiente abre exclusivamente no Módulo 1 — Turismo (A1), com quatro lições." },
];

const method = [
  { number: "01", title: "Contexto", description: "Primeiro você entende onde e por que aquela linguagem é usada." },
  { number: "02", title: "Prática", description: "Depois você lê, escuta, memoriza, escreve e fala com ferramentas interativas." },
  { number: "03", title: "Aplicação", description: "Por fim, leva a estrutura para situações reais de turismo, trabalho e convivência." },
];

const aiTools = [
  { icon: "🎙️", name: "Falaê", subtitle: "Pronúncia e fala", description: "Grave sua voz e receba avaliação de pronúncia, fluência e ritmo." },
  { icon: "🎧", name: "Escutaê", subtitle: "Compreensão auditiva", description: "Treine o ouvido com atividades progressivas e correção instantânea." },
  { icon: "🧠", name: "Memorizaê", subtitle: "Memória e fixação", description: "Use flashcards, áudio e revisão frequente para lembrar palavras na hora certa." },
  { icon: "✍️", name: "Escreveaê", subtitle: "Escrita", description: "Escreva mensagens e textos e receba feedback de gramática e vocabulário." },
  { icon: "📖", name: "Leiaê", subtitle: "Leitura", description: "Leia com tradução, áudio e vocabulário assistido dentro do módulo." },
];

const openFeatures = [
  "Plataforma completa do A1 ao C2",
  "Vídeos, quizzes, músicas e atividades",
  "Cinco ferramentas de IA para praticar",
  "Trilhas de inglês para vida, viagens e trabalho",
];

const proFeatures = [
  "Tudo o que está no Plano OPEN",
  "Aulas ao vivo ilimitadas via Zoom",
  "Professores brasileiros e americanos",
  "Todos os horários e níveis disponíveis",
  "Comunidades Let’s Falaê por nível",
  "Sessão intercultural mensal em áudio",
];

const testimonials = [
  { name: "Clarinda Kipper", role: "RH multinacional — São João D'Oeste (SC)", photo: clarindaImg, quote: "O teacher Jóis e seu método são direto ao ponto — inglês prático e funcional. A forma de me comunicar hoje me traz tranquilidade e objetividade para aquilo que realmente interessa." },
  { name: "Bruno Mendonça", role: "Key Account Manager — São Paulo (SP)", photo: brunoImg, quote: "A grande sacada é trazer o inglês para a realidade que eu vivo. Mudei de empresa e agora lidero reuniões online com estrangeiros com muito mais confiança." },
  { name: "Paula Freitas", role: "Gerente de RH — São Paulo (SP)", photo: paulaImg, quote: "Eu nunca gostei de inglês. O método é solto e direto. Passei a gostar porque ele me permite falar muito e aprender com meus erros." },
  { name: "Daniela Bertoldo", role: "Escritora e fundadora — Ribeirão Preto (SP)", photo: danielaImg, quote: "O inglês sempre foi um sonho distante. Achei que era tarde demais. Hoje já pretendo lançar um livro em inglês dentro da minha área profissional!" },
  { name: "Leonardo Canella", role: "Controladoria em multinacional — São Paulo (SP)", photo: leonardoImg, quote: "Me identifiquei com a facilidade de estudar e trocar em aula. O professor faz intervenções pontuais e já percebo evolução a cada encontro." },
  { name: "Darlene Martins", role: "Secretária Executiva — Valinhos (SP)", photo: darleneImg, quote: "O método me mostrou que dá para ser leve e prático. Sempre fui muito travada. Fico mais relaxada e isso me dá confiança para avançar." },
];

const faq = [
  { question: "Quando acontece a imersão?", answer: "Todo 1º sábado do mês, das 09h às 12h — três horas ao vivo pelo Zoom, com professores brasileiros e americanos." },
  { question: "Quanto custa?", answer: "A inscrição é de R$ 21,00, em pagamento único pelo checkout seguro, via cartão de crédito ou Pix." },
  { question: "Preciso saber inglês para participar?", answer: "Não. A imersão trabalha o Módulo 1 do nível A1 Básico — Turismo, pensado para quem começa do zero." },
  { question: "O que recebo depois de pagar?", answer: "Você recebe um e-mail automático com o link de verificação e cadastro no APP Falaê Brasil. Ao confirmar, seu acesso ao Módulo 1 — Turismo (A1), com quatro lições, é liberado." },
  { question: "O acesso ao aplicativo é completo?", answer: "Não. O acesso da imersão é exclusivo ao Módulo 1 — Turismo (A1). Os demais módulos e níveis ficam bloqueados até a assinatura de um plano." },
  { question: "A imersão é gravada?", answer: "A experiência acontece ao vivo para você praticar em tempo real. As quatro lições do Módulo 1 ficam disponíveis no aplicativo." },
  { question: "E se eu quiser continuar depois?", answer: "No próprio sábado apresentamos o Plano PRO, com todo o conteúdo da plataforma e aulas ao vivo ilimitadas no Zoom." },
  { question: "Como falo com a equipe antes de me inscrever?", answer: "Pelo WhatsApp (11) 98161-2800 ou pelo e-mail atendimento@falaebrasil.com.br." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Imersão Falaê Brasil — Módulo 1 do A1 Básico (Turismo)",
  description: "Imersão ao vivo de três horas, no 1º sábado do mês, com o Módulo 1 do A1 Básico e quatro lições liberadas no aplicativo.",
  provider: { "@type": "Organization", name: "Falaê Brasil", url: "https://falaebrasil.com.br" },
  offers: { "@type": "Offer", price: "21.00", priceCurrency: "BRL", availability: "https://schema.org/InStock", url: CHECKOUT_IMERSAO },
};

export const Route = createFileRoute("/imersao")({
  head: () => ({
    meta: [
      { title: "Imersão Falaê Brasil ao vivo | 1º sábado, 09h às 12h por R$ 21" },
      { name: "description", content: "Comece o inglês do zero em três horas ao vivo no Zoom e receba o Módulo 1 do A1 Básico — Turismo no APP Falaê Brasil." },
      { property: "og:title", content: "Imersão Falaê Brasil — 3 horas ao vivo por R$ 21,00" },
      { property: "og:description", content: "1º sábado do mês, das 09h às 12h. Módulo 1 do A1 Básico com quatro lições no aplicativo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(courseJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: ImersaoPage,
});

function Cta({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={CHECKOUT_IMERSAO}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.1em] text-accent-foreground shadow-cta transition-transform hover:scale-[1.02] ${className}`}
    >
      {label}
    </a>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{children}</p>;
}

function Heading({ kicker, children, description }: { kicker: string; children: React.ReactNode; description?: string }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-4xl">{children}</h2>
      {description && <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-brand-blue-light sm:text-lg">{description}</p>}
    </div>
  );
}

function Vsl() {
  return (
    <div className="mx-auto mt-10 w-full max-w-[430px] rounded-2xl bg-gradient-to-br from-accent via-brand-blue-mid to-accent p-[1.5px] shadow-elevated">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-brand-navy">
        <video
          src={vslImersao.url}
          controls
          playsInline
          preload="metadata"
          aria-label="Vídeo da Imersão Falaê Brasil"
          className="absolute inset-0 h-full w-full object-contain"
        >
          Seu navegador não suporta a reprodução deste vídeo.
        </video>
      </div>
    </div>
  );
}

function BeforeAfter() {
  return (
    <div className="mt-10 grid w-full items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
      <figure className="text-center">
        <figcaption className="mb-3 text-sm font-extrabold uppercase tracking-[0.3em] text-accent">Antes</figcaption>
        <img src={antesImg} width={1024} height={1024} alt="Pessoa travada tentando falar inglês e consultando o tradutor no celular" loading="lazy" className="mx-auto aspect-square w-full max-w-[420px] rounded-2xl object-cover shadow-elevated" />
        <p className="mx-auto mt-4 max-w-[380px] leading-relaxed text-brand-blue-light">Entende algumas palavras, mas trava quando precisa falar.</p>
      </figure>
      <div className="flex items-center justify-center text-accent" aria-hidden="true">
        <svg className="hidden h-[120px] w-[140px] md:block" viewBox="0 0 140 120" fill="none"><path d="M8 84 C 45 20, 95 20, 126 66" stroke="currentColor" strokeWidth="9" strokeLinecap="round" /><path d="M126 66 L 112 40 M126 66 L 100 74" stroke="currentColor" strokeWidth="9" strokeLinecap="round" /></svg>
        <svg className="h-[110px] w-[90px] md:hidden" viewBox="0 0 90 110" fill="none"><path d="M20 8 C 78 40, 78 70, 45 100" stroke="currentColor" strokeWidth="9" strokeLinecap="round" /><path d="M45 100 L 22 88 M45 100 L 56 76" stroke="currentColor" strokeWidth="9" strokeLinecap="round" /></svg>
      </div>
      <figure className="text-center">
        <figcaption className="mb-3 text-sm font-extrabold uppercase tracking-[0.3em] text-accent">Depois</figcaption>
        <img src={depoisImg} width={1024} height={1024} alt="Aluna conversando em inglês durante uma aula ao vivo" loading="lazy" className="mx-auto aspect-square w-full max-w-[420px] rounded-2xl object-cover shadow-elevated" />
        <p className="mx-auto mt-4 max-w-[380px] leading-relaxed text-brand-blue-light">Fala, entende e se comunica em situações reais — praticando ao vivo.</p>
      </figure>
    </div>
  );
}

function ImersaoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="imersao-dark min-h-screen overflow-x-hidden bg-brand-navy pb-24 text-primary-foreground">
      <style>{`.imersao-dark h1,.imersao-dark h2,.imersao-dark h3{color:inherit}`}</style>

      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-blue-light sm:px-8">
        <span>Falaê Brasil • Imersão Adultos 18+</span>
        <a href="https://falaebrasil.com.br" className="rounded-md border border-accent/60 px-3 py-1.5 text-primary-foreground hover:bg-white/10">Site principal</a>
      </div>

      <section className="bg-gradient-corporate px-4 pb-16 pt-12 sm:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-accent sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-destructive" />Evento Ao Vivo • Todo 1º Sábado do Mês
          </span>
          <h1 className="mt-6 text-balance text-[28px] font-extrabold leading-[1.15] sm:text-[44px]">
            Destrave seu Inglês do Zero e Experimente o Método Falaê Brasil em <span className="text-accent">3 Horas Práticas Ao Vivo no Zoom.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-blue-light sm:text-lg">
            Pratique o Módulo 1 do A1 Básico — Turismo com professores brasileiros e americanos por <strong className="text-primary-foreground">R$ 21,00</strong> e receba as quatro lições no APP Falaê Brasil.
          </p>
          <Vsl />
          <div className="mt-10 flex flex-col items-center gap-3">
            <Cta label="Garantir Minha Vaga na Próxima Imersão por R$ 21,00" className="w-full max-w-xl" />
            <p className="text-xs text-brand-blue-light">Pagamento único via cartão de crédito ou Pix • Acesso enviado por e-mail</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Heading kicker="O que você vai viver" description="É um encontro ao vivo pelo Zoom, no 1º sábado do mês, das 09h às 12h. Você aprende dentro de situações reais de turismo e pratica em tempo real.">
            Uma imersão para sair do zero e falar suas primeiras frases em inglês.
          </Heading>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[{ title: "1º sábado", text: "Todo primeiro sábado do mês, das 09h às 12h." }, { title: "Ao vivo no Zoom", text: "Professores brasileiros e americanos com você em tempo real." }, { title: "R$ 21,00", text: "Inscrição única, sem mensalidade e sem compromisso." }].map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"><h3 className="font-bold uppercase text-accent">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-brand-blue-light">{item.text}</p></article>
            ))}
          </div>
          <BeforeAfter />
          <p className="mx-auto mt-10 max-w-3xl text-center text-xl font-bold sm:text-2xl">Você não precisa de anos de curso para dizer sua primeira frase de verdade.</p>
        </div>
      </section>

      <section className="bg-gradient-corporate px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Heading kicker="Por que esta experiência existe">O problema não é falta de vontade. É nunca ter praticado inglês numa situação real.</Heading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {problems.map((item) => <article key={item.title} className="rounded-2xl border border-white/10 bg-brand-navy/60 p-6"><h3 className="font-bold text-accent">{item.title}</h3><p className="mt-2 leading-relaxed text-brand-blue-light">{item.description}</p></article>)}
          </div>
          <p className="mx-auto mt-10 max-w-4xl rounded-2xl bg-accent px-6 py-5 text-center text-lg font-extrabold uppercase text-accent-foreground sm:text-xl">Comunique primeiro. Aperfeiçoe durante o caminho.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Heading kicker="Horário: 09h às 12h" description="Cronograma do Módulo 1 — Iniciante / A1">Do primeiro “hello” à sua primeira conversa guiada.</Heading>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {agenda.map((item) => <li key={item.time} className="rounded-2xl border border-white/10 bg-white/5 p-6"><p className="text-2xl font-bold text-accent">{item.time}</p><h3 className="mt-3 text-sm font-bold uppercase">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-brand-blue-light">{item.description}</p></li>)}
          </ol>
          <img src={turismoImg} width={1280} height={864} loading="lazy" alt="Atendimento em inglês a visitantes estrangeiros em uma pousada brasileira" className="mt-10 max-h-[520px] w-full rounded-2xl object-cover shadow-elevated" />
        </div>
      </section>

      <section className="bg-gradient-corporate px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Heading kicker="Incluído na inscrição de R$ 21,00">Você sai do sábado com o Módulo 1 do A1 na mão.</Heading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => <article key={item.title} className="rounded-2xl border border-accent/30 bg-brand-navy/60 p-6"><h3 className="font-bold text-accent">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-brand-blue-light">{item.description}</p></article>)}
          </div>
          <p className="mx-auto mt-10 max-w-4xl rounded-2xl border border-accent/50 bg-accent/10 px-6 py-5 text-center leading-relaxed">
            <strong>Importante:</strong> o acesso da imersão é exclusivo ao Módulo 1 — Turismo do nível A1, com quatro lições. Os demais módulos e níveis permanecem bloqueados até a assinatura de um plano.
          </p>
          <div className="mt-8 flex justify-center"><Cta label="Quero Minha Vaga por R$ 21,00" className="w-full max-w-md" /></div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Heading kicker="Depois do pagamento">Seu acesso chega por e-mail em quatro passos simples.</Heading>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accessSteps.map((item) => <li key={item.number} className="rounded-2xl border border-white/10 bg-white/5 p-6"><p className="text-3xl font-bold text-accent">{item.number}</p><h3 className="mt-3 text-sm font-bold uppercase">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-brand-blue-light">{item.description}</p></li>)}
          </ol>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-brand-blue-light">Não recebeu o e-mail? Confira a caixa de spam e fale com a equipe pelo WhatsApp (11) 98161-2800 ou atendimento@falaebrasil.com.br.</p>
        </div>
      </section>

      <section className="bg-gradient-corporate px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Heading kicker="Nosso jeito de ensinar" description="Em vez de decorar regras soltas, você encontra o idioma dentro de situações que acontecem numa viagem, num atendimento, no trabalho ou numa conversa.">Inglês Transversal: aprender a língua dentro da vida que você realmente vive.</Heading>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {method.map((item) => <article key={item.number} className="rounded-2xl border border-white/10 bg-brand-navy/60 p-6"><p className="text-3xl font-bold text-accent">{item.number}</p><h3 className="mt-3 font-bold uppercase">{item.title}</h3><p className="mt-2 leading-relaxed text-brand-blue-light">{item.description}</p></article>)}
          </div>
          <img src={mecanismoImg} width={1280} height={864} loading="lazy" alt="Aplicativo Falaê Brasil conectado a uma situação real de atendimento" className="mt-10 max-h-[520px] w-full rounded-2xl object-cover shadow-elevated" />
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Heading kicker="A plataforma treina com você">Cinco ferramentas de IA que você experimenta no Módulo 1.</Heading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {aiTools.map((item) => <article key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-5"><span className="text-2xl" aria-hidden="true">{item.icon}</span><h3 className="mt-3 font-bold uppercase text-accent">{item.name}</h3><p className="mt-1 text-sm font-semibold">{item.subtitle}</p><p className="mt-3 text-sm leading-relaxed text-brand-blue-light">{item.description}</p></article>)}
          </div>
          <p className="mt-10 text-center text-xl font-bold">Falar. Escutar. Memorizar. Escrever. Ler.</p>
        </div>
      </section>

      <section className="bg-gradient-corporate px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Heading kicker="Onde a imersão coloca você" description="O Módulo 1 do A1 abre a trilha. Depois, a progressão segue por Essential PRO (A1 e A2), Master PRO (B1 e B2) e Black PRO (C1 e C2).">Do Zero A1 ao C2 Avançado: a imersão é o primeiro passo.</Heading>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {["A1", "A2", "B1", "B2", "C1", "C2"].map((level, index) => <div key={level} className="flex items-center gap-3"><span className={`flex h-14 w-14 items-center justify-center rounded-full border-2 font-bold ${index === 0 ? "border-accent bg-accent text-accent-foreground" : "border-brand-blue-mid text-primary-foreground"}`}>{level}</span>{index < 5 && <span className="text-brand-blue-mid" aria-hidden="true">→</span>}</div>)}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Heading kicker="Seu próximo passo após a imersão" description="No sábado você conhece o plano completo e a condição especial de entrada para participantes.">Plano PRO: plataforma completa mais aulas ao vivo no Zoom.</Heading>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-7"><span className="text-xs font-bold uppercase text-brand-blue-mid">Base — Plano OPEN</span><h3 className="mt-4 text-xl font-bold">Tudo o que já vem na plataforma</h3><ul className="mt-5 space-y-3 text-sm text-brand-blue-light">{openFeatures.map((item) => <li key={item} className="flex gap-3"><span className="text-accent">✓</span>{item}</li>)}</ul></article>
            <article className="rounded-2xl border-2 border-accent bg-accent/10 p-7"><span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-accent-foreground">Recomendado — Plano PRO</span><h3 className="mt-4 text-xl font-bold">O que o PRO adiciona</h3><ul className="mt-5 space-y-3 text-sm text-brand-blue-light">{proFeatures.map((item) => <li key={item} className="flex gap-3"><span className="text-accent">✓</span>{item}</li>)}</ul><p className="mt-5 text-sm text-brand-blue-light">Valores, horários e a condição exclusiva são apresentados durante a imersão.</p></article>
          </div>
          <div className="mt-8 flex justify-center"><Cta label="Participar da Imersão e Conhecer o PRO — R$ 21,00" className="w-full max-w-xl" /></div>
        </div>
      </section>

      <section className="bg-gradient-corporate px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Heading kicker="Resultados reais">O que muda quando o inglês começa a entrar na vida real?</Heading>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => <figure key={item.name} className="flex flex-col rounded-2xl border border-white/10 bg-brand-navy/60 p-6"><span className="text-3xl text-accent" aria-hidden="true">“</span><blockquote className="mt-2 flex-1 text-sm leading-relaxed text-brand-blue-light">{item.quote}</blockquote><figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4"><img src={item.photo} width={112} height={112} loading="lazy" alt={item.name} className="h-12 w-12 rounded-full object-cover" /><div><p className="text-sm font-bold">{item.name}</p><p className="text-xs text-brand-blue-light">{item.role}</p></div></figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_1.3fr]">
          <div className="mx-auto w-full max-w-xs rounded-2xl bg-gradient-to-br from-accent to-brand-blue-mid p-[1.5px]"><img src={joisAlaby} alt="Teacher Jóis Alaby, fundador da Falaê Brasil" loading="lazy" className="aspect-square w-full rounded-2xl bg-brand-blue object-cover" /></div>
          <div><Kicker>Quem conduz a imersão</Kicker><h2 className="mt-3 text-2xl font-bold sm:text-3xl">Teacher Jóis Alaby</h2><p className="mt-5 leading-relaxed text-brand-blue-light">Jóis aprendeu inglês na infância, morando por cinco anos nos Estados Unidos. Mais tarde, estudou por outros cinco anos no país e trouxe ao Brasil uma forma de ensinar que começa pela comunicação, não pela regra.</p><p className="mt-4 leading-relaxed text-brand-blue-light">Na imersão, ele conduz a prática ao lado de professores brasileiros e americanos para que você fale desde a primeira hora.</p></div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-corporate px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Heading kicker="FAQ">Perguntas frequentes</Heading>
          <div className="mt-8 space-y-3">
            {faq.map((item, index) => <div key={item.question} className="rounded-2xl border border-white/10 bg-brand-navy/60"><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold">{item.question}<span className="text-xl text-accent">{openFaq === index ? "−" : "+"}</span></button>{openFaq === index && <p className="px-5 pb-5 text-sm leading-relaxed text-brand-blue-light">{item.answer}</p>}</div>)}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-4xl"><Kicker>Próxima turma</Kicker><h2 className="mt-3 text-2xl font-bold leading-tight sm:text-4xl">1º sábado do mês, às 09h. Três horas para mudar sua relação com o inglês.</h2><p className="mx-auto mt-5 max-w-3xl leading-relaxed text-brand-blue-light">Inscrição única de R$ 21,00, com o Módulo 1 do A1 Básico — Turismo liberado no aplicativo e apresentação do Plano PRO no mesmo dia.</p><div className="mt-8 flex flex-col items-center gap-3"><Cta label="Quero Participar da Imersão — R$ 21,00" className="w-full max-w-lg" /><p className="text-xs text-brand-blue-light">Pagamento seguro via cartão de crédito ou Pix</p></div></div>
      </section>

      <div className="bg-background text-foreground"><ContactSection /></div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-accent/40 bg-brand-navy/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4"><p className="hidden text-sm text-brand-blue-light sm:block">Imersão ao vivo • 1º sábado • 09h às 12h • <strong className="text-primary-foreground">R$ 21,00</strong></p><Cta label="Quero Fazer a Imersão por R$ 21,00" className="w-full px-5 py-3 text-xs sm:w-auto" /></div>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type MouseEvent } from "react";
import {
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  FileText,
  Headphones,
  MessageCircle,
  Mic2,
  ShieldCheck,
  Smartphone,
  Volume2,
  X,
} from "lucide-react";

import produtoImg from "@/assets/bst4-produto.jpg";
import iaImg from "@/assets/bst4-ia.jpg";
import noiteImg from "@/assets/bst4-noite.jpg";
import { ContactSection } from "@/components/ContactSection";
import { LegalConsent, LegalLinks } from "@/components/LegalLinks";
import { CHECKOUT } from "@/lib/checkout";
import { trackCheckoutAndNavigate } from "@/lib/pixel";

const modules = [
  { n: "01", title: "O Código do Consulado & Abertura da Entrevista", text: "Saudações, idioma, documentos e validação inicial." },
  { n: "02", title: "Visto B2 — Turismo & Viagem em Família", text: "Propósito de viagem, roteiro, hospedagem e informações relacionadas à viagem." },
  { n: "03", title: "Visto B1 — Negócios & Eventos Corporativos", text: "Reuniões, eventos, treinamentos e situações profissionais." },
  { n: "04", title: "Visto F1 — Estudantes & Intercâmbio", text: "Curso, instituição de ensino, financiamento e informações relacionadas aos estudos." },
  { n: "05", title: "Imigração, Trabalho & Green Card", text: "Vocabulário e frases relacionadas a processos dessa natureza." },
  { n: "06", title: "Troca de Idioma & Situações de Pressão", text: "Frases para pedir repetição, reformulação e esclarecimento." },
  { n: "07", title: "Conclusão & Encerramento", text: "Agradecimento, orientações e encerramento da conversa." },
];

const questions = [
  "O que respondo se perguntarem o motivo da viagem?",
  "Como falo sobre hospedagem ou roteiro?",
  "E se mudarem para o inglês?",
  "Como peço para repetir?",
  "Como explico informações do meu próprio processo?",
  "Como pratico antes do dia da entrevista?",
];

const audience = [
  "Está se preparando para entrevista relacionada a visto para os EUA.",
  "Quer praticar inglês ligado ao seu próprio processo.",
  "Tem receio de surgir uma pergunta em inglês.",
  "Quer revisar frases antes da entrevista.",
  "Prefere exemplos práticos a uma aula extensa de gramática.",
  "Quer ter frases para pedir repetição ou esclarecimento.",
];

const faq = [
  { q: "O BST4 garante a aprovação do meu visto?", a: "Não. A aprovação ou recusa pertence exclusivamente à autoridade competente. O BST4 é um material educacional para preparação linguística e comunicacional." },
  { q: "O produto analisa meu DS-160 ou minha documentação?", a: "Não. O BST4 não presta consultoria jurídica ou migratória e não analisa documentação. Para requisitos e procedimentos do seu caso, consulte fontes oficiais ou profissional qualificado." },
  { q: "O material serve apenas para turismo?", a: "Não. Os sete módulos contêm vocabulário e frases relacionados a turismo, negócios, estudos, processos ligados a trabalho ou imigração e situações gerais de entrevista." },
  { q: "Preciso falar inglês fluentemente?", a: "Não. As frases têm tradução e apoio de pronúncia para ajudar na prática." },
  { q: "Preciso decorar as 55 frases?", a: "Não. Comece pelas situações relacionadas ao seu processo e use o material também como apoio para prática e revisão." },
  { q: "Posso usar qualquer uma das respostas?", a: "Somente quando a frase representar sua situação real. Informações pessoais, profissionais, financeiras, acadêmicas e migratórias devem sempre ser verdadeiras." },
  { q: "O BST4 substitui advogado ou consultor de imigração?", a: "Não. O conteúdo é educacional e linguístico e não constitui aconselhamento jurídico ou migratório." },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "BST4 — Guia de Aprovação de Vistos para os EUA",
  description: "Guia educacional com 55 frases em inglês para preparação linguística e comunicacional em entrevistas de visto.",
  brand: { "@type": "Brand", name: "Brasil Sem Trava" },
  offers: { "@type": "Offer", price: "27.00", priceCurrency: "BRL", availability: "https://schema.org/InStock", url: "https://falaebrasil.com.br/bst4" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

export const Route = createFileRoute("/bst4")({
  head: () => ({
    meta: [
      { title: "Guia para Entrevistas de Visto | BST4 — Falaê Brasil" },
      { name: "description", content: "Prepare sua comunicação para entrevistas de visto com 55 frases em inglês, tradução, pronúncia e prática digital." },
      { property: "og:title", content: "BST4 | Preparação linguística para entrevistas de visto" },
      { property: "og:description", content: "Guia educacional com 55 frases para estudar e praticar a comunicação relacionada à sua entrevista." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://falaebrasil.com.br/bst4" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BST4 | Preparação linguística para entrevistas de visto" },
      { name: "twitter:description", content: "55 frases em inglês, tradução, pronúncia e prática digital por R$27." },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/bst4" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(productJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: Bst4Page,
});

function PurchaseButton({ label = "Quero me preparar por R$27", dark = false }: { label?: string; dark?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <a
        href={CHECKOUT.bst4}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event: MouseEvent<HTMLAnchorElement>) => trackCheckoutAndNavigate(event, "BST4")}
        className="inline-flex min-h-14 w-full max-w-xl items-center justify-center rounded-md bg-accent px-6 py-4 text-center text-base font-extrabold uppercase text-accent-foreground shadow-cta transition-transform hover:scale-[1.01]"
      >
        {label}
      </a>
      <p className={`mt-3 text-center text-sm ${dark ? "text-brand-blue-light" : "text-muted-foreground"}`}>
        Acesso digital após confirmação do pagamento.
      </p>
    </div>
  );
}

function Section({ children, dark = false, ice = false, className = "" }: { children: React.ReactNode; dark?: boolean; ice?: boolean; className?: string }) {
  return (
    <section className={`${dark ? "bg-brand-navy text-brand-ice" : ice ? "bg-brand-ice text-foreground" : "bg-background text-foreground"} px-5 py-16 sm:py-20 ${className}`}>
      <div className="bst4-reveal mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function Heading({ eyebrow, title, dark = false }: { eyebrow?: string; title: string; dark?: boolean }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {eyebrow && <p className="text-xs font-extrabold uppercase text-brand-gold">{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-extrabold leading-tight sm:text-4xl ${dark ? "text-brand-ice" : "text-primary"}`}>{title}</h2>
    </div>
  );
}

function PhraseCard({ label, title, english, translation, pronunciation, note, dark = false }: { label: string; title: string; english: string; translation: string; pronunciation?: string; note: string; dark?: boolean }) {
  return (
    <div className={`mx-auto mt-10 max-w-4xl overflow-hidden rounded-lg border ${dark ? "border-brand-blue-mid bg-primary text-primary-foreground" : "border-border bg-card text-card-foreground"} shadow-elevated`}>
      <div className="border-b border-border px-6 py-4 text-xs font-extrabold uppercase text-brand-gold">{label}</div>
      <div className="p-6 sm:p-9">
        <h3 className={`text-2xl font-bold ${dark ? "text-primary-foreground" : "text-primary"}`}>{title}</h3>
        <p className={`mt-6 text-xl font-bold leading-relaxed sm:text-2xl ${dark ? "text-brand-blue-light" : "text-primary"}`}>“{english}”</p>
        <p className="mt-3 text-base leading-relaxed">(“{translation}”)</p>
        {pronunciation && <p className="mt-4 border-l-2 border-brand-gold pl-4 font-semibold text-brand-gold">{pronunciation}</p>}
        <p className={`mt-6 text-sm leading-relaxed ${dark ? "text-brand-blue-light" : "text-muted-foreground"}`}>{note}</p>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-10 max-w-4xl divide-y divide-border border-y border-border">
      {faq.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button type="button" onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-5 py-5 text-left font-bold text-primary">
              <span>{item.q}</span>
              <ChevronDown className={`h-5 w-5 flex-none transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden"><p className="pb-5 leading-relaxed text-muted-foreground">{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Bst4Page() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".bst4-reveal"));
    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.05 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <style>{`
        .bst4-reveal { opacity: 0; transform: translateY(16px); transition: opacity .55s ease, transform .55s ease; }
        .bst4-reveal.is-visible { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) { .bst4-reveal { opacity: 1; transform: none; transition: none; } }
      `}</style>

      <div className="relative flex min-h-14 items-center justify-center bg-brand-navy px-28 py-3 text-center text-[10px] font-bold uppercase text-brand-ice sm:text-xs">
        Brasil Sem Trava • Entrevista de Visto
        <a href="/" className="absolute right-3 rounded-md border border-brand-gold px-3 py-2 text-[9px] text-brand-ice sm:right-5 sm:text-[11px]">Site principal</a>
      </div>

      <section className="bg-gradient-corporate px-5 py-14 text-brand-ice sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-xs font-extrabold uppercase text-brand-gold">Brasil Sem Trava • Entrevista de Visto</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-brand-ice sm:text-5xl">Prepare o que você pode precisar dizer antes de chegar à entrevista.</h1>
            <p className="mt-6 text-lg leading-relaxed text-brand-blue-light">55 frases em inglês, com tradução, pronúncia e prática, organizadas em situações que podem aparecer em entrevistas relacionadas a turismo, negócios, estudos e outros processos.</p>
            <p className="mt-5 leading-relaxed text-brand-ice">Você não controla a decisão consular. Mas pode chegar tendo praticado como entender, organizar e dizer algumas das respostas relacionadas ao seu próprio processo.</p>
            <div className="mt-8"><PurchaseButton dark /></div>
            <p className="mt-4 text-center text-xs text-brand-blue-light">Pagamento único • Material digital • Garantia de 7 dias</p>
          </div>
          <div className="relative">
            <div className="absolute inset-6 rounded-lg border border-brand-gold" aria-hidden="true" />
            <img src={produtoImg} alt="Guia BST4, celular, notebook, passaporte brasileiro azul e documentos para estudo em casa" className="relative z-10 aspect-square w-full rounded-lg object-contain shadow-elevated" />
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-brand-blue-light">Material educacional. A decisão sobre qualquer visto pertence exclusivamente à autoridade competente.</p>
      </section>

      <Section ice>
        <Heading title="A entrevista pode ser curta. E justamente por isso cada resposta precisa ser entendida antes de ser usada." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {questions.map((question) => <div key={question} className="rounded-lg border border-border bg-card p-5 font-semibold text-primary shadow-soft"><MessageCircle className="mb-4 h-6 w-6 text-brand-gold" />{question}</div>)}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed">O BST4 organiza frases e estruturas relacionadas a esses momentos para você estudar e praticar antes.</p>
      </Section>

      <Section>
        <Heading eyebrow="Abertura da entrevista" title="Não deixe o guichê ser o primeiro lugar onde você tenta falar essas frases." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-muted p-7">
            <p className="text-xs font-extrabold uppercase text-muted-foreground">Sem ter praticado</p>
            <p className="mt-5 text-xl font-bold text-primary">Oficial: “Good morning.”</p>
            <div className="mt-5 space-y-2 text-muted-foreground"><p>“Respondo só good morning?”</p><p>“Falo mais alguma coisa?”</p><p>“E se ele continuar em inglês?”</p></div>
          </div>
          <div className="rounded-lg border border-brand-gold bg-primary p-7 text-primary-foreground">
            <p className="text-xs font-extrabold uppercase text-brand-gold">Com uma frase já praticada</p>
            <p className="mt-5 text-2xl font-bold">“Good morning, Officer. Thank you.”</p>
            <p className="mt-3 text-brand-blue-light">(“Bom dia, Oficial. Obrigado.”)</p>
            <p className="mt-5 border-l-2 border-brand-gold pl-4 font-semibold text-brand-gold">“Gúd mór-nin, Ó-fi-ser. Fénk iú.”</p>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">O objetivo não é decorar um personagem. É já ter visto, entendido e praticado frases relacionadas à situação.</p>
      </Section>

      <Section dark>
        <Heading eyebrow="O que o BST4 faz" title="O BST4 não prepara uma história. Ele prepara linguagem." dark />
        <p className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-brand-blue-light">O guia reúne frases e estruturas que ajudam você a estudar o vocabulário de algumas situações que podem aparecer durante uma entrevista.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { icon: BookOpen, title: "Leia e entenda", text: "Veja a frase em inglês e sua tradução." },
            { icon: Headphones, title: "Revise e escute", text: "Use a IA Memorizaê para reencontrar e praticar as frases." },
            { icon: Mic2, title: "Pratique em voz alta", text: "Use a IA Falaê para praticar sua produção oral." },
          ].map(({ icon: Icon, title, text }) => <div key={title} className="rounded-lg border border-brand-blue-mid bg-primary p-6"><Icon className="h-7 w-7 text-brand-gold" /><h3 className="mt-5 text-xl font-bold text-primary-foreground">{title}</h3><p className="mt-3 leading-relaxed text-brand-blue-light">{text}</p></div>)}
        </div>
      </Section>

      <Section>
        <Heading eyebrow="Turismo" title="Uma pergunta simples pode pedir uma resposta simples." />
        <PhraseCard label="Exemplo real do material" title="Pergunta: What is the purpose of your visit?" english="My primary intention is strictly a temporary visit." translation="Minha intenção principal é estritamente uma visita temporária." pronunciation="Mái prái-me-ri in-tén-shãn iz stríkt-li a tém-po-re-ri ví-zit." note="Importante: use somente respostas que sejam verdadeiras e compatíveis com seu próprio processo." />
      </Section>

      <Section ice>
        <Heading title="Documentos e comunicação são coisas diferentes." />
        <p className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-muted-foreground">O BST4 não analisa sua documentação e não substitui orientação oficial, jurídica ou migratória. A função do produto é outra: ajudar você a praticar o inglês relacionado a situações da entrevista.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Entender", "Reconhecer frases e perguntas."], ["Organizar", "Preparar formas curtas de explicar informações verdadeiras."], ["Praticar", "Ler e falar antes do dia da entrevista."], ["Pedir ajuda", "Ter frases para pedir repetição ou esclarecimento."],
          ].map(([title, text]) => <div key={title} className="rounded-lg border border-border bg-card p-6"><h3 className="font-bold uppercase text-primary">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
        </div>
        <div className="mx-auto mt-10 max-w-3xl border-l-4 border-brand-gold pl-6"><p className="text-xl font-bold text-primary">Você não precisa transformar cada resposta em um discurso.</p><p className="mt-3 leading-relaxed text-muted-foreground">A proposta do guia é praticar formas curtas e compreensíveis de lidar com situações relacionadas ao seu processo.</p></div>
      </Section>

      <Section>
        <Heading eyebrow="O que você recebe" title="55 frases organizadas em 7 módulos." />
        <p className="mt-4 text-center text-lg text-muted-foreground">Leia, entenda e pratique antes da entrevista.</p>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <img src={produtoImg} alt="Guia Digital BST4 exibido em notebook e celular" loading="lazy" className="w-full rounded-lg object-contain shadow-elevated" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [FileText, "Guia Digital BST4"], [BookOpen, "Tradução em português"], [Volume2, "Pronúncia aproximada"], [Brain, "IA Memorizaê"], [Mic2, "IA Falaê"], [Smartphone, "Acesso digital Falaê Brasil"],
            ].map(([Icon, text]) => {
              const ItemIcon = Icon as typeof FileText;
              return <div key={String(text)} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 font-semibold text-primary"><ItemIcon className="h-5 w-5 flex-none text-brand-gold" />{String(text)}</div>;
            })}
          </div>
        </div>
        <div className="mt-10"><PurchaseButton /></div>
      </Section>

      <Section dark>
        <Heading eyebrow="Conteúdo do guia" title="Os 7 módulos" dark />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => <div key={module.n} className="rounded-lg border border-brand-blue-mid bg-primary p-6"><p className="text-sm font-extrabold text-brand-gold">MÓDULO {module.n}</p><h3 className="mt-3 text-xl font-bold text-primary-foreground">{module.title}</h3><p className="mt-3 text-sm leading-relaxed text-brand-blue-light">{module.text}</p></div>)}
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-lg border border-brand-gold p-6 text-center text-sm leading-relaxed text-brand-blue-light">As regras, documentos e procedimentos de imigração podem mudar. Para exigências atuais do seu tipo de visto, consulte sempre fontes oficiais do governo dos Estados Unidos ou profissional qualificado.</div>
      </Section>

      <Section>
        <Heading eyebrow="Negócios" title="Seu motivo de viagem precisa ser explicado com informações reais." />
        <PhraseCard label="Exemplo real do material" title="Situação profissional" english="I am traveling to attend an international business conference in Chicago." translation="Estou viajando para participar de uma conferência internacional de negócios em Chicago." note="Substitua exemplos apenas por informações verdadeiras e compatíveis com a sua situação." />
      </Section>

      <Section ice>
        <Heading eyebrow="Quando não entende" title="E se você não entender a pergunta?" />
        <PhraseCard label="Frase real do BST4" title="Peça uma reformulação" english="Could you please rephrase that question, Officer?" translation="Você poderia reformular essa pergunta, Oficial?" pronunciation="Cúd iú plíz ri-fréiz dét kués-tshãn, Ó-fi-ser?" note="Algumas frases do guia existem justamente para você pedir repetição, reformulação ou esclarecimento em vez de tentar adivinhar o que foi perguntado." />
      </Section>

      <Section dark>
        <Heading eyebrow="Ferramentas de prática" title="Pratique antes do dia da entrevista." dark />
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <img src={iaImg} alt="Celular exibindo os recursos IA Memorizaê e IA Falaê" loading="lazy" className="w-full rounded-lg object-contain shadow-elevated" />
          <div className="space-y-5">
            <div className="rounded-lg border border-brand-blue-mid bg-primary p-7"><Brain className="h-8 w-8 text-brand-gold" /><h3 className="mt-4 text-2xl font-bold text-primary-foreground">IA Memorizaê</h3><p className="mt-3 leading-relaxed text-brand-blue-light">Use os flashcards para revisar frases e estruturas do guia.</p></div>
            <div className="rounded-lg border border-brand-blue-mid bg-primary p-7"><Mic2 className="h-8 w-8 text-brand-gold" /><h3 className="mt-4 text-2xl font-bold text-primary-foreground">IA Falaê</h3><p className="mt-3 leading-relaxed text-brand-blue-light">Leia e grave frases para continuar praticando sua produção oral.</p></div>
          </div>
        </div>
        <p className="mt-9 text-center text-xl font-bold text-primary-foreground">Faça da sua prática o primeiro contato com essas frases, não o dia da entrevista.</p>
      </Section>

      <Section>
        <Heading eyebrow="Estudos" title="Cada tipo de processo usa um vocabulário diferente." />
        <PhraseCard label="Exemplo real do módulo F1" title="Situação acadêmica" english="This course is essential to advance my career opportunities in Brazil." translation="Este curso é essencial para avançar minhas oportunidades de carreira no Brasil." note="Este é um exemplo de estrutura do material. Utilize somente informações que representem sua situação real." />
      </Section>

      <Section ice>
        <Heading title="Este guia pode fazer sentido para você se..." />
        <ul className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
          {audience.map((item) => <li key={item} className="flex gap-3 rounded-lg border border-border bg-card p-5 leading-relaxed"><Check className="mt-1 h-5 w-5 flex-none text-brand-gold" />{item}</li>)}
        </ul>
      </Section>

      <Section>
        <Heading title="Não prepare uma história. Prepare sua comunicação." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-destructive bg-card p-7"><h3 className="flex items-center gap-2 text-xl font-bold text-destructive"><X className="h-6 w-6" />Não faça</h3><ul className="mt-5 space-y-3 text-muted-foreground">{["Inventar informação", "Alterar fatos", "Usar uma resposta que não corresponda ao seu processo", "Esconder informação relevante", "Tentar adivinhar o que a autoridade quer ouvir"].map((item) => <li key={item}>• {item}</li>)}</ul></div>
          <div className="rounded-lg border border-primary bg-card p-7"><h3 className="flex items-center gap-2 text-xl font-bold text-primary"><Check className="h-6 w-6" />Faça</h3><ul className="mt-5 space-y-3 text-muted-foreground">{["Usar informações verdadeiras", "Compreender a pergunta antes de responder", "Responder somente sobre sua própria situação", "Manter consistência com os dados fornecidos oficialmente", "Pedir esclarecimento quando não entender"].map((item) => <li key={item}>• {item}</li>)}</ul></div>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center font-semibold leading-relaxed text-primary">O BST4 não ensina técnicas para influenciar ou enganar autoridades. Ele é um material educacional para prática de inglês e comunicação.</p>
      </Section>

      <Section dark>
        <Heading eyebrow="Oferta simples" title="Pratique antes da entrevista." dark />
        <div className="mx-auto mt-10 max-w-4xl rounded-lg border border-brand-gold bg-primary p-7 sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div><p className="text-sm font-extrabold uppercase text-brand-gold">Você recebe</p><ul className="mt-5 grid gap-3 text-brand-ice sm:grid-cols-2">{["Guia Digital com 55 frases", "7 módulos", "Tradução em português", "Apoio de pronúncia", "IA Memorizaê", "IA Falaê", "Acesso digital Falaê Brasil"].map((item) => <li key={item} className="flex gap-2"><Check className="h-5 w-5 flex-none text-brand-gold" />{item}</li>)}</ul></div>
            <div className="text-center"><p className="text-sm text-brand-blue-light">Pagamento único</p><p className="mt-2 text-6xl font-extrabold text-primary-foreground">R$27</p><p className="mt-2 text-sm text-brand-blue-light">Sem mensalidade</p></div>
          </div>
          <p className="mt-8 text-center text-sm text-brand-blue-light">Garantia de 7 dias • Material educacional de preparação linguística</p>
          <div className="mt-6"><PurchaseButton dark /></div>
        </div>
      </Section>

      <section className="relative min-h-[520px] overflow-hidden">
        <img src={noiteImg} alt="Pessoa estudando frases do BST4 em casa antes da entrevista" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-navy/85" />
        <div className="relative mx-auto flex min-h-[520px] max-w-4xl flex-col items-center justify-center px-5 py-16 text-center text-brand-ice">
          <h2 className="text-3xl font-extrabold text-brand-ice sm:text-4xl">Pratique as frases antes do dia da entrevista.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-blue-light">Leia, escute e fale as estruturas relacionadas ao seu processo para que elas não sejam completamente novas quando você precisar se comunicar.</p>
          <div className="mt-8 w-full"><PurchaseButton label="Quero começar a praticar" dark /></div>
        </div>
      </section>

      <Section ice>
        <Heading eyebrow="Garantia" title="7 dias para conhecer o material" />
        <div className="mx-auto mt-8 flex max-w-3xl gap-5 rounded-lg border border-border bg-card p-7 shadow-soft"><ShieldCheck className="h-10 w-10 flex-none text-brand-gold" /><p className="leading-relaxed text-muted-foreground">Depois da compra, você tem 7 dias de garantia conforme as condições da oferta. Se decidir que o produto não é adequado para você, solicite o cancelamento pelos canais de suporte dentro desse período.</p></div>
      </Section>

      <Section>
        <Heading title="Perguntas frequentes" />
        <Faq />
      </Section>

      <Section dark>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-extrabold uppercase text-brand-gold">Avisos importantes</p>
          <p className="mt-5 leading-relaxed text-brand-blue-light">O BST4 é um produto educacional independente e não possui vínculo, parceria, chancela ou afiliação com a Embaixada dos Estados Unidos, Consulados dos Estados Unidos, USCIS ou outro órgão governamental norte-americano.</p>
          <p className="mt-4 font-semibold text-brand-ice">A compra não garante emissão ou aprovação de visto.</p>
          <p className="mt-4 leading-relaxed text-brand-blue-light">Todas as informações fornecidas às autoridades devem ser verdadeiras e consistentes com a documentação oficial do solicitante. Confirme requisitos, documentos e procedimentos atuais em fontes oficiais ou com profissional qualificado.</p>
        </div>
      </Section>

      <Section ice>
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
          <img src={produtoImg} alt="Guia educacional BST4 com 55 frases em 7 módulos" loading="lazy" className="w-full rounded-lg object-contain shadow-elevated" />
          <div>
            <p className="text-xs font-extrabold uppercase text-brand-gold">Preparação linguística e comunicacional</p>
            <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl">Comece pelas situações relacionadas ao seu processo.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">Estude frases, traduções e estruturas para praticar sua comunicação antes da entrevista.</p>
            <p className="mt-6 text-5xl font-extrabold text-primary">R$27</p>
            <div className="mt-7"><PurchaseButton /></div>
            <LegalConsent action="compra" className="mt-4 lg:text-left" />
          </div>
        </div>
      </Section>

      <ContactSection />

      <footer className="bg-brand-navy px-5 py-12 text-brand-ice">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg font-bold">Brasil Sem Trava — Falaê Brasil</p>
          <p className="mt-2 text-sm text-brand-blue-light">IBOX Centro de Idiomas Ltda. • CNPJ 18.656.810/0001-66</p>
          <LegalLinks className="mt-5 flex flex-wrap justify-center gap-5 text-sm text-brand-blue-light" />
        </div>
      </footer>
    </main>
  );
}
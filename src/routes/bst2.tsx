import { createFileRoute } from "@tanstack/react-router";
import { useState, type MouseEvent, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDollarSign,
  MessageSquareText,
  Mic2,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

import heroImg from "@/assets/bst2-hero.jpg";
import step1Img from "@/assets/bst2-step1.jpg";
import step2Img from "@/assets/bst2-step2.jpg";
import step3Img from "@/assets/bst2-step3.jpg";
import joisImg from "@/assets/jois-alaby-new.png";
import destravaCover from "@/assets/bst-step2.png.asset.json";
import { LegalConsent, LegalLinks } from "@/components/LegalLinks";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { CHECKOUT } from "@/lib/checkout";
import { trackCheckoutAndNavigate } from "@/lib/pixel";

const faq = [
  ["Preciso ser fluente em inglês?", "Não. As frases vêm com tradução e apoio de pronúncia. O objetivo é ajudar você a compreender, adaptar e praticar estruturas específicas de entrevistas."],
  ["Posso adaptar as frases ao meu cargo e experiência?", "Sim. Substitua cargos, anos de experiência, tamanho de equipe, valores, percentuais e resultados pelos dados reais da sua trajetória."],
  ["Como funciona a IA Memorizaê?", "A IA Memorizaê apresenta as frases em flashcards para você revisar as estruturas e praticar leitura e reconhecimento."],
  ["Como funciona a IA Falaê?", "Você grava sua voz pelo celular ou computador e recebe um retorno da ferramenta para continuar trabalhando sua pronúncia."],
  ["O guia serve para entrevistas presenciais e online?", "Sim. O conteúdo reúne situações comuns aos dois formatos, da abertura ao follow-up depois da conversa."],
  ["O acesso é imediato?", "O acesso é enviado depois da confirmação do pagamento, com as orientações para entrar na Biblioteca BST no App Falaê Brasil."],
  ["A compra garante que eu conseguirei a vaga?", "Não. O produto oferece preparação linguística. Contratação, promoção ou aprovação dependem da experiência, do perfil profissional e dos critérios da empresa."],
  ["Eu não entendo muito de tecnologia. Vou conseguir usar?", "Sim. O guia e as ferramentas ficam reunidos na Biblioteca BST, com acesso pelo celular, tablet ou computador."],
  ["Como funciona a garantia?", "Você tem 7 dias depois da compra para conhecer o material. Nesse período, pode solicitar o cancelamento pelos canais de suporte, conforme as condições da oferta."],
  ["Isso substitui um curso completo de inglês?", "Não. O Guia de Entrevistas foi criado para uma situação específica: preparação para processos seletivos em inglês. Ele não substitui um estudo completo do idioma."],
  ["Preciso decorar as 55 frases?", "Não. Escolha as estruturas relacionadas à sua entrevista, adapte com seus dados reais e pratique as respostas que fazem sentido para sua trajetória."],
  ["Posso usar respostas prontas sem adaptar?", "O guia serve como base. Informações sobre carreira, números, cargos, equipes, resultados e experiências devem corresponder à sua trajetória real."],
] as const;

const modules = [
  "Abertura, Quebra-Gelo e Apresentação Pessoal",
  "Experiência Profissional e Conquistas",
  "Pontos Fortes, Fraquezas e Método STAR",
  "Motivação e Por que Contratar Você",
  "Situações Difíceis e Negociação Salarial",
  "Perguntas ao Entrevistador",
  "Encerramento e Follow-up Pós-Entrevista",
];

const situations = [
  "Tell me about yourself.",
  "Why should we hire you?",
  "What are your strengths?",
  "Tell me about a difficult situation.",
  "What are your salary expectations?",
  "Do you have any questions for us?",
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Guia de Entrevistas em Inglês",
  description: "Preparação prática com 55 frases e estruturas em 7 módulos, IA Memorizaê e IA Falaê.",
  brand: { "@type": "Brand", name: "Brasil Sem Trava" },
  offers: { "@type": "Offer", price: "47.00", priceCurrency: "BRL", availability: "https://schema.org/InStock", url: "https://falaebrasil.com.br/bst2" },
};

export const Route = createFileRoute("/bst2")({
  head: () => ({
    meta: [
      { title: "Guia de Entrevistas em Inglês | Brasil Sem Trava" },
      { name: "description", content: "Prepare respostas para entrevistas profissionais em inglês com 55 frases, 7 módulos e duas ferramentas de prática." },
      { property: "og:title", content: "Guia de Entrevistas em Inglês | Brasil Sem Trava" },
      { property: "og:description", content: "Estruturas para adaptar e praticar antes de uma entrevista profissional em inglês." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://falaebrasil.com.br/bst2" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/bst2" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(productJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: Bst2Page,
});

function Section({ children, tone = "light", className = "" }: { children: ReactNode; tone?: "light" | "ice" | "navy" | "dark"; className?: string }) {
  const tones = { light: "bg-background text-foreground", ice: "bg-brand-ice text-foreground", navy: "bg-brand-blue text-primary-foreground", dark: "bg-brand-navy text-primary-foreground" };
  return <section className={`${tones[tone]} px-5 py-16 sm:py-24 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>;
}

function Heading({ eyebrow, children, dark = false }: { eyebrow?: string; children: ReactNode; dark?: boolean }) {
  return <div className="mx-auto max-w-4xl text-center">{eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p> : null}<h2 className={`mt-3 text-3xl font-black leading-tight sm:text-4xl ${dark ? "text-primary-foreground" : "text-primary"}`}>{children}</h2></div>;
}

function PurchaseButton({ label = "Quero me preparar por R$47", full = false }: { label?: string; full?: boolean }) {
  const [open, setOpen] = useState(false);
  const [includeBst5, setIncludeBst5] = useState(false);
  const total = includeBst5 ? 74 : 47;
  const selectionId = includeBst5 ? "COMBO_BST2_BST5" : "BST2";
  const checkoutHref = includeBst5 ? CHECKOUT.comboBst2Bst5 : CHECKOUT.bst2;

  const openOffer = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(true);
  };
  const startCheckout = (event: MouseEvent<HTMLAnchorElement>) => trackCheckoutAndNavigate(event, selectionId);
  const changeOpen = (next: boolean) => { setOpen(next); if (!next) setIncludeBst5(false); };

  return <>
    <div className={full ? "w-full" : "mx-auto w-full max-w-xl"}>
      <Button asChild size="lg" className="min-h-14 w-full whitespace-normal px-6 py-4 text-center text-sm font-extrabold uppercase sm:text-base">
        <a href={CHECKOUT.bst2} onClick={openOffer}>{label}<ArrowRight className="ml-2 h-5 w-5" /></a>
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">Pagamento único • Sem mensalidade • Garantia de 7 dias</p>
    </div>
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogContent className="max-h-[94vh] w-[calc(100vw-1.5rem)] max-w-3xl gap-0 overflow-y-auto border-0 p-0">
        <div className="bg-brand-navy px-5 pb-5 pt-7 text-center sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Antes de continuar...</p>
          <DialogTitle className="mt-3 text-2xl font-bold text-primary-foreground sm:text-3xl">Quer praticar também o momento em que a resposta simplesmente não vem?</DialogTitle>
          <DialogDescription className="mx-auto mt-3 max-w-2xl text-brand-blue-light">Você já escolheu o Guia de Entrevistas. Se fizer sentido, adicione uma preparação complementar.</DialogDescription>
        </div>
        <div className="space-y-4 bg-brand-ice p-4 sm:p-6">
          <article className="grid grid-cols-[4.5rem_minmax(0,1fr)_auto] items-center gap-3 rounded-lg border bg-background p-3 shadow-soft sm:grid-cols-[5.5rem_minmax(0,1fr)_auto]">
            <img src={heroImg} alt="Guia de Entrevistas em Inglês" className="aspect-[4/5] w-full rounded-md object-cover" />
            <div className="min-w-0"><p className="text-xs font-bold uppercase text-accent">Produto principal</p><h3 className="mt-1 text-base font-bold text-primary sm:text-lg">Guia de Entrevistas em Inglês</h3><p className="mt-1 text-xs text-muted-foreground sm:text-sm">55 frases e estruturas para situações comuns de entrevistas.</p></div>
            <strong className="text-xl text-primary sm:text-2xl">R$47</strong>
          </article>
          <label className={`block cursor-pointer rounded-lg border-2 bg-background p-4 shadow-soft ${includeBst5 ? "border-accent" : "border-border"}`}>
            <div className="flex gap-4"><img src={destravaCover.url} alt="Destrava Falaê" className="h-28 w-24 flex-none rounded-md object-cover" /><div><p className="text-xs font-bold uppercase text-accent">Oferta complementar</p><h3 className="mt-1 text-lg font-bold text-primary">Destrava Falaê</h3><p className="mt-1 text-2xl font-bold text-accent">+ R$27</p><p className="mt-2 text-sm text-muted-foreground">Respostas curtas e frases de apoio para quando você entende a pergunta, mas trava ao começar.</p></div></div>
            <div className="mt-4 flex items-center gap-3 border-t pt-4"><Checkbox checked={includeBst5} onCheckedChange={(checked) => setIncludeBst5(checked === true)} aria-label="Adicionar o Destrava Falaê por R$27" /><span className="text-sm font-bold uppercase text-primary">Adicionar por + R$27</span></div>
          </label>
          <div className="rounded-lg bg-brand-navy p-4 text-primary-foreground sm:p-5">
            <p className="text-xs font-bold uppercase text-brand-blue-light">Seu pedido</p>
            <div className="mt-3 space-y-2 text-sm"><p className="flex justify-between gap-4"><span>Guia de Entrevistas</span><strong>R$47</strong></p>{includeBst5 ? <p className="flex justify-between gap-4"><span>Destrava Falaê</span><strong>+ R$27</strong></p> : null}</div>
            <div className="mt-4 flex items-end justify-between border-t border-primary-foreground/20 pt-4"><span className="font-bold uppercase">Total</span><strong className="text-3xl text-accent">R${total}</strong></div>
            <Button asChild size="lg" className="mt-4 min-h-14 w-full whitespace-normal text-center text-sm font-bold uppercase"><a href={checkoutHref} onClick={startCheckout}>{includeBst5 ? "Quero os 2 Guias por R$74" : "Continuar com o Guia por R$47"}</a></Button>
            <LegalConsent action="pagamento" dark className="mt-4" />
            <DialogClose asChild><Button variant="link" className="mt-2 w-full text-brand-blue-light">Continuar vendo a página</Button></DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </>;
}

function PhraseCard({ eyebrow, title, english, translation, children }: { eyebrow: string; title: string; english: string; translation: string; children: ReactNode }) {
  return <article className="overflow-hidden rounded-lg border border-border bg-background shadow-elevated">
    <div className="bg-brand-navy px-6 py-5"><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{eyebrow}</p><h3 className="mt-2 text-xl font-black text-primary-foreground sm:text-2xl">{title}</h3></div>
    <div className="p-6 sm:p-8"><div className="rounded-md border-l-4 border-accent bg-brand-ice p-5"><p className="text-xl font-black text-primary sm:text-2xl">{english}</p><p className="mt-2 text-sm text-muted-foreground">({translation})</p></div><div className="mt-5 leading-relaxed text-foreground/80">{children}</div></div>
  </article>;
}

function Offer() {
  const items = ["Guia Digital com 55 frases e estruturas", "7 módulos", "Tradução e apoio de pronúncia", "IA Memorizaê", "IA Falaê", "Biblioteca BST no App Falaê Brasil"];
  return <Section tone="dark"><div className="mx-auto max-w-3xl rounded-lg border border-accent bg-brand-blue p-7 shadow-elevated sm:p-10"><Heading eyebrow="Guia de Entrevistas em Inglês" dark>Prepare suas respostas antes da entrevista.</Heading><ul className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex gap-3 text-sm sm:text-base"><Check className="mt-0.5 h-5 w-5 flex-none text-accent" /><span>{item}</span></li>)}</ul><div className="mt-9 text-center"><p className="text-6xl font-black text-accent">R$47</p><p className="mt-3 text-sm text-brand-blue-light">Pagamento único. Sem mensalidade. Garantia de 7 dias.</p></div><div className="mt-8"><PurchaseButton full /></div></div></Section>;
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="mx-auto mt-10 max-w-3xl divide-y divide-border">{faq.map(([question, answer], index) => <div key={question}><Button type="button" variant="ghost" className="h-auto w-full justify-between whitespace-normal px-0 py-5 text-left text-base font-bold text-primary hover:bg-transparent" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}><span>{question}</span><ChevronDown className={`h-5 w-5 flex-none transition-transform ${open === index ? "rotate-180" : ""}`} /></Button>{open === index ? <p className="pb-6 leading-relaxed text-muted-foreground">{answer}</p> : null}</div>)}</div>;
}

function Bst2Page() {
  const steps = [
    ["Leia e adapte", "Encontre as frases do tema que precisa praticar e substitua cargos, números, resultados e informações pelos dados reais da sua carreira.", step1Img],
    ["Revise com a IA Memorizaê", "Use os flashcards para reencontrar as estruturas e praticar sua leitura e reconhecimento.", step2Img],
    ["Pratique em voz alta com a IA Falaê", "Grave suas respostas e use o retorno da ferramenta para continuar trabalhando sua pronúncia.", step3Img],
  ] as const;
  const deliverables = [
    [BookOpen, "Guia Digital", "55 frases e estruturas distribuídas em 7 módulos de situações de entrevista."],
    [Sparkles, "IA Memorizaê", "Flashcards para revisar frases e estruturas."],
    [Mic2, "IA Falaê", "Ferramenta para praticar sua fala e receber retorno sobre pronúncia."],
    [Smartphone, "Biblioteca BST", "Material e recursos reunidos no ambiente digital da Falaê Brasil."],
  ] as const;
  const audience = ["está se preparando para entrevista em inglês", "trabalha ou quer trabalhar com empresas internacionais", "sente dificuldade em organizar sua carreira em inglês", "quer preparar frases sobre experiência, resultados e liderança", "precisa conversar sobre situações difíceis ou salário", "quer preparar perguntas para o entrevistador", "prefere praticar situações concretas em vez de começar por um curso completo de gramática"];

  return <div className="min-h-screen bg-background font-sans">
    <div className="relative flex min-h-14 items-center justify-start bg-brand-navy py-3 pl-5 pr-32 text-left text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground sm:justify-center sm:px-32 sm:text-center sm:text-xs">Brasil Sem Trava • Entrevistas em Inglês<a href="https://falaebrasil.com.br" className="absolute right-3 rounded-md border border-accent px-3 py-2 text-[9px] sm:right-5 sm:text-[11px]">Site principal</a></div>

    <section className="overflow-hidden bg-brand-blue px-5 py-14 text-primary-foreground sm:py-20"><div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
      <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Brasil Sem Trava • Entrevistas em Inglês</p><h1 className="mt-5 text-4xl font-black leading-tight text-primary-foreground sm:text-5xl">Prepare suas respostas antes que a entrevista mude para o inglês.</h1><p className="mt-6 text-lg leading-relaxed text-brand-blue-light">55 frases e estruturas para falar sobre sua carreira, resultados, liderança, pontos fortes, desafios, salário e outras situações comuns de entrevistas profissionais.</p><p className="mt-4 leading-relaxed text-primary-foreground/85">Você recebe o Guia Digital, tradução, apoio de pronúncia e ferramentas para praticar antes do processo seletivo.</p><div className="mt-6 grid grid-cols-3 gap-2 text-center text-[10px] font-extrabold uppercase text-brand-navy sm:text-xs"><span className="rounded-md bg-brand-ice p-3">55 frases</span><span className="rounded-md bg-brand-ice p-3">7 módulos</span><span className="rounded-md bg-brand-ice p-3">PDF + 2 IAs</span></div><div className="mt-8"><PurchaseButton /></div></div>
      <div className="relative mx-auto w-full max-w-xl pb-8"><img src={step1Img} alt="Profissional se preparando antes de uma entrevista" className="aspect-[4/3] w-[84%] rounded-lg object-cover shadow-elevated" /><img src={heroImg} alt="Guia de Entrevistas aberto ao lado de um celular" className="absolute bottom-0 right-0 w-[62%] rounded-lg border-4 border-background object-cover shadow-elevated" /><div className="absolute right-4 top-4 rounded-md bg-accent px-4 py-3 text-center font-black text-accent-foreground shadow-cta"><span className="block text-2xl">R$47</span><span className="text-[10px] uppercase">pagamento único</span></div></div>
    </div></section>

    <Section tone="ice"><Heading>Você sabe explicar sua carreira em português. O problema aparece quando precisa fazer isso em inglês.</Heading><p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">A entrevista não testa só vocabulário. Ela coloca sua experiência profissional dentro de perguntas que exigem respostas rápidas.</p><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{situations.map((item) => <div key={item} className="rounded-md border bg-background p-5 shadow-soft"><MessageSquareText className="h-5 w-5 text-accent" /><p className="mt-3 font-bold text-primary">“{item}”</p></div>)}</div><p className="mt-9 text-center text-lg font-bold text-primary">É para essas situações que o Guia de Entrevistas foi criado.</p></Section>

    <Section><Heading eyebrow="Abertura da entrevista">A entrevista começa antes das perguntas difíceis.</Heading><div className="mt-10 grid gap-6 lg:grid-cols-2"><article className="rounded-lg border bg-brand-ice p-7"><p className="text-xs font-bold uppercase text-muted-foreground">Quando você improvisa</p><p className="mt-4 font-bold text-primary">Recrutador: “Would you like to continue in English?”</p><div className="mt-5 space-y-2 text-muted-foreground"><p>“Como respondo?”</p><p>“Sure?”</p><p>“Can?”</p><p>“Meu Deus...”</p></div></article><PhraseCard eyebrow="Com uma resposta já praticada" title="Uma estrutura disponível" english="Sure, we can continue in English. I’m ready." translation="Claro, podemos continuar em inglês. Estou pronto."><p>Você conhece antecipadamente estruturas que pode adaptar e praticar antes do dia da entrevista.</p></PhraseCard></div></Section>

    <Section tone="dark"><Heading dark>Uma boa experiência profissional pode ficar difícil de explicar em outro idioma.</Heading><div className="mx-auto mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-primary-foreground/85"><p>Você pode conhecer profundamente sua área e ainda precisar de tempo para transformar anos de experiência em uma resposta curta em inglês.</p><p>Em uma entrevista, aparecem assuntos muito específicos:</p><div className="flex flex-wrap gap-2">{["carreira", "resultados", "liderança", "desafios", "conflitos", "pontos fortes", "pontos fracos", "salário", "motivação", "próximos passos"].map((item) => <span key={item} className="rounded-md border border-primary-foreground/20 px-3 py-2 text-sm">{item}</span>)}</div><p className="font-bold text-primary-foreground">O guia organiza frases e estruturas justamente para esses momentos.</p></div></Section>

    <Section><Heading>Como usar antes da entrevista</Heading><div className="mt-10 grid gap-6 md:grid-cols-3">{steps.map(([title, text, image], index) => <article key={title} className="overflow-hidden rounded-lg border bg-background shadow-soft"><img src={image} alt="" className="aspect-[4/3] w-full object-cover" /><div className="p-6"><p className="text-4xl font-black text-accent">0{index + 1}</p><h3 className="mt-3 text-xl font-black text-primary">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></div></article>)}</div></Section>

    <Section tone="navy"><Heading eyebrow="Mais do que um PDF para ler" dark>Você recebe o guia e ferramentas para praticar suas respostas.</Heading><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{deliverables.map(([Icon, title, text]) => <article key={title} className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-6"><Icon className="h-8 w-8 text-accent" /><h3 className="mt-4 text-xl font-black text-primary-foreground">{title}</h3><p className="mt-3 leading-relaxed text-brand-blue-light">{text}</p></article>)}</div></Section>

    <Section tone="ice"><Heading eyebrow="Experiência e resultados">Você não precisa inventar uma resposta profissional do zero.</Heading><div className="mx-auto mt-10 max-w-3xl"><PhraseCard eyebrow="Estrutura do guia" title="Adapte à sua realidade" english="In my last role, I was responsible for a 5-million-dollar budget." translation="No meu último cargo, fui responsável por um orçamento de 5 milhões de dólares."><div className="flex flex-wrap gap-2">{["Cargo", "Orçamento", "Equipe", "Percentual", "Resultado"].map((item) => <span key={item} className="rounded-md bg-brand-ice px-3 py-2 text-xs font-bold uppercase text-primary">{item}</span>)}</div><p className="mt-5">As frases funcionam como estruturas. Você substitui os exemplos pelos dados verdadeiros da sua própria carreira.</p></PhraseCard></div></Section>

    <Section><Heading>O que você encontra nos 7 módulos</Heading><div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">{modules.map((module, index) => <article key={module} className={`rounded-md border p-5 ${index === 6 ? "sm:col-span-2" : ""}`}><p className="text-xs font-bold uppercase text-accent">Módulo {index + 1}</p><h3 className="mt-2 text-lg font-black text-primary">{module}</h3></article>)}</div></Section>

    <Section tone="dark"><div className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Quando falta uma palavra</p><h2 className="mt-3 text-3xl font-black text-primary-foreground sm:text-4xl">E se faltar uma palavra no meio da resposta?</h2><p className="mt-5 text-lg leading-relaxed text-brand-blue-light">O guia também inclui frases para ganhar tempo, reformular uma resposta e continuar falando quando você não encontra a palavra exata.</p></div><PhraseCard eyebrow="Frase de apoio" title="Continue explicando o conceito" english="The specific term escapes me right now, but the concept is..." translation="O termo específico me escapa no momento, mas o conceito é..."><p>Uma estrutura prática para manter a comunicação acontecendo.</p></PhraseCard></div></Section>

    <Section tone="ice"><Heading>Quando a pergunta pede um exemplo, organize sua história.</Heading><div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">{[["S","Situação"],["T","Tarefa"],["A","Ação"],["R","Resultado"]].map(([letter, word]) => <div key={letter} className="rounded-lg border bg-background p-6 text-center shadow-soft"><p className="text-5xl font-black text-accent">{letter}</p><p className="mt-2 text-sm font-bold uppercase text-primary">{word}</p></div>)}</div><p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">O guia mostra como usar o Método STAR para organizar respostas sobre projetos, desafios, conflitos e resultados profissionais.</p></Section>

    <Section><Heading>A entrevista também chega naquele momento: “Do you have any questions for us?”</Heading><div className="mx-auto mt-10 max-w-3xl"><PhraseCard eyebrow="Perguntas ao entrevistador" title="Prepare antes da conversa" english="What are the company’s top priorities for the next fiscal year?" translation="Quais são as principais prioridades da empresa para o próximo ano fiscal?"><p>O guia traz estruturas para você preparar perguntas antes da entrevista, em vez de tentar inventá-las naquele momento.</p></PhraseCard></div></Section>

    <Section tone="navy"><Heading eyebrow="Follow-up" dark>A preparação não termina quando a chamada acaba.</Heading><p className="mx-auto mt-5 max-w-3xl text-center text-lg text-brand-blue-light">O módulo final reúne frases para agradecer, reforçar interesse e continuar o contato depois da entrevista.</p><div className="mx-auto mt-9 grid max-w-4xl gap-4 sm:grid-cols-2">{[["Please let me know if you need any additional references.","Por favor, me informe se você precisar de referências adicionais."],["Best regards.","Atenciosamente."]].map(([en,pt]) => <div key={en} className="rounded-md border border-primary-foreground/15 bg-primary-foreground/5 p-6"><p className="text-lg font-black text-primary-foreground">{en}</p><p className="mt-2 text-sm text-brand-blue-light">({pt})</p></div>)}</div></Section>

    <Section tone="ice"><Heading>Este guia faz sentido para você se...</Heading><ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">{audience.map((item) => <li key={item} className="flex gap-3 rounded-md border bg-background p-5"><Check className="mt-0.5 h-5 w-5 flex-none text-accent" /><span className="leading-relaxed">{item}</span></li>)}</ul></Section>

    <Offer />

    <Section><Heading>Como comprar e acessar</Heading><div className="mt-10 grid gap-6 md:grid-cols-3">{[[CircleDollarSign,"Finalize a compra","Escolha seu pedido e conclua o pagamento no ambiente do Asaas."],[Smartphone,"Receba o acesso","Depois da confirmação do pagamento, receba as orientações para acessar a Biblioteca BST."],[BriefcaseBusiness,"Comece a preparação","Escolha os módulos mais importantes, adapte as frases e pratique."]].map(([Icon,title,text], index) => <article key={title as string} className="text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy text-accent"><Icon className="h-7 w-7" /></div><p className="mt-4 text-xs font-bold uppercase text-accent">Passo {index + 1}</p><h3 className="mt-2 text-xl font-black text-primary">{title as string}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text as string}</p></article>)}</div></Section>

    <Section tone="navy"><div className="grid items-center gap-10 md:grid-cols-2"><img src={joisImg} alt="Teacher Jóis Alaby" className="mx-auto w-full max-w-md rounded-lg border-2 border-accent object-cover" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Quem está por trás do Brasil Sem Trava</p><h2 className="mt-3 text-4xl font-black text-primary-foreground">Teacher Jóis Alaby</h2><div className="mt-6 space-y-4 leading-relaxed text-brand-blue-light"><p>O Teacher Jóis Alaby é professor e criador da Falaê Brasil e da linha Brasil Sem Trava.</p><p>O Guia de Entrevistas em Inglês foi criado a partir de uma ideia simples: uma entrevista profissional não exige que você aprenda todo o inglês antes dela.</p><p>Ela exige que você saiba lidar melhor com situações específicas que podem aparecer durante a conversa. Por isso, o guia organiza frases e estruturas por momentos reais do processo seletivo.</p></div></div></div></Section>

    <Section tone="ice"><div className="mx-auto grid max-w-4xl items-center gap-8 rounded-lg border bg-background p-8 shadow-soft sm:grid-cols-[auto_1fr]"><div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border-4 border-accent"><span className="text-5xl font-black text-accent">7</span><span className="text-xs font-bold uppercase text-primary">dias</span></div><div><ShieldCheck className="h-8 w-8 text-accent" /><h2 className="mt-3 text-3xl font-black text-primary">7 dias para conhecer o material</h2><p className="mt-4 leading-relaxed text-muted-foreground">Depois da compra, você tem 7 dias de garantia. Se decidir que o produto não é para você, solicite o cancelamento pelos canais de suporte dentro desse período, conforme as condições da oferta.</p></div></div></Section>

    <Section><Heading>Perguntas frequentes</Heading><Faq /></Section>

    <Section tone="dark"><Heading dark>A entrevista pode ser surpresa. Sua preparação não precisa ser.</Heading><p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-relaxed text-brand-blue-light">Você não sabe exatamente o que o recrutador vai perguntar. Mas pode chegar com respostas, estruturas e vocabulário já praticados para muitos dos temas que costumam aparecer.</p><div className="mt-9"><PurchaseButton /></div><LegalConsent action="compra" dark className="mt-4" /></Section>

    <footer className="bg-brand-navy px-5 py-14 text-primary-foreground"><div className="mx-auto max-w-3xl text-center"><p className="font-bold uppercase tracking-[0.2em] text-accent">BST — Brasil Sem Trava</p><p className="mt-3 text-sm text-brand-blue-light">IBOX Centro de Idiomas Ltda. • CNPJ 18.656.810/0001-66</p><div className="mt-6 text-sm text-brand-blue-light"><LegalLinks className="inline-flex flex-wrap justify-center gap-4" /><span className="mx-2">|</span><a href="mailto:atendimento@falaebrasil.com.br" className="underline">Suporte</a></div><p className="mt-6 text-xs leading-relaxed text-brand-blue-light">A compra deste material não garante contratação, promoção, aumento salarial ou aprovação em processos seletivos. Os resultados dependem da experiência, da preparação e dos critérios de cada empresa.</p><p className="mt-5 text-xs text-brand-blue-light">Copyright © Brasil Sem Trava — 2026.</p></div></footer>
  </div>;
}

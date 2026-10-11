import { createFileRoute } from "@tanstack/react-router";
import { LegalLinks } from "@/components/LegalLinks";
import { BookOpen, Check, X, ShieldCheck, Sparkles, ListChecks, ArrowRight, ImageIcon, FileText, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ContactSection } from "@/components/ContactSection";
import { CHECKOUT } from "@/lib/checkout";
import mockup from "@/assets/bst3c-mockup-2.png.asset.json";
import iaLeia from "@/assets/bst3c-ia-leiae-2.png.asset.json";
import quizzes from "@/assets/bst3c-quizzes-2.png.asset.json";

export const Route = createFileRoute("/bst3c")({
  head: () => ({
    meta: [
      { title: "Desmonte a Frase | Leitura acadêmica em inglês para Mestrado e Doutorado" },
      { name: "description", content: "Apostila prática, IA Leiaê, 24 textos acadêmicos B1 a C2 e 240 questões para entender frases acadêmicas longas em inglês. R$47, pagamento único." },
      { property: "og:title", content: "Desmonte a Frase | Brasil Sem Trava" },
      { property: "og:description", content: "Encontre o núcleo de frases acadêmicas longas e reconstrua o sentido em português simples." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://falaebrasil.com.br/bst3c" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" },
    ],
  }),
  component: Bst3cPage,
});

const FLOW = "LOCALIZE → CORTE → ORGANIZE → RECONSTRUA → CONFIRA";
const demo = [
  ["NÚCLEO", "the available evidence remains insufficient"],
  ["RELAÇÃO", "although = contraste"],
  ["CAUTELA", "suggested a possible association"],
  ["RECONSTRUÇÃO", "Alguns estudos encontraram sinais de relação entre as duas variáveis, mas ainda não há evidência suficiente para afirmar que uma causa a outra."],
];
const diag = [
  "O sujeito pode ter muitas palavras.",
  "A ação principal pode ficar escondida.",
  "Uma explicação pode aparecer no meio da frase.",
  "Um substantivo pode esconder uma ação.",
  "Um conector pode mudar a direção do raciocínio.",
  "Palavras como may, might, suggest e appear podem mudar completamente o grau de certeza do autor.",
];
const steps = [
  ["LOCALIZE", "Encontre quem ou o quê está fazendo o quê."],
  ["CORTE", "Afaste por alguns segundos os encaixes e explicações."],
  ["ORGANIZE", "Identifique contraste, causa, condição ou consequência."],
  ["RECONSTRUA", "Diga o sentido em português direto."],
  ["CONFIRA", "Veja se você manteve a ideia e o grau de certeza do autor."],
];
const pains = [
  "Eu conheço várias palavras, mas não entendo a frase inteira.",
  "Quando chego no fim, já perdi como a frase começou.",
  "Tem informação demais no meio.",
  "Eu fico relendo o mesmo trecho.",
  "Se eu tentar traduzir tudo, perco muito tempo.",
];
const notFor = [
  "Não é um curso de conversação.",
  "Não é preparação completa para todos os conteúdos de uma prova.",
  "Não é um curso de gramática do B1 ao C2.",
  "Não é uma promessa de aprovação.",
];
const offer = ["Apostila Desmonte a Frase", "IA Leiaê B1/B2/C1/C2", "24 textos acadêmicos progressivos", "240 questões de interpretação"];
const talk: [string, string[]][] = [
  ["Meu inglês ainda não é C1 ou C2.", ["Você não precisa começar pelo C2.", "Os textos avançam do B1 ao C2. A dificuldade aumenta, mas a habilidade treinada continua sendo a mesma."]],
  ["Eu já uso tradutor ou inteligência artificial.", ["Você pode continuar usando.", "O objetivo aqui é conseguir olhar para a estrutura do texto e entender o raciocínio, inclusive para saber quando uma tradução ou explicação realmente preserva o sentido."]],
  ["Não tenho tempo para fazer um curso enorme.", ["Este não é um curso completo de inglês.", "A apostila trabalha uma dificuldade específica e os exercícios podem ser feitos em blocos."]],
  ["Preciso entender todas as palavras?", ["Não.", "Você vai aprender justamente a localizar o núcleo antes de resolver todos os detalhes."]],
  ["Isso garante que vou passar na prova?", ["Não.", "É um material educacional de apoio. O resultado em uma prova depende de vários fatores e não existe promessa de nota, classificação ou aprovação."]],
];
const faqs = [
  ["Como recebo o produto?", "O acesso é digital. Após a confirmação do pagamento, você recebe as orientações para acessar o conteúdo."],
  ["Preciso imprimir a apostila?", "Não. Você pode usar o PDF no computador, tablet ou celular. Se preferir, também pode imprimir."],
  ["Quantos exercícios estão incluídos?", "São 24 textos acadêmicos e 240 questões, distribuídos entre B1, B2, C1 e C2."],
  ["A IA Leiaê está incluída?", "Sim. Ela faz parte dos materiais do produto."],
  ["O conteúdo é só para uma área acadêmica?", "Não. Os textos passam por diferentes áreas do conhecimento para evitar que sua prática fique dependente de um único assunto."],
  ["Preciso falar inglês?", "Não é esse o foco do produto. O treinamento é voltado para leitura e compreensão de frases acadêmicas."],
];

function BuyButton({ label }: { label: string }) {
  return <Button asChild className="study-cta"><a href={CHECKOUT.bst3c} target="_blank" rel="noopener noreferrer" data-bst3c-checkout>{label}<ArrowRight aria-hidden="true" /></a></Button>;
}
function Price({ className = "text-primary" }: { className?: string }) {
  return <div className="text-center"><p className={`study-price ${className}`}><small>R$</small>47</p><p className="mt-1">Pagamento único.</p></div>;
}
function Slot({ label, icon: Icon = ImageIcon }: { label: string; icon?: typeof ImageIcon }) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-study-teal bg-card p-6 text-center">
      <Icon className="h-9 w-9 text-primary" aria-hidden="true" />
      <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">{label}</p>
    </div>
  );
}
function ProductCard({ src, alt, title, ratio }: { src: string; alt: string; title: string; ratio: string }) {
  return (
    <figure className="flex flex-col overflow-hidden rounded-2xl border border-study-teal/40 bg-card p-4">
      <div className={`w-full overflow-hidden ${ratio}`}>
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-contain" />
      </div>
      <figcaption className="mt-4 text-center text-base font-bold text-primary">{title}</figcaption>
    </figure>
  );
}
function Flow() {
  return <p className="mx-auto max-w-[820px] rounded-lg bg-study-yellow px-5 py-5 text-center text-base font-black tracking-wide text-primary sm:text-lg">{FLOW}</p>;
}

function Bst3cPage() {
  return (
    <div className="bst3a-page">
      <main>
        <section className="study-hero bg-study-cream"><div className="study-inner grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="study-eyebrow text-study-teal">Brasil Sem Trava</p>
            <h1 className="mt-4">DESMONTE A FRASE</h1>
            <p className="mt-3 text-xl font-bold text-study-teal">Leitura acadêmica para provas de Mestrado e Doutorado</p>
            <p className="mt-6 text-2xl font-bold text-primary">Você reconhece várias palavras em inglês, mas se perde quando a frase acadêmica fica longa?</p>
            <div className="mt-6 space-y-4">
              <p>O problema nem sempre é falta de vocabulário.</p>
              <p>Muitas vezes você entende as palavras separadas, mas não consegue descobrir qual é a ideia principal porque a frase vem cheia de explicações, vírgulas, conectores e informações encaixadas.</p>
              <p>Quando chega ao final, precisa voltar para o começo.</p>
              <p>E tentar traduzir tudo palavra por palavra costuma deixar a leitura ainda mais lenta.</p>
            </div>
          </div>
          <figure className="flex items-center justify-center overflow-hidden rounded-2xl border border-study-teal/40 bg-card p-4"><img src={mockup.url} alt="Capa da apostila Desmonte a Frase em um tablet, ao lado da lista de módulos do curso" loading="lazy" className="h-auto w-full max-w-[420px] object-contain" /></figure>
        </div></section>

        <section className="study-band"><div className="study-inner"><h2 className="study-heading">Desmonte a frase antes de tentar traduzi-la</h2>
          <div className="mx-auto max-w-[720px] space-y-4">
            <p>Desmonte a Frase é uma apostila prática para ajudar você a encontrar o núcleo de frases acadêmicas longas, separar os detalhes e reconstruir o sentido em português simples.</p>
            <p>Sem precisar estudar toda a gramática do inglês antes.</p>
            <p>Sem transformar sua preparação em um curso completo do B1 ao C2.</p>
            <p>Você aprende uma tarefa específica:</p>
            <p className="border-l-4 border-study-teal pl-5 text-xl font-bold text-primary">pegar uma frase densa e descobrir o que ela realmente está dizendo.</p>
          </div>
        </div></section>

        <section className="study-band bg-study-blue"><div className="study-inner"><h2 className="study-heading">Veja o que acontece com uma frase difícil</h2>
          <blockquote lang="en" className="mx-auto max-w-[820px] rounded-2xl bg-card p-6 text-lg italic shadow-sm sm:p-8">“Although several observational studies have suggested a possible association between the two variables, the available evidence remains insufficient to establish a causal relationship.”</blockquote>
          <ol className="mx-auto mt-8 grid max-w-[820px] gap-4">{demo.map(([k, v], i) => <li key={k} className="study-card flex gap-4"><span className="study-number shrink-0">{i + 1}</span><div><p className="study-eyebrow text-study-teal">{k}</p><p className="mt-2 font-bold text-primary">{v}</p></div></li>)}</ol>
          <p className="mt-8 text-center text-lg font-bold text-primary">É esse tipo de leitura que você vai praticar.</p>
          <div className="mx-auto mt-8 grid max-w-[880px] items-start gap-5 sm:grid-cols-3">
            <ProductCard src={mockup.url} alt="Capa da apostila Desmonte a Frase aberta em um tablet" title="Apostila Desmonte a Frase" ratio="aspect-[1122/1402]" />
            <ProductCard src={iaLeia.url} alt="Tela da IA Leiaê analisando um trecho de texto acadêmico em inglês" title="IA Leiaê" ratio="aspect-[987/619]" />
            <ProductCard src={quizzes.url} alt="Tela de quiz de interpretação sobre um texto acadêmico em inglês" title="Textos acadêmicos e 240 questões" ratio="aspect-[915/619]" />
          </div>
        </div></section>

        <section className="study-band"><div className="study-inner"><h2 className="study-heading">Por que frases acadêmicas parecem tão difíceis?</h2>
          <p className="mb-8 text-center">Porque uma única frase pode trazer várias coisas ao mesmo tempo.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{diag.map((d) => <article key={d} className="study-card"><span className="inline-block h-2 w-8 rounded-full bg-study-coral" aria-hidden="true" /><p className="mt-4 font-bold text-primary">{d}</p></article>)}</div>
          <div className="mx-auto mt-8 max-w-[720px] space-y-3 text-center"><p>Se você tenta resolver tudo ao mesmo tempo, a frase pesa.</p><p className="font-bold text-primary">No Desmonte a Frase, você aprende a abrir essa estrutura por partes.</p></div>
        </div></section>

        <section className="study-band bg-study-green"><div className="study-inner"><h2 className="study-heading">Você vai usar uma sequência simples</h2>
          <Flow />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{steps.map(([k, v], i) => <article key={k} className="study-card"><span className="study-number">{i + 1}</span><h3 className="mt-4 text-lg">{k}</h3><p className="mt-3">{v}</p></article>)}</div>
          <div className="mt-8 space-y-2 text-center"><p>Não é uma técnica para decorar.</p><p className="font-bold text-primary">É uma sequência para aplicar enquanto você lê.</p></div>
        </div></section>

        <section className="study-band"><div className="study-inner"><h2 className="study-heading">O que você recebe</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="study-card"><BookOpen className="h-9 w-9 text-primary" aria-hidden="true" /><h3 className="mt-5">Apostila Desmonte a Frase</h3><p className="mt-4">9 módulos práticos para aprender a encontrar a estrutura de frases acadêmicas e reconstruir o sentido sem depender de tradução palavra por palavra.</p></article>
            <article className="study-card"><FileText className="h-9 w-9 text-primary" aria-hidden="true" /><h3 className="mt-5">24 textos acadêmicos progressivos</h3><p className="mt-4">Textos distribuídos entre os níveis B1, B2, C1 e C2, com assuntos de diferentes áreas do conhecimento.</p><div className="mt-5 grid grid-cols-2 gap-2 text-sm font-bold text-primary">{["B1: 4 textos", "B2: 8 textos", "C1: 8 textos", "C2: 4 textos"].map((t) => <span key={t} className="rounded-lg bg-study-green px-3 py-2 text-center">{t}</span>)}</div></article>
            <article className="study-card"><ListChecks className="h-9 w-9 text-primary" aria-hidden="true" /><h3 className="mt-5">240 questões de interpretação</h3><p className="mt-4">Cada um dos 24 textos vem acompanhado de 10 questões.</p><p className="mt-4">A prática continua usando a mesma habilidade ensinada na apostila.</p></article>
            <article className="study-card"><Sparkles className="h-9 w-9 text-primary" aria-hidden="true" /><h3 className="mt-5">IA Leiaê</h3><p className="mt-4">Um apoio para trabalhar trechos que ainda ficaram difíceis, identificar a estrutura da frase e conferir sua interpretação.</p></article>
          </div>
          <div className="mx-auto mt-6 max-w-[560px]"><ProductCard src={quizzes.url} alt="Tela de quiz de interpretação com pergunta e quatro alternativas" title="Textos acadêmicos e 240 questões" ratio="aspect-[1024/768]" /></div>
          <div className="mt-10 text-center"><BuyButton label="QUERO ACESSAR O DESMONTE A FRASE" /></div>
        </div></section>

        <section className="study-band study-dark"><div className="study-inner"><h2 className="study-heading">Não é um curso completo de inglês</h2>
          <div className="mx-auto max-w-[720px] space-y-4">
            <p>E essa é uma escolha.</p>
            <p>O Desmonte a Frase não tenta ensinar tudo sobre B1, B2, C1 e C2.</p>
            <p>Esses níveis são usados como campo de prática.</p>
            <p>O foco continua sendo um só:</p>
            <p className="border-l-4 border-study-yellow pl-5 text-xl font-bold text-study-yellow">entender frases acadêmicas densas sem precisar traduzir cada palavra.</p>
            <p>Se você precisa estudar inglês completo, desenvolver conversação ou aprender toda a gramática desde o início, este produto não foi criado para isso.</p>
          </div>
        </div></section>

        <section className="study-band"><div className="study-inner"><h2 className="study-heading">Para quem é</h2>
          <p className="mx-auto mb-8 max-w-[760px] text-center">É para quem está se preparando para uma prova de inglês ligada a processo seletivo, proficiência, Mestrado ou Doutorado e sente que:</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{pains.map((p) => <blockquote key={p} className="study-card"><Quote className="h-6 w-6 text-study-teal" aria-hidden="true" /><p className="mt-3 font-bold text-primary">“{p}”</p></blockquote>)}</div>
        </div></section>

        <section className="study-band bg-study-blue"><div className="study-inner"><h2 className="study-heading">Para quem não é</h2>
          <ul className="mx-auto max-w-[640px] space-y-4">{notFor.map((t) => <li key={t} className="flex gap-3"><X className="h-6 w-6 shrink-0 text-study-coral" aria-hidden="true" /><span>{t}</span></li>)}</ul>
          <p className="mx-auto mt-8 max-w-[640px] rounded-lg bg-study-yellow p-5 text-center font-bold text-primary">É um material para resolver um problema específico de leitura.</p>
        </div></section>

        <section className="study-band bg-study-cream"><div className="study-inner"><h2 className="study-heading">O que você leva por R$47</h2>
          <ul className="mx-auto max-w-[640px] divide-y divide-border">{offer.map((t) => <li key={t} className="flex gap-3 py-5"><Check className="study-check" aria-hidden="true" /><strong>{t}</strong></li>)}</ul>
          <div className="mx-auto mt-6 max-w-[640px] space-y-3 text-center"><p className="font-bold text-primary">Tudo voltado para a mesma habilidade.</p><p>Em vez de acumular mais conteúdo, você pratica uma forma de entrar em frases que antes pareciam grandes demais.</p></div>
        </div></section>

        <section className="study-band study-dark"><div className="study-inner text-center"><h2 className="study-heading">Acesso por R$47</h2>
          <Price className="text-study-yellow" />
          <div className="mx-auto mt-8 max-w-[640px] rounded-2xl border border-study-yellow p-6">
            <ShieldCheck className="mx-auto h-10 w-10 text-study-yellow" aria-hidden="true" />
            <p className="mt-3 text-xl font-bold">Garantia de 7 dias.</p>
            <p className="mt-3">Se dentro desse prazo você entender que o material não é para você, poderá solicitar o cancelamento conforme as condições informadas no checkout.</p>
          </div>
          <div className="mt-8"><BuyButton label="QUERO O DESMONTE A FRASE POR R$47" /></div>
        </div></section>

        <section className="study-band"><div className="study-inner"><h2 className="study-heading">Antes de decidir</h2>
          <div className="mx-auto grid max-w-[820px] gap-4">{talk.map(([q, a]) => <article key={q} className="study-card"><p className="text-lg font-bold text-primary">“{q}”</p><div className="mt-3 space-y-2">{a.map((l) => <p key={l}>{l}</p>)}</div></article>)}</div>
        </div></section>

        <section className="study-band bg-study-green"><div className="study-inner"><h2 className="study-heading">Sobre a Falaê Brasil</h2>
          <p className="mb-8 text-center">O Desmonte a Frase faz parte da linha Brasil Sem Trava, da Falaê Brasil.</p>
          <div className="grid gap-5 md:grid-cols-2">
            <Slot label="[Inserir credenciais reais e verificáveis]" icon={ShieldCheck} />
            <Slot label="[Inserir prints ou resultados reais, caso existam]" icon={ImageIcon} />
          </div>
        </div></section>

        <section className="study-band"><div className="study-inner"><h2 className="study-heading">Perguntas frequentes</h2><Accordion type="single" collapsible className="mx-auto max-w-[840px]">{faqs.map(([q, a], i) => <AccordionItem value={`faq-${i}`} key={q}><AccordionTrigger className="gap-5 py-6 text-left text-lg font-bold text-primary">{q}</AccordionTrigger><AccordionContent className="pb-6 text-[18px] leading-relaxed">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

        <section className="study-band bg-study-cream"><div className="study-inner text-center"><h2 className="study-heading">Quando aparecer uma frase que parece impossível...</h2>
          <p>Não comece pensando:</p>
          <p className="mt-2 text-xl font-bold text-muted-foreground">“Como eu traduzo isso tudo?”</p>
          <p className="mt-5">Comece com:</p>
          <p className="mt-2 text-xl font-bold text-primary">“Quem ou o quê está fazendo o quê?”</p>
          <div className="mt-8"><Flow /></div>
          <p className="mt-8 font-bold text-primary">Apostila + IA Leiaê + 24 textos acadêmicos + 240 questões</p>
          <div className="mt-6"><Price /></div>
          <div className="mt-7"><BuyButton label="QUERO COMEÇAR AGORA" /></div>
        </div></section>
      </main>

      <footer className="study-footer study-dark"><div className="study-inner"><p className="font-extrabold uppercase tracking-[0.2em] text-study-yellow">Brasil Sem Trava</p><p className="mt-3">FalaeBrasil.com.br</p><p className="mt-2">IBOX Centro de Idiomas Ltda. • CNPJ 18.656.810/0001-66</p><LegalLinks className="mt-5 flex flex-wrap justify-center gap-5" /><p className="mt-5 text-xs opacity-75">Copyright © Brasil Sem Trava | Desmonte a Frase | 2026. Todos os direitos reservados.</p><p className="mx-auto mt-5 max-w-[820px] text-sm">Material educacional de apoio. Não há garantia de nota, aprovação ou resultado específico.</p><ContactSection variant="support" /></div></footer>
    </div>
  );
}

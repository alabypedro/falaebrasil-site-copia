import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLinks } from "@/components/LegalLinks";
import { BookOpen, Check, X, ShieldCheck, Sparkles, ListChecks, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ContactSection } from "@/components/ContactSection";
import { CHECKOUT } from "@/lib/checkout";
import { StudyComboButton, type StudyComboOffer } from "@/components/StudyComboButton";
import bst3aMockup from "@/assets/bst3a-product-mockup.jpg";
import teacher from "@/assets/jois-alaby-new.png";
import apostilaTablet from "@/assets/bst3b-apostila-tablet.png.asset.json";
import iaLeia from "@/assets/bst3b-ia-leiae-2.png.asset.json";
import quizzes from "@/assets/bst3b-quizzes.png.asset.json";

export const Route = createFileRoute("/bst3b")({
  head: () => ({
    meta: [
      { title: "Fiquei Entre Duas | Inglês para Vestibulinho, ENEM e Vestibulares" },
      { name: "description", content: "Aprenda a descobrir qual alternativa o texto em inglês realmente sustenta. Apostila, IA Leiaê A2/B1 e 240 quizzes por R$37, pagamento único." },
      { property: "og:title", content: "Fiquei Entre Duas | Brasil Sem Trava" },
      { property: "og:description", content: "Ficou entre duas alternativas? Aprenda a descobrir qual delas o texto realmente sustenta." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://falaebrasil.com.br/bst3b" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" },
    ],
  }),
  component: Bst3bPage,
});

const CTA = "QUERO O FIQUEI ENTRE DUAS POR R$37";
const quotes = [
  "Essa alternativa também aparece no texto.",
  "Eu sempre fico entre duas.",
  "Depois que vejo o gabarito, parece óbvio.",
  "Tem uma palavrinha que muda tudo e eu não percebo.",
  "Eu entendo o texto, mas não sei por que uma está errada.",
];
const steps = ["Pergunta", "Trecho", "Compare", "Prove", "Elimine", "Resposta"];
const forWho = [
  "Estudantes de vestibulinho, ENEM ou vestibulares.",
  "Quem entende partes do texto, mas trava quando as alternativas ficam parecidas.",
  "Quem costuma ficar entre duas respostas.",
  "Quem quer aprender a justificar por que uma alternativa fica e a outra sai.",
];
const notFor = [
  "Quem procura um curso completo de inglês.",
  "Quem quer aprender toda a gramática para uma prova.",
  "Quem procura promessa de aprovação ou nota.",
  "Quem não pretende praticar questões.",
];
const receive = [
  "Faça sua compra.",
  "Após a confirmação do pagamento, receba seu acesso digital ao ambiente da Falaê Brasil.",
  "Abra a apostila e comece pelo primeiro módulo.",
  "Use a IA Leiaê e pratique com os quizzes em pequenos blocos.",
  "Volte aos erros e descubra qual detalhe eliminava a alternativa errada.",
];
const faqs = [
  ["Preciso ter inglês avançado?", "Não. O conteúdo trabalha textos e questões dos níveis A2 e B1. A proposta é usar o inglês que você já consegue reconhecer para aprender a comparar melhor as alternativas."],
  ["É um curso de inglês para vestibular?", "Não. É um produto específico para uma dificuldade: quando duas alternativas parecem possíveis e você não sabe qual eliminar."],
  ["Quantas questões estão incluídas?", "São 240 quizzes, sendo 120 do nível A2 e 120 do nível B1."],
  ["Preciso fazer as 240 questões de uma vez?", "Não. A recomendação é praticar em pequenos blocos. O importante é analisar os erros e entender por que uma alternativa não se sustentava."],
  ["O que é a IA Leiaê?", "É uma ferramenta de apoio à leitura dentro do ambiente da Falaê Brasil. Neste produto, ela complementa a prática com textos dos níveis A2 e B1."],
  ["O produto garante aprovação no vestibulinho, ENEM ou vestibular?", "Não. É um material educacional de apoio. Ele não promete nota ou aprovação."],
  ["Como recebo o material?", "O acesso é digital, pelo ambiente da Falaê Brasil, após a confirmação do pagamento."],
];

const COMBO: StudyComboOffer = {
  mainId: "BST3B", comboId: "COMBO_BST3B_BST3A",
  title: "Quer levar também o Reforço Escolar do Fundamental 2?",
  description: "Você já escolheu o Fiquei Entre Duas. Se fizer sentido, adicione o reforço de base com desconto.",
  main: { name: "Fiquei Entre Duas", desc: "Apostila + IA Leiaê A2/B1 + 240 quizzes.", price: 37, image: apostilaTablet.url },
  extra: { name: "Leia e Ache a Resposta", desc: "Reforço de inglês para provas do Fundamental 2 (11–14 anos): apostila, 240 questões A1/A2 e IA Leiaê.", price: 7, originalPrice: 27, image: bst3aMockup },
};
function BuyButton() {
  return <StudyComboButton offer={COMBO}>{CTA}</StudyComboButton>;
}
function PriceBlock({ dark = false }: { dark?: boolean }) {
  return (
    <div className="text-center">
      <p className={`study-price ${dark ? "text-study-yellow" : "text-primary"}`}><small>R$</small>37</p>
      <p className="mt-1">Pagamento único.</p>
    </div>
  );
}
function Flow() {
  return <p className="mx-auto max-w-[760px] rounded-lg bg-study-yellow px-5 py-5 text-center text-lg font-bold text-primary">{steps.join(" → ")}</p>;
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

function Bst3bPage() {
  return (
    <div className="bst3a-page">
      <main>
        <section className="study-hero bg-study-cream">
          <div className="study-inner text-center">
            <p className="study-eyebrow text-primary">Brasil Sem Trava • Inglês para Vestibulinho, ENEM e Vestibulares</p>
            <h1 className="mx-auto mt-6 max-w-[900px] text-balance">Ficou entre duas alternativas?</h1>
            <p className="mx-auto mt-5 max-w-[720px] text-2xl font-bold text-primary">Aprenda a descobrir qual delas o texto realmente sustenta.</p>
          </div>
        </section>

        <section className="study-band study-dark"><div className="study-inner">
          <div className="mx-auto max-w-[720px] space-y-4">
            <p>Você lê o texto. Entende boa parte. Elimina algumas respostas.</p>
            <p className="text-2xl font-bold text-study-yellow">Mas sobram duas.</p>
            <p>As duas parecem possíveis.</p>
            <p>E é justamente aí que você acaba marcando a errada ou trocando uma resposta no último momento.</p>
            <ul className="space-y-3 pt-4">{quotes.map((q) => <li key={q} className="border-l-4 border-study-yellow pl-5 text-xl font-bold text-study-yellow">“{q}”</li>)}</ul>
          </div>
        </div></section>

        <section className="study-band"><div className="study-inner">
          <p className="mx-auto max-w-[760px] text-center text-xl"><strong className="text-primary">Fiquei Entre Duas</strong> ajuda você a <strong>comparar as duas alternativas</strong>, <strong>encontrar o detalhe que muda o sentido</strong> e <strong>eliminar a que não consegue provar no texto</strong>, sem precisar traduzir tudo.</p>
          <div className="mx-auto mt-10 grid max-w-[880px] grid-cols-1 items-start gap-5 sm:grid-cols-3">
            <ProductCard src={apostilaTablet.url} alt="Capa da apostila visual Fiquei Entre Duas aberta em um tablet" title="Apostila Fiquei Entre Duas" ratio="aspect-[1122/1402]" />
            <ProductCard src={iaLeia.url} alt="Tela da IA Leiaê mostrando um texto em inglês com a palavra glass traduzida para copo" title="IA Leiaê" ratio="aspect-[1003/639]" />
            <ProductCard src={quizzes.url} alt="Tela de quiz com a pergunta How old is Leo e quatro alternativas de resposta" title="240 quizzes A2/B1" ratio="aspect-[1005/641]" />
          </div>
        </div></section>

        <section className="study-band bg-study-blue"><div className="study-inner"><h2 className="study-heading">O problema nem sempre é não entender inglês</h2>
          <div className="mx-auto max-w-[720px] space-y-4">
            <p>Às vezes você entendeu o texto e mesmo assim errou.</p>
            <p>Isso acontece porque uma alternativa pode trazer uma informação verdadeira, mas responder outra coisa.</p>
            <p>Outra pode trocar <strong>some</strong> por <strong>all</strong>, <strong>may</strong> por <strong>will</strong>, causa por consequência ou esconder a diferença depois de um <strong>but</strong> ou <strong>however</strong>.</p>
            <p>E algumas respostas não copiam o texto. Elas dizem a mesma coisa usando outras palavras.</p>
            <p>Por isso, simplesmente traduzir mais não resolve esse tipo de questão.</p>
            <p className="text-xl font-bold text-primary">Você precisa saber o que comparar.</p>
          </div>
        </div></section>

        <section className="study-band"><div className="study-inner"><h2 className="study-heading">Um passo a passo para decidir usando o próprio texto</h2>
          <ol className="mx-auto grid max-w-[880px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">{steps.map((s, i) => <li key={s} className="study-card text-center"><span className="study-number">{i + 1}</span><p className="mt-3 font-bold text-primary">{s}</p></li>)}</ol>
          <div className="mx-auto mt-10 max-w-[720px] space-y-4">
            <p>Primeiro você identifica exatamente o que a questão quer.</p>
            <p>Depois encontra o trecho que interessa.</p>
            <p>Compara as alternativas.</p>
            <p>Procura palavras que mudam o sentido, exageros, informações acrescentadas e mudanças de direção.</p>
            <p>E faz uma pergunta simples:</p>
            <p className="border-l-4 border-study-teal pl-5 text-xl font-bold text-primary">“Onde está a prova disso no texto?”</p>
            <p>A alternativa que não se sustenta começa a sair.</p>
          </div>
          <div className="mt-10 text-center"><BuyButton /></div>
        </div></section>

        <section className="study-band bg-study-green"><div className="study-inner"><h2 className="study-heading">Você não recebe só uma apostila</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="study-card"><BookOpen className="h-9 w-9 text-primary" aria-hidden="true" /><h3 className="mt-5">Apostila digital Fiquei Entre Duas</h3><p className="mt-4">9 módulos curtos para aprender a comparar alternativas, perceber pegadinhas e justificar por que uma resposta fica e a outra sai.</p></article>
            <article className="study-card"><Sparkles className="h-9 w-9 text-primary" aria-hidden="true" /><h3 className="mt-5">IA Leiaê | A2 + B1</h3><p className="mt-4">Textos dos níveis A2 e B1 para continuar praticando leitura, ideia principal, contraste, causa, consequência e interpretação.</p></article>
            <article className="study-card"><ListChecks className="h-9 w-9 text-primary" aria-hidden="true" /><h3 className="mt-5">Banco com 240 quizzes</h3><p className="mt-4">São 120 questões A2 + 120 questões B1, organizadas em 12 temas por nível.</p><p className="mt-4">Você pode praticar em blocos pequenos, conferir seus erros e repetir o raciocínio em novos textos.</p></article>
          </div>
          <p className="mt-8 text-center font-bold text-primary">Tudo reunido no ambiente digital da Falaê Brasil.</p>
        </div></section>


        <section className="study-band bg-study-blue"><div className="study-inner grid gap-6 md:grid-cols-2">
          <article className="study-card"><h3>Para quem é</h3><ul className="mt-5 space-y-4">{forWho.map((t) => <li key={t} className="flex gap-3"><Check className="study-check" aria-hidden="true" /><span>{t}</span></li>)}</ul></article>
          <article className="study-card"><h3>Para quem não é</h3><ul className="mt-5 space-y-4">{notFor.map((t) => <li key={t} className="flex gap-3"><X className="h-6 w-6 shrink-0 text-study-coral" aria-hidden="true" /><span>{t}</span></li>)}</ul></article>
        </div></section>

        <section className="study-band bg-study-cream"><div className="study-inner"><h2 className="study-heading">O que você leva por R$37</h2>
          <div className="mx-auto mb-8 max-w-[720px] space-y-3 text-center"><p>Tudo foi montado para uma dificuldade específica:</p><p className="font-bold text-primary">parar de escolher entre duas alternativas pela sensação e decidir usando o que o texto realmente permite afirmar.</p></div>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="study-card"><BookOpen className="h-9 w-9 text-primary" aria-hidden="true" /><h3 className="mt-5">Apostila Fiquei Entre Duas</h3><p className="mt-4">Você aprende o que observar quando duas respostas parecem corretas e como voltar ao trecho para encontrar a diferença que decide a questão.</p></article>
            <article className="study-card"><Sparkles className="h-9 w-9 text-primary" aria-hidden="true" /><h3 className="mt-5">IA Leiaê A2/B1</h3><p className="mt-4">Um apoio para trabalhar textos e trechos que ainda ficaram difíceis durante a prática.</p></article>
            <article className="study-card"><ListChecks className="h-9 w-9 text-primary" aria-hidden="true" /><h3 className="mt-5">240 questões de interpretação</h3><p className="mt-4">Prática nos níveis A2 e B1 para treinar comparação de alternativas, pistas do texto, conectores, intensidade e grau de certeza.</p></article>
          </div>
        </div></section>

        <section className="study-band study-dark"><div className="study-inner text-center"><h2 className="study-heading">Acesso por R$37</h2>
          <p className="study-price text-study-yellow"><small>R$</small>37</p>
          <p className="mt-3 font-bold">Pagamento único: R$37</p>
          <p className="mt-1">Sem assinatura mensal.</p>
          <div className="mx-auto mt-8 max-w-[640px] rounded-2xl border border-study-yellow p-6"><ShieldCheck className="mx-auto h-10 w-10 text-study-yellow" aria-hidden="true" /><p className="mt-3 text-xl font-bold">Garantia de 7 dias.</p><p className="mt-3">Se dentro desse prazo você entender que o material não é para você, poderá solicitar o cancelamento conforme as condições informadas no checkout.</p></div>
          <div className="mt-8"><BuyButton /></div>
        </div></section>

        <section className="study-band study-dark"><div className="study-inner"><h2 className="study-heading">Comece por R$37</h2>
          <PriceBlock dark />
          <h3 className="mt-12 text-center text-study-yellow">Como você recebe</h3>
          <ol className="mx-auto mt-6 max-w-[680px] space-y-4">{receive.map((t, i) => <li key={t} className="flex gap-4"><span className="study-number shrink-0">{i + 1}</span><span className="pt-1">{t}</span></li>)}</ol>
          <div className="mx-auto mt-10 max-w-[680px] rounded-2xl border border-study-yellow p-6 text-center">
            <ShieldCheck className="mx-auto h-10 w-10 text-study-yellow" aria-hidden="true" />
            <p className="mt-3 text-xl font-bold">7 dias para conhecer o material.</p>
            <p className="mt-3">Depois da compra, você tem 7 dias de garantia.</p>
            <p className="mt-3">Se dentro desse período decidir que o material não é adequado para você, solicite o cancelamento pelos canais de suporte, conforme os <Link to="/termos-de-uso" target="_blank" className="underline underline-offset-4">Termos de Uso</Link>.</p>
          </div>
          <div className="mt-8 text-center"><BuyButton /></div>
        </div></section>

        <section className="study-band"><div className="study-inner"><h2 className="study-heading">Antes de decidir</h2>
          <div className="mx-auto max-w-[720px] space-y-4">
            <p>Você pode continuar fazendo questões do mesmo jeito e, quando sobrarem duas alternativas, escolher pela que parece melhor.</p>
            <p>Ou pode aprender a parar nesse momento e perguntar:</p>
            <p className="border-l-4 border-study-teal pl-5 text-xl font-bold text-primary">“Qual delas o texto realmente me deixa afirmar?”</p>
            <p>O Fiquei Entre Duas foi criado para treinar exatamente essa segunda opção.</p>
            <p>Não para ensinar inglês inteiro.</p>
            <p className="font-bold">Para resolver esse ponto específico da prova.</p>
          </div>
        </div></section>

        <section className="study-band bg-study-green"><div className="study-inner grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <img src={teacher} width={640} height={800} loading="lazy" alt="Teacher Jóis Alaby, criador da Falaê Brasil e da linha Brasil Sem Trava." className="mx-auto max-h-[420px] w-full max-w-[360px] object-contain" />
          <div><p className="study-eyebrow mb-3 text-primary">Quem está por trás</p><h2>Teacher Jóis Alaby</h2><p className="mt-5 font-bold">Professor e criador da Falaê Brasil e da linha Brasil Sem Trava.</p><p className="mt-5">A proposta dos produtos BST é trabalhar dificuldades específicas em formatos práticos, sem transformar cada problema em um curso completo.</p></div>
        </div></section>

        <section className="study-band"><div className="study-inner"><h2 className="study-heading">Perguntas frequentes</h2><Accordion type="single" collapsible className="mx-auto max-w-[840px]">{faqs.map(([q, a], i) => <AccordionItem value={`faq-${i}`} key={q}><AccordionTrigger className="gap-5 py-6 text-left text-lg font-bold text-primary">{q}</AccordionTrigger><AccordionContent className="pb-6 text-[18px] leading-relaxed">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

        <section className="study-band bg-study-cream"><div className="study-inner text-center"><h2 className="study-heading">Quando duas alternativas parecem certas, procure a que não sobrevive ao texto.</h2>
          <p>Você recebe:</p>
          <p className="mt-3 font-bold text-primary">Apostila Fiquei Entre Duas • IA Leiaê A2/B1 • 240 quizzes</p>
          <div className="mt-6"><PriceBlock /></div>
          <div className="mt-8"><Flow /></div>
          <div className="mt-8"><BuyButton /><p className="mt-5 text-[13px]">Acesso digital após confirmação do pagamento • Garantia de 7 dias.</p></div>
        </div></section>
      </main>

      <footer className="study-footer study-dark"><div className="study-inner"><p className="font-extrabold uppercase tracking-[0.2em] text-study-yellow">Brasil Sem Trava</p><p className="mt-3">FalaeBrasil.com.br</p><p className="mt-2">IBOX Centro de Idiomas Ltda. • CNPJ 18.656.810/0001-66</p><LegalLinks className="mt-5 flex flex-wrap justify-center gap-5" /><p className="mt-5 text-xs opacity-75">Copyright © Brasil Sem Trava | Fiquei Entre Duas | 2026. Todos os direitos reservados.</p><p className="mx-auto mt-5 max-w-[820px] text-sm">Material educacional de apoio. A compra do produto não garante nota, aprovação ou resultado específico. O aproveitamento depende do uso e da prática de cada aluno.</p><ContactSection variant="support" /></div></footer>
    </div>
  );
}

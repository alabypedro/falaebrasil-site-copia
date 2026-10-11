import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLinks } from "@/components/LegalLinks";
import { BookOpen, Check, Search, ShieldCheck, Sparkles, ClipboardCheck, ListChecks, Target, ArrowRight, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ContactSection } from "@/components/ContactSection";
import { CHECKOUT } from "@/lib/checkout";
import { StudyComboButton, type StudyComboOffer } from "@/components/StudyComboButton";
import bst3bCover from "@/assets/bst3b-apostila-tablet.png.asset.json";
import mockup from "@/assets/bst3a-product-mockup.jpg";
import teacher from "@/assets/jois-alaby-new.png";

export const Route = createFileRoute("/bst3a")({
  head: () => ({
    meta: [
      { title: "Leia e Ache a Resposta | Reforço de Inglês para Provas | Falaê Brasil" },
      { name: "description", content: "Reforço de inglês para alunos de 11 a 14 anos. Apostila visual, 240 questões A1/A2 e IA Leiaê para ajudar o aluno a encontrar pistas e responder questões de inglês." },
      { property: "og:title", content: "Leia e Ache a Resposta" },
      { property: "og:description", content: "Ajude seu filho a saber onde procurar a resposta em textos e questões de inglês." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://falaebrasil.com.br/bst3a" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" },
    ],
  }),
  component: Bst3aPage,
});

// Populate only with approved, real testimonials. The entire block stays hidden until then.
const testimonials: { quote: string; name: string }[] = [];

const practice = [
  "Quem está fazendo alguma coisa", "Onde e quando algo acontece", "Números, datas, horários e quantidades",
  "Palavras parecidas com português que ajudam", "Palavras parecidas que podem enganar", "Pistas de contexto",
  "Pronomes como he, she, it e they", "Comparações como bigger, cheaper e better",
  "Palavras como not, never, sometimes e always", "Alternativas que parecem certas, mas não respondem à pergunta",
];
const audience = [
  "Tem entre 11 e 14 anos.", "Estuda inglês na escola, mas se perde em textos e questões.",
  "Conhece algumas palavras, mas não consegue juntar o sentido.", "Tenta traduzir tudo antes de responder.",
  "Não sabe onde procurar a informação pedida.", "Fica inseguro quando encontra uma palavra desconhecida.",
  "Precisa de reforço sem entrar em outro curso completo de inglês.",
];
const included = [
  ["Apostila Leia e Ache a Resposta", "9 módulos + Missão Final + checklist"],
  ["Banco de prática", "240 questões A1/A2"],
  ["IA Leiaê", "Apoio para trabalhar textos e praticar leitura"],
  ["Acesso digital", ""],
];
const faqs = [
  ["Meu filho precisa saber inglês?", "Não precisa ter inglês avançado. O material trabalha leitura em níveis A1/A2 e foi pensado para alunos que já têm contato com inglês na escola, mas precisam de ajuda para lidar com textos e questões."],
  ["Isso é um curso de inglês?", "Não. É um reforço focado em leitura e interpretação de questões."],
  ["Serve para qual idade?", "A linguagem foi preparada principalmente para alunos de 11 a 14 anos."],
  ["Ele precisa fazer as 240 questões de uma vez?", "Não. A sugestão é praticar em blocos pequenos, como 10 questões por treino."],
  ["A IA Leiaê responde a prova pelo aluno?", "Não é essa a proposta. Ela serve como apoio para praticar antes, trabalhar textos e desenvolver a leitura."],
  ["O material substitui professor ou escola?", "Não. Ele complementa o estudo escolar com uma habilidade específica."],
  ["O acesso é digital?", "Sim. A apostila e os recursos são digitais."],
  ["Quanto custa?", "R$27,00 em pagamento único."],
];

const COMBO: StudyComboOffer = {
  mainId: "BST3A", comboId: "COMBO_BST3A_BST3B",
  title: "Quer levar também o reforço para vestibulinhos e vestibulares?",
  description: "Você já escolheu o Leia e Ache a Resposta. Se fizer sentido, adicione o próximo passo com desconto.",
  main: { name: "Leia e Ache a Resposta", desc: "Apostila + 240 questões A1/A2 + IA Leiaê.", price: 27, image: mockup },
  extra: { name: "Fiquei Entre Duas", desc: "Reforço para vestibulinho, ENEM e vestibulares: apostila, IA Leiaê A2/B1 e 240 quizzes.", price: 17, originalPrice: 37, image: bst3bCover.url },
};
function BuyButton({ children }: { children: React.ReactNode }) {
  return <StudyComboButton offer={COMBO}>{children}</StudyComboButton>;
}
function TrustLine() {
  return <p className="mt-5 text-[13px]">Compra segura • Acesso digital • Garantia de 7 dias</p>;
}
function Price() {
  return <p className="study-price"><small>R$</small>27<span className="text-3xl">,00</span></p>;
}
function Checklist({ items }: { items: string[] }) {
  return <ul className="space-y-4">{items.map((item) => <li key={item} className="flex gap-3"><Check className="study-check" aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

function Bst3aPage() {
  return (
    <div className="bst3a-page">
      <main>
        <section className="study-hero bg-study-cream">
          <div className="study-inner text-center">
            <p className="study-eyebrow text-primary">Falaê Brasil <span className="mx-2 text-study-teal">/</span> Brasil Sem Trava</p>
            <p className="study-eyebrow mt-7 text-primary">Reforço de inglês para provas | 11 a 14 anos</p>
            <p className="mt-3 text-lg font-bold text-primary">Leia e Ache a Resposta</p>
            <h1 className="mx-auto mt-4 max-w-[970px] text-balance">Seu filho não precisa traduzir o texto inteiro para conseguir responder às questões de inglês</h1>
            <p className="mx-auto mt-6 max-w-[760px]">Com o Leia e Ache a Resposta, ele aprende a olhar a pergunta, encontrar as pistas importantes no texto e chegar à resposta com um passo a passo simples.</p>
            <p className="mt-6 font-bold text-primary">Apostila visual + 240 questões A1/A2 + IA Leiaê</p>
            <div className="mt-6 text-primary"><Price /><p className="mt-1 text-base">Pagamento único.</p></div>
            <div className="mt-6"><BuyButton>QUERO AJUDAR MEU FILHO NAS PROVAS DE INGLÊS</BuyButton><TrustLine /></div>
            <figure className="mx-auto mt-10 max-w-[820px]">
              <img src={mockup} width={1536} height={1024} fetchPriority="high" alt="Representação ilustrativa do Leia e Ache a Resposta em tablet, celular e apostila aberta com pistas de leitura destacadas." className="study-hero-image" />
              <figcaption className="mt-2 text-xs text-muted-foreground">Representação ilustrativa do material digital.</figcaption>
            </figure>
          </div>
        </section>

        {testimonials.length > 0 && <section className="study-band bg-study-blue"><div className="study-inner"><h2 className="study-heading">O que pais e alunos estão dizendo</h2><div className="grid gap-6 md:grid-cols-3">{testimonials.slice(0, 3).map((item) => <blockquote key={item.name} className="study-card"><p>{item.quote}</p><cite className="mt-4 block">{item.name}</cite></blockquote>)}</div></div></section>}

        <section className="study-band study-dark">
          <div className="study-inner"><h2 className="study-heading">Ele conhece algumas palavras. Mas chega à prova e não sabe por onde começar.</h2>
            <div className="mx-auto max-w-[760px] space-y-5">
              <p>Talvez você já tenha visto isso acontecer.</p><p>Seu filho olha para um texto em inglês e imediatamente pensa:</p>
              <p className="border-l-4 border-study-yellow pl-6 text-3xl font-bold text-study-yellow">“Eu não entendo isso.”</p>
              <p>Aí tenta traduzir palavra por palavra.</p><p>Encontra uma palavra que não conhece e para.</p>
              <p>Não percebe que a pergunta está procurando apenas uma pessoa, um lugar, uma data ou uma informação específica.</p>
              <p>E acaba errando questões que poderia resolver usando as pistas do próprio texto.</p><p>O problema não é necessariamente falta de estudo.</p>
              <p className="pt-4 text-2xl font-bold text-study-yellow">Muitas vezes, falta um jeito simples de atacar a questão.</p>
            </div>
          </div>
        </section>

        <section className="study-band"><div className="study-inner">
          <h2 className="study-heading">O caminho é mais simples do que tentar traduzir tudo</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="study-card"><span className="study-number">01</span><h3 className="mt-6">Leia a pergunta</h3><p className="mt-4">Primeiro ele aprende a descobrir o que a questão está procurando.</p><p className="mt-4 font-bold text-primary">Pessoa? Lugar? Data? Motivo? Quantidade?</p></article>
            <article className="study-card"><span className="study-number">02</span><h3 className="mt-6">Ache a pista</h3><p className="mt-4">Depois procura nomes, números, palavras conhecidas, títulos, imagens e trechos importantes.</p><Search className="mt-6 h-8 w-8 text-primary" aria-hidden="true" /></article>
            <article className="study-card"><span className="study-number">03</span><h3 className="mt-6">Volte ao texto e confira</h3><p className="mt-4">Ele encontra o pedaço certo, compara com as alternativas e confirma a resposta no próprio texto.</p><ClipboardCheck className="mt-6 h-8 w-8 text-primary" aria-hidden="true" /></article>
          </div>
          <p className="mx-auto mt-9 max-w-[700px] rounded-lg bg-study-yellow px-5 py-5 text-center text-xl font-bold text-primary">Pergunta → Pista → Trecho → Resposta</p>
        </div></section>

        <section className="study-band bg-study-green"><div className="study-inner">
          <h2 className="study-heading">Um reforço feito para usar, não para acumular</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="study-card"><BookOpen className="h-9 w-9 text-primary" aria-hidden="true" /><h3 className="mt-5">Apostila Leia e Ache a Resposta</h3><p className="mt-4">Uma apostila visual, escrita para alunos de 11 a 14 anos.</p><p className="mt-4">São 9 módulos curtos com explicações simples, exemplos e exercícios.</p></article>
            <article className="study-card"><ListChecks className="h-9 w-9 text-primary" aria-hidden="true" /><h3 className="mt-5">240 questões A1/A2</h3><p className="mt-4">Um banco de questões para transformar as dicas da apostila em prática.</p><p className="mt-4">O aluno pode treinar em pequenos blocos.</p></article>
            <article className="study-card"><Sparkles className="h-9 w-9 text-primary" aria-hidden="true" /><h3 className="mt-5">IA Leiaê</h3><p className="mt-4">Uma ferramenta de apoio para trabalhar textos em inglês, encontrar pistas e praticar compreensão.</p></article>
          </div><p className="mx-auto mt-8 max-w-[750px] text-center">Tudo foi pensado para complementar o inglês da escola, sem virar outro curso longo.</p>
        </div></section>

        <section className="study-band"><div className="study-inner"><h2 className="study-heading">O que seu filho aprende a procurar dentro do texto</h2>
          <div className="mx-auto max-w-[950px]"><ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">{practice.map((item) => <li key={item} className="flex gap-3 border-b border-border pb-5"><Check className="study-check" aria-hidden="true" /><span>{item}</span></li>)}</ul></div>
          <p className="mt-10 text-center text-xl">O foco não é decorar regras.<br /><strong className="text-primary">É aprender onde olhar.</strong></p>
        </div></section>

        <section className="study-band bg-study-blue"><div className="study-inner"><h2 className="study-heading">Mais prática dentro do próprio material</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <article className="study-card"><Target className="h-8 w-8 text-primary" aria-hidden="true" /><h3 className="mt-5">Missão Final</h3><p className="mt-4">30 questões misturando as habilidades trabalhadas nos módulos.</p></article>
            <article className="study-card"><Check className="h-8 w-8 text-primary" aria-hidden="true" /><h3 className="mt-5">Gabarito</h3><p className="mt-4">Para conferir as respostas depois de tentar sozinho.</p></article>
            <article className="study-card"><ClipboardCheck className="h-8 w-8 text-primary" aria-hidden="true" /><h3 className="mt-5">Checklist de prova</h3><p className="mt-4">Uma página curta para lembrar o que fazer quando bater a dúvida.</p></article>
            <article className="study-card"><ListChecks className="h-8 w-8 text-primary" aria-hidden="true" /><h3 className="mt-5">Rotina de treino</h3><p className="mt-4">Uma sugestão simples: <strong>10 questões por vez.</strong></p><p className="mt-4">Sem transformar reforço em mais uma obrigação pesada.</p></article>
          </div>
        </div></section>

        <section className="study-band"><div className="study-inner"><h2 className="study-heading">O Leia e Ache a Resposta é para seu filho se...</h2><div className="mx-auto max-w-[780px]"><Checklist items={audience} />
          <div className="mt-9 rounded-lg bg-study-green p-7"><p className="font-bold text-primary">Este material não substitui a escola.</p><p className="mt-2">Ele ajuda o aluno a lidar melhor com uma tarefa específica: <strong>ler o texto e encontrar a resposta.</strong></p></div>
        </div></div></section>

        <section className="study-band bg-study-cream"><div className="study-inner"><h2 className="study-heading">Veja o que está incluído</h2>
          <ul className="mx-auto max-w-[780px] divide-y divide-border">{included.map(([title, detail]) => <li key={title} className="flex gap-4 py-6"><Check className="study-check" aria-hidden="true" /><div><h3>{title}</h3>{detail && <p className="mt-1">{detail}</p>}</div></li>)}</ul>
          <div className="mt-10 text-center"><p>Tudo por:</p><div className="mt-2 text-primary"><Price /></div><p className="mt-2">Pagamento único.</p><div className="mt-6"><BuyButton>QUERO O LEIA E ACHE A RESPOSTA POR R$27</BuyButton></div></div>
        </div></section>

        <section className="study-band study-dark"><div className="study-inner text-center"><h2 className="study-heading">Reforço de inglês sem transformar sua casa em outra sala de aula</h2><p>Seu filho recebe o material completo por:</p><div className="mt-5 text-study-yellow"><Price /></div><p className="mt-3">Pagamento único • Sem mensalidade</p><div className="mt-7"><BuyButton>QUERO O LEIA E ACHE A RESPOSTA POR R$27</BuyButton><TrustLine /></div></div></section>

        <section className="study-band"><div className="study-inner"><h2 className="study-heading">Começar é simples</h2><div className="grid gap-8 md:grid-cols-3">
          <article><span className="study-number">1</span><h3 className="mt-5">Faça a compra</h3><p className="mt-4">Finalize o pedido pelo checkout.</p></article>
          <article><span className="study-number">2</span><h3 className="mt-5">Receba o acesso</h3><p className="mt-4">Depois da confirmação do pagamento, você recebe as instruções de acesso.</p></article>
          <article><span className="study-number">3</span><h3 className="mt-5">Comece pela apostila</h3><p className="mt-4">Seu filho abre o primeiro módulo e começa pelo passo mais importante: descobrir o que a pergunta está pedindo.</p><p className="mt-4">Depois pode continuar praticando com as questões e a IA Leiaê.</p></article>
        </div></div></section>

        <section className="study-band bg-study-green"><div className="study-inner grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <img src={teacher} width={640} height={800} loading="lazy" alt="Teacher Jóis Alaby, professor de inglês e criador da Falaê Brasil." className="mx-auto max-h-[460px] w-full max-w-[390px] object-contain" />
          <div><p className="study-eyebrow mb-3 text-primary">Quem criou</p><h2>Teacher Jóis Alaby</h2><p className="mt-5 font-bold">Professor de inglês e criador da Falaê Brasil.</p><p className="mt-5">Depois de décadas trabalhando com ensino de inglês, Jóis desenvolveu este material para transformar técnicas de leitura e interpretação em explicações que um aluno do Fundamental 2 consiga realmente usar.</p><p className="mt-5">No Leia e Ache a Resposta, o objetivo não é colocar mais conteúdo na cabeça da criança.</p><p className="mt-5">É mostrar um caminho simples para ela saber o que fazer quando encontra uma questão em inglês.</p></div>
        </div></section>

        <section className="study-band"><div className="study-inner"><h2 className="study-heading">Quando aparecer o próximo texto em inglês, seu filho pode fazer uma de duas coisas</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="study-card"><p className="study-eyebrow text-muted-foreground">Opção 1</p><h3 className="mt-4">Tentar traduzir tudo.</h3><p className="mt-5">Parar nas palavras desconhecidas.</p><p className="mt-5">Ficar procurando a resposta sem saber onde olhar.</p></article>
            <article className="rounded-2xl border border-study-teal bg-study-green p-7"><p className="study-eyebrow text-primary">Opção 2</p><h3 className="mt-4">Ler a pergunta.</h3><div className="mt-5"><Checklist items={["Descobrir o que ela quer.", "Encontrar a pista.", "Voltar ao trecho certo.", "Conferir a alternativa."]} /></div></article>
          </div><div className="mt-8 text-center"><p className="mb-7">É exatamente essa segunda rotina que ele vai praticar.</p><BuyButton>QUERO ENSINAR ESSE PASSO A PASSO AO MEU FILHO</BuyButton></div>
        </div></section>

        <section className="study-band bg-study-cream"><div className="study-inner text-center"><MonitorSmartphone className="mx-auto mb-6 h-10 w-10 text-primary" aria-hidden="true" /><h2>Leia e Ache a Resposta</h2><p className="mt-5">Apostila + 240 questões A1/A2 + IA Leiaê</p><div className="mt-6 text-primary"><Price /></div><p className="mt-2">Pagamento único.</p><div className="mt-7"><BuyButton>QUERO COMEÇAR AGORA POR R$27</BuyButton><TrustLine /></div></div></section>

        <section className="study-band bg-study-blue"><div className="study-inner text-center"><ShieldCheck className="mx-auto mb-6 h-12 w-12 text-primary" aria-hidden="true" /><h2>Garantia de 7 dias</h2><div className="mx-auto mt-6 max-w-[770px]"><p>Você pode acessar o material e conhecer a proposta.</p><p className="mt-5">Se dentro do período de garantia decidir que o produto não faz sentido para sua família, solicite o cancelamento conforme as condições apresentadas no checkout.</p><p className="mt-6 text-sm text-muted-foreground">A garantia e o direito de arrependimento seguem os <Link to="/termos-de-uso" target="_blank" className="underline underline-offset-4">Termos de Uso</Link> e a legislação aplicável.</p></div></div></section>

        <section className="study-band"><div className="study-inner"><h2 className="study-heading">Perguntas frequentes</h2><Accordion type="single" collapsible className="mx-auto max-w-[840px]">{faqs.map(([question, answer], index) => <AccordionItem value={`faq-${index}`} key={question}><AccordionTrigger className="gap-5 py-6 text-lg font-bold text-primary">{question}</AccordionTrigger><AccordionContent className="pb-6 text-[18px] leading-relaxed">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>
      </main>

      <footer className="study-footer study-dark"><div className="study-inner"><p className="font-extrabold uppercase tracking-[0.2em] text-study-yellow">Brasil Sem Trava</p><p className="mt-3">FalaeBrasil.com.br</p><p className="mt-2">IBOX Centro de Idiomas Ltda. • CNPJ 18.656.810/0001-66</p><p className="mt-5"><a className="underline-offset-4 hover:underline" href="mailto:atendimento@falaebrasil.com.br">atendimento@falaebrasil.com.br</a></p><LegalLinks className="mt-5 flex flex-wrap justify-center gap-5" /><p className="mt-5 text-xs opacity-75">Copyright © Brasil Sem Trava — Leia e Ache a Resposta — 2026. Todos os direitos reservados.</p><p className="mx-auto mt-5 max-w-[820px] text-sm">Material educacional de apoio. A compra do produto não garante nota, aprovação ou resultado específico. O aproveitamento depende do uso e da prática de cada aluno.</p><ContactSection variant="support" /></div></footer>
    </div>
  );
}
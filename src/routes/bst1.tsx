import { createFileRoute } from "@tanstack/react-router";
import { useState, type MouseEvent } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Globe2,
  Headphones,
  Hotel,
  Luggage,
  MessageCircleMore,
  Mic2,
  Plane,
  ShoppingBag,
  Smartphone,
  TrainFront,
  Utensils,
} from "lucide-react";

import heroMockupAsset from "@/assets/bst-hero-mockup.png.asset.json";
import step1Img from "@/assets/bst-step1.jpg";
import step2ImgAsset from "@/assets/bst-step2.png.asset.json";
import step3Img from "@/assets/bst-step3.jpg";
import coupleImg from "@/assets/bst-couple.jpg";
import joisImg from "@/assets/jois-alaby-new.png";
import vistoGuideImg from "@/assets/bst4-produto.jpg";
import { ContactSection } from "@/components/ContactSection";
import { LegalConsent, LegalLinks } from "@/components/LegalLinks";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { CHECKOUT } from "@/lib/checkout";
import { trackCheckoutAndNavigate } from "@/lib/pixel";

const COMBO_ID = "COMBO_BST1_BST4";

export const Route = createFileRoute("/bst1")({
  head: () => ({
    meta: [
      { title: "Guia de Sobrevivência 50+ | 55 frases para viagens" },
      { name: "description", content: "Tenha no celular 55 frases de inglês para aeroporto, imigração, hotel, restaurante, compras, transporte e convivência no exterior." },
      { property: "og:title", content: "Guia de Sobrevivência 50+ | Brasil Sem Trava" },
      { property: "og:description", content: "55 frases práticas com tradução, pronúncia e ferramentas para consultar e praticar antes da viagem." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" },
    ],
  }),
  component: Bst1Page,
});

function PurchaseButton({ label = "Quero meu guia por R$47", full = false }: { label?: string; full?: boolean }) {
  const [open, setOpen] = useState(false);

  const showOffer = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  const chooseOffer = (event: MouseEvent<HTMLAnchorElement>, kind: "single" | "combo") => {
    trackCheckoutAndNavigate(event, kind === "combo" ? "COMBO_BST1_BST4" : "BST1");
  };

  return (
    <>
      <Button asChild size="lg" className={`min-h-16 whitespace-normal rounded-md bg-accent px-7 py-4 text-center text-sm font-extrabold uppercase text-accent-foreground shadow-cta transition-transform hover:scale-[1.01] hover:bg-accent/90 sm:text-base ${full ? "w-full" : "w-full max-w-xl"}`}>
        <a href={CHECKOUT.bst1} onClick={showOffer}>{label}</a>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[94vh] w-[calc(100vw-1.5rem)] max-w-4xl overflow-y-auto border-0 p-0">
          <div className="bg-brand-navy px-5 pb-6 pt-8 text-center text-primary-foreground sm:px-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent">Antes de continuar</p>
            <DialogTitle className="mt-3 text-2xl font-extrabold text-primary-foreground sm:text-3xl">Vai viajar para os Estados Unidos?</DialogTitle>
            <DialogDescription className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-brand-blue-light sm:text-base">
              Você pode adicionar o Guia de Aprovação de Vistos para os EUA por R$17 e chegar mais preparado à entrevista consular.
            </DialogDescription>
          </div>
          <div className="grid gap-4 bg-brand-ice p-4 sm:p-6 md:grid-cols-2">
            <article className="flex flex-col rounded-md border border-border bg-background p-5 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Opção 1</p>
              <h3 className="mt-3 text-xl font-extrabold text-primary">Guia de Sobrevivência 50+</h3>
              <p className="mt-5 text-4xl font-black text-primary">R$47</p>
              <Button asChild className="mt-auto min-h-12 whitespace-normal rounded-md font-bold uppercase">
                <a href={CHECKOUT.bst1} onClick={(event) => chooseOffer(event, "single")}>Quero apenas o Guia 50+</a>
              </Button>
            </article>
            <article className="relative flex flex-col overflow-hidden rounded-md border-2 border-accent bg-background p-5 shadow-elevated">
              <p className="-mx-5 -mt-5 mb-5 bg-accent px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground">Adicione por apenas R$17</p>
              <div className="grid grid-cols-[minmax(0,1fr)_5rem] gap-4">
                <div>
                  <h3 className="text-lg font-extrabold leading-snug text-primary">Guia 50+ + Guia de Aprovação de Vistos</h3>
                  <p className="mt-4 text-sm text-muted-foreground">Guia 50+ R$47<br />Guia de Vistos + R$17</p>
                </div>
                <img src={vistoGuideImg} alt="Guia de Aprovação de Vistos para os EUA" className="aspect-[4/5] w-20 rounded-md object-cover shadow-md" />
              </div>
              <p className="my-4 border-t border-border pt-3 text-right text-4xl font-black text-primary">R$64</p>
              <Button asChild className="min-h-12 whitespace-normal rounded-md bg-accent font-bold uppercase text-accent-foreground hover:bg-accent/90">
                <a href={CHECKOUT.comboBst1Bst4} onClick={(event) => chooseOffer(event, "combo")}>Quero os 2 Guias por R$64</a>
              </Button>
              <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">Material educacional de preparação. A decisão sobre qualquer visto pertence exclusivamente à autoridade consular competente.</p>
            </article>
            <LegalConsent action="pagamento" className="md:col-span-2" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

const identification = [
  "Cheguei à imigração. O que eu respondo?",
  "Como pergunto onde estão minhas malas?",
  "Como faço o check-in no hotel?",
  "Como peço alguma coisa no restaurante?",
  "Como digo que não entendi?",
  "Como converso com filhos ou netos que vivem fora?",
];

const steps = [
  { n: "01", title: "Leia e entenda", text: "Abra o guia e encontre as frases organizadas por situação. Cada uma vem acompanhada de tradução e apoio de pronúncia.", img: step1Img },
  { n: "02", title: "Pratique com a IA Memorizaê", text: "Use os flashcards para reencontrar as frases e praticá-las antes de precisar delas.", img: step2ImgAsset.url },
  { n: "03", title: "Pratique a fala com a IA Falaê", text: "Leia a frase, grave sua voz e use o retorno da ferramenta para continuar praticando a pronúncia.", img: step3Img },
];

const deliverables = [
  { icon: Luggage, title: "Guia Digital de Sobrevivência 50+", text: "55 frases práticas organizadas por situações de viagem e convivência, com tradução e apoio de pronúncia." },
  { icon: Headphones, title: "IA Memorizaê", text: "Flashcards para revisar e reencontrar as frases do guia." },
  { icon: Mic2, title: "IA Falaê", text: "Ferramenta para praticar em voz alta e receber retorno sobre sua pronúncia." },
  { icon: Smartphone, title: "Acesso pelo App Falaê Brasil", text: "Guia e recursos reunidos em um ambiente simples para acessar pelo celular." },
];

const situations = [
  { icon: Plane, title: "Aeroporto e imigração" },
  { icon: Luggage, title: "Voo" },
  { icon: Hotel, title: "Hotel" },
  { icon: Utensils, title: "Restaurante" },
  { icon: ShoppingBag, title: "Compras" },
  { icon: TrainFront, title: "Transporte" },
  { icon: MessageCircleMore, title: "Familiares e netos" },
];

const alsoIncludes = [
  ["Reencontro com familiares e netos", "Frases para momentos de convivência e carinho com familiares que vivem fora."],
  ["Pronúncia escrita para brasileiros", "Uma aproximação em português para ajudar você a começar a reproduzir os sons."],
  ["Consulta organizada por situação", "Encontre mais rapidamente a parte relacionada ao momento que está vivendo."],
] as const;

const forYou = [
  "tem 50 anos ou mais e quer mais autonomia em viagens",
  "quer ter frases importantes disponíveis no celular",
  "prefere exemplos práticos a longas explicações de gramática",
  "tem familiares ou netos que vivem fora do Brasil",
  "quer praticar antes da viagem sem entrar agora em um curso completo",
  "prefere uma ferramenta simples e em português",
];

const accessSteps = [
  ["1", "Faça sua compra", "Escolha seu pedido e finalize o pagamento no ambiente seguro do Asaas."],
  ["2", "Receba seu acesso", "Depois da confirmação, receba as informações de acesso."],
  ["3", "Comece a usar", "Abra o guia e comece pelas situações que mais fazem sentido para você."],
] as const;

const faq = [
  ["Preciso saber inglês para usar?", "Não. O guia apresenta cada frase em inglês com tradução e apoio de pronúncia escrito para brasileiros."],
  ["Eu não entendo muito de tecnologia. Vou conseguir acessar?", "Sim. O guia e as ferramentas ficam reunidos no App Falaê Brasil, em um ambiente simples para acessar pelo celular."],
  ["O acesso é imediato?", "O acesso é enviado depois da confirmação do pagamento. O tempo de confirmação pode variar conforme a forma escolhida."],
  ["Funciona para pessoas com mais de 60 ou 70 anos?", "Sim. O material foi pensado para o público 50+ e pode ser usado por pessoas de outras faixas etárias que prefiram uma consulta simples e prática."],
  ["Como funciona a garantia?", "Você tem 7 dias depois da compra para conhecer o material e solicitar o cancelamento pelos canais informados pela Falaê Brasil."],
  ["Isso é um curso completo de inglês?", "Não. O Guia de Sobrevivência 50+ foi criado para situações específicas de viagem e convivência. Ele reúne frases práticas e ferramentas de apoio para consulta e prática. Se você procura um estudo contínuo e mais amplo do idioma, a Falaê Brasil também possui outras opções."],
  ["Preciso decorar as 55 frases?", "Não. Você pode começar pelas situações que mais têm relação com sua viagem e usar o guia também como material de consulta."],
] as const;

function Section({ children, tone = "light", className = "" }: { children: React.ReactNode; tone?: "light" | "dark" | "soft"; className?: string }) {
  const toneClass = tone === "dark" ? "bg-brand-navy text-primary-foreground" : tone === "soft" ? "bg-brand-ice text-foreground" : "bg-background text-foreground";
  return <section className={`${toneClass} px-5 py-16 sm:py-24 ${className}`}><div className="mx-auto w-full max-w-6xl">{children}</div></section>;
}

function SectionHeading({ eyebrow, title, dark = false }: { eyebrow?: string; title: string; dark?: boolean }) {
  return <div className="mx-auto max-w-3xl text-center">
    {eyebrow ? <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">{eyebrow}</p> : null}
    <h2 className={`mt-3 text-3xl font-black leading-tight sm:text-4xl ${dark ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
  </div>;
}

function ConversationCard({ eyebrow, title, prompt, translation, answer, answerTranslation, pronunciation }: { eyebrow: string; title: string; prompt: string; translation?: string; answer?: string; answerTranslation?: string; pronunciation?: string }) {
  return <article className="overflow-hidden rounded-md border border-border bg-background shadow-elevated">
    <div className="bg-brand-navy px-5 py-4 text-primary-foreground">
      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
      <h3 className="mt-2 text-xl font-extrabold text-primary-foreground sm:text-2xl">{title}</h3>
    </div>
    <div className="space-y-4 p-5 sm:p-7">
      <div className="mr-5 rounded-md bg-brand-ice p-4"><p className="text-lg font-bold text-primary">{prompt}</p>{translation ? <p className="mt-1 text-sm text-muted-foreground">({translation})</p> : null}</div>
      {answer ? <div className="ml-5 rounded-md border-l-4 border-accent bg-secondary p-4"><p className="text-lg font-bold text-primary">{answer}</p>{answerTranslation ? <p className="mt-1 text-sm text-muted-foreground">({answerTranslation})</p> : null}{pronunciation ? <p className="mt-3 border-t border-border pt-3 text-sm font-semibold text-foreground">Pronúncia: {pronunciation}</p> : null}</div> : null}
    </div>
  </article>;
}

function OfferCard() {
  return <div className="mx-auto max-w-3xl overflow-hidden rounded-md border-2 border-accent bg-background shadow-elevated">
    <div className="bg-brand-navy px-6 py-8 text-center text-primary-foreground">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">Oferta simples</p>
      <h2 className="mt-3 text-3xl font-black text-primary-foreground sm:text-4xl">Tenha o Guia de Sobrevivência 50+ no seu celular.</h2>
    </div>
    <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary">Você recebe</p>
        <ul className="mt-4 space-y-3">
          {["Guia Digital com 55 frases", "IA Memorizaê", "IA Falaê", "Acesso pela Biblioteca BST no App Falaê Brasil", "Recursos complementares já existentes no produto"].map((item) => <li key={item} className="flex gap-3 text-base leading-relaxed"><Check className="mt-1 h-5 w-5 flex-none text-accent" /><span>{item}</span></li>)}
        </ul>
      </div>
      <div className="text-center md:min-w-64">
        <p className="text-sm font-semibold text-muted-foreground">Pagamento único</p>
        <p className="mt-1 text-6xl font-black text-primary">R$47</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Sem mensalidade<br />Acesso após confirmação<br />Garantia de 7 dias</p>
      </div>
      <div className="md:col-span-2"><PurchaseButton full /></div>
    </div>
  </div>;
}

function Bst1Page() {
  return <div className="bst1-page min-h-screen bg-background font-sans text-foreground">
    <header className="border-b border-primary-foreground/10 bg-brand-navy px-5 py-3 text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue-light sm:text-xs">Brasil Sem Trava • Guia de Sobrevivência 50+</p>
        <a href="https://falaebrasil.com.br" className="flex-none text-[10px] font-bold uppercase text-accent underline-offset-4 hover:underline">Site principal</a>
      </div>
    </header>

    <main>
      <section className="relative overflow-hidden bg-brand-navy px-5 py-14 text-primary-foreground sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative z-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">Brasil Sem Trava • Guia de Sobrevivência 50+</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">55 frases para se virar em inglês nas situações que mais aparecem em uma viagem.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-blue-light">Aeroporto, imigração, voo, hotel, restaurante, compras, transporte e reencontro com familiares: tenha no celular frases prontas com tradução, pronúncia e prática para consultar quando precisar.</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">Feito especialmente para quem passou dos 50 e não quer fazer um curso inteiro antes de conseguir pedir informação, fazer check-in, pedir comida ou conversar com a família.</p>
            <div className="mt-8"><PurchaseButton /></div>
            <p className="mt-4 text-sm text-brand-blue-light">Pagamento único • Acesso após confirmação • Garantia de 7 dias</p>
          </div>
          <div className="relative mx-auto w-full max-w-xl pb-8">
            <img src={heroMockupAsset.url} alt="Guia de Sobrevivência 50+ disponível no celular para consulta durante viagens" className="aspect-[4/3] w-full rounded-md object-cover shadow-elevated" />
            <div className="relative -mt-12 ml-auto mr-3 w-[88%] max-w-sm rounded-md border border-accent/50 bg-background p-5 text-foreground shadow-elevated sm:mr-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-accent">No balcão da imigração</p>
              <p className="mt-3 text-lg font-extrabold text-primary">Sightseeing and visiting family.</p>
              <p className="mt-1 text-sm text-muted-foreground">Turismo e visitar a família.</p>
              <p className="mt-3 border-t border-border pt-3 text-sm font-semibold">Sait-sí-in end ví-zi-tin fé-mi-li.</p>
            </div>
          </div>
        </div>
      </section>

      <Section tone="soft">
        <SectionHeading eyebrow="Situações reais" title="Talvez o problema não seja a viagem. É não saber o que dizer quando chegar lá." />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{identification.map((item) => <div key={item} className="flex items-start gap-3 rounded-md border border-border bg-background p-5 shadow-soft"><ChevronRight className="mt-1 h-5 w-5 flex-none text-accent" /><p className="text-base font-semibold leading-relaxed text-primary">{item}</p></div>)}</div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed">Você não precisa dominar o inglês para lidar melhor com essas situações. Precisa ter algumas frases importantes disponíveis quando elas acontecerem.</p>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">Aeroporto e imigração</p><h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">Quando chega sua vez no balcão, não dá tempo de procurar uma aula de inglês.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">O guia mostra a situação, o que pode ser perguntado e uma resposta curta que você pode entender, praticar e adaptar.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-md bg-brand-navy p-5 text-primary-foreground"><p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-blue-light">Sem saber o que pode ser perguntado</p><p className="mt-5 text-lg font-bold">Oficial: “What is the purpose of your visit?”</p><div className="mt-5 space-y-2 border-l-2 border-accent pl-4 text-base text-primary-foreground/75"><p>“Purpose?”</p><p>“O que ele perguntou?”</p><p>“Como respondo?”</p></div></article>
            <ConversationCard eyebrow="Com uma resposta praticada" title="Uma frase disponível" prompt="What is the purpose of your visit?" translation="Qual o motivo da sua visita?" answer="Sightseeing and visiting family." answerTranslation="Turismo e visitar a família." pronunciation="Sait-sí-in end ví-zi-tin fé-mi-li." />
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="Uma solução menor e mais direta" title="O inglês da viagem é menor do que parece." dark />
        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-brand-blue-light"><p>Você não precisa aprender milhares de palavras para lidar com as situações mais comuns de uma viagem.</p><p>Grande parte desses momentos se repete: check-in, imigração, hotel, restaurante, compras, transporte e pedidos de informação.</p><p className="font-semibold text-primary-foreground">Por isso, o Guia de Sobrevivência 50+ começa justamente por essas situações.</p></div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Abra, encontre, pratique" title="Como usar o Guia de Sobrevivência 50+" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">{steps.map((step) => <article key={step.n} className="overflow-hidden rounded-md border border-border bg-background shadow-soft"><img src={step.img} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" /><div className="p-6"><p className="text-4xl font-black text-accent">{step.n}</p><h3 className="mt-3 text-xl font-extrabold text-primary">{step.title}</h3><p className="mt-3 text-base leading-relaxed text-muted-foreground">{step.text}</p></div></article>)}</div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="Mais do que um PDF para ler" title="Você recebe o guia e ferramentas para praticar o que encontrou nele." dark />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">{deliverables.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-md border border-primary-foreground/10 bg-card/10 p-6"><Icon className="h-8 w-8 text-accent" /><h3 className="mt-5 text-xl font-extrabold text-primary-foreground">{title}</h3><p className="mt-3 text-base leading-relaxed text-brand-blue-light">{text}</p></article>)}</div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <article className="overflow-hidden rounded-md border border-border bg-background shadow-elevated"><div className="bg-brand-navy px-5 py-4"><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent">No hotel</p><h3 className="mt-2 text-xl font-extrabold text-primary-foreground sm:text-2xl">Você não precisa formar uma frase perfeita para resolver uma situação simples.</h3></div><div className="p-6"><p className="text-lg font-bold text-primary">Abra a parte do guia dedicada ao hotel.</p><p className="mt-3 leading-relaxed text-muted-foreground">Localize a situação, consulte o inglês, confira a tradução e use o apoio de pronúncia antes de falar.</p><div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-extrabold uppercase text-primary"><span className="rounded-md bg-brand-ice p-3">Inglês</span><span className="rounded-md bg-brand-ice p-3">Tradução</span><span className="rounded-md bg-brand-ice p-3">Pronúncia</span></div></div></article>
          <div><p className="text-lg leading-relaxed text-muted-foreground">Em uma reserva não localizada ou no momento de fazer o check-in, uma frase curta pode ajudar a iniciar a conversa e mostrar o que você precisa.</p><img src={coupleImg} alt="Casal 50+ viajando com malas" loading="lazy" className="mt-6 aspect-[16/9] w-full rounded-md object-cover shadow-elevated" /></div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Consulta por situação" title="Onde o guia pode ajudar" />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{situations.map(({ icon: Icon, title }) => <article key={title} className="rounded-md border border-border bg-background p-5 text-center shadow-soft"><Icon className="mx-auto h-7 w-7 text-accent" /><h3 className="mt-3 text-base font-extrabold text-primary">{title}</h3></article>)}</div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">Uma frase de apoio</p><h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">E se a pessoa falar rápido e você não entender?</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Nem toda frase serve para responder uma pergunta. Algumas existem justamente para ganhar tempo, pedir repetição e manter a conversa acontecendo.</p></div><ConversationCard eyebrow="Peça para falar mais devagar" title="Uma frase para manter a conversa" prompt="Could you speak a little slower, please?" translation="Pode falar mais devagar, por favor?" pronunciation="Cúd iú spík a lí-tol sló-uer, plíz?" /></div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="Recursos complementares" title="O guia também inclui" dark />
        <div className="mt-10 grid gap-5 md:grid-cols-3">{alsoIncludes.map(([title, text]) => <article key={title} className="border-l-2 border-accent bg-card/10 p-6"><h3 className="text-lg font-extrabold uppercase text-primary-foreground">{title}</h3><p className="mt-3 leading-relaxed text-brand-blue-light">{text}</p></article>)}</div>
      </Section>

      <Section tone="soft">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_.9fr]"><div><h2 className="text-3xl font-black text-primary sm:text-4xl">Este guia faz sentido para você se...</h2><ul className="mt-7 space-y-4">{forYou.map((item) => <li key={item} className="flex gap-3 text-lg leading-relaxed"><Check className="mt-1 h-6 w-6 flex-none text-accent" /><span>{item}</span></li>)}</ul></div><img src={step1Img} alt="Mulher 50+ consultando o celular durante uma viagem" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover shadow-elevated" /></div>
      </Section>

      <Section><OfferCard /></Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Compra e entrega" title="Como você recebe e começa a usar" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">{accessSteps.map(([n, title, text]) => <article key={n} className="text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-black text-primary-foreground">{n}</div><h3 className="mt-4 text-xl font-extrabold text-primary">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
      </Section>

      <Section tone="dark">
        <div className="grid items-center gap-10 md:grid-cols-[.8fr_1.2fr]"><img src={joisImg} alt="Teacher Jóis Alaby, criador da linha Brasil Sem Trava" loading="lazy" className="mx-auto w-full max-w-sm rounded-md object-cover shadow-elevated" /><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">Quem está por trás do Brasil Sem Trava</p><h2 className="mt-3 text-3xl font-black text-primary-foreground sm:text-4xl">Teacher Jóis Alaby</h2><div className="mt-6 space-y-4 text-lg leading-relaxed text-brand-blue-light"><p>O Teacher Jóis Alaby é professor e criador da Falaê Brasil e da linha Brasil Sem Trava.</p><p>Os Guias BST nasceram de uma ideia simples: nem toda dificuldade com inglês exige começar por um curso completo. Algumas situações pedem uma solução muito mais direta.</p><p>O Guia de Sobrevivência 50+ foi criado justamente para reunir frases úteis de viagem e convivência em um formato simples de consultar e praticar.</p></div></div></div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center"><Globe2 className="mx-auto h-10 w-10 text-accent" /><h2 className="mt-5 text-3xl font-black text-primary sm:text-4xl">Você não precisa resolver todo o seu inglês antes da próxima viagem.</h2><p className="mx-auto mt-6 max-w-2xl whitespace-pre-line text-lg leading-relaxed text-muted-foreground">Comece pelo que provavelmente vai precisar primeiro.{"\n"}Tenha as frases no celular.{"\n"}Entenda o que significam.{"\n"}Pratique antes de viajar.{"\n"}E consulte quando precisar.</p><div className="mt-8"><PurchaseButton /></div></div>
      </Section>

      <Section tone="soft">
        <div className="mx-auto max-w-3xl rounded-md border border-accent bg-background p-7 text-center shadow-soft sm:p-10"><div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-accent text-4xl font-black text-primary">7</div><h2 className="mt-5 text-3xl font-black text-primary">7 dias para conhecer o material</h2><p className="mt-4 text-lg leading-relaxed text-muted-foreground">Depois da compra, você tem 7 dias de garantia. Se decidir que o produto não é para você, solicite o cancelamento pelos canais informados pela Falaê Brasil dentro desse período.</p></div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Dúvidas comuns" title="Perguntas frequentes" />
        <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">{faq.map(([q, a]) => <AccordionItem key={q} value={q}><AccordionTrigger className="py-5 text-left text-base font-bold text-primary sm:text-lg">{q}</AccordionTrigger><AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion>
      </Section>

      <Section tone="dark">
        <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">Brasil Sem Trava</p><h2 className="mt-4 text-3xl font-black text-primary-foreground sm:text-5xl">Leve uma pequena caixa de ferramentas de inglês prático na sua próxima viagem.</h2><p className="mt-5 text-lg leading-relaxed text-brand-blue-light">55 frases organizadas para consultar, reconhecer, praticar e usar quando precisar.</p><div className="mt-8"><PurchaseButton label="Quero o Guia de Sobrevivência 50+" /><LegalConsent action="compra" dark className="mt-4" /></div></div>
      </Section>

      <ContactSection />
    </main>

    <footer className="bg-brand-navy px-5 py-10 text-center text-sm text-brand-blue-light">
      <p className="font-extrabold uppercase tracking-[0.2em] text-accent">Brasil Sem Trava</p>
      <p className="mt-3">FalaeBrasil.com.br</p>
      <p className="mt-2">IBOX Centro de Idiomas Ltda. • CNPJ 18.656.810/0001-66</p>
      <p className="mt-5"><a className="underline-offset-4 hover:underline" href="mailto:atendimento@falaebrasil.com.br">atendimento@falaebrasil.com.br</a></p>
      <LegalLinks className="mt-5 flex flex-wrap justify-center gap-5" />
      <p className="mt-5 text-xs opacity-75">Copyright © Brasil Sem Trava — Guia de Sobrevivência 50+ — 2026. Todos os direitos reservados.</p>
    </footer>
  </div>;
}

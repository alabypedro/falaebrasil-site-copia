import { createFileRoute } from "@tanstack/react-router";
import { useState, type MouseEvent } from "react";
import {
  Brain,
  Check,
  CheckCircle2,
  Clock3,
  Headphones,
  LockKeyhole,
  MessageCircle,
  Mic2,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
  Snail,
  Sparkles,
  Volume2,
  X,
} from "lucide-react";

import logo from "@/assets/logo-falae.png";
import joisAlaby from "@/assets/jois-alaby-new.png";
import destravaCover from "@/assets/bst-step2.png.asset.json";
import survivalGuideCover from "@/assets/bst-hero-mockup.png.asset.json";
import visaGuideCover from "@/assets/bst4-produto.jpg";
import memorizaeMockup from "@/assets/bst-step2.png.asset.json";
import falaeMockup from "@/assets/bst-step3.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { LegalConsent, LegalLinks } from "@/components/LegalLinks";
import { Testimonials } from "@/components/Testimonials";
import { CHECKOUT, WHATSAPP_SUPORTE_DESTRAVA } from "@/lib/checkout";
import { trackCheckoutAndNavigate } from "@/lib/pixel";

export const Route = createFileRoute("/bst5")({
  head: () => ({
    meta: [
      { title: "Destrava Falaê | Falaê Brasil! Inglês Transversal" },
      {
        name: "description",
        content:
          "Entende inglês, mas trava na hora de responder? Pratique respostas prontas, roteiros de conversação e sua fala com IA no Destrava Falaê.",
      },
      { property: "og:title", content: "Destrava Falaê | Falaê Brasil! Inglês Transversal" },
      {
        property: "og:description",
        content:
          "Entende inglês, mas trava na hora de responder? Pratique respostas prontas, roteiros de conversação e sua fala com IA no Destrava Falaê.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DestravaFalaePage,
});

const features = [
  ["Pack de Respostas Prontas", "45 respostas organizadas por situação.", "Para ganhar tempo, pedir repetição, confirmar, contornar uma palavra esquecida, começar uma resposta, corrigir o que falou, continuar e encerrar conversas."],
  ["18 Roteiros de Conversação", "Conversas curtas para situações como:", "conhecer alguém • falar sobre você • pedir repetição • dar opinião • esquecer uma palavra • restaurante • hotel • pedir informação • falar com estrangeiros no Brasil • manter e encerrar uma conversa"],
  ["Checklist Não Trave", "Consulta rápida para abrir no celular quando precisar falar inglês.", ""],
  ["IA Memorizaê", "Acesso aos flashcards específicos do Destrava Falaê.", ""],
  ["IA Falaê", "Acesso aos exercícios de voz.", "O aluno grava, recebe reconhecimento da fala e avaliação automática em PDF por e-mail."],
  ["Plano de Uso de 7 Dias", "Uma sequência simples:", "Poucas frases por dia. Ouvir. Repetir. Gravar. Usar."],
] as const;

const practice = [
  [Brain, "Ganhar tempo", "Saiba o que dizer enquanto organiza a resposta."],
  [Headphones, "Pedir repetição", "Não finja que entendeu quando não entendeu."],
  [Snail, "Pedir para falar mais devagar", "Continue a conversa mesmo quando a velocidade atrapalhar."],
  [MessageCircle, "Começar a resposta", "Use começos simples como “I think...” e “For me...”."],
  [RefreshCcw, "Se corrigir", "Errou? Tente novamente e continue."],
  [Sparkles, "Contornar palavras esquecidas", "Explique a palavra sem precisar saber exatamente como ela se chama."],
  [MessageCircle, "Manter a conversa viva", "Faça perguntas simples."],
  [CheckCircle2, "Confirmar o que entendeu", "Cheque a informação antes de seguir."],
] as const;

const faqs = [
  ["Eu preciso ser iniciante?", "Não. O Destrava Falaê foi pensado principalmente para quem já teve algum contato com inglês, mas sente dificuldade para transformar o que sabe em resposta falada."],
  ["Isso é um curso completo de inglês?", "Não. O Destrava Falaê resolve um problema específico: ajudar você a continuar uma conversa quando faltar uma palavra, uma resposta ou alguns segundos para pensar."],
  ["Eu vou ter acesso ao curso completo da Falaê Brasil?", "Não. Sua compra libera apenas o conteúdo incluído no Destrava Falaê e os recursos de IA ligados a ele. Outros produtos e cursos podem aparecer na plataforma, mas permanecem bloqueados quando não estiverem incluídos na sua compra."],
  ["O que é o IA Memorizaê?", "É a ferramenta de flashcards usada para ouvir, repetir e praticar as frases do Destrava Falaê."],
  ["O que é o IA Falaê?", "É a ferramenta em que você pratica as frases com sua própria voz. Você grava, o sistema utiliza reconhecimento de voz e a avaliação da sua prática é gerada automaticamente."],
  ["Preciso participar de aula ao vivo?", "Não para usar o Destrava Falaê. O produto foi criado para ser usado no seu ritmo."],
  ["Vou ficar fluente com este produto?", "O Destrava Falaê não promete fluência. Ele foi criado para uma tarefa menor: ajudar você a reagir e continuar falando em situações nas quais normalmente ficaria sem resposta."],
  ["Posso usar pelo celular?", "Sim. O conteúdo e as ferramentas podem ser utilizados pela plataforma Falaê Brasil em dispositivos compatíveis."],
  ["O acesso é imediato?", "Sim. Após a confirmação do pagamento, você recebe por e-mail as orientações de acesso e pode começar a utilizar o Destrava Falaê."],
  ["Por quanto tempo terei acesso?", "Você terá 1 ano de acesso ao Destrava Falaê, incluindo o conteúdo adquirido e os recursos do IA Memorizaê e IA Falaê liberados especificamente para este produto."],
  ["E se eu não gostar?", "Você possui garantia incondicional de 7 dias. Dentro desse prazo, pode solicitar o reembolso pelos canais de suporte e receber de volta 100% do valor pago, conforme as condições da oferta."],
] as const;

function PurchaseButton({ children }: { children: string }) {
  const [open, setOpen] = useState(false);
  const [includeBst1, setIncludeBst1] = useState(false);
  const [includeBst4, setIncludeBst4] = useState(false);

  const openOffer = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  const total = 47 + (includeBst1 ? 27 : 0) + (includeBst4 ? 17 : 0);
  const productCount = 1 + Number(includeBst1) + Number(includeBst4);
  const selectionId = includeBst1
    ? includeBst4
      ? "COMBO_BST5_BST1_BST4"
      : "COMBO_BST5_BST1"
    : includeBst4
      ? "COMBO_BST5_BST4"
      : "BST5";
  const checkoutHref = includeBst1
    ? includeBst4
      ? CHECKOUT.comboBst5Bst1Bst4
      : CHECKOUT.comboBst5Bst1
    : includeBst4
      ? CHECKOUT.comboBst5Bst4
      : CHECKOUT.destravaFalae;
  const checkoutLabel = productCount === 1
    ? "Continuar com o Destrava Falaê por R$47"
    : `Levar os ${productCount} Guias por R$${total}`;

  const startCheckout = (event: MouseEvent<HTMLAnchorElement>) => {
    trackCheckoutAndNavigate(event, selectionId);
  };

  const changeOpen = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setIncludeBst1(false);
      setIncludeBst4(false);
    }
  };

  return (
    <>
      <Button asChild size="lg" className="df-pulse min-h-14 w-full max-w-xl whitespace-normal rounded-full px-7 py-4 text-center text-sm font-extrabold uppercase sm:text-base">
        <a href={CHECKOUT.destravaFalae} onClick={openOffer}>{children}</a>
      </Button>

      <Dialog open={open} onOpenChange={changeOpen}>
        <DialogContent className="max-h-[94vh] w-[calc(100vw-1.5rem)] max-w-3xl gap-0 overflow-y-auto border-0 p-0">
          <div className="bg-brand-navy px-5 pb-5 pt-7 text-center sm:px-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent">Antes de continuar</p>
            <DialogTitle className="mt-3 text-2xl font-extrabold leading-tight text-primary-foreground sm:text-3xl">
              Antes de continuar, quer aproveitar e levar mais algum Guia?
            </DialogTitle>
            <DialogDescription className="mx-auto mt-3 max-w-2xl leading-relaxed text-brand-blue-light">
              Você já escolheu o Destrava Falaê. Agora pode adicionar outros Guias Brasil Sem Trava por um valor especial.
            </DialogDescription>
          </div>

          <div className="space-y-4 bg-brand-ice p-4 sm:p-6">
            <article className="grid grid-cols-[4.5rem_minmax(0,1fr)_auto] items-center gap-3 rounded-lg border border-border bg-background p-3 shadow-soft sm:grid-cols-[5.5rem_minmax(0,1fr)_auto] sm:p-4">
              <img src={destravaCover.url} alt="Destrava Falaê" className="aspect-[4/5] w-full rounded-md object-cover" />
              <div className="min-w-0">
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-accent">Produto principal</p>
                <h3 className="mt-1 text-base font-extrabold text-primary sm:text-lg">Destrava Falaê</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">Respostas prontas para quando o inglês some na hora de falar.</p>
              </div>
              <strong className="text-xl text-primary sm:text-2xl">R$47</strong>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className={`cursor-pointer rounded-lg border-2 bg-background p-4 shadow-soft transition-colors ${includeBst1 ? "border-accent" : "border-border"}`}>
                <div className="flex gap-3">
                  <img src={survivalGuideCover.url} alt="Guia de Sobrevivência 50+" className="h-24 w-20 flex-none rounded-md object-cover" />
                  <div className="min-w-0">
                    <h3 className="text-base font-extrabold leading-snug text-primary">Guia de Sobrevivência 50+</h3>
                    <p className="mt-1 text-xl font-black text-accent">+ R$27</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Frases práticas para viagens e situações do cotidiano, especialmente para quem quer mais autonomia fora do Brasil.</p>
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <Checkbox checked={includeBst1} onCheckedChange={(checked) => setIncludeBst1(checked === true)} aria-label="Adicionar Guia de Sobrevivência 50+" />
                  <span className="text-sm font-extrabold uppercase text-primary">Adicionar por + R$27</span>
                </div>
              </label>

              <label className={`cursor-pointer rounded-lg border-2 bg-background p-4 shadow-soft transition-colors ${includeBst4 ? "border-accent" : "border-border"}`}>
                <div className="flex gap-3">
                  <img src={visaGuideCover} alt="Guia de Vistos para os EUA" className="h-24 w-20 flex-none rounded-md object-cover" />
                  <div className="min-w-0">
                    <h3 className="text-base font-extrabold leading-snug text-primary">Guia de Vistos para os EUA</h3>
                    <p className="mt-1 text-xl font-black text-accent">+ R$17</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Material de preparação para situações comuns da entrevista consular.</p>
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <Checkbox checked={includeBst4} onCheckedChange={(checked) => setIncludeBst4(checked === true)} aria-label="Adicionar Guia de Vistos para os EUA" />
                  <span className="text-sm font-extrabold uppercase text-primary">Adicionar por + R$17</span>
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">Material educacional de preparação. A decisão sobre qualquer visto pertence exclusivamente à autoridade consular competente.</p>
              </label>
            </div>

            <div className="rounded-lg bg-brand-navy p-4 text-primary-foreground sm:p-5">
              {includeBst1 && includeBst4 ? <p className="mb-3 w-fit rounded-full bg-accent px-3 py-1 text-xs font-extrabold uppercase text-accent-foreground">Melhor combinação</p> : null}
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-blue-light">Seu pedido</p>
              <div className="mt-3 space-y-2 text-sm">
                <p className="flex justify-between gap-4"><span>Destrava Falaê</span><strong>R$47</strong></p>
                {includeBst1 ? <p className="flex justify-between gap-4"><span>Guia 50+</span><strong>+ R$27</strong></p> : null}
                {includeBst4 ? <p className="flex justify-between gap-4"><span>Guia de Vistos</span><strong>+ R$17</strong></p> : null}
              </div>
              <div className="mt-4 flex items-end justify-between border-t border-primary-foreground/20 pt-4">
                <span className="font-extrabold uppercase">Total</span>
                <strong className="text-3xl text-accent">R${total}</strong>
              </div>
              <Button asChild size="lg" className="mt-4 min-h-14 w-full whitespace-normal px-4 py-3 text-center text-sm font-extrabold uppercase">
                <a href={checkoutHref} onClick={startCheckout}>{checkoutLabel}</a>
              </Button>
              <LegalConsent action="pagamento" dark className="mt-4" />
              <DialogClose asChild>
                <Button variant="link" className="mt-2 w-full text-brand-blue-light">Continuar vendo a página</Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function TrustLine() {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground sm:text-sm">
      <span className="inline-flex items-center gap-1.5"><LockKeyhole className="h-4 w-4 text-accent" /> Compra segura</span>
      <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Acesso imediato</span>
      <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> Garantia de 7 dias</span>
      <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4 text-accent" /> 1 ano de acesso</span>
    </div>
  );
}

function SectionTitle({ eyebrow, title, dark = false }: { eyebrow?: string; title: string; dark?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent">{eyebrow}</p> : null}
      <h2 className={`mt-3 text-3xl font-extrabold leading-tight sm:text-4xl ${dark ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
    </div>
  );
}

type ConversationMoment = {
  label: string;
  prompt: string;
  thoughts?: readonly string[];
  response?: string;
  translation?: string;
  note: string;
  prepared?: boolean;
};

function ConversationCard({ moment }: { moment: ConversationMoment }) {
  return (
    <article className={`rounded-lg border p-6 sm:p-7 ${moment.prepared ? "border-accent bg-brand-navy text-primary-foreground shadow-elevated" : "border-border bg-secondary"}`}>
      <p className={`text-xs font-extrabold uppercase tracking-[0.14em] ${moment.prepared ? "text-accent" : "text-muted-foreground"}`}>{moment.label}</p>
      <div className={`mt-5 rounded-lg p-4 shadow-soft ${moment.prepared ? "bg-primary-foreground/10" : "bg-background"}`}>
        <div className="flex items-start gap-3">
          <MessageCircle className={`mt-0.5 h-5 w-5 flex-none ${moment.prepared ? "text-accent" : "text-muted-foreground"}`} />
          <p className={`text-lg font-bold ${moment.prepared ? "text-primary-foreground" : "text-primary"}`}>{moment.prompt}</p>
        </div>
      </div>
      {moment.thoughts ? (
        <div className="mt-5 space-y-2" aria-label="Pensamentos durante a conversa">
          {moment.thoughts.map((thought) => <p key={thought} className={`text-sm font-semibold ${moment.prepared ? "text-brand-blue-light" : "text-muted-foreground"}`}>{thought}</p>)}
        </div>
      ) : null}
      {moment.response ? (
        <div className="mt-5 rounded-lg border border-accent bg-background p-5 text-foreground shadow-soft">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-accent">Resposta</p>
          <p className="mt-2 text-xl font-extrabold leading-relaxed text-primary">{moment.response}</p>
          {moment.translation ? <p className="mt-2 text-sm text-muted-foreground">({moment.translation})</p> : null}
        </div>
      ) : (
        <p className="mt-5 text-4xl font-black text-muted-foreground" aria-label="Silêncio">...</p>
      )}
      <p className={`mt-5 leading-relaxed ${moment.prepared ? "text-brand-blue-light" : "text-foreground/75"}`}>{moment.note}</p>
    </article>
  );
}

function ConversationComparison({
  eyebrow,
  title,
  subtitle,
  moments,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  moments: readonly [ConversationMoment, ConversationMoment];
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-6xl">
      <SectionTitle eyebrow={eyebrow} title={title} dark={dark} />
      {subtitle ? <p className={`mx-auto mt-5 max-w-3xl text-center text-lg leading-relaxed ${dark ? "text-brand-blue-light" : "text-foreground/75"}`}>{subtitle}</p> : null}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {moments.map((moment) => <ConversationCard key={moment.label} moment={moment} />)}
      </div>
    </div>
  );
}

function DestravaFalaePage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative bg-gradient-corporate px-4 pb-20 pt-8 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <img src={logo} alt="Falaê Brasil! Inglês Transversal" className="mx-auto h-24 w-auto sm:h-32" />
          <div className="mx-auto mt-5 w-fit rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.16em] text-accent">
            Falaê Brasil! · Inglês para usar na vida real
          </div>
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.06fr_.94fr]">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                Você até entende inglês, mas na hora de responder, trava?
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-brand-blue-light sm:text-xl">
                Tenha respostas prontas para sair do branco, ganhar tempo e continuar uma conversa em inglês sem precisar montar cada frase inteira na cabeça.
              </p>
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-accent">Destrava Falaê</p>
              <p className="mt-3 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Um pack prático com frases, respostas, roteiros de conversação e treino com duas IAs para ajudar você a transformar o inglês que já conhece em fala.
              </p>
              <div className="mt-8 flex flex-col items-center lg:items-start">
                <PurchaseButton>Quero o Destrava Falaê por R$47</PurchaseButton>
                <TrustLine />
              </div>
            </div>
            <div className="relative mx-auto grid w-full max-w-lg grid-cols-2 items-end gap-4 pt-8" aria-label="Mockup do Destrava Falaê com flashcards e treino de fala">
              <div className="absolute inset-x-10 bottom-5 h-24 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative rotate-[-4deg] rounded-[2rem] border-[7px] border-primary-foreground/15 bg-background p-3 shadow-elevated">
                <div className="rounded-[1.35rem] bg-brand-ice p-4 text-left">
                  <div className="mx-auto h-1.5 w-12 rounded-full bg-primary/20" />
                  <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.12em] text-accent">IA Memorizaê</p>
                  <p className="mt-5 text-xs font-bold text-muted-foreground">Situação</p>
                  <p className="mt-1 text-sm font-semibold text-primary">Você não entendeu.</p>
                  <div className="mt-5 rounded-lg bg-background p-4 shadow-soft">
                    <Volume2 className="h-5 w-5 text-accent" />
                    <p className="mt-3 text-sm font-bold text-primary">Could you say that again, please?</p>
                  </div>
                  <div className="mt-6 h-2 rounded-full bg-primary/10"><div className="h-2 w-2/3 rounded-full bg-accent" /></div>
                  <p className="mt-3 text-center text-xs text-muted-foreground">Frase 6 de 10</p>
                </div>
              </div>
              <div className="relative translate-y-7 rotate-[4deg] rounded-[2rem] border-[7px] border-primary-foreground/15 bg-background p-3 shadow-elevated">
                <div className="rounded-[1.35rem] bg-brand-ice p-4 text-center">
                  <div className="mx-auto h-1.5 w-12 rounded-full bg-primary/20" />
                  <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.12em] text-accent">IA Falaê</p>
                  <p className="mt-6 text-sm font-bold text-primary">Grave sua resposta</p>
                  <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft">
                    <Mic2 className="h-8 w-8" />
                  </div>
                  <div className="mt-7 flex items-center justify-center gap-1" aria-hidden="true">
                    {[2, 5, 8, 4, 10, 6, 3].map((height, index) => <span key={`${height}-${index}`} className="w-1 rounded-full bg-accent" style={{ height: `${height * 2}px` }} />)}
                  </div>
                  <p className="mt-5 text-xs text-muted-foreground">Sua voz vira prática.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <div className="bg-brand-ice px-4 pb-16 text-center sm:pb-20">
        <p className="mx-auto max-w-4xl text-xs leading-relaxed text-muted-foreground">
          Depoimentos relacionados à experiência de aprendizagem e à abordagem do Teacher Jóis Alaby. Os resultados podem variar de acordo com a prática e dedicação de cada aluno.
        </p>
      </div>

      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="O problema" title="O problema não é simplesmente “não saber inglês”" />
          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/80">
            <p>Você lê uma frase e entende.</p><p>Assiste a um vídeo e pega alguma coisa.</p><p>Reconhece várias palavras.</p><p>Talvez já tenha estudado inglês durante anos.</p>
            <p className="font-bold text-primary">Só que alguém olha para você e pergunta alguma coisa em inglês.</p><p>E acontece aquilo.</p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-lg bg-brand-navy p-7 text-primary-foreground shadow-elevated">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">A cabeça começa:</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["“Eu sei isso.”", "“Como é mesmo?”", "“Qual verbo eu uso?”", "“Será que estou falando errado?”", "“Como monto essa frase?”"].map((item) => <p key={item} className="text-lg font-semibold">{item}</p>)}
            </div>
            <p className="mt-6 text-brand-blue-light">Enquanto você pensa, a conversa continua.</p><p className="mt-1 text-2xl font-extrabold text-accent">E você trava.</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl gap-3">
            {["Entendeu a pergunta, mas não conseguiu responder rápido.", "Sabia o que queria dizer em português, mas não conseguiu montar em inglês.", "Ficou tentando traduzir palavra por palavra.", "Esqueceu uma única palavra e perdeu a frase inteira.", "Pediu para a pessoa repetir, mas continuou sem saber como responder.", "Depois que a conversa terminou, pensou: “Eu sabia o que deveria ter falado.”"].map((item) => <div key={item} className="flex gap-3 rounded-lg border border-border bg-card p-4 shadow-soft"><X className="mt-0.5 h-5 w-5 flex-none text-destructive" /><p>{item}</p></div>)}
          </div>
          <div className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed"><p>Você não precisa resolver todo o seu inglês agora.</p><p className="mt-2">Precisa primeiro resolver o momento em que a conversa começa a escapar das suas mãos.</p><p className="mt-3 font-bold text-primary">É exatamente para isso que existe o Destrava Falaê.</p></div>
        </div>
      </section>

      <section className="bg-brand-ice px-4 py-20 sm:py-24">
        <ConversationComparison
          eyebrow="Na conversa real"
          title="Você sabe mais inglês do que consegue usar?"
          subtitle="O problema aparece naquele segundo em que alguém fala com você e sua cabeça começa a procurar palavras."
          moments={[
            {
              label: "Quando você tenta montar tudo na hora",
              prompt: "Where are you from?",
              thoughts: ["“Eu sei isso...”", "“Como eu começo?”", "“É I am? I live? I from?”", "“Espera...”"],
              note: "Você conhece palavras, mas perde tempo tentando construir a resposta enquanto a conversa já está acontecendo.",
            },
            {
              label: "Com uma resposta já praticada",
              prompt: "Where are you from?",
              response: "I’m from Brazil. I live in São Paulo.",
              translation: "Sou do Brasil. Moro em São Paulo.",
              note: "Você não precisa inventar tudo do zero. Usa uma estrutura que já conhece e adapta à sua realidade.",
              prepared: true,
            },
          ]}
        />
        <div className="mx-auto mt-14 max-w-4xl border-l-4 border-accent pl-6 sm:pl-8">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">É para isso que o Destrava Falaê existe.</h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">Em vez de começar pela gramática inteira do inglês, você começa pelas respostas que mais precisa ter disponíveis quando uma conversa acontece.</p>
          <p className="mt-5 font-bold text-primary">45 respostas prontas · 10 frases SOS · 18 diálogos curtos · Checklist Não Trave · IA Memorizaê · IA Falaê · plano de uso de 7 dias</p>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="O método" title="Três passos para ter uma saída quando o inglês trava" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              ["01", "Tenha respostas prontas", <>Você recebe frases para situações que fazem muita gente congelar:<br /><br />“Não entendi.”<br />“Pode repetir?”<br />“Pode falar mais devagar?”<br />“Deixa eu pensar.”<br />“Não sei essa palavra em inglês.”<br />“Deixa eu tentar de novo.”<br /><br /><strong>Em vez de começar a conversa do zero toda vez, você já tem uma saída.</strong></>],
              ["02", "Faça a frase ficar disponível na cabeça", <>No IA Memorizaê, você ouve, repete e pratica as frases em flashcards ligados às situações reais.<br /><br />Não é uma lista aleatória de palavras.<br /><br /><strong>É: situação → frase → repetição → uso</strong></>],
              ["03", "Coloque a frase na boca", <>No IA Falaê, você grava sua voz.<br /><br />A ferramenta reconhece sua fala e gera automaticamente sua avaliação.<br /><br /><strong>Você pratica sem precisar esperar uma aula ou alguém disponível para conversar.</strong></>],
            ].map(([n, title, text]) => <article key={String(n)} className="rounded-lg border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"><span className="text-4xl font-black text-accent">{n}</span><h3 className="mt-5 text-xl font-extrabold uppercase">{title}</h3><div className="mt-5 leading-relaxed text-foreground/75">{text}</div></article>)}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto w-fit rounded-full bg-secondary px-4 py-2 text-center text-xs font-extrabold uppercase tracking-[0.14em] text-primary">Isto não é um curso enorme de inglês</div>
          <SectionTitle title="É um pack para ajudar você a continuar falando quando der branco" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, lead, text], index) => <article key={title} className="rounded-lg border border-border bg-card p-6 shadow-soft"><span className="text-sm font-black text-accent">{index + 1}</span><h3 className="mt-3 text-xl font-bold uppercase">{title}</h3><p className="mt-4 font-semibold">{lead}</p>{text ? <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p> : null}</article>)}
          </div>
        </div>
      </section>

      <section className="bg-brand-ice px-4 py-20 sm:py-24">
        <ConversationComparison
          eyebrow="Uma resposta a tempo"
          title="O problema não é só entender. É conseguir responder a tempo."
          moments={[
            {
              label: "Antes da resposta",
              prompt: "Do you speak English?",
              thoughts: ["“Como eu digo que falo só um pouco?”", "“Little?”", "“A little?”", "“Eu sabia isso...”"],
              note: "A busca pela frase perfeita toma o tempo que a conversa não espera.",
            },
            {
              label: "Com o Destrava Falaê",
              prompt: "Do you speak English?",
              response: "A little. I’m still learning.",
              translation: "Um pouco. Ainda estou aprendendo.",
              note: "Uma resposta curta pode manter a conversa viva sem você precisar fazer uma frase complicada.",
              prepared: true,
            },
          ]}
        />
      </section>

      <section className="bg-brand-navy px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Prática real" title="Em vez de aprender “todo o inglês”, você pratica estas pequenas saídas" dark />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practice.map(([Icon, title, text]) => <article key={title} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-5"><Icon className="h-7 w-7 text-accent" /><h3 className="mt-4 text-lg font-bold text-primary-foreground">{title}</h3><p className="mt-2 leading-relaxed text-brand-blue-light">{text}</p></article>)}
          </div>
          <div className="mx-auto mt-10 max-w-3xl border-l-4 border-accent pl-6 text-xl leading-relaxed text-primary-foreground"><p>O objetivo é simples:</p><p className="mt-2 font-bold">não deixar uma palavra esquecida ou alguns segundos de dúvida encerrarem a conversa.</p></div>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-24">
        <ConversationComparison
          eyebrow="Uma frase de saída"
          title="E quando você não entende?"
          moments={[
            {
              label: "Sem uma frase de saída",
              prompt: "A outra pessoa fala algo rápido.",
              thoughts: ["“Não entendi.”", "“E agora?”"],
              note: "O silêncio ou um sorriso constrangido pode acabar encerrando a conversa.",
            },
            {
              label: "Com uma frase SOS",
              prompt: "A outra pessoa fala algo rápido.",
              response: "Could you say that again, please?",
              translation: "Você poderia dizer isso de novo, por favor?",
              note: "Você não precisa entender tudo para continuar participando da conversa. Também pode aprender o que dizer quando não entendeu.",
              prepared: true,
            },
          ]}
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent">Um exemplo do material</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">Abra. Escolha. Pratique. Use.</h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/75">Você encontra a frase, entende o significado, pratica e começa a deixá-la disponível para quando precisar.</p>
          </div>
          <article className="rounded-lg border border-border bg-card p-6 shadow-elevated sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">Inglês</p>
            <p className="mt-2 text-2xl font-extrabold text-primary">Let me think for a second.</p>
            <div className="my-6 border-t border-border" />
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">Tradução</p>
            <p className="mt-2 text-lg font-semibold">Deixe-me pensar por um segundo.</p>
            <p className="mt-5 rounded-lg bg-secondary p-4 text-sm leading-relaxed text-muted-foreground">Uma resposta curta para ganhar alguns segundos sem abandonar a conversa.</p>
          </article>
        </div>

        <div className="mx-auto mt-16 max-w-4xl bg-brand-navy p-7 text-primary-foreground shadow-elevated sm:p-10">
          <h2 className="text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl">Você não precisa resolver todo o seu inglês hoje.</h2>
          <div className="mt-6 space-y-3 text-lg leading-relaxed text-brand-blue-light">
            <p>O Destrava Falaê não é um curso completo de inglês.</p>
            <p>Ele foi criado para um problema muito específico: você entende alguma coisa, mas a resposta não aparece quando precisa falar.</p>
            <p>Então começamos por esse problema.</p>
            <p className="font-bold text-primary-foreground">Uma situação de cada vez.<br />Uma resposta de cada vez.<br />Uma conversa de cada vez.</p>
          </div>
          <div className="mt-8">
            <PurchaseButton>Quero destravar minhas respostas</PurchaseButton>
            <p className="mt-3 text-center text-sm font-bold text-accent">Pagamento único de R$47</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Treino com inteligência artificial" title="Você não recebe as frases e fica sozinho com elas" />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-lg border border-border bg-card shadow-soft">
              <img src={memorizaeMockup.url} alt="Flashcards do IA Memorizaê no celular" loading="lazy" className="aspect-[16/10] w-full object-cover" />
              <div className="p-7"><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">IA Memorizaê</p><h3 className="mt-2 text-2xl font-bold">Você treina com flashcards ligados exclusivamente ao conteúdo adquirido.</h3><div className="mt-6 space-y-4 rounded-lg bg-secondary p-5"><div><p className="text-xs font-bold uppercase text-muted-foreground">Situação</p><p>Você não entendeu o que a pessoa falou.</p><p className="mt-2 font-bold text-primary">Could you say that again, please?</p></div><div><p className="text-xs font-bold uppercase text-muted-foreground">Situação</p><p>Você precisa de alguns segundos.</p><p className="mt-2 font-bold text-primary">Let me think for a second.</p></div></div><p className="mt-5 font-semibold">Poucas frases. Repetição. Contexto.</p></div>
            </article>
            <article className="overflow-hidden rounded-lg border border-border bg-card shadow-soft">
              <img src={falaeMockup} alt="Pessoa praticando a fala com o IA Falaê" loading="lazy" className="aspect-[16/10] w-full object-cover" />
              <div className="p-7"><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">IA Falaê</p><h3 className="mt-2 text-2xl font-bold">Aqui a frase sai da tela e vai para a sua voz.</h3><ol className="mt-6 space-y-3">{["Ler e gravar.", "Ver a situação e responder sem a frase pronta.", "Responder dentro de uma pequena conversa."].map((item, index) => <li key={item} className="flex gap-3"><span className="font-black text-accent">{index + 1}.</span><span>{item}</span></li>)}</ol><p className="mt-6 leading-relaxed text-muted-foreground">Sua gravação passa pelo reconhecimento de voz e você recebe automaticamente sua avaliação em PDF por e-mail.</p><p className="mt-3 font-semibold">Sem precisar marcar horário para fazer esse treino.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-brand-ice px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl"><SectionTitle eyebrow="Para quem é" title="O Destrava Falaê é para você que:" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">{["entende mais inglês do que consegue falar;", "já estudou inglês, mas demora para encontrar as palavras;", "monta primeiro em português para depois tentar traduzir;", "fica nervoso quando precisa responder rápido;", "sente medo de errar e acabar se calando;", "quer usar inglês em viagens, trabalho, atendimento ou conversas com estrangeiros;", "não quer começar outro curso enorme só para resolver esse problema;", "quer praticar fala sem precisar esperar uma aula."].map((item) => <div key={item} className="flex gap-3 rounded-lg bg-background p-4 shadow-soft"><Check className="mt-0.5 h-5 w-5 flex-none text-success" /><p>{item}</p></div>)}</div>
          <blockquote className="mx-auto mt-10 max-w-3xl text-center text-2xl font-bold leading-snug text-primary">“Eu até sei alguma coisa. O problema é que na hora H não sai.”</blockquote><p className="mt-4 text-center text-lg">Este pack foi criado para esse aperto.</p>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl"><SectionTitle eyebrow="Recapitulando" title="Veja o que você recebe no Destrava Falaê" />
          <div className="mx-auto mt-10 grid max-w-3xl gap-3">{["Pack com 45 Respostas Prontas", "18 Roteiros de Conversação", "Checklist Não Trave", "Plano de Uso de 7 Dias", "Acesso restrito ao IA Memorizaê com os treinos do produto", "Acesso restrito ao IA Falaê com gravação e reconhecimento de voz", "Avaliação automática da prática enviada em PDF por e-mail", "Acesso ao conteúdo dentro da plataforma Falaê Brasil"].map((item) => <div key={item} className="flex items-start gap-3 border-b border-border py-3"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" /><p className="font-semibold">{item}</p></div>)}</div>
          <div className="mt-10 text-center"><p>Tudo isso por um pagamento único de:</p><p className="mt-2 text-6xl font-black text-primary">R$47</p><p className="mt-3 font-semibold text-muted-foreground">Sem mensalidade · 1 ano de acesso</p></div>
        </div>
      </section>

      <section className="bg-brand-navy px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Oferta</p><h2 className="mt-3 text-4xl font-extrabold text-primary-foreground">Destrava Falaê</h2><p className="mt-6 text-brand-blue-light">Pagamento único</p><p className="mt-2 text-7xl font-black text-accent">R$47</p><p className="mt-4 text-primary-foreground">Sem mensalidade para este produto.</p><p className="mt-2 text-primary-foreground">1 ano de acesso ao conteúdo adquirido dentro da plataforma Falaê Brasil.</p><p className="mt-2 font-bold text-primary-foreground">✅ Acesso imediato após a confirmação do pagamento</p><p className="mt-2 text-primary-foreground">Garantia incondicional de 7 dias.</p><div className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-brand-blue-light"><p>Você não precisa comprar um curso completo.</p><p className="mt-3">Comece resolvendo um problema:</p><p className="mt-2 font-bold text-primary-foreground">parar de ficar completamente sem reação quando precisar responder em inglês.</p></div><div className="mt-8"><PurchaseButton>Quero acessar o Destrava Falaê por R$47</PurchaseButton><div className="[&_span]:text-brand-blue-light"><TrustLine /></div></div></div>
      </section>

      <section className="px-4 py-20 sm:py-24"><div className="mx-auto max-w-6xl"><SectionTitle eyebrow="Como acessar" title="Comprou? O caminho é simples." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[
        ["1", "Faça sua compra", "Finalize seu pedido pelo checkout seguro."],
        ["2", "Receba seu acesso", "Após a confirmação do pagamento, o acesso ao Destrava Falaê é liberado e você recebe por e-mail as orientações para entrar na plataforma Falaê Brasil."],
        ["3", "Abra o Destrava Falaê", "O conteúdo adquirido estará disponível dentro da plataforma. Cursos completos, outros produtos e conteúdos não incluídos nesta compra permanecem bloqueados."],
        ["4", "Comece pelas 10 frases SOS", "Entre no conteúdo, pratique no IA Memorizaê e depois grave sua voz no IA Falaê."],
      ].map(([n,title,text]) => <article key={n} className="rounded-lg border border-border p-6 shadow-soft"><span className="text-4xl font-black text-accent">{n}</span><h3 className="mt-4 text-xl font-bold uppercase">{title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{text}</p></article>)}</div></div></section>

      <section className="bg-brand-ice px-4 py-20 sm:py-24"><div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[.8fr_1.2fr]"><div className="overflow-hidden rounded-lg bg-brand-blue-light"><img src={joisAlaby} alt="Teacher Jóis Alaby, professor e criador da Falaê Brasil" loading="lazy" className="h-full max-h-[590px] w-full object-cover object-top" /></div><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Falaê Brasil! Inglês Transversal</p><h2 className="mt-3 text-4xl font-extrabold">Teacher Jóis Alaby</h2><div className="mt-6 space-y-3 leading-relaxed text-foreground/80"><p>Professor e criador da Falaê Brasil.</p><p>A proposta do Inglês Transversal coloca a comunicação em situações reais no centro do aprendizado.</p><p>Na Falaê Brasil, inglês não existe isolado da vida do brasileiro.</p><p>Ele aparece em viagens.</p><p>No trabalho.</p><p>No atendimento.</p><p>No turismo.</p><p>Nos negócios.</p><p>Quando recebemos estrangeiros no Brasil.</p><p>Em restaurantes, hotéis e transportes.</p><p>E também quando alguma coisa dá errado e precisamos pedir ajuda.</p><p>O Destrava Falaê nasceu dentro dessa mesma visão.</p><p>Não para substituir um curso completo.</p><p>Mas para resolver um problema menor e imediato:</p><p className="font-bold text-primary">você já conhece algum inglês, mas precisa conseguir acessar esse inglês quando chega a sua vez de falar.</p></div></div></div></section>

      <section className="px-4 py-20 sm:py-24"><div className="mx-auto max-w-5xl"><SectionTitle eyebrow="A escolha" title="Quando o inglês trava, você pode continuar fazendo duas coisas" /><div className="mt-12 grid gap-6 md:grid-cols-2"><article className="rounded-lg border border-border bg-secondary p-7"><p className="text-sm font-black uppercase text-muted-foreground">Opção 1</p><div className="mt-5 space-y-3 text-lg"><p>Continuar tentando encontrar a frase perfeita antes de falar.</p><p>Traduzir mentalmente.</p><p>Recomeçar.</p><p>Se corrigir antes mesmo de abrir a boca.</p><p className="font-bold">E acabar ficando em silêncio.</p></div></article><article className="rounded-lg border-2 border-accent bg-card p-7 shadow-elevated"><p className="text-sm font-black uppercase text-accent">Opção 2</p><p className="mt-5 text-xl font-bold leading-relaxed text-primary">Ter respostas curtas prontas para ganhar tempo, pedir ajuda, se corrigir e manter a conversa enquanto encontra o restante do inglês.</p></article></div><p className="mt-9 text-center text-xl font-bold text-primary">O Destrava Falaê foi criado para a segunda opção.</p><div className="mt-7 flex justify-center"><PurchaseButton>Quero começar pelo Destrava Falaê</PurchaseButton></div></div></section>

      <section className="bg-brand-navy px-4 py-20 sm:py-24"><div className="mx-auto max-w-3xl text-center"><SectionTitle eyebrow="Preço" title="Comece por um problema pequeno" dark /><div className="mt-7 space-y-3 text-lg text-brand-blue-light"><p>Você não está comprando anos de curso.</p><p>Está comprando um pack feito para um momento específico:</p><p className="font-bold text-primary-foreground">a hora em que você entende alguma coisa, mas precisa responder e trava.</p></div><p className="mt-9 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue-light">Pagamento único · sem mensalidade</p><p className="mt-2 text-7xl font-black text-accent">R$47</p><p className="mt-3 text-primary-foreground">1 ano de acesso · Acesso imediato após confirmação do pagamento · Garantia incondicional de 7 dias</p><div className="mt-8"><PurchaseButton>Quero o Destrava Falaê por R$47</PurchaseButton><div className="[&_span]:text-brand-blue-light"><TrustLine /></div></div></div></section>

      <section className="bg-brand-ice px-4 py-20 sm:py-24"><div className="mx-auto grid max-w-4xl items-center gap-8 rounded-lg border border-accent bg-background p-7 shadow-elevated sm:grid-cols-[.35fr_.65fr] sm:p-10"><div className="text-center"><p className="text-8xl font-black text-accent">7</p><p className="mt-2 text-sm font-extrabold uppercase text-primary">Garantia Incondicional</p><p className="mt-1 text-2xl font-black text-primary">7 dias</p></div><div><ShieldCheck className="h-10 w-10 text-accent" /><h2 className="mt-4 text-3xl font-extrabold text-primary">Garantia Incondicional de 7 Dias</h2><p className="mt-5 leading-relaxed text-foreground/80">Abra o conteúdo, treine com a IA Memorizaê e grave sua pronúncia com a IA Falaê. Se, dentro do prazo de garantia, você concluir que o produto não atende às suas expectativas, basta solicitar o reembolso pelos canais de suporte. Devolveremos 100% do valor pago, conforme as condições da garantia. Sem burocracia e sem letras miúdas.</p><a href={WHATSAPP_SUPORTE_DESTRAVA} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block font-bold text-primary underline underline-offset-4">Solicitar pelo suporte</a></div></div></section>

      <section className="px-4 py-20 sm:py-24"><div className="mx-auto max-w-4xl"><SectionTitle eyebrow="Perguntas frequentes" title="Tire suas dúvidas" /><Accordion type="single" collapsible className="mt-10 w-full">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`} className="mb-3 rounded-lg border border-border bg-card px-5 shadow-soft"><AccordionTrigger className="py-5 text-left text-base font-bold text-primary hover:no-underline">{question}</AccordionTrigger><AccordionContent className="pb-5 leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="bg-gradient-corporate px-4 py-20 text-center sm:py-24"><div className="mx-auto max-w-3xl"><h2 className="text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl">Você não precisa esperar “saber inglês suficiente” para abrir a boca.</h2><div className="mt-8 space-y-2 text-lg text-brand-blue-light"><p>Comece tendo uma saída.</p><p>Uma frase para ganhar tempo.</p><p>Uma frase para pedir repetição.</p><p>Uma frase para dizer que não sabe uma palavra.</p><p>Uma frase para tentar novamente.</p><p>Uma pergunta para manter a conversa viva.</p></div><p className="mt-8 text-2xl font-extrabold text-primary-foreground">Esse é o Destrava Falaê.</p><p className="mt-5 font-bold text-accent">Pack prático + IA Memorizaê + IA Falaê</p><p className="mt-7 text-sm uppercase tracking-[0.16em] text-brand-blue-light">Pagamento único · sem mensalidade</p><p className="mt-2 text-7xl font-black text-accent">R$47</p><p className="mt-3 text-primary-foreground">1 ano de acesso · Acesso imediato · Garantia incondicional de 7 dias</p><div className="mt-8 flex justify-center"><PurchaseButton>Quero destravar minha fala por R$47</PurchaseButton></div><div className="[&_span]:text-brand-blue-light"><TrustLine /></div><LegalConsent action="compra" dark className="mt-4" /></div></section>

      <footer className="bg-brand-navy px-4 py-12 text-center text-sm text-brand-blue-light"><img src={logo} alt="Falaê Brasil! Inglês Transversal" loading="lazy" className="mx-auto h-20 w-auto" /><p className="mt-4 font-bold text-primary-foreground">Falaê Brasil! Inglês Transversal</p><p className="mt-2">IBOX Centro de Idiomas Ltda.</p><p>CNPJ 18.656.810/0001-66</p><div className="mt-5 space-y-1"><p><a href="mailto:atendimento@falaebrasil.com.br" className="underline underline-offset-4">atendimento@falaebrasil.com.br</a></p><p><a href="tel:+5511981612800" className="underline underline-offset-4">(11) 98161-2800</a></p><p><a href="https://app.falaebrasil.com.br" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">app.FalaeBrasil.com.br</a></p></div><div className="mt-6 flex flex-wrap items-center justify-center gap-5"><LegalLinks className="contents" /><a href={WHATSAPP_SUPORTE_DESTRAVA} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Suporte</a></div><div className="mx-auto mt-8 max-w-4xl space-y-4 border-t border-primary-foreground/10 pt-7 text-xs leading-relaxed"><p>Copyright © Falaê Brasil! — Destrava Falaê — 2026. Todos os direitos reservados.</p><p>Este site não é afiliado ao Facebook, à Meta ou a qualquer entidade do Facebook. Depois que você sair das plataformas dessas empresas, a responsabilidade pelo conteúdo passa a ser deste site.</p><p>A compra do Destrava Falaê não garante fluência ou resultado específico no aprendizado de inglês. Os resultados podem variar de pessoa para pessoa e dependem da prática, frequência de uso, conhecimento prévio e dedicação de cada aluno.</p></div></footer>

      <style>{`@keyframes dfPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.015)}}.df-pulse{animation:dfPulse 2.8s ease-in-out infinite}@media(prefers-reduced-motion:reduce){.df-pulse{animation:none}}`}</style>
    </main>
  );
}
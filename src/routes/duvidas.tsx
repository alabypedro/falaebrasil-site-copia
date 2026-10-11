import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, CircleHelp, CreditCard, GraduationCap, Mail, MessageCircle, UsersRound } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/duvidas")({
  head: () => ({
    meta: [
      { title: "Dúvidas Frequentes | Falaê Brasil" },
      { name: "description", content: "Respostas sobre Plano PRO, Kids & Teens, Guias Brasil Sem Trava, pagamentos, acesso e suporte da Falaê Brasil." },
      { property: "og:title", content: "Dúvidas Frequentes | Falaê Brasil" },
      { property: "og:description", content: "Respostas sobre Plano PRO, Kids & Teens, Guias Brasil Sem Trava, pagamentos, acesso e suporte." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://falaebrasil.com.br/duvidas" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://falaebrasil.com.br/duvidas" }],
  }),
  component: DuvidasPage,
});

type Faq = { question: string; answer: React.ReactNode };
type Category = { title: string; description: string; icon: typeof CircleHelp; faqs: Faq[] };

const categories: Category[] = [
  { title: "Plano PRO Adultos", description: "Estudo contínuo, aplicativo, IA e aulas ao vivo.", icon: GraduationCap, faqs: [
    { question: "O que é o Plano PRO?", answer: "O Plano PRO combina o APP Falaê Brasil, conteúdo organizado por nível, cinco ferramentas de IA e aulas ao vivo via Zoom." },
    { question: "Preciso começar do nível básico?", answer: "Não necessariamente. O conteúdo é organizado por níveis e a entrada pode considerar o momento atual do aluno." },
    { question: "Como funcionam as aulas ao vivo?", answer: "As aulas acontecem via Zoom, de acordo com o público, o nível e a programação vigente. Consulte a oferta atual ou fale com nossa equipe para confirmar a disponibilidade." },
    { question: "Quais ferramentas de IA estão incluídas?", answer: "O Plano PRO inclui Falaê, Escutaê, Memorizaê, Escreveaê e Leiaê para apoiar a prática de fala, escuta, memória, escrita e leitura." },
    { question: "O aplicativo substitui as aulas?", answer: "Não. A proposta do Plano PRO é justamente combinar estudo individual e aulas ao vivo." },
    { question: "Como funciona a cobrança?", answer: "A assinatura é recorrente mensal e permanece ativa até o cancelamento, conforme a oferta vigente e os Termos de Uso. Consulte a página de matrícula para confirmar o valor atual." },
  ]},
  { title: "Kids & Teens", description: "Informações para responsáveis por alunos de 8 a 17 anos.", icon: UsersRound, faqs: [
    { question: "Qual é a faixa etária?", answer: "Kids atende crianças de 8 a 12 anos. Teens atende adolescentes de 13 a 17 anos." },
    { question: "Kids e Teens estudam juntos?", answer: "Não. As trilhas e aulas são organizadas de acordo com faixa etária e nível." },
    { question: "Meu filho pode começar sem saber inglês?", answer: "Sim. Há uma jornada para quem está começando, e a entrada considera a faixa etária e o momento atual do aluno." },
    { question: "Como funcionam as aulas ao vivo?", answer: "As aulas acontecem via Zoom, em grupos próprios para Kids e Teens e conforme a programação vigente. Consulte a oferta atual ou fale com nossa equipe." },
    { question: "Os responsáveis podem falar com a equipe?", answer: "Sim. Os responsáveis podem entrar em contato pelo WhatsApp ou e-mail oficiais da Falaê Brasil." },
    { question: "Quais ferramentas digitais estão incluídas?", answer: "O Plano PRO Kids & Teens inclui o APP Falaê Brasil, conteúdo por faixa etária e nível, as ferramentas Falaê, Escutaê, Memorizaê, Escreveaê e Leiaê, além de aulas ao vivo via Zoom." },
  ]},
  { title: "Guias Brasil Sem Trava", description: "Produtos digitais para necessidades específicas.", icon: BookOpen, faqs: [
    { question: "O que são os Guias Brasil Sem Trava?", answer: "São produtos digitais criados para situações específicas em que o inglês aparece, como conversação, viagens, entrevistas profissionais e preparação linguística para entrevista de visto." },
    { question: "Os Guias BST são cursos completos de inglês?", answer: "Não. Eles foram criados para necessidades específicas e não substituem uma jornada completa de estudo." },
    { question: "O pagamento é único?", answer: "Os Guias BST são comercializados individualmente com pagamento único, conforme a oferta apresentada na página de cada produto." },
    { question: "Como recebo meu Guia?", answer: "O acesso é liberado conforme as condições apresentadas na página do produto, após a confirmação do pagamento." },
    { question: "Posso comprar mais de um Guia?", answer: "Sim. Algumas ofertas podem disponibilizar combinações de produtos antes do checkout." },
    { question: "Os Guias garantem algum resultado?", answer: "Não. São materiais educacionais e de prática. Resultados dependem de contexto, uso, conhecimento prévio e da situação de cada pessoa." },
  ]},
  { title: "Pagamento, acesso e suporte", description: "Ajuda com compras, entrada na plataforma e atendimento.", icon: CreditCard, faqs: [
    { question: "Como funciona o pagamento?", answer: "O pagamento é realizado pelo ambiente indicado na página de cada produto ou plano." },
    { question: "Quando recebo acesso?", answer: "O acesso é disponibilizado após a confirmação do pagamento, conforme a oferta adquirida." },
    { question: "Esqueci meus dados de acesso. O que faço?", answer: <>Escreva para <a className="font-semibold text-primary underline" href="mailto:atendimento@falaebrasil.com.br">atendimento@falaebrasil.com.br</a> ou fale pelo <a className="font-semibold text-primary underline" href="https://wa.me/5511981612800" target="_blank" rel="noopener noreferrer">WhatsApp (11) 98161-2800</a>.</> },
    { question: "Como solicito suporte?", answer: <>Use o e-mail <a className="font-semibold text-primary underline" href="mailto:atendimento@falaebrasil.com.br">atendimento@falaebrasil.com.br</a> ou o <a className="font-semibold text-primary underline" href="https://wa.me/5511981612800" target="_blank" rel="noopener noreferrer">WhatsApp oficial</a>.</> },
    { question: "Existe garantia?", answer: "As condições de garantia dependem da oferta adquirida e são apresentadas na página correspondente e nos Termos de Uso." },
    { question: "Como encontro os Termos de Uso?", answer: <a className="font-semibold text-primary underline" href="/termos-de-uso">Leia os Termos de Uso da Falaê Brasil.</a> },
    { question: "Como encontro a Política de Privacidade?", answer: <a className="font-semibold text-primary underline" href="/politica-de-privacidade">Leia a Política de Privacidade da Falaê Brasil.</a> },
  ]},
];

function DuvidasPage() {
  return <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <section className="bg-gradient-ice py-16 text-center sm:py-20">
        <div className="mx-auto max-w-4xl px-4"><CircleHelp className="mx-auto h-9 w-9 text-brand-gold" aria-hidden="true" /><span className="mt-5 block text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">Central de ajuda</span><h1 className="mt-3 text-4xl font-bold text-primary sm:text-5xl">Dúvidas Frequentes</h1><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Encontre respostas sobre Plano PRO, Kids & Teens, Guias Brasil Sem Trava, pagamentos e acesso.</p></div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-12 px-4">
          {categories.map(({ title, description, icon: Icon, faqs }, categoryIndex) => <section key={title} aria-labelledby={`faq-${categoryIndex}`}>
            <div className="flex items-start gap-4 border-b border-border pb-5"><span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-ice"><Icon className="h-5 w-5 text-brand-blue-mid" aria-hidden="true" /></span><div><h2 id={`faq-${categoryIndex}`} className="text-2xl font-bold text-primary sm:text-3xl">{title}</h2><p className="mt-1 text-sm text-muted-foreground">{description}</p></div></div>
            <Accordion type="single" collapsible className="mt-5 w-full">
              {faqs.map((faq, index) => <AccordionItem key={faq.question} value={`c${categoryIndex}-${index}`} className="mb-3 border border-border bg-brand-ice px-5 shadow-soft"><AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">{faq.question}</AccordionTrigger><AccordionContent className="pr-4 leading-relaxed text-foreground/80">{faq.answer}</AccordionContent></AccordionItem>)}
            </Accordion>
          </section>)}
        </div>
      </section>
      <section className="bg-gradient-corporate py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4"><h2 className="text-3xl font-bold text-white sm:text-4xl">Ainda precisa de ajuda?</h2><p className="mt-4 text-lg text-brand-blue-light">Fale com a equipe da Falaê Brasil.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><a href="https://wa.me/5511981612800" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-cta"><MessageCircle className="h-5 w-5" aria-hidden="true" />Falar no WhatsApp</a><a href="mailto:atendimento@falaebrasil.com.br" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-brand-blue-light px-7 py-3 text-sm font-bold uppercase tracking-wider text-white"><Mail className="h-5 w-5" aria-hidden="true" />Enviar e-mail</a></div></div>
      </section>
    </main>
    <ContactSection />
    <SiteFooter />
  </div>;
}

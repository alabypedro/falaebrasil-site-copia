import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

import antesImg from "@/assets/bst3-antes.jpg";
import depoisImg from "@/assets/bst3-depois.jpg";
import step1Img from "@/assets/bst3-step1.jpg";
import step2Img from "@/assets/bst3-step2.jpg";
import step3Img from "@/assets/bst3-step3.jpg";
import studentsImg from "@/assets/bst3-students.jpg";
import joisImg from "@/assets/jois-alaby-new.png";
import depoDaniela from "@/assets/depo-daniela.jpg.asset.json";
import depoDarlene from "@/assets/depo-darlene.jpg.asset.json";
import depoLeonardo from "@/assets/depo-leonardo.jpg.asset.json";

const CHECKOUT = "https://www.asaas.com/c/ynlocoaqgpmhajrk";

const C = {
  black: "#0B0B0B",
  black2: "#151515",
  red: "#E52B22",
  redDark: "#C51F18",
  paper: "#F7F5F1",
  white: "#FFFFFF",
  grayLight: "#E9E9E7",
  grayMid: "#B8B8B5",
  graphite: "#202020",
};

const sans = { fontFamily: '"Poppins", ui-sans-serif, system-ui, sans-serif' } as const;
const serif = { fontFamily: '"Playfair Display", Georgia, serif' } as const;
const bodyText = "text-[17px] leading-[1.7] sm:text-[18px]";

const faq = [
  {
    q: "Preciso já saber inglês?",
    a: "Não. A jornada começa pelo Módulo Zero, com estratégias para enfrentar provas, e segue pelo nível A1. Quem já possui conhecimento pode avançar para os módulos compatíveis com seu nível.",
  },
  {
    q: "Os PDFs podem ser baixados e impressos?",
    a: "Sim. As sete apostilas digitais podem ser baixadas e impressas para estudo, anotações e revisão.",
  },
  {
    q: "O que é a IA Leiaê?",
    a: "A IA Leiaê é uma ferramenta de leitura do App Falaê Brasil que permite explorar textos interativamente, consultando tradução, pronúncia, divisão silábica, classes gramaticais e imagens associadas às palavras.",
  },
  {
    q: "Posso visualizar apenas verbos, substantivos ou adjetivos?",
    a: "Sim. Entre os recursos da IA Leiaê, você pode direcionar a visualização para determinadas classes gramaticais, ajudando a perceber como as palavras funcionam dentro do texto.",
  },
  {
    q: "Quantos quizzes existem?",
    a: "São 12 quizzes em cada um dos seis níveis A1, A2, B1, B2, C1 e C2, totalizando 72 quizzes.",
  },
  {
    q: "Quantas questões existem?",
    a: "Cada quiz possui 10 questões. Ao todo, são 720 questões de interpretação distribuídas progressivamente pelos seis níveis.",
  },
  {
    q: "Serve para ENEM e vestibulares?",
    a: "O conteúdo trabalha leitura, estrutura e interpretação de textos em inglês, habilidades que podem ser utilizadas como preparação complementar para diferentes provas. O material não possui vínculo oficial com o ENEM ou instituições organizadoras de vestibulares.",
  },
  {
    q: "Serve para TOEFL, TOEIC, IELTS, FCE, CPE ou outros exames?",
    a: "A proposta desenvolve leitura e interpretação progressivamente do A1 ao C2, podendo ser utilizada como preparação complementar para diferentes exames e certificações. O produto não substitui materiais oficiais específicos de cada avaliação e não possui vínculo com as respectivas organizações.",
  },
  {
    q: "Serve para mestrado e doutorado?",
    a: "O material pode ser utilizado por quem precisa desenvolver leitura e interpretação em inglês para contextos acadêmicos e avaliações de proficiência. Os requisitos variam entre instituições, por isso o aluno deve sempre consultar as regras específicas do processo seletivo.",
  },
  {
    q: "Posso usar se já tiver inglês avançado?",
    a: "Sim. A jornada progride até C2. Alunos com base mais sólida podem utilizar os módulos mais avançados e os quizzes compatíveis com seu nível.",
  },
  {
    q: "O acesso é imediato?",
    a: "Após a confirmação do pagamento, você recebe por e-mail as orientações para acessar a Biblioteca BST no App Falaê Brasil.",
  },
  {
    q: "O produto garante aprovação?",
    a: "Não. Nenhum material educacional pode garantir aprovação, nota, certificação ou ingresso em instituição. O BST oferece estratégia, conteúdo e prática para apoiar sua preparação. Os resultados dependem da dedicação, do conhecimento, da prova e do desempenho individual.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você possui garantia incondicional de 7 dias. Dentro desse prazo, pode solicitar o reembolso pelos canais oficiais de suporte, conforme as condições da oferta.",
  },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "BST Inglês Instrumental para Provas — do Zero A1 ao C2 Avançado",
  description:
    "Módulo Zero com 12 técnicas estratégicas, 7 apostilas em PDF do A1 ao C2, IA Leiaê de leitura interativa e 72 quizzes progressivos com 720 questões de interpretação.",
  brand: { "@type": "Brand", name: "Brasil Sem Trava" },
  offers: {
    "@type": "Offer",
    price: "47.00",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: "https://falaebrasil.com.br/bst3",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/bst3")({
  head: () => ({
    meta: [
      { title: "Inglês Instrumental para Provas do A1 ao C2 | BST" },
      {
        name: "description",
        content:
          "Aprenda a decodificar textos e interpretar provas de inglês com Módulo Zero, 7 PDFs, IA Leiaê e quizzes progressivos do A1 ao C2. Estratégia de leitura do básico ao avançado.",
      },
      { property: "og:title", content: "BST Inglês Instrumental para Provas — do Zero ao C2" },
      {
        property: "og:description",
        content:
          "12 técnicas estratégicas + 7 apostilas + IA Leiaê + 72 quizzes progressivos para desenvolver leitura e interpretação em inglês do A1 ao C2.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://falaebrasil.com.br/bst3" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BST Inglês Instrumental para Provas — do Zero ao C2" },
      {
        name: "twitter:description",
        content:
          "12 técnicas estratégicas + 7 apostilas + IA Leiaê + 72 quizzes progressivos do A1 ao C2.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://falaebrasil.com.br/bst3" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(productJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: Bst3Page,
});

function RedRule() {
  return (
    <div className="mx-auto mt-5 h-px w-24" style={{ backgroundColor: C.red }} aria-hidden="true" />
  );
}

function Cta({ label, full = false }: { label: string; full?: boolean }) {
  return (
    <div className={full ? "w-full" : "flex w-full flex-col items-center"}>
      <a
        href={CHECKOUT}
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...sans, backgroundColor: C.red, color: C.white }}
        className={`bst3-pulse bst3-cta inline-flex items-center justify-center rounded-full px-8 py-5 text-center text-[17px] font-bold uppercase leading-snug tracking-wide shadow-lg transition-transform duration-200 hover:scale-[1.03] sm:px-11 sm:text-[19px] ${
          full ? "w-full" : "w-full max-w-[560px]"
        }`}
      >
        {label}
      </a>
      <p style={{ ...sans }} className="mt-3 text-center text-[13px] opacity-75 sm:text-[14px]">
        🔒 Compra 100% segura • ✅ Acesso imediato • 🛡️ Garantia de 7 dias
      </p>
    </div>
  );
}

function OfferCard() {
  return (
    <div
      className="mx-auto w-full max-w-[560px] overflow-hidden rounded-[20px] shadow-xl"
      style={{ backgroundColor: C.white, border: `2px solid ${C.red}` }}
    >
      <div
        style={{ ...sans, backgroundColor: C.black, color: C.white }}
        className="px-6 py-3 text-center text-[15px] font-bold uppercase tracking-wider"
      >
        Oferta especial de lançamento
      </div>
      <div className="px-6 py-8 sm:px-10">
        <p style={{ ...sans, color: C.graphite }} className="text-center text-[18px] font-semibold uppercase tracking-wide">
          Acesso completo por apenas:
        </p>
        <p
          style={{ ...serif, color: C.red }}
          className="mt-2 text-center text-[56px] font-bold leading-none sm:text-[80px]"
        >
          R$ 47,00
        </p>
        <p style={{ ...sans, color: C.graphite }} className="mt-3 text-center text-[16px] opacity-80">
          Pagamento único • Sem mensalidade • Acesso imediato
        </p>
        <div className="mt-7">
          <Cta label="Quero a cartilha + IA Leiaê + quizzes por R$ 47,00" full />
        </div>
        <div
          className="mt-7 flex flex-wrap items-center justify-center gap-2 rounded-xl px-4 py-3"
          style={{ backgroundColor: C.grayLight }}
          aria-label="Formas de pagamento aceitas: Pix, Visa, Mastercard, Elo, Hipercard e boleto"
        >
          {["Pix", "Visa", "Mastercard", "Elo", "Hipercard", "Boleto"].map((p) => (
            <span
              key={p}
              style={{ ...sans, color: C.graphite }}
              className="rounded-md bg-white px-3 py-1 text-[13px] font-semibold shadow-sm"
            >
              {p}
            </span>
          ))}
        </div>
        <p style={{ ...sans, color: C.graphite }} className="mt-4 text-center text-[14px] opacity-70">
          Compra processada em ambiente 100% seguro. Os dados de acesso são enviados ao seu e-mail
          após a confirmação do pagamento.
        </p>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Daniela Bertoldo",
    photo: depoDaniela.url,
    text: "O inglês sempre foi um sonho distante pra mim. Achei que era tarde demais. Mas o jeito que o teacher Jóis ensina é diferente — ele fala com a gente, não pra gente. Hoje já pretendo lançar um livro em inglês dentro da minha área profissional!",
  },
  {
    name: "Darlene Martins",
    photo: depoDarlene.url,
    text: "Comecei o curso com o teacher Jóis esse ano. O método me mostrou que dá pra ser leve e prático. Sempre fui muito travada. Meu filho adora inglês e me divirto com ele. Fico mais relaxada e isso me dá confiança para avançar. Super recomendo.",
  },
  {
    name: "Leonardo Canella",
    photo: depoLeonardo.url,
    text: "Já tive contato com inglês duas vezes com métodos que não consegui seguir e desisti. Me identifiquei com o método pela facilidade em estudar e trocar em aula. O professor Jóis é dedicado e faz intervenções pontuais para eu evoluir. Já percebo evolução a cada aula.",
  },
];

const problems = [
  {
    title: "Você tenta traduzir praticamente tudo",
    text: "Em vez de procurar as informações necessárias para responder, você gasta tempo tentando compreender cada palavra isoladamente.",
  },
  {
    title: "Você conhece algumas regras, mas trava na interpretação",
    text: "Reconhecer gramática não significa automaticamente saber identificar ideia central, contexto, intenção e evidências.",
  },
  {
    title: "Você não sabe por onde começar um texto",
    text: "Texto grande parece automaticamente difícil porque você nunca aprendeu uma sequência estratégica de leitura.",
  },
  {
    title: "As alternativas parecem todas parecidas",
    text: "Sem perceber conectores, intensidade, referenciação, falsos cognatos e palavras absolutas, pequenas diferenças podem mudar completamente o sentido da resposta.",
  },
];

const steps = [
  {
    n: "01",
    title: "Aprenda a estratégia",
    text: "Comece pelo Módulo Zero e aprenda 12 técnicas para decodificar provas: cognatos, falsos cognatos, Skimming, Scanning, afixos, conectores, referenciação, Context Clues, Chunking e outras estratégias essenciais.",
    img: step1Img,
    alt: "Estudante com apostila BST aberta fazendo marcações estratégicas em um texto",
  },
  {
    n: "02",
    title: "Explore com a IA Leiaê",
    text: "Transforme textos em ambientes interativos. Consulte tradução e pronúncia por palavra, observe divisão silábica, explore imagens e destaque somente verbos, substantivos ou adjetivos.",
    img: step2Img,
    alt: "Notebook e smartphone exibindo uma interface educacional de leitura interativa",
  },
  {
    n: "03",
    title: "Teste sua interpretação",
    text: "Depois de estudar, coloque a estratégia em prática em quizzes progressivos de A1 a C2. São 72 quizzes, com 10 questões cada, totalizando 720 questões de interpretação.",
    img: step3Img,
    alt: "Estudante respondendo um quiz de múltipla escolha em um notebook",
  },
];

const deliverables = [
  {
    title: "📚 7 APOSTILAS EM PDF — DO MÓDULO ZERO AO C2",
    text: "Sete materiais digitais que podem ser baixados e impressos: Módulo Zero + A1 + A2 + B1 + B2 + C1 + C2. O Módulo Zero ensina as estratégias fundamentais. O A1 constrói a decodificação inicial. O A2 avança para narrativas, comparação, causa e consequência. Os níveis seguintes conduzem progressivamente a textos e estruturas mais complexos até o C2.",
    img: step1Img,
    alt: "Apostilas impressas do BST Inglês Instrumental sobre uma mesa de estudos",
  },
  {
    title: "🔎 IA LEIAÊ — LEITURA INTERATIVA",
    text: "Explore o texto palavra por palavra. Consulte tradução, pronúncia, divisão silábica, classe gramatical e imagens associadas. Escolha visualizar apenas verbos, substantivos ou adjetivos.",
    img: step2Img,
    alt: "Interface da IA Leiaê exibida em notebook e celular",
  },
  {
    title: "✅ 72 QUIZZES PROGRESSIVOS",
    text: "Doze quizzes em cada um dos seis níveis A1–C2. Cada quiz possui 10 questões de interpretação, totalizando 720 questões para praticar.",
    img: step3Img,
    alt: "Estudante praticando quizzes de interpretação em um notebook",
  },
  {
    title: "📱 BIBLIOTECA BST NO APP FALAÊ BRASIL",
    text: "PDFs e ferramentas reunidos no mesmo ambiente. Estude pelo celular, tablet ou computador e imprima as apostilas quando preferir estudar no papel.",
    img: studentsImg,
    alt: "Estudantes de diferentes idades acessando materiais de estudo em papel e digital",
  },
];

const mastery = [
  {
    emoji: "👀",
    title: "SKIMMING — Enxergue a ideia principal",
    text: "Aprenda a fazer uma varredura estratégica para compreender o assunto e a direção do texto sem precisar ler cada palavra.",
  },
  {
    emoji: "🎯",
    title: "SCANNING — Encontre o que a questão procura",
    text: "Leia a questão, identifique palavras-âncora e volte ao texto para localizar rapidamente o trecho relevante.",
  },
  {
    emoji: "🔤",
    title: "DECODE PALAVRAS SEM TRADUZIR TUDO",
    text: "Use cognatos, prefixos, sufixos e Context Clues para deduzir significados mesmo quando encontrar vocabulário desconhecido.",
  },
  {
    emoji: "🔗",
    title: "LEIA A LÓGICA ENTRE AS IDEIAS",
    text: "Reconheça conectores de contraste, adição, causa e consequência para entender como o raciocínio do texto está organizado.",
  },
  {
    emoji: "⚠️",
    title: "IDENTIFIQUE ARMADILHAS",
    text: "Aprenda a desconfiar de falsos cognatos, alternativas absolutas e mudanças de intensidade que podem alterar o sentido da resposta.",
  },
  {
    emoji: "🧩",
    title: "CHUNKING — LEIA POR BLOCOS DE SIGNIFICADO",
    text: "Pare de processar palavras isoladamente e passe a reconhecer quem fez o quê, onde, quando e como dentro da frase.",
  },
];

const resources = [
  {
    tag: "Recurso 1",
    title: "PDFs para baixar e imprimir",
    text: "Baixe as sete apostilas, faça anotações, sublinhe estruturas e monte sua própria sequência física de estudos.",
  },
  {
    tag: "Recurso 2",
    title: "IA Leiaê — Investigação Palavra por Palavra",
    text: "Clique nas palavras para explorar significado, pronúncia, divisão silábica, classe gramatical e apoio visual sem precisar abandonar o texto.",
  },
  {
    tag: "Recurso 3",
    title: "Progressão Estruturada do A1 ao C2",
    text: "Em vez de exercícios aleatórios, avance por uma sequência de dificuldade crescente, do básico até níveis avançados de leitura.",
  },
];

const modules = [
  { tag: "MÓDULO ZERO", title: "Tutorial — Como Estudar para Provas de Inglês", step: "ESTRATÉGIA" },
  { tag: "MÓDULO 1", title: "A1 — Básico • Ensino Fundamental II", step: "DECODIFICAÇÃO INICIAL" },
  { tag: "MÓDULO 2", title: "A2 — Pré-Intermediário • Ensino Médio", step: "NARRATIVA E COMPARAÇÃO" },
  {
    tag: "MÓDULO 3",
    title: "B1 — Decodificação Crítica e Argumentativa",
    subtitle: "ENEM & Vestibulares",
    step: "CRÍTICA E ARGUMENTAÇÃO",
  },
  {
    tag: "MÓDULO 4",
    title: "B2 — Decodificação Científica e Densa",
    subtitle: "Mestrado, Doutorado & Proficiência",
    step: "CIÊNCIA E DENSIDADE",
  },
  {
    tag: "MÓDULO 5",
    title: "C1 — Decodificação Avançada e Análise Crítica de Discurso",
    subtitle: "Exames Internacionais & Proficiência Acadêmica",
    step: "ANÁLISE CRÍTICA",
  },
  {
    tag: "MÓDULO 6",
    title: "C2 — Decodificação Hermenêutica, Sintaxe Retórica e Nuance Literária",
    subtitle: "Proficiência Avançada",
    step: "HERMENÊUTICA E NUANCE",
  },
];


const techniques = [
  "Cognatos Verdadeiros & Herança Latina",
  "Falsos Cognatos / False Friends",
  "Skimming",
  "Scanning",
  "Inversão do Adjetivo / Modifier + Noun Block",
  "Decodificação por Prefixos e Sufixos",
  "Conectores & Operadores Argumentativos",
  "Verbos Modais e Intensidade do Discurso",
  "Eliminação de Opções Extremas",
  "Referenciação Pronominal",
  "Context Clues",
  "Chunking — Leitura em Blocos de Significado",
];

const a1Items = [
  "Pronomes",
  "Verbo To Be",
  "Plural dos substantivos",
  "Artigos",
  "Present Continuous",
  "Números, datas e horas",
  "Preposições básicas",
  "Frequência",
  "Imperativo",
  "Question Words",
  "Demonstrativos",
  "Vocabulário temático",
];

const a2Items = [
  "Simple Past",
  "Comparativos e Superlativos",
  "Verbos Modais",
  "Quantificadores",
  "Conectores de Causa e Consequência",
  "Past Continuous",
  "Pronomes Relativos",
  "Futuro Simples",
  "Preposições de Tempo",
  "Voz Passiva",
  "Substantivos Incontáveis",
  "Vocabulário Temático",
];

const moduleCards = [
  {
    tag: "MÓDULO 1",
    title: "A1 — Decodificação Inicial",
    subtitle: "Ensino Fundamental II",
    items: a1Items,
    note: "A base para começar a compreender textos simples, questões escolares e situações cotidianas.",
    tone: 0,
  },
  {
    tag: "MÓDULO 2",
    title: "A2 — Decodificação Narrativa e Comparativa",
    subtitle: "Ensino Médio",
    items: a2Items,
    note: "No A2, os textos passam a trabalhar narrativas, biografias, notícias, comparação de dados, causa e consequência e estruturas mais complexas.",
    tone: 0,
  },
  {
    tag: "MÓDULO 3",
    title: "B1 — Decodificação Crítica e Argumentativa",
    subtitle: "ENEM & Vestibulares",
    items: [
      "Present Perfect vs. Simple Past",
      "Conectores Concessivos e Adversativos de Virada de Tese",
      "First & Second Conditionals",
      "Voz Passiva Intermediária e Ocultação do Agente",
      "Reported Speech e Mudança Temporal",
      "Formação de Palavras por Derivação Sufixal",
      "Phrasal Verbs de Alta Frequência em Exames",
      "Nominalizações e Densidade Textual Acadêmica",
      "Ironia, Charges e Tirinhas",
      "Pronomes Relativos Avançados — Whose, Whom e That",
      "Advérbios de Tom e Opinião do Autor",
      "Vocabulário Temático Global — ENEM & Vestibulares",
    ],
    note: "No B1, a leitura deixa de ser apenas informativa e passa a exigir interpretação crítica. O aluno aprende a perceber viradas de tese, hipóteses, discurso indireto, ironia, tom do autor e estruturas argumentativas recorrentes em textos de ENEM e vestibulares.",
    tone: 1,
  },
  {
    tag: "MÓDULO 4",
    title: "B2 — Decodificação Científica e Densa",
    subtitle: "Mestrado, Doutorado & Proficiência",
    items: [
      "Voz Passiva Científica e Impessoalidade",
      "Inversão Enfática após Advérbios Negativos e Restritivos",
      "Participle Clauses — Orações Reduzidas",
      "Third & Mixed Conditionals",
      "Conectores Acadêmicos de Contraste e Concessão",
      "Modais de Dedução Científica no Passado",
      "Nominalização Densa e Concisão Acadêmica",
      "Hedging — Cautela e Suavização Científica",
      "Vocabulário de Metodologia e Desenho de Pesquisa",
      "Inversão Condicional sem “IF”",
      "Marcadores de Conclusão e Síntese Acadêmica",
      "Vocabulário Acadêmico-Científico B2",
    ],
    note: "No B2, o aluno entra na linguagem acadêmico-científica: artigos, abstracts, metodologia, hipóteses, voz impessoal, Hedging e estruturas de alta densidade. O foco passa a ser decodificar como a ciência apresenta métodos, evidências, limitações e conclusões.",
    tone: 1,
  },
  {
    tag: "MÓDULO 5",
    title: "C1 — Decodificação Avançada e Análise Crítica de Discurso",
    subtitle: "Exames Internacionais & Proficiência Acadêmica",
    micro: "Contextos de preparação complementar: TOEFL, TOEIC, IELTS Academic e exames Cambridge.",
    items: [
      "Arquiteturas Textuais Acadêmicas",
      "Tom, Atitude e Propósito do Autor",
      "Paráfrase de Alta Densidade e Sentence Simplification",
      "Inversões Complexas e Subjuntivos Literários",
      "Academic Collocations de Alto Nível",
      "Lexicografia Erudita e Substantivos Abstratos",
      "Cadeias Anafóricas e Catafóricas Longas",
      "Falácias Lógicas e Premissas Fracas",
      "Gerúndios e Infinitivos em Estruturas Complexas",
      "Preposições Complexas e Locuções Prepositivas",
      "Vocabulário Acadêmico Multidisciplinar",
      "Gestão do Tempo e Leitura sob Pressão",
    ],
    note: "No C1, compreender as palavras já não basta. O aluno precisa reconhecer a arquitetura do texto, identificar propósito, tom e pressupostos, simplificar sentenças densas, rastrear referências entre parágrafos e avaliar criticamente a argumentação.",
    tone: 2,
  },
  {
    tag: "MÓDULO 6",
    title: "C2 — Decodificação Hermenêutica, Sintaxe Retórica e Nuance Literária",
    subtitle: "Proficiência Avançada",
    micro: "Contextos de preparação complementar: CPE Cambridge, DELTA e avaliações avançadas de proficiência.",
    items: [
      "Ambiguidade Retórica e Subtexto Hermenêutico",
      "Arcaísmos, Idiomas Eruditos e Figuras de Linguagem",
      "Coesão Implícita por Elipse e Substituição",
      "Nuances Semânticas entre Sinônimos Eruditos",
      "Conectores Arcaicos e Jurídico-Filosóficos",
      "Desconstrução de Sintaxe Retórica Densa",
      "Metalinguística e Linguística Aplicada",
      "Filosofia Política e Epistemologia Histórica",
      "Detecção de Viés Sutil e Ideologia Subjacente",
      "Colocações Idiomáticas de Registro Nativo Erudito",
      "Meta-Análises e Revisões Sistemáticas",
      "Decodificação Integrada e Fluidez de Leitura Avançada",
    ],
    note: "No C2, a leitura chega à camada mais sofisticada: subtexto, ironia, ambiguidade, elipse, sintaxe retórica, nuance lexical, viés ideológico e argumentação filosófica. O objetivo é integrar as estratégias construídas desde o Módulo Zero para enfrentar textos de altíssima complexidade com leitura crítica, autônoma e estratégica.",
    tone: 2,
  },
];


const forYou = [
  "Está no Ensino Fundamental II e quer melhorar sua interpretação em inglês;",
  "Está no Ensino Médio e precisa se preparar para provas e avaliações;",
  "Está estudando para ENEM ou vestibulares;",
  "Começa praticamente do zero e precisa de uma sequência organizada;",
  "Conhece inglês, mas ainda perde muito tempo traduzindo textos palavra por palavra;",
  "Quer desenvolver leitura mais estratégica;",
  "Precisa se preparar para exames de proficiência;",
  "Está se preparando para contextos de exames internacionais como TOEFL, TOEIC, IELTS, FCE, CPE, DELTA ou avaliações semelhantes;",
  "Precisa de interpretação em inglês para processos de mestrado ou doutorado;",
  "Quer combinar material impresso, tecnologia e prática de interpretação.",
];

const recap = [
  "Módulo Zero — 12 Técnicas Estratégicas",
  "Apostila A1 — Básico",
  "Apostila A2 — Pré-Intermediário",
  "Apostilas B1, B2, C1 e C2",
  "IA Leiaê — Leitura Interativa",
  "Tradução e Pronúncia por Palavra",
  "Divisão Silábica + Imagens",
  "Filtros de Verbos, Substantivos e Adjetivos",
  "72 Quizzes Progressivos",
  "720 Questões de Interpretação",
  "Biblioteca BST no App Falaê Brasil",
];

const howToAccess = [
  {
    n: "1",
    title: "Faça sua compra",
    text: "Finalize seu pedido pelo checkout seguro utilizando uma das formas de pagamento disponíveis.",
  },
  {
    n: "2",
    title: "Receba seu acesso",
    text: "Depois da confirmação, você recebe por e-mail as orientações para entrar na Biblioteca BST dentro do App Falaê Brasil.",
  },
  {
    n: "3",
    title: "Comece a decodificar",
    text: "Comece pelas técnicas do Módulo Zero, avance pelas apostilas, explore os textos com a IA Leiaê e coloque sua interpretação à prova nos quizzes.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto w-full max-w-[780px]">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} style={{ borderBottom: `1px solid ${C.red}44` }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`bst3-faq-${i}`}
              style={{ ...sans, color: C.graphite }}
              className="flex w-full items-center justify-between gap-4 py-6 text-left text-[18px] font-semibold"
            >
              <span>{item.q}</span>
              <span style={{ color: C.red }} className="flex-none text-2xl leading-none" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={`bst3-faq-${i}`}
              role="region"
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

function Section({
  bg,
  color,
  children,
  className = "",
}: {
  bg: string;
  color: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section style={{ backgroundColor: bg, color }} className={`px-5 py-14 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-[1100px]">{children}</div>
    </section>
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
          src={antesImg}
          width={900}
          height={900}
          alt="Estudante brasileiro tentando traduzir palavra por palavra uma prova de inglês, com expressão de ansiedade e relógio ao fundo"
          className="mx-auto w-full max-w-[420px] rounded-2xl object-cover shadow-md"
        />
        <p className="mx-auto mt-4 max-w-[380px] text-[16px] leading-[1.6] opacity-80">
          Lê palavra por palavra. Tenta traduzir tudo. E ainda não sabe onde está a resposta.
        </p>
      </figure>

      <div className="flex items-center justify-center" aria-hidden="true">
        <svg
          className="bst3-arrow hidden h-[120px] w-[140px] md:block"
          viewBox="0 0 140 120"
          fill="none"
        >
          <path d="M8 84 C 45 20, 95 20, 126 66" stroke={C.red} strokeWidth="9" strokeLinecap="round" />
          <path d="M126 66 L 112 40 M126 66 L 100 74" stroke={C.red} strokeWidth="9" strokeLinecap="round" />
        </svg>
        <svg className="bst3-arrow h-[110px] w-[110px] md:hidden" viewBox="0 0 120 120" fill="none">
          <path d="M40 8 C 100 40, 100 70, 58 108" stroke={C.red} strokeWidth="9" strokeLinecap="round" />
          <path d="M58 108 L 82 92 M58 108 L 52 80" stroke={C.red} strokeWidth="9" strokeLinecap="round" />
        </svg>
      </div>

      <figure className="text-center">
        <figcaption
          style={{ ...sans, color: C.red }}
          className="mb-3 text-[15px] font-extrabold uppercase tracking-[0.3em]"
        >
          Depois
        </figcaption>
        <img
          src={depoisImg}
          width={900}
          height={900}
          alt="Estudante tranquila e concentrada localizando a informação-chave no texto e marcando a alternativa correta com segurança"
          className="mx-auto w-full max-w-[420px] rounded-2xl object-cover shadow-md"
        />
        <p className="mx-auto mt-4 max-w-[380px] text-[16px] leading-[1.6] opacity-80">
          Lê a questão. Identifica as pistas. Encontra o trecho. Interpreta com estratégia.
        </p>
      </figure>
    </div>
  );
}

function Bst3Page() {
  return (
    <div style={{ ...sans, backgroundColor: C.paper }} className="bst3-page min-h-screen overflow-x-hidden">
      <style>{`
        .bst3-page h1, .bst3-page h2, .bst3-page h3, .bst3-page h4 { color: inherit; }
        @keyframes bst3Pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        .bst3-pulse { animation: bst3Pulse 2.4s ease-in-out infinite; }
        .bst3-cta:hover { background-color: ${C.redDark} !important; }
        @keyframes bst3FadeUp { from { opacity: 0; transform: translateY(16px);} to { opacity:1; transform:none; } }
        .bst3-reveal { animation: bst3FadeUp .7s ease-out both; }
        @keyframes bst3Float { 0%,100% { transform: translateY(0);} 50% { transform: translateY(8px);} }
        .bst3-arrow { animation: bst3Float 1.6s ease-in-out infinite; }
        .bst3-page a:focus-visible, .bst3-page button:focus-visible { outline: 3px solid ${C.red}; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          .bst3-pulse, .bst3-reveal, .bst3-arrow { animation: none !important; }
        }
      `}</style>

      {/* BLOCO 1 — HERO */}
      <div
        style={{ ...sans, backgroundColor: C.black, color: C.white }}
        className="relative flex min-h-14 items-center justify-center px-32 py-3 text-center text-[9px] font-medium tracking-[0.06em] sm:text-[13px] sm:tracking-[0.1em]"
      >
        MÉTODO BRASIL SEM TRAVA — INGLÊS INSTRUMENTAL PARA PROVAS DO ZERO A1 AO C2 AVANÇADO
        <a
          href="https://falaebrasil.com.br"
          aria-label="Ir para o site principal Falaê Brasil"
          style={{ borderColor: C.red, color: C.white }}
          className="absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-md border px-3 py-2 text-[9px] font-bold uppercase tracking-normal transition-colors hover:bg-white/10 sm:right-5 sm:text-[11px]"
        >
          Site principal
        </a>
      </div>

      <Section bg={C.paper} color={C.graphite}>
        <div className="bst3-reveal flex flex-col items-center text-center">
          <p
            style={{ ...sans, color: C.black }}
            className="text-[24px] font-extrabold tracking-[0.18em] sm:text-[30px]"
          >
            BST <span style={{ color: C.red }}>—</span> BRASIL SEM TRAVA
          </p>
          <p
            style={{ ...sans, color: C.red }}
            className="mt-4 text-[12px] font-semibold tracking-[0.22em] sm:text-[14px]"
          >
            CARTILHA DE INGLÊS INSTRUMENTAL PARA PROVAS
          </p>

          <h1
            style={{ ...sans, color: C.black }}
            className="mx-auto mt-6 max-w-[900px] text-[27px] font-extrabold leading-[1.18] sm:text-[40px]"
          >
            Pare de traduzir palavra por palavra. Aprenda a{" "}
            <span style={{ color: C.red }}>DECODIFICAR</span> a prova e{" "}
            <span style={{ color: C.red }}>encontrar a resposta com estratégia</span> —{" "}
            <span style={{ color: C.red }}>do Zero A1 ao C2 Avançado</span>.
          </h1>

          <p className={`mx-auto mt-6 max-w-[760px] ${bodyText}`}>
            Uma jornada completa de Inglês Instrumental que começa com 12 técnicas para ensinar COMO
            enfrentar uma prova e evolui por seis níveis progressivos — A1, A2, B1, B2, C1 e C2 —
            com 7 apostilas em PDF, IA Leiaê e quizzes de interpretação para colocar a estratégia em
            prática.
          </p>

          <p
            style={{ ...sans, backgroundColor: C.black, color: C.white }}
            className="mt-7 rounded-full px-6 py-3 text-[12px] font-semibold tracking-[0.12em] sm:text-[14px]"
          >
            MÓDULO ZERO + A1 AO C2 • 7 PDFs • IA LEIAÊ • 72 QUIZZES • 720 QUESTÕES
          </p>

          <BeforeAfter />

          <p
            style={{ ...serif, color: C.black }}
            className="mx-auto mt-10 max-w-[760px] text-[20px] leading-snug sm:text-[24px]"
          >
            Do Fundamental II à pós-graduação. Da primeira estratégia de leitura ao nível C2.
          </p>

          <div className="mt-8 w-full">
            <Cta label="Quero aprender a decodificar provas por R$ 47,00" />
          </div>
        </div>
      </Section>

      {/* BLOCO 2 — DEPOIMENTOS */}
      <Section bg={C.grayLight} color={C.graphite}>
        <h2
          style={{ ...sans, color: C.black }}
          className="mx-auto max-w-[900px] text-center text-[28px] font-extrabold leading-tight sm:text-[36px]"
        >
          Veja o que alunos reais dizem sobre o método do Teacher Jóis Alaby
        </h2>
        <RedRule />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bst3-reveal rounded-2xl p-7 text-center shadow-md transition-transform duration-200 hover:-translate-y-1"
              style={{ backgroundColor: C.white, border: "1px solid rgba(11,11,11,0.10)" }}
            >
              <img
                src={t.photo}
                loading="lazy"
                width={160}
                height={160}
                className="mx-auto h-20 w-20 rounded-full object-cover"
                style={{ border: `2px solid ${C.red}` }}
                alt={`Retrato de ${t.name}, aluno do Teacher Jóis Alaby`}
              />
              <div style={{ color: C.red }} className="mt-4 text-lg" aria-label="5 estrelas">
                ★★★★★
              </div>
              <p className={`mt-4 italic ${bodyText}`}>“{t.text}”</p>
              <p className="mt-5 text-[16px] font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[760px] text-center text-[13px] leading-[1.7] opacity-70">
          Depoimentos relacionados à experiência de aprendizagem e ao método do Teacher Jóis Alaby.
          Resultados podem variar conforme dedicação, nível de conhecimento e contexto de cada aluno.
        </p>
      </Section>

      {/* BLOCO 3 — GRANDE PROBLEMA */}
      <Section bg={C.black} color={C.white}>
        <h2
          style={{ ...sans }}
          className="mx-auto max-w-[900px] text-center text-[28px] font-extrabold leading-tight sm:text-[36px]"
        >
          O grande problema de estudar inglês para provas tentando entender cada palavra…
        </h2>
        <RedRule />
        <p className={`mx-auto mt-8 max-w-[760px] text-center ${bodyText}`}>
          Você abre o texto, encontra palavras desconhecidas e começa automaticamente a traduzir
          linha por linha. O relógio continua correndo, sua concentração cai e, quando você
          finalmente chega às alternativas, já não sabe qual informação realmente importa.
        </p>
        <p className="mx-auto mt-4 max-w-[760px] text-center text-[17px] leading-[1.7] opacity-85">
          Talvez você já tenha vivido uma destas situações:
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bst3-reveal rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(229,43,34,0.35)" }}
            >
              <h3 className="text-[19px] font-semibold leading-snug">
                <span style={{ color: C.red }}>❌</span> {p.title}
              </h3>
              <p className={`mt-3 opacity-85 ${bodyText}`}>{p.text}</p>
            </div>
          ))}
        </div>

        <p
          style={{ ...serif }}
          className="mx-auto mt-12 max-w-[820px] text-center text-[22px] italic leading-snug sm:text-[24px]"
        >
          Você não precisa traduzir 100% do texto. Precisa aprender a ler com objetivo.
        </p>

        <p
          style={{ backgroundColor: C.red, color: C.white }}
          className="mx-auto mt-10 max-w-[860px] rounded-xl px-6 py-5 text-center text-[18px] font-bold uppercase leading-snug tracking-wide sm:text-[20px]"
        >
          Menos tradução palavra por palavra. Mais estratégia, contexto e compreensão.
        </p>

        <p className={`mx-auto mt-8 max-w-[760px] text-center ${bodyText}`}>
          E se você pudesse aprender exatamente o que observar antes, durante e depois de ler uma
          questão?
        </p>
      </Section>

      {/* BLOCO 4 — OS 3 PASSOS */}
      <Section bg={C.paper} color={C.graphite}>
        <h2
          style={{ ...sans, color: C.black }}
          className="mx-auto max-w-[900px] text-center text-[28px] font-extrabold leading-tight sm:text-[36px]"
        >
          Estes são os 3 passos para desenvolver sua leitura para provas em inglês
        </h2>
        <RedRule />
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bst3-reveal overflow-hidden rounded-2xl shadow-md transition-transform duration-200 hover:-translate-y-1"
              style={{ backgroundColor: C.white, border: "1px solid rgba(11,11,11,0.10)" }}
            >
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                width={1200}
                height={912}
                className="h-52 w-full object-cover"
              />
              <div className="p-7">
                <div style={{ ...serif, color: C.red }} className="text-[44px] font-bold leading-none">
                  {s.n}
                </div>
                <h3 style={{ color: C.black }} className="mt-3 text-[20px] font-semibold">
                  {s.title}
                </h3>
                <p className={`mt-3 opacity-85 ${bodyText}`}>{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 style={{ color: C.black }} className="text-center text-[22px] font-extrabold sm:text-[26px]">
            As 12 Técnicas Estratégicas do Módulo Zero
          </h3>
          <ol className="mx-auto mt-8 grid max-w-[900px] gap-3 sm:grid-cols-2">
            {techniques.map((t, i) => (
              <li
                key={t}
                className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 text-[16px] leading-[1.6] shadow-sm"
                style={{ border: "1px solid rgba(11,11,11,0.08)" }}
              >
                <span style={{ color: C.red }} className="font-extrabold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ol>

          <div className="mx-auto mt-12 max-w-[900px]">
            <h3 style={{ color: C.black }} className="text-center text-[22px] font-extrabold sm:text-[26px]">
              A progressão dos módulos: Zero → A1 → A2 → B1 → B2 → C1 → C2
            </h3>
            <ol className="mt-8 space-y-3">
              {modules.map((m) => (
                <li
                  key={m.tag}
                  className="bst3-reveal rounded-xl bg-white px-5 py-4 shadow-sm"
                  style={{ borderLeft: `4px solid ${C.red}` }}
                >
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span style={{ color: C.red }} className="text-[13px] font-extrabold tracking-widest">
                      {m.tag}
                    </span>
                    <span style={{ color: C.black }} className="text-[17px] font-semibold">
                      {m.title}
                    </span>
                  </div>
                  {m.subtitle ? <p className="mt-1 text-[15px] opacity-70">{m.subtitle}</p> : null}
                  <p style={{ color: C.red }} className="mt-1 text-[12px] font-bold tracking-[0.18em]">
                    {m.step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mx-auto mt-12 grid max-w-[900px] gap-6 md:grid-cols-2">
            {moduleCards.map((m) => (
              <div
                key={m.tag}
                className="bst3-reveal rounded-2xl bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                style={{
                  border:
                    m.tone === 2
                      ? `1px solid ${C.red}`
                      : m.tone === 1
                        ? "1px solid rgba(11,11,11,0.18)"
                        : "1px solid rgba(11,11,11,0.08)",
                  borderTop: `${m.tone === 0 ? 3 : m.tone === 1 ? 4 : 6}px solid ${C.red}`,
                }}
              >
                <h4 style={{ color: C.red }} className="text-[13px] font-extrabold tracking-widest">
                  {m.tag}
                </h4>
                <h3 style={{ color: C.black }} className="mt-2 text-[20px] font-bold leading-tight">
                  {m.title}
                </h3>
                <p className="mt-1 text-[15px] opacity-70">{m.subtitle}</p>
                {m.micro ? <p className="mt-1 text-[12px] leading-[1.5] opacity-55">{m.micro}</p> : null}
                <ol className="mt-4 grid gap-2 text-[16px] leading-[1.6] lg:grid-cols-2">
                  {m.items.map((i, idx) => (
                    <li key={i} className="flex gap-2">
                      <span style={{ color: C.red }} className="font-extrabold">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 text-[16px] font-semibold leading-[1.6]">{m.note}</p>
              </div>
            ))}
          </div>

        </div>
      </Section>

      {/* BLOCO 5 — ENTREGÁVEIS */}
      <Section bg={C.black2} color={C.white}>
        <p style={{ color: C.red }} className="text-center text-[13px] font-semibold tracking-[0.25em]">
          ISTO NÃO É APENAS MAIS UMA APOSTILA
        </p>
        <h2
          style={{ ...sans }}
          className="mx-auto mt-3 max-w-[900px] text-center text-[28px] font-extrabold leading-tight sm:text-[36px]"
        >
          Veja tudo o que você recebe com o BST Inglês Instrumental para Provas
        </h2>
        <RedRule />
        <p className={`mx-auto mt-8 max-w-[760px] text-center ${bodyText}`}>
          Você recebe uma jornada integrada: estratégia, conteúdo progressivo, leitura assistida e
          prática de interpretação.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {deliverables.map((d) => (
            <div
              key={d.title}
              className="bst3-reveal overflow-hidden rounded-2xl transition-transform duration-200 hover:-translate-y-1"
              style={{ backgroundColor: "rgba(0,0,0,0.35)", border: `1px solid ${C.red}55` }}
            >
              <img
                src={d.img}
                alt={d.alt}
                loading="lazy"
                width={1200}
                height={912}
                className="h-48 w-full object-cover"
              />
              <div className="p-7">
                <h3 style={{ color: C.red }} className="text-[19px] font-bold leading-snug">
                  {d.title}
                </h3>
                <p className={`mt-3 ${bodyText}`}>{d.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{ backgroundColor: C.red, color: C.white }}
          className="mx-auto mt-12 w-fit rounded-full px-7 py-3 text-center text-[14px] font-bold uppercase tracking-wider sm:text-[16px]"
        >
          720 questões de interpretação para praticar
        </p>
      </Section>

      {/* BLOCO 6 — O QUE VOCÊ VAI DESENVOLVER */}
      <Section bg={C.black} color={C.white}>
        <h2
          style={{ ...sans }}
          className="mx-auto max-w-[900px] text-center text-[28px] font-extrabold leading-tight sm:text-[36px]"
        >
          Você não vai apenas estudar inglês. Vai aprender a{" "}
          <span style={{ color: C.red }}>DECODIFICAR</span> uma prova.
        </h2>
        <RedRule />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {mastery.map((m) => (
            <div
              key={m.title}
              className="bst3-reveal rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(229,43,34,0.30)" }}
            >
              <div className="text-3xl" aria-hidden="true">
                {m.emoji}
              </div>
              <h3 className="mt-3 text-[18px] font-bold leading-snug">{m.title}</h3>
              <p className={`mt-2 opacity-85 ${bodyText}`}>{m.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BLOCO 7 — RECURSOS ESPECIAIS */}
      <Section bg={C.paper} color={C.graphite}>
        <p style={{ color: C.red }} className="text-center text-[13px] font-semibold tracking-[0.25em]">
          E AINDA HÁ MAIS…
        </p>
        <h2
          style={{ ...sans, color: C.black }}
          className="mx-auto mt-3 max-w-[900px] text-center text-[28px] font-extrabold leading-tight sm:text-[36px]"
        >
          Recursos criados para transformar leitura em aprendizagem ativa
        </h2>
        <RedRule />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map((b) => (
            <div
              key={b.tag}
              className="bst3-reveal overflow-hidden rounded-2xl shadow-md transition-transform duration-200 hover:-translate-y-1"
              style={{ backgroundColor: C.white, border: "1px solid rgba(11,11,11,0.10)" }}
            >
              <div
                style={{ backgroundColor: C.red, color: C.white }}
                className="px-5 py-2 text-center text-[14px] font-bold uppercase tracking-widest"
              >
                {b.tag}
              </div>
              <div className="p-7">
                <h3 style={{ color: C.black }} className="text-[19px] font-semibold leading-snug">
                  {b.title}
                </h3>
                <p className={`mt-3 opacity-85 ${bodyText}`}>{b.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-[760px] text-center text-[15px] leading-[1.7] opacity-70">
          Progressão inspirada nos níveis de proficiência A1 a C2 do Common European Framework of
          Reference for Languages — CEFR.
        </p>
      </Section>

      {/* BLOCO 8 — PARA QUEM É */}
      <Section bg={C.grayLight} color={C.graphite}>
        <h2
          style={{ ...sans, color: C.black }}
          className="mx-auto max-w-[900px] text-center text-[28px] font-extrabold leading-tight sm:text-[36px]"
        >
          O BST Inglês Instrumental para Provas é para você que:
        </h2>
        <RedRule />
        <ul className="mx-auto mt-10 max-w-[760px] space-y-4">
          {forYou.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[17px] font-medium leading-[1.7] sm:text-[18px]">
              <span style={{ color: C.red }} aria-hidden="true">
                ✅
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <img
          src={studentsImg}
          alt="Adolescente, universitária e adulto profissional estudando inglês em diferentes contextos"
          loading="lazy"
          width={1400}
          height={760}
          className="mx-auto mt-12 w-full max-w-[900px] rounded-2xl shadow-md"
        />
        <p
          style={{ ...serif, color: C.black }}
          className="mx-auto mt-10 max-w-[820px] text-center text-[23px] leading-snug sm:text-[26px]"
        >
          Do primeiro texto básico à leitura acadêmica avançada: aprenda a ler com os olhos de quem
          sabe o que procurar.
        </p>
      </Section>

      {/* BLOCO 9 — RECAPITULANDO */}
      <Section bg={C.black} color={C.white}>
        <h2
          style={{ ...sans }}
          className="mx-auto max-w-[900px] text-center text-[28px] font-extrabold leading-tight sm:text-[36px]"
        >
          RECAPITULANDO… Veja tudo o que você leva hoje:
        </h2>
        <RedRule />
        <ul className="mx-auto mt-10 max-w-[760px] space-y-4">
          {recap.map((item) => (
            <li key={item} className="flex flex-wrap items-end gap-x-2 text-[17px] leading-[1.6]">
              <span className="max-w-full flex-1">{item}</span>
              <span
                className="hidden flex-1 border-b border-dotted sm:block"
                style={{ borderColor: C.red, minWidth: "24px" }}
                aria-hidden="true"
              />
              <span style={{ color: C.red }} className="font-bold uppercase">
                Incluído
              </span>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-10 h-px max-w-[760px]" style={{ backgroundColor: C.red }} />
        <p style={{ ...serif }} className="mt-8 text-center text-[23px] sm:text-[26px]">
          Tudo reunido em uma única jornada de preparação progressiva.
        </p>
        <p className="mx-auto mt-6 max-w-[760px] text-center text-[18px] font-semibold leading-[1.7]">
          E você pode ter acesso completo por:
        </p>
        <div className="bst3-arrow mt-8 text-center text-4xl" style={{ color: C.red }} aria-hidden="true">
          ↓
        </div>
      </Section>

      {/* BLOCO 10 — OFERTA */}
      <Section bg={C.paper} color={C.graphite}>
        <OfferCard />
      </Section>

      {/* BLOCO 11 — COMO ACESSAR */}
      <Section bg={C.grayLight} color={C.graphite}>
        <h2
          style={{ ...sans, color: C.black }}
          className="mx-auto max-w-[900px] text-center text-[28px] font-extrabold leading-tight sm:text-[36px]"
        >
          Compre agora e comece sua preparação!
        </h2>
        <RedRule />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {howToAccess.map((s) => (
            <div key={s.n} className="bst3-reveal text-center">
              <div
                style={{ ...serif, backgroundColor: C.black, color: C.red }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-[28px] font-bold"
              >
                {s.n}
              </div>
              <h3 style={{ color: C.black }} className="mt-4 text-[18px] font-bold uppercase tracking-wide">
                {s.title}
              </h3>
              <p className={`mt-3 opacity-85 ${bodyText}`}>{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BLOCO 12 — AUTORIDADE */}
      <Section bg={C.black2} color={C.white}>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src={joisImg}
            alt="Retrato profissional do Teacher Jóis Alaby, criador do BST Inglês Instrumental para Provas"
            loading="lazy"
            className="mx-auto w-full max-w-[420px] rounded-2xl object-cover"
            style={{ border: `2px solid ${C.red}` }}
          />
          <div>
            <p style={{ color: C.red }} className="text-[13px] font-semibold tracking-[0.25em]">
              QUEM CRIOU O MÉTODO
            </p>
            <h2 style={{ ...sans }} className="mt-3 text-[32px] font-extrabold sm:text-[38px]">
              Teacher Jóis Alaby
            </h2>
            <p style={{ color: C.grayMid }} className="mt-2 text-[18px] font-medium">
              Criador da iniciativa Brasil Sem Trava e do BST Inglês Instrumental para Provas
            </p>
            <p className={`mt-6 ${bodyText}`}>
              À frente da iniciativa Brasil Sem Trava, o Teacher Jóis Alaby desenvolve o conceito de
              Inglês Transversal: utilizar a língua como uma ferramenta prática para alcançar
              objetivos reais. No BST Inglês Instrumental para Provas, essa abordagem é direcionada
              à leitura e à interpretação. Em vez de tratar inglês apenas como uma sequência de
              regras isoladas, a proposta combina estratégia, estrutura da língua, leitura assistida
              e prática progressiva para ajudar o aluno a compreender como enfrentar textos de
              diferentes níveis.
            </p>
            <p
              style={{ ...serif, borderLeft: `3px solid ${C.red}` }}
              className="mt-7 pl-5 text-[20px] italic leading-snug sm:text-[22px]"
            >
              “Não se trata de traduzir cada palavra. Trata-se de aprender a descobrir o que o texto
              está dizendo e o que a questão quer de você.”
            </p>
          </div>
        </div>
      </Section>

      {/* BLOCO 13 — CONVERSA SÉRIA */}
      <Section bg={C.black} color={C.white}>
        <h2
          style={{ ...sans }}
          className="mx-auto max-w-[900px] text-center text-[28px] font-extrabold leading-tight sm:text-[36px]"
        >
          Agora, uma conversa séria. Você tem duas opções:
        </h2>
        <RedRule />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div
            className="rounded-2xl p-7"
            style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.22)" }}
          >
            <h3 className="text-[21px] font-bold">❌ Opção 1: Continuar tentando traduzir tudo</h3>
            <p className={`mt-3 opacity-85 ${bodyText}`}>
              Entrar em cada nova prova sem estratégia, perder tempo com palavras desconhecidas,
              ficar inseguro diante de textos maiores e depender de materiais soltos.
            </p>
          </div>
          <div
            className="rounded-2xl p-7 md:scale-[1.03]"
            style={{ backgroundColor: "rgba(229,43,34,0.12)", border: `2px solid ${C.red}` }}
          >
            <h3 className="text-[21px] font-bold">✅ Opção 2: Aprender a decodificar</h3>
            <p className={`mt-3 opacity-90 ${bodyText}`}>
              Começar pelas técnicas fundamentais, avançar do A1 ao C2, explorar textos com a IA
              Leiaê e testar sua interpretação continuamente.
            </p>
          </div>
        </div>
        <p
          style={{ ...serif }}
          className="mx-auto mt-12 max-w-[820px] text-center text-[22px] italic sm:text-[24px]"
        >
          Você não controla qual texto cairá na próxima prova. Mas pode mudar a maneira como entra
          nele.
        </p>
        <div className="mt-10 flex justify-center">
          <Cta label="Sim! Quero aprender a decodificar provas" />
        </div>
      </Section>

      {/* BLOCO 14 — REPETIR OFERTA */}
      <Section bg={C.paper} color={C.graphite}>
        <OfferCard />
      </Section>

      {/* BLOCO 15 — GARANTIA */}
      <Section bg={C.grayLight} color={C.graphite}>
        <div
          className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-8 rounded-2xl p-8 text-center shadow-md sm:p-10 md:flex-row md:text-left"
          style={{ backgroundColor: C.white, border: "1px solid rgba(11,11,11,0.10)" }}
        >
          <div
            className="flex h-36 w-36 flex-none flex-col items-center justify-center rounded-full text-center"
            style={{ border: `4px solid ${C.red}`, color: C.red }}
            role="img"
            aria-label="Selo de garantia incondicional de 7 dias"
          >
            <span style={{ ...serif }} className="text-[40px] font-bold leading-none">
              7 DIAS
            </span>
            <span className="mt-1 px-3 text-[10px] font-semibold uppercase leading-tight tracking-wider">
              Garantia Incondicional
            </span>
          </div>
          <div>
            <h2 style={{ ...sans, color: C.black }} className="text-[25px] font-extrabold sm:text-[30px]">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className={`mt-4 opacity-85 ${bodyText}`}>
              Conheça as apostilas, explore a IA Leiaê e faça os primeiros quizzes. Se, dentro do
              prazo da garantia, você concluir que o produto não atende às suas expectativas, basta
              solicitar o reembolso pelos canais oficiais de suporte. Você receberá 100% do valor
              pago, conforme as condições da garantia. Sem burocracia e sem letras miúdas.
            </p>
          </div>
        </div>
      </Section>

      {/* BLOCO 16 — FAQ */}
      <Section bg={C.paper} color={C.graphite}>
        <h2 style={{ ...sans, color: C.black }} className="text-center text-[28px] font-extrabold sm:text-[36px]">
          Perguntas Frequentes
        </h2>
        <RedRule />
        <div className="mt-10">
          <Faq />
        </div>
        <div className="mt-12 flex justify-center">
          <Cta label="Quero começar minha preparação por R$ 47,00" />
        </div>
      </Section>

      {/* BLOCO 17 — RODAPÉ */}
      <footer style={{ backgroundColor: C.black }} className="px-5 py-14">
        <div className="mx-auto w-full max-w-[800px] text-center" style={{ color: C.white }}>
          <p style={{ color: C.red }} className="text-[16px] font-bold tracking-[0.3em]">
            BST — BRASIL SEM TRAVA
          </p>
          <p className="mt-2 text-[14px] opacity-65">FalaeBrasil.com.br</p>
          <p className="mt-6 text-[14px] opacity-65">
            <span className="hover:underline">Termos de Uso</span>
            <span className="mx-2">|</span>
            <span className="hover:underline">Política de Privacidade</span>
            <span className="mx-2">|</span>
            <span className="hover:underline">Suporte: atendimento@falaebrasil.com.br</span>
          </p>
          <p className="mt-6 text-[14px] opacity-65">
            Copyright © Brasil Sem Trava — BST Inglês Instrumental para Provas — 2026. Todos os
            direitos reservados.
          </p>
          <p className="mt-6 text-[13px] leading-[1.8] opacity-55">
            Este site não é afiliado ao Facebook, à Meta ou a qualquer entidade do Facebook. Depois
            que você sair das plataformas dessas empresas, a responsabilidade pelo conteúdo passa a
            ser deste site. O BST Inglês Instrumental para Provas é um material educacional
            independente. A menção a exames, certificações, vestibulares, níveis internacionais,
            universidades ou processos acadêmicos possui finalidade exclusivamente educacional e não
            representa parceria, afiliação, patrocínio ou endosso das respectivas instituições. A
            aquisição deste produto não garante aprovação, certificação, nota específica, ingresso
            em universidade, mestrado, doutorado ou qualquer outro resultado acadêmico. Os
            resultados dependem de preparação, dedicação, conhecimento, características da avaliação
            e desempenho individual.
          </p>
        </div>
      </footer>
    </div>
  );
}

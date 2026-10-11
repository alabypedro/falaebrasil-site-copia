/**
 * Links de checkout recorrente (Asaas) e canal comercial.
 * Assinaturas recorrentes no cartão — sem comprometer limite em 12x.
 */
const WA = (msg: string) =>
  "https://wa.me/5511981612800?text=" + encodeURIComponent(msg);

/**
 * OPEN: link de assinatura recorrente confirmado.
 * PRO / Família / Imersões: aguardando os links do Asaas — por enquanto
 * direcionam para o WhatsApp comercial (trocar aqui quando existirem).
 */
export const CHECKOUT = {
  bst3a: "https://www.asaas.com/000/c/wvcb805r5d4r3txy",
  // Fiquei Entre Duas (BST3B).
  bst3b: "https://www.asaas.com/000/c/dbr6enlytlvalc81",
  // Desmonte a Frase (BST3C).
  comboBst3aBst3b: "https://www.asaas.com/000/c/2n7vawtsoqvaii28",
  comboBst3bBst3a: "https://www.asaas.com/000/c/76gar2eye5swbqxw",
  bst3c: "https://www.asaas.com/000/c/pg51t9orlbb5mjys",
  destravaFalae: "https://www.asaas.com/000/c/kuuwz8oan1ek5o4n",
  bst4: "https://www.asaas.com/000/c/xcnoveexmhwxlnw4",
  bst2: "https://www.asaas.com/000/c/1w1dwxf8vs0w32bg",
  comboBst2Bst5: "https://www.asaas.com/000/c/cxsfkxpb0id0dd7v",
  comboBst5Bst1: "https://www.asaas.com/000/c/5xxb61rreenfdhkb",
  comboBst5Bst4: "https://www.asaas.com/000/c/rk2h34untxj4lrus",
  comboBst5Bst1Bst4: "https://www.asaas.com/000/c/a86mu6ar8nk72su9",
  bst1: "https://www.asaas.com/000/c/rr5mc0ewvoiwnxtt",
  comboBst1Bst4: "https://www.asaas.com/000/c/okw78p3rl7vbggml",
  open: "https://www.asaas.com/c/4qonbb073mgy3glo",
  proAdultos: "https://www.asaas.com/000/c/57t5yjkcfmj757rl",
  proKidsTeens: "https://www.asaas.com/000/c/qhk5xkozqahjvmul",
  proFamilia: WA("Quero o Plano Família PRO: 2 membros por R$ 96/mês."),
  imersaoAdultos: "https://www.asaas.com/c/ne7xvpfmlz4vbsa9",
  imersaoKidsTeens: WA("Quero minha vaga na Imersão Kids & Teens."),
  reuniaoKidsTeens: WA(
    "Quero garantir minha vaga na Reunião com pais e aula demonstrativa Falaê Brasil Kids & Teens (gratuita)."
  ),
} as const;

export const IMERSAO_POST_PAYMENT_URL =
  "https://falaebrasil.com.br/obrigado-imersao";

export const WHATSAPP_GRUPO_IMERSAO =
  "https://chat.whatsapp.com/BfBCQNe7GXZ1MXWaxSx4Cc?mode=gi_t";

export const WHATSAPP_COMERCIAL =
  "https://wa.me/5511981612800?text=" +
  encodeURIComponent(
    "Olá! Quero consultar horários e valores do Plano VIP do Falaê Brasil."
  );

export const WHATSAPP_SUPORTE_DESTRAVA = WA(
  "Olá! Quero solicitar suporte sobre a garantia do Destrava Falaê."
);

export const WHATSAPP_GERAL =
  "https://wa.me/5511981612800?text=" +
  encodeURIComponent(
    "Tenho interesse em saber mais sobre o curso Falaê Brasil! Inglês transversal."
  );

export const PLAN_FEATURES = {
  open: [
    "Acesso completo ao APP Falaê Brasil (Zero A1 ao C2 Avançado)",
    "5 IAs exclusivas: Memorizaê, Falaê, Escutaê, Leiaê e Escreveaê",
    "Coleção de estórias curtas com quizzes dos níveis A1 à C2",
    "Músicas com letras, histórias por nível, quizzes e gamificação com bônus",
    "Aulas 100% pré-gravadas e autônomas",
    "Plantão de dúvidas em horário comercial",
    "Descontos especiais para membros da mesma família",
  ],
  openExcluded: [
    "Aulas ao vivo no Zoom",
    "Aulas particulares",
  ],
  pro: [
    "Acesso ao APP Falaê Brasil com o curso organizado por nível",
    "5 IAs para praticar memória, fala, escuta, leitura e escrita",
    "Atividades, quizzes, vídeos, PDFs e prática durante a semana",
    "Aulas ao vivo via Zoom disponíveis para o seu público e nível",
    "Grupos próprios para Adultos 18+ e aulas específicas para Kids & Teens de 8 a 17 anos",
    "Comunidades exclusivas WhatsApp “Let’s Falaê” por nível",
    "Sessão intercultural mensal em áudio com professores americanos",
  ],
  vip: [
    "Tudo do Plano PRO",
    "Aulas particulares ao vivo via Zoom",
    "Horários combinados diretamente com a equipe",
  ],
} as const;


export const IMMERSIONS = [
  {
    title: "Imersão Curso Falaê Brasil PRO Adultos 18+",
    when: "1º sábado do mês • 09h às 12h",
    price: "R$ 21,00",
    href: CHECKOUT.imersaoAdultos,
    cta: "Garantir inscrição na Imersão Adultos",
    bonuses: [
      "Imersão do módulo 1 com 4 lições do ESSENTIAL PRO (A1)",
      "01 Guia BST completo à sua escolha (Viagem, Entrevistas, Vistos EUA ou Exames A1–C2), com PDF e IAs",
    ],
  },
  {
    title: "Reunião com pais e aula demonstrativa\nFalaê Brasil Kids & Teens",
    when: "3º sábado do mês • 10h às 12h",
    href: CHECKOUT.imersaoKidsTeens,
    cta: "Garantir vaga na reunião com pais e família",
    bonuses: [
      "Acesso gratuito por 1 mês às aulas ao vivo via Zoom",
      "Acesso gratuito por 1 mês ao APP Falaê Brasil",
    ],
  },
] as const;

export const COMMUNITIES = [
  { name: "Let’s Falaê — ENG/POR", desc: "Primeiros passos: A1 e A2." },
  { name: "Let’s Falaê — ENGLISH ONLY", desc: "Demais níveis." },
] as const;

import clarindaImg from "@/assets/testimonials/clarinda-kipper.jpg";
import cleisonImg from "@/assets/testimonials/cleison-lima.jpg";
import brunoImg from "@/assets/testimonials/bruno-mendonca.jpg";
import danielaImg from "@/assets/testimonials/daniela-bertoldo.png";
import leonardoImg from "@/assets/testimonials/leonardo-canella.jpg";
import paulaImg from "@/assets/testimonials/paula-freitas.jpg";
import darleneImg from "@/assets/testimonials/darlene-martins.jpg";

const items = [
  {
    name: "Clarinda Kipper",
    role: "RH multinacional — São João D'Oeste (SC)",
    photo: clarindaImg,
    quote:
      "Como trabalho no RH de uma multinacional canadense, uso inglês toda semana. O teacher Jóis e seu método são direto ao ponto — inglês prático e funcional. A confiança veio ao longo do tempo, porque sempre fui uma pessoa mais reservada. A forma de me comunicar hoje me traz tranquilidade e objetividade para aquilo que realmente interessa.",
    color: "bg-brand-yellow text-primary",
  },
  {
    name: "Cleison Lima",
    role: "Empreendedor em Vendas — Quixeramobim (CE)",
    photo: cleisonImg,
    quote:
      "Antes de conhecer o método Falaê Brasil!, algo já me incomodava sobre os cursos não priorizarem o inglês útil no dia a dia. Trabalho, família, amigos, cotidiano — como fica? Não só quero viver o inglês, como já estou vivendo, junto com esse método único. Super recomendo.",
    color: "bg-brand-green text-primary-foreground",
  },
  {
    name: "Bruno Mendonça",
    role: "Key Account Manager — São Paulo (SP)",
    photo: brunoImg,
    quote:
      "Eu já falava inglês antes de começar com o teacher Jóis. A grande sacada dele é que ele traz o inglês pra realidade que eu vivo. Mudei de empresa e agora lidero reuniões online com estrangeiros com muito mais confiança. Super recomendo.",
    color: "bg-brand-blue text-primary-foreground",
  },
  {
    name: "Daniela Bertoldo",
    role: "Escritora e Fundadora do Instituto Bert — Ribeirão Preto (SP)",
    photo: danielaImg,
    quote:
      "O inglês sempre foi um sonho distante pra mim. Achei que era tarde demais. Mas o jeito que o teacher Jóis ensina é diferente — ele fala com a gente, não pra gente. Hoje já pretendo lançar um livro em inglês dentro da minha área profissional!",
    color: "bg-brand-yellow text-primary",
  },
  {
    name: "Leonardo Canella",
    role: "Controladoria em Multinacional — São Paulo (SP)",
    photo: leonardoImg,
    quote:
      "Já tive contato com inglês duas vezes com métodos que não consegui seguir e desisti. Me identifiquei com o método pela facilidade em estudar e trocar em aula. O professor Jóis é dedicado e faz intervenções pontuais para eu evoluir. Já percebo evolução a cada aula.",
    color: "bg-brand-green text-primary-foreground",
  },
  {
    name: "Paula Freitas",
    role: "Gerente de RH em multinacional — São Paulo (SP)",
    photo: paulaImg,
    quote:
      "Eu nunca gostei de inglês. Decorar verbo To Be, gramática chata. Conheci o teacher Jóis e o método é super solto e direto. Passei a gostar porque ele me permite falar muito e aprender com meus erros. Fui pela primeira vez à matriz da empresa no exterior. Thanks a lot, teacher!",
    color: "bg-brand-blue text-primary-foreground",
  },
  {
    name: "Darlene Martins",
    role: "Secretária Executiva — Valinhos (SP)",
    photo: darleneImg,
    quote:
      "Comecei o curso com o teacher Jóis esse ano. O método me mostrou que dá pra ser leve e prático. Sempre fui muito travada. Meu filho adora inglês e me divirto com ele. Fico mais relaxada e isso me dá confiança para avançar. Super recomendo.",
    color: "bg-brand-yellow text-primary",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-brand-ice py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue-mid">
            Histórias reais
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Depoimentos de Clientes
          </h2>
          <span className="mx-auto mt-5 block h-px w-20 bg-brand-gold" aria-hidden="true" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition-shadow hover:shadow-elevated"
            >
              <div className="mb-2 font-editorial text-4xl leading-none text-brand-gold">"</div>
              <blockquote className="text-sm leading-relaxed text-foreground/85">{t.quote}</blockquote>
              <figcaption className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs">
                <img
                  src={t.photo}
                  alt={`Foto de ${t.name}`}
                  loading="lazy"
                  className="h-14 w-14 flex-none rounded-full object-cover ring-2 ring-brand-blue-light"
                />
                <div>
                  <div className="font-bold uppercase tracking-wider text-primary">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


# Falaê Brasil Site

Crie um site institucional + landing page para a marca "Falaê Brasil! - Inglês Transversal", uma escola/metodologia de ensino de inglês para brasileiros (adultos, teens e kids, níveis A1 a B2). O projeto será publicado no domínio falaebrasil.com.br (o app logado já existe em app.falaebrasil.com.br, então este projeto é APENAS o site público/marketing).

## Estrutura de rotas (React Router)

- `/` → Home institucional (sobre a metodologia, diferenciais, depoimentos, CTA para conhecer o app e CTA para a LP de vendas)
- `/lp` → Landing page de vendas (copy persuasiva, foco em conversão, formulário/CTA de checkout, prova social, FAQ)
- `/obrigado` → Página de obrigado pós-conversão (mensagem de boas-vindas, próximos passos, link pra acessar o app em app.falaebrasil.com.br)

Use react-router-dom com BrowserRouter.

## Design

- Paleta "Modern Consultant": azul marinho profundo como primary, teal/cyan como accent, verde esmeralda como success, fundo branco limpo. Use HSL e tokens semânticos no index.css + tailwind.config.ts (NUNCA cores hardcoded em componentes).
- Tipografia: Inter (headings bold, corpo clean).
- Visual: profissional, confiável, moderno. Cards arredondados, sombras sutis, micro-animações suaves. Mobile-first responsivo.
- Hero impactante na Home e na LP, com CTA destacado.

## Meta Pixel (Facebook/Meta)

- Já deixe a estrutura preparada para instalar o Pixel da Meta no <head> do index.html, com o ID configurável (deixar como placeholder META_PIXEL_ID que o usuário vai trocar).
- Disparar evento `PageView` em todas as páginas (via SPA route change, não só no load inicial).
- Disparar evento `Lead` quando o usuário clicar no CTA principal da `/lp`.
- Disparar evento `CompleteRegistration` ao entrar em `/obrigado`.
- Criar um helper `src/lib/pixel.ts` com função `trackEvent(name, params?)` e usar nos componentes.
- Incluir o <noscript> com a tag <img> de fallback no <body> (não no <head>).

## SEO

- index.html com title <60 chars, meta description <160 chars, canonical apontando pra https://falaebrasil.com.br/, og:title, og:description, og:url, og:type=website.
- JSON-LD Organization no index.html.
- Usar react-helmet-async para per-route meta (cada rota com seu title/description/canonical próprio).
- Single H1 por página, semantic HTML, alt text em imagens.
- robots.txt e sitemap.xml com as 3 rotas.

## Conteúdo (placeholders por enquanto)

Use textos placeholder convincentes em PT-BR sobre ensino de inglês com metodologia transversal (pronúncia, fluência, gramática, vocabulário integrados). Inclua seções típicas: hero, sobre a metodologia, para quem é (adultos/teens/kids), níveis (A1-B2), depoimentos, FAQ, footer com links sociais.

Na Home, incluir um botão "Acessar o App" que linka para https://app.falaebrasil.com.br.
Na /obrigado, mesma coisa: CTA grande "Acessar meu app" → https://app.falaebrasil.com.br.

## Não usar

- Sem Supabase / sem backend / sem autenticação neste projeto (é só site estático de marketing).
- Sem service worker / sem PWA.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://falae-brasil-site.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c9f29d5e-4037-47f8-b06a-0dacac8444f0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

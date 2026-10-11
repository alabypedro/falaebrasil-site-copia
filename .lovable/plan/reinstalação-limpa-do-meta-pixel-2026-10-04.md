# Reinstalação limpa do Meta Pixel

## Implementação
- Remover aliases entre `fbq` e `_fbq`, a fila personalizada e os disparos antigos que não pertencem às seis páginas comerciais.
- Instalar uma única vez, no documento principal, o código-base oficial do Pixel `2142327090010383`, incluindo o `PageView` automático.
- Manter um gerenciador central apenas para `ViewContent` e `InitiateCheckout`, usando `window.fbq` diretamente e preservando a matriz atual de produtos e valores.
- Preservar integralmente páginas, textos, preços, botões, modais, order bumps, links Asaas e responsividade.
- Manter `Purchase`, Conversions API e webhook Asaas desativados.

## Validação em etapas
1. Validar primeiro em `/bst2` que `window.fbq` existe e que o navegador envia uma requisição real `facebook.com/tr` com `PageView` e o Pixel oficial.
2. Restaurar e validar o `ViewContent` de BST2 com ID `BST2`, valor 47 e moeda BRL.
3. Aplicar a mesma infraestrutura às seis rotas comerciais e validar `PageView` e `ViewContent` em cada uma.
4. Testar cada opção de pagamento, confirmando uma requisição real de `InitiateCheckout` antes do redirecionamento ao Asaas e ausência de `Purchase`.

## Escopo técnico
- Atualizar somente a inicialização global, o gerenciador central do Pixel e chamadas antigas de rastreamento conflitantes.
- Não alterar a experiência visual nem a lógica comercial dos checkouts.

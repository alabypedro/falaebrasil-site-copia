# Rastreamento Meta Pixel centralizado

## Implementação
- Consolidar no gerenciador único do Meta Pixel o ID oficial, a matriz das seis páginas comerciais e as dez opções de pagamento.
- Disparar `PageView` e `ViewContent` uma única vez por rota, tanto em acesso direto quanto em navegação interna, sempre direcionados explicitamente ao Pixel oficial.
- Fazer todo botão final de pagamento usar uma única função que registra `InitiateCheckout` antes de seguir ao Asaas.
- Preservar integralmente design, textos, preços, modais, ofertas, responsividade e destinos de pagamento.
- Manter `Purchase`, Conversions API e webhook desativados nesta etapa.

## Detalhes técnicos
- Remover o `PageView` independente do código-base e deixar o gerenciador da rota controlar a sequência dos eventos.
- Aguardar `window.fbq` com fila confiável e usar `trackSingle` para o Pixel `2142327090010383`.
- Centralizar parâmetros e URLs de checkout para impedir divergência entre páginas.
- Substituir chamadas locais de BST1, BST2, BST4, BST5, PRO Adultos e PRO Kids & Teens pelo mesmo fluxo central.

## Validação e publicação
- Confirmar em ambiente local um único `PageView`, um único `ViewContent` e um único `InitiateCheckout` por ação final.
- Testar individualmente as dez combinações de pagamento, incluindo todos os order bumps.
- Publicar e confirmar no domínio oficial as requisições `facebook.com/tr` com o ID e eventos corretos.
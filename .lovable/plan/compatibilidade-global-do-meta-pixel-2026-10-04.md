# Compatibilidade global do Meta Pixel

## Implementação
- Manter uma única inicialização global do Pixel oficial `2142327090010383`.
- Adicionar ao gerenciador central uma verificação que restaura `window.fbq` a partir de `window._fbq` quando necessário.
- Fazer a fila de eventos aguardar essa compatibilidade antes de enviar `PageView`, `ViewContent` e `InitiateCheckout`.
- Preservar páginas, textos, preços, links, pop-ups, order bumps e demais comportamentos.

## Validação
- Confirmar em todas as seis páginas comerciais que `window.fbq` é uma função, inclusive simulando o estado em que apenas `window._fbq` existe.
- Verificar em `/bst2` os eventos `PageView`, `ViewContent` e `InitiateCheckout`, sem duplicação e sem `Purchase`.
- Publicar e repetir a verificação no domínio oficial.

# Order bump múltiplo do BST5

## Etapa de compra no BST5
- Interceptar todos os botões de compra de `/bst5` e abrir um único modal sobre a página, sem alterar a copy, o preço ou o restante da landing page.
- Manter o Destrava Falaê fixo por R$ 67 e permitir adicionar o Guia 50+ por R$ 27 e/ou o Guia de Vistos por R$ 17.
- Atualizar dinamicamente o resumo, o total e o texto do botão para R$ 67, R$ 94, R$ 84 ou R$ 111.
- Reutilizar as imagens existentes dos produtos, mostrar o aviso educacional do Guia de Vistos e destacar “Melhor combinação” somente quando os dois adicionais estiverem marcados.
- Permitir fechar pelo X ou por “Continuar vendo a página”, sem iniciar checkout.

## Checkouts e rastreamento
- Centralizar no arquivo de checkouts os três novos links Asaas e preservar o checkout individual atual do BST5.
- Abrir na mesma aba o checkout correspondente à seleção feita.
- Registrar abertura da oferta e início de checkout com combinação, identificador, valor e moeda corretos.
- Não disparar compra confirmada ao abrir o modal ou seguir para o Asaas.

## Liberação dos produtos
- Não simular confirmação de pagamento nem alterar outros produtos.
- A liberação automática dos combos depende do sistema externo que recebe pagamentos do Asaas; este projeto não contém esse processamento.
- Manter essa integração registrada como pendente para associar cada checkout a `BST5`, `COMBO_BST5_BST1`, `COMBO_BST5_BST4` ou `COMBO_BST5_BST1_BST4`.

## Verificação
- Testar todos os botões de compra da página e as quatro combinações.
- Confirmar totais, textos, seleções, fechamento e destinos exatos em computador, tablet e celular.
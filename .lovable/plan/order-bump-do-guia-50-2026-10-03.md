# Order bump do Guia 50+

## Etapa de oferta no BST1
- Interceptar todos os botões de compra de `/bst1` e abrir um modal alinhado ao visual atual, sem alterar o restante da página.
- Apresentar as duas escolhas com os textos e valores fornecidos: Guia 50+ por R$ 47 ou combo Guia 50+ + Guia de Vistos por R$ 64.
- Destacar o combo como oferta especial, exibir a imagem atual do Guia de Vistos e incluir o aviso educacional sem promessa de aprovação.
- Manter o checkout individual atual exatamente como está e abrir ambos os checkouts na mesma aba.

## Rastreamento
- Registrar visualização da oferta, escolha do produto individual e escolha do combo como eventos de início de compra, com valor e moeda corretos.
- Não disparar `Purchase` ao abrir o modal ou escolher uma opção; a confirmação continuará dependente do pagamento aprovado.

## Liberação dos dois produtos
- Preservar toda a lógica existente do site e não simular uma confirmação de pagamento.
- A liberação automática do combo exige que o sistema que recebe as confirmações do Asaas associe o checkout do combo ao identificador `COMBO_BST1_BST4` e conceda BST1 + BST4. Esse processamento não existe neste projeto institucional, portanto será registrado como integração pendente no sistema responsável pelo acesso dos alunos.

## Verificação
- Testar abertura, fechamento e as duas escolhas do modal em computador e celular.
- Confirmar os destinos exatos, valores corretos, ausência de cobrança duplicada e que nenhuma outra página ou checkout foi alterado.

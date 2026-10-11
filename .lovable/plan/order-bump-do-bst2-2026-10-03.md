# Order bump do BST2

## Etapa de compra no BST2
- Interceptar todos os quatro botões de compra de `/bst2` e abrir um único modal sobre a página, sem alterar a copy, o preço ou o restante da landing page.
- Manter o Guia de Entrevistas em Inglês fixo por R$ 47 e permitir adicionar o Destrava Falaê por R$ 27.
- Reutilizar as capas existentes dos dois produtos e apresentar os textos fornecidos em um modal limpo, responsivo e alinhado ao visual atual do BST2.
- Atualizar o resumo, o total e o botão entre R$ 47 e R$ 74 conforme a seleção.
- Permitir fechar pelo X ou por “Continuar vendo a página”, sem iniciar checkout.

## Checkouts e rastreamento
- Centralizar no arquivo de checkouts o checkout individual existente do BST2 e o novo combo BST2 + BST5.
- Abrir na mesma aba o checkout correspondente: BST2 individual no destino atual ou combo em `https://www.asaas.com/000/c/cxsfkxpb0id0dd7v`.
- Registrar abertura da oferta e início do checkout com identificador, escolha, valor e moeda corretos.
- Não disparar compra confirmada ao abrir o modal, selecionar o adicional ou seguir para o Asaas.

## Liberação dos produtos
- Não simular confirmação de pagamento nem alterar outros produtos, páginas ou checkouts.
- A liberação automática do combo depende do sistema externo que recebe pagamentos do Asaas; este projeto não contém esse processamento.
- Registrar como pendente a associação do checkout do combo ao identificador `COMBO_BST2_BST5`, liberando BST2 + BST5 somente após pagamento aprovado.

## Verificação
- Testar os quatro botões de compra, abertura e fechamento do modal e as duas opções de checkout.
- Confirmar os totais de R$ 47 e R$ 74, os destinos exatos e a ausência de cobrança duplicada em computador, tablet e celular.

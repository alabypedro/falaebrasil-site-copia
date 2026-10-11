# Página pós-pagamento da Imersão

## O que será feito
- Criar a página `/obrigado-imersao` com confirmação da inscrição e um botão destacado para entrar no grupo do WhatsApp informado.
- Manter a identidade azul-marinho e dourada da Imersão, com boa leitura em celular e computador.
- Registrar a conclusão da inscrição para medição, sem disparar novamente o início do checkout.
- Atualizar a página da Imersão para usar uma constante única com o endereço público de retorno pós-pagamento.

## Fluxo
```text
Pagamento confirmado no Asaas
            ↓
/obrigado-imersao
            ↓
Botão “Entrar no Grupo VIP da Imersão”
            ↓
Grupo do WhatsApp
```

## Configuração externa necessária
O site deixará o endereço de retorno pronto: `https://falaebrasil.com.br/obrigado-imersao`.

O checkout atual é uma página hospedada pelo Asaas. O redirecionamento depois da aprovação precisa ser cadastrado nas configurações desse link de pagamento dentro do Asaas; o código do site não consegue alterar essa configuração externa sem acesso autorizado à conta. A página e o link de destino ficarão totalmente prontos, e o único passo externo será informar esse endereço como URL de redirecionamento após pagamento confirmado.

## Validação
- Conferir a nova página em computador e celular.
- Confirmar que o botão abre o grupo correto.
- Confirmar que `/imersao` e a nova página carregam sem erros.

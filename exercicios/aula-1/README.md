# AV1.1 — Decidir o que delegar

**Individual — 35min — B1, 25/09/2026, 21h15–21h50 (Brasília).** Integra AV1, que vale 20% da nota pela média simples dos desafios dos blocos com presença. Consulte a [avaliação e rubrica pública](../../avaliacao.md).

## O que você vai fazer

Você vai analisar três pedidos da equipe e decidir como realizaria cada tarefa: sem IA, com assistência de IA ou mantendo a decisão sob responsabilidade humana. O objetivo é justificar a escolha e explicar como o resultado seria conferido.

## O que entregar e como começar

Preencha as três linhas C1, C2 e C3 do modelo e os campos abaixo da tabela. Entregue esse único registro, de até uma página. Os cartões são os três pedidos descritos a seguir; você não precisa implementar as mudanças solicitadas por eles.

Faça uma cópia do [modelo de resposta](template-registro.md) e preencha os campos. A versão HTML é para leitura, não é um formulário. Veja o [guia de preenchimento e exemplos de evidência](../README.md) se precisar de ajuda com o formato.

## Situação e materiais para análise

A equipe da organização fictícia Fila Clara recebe três pedidos. Todos os dados e cartões abaixo são simulados para esta avaliação. Trabalhe com o contrato fornecido; não é necessário consultar um modelo ou executar código.

- **R2:** a listagem inclui `aberto` e `em_andamento`, exclui `fechado` e preserva a ordem de entrada.
- **R3:** uma pessoa só pode visualizar chamados do próprio departamento, independentemente do estado ou da prioridade.
- [Contrato completo](../../caso/regras.md) e [template individual](template-registro.md).

| Cartão | Pedido e informações disponíveis | Resultado solicitado |
|---|---|---|
| C1 | A pessoa responsável pela manutenção quer critérios de aceite para R2. O contrato acima está aprovado; entradas são fictícias e válidas. | Rascunho de critérios que outra pessoa consiga verificar. |
| C2 | A equipe quer um teste de R3. Há dois departamentos, Oficina e Laboratório, e os estados aberto, em_andamento e fechado. | Proposta de entrada, saída esperada e justificativa do teste. |
| C3 | A operação pede autorização urgente para implantar uma alteração de visibilidade. Há apenas o resumo “facilitar acesso entre áreas”; a regra nova, os dados afetados, as verificações e o responsável pela aprovação não foram confirmados. | Decisão sobre autorizar a mudança em produção nas condições atuais. |

## Como fazer — 35min

1. **Leia os três pedidos — 5min.** Para cada cartão, identifique o que a equipe está pedindo, quais informações já existem e quais faltam.
2. **Preencha a tabela e as justificativas — 20min.** Em cada linha do modelo, escreva:

    - **Processo sem IA:** como uma pessoa faria a tarefa e qual resultado produziria.
    - **Modalidade e motivo:** escolha “sem IA”, “com assistência” ou “sem delegar a decisão” e relacione a escolha às condições do cartão. “Com assistência” significa usar IA para uma parte da tarefa, com revisão humana. “Sem delegar a decisão” destaca que a aprovação final deve permanecer com uma pessoa. Você pode repetir modalidades; se admitir assistência parcial, diga em qual tarefa.
    - **Verificação de aceite:** o que precisa ser conferido para considerar o resultado adequado. Escreva uma condição concreta para cada cartão.
    - **Responsável:** indique a função de quem aprovaria o resultado, como manutenção ou gestão responsável; não é necessário inventar o nome de uma pessoa.

    Depois da tabela, escolha um cartão para detalhar uma evidência. Escolha também um cartão para comparar sua modalidade com outra opção e dizer o que faria você rever a escolha. Pode ser o mesmo cartão.

3. **Confira o registro — 5min.** Verifique se a evidência sustenta sua decisão e se a alternativa tem uma diferença de esforço, risco ou responsabilidade explicada.
4. **Finalize a entrega — 5min.** Inclua seu nome e a declaração de uso de IA. Envie o registro preenchido pelo canal e no formato informados pelo professor.

## Como escrever a evidência da aula 1

Preencha o campo “Exemplo que sustenta minha decisão” no próprio modelo. Escolha uma das formas abaixo, conforme o cartão analisado:

- **Entrada e saída esperada:** escreva uma pequena entrada fictícia, o resultado que a regra exige e por que essa comparação ajuda a conferir a tarefa.
- **Informação necessária para decidir:** identifique uma informação que falta no cartão, explique por que ela é necessária e como a verificaria antes de aprovar a ação. Não invente que a informação já foi obtida.

Por exemplo, para uma tarefa diferente dos cartões C1–C3, “rascunhar um critério de prioridade de R1”, uma evidência escrita seria: “impacto 1 + urgência 2 = 3; a classificação esperada é `media`, conforme R1. Esse é um caso que usaria para conferir o rascunho; não executei código”. Produza seu próprio exemplo para o cartão escolhido, usando a regra correspondente.

**A evidência é esse trecho explicado da sua resposta.** Não é necessário gerar um arquivo adicional, consultar IA, tirar print ou executar um teste. Nos outros dois cartões, basta explicitar o critério de aceite solicitado na tabela.

## Confira antes de entregar

- [ ] Preenchi C1, C2 e C3 com processo sem IA, modalidade, justificativa, verificação e responsável.
- [ ] Detalhei um exemplo de entrada/saída ou uma informação necessária para sustentar uma decisão, no campo de evidência.
- [ ] Comparei uma alternativa para um cartão e indiquei o que faria minha escolha mudar.
- [ ] Informei que os cartões são fictícios e declarei se usei IA para elaborar a resposta.
- [ ] Reuni tudo em um registro individual de até uma página.

## Como a atividade será avaliada

| Critério AV1 | Peso | Indicadores deste desafio |
|---|---:|---|
| Aplicação/decisão | 30% | Modalidade justificada para cada cartão; responsabilidade e alternativa comparada. |
| Evidência | 40% | Restrições localizadas nos cartões e exemplo examinável de entrada/saída ou informação de aceite. |
| Limites/alternativa | 30% | Fronteira da delegação, informação ausente e condição concreta para mudar a escolha. |

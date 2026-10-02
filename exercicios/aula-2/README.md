# AV1.2 — Verificar respostas e o alcance de uma alegação

**Individual — 35min — B2, 26/09/2026, 11h15–11h50 (Brasília).** Integra AV1, que vale 20% pela média simples dos desafios dos blocos com presença. [Avaliação e rubrica pública](../../avaliacao.md).

## O que você vai fazer

Você vai conferir duas respostas fornecidas no enunciado. Na resposta A, refaça os cálculos usando R1. Na resposta B, avalie separadamente a classificação apresentada e a conclusão sobre o comportamento do modelo.

## O que entregar e como começar

Preencha a tabela com os dois pares da resposta A e responda aos campos sobre B. Termine com sua decisão sobre cada resposta e uma proposta de verificação. Entregue um único registro de até uma página; não é necessário gerar novas respostas com IA.

Faça uma cópia do [modelo de resposta](template-registro.md) e preencha os campos. A versão HTML é para leitura, não é um formulário. Veja o [guia de preenchimento e exemplos de evidência](../README.md) se precisar de ajuda com o formato.

## Situação e materiais para análise

A equipe Fila Clara recebeu duas respostas para revisão. **As respostas A e B são simulações didáticas novas, escritas para esta avaliação. Não resultam de consultas reais a um modelo.** Não há medição disponível de tokens, custo, latência, configuração ou versão do modelo.

**Contrato R1:** impacto e urgência são inteiros de 1 a 3. Some os dois: escore ≥ 5 dá `alta`; escore de 3 a 4 dá `media`; escore < 3 dá `baixa`. [Contrato completo](../../caso/regras.md).

Primeiro registre seu critério de correção e o tipo de evidência necessário para sustentar uma afirmação geral sobre comportamento. Depois examine as respostas.

> **Resposta A — simulada.** “Para priorizar, basta considerar impacto: 1 corresponde a baixa, 2 a media e 3 a alta. Portanto, (impacto=2, urgencia=3) é media e (impacto=3, urgencia=1) é alta.”

> **Resposta B — simulada.** “Repeti três vezes o pedido ‘classifique impacto=2, urgencia=3’. As três saídas foram ‘alta’. Isso prova que o modelo é determinístico e sempre entrega a classificação correta, inclusive em outros chamados.”

Os três resultados de B são parte da narrativa simulada, e não execuções observadas por você. Use o [template individual](template-registro.md).

## Como fazer — 35min

1. **Registre os critérios — 5min.** No início do modelo, escreva como R1 permite conferir uma classificação e que tipo de verificação seria necessário para sustentar uma afirmação sobre outras entradas ou repetições. Depois analise A e B.
2. **Preencha a análise — 20min.** Comece pelas duas linhas da tabela de A. Para `(2, 3)` e `(3, 1)`, mostre a soma, a classificação esperada por R1, o que A respondeu e se os resultados coincidem. Em seguida, responda aos campos de B: o que é possível concluir sobre o par citado, qual conclusão mais ampla o texto apresenta e o que falta para sustentá-la. Indique um contraexemplo ou uma condição que os dados de B não cobrem. Por fim, decida **aceitar, aceitar parcialmente ou rejeitar** A e B, justificando cada decisão; proponha outra forma de verificar e diga que informação faria você rever uma decisão.
3. **Confira as conclusões — 5min.** Verifique se cada afirmação está apoiada em um cálculo ou em um trecho de A/B. Marque como “não informado” qualquer dado de modelo que não foi fornecido.
4. **Finalize a entrega — 5min.** Inclua nome, origem dos dados e declaração de uso de IA. Envie o registro preenchido pelo canal e no formato informados pelo professor.

## Qual é a evidência da aula 2?

Na análise de A, a evidência é a **tabela preenchida com seus cálculos e a comparação com a resposta fornecida**. Em B, é o **trecho da afirmação que você está avaliando, acompanhado da explicação do que os dados permitem concluir**. Escreva ambos no modelo; não é preciso anexar prints.

Não repita os pedidos em um chatbot para tentar reproduzir a narrativa de B. As três saídas mencionadas são parte do texto simulado do exercício. Sua tarefa é analisar esse material. Se resolver tudo por escrito, informe “cálculo e leitura das respostas; execução não realizada”.

## Confira antes de entregar

- [ ] Escrevi os critérios usados para conferir a classificação e a afirmação geral.
- [ ] Preenchi os dois pares de A com soma, esperado por R1, resposta fornecida e conclusão.
- [ ] Em B, separei a análise do par citado da análise da afirmação geral e indiquei um contraexemplo ou condição não coberta.
- [ ] Dei uma decisão justificada para A e para B, propus outra verificação e uma condição para rever a decisão.
- [ ] Identifiquei as respostas como simuladas, declarei eventual IA e mantive o registro em até uma página.

## Como a atividade será avaliada

| Critério AV1 | Peso | Indicadores deste desafio |
|---|---:|---|
| Aplicação/decisão | 30% | Critérios aplicados e decisões separadas sobre classificação e alegações. |
| Evidência | 40% | R1, dois pares, cálculos e trechos de A/B localizados; origem e status claros. |
| Limites/alternativa | 30% | Contraexemplo ou condição não coberta; alternativa de verificação proporcional, sem generalização indevida. |

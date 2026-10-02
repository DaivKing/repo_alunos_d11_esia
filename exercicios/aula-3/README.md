# AV1.3 — Ligar requisito, verificação e documentação

**Individual — 35min — B3, 26/09/2026, 16h15–16h50 (Brasília).** Integra AV1, que vale 20% pela média simples dos desafios dos blocos com presença. [Avaliação e rubrica pública](../../avaliacao.md).

## O que você vai fazer

Você vai transformar a regra de listagem R2 em três casos de teste descritos por escrito e em uma documentação curta. Depois, vai indicar em qual etapa admitiria assistência de IA e como uma pessoa conferiria o resultado.

## O que entregar e como começar

Preencha os três casos da tabela, os campos sobre a ordem da lista, a documentação de até três frases e a decisão sobre assistência. Entregue um único registro de até uma página. Nesta atividade, descrever as entradas e saídas esperadas é suficiente; não é necessário programar os testes ou alterar o código do repositório.

Faça uma cópia do [modelo de resposta](template-registro.md) e preencha os campos. A versão HTML é para leitura, não é um formulário. Veja o [guia de preenchimento e exemplos de evidência](../README.md) se precisar de ajuda com o formato.

## Situação e materiais para análise

A manutenção de Fila Clara precisa preparar a revisão de uma listagem. **R2:** incluir `aberto` e `em_andamento`, excluir `fechado` e preservar a ordem de entrada. **R4:** o texto deve descrever o mesmo comportamento. Todas as entradas abaixo são fictícias e válidas. [Contrato completo](../../caso/regras.md).

| Posição na entrada | id | departamento | estado | impacto | urgencia |
|---:|---|---|---|---:|---:|
| 1 | TR-31 | Oficina | em_andamento | 1 | 1 |
| 2 | TR-32 | Laboratório | fechado | 3 | 3 |
| 3 | TR-33 | Oficina | aberto | 2 | 3 |

O material deste desafio é o contrato e esta entrada; não se exige alterar a implementação do repositório. A saída calculada a partir do contrato é **esperada**, não observada em execução. [Template individual](template-registro.md).

## Como fazer — 35min

1. **Leia R2 e R4 — 5min.** No primeiro campo do modelo, escreva o que precisa ser atendido: incluir dois estados, excluir um estado e manter a ordem da entrada. O texto da documentação deve descrever esse mesmo comportamento.
2. **Preencha o modelo — 20min.** Escreva um caso de teste para cada estado: `aberto`, `em_andamento` e `fechado`. Você pode usar os registros da tabela sozinhos ou combinados. Em cada caso, indique os IDs usados como entrada, sua ordem, os IDs que deveriam sair e a parte de R2 que está conferindo. Se a saída esperada for uma lista vazia, escreva `[]`.
   Depois, considere os três registros juntos, na ordem **TR-31, TR-32, TR-33**. Escreva os IDs que deveriam permanecer na saída e explique como compararia a ordem. Redija a documentação em até três frases. Por fim, escolha uma etapa em que admitiria assistência de IA, indique a tarefa delegada e quem conferiria o resultado, descreva a verificação para aprová-lo e compare com fazer essa etapa sem IA. Registre algo que esses casos ainda não verificam e o que faria você rever o aceite.
3. **Confira a consistência — 5min.** Leia os três casos, a saída combinada e sua documentação. Todos devem seguir a mesma regra. Confira também se você diferenciou resultado esperado de resultado executado.
4. **Finalize a entrega — 5min.** Inclua nome, origem dos dados e declaração de uso de IA. Envie o registro pelo canal e no formato informados pelo professor.

## Qual é a evidência da aula 3?

A evidência é o conjunto formado pela **tabela de casos, a saída esperada da entrada combinada e sua explicação sobre a ordem**. Para mostrar a ordem, escreva quais IDs ficam antes ou depois dos outros e compare essa sequência com a entrada. Dizer apenas “os IDs estão corretos” não mostra se a ordem foi preservada.

O formato de um caso é: “entrada: [IDs na ordem escolhida]; saída esperada: [IDs na ordem exigida]; regra conferida: [parte de R2]; conferência: [como comparar]”. Você completa esse formato com os registros TR-31 a TR-33. A análise manual não produz um resultado observado do programa: informe “saídas esperadas calculadas por R2; execução não realizada”.

A prática de execução acompanhada da aula 3 é uma atividade separada, sem entrega ou nota. Para a AV1.3, entregue o registro descrito aqui.

## Confira antes de entregar

- [ ] Descrevi três casos, um para cada estado, com entrada, saída esperada e regra conferida.
- [ ] Escrevi a saída esperada de TR-31, TR-32, TR-33 juntos e expliquei como conferir a ordem.
- [ ] Redigi uma documentação de até três frases coerente com R2.
- [ ] Indiquei etapa assistida, tarefa, responsável e verificação; comparei com fazer sem IA e registrei limite e condição para rever o aceite.
- [ ] Declarei a origem fictícia, se houve execução e se usei IA; o registro tem até uma página.

## Como a atividade será avaliada

| Critério AV1 | Peso | Indicadores deste desafio |
|---|---:|---|
| Aplicação/decisão | 30% | Etapa e autonomia justificadas; critério e responsável pelo aceite. |
| Evidência | 40% | Três estados, ordem da entrada, resultados esperados e documentação rastreáveis a R2/R4. |
| Limites/alternativa | 30% | Comparação com etapa sem IA; limite de cobertura e condição para rever o aceite. |

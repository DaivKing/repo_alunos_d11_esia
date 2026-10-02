# AV1.4 — Revisar uma proposta e o alcance do seu teste

**Individual — 35min — B4, 02/10/2026, 21h15–21h50 (Brasília).** Integra AV1, que vale 20% pela média simples dos desafios dos blocos com presença. [Avaliação e rubrica pública](../../avaliacao.md).

## O que você vai fazer

Você vai revisar a função e o teste apresentados abaixo. Compare o comportamento da proposta com R2, explique o que o teste consegue verificar e escreva uma decisão sobre aceitar ou ajustar a proposta.

## O que entregar e como começar

Entregue uma análise escrita de até uma página, usando o modelo. Ela deve conter a comparação das saídas, a análise do teste, sua decisão, um ajuste proposto e um caso para conferir esse ajuste. Você pode fazer tudo por leitura do código; executar uma cópia isolada é opcional.

Faça uma cópia do [modelo de resposta](template-registro.md) e preencha os campos. A versão HTML é para leitura, não é um formulário. Veja o [guia de preenchimento e exemplos de evidência](../README.md) se precisar de ajuda com o formato.

## Situação e materiais para análise

Uma pessoa entregou o candidato abaixo e um teste como suporte à revisão. **São artefatos simulados criados para esta avaliação**, distintos dos exemplos demonstrados pelo professor. O nome do campo é `estado`.

**R2:** incluir `aberto` e `em_andamento`, excluir `fechado` e preservar a ordem de entrada. Entradas são válidas. [Contrato completo](../../caso/regras.md).

```python
# Candidato isolado para análise; não substitua o código do repositório.
def listar_ativos_proposta(chamados):
    ativos = [c for c in chamados if c["estado"] in ("aberto", "em_andamento")]
    return sorted(ativos, key=lambda c: c["impacto"] + c["urgencia"], reverse=True)
```

**Entrada de revisão, na ordem apresentada:**

| id | departamento | estado | impacto | urgencia |
|---|---|---|---:|---:|
| TR-41 | Oficina | em_andamento | 1 | 1 |
| TR-42 | Laboratório | aberto | 3 | 3 |
| TR-43 | Oficina | fechado | 2 | 2 |
| TR-44 | Oficina | aberto | 2 | 2 |

**Teste entregue junto com o candidato:** a entrada contém os mesmos registros, mas na ordem TR-42, TR-44, TR-41, TR-43. A única asserção compara a lista de IDs retornada a `["TR-42", "TR-44", "TR-41"]`. Não há resultado de execução fornecido; você deve analisar seu alcance.

Use o [template individual](template-registro.md). Inspeção por tabela é suficiente; executar o candidato em uma cópia isolada é opcional.

## Como fazer — 35min

1. **Leia a regra — 5min.** Escreva no modelo o que R2 exige da listagem, antes de examinar a proposta e o teste.
2. **Faça a revisão — 20min.** Para a entrada TR-41, TR-42, TR-43, TR-44, preencha os IDs esperados por R2 e os IDs que a função proposta retornaria. Mostre o trecho de código que explica esse retorno e diga se o deduziu por leitura ou o observou em execução. Analise também o teste fornecido: ele distinguiria uma função que cumpre R2 de uma que descumpre a regra? Explique usando a entrada e a comparação de IDs feita pelo teste.
   Escreva sua decisão: **aceitar, aceitar com condições ou rejeitar**, com motivo. Compare manter a proposta com ajustá-la e indique quem aprovaria o resultado. Descreva o ajuste em texto ou código. Complete a segunda tabela com um caso para conferir o ajuste: entrada, saída esperada e resultado previsto por leitura ou observado em execução. Termine com um limite da análise e uma condição para rever sua decisão.
3. **Confira o registro — 5min.** Verifique se regra, saídas, explicação do teste e ajuste são coerentes. Um resultado previsto por leitura deve ser identificado como tal.
4. **Finalize a entrega — 5min.** Inclua nome, origem dos materiais e declaração de uso de IA. Envie o registro pelo canal e no formato informados pelo professor.

## Qual é a evidência da aula 4?

Use as tabelas de comparação e copie somente o trecho de código ou a comparação de IDs do teste que sustenta sua explicação. “Revalidar” significa conferir de novo depois do ajuste proposto. Essa conferência pode ser feita por leitura, explicando o novo resultado previsto; não exige um log de execução. Se optar por executar, inclua comando e trecho relevante da saída, no mesmo registro.

## Confira antes de entregar

- [ ] Comparei os IDs esperados por R2 com o retorno da proposta e informei se fiz leitura ou execução.
- [ ] Indiquei o trecho de código e a comparação do teste que sustentam a análise.
- [ ] Escrevi decisão, comparação entre manter e ajustar, responsável e ajuste proposto.
- [ ] Descrevi um caso para conferir o ajuste, um limite e uma condição para rever a decisão.
- [ ] Declarei eventual IA e reuni tudo em até uma página.

## Como a atividade será avaliada

| Critério AV1 | Peso | Indicadores deste desafio |
|---|---:|---|
| Aplicação/decisão | 30% | Parecer vinculado a R2; comparação de manter/ajustar e responsabilidade de aceite. |
| Evidência | 40% | Entrada, esperado, retorno, mecanismo e alcance da asserção rastreáveis. |
| Limites/alternativa | 30% | Ajuste e revalidação coerentes; limite de cobertura e condição de revisão. |

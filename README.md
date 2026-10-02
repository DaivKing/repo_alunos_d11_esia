# Fila Clara — apoio à disciplina D1.1

Este pacote apoia as seis aulas de **Engenharia de Software na Era da IA Generativa (24h)**. Fila Clara é um caso fictício de chamados internos. As atividades pedem que você analise situações, confira resultados e justifique decisões. Algumas apresentam código para revisão; os exercícios AV1 podem ser resolvidos por escrito com os dados fornecidos.

O caso e suas verificações já podem ser executados. O professor conduz as demonstrações; em B3, há também [25min de execução acompanhada](apoio/execucao-acompanhada-b3.md) no próprio ambiente, sem entrega ou nota. Cada bloco reserva 35min a um desafio avaliativo individual com consulta; as instruções indicam insumos próprios, entregável e rubrica. Não há entrega coletiva ou síntese adicional obrigatória.

## Preparação do ambiente

Obtenha o pacote disponibilizado pelo professor e abra esta pasta. A execução local usa Python e sua biblioteca padrão; o ambiente de preparação foi verificado com **Python 3.13.3**. Não há dependências adicionais. Um assistente de IA no navegador pode apoiar as práticas; não é necessário contratar API. O caminho textual usa os materiais de `apoio/` quando não houver acesso à ferramenta ou ao ambiente local. A instalação local não é condição para demonstrar os objetivos da disciplina.

## Navegação

| Pasta | Conteúdo |
|---|---|
| `caso/` | Cenário, regras, dados sintéticos e funções pequenas |
| `testes/` | Verificações reproduzíveis do caso |
| `apoio/` | Respostas simuladas identificadas e transcrição de execução |
| `exercicios/aula-1/` a `aula-6/` | Instruções e registros de cada aula |

## Comece pelos exercícios da sua aula

Leia o [guia de preenchimento e entrega](exercicios/README.md). Ele explica qual arquivo preencher, o que é uma evidência e como registrá-la sem precisar executar código ou usar IA.

Exercícios AV1: [aula 1 — delegação](exercicios/aula-1/README.md) · [aula 2 — análise de respostas](exercicios/aula-2/README.md) · [aula 3 — testes e documentação](exercicios/aula-3/README.md) · [aula 4 — revisão de código](exercicios/aula-4/README.md) · [aula 5 — uso corporativo](exercicios/aula-5/README.md) · [aula 6 — maturidade](exercicios/aula-6/README.md).

1. Leia o enunciado (`README.md`) da aula e os dados indicados nele.
2. Faça uma cópia do `template-registro.md` dessa aula ou copie seu conteúdo para um editor de texto. O HTML é uma versão de leitura, não um formulário.
3. Preencha as respostas e as evidências no mesmo documento, com até uma página. Informe se sua análise foi manual ou se houve execução e declare eventual uso de IA.
4. Confira o checklist e envie o registro pelo canal e no formato informados pelo professor. Não é necessário enviar commit ou alterar este repositório para entregar.

## Execução opcional do código do caso

O comando abaixo permite explorar o código do caso e suas verificações. Ele não é um requisito para preencher os registros AV1; siga o enunciado da aula para saber o que analisar.

Execute nesta pasta:

```text
python -B testes/test_fila_clara.py --codigo caso/fila_clara.py
```

Há nove verificações. No material inicial, seis passam e três apontam divergências em relação ao contrato. O processo retorna código de saída `1` quando há falha e `0` quando todas as verificações passam. Esses testes verificam o material e não atribuem nota ao aluno. Uma execução verde se limita ao que foi testado; documentação e decisões exigem revisão.

Consulte [testes/README.md](testes/README.md) para executar uma verificação isolada e [apoio/resultado-textual.md](apoio/resultado-textual.md) para ler a transcrição de uma execução. Utilize apenas os dados fictícios fornecidos.

## Avaliações da pós-graduação

- [Índice dos enunciados e modelos: AV1, AV2 e AV3](avaliacoes/README.md)
- [AV2 — estudo técnico de verificação](avaliacoes/av2/README.md)
- [AV3 — parecer integrador fundamentado](avaliacoes/av3/README.md)

Composição: AV1 20% (média dos desafios dos blocos com presença), AV2 30%, AV3 50%. As 6h autônomas são leitura L0 2h + AV2 2h + AV3 2h. AV3 aplica duas referências já lidas à decisão sobre o caso. As rubricas avaliam aplicação, evidência e argumentação individuais.

## Documentos da disciplina

- [Plano de ensino da turma](ementa.md)

- [Boas-vindas e preparação](boas-vindas.md)
- [Avaliação e critérios](avaliacao.md)
- [Estudo autônomo e prazos](estudo-autonomo.md)
- [Glossário](glossario.md)
- [Diagnóstico sem nota](diagnostico.md)

Datas: 25–26/09 e 02–03/10/2026. As aulas e entregas usam horário de Brasília. O pacote funciona localmente e o canal acadêmico de envio será informado pelo professor.

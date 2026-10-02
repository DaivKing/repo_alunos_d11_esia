# Como fazer e entregar os exercícios das aulas

Cada aula tem uma atividade individual da AV1. Você lê a situação apresentada, analisa os dados e registra suas respostas em **um único documento de até uma página por aula**, incluindo a evidência pedida. A evidência faz parte da resposta; não é uma segunda entrega.

## Por onde começar

1. Abra o enunciado da aula na tabela abaixo. Os exercícios ficam em `exercicios/aula-1/` a `exercicios/aula-6/`, a partir da raiz do repositório. A pasta `avaliacoes/` reúne o índice geral, a AV2 e a AV3.
2. Leia a situação e as regras indicadas no enunciado. “Contrato” significa o documento que define como o sistema fictício Fila Clara deve funcionar.
3. Faça uma cópia do `template-registro.md` da aula. Esse é o modelo de resposta: preencha as tabelas e substitua os espaços `___` pelo seu texto. Você também pode copiar o conteúdo para um editor de texto de sua preferência, mantendo os campos pedidos.
4. Siga as etapas do enunciado e registre suas justificativas no próprio modelo. Use frases curtas; os exemplos e as instruções de preenchimento não precisam ser copiados para a entrega.
5. Confira o checklist e o limite de uma página. Envie o documento preenchido pelo canal e no formato de arquivo informados pelo professor. O repositório não recebe nem envia sua atividade automaticamente.

**Sobre os arquivos:** o `README.md` contém o enunciado e o `template-registro.md` contém os campos da resposta. As versões `.html` servem para leitura no navegador e não são formulários: elas não salvam respostas digitadas. Você não precisa editar o código HTML, preencher as duas versões, criar um fork ou enviar um commit. Caso precise conferir a paginação, use a visualização de impressão do seu editor.

| Aula | O que você vai fazer | Modelo de resposta |
|---|---|---|
| [1 — Decidir o que delegar](aula-1/README.md) | Analisar três pedidos e justificar como faria cada tarefa e quem aprovaria o resultado. | [Preencher AV1.1](aula-1/template-registro.md) |
| [2 — Verificar respostas](aula-2/README.md) | Conferir dois cálculos de A e avaliar o que a afirmação de B permite concluir. | [Preencher AV1.2](aula-2/template-registro.md) |
| [3 — Requisito, testes e documentação](aula-3/README.md) | Escrever três casos de teste, conferir a ordem da lista e redigir uma documentação curta. | [Preencher AV1.3](aula-3/template-registro.md) |
| [4 — Revisar código e teste](aula-4/README.md) | Comparar uma proposta com a regra, avaliar seu teste e propor um ajuste com nova verificação. | [Preencher AV1.4](aula-4/template-registro.md) |
| [5 — Decidir sobre uso corporativo](aula-5/README.md) | Analisar um pedido de uso de IA e escrever duas regras de uso com responsáveis e formas de conferência. | [Preencher AV1.5](aula-5/template-registro.md) |
| [6 — Avaliar maturidade](aula-6/README.md) | Identificar o estágio de uma iniciativa e propor um próximo passo com critérios para continuar ou parar. | [Preencher AV1.6](aula-6/template-registro.md) |

## O que significa “evidência” nestas atividades

É a parte da resposta que permite a outra pessoa conferir sua conclusão. Em vez de escrever apenas “está correto”, mostre a regra usada, os dados ou o trecho analisado e a comparação que você fez. **Um cálculo explicado, uma tabela de entrada e saída esperada ou um trecho do enunciado acompanhado de justificativa pode ser a evidência.** Não é obrigatório produzir print, vídeo, log ou conversa com IA.

Exemplo de formato, com valores diferentes dos pares avaliados na aula 2:

> Regra: R1 manda somar impacto e urgência. Entrada: impacto = 1 e urgência = 2. Cálculo: 1 + 2 = 3. Saída esperada: `media`. Origem: cálculo manual a partir do contrato; não executei o programa. Esse cálculo permite conferir a classificação desse par, mas não demonstra o comportamento do programa para todas as entradas.

O exemplo mostra **como registrar** uma verificação. Você deve produzir a análise dos cartões e das entradas solicitados na sua aula.

| Expressão do enunciado | O que escrever |
|---|---|
| Critério de aceite | A condição que precisa ser atendida para você considerar o resultado adequado. Ex.: “a classificação deve corresponder à soma definida em R1”. |
| Saída esperada | O resultado que a regra determina, calculado por você. Isso não significa que o programa foi executado. |
| Resultado inferido por inspeção | O resultado que você deduziu ao ler o código, explicando o caminho seguido. |
| Resultado observado em execução | O resultado obtido quando você realmente rodou o código. Se optar por executar, registre o comando e o trecho relevante da saída. |
| Trecho essencial de evidência | Somente os dados, cálculos ou frases necessários para conferir sua justificativa, dentro do registro. |
| Origem ou procedência | De onde vieram os dados: enunciado fictício, cálculo próprio, leitura de código ou execução própria. |
| Limite da análise | O que a sua verificação ainda não permite concluir. |
| Condição para rever a decisão | Uma informação nova ou um resultado que faria você mudar de ideia. |

Os dados fornecidos são simulados para fins didáticos. Isso descreve a **origem dos dados**; sua análise deve ser feita e explicada por você. Se não executou nada, escreva “análise manual; execução não realizada”. Se o enunciado descreve uma execução simulada, não a apresente como uma execução sua.

## Preciso usar IA ou programar?

As seis atividades AV1 podem ser resolvidas por escrito com os materiais fornecidos. Nas aulas 1–3, você planeja decisões, confere respostas e descreve testes. Na aula 4, pode analisar o código por leitura ou executá-lo em uma cópia isolada. Nas aulas 5–6, você analisa situações e propõe ações. A execução opcional e a análise textual seguem os mesmos critérios de avaliação.

Você pode admitir o uso de IA em uma tarefa hipotética sem usar uma ferramenta para responder à atividade. São duas informações diferentes: a modalidade que você recomenda para a situação e a assistência que efetivamente utilizou ao preparar sua resposta.

Ao final, escreva **“Não utilizei IA para elaborar este registro”** ou informe ferramenta/modelo visível, tarefa e contexto fornecidos, trecho aproveitado e como você o conferiu. Se o modelo não estiver identificado, escreva “não informado”. Utilize apenas os dados fictícios fornecidos.

## Entrega e avaliação

O checklist é uma conferência final do documento; cada item não corresponde a um arquivo separado. A AV1 prevê 35 minutos por aula: 5 de leitura, 20 de elaboração, 5 de revisão e 5 de entrega. Os horários, pesos e critérios estão no [índice das avaliações](../avaliacoes/README.md) e na [rubrica da disciplina](../avaliacao.md). Esta orientação de preenchimento não altera os prazos publicados.

O canal e o formato de envio serão informados pelo professor. Os enunciados da [AV2](../avaliacoes/av2/README.md) e da [AV3](../avaliacoes/av3/README.md) têm entregas e limites próprios; o limite de uma página deste guia se aplica aos exercícios AV1.

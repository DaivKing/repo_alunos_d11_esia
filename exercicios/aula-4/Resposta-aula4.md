# Registro individual — AV1.4

**Limite: uma página.** Estudante: Davi Albnes — Data: 11/10/2026
**Critério de aceite por R2:** a listagem inclui os estados `aberto` e `em_andamento`, exclui `fechado` e preserva a ordem de entrada (sem reordenar por escore ou prioridade).

| Entrada | IDs esperados por R2 | IDs do candidato | Status: inferido/observado | Mecanismo/trecho essencial |
|---|---|---|---|---|
| TR-41, TR-42, TR-43, TR-44 | TR-41, TR-42, TR-44 | TR-42, TR-44, TR-41 | Inferido por leitura; execução não realizada | O filtro está correto (TR-43 `fechado` sai), mas `sorted(ativos, key=lambda c: c["impacto"] + c["urgencia"], reverse=True)` reordena pelo escore: TR-42 = 6, TR-44 = 4, TR-41 = 2. |

**Teste entregue — o que verifica e o que não consegue distinguir:** verifica o filtro de estado (TR-43 fora) e que os IDs retornados são TR-42, TR-44 e TR-41. Não distingue uma função que cumpre R2 de uma que a descumpre, porque a entrada do teste já está em ordem decrescente de escore (6, 4, 2): preservar a ordem de entrada e ordenar por escore dão o mesmo resultado. O teste passaria com o candidato, apesar de ele violar R2.
**Trecho do teste (entrada e comparação de IDs) que sustenta minha análise:** entrada na ordem TR-42, TR-44, TR-41, TR-43; asserção: `ids_retornados == ["TR-42", "TR-44", "TR-41"]`.
**Decisão (aceitar, aceitar com condições ou rejeitar) e motivo:** **rejeitar a proposta como está**. A ordenação contraria R2 (a ordem de entrada TR-41, TR-42, TR-44 vira TR-42, TR-44, TR-41), e o teste entregue não detecta isso. Pode ser reconsiderada depois do ajuste e de um teste que cubra a ordem.
**Comparação entre manter e ajustar / responsável pelo aceite:** manter é simples e passa no teste dado, mas entrega a ordem errada e esconde a falha. Ajustar custa uma linha (remover o `sorted`) e fecha a diferença com R2. Opto por ajustar. Quem aprova: o engenheiro responsável pela manutenção de Fila Clara, que confere o resultado contra R2, e não a pessoa que entregou o candidato.
**Ajuste proposto (texto ou código):**
```python
def listar_ativos_proposta(chamados):
    return [c for c in chamados if c["estado"] in ("aberto", "em_andamento")]
```
Além disso, trocar o teste por um com entrada fora de ordem de escore.

| Caso para conferir o ajuste: entrada e ordem | IDs esperados | Resultado previsto ou observado / status |
|---|---|---|
| TR-41, TR-42, TR-43, TR-44 (escores 2, 6, 4, 4; ordem de entrada diferente da ordem por escore) | TR-41, TR-42, TR-44 | Previsto por leitura: a compreensão de lista mantém a ordem de entrada e remove TR-43. Execução não realizada. O candidato original, por leitura, retornaria `['TR-42', 'TR-44', 'TR-41']`. |

**Limite remanescente e condição para rever o parecer:** o caso cobre uma única entrada de quatro registros, sem lista vazia e sem validação de entradas externas (fora do escopo do contrato). Reveria a decisão se R2 passasse a admitir ordenação por prioridade, ou se um teste com entrada fora de ordem de escore falhasse no ajuste.
**Origem dos dados e da análise:** candidato/teste/entrada simulados; método próprio: inspeção; comando e trecho de saída, se executado: não realizado. Resultados previstos por leitura: candidato `['TR-42', 'TR-44', 'TR-41']`; ajustada `['TR-41', 'TR-42', 'TR-44']`.
**Uso de IA neste registro:** ferramenta-modelo visível: Claude (`claude-sonnet-5-5`), via Claude Code; tarefa/contexto: leitura do enunciado, do contrato (R2) e preenchimento do modelo; trecho aproveitado e minha verificação: o rascunho dos campos partiu do assistente; conferi cada campo contra R2 e o código antes de entregar. Correções finais de redação aplicadas com Claude Code (`claude-sonnet-5-5`), a partir da revisão.

**Revisão:** [x] comparação com R2; [x] alcance do teste; [x] ajuste/revalidação; [x] status; [x] uma página.

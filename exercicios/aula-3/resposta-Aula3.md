# Registro individual — AV1.3

**Limite: uma página.** Estudante: Davi Albnes — Data: 08/10/2026
**O que a listagem e a documentação precisam cumprir, conforme R2/R4:** A listagem deve incluir chamados em `aberto` e `em_andamento`, excluir os `fechado` e manter os IDs na mesma ordem em que entraram (sem reordenar por escore ou prioridade). A documentação (R4) deve descrever exatamente esse comportamento.

| Caso / estado a verificar | Entrada (IDs e ordem) | IDs esperados na ordem | Obrigação de R2 e como verificar |
|---|---|---|---|
| 1 / aberto | [TR-33] | [TR-33] | R2 inclui `aberto`: conferir que a lista devolvida é exatamente [TR-33]. |
| 2 / em_andamento | [TR-31] | [TR-31] | R2 inclui `em_andamento`: conferir que a lista devolvida é exatamente [TR-31]. |
| 3 / fechado | [TR-32] | [] | R2 exclui `fechado`: conferir que a lista devolvida é vazia (`[]`). |

**Entrada combinada TR-31, TR-32, TR-33 → IDs esperados:** [TR-31, TR-33] (TR-32 é `fechado` e sai).
**Como conferiria a ordem (compare a posição dos IDs na entrada e na saída esperada):** Na entrada, TR-31 está na posição 1 e TR-33 na posição 3. Retirando o TR-32, a saída deve ter TR-31 na posição 1 e TR-33 na posição 2, ou seja, TR-31 antes de TR-33, como na entrada. Se a saída fosse [TR-33, TR-31], os IDs estariam corretos, mas a ordem relativa não teria sido preservada.
**Documentação proposta (até três frases):** `listar_ativos` devolve os chamados com estado `aberto` e `em_andamento` e exclui os de estado `fechado`. Os chamados incluídos mantêm a mesma ordem em que foram recebidos na entrada, sem reordenação por escore ou prioridade.

**Etapa em que admitiria IA / tarefa que ela faria / pessoa responsável por conferir:** Redação da documentação de `listar_ativos`. A IA redigiria o texto (até três frases) a partir do contrato (R2/R4). Quem confere: o engenheiro responsável pela manutenção de Fila Clara.
**O que essa pessoa deve verificar antes de aprovar:** Comparar o texto frase a frase com R2: inclui `aberto` e `em_andamento`, exclui `fechado` e preserva a ordem de entrada. Também deve confirmar que o texto não acrescenta comportamento fora do contrato (como ordenar por escore ou prioridade) e que usa a grafia exata dos estados.
**Alternativa sem IA e comparação:** Escrever o texto manualmente a partir do contrato. Leva mais tempo, mas o autor controla cada frase. Como o texto é curto, o ganho de tempo da IA seria pequeno, e ela pode produzir um texto plausível que diverge do contrato. O esforço de conferir, nesse caso, fica próximo ao de escrever.
**O que os casos não verificam e o que me faria rever a aprovação:** Os casos não verificam lista de entrada vazia, nem listas maiores ou com vários chamados do mesmo estado em sequência (a ordem foi conferida em um único exemplo de três registros). Também não verificam validação de entradas externas, que o contrato deixa como lacuna. Além disso, os resultados são esperados por contrato e nada foi executado, então a conformidade com R2 não foi observada. Eu reveria o aceite se uma execução real devolvesse resultado diferente do esperado ou se o contrato (R2/R4) fosse alterado.

**Origem dos dados e como fiz a análise:** entrada fictícia do enunciado; esperado por contrato: calculado aplicando R2 (`caso/regras.md`) à entrada do enunciado; inspeção própria: conferi os casos, a ordem e o texto contra R2/R4; execução opcional: não realizada.
**Uso de IA neste registro:** ferramenta-modelo visível: Claude (`claude-sonnet-5-5`), via Claude Code; contexto/tarefa: explicação de cada campo e sugestão de redação a partir do contrato; trecho aproveitado e minha verificação: textos dos campos preenchidos partiram de sugestões do assistente; li cada um e o confrontei com R2/R4 antes de aprovar.

**Revisão:** [x] três estados; [x] ordem; [x] texto; [x] aceite/limite; [x] uma página.

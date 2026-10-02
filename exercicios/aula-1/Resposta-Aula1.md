# Registro individual — AV1.1

**Limite: uma página, incluindo evidências essenciais.** Estudante: Davi Albnes — Data: 26/09/2026
Origem: cartões C1–C3 fictícios do enunciado.

| Cartão | Processo sem IA / entrada → saída | Modalidade e justificativa ligada ao cartão | Verificação de aceite | Responsável humano |
|---|---|---|---|---|
| C1 |Eu revisaria a regra R2 no contrato e escreveria critérios de aceite: incluir aberto e em_andamento, excluir fechado e preservar a ordem de entrada. |**Com assistência**. É uma confirmação do que cada estado implica na listagem, eu escreveria as definições e revisaria com IA. | A listagem fictícia deve conter apenas os chamados `aberto` e `em_andamento`, na mesma ordem de entrada; os `fechado` devem ser excluídos. |A pessoa responsável pela manutenção. |
| C2 | Revisaria a regra R3 e deixaria explícito que um chamado só fica visível para pessoas do mesmo departamento, separando Oficina e Laboratório, independentemente de estado ou prioridade.|**Com assistência**. A regra envolve visibilidade, o que a torna mais importante e trabalhosa que uma listagem.|Chamados da Oficina -> ficam visíveis apenas para funcionários da Oficina. Chamados do Laboratório ficam visíveis apenas para funcionários do Laboratório.| Os funcionários de cada departamento. |
| C3 |Não aprovaria até ter mais dados, independentemente da urgência. A urgência da operação não justifica a falta de informação. Sem informações e um responsável, a operação parece um risco na minha visão.| **Sem delegar a decisão**. O risco de delegar essa tarefa à IA é grande e não isentaria minha responsibilidade nessa escolha.|Sem informações suficientes, a mudança não deve ser aprovada.| Eu mesmo. |

**Trecho essencial de evidência (cartão, entrada/saída ou informação necessária e como sustenta minha escolha):** Usando a reposta da **C1** como exemplo: 

| id | departamento | estado | impacto | urgencia |
|---|---|---|---|---|
| EX-01 | Oficina | em_andamento | 2 | 1 |
| EX-02 | Oficina | fechado | 3 | 3 |
| EX-03 | Oficina | aberto | 1 | 2 |

**Saída esperada de `listar_ativos`:** `[EX-01, EX-03]`

**Alternativa para o cartão C2:** Poderia ser feita **Sem IA**.

**Comparação com minha escolha (restrição e consequência):**  o cartão tem dois departamentos e três estados, e a R3 vale independentemente do estado ou da prioridade. Por isso o teste precisa cobrir várias combinações. Sem IA, eu escreveria todas elas, o que leva mais tempo, mas reduz o risco de aceitar um caso sugerido que esteja errado. Com assistência, a IA propõe os casos mais rápido, mas eu preciso conferir cada um contra a R3, porque um caso errado numa regra de visibilidade deixaria passar um acesso indevido.

**Limite da delegação e condição para rever a escolha:** a IA pode sugerir casos de teste, mas aceitar o teste e responder por ele fica comigo. Eu mudaria para "Sem IA" se os chamados tivessem dados reais dos departamentos, em vez dos dados fictícios do caso.

**Procedência/IA:** utilizada / ferramenta e modelo visíveis: Claude (Cowork), modelo claude-opus-5-5; tarefa delegada e contexto: prompt “crie três chamados ficticios para colocar como exemplo para C1 no trecho de evidência”, com acesso ao enunciado, ao contrato e a este registro; trecho aproveitado: tabela de chamados EX-01 a EX-03 e saída esperada; redação da comparação e do limite da delegação do C2, organizada pela IA a partir das minhas ideias (restrição, risco e condição dos dados reais). 

**minha verificação/intervenção:** conferi a saída `[EX-01, EX-03]` contra a R2 (o chamado `fechado` foi excluído e a ordem de entrada foi mantida); alterei o departamento do EX-02 para Oficina; reescrevi eu mesmo as células da tabela C1–C3; as ideias da comparação do C2 (restrição, risco e condição dos dados reais) partiram de mim. 

**Revisão:** [ ] três decisões; [ ] evidência localizada; [ ] alternativa e limite; [ ] até uma página.

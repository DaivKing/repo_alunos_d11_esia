# Registro individual — AV1.1

**Limite: uma página, incluindo evidências essenciais.** Estudante: Davi Albnes — Data: 26/09/2026
Origem: cartões C1–C3 fictícios do enunciado.

| Cartão | Processo sem IA / entrada → saída | Modalidade e justificativa ligada ao cartão | Verificação de aceite | Responsável humano |
|---|---|---|---|---|
| C1 | Critérios de aceite por R2: incluir `aberto` e `em_andamento`, excluir `fechado`, manter a ordem. | **Com assistência.** Confirma o que cada estado implica na listagem: a IA rascunha os critérios e eu confiro contra R2. | Listagem só com `aberto` e `em_andamento`, na ordem de entrada; `fechado` fora. | Pessoa responsável pela manutenção. |
| C2 | Teste de R3: chamado da Oficina, estado `fechado`; pessoa do Laboratório → `pode_visualizar` = falso. Repetiria com `aberto` e `em_andamento` (o estado não muda o resultado). | **Com assistência.** Visibilidade é mais importante e trabalhosa que uma listagem. | Chamado de cada departamento visível só para ele, em qualquer estado. | Pessoa responsável pela manutenção. |
| C3 | Não aprovaria sem mais dados: urgência não justifica falta de informação. | **Sem delegar a decisão.** Delegar à IA é arriscado e não isentaria minha responsabilidade. | Antes de aprovar: regra nova escrita, dados afetados, verificações feitas e aprovador identificados. | Gestão responsável / responsável por segurança. |

**Exemplo que sustenta minha decisão (C1; entrada e saída esperada e relação com minha decisão):** entrada:

| id | departamento | estado | impacto | urgencia |
|---|---|---|---|---|
| EX-01 | Oficina | em_andamento | 2 | 1 |
| EX-02 | Oficina | fechado | 3 | 3 |
| EX-03 | Oficina | aberto | 1 | 2 |

Saída esperada de `listar_ativos`: `[EX-01, EX-03]`. Ele ajuda a conferir o critério do C1: o `fechado` (EX-02) sai e a ordem de entrada é mantida. Não executei código.

**Alternativa para o cartão C2:** sem IA.
**Comparação com minha escolha (restrição e consequência):** R3 vale em qualquer estado dos dois departamentos. Sem IA, eu escreveria todas as combinações: mais tempo, menos risco de aceitar um caso errado. Com assistência, a IA propõe os casos mais rápido, mas eu confiro cada um contra R3, pois um caso errado deixaria passar acesso indevido.
**Limite da delegação e condição para rever a escolha:** a IA sugere casos; aceitar o teste e responder por ele fica comigo. Mudaria para "sem IA" se os dados fossem reais.

**Uso de IA na elaboração deste registro:** utilizada / ferramenta e modelo visíveis: Claude (Cowork), `claude-opus-5-5`; tarefa delegada e contexto: prompt "crie três chamados fictícios para colocar como exemplo para C1", com acesso ao enunciado, ao contrato e a este registro; trecho aproveitado: tabela EX-01 a EX-03 e organização da comparação do C2; minha verificação/intervenção: conferi `[EX-01, EX-03]` contra R2, alterei o departamento do EX-02, reescrevi a tabela C1–C3, e as ideias da comparação do C2 são minhas. O raciocínio e a decisão registrados são meus. Correções finais de redação aplicadas com Claude Code (`claude-sonnet-5-5`), a partir da revisão.

**Revisão:** [x] três decisões; [x] exemplo explicado; [x] alternativa e limite; [x] até uma página.
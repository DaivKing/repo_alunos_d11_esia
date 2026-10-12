# Entrega individual — AV2

Estudante: Davi Albnes · Data: 10/10/2026 · Via: execução opcional, com inspeção do percurso lógico
**Limites:** análise até duas páginas; anexo técnico até duas páginas. [Enunciado](README.md).

## Análise

**1. Recorte e requisito.** Avaliar `pode_visualizar_proposta`, que decide se uma pessoa de um departamento pode ver um chamado. O fluxo que decide exibir o chamado à pessoa (Oficina ou Laboratório) usa o retorno da função; o responsável pela manutenção de Fila Clara usa esta análise para decidir o aceite. Limites: departamentos Oficina e Laboratório; estados `aberto`, `em_andamento` e `fechado`; impacto e urgência de 1 a 3. Fora do escopo: autenticação, persistência e validação de entradas externas. Pressupostos: entradas válidas e nomes de departamento com a grafia dos dados controlados ("Laboratório" com acento).
R3: só vê o chamado quem é do mesmo departamento dele, seja qual for o estado ou a prioridade. R4: a documentação deve descrever as mesmas regras do contrato; teste e texto gerados com apoio de IA precisam ser confrontados com ele. Ocultar chamados fechados não é regra vigente de R3: se a equipe quiser esse comportamento, é uma proposta de mudança do contrato, a aprovar antes, e não um critério para aceitar o candidato.
Critério de aceite: (a) o código deve retornar verdadeiro somente se o departamento do chamado for igual ao do solicitante, sem considerar estado, impacto ou urgência; (b) a documentação deve descrever esse mesmo comportamento, sem condição a mais nem omissão.

**2. Estratégia.** Defini quatro casos como um funcionário da Oficina (T1 a T4), cruzando departamento do chamado (igual/diferente) com estado (aberto/fechado), porque são os dois fatores que o contrato e o candidato podem tratar de forma diferente. Mantive fixos o solicitante (Oficina), o impacto e a urgência. Esperado por R3: T1 e T2 podem ver; T3 e T4 não. Incluí o estado como eixo, mesmo sendo irrelevante para R3, porque é onde candidato e documentação poderiam divergir do contrato. Acrescentei dois casos opcionais: T5 (Oficina, `em_andamento`, caso construído, que não está em `insumos.md`) e T6 (V-04 com solicitante Laboratório). A matriz não cobre combinações de impacto e urgência além de (1, 1) e (3, 3) (ver seção 5).
Caso decisivo: T2. Pelo R3, a pessoa da Oficina deve ver o chamado fechado da Oficina, mas o candidato retorna `False` por causa da condição `chamado["estado"] != "fechado"`, que o R3 não prevê. Caso de controle: T3. O chamado é do Laboratório e está aberto; o R3 e o candidato concordam em negar. Isso mostra que a condição de departamento funciona e isola a divergência na condição de estado.

**3. Evidência e interpretação.** O candidato diverge do contrato em T2 e em T6 (chamado fechado do mesmo departamento): o R3 manda permitir e o candidato retorna `False` (E2). A causa é a condição `chamado["estado"] != "fechado"`, que o R3 não prevê; T6 mostra que a divergência se repete com o Laboratório como solicitante. A documentação repete o mesmo filtro por estado ("ativos", "chamados fechados ficam indisponíveis"), que o R3 e o R4 não sustentam (E3). T1, T3, T4 e T5 coincidem com o esperado.
Código e documentação concordam entre si, mas ambos divergem do R3. Filtrar chamados fechados pertence ao R2 (`listar_ativos`), não ao R3 (`pode_visualizar`).

**4. Decisão comparada.** Versão atual: não aceita como está (falha em (a) no T2 e no T6 e em (b) no E3). Encaminhamento: aceite condicionado ao ajuste, para o código e para a documentação, retirando a verificação de estado de ambos. A versão seguinte é aceita se T1 a T6 derem o esperado por R3 em execução e se a documentação, lida contra R3, não mencionar filtro por estado.
Alternativa: manter o código e a documentação e alterar R3 para ocultar chamados fechados. Isso tornaria código e texto coerentes com o contrato, mas é uma mudança de requisito, não uma correção: exige aprovação do responsável pelo contrato, duplicaria em R3 o que R2 já faz e esconderia do próprio departamento o histórico de chamados. Se a interface precisar mostrar só chamados ativos, o caminho compatível com o contrato é combinar `listar_ativos` (R2) com `pode_visualizar` (R3), sem mudar R3. Reescrever do zero seria desproporcional: só uma condição diverge.
**Ajuste proposto e revalidação:** retirar `and chamado["estado"] != "fechado"` do código e retirar da documentação as referências a estado ("ativos", "abertos ou em andamento ficam disponíveis", "fechados ficam indisponíveis"). Revalidação: T1 a T6 após o ajuste, em execução, no anexo.
Responsável: o responsável pela manutenção de Fila Clara, que aprova a versão ajustada somente se T1 a T6 reexecutados derem o esperado por R3 e a documentação não mencionar filtro por estado. Condição para rever: se o R3 for alterado, ou se a revalidação divergir do esperado.

**5. Procedência e limites.** Contrato de Fila Clara (`caso/regras.md`), candidato de código, documentação candidata e registros V-01 a V-04 (`insumos.md`), todos didáticos e fictícios, não resultados de modelo real.
Observado em execução: o retorno do candidato e da função ajustada em T1 a T6. O script foi criado com apoio do Claude; eu o executei no meu computador e conferi cada retorno com R3 e com o percurso lógico de E2. Inferido por inspeção: o caminho lógico de T2 e T3 (E2) e a divergência entre a documentação e o R3 (E3). Apenas proposto: o novo texto da documentação, conferido só por leitura contra o R3.
Por inspeção, a expressão depende só de departamento e estado, e `em_andamento` é tratado como `aberto`; T5 e T6 confirmam isso em execução. Limite: impacto e urgência só foram usados em (1, 1) e (3, 3), sem combinações mistas; isso é inferido pelo código, não executado. Consequência: o aceite condicionado vale só para o que foi testado, e a condição de rever a decisão cobre o restante. Verificação adicional: rodar combinações mistas de impacto e urgência. Nada aqui conclui sobre segurança de um sistema real.
IA: ferramenta-modelo visível: Claude (Sonnet 5.5); data: 10 e 11/10/2026; tarefa/contexto: apoio para entender o enunciado, o contrato e a estrutura da análise, redação dos trechos E1 a E3 e das seções 3 e 4, e criação do `teste_av2.py` (a execução foi minha); trecho aproveitado: os textos das seções 3 e 4, os trechos E1 a E3, redigidos a partir das minhas respostas; verificação/intervenção próprias: defini o recorte, o critério de aceite, os esperados por R3, o caso decisivo e o de controle, a decisão de aceite condicionado, o ajuste e o responsável, e conferi os resultados com o contrato. Como as seções 3 e 4 foram redigidas com apoio de IA, minha confiança se apoia na comparação que fiz de cada retorno com R3, e não no texto gerado.

## Anexo técnico — trechos essenciais

**Dados e condições comuns:** registros V-01 a V-04 de `insumos.md` (cada um com `id`, `departamento`, `estado`, `impacto` e `urgencia`); solicitante `Oficina` em T1 a T5 e `Laboratório` em T6; impacto e urgência mantidos conforme os registros (V-01 e V-02: 1 e 1; V-03 e V-04: 3 e 3), sem efeito sobre o resultado por R3. T5 é caso construído (não está em `insumos.md`): Oficina, `em_andamento`, impacto 1, urgência 1.

| Caso | Entrada/referência + solicitante | Relação de departamento / estado | Esperado por R3 | Retorno do candidato | Status observado/inferido | Interpretação |
|---|---|---|---|---|---|---|
| T1 | V-01 · solicitante Oficina | Igual / aberto | Pode ver (mesmo departamento) | `True` | Observado em execução | Coincide com o esperado. |
| T2 | V-02 · solicitante Oficina | Igual / fechado | Pode ver (mesmo departamento; o estado não importa) | `False` | Observado em execução | Difere do esperado: o candidato bloqueia o chamado por estar fechado. |
| T3 | V-03 · solicitante Oficina | Diferente / aberto | Não pode ver (outro departamento) | `False` | Observado em execução | Coincide com o esperado. |
| T4 | V-04 · solicitante Oficina | Diferente / fechado | Não pode ver (outro departamento) | `False` | Observado em execução | Coincide com o esperado. |
| T5 | construído (Oficina, `em_andamento`, 1, 1) · solicitante Oficina | Igual / em_andamento | Pode ver | `True` | Observado em execução | Coincide: `em_andamento` não é bloqueado. |
| T6 | V-04 · solicitante Laboratório | Igual / fechado | Pode ver | `False` | Observado em execução | Difere do esperado: a divergência de T2 se repete com o outro departamento. |

**E1 — trecho do contrato e localização:** `caso/regras.md`, tabela do contrato, linha R3: "`pode_visualizar` permite acesso somente à pessoa do mesmo departamento do chamado, independentemente de estado ou prioridade." Linha R4: "A documentação descreve essas mesmas regras. Teste e texto gerados com apoio de IA precisam ser confrontados com este contrato."
**E2 — trecho do código + percurso lógico de um caso decisivo e um controle:** `insumos.md`, "Candidato de código":
```python
def pode_visualizar_proposta(chamado, departamento):
    return (
        chamado["departamento"] == departamento
        and chamado["estado"] != "fechado"
    )
```
Decisivo (T2, V-02, solicitante Oficina): `"Oficina" == "Oficina"` é verdadeiro; `"fechado" != "fechado"` é falso; `verdadeiro and falso` resulta em `False`. O R3 esperava `True`. Controle (T3, V-03, solicitante Oficina): `"Laboratório" == "Oficina"` é falso, então o `and` resulta em `False` sem depender do estado, igual ao esperado.
**E3 — trecho da documentação e confronto com R3/código:** `insumos.md`, "Documentação candidata": "A função permite que uma pessoa visualize chamados ativos de seu próprio departamento. Chamados abertos ou em andamento ficam disponíveis para o departamento correspondente; chamados fechados ficam indisponíveis. Chamados de outros departamentos não são exibidos. Impacto e urgência não alteram essa decisão." Confronto: "ativos" e "chamados fechados ficam indisponíveis" descrevem o filtro por estado que está no código (`!= "fechado"`), mas o R3 diz "independentemente de estado". As frases sobre outros departamentos e sobre impacto e urgência estão de acordo com o R3.
**Execução — ambiente, comando e trecho de saída:** Python 3.15.0 (Windows), só biblioteca padrão, em arquivo separado `teste_av2.py` (cópia da função e dos registros, fora do repositório, sem alterar o kit), criado com apoio do Claude e executado por mim. A versão difere da de referência do kit (3.13.3); o código usa apenas comparação de textos e `and`, sem recurso específico de versão. Comando: `python -B teste_av2.py`. Cada caso é montado assim e chamado com o solicitante:
```python
chamado = {"id": "V-02", "departamento": "Oficina", "estado": "fechado",
           "impacto": 1, "urgencia": 1}
pode_visualizar_proposta(chamado, "Oficina")   # esperado True (R3)
```
Saída do candidato:
```
T1 V-01 Oficina/aberto (solicitante Oficina): esperado=True retorno=True OK
T2 V-02 Oficina/fechado (solicitante Oficina): esperado=True retorno=False DIVERGE
T3 V-03 Laboratório/aberto (solicitante Oficina): esperado=False retorno=False OK
T4 V-04 Laboratório/fechado (solicitante Oficina): esperado=False retorno=False OK
T5 T5 (construído) Oficina/em_andamento (solicitante Oficina): esperado=True retorno=True OK
T6 V-04 Laboratório/fechado (solicitante Laboratório): esperado=True retorno=False DIVERGE
```
Saída da função ajustada (`return chamado["departamento"] == departamento`), mesmos casos: T1 a T6 com `retorno` igual ao `esperado` (todos `OK`; T2 e T6 passam a `True`).
**Alternativa/ajuste e revalidação:** comportamento proposto: o código passa a `return chamado["departamento"] == departamento`, e a documentação passa a dizer: "A função permite que uma pessoa visualize chamados de seu próprio departamento, independentemente do estado (aberto, em andamento ou fechado) ou da prioridade. Chamados de outros departamentos não são exibidos. Impacto e urgência não alteram essa decisão."; T1–T6 após ajuste (esperado/retorno/status): T1 `True`/`True`; T2 `True`/`True`; T3 `False`/`False`; T4 `False`/`False`; T5 `True`/`True`; T6 `True`/`True`; todos observados em execução com a função ajustada (mesmo `teste_av2.py`); a documentação ajustada foi conferida só por leitura contra o R3; limite: a execução cobre apenas os registros V-01 a V-04 e o caso construído T5.

**Checklist:** [x] 4 combinações; [x] critérios prévios; [x] código e texto; [x] status; [x] alternativa; [x] limites/IA; [ ] 2+2 páginas.

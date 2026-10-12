# Entrega individual — AV2

Estudante: Davi Albnes · Data: 10/10/2026 · Via: execução
**Limites:** análise até duas páginas; anexo técnico até duas páginas. [Enunciado](README.md).

## Análise

**1. Recorte e requisito.** Avaliar `pode_visualizar_proposta`, que decide se uma pessoa de um departamento pode ver um chamado. Quem usa o resultado são os funcionários da Oficina e do Laboratório. Limites: departamentos Oficina e Laboratório; estados `aberto`, `em_andamento` e `fechado`; impacto e urgência de 1 a 3. Fora do escopo: autenticação, persistência e validação de entradas externas.
R3: só vê o chamado quem é do mesmo departamento dele, seja qual for o estado ou a prioridade. R4: a documentação deve descrever as mesmas regras do contrato; teste e texto gerados com apoio de IA precisam ser confrontados com ele.
Critério de aceite: (a) o código deve retornar verdadeiro somente se o departamento do chamado for igual ao do solicitante, sem considerar estado, impacto ou urgência; (b) a documentação deve descrever esse mesmo comportamento, sem condição a mais nem omissão.

**2. Estratégia.** Defini quatro casos como um funcionário da Oficina, cruzando departamento do chamado (igual/diferente) com estado (aberto/fechado), porque são os dois fatores que o contrato e o candidato podem tratar de forma diferente. Mantive fixos o solicitante (Oficina), o impacto e a urgência. Pelo R3, só pode ver o chamado do mesmo departamento, seja qual for o estado: T1 e T2 podem ver; T3 e T4 não podem.
Caso decisivo: T2. Pelo R3, a pessoa da Oficina deve poder ver o chamado fechado da Oficina (mesmo departamento, estado irrelevante), mas o candidato retorna `False` por causa da condição `chamado["estado"] != "fechado"`, que o R3 não prevê. Caso de controle: T3. O chamado é do Laboratório e está aberto; o R3 e o candidato concordam em negar. Isso mostra que a condição de departamento (`chamado["departamento"] == departamento`) funciona e isola a divergência na condição de estado.

**3. Evidência e interpretação.** O candidato diverge do contrato em T2 (chamado fechado do mesmo departamento): o R3 manda permitir e o candidato retorna `False` (T2, E2). A causa é a condição `chamado["estado"] != "fechado"`, que o R3 não prevê. A documentação repete o mesmo filtro por estado ("chamados ativos", "chamados fechados ficam indisponíveis"), o que o R3 e o R4 não sustentam (E3). T1, T3 e T4 coincidem com o esperado.
Código e documentação concordam entre si, mas os dois divergem do R3: ambos tratam o estado `fechado` como motivo de bloqueio. A regra de filtrar chamados fechados pertence ao R2 (`listar_ativos`), não ao R3 (`pode_visualizar`). Como o R4 exige que a documentação descreva as mesmas regras do contrato, o texto também não atende ao critério.

**4. Decisão comparada.** Aceite condicionado para o código e para a documentação. Em T1, T3 e T4 o candidato concorda com o R3, mas em T2 (E2) ele nega um acesso que o R3 permite, e o texto (E3) repete o filtro por estado. A condição para o aceite é retirar a verificação de estado do código e do texto.
Alternativa: rejeitar o candidato e a documentação e reescrevê-los do zero. Sob o mesmo critério ((a) código e (b) documentação iguais ao R3), a rejeição também resolveria a divergência, mas seria desproporcional: só uma condição diverge, a comparação de departamento já está correta (T3 como controle) e o ajuste cabe em uma linha de código e em duas frases do texto. Aceitar o candidato como está falharia no critério (a) em T2 e no (b) em E3. Por isso escolho o aceite condicionado.
Retirar `and chamado["estado"] != "fechado"` do código e retirar da documentação as referências a estado ("ativos", "abertos ou em andamento ficam disponíveis", "fechados ficam indisponíveis"). Revalidação: T1 a T4 após o ajuste, na tabela da alternativa no anexo.
Responsável: o supervisor ou engenheiro responsável pela manutenção de Fila Clara. Condição para rever: se o R3 for alterado, ou se a revalidação de T1 a T4 (de preferência executada) divergir do esperado.

**5. Procedência e limites.** Contrato de Fila Clara (`caso/regras.md`), candidato de código, documentação candidata e registros V-01 a V-04 (`insumos.md`), todos didáticos e fictícios, não resultados de modelo real.
Observei em execução o retorno do candidato em T1 a T4 e da função ajustada nos mesmos quatro casos. Inferi por inspeção o caminho lógico de T2 e T3 (E2) e a divergência entre a documentação e o R3 (E3). Apenas propus o novo texto da documentação, conferido só por leitura contra o R3.
A cobertura é de quatro registros, com solicitante Oficina, sem o estado `em_andamento` e sem o Laboratório como solicitante. Consequência: o aceite condicionado vale só para o que foi testado, e a condição de rever a decisão cobre os demais casos. Nada aqui conclui sobre segurança de um sistema real.
IA: ferramenta-modelo visível: Claude (Sonnet 5.5); data: 10 e 11/10/2026; tarefa/contexto: apoio para entender o enunciado, o contrato e a estrutura da análise, redação dos trechos E1 a E3 e das seções 3 e 4, e criação e execução do `teste_av2.py`; trecho aproveitado: os textos das seções 3 e 4, os trechos E1 a E3 e a execução, redigidos a partir das minhas respostas; verificação/intervenção próprias: defini o recorte, o critério de aceite, os esperados por R3, o caso decisivo e o de controle, a decisão de aceite condicionado, o ajuste e o responsável, e conferi os resultados com o contrato.

## Anexo técnico — trechos essenciais

**Dados e condições comuns:** registros V-01 a V-04 de `insumos.md` (cada um com `id`, `departamento`, `estado`, `impacto` e `urgencia`); solicitante fixo `Oficina` nos quatro casos; impacto e urgência mantidos conforme os registros (V-01 e V-02: 1 e 1; V-03 e V-04: 3 e 3), sem efeito sobre o resultado por R3.

| Caso | Entrada/referência + solicitante | Relação de departamento / estado | Esperado por R3 | Retorno do candidato | Status observado/inferido | Interpretação |
|---|---|---|---|---|---|---|
| T1 | V-01 · solicitante Oficina | Igual / aberto | Pode ver (mesmo departamento) | `True` | Observado em execução | Coincide com o esperado. |
| T2 | V-02 · solicitante Oficina | Igual / fechado | Pode ver (mesmo departamento; o estado não importa) | `False` | Observado em execução | Difere do esperado: o candidato bloqueia o chamado por estar fechado. |
| T3 | V-03 · solicitante Oficina | Diferente / aberto | Não pode ver (outro departamento) | `False` | Observado em execução | Coincide com o esperado. |
| T4 | V-04 · solicitante Oficina | Diferente / fechado | Não pode ver (outro departamento) | `False` | Observado em execução | Coincide com o esperado. |

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
**Execução, se escolhida — ambiente, comando e trecho de saída:** Python 3.13.16, só biblioteca padrão, em arquivo separado `teste_av2.py` (cópia da função e dos registros V-01 a V-04, fora do repositório, sem alterar o kit), executado com apoio do Claude. Comando: `python3 -B teste_av2.py`. Saída do candidato (solicitante `Oficina`):
```
V-01 Oficina/aberto: esperado=True retorno=True OK
V-02 Oficina/fechado: esperado=True retorno=False DIVERGE
V-03 Laboratório/aberto: esperado=False retorno=False OK
V-04 Laboratório/fechado: esperado=False retorno=False OK
```
**Alternativa/ajuste e revalidação:** comportamento proposto: o código passa a `return chamado["departamento"] == departamento`, e a documentação passa a dizer: "A função permite que uma pessoa visualize chamados de seu próprio departamento, independentemente do estado. Chamados de outros departamentos não são exibidos. Impacto e urgência não alteram essa decisão."; T1–T4 após ajuste (esperado/retorno/status): T1 esperado `True`, retorno `True`; T2 esperado `True`, retorno `True`; T3 esperado `False`, retorno `False`; T4 esperado `False`, retorno `False`; todos observados em execução com a função ajustada `return chamado["departamento"] == departamento` (solicitante Oficina, mesmo `teste_av2.py`); a documentação ajustada foi conferida só por leitura contra o R3; limite: a execução cobre apenas os quatro registros V-01 a V-04.

**Checklist:** [x] 4 combinações; [x] critérios prévios; [x] código e texto; [x] status; [x] alternativa; [x] limites/IA; [ ] 2+2 páginas.

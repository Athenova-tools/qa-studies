# Auditoria QA — `js/questions.js` vs Syllabus ISTQB CTFL v4.0.1

**Data:** 2026-10-20 · **Modo:** read-only (nenhum ficheiro do repo alterado)
**Banco:** 525 questões · 13 sets (exam1–exam13) · web ≡ android (byte-a-byte)
**Fonte de verdade:** PDF oficial `ISTQB_CTFL_Syllabus_v4.0.1.pdf` (astqb.org) → 64 LOs oficiais `FL-x.y.z` + K-level por LO (extraídos para `/tmp/opencode/official_los.txt`)
**Ferramentas:** `js/validate_bank.js` (repo) + `/tmp/opencode/pw/audit_bank.js` + `classify*.js` (novo, só leitura) → `/tmp/opencode/pw/audit_findings.json`

---

## Resumo executivo

| Severidade | Achado | Qtd |
|---|---|---|
| 🔴 Erro | `correctFeedback` truncadas a meio de palavra (exam10/11) | **22** |
| 🔴 Erro | Q215 com blocos de feedback incompletos (validate_bank) | 1 |
| 🔴 Erro | Enunciados duplicados (2 grupos / 5 questões) | 5 |
| 🟠 Alto | Questões com LO/secção do syllabus errada (+ K a ajustar) | **30** |
| 🟠 Alto | kLevel divergente do K oficial da LO (Q022, Q052 — FL-4.2.4) | 2 |
| 🟠 Alto | exam10–13 fora do weighting oficial anunciado (ch6: 2 vs 5) | 4 exames |
| 🟡 Médio | Divergência de redação feedback ↔ optionExplanations | 170 warns / 60 q. |
| 🟡 Médio | exam9 = 45 questões,0% ch2/ch3/ch6, chave enviesada (A=36%) | 1 |
| 🟡 Médio | exam10 chave enviesada (A=16/40 = 40%) | 1 |
| 🔵 Info | Fuga PT: Q1003 `memoryAid` | 1 |
| 🔵 Info | 52 questões com ordem de chaves de opção não-ABCD (sem impacto UI) | 52 |
| 🔵 Info | Placeholders "TBD" como distrator (Q1010, Q1050) | 2 |

**O que está bom (verificado):** 0 LOs inexistentes no syllabus oficial (todas as 525 usam códigos dos 64 oficiais); hierarquia chapter/section/subsection/LO coerente em 525/525; 0 escapes `\\u00xx` residuais; 0 restos da corrupção antiga (`"; "`, ecos); distribuição global de respostas corretas equilibrada (A=143 B=127 C=128 D=127); exams1–6 são prática de capítulo (by design, rótulos corretos no index.html); exam7/8 com blueprint exato 8/6/3/10/8/5 ✓; só 2 de 525 kLevels divergem do oficial.

---

## 🔴 ERROS

### E1 — 22 `correctFeedback` truncadas a meio de palavra (exam10 e exam11)
Corte clássico: o texto acaba com fragmento + ponto colado (`"…and th."`), enquanto `optionExplanations[correta]` tem o texto completo e alinhado. **O utilizador vê a frase cortada no toast de resposta certa.**

- **exam10 (14):** Q1001, Q1005, Q1007, Q1008, Q1014, Q1018, Q1025, Q1026, Q1027, Q1028, Q1037, Q1039, Q1040
- **exam11 (8):** Q1043, Q1044, Q1045, Q1046, Q1054, Q1069, Q1074, Q1077, Q1079 — *corrigidos parcialmente? Não: o ficheiro de30 correções não os incluía (só Q1021 de exam10)*
- Exemplo Q1001: CF `"…while doing this analysis and th."` ▸ OE `"`…analysis and this may lead to either gaining or destroying confidence…"`
- **Correção proposta (mecânica):** `correctFeedback := "✅ Correct: " + optionExplanations[correctAnswer]` (o OE está íntegro; o CF é prefixo cortado). Padrão já usado nas correções dos30.
- Nota: `incorrectFeedback.*` — 0 truncamentos desta classe (só reescritas, ver M1).

### E2 — Q215 (exam3): blocos de feedback incompletos
`correctAnswer: "D"`, mas:
- `incorrectFeedback` tem só `{B, C}` → **falta A** (esperado `ABC`)
- `optionExplanations` tem só `{A, B, C}` → **falta D** (esperado `ABCD`)

O ficheiro de correções dos30 entregou a Q215 apenas os blocos B/C — ficou estruturalmente inválida (`validate_bank.js` linhas 120–131). Opções: A=formally measure branch coverage, B=execute test cases, C=approve tool procurement, D=explain a work product… (enunciado: objective de walkthrough).

### E3 — Enunciados duplicados (validate_bank: 3 erros)
| Grupo | Questões | Sets |
|---|---|---|
| "Which of the following is a project risk?" | Q058, Q1033, Q1073 | exam5, exam10, exam11 |
| "Which of the following is an example of a good testing practice?" | Q1009, Q1049 | exam10, exam11 |

Opções diferentes em cada, mas mesmo stem → risco de um candidato ver o mesmo enunciado em mocks diferentes com respostas certas distintas. Nota: Q1033 tem LO correta (5.2.2); Q058 e Q1073 estão nos clusters de LO errado (ver A1).

---

## 🟠 ALTO — Metadados vs syllabus

### A1 — 30 questões com LO/secção errada (com K oficial a acoplar)
Todas as propostas verificadas contra os64 LOs oficiais. Muitas exigem mudar `chapter/section/subsection` **e** `kLevel` (tabela com delta K).

**Cluster risco sob FL-5.5.1 (Defect Management) → pertence 5.2.x Risk Management (8):**
| Id | Enunciado (curto) | LO actual → proposta | K |
|---|---|---|---|
| Q031 | risk related to the software itself = product risk | 5.5.1 → **5.2.2** | K3→K2 |
| Q058 | Which is a project risk? | 5.5.1 → **5.2.2** | K3→K2 |
| Q194 | product risk assessment activity | 5.5.1 → **5.2.3** | K3→K2 |
| Q349 | tool license not renewed = project risk | 5.5.1 → **5.2.2** | K3→K2 |
| Q350 | payment module risk… managing: | 5.5.1 → **5.2.4** | K3→K2 |
| Q351 | product risk analysis high/low risk | 5.5.1 → **5.2.3** | K3→K2 |
| Q352 | regression by risk level | 5.5.1 → **5.2.4** | K3→K2 |
| Q074 | test plan p/ high product risks | 5.5.1 → **5.2.3** (ou 5.1.1) | K3→K2 |

**Cluster planeamento sob FL-5.2.1 (Risk Definition) → 5.1.x Test Planning (6):**
| Q071 / Q110 / Q190 | test planning tasks / test plan content | 5.2.1 → **5.1.1** | K1→K2 |
| Q158 | purpose of exit criteria | 5.2.1 → **5.1.3** | K1→K2 |
| Q136 / Q196 | estimation techniques (incl. Wideband Delphi) | 5.2.1 → **5.1.4** | K1→K3 |

**Avulsos ch5 (4):** Q997 three-point estimation 5.3.1→**5.1.4** (K1→K3) · Q339 entry criterion 5.2.3→**5.1.3** · Q1073 project risk 5.1.7→**5.2.2** · Q1078 defect report quality 5.1.5→**5.5.1** (K3=K3 ✓)

**Cluster reviews ch3 (7):**
| Q065 / Q096 | inspection vs technical review / mais formal | 3.2.1 → **3.2.4** | K1→K2 |
| Q215 / Q255 | objective walkthrough / review type mais formal | 3.2.3 → **3.2.4** | K1→K2 |
| Q256 | moderator prepara doc+checklist (atividade) | 3.2.1 → **3.2.2** | K1→K2 |
| Q367 | quem decide severidade de defeitos (papel) | 3.2.2 → **3.2.3** | K2→K1 |
| Q370 | fator crítico de sucesso de review | 3.2.4 → **3.2.5** | K2→K1 |

**ch1 (4):** Q1121 "objective of static testing" 1.1.1→**3.1.2** (muda capítulo 1→3! K1→K2) · Q295 dev testa o próprio código (independência) 1.5.1→**1.5.3** · Q163 purpose of RCA 1.2.1→**1.2.3** · Q041 test condition vs test case 1.4.2→**1.4.3** (K igual)

**Rever (média confiança, fora dos30):** Q142 (root cause/debugging @1.1.1 → 1.1.2/1.2.3) · Q1047 (risk analysis → work product @1.4.3 → 5.2.x?) · Q211, Q338, Q1072, Q187, Q130 (ambíguas; defensáveis no LO atual).

### A2 — kLevel ≠ K oficial (já existentes, independentes dos30)
- **Q022** e **Q052** (FL-4.2.4, state transition): banco **K2**, oficial **K3**.

### A3 — exam10–13: weighting do exame desviado do anunciado
Blueprint oficial/index.html por exame de40: **8/6/3/10/8/5**.
- exam10 = exam11 = exam12: **8/6/4/11/9/2** · exam13: **9/6/4/11/8/2**
- Problema principal: **ch6 Test Tools =2 (esperado 5)**; ch3/4/5 com +1 cada. exam7/8 cumprem o blueprint exato ✓.
- exam10/11 rotulados "ASTQB Sample" (amostras oficiais cumprem o weighting real) → rótulo promete mais do que o banco entrega.
- Global do banco por capítulo: ch1 20% ✓, ch2 14 (−1), ch3 12 (+4), ch4 24 (−1), ch5 18 (−2), ch6 11 (−1).

---

## 🟡 MÉDIO

### M1 — Divergência de redação feedback ↔ optionExplanations (validate_bank: 170 warnings)
- 51× `correctFeedback differs` (51 dos quais22 = truncamentos E1; restantes reescritas)
- 119× `incorrectFeedback[L] differs` (só redação — 0 truncamentos)
- 60 questões afetadas no total; inclui os30 já corrigidos (o ficheiro de correções substituiu `optionExplanations` mas não `correctFeedback` → divergência por construção no par da resposta certa).
- Classificação: **estilo, não corrupção** — mas o toast e a explicação da opção podem dizer a mesma coisa com palavras diferentes. Unificar seria nice-to-have.

### M2 — exam9 "Extra Practice":45 questões e composição enviesada
- 45 questões (40 + extras **Q995–Q999**) — rótulo "Extra" torna-o intencional, mas quebra o formato CTFL de40 e o skew de chave (**A=16/45=36%**) chama a atenção.
- Composição: ch1=18, ch4=22, ch5=5 → **0 questões de ch2, ch3, ch6** — se algum dia for apresentado como mock completo, engana.
- Q997 do extra tem LO errado (ver A1).

### M3 — exam10: chave de respostas enviesada
`A=16, B=8, C=9, D=7` →40% das respostas certas são A. exam9 idem (A=36%). Os restantes11 exames têm spread ≤3 ✓.

---

## 🔵 INFO

- **Q1003 `memoryAid`**: `"…A cadeia não é inevitável em todos os casos."` — única fuga de português no banco EN (as páginas de exame ficam em inglês por design).
- **52 questões** com chaves de `options` fora de ordem A-B-C-D (ex.: Q389 `{D,A,B,C}`): **sem impacto** — `js/engine.js:348` itera `var letters = ['A','B','C','D']` fixo e `js/grading.js:242` ordena por `OPTION_LETTERS`. Higiene de dados apenas.
- **"TBD" como distrator** (Q1010 D, Q1050 D): faz o `validate_bank` falhar (`/\bTBD\b/`), mas é distrator legítimo (To Be Determined) num question TDD/BDD/ATDD — *distrator fraco, manter ou trocar é decisão editorial*.
- **Q1036 "eco"** `5 5` = votos da Planning Poker ("Third vote 5 5") — **falso positivo**.
- Truncamentos/escapes/`"; "` da corrupção antiga: **0 restantes** nos campos já corrigidos.
- `slides.js` (lado de fora do escopo): `relatedSections` de risk-based testing aponta para **5.5** — no v4.0.1 risco é **5.2** (5.5 = Defect Management). Corrigir quando tocarmos nos slides.

---

## Recomendações (por ordem; ⚠️ não executei nenhuma — requer autorização)

1. **E1:** repor as22 `correctFeedback` a partir de `optionExplanations[correta]` (script tipo `apply_corrections`, depois `node js/test_sync.js` + `node js/validate_bank.js`).
2. **E2:** completar Q215 (`incorrectFeedback.A` + `optionExplanations.D`).
3. **A1+A2:** aplicar os30 moves de LO (+`chapter/section/subsection`+`kLevel`) e os2 kLevels FL-4.2.4→K3 — tudo verificado contra o PDF oficial.
4. **A3:** repor exam10–13 em 8/6/3/10/8/5 (mover/repôr5 questões de ch6) ou rebaixar o rótulo "ASTQB Sample" se a composição for proposital.
5. **E3/M3:** reescrever stems duplicados (ou merge editorial) e rebalancear chaves de exam9/10.
6. **M1:** opcional — unificar `correctFeedback` = `optionExplanations[correta]` (reduz170 warnings a ~0 de estilo).

**Artefactos:** `/tmp/opencode/pw/audit_bank.js` · `classify*.js` · `audit_findings.json` · `/tmp/opencode/official_los.txt` · `ctfl_syllabus.pdf`

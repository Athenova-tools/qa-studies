# ISTQB CTFL v4.0.1 — Perguntas, respostas e Study Slides

**Âmbito:** banco completo Web/Android, revisão dos resultados, histórico de exames e seis páginas Study Slides.

**Banco verificado:** 526 perguntas em 13 conjuntos.

**Referência oficial para Learning Objectives/K-level:** `Manual/ISTQB_CTFL_Syllabus_v4.0.1.pdf`.

## Estado final

| Verificação | Resultado |
|---|---|
| Perguntas com exatamente as opções A, B, C e D, serializadas nessa ordem | 526/526 |
| `correctAnswer` associado a uma opção existente | 526/526 |
| Learning Objective oficial e K-level correspondente | 526/526 |
| Learning Objectives oficiais com pelo menos uma pergunta no banco | 64/64 |
| Chapter/Section/Subsection coerentes | 526/526 |
| Learning Objectives das perguntas presentes na secção Study Slides correspondente | 526/526 |
| Feedbacks e explicações associados às letras corretas | Sem divergências estruturais detectadas |
| Enunciados repetidos entre conjuntos de exames | Nenhum |
| Ficheiros partilhados de perguntas/slides iguais em Web e Android | Verificado por teste |

## Correções de conteúdo e referência

- As chaves de opções estavam serializadas fora da ordem A–D em **89 perguntas**. Foram ordenadas sem trocar o texto associado às letras; a interface também apresenta sempre A, B, C, D.
- Foram corrigidas **49 referências a letras de distratores** em feedbacks de 22 perguntas. O texto citado foi conferido contra a opção realmente associada à chave.
- Foram corrigidas as afirmações de letras (“X is correct”) quando contradiziam a chave. `correctFeedback`, `incorrectFeedback` e `optionExplanations` continuam podendo ter redações diferentes; validação não exige texto repetido e verifica referências explícitas a letras.
- Uma varredura posterior encontrou um `correctFeedback` truncado em Q1040 (terminava em “usually) so”) e **13 pares de explicações idênticas** em Q342, Q266, Q319, Q219 e Q1147. O feedback truncado foi completado e cada distrator passou a explicar o erro específico da opção.
- Q361 foi reescrita com explicações diferentes para performance, utilização de CPU e revisão estática, removendo o texto repetido/corrompido.
- Q1170 foi criada para `FL-5.1.2` e integrada no conjunto do capítulo 5. O conjunto tem 41 itens; cada tentativa seleciona 40, garante Q1170 e aleatoriza a sua posição e a amostra dos restantes itens.
- Os números de versão das referências aos scripts foram atualizados nas páginas de exame e revisão para que clientes Web/Android não reutilizem o banco anterior em cache.
- **Q1032** foi normalizada conforme solicitado: A=Q1, B=Q2, C=Q3, D=Q4; `correctAnswer: A`. Cada distrator explica o que o respetivo quadrante representa.
- Q1121 foi referenciada a `FL-3.1.2`, no capítulo 3, em vez de `FL-1.1.1`.
- Foram corrigidos enunciados duplicados entre os exames e palavras-chave evidentemente associadas ao tema errado.
- A secção de configuração de gestão 5.4, os quadrantes em 5.1 e os restantes conteúdos dos Study Slides passam a vir de `js/slides.js`. As páginas de capítulo deixam de manter uma cópia antiga independente.
- As Learning Objectives aparecem como âncoras nos slides. Na revisão, as referências a Subsection e Learning Objective abrem diretamente a âncora correspondente e permitem regressar à revisão.
- Os conjuntos 9–13 são descritos na página inicial como conjuntos de prática, com indicação de que a sua distribuição de capítulos pode diferir do blueprint oficial. Isto evita apresentá-los como simulados ponderados quando não correspondem à distribuição indicada.

## Exames históricos

As novas tentativas guardam a revisão do banco e um snapshot das opções e da resposta correta de cada pergunta. Na atualização, os registos históricos com respostas completas são reavaliados e têm pontuação, percentagem, contagens, desempenho por capítulo e estado aprovado/reprovado recalculados com o limiar já existente.

Para Q1032, a migração preserva a opção que a pessoa escolheu na ordem antiga e converte-a para a nova ordem:

| Letra antiga | Opção antiga | Letra nova |
|---|---|---|
| C | Q1 | A |
| D | Q2 | B |
| B | Q3 | C |
| A | Q4 | D |

A revisão histórica assinala que o resultado foi reavaliado. Registos sem versão do banco original são identificados como legados; registos sem respostas completas ou cuja associação às perguntas atuais não seja segura mantêm a pontuação gravada e não são reavaliados, com indicação no painel. A chave de Q1032 não altera a pontuação histórica quando a escolha semanticamente equivalente é preservada; outras chaves corrigidas podem alterar a avaliação histórica.

## Testes executados

- `node js/test_sync.js` — 35 testes aprovados.
- `node js/test_sync.js android/app/src/main/assets/www/js/statistics.js android/app/src/main/assets/www/js/grading.js` — 35 testes aprovados.
- `node js/test_exam_exit.js` — PASS, Q1170 aparece em todas as tentativas do exame 5 e muda de posição.
- `node js/test_exam_exit.js` — PASS, Q1170 aparece em todas as tentativas do exame 5 e muda de posição.
- `node js/validate_bank.js` — PASS, 526 perguntas, sem avisos nem erros estruturais.
- `node js/test_question_statement.js` — PASS.
- `node js/e2e_studyslides.js` — E2E ALL PASS; navegação para objetivos, âncoras, retorno e teclado.
- `./gradlew assembleDebug assembleRelease` — BUILD SUCCESSFUL.

## Manutenção reproduzível

Depois de editar o banco ou o conteúdo dos slides, a sequência de validação/sincronização é:

```bash
node js/normalize_question_bank.js --write
node js/validate_bank.js
node js/generate_slide_pages.js
node js/sync_android_assets.js
node js/test_sync.js
node js/e2e_studyslides.js
```

`normalize_question_bank.js` reordena as chaves para A–D e corrige referências explícitas a uma opção quando o texto citado confirma a correspondência; preserva a redação independente de cada campo de explicação e não escolhe nem altera a resposta correta. A revisão factual de qualquer pergunta continua a exigir confirmar a chave e a explicação face ao syllabus.

## Limite da validação

As verificações automáticas percorrem as 525 entradas e provam a coerência das chaves, explicações, metadados, navegação e cobertura explícita dos objetivos. A correspondência do nível K e dos códigos dos objetivos foi validada contra o syllabus oficial. Estes testes não substituem uma revisão humana independente do mérito factual de cada distractor ou cenário; não se deve interpretar uma validação estrutural como prova formal de que cada item é uma pergunta oficial.

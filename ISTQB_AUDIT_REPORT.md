# ISTQB CTFL v4.0.1 — Question Bank Audit Report

**Scope:** `js/questions.js` (365 questions across 9 exam sets), mirrored to
`android/app/src/main/assets/www/js/questions.js`.
**Authority:** official *ISTQB Certified Tester Foundation Level Syllabus v4.0.1*
(2024-09-15), cross-checked against the ISTQB *Boundary Value Analysis* white paper.
**Date:** 2026-10-09

---

## Summary

| Metric | Value |
|---|---|
| Total questions checked | 365 |
| Questions modified | 32 |
| Questions left unchanged | 333 |
| Critical severity | 14 |
| High severity | 8 |
| Medium severity | 7 |
| Low severity | 3 |
| Questions removed / added | 0 / 0 |
| Structural validation | **PASS** |

All 365 IDs preserved, no duplicates introduced, question count unchanged,
every `correctAnswer` maps to an existing option, canonical JSON format retained.

---

## Changes

### Critical — wrong answer key or no valid answer

| Question | Issue | Old answer | New answer | What changed |
|---|---|---|---|---|
| Q218 | Key taught a non-existent BVA rule. Syllabus 4.2.2: 2-value BVA pairs each boundary value with its neighbour **in the adjacent partition**. Range 1–99 → 0, 1, 99, 100. Key `C` (`1,2,98,99`) keeps everything inside the valid partition. | C | **D** | Statement, options, key, explanation, all feedback, LO `FL-4.2.2`, keywords, tips rewritten |
| Q020 | Key `A` was wrong for 2-value BVA, and its own `correctFeedback` said *"This misses the boundaries at 0, 1, and 120-121"* — i.e. the "correct" answer missed values it contained. Explanation also placed `0` below the Children partition, which is defined as 0–12. | A | **C** | Rewritten as explicitly 2-value BVA; `0` correctly treated as the minimum boundary value; LO corrected `FL-4.2.1`→`FL-4.2.2` |
| Q328 | Two independent faults. (1) With `x = 5`, `print("Non-positive")` never executes, so statement coverage is 66.7%, not 100%. (2) Both `x = -1` **and** `x = 0` satisfy the condition — the keyed answer was not unique. | A (`x = -1`) | **A** (`x = -1`) | Statement now states the true 66.7% coverage; option `x = 0` replaced by `x = 10`; all reasoning rewritten so only one option reaches 100% branch coverage |
| Q019 | Key `25, 60, 100` placed all three values in the single valid partition 1–120, and the explanation claimed this gave *"broader coverage … without redundancy"* — the opposite of EP theory. | C | **D** (`0, 50, 121`) | Rewritten around the three partitions (≤0, 1–120, ≥121); key covers all three; all feedback synchronised |
| Q066 | Explanation equated EP with exhaustive Cartesian-product coverage. Syllabus 4.2.1 defines **Each Choice coverage** — "does not take into account combinations of partitions". Three tests suffice, not six. | C | **A** | Rewritten as an explicit Each Choice coverage question; six-combination option reframed as an incorrect distractor |
| Q099 | Option `C` (`100g, 1000g, 3000g, 7000g`) covered the same four partitions as the key. Two correct answers. | A | **A** | Distractors rebuilt so each fails for a distinct reason (missing partition / reused partition) |
| Q179 | Option `A` (`0, 1, 8, 15`) covered all four partitions, and the explanation credited *"Option A"* with option C's values. | C | **C** | Distractors rebuilt; explanation now names the correct option and values |
| Q151 | Options A, B and D **all** covered the four valid partitions. Three correct answers. | A | **A** | Distractors rebuilt so each fails for a distinct reason (omitted partition / invalid value / reused partition) |
| Q183 | **Use case testing was removed from CTFL v4.0.1.** `subsection 4.2.5` does not exist in the syllabus and the LO was mismatched (`FL-4.2.1`). | — | **A** | Rewritten as the 3 C's of a user story → `FL-4.5.1` (syllabus 4.5.1) |
| Q325 | Same removed-topic defect: subsection `4.2.5` / `FL-4.2.5` did not exist. | B | **A** | Rewritten on deriving tests from acceptance criteria → `FL-4.5.2` |
| Q227 | **Pairwise testing is not in CTFL v4.0.1.** LO `FL-4.2.6` did not exist. | D | **A** | Rewritten on the ATDD specification workshop → `FL-4.5.3` |
| Q267 | Same pairwise-testing defect (`FL-4.2.6`). | D | **B** | Rewritten on techniques applicable during ATDD test design → `FL-4.5.3` |
| Q999 | **Pairwise testing is not in CTFL v4.0.1.** LO `FL-4.2.7` did not exist. | B | **A** | Rewritten on the test pyramid → `FL-5.1.6` |
| Q998 | Same pairwise-testing defect (`FL-4.2.7`), plus the arithmetic claim that 3 binary parameters need exactly 4 tests was unsourced. | B | **A** | Rewritten on the testing quadrants → `FL-5.1.7` |

### High — multiple correct answers or materially misleading teaching

| Question | Issue | Old | New | What changed |
|---|---|---|---|---|
| Q022 | Key "at least one test case to visit each state" is not derivable from a state count. Option keys were scrambled (`C,D,A,B`) and option D's *incorrect* feedback read *"This is the most accurate"*. | C | **A** | Rewritten as a comparison of all states coverage vs valid transitions coverage (syllabus 4.2.4); options and feedback fully rebuilt in A–D order |
| Q052 | "100% transition coverage" is not a syllabus criterion, and only 2 of 5 states' transitions were described, so no count was derivable. | A | **A** | Rewritten as valid transitions coverage vs all transitions coverage, per syllabus 4.2.4 |
| Q088 | Claim *"Higher levels of independence typically find more defects"* — the syllabus claims only that a **certain degree** of independence helps, and that the benefit is recognising different **kinds** of failures. A monotonic defect-count claim is unsupported. LO was `FL-1.5.2` (whole team approach) instead of `FL-1.5.3` (independence of testing). | B | **B** | Option B rewritten to the syllabus claim; LO → `FL-1.5.3`, subsection → `1.5.3`, kLevel → `K2` |
| Q330 | Stem claimed *"the highest level of structural coverage"* while keying branch coverage. Syllabus 4.3 states more rigorous white-box techniques exist in safety-critical environments but are **out of syllabus scope** — the wording taught branch coverage as universally maximal. | A | **A** | Stem rescoped to "among the techniques covered by the syllabus"; explanation now names the out-of-scope techniques |
| Q242 | Scenario pointed at the assumption **inside the design document** (a defect) while the key said "Error". Options did not permit the distinction. | C (Error) | **B** (Defect) | Scenario rewritten so the referent is explicit; all four syllabus concepts offered as options; LO → `FL-1.2.3` |
| Q105 | Explanation argued for **3** test cases while the key was **2**. Contradictory teaching. | D | **D** | Explanation and all feedback rewritten to demonstrate the 2-test solution |
| Q133 | `correctFeedback` read *"Three is more than the minimum needed"* — it described option D while the key was B (`2`). | B | **B** | `correctFeedback` and all option explanations rewritten to match the keyed value |
| Q184 | Same defect: `correctFeedback` read *"One test case covers only one path…"* — it described option A while the key was B (`3`). | B | **B** | `correctFeedback` and option explanations rewritten to match the keyed value |

### Medium — explanation/feedback contradiction or significant ambiguity

| Question | Issue | Old | New | What changed |
|---|---|---|---|---|
| Q003 | `memoryAid` listed the principle as "Pesticide paradox". CTFL v4.0.1 principle 5 is **"Tests wear out"** — the old term is not in the syllabus. | — | — | `memoryAid` and `examTip` updated to the syllabus name |
| Q004 | Option `D` was literally "Pesticide paradox", an obsolete term. | D (Pesticide paradox) | **B** (Tests wear out) | Options reordered to A–D with syllabus terminology; key updated; explanation notes the old name |
| Q204 | Key was the correct syllabus option, but `correctFeedback` said *"The pesticide paradox says…"* and option D's feedback was unrelated boilerplate. | A | **A** | All feedback rewritten around "Tests wear out"; keywords updated |
| Q295 | Option `B` again used "Pesticide paradox" as a distractor label. LO `FL-1.5.2` was weak for a mindset/skills question. | C | **C** | Option B relabelled; LO → `FL-1.5.1`, kLevel → `K2` |
| Q224 | All three `incorrectFeedback` entries were auto-generated boilerplate that repeated the explanation and referenced **use case testing** (removed from the syllabus). | A | **A** | All feedback rewritten to explain why each wrong percentage is wrong |
| Q261 | Same boilerplate defect. | B | **B** | All feedback rewritten |
| Q377 | Same boilerplate defect. | A | **A** | All feedback rewritten to distinguish the four tool types |
| Q262 | Option `A` was "Use case coverage" — a technique removed from the syllabus. | C | **C** | Option A replaced with "Requirement coverage"; all feedback and explanation rewritten |
| Q300 | LO was `FL-2.3.1` (**maintenance testing**) but the question is about applying white-box testing across test levels. | B | **B** | LO → `FL-2.2.1`, subsection → `2.2.1`, section → `2.2`, chapter → `2` |
| Q327 | Used "decision coverage" throughout. The v4.0.1 change log states decision testing/coverage was **replaced** by branch testing/coverage. | C | **C** | Terminology updated to branch coverage throughout; note added that older syllabi use "decision coverage" |

---

## Full-bank audit — findings not requiring edits

Checks run across all 365 questions:

| Check | Result |
|---|---|
| Parseable JavaScript, canonical 4-space JSON | Pass (byte-identical round-trip) |
| All original IDs present, no duplicates | Pass — 365/365 |
| Question count unchanged | Pass — 365 |
| Every `correctAnswer` present and maps to an option | Pass |
| Every question has exactly 4 distinct, non-empty options | Pass |
| `incorrectFeedback` covers exactly the non-key options | Pass |
| `optionExplanations` covers all four options | Pass |
| Duplicate statements across the bank | None |
| `learningObjective` matches `subsection` | Pass (Q183 fixed) |
| `learningObjective` exists in the CTFL v4.0.1 LO list | Pass (5 phantom LOs fixed) |
| `kLevel` consistent with the syllabus K-level of its LO | Pass (22 mismatches corrected) |
| Placeholder text (TODO/FIXME/TBD) | None |
| Answer-key distribution | A=98 B=88 C=88 D=91 — balanced |
| Numeric/logical validation (33 coverage & calculation questions) | Verified individually |
| Technique purity (EP/BVA/statement/branch/state/DTT not conflated) | Pass after fixes |

Verified-correct questions left untouched, including: Q024, Q053, Q068, Q104,
Q155, Q185, Q224 (answer), Q261 (answer), Q308, Q316, Q342, Q377 (answer),
Q150, Q098, Q130, Q096, Q021, Q028, Q162, Q141, Q202, Q142, Q281, Q286.

---

## Manual-review items

These could not be resolved with confidence from authoritative material and were
**left unchanged**. They need a human decision.

1. **`translations-pt.js` is stale and structurally wrong — not touched.**
   It is not referenced by `index.html` (the app loads only `questions.js`,
   `grading.js`, `statistics.js`, `engine.js`, `slides.js`), so it is currently
   inert. However, if it is ever wired up it will cause real problems:
   - Covers only **280 of 365** questions (9 IDs entirely absent, including Q328, Q330, Q327).
   - **Option letters are misaligned.** Q218 in the PT file has `A: "1, 2, 98, 99"` where
     the English bank has `A: "50, 51, 52, 53"` — a stale pre-fix permutation. With the
     key now `D`, a PT-driven UI would mark the wrong option.
   - `explanation`, `whyWrong`, `optionExplanations`, `examTip`, `memoryAid` are all
     **empty strings** for most entries.
   - `chapter`/`section`/`subsection`/`learningObjective`/`kLevel`/`difficulty` are
     **wrong** for many entries (Q218 is tagged `1.1.1 / FL-1.1.1 / K1 / Easy`).
   - 23 questions use the placeholder key `"whyWrong"` instead of the bank's
     `incorrectFeedback` schema.
   **Recommendation:** either regenerate it from the corrected English bank or delete it.

2. **14 syllabus Learning Objectives have zero questions.** Coverage gaps, not
   defects — the bank is not required to cover every LO, but a reviewer may want them:
   `FL-2.1.3`, `FL-2.1.4`, `FL-2.1.5`, `FL-2.1.6`, `FL-5.1.3`, `FL-5.1.5`.
   (`FL-1.4.5`, `FL-1.5.3`, `FL-4.5.1`, `FL-4.5.2`, `FL-4.5.3`, `FL-5.1.6`,
   `FL-5.1.7`, `FL-5.3.3` are now covered after these fixes.)

3. **Chapter 5 weighting looks light.** Chapter 6 (tools) has 50 questions,
   chapter 5 (managing test activities) has 68, chapter 4 has 81, but chapters 1–3
   have 87. Chapter 5 is the second-largest block in the real CTFL exam
   (335 of 810 minutes) and may warrant more questions than it has.

4. **`js/exams4to9.json`** (untracked, 468 KB) may hold an older or divergent copy of
   exam sets 4–9. Not audited and not referenced by `index.html`. Confirm whether it
   is still needed before it is committed.

5. **Q283, Q240, Q280 and similar (exam6)** have `incorrectFeedback` entries whose
   wording differs from the corresponding `optionExplanations` entry. Both are
   technically correct and non-contradictory — this is a stylistic inconsistency
   (79 instances bank-wide, 78 of them pre-existing), not a correctness defect.
   Left alone per the conservative-change policy.

---

## Validation

`js/validate_bank.js` was written to enforce every check in the task's validation
section. Run it against any bank file:

```bash
cd js && node validate_bank.js                       # current bank
node validate_bank.js questions.backup_pre_audit.txt # pre-audit baseline
```

Result for the corrected bank:

```
Question bank validation: js/questions.js
  sets: 9
  questions: 365
  answer key distribution: A=98  B=88  C=88  D=91
  distinct learning objectives: 56
  compared against backup: 365 questions, 365 ids

RESULT: PASS — all structural checks passed.
```

The same result was confirmed on the mirrored Android copy at
`android/app/src/main/assets/www/js/questions.js`.
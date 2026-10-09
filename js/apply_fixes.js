/**
 * ISTQB CTFL v4.0.1 — question-bank audit fixes.
 * Applies surgical corrections to js/questions.js, preserving IDs, order,
 * option letters, and the exact serialisation format (4-space JSON).
 */
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'questions.js');
const src = fs.readFileSync(FILE, 'utf8');

global.window = {};
// eslint-disable-next-line no-eval
(0, eval)(src);
const bank = global.window.questionSets;

const index = new Map();
for (const set of Object.keys(bank)) {
  for (const q of bank[set]) index.set(q.id, q);
}

const changes = [];

function apply(id, patch) {
  const q = index.get(id);
  if (!q) throw new Error('Unknown question id: ' + id);
  const before = JSON.stringify(q);
  const fields = [];
  for (const [k, v] of Object.entries(patch)) {
    if (JSON.stringify(q[k]) === JSON.stringify(v)) continue;
    fields.push(k);
    q[k] = v;
  }
  if (!fields.length) return;
  if (JSON.stringify(q) === before) return;
  changes.push({ id, fields });
}

/* ------------------------------------------------------------------ *
 * 1. Q218 — two-value BVA (FL-4.2.2, syllabus 4.2.2)
 *    Coverage item per boundary = the boundary value + its closest
 *    neighbour in the ADJACENT partition. Range 1-99 -> 0,1,99,100.
 * ------------------------------------------------------------------ */
apply('Q218', {
  statement:
    'A field accepts integer order quantities from 1 to 99 inclusive. Values outside this range are rejected as invalid. Using two-value boundary value analysis, which set of values covers all boundary values and their required neighbours?',
  options: {
    A: '50, 51, 52, 53',
    B: '-1, 0, 100, 101',
    C: '1, 2, 98, 99',
    D: '0, 1, 99, 100',
  },
  correctAnswer: 'D',
  explanation:
    'In two-value BVA each boundary value has two coverage items: the boundary value itself and its closest neighbour belonging to the adjacent partition. The valid partition 1-99 has two boundary values, 1 and 99. The neighbour of 1 in the partition below is 0, and the neighbour of 99 in the partition above is 100. The complete set of coverage items is therefore 0, 1, 99, 100. Selecting 1, 2, 98, 99 would only exercise values that are still inside the valid partition, so the adjacent partitions would never be tested.',
  correctFeedback:
    '✅ Correct: 0, 1, 99, 100 — each boundary value (1 and 99) together with its closest neighbour in the adjacent partition (0 and 100).',
  incorrectFeedback: {
    A: '❌ Incorrect: 50, 51, 52, 53 are interior values of the valid partition, not boundary values.',
    B: '❌ Incorrect: -1 and 101 are not the closest neighbours of the boundary values. The neighbours of 1 and 99 are 0 and 100.',
    C: '❌ Incorrect: 2 and 98 still belong to the valid partition. Two-value BVA requires the neighbour in the adjacent partition, which is 0 below 1 and 100 above 99.',
  },
  optionExplanations: {
    A: '50, 51, 52, 53 are interior values of the valid partition, not boundary values.',
    B: '-1 and 101 are not the closest neighbours of the boundary values. The neighbours of 1 and 99 are 0 and 100.',
    C: '2 and 98 still belong to the valid partition. Two-value BVA requires the neighbour in the adjacent partition, which is 0 below 1 and 100 above 99.',
    D: '0, 1, 99, 100 — each boundary value (1 and 99) together with its closest neighbour in the adjacent partition (0 and 100).',
  },
  kLevel: 'K3',
  difficulty: 'Hard',
  learningObjective: 'FL-4.2.2',
  keywords: ['boundary value analysis', 'BVA', 'two-value BVA', 'equivalence partitions', 'boundary values'],
  examTip: 'Two-value BVA = boundary value + closest neighbour in the ADJACENT partition, not a second value inside the same partition.',
  memoryAid: '2-value BVA: step across the border (1 and 0, 99 and 100).',
});

/* ------------------------------------------------------------------ *
 * 2. Q019 — equivalence partitioning (FL-4.2.1, syllabus 4.2.1)
 *    Partitions: <=0 invalid, 1-120 valid, >=121 invalid.
 *    100% EP coverage needs one representative per partition -> D.
 * ------------------------------------------------------------------ */
apply('Q019', {
  statement:
    'A system accepts age values between 1 and 120 inclusive; values of 0 or below and values of 121 or above are rejected as invalid. Using equivalence partitioning, which set of values achieves 100% equivalence partition coverage?',
  options: {
    A: '1, 60, 120',
    B: '-1, 1, 120',
    C: '25, 60, 100',
    D: '0, 50, 121',
  },
  correctAnswer: 'D',
  explanation:
    'In EP the coverage items are the equivalence partitions themselves, and one test per partition is sufficient. Three partitions are identified: 0 and below (invalid), 1-120 (valid), and 121 and above (invalid). To achieve 100% coverage, each partition must be exercised at least once. Option D provides exactly that: 0 from the invalid-low partition, 50 from the valid partition, and 121 from the invalid-high partition. Options A and C place all three values inside the same valid partition, so they exercise only one partition. Option B covers the invalid-low and valid partitions but never the invalid-high partition.',
  correctFeedback:
    '✅ Correct: 0, 50 and 121 exercise all three partitions — invalid below, valid, and invalid above.',
  incorrectFeedback: {
    A: '❌ Incorrect: 1, 60 and 120 all belong to the single valid partition 1-120, so only one partition is exercised.',
    B: '❌ Incorrect: -1, 1 and 120 cover the invalid-low and valid partitions, but no value comes from the invalid-high partition (121+).',
    C: '❌ Incorrect: 25, 60 and 100 all belong to the valid partition 1-120. Extra values from one partition do not increase partition coverage.',
  },
  optionExplanations: {
    A: '1, 60 and 120 all belong to the single valid partition 1-120, so only one partition is exercised.',
    B: '-1, 1 and 120 cover the invalid-low and valid partitions, but no value comes from the invalid-high partition (121+).',
    C: '25, 60 and 100 all belong to the valid partition 1-120. Extra values from one partition do not increase partition coverage.',
    D: '0, 50 and 121 exercise all three partitions — invalid below, valid, and invalid above.',
  },
  kLevel: 'K3',
  difficulty: 'Hard',
  learningObjective: 'FL-4.2.1',
  keywords: ['equivalence partitioning', 'EP', 'black-box', 'equivalence partitions', 'valid and invalid partitions'],
  examTip: 'In EP the coverage items are the partitions, so 100% coverage means at least one representative from EVERY partition, valid and invalid.',
  memoryAid: 'EP = one per partition. Three values from the same partition still cover only one partition.',
});

/* ------------------------------------------------------------------ *
 * 3. Q020 — BVA (FL-4.2.2). Old key A contradicted its own feedback.
 *    Two-value BVA coverage items on partitions 0-12 / 13-64 / 65-120
 *    are exactly the boundary values: 0, 12, 13, 64, 65, 120 -> C.
 *    0 is the minimum of the Children partition, NOT below it.
 * ------------------------------------------------------------------ */
apply('Q020', {
  statement:
    'A ticket pricing function partitions customers by age: Children (0-12) at $5, Adults (13-64) at $10, and Seniors (65-120) at $7. These three partitions are the only ones defined by the specification. Using two-value boundary value analysis, which is the minimum set of age values to test?',
  options: {
    A: '0, 1, 12, 13, 64, 65, 120, 121',
    B: '12, 13, 64, 65',
    C: '0, 12, 13, 64, 65, 120',
    D: '1, 12, 13, 64, 65, 120',
  },
  correctAnswer: 'C',
  explanation:
    'In two-value BVA each boundary value is a coverage item together with its closest neighbour in the adjacent partition. The boundary values are the minimum and maximum of each partition: 0 and 12 for Children, 13 and 64 for Adults, and 65 and 120 for Seniors. At the borders between partitions the neighbour of a boundary value is the boundary value of the neighbouring partition, so the pairs are 12 and 13, and 64 and 65. The outer ends contribute only 0 and 120 because no adjacent partition exists beyond them. The complete set of coverage items is therefore 0, 12, 13, 64, 65, 120. Note that 0 is the minimum boundary value of the Children partition, which is defined as 0-12, so it is valid rather than out of range.',
  correctFeedback:
    '✅ Correct: 0, 12, 13, 64, 65, 120 are exactly the boundary values of the three partitions, which is the minimum set of coverage items for two-value BVA.',
  incorrectFeedback: {
    A: '❌ Incorrect: 1 and 121 are not boundary values and are not required neighbours here. Adding them exceeds the minimum set without adding coverage.',
    B: '❌ Incorrect: This omits 0 and 120, which are boundary values at the outer ends of the Children and Seniors partitions.',
    D: '❌ Incorrect: 1 is not a boundary value; the Children partition starts at 0, so 0 is required instead.',
  },
  optionExplanations: {
    A: '1 and 121 are not boundary values and are not required neighbours here. Adding them exceeds the minimum set without adding coverage.',
    B: 'This omits 0 and 120, which are boundary values at the outer ends of the Children and Seniors partitions.',
    C: '0, 12, 13, 64, 65, 120 are exactly the boundary values of the three partitions, which is the minimum set of coverage items for two-value BVA.',
    D: '1 is not a boundary value; the Children partition starts at 0, so 0 is required instead.',
  },
  learningObjective: 'FL-4.2.2',
  subsection: '4.2.2',
  section: '4.2',
  chapter: 4,
  kLevel: 'K3',
  difficulty: 'Hard',
  keywords: ['boundary value analysis', 'BVA', 'two-value BVA', 'boundary values', 'black-box'],
  examTip: 'Boundary values are the minimum and maximum of each partition. Two-value BVA adds the neighbour from the ADJACENT partition, which at an internal border is the neighbouring boundary value.',
  memoryAid: 'List min/max per partition: 0-12, 13-64, 65-120 gives 0, 12, 13, 64, 65, 120.',
});

/* ------------------------------------------------------------------ *
 * 4. Q151 — EP insurance. Options A, B and D all covered the four
 *    partitions. Distractors redesigned to fail for distinct reasons.
 * ------------------------------------------------------------------ */
apply('Q151', {
  statement:
    'An insurance company calculates annual premiums by age group: 18-25 at $800, 26-40 at $600, 41-65 at $700, and 66 and above at $900. These four ranges are the valid equivalence partitions. Using equivalence partitioning, which set of values provides coverage of every valid partition?',
  options: {
    A: '22, 30, 50, 70',
    B: '22, 30, 50',
    C: '17, 25, 41, 66',
    D: '22, 28, 45, 62',
  },
  correctAnswer: 'A',
  explanation:
    'One test per equivalence partition is sufficient, so a set covering all four valid partitions needs exactly one representative from each. Option A provides 22 (18-25), 30 (26-40), 50 (41-65) and 70 (66+), so every partition is exercised. Option B supplies only three values and leaves the 66+ partition untested. Option C uses 17, which is below the minimum insurable age, and it also omits the 26-40 partition. Option D places both 45 and 62 inside the 41-65 partition, so that partition is used twice while the 66+ partition is never exercised.',
  correctFeedback:
    '✅ Correct: 22, 30, 50 and 70 each come from a different valid partition — 18-25, 26-40, 41-65 and 66+.',
  incorrectFeedback: {
    B: '❌ Incorrect: Only three values are supplied, so the 66+ partition is never exercised.',
    C: '❌ Incorrect: 17 is below the minimum age of 18 and belongs to an invalid partition, and the 26-40 partition is not represented.',
    D: '❌ Incorrect: 45 and 62 are both inside the 41-65 partition, which is therefore covered twice while the 66+ partition is never exercised.',
  },
  optionExplanations: {
    A: '22, 30, 50 and 70 each come from a different valid partition — 18-25, 26-40, 41-65 and 66+.',
    B: 'Only three values are supplied, so the 66+ partition is never exercised.',
    C: '17 is below the minimum age of 18 and belongs to an invalid partition, and the 26-40 partition is not represented.',
    D: '45 and 62 are both inside the 41-65 partition, which is therefore covered twice while the 66+ partition is never exercised.',
  },
  learningObjective: 'FL-4.2.1',
  kLevel: 'K3',
  difficulty: 'Hard',
  keywords: ['equivalence partitioning', 'EP', 'valid partitions', 'representative value'],
  examTip: 'For full EP coverage count the DISTINCT partitions your values come from — repeating one partition never adds coverage.',
  memoryAid: 'One value per partition. Check that no partition is skipped and none is used twice.',
});

/* ------------------------------------------------------------------ *
 * 5. Q022 — state transition testing (FL-4.2.4).
 *    Old key "at least one test per state" is not derivable, its option
 *    order was scrambled, and option D's "incorrect" feedback said
 *    "This is the most accurate". Rewritten around all states coverage.
 * ------------------------------------------------------------------ */
apply('Q022', {
  statement:
    'In state transition testing, which statement correctly compares all states coverage with valid transitions coverage?',
  options: {
    A: 'All states coverage requires every state to be exercised, and it is weaker than valid transitions coverage because it can be achieved without exercising all transitions',
    B: 'All states coverage requires every state to be exercised, and this automatically guarantees that every valid transition is exercised',
    C: 'Valid transitions coverage is weaker than all states coverage because it focuses on states rather than transitions',
    D: 'All states coverage and valid transitions coverage use the same coverage items and can therefore be achieved by the same test cases',
  },
  correctAnswer: 'A',
  explanation:
    'In all states coverage the coverage items are the states, so 100% coverage means every state is exercised at least once. In valid transitions coverage the coverage items are the individual valid transitions, so every valid transition must be exercised. Because a test case can pass through several states without traversing every transition between them, all states coverage is the weaker criterion. Achieving full valid transitions coverage does guarantee full all states coverage, but the reverse does not hold.',
  correctFeedback:
    '✅ Correct: All states coverage exercises every state, but it is weaker than valid transitions coverage because it does not require every transition to be traversed.',
  incorrectFeedback: {
    B: '❌ Incorrect: This reverses the relationship. All states coverage does not guarantee that every valid transition is exercised.',
    C: '❌ Incorrect: Valid transitions coverage is the stronger criterion because it requires each individual valid transition to be exercised.',
    D: '❌ Incorrect: The coverage items differ — states for all states coverage, individual valid transitions for valid transitions coverage.',
  },
  optionExplanations: {
    A: 'All states coverage exercises every state, but it is weaker than valid transitions coverage because it does not require every transition to be traversed.',
    B: 'This reverses the relationship. All states coverage does not guarantee that every valid transition is exercised.',
    C: 'Valid transitions coverage is the stronger criterion because it requires each individual valid transition to be exercised.',
    D: 'The coverage items differ — states for all states coverage, individual valid transitions for valid transitions coverage.',
  },
  learningObjective: 'FL-4.2.4',
  kLevel: 'K2',
  difficulty: 'Medium',
  keywords: ['state transition testing', 'all states coverage', 'valid transitions coverage', 'coverage items'],
  examTip: 'All states coverage < valid transitions coverage < all transitions coverage. Each stronger criterion guarantees the weaker ones, never the other way round.',
  memoryAid: 'States = circles, transitions = arrows. Covering all circles does not mean you walked every arrow.',
});

/* ------------------------------------------------------------------ *
 * 6. Q066 — EP across two parameter sets (FL-4.2.1).
 *    Syllabus names this Each Choice coverage: exercise each partition
 *    of each set at least once; combinations are not required.
 * ------------------------------------------------------------------ */
apply('Q066', {
  statement:
    'A discount system depends on two sets of equivalence partitions: customer type (Regular, Premium, VIP) and purchase amount (below $100, or $100 and above). Using equivalence partitioning, which is the minimum set of test cases that achieves 100% Each Choice coverage?',
  options: {
    A: '3 test cases: Regular with $50, Premium with $150, VIP with $200',
    B: '6 test cases covering all 3 × 2 combinations of customer type and amount',
    C: '2 test cases: Regular with $50, VIP with $200',
    D: '3 test cases: Regular with $150, Premium with $150, VIP with $150',
  },
  correctAnswer: 'A',
  explanation:
    'When a test object has several sets of partitions, the simplest criterion is Each Choice coverage: test cases must exercise each partition from each set of partitions at least once. Each Choice coverage does not take combinations of partitions into account. Here there are three customer-type partitions and two amount partitions, so three test cases are enough as long as each customer type appears once and both amount partitions appear. Option A does this: Regular exercises the below-$100 partition, while Premium and VIP exercise the $100-and-above partition. Option B is exhaustive combination coverage, which EP does not require. Option C never exercises the Premium partition. Option D never exercises the below-$100 partition.',
  correctFeedback:
    '✅ Correct: three test cases cover all three customer-type partitions and both amount partitions without needing every combination.',
  incorrectFeedback: {
    B: '❌ Incorrect: Testing all six combinations is exhaustive combination coverage. Each Choice coverage does not require combinations of partitions.',
    C: '❌ Incorrect: Only two customer types are exercised, so the Premium partition is never covered. Three test cases are the minimum.',
    D: '❌ Incorrect: All three amounts are $150 or above, so the below-$100 partition is never exercised.',
  },
  optionExplanations: {
    A: 'Three test cases cover all three customer-type partitions and both amount partitions without needing every combination.',
    B: 'Testing all six combinations is exhaustive combination coverage. Each Choice coverage does not require combinations of partitions.',
    C: 'Only two customer types are exercised, so the Premium partition is never covered. Three test cases are the minimum.',
    D: 'All three amounts are $150 or above, so the below-$100 partition is never exercised.',
  },
  learningObjective: 'FL-4.2.1',
  kLevel: 'K3',
  difficulty: 'Hard',
  keywords: ['equivalence partitioning', 'EP', 'Each Choice coverage', 'multiple sets of partitions'],
  examTip: 'Multiple input parameters produce multiple sets of partitions. Each Choice coverage needs each partition from each set once — not the full Cartesian product.',
  memoryAid: 'Each Choice = every partition of every input, at least once. Combinations are a different technique.',
});

/* ------------------------------------------------------------------ *
 * 7. Q099 — EP parcels. Option C covered the same four partitions
 *    as the key. Redesigned so only A covers all four.
 * ------------------------------------------------------------------ */
apply('Q099', {
  statement:
    'A courier categorises parcels by weight: Light (0 to 500g), Medium (501g to 2000g), Heavy (2001g to 5000g), and Oversized (over 5000g). Using equivalence partitioning, which set of weight values covers all four valid partitions?',
  options: {
    A: '250g, 1250g, 3500g, 6000g',
    B: '500g, 2000g, 5000g',
    C: '100g, 1000g, 3000g, 5000g',
    D: '250g, 1000g, 1500g, 6000g',
  },
  correctAnswer: 'A',
  explanation:
    'The four valid partitions are Light (0-500g), Medium (501-2000g), Heavy (2001-5000g) and Oversized (over 5000g), and one representative from each is sufficient. Option A provides 250g (Light), 1250g (Medium), 3500g (Heavy) and 6000g (Oversized), so every partition is exercised. Option B supplies only three values and never reaches the Oversized partition. Option C ends at 5000g, which is still the maximum of the Heavy partition, so Oversized is untested. Option D uses both 1000g and 1500g from the Medium partition, leaving the Heavy partition untested.',
  correctFeedback:
    '✅ Correct: 250g, 1250g, 3500g and 6000g come from the Light, Medium, Heavy and Oversized partitions respectively.',
  incorrectFeedback: {
    B: '❌ Incorrect: Only three values are supplied, so no value comes from the Oversized partition (over 5000g).',
    C: '❌ Incorrect: 5000g is still the maximum of the Heavy partition (2001g-5000g), so the Oversized partition is never exercised.',
    D: '❌ Incorrect: 1000g and 1500g are both from the Medium partition, so the Heavy partition (2001g-5000g) is never exercised.',
  },
  optionExplanations: {
    A: '250g, 1250g, 3500g and 6000g come from the Light, Medium, Heavy and Oversized partitions respectively.',
    B: 'Only three values are supplied, so no value comes from the Oversized partition (over 5000g).',
    C: '5000g is still the maximum of the Heavy partition (2001g-5000g), so the Oversized partition is never exercised.',
    D: '1000g and 1500g are both from the Medium partition, so the Heavy partition (2001g-5000g) is never exercised.',
  },
  learningObjective: 'FL-4.2.1',
  kLevel: 'K3',
  difficulty: 'Hard',
  keywords: ['equivalence partitioning', 'EP', 'valid partitions', 'representative value'],
  examTip: 'Check the exact partition limits. 5000g belongs to Heavy, not Oversized — the partition is "over 5000g".',
  memoryAid: 'One value per partition, and read the range boundaries literally.',
});

/* ------------------------------------------------------------------ *
 * 8. Q328 — statement vs branch coverage (FL-4.3.2).
 *    x = 5 exercises 2 of 3 statements (66.7%), NOT 100%, and BOTH
 *    x = -1 and x = 0 satisfied the answer. Rewritten so only one
 *    option reaches 100% branch coverage.
 * ------------------------------------------------------------------ */
apply('Q328', {
  statement:
    'Consider the code: if (x > 0) { print("Positive"); } else { print("Non-positive"); } print("Done"); A test case with x = 5 executes 2 of the 3 executable statements, giving 66.7% statement coverage and 50% branch coverage. Which additional test case is required to reach 100% branch coverage?',
  options: {
    A: 'x = -1',
    B: 'x = 10',
    C: 'x = 5',
    D: 'No additional test case is needed',
  },
  correctAnswer: 'A',
  explanation:
    'The code contains three executable statements: print("Positive"), print("Non-positive") and print("Done"). With x = 5 the true outcome of the condition is taken, so print("Positive") and print("Done") execute while print("Non-positive") does not. That is 2 of 3 statements, or 66.7% statement coverage, and only the true outcome of the single decision is exercised, giving 50% branch coverage. Reaching 100% branch coverage requires taking the false outcome as well, which means a value where x > 0 is false. x = -1 satisfies that condition and executes the else branch. Note that x = 10 also fails the condition x > 0, but 10 is a positive value so it takes the true branch and adds nothing, and re-running x = 5 adds nothing either.',
  correctFeedback:
    '✅ Correct: x = -1 makes the condition x > 0 false, so the else branch executes and both branch outcomes are covered.',
  incorrectFeedback: {
    B: '❌ Incorrect: x = 10 satisfies x > 0, so it takes the same true branch as x = 5 and adds no new branch outcome.',
    C: '❌ Incorrect: x = 5 is the test case already executed, and it only covers the true outcome.',
    D: '❌ Incorrect: Only the true outcome of the decision has been exercised, so branch coverage is at 50% and one more test case is needed.',
  },
  optionExplanations: {
    A: 'x = -1 makes the condition x > 0 false, so the else branch executes and both branch outcomes are covered.',
    B: 'x = 10 satisfies x > 0, so it takes the same true branch as x = 5 and adds no new branch outcome.',
    C: 'x = 5 is the test case already executed, and it only covers the true outcome.',
    D: 'Only the true outcome of the decision has been exercised, so branch coverage is at 50% and one more test case is needed.',
  },
  learningObjective: 'FL-4.3.2',
  kLevel: 'K2',
  difficulty: 'Medium',
  keywords: ['branch coverage', 'statement coverage', 'conditional logic', 'branch testing'],
  examTip: 'Branch coverage counts decision outcomes, not lines. Reading x > 0 literally matters: any positive value takes the same branch.',
  memoryAid: 'Statement coverage = lines reached. Branch coverage = every if-taken / if-not-taken outcome.',
});

/* ------------------------------------------------------------------ *
 * 9. Q330 — "highest level of structural coverage" was misleading:
 *    syllabus 4.3 states more rigorous white-box techniques exist in
 *    safety-critical environments but are out of syllabus scope.
 * ------------------------------------------------------------------ */
apply('Q330', {
  statement:
    'Among the white-box test techniques covered by the CTFL syllabus, a safety-critical system requires the strongest structural coverage available. Which coverage metric should the test manager prioritise?',
  options: {
    A: 'Branch coverage, because every branch must be exercised and branch coverage subsumes statement coverage',
    B: 'Statement coverage, because it is the easiest structural criterion to achieve and measure',
    C: 'Requirements coverage, because it is what stakeholders ask about during acceptance',
    D: 'Equivalence partition coverage, because it exercises every partition of the input space',
  },
  correctAnswer: 'A',
  explanation:
    'The syllabus covers two code-related white-box techniques: statement testing and branch testing. Branch coverage is the stronger of the two because its coverage items are all branches, including both outcomes of each decision, and it subsumes statement coverage — any set of test cases achieving 100% branch coverage also achieves 100% statement coverage. Statement coverage is weaker because 100% statement coverage does not ensure that all decision logic has been tested. Note that more rigorous white-box techniques exist and are used in some safety-critical, mission-critical or high-integrity environments, but those techniques are outside the scope of this syllabus.',
  correctFeedback:
    '✅ Correct: Of the techniques covered by the syllabus, branch coverage is the strongest, since it subsumes statement coverage.',
  incorrectFeedback: {
    B: '❌ Incorrect: Statement coverage is the weaker criterion. It only requires every executable statement to run at least once and does not ensure all decision logic is tested.',
    C: '❌ Incorrect: Requirements coverage is a black-box criterion, not structural coverage of the code.',
    D: '❌ Incorrect: Equivalence partitioning is a black-box technique derived from the specification; it provides no structural coverage of the code.',
  },
  optionExplanations: {
    A: 'Of the techniques covered by the syllabus, branch coverage is the strongest, since it subsumes statement coverage.',
    B: 'Statement coverage is the weaker criterion. It only requires every executable statement to run at least once and does not ensure all decision logic is tested.',
    C: 'Requirements coverage is a black-box criterion, not structural coverage of the code.',
    D: 'Equivalence partitioning is a black-box technique derived from the specification; it provides no structural coverage of the code.',
  },
  learningObjective: 'FL-4.3.3',
  kLevel: 'K2',
  difficulty: 'Medium',
  keywords: ['white-box testing', 'branch coverage', 'statement coverage', 'structural coverage'],
  examTip: 'Within this syllabus branch coverage is the strongest structural technique, but more rigorous techniques (e.g. MC/DC) exist outside its scope — never call branch coverage the highest possible.',
  memoryAid: 'Branch coverage subsumes statement coverage. More rigorous criteria exist but are out of syllabus scope.',
});

/* ------------------------------------------------------------------ *
 * 10. Q088 — independence of testing (FL-1.5.3, not FL-1.5.2).
 *     Syllabus claims different KINDS of failures, not more defects.
 * ------------------------------------------------------------------ */
apply('Q088', {
  statement: 'Which statement about independence of testing is correct?',
  options: {
    A: 'Independent testing should always be performed by an external organization',
    B: 'A certain degree of independence makes the tester more effective at recognising different kinds of failures and defects, but excessive independence can introduce drawbacks such as communication problems',
    C: 'Independence removes the need for collaboration between testers and developers',
    D: 'Testing by the original developer provides the highest level of independence',
  },
  correctAnswer: 'B',
  explanation:
    'The syllabus states that a certain degree of independence makes the tester more effective at finding defects, because the author and the tester have different cognitive biases. The main benefit is that independent testers are likely to recognise different kinds of failures and defects, and an independent tester can verify, challenge or disprove assumptions made by stakeholders. Independence also has drawbacks: testers may become isolated from the development team, leading to communication problems or an adversarial relationship, and developers may lose a sense of responsibility for quality. For most projects it is best to carry out testing with multiple levels of independence rather than only the highest one.',
  correctFeedback:
    '✅ Correct: Independence brings different perspectives and recognises different kinds of failures, but too much independence introduces drawbacks such as communication problems.',
  incorrectFeedback: {
    A: '❌ Incorrect: Independence is a spectrum from no independence to very high independence. For most projects, testing with multiple levels of independence is best, not only external testing.',
    C: '❌ Incorrect: One of the documented drawbacks of independence is precisely a lack of collaboration and communication problems.',
    D: '❌ Incorrect: Testing by the author provides no independence at all — it is the lowest level on the spectrum.',
  },
  optionExplanations: {
    A: 'Independence is a spectrum from no independence to very high independence. For most projects, testing with multiple levels of independence is best, not only external testing.',
    B: 'Independence brings different perspectives and recognises different kinds of failures, but too much independence introduces drawbacks such as communication problems.',
    C: 'One of the documented drawbacks of independence is precisely a lack of collaboration and communication problems.',
    D: 'Testing by the author provides no independence at all — it is the lowest level on the spectrum.',
  },
  learningObjective: 'FL-1.5.3',
  subsection: '1.5.3',
  section: '1.5',
  chapter: 1,
  kLevel: 'K2',
  difficulty: 'Medium',
  keywords: ['independence of testing', 'benefits and drawbacks', 'test levels of independence', 'whole team approach'],
  examTip: 'Independence is about different KINDS of findings, not a higher defect count. Always weigh it against the collaboration drawbacks.',
  memoryAid: 'Independence = different perspective finds different kinds of problems, but distance costs collaboration.',
});

/* ------------------------------------------------------------------ *
 * 11. Q242 — error vs defect. The scenario pointed at the assumption
 *     inside a document (a defect), while the key said "Error".
 *     Rewritten so the referent is unambiguous.
 * ------------------------------------------------------------------ */
apply('Q242', {
  statement:
    'A designer forms a mistaken assumption about how a component should behave and writes that incorrect assumption into the design document. The flawed statement now sitting in the design document is best described as:',
  options: {
    A: 'An error, because an error is a human action that produces an incorrect result',
    B: 'A defect, because it is an imperfection in a work product',
    C: 'A failure, because it is incorrect behaviour observed during execution',
    D: 'A root cause, because it is the fundamental reason the problem occurred',
  },
  correctAnswer: 'B',
  explanation:
    'The syllabus separates four concepts: humans make errors, errors produce defects, and defects may result in failures. An error is the human action or mistake — here, the designer forming the mistaken assumption. A defect is an imperfection in a work product — here, the incorrect assumption as written into the design document, which the syllabus explicitly lists as a place where defects can be found. A failure would only appear when the defective code is executed and the system does not do what it should. A root cause is the fundamental reason a problem occurred, which is a deeper question identified through root cause analysis, not the flaw itself.',
  correctFeedback:
    '✅ Correct: the flaw recorded in the design document is a defect. The designer forming the mistaken assumption is the error that produced it.',
  incorrectFeedback: {
    A: '❌ Incorrect: The error is the designer\'s human action of forming the mistaken assumption, not the flawed content sitting in the design document.',
    C: '❌ Incorrect: A failure is the externally observable incorrect behaviour when a defect is executed. No execution is described here.',
    D: '❌ Incorrect: A root cause is the fundamental reason a problem occurred, identified through root cause analysis — it is not the flaw itself.',
  },
  optionExplanations: {
    A: 'The error is the designer\'s human action of forming the mistaken assumption, not the flawed content sitting in the design document.',
    B: 'The flaw recorded in the design document is a defect. The designer forming the mistaken assumption is the error that produced it.',
    C: 'A failure is the externally observable incorrect behaviour when a defect is executed. No execution is described here.',
    D: 'A root cause is the fundamental reason a problem occurred, identified through root cause analysis — it is not the flaw itself.',
  },
  learningObjective: 'FL-1.2.3',
  subsection: '1.2.3',
  section: '1.2',
  chapter: 1,
  kLevel: 'K2',
  difficulty: 'Medium',
  keywords: ['error', 'defect', 'failure', 'root cause', 'work product'],
  examTip: 'Error = the human action. Defect = the flaw in the work product. Failure = what you observe when the defect runs. Ask which one the scenario names.',
  memoryAid: 'Error lives in a person, defect lives in a document, failure lives in the running system.',
});

/* ------------------------------------------------------------------ *
 * 12. Q327 — decision vs branch terminology. v4.0.1 replaced decision
 *     testing/coverage with branch testing/coverage.
 * ------------------------------------------------------------------ */
apply('Q327', {
  statement:
    'Which of the following best describes the difference between statement coverage and branch coverage?',
  options: {
    A: 'Statement coverage measures the percentage of branches tested; branch coverage measures the percentage of statements executed',
    B: 'Statement coverage is stronger than branch coverage',
    C: 'Branch coverage requires every branch to be exercised at least once, including both outcomes of each conditional decision, while statement coverage only requires every executable statement to be executed at least once',
    D: 'Statement coverage and branch coverage are two names for the same metric',
  },
  correctAnswer: 'C',
  explanation:
    'In statement testing the coverage items are the executable statements, and coverage is the number of statements exercised divided by the total number of executable statements. In branch testing a branch is a transfer of control between two nodes, and conditional branches typically correspond to the true or false outcome of an if-then decision, a switch/case outcome, or a decision to exit or continue in a loop. Branch coverage therefore requires each such outcome to be exercised. Branch coverage subsumes statement coverage: any set of test cases achieving 100% branch coverage also achieves 100% statement coverage, but not the other way round. Older syllabi used the term decision coverage for what v4.0.1 calls branch coverage.',
  correctFeedback:
    '✅ Correct: branch coverage requires every branch, including both outcomes of each decision, whereas statement coverage requires only that every executable statement runs.',
  incorrectFeedback: {
    A: '❌ Incorrect: This reverses both definitions — statement coverage counts statements, branch coverage counts branches.',
    B: '❌ Incorrect: Branch coverage is the stronger criterion because it subsumes statement coverage.',
    D: '❌ Incorrect: They are distinct metrics with different coverage items and different strengths.',
  },
  optionExplanations: {
    A: 'This reverses both definitions — statement coverage counts statements, branch coverage counts branches.',
    B: 'Branch coverage is the stronger criterion because it subsumes statement coverage.',
    C: 'Branch coverage requires every branch, including both outcomes of each decision, whereas statement coverage requires only that every executable statement runs.',
    D: 'They are distinct metrics with different coverage items and different strengths.',
  },
  learningObjective: 'FL-4.3.2',
  kLevel: 'K2',
  difficulty: 'Medium',
  keywords: ['branch coverage', 'statement coverage', 'branch testing', 'coverage items'],
  examTip: 'CTFL v4.0 uses "branch testing" and "branch coverage". Older materials say "decision testing" and "decision coverage" for the same idea.',
  memoryAid: 'Branches > statements. Branch coverage subsumes statement coverage.',
});

/* ------------------------------------------------------------------ *
 * 13. Q052 — "100% transition coverage" is not a syllabus criterion.
 *     Rewritten to the valid transitions vs all transitions contrast.
 * ------------------------------------------------------------------ */
apply('Q052', {
  statement:
    'A ticket vending machine is modelled with the states Idle, SelectingTicket, ProcessingPayment, DispensingTicket and OutOfService. The model defines valid transitions including ProcessingPayment to DispensingTicket when payment succeeds, and ProcessingPayment back to SelectingTicket when payment fails. What is required to achieve 100% valid transitions coverage?',
  options: {
    A: 'Test cases must collectively exercise every valid transition in the model at least once; a single test case may cover several transitions',
    B: 'Each state must be visited by its own dedicated test case',
    C: 'The number of test cases must be exactly equal to the number of transitions in the model',
    D: 'All invalid transitions shown in the state table must also be executed',
  },
  correctAnswer: 'A',
  explanation:
    'In valid transitions coverage (also called 0-switch coverage) the coverage items are the individual valid transitions, and 100% coverage means test cases exercise all of them. A test case is a sequence of events that produces a sequence of state changes, so one test case usually covers several transitions; it is the set of test cases that must cover every valid transition. Visiting every state is all states coverage, which is weaker. Attempting invalid transitions is required for all transitions coverage, not for valid transitions coverage. The number of test cases is not fixed by the number of transitions, because transitions can be combined into longer paths.',
  correctFeedback:
    '✅ Correct: 100% valid transitions coverage means every valid transition is exercised at least once across the test cases.',
  incorrectFeedback: {
    B: '❌ Incorrect: Visiting every state is all states coverage, which is a weaker criterion than valid transitions coverage.',
    C: '❌ Incorrect: The number of test cases is not fixed by the number of transitions, since a single test case can traverse several transitions.',
    D: '❌ Incorrect: Attempting invalid transitions is required for all transitions coverage, not for valid transitions coverage.',
  },
  optionExplanations: {
    A: '100% valid transitions coverage means every valid transition is exercised at least once across the test cases.',
    B: 'Visiting every state is all states coverage, which is a weaker criterion than valid transitions coverage.',
    C: 'The number of test cases is not fixed by the number of transitions, since a single test case can traverse several transitions.',
    D: 'Attempting invalid transitions is required for all transitions coverage, not for valid transitions coverage.',
  },
  learningObjective: 'FL-4.2.4',
  kLevel: 'K2',
  difficulty: 'Hard',
  keywords: ['state transition testing', 'valid transitions coverage', 'coverage items', 'state table'],
  examTip: 'Three criteria: all states, valid transitions, all transitions. Only "all transitions" requires attempting invalid transitions.',
  memoryAid: 'Valid transitions = walk every valid arrow. All transitions = walk the invalid arrows too.',
});

/* ------------------------------------------------------------------ *
 * 14. Q004 / Q003 / Q204 / Q295 — "pesticide paradox" is not the
 *     CTFL v4.0.1 name for principle 5, which is "Tests wear out".
 * ------------------------------------------------------------------ */
apply('Q004', {
  statement:
    'A test team has been testing the same module for several releases using the same set of test cases. They notice that no new defects are being found. Which testing principle does this scenario illustrate?',
  options: {
    A: 'Absence-of-defects fallacy',
    B: 'Tests wear out',
    C: 'Defects cluster together',
    D: 'Testing is context dependent',
  },
  correctAnswer: 'B',
  explanation:
    'The fifth CTFL v4.0.1 testing principle is "Tests wear out": if the same tests are repeated many times, they become increasingly ineffective in detecting new defects. To overcome this effect, existing tests and test data may need to be modified and new tests may need to be written, although in some cases repeating the same tests has a beneficial outcome, for example in automated regression testing. This principle was called the "pesticide paradox" in older CTFL material, but that wording is not used in v4.0.1.',
  correctFeedback:
    '✅ Correct: Tests wear out — repeated unchanged tests become increasingly ineffective at finding new defects.',
  incorrectFeedback: {
    A: '❌ Incorrect: The absence-of-defects fallacy is the misconception that thorough verification of all requirements guarantees the software will succeed.',
    C: '❌ Incorrect: Defects cluster together means a small number of components contain most of the defects discovered.',
    D: '❌ Incorrect: Testing is context dependent means there is no single universally applicable approach to testing.',
  },
  optionExplanations: {
    A: 'The absence-of-defects fallacy is the misconception that thorough verification of all requirements guarantees the software will succeed.',
    B: 'Tests wear out — repeated unchanged tests become increasingly ineffective at finding new defects.',
    C: 'Defects cluster together means a small number of components contain most of the defects discovered.',
    D: 'Testing is context dependent means there is no single universally applicable approach to testing.',
  },
  learningObjective: 'FL-1.3.1',
  kLevel: 'K2',
  difficulty: 'Easy',
  keywords: ['tests wear out', 'testing principles', 'test maintenance'],
  examTip: 'In CTFL v4.0.1 principle 5 is called "Tests wear out". "Pesticide paradox" is the older name for the same idea.',
  memoryAid: 'Same tests, no new defects = tests wear out.',
});

apply('Q003', {
  memoryAid:
    '7 principles: shows presence of defects; exhaustive testing impossible; early testing; defects cluster together; tests wear out; context dependent; absence-of-defects fallacy.',
  examTip: 'Memorise all seven testing principles for the exam. Note that principle 5 is "Tests wear out" in CTFL v4.0.1.',
});

apply('Q204', {
  statement:
    'A team repeatedly executes a regression pack for unchanged features but periodically adds tests for new workflows and recent defect patterns. Which testing principle is mainly being addressed?',
  correctFeedback:
    '✅ Correct: Tests wear out — repeated unchanged tests become less effective, so regression suites must be reviewed and refreshed.',
  incorrectFeedback: {
    B: '❌ Incorrect: Testing cannot prove the absence of defects. It can show that defects are present, not that none remain.',
    C: '❌ Incorrect: Defects are not evenly distributed; a small number of components usually contain most of them.',
    D: '❌ Incorrect: Testing is context dependent — the approach differs with the application type, so quality is never independent of context.',
  },
  optionExplanations: {
    A: 'Tests wear out — repeated unchanged tests become less effective, so regression suites must be reviewed and refreshed.',
    B: 'Testing cannot prove the absence of defects. It can show that defects are present, not that none remain.',
    C: 'Defects are not evenly distributed; a small number of components usually contain most of them.',
    D: 'Testing is context dependent — the approach differs with the application type, so quality is never independent of context.',
  },
  explanation:
    'The fifth CTFL v4.0.1 testing principle is "Tests wear out": repeated unchanged tests become increasingly ineffective in detecting new defects. The team counters this by adding tests for new workflows and recent defect patterns, and by modifying existing tests and test data where needed. This principle was called the "pesticide paradox" in older CTFL material, but v4.0.1 uses the "Tests wear out" wording.',
  keywords: ['tests wear out', 'regression testing', 'testing principles'],
  examTip: 'Adding fresh tests to counter declining effectiveness is the "Tests wear out" principle in action.',
  memoryAid: 'Refresh stale tests.',
});

apply('Q295', {
  options: {
    A: 'The importance of independent testing at all levels',
    B: 'The principle that tests wear out over time',
    C: 'The difference between the development mindset and the testing mindset',
    D: 'The need for exhaustive testing',
  },
  incorrectFeedback: {
    A: '❌ Incorrect: Independent testing is a practice, not the mindset difference itself.',
    B: '❌ Incorrect: Tests wear out concerns how effective tests remain over repeated runs, not how a developer approaches testing.',
    D: '❌ Incorrect: Exhaustive testing is impossible and is unrelated to mindset.',
  },
  optionExplanations: {
    A: 'Independent testing is a practice, not the mindset difference itself.',
    B: 'Tests wear out concerns how effective tests remain over repeated runs, not how a developer approaches testing.',
    C: 'Developers naturally have a confirmation mindset focused on building solutions. Testing requires a critical, analytical mindset focused on finding problems.',
    D: 'Exhaustive testing is impossible and is unrelated to mindset.',
  },
  explanation:
    'Developers naturally have a confirmation or constructive mindset focused on building solutions, and confirmation bias can make it difficult to accept information that contradicts existing beliefs. Testing requires an analytical and critical mindset focused on finding problems and challenging assumptions. This difference in mindset is why independent testing and clearly separated test roles add value.',
  learningObjective: 'FL-1.5.1',
  subsection: '1.5.1',
  section: '1.5',
  chapter: 1,
  kLevel: 'K2',
  difficulty: 'Medium',
  keywords: ['test mindset', 'development mindset', 'confirmation bias', 'critical thinking'],
  examTip: 'Confirmation bias is a generic testing obstacle: it is hard to accept information that contradicts what you already believe.',
  memoryAid: 'Builder vs. inspector — testing needs the inspector mindset.',
});

/* ------------------------------------------------------------------ *
 * 15. Broken auto-generated incorrectFeedback (Q224, Q261, Q377)
 *     repeated the explanation and mentioned use case testing.
 * ------------------------------------------------------------------ */
apply('Q224', {
  incorrectFeedback: {
    B: '❌ Incorrect: 25% is 5/20, which would mean only 5 of the 20 executable statements were exercised.',
    C: '❌ Incorrect: 80% would mean 16 of 20 statements were exercised, but 15 statements give exactly 75%.',
    D: '❌ Incorrect: Coverage cannot exceed 100%, since coverage is a ratio of exercised statements to total executable statements.',
  },
  optionExplanations: {
    A: '15 divided by 20 executable statements is exactly 75%.',
    B: '25% would mean only 5 of the 20 executable statements were exercised.',
    C: '80% would mean 16 of 20 statements were exercised, but 15 statements give exactly 75%.',
    D: 'Coverage cannot exceed 100%, since coverage is a ratio of exercised statements to total executable statements.',
  },
});

apply('Q261', {
  incorrectFeedback: {
    A: '❌ Incorrect: There is no such limit. Executing every executable statement gives exactly 100%.',
    C: '❌ Incorrect: 12% would mean only about 1.4 of the 12 statements were exercised, which is not what happened.',
    D: '❌ Incorrect: 50% would mean only 6 of the 12 statements were exercised, but all 12 were executed.',
  },
  optionExplanations: {
    A: 'There is no such limit. Executing every executable statement gives exactly 100%.',
    B: 'Executing all executable statements at least once gives 100% statement coverage.',
    C: '12% would mean only about 1.4 of the 12 statements were exercised, which is not what happened.',
    D: '50% would mean only 6 of the 12 statements were exercised, but all 12 were executed.',
  },
});

apply('Q377', {
  incorrectFeedback: {
    B: '❌ Incorrect: Static analysis tools examine code without executing it, so they cannot report the percentage of statements exercised during a test run.',
    C: '❌ Incorrect: Test management tools track planned versus executed tests, schedules and defect status. They do not measure code coverage.',
    D: '❌ Incorrect: Performance testing tools measure response times, throughput and resource usage under load, not code coverage.',
  },
  optionExplanations: {
    A: 'Coverage measurement tools monitor code execution during testing and report metrics such as statement, branch or condition coverage.',
    B: 'Static analysis tools examine code without executing it, so they cannot report the percentage of statements exercised during a test run.',
    C: 'Test management tools track planned versus executed tests, schedules and defect status. They do not measure code coverage.',
    D: 'Performance testing tools measure response times, throughput and resource usage under load, not code coverage.',
  },
});

/* ------------------------------------------------------------------ *
 * 16. Feedback that contradicted its own key.
 *     Q105 explanation argued for 3 tests while the key was 2.
 *     Q133/Q184 correctFeedback described a different option.
 * ------------------------------------------------------------------ */
apply('Q105', {
  explanation:
    'The code contains two decisions, each with a true and a false outcome, so 100% branch coverage requires all four outcomes to be exercised. Two test cases are enough because a single test case can combine outcomes from both decisions. Test 1 with a = 20, b = 0, c = 0 makes the first condition (a > 10 OR b < 5) true and the second condition (c == 0) true. Test 2 with a = 5, b = 10, c = 1 makes the first condition false, since neither a > 10 nor b < 5 holds, and the second condition false as well. Between them the two test cases exercise all four branch outcomes.',
  correctFeedback:
    '✅ Correct: 2 test cases — Test 1 (a = 20, b = 0, c = 0) covers true/true and Test 2 (a = 5, b = 10, c = 1) covers false/false, so all four branch outcomes are exercised.',
  incorrectFeedback: {
    A: '❌ Incorrect: One test case can exercise at most one outcome per decision, so it covers only 2 of the 4 branch outcomes.',
    B: '❌ Incorrect: Three test cases would also achieve full branch coverage, but two already cover all four outcomes, so three is not the minimum.',
    C: '❌ Incorrect: Four test cases would cover every branch but is more than the minimum of two.',
  },
  optionExplanations: {
    A: 'One test case can exercise at most one outcome per decision, so it covers only 2 of the 4 branch outcomes.',
    B: 'Three test cases would also achieve full branch coverage, but two already cover all four outcomes, so three is not the minimum.',
    C: 'Four test cases would cover every branch but is more than the minimum of two.',
    D: 'Two test cases can cover all four branch outcomes because each test case exercises one outcome of each decision.',
  },
});

apply('Q133', {
  correctFeedback:
    '✅ Correct: 2 test cases — one with score = 85 executes grade = \'Pass\' and print(grade), the other with score = 50 executes grade = \'Fail\' and print(grade), so all three statements run.',
  incorrectFeedback: {
    A: '❌ Incorrect: Four test cases is more than the minimum needed for 100% statement coverage.',
    C: '❌ Incorrect: One test case executes only one of the two assignments, leaving the other statement unexecuted.',
    D: '❌ Incorrect: Three test cases is more than the minimum. Two test cases already execute all three statements.',
  },
  optionExplanations: {
    A: 'Four test cases is more than the minimum needed for 100% statement coverage.',
    B: 'Two test cases — one with score = 85 and one with score = 50 — execute all three statements.',
    C: 'One test case executes only one of the two assignments, leaving the other statement unexecuted.',
    D: 'Three test cases is more than the minimum. Two test cases already execute all three statements.',
  },
});

apply('Q184', {
  correctFeedback:
    '✅ Correct: 3 test cases — one each for temperature > 100, 80 < temperature <= 100, and temperature <= 80. The three assignments are mutually exclusive, so three tests are needed to execute all of them plus print(\'Done\').',
  incorrectFeedback: {
    A: '❌ Incorrect: One test case executes only one of the three mutually exclusive assignments, so two statements remain unexecuted.',
    C: '❌ Incorrect: Four test cases is more than the minimum; the three mutually exclusive branches already cover all four statements.',
    D: '❌ Incorrect: Two test cases execute only two of the three mutually exclusive assignments, leaving one statement unexecuted.',
  },
  optionExplanations: {
    A: 'One test case executes only one of the three mutually exclusive assignments, so two statements remain unexecuted.',
    B: 'Three test cases — one for each mutually exclusive branch — execute alarm = 1, warning = 1, normal = 1 and print(\'Done\').',
    C: 'Four test cases is more than the minimum; the three mutually exclusive branches already cover all four statements.',
    D: 'Two test cases execute only two of the three mutually exclusive assignments, leaving one statement unexecuted.',
  },
});

/* ------------------------------------------------------------------ *
 * 17. Q179 — EP late fees. Option A (0, 1, 8, 15) also covered all
 *     four partitions, and the explanation credited "Option A" with
 *     option C's values.
 * ------------------------------------------------------------------ */
apply('Q179', {
  statement:
    'A library charges late fees for books returned after the due date: $0 for 0 days late, $1 per day for 1-7 days late, $2 per day for 8-14 days late, and $5 per day for 15 or more days late. Using equivalence partitioning, which set of values covers all four valid partitions?',
  options: {
    A: '0, 4, 10',
    B: '5, 12, 18, 25',
    C: '0, 4, 10, 20',
    D: '0, 2, 5, 9, 14',
  },
  correctAnswer: 'C',
  explanation:
    'The four valid partitions are 0 days (no fee), 1-7 days, 8-14 days and 15 or more days, and one representative from each is sufficient. Option C provides 0 (the no-fee partition), 4 (1-7 days), 10 (8-14 days) and 20 (15 or more days), so every partition is exercised. Option A supplies only three values and leaves the 15-or-more partition untested. Option B starts at 5 days, so the no-fee partition is never exercised. Option D places 0, 2 and 5 all in the first two partitions and 9 and 14 in the 8-14 partition, so the 15-or-more partition is never exercised.',
  correctFeedback:
    '✅ Correct: 0, 4, 10 and 20 come from the no-fee, 1-7 days, 8-14 days and 15-or-more partitions respectively.',
  incorrectFeedback: {
    A: '❌ Incorrect: Only three values are supplied, so the 15-or-more days partition is never exercised.',
    B: '❌ Incorrect: All values fall between 1 and 7 or above, so the 0-days (no fee) partition is never exercised.',
    D: '❌ Incorrect: No value reaches 15 or more days, so the $5-per-day partition is never exercised.',
  },
  optionExplanations: {
    A: 'Only three values are supplied, so the 15-or-more days partition is never exercised.',
    B: 'All values fall between 1 and 7 or above, so the 0-days (no fee) partition is never exercised.',
    C: '0, 4, 10 and 20 come from the no-fee, 1-7 days, 8-14 days and 15-or-more partitions respectively.',
    D: 'No value reaches 15 or more days, so the $5-per-day partition is never exercised.',
  },
  learningObjective: 'FL-4.2.1',
  kLevel: 'K3',
  difficulty: 'Hard',
  keywords: ['equivalence partitioning', 'EP', 'valid partitions', 'representative value'],
  examTip: 'Count distinct partitions covered, not the number of values supplied. Boundary values such as 1, 7, 8 and 15 are still valid representatives.',
  memoryAid: 'One value per partition; count the partitions you actually touch.',
});

/* ------------------------------------------------------------------ *
 * 18. Q300 — LO mismatch: FL-2.3.1 is maintenance testing, but the
 *     question is about applying white-box testing across test levels.
 * ------------------------------------------------------------------ */
apply('Q300', {
  learningObjective: 'FL-2.2.1',
  subsection: '2.2.1',
  section: '2.2',
  chapter: 2,
  kLevel: 'K2',
  difficulty: 'Medium',
  keywords: ['white-box testing', 'test levels', 'component testing', 'integration testing'],
  examTip: 'White-box techniques are not restricted to component testing; they can be applied at any test level as appropriate.',
  memoryAid: 'White-box = technique, not a test level. It applies wherever code structure is available.',
});

/* ------------------------------------------------------------------ *
 * 19. Q262 — "Use case coverage" is not a CTFL v4.0.1 technique.
 * ------------------------------------------------------------------ */
apply('Q262', {
  options: {
    A: 'Requirement coverage',
    B: 'Review coverage',
    C: 'Branch coverage',
    D: 'Statement coverage',
  },
  incorrectFeedback: {
    A: '❌ Incorrect: Requirement coverage tracks whether specified requirements are exercised. It says nothing about whether each decision outcome is exercised.',
    B: '❌ Incorrect: Review coverage relates to static testing activities such as reviews, not to measuring decision outcomes during execution.',
    D: '❌ Incorrect: Statement coverage ensures every executable statement runs, but it does not require each decision outcome to be exercised.',
  },
  optionExplanations: {
    A: 'Requirement coverage tracks whether specified requirements are exercised. It says nothing about whether each decision outcome is exercised.',
    B: 'Review coverage relates to static testing activities such as reviews, not to measuring decision outcomes during execution.',
    C: 'Branch coverage requires every branch, including both outcomes of each decision, to be exercised.',
    D: 'Statement coverage ensures every executable statement runs, but it does not require each decision outcome to be exercised.',
  },
  explanation:
    'Statement coverage requires only that each executable statement is executed at least once, so it can reach 100% while a decision outcome is never taken. Branch coverage requires every branch to be exercised, including both the true and the false outcome of each conditional decision, so a suite that never takes a false outcome has incomplete branch coverage even with full statement coverage. Branch coverage subsumes statement coverage, but statement coverage does not subsume branch coverage.',
  learningObjective: 'FL-4.3.2',
  kLevel: 'K2',
  difficulty: 'Medium',
  keywords: ['branch coverage', 'statement coverage', 'coverage criteria', 'white-box testing'],
  examTip: 'Full statement coverage with an untaken branch outcome is the classic illustration that the two criteria are not equivalent.',
  memoryAid: 'Statements can all run while a branch outcome is never taken.',
});

/* ------------------------------------------------------------------ *
 * 20. Q183 / Q325 / Q227 / Q267 / Q999 / Q998 — these referenced
 *     use case testing (FL-4.2.5) and pairwise testing (FL-4.2.6/7),
 *     none of which exist in CTFL v4.0.1. Rewritten onto syllabus
 *     topics that currently have no coverage at all.
 * ------------------------------------------------------------------ */
apply('Q183', {
  statement: 'Which three aspects, known as the "3 C\'s", are the critical aspects of a user story?',
  options: {
    A: 'Card, Conversation, Confirmation',
    B: 'Cost, Change, Control',
    C: 'Context, Constraints, Coverage',
    D: 'Card, Code, Checklist',
  },
  correctAnswer: 'A',
  explanation:
    'A user story has three critical aspects, called together the 3 C\'s. The Card is the medium describing the user story, for example an index card or an entry in an electronic board. The Conversation explains how the software will be used, and can be documented or verbal. The Confirmation is the acceptance criteria, which define the conditions the implementation must meet to be accepted. Good user stories should be Independent, Negotiable, Valuable, Estimable, Small and Testable (INVEST).',
  correctFeedback:
    '✅ Correct: Card (the medium), Conversation (how the software is used) and Confirmation (the acceptance criteria).',
  incorrectFeedback: {
    B: '❌ Incorrect: Cost, Change and Control are not the 3 C\'s of a user story.',
    C: '❌ Incorrect: Context, Constraints and Coverage are not the 3 C\'s of a user story.',
    D: '❌ Incorrect: The third C is Confirmation (acceptance criteria), not Code, and the second is Conversation, not Checklist.',
  },
  optionExplanations: {
    A: 'Card (the medium), Conversation (how the software is used) and Confirmation (the acceptance criteria).',
    B: 'Cost, Change and Control are not the 3 C\'s of a user story.',
    C: 'Context, Constraints and Coverage are not the 3 C\'s of a user story.',
    D: 'The third C is Confirmation (acceptance criteria), not Code, and the second is Conversation, not Checklist.',
  },
  chapter: 4,
  section: '4.5',
  subsection: '4.5.1',
  learningObjective: 'FL-4.5.1',
  kLevel: 'K2',
  difficulty: 'Medium',
  keywords: ['user story', '3 Cs', 'collaborative user story writing', 'INVEST', 'acceptance criteria'],
  examTip: 'User stories are written collaboratively. The 3 C\'s are Card, Conversation and Confirmation; INVEST describes what makes a good story.',
  memoryAid: 'Card, Conversation, Confirmation. Good stories follow INVEST.',
});

apply('Q325', {
  statement:
    'A user story for an ATM withdrawal has this acceptance criterion: "When the requested amount exceeds the available balance, the system displays an insufficient funds message and returns the card without dispensing cash." Which set of test cases is derived correctly from this acceptance criterion?',
  options: {
    A: 'One test case that requests $100 from an account with a $500 balance, and one test case that requests $500 from an account with a $200 balance and observes the insufficient funds message',
    B: 'One test case that inserts a card, enters a wrong PIN three times and observes a lockout message',
    C: 'One test case that inserts a card, enters a correct PIN, requests $100 and receives cash',
    D: 'One test case that inserts a card and cancels the transaction immediately',
  },
  correctAnswer: 'A',
  explanation:
    'Acceptance criteria describe both positive and negative scenarios, and the tests derived from them must cover those scenarios. This criterion describes a negative scenario: the requested amount exceeds the available balance, so the system must display the insufficient funds message and return the card without dispensing cash. The matching test therefore needs an amount above the balance and must assert both the message and the absence of cash. Including a positive test in the same set is good practice because acceptance criteria normally describe both positive and negative scenarios. Options B, C and D describe scenarios that are not defined by this acceptance criterion.',
  correctFeedback:
    '✅ Correct: the test that requests more than the available balance directly exercises the negative scenario, and the withdrawal below the balance covers the positive case.',
  incorrectFeedback: {
    B: '❌ Incorrect: A wrong-PIN lockout scenario is not part of this acceptance criterion, so it must not go beyond the story.',
    C: '❌ Incorrect: Withdrawing below the balance does not exercise the behaviour this acceptance criterion describes, so it is not a test derived from it.',
    D: '❌ Incorrect: Cancelling immediately is not covered by this acceptance criterion, so it must not go beyond the story.',
  },
  optionExplanations: {
    A: 'The test that requests more than the available balance directly exercises the negative scenario, and the withdrawal below the balance covers the positive case.',
    B: 'A wrong-PIN lockout scenario is not part of this acceptance criterion, so it must not go beyond the story.',
    C: 'Withdrawing below the balance does not exercise the behaviour this acceptance criterion describes, so it is not a test derived from it.',
    D: 'Cancelling immediately is not covered by this acceptance criterion, so it must not go beyond the story.',
  },
  chapter: 4,
  section: '4.5',
  subsection: '4.5.2',
  learningObjective: 'FL-4.5.2',
  kLevel: 'K2',
  difficulty: 'Hard',
  keywords: ['acceptance criteria', 'positive scenario', 'negative scenario', 'user story'],
  examTip: 'Acceptance criteria are the test conditions for a user story. Tests must cover the described scenarios and must not go beyond the story.',
  memoryAid: 'Acceptance criteria = test conditions. Positive and negative scenarios both count.',
});

apply('Q227', {
  statement:
    'In a specification workshop for an acceptance test-driven development (ATDD) approach, what is the primary purpose of the workshop?',
  options: {
    A: 'To analyse, discuss and write the user story and its acceptance criteria, resolving ambiguities and defects before test cases are created',
    B: 'To execute all automated regression tests before coding begins',
    C: 'To estimate the total test effort for the release',
    D: 'To hand the finished feature over to the maintenance team',
  },
  correctAnswer: 'A',
  explanation:
    'ATDD is a test-first approach in which test cases are created prior to implementing the user story, by team members with different perspectives such as customers, developers and testers. The first step is a specification workshop where the user story and, if not yet defined, its acceptance criteria are analysed, discussed and written by the team members. Incompleteness, ambiguities or defects in the user story are resolved during this process. The next step is to create the test cases, based on the acceptance criteria, which can then serve as examples of how the software works and become executable requirements when captured in a format supported by an automation framework.',
  correctFeedback:
    '✅ Correct: the specification workshop analyses and writes the story and acceptance criteria and resolves ambiguities before the test cases are created.',
  incorrectFeedback: {
    B: '❌ Incorrect: Regression testing happens later, once there is something to regress against. ATDD starts with the specification workshop.',
    C: '❌ Incorrect: Effort estimation is a test management activity, not the purpose of the ATDD specification workshop.',
    D: '❌ Incorrect: Handover to maintenance is part of test completion, not of ATDD.',
  },
  optionExplanations: {
    A: 'The specification workshop analyses and writes the story and acceptance criteria and resolves ambiguities before the test cases are created.',
    B: 'Regression testing happens later, once there is something to regress against. ATDD starts with the specification workshop.',
    C: 'Effort estimation is a test management activity, not the purpose of the ATDD specification workshop.',
    D: 'Handover to maintenance is part of test completion, not of ATDD.',
  },
  chapter: 4,
  section: '4.5',
  subsection: '4.5.3',
  learningObjective: 'FL-4.5.3',
  kLevel: 'K3',
  difficulty: 'Hard',
  keywords: ['ATDD', 'acceptance test-driven development', 'specification workshop', 'acceptance criteria', 'executable requirements'],
  examTip: 'ATDD order: specification workshop, then create test cases from acceptance criteria, usually positive first, then negative, then non-functional.',
  memoryAid: 'Workshop first, tests second, code last. Tests become executable requirements.',
});

apply('Q267', {
  statement:
    'A team wants to apply acceptance test-driven development (ATDD) to a user story that has business rules with several interacting conditions. Which test design approach does the syllabus recommend be applied during test design in ATDD?',
  options: {
    A: 'Only exploratory testing, since the business rules are still unclear',
    B: 'The test techniques described in sections 4.2, 4.3 and 4.4, such as decision table testing, to design the acceptance test cases',
    C: 'Only branch coverage of the production code, because ATDD is a white-box technique',
    D: 'Only exploratory testing, since ATDD does not produce test cases',
  },
  correctAnswer: 'B',
  explanation:
    'During test design in ATDD, the test techniques described in sections 4.2, 4.3 and 4.4 may be applied. For a story whose business rules involve several interacting conditions, decision table testing is the natural fit, because its coverage items are the columns containing feasible combinations of conditions and it provides a systematic way to identify combinations that might otherwise be overlooked. ATDD is not restricted to a single technique, and it is not a white-box technique: its test cases are based on the acceptance criteria and become executable requirements.',
  correctFeedback:
  '✅ Correct: the test techniques from sections 4.2, 4.3 and 4.4 — here decision table testing — may be applied when designing ATDD test cases.',
  incorrectFeedback: {
    A: '❌ Incorrect: ATDD produces test cases before implementation, and exploratory testing alone would not systematically cover the business rules.',
    C: '❌ Incorrect: ATDD is driven by acceptance criteria, not by code structure, so branch coverage of production code is not its basis.',
    D: '❌ Incorrect: ATDD explicitly creates test cases prior to implementing the user story.',
  },
  optionExplanations: {
    A: 'ATDD produces test cases before implementation, and exploratory testing alone would not systematically cover the business rules.',
    B: 'The test techniques from sections 4.2, 4.3 and 4.4 — here decision table testing — may be applied when designing ATDD test cases.',
    C: 'ATDD is driven by acceptance criteria, not by code structure, so branch coverage of production code is not its basis.',
    D: 'ATDD explicitly creates test cases prior to implementing the user story.',
  },
  chapter: 4,
  section: '4.5',
  subsection: '4.5.3',
  learningObjective: 'FL-4.5.3',
  kLevel: 'K3',
  difficulty: 'Hard',
  keywords: ['ATDD', 'decision table testing', 'test design', 'acceptance criteria'],
  examTip: 'ATDD does not replace the standard techniques — during test design you may still apply EP, BVA, decision tables, white-box or experience-based techniques.',
  memoryAid: 'ATDD = when to write tests (before code). Techniques = how to design them.',
});

apply('Q999', {
  statement: 'According to CTFL v4.0.1, which statement about the test pyramid is correct?',
  options: {
    A: 'It is a model that suggests the relative number of tests at each test level, with the majority of automated tests at the lower levels and more manual tests towards acceptance',
    B: 'It requires that every test level has exactly the same number of tests',
    C: 'It describes the order in which test levels must be executed in a sequential lifecycle',
    D: 'It ranks test techniques by defect-detection effectiveness',
  },
  correctAnswer: 'A',
  explanation:
    'The test pyramid is a model suggesting the relative amount of testing at each test level. It shows that the majority of tests should be automated and written at the lower levels, such as component and component integration testing, because these tests are fast to run and failures are easier to diagnose there. Higher levels, in particular acceptance testing, are typically fewer and more often manual because they are harder to automate and depend on business representatives. The pyramid expresses relative proportions, not exact counts, and it does not dictate execution order.',
  correctFeedback:
    '✅ Correct: the pyramid expresses the relative number of tests per level — many fast automated tests low down, fewer and more manual tests towards acceptance.',
  incorrectFeedback: {
    B: '❌ Incorrect: The pyramid expresses relative proportions, not equal numbers of tests at every level.',
    C: '❌ Incorrect: The pyramid does not prescribe an execution order for test levels; test levels are often executed iteratively.',
    D: '❌ Incorrect: The pyramid is about test levels and automation, not a ranking of test techniques.',
  },
  optionExplanations: {
    A: 'The pyramid expresses the relative number of tests per level — many fast automated tests low down, fewer and more manual tests towards acceptance.',
    B: 'The pyramid expresses relative proportions, not equal numbers of tests at every level.',
    C: 'The pyramid does not prescribe an execution order for test levels; test levels are often executed iteratively.',
    D: 'The pyramid is about test levels and automation, not a ranking of test techniques.',
  },
  chapter: 5,
  section: '5.1',
  subsection: '5.1.6',
  learningObjective: 'FL-5.1.6',
  kLevel: 'K1',
  difficulty: 'Easy',
  keywords: ['test pyramid', 'test levels', 'test automation'],
  examTip: 'Pyramid = wide base of fast automated tests at the lower levels, narrow top of mostly manual acceptance tests.',
  memoryAid: 'Wide base, narrow top. Lower levels: many and automated. Upper levels: few and manual.',
});

apply('Q998', {
  statement:
    'A team is deciding how to relate testing quadrants to test levels and test types. Which statement about the testing quadrants is correct?',
  options: {
    A: 'The quadrants characterise tests by the level and type feedback they provide, combining functional and non-functional testing with the business-facing or developer-facing perspective',
    B: 'The quadrants prescribe that all business-facing tests must be executed before any developer-facing tests',
    C: 'The quadrants define which test techniques must be used at each test level',
    D: 'The quadrants require every quadrant to contain the same number of test cases',
  },
  correctAnswer: 'A',
  explanation:
    'The testing quadrants characterise tests along two dimensions: the perspective they support, business-facing or developer-facing, and whether they are used to give feedback on functional or non-functional aspects of the product. Combining these dimensions gives four quadrants, such as the business-facing functional quadrant that supports acceptance-oriented testing and the developer-facing functional quadrant used at the lower test levels. The quadrants help choose an appropriate balance of tests and clarify the purpose of each group of tests; they do not prescribe execution order, do not dictate test techniques, and do not require equal numbers of tests in each quadrant.',
  correctFeedback:
    '✅ Correct: the quadrants combine a business-facing or developer-facing perspective with functional or non-functional testing to characterise the feedback each group provides.',
  incorrectFeedback: {
    B: '❌ Incorrect: The quadrants do not prescribe an execution order between quadrants.',
    C: '❌ Incorrect: The quadrants are about perspectives and feedback, not about which test techniques to apply.',
    D: '❌ Incorrect: Nothing requires the quadrants to contain the same number of test cases.',
  },
  optionExplanations: {
    A: 'The quadrants combine a business-facing or developer-facing perspective with functional or non-functional testing to characterise the feedback each group provides.',
    B: 'The quadrants do not prescribe an execution order between quadrants.',
    C: 'The quadrants are about perspectives and feedback, not about which test techniques to apply.',
    D: 'Nothing requires the quadrants to contain the same number of test cases.',
  },
  chapter: 5,
  section: '5.1',
  subsection: '5.1.7',
  learningObjective: 'FL-5.1.7',
  kLevel: 'K2',
  difficulty: 'Medium',
  keywords: ['testing quadrants', 'test levels', 'test types', 'business-facing', 'developer-facing'],
  examTip: 'Quadrants = perspective (business-facing / developer-facing) × focus (functional / non-functional).',
  memoryAid: 'Two axes, four quadrants. They guide the mix of tests, not their order.',
});

/* ------------------------------------------------------------------ *
 * Write back, preserving the exact original formatting.
 * ------------------------------------------------------------------ */
const out = 'window.questionSets = ' + JSON.stringify(bank, null, 4) + ';\n';
fs.writeFileSync(FILE, out, 'utf8');

console.log('Questions modified: ' + changes.length);
for (const c of changes) console.log('  ' + c.id + ': ' + c.fields.join(', '));
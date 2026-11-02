// ISTQB CTFL v4.0.1 QA audit — corrections only.
// IMPORTANT: This is a sparse patch, not a full replacement for window.questionSets.
// Apply by question ID to the original data. See apply_questions8_corrections.js.
// Only exams/questions/fields requiring a correction appear here.
window.questionSetsCorrections = {
    "exam1": [
        {
            "id": "Q281",
            "examTip": "Dynamic testing can reveal failures; static testing can find defects without execution; debugging investigates and removes defects."
        },
        {
            "id": "Q282",
            "memoryAid": "In THIS scenario: test execution exposes the failure, then debugging fixes the defect."
        },
        {
            "id": "Q070",
            "statement": "What is the purpose of test completion activities?",
            "correctFeedback": "✅ Correct: Archiving testware, consolidating lessons learned and handing over outstanding items are test completion activities.",
            "optionExplanations": {
                "A": "Defect reports should be resolved (fixed, deferred, or rejected), not just closed.",
                "B": "Archiving reusable testware, consolidating lessons learned and handing over outstanding risks occur in test completion.",
                "C": "Test closure is about completing the work, not disbanding the team.",
                "D": "Artifacts are archived, not necessarily moved to other projects."
            },
            "keywords": [
                "test completion",
                "testware",
                "lessons learned"
            ],
            "examTip": "Test completion consolidates experience, testware and relevant information at project milestones; remaining defects and risks can be handed over.",
            "memoryAid": "Completion = archive, report, learn and hand over."
        },
        {
            "id": "Q008",
            "options": {
                "A": "Defect clustering",
                "B": "Early testing",
                "C": "Absence-of-defects fallacy",
                "D": "Tests wear out"
            },
            "explanation": "The absence-of-defects fallacy states that a product with few or no detected defects may still fail to meet user needs and business objectives. A defect count or a passed test suite alone does not establish fitness for use.",
            "correctFeedback": "✅ Correct: The absence-of-defects fallacy applies when a system is technically correct but does not satisfy business or user needs.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: Defect clustering means most defects are found in a small number of modules.",
                "B": "❌ Incorrect: Early testing is about starting testing activities early in the lifecycle.",
                "D": "❌ Incorrect: Tests wear out concerns unchanged test suites losing effectiveness, not unmet user needs."
            },
            "optionExplanations": {
                "A": "Defect clustering means most defects are found in a small number of modules.",
                "B": "Early testing is about starting testing activities early in the lifecycle.",
                "C": "A technically correct product may still fail to meet user needs: the absence-of-defects fallacy.",
                "D": "Tests wear out describes the declining effectiveness of repeatedly executing unchanged tests."
            },
            "keywords": [
                "absence-of-defects fallacy",
                "testing principles",
                "user needs"
            ],
            "examTip": "If the system passes tests but does not satisfy users, identify the absence-of-defects fallacy.",
            "memoryAid": "No detected defects does not imply business value."
        },
        {
            "id": "Q082",
            "correctFeedback": "✅ Correct: Test execution exposed the incorrect invoice total; debugging located and corrected the underlying calculation defect.",
            "examTip": "Testing reveals failures; debugging reproduces, diagnoses and fixes defects."
        },
        {
            "id": "Q243",
            "incorrectFeedback": {
                "A": "❌ Incorrect: Exhaustive testing is impossible, regardless of when testing starts.",
                "B": "❌ Incorrect: Absence-of-defects fallacy means zero defects do not guarantee user satisfaction.",
                "C": "❌ Incorrect: Automation supports but does not replace reviews or other manual activities."
            },
            "optionExplanations": {
                "A": "Exhaustive testing is impossible, regardless of when testing starts.",
                "B": "Absence-of-defects fallacy means zero defects do not guarantee user satisfaction.",
                "C": "Automation supports but does not replace reviews or other manual activities.",
                "D": "Finding defects early in requirements or user stories usually reduces rework cost compared with finding them after implementation."
            }
        },
        {
            "id": "Q286",
            "examTip": "Observed incorrect behavior during execution = failure; imperfection in a work product = defect."
        },
        {
            "id": "Q244",
            "options": {
                "A": "Defect clustering",
                "B": "Tests wear out",
                "C": "Exhaustive testing",
                "D": "Context independence"
            },
            "incorrectFeedback": {
                "B": "❌ Incorrect: Tests wear out means the same tests stop finding new defects over time.",
                "C": "❌ Incorrect: Exhaustive testing means testing all possible combinations, which is impossible.",
                "D": "❌ Incorrect: Context independence is not a real testing principle; testing approaches depend on context."
            },
            "optionExplanations": {
                "A": "Defect clustering means a small number of components often contain most defects or failures.",
                "B": "Tests wear out means the same tests stop finding new defects over time.",
                "C": "Exhaustive testing means testing all possible combinations, which is impossible.",
                "D": "Context independence is not a real testing principle; testing approaches depend on context."
            }
        },
        {
            "id": "Q208",
            "options": {
                "A": "Absence-of-defects fallacy",
                "B": "Exhaustive testing is possible",
                "C": "Defect clustering",
                "D": "Early testing is unnecessary"
            },
            "explanation": "The absence-of-defects fallacy means that verifying stated requirements and finding few defects does not guarantee the product satisfies user needs or achieves business objectives.",
            "correctFeedback": "✅ Correct: Satisfying documented requirements does not necessarily satisfy actual user needs.",
            "incorrectFeedback": {
                "B": "❌ Incorrect: Exhaustive testing is impossible; this example illustrates the absence-of-defects fallacy, not exhaustive testing.",
                "C": "❌ Incorrect: Defect clustering means most defects are found in a small number of modules.",
                "D": "❌ Incorrect: Early testing is valuable; this scenario does not suggest otherwise."
            },
            "optionExplanations": {
                "A": "The absence-of-defects fallacy: low defect counts do not ensure the product provides value.",
                "B": "Exhaustive testing is impossible; this example illustrates the absence-of-defects fallacy, not exhaustive testing.",
                "C": "Defect clustering means most defects are found in a small number of modules.",
                "D": "Early testing is valuable; this scenario does not suggest otherwise."
            },
            "keywords": [
                "absence-of-defects fallacy",
                "validation"
            ],
            "examTip": "Validated user needs matter, not just a passing requirements test suite.",
            "memoryAid": "No defects found ≠ useful product."
        },
        {
            "id": "Q144",
            "options": {
                "A": "Defect clustering",
                "B": "Exhaustive testing is impossible",
                "C": "Testing shows the presence of defects, not their absence",
                "D": "Tests wear out"
            },
            "incorrectFeedback": {
                "A": "❌ Incorrect: Defect clustering refers to defects concentrating in specific modules.",
                "C": "❌ Incorrect: This principle means absence of failures does not prove the software is defect-free.",
                "D": "❌ Incorrect: Tests wear out relates to tests becoming ineffective when repeated."
            },
            "optionExplanations": {
                "A": "Defect clustering refers to defects concentrating in specific modules.",
                "B": "Exhaustive testing is impractical; risk-based prioritization is necessary.",
                "C": "This principle means absence of failures does not prove the software is defect-free.",
                "D": "Tests wear out relates to tests becoming ineffective when repeated."
            }
        }
    ],
    "exam3": [
        {
            "id": "Q315",
            "subsection": "3.1.2",
            "learningObjective": "FL-3.1.2"
        }
    ],
    "exam4": [
        {
            "id": "Q077",
            "statement": "A security door has two states, Locked and Unlocked. A valid badge changes Locked to Unlocked; closing the door changes Unlocked to Locked. Starting in Locked, which event sequence covers BOTH valid transitions?",
            "options": {
                "A": "Valid badge, then close the door",
                "B": "Close the door only",
                "C": "Valid badge only",
                "D": "Close the door, then close the door again"
            },
            "explanation": "The sequence Locked --badge--> Unlocked --close--> Locked exercises both valid transitions. The other sequences do not traverse both modeled edges.",
            "correctFeedback": "✅ Correct: The sequence Locked --badge--> Unlocked --close--> Locked exercises both valid transitions. The other sequences do not traverse both modeled edges.",
            "incorrectFeedback": {
                "B": "❌ Incorrect: Closing while already Locked does not exercise the badge transition.",
                "C": "❌ Incorrect: Using the badge exercises only Locked to Unlocked.",
                "D": "❌ Incorrect: Two close events from Locked do not exercise the modeled transitions."
            },
            "optionExplanations": {
                "A": "Correct: The sequence Locked --badge--> Unlocked --close--> Locked exercises both valid transitions. The other sequences do not traverse both modeled edges.",
                "B": "Closing while already Locked does not exercise the badge transition.",
                "C": "Using the badge exercises only Locked to Unlocked.",
                "D": "Two close events from Locked do not exercise the modeled transitions."
            },
            "keywords": [
                "state transition testing",
                "valid transitions",
                "test sequences"
            ],
            "examTip": "Identify the starting state and list the sequence of events needed to traverse every required edge.",
            "memoryAid": "Badge unlocks; close relocks."
        },
        {
            "id": "Q049",
            "statement": "A discount is granted only when a customer is a member AND the basket value is at least $100. Both conditions are Boolean and all combinations are feasible. Which set of test cases achieves full decision-table coverage?",
            "options": {
                "A": "Member/eligible basket only",
                "B": "Member/basket >= $100; Member/basket < $100; Non-member/basket >= $100; Non-member/basket < $100",
                "C": "Member/basket >= $100 and Non-member/basket < $100 only",
                "D": "One test for each customer category, ignoring the basket condition"
            },
            "explanation": "The two independent Boolean conditions produce four feasible rules. Decision table testing needs one test per feasible condition combination, with the discount applied only for member AND basket >= $100.",
            "correctFeedback": "✅ Correct: The two independent Boolean conditions produce four feasible rules. Decision table testing needs one test per feasible condition combination, with the discount applied only for member AND basket >= $100.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: One favorable combination covers only one of the four rules.",
                "C": "❌ Incorrect: Two tests miss the other two feasible combinations.",
                "D": "❌ Incorrect: The basket condition must be varied as well as membership."
            },
            "optionExplanations": {
                "A": "One favorable combination covers only one of the four rules.",
                "B": "Correct: The two independent Boolean conditions produce four feasible rules. Decision table testing needs one test per feasible condition combination, with the discount applied only for member AND basket >= $100.",
                "C": "Two tests miss the other two feasible combinations.",
                "D": "The basket condition must be varied as well as membership."
            },
            "keywords": [
                "decision table testing",
                "conditions",
                "test rules"
            ],
            "examTip": "For two feasible Boolean conditions, derive and test all four rules (unless valid minimization is justified).",
            "memoryAid": "2 independent true/false conditions -> 4 decision rules."
        },
        {
            "id": "Q227",
            "statement": "During ATDD, an accepted user story says: \"A customer cannot withdraw more than the available ATM balance.\" The account has $200 available. Which acceptance test BEST verifies this rule before implementation?",
            "options": {
                "A": "Request $250; expect rejection, no cash dispensed and unchanged balance",
                "B": "Request $50; expect cash dispensed and the balance reduced",
                "C": "Check only the ATM screen color",
                "D": "Measure CPU usage while the ATM is idle"
            },
            "explanation": "The proposed pre-implementation acceptance test directly tests the negative rule: a withdrawal exceeding the $200 balance must be rejected without dispensing cash or changing the balance.",
            "correctFeedback": "✅ Correct: The proposed pre-implementation acceptance test directly tests the negative rule: a withdrawal exceeding the $200 balance must be rejected without dispensing cash or changing the balance.",
            "incorrectFeedback": {
                "B": "❌ Incorrect: This covers a normal withdrawal but not the specified overdraw rule.",
                "C": "❌ Incorrect: Visual appearance does not exercise the withdrawal acceptance criterion.",
                "D": "❌ Incorrect: CPU usage does not verify the relevant business rule."
            },
            "optionExplanations": {
                "A": "Correct: The proposed pre-implementation acceptance test directly tests the negative rule: a withdrawal exceeding the $200 balance must be rejected without dispensing cash or changing the balance.",
                "B": "This covers a normal withdrawal but not the specified overdraw rule.",
                "C": "Visual appearance does not exercise the withdrawal acceptance criterion.",
                "D": "CPU usage does not verify the relevant business rule."
            },
            "keywords": [
                "ATDD",
                "acceptance criteria",
                "acceptance test cases"
            ],
            "examTip": "ATDD acceptance examples should include explicit preconditions, stimulus and expected outcomes.",
            "memoryAid": "Balance $200; request $250 -> reject, unchanged balance."
        },
        {
            "id": "Q052",
            "statement": "A vending-machine state model has these five valid transitions: Idle -> Selecting (choose); Selecting -> Payment (confirm); Payment -> Dispensing (success); Payment -> Selecting (failure); Dispensing -> Idle (finish). Each test starts in Idle. Which test sequence covers ALL five valid transitions in one test?",
            "options": {
                "A": "choose, confirm, failure, confirm, success, finish",
                "B": "choose, confirm, success, finish",
                "C": "choose, confirm, failure",
                "D": "confirm, success, finish"
            },
            "explanation": "The sequence exercises Idle->Selecting, Selecting->Payment, Payment->Selecting, Selecting->Payment again, Payment->Dispensing and Dispensing->Idle, covering all five distinct valid transitions.",
            "correctFeedback": "✅ Correct: The sequence exercises Idle->Selecting, Selecting->Payment, Payment->Selecting, Selecting->Payment again, Payment->Dispensing and Dispensing->Idle, covering all five distinct valid transitions.",
            "incorrectFeedback": {
                "B": "❌ Incorrect: It omits the Payment->Selecting failure transition.",
                "C": "❌ Incorrect: It omits the successful dispense path and return to Idle.",
                "D": "❌ Incorrect: Confirm is not a valid initial event from Idle and no full route is covered."
            },
            "optionExplanations": {
                "A": "Correct: The sequence exercises Idle->Selecting, Selecting->Payment, Payment->Selecting, Selecting->Payment again, Payment->Dispensing and Dispensing->Idle, covering all five distinct valid transitions.",
                "B": "It omits the Payment->Selecting failure transition.",
                "C": "It omits the successful dispense path and return to Idle.",
                "D": "Confirm is not a valid initial event from Idle and no full route is covered."
            },
            "keywords": [
                "state transition testing",
                "valid transitions",
                "test sequences"
            ],
            "examTip": "Enumerate the valid edges and choose a feasible sequence that exercises each one.",
            "memoryAid": "Choose -> pay -> fail -> pay -> succeed -> finish."
        },
        {
            "id": "Q222",
            "statement": "A login account is initially at FailedAttempts=0. After each wrong password the count increases by one; at the third wrong attempt it enters Locked. A correct password entered before lock moves to LoggedIn. Which event sequence is required to test the lock transition?",
            "options": {
                "A": "Correct password on the first attempt",
                "B": "Wrong password, then correct password",
                "C": "Wrong password, wrong password, wrong password",
                "D": "Correct password, then logout"
            },
            "explanation": "From an initial count of zero, three consecutive incorrect passwords traverse the failed-attempt states and cause the transition to Locked.",
            "correctFeedback": "✅ Correct: From an initial count of zero, three consecutive incorrect passwords traverse the failed-attempt states and cause the transition to Locked.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: A first-attempt success transitions to LoggedIn, not Locked.",
                "B": "❌ Incorrect: A successful login before the third failure does not reach Locked.",
                "D": "❌ Incorrect: A successful login and logout never reaches Locked."
            },
            "optionExplanations": {
                "A": "A first-attempt success transitions to LoggedIn, not Locked.",
                "B": "A successful login before the third failure does not reach Locked.",
                "C": "Correct: From an initial count of zero, three consecutive incorrect passwords traverse the failed-attempt states and cause the transition to Locked.",
                "D": "A successful login and logout never reaches Locked."
            },
            "keywords": [
                "state transition testing",
                "valid transitions",
                "test sequences"
            ],
            "examTip": "For state-transition tests, list the required event sequence, including counters and guards.",
            "memoryAid": "0 failures -> 1 -> 2 -> Locked on third wrong password."
        },
        {
            "id": "Q267",
            "statement": "In an ATDD workshop, a team defines this acceptance rule: premium customers get free delivery ONLY when the order total is at least $100. Customer type and order total are independent Boolean partitions. Which set of acceptance tests covers all business-rule combinations?",
            "options": {
                "A": "Premium, $150 only",
                "B": "Premium/$150; Premium/$50; Regular/$150; Regular/$50",
                "C": "Premium/$150 and Regular/$50 only",
                "D": "Regular/$150 only"
            },
            "explanation": "ATDD derives tests from acceptance criteria before implementation. Applying decision-table reasoning to the two Boolean conditions produces four feasible combinations, and each should have an expected delivery-fee result.",
            "correctFeedback": "✅ Correct: ATDD derives tests from acceptance criteria before implementation. Applying decision-table reasoning to the two Boolean conditions produces four feasible combinations, and each should have an expected delivery-fee result.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: It covers only the free-delivery case.",
                "C": "❌ Incorrect: It skips the two mixed-condition rules.",
                "D": "❌ Incorrect: One regular-customer case does not cover the acceptance rule."
            },
            "optionExplanations": {
                "A": "It covers only the free-delivery case.",
                "B": "Correct: ATDD derives tests from acceptance criteria before implementation. Applying decision-table reasoning to the two Boolean conditions produces four feasible combinations, and each should have an expected delivery-fee result.",
                "C": "It skips the two mixed-condition rules.",
                "D": "One regular-customer case does not cover the acceptance rule."
            },
            "keywords": [
                "ATDD",
                "acceptance criteria",
                "acceptance test cases"
            ],
            "examTip": "In ATDD, derive concrete positive and negative acceptance examples from the business rule.",
            "memoryAid": "ATDD + 2 Boolean acceptance conditions -> 4 examples."
        },
        {
            "id": "Q178",
            "statement": "A bank activates an extra verification step when (international transfer = Yes) AND (amount over $5,000 = Yes). Both Boolean inputs are independent. Which test-data set covers every feasible decision rule?",
            "options": {
                "A": "(Yes,Yes), (Yes,No), (No,Yes), (No,No)",
                "B": "(Yes,Yes) only",
                "C": "(Yes,Yes) and (No,No)",
                "D": "(Yes,No), (No,Yes) only"
            },
            "explanation": "The complete two-condition decision table has four feasible rules: TT triggers extra verification; TF, FT and FF do not. All four must be exercised for 100% rule coverage.",
            "correctFeedback": "✅ Correct: The complete two-condition decision table has four feasible rules: TT triggers extra verification; TF, FT and FF do not. All four must be exercised for 100% rule coverage.",
            "incorrectFeedback": {
                "B": "❌ Incorrect: It exercises only the one rule that triggers verification.",
                "C": "❌ Incorrect: The mixed conditions TF and FT remain untested.",
                "D": "❌ Incorrect: The all-true and all-false combinations remain untested."
            },
            "optionExplanations": {
                "A": "Correct: The complete two-condition decision table has four feasible rules: TT triggers extra verification; TF, FT and FF do not. All four must be exercised for 100% rule coverage.",
                "B": "It exercises only the one rule that triggers verification.",
                "C": "The mixed conditions TF and FT remain untested.",
                "D": "The all-true and all-false combinations remain untested."
            },
            "keywords": [
                "decision table testing",
                "conditions",
                "test rules"
            ],
            "examTip": "Decision tables cover combinations and their corresponding actions.",
            "memoryAid": "TT, TF, FT, FF = four rules."
        }
    ],
    "exam5": [
        {
            "id": "Q236",
            "statement": "During a test, a rarely used internal page displays \"recieve\" instead of \"receive\". The agreed impact scale classifies spelling defects as low severity. Which defect-report entry is MOST appropriate?",
            "options": {
                "A": "Low severity; title \"Misspelling on internal status page\"; include page/build, expected \"receive\", actual \"recieve\", and screenshot",
                "B": "Critical severity; write only \"UI broken\"",
                "C": "Do not record any defect because it is cosmetic",
                "D": "High severity; blame the page author"
            },
            "explanation": "The organization-defined severity is low. The candidate report records an objective title, environment and expected-versus-actual text with supporting evidence.",
            "correctFeedback": "✅ Correct: The organization-defined severity is low. The candidate report records an objective title, environment and expected-versus-actual text with supporting evidence.",
            "incorrectFeedback": {
                "B": "❌ Incorrect: The severity contradicts the agreed impact scale and reproduction detail is missing.",
                "C": "❌ Incorrect: Low-severity defects may still be recorded and managed.",
                "D": "❌ Incorrect: Blaming an individual is not an appropriate defect-report field."
            },
            "optionExplanations": {
                "A": "Correct: The organization-defined severity is low. The candidate report records an objective title, environment and expected-versus-actual text with supporting evidence.",
                "B": "The severity contradicts the agreed impact scale and reproduction detail is missing.",
                "C": "Low-severity defects may still be recorded and managed.",
                "D": "Blaming an individual is not an appropriate defect-report field."
            },
            "keywords": [
                "defect reporting",
                "reproducibility",
                "actual vs expected results"
            ],
            "examTip": "Apply the severity rubric and include reproducible facts even for a minor issue.",
            "memoryAid": "Expected receive, actual recieve, severity low."
        },
        {
            "id": "Q234",
            "statement": "An API endpoint returns HTTP 500 when a request contains an empty account ID. Which defect-report entry BEST enables reproduction?",
            "options": {
                "A": "API fails sometimes",
                "B": "Please inspect the backend urgently",
                "C": "Endpoint POST /transfers, build 5.0; payload accountId=\"\"; Steps: submit payload; Expected: validation error; Actual: HTTP 500; attach request ID and response log",
                "D": "Developer should rewrite the API"
            },
            "explanation": "Option C includes precise endpoint/build, input payload, steps, expected and actual result and logs. These are the concrete fields needed to reproduce and investigate the anomaly.",
            "correctFeedback": "✅ Correct: Option C includes precise endpoint/build, input payload, steps, expected and actual result and logs. These are the concrete fields needed to reproduce and investigate the anomaly.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: It lacks the triggering input and precise failure.",
                "B": "❌ Incorrect: Urgency alone cannot reproduce the failure.",
                "D": "❌ Incorrect: A proposed implementation change is not an objective defect description."
            },
            "optionExplanations": {
                "A": "It lacks the triggering input and precise failure.",
                "B": "Urgency alone cannot reproduce the failure.",
                "C": "Correct: Option C includes precise endpoint/build, input payload, steps, expected and actual result and logs. These are the concrete fields needed to reproduce and investigate the anomaly.",
                "D": "A proposed implementation change is not an objective defect description."
            },
            "keywords": [
                "defect reporting",
                "reproducibility",
                "actual vs expected results"
            ],
            "examTip": "For API defects, include request payload, endpoint, version and evidence.",
            "memoryAid": "POST + invalid ID -> expected validation; actual 500."
        },
        {
            "id": "Q275",
            "statement": "A checkout defect report contains only the title \"Checkout broken\". The tester observed that applying two coupons made the total negative on build 6.1. Which replacement description is BEST?",
            "options": {
                "A": "Checkout is very bad and the developer should fix the design",
                "B": "Problems may occur during shopping",
                "C": "The developer used the wrong algorithm",
                "D": "Build 6.1: add two eligible coupons at checkout; Expected: total >= $0 per pricing rule; Actual: total = -$5; attach cart items, coupon codes and screenshot"
            },
            "explanation": "Option D replaces the vague report with a reproducible scenario, specific build, triggering data, expected and observed results and evidence.",
            "correctFeedback": "✅ Correct: Option D replaces the vague report with a reproducible scenario, specific build, triggering data, expected and observed results and evidence.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: This is subjective and lacks a testable failure description.",
                "B": "❌ Incorrect: It does not identify the circumstances or observed result.",
                "C": "❌ Incorrect: It guesses the implementation root cause without evidence."
            },
            "optionExplanations": {
                "A": "This is subjective and lacks a testable failure description.",
                "B": "It does not identify the circumstances or observed result.",
                "C": "It guesses the implementation root cause without evidence.",
                "D": "Correct: Option D replaces the vague report with a reproducible scenario, specific build, triggering data, expected and observed results and evidence."
            },
            "keywords": [
                "defect reporting",
                "reproducibility",
                "actual vs expected results"
            ],
            "examTip": "Write observable actual/expected behavior and exact triggering input, not assumptions about code.",
            "memoryAid": "Coupon codes + negative total + version + screenshot."
        },
        {
            "id": "Q136",
            "statement": "A test effort estimate has optimistic=8 person-days, most likely=10 person-days and pessimistic=18 person-days. What is the three-point weighted estimate, rounded to one decimal?",
            "options": {
                "A": "12.0 person-days",
                "B": "10.0 person-days",
                "C": "10.7 person-days",
                "D": "11.0 person-days"
            },
            "explanation": "Using the three-point weighted estimate, E=(optimistic + 4×most likely + pessimistic)/6 = (8+4×10+18)/6 = 11.0 person-days.",
            "correctFeedback": "✅ Correct: Using the three-point weighted estimate, E=(optimistic + 4×most likely + pessimistic)/6 = (8+4×10+18)/6 = 11.0 person-days.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: (8+4×10+18)/6 = 11.0, not 12.0 person-days.",
                "B": "❌ Incorrect: The most likely value alone is not the weighted estimate.",
                "C": "❌ Incorrect: 66/6 equals 11.0, not 10.7 person-days."
            },
            "optionExplanations": {
                "A": "The weighted total is 66, not 72.",
                "B": "The most likely value alone is not the weighted estimate.",
                "C": "The correct weighted result is 11.0 rather than 10.7 person-days.",
                "D": "Using the three-point weighted estimate, E=(optimistic + 4×most likely + pessimistic)/6 = (8+4×10+18)/6 = 11.0 person-days."
            },
            "keywords": [
                "three-point estimation",
                "optimistic most likely pessimistic",
                "weighted effort estimate"
            ],
            "examTip": "The intended calculation is E=(a+4m+b)/6.",
            "memoryAid": "8 + 40 + 18 = 66; /6 = 11."
        },
        {
            "id": "Q192",
            "statement": "A tester observes that an Android checkout crashes after selecting Pay with an expired card. Which initial defect report BEST supports triage and resolution?",
            "options": {
                "A": "Urgent: checkout bad",
                "B": "Build 8.1/Android 15; steps: open checkout, select expired test card, tap Pay; expected: declined-card message; actual: app crashes; attach log",
                "C": "The programmer needs to review their work",
                "D": "Mark the defect Fixed before logging details"
            },
            "explanation": "Option B supplies the information required to log and classify the anomaly: environment/build, reproduction steps, expected and actual results and evidence.",
            "correctFeedback": "✅ Correct: Option B supplies the information required to log and classify the anomaly: environment/build, reproduction steps, expected and actual results and evidence.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: The report lacks specifics to reproduce and triage.",
                "C": "❌ Incorrect: It assigns blame and omits the failure details.",
                "D": "❌ Incorrect: A new report should not be prematurely marked fixed."
            },
            "optionExplanations": {
                "A": "The report lacks specifics to reproduce and triage.",
                "B": "Correct: Option B supplies the information required to log and classify the anomaly: environment/build, reproduction steps, expected and actual results and evidence.",
                "C": "It assigns blame and omits the failure details.",
                "D": "A new report should not be prematurely marked fixed."
            },
            "keywords": [
                "defect reporting",
                "reproducibility",
                "actual vs expected results"
            ],
            "examTip": "The report should enable reproduction and classification without guessing root causes.",
            "memoryAid": "Expired test card -> expected decline, actual crash; include build."
        },
        {
            "id": "Q345",
            "statement": "A metrics-based model indicates testing typically represents 25% of the TOTAL combined development and testing effort. If a new project requires 300 development person-days, how many testing person-days should be estimated?",
            "options": {
                "A": "75 person-days",
                "B": "100 person-days",
                "C": "125 person-days",
                "D": "300 person-days"
            },
            "explanation": "Let T be test effort. T/(300+T)=0.25, so T=75+0.25T, hence 0.75T=75 and T=100 person-days.",
            "correctFeedback": "✅ Correct: Let T be test effort. T/(300+T)=0.25, so T=75+0.25T, hence 0.75T=75 and T=100 person-days.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: 75 is 25% of development effort, not 25% of the combined effort.",
                "C": "❌ Incorrect: 125 does not satisfy 125/(300+125)=0.25.",
                "D": "❌ Incorrect: 300 would mean testing is half the combined effort."
            },
            "optionExplanations": {
                "A": "75 is 25% of development effort, not 25% of the combined effort.",
                "B": "Correct: Let T be test effort. T/(300+T)=0.25, so T=75+0.25T, hence 0.75T=75 and T=100 person-days.",
                "C": "125 does not satisfy 125/(300+125)=0.25.",
                "D": "300 would mean testing is half the combined effort."
            },
            "keywords": [
                "test effort estimation",
                "applied estimation",
                "project metrics"
            ],
            "examTip": "Pay attention to whether the percentage is of development effort or total combined effort.",
            "memoryAid": "T/(D+T)=25%; D=300 -> T=100."
        },
        {
            "id": "Q076",
            "statement": "During system testing, tapping Pay twice causes two charges but only one receipt. Which proposed defect report BEST supports investigation?",
            "options": {
                "A": "Payment is broken; fix quickly",
                "B": "The tester thinks developers made a careless error",
                "C": "Title: Duplicate charge on double tap; Build 4.2, Android 15; Steps: open checkout, tap Pay twice; Expected: one charge and one receipt; Actual: two charges and one receipt; attach transaction IDs",
                "D": "Checkout looked odd yesterday"
            },
            "explanation": "A useful defect report identifies the test object/build, reproduction steps and data, expected and actual results and supporting evidence. Option C supplies actionable information for investigation.",
            "correctFeedback": "✅ Correct: A useful defect report identifies the test object/build, reproduction steps and data, expected and actual results and supporting evidence. Option C supplies actionable information for investigation.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: It gives no environment, steps or observed versus expected results.",
                "B": "❌ Incorrect: Blame is not an objective reproduction description.",
                "D": "❌ Incorrect: It is vague and contains no reproducible evidence."
            },
            "optionExplanations": {
                "A": "It gives no environment, steps or observed versus expected results.",
                "B": "Blame is not an objective reproduction description.",
                "C": "Correct: A useful defect report identifies the test object/build, reproduction steps and data, expected and actual results and supporting evidence. Option C supplies actionable information for investigation.",
                "D": "It is vague and contains no reproducible evidence."
            },
            "keywords": [
                "defect reporting",
                "reproducibility",
                "actual vs expected results"
            ],
            "examTip": "Prepare a report with build/context, reproduction, expected vs actual and evidence.",
            "memoryAid": "Double tap -> one expected charge; two actual charges; include IDs."
        },
        {
            "id": "Q346",
            "statement": "In comparable projects, development required 300 person-days and testing required 200 person-days. If the same metrics-based development-to-test ratio applies to a new project estimated at 450 development person-days, what is the test-effort estimate?",
            "options": {
                "A": "150 person-days",
                "B": "225 person-days",
                "C": "450 person-days",
                "D": "300 person-days"
            },
            "explanation": "The historic development-to-test ratio is 300:200, or 3:2. The predicted test effort is 450×(2/3)=300 person-days.",
            "correctFeedback": "✅ Correct: The historic development-to-test ratio is 300:200, or 3:2. The predicted test effort is 450×(2/3)=300 person-days.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: This uses one third rather than two thirds of the development effort.",
                "B": "❌ Incorrect: This uses one half of development effort, not the historic 2/3 ratio.",
                "C": "❌ Incorrect: This assumes equal development and testing effort."
            },
            "optionExplanations": {
                "A": "This uses one third rather than two thirds of the development effort.",
                "B": "This uses one half of development effort, not the historic 2/3 ratio.",
                "C": "This assumes equal development and testing effort.",
                "D": "Correct: The historic development-to-test ratio is 300:200, or 3:2. The predicted test effort is 450×(2/3)=300 person-days."
            },
            "keywords": [
                "metrics-based estimation",
                "development-to-test ratio",
                "test effort"
            ],
            "examTip": "Ratio-based estimation: scale historical testing/development effort to the new development forecast.",
            "memoryAid": "Historic dev:test 3:2; new dev 450 -> test 300."
        },
        {
            "id": "Q196",
            "statement": "In Planning Poker, three specialists estimate a user story at 5, 8 and 13 points. After a discussion and a second private vote, all three estimate 8 points. Which value should be recorded for the story?",
            "options": {
                "A": "8 points, because it is the agreed consensus",
                "B": "13 points, because it was initially the highest",
                "C": "5 points, because it was initially the lowest",
                "D": "26 points, the sum of their first estimates"
            },
            "explanation": "Planning Poker is a consensus-based variant of Wideband Delphi. After further discussion and re-estimation the agreed second-round estimate of 8 is recorded.",
            "correctFeedback": "✅ Correct: Planning Poker is a consensus-based variant of Wideband Delphi. After further discussion and re-estimation the agreed second-round estimate of 8 is recorded.",
            "incorrectFeedback": {
                "B": "❌ Incorrect: The highest first-round value is not the consensus.",
                "C": "❌ Incorrect: The lowest first-round value is not the consensus.",
                "D": "❌ Incorrect: Planning Poker does not add individual votes."
            },
            "optionExplanations": {
                "A": "Correct: Planning Poker is a consensus-based variant of Wideband Delphi. After further discussion and re-estimation the agreed second-round estimate of 8 is recorded.",
                "B": "The highest first-round value is not the consensus.",
                "C": "The lowest first-round value is not the consensus.",
                "D": "Planning Poker does not add individual votes."
            },
            "keywords": [
                "Planning Poker",
                "consensus estimation",
                "agile estimation"
            ],
            "examTip": "For consensus techniques, identify the final agreed estimate after discussion, not the first-round range.",
            "memoryAid": "5/8/13 -> discussion -> 8/8/8 -> 8 points."
        }
    ],
    "exam6": [
        {
            "id": "Q358",
            "statement": "A team assumes that adopting test automation has no ongoing cost once the tool is purchased. What is a recognized risk of this assumption?",
            "options": {
                "A": "Automation completely eliminates the need for human judgment",
                "B": "The effort required to introduce the tool and maintain scripts will be underestimated",
                "C": "Automation prevents repeated execution of regression tests",
                "D": "Coverage information can never be measured automatically"
            },
            "explanation": "CTFL 6.2 lists inaccurate estimations of introduction effort, maintenance costs and process changes among the risks of test automation.",
            "correctFeedback": "✅ Correct: CTFL 6.2 lists inaccurate estimations of introduction effort, maintenance costs and process changes among the risks of test automation.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: This is another misconception but not the estimation risk described.",
                "C": "❌ Incorrect: Automation supports repeated execution rather than preventing it.",
                "D": "❌ Incorrect: Objective coverage measurement is a potential benefit."
            },
            "optionExplanations": {
                "A": "This is another misconception but not the estimation risk described.",
                "B": "Correct: CTFL 6.2 lists inaccurate estimations of introduction effort, maintenance costs and process changes among the risks of test automation.",
                "C": "Automation supports repeated execution rather than preventing it.",
                "D": "Objective coverage measurement is a potential benefit."
            },
            "keywords": [
                "test automation",
                "benefits",
                "risks"
            ],
            "examTip": "Automation has introduction, training and maintenance costs.",
            "memoryAid": "Tool purchase ≠ zero maintenance effort."
        },
        {
            "id": "Q381",
            "statement": "A team automates regression testing and finds that adapting the manual test process and training testers require substantial effort. Which conclusion is MOST consistent with CTFL?",
            "options": {
                "A": "Automation is free after purchasing a license",
                "B": "Automation removes all need to adapt existing test processes",
                "C": "Tool introduction, training and maintenance require effort and should be estimated",
                "D": "Test automation always replaces every manual test"
            },
            "explanation": "The syllabus explains that acquiring a tool does not guarantee lasting benefits and mentions the introduction, training and maintenance effort required for automation.",
            "correctFeedback": "✅ Correct: The syllabus explains that acquiring a tool does not guarantee lasting benefits and mentions the introduction, training and maintenance effort required for automation.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: The license is not the only cost of automation.",
                "B": "❌ Incorrect: Existing processes may need changes.",
                "D": "❌ Incorrect: Manual testing may remain more appropriate for some scenarios."
            },
            "optionExplanations": {
                "A": "The license is not the only cost of automation.",
                "B": "Existing processes may need changes.",
                "C": "Correct: The syllabus explains that acquiring a tool does not guarantee lasting benefits and mentions the introduction, training and maintenance effort required for automation.",
                "D": "Manual testing may remain more appropriate for some scenarios."
            },
            "keywords": [
                "test automation",
                "benefits",
                "risks"
            ],
            "examTip": "Budget for introduction, training and maintenance when assessing automation.",
            "memoryAid": "Automation benefit requires ongoing investment."
        },
        {
            "id": "Q072",
            "statement": "A regression automation tool is being proposed for a platform it cannot connect to. Which risk from CTFL section 6.2 is most relevant?",
            "options": {
                "A": "Faster feedback from reduced execution time",
                "B": "Automation-tool incompatibility with the development platform",
                "C": "Reduced human error through repeatability",
                "D": "More time to design deeper tests"
            },
            "explanation": "CTFL lists an automation tool that is not compatible with the development platform as a specific risk.",
            "correctFeedback": "✅ Correct: CTFL lists an automation tool that is not compatible with the development platform as a specific risk.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: This is a potential benefit, not the compatibility risk.",
                "C": "❌ Incorrect: This is another potential automation benefit.",
                "D": "❌ Incorrect: Freeing tester time is a benefit and does not address incompatibility."
            },
            "optionExplanations": {
                "A": "This is a potential benefit, not the compatibility risk.",
                "B": "Correct: CTFL lists an automation tool that is not compatible with the development platform as a specific risk.",
                "C": "This is another potential automation benefit.",
                "D": "Freeing tester time is a benefit and does not address incompatibility."
            },
            "examTip": "Platform compatibility is a named automation risk in CTFL 6.2.",
            "memoryAid": "Tool incompatible with platform = automation risk."
        },
        {
            "id": "Q360",
            "statement": "An automated regression suite replays tests consistently but the team assumes that the automated checks guarantee no remaining defects. Which risk is illustrated?",
            "options": {
                "A": "Automation makes manual testing logically impossible",
                "B": "Automated execution cannot be repeated",
                "C": "Unrealistic expectations about automation benefits and overreliance on tools",
                "D": "Automation tools necessarily detect every omission in requirements"
            },
            "explanation": "CTFL 6.2 lists unrealistic expectations of tools and excessive reliance on automation instead of human critical thinking among the risks.",
            "correctFeedback": "✅ Correct: CTFL 6.2 lists unrealistic expectations of tools and excessive reliance on automation instead of human critical thinking among the risks.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: Manual testing remains possible and often valuable.",
                "B": "❌ Incorrect: Repeatable execution is an automation benefit.",
                "D": "❌ Incorrect: Automated execution cannot guarantee finding every omission."
            },
            "optionExplanations": {
                "A": "Manual testing remains possible and often valuable.",
                "B": "Repeatable execution is an automation benefit.",
                "C": "Correct: CTFL 6.2 lists unrealistic expectations of tools and excessive reliance on automation instead of human critical thinking among the risks.",
                "D": "Automated execution cannot guarantee finding every omission."
            },
            "keywords": [
                "test automation",
                "benefits",
                "risks"
            ],
            "examTip": "Tools execute designed checks; they do not replace critical judgment.",
            "memoryAid": "Overreliance + unrealistic expectations = automation risk."
        },
        {
            "id": "Q240",
            "statement": "A team automates regression test execution. What is a direct benefit stated in CTFL section 6.2?",
            "options": {
                "A": "Faster execution of repetitive tests and earlier feedback",
                "B": "Elimination of all testing risks",
                "C": "Guaranteed removal of every defect",
                "D": "Automatic replacement of all test design activities"
            },
            "explanation": "Automation can reduce repetitive manual work and execution time, enabling faster feedback and allowing testers more time for deeper testing.",
            "correctFeedback": "✅ Correct: Automation can reduce repetitive manual work and execution time, enabling faster feedback and allowing testers more time for deeper testing.",
            "incorrectFeedback": {
                "B": "❌ Incorrect: Automated testing introduces its own risks and does not eliminate product risk.",
                "C": "❌ Incorrect: Automation cannot guarantee the absence or removal of defects.",
                "D": "❌ Incorrect: Human test design is still necessary."
            },
            "optionExplanations": {
                "A": "Correct: Automation can reduce repetitive manual work and execution time, enabling faster feedback and allowing testers more time for deeper testing.",
                "B": "Automated testing introduces its own risks and does not eliminate product risk.",
                "C": "Automation cannot guarantee the absence or removal of defects.",
                "D": "Human test design is still necessary."
            },
            "keywords": [
                "test automation",
                "benefits",
                "risks"
            ],
            "examTip": "Remember the benefits: repeatability, speed, objective measurements and time for deeper testing.",
            "memoryAid": "Automation speeds repetition; does not guarantee quality."
        },
        {
            "id": "Q357",
            "statement": "An organization considers automating a regression suite but assumes every existing manual test is suitable for automation. Which risk should be recognized?",
            "options": {
                "A": "Automated tests are always slower than manual tests",
                "B": "Test automation never improves repeatability",
                "C": "Automation cannot provide test metrics",
                "D": "A test tool may be used when manual testing is more appropriate"
            },
            "explanation": "The syllabus lists using a test tool when manual testing would be more appropriate among automation risks. Suitability must be evaluated by context and expected value.",
            "correctFeedback": "✅ Correct: The syllabus lists using a test tool when manual testing would be more appropriate among automation risks. Suitability must be evaluated by context and expected value.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: Automation can greatly reduce repetitive execution time.",
                "B": "❌ Incorrect: Consistent repeatability is a common automation benefit.",
                "C": "❌ Incorrect: Reporting and metrics are common automation benefits."
            },
            "optionExplanations": {
                "A": "Automation can greatly reduce repetitive execution time.",
                "B": "Consistent repeatability is a common automation benefit.",
                "C": "Reporting and metrics are common automation benefits.",
                "D": "Correct: The syllabus lists using a test tool when manual testing would be more appropriate among automation risks. Suitability must be evaluated by context and expected value."
            },
            "keywords": [
                "test automation",
                "benefits",
                "risks"
            ],
            "examTip": "Check suitability: not every manual test should be automated.",
            "memoryAid": "Automate where useful; explore manually where appropriate."
        },
        {
            "id": "Q393",
            "statement": "A test automation team chooses a tool whose scripting environment does not work with the application development platform. Which CTFL automation risk is involved?",
            "options": {
                "A": "Incompatibility between the automation tool and the development platform",
                "B": "Faster detection of regressions",
                "C": "Fewer repetitive manual tasks",
                "D": "More objective coverage measurements"
            },
            "explanation": "CTFL 6.2 expressly identifies using automation tools incompatible with the development platform as a risk.",
            "correctFeedback": "✅ Correct: CTFL 6.2 expressly identifies using automation tools incompatible with the development platform as a risk.",
            "incorrectFeedback": {
                "B": "❌ Incorrect: This is a potential benefit, not a compatibility issue.",
                "C": "❌ Incorrect: Reducing repetitive effort is a benefit.",
                "D": "❌ Incorrect: Objective coverage metrics are a benefit."
            },
            "optionExplanations": {
                "A": "Correct: CTFL 6.2 expressly identifies using automation tools incompatible with the development platform as a risk.",
                "B": "This is a potential benefit, not a compatibility issue.",
                "C": "Reducing repetitive effort is a benefit.",
                "D": "Objective coverage metrics are a benefit."
            },
            "keywords": [
                "test automation",
                "benefits",
                "risks"
            ],
            "examTip": "Check whether the automation tool supports the actual development platform.",
            "memoryAid": "Incompatible platform = named CTFL risk."
        },
        {
            "id": "Q359",
            "statement": "A team buys a new test automation tool but testers are unfamiliar with scripting and receive no training. Which risk is most likely?",
            "options": {
                "A": "All tests become self-maintaining immediately",
                "B": "Higher introduction effort, ineffective usage and poor realization of expected benefits",
                "C": "Every manual test automatically becomes redundant",
                "D": "The tool guarantees the same findings as human exploratory testing"
            },
            "explanation": "Acquiring a tool alone does not guarantee benefits. Introduction and training require effort, and expectations and cost estimates may be unrealistic.",
            "correctFeedback": "✅ Correct: Acquiring a tool alone does not guarantee benefits. Introduction and training require effort, and expectations and cost estimates may be unrealistic.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: Test scripts require ongoing maintenance.",
                "C": "❌ Incorrect: Not all manual activities can or should be automated.",
                "D": "❌ Incorrect: Human expertise and critical thinking remain essential."
            },
            "optionExplanations": {
                "A": "Test scripts require ongoing maintenance.",
                "B": "Correct: Acquiring a tool alone does not guarantee benefits. Introduction and training require effort, and expectations and cost estimates may be unrealistic.",
                "C": "Not all manual activities can or should be automated.",
                "D": "Human expertise and critical thinking remain essential."
            },
            "keywords": [
                "test automation",
                "benefits",
                "risks"
            ],
            "examTip": "Introduction and training are part of automation cost and risk.",
            "memoryAid": "No training + tool acquisition ≠ success."
        }
    ],
    "exam7": [
        {
            "id": "Q037",
            "options": {
                "A": "Tests wear out",
                "B": "Defect clustering",
                "C": "Absence-of-defects fallacy",
                "D": "Exhaustive testing is impossible"
            },
            "incorrectFeedback": {
                "A": "❌ Incorrect: Tests wear out concerns tests losing effectiveness when repeated.",
                "C": "❌ Incorrect: Absence-of-defects fallacy means no defects found does not mean the system meets needs.",
                "D": "❌ Incorrect: Exhaustive testing impossibility is about not being able to test everything."
            },
            "optionExplanations": {
                "A": "Tests wear out concerns tests losing effectiveness when repeated.",
                "B": "Defects often cluster in a small number of components. An exact 80/20 split is not required.",
                "C": "Absence-of-defects fallacy means no defects found does not mean the system meets needs.",
                "D": "Exhaustive testing impossibility is about not being able to test everything."
            }
        },
        {
            "id": "Q164",
            "options": {
                "A": "Defect clustering",
                "B": "Tests wear out",
                "C": "Testing is context dependent",
                "D": "Exhaustive testing is impossible"
            },
            "incorrectFeedback": {
                "A": "❌ Incorrect: Defect clustering refers to uneven defect distribution across modules.",
                "B": "❌ Incorrect: Tests wear out concerns test effectiveness dropping when tests are repeated.",
                "D": "❌ Incorrect: Exhaustive testing impossibility is unrelated to choosing a rigorous approach."
            },
            "optionExplanations": {
                "A": "Defect clustering refers to uneven defect distribution across modules.",
                "B": "Tests wear out concerns test effectiveness dropping when tests are repeated.",
                "C": "The rigor and formality of testing depend on the context, including safety-criticality and risks.",
                "D": "Exhaustive testing impossibility is unrelated to choosing a rigorous approach."
            }
        },
        {
            "id": "Q084",
            "options": {
                "A": "Tests wear out",
                "B": "Exhaustive testing is impossible",
                "C": "Defect clustering",
                "D": "Absence-of-defects fallacy"
            },
            "incorrectFeedback": {
                "A": "❌ Incorrect: The tests wear out concerns tests becoming ineffective when repeated.",
                "C": "❌ Incorrect: Defect clustering refers to the concentration of defects in specific modules.",
                "D": "❌ Incorrect: Absence-of-defects fallacy means a defect-free system may still not meet user needs."
            },
            "optionExplanations": {
                "A": "The tests wear out concerns tests becoming ineffective when repeated.",
                "B": "Exhaustive testing is impossible for all but the most trivial systems due to the infinite number of input combinations.",
                "C": "Defect clustering refers to the concentration of defects in specific modules.",
                "D": "Absence-of-defects fallacy means a defect-free system may still not meet user needs."
            }
        },
        {
            "id": "Q376",
            "statement": "A performance test automation solution depends on a vendor whose support contract will end next month. Which automation risk is MOST directly illustrated?",
            "options": {
                "A": "Dependence on a tool vendor whose support may end or become inadequate",
                "B": "Automated tests necessarily reduce coverage",
                "C": "Automation prevents early feedback",
                "D": "Static testing is impossible with tool support"
            },
            "explanation": "CTFL 6.2 explicitly lists dependency on the tool vendor, including retirement of a product and poor support, as an automation risk.",
            "correctFeedback": "✅ Correct: CTFL 6.2 explicitly lists dependency on the tool vendor, including retirement of a product and poor support, as an automation risk.",
            "incorrectFeedback": {
                "B": "❌ Incorrect: Automated tests do not necessarily reduce coverage.",
                "C": "❌ Incorrect: Automation may improve the speed of feedback.",
                "D": "❌ Incorrect: Static analysis and reviews may be tool-supported."
            },
            "optionExplanations": {
                "A": "Correct: CTFL 6.2 explicitly lists dependency on the tool vendor, including retirement of a product and poor support, as an automation risk.",
                "B": "Automated tests do not necessarily reduce coverage.",
                "C": "Automation may improve the speed of feedback.",
                "D": "Static analysis and reviews may be tool-supported."
            },
            "keywords": [
                "test automation",
                "benefits",
                "risks"
            ],
            "examTip": "Vendor continuity and support are explicit automation risks.",
            "memoryAid": "Vendor unavailable -> tool dependency risk."
        }
    ],
    "exam8": [
        {
            "id": "Q204",
            "explanation": "The fifth CTFL v4.0.1 testing principle is \"Tests wear out\": repeated unchanged tests become increasingly ineffective in detecting new defects. The team counters this by adding tests for new workflows and recent defect patterns, and by modifying existing tests and test data where needed. This principle was called the \"tests wear out principle\" in older CTFL material, but v4.0.1 uses the \"Tests wear out\" wording."
        },
        {
            "id": "Q161",
            "incorrectFeedback": {
                "A": "❌ Incorrect: Performance is one aspect of quality, not its complete definition.",
                "C": "❌ Incorrect: Feature count does not correlate with quality.",
                "D": "❌ Incorrect: A system can be defect-free but still not meet user needs (absence-of-defects fallacy)."
            },
            "optionExplanations": {
                "A": "Performance is one aspect of quality, not its complete definition.",
                "B": "Quality is a measure of how well the system meets requirements and satisfies user needs.",
                "C": "Feature count does not correlate with quality.",
                "D": "A system can be defect-free but still not meet user needs (absence-of-defects fallacy)."
            }
        },
        {
            "id": "Q221",
            "statement": "A loan is approved when (good credit AND verified income) OR manager override. Which test case BEST verifies that a manager override allows approval even when the standard conditions fail?",
            "options": {
                "A": "Good credit, verified income, no override -> approved",
                "B": "Poor credit, unverified income, override present -> approved",
                "C": "Poor credit, unverified income, no override -> approved",
                "D": "Good credit, unverified income, no override -> approved"
            },
            "explanation": "An explicit manager override makes the OR expression true regardless of credit and income. Poor credit and unverified income with override present is the discriminating decision-table rule.",
            "correctFeedback": "✅ Correct: An explicit manager override makes the OR expression true regardless of credit and income. Poor credit and unverified income with override present is the discriminating decision-table rule.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: The standard conditions already allow approval, so the override has not been tested.",
                "C": "❌ Incorrect: Neither the standard conjunction nor the override holds, so approval is not expected.",
                "D": "❌ Incorrect: Good credit alone is insufficient without verified income or override."
            },
            "optionExplanations": {
                "A": "The standard conditions already allow approval, so the override has not been tested.",
                "B": "Correct: An explicit manager override makes the OR expression true regardless of credit and income. Poor credit and unverified income with override present is the discriminating decision-table rule.",
                "C": "Neither the standard conjunction nor the override holds, so approval is not expected.",
                "D": "Good credit alone is insufficient without verified income or override."
            },
            "keywords": [
                "decision table testing",
                "conditions",
                "test rules"
            ],
            "examTip": "For OR overrides, test the override with all ordinary approval conditions false.",
            "memoryAid": "Override = true -> approve despite failed normal conditions."
        },
        {
            "id": "Q022",
            "statement": "A process has these valid transitions: Start->Review; Start->Reject; Review->Reject. Each test begins in Start. Which test suite achieves 100% valid-transitions coverage?",
            "options": {
                "A": "Test 1: Start->Review->Reject; Test 2: Start->Reject",
                "B": "Test 1: Start->Review->Reject only",
                "C": "Test 1: Start->Reject only",
                "D": "Test 1: Start->Review only"
            },
            "explanation": "The model has three distinct valid edges. One test exercises Start->Review and Review->Reject; a second test is necessary for Start->Reject. Visiting all three states alone would not cover all edges.",
            "correctFeedback": "✅ Correct: The model has three distinct valid edges. One test exercises Start->Review and Review->Reject; a second test is necessary for Start->Reject. Visiting all three states alone would not cover all edges.",
            "incorrectFeedback": {
                "B": "❌ Incorrect: It misses the direct Start->Reject edge.",
                "C": "❌ Incorrect: It misses both edges involving Review.",
                "D": "❌ Incorrect: It misses the two transitions ending in Reject."
            },
            "optionExplanations": {
                "A": "Correct: The model has three distinct valid edges. One test exercises Start->Review and Review->Reject; a second test is necessary for Start->Reject. Visiting all three states alone would not cover all edges.",
                "B": "It misses the direct Start->Reject edge.",
                "C": "It misses both edges involving Review.",
                "D": "It misses the two transitions ending in Reject."
            },
            "keywords": [
                "state transition testing",
                "valid transitions",
                "test sequences"
            ],
            "examTip": "100% valid-transition coverage requires every modeled valid edge to be exercised.",
            "memoryAid": "2 paths -> all 3 edges."
        },
        {
            "id": "Q343",
            "statement": "Historic estimates show 40 testing person-days for every 120 development person-days on similar projects. A new release is estimated to require 240 development person-days. Using that ratio, what is the estimated testing effort?",
            "options": {
                "A": "40 person-days",
                "B": "80 person-days",
                "C": "120 person-days",
                "D": "240 person-days"
            },
            "explanation": "The historical test-to-development ratio is 40/120=1/3. For 240 development days, estimate 240×1/3=80 testing person-days.",
            "correctFeedback": "✅ Correct: The historical test-to-development ratio is 40/120=1/3. For 240 development days, estimate 240×1/3=80 testing person-days.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: This fails to scale effort for the doubled development estimate.",
                "C": "❌ Incorrect: This uses a one-half rather than one-third ratio.",
                "D": "❌ Incorrect: A 1:1 ratio is not supported by the historical data."
            },
            "optionExplanations": {
                "A": "This fails to scale effort for the doubled development estimate.",
                "B": "Correct: The historical test-to-development ratio is 40/120=1/3. For 240 development days, estimate 240×1/3=80 testing person-days.",
                "C": "This uses a one-half rather than one-third ratio.",
                "D": "A 1:1 ratio is not supported by the historical data."
            },
            "keywords": [
                "metrics-based estimation",
                "testing-to-development ratio",
                "test effort"
            ],
            "examTip": "Derive and scale the metrics-based ratio.",
            "memoryAid": "Dev 120 -> test 40; dev 240 -> test 80."
        }
    ],
    "exam9": [
        {
            "id": "Q004",
            "explanation": "The fifth CTFL v4.0.1 testing principle is \"Tests wear out\": if the same tests are repeated many times, they become increasingly ineffective in detecting new defects. To overcome this effect, existing tests and test data may need to be modified and new tests may need to be written, although in some cases repeating the same tests has a beneficial outcome, for example in automated regression testing. This principle was called the \"tests wear out principle\" in older CTFL material, but that wording is not used in v4.0.1.",
            "examTip": "In CTFL v4.0.1 principle 5 is called \"Tests wear out\". \"Tests wear out\" is the older name for the same idea."
        },
        {
            "id": "Q997",
            "statement": "For a feature, testers estimate 8 hours optimistically, 14 hours most likely and 20 hours pessimistically. What is the expected testing effort using three-point weighted estimation?",
            "options": {
                "A": "16 hours",
                "B": "14 hours",
                "C": "12 hours",
                "D": "20 hours"
            },
            "explanation": "Using E=(8+4×14+20)/6=(8+56+20)/6=84/6=14 hours.",
            "correctFeedback": "✅ Correct: Using E=(8+4×14+20)/6=(8+56+20)/6=84/6=14 hours.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: The weighted sum is 84, not 96.",
                "C": "❌ Incorrect: The weighted result is not 12.",
                "D": "❌ Incorrect: The pessimistic estimate alone is not the expected effort."
            },
            "optionExplanations": {
                "A": "The weighted sum is 84, not 96.",
                "B": "Correct: Using E=(8+4×14+20)/6=(8+56+20)/6=84/6=14 hours.",
                "C": "The weighted result is not 12.",
                "D": "The pessimistic estimate alone is not the expected effort."
            },
            "keywords": [
                "test effort estimation",
                "applied estimation",
                "project metrics"
            ],
            "examTip": "Apply the 1:4:1 weighting for optimistic:most likely:pessimistic values.",
            "memoryAid": "8+4×14+20=84; /6=14."
        },
        {
            "id": "Q259",
            "statement": "An insurance discount applies only when age > 25, no prior claims, and license held >= 2 years. To check that the license-tenure condition is enforced independently, which test case is MOST suitable?",
            "options": {
                "A": "Age 30; no claims; license 4 years; expect discount",
                "B": "Age 24; no claims; license 4 years; expect no discount",
                "C": "Age 30; prior claim; license 4 years; expect no discount",
                "D": "Age 30; no claims; license 1 year; expect no discount"
            },
            "explanation": "All other discount conditions are satisfied in option D, so the outcome isolates the license-tenure condition and verifies the decision rule that tenure under two years prevents the discount.",
            "correctFeedback": "✅ Correct: All other discount conditions are satisfied in option D, so the outcome isolates the license-tenure condition and verifies the decision rule that tenure under two years prevents the discount.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: Every condition is favorable; this does not isolate the tenure rejection rule.",
                "B": "❌ Incorrect: The age rule fails, so the test cannot isolate license tenure.",
                "C": "❌ Incorrect: The claims rule fails, so the test cannot isolate license tenure."
            },
            "optionExplanations": {
                "A": "Every condition is favorable; this does not isolate the tenure rejection rule.",
                "B": "The age rule fails, so the test cannot isolate license tenure.",
                "C": "The claims rule fails, so the test cannot isolate license tenure.",
                "D": "Correct: All other discount conditions are satisfied in option D, so the outcome isolates the license-tenure condition and verifies the decision rule that tenure under two years prevents the discount."
            },
            "keywords": [
                "decision table testing",
                "conditions",
                "test rules"
            ],
            "examTip": "In a decision table, change one condition while keeping the others favorable when testing its individual effect.",
            "memoryAid": "Tenure false; age and claims true -> no discount."
        }
    ],
    "exam10": [
        {
            "id": "Q1006",
            "options": {
                "A": "Test monitoring",
                "B": "Test planning",
                "C": "Test completion",
                "D": "Test control"
            }
        },
        {
            "id": "Q1012",
            "statement": "A legacy system is being decommissioned. Its historical customer records must be migrated to a replacement application and verified for completeness and accuracy. Which maintenance-testing activity most directly addresses this requirement?",
            "explanation": "Retirement can trigger maintenance testing. Since the scenario explicitly requires transferring historical records to another application, data migration testing verifies the transferred records are complete and accurate. Retirement itself may alternatively require archive, restore and retrieval testing when data is retained in an archive.",
            "correctFeedback": "✅ Correct: Data migration testing validates the accuracy and completeness of records transferred during retirement.",
            "optionExplanations": {
                "C": "Data migration testing verifies the moved records for accuracy and completeness.",
                "A": "This can be a trigger for maintenance testing, but it is not an actual type of testing",
                "B": "Regression testing may be relevant to affected systems, but it is not the specific test activity for moving or archiving the retiring system data.",
                "D": "this is of no use for a system being retired"
            },
            "memoryAid": "Retirement: archive/retrieve when retained; migration tests when records are transferred."
        },
        {
            "id": "Q1014",
            "statement": "How can continuous integration support a shift-left testing approach?",
            "options": {
                "A": "It gets the code to production faster",
                "B": "It allows the developers to continuously integrate their code",
                "C": "By executing component tests and static analysis automatically on early code integrations",
                "D": "It elevates the testers as the owners of quality"
            },
            "explanation": "Shift left means performing testing activities earlier in the SDLC. Running component tests and static analysis as soon as developers integrate changes into CI gives earlier feedback. CI/CD alone does not guarantee that testing has shifted left.",
            "correctFeedback": "✅ Correct: Early automated component tests and static analysis in CI provide fast feedback and support shift left.",
            "optionExplanations": {
                "C": "Executing component tests and static analysis early in CI is a practical shift-left implementation.",
                "A": "this is not a shift-left concept. B is true of CI/CD implementations but does not shift-left the testing",
                "B": "This option is not the correct answer (see the official explanation).",
                "D": "in a good CI/CD implementation, everyone owns quality"
            },
            "examTip": "CI enables shift left when checks such as component tests and static analysis run early, not merely because a pipeline exists.",
            "memoryAid": "Early CI checks = shift-left feedback."
        },
        {
            "id": "Q1030",
            "explanation": "The pass/fail outcome is generated and logged as tests are executed. Test monitoring subsequently collects and analyzes such execution metrics, and test reports communicate them to stakeholders.",
            "correctFeedback": "✅ Correct: Passed-test outcomes are recorded during test execution and subsequently used for monitoring and reporting.",
            "optionExplanations": {
                "C": "Pass/fail outcomes originate during execution; they are then aggregated by test monitoring.",
                "A": "This option is not the correct answer (see the official explanation).",
                "B": "This option is not the correct answer (see the official explanation).",
                "D": "This option is not the correct answer (see the official explanation)."
            },
            "examTip": "Execution produces results; monitoring gathers metrics; reporting communicates them."
        }
    ],
    "exam12": [
        {
            "id": "Q1115",
            "statement": "Three-point test-effort estimates are optimistic 6 days, most likely 9 days and pessimistic 18 days. Using the CTFL weighted formula, what is the expected effort?",
            "options": {
                "A": "11 days",
                "B": "9 days",
                "C": "10 days",
                "D": "12 days"
            },
            "explanation": "The three-point weighted estimate is (6 + 4×9 + 18)/6 = 60/6 = 10 days.",
            "correctFeedback": "✅ Correct: The three-point weighted estimate is (6 + 4×9 + 18)/6 = 60/6 = 10 days.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: An equal-weight or incorrect sum does not apply the weighted formula.",
                "B": "❌ Incorrect: The most likely estimate alone is not the three-point result.",
                "D": "❌ Incorrect: The weighted sum is 60, not 72."
            },
            "optionExplanations": {
                "A": "An equal-weight or incorrect sum does not apply the weighted formula.",
                "B": "The most likely estimate alone is not the three-point result.",
                "C": "Correct: The three-point weighted estimate is (6 + 4×9 + 18)/6 = 60/6 = 10 days.",
                "D": "The weighted sum is 60, not 72."
            },
            "keywords": [
                "test effort estimation",
                "applied estimation",
                "project metrics"
            ],
            "examTip": "Apply E=(a+4m+b)/6; do not just recognize the formula.",
            "memoryAid": "6, 9, 18 -> E=10 days."
        },
        {
            "id": "Q1117",
            "statement": "A tester sees an Android banking app crash on the third consecutive failed biometric authentication attempt. Which Steps to Reproduce field is MOST useful in the report?",
            "options": {
                "A": "Android 15, build 7.2; start logged out; fail biometric authentication three times; observe app crash; attach crash log",
                "B": "Try things until the app crashes",
                "C": "The authentication module is badly written",
                "D": "Set the defect status to Closed before retesting"
            },
            "explanation": "The report records the platform/build, precondition, exact sequence, observable failure and supporting logs; these enable another tester or developer to reproduce the failure.",
            "correctFeedback": "✅ Correct: The report records the platform/build, precondition, exact sequence, observable failure and supporting logs; these enable another tester or developer to reproduce the failure.",
            "incorrectFeedback": {
                "B": "❌ Incorrect: It does not define a repeatable action sequence.",
                "C": "❌ Incorrect: This is an unsupported technical attribution rather than reproduction steps.",
                "D": "❌ Incorrect: Changing status is unrelated to the missing reproducibility information."
            },
            "optionExplanations": {
                "A": "Correct: The report records the platform/build, precondition, exact sequence, observable failure and supporting logs; these enable another tester or developer to reproduce the failure.",
                "B": "It does not define a repeatable action sequence.",
                "C": "This is an unsupported technical attribution rather than reproduction steps.",
                "D": "Changing status is unrelated to the missing reproducibility information."
            },
            "keywords": [
                "defect reporting",
                "reproducibility",
                "actual vs expected results"
            ],
            "examTip": "For reproducible defect reports, record the affected build/device, starting state, ordered actions, observed result and expected result.",
            "memoryAid": "3 failed biometrics + build + crash log."
        },
        {
            "id": "Q1118",
            "statement": "A test suite has T1 (high risk; no prerequisite), T2 (high risk; depends on T1), T3 (medium risk; independent), and T4 (low risk; independent). The team can execute only two tests. Which sequence BEST applies risk-based prioritization while satisfying dependencies?",
            "options": {
                "A": "T4, T3",
                "B": "T1, T2",
                "C": "T2, T1",
                "D": "T3, T4"
            },
            "explanation": "Running T1 then T2 exercises the two high-risk tests in a feasible order. T2 cannot execute first because it depends on T1.",
            "correctFeedback": "✅ Correct: Running T1 then T2 exercises the two high-risk tests in a feasible order. T2 cannot execute first because it depends on T1.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: Both selected tests are lower risk than T1 and T2.",
                "C": "❌ Incorrect: T2 cannot be executed until T1 has run.",
                "D": "❌ Incorrect: It skips both high-risk tests."
            },
            "optionExplanations": {
                "A": "Both selected tests are lower risk than T1 and T2.",
                "B": "Correct: Running T1 then T2 exercises the two high-risk tests in a feasible order. T2 cannot execute first because it depends on T1.",
                "C": "T2 cannot be executed until T1 has run.",
                "D": "It skips both high-risk tests."
            },
            "keywords": [
                "risk-based prioritization",
                "test dependencies",
                "test execution order"
            ],
            "examTip": "Combine risk priority with execution dependencies, rather than just stating the policy.",
            "memoryAid": "High-risk T1 -> dependent high-risk T2."
        }
    ],
    "exam13": [
        {
            "id": "Q1123",
            "incorrectFeedback": {
                "A": "❌ Incorrect: Defect clustering refers to bugs concentrating in specific modules.",
                "B": "❌ Incorrect: Early testing refers to Shift Left.",
                "D": "❌ Incorrect: Tests wear out refers to repeating identical tests losing defect-finding effectiveness."
            },
            "optionExplanations": {
                "A": "Defect clustering refers to bugs concentrating in specific modules.",
                "B": "Early testing refers to Shift Left.",
                "C": "Absence-of-defects fallacy: Fixing bugs doesn't guarantee success if the software fails to meet business needs.",
                "D": "Tests wear out refers to repeating identical tests losing defect-finding effectiveness."
            }
        },
        {
            "id": "Q1128",
            "keywords": [
                "tests wear out",
                "testing principles",
                "regression suite",
                "test evolution"
            ],
            "memoryAid": "Tests wear out: vary and improve tests as existing checks become less effective at revealing new defects."
        },
        {
            "id": "Q1129",
            "options": {
                "A": "Development activities generally follow successive phases, while reviews and test analysis/design can start during corresponding early phases",
                "B": "Requirement analysis, design, coding, and testing activities overlap continuously in 2-week iterations.",
                "C": "Working software is delivered to production every 2 days via automated CI/CD pipelines.",
                "D": "Test analysis and design occur strictly during post-release operations."
            },
            "explanation": "In sequential SDLC models, major development activities follow a more sequential progression and executable dynamic tests generally occur later. Testing still starts early: testers can review requirements, analyze the test basis and design tests during the corresponding development activities.",
            "correctFeedback": "✅ Correct: A sequential SDLC allows early static testing and test design, although dynamic execution generally occurs later.",
            "optionExplanations": {
                "A": "Sequential development does not prohibit early reviews and test analysis/design.",
                "B": "Overlapping iterative phases describe Agile/iterative lifecycles.",
                "C": "Continuous deployment every 2 days describes DevOps.",
                "D": "Test analysis occurs throughout the development lifecycle, never restricted to post-release."
            },
            "examTip": "Sequential model ≠ testing starts only after coding.",
            "memoryAid": "Sequential development; early test preparation."
        },
        {
            "id": "Q1143",
            "statement": "Consider: IF A > 10 THEN PRINT 'High' ENDIF; IF B > 20 THEN PRINT 'Large' ELSE PRINT 'Small' ENDIF. What is the MINIMUM number of test cases needed for 100% statement coverage?",
            "options": {
                "A": "1",
                "B": "3",
                "C": "2",
                "D": "4"
            },
            "explanation": "Two tests suffice: (A=15,B=25) executes 'High' and 'Large'; (A=15,B=5) executes 'High' and 'Small'. No single test can execute both mutually exclusive prints 'Large' and 'Small'.",
            "correctFeedback": "✅ Correct: Two tests execute every PRINT statement; both branches of the second decision cannot run in one test.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: One test cannot execute both the Large and Small statements.",
                "B": "❌ Incorrect: A third test is unnecessary after both second-decision outcomes are covered.",
                "D": "❌ Incorrect: Four test cases are not required for statement coverage here."
            },
            "optionExplanations": {
                "A": "One test misses either Large or Small.",
                "B": "Three tests would be more than the minimum.",
                "C": "Two tests execute High, Large and Small across the suite.",
                "D": "Four tests exceed the minimum."
            },
            "examTip": "For statement coverage, cover mutually exclusive executable branches across separate tests.",
            "memoryAid": "High+Large; High+Small -> 2 tests."
        },
        {
            "id": "Q1146",
            "statement": "A tester is given a high-level checklist of common installation and security pitfalls derived from past releases. For each checklist item, the tester designs and executes appropriate checks and records the results. Which technique is being applied?",
            "explanation": "Checklist-based testing is an experience-based technique guided by a checklist of test conditions or aspects to verify. The checklist is not necessarily a detailed, pre-written execution script; testers use it to design, execute and adapt appropriate tests.",
            "correctFeedback": "✅ Correct: A high-level checklist guiding test design and execution is checklist-based testing.",
            "optionExplanations": {
                "A": "Exploratory testing combines learning, design, and execution and may use charters or checklists. Here the defining feature is executing tests guided by a predefined checklist.",
                "B": "The tester derives and executes checks from a high-level list of relevant items.",
                "C": "Equivalence partitioning uses input ranges.",
                "D": "Branch testing uses code structure."
            },
            "memoryAid": "Checklist = high-level items to test, not necessarily scripted test cases."
        },
        {
            "id": "Q1148",
            "statement": "In an ATDD workshop, an acceptance criterion states: \"A transfer above the daily limit must be rejected without changing either account balance.\" An account has $400 remaining under its daily limit. Which acceptance test should the team specify BEFORE coding?",
            "options": {
                "A": "Transfer $100 and verify it succeeds, without checking balances",
                "B": "Transfer $500 and verify it succeeds",
                "C": "Check only that the transfer button appears",
                "D": "Transfer $500; expect rejection and both balances unchanged"
            },
            "explanation": "The specified pre-implementation test derives directly from the acceptance criterion. The $500 transfer exceeds the $400 remaining limit and must be rejected without any balance change.",
            "correctFeedback": "✅ Correct: The specified pre-implementation test derives directly from the acceptance criterion. The $500 transfer exceeds the $400 remaining limit and must be rejected without any balance change.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: A permitted transfer does not test rejection above the remaining daily limit.",
                "B": "❌ Incorrect: Success contradicts the rejection requirement.",
                "C": "❌ Incorrect: Button visibility does not test the business rule."
            },
            "optionExplanations": {
                "A": "A permitted transfer does not test rejection above the remaining daily limit.",
                "B": "Success contradicts the rejection requirement.",
                "C": "Button visibility does not test the business rule.",
                "D": "Correct: The specified pre-implementation test derives directly from the acceptance criterion. The $500 transfer exceeds the $400 remaining limit and must be rejected without any balance change."
            },
            "keywords": [
                "ATDD",
                "acceptance criteria",
                "acceptance test cases"
            ],
            "examTip": "ATDD: create concrete business-readable acceptance tests with stimulus and expected results before implementation.",
            "memoryAid": "Remaining allowance $400, transfer $500 -> rejected; balances unchanged."
        },
        {
            "id": "Q1154",
            "statement": "During Wideband Delphi, three experts independently estimate 10, 15 and 20 test-days. After discussing the differences, all three independently re-estimate 16 days. Which estimate should the team use once consensus is reached?",
            "options": {
                "A": "10 days, the lowest initial estimate",
                "B": "16 days, the final consensus estimate",
                "C": "20 days, the highest initial estimate",
                "D": "45 days, the sum of initial estimates"
            },
            "explanation": "Wideband Delphi uses independent expert estimates, discussion of outliers and renewed estimates until consensus. The final agreed value is 16 days.",
            "correctFeedback": "✅ Correct: Wideband Delphi uses independent expert estimates, discussion of outliers and renewed estimates until consensus. The final agreed value is 16 days.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: The smallest first estimate was not agreed after discussion.",
                "C": "❌ Incorrect: The largest first estimate was not agreed after discussion.",
                "D": "❌ Incorrect: Summing independent expert estimates is not how the team sets consensus."
            },
            "optionExplanations": {
                "A": "The smallest first estimate was not agreed after discussion.",
                "B": "Correct: Wideband Delphi uses independent expert estimates, discussion of outliers and renewed estimates until consensus. The final agreed value is 16 days.",
                "C": "The largest first estimate was not agreed after discussion.",
                "D": "Summing independent expert estimates is not how the team sets consensus."
            },
            "keywords": [
                "Wideband Delphi",
                "consensus estimation",
                "test effort"
            ],
            "examTip": "After each Delphi round, use the consensus estimate when it is established.",
            "memoryAid": "10/15/20 -> discuss -> 16/16/16 -> 16."
        },
        {
            "id": "Q1155",
            "statement": "In a payment application, rounding one cent incorrectly on every transfer is classified as HIGH impact by the agreed severity scale. The fix is scheduled for the next release. Which defect report BEST records the severity objectively?",
            "options": {
                "A": "Severity LOW because the individual difference is only one cent",
                "B": "Severity MEDIUM because next-release fixes must always be medium",
                "C": "Severity HIGH per the agreed impact scale; include reproducible transfer amounts, expected and actual rounded values, and the affected build",
                "D": "Severity is unnecessary when priority is recorded"
            },
            "explanation": "Severity reflects impact according to the agreed scale, not the scheduled fix date. A report should record the high severity and objective data demonstrating the observed result.",
            "correctFeedback": "✅ Correct: Severity reflects impact according to the agreed scale, not the scheduled fix date. A report should record the high severity and objective data demonstrating the observed result.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: This conflicts with the agreed scale and may underestimate repeated financial impact.",
                "B": "❌ Incorrect: The planned fix date is a priority/scheduling issue, not the severity definition.",
                "D": "❌ Incorrect: Severity and priority are distinct useful report fields."
            },
            "optionExplanations": {
                "A": "This conflicts with the agreed scale and may underestimate repeated financial impact.",
                "B": "The planned fix date is a priority/scheduling issue, not the severity definition.",
                "C": "Correct: Severity reflects impact according to the agreed scale, not the scheduled fix date. A report should record the high severity and objective data demonstrating the observed result.",
                "D": "Severity and priority are distinct useful report fields."
            },
            "keywords": [
                "defect reporting",
                "reproducibility",
                "actual vs expected results"
            ],
            "examTip": "Use the agreed impact scale and document the numerical failure in the report.",
            "memoryAid": "High impact ≠ urgent fix date; show expected versus actual."
        },
        {
            "id": "Q1160",
            "statement": "After adopting UI test automation, a team discovers that updating scripts after every user-interface change takes more time than expected. Which risk does this BEST illustrate?",
            "options": {
                "A": "Automated execution necessarily proves the absence of defects",
                "B": "Tools remove the need for test design",
                "C": "Automation means test scripts never need maintenance",
                "D": "Underestimated ongoing effort and cost of maintaining automated tests"
            },
            "explanation": "The maintenance of automated scripts and adjustments to manual processes need effort. Underestimating that effort is an identified test-automation risk in CTFL 6.2.",
            "correctFeedback": "✅ Correct: The maintenance of automated scripts and adjustments to manual processes need effort. Underestimating that effort is an identified test-automation risk in CTFL 6.2.",
            "incorrectFeedback": {
                "A": "❌ Incorrect: Testing does not prove the absence of defects.",
                "B": "❌ Incorrect: Automation does not eliminate human test design.",
                "C": "❌ Incorrect: Scripts often require updates as the system evolves."
            },
            "optionExplanations": {
                "A": "Testing does not prove the absence of defects.",
                "B": "Automation does not eliminate human test design.",
                "C": "Scripts often require updates as the system evolves.",
                "D": "Correct: The maintenance of automated scripts and adjustments to manual processes need effort. Underestimating that effort is an identified test-automation risk in CTFL 6.2."
            },
            "keywords": [
                "test automation",
                "benefits",
                "risks"
            ],
            "examTip": "Include the total cost of script maintenance, not only initial tool cost.",
            "memoryAid": "UI changes -> script maintenance -> automation risk."
        }
    ]
};

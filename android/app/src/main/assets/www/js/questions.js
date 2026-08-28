window.questionSets = {
    "exam1": [
        {
            "id": "Q036",
            "statement": "Which of the following best describes the test completion activity?",
            "options": {
                "A": "Writing the final line of code for the application",
                "B": "Deploying the application to production",
                "C": "Starting the next iteration of testing",
                "D": "Archiving testware and evaluating the test process for lessons learned"
            },
            "correctAnswer": "D",
            "explanation": "Test completion activities include archiving testware, handing over test artifacts to maintenance teams, evaluating the test process, documenting lessons learned, and closing defect reports. This marks the formal end of the testing effort for a given test level or project.",
            "whyWrong": "Deploying to production is not a testing activity; it is an operations activity.",
            "optionExplanations": {
                "A": "Code completion is a development activity.",
                "B": "Deployment is an operations or release management activity.",
                "C": "Starting the next iteration is a planning activity, not test completion.",
                "D": "Archiving, evaluation, and lessons learned are key test completion activities."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.1",
            "learningObjective": "FL-1.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test completion",
                "test process",
                "lessons learned"
            ],
            "examTip": "Test completion = archive, evaluate, learn, and close.",
            "memoryAid": "Completion = Clean up, Learn, and Move on."
        },
        {
            "id": "Q081",
            "statement": "Which of the following best describes the role of testing in software quality?",
            "options": {
                "A": "Testing provides information about the quality of the software and the risk of failure",
                "B": "Testing guarantees the software is free from all defects before release",
                "C": "Testing is the final phase of development and only checks functionality",
                "D": "Testing is only necessary when developers cannot write correct code"
            },
            "correctAnswer": "A",
            "explanation": "Testing provides information about the quality of the software product and supports informed decision-making by stakeholders. It cannot guarantee the absence of defects, but rather provides visibility into the quality level and residual risks to support stakeholder decisions.",
            "whyWrong": "Testing cannot guarantee defect-free software; it can only reveal the presence of defects and provide quality information to support informed decision-making.",
            "optionExplanations": {
                "A": "Testing reveals defects and provides stakeholders with information to support informed decisions about quality levels and residual risks.",
                "B": "Exhaustive testing is impossible; testing cannot prove the absence of defects.",
                "C": "Testing should start early in the SDLC and covers both functional and non-functional aspects.",
                "D": "Testing is a professional discipline needed regardless of developer skill level."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1.1",
            "learningObjective": "FL-1.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "testing purpose",
                "quality information",
                "risk of failure"
            ],
            "examTip": "Testing provides information and reveals defects; it does not prove correctness.",
            "memoryAid": "Testing = quality information provider, not correctness certifier."
        },
        {
            "id": "Q281",
            "statement": "A developer claims that \\'debugging is just another name for testing.\\' Which response best clarifies the distinction?",
            "options": {
                "A": "Both activities share the same goal of finding defects",
                "B": "Testing reveals failures; debugging identifies and removes the root causes of those failures",
                "C": "Debugging is performed only after a system is released",
                "D": "Testing is always automated while debugging is always manual"
            },
            "correctAnswer": "B",
            "explanation": "Testing is a systematic process of revealing failures through observation. Debugging is a development activity focused on locating the root cause of a known failure and removing the defect. They are complementary but distinct activities with different objectives and performers.",
            "whyWrong": "Testing and debugging are not the same; testing finds failures, debugging fixes the underlying defect.",
            "optionExplanations": {
                "A": "Testing finds failures to uncover defects; debugging fixes known defects. They are not the same.",
                "B": "Testing reveals failures through systematic execution; debugging traces the failure to its root cause and removes the defect.",
                "C": "Debugging can occur at any point in the lifecycle when a defect is identified, not just after release.",
                "D": "Both testing and debugging can be performed manually or with tool support."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1.2",
            "learningObjective": "FL-1.1.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "testing",
                "debugging",
                "defects"
            ],
            "examTip": "Testing finds failures; debugging fixes the root cause.",
            "memoryAid": "Testing = detective; Debugging = surgeon."
        },
        {
            "id": "Q288",
            "statement": "After a production incident where customer data was lost, the team traces the problem to an inadequate backup process design. The inadequate backup design is the:",
            "options": {
                "A": "Defect",
                "B": "Failure",
                "C": "Root cause",
                "D": "Error"
            },
            "correctAnswer": "A",
            "explanation": "The inadequate backup process design is a defect (a flaw in a work product, in this case the design/documentation). The root cause is the fundamental reason the inadequate design was produced (e.g., lack of training, time pressure, or absence of review). The failure is the observable data loss; the error is the human mistake that introduced the defect.",
            "whyWrong": "A defect is a flaw in a work product; the root cause is the deeper reason the defect was introduced (e.g., lack of training or time pressure).",
            "optionExplanations": {
                "A": "The inadequate backup process design is a defect — a flaw in the design work product.",
                "B": "The failure is the observable data loss, not the underlying design flaw.",
                "C": "The root cause is the deeper reason the inadequate design was produced (e.g., lack of training); the design flaw itself is the defect.",
                "D": "The error is the human mistake that produced the inadequate design, not the observable behavior."
            },
            "chapter": 1,
            "section": "1.2",
            "subsection": "1.2.3",
            "learningObjective": "FL-1.2.3",
            "kLevel": "K2",
            "difficulty": "Hard",
            "keywords": [
                "root cause analysis",
                "defect prevention",
                "process improvement"
            ],
            "examTip": "Root cause is the deepest underlying reason.",
            "memoryAid": "Fix the root cause to prevent recurrence."
        },
        {
            "id": "Q166",
            "statement": "In a project using the whole-team approach, what is the role of the tester?",
            "options": {
                "A": "The tester collaborates with all team members and shares responsibility for quality with developers and others",
                "B": "The tester is solely responsible for all quality activities",
                "C": "The tester only executes manual test cases defined by developers",
                "D": "The tester manages the defect tracking system without participating in testing"
            },
            "correctAnswer": "A",
            "explanation": "In the whole-team approach, quality is a shared responsibility. Testers collaborate with developers, product owners, and other stakeholders to achieve shared quality ownership. They contribute to requirements refinement, test design, and provide a testing perspective throughout the development process.",
            "whyWrong": "Quality is a shared responsibility, not solely the tester's burden.",
            "optionExplanations": {
                "A": "The whole-team approach means everyone shares responsibility for quality.",
                "B": "Quality is everyone's responsibility, not just the tester's.",
                "C": "Testers do more than manual execution; they design tests and collaborate.",
                "D": "Testers are active participants, not just tool administrators."
            },
            "chapter": 1,
            "section": "1.5",
            "subsection": "1.5.2",
            "learningObjective": "FL-1.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "whole-team approach",
                "tester role",
                "collaboration"
            ],
            "examTip": "Whole-team = quality is everyone's job, testers are quality advocates.",
            "memoryAid": "Whole-team = all hands on quality."
        },
        {
            "id": "Q282",
            "statement": "A tester executes a test case that causes the application to crash. The developer then examines the code, finds an unhandled null pointer exception, and corrects it. Which sequence best describes the activities?",
            "options": {
                "A": "Debugging then testing",
                "B": "Root cause analysis then debugging",
                "C": "Testing then configuration management",
                "D": "Testing then debugging"
            },
            "correctAnswer": "D",
            "explanation": "The tester performed testing (executing a test case that revealed a failure). The developer then performed debugging (locating and fixing the defect). Testing always precedes debugging in this scenario, as debugging requires a known failure or defect to investigate.",
            "whyWrong": "Root cause analysis is part of debugging, not a separate activity that precedes it.",
            "optionExplanations": {
                "A": "Testing came first (the test triggered the failure), not debugging.",
                "B": "Root cause analysis is part of debugging, not a prior activity.",
                "C": "Configuration management is unrelated to finding and fixing the defect.",
                "D": "Testing exposed the failure; debugging found and fixed the null pointer."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1.2",
            "learningObjective": "FL-1.1.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "testing sequence",
                "debugging",
                "defect lifecycle"
            ],
            "examTip": "Testing must happen before debugging can start.",
            "memoryAid": "Test first, debug second."
        },
        {
            "id": "Q163",
            "statement": "What is the purpose of root cause analysis in the context of defect management?",
            "options": {
                "A": "To determine which test cases failed during execution",
                "B": "To assign blame to the person who introduced the defect",
                "C": "To identify the underlying cause of defects so that process improvements can prevent recurrence",
                "D": "To close defect reports as quickly as possible"
            },
            "correctAnswer": "C",
            "explanation": "Root cause analysis aims to identify the fundamental reason why a defect was introduced. By understanding the root cause, organizations can implement process improvements to prevent similar defects from occurring in future projects, supporting continuous improvement.",
            "whyWrong": "Root cause analysis is a constructive learning activity, not a blame assignment process.",
            "optionExplanations": {
                "A": "Identifying failed test cases is part of test execution analysis, not RCA.",
                "B": "RCA focuses on process improvement, not individual blame.",
                "C": "RCA identifies systemic causes to enable preventive actions and process improvement.",
                "D": "Closing reports quickly does not address prevention."
            },
            "chapter": 1,
            "section": "1.2",
            "subsection": "1.2.3",
            "learningObjective": "FL-1.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "root cause analysis",
                "defect prevention",
                "process improvement"
            ],
            "examTip": "Root cause analysis = find why, fix the process, prevent recurrence.",
            "memoryAid": "RCA = treat the cause, not just the symptom."
        },
        {
            "id": "Q070",
            "statement": "What is the purpose of test closure activities?",
            "options": {
                "A": "To close all defect reports without fixing them",
                "B": "To ensure all test artifacts are archived, lessons are learned, and testing is formally completed",
                "C": "To terminate the testing team",
                "D": "To move all test cases to the next project"
            },
            "correctAnswer": "B",
            "explanation": "Test closure activities formally conclude the testing effort. This includes finalizing and archiving test artifacts, handing over testware to maintenance teams, analyzing lessons learned, documenting project knowledge, finalizing completion reports, closing all defect reports appropriately, and ensuring reusable testware is handed over to interested parties.",
            "whyWrong": "Test closure is about completing testing properly, not terminating teams or ignoring defects.",
            "optionExplanations": {
                "A": "Defect reports should be resolved (fixed, deferred, or rejected), not just closed.",
                "B": "Archiving, lessons learned, and formal closure are the goals of test completion.",
                "C": "Test closure is about completing the work, not disbanding the team.",
                "D": "Artifacts are archived, not necessarily moved to other projects."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.1",
            "learningObjective": "FL-1.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test closure",
                "test completion",
                "lessons learned"
            ],
            "examTip": "Test closure = archive, evaluate, learn, and formally complete.",
            "memoryAid": "Closure = clean up, then close the book."
        },
        {
            "id": "Q141",
            "statement": "A tester executes a test case and observes that the actual output differs from the expected result. What has been found?",
            "options": {
                "A": "A failure",
                "B": "A fault",
                "C": "A root cause",
                "D": "An error"
            },
            "correctAnswer": "A",
            "explanation": "The tester observed an actual result that deviates from the expected result. According to the ISTQB glossary, a failure is an event in which a component or system does not perform a required function within specified limits. The observable incorrect behavior is the failure itself. The fault (defect) is the underlying cause in the code that may lead to a failure, but what the tester directly observed is a failure.",
            "whyWrong": "A fault (defect) is the underlying problem in the code, not the observable behavior. The tester observed a deviation during execution, which is a failure.",
            "optionExplanations": {
                "A": "Correct. A failure is the observable deviation of actual behavior from expected behavior during execution.",
                "B": "A fault (defect) is the underlying cause in the code that may produce a failure, but the tester observed the failure, not the fault.",
                "C": "Root cause is the fundamental reason for a defect, discovered through analysis after the failure is observed.",
                "D": "An error is a human mistake that introduced the defect; it is not what the tester observed."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1.1",
            "learningObjective": "FL-1.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "failure",
                "fault",
                "error",
                "defect"
            ],
            "examTip": "Remember the sequence: Error (human mistake) -> Defect (in code) -> Failure (observable behavior).",
            "memoryAid": "Error -> Defect -> Failure: Mistake causes bug causes crash."
        },
        {
            "id": "Q008",
            "statement": "A system that calculates employee bonuses has been tested and no defects were found. However, users report that the bonus calculations do not meet their business needs. Which testing principle does this illustrate?",
            "options": {
                "A": "Defect clustering",
                "B": "Early testing",
                "C": "Absence-of-errors fallacy",
                "D": "Pesticide paradox"
            },
            "correctAnswer": "C",
            "explanation": "The absence-of-errors fallacy states that finding and fixing defects does not guarantee that the system meets user needs. Even a system with no defects can be unusable or fail to satisfy customer requirements.",
            "whyWrong": "Defect clustering would mean many defects were found in a few modules, which is not the case here.",
            "optionExplanations": {
                "A": "Defect clustering means most defects are found in a small number of modules.",
                "B": "Early testing is about starting testing activities early in the lifecycle.",
                "C": "A defect-free system can still fail to meet stakeholder needs or business requirements.",
                "D": "The pesticide paradox concerns tests becoming ineffective over time."
            },
            "chapter": 1,
            "section": "1.3",
            "subsection": "1.3.1",
            "learningObjective": "FL-1.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "absence-of-errors fallacy",
                "testing principles",
                "user needs"
            ],
            "examTip": "If the system works but nobody wants it, think absence-of-errors fallacy.",
            "memoryAid": "Zero defects can still mean zero value."
        },
        {
            "id": "Q124",
            "statement": "A tester demonstrates strong curiosity by always asking questions about how features should work and what could go wrong. Which essential tester skill does this demonstrate?",
            "options": {
                "A": "Advanced project management skills",
                "B": "Analytical thinking and inquisitiveness",
                "C": "Professional certification in testing",
                "D": "Expert-level programming ability"
            },
            "correctAnswer": "B",
            "explanation": "Curiosity and inquisitiveness are essential traits for testers. A curious tester asks probing questions, explores edge cases, and challenges assumptions, which leads to more thorough testing and finding defects that others might miss.",
            "whyWrong": "Programming ability, project management, and certifications are not the primary skill demonstrated by curiosity.",
            "optionExplanations": {
                "A": "Project management focuses on planning and coordination, not inquisitiveness.",
                "B": "Curiosity and analytical thinking drive thorough investigation and defect discovery.",
                "C": "Certifications validate knowledge but do not replace curiosity.",
                "D": "Programming is a technical skill separate from curiosity."
            },
            "chapter": 1,
            "section": "1.5",
            "subsection": "1.5.1",
            "learningObjective": "FL-1.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "curiosity",
                "analytical thinking",
                "tester skills"
            ],
            "examTip": "Good testers are naturally curious and ask 'what if?' questions.",
            "memoryAid": "Curious tester = better defect finder."
        },
        {
            "id": "Q287",
            "statement": "A system shows an incorrect result after processing a transaction. Investigation reveals that an inadequate design decision led to an incorrect implementation in the code. Which statement correctly distinguishes the root cause from the defect?",
            "options": {
                "A": "The root cause is the incorrect result; the defect is the inadequate design decision",
                "B": "The root cause is the failure observed by the user",
                "C": "There is no difference between root cause and defect in this scenario",
                "D": "The root cause is the inadequate design decision; the defect is the incorrect implementation"
            },
            "correctAnswer": "D",
            "explanation": "The root cause is the fundamental reason the defect exists (here, the inadequate design decision). The defect is the specific flaw in the work product (the incorrect implementation). Note: the deeper root cause would be why the inadequate design decision was made (e.g., lack of training or time pressure); for this question the design decision is treated as the trigger that introduced the defect.",
            "whyWrong": "Root cause is the underlying reason; defect is the specific flaw present in the work product.",
            "optionExplanations": {
                "A": "The incorrect result is a failure, not a root cause.",
                "B": "The root cause is the reason behind the defect, not the observable failure.",
                "C": "Root cause and defect are related but distinct concepts.",
                "D": "The inadequate design decision (root cause in this scenario) led to the incorrect implementation (the defect)."
            },
            "chapter": 1,
            "section": "1.2",
            "subsection": "1.2.3",
            "learningObjective": "FL-1.2.3",
            "kLevel": "K2",
            "difficulty": "Hard",
            "keywords": [
                "root cause",
                "defect",
                "race condition",
                "failure"
            ],
            "examTip": "Root cause = why the defect exists; defect = what is wrong.",
            "memoryAid": "Root cause = reason; Defect = result."
        },
        {
            "id": "Q082",
            "statement": "A test execution reveals that the system displays an incorrect total in an invoice. The developer traces the issue to a calculation function and corrects the code. Which of the following pairs correctly matches the activities described?",
            "options": {
                "A": "Test execution and debugging",
                "B": "Test planning and code inspection",
                "C": "Debugging and requirements review",
                "D": "Static analysis and dynamic analysis"
            },
            "correctAnswer": "A",
            "explanation": "Test execution revealed a failure (incorrect total). The developer then debugged the code to find and fix the underlying defect. Testing and debugging are complementary but distinct activities.",
            "whyWrong": "Debugging is the development activity of locating and fixing the underlying cause of a known failure.",
            "optionExplanations": {
                "A": "Test execution revealed a failure; debugging locates the root cause and fixes the defect.",
                "B": "Test planning occurs before execution; code inspection is a static technique.",
                "C": "No requirements review occurred in this scenario.",
                "D": "This scenario involves dynamic testing and debugging, not static analysis."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1.2",
            "learningObjective": "FL-1.1.2",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "testing",
                "debugging",
                "root cause analysis"
            ],
            "examTip": "Testing reveals failures; debugging locates root causes and fixes defects.",
            "memoryAid": "Testing = find failure; Debugging = find cause and fix."
        },
        {
            "id": "Q247",
            "statement": "Which situation best shows a drawback of too much tester independence?",
            "options": {
                "A": "Testers become unable to find failures",
                "B": "Independent testers cannot use requirements",
                "C": "Developers are forbidden to debug",
                "D": "Developers may feel less responsibility for quality if testing is seen as only the test team's job"
            },
            "correctAnswer": "D",
            "explanation": "High independence can improve objectivity but may also cause isolation or reduced shared quality ownership if not managed well. Independence should never reduce collaboration between testers and developers.",
            "whyWrong": "High independence can improve objectivity but may also cause isolation or reduced shared quality ownership if not managed well.",
            "optionExplanations": {
                "A": "Independence can improve objectivity but does not prevent testers from finding failures.",
                "B": "Independent testers can and do use requirements; independence does not limit access to information.",
                "C": "Developers are not forbidden from debugging; independence is about who performs testing.",
                "D": "High independence can improve objectivity but may also cause isolation or reduced shared quality ownership if not managed well."
            },
            "chapter": 1,
            "section": "1.5",
            "subsection": "1.5.3",
            "learningObjective": "FL-1.5.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "independence",
                "drawbacks"
            ],
            "examTip": "Independence has benefits and risks.",
            "memoryAid": "Independence needs collaboration."
        },
        {
            "id": "Q241",
            "statement": "Which statement best describes validation in testing?",
            "options": {
                "A": "Debugging every observed failure",
                "B": "Checking whether the product satisfies user needs in its intended use",
                "C": "Checking only whether code follows naming standards",
                "D": "Counting the number of executed test cases"
            },
            "correctAnswer": "B",
            "explanation": "Validation asks whether the right product is being built for users and stakeholders, not only whether it matches a specification.",
            "whyWrong": "Debugging every observed failure (A): Debugging fixes defects; validation checks whether the right product is being built for users and stakeholders, not only whether it matches a specification.",
            "optionExplanations": {
                "A": "Debugging fixes defects; validation checks if the product meets user needs.",
                "B": "Validation asks whether the right product is being built for users and stakeholders, not only whether it matches a specification.",
                "C": "Code standards compliance is verification, not validation.",
                "D": "Counting test cases measures test execution progress, not validation."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1",
            "learningObjective": "FL-1.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "validation",
                "user needs"
            ],
            "examTip": "Validation is fitness for use.",
            "memoryAid": "Right product for users."
        },
        {
            "id": "Q293",
            "statement": "A requirement changes during development. The test manager is able to quickly identify all test cases affected by this change and report the potential impact on the test schedule. This is possible because of:",
            "options": {
                "A": "Automated test execution",
                "B": "Risk-based test prioritization",
                "C": "Traceability between test basis and test cases",
                "D": "Pairwise testing techniques"
            },
            "correctAnswer": "C",
            "explanation": "Traceability links between the test basis (e.g., requirements) and test work products (e.g., test cases) enable impact analysis when changes occur. The test manager can identify which tests must be updated, added, or removed when a requirement changes, supporting change management.",
            "whyWrong": "Traceability enables bidirectional tracking between requirements and tests, which is essential for impact analysis.",
            "optionExplanations": {
                "A": "Automation helps execution speed but does not link requirements to tests.",
                "B": "Prioritization helps execution order but not impact analysis.",
                "C": "Traceability provides the links needed to assess change impact.",
                "D": "Pairwise testing is a test design technique, unrelated to traceability."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.4",
            "learningObjective": "FL-1.4.4",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "traceability",
                "impact analysis",
                "requirements",
                "change management"
            ],
            "examTip": "Traceability connects requirements to tests for change impact.",
            "memoryAid": "Trace = connect requirements to tests."
        },
        {
            "id": "Q003",
            "statement": "Which of the following is a fundamental test principle?",
            "options": {
                "A": "All defects will be found if enough tests are executed",
                "B": "Testing should start as early as possible in the software development lifecycle",
                "C": "Automated testing eliminates the need for manual testing",
                "D": "Testing is only necessary after the code is complete"
            },
            "correctAnswer": "B",
            "explanation": "One of the seven fundamental testing principles is 'Early testing saves time and money.' Testing activities should start as early as possible in the SDLC to find defects when they are least expensive to fix.",
            "whyWrong": "The statement about all defects being found if enough tests are executed contradicts the principle of defect clustering and the impossibility of exhaustive testing.",
            "optionExplanations": {
                "A": "Exhaustive testing is impossible; no amount of testing can find all defects.",
                "B": "The principle of early testing states that testing should begin as early as possible.",
                "C": "Automation supports but does not replace manual testing.",
                "D": "This contradicts the 'early testing' principle."
            },
            "chapter": 1,
            "section": "1.3",
            "subsection": "1.3.1",
            "learningObjective": "FL-1.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "testing principles",
                "early testing",
                "SDLC"
            ],
            "examTip": "Memorize all seven testing principles for the exam.",
            "memoryAid": "7 principles: Early, Exhaustive impossible, Defect clustering, Pesticide paradox, Context dependent, Absence-of-errors fallacy, Testing shows presence."
        },
        {
            "id": "Q083",
            "statement": "A project manager argues that testing can be postponed until the system is fully developed because testing adds no value early in the project. Which counter-argument best supports the need for early testing?",
            "options": {
                "A": "Defects found earlier in the development lifecycle are significantly less expensive to fix than those found later",
                "B": "Developers prefer to have testers review their code from the start",
                "C": "Testing early allows testers to write more test cases",
                "D": "Early testing eliminates the need for acceptance testing"
            },
            "correctAnswer": "A",
            "explanation": "Early testing finds defects when they are cheapest to fix, reducing cost and supporting informed stakeholder decisions about quality.",
            "whyWrong": "While developers may appreciate early feedback, the primary economic argument is the significantly lower cost of fixing early defects.",
            "optionExplanations": {
                "A": "Early defect detection significantly reduces cost of quality. This is the key economic argument.",
                "B": "This is a secondary benefit, not the primary economic argument.",
                "C": "The goal is not just more test cases, but earlier and cheaper defect detection.",
                "D": "Early testing complements but does not replace acceptance testing."
            },
            "chapter": 1,
            "section": "1.2",
            "subsection": "1.2.1",
            "learningObjective": "FL-1.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "early testing",
                "cost of defects",
                "economics of testing"
            ],
            "examTip": "The earlier a defect is found, the cheaper it is to fix. This is the key argument for early testing.",
            "memoryAid": "Early test = cheap fix; Late test = expensive fix."
        },
        {
            "id": "Q243",
            "statement": "A team starts reviews during backlog refinement and finds missing acceptance criteria before development. Which testing principle is demonstrated?",
            "options": {
                "A": "Testing is exhaustive",
                "B": "Defect absence proves quality",
                "C": "Automation replaces reviews",
                "D": "Early testing saves time and money"
            },
            "correctAnswer": "D",
            "explanation": "Finding defects early in requirements or user stories usually reduces rework cost compared with finding them after implementation.",
            "whyWrong": "Testing is exhaustive (A): Finding defects early in requirements or user stories usually reduces rework ...; Defect absence proves quality (B): Finding defects early in requirements or user stories usually reduces rework ...; Automation replaces reviews (C): Finding defects early in requirements or user stories usually reduces rework ...",
            "optionExplanations": {
                "A": "Exhaustive testing is impossible, regardless of when testing starts.",
                "B": "Absence-of-errors fallacy means zero defects do not guarantee user satisfaction.",
                "C": "Automation supports but does not replace reviews or other manual activities.",
                "D": "Finding defects early in requirements or user stories usually reduces rework cost compared with finding them after implementation."
            },
            "chapter": 1,
            "section": "1.3",
            "subsection": "1.3.1",
            "learningObjective": "FL-1.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "early testing",
                "reviews"
            ],
            "examTip": "Early defects are cheaper to fix.",
            "memoryAid": "Earlier is cheaper."
        },
        {
            "id": "Q202",
            "statement": "During test execution a tester observes that a shopping cart total is wrong only when a coupon and gift card are both applied. What is the observable incorrect behavior called?",
            "options": {
                "A": "Error",
                "B": "Root cause",
                "C": "Failure",
                "D": "Defect"
            },
            "correctAnswer": "C",
            "explanation": "A failure is the externally visible incorrect behavior that occurs when a defect is executed under specific conditions.",
            "whyWrong": "Error (A): A failure is the externally visible incorrect behavior that occurs when a def...; Root cause (B): A failure is the externally visible incorrect behavior that occurs when a def...; Defect (D): A failure is the externally visible incorrect behavior that occurs when a def...",
            "optionExplanations": {
                "A": "An error is a human mistake that may introduce a defect; the observed incorrect behavior is the failure, not the error.",
                "B": "Root cause is the fundamental reason for a defect, discovered through analysis after the failure is observed.",
                "C": "A failure is the externally visible incorrect behavior that occurs when a defect is executed under specific conditions.",
                "D": "A defect (fault) is the underlying imperfection in the work product that causes the failure when executed."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1.1",
            "learningObjective": "FL-1.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "failure",
                "defect",
                "error"
            ],
            "examTip": "Observable behavior is a failure.",
            "memoryAid": "Failure is what users see."
        },
        {
            "id": "Q207",
            "statement": "What is a likely benefit of independent testing?",
            "options": {
                "A": "Removal of all project communication needs",
                "B": "Guarantee that more defects will be fixed",
                "C": "Elimination of developer testing",
                "D": "Reduced author bias when evaluating the test object"
            },
            "correctAnswer": "D",
            "explanation": "Independence can increase objectivity because people who did not create the work product may notice different defects.",
            "whyWrong": "Removal of all project communication needs (A): Independence can increase objectivity because people who did not create the w...; Guarantee that more defects will be fixed (B): Independence can increase objectivity because people who did not create the w...",
            "optionExplanations": {
                "A": "Independence does not remove the need for communication; collaboration is always required.",
                "B": "Independence does not guarantee more defects will be fixed; that depends on project priorities.",
                "C": "Developer testing is still needed; independence complements, not replaces it.",
                "D": "Independence reduces author bias because people who did not create the work product may notice different defects."
            },
            "chapter": 1,
            "section": "1.5",
            "subsection": "1.5.1",
            "learningObjective": "FL-1.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "independent testing",
                "bias"
            ],
            "examTip": "Independence improves objectivity, not guarantees.",
            "memoryAid": "Fresh eyes find different issues."
        },
        {
            "id": "Q086",
            "statement": "Which of the following is considered testware produced during the test process?",
            "options": {
                "A": "The database schema of the production system",
                "B": "Test scripts and test data files",
                "C": "The user manual for the software",
                "D": "The source code of the application under test"
            },
            "correctAnswer": "B",
            "explanation": "Testware includes all artifacts produced during the test process such as test plans, test cases, test scripts, test data, test logs, and test reports. These are the work products of testing activities.",
            "whyWrong": "Source code is a development artifact, not testware. Testware is produced by the testing process.",
            "optionExplanations": {
                "A": "Database schema is a design or development artifact.",
                "B": "Test scripts and test data are testware produced during test implementation.",
                "C": "User manuals are documentation artifacts, typically not classified as testware.",
                "D": "Source code is a development artifact, not testware."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.2",
            "learningObjective": "FL-1.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "testware",
                "test artifacts",
                "test data",
                "test scripts"
            ],
            "examTip": "Testware = all testing artifacts: plans, cases, scripts, data, logs, reports.",
            "memoryAid": "Testware = everything testers create."
        },
        {
            "id": "Q286",
            "statement": "A tester observes that the actual output differs from the expected output during test execution. What has been found?",
            "options": {
                "A": "A failure",
                "B": "A defect",
                "C": "A root cause",
                "D": "An error"
            },
            "correctAnswer": "A",
            "explanation": "A failure is the observable deviation of actual behavior from expected behavior during execution. The defect is the underlying flaw in the code, the root cause is the fundamental reason the defect exists, and the error is the human mistake that introduced the defect.",
            "whyWrong": "The observable incorrect behavior during execution is a failure.",
            "optionExplanations": {
                "A": "A failure is the observable deviation of actual behavior from expected behavior during execution.",
                "B": "A defect (fault) is the underlying imperfection in the work product that may cause a failure.",
                "C": "Root cause is the fundamental reason for a defect, discovered through analysis after the failure.",
                "D": "An error is a human mistake that introduced the defect, not the observable behavior."
            },
            "chapter": 1,
            "section": "1.2",
            "subsection": "1.2.3",
            "learningObjective": "FL-1.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "failure",
                "defect",
                "observable behavior",
                "code flaw"
            ],
            "examTip": "Observed bug = failure; code bug = defect.",
            "memoryAid": "I see failure; code has defect."
        },
        {
            "id": "Q242",
            "statement": "A mistaken assumption in a design document later leads to incorrect code. What is the mistaken assumption called?",
            "options": {
                "A": "Test condition",
                "B": "Coverage item",
                "C": "Error",
                "D": "Failure"
            },
            "correctAnswer": "C",
            "explanation": "An error is a human mistake that may introduce a defect into a work product.",
            "whyWrong": "An error is a human mistake that introduces a defect. A test condition is a testable aspect; a coverage item measures test thoroughness; a failure is the observable incorrect behavior - none of these describe the mistaken assumption itself.",
            "optionExplanations": {
                "A": "A test condition is a testable aspect or attribute, not the mistaken assumption itself.",
                "B": "A coverage item measures test thoroughness, not the mistaken assumption.",
                "C": "An error is a human mistake (here, the mistaken assumption) that may introduce a defect into a work product.",
                "D": "A failure is the observable incorrect behavior, not the mistaken assumption."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1.1",
            "learningObjective": "FL-1.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "error",
                "defect"
            ],
            "examTip": "Human mistake equals error.",
            "memoryAid": "People make errors."
        },
        {
            "id": "Q289",
            "statement": "Which of the following is a task performed during test analysis?",
            "options": {
                "A": "Writing automated test scripts",
                "B": "Executing test cases and logging results",
                "C": "Setting up the test environment",
                "D": "Reviewing the test basis and identifying test conditions"
            },
            "correctAnswer": "D",
            "explanation": "Test analysis involves reviewing the test basis (requirements, specifications, risk analysis) to identify what to test. This produces test conditions that define what needs to be verified. Test implementation (writing scripts), test execution (running tests), and environment setup are separate activities.",
            "whyWrong": "Test analysis focuses on understanding the test basis and identifying test conditions, not on execution or implementation.",
            "optionExplanations": {
                "A": "Writing automated scripts is a test implementation activity.",
                "B": "Executing tests and logging results is a test execution activity.",
                "C": "Setting up the environment is a test implementation or infrastructure activity.",
                "D": "Test analysis involves reviewing the test basis to derive test conditions."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.2",
            "learningObjective": "FL-1.4.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test analysis",
                "test basis",
                "test conditions"
            ],
            "examTip": "Test analysis = what to test, derived from the test basis.",
            "memoryAid": "Analysis = find conditions."
        },
        {
            "id": "Q244",
            "statement": "Most serious incidents in production come from the billing import component. Which principle does this illustrate?",
            "options": {
                "A": "Defect clustering",
                "B": "Pesticide paradox",
                "C": "Exhaustive testing",
                "D": "Context independence"
            },
            "correctAnswer": "A",
            "explanation": "Defect clustering means a small number of components often contain most defects or failures.",
            "whyWrong": "Defect clustering means most defects are found in a small number of components. Pesticide paradox means the same tests stop finding new defects; exhaustive testing means testing all combinations; context independence means testing approaches vary by context.",
            "optionExplanations": {
                "A": "Defect clustering means a small number of components often contain most defects or failures.",
                "B": "Pesticide paradox means the same tests stop finding new defects over time.",
                "C": "Exhaustive testing means testing all possible combinations, which is impossible.",
                "D": "Context independence is not a real testing principle; testing approaches depend on context."
            },
            "chapter": 1,
            "section": "1.3",
            "subsection": "1.3.1",
            "learningObjective": "FL-1.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "defect clustering",
                "risk"
            ],
            "examTip": "Many defects in few areas is clustering.",
            "memoryAid": "Bugs gather in clusters."
        },
        {
            "id": "Q088",
            "statement": "Which statement about independent testing is true?",
            "options": {
                "A": "Independent testing should always be performed by an external organization",
                "B": "Higher levels of independence typically find more defects but may introduce communication challenges",
                "C": "Independence eliminates the need for collaboration between testers and developers",
                "D": "Testing by the original developer provides the highest level of independence"
            },
            "correctAnswer": "B",
            "explanation": "Higher levels of independence can increase objectivity and find different types of defects, but may introduce communication challenges. Independence provides information to support stakeholder decisions about quality, but there is a trade-off between independence and collaboration.",
            "whyWrong": "Testing by the original developer offers no independence, which is the opposite of the goal.",
            "optionExplanations": {
                "A": "Independence exists on a spectrum; external testing is the highest level but not always required.",
                "B": "Greater independence improves defect detection but can reduce collaboration and increase communication overhead.",
                "C": "Independence does not eliminate the need for communication and collaboration.",
                "D": "Testing by the original developer lacks independence entirely."
            },
            "chapter": 1,
            "section": "1.5",
            "subsection": "1.5.3",
            "learningObjective": "FL-1.5.3",
            "kLevel": "K2",
            "difficulty": "Easy",
            "keywords": [
                "independence",
                "test organization",
                "collaboration"
            ],
            "examTip": "Independence levels range from same-team to external. More independence = more objectivity, but also more distance.",
            "memoryAid": "Independence = objectivity vs. distance trade-off."
        },
        {
            "id": "Q246",
            "statement": "What is a test condition?",
            "options": {
                "A": "A fixed rule that all defects must be severe",
                "B": "A tool license condition only",
                "C": "An aspect of the test basis that could be verified by one or more tests",
                "D": "The room temperature during testing"
            },
            "correctAnswer": "C",
            "explanation": "A test condition is a testable aspect of the test basis that can be verified by one or more test cases.",
            "whyWrong": "A fixed rule that all defects must be severe (A): A test condition is a testable aspect of a component or system derived from t...",
            "optionExplanations": {
                "A": "A test condition is not a fixed rule about defect severity.",
                "B": "Tool license conditions are unrelated to test conditions in the ISTQB process.",
                "C": "A test condition is a testable aspect of a component or system derived from the test basis.",
                "D": "Room temperature during testing is an environmental condition, not a test condition."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.2",
            "learningObjective": "FL-1.4.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test condition",
                "test basis"
            ],
            "examTip": "Conditions are what you test.",
            "memoryAid": "Testable aspect."
        },
        {
            "id": "Q208",
            "statement": "A product has passed every specified requirement test but users cannot complete their most important task efficiently. Which principle is illustrated?",
            "options": {
                "A": "Absence-of-errors is a fallacy",
                "B": "Exhaustive testing is possible",
                "C": "Defect clustering",
                "D": "Early testing is unnecessary"
            },
            "correctAnswer": "A",
            "explanation": "A system that meets specifications may still fail user needs, so low defect counts do not alone prove fitness for use.",
            "whyWrong": "Absence-of-errors fallacy means passing all requirements tests does not guarantee user satisfaction. Exhaustive testing is impossible; defect clustering is about defect distribution; early testing is valuable - none of these explain why meeting specs can still fail users.",
            "optionExplanations": {
                "A": "A system that meets specifications may still fail user needs, so low defect counts do not alone prove fitness for use.",
                "B": "Exhaustive testing is impossible; this example illustrates the absence-of-errors fallacy, not exhaustive testing.",
                "C": "Defect clustering means most defects are found in a small number of modules.",
                "D": "Early testing is valuable; this scenario does not suggest otherwise."
            },
            "chapter": 1,
            "section": "1.3",
            "subsection": "1.3.1",
            "learningObjective": "FL-1.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "absence-of-errors fallacy",
                "validation"
            ],
            "examTip": "Passing tests does not equal useful product.",
            "memoryAid": "No known bugs can still be wrong."
        },
        {
            "id": "Q144",
            "statement": "A project manager states that 'running all possible combinations of inputs will guarantee the software is defect-free.' Which testing principle contradicts this statement?",
            "options": {
                "A": "Defect clustering",
                "B": "Exhaustive testing is impossible",
                "C": "Testing shows the presence of defects, not their absence",
                "D": "Pesticide paradox"
            },
            "correctAnswer": "B",
            "explanation": "The principle 'Exhaustive testing is impossible' states that testing all possible combinations of inputs and preconditions is not feasible except for trivial systems. Therefore, risk analysis and prioritization are used to focus testing efforts on the most important areas.",
            "whyWrong": "While 'Testing shows presence, not absence' is also a valid principle, the statement directly contradicts the impossibility of exhaustive testing.",
            "optionExplanations": {
                "A": "Defect clustering refers to defects concentrating in specific modules.",
                "B": "Exhaustive testing is impractical; risk-based prioritization is necessary.",
                "C": "This principle means absence of failures does not prove the software is defect-free.",
                "D": "Pesticide paradox relates to tests becoming ineffective when repeated."
            },
            "chapter": 1,
            "section": "1.3",
            "subsection": "1.3.1",
            "learningObjective": "FL-1.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "exhaustive testing",
                "testing principles",
                "testing principles"
            ],
            "examTip": "'Exhaustive testing is impossible' means you cannot test everything, so prioritize by risk.",
            "memoryAid": "Exhaustive = impossible for anything beyond trivial."
        },
        {
            "id": "Q167",
            "statement": "Which of the following is the correct sequence of test activities in the ISTQB test process?",
            "options": {
                "A": "Test design, test analysis, test planning, test execution, test monitoring",
                "B": "Test analysis, test design, test planning, test execution, test completion",
                "C": "Test planning, test execution, test analysis, test design, test completion",
                "D": "Test planning, test monitoring and control, test analysis, test design, test implementation, test execution, test completion"
            },
            "correctAnswer": "D",
            "explanation": "The ISTQB test process consists of seven logically related activities: test planning (defining objectives and approach), test monitoring and control (tracking progress), test analysis (analyzing test basis), test design (designing test cases), test implementation (creating test data and scripts), test execution (running tests), and test completion (archiving and lessons learned). These activities are not always executed strictly one after another — some may run in parallel, be iterative, or repeat as needed.",
            "whyWrong": "Test planning must come before analysis and design activities.",
            "optionExplanations": {
                "A": "Test planning must precede test analysis.",
                "B": "Test planning comes before design and analysis.",
                "C": "Test execution comes after design and implementation, not before.",
                "D": "Correct. The ISTQB test process includes all seven activities in this logical order: planning, monitoring and control, analysis, design, implementation, execution, and completion."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.1",
            "learningObjective": "FL-1.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test process",
                "test activities",
                "sequence"
            ],
            "examTip": "PMaADIEC: Plan, Monitor, Analysis, Design, Implementation, Execution, Completion.",
            "memoryAid": "PMaADIEC = Plan Monitor analysis Design Implement Execute Complete."
        },
        {
            "id": "Q206",
            "statement": "A tester challenges an ambiguous requirement in a refinement meeting without blaming the analyst. Which tester skill is most clearly shown?",
            "options": {
                "A": "Contract negotiation",
                "B": "Release authorization",
                "C": "Effective communication and critical thinking",
                "D": "Database administration"
            },
            "correctAnswer": "C",
            "explanation": "Testers need analytical thinking and constructive communication to identify quality risks while maintaining collaboration.",
            "whyWrong": "Contract negotiation (A): Testers need analytical thinking and constructive communication to identify q...; Release authorization (B): Testers need analytical thinking and constructive communication to identify q...",
            "optionExplanations": {
                "A": "Challenging ambiguity requires analytical and communication skills, not contract negotiation.",
                "B": "Release authorization is a management decision, not a tester skill demonstrated in refinement meetings.",
                "C": "Challenging ambiguity constructively requires critical thinking and effective communication.",
                "D": "Database administration is a specialized technical skill unrelated to requirements refinement."
            },
            "chapter": 1,
            "section": "1.5",
            "subsection": "1.5.1",
            "learningObjective": "FL-1.5.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "tester skills",
                "communication"
            ],
            "examTip": "Tester psychology includes communication style.",
            "memoryAid": "Question the product, not the person."
        },
        {
            "id": "Q285",
            "statement": "A developer makes a mistake while writing a SQL query. The resulting code contains an incorrect JOIN condition. This mistake (the human action) is a programmer\\'s:",
            "options": {
                "A": "Failure",
                "B": "Error",
                "C": "Defect",
                "D": "Root cause"
            },
            "correctAnswer": "B",
            "explanation": "An error is a human mistake made by a developer, tester, or analyst that introduces a defect. The developer's action of writing incorrect SQL is the error (mistake). The incorrect JOIN condition in the code is the resulting defect. If executed, it may cause a failure.",
            "whyWrong": "The mistake itself is an error; the resulting problem in the code is a defect; the observable incorrect behavior is a failure.",
            "optionExplanations": {
                "A": "A failure is the observable incorrect behavior, not the human mistake.",
                "B": "An error is the human action that introduces a defect into the system.",
                "C": "A defect is the flaw in the code or work product caused by the error.",
                "D": "Root cause is the underlying reason for the error, not the error itself."
            },
            "chapter": 1,
            "section": "1.2",
            "subsection": "1.2.3",
            "learningObjective": "FL-1.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "error",
                "defect",
                "mistake",
                "human error"
            ],
            "examTip": "Error = human mistake that creates a defect.",
            "memoryAid": "Error: I made a mistake."
        },
        {
            "id": "Q075",
            "statement": "Which of the following is a characteristic of good test documentation?",
            "options": {
                "A": "It contains as much detail as possible, even if redundant",
                "B": "It is written only for the test team and no one else",
                "C": "It uses technical jargon to demonstrate expertise",
                "D": "It is clear, concise, accurate, and allows reproduction of the tests"
            },
            "correctAnswer": "D",
            "explanation": "Good test documentation should be clear and understandable by all stakeholders, concise enough to be useful, accurate in its descriptions, and detailed enough to allow anyone to reproduce the tests. It should be maintainable and serve its intended purpose.",
            "whyWrong": "Excessive detail makes documentation hard to maintain and use.",
            "optionExplanations": {
                "A": "Excessive detail creates maintenance burden and reduces usability.",
                "B": "Test documentation serves multiple stakeholders (testers, developers, managers, auditors).",
                "C": "Jargon reduces readability and accessibility.",
                "D": "Clarity, conciseness, accuracy, and reproducibility are key quality attributes."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.3",
            "learningObjective": "FL-1.4.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test documentation",
                "testware",
                "quality"
            ],
            "examTip": "Good test documentation = understandable, reproducible, and maintainable.",
            "memoryAid": "Test docs: CRCA - Clear, Reproducible, Concise, Accurate."
        },
        {
            "id": "Q087",
            "statement": "A tester is reviewing a requirements document and notices ambiguity in the wording of a critical business rule. Which essential tester skill is primarily being demonstrated?",
            "options": {
                "A": "Database administration expertise",
                "B": "Advanced project management skills",
                "C": "Critical thinking and analytical skills",
                "D": "Expert programming ability"
            },
            "correctAnswer": "C",
            "explanation": "Identifying ambiguity in requirements requires critical thinking and analytical skills. A good tester questions assumptions, identifies inconsistencies, and thinks about how requirements could be interpreted in multiple ways.",
            "whyWrong": "Programming ability is not required to identify requirements ambiguity; analytical thinking is the key skill.",
            "optionExplanations": {
                "A": "Database expertise is domain-specific and not essential for all testers.",
                "B": "Project management skills are not directly relevant to requirements review.",
                "C": "Critical thinking allows testers to identify ambiguities, inconsistencies, and risks in requirements.",
                "D": "Programming is useful for automation but not for requirements analysis."
            },
            "chapter": 1,
            "section": "1.5",
            "subsection": "1.5.1",
            "learningObjective": "FL-1.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "critical thinking",
                "analytical skills",
                "tester skills"
            ],
            "examTip": "Testers need analytical thinking, communication, curiosity, and domain knowledge.",
            "memoryAid": "Tester skills: Think critically, communicate clearly, question everything."
        },
        {
            "id": "Q248",
            "statement": "In a whole-team approach, who is responsible for quality?",
            "options": {
                "A": "The whole team, with testers contributing specialized testing skills",
                "B": "Only the test manager",
                "C": "Only the product owner",
                "D": "Only an external audit group"
            },
            "correctAnswer": "A",
            "explanation": "The whole-team approach treats quality as a shared responsibility while testers bring testing expertise and quality perspective. Testing reduces the risk of undetected defects but never eliminates it entirely.",
            "whyWrong": "Whole-team approach means quality is everyone's responsibility. The test manager, product owner, or an external audit group alone cannot ensure quality - it requires collaboration across the entire team.",
            "optionExplanations": {
                "A": "The whole-team approach treats quality as a shared responsibility while testers bring specialized testing skills.",
                "B": "Quality is a team responsibility, not solely the test manager's.",
                "C": "Quality is a team responsibility, not solely the product owner's.",
                "D": "An external audit group does not replace the team's shared ownership of quality."
            },
            "chapter": 1,
            "section": "1.5",
            "subsection": "1.5.2",
            "learningObjective": "FL-1.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "whole-team approach",
                "quality ownership"
            ],
            "examTip": "Whole team means shared quality ownership.",
            "memoryAid": "Everyone owns quality."
        },
        {
            "id": "Q201",
            "statement": "A mobile banking team wants stakeholders to understand residual product risk before release. Which testing objective is most directly addressed?",
            "options": {
                "A": "Guaranteeing customer satisfaction",
                "B": "Providing information for decision making",
                "C": "Proving the application is defect-free",
                "D": "Replacing project risk management"
            },
            "correctAnswer": "B",
            "explanation": "Testing provides information about quality and risk so stakeholders can make informed release decisions; it cannot prove absence of defects.",
            "whyWrong": "Guaranteeing customer satisfaction (A): Testing provides information about quality and risk so stakeholders can make ...",
            "optionExplanations": {
                "A": "Testing cannot guarantee customer satisfaction; it provides information to reduce risk, not certainty.",
                "B": "Testing provides information for stakeholder decision-making about quality and release risk.",
                "C": "Testing cannot prove a product is defect-free; it only reveals the presence of defects.",
                "D": "Testing supports risk management; it does not replace it."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1.1",
            "learningObjective": "FL-1.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "testing objectives",
                "risk information"
            ],
            "examTip": "Testing informs decisions; it does not make guarantees.",
            "memoryAid": "Information, not proof."
        },
        {
            "id": "Q007",
            "statement": "Which of the following is an essential skill for a tester?",
            "options": {
                "A": "Certification in project management",
                "B": "Expert-level programming knowledge",
                "C": "Being detail-oriented and having good communication skills",
                "D": "Advanced database administration skills"
            },
            "correctAnswer": "C",
            "explanation": "Testers need attention to detail and good communication skills. While programming can be helpful, it is not the primary essential skill for a tester.",
            "whyWrong": "Expert-level programming is not essential for all testers; many testing roles focus on manual testing and analytical skills.",
            "optionExplanations": {
                "A": "PM certification is not a standard requirement for testers.",
                "B": "Programming is useful for automation but not essential for all testers.",
                "C": "Attention to detail and communication are universally essential for testers.",
                "D": "DBA skills are not generally required for testing roles."
            },
            "chapter": 1,
            "section": "1.5",
            "subsection": "1.5.1",
            "learningObjective": "FL-1.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "tester skills",
                "communication",
                "attention to detail"
            ],
            "examTip": "Focus on analytical skills, curiosity, and communication as key tester traits.",
            "memoryAid": "A tester is a curious detective with excellent communication skills."
        },
        {
            "id": "Q085",
            "statement": "During which test activity are test cases prioritized and organized into a test execution schedule?",
            "options": {
                "A": "Test completion",
                "B": "Test analysis",
                "C": "Test planning",
                "D": "Test implementation"
            },
            "correctAnswer": "D",
            "explanation": "Test implementation is the activity where test cases are organized, prioritized, and assembled into test procedures and test execution schedules. It also involves creating test data and setting up the test environment.",
            "whyWrong": "Test analysis involves identifying test conditions, not organizing test cases into execution schedules.",
            "optionExplanations": {
                "A": "Test completion archives artifacts and evaluates the process.",
                "B": "Test analysis identifies test conditions from requirements.",
                "C": "Test planning defines objectives, approach, and resources.",
                "D": "Test implementation creates test procedures, schedules, and prepares test data."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.1",
            "learningObjective": "FL-1.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test implementation",
                "test process",
                "test scheduling"
            ],
            "examTip": "Test implementation = organize, prioritize, schedule, and prepare test execution.",
            "memoryAid": "Implementation = organize and schedule for execution."
        },
        {
            "id": "Q284",
            "statement": "A company implements process audits, definition of organizational quality standards, and continuous process improvement initiatives to reduce the number of defects introduced during development. These activities are examples of:",
            "options": {
                "A": "Quality assurance",
                "B": "Quality control",
                "C": "System testing",
                "D": "Configuration management"
            },
            "correctAnswer": "A",
            "explanation": "These are quality assurance (QA) activities. QA is a process-oriented, preventive approach that focuses on the implementation and improvement of processes so that good products result (ISTQB syllabus 1.2.2).",
            "whyWrong": "These activities focus on preventing defects through process improvement, which is the domain of QA.",
            "optionExplanations": {
                "A": "QA is process-oriented and preventive, focusing on process improvement to prevent defects.",
                "B": "Quality control is product-oriented (e.g., testing and code reviews); these activities target process improvement, not product verification.",
                "C": "System testing is a specific test level, not a process improvement activity.",
                "D": "Configuration management controls versions and artifacts, not process quality."
            },
            "chapter": 1,
            "section": "1.2",
            "subsection": "1.2.2",
            "learningObjective": "FL-1.2.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "QA activities",
                "process improvement",
                "defect prevention"
            ],
            "examTip": "QA = process audits, standards, and reviews to prevent defects.",
            "memoryAid": "QA prevents; QC detects."
        }
    ],
    "exam2": [
        {
            "id": "Q365",
            "statement": "A banking system update adds a new account type. The team must test the new feature and ensure existing account types still work correctly. Which approach BEST describes this testing scenario?",
            "options": {
                "A": "Maintenance testing including impact analysis and regression",
                "B": "Only confirmation testing of the new account type",
                "C": "Full regression of all existing functionality without impact analysis",
                "D": "Static testing only, since no code changes are needed"
            },
            "correctAnswer": "A",
            "explanation": "Maintenance testing after an enhancement should include impact analysis to determine the scope of regression testing, then execute confirmation and regression tests as needed.",
            "whyWrong": "Only confirmation testing of the new account type (B): Incorrect. 'Only confirmation testing of the new account type' does not match the correct concept: Maintenance testing after an enhancement should include impact analysis to de...",
            "optionExplanations": {
                "A": "Maintenance testing after an enhancement should include impact analysis to determine the scope of regression testing, then execute confirmation and regression tests as needed.",
                "B": "Incorrect. 'Only confirmation testing of the new account type' does not match the correct concept: Maintenance testing after an enhancement should include impact analysis to de...",
                "C": "Incorrect. 'Full regression of all existing functionality without imp...' does not match the correct concept: Maintenance testing after an enhancement should include impact analysis to de...",
                "D": "Incorrect. 'Static testing only, since no code changes are needed' does not match the correct concept: Maintenance testing after an enhancement should include impact analysis to de..."
            },
            "chapter": 2,
            "section": "2.3",
            "subsection": "2.3.2",
            "learningObjective": "FL-2.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "maintenance testing",
                "impact analysis",
                "regression"
            ],
            "examTip": "Change the system, test the impact.",
            "memoryAid": "Change drives testing."
        },
        {
            "id": "Q043",
            "statement": "A system has been in production for three years. A new regulatory requirement mandates adding encryption to stored user data. What type of testing is most relevant after implementing this change?",
            "options": {
                "D": "Only acceptance testing by end users",
                "A": "Only unit testing the encryption module",
                "B": "No testing is needed because encryption is a standard feature",
                "C": "Maintenance testing with regression testing of affected areas"
            },
            "correctAnswer": "C",
            "explanation": "Maintenance testing is required when changes are made to an existing system. The addition of encryption is a change that requires both confirmation testing (verifying the encryption works) and regression testing (ensuring existing functionality is not broken).",
            "whyWrong": "Only testing the encryption module ignores potential side effects on other parts of the system.",
            "optionExplanations": {
                "D": "Acceptance testing alone may not catch technical regressions.",
                "A": "Unit testing alone does not cover integration and system-level impacts.",
                "B": "Testing is always needed when changes are introduced to a system.",
                "C": "Maintenance testing with regression testing ensures the change works without breaking existing features."
            },
            "chapter": 2,
            "section": "2.3",
            "subsection": "2.3.1",
            "learningObjective": "FL-2.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "maintenance testing",
                "regression testing",
                "impact analysis"
            ],
            "examTip": "Any change to a production system requires maintenance testing = confirmation + regression.",
            "memoryAid": "Change = confirm the change + check nothing else broke."
        },
        {
            "id": "Q045",
            "statement": "Which of the following statements about acceptance testing is true?",
            "options": {
                "A": "Acceptance testing is performed by developers to verify code quality",
                "B": "Acceptance testing is performed to determine whether the system meets the user's needs and is ready for operational use",
                "C": "Acceptance testing only validates non-functional requirements",
                "D": "Acceptance testing is the same as system testing"
            },
            "correctAnswer": "B",
            "explanation": "Acceptance testing is the final test level, performed by or on behalf of users, to determine whether the system is ready for deployment and use. It focuses on validating that the system meets business needs and user requirements.",
            "whyWrong": "Acceptance testing is performed by users or business representatives, not developers.",
            "optionExplanations": {
                "A": "Acceptance testing involves users or customers, not typically developers.",
                "B": "Acceptance testing validates business requirements and fitness for use.",
                "C": "Acceptance testing covers both functional and non-functional requirements.",
                "D": "System testing differs from acceptance testing in scope, audience, and objectives."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "acceptance testing",
                "user acceptance",
                "validation"
            ],
            "examTip": "Acceptance testing = 'Are we building the right product?' from the user's perspective.",
            "memoryAid": "Acceptance = user says 'Yes, this works for us.'"
        },
        {
            "id": "Q014",
            "statement": "A team is developing a banking application. After completing component testing, they perform integration testing. Which integration testing approach involves integrating all components at once and then testing the entire system?",
            "options": {
                "A": "Top-down integration testing",
                "B": "Bottom-up integration testing",
                "C": "Incremental integration testing",
                "D": "Big-bang integration testing"
            },
            "correctAnswer": "D",
            "explanation": "Big-bang integration testing integrates all components simultaneously and then tests the entire system. This approach is risky because if a failure occurs, it is difficult to isolate which component caused the failure.",
            "whyWrong": "Incremental approaches (top-down, bottom-up) integrate components one by one, which is the opposite of big-bang.",
            "optionExplanations": {
                "A": "Top-down starts with high-level components and adds lower-level ones.",
                "B": "Bottom-up starts with low-level components and builds upward.",
                "C": "Incremental integration adds components one at a time, easing defect localization.",
                "D": "Big-bang combines all components at once, making defect isolation difficult."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "big-bang integration",
                "integration testing",
                "approaches"
            ],
            "examTip": "Big-bang = all at once (risky); Incremental = one by one (safer, easier debugging).",
            "memoryAid": "Big-bang = Big risk of big headaches finding the bug."
        },
        {
            "id": "Q147",
            "statement": "In which development lifecycle model are testing activities typically performed after each increment, with each increment adding new functionality?",
            "options": {
                "A": "V-model",
                "B": "Waterfall model",
                "C": "Iterative development model",
                "D": "Big-bang model"
            },
            "correctAnswer": "C",
            "explanation": "In iterative development models (including Agile), development occurs in increments or iterations, with each iteration producing a potentially shippable product increment. Testing is performed within each iteration to verify the newly added functionality and perform regression testing.",
            "whyWrong": "In the V-model, testing activities are planned in parallel with development phases but executed in sequence.",
            "optionExplanations": {
                "A": "The V-model pairs development and test phases but testing is not incremental.",
                "B": "Waterfall performs testing as a single phase after development.",
                "C": "Iterative models test each increment, building functionality progressively.",
                "D": "Big-bang is an integration approach, not a development lifecycle model."
            },
            "chapter": 2,
            "section": "2.1",
            "subsection": "2.1.1",
            "learningObjective": "FL-2.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "iterative development",
                "Agile",
                "incremental testing"
            ],
            "examTip": "Iterative = build a little, test a little, repeat.",
            "memoryAid": "Iterative = repeated cycles of build and test."
        },
        {
            "id": "Q009",
            "statement": "In a V-model development lifecycle, when should test planning begin?",
            "options": {
                "B": "During the requirements phase, in parallel with the corresponding development activities",
                "C": "During the test execution phase",
                "D": "Only after the code is completely written",
                "A": "After the system has been deployed to production"
            },
            "correctAnswer": "B",
            "explanation": "In the V-model, each development phase has a corresponding test planning phase. Test planning begins early, typically during the requirements phase, with test conditions derived from requirements documents. This aligns with the principle of early testing.",
            "whyWrong": "Waiting until after coding is complete violates the early testing principle and the V-model structure.",
            "optionExplanations": {
                "B": "The V-model pairs each development phase with a corresponding test planning activity.",
                "C": "Test execution is a later phase; planning comes much earlier.",
                "D": "This contradicts the V-model approach of parallel test planning.",
                "A": "Deployment happens after testing is complete."
            },
            "chapter": 2,
            "section": "2.1",
            "subsection": "2.1.1",
            "learningObjective": "FL-2.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "V-model",
                "test planning",
                "development lifecycle"
            ],
            "examTip": "In V-model, test planning mirrors development phases on the opposite side of the V.",
            "memoryAid": "V-model: Left side = planning, Right side = execution."
        },
        {
            "id": "Q362",
            "statement": "In which development lifecycle model do testers typically write test scripts during the same iteration as development, with regression testing growing as increments accumulate?",
            "options": {
                "A": "Iterative and incremental development",
                "B": "Waterfall model",
                "C": "V-model",
                "D": "Sequential development with fixed phases"
            },
            "correctAnswer": "A",
            "explanation": "In iterative and incremental development, testing occurs in each iteration alongside development, and regression testing becomes increasingly important as new increments are added.",
            "whyWrong": "Waterfall model (B): Incorrect. 'Waterfall model' does not match the correct concept: In iterative and incremental development, testing occurs in each iteration al...",
            "optionExplanations": {
                "A": "In iterative and incremental development, testing occurs in each iteration alongside development, and regression testing becomes increasingly important as new increments are added.",
                "B": "Incorrect. 'Waterfall model' does not match the correct concept: In iterative and incremental development, testing occurs in each iteration al...",
                "C": "Incorrect. 'V-model' does not match the correct concept: In iterative and incremental development, testing occurs in each iteration al...",
                "D": "Incorrect. 'Sequential development with fixed phases' does not match the correct concept: In iterative and incremental development, testing occurs in each iteration al..."
            },
            "chapter": 2,
            "section": "2.1",
            "subsection": "2.1.2",
            "learningObjective": "FL-2.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "iterative development",
                "Agile testing"
            ],
            "examTip": "Iterative = develop and test in each cycle.",
            "memoryAid": "Each iteration, test and code."
        },
        {
            "id": "Q169",
            "statement": "Which of the following is a characteristic of system testing?",
            "options": {
                "A": "Testing interactions between integrated components",
                "B": "Testing performed by end users to determine acceptance",
                "C": "Testing individual components in isolation",
                "D": "Testing the complete, integrated system to evaluate compliance with specified requirements"
            },
            "correctAnswer": "D",
            "explanation": "System testing is a test level that focuses on testing the complete, integrated system against its specified requirements. It evaluates both functional and non-functional requirements and is typically performed by an independent test team in a test environment that mirrors production.",
            "whyWrong": "Testing individual components is component testing, not system testing.",
            "optionExplanations": {
                "A": "Interaction testing between components is integration testing.",
                "B": "End-user testing is acceptance testing.",
                "C": "Individual component testing is the component test level.",
                "D": "System testing validates the complete system against functional and non-functional requirements."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "system testing",
                "test level",
                "complete system"
            ],
            "examTip": "System testing = test the whole system against requirements.",
            "memoryAid": "System = the big picture, everything together."
        },
        {
            "id": "Q253",
            "statement": "A platform migration changes the database engine but no business features are planned. What testing is still needed?",
            "options": {
                "A": "Only component testing of new features",
                "B": "Maintenance testing focused on migration risks and regression",
                "C": "No testing because features did not change",
                "D": "Only usability testing by marketing"
            },
            "correctAnswer": "B",
            "explanation": "Maintenance testing is required for migrations because environment and platform changes can introduce failures even without new features.",
            "whyWrong": "Maintenance testing is needed for migrations because environments differ. New features may not exist; testing is required even without feature changes; usability testing alone is insufficient.",
            "optionExplanations": {
                "A": "Maintenance testing is required for migrations because environment and platfo...",
                "B": "Maintenance testing is required for migrations because environment and platform changes can introduce failures even without new features.",
                "C": "Maintenance testing is required for migrations because environment and platfo...",
                "D": "Maintenance testing is required for migrations because environment and platfo..."
            },
            "chapter": 2,
            "section": "2.3",
            "subsection": "2.3.1",
            "learningObjective": "FL-2.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "maintenance testing",
                "migration"
            ],
            "examTip": "Migrations can break behavior.",
            "memoryAid": "Changed platform, test impact."
        },
        {
            "id": "Q361",
            "statement": "Which of the following is an example of a functional test?",
            "options": {
                "A": "Verifying that a login button redirects to the dashboard after correct credentials",
                "B": "Measuring page load time under 100 concurrent users",
                "C": "Checking that CPU usage stays below 80% during peak load",
                "D": "Reviewing source code for coding standard violations"
            },
            "correctAnswer": "A",
            "explanation": "Functional testing evaluates what the system does, including features, interactions, and data processing. Verifying login behavior is a classic functional test example.",
            "whyWrong": "Measuring page load time under 100 concurrent users (B): Incorrect. 'Measuring page load time under 100 concurrent users' does not match the correct concept: Functional testing evaluates what the system does, including features, intera...",
            "optionExplanations": {
                "A": "Functional testing evaluates what the system does, including features, interactions, and data processing. Verifying login behavior is a classic functional test example.",
                "B": "Incorrect. 'Measuring page load time under 100 concurrent users' does not match the correct concept: Functional testing evaluates what the system does, including features, intera...",
                "C": "Incorrect. 'Checking that CPU usage stays below 80% during peak load' does not match the correct concept: Functional testing evaluates what the system does, including features, intera...",
                "D": "Incorrect. 'Reviewing source code for coding standard violations' does not match the correct concept: Functional testing evaluates what the system does, including features, intera..."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.2",
            "learningObjective": "FL-2.2.2",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "functional testing",
                "test types"
            ],
            "examTip": "Functional = what the system does.",
            "memoryAid": "Function = what it does."
        },
        {
            "id": "Q250",
            "statement": "Which statement is true about testing in iterative and incremental development?",
            "options": {
                "A": "Static testing cannot be used",
                "B": "Only acceptance testing is allowed",
                "C": "Testing activities occur in each iteration and regression testing is important as increments accumulate",
                "D": "Testing is postponed until all increments are complete"
            },
            "correctAnswer": "C",
            "explanation": "Iterative and incremental models include repeated testing throughout development, with regression testing needed as new increments affect existing behavior.",
            "whyWrong": "Iterative models include testing in each iteration with increasing regression testing. Static testing is used; acceptance testing occurs in iterations; testing is not postponed until the end.",
            "optionExplanations": {
                "A": "Iterative and incremental models include repeated testing throughout developm...",
                "B": "Iterative and incremental models include repeated testing throughout developm...",
                "C": "Iterative and incremental models include repeated testing throughout development, with regression testing needed as new increments affect existing behavior.",
                "D": "Iterative and incremental models include repeated testing throughout developm..."
            },
            "chapter": 2,
            "section": "2.1",
            "subsection": "2.1.2",
            "learningObjective": "FL-2.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "iterative development",
                "regression"
            ],
            "examTip": "Each increment needs testing.",
            "memoryAid": "Test every iteration."
        },
        {
            "id": "Q145",
            "statement": "A team is testing a new authentication module. Developers write and execute tests for individual functions such as password hashing and token generation. Which test level does this represent?",
            "options": {
                "A": "Integration testing",
                "B": "Acceptance testing",
                "C": "System testing",
                "D": "Component testing"
            },
            "correctAnswer": "D",
            "explanation": "Component testing (also called unit testing) focuses on testing individual components in isolation. Testing individual functions like password hashing and token generation are classic examples of component-level testing, typically performed by developers.",
            "whyWrong": "Integration testing would verify interactions between the authentication module and other modules.",
            "optionExplanations": {
                "A": "Integration testing checks interactions between components.",
                "B": "Acceptance testing evaluates fitness for use from the user's perspective.",
                "C": "System testing validates the complete, integrated system against requirements.",
                "D": "Component testing verifies individual units like functions, methods, or classes in isolation."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "component testing",
                "unit testing",
                "test level"
            ],
            "examTip": "Component testing = isolated units. Integration testing = connections between units.",
            "memoryAid": "Component = single Lego brick; Integration = bricks connected."
        },
        {
            "id": "Q125",
            "statement": "In an iterative development model, how does the testing approach differ from a sequential model?",
            "options": {
                "C": "Testing is integrated throughout each iteration rather than performed as a single phase at the end",
                "D": "Testing is not needed in iterative models because changes are small",
                "A": "Testing is only performed at the end of all iterations",
                "B": "Testing is performed only by developers in iterative models"
            },
            "correctAnswer": "C",
            "explanation": "In iterative models (such as Agile), testing is integrated into each iteration. Testers collaborate with developers throughout each iteration, writing and executing tests continuously. This contrasts with sequential models where testing is a distinct phase that occurs after development.",
            "whyWrong": "Testing in iterative models occurs continuously within each iteration, not at the end of all iterations.",
            "optionExplanations": {
                "C": "Iterative models integrate testing throughout each iteration for continuous feedback.",
                "D": "Testing is still essential in iterative models; small changes still need verification.",
                "A": "Testing occurs within each iteration, not at the end of all iterations.",
                "B": "Both testers and developers perform testing in iterative models."
            },
            "chapter": 2,
            "section": "2.1",
            "subsection": "2.1.1",
            "learningObjective": "FL-2.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "iterative development",
                "Agile testing",
                "continuous testing"
            ],
            "examTip": "Iterative = testing in every iteration. Sequential = testing as a later phase.",
            "memoryAid": "Iterative = test as you build. Sequential = build then test."
        },
        {
            "id": "Q044",
            "statement": "Which of the following correctly describes a test level?",
            "options": {
                "A": "Functional testing, performance testing, and security testing",
                "B": "Manual testing and automated testing",
                "C": "Black-box testing, white-box testing, and experience-based testing",
                "D": "Component testing, integration testing, system testing, and acceptance testing"
            },
            "correctAnswer": "D",
            "explanation": "Test levels are groups of testing activities organized and managed together based on the development lifecycle phase. The four main test levels are component (unit), integration, system, and acceptance testing.",
            "whyWrong": "Functional testing, performance testing, and security testing are test types, not test levels.",
            "optionExplanations": {
                "A": "These are categories of test techniques, not test levels.",
                "B": "These are examples of test types, not test levels.",
                "C": "These are modes of execution, not test levels.",
                "D": "Component, integration, system, and acceptance are the standard test levels."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test levels",
                "component",
                "integration",
                "system",
                "acceptance"
            ],
            "examTip": "Test levels = phases of testing (CISA). Test types = what you test (functional/non-functional).",
            "memoryAid": "CISA: Component, Integration, System, Acceptance."
        },
        {
            "id": "Q170",
            "statement": "A government agency requires that a new tax calculation system passes formal acceptance testing against specific regulatory requirements before it can be deployed. What type of acceptance testing is this?",
            "options": {
                "A": "Regulatory acceptance testing",
                "B": "User acceptance testing",
                "C": "Operational acceptance testing",
                "D": "Contract acceptance testing"
            },
            "correctAnswer": "A",
            "explanation": "Regulatory acceptance testing is performed to ensure the system complies with relevant regulations, laws, and government standards. Tax calculation systems must comply with tax regulations, making this regulatory acceptance testing. It is often mandatory before deployment.",
            "whyWrong": "User acceptance testing focuses on whether the system meets user needs, not regulatory compliance.",
            "optionExplanations": {
                "A": "Regulatory acceptance testing verifies compliance with laws, regulations, and standards.",
                "B": "UAT focuses on user needs and business processes.",
                "C": "Operational acceptance testing checks operational readiness (backup, recovery, etc.).",
                "D": "Contract acceptance testing verifies compliance with contract terms."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "regulatory acceptance testing",
                "acceptance testing",
                "compliance"
            ],
            "examTip": "Types of acceptance: User, Operational, Contract, Regulatory.",
            "memoryAid": "Acceptance types: User, Operational, Contract, Regulatory (UOCR)."
        },
        {
            "id": "Q089",
            "statement": "In a sequential development model, when is system testing typically performed?",
            "options": {
                "A": "Before component testing begins",
                "B": "After integration testing is complete and the entire system is integrated",
                "C": "After the system is deployed to production",
                "D": "During the requirements phase"
            },
            "correctAnswer": "B",
            "explanation": "In a sequential development model (e.g., waterfall or V-model), system testing is performed after integration testing is complete. At this point, the entire system has been assembled, and testing verifies the complete system against its specified requirements.",
            "whyWrong": "System testing occurs after integration, not during requirements or before component testing.",
            "optionExplanations": {
                "A": "Component testing precedes integration, which precedes system testing.",
                "B": "System testing follows integration testing and verifies the complete integrated system.",
                "C": "System testing occurs before deployment to production.",
                "D": "Requirements phase is when test planning begins, not system test execution."
            },
            "chapter": 2,
            "section": "2.1",
            "subsection": "2.1.1",
            "learningObjective": "FL-2.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "sequential model",
                "system testing",
                "V-model"
            ],
            "examTip": "In sequential lifecycles: Component → Integration → System → Acceptance.",
            "memoryAid": "CISA order: Component, Integration, System, Acceptance."
        },
        {
            "id": "Q090",
            "statement": "During component testing, a function calculates the square root of a number. The function calls a logarithm function that has not yet been implemented. What technique allows component testing to proceed?",
            "options": {
                "A": "Using a driver to call the square root function",
                "B": "Skipping component testing until all functions are complete",
                "C": "Performing system testing instead",
                "D": "Using a stub to replace the missing logarithm function"
            },
            "correctAnswer": "D",
            "explanation": "A stub is a minimal implementation of a component that is called by the component under test. It simulates the behavior of the called component, allowing testing of the calling component to proceed even when the called component is not yet available.",
            "whyWrong": "A driver simulates a calling component, not a called component. Stubs replace called components.",
            "optionExplanations": {
                "A": "A driver simulates the calling component, not the called one.",
                "B": "Skipping testing delays defect discovery and increases cost.",
                "C": "System testing is a different level, not a substitute for component testing.",
                "D": "A stub simulates the missing called component, allowing testing to proceed."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "stubs",
                "drivers",
                "component testing",
                "test infrastructure"
            ],
            "examTip": "Stub = called component simulator. Driver = calling component simulator.",
            "memoryAid": "Stub = simulates what is below; Driver = simulates what is above."
        },
        {
            "id": "Q249",
            "statement": "Which work product is most appropriate as a test basis for acceptance testing?",
            "options": {
                "A": "Unrelated source-code comments",
                "B": "Business process descriptions and acceptance criteria",
                "C": "Only compiler warnings",
                "D": "The tester's vacation schedule"
            },
            "correctAnswer": "B",
            "explanation": "Acceptance testing is commonly based on business requirements, user needs, use cases, business processes, and acceptance criteria.",
            "whyWrong": "Acceptance testing uses business process descriptions and acceptance criteria. Source-code comments, compiler warnings, and vacation schedules are not appropriate bases for acceptance testing.",
            "optionExplanations": {
                "A": "Acceptance testing is commonly based on business requirements, user needs, us...",
                "B": "Acceptance testing is commonly based on business requirements, user needs, use cases, business processes, and acceptance criteria.",
                "C": "Acceptance testing is commonly based on business requirements, user needs, us...",
                "D": "Acceptance testing is commonly based on business requirements, user needs, us..."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "acceptance testing",
                "test basis"
            ],
            "examTip": "Acceptance focuses on user and business needs.",
            "memoryAid": "Business basis for acceptance."
        },
        {
            "id": "Q127",
            "statement": "A system receives a major update that changes the underlying database schema and adds new REST APIs. Which combination of testing is most appropriate for maintenance of this system?",
            "options": {
                "A": "Confirmation testing of the new APIs and database changes, plus regression testing of existing functionality",
                "B": "Only regression testing of existing functionality with no testing of new features",
                "C": "Only testing the new APIs with no regression testing",
                "D": "No testing is needed if the development team is experienced"
            },
            "correctAnswer": "A",
            "explanation": "Maintenance testing requires both confirmation testing of the changes (new APIs and database changes work correctly) and regression testing (existing functionality is not broken by the changes). Both aspects are essential for a comprehensive maintenance testing approach.",
            "whyWrong": "Skipping either confirmation testing or regression testing leaves significant risk uncovered.",
            "optionExplanations": {
                "A": "Regression testing is needed because database changes can affect existing functionality.",
                "B": "Both confirmation of changes and regression of existing areas are essential.",
                "C": "New changes must be confirmed to work correctly.",
                "D": "Experience does not eliminate the need for testing."
            },
            "chapter": 2,
            "section": "2.3",
            "subsection": "2.3.1",
            "learningObjective": "FL-2.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "maintenance testing",
                "confirmation testing",
                "regression testing"
            ],
            "examTip": "Maintenance testing = confirm the change + check nothing else broke.",
            "memoryAid": "Maintenance = new stuff works + old stuff still works."
        },
        {
            "id": "Q210",
            "statement": "Which example best represents component testing?",
            "options": {
                "A": "The operations team monitors live incidents",
                "B": "A tester evaluates interactions among several deployed services",
                "C": "A developer tests a single tax-calculation function using a unit test framework",
                "D": "Users validate an end-to-end payroll process"
            },
            "correctAnswer": "C",
            "explanation": "Component testing focuses on individual components in isolation, often using unit test frameworks and stubs or drivers.",
            "whyWrong": "Component testing focuses on individual units in isolation. Monitoring live incidents is operations; evaluating service interactions is integration testing; end-to-end payroll validation is acceptance testing.",
            "optionExplanations": {
                "A": "Component testing focuses on individual components in isolation, often using ...",
                "B": "Component testing focuses on individual components in isolation, often using ...",
                "C": "Component testing focuses on individual components in isolation, often using unit test frameworks and stubs or drivers.",
                "D": "Component testing focuses on individual components in isolation, often using ..."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "component testing",
                "test levels"
            ],
            "examTip": "Component means smallest separately testable part.",
            "memoryAid": "One component at a time."
        },
        {
            "id": "Q297",
            "statement": "Which of the following is a valid reason to adapt a software development lifecycle model?",
            "options": {
                "A": "The project must always use a pure waterfall model regardless of context",
                "B": "The project characteristics such as product complexity, team size, and regulatory requirements may require tailoring of the SDLC model",
                "C": "Agile models cannot be adapted or tailored",
                "D": "SDLC models are fixed standards that cannot be modified"
            },
            "correctAnswer": "B",
            "explanation": "SDLC models must often be adapted to fit the specific context of the project, including product complexity, team experience, regulatory requirements, risk profile, and customer involvement. No single model fits all situations.",
            "whyWrong": "SDLC models are not one-size-fits-all; they should be tailored to project and product characteristics.",
            "optionExplanations": {
                "A": "Pure waterfall is unsuitable for many projects, especially those with changing requirements.",
                "B": "Project context determines which SDLC model or combination works best.",
                "C": "Agile models are frequently adapted through practices like Scrum ceremonies, kanban, etc.",
                "D": "SDLC models are frameworks that should be adapted, not rigid standards."
            },
            "chapter": 2,
            "section": "2.1",
            "subsection": "2.1.2",
            "learningObjective": "FL-2.1.2",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "SDLC adaptation",
                "project context",
                "lifecycle models"
            ],
            "examTip": "SDLC models must fit project and product characteristics.",
            "memoryAid": "One size does not fit all."
        },
        {
            "id": "Q172",
            "statement": "A company is upgrading its CRM system and needs to verify that all customer records were correctly transferred from the old system. What type of testing is most appropriate?",
            "options": {
                "A": "Data migration testing as part of maintenance testing",
                "B": "Usability testing of the new CRM interface",
                "C": "Performance testing of the new system",
                "D": "Security testing of the login module"
            },
            "correctAnswer": "A",
            "explanation": "Data migration testing is a sub-type of maintenance testing that verifies data has been correctly extracted, transformed, and loaded into the new system. It checks data completeness, integrity, and consistency. This is essential when upgrading or replacing systems.",
            "whyWrong": "Usability testing evaluates user experience, not data correctness after migration.",
            "optionExplanations": {
                "A": "Data migration testing verifies correct data transfer as part of maintenance testing.",
                "B": "Usability is unrelated to data migration correctness.",
                "C": "Performance testing measures system speed, not data accuracy.",
                "D": "Security testing checks access control, not data integrity after migration."
            },
            "chapter": 2,
            "section": "2.3",
            "subsection": "2.3.1",
            "learningObjective": "FL-2.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "maintenance testing",
                "data migration",
                "data integrity"
            ],
            "examTip": "Any change to a live system requires maintenance testing, including data migration.",
            "memoryAid": "Data migration = move it, then prove it arrived intact."
        },
        {
            "id": "Q212",
            "statement": "Which statement correctly distinguishes functional from non-functional testing?",
            "options": {
                "C": "Functional testing checks what the system does; non-functional testing checks qualities such as performance or usability",
                "D": "Functional testing is always manual; non-functional testing is always automated",
                "A": "Functional testing is only done at acceptance level",
                "B": "Non-functional testing cannot reveal failures"
            },
            "correctAnswer": "C",
            "explanation": "Functional tests address behavior against functional requirements; non-functional tests address quality characteristics such as performance, usability, reliability, and security.",
            "whyWrong": "Functional testing checks what the system does; non-functional checks qualities like performance. Both can be automated; both occur at all levels; non-functional testing can reveal failures.",
            "optionExplanations": {
                "C": "Functional tests address behavior against functional requirements; non-functional tests address quality characteristics such as performance, usability, reliability, and security.",
                "D": "Functional tests address behavior against functional requirements; non-functi...",
                "A": "Functional tests address behavior against functional requirements; non-functi...",
                "B": "Functional tests address behavior against functional requirements; non-functi..."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.2",
            "learningObjective": "FL-2.2.2",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test types",
                "functional",
                "non-functional"
            ],
            "examTip": "What it does versus how well it does it.",
            "memoryAid": "Function vs quality attribute."
        },
        {
            "id": "Q299",
            "statement": "Which statement about test types and test levels is correct?",
            "options": {
                "A": "Functional testing is only performed during system testing",
                "B": "Non-functional testing is only relevant during acceptance testing",
                "C": "White-box testing can only be performed at the component test level",
                "D": "Functional, non-functional, and white-box testing can be performed at any test level"
            },
            "correctAnswer": "D",
            "explanation": "According to the ISTQB syllabus, all test types (functional, non-functional, white-box) can be performed at any test level (component, integration, system, acceptance). For example, performance testing (non-functional) can be done at component level for critical algorithms or at system level for end-to-end scenarios.",
            "whyWrong": "All test types apply at all test levels; there is no restriction.",
            "optionExplanations": {
                "A": "Functional tests apply at component, integration, and acceptance levels as well.",
                "B": "Non-functional tests like performance and security apply at all levels.",
                "C": "White-box testing can also be used at integration and even system levels.",
                "D": "All test types are applicable at every test level."
            },
            "chapter": 2,
            "section": "2.3",
            "subsection": "2.3.2",
            "learningObjective": "FL-2.2.2",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test types",
                "test levels",
                "functional",
                "non-functional",
                "white-box"
            ],
            "examTip": "All test types work at all test levels.",
            "memoryAid": "Any type, any level."
        },
        {
            "id": "Q092",
            "statement": "A usability test is conducted to evaluate how easily new users can navigate an e-commerce website. Which test type category does usability testing belong to?",
            "options": {
                "A": "Non-functional testing",
                "B": "Functional testing",
                "C": "White-box testing",
                "D": "Structural testing"
            },
            "correctAnswer": "A",
            "explanation": "Usability testing is a type of non-functional testing. Non-functional testing evaluates how the system behaves, including usability, performance, reliability, security, and maintainability. Usability assesses how intuitive and user-friendly the system is.",
            "whyWrong": "Functional testing verifies what the system does, not how well users can interact with it.",
            "optionExplanations": {
                "A": "Usability is a non-functional quality characteristic related to user experience.",
                "B": "Functional testing verifies specific functions and features.",
                "C": "White-box testing is based on internal code structure.",
                "D": "Structural testing is another term for white-box testing."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.2",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "non-functional testing",
                "usability testing",
                "test types"
            ],
            "examTip": "Usability, performance, security, reliability = non-functional test types.",
            "memoryAid": "Usability = user experience, not what the system does but how well users can use it."
        },
        {
            "id": "Q306",
            "statement": "During maintenance testing, which of the following best describes the role of impact analysis?",
            "options": {
                "A": "It determines which developer should fix each defect",
                "B": "It replaces the need for regression testing",
                "C": "It evaluates the performance of the test team",
                "D": "It identifies the scope and extent of testing needed after a change"
            },
            "correctAnswer": "D",
            "explanation": "Impact analysis helps determine what needs to be re-tested, what regression tests to run, and how much effort is needed. It guides maintenance testing decisions by assessing the potential ripple effects of changes throughout the system.",
            "whyWrong": "Impact analysis scopes the testing effort needed for a change.",
            "optionExplanations": {
                "A": "Assignment of developers is a project management decision, not impact analysis.",
                "B": "Impact analysis informs regression testing; it does not replace it.",
                "C": "Impact analysis assesses change effects, not team performance.",
                "D": "Impact analysis defines the breadth of testing needed after a change."
            },
            "chapter": 2,
            "section": "2.4",
            "subsection": "2.4.2",
            "learningObjective": "FL-2.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "impact analysis",
                "maintenance testing",
                "regression scope"
            ],
            "examTip": "Impact analysis = how much and what to test after a change.",
            "memoryAid": "Change + trace = scope."
        },
        {
            "id": "Q042",
            "statement": "Which of the following is an example of a non-functional test?",
            "options": {
                "A": "Verifying that the search function returns correct results",
                "B": "Checking that the login button redirects to the dashboard",
                "C": "Verifying that a web page loads in less than 2 seconds under normal load",
                "D": "Testing that the registration form accepts valid email formats"
            },
            "correctAnswer": "C",
            "explanation": "Non-functional testing evaluates how the system behaves, including performance, security, usability, reliability, and maintainability. Testing page load time is a performance test, which is a type of non-functional testing.",
            "whyWrong": "Checking that the login button redirects is functional testing (verifying a specific function).",
            "optionExplanations": {
                "A": "Search function correctness is functional testing.",
                "B": "Testing login redirection is functional testing.",
                "C": "Performance testing is a non-functional test type measuring response time.",
                "D": "Email format validation is functional testing."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.2",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "non-functional testing",
                "performance testing",
                "test types"
            ],
            "examTip": "Non-functional = HOW WELL (performance, security, usability). Functional = WHAT it does.",
            "memoryAid": "Non-functional = quality attributes; Functional = features."
        },
        {
            "id": "Q305",
            "statement": "A team needs to modify a single module in a large financial system. The test manager uses traceability information to determine which test cases are likely affected by this change. This is an example of:",
            "options": {
                "A": "Risk analysis",
                "B": "Impact analysis",
                "C": "Root cause analysis",
                "D": "Test completion"
            },
            "correctAnswer": "B",
            "explanation": "Impact analysis uses traceability between requirements, design, code, and tests to assess the potential effects of a change. It helps determine the scope of regression testing needed, identifies which test cases to update, and estimates the effort required.",
            "whyWrong": "Impact analysis assesses the effects of a change using traceability information.",
            "optionExplanations": {
                "A": "Risk analysis identifies potential problems but does not trace change effects.",
                "B": "Impact analysis evaluates how a change affects existing artifacts and tests.",
                "C": "Root cause analysis finds why a defect occurred, not what a change affects.",
                "D": "Test completion closes the test phase."
            },
            "chapter": 2,
            "section": "2.4",
            "subsection": "2.4.2",
            "learningObjective": "FL-2.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "impact analysis",
                "traceability",
                "change management",
                "regression scope"
            ],
            "examTip": "Impact analysis = what else will this change break?",
            "memoryAid": "Change impact = trace and assess."
        },
        {
            "id": "Q012",
            "statement": "Which of the following is a functional test type?",
            "options": {
                "A": "Assessing the maintainability of the source code",
                "B": "Checking how the system behaves when network connectivity is lost",
                "C": "Measuring the response time of a web page under heavy load",
                "D": "Verifying that a login form correctly authenticates valid users"
            },
            "correctAnswer": "D",
            "explanation": "Functional testing evaluates what the system does - its functions and features. Testing that a login form correctly authenticates users verifies a specific function against its requirements.",
            "whyWrong": "Response time measurement is a performance test, which is non-functional testing.",
            "optionExplanations": {
                "A": "Maintainability assessment is a non-functional test type.",
                "B": "Performance testing is a non-functional test type.",
                "C": "Reliability or resilience testing is non-functional.",
                "D": "Functional testing verifies that the system performs its specified functions correctly."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.2",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "functional testing",
                "test types",
                "verification"
            ],
            "examTip": "Functional = WHAT the system does. Non-functional = HOW WELL it does it.",
            "memoryAid": "Functional = features; Non-functional = performance, security, usability."
        },
        {
            "id": "Q213",
            "statement": "A tax rule changes after release and regression tests are selected around affected invoice calculations. What type of testing context is this?",
            "options": {
                "A": "Static testing only",
                "B": "Maintenance testing",
                "C": "Confirmation testing",
                "D": "Component testing only"
            },
            "correctAnswer": "B",
            "explanation": "Maintenance testing is performed after changes to an operational system, including enhancements, fixes, migrations, and changed business rules.",
            "whyWrong": "Static testing only (A): Maintenance testing is performed after changes to an operational system, incl...",
            "optionExplanations": {
                "A": "Maintenance testing is performed after changes to an operational system, incl...",
                "B": "Maintenance testing is performed after changes to an operational system, including enhancements, fixes, migrations, and changed business rules.",
                "C": "Maintenance testing is performed after changes to an operational system, incl...",
                "D": "Maintenance testing is performed after changes to an operational system, incl..."
            },
            "chapter": 2,
            "section": "2.3",
            "subsection": "2.3.1",
            "learningObjective": "FL-2.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "maintenance testing",
                "regression"
            ],
            "examTip": "Operational system plus change means maintenance testing.",
            "memoryAid": "After release, test the change."
        },
        {
            "id": "Q252",
            "statement": "Which is an example of regression testing?",
            "options": {
                "A": "Testing existing payment methods after adding a new wallet payment option",
                "B": "Testing the corrected line only",
                "C": "Reviewing a design diagram",
                "D": "Writing the initial project charter"
            },
            "correctAnswer": "A",
            "explanation": "Regression testing checks that changes have not adversely affected unchanged areas.",
            "whyWrong": "Regression testing checks that unchanged areas still work after a change. Testing only the corrected line is confirmation testing; reviewing design diagrams is static testing; writing a project charter is planning.",
            "optionExplanations": {
                "A": "Regression testing checks that changes have not adversely affected unchanged areas.",
                "B": "Regression testing checks that changes have not adversely affected unchanged ...",
                "C": "Regression testing checks that changes have not adversely affected unchanged ...",
                "D": "Regression testing checks that changes have not adversely affected unchanged ..."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.3",
            "learningObjective": "FL-2.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "regression testing",
                "change impact"
            ],
            "examTip": "Regression protects unchanged behavior.",
            "memoryAid": "Change should not break old features."
        },
        {
            "id": "Q011",
            "statement": "What is the primary purpose of integration testing?",
            "options": {
                "A": "To evaluate non-functional characteristics like performance",
                "B": "To test the system as a whole against requirements",
                "C": "To expose defects in the interfaces and interactions between integrated components",
                "D": "To verify individual functions work correctly in isolation"
            },
            "correctAnswer": "C",
            "explanation": "Integration testing focuses on the interactions between components or systems. It aims to find defects in interfaces, data flow between modules, and communication protocols that cannot be detected during component testing.",
            "whyWrong": "Testing the system as a whole is system testing, not integration testing.",
            "optionExplanations": {
                "A": "Non-functional testing can occur at any level but is not the primary purpose of integration testing.",
                "B": "Testing the complete system against requirements is system testing.",
                "C": "Integration testing specifically targets interface defects and interaction problems.",
                "D": "Verifying individual functions is component testing."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "integration testing",
                "interfaces",
                "interactions"
            ],
            "examTip": "Integration testing = testing the connections between pieces.",
            "memoryAid": "Integration = how pieces fit together."
        },
        {
            "id": "Q171",
            "statement": "A test team is verifying that a website can handle 10,000 concurrent users without crashing. Which type of test is being performed?",
            "options": {
                "A": "Acceptance testing",
                "B": "Functional testing",
                "C": "Component testing",
                "D": "Non-functional testing"
            },
            "correctAnswer": "D",
            "explanation": "Non-functional testing evaluates how the system behaves, including performance, reliability, and scalability. Testing the system's ability to handle 10,000 concurrent users is a performance/load test, which falls under non-functional testing.",
            "whyWrong": "Functional testing verifies what the system does (specific functions), not how well it performs.",
            "optionExplanations": {
                "A": "Acceptance testing validates fitness for use.",
                "B": "Functional testing checks correct behavior of features.",
                "C": "Component testing tests individual units.",
                "D": "Load/performance testing is a non-functional test type."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.2",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "non-functional testing",
                "performance",
                "load testing"
            ],
            "examTip": "If the test asks 'how well' or 'how many users,' it is non-functional testing.",
            "memoryAid": "Non-functional = How well, how fast, how secure."
        },
        {
            "id": "Q209",
            "statement": "In a sequential model, which testing activity should begin during requirements work rather than waiting for executable code?",
            "options": {
                "A": "Replacing acceptance testing with unit testing",
                "B": "Reviewing requirements and deriving initial test conditions",
                "C": "Running performance scripts in production",
                "D": "Closing all defect reports"
            },
            "correctAnswer": "B",
            "explanation": "Early testing in sequential development includes static testing and test analysis of requirements before code exists.",
            "whyWrong": "Early testing in sequential models includes requirements reviews and initial test design. Replacing unit testing, running performance scripts in production, or closing defect reports are not early testing activities.",
            "optionExplanations": {
                "A": "Early testing in sequential development includes static testing and test anal...",
                "B": "Early testing in sequential development includes static testing and test analysis of requirements before code exists.",
                "C": "Early testing in sequential development includes static testing and test anal...",
                "D": "Early testing in sequential development includes static testing and test anal..."
            },
            "chapter": 2,
            "section": "2.1",
            "subsection": "2.1.1",
            "learningObjective": "FL-2.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "SDLC",
                "early testing"
            ],
            "examTip": "Testing includes static activities before execution.",
            "memoryAid": "Test early, even without code."
        },
        {
            "id": "Q363",
            "statement": "A company updates its tax calculation module to comply with new legislation. The team tests the updated code and also checks that existing payroll reports remain correct. What types of testing are being performed?",
            "options": {
                "A": "Confirmation testing and regression testing",
                "B": "Only component testing",
                "C": "Acceptance testing and integration testing",
                "D": "Only functional testing"
            },
            "correctAnswer": "A",
            "explanation": "Confirmation testing (retesting) checks that the fix works, while regression testing ensures unchanged areas are not adversely affected by the change.",
            "whyWrong": "Confirmation testing verifies the fix; regression testing checks unchanged areas. Component testing alone is insufficient; acceptance and integration tests don't exclusively cover fixes; functional testing alone misses regression.",
            "optionExplanations": {
                "A": "Confirmation testing (retesting) checks that the fix works, while regression testing ensures unchanged areas are not adversely affected by the change.",
                "B": "Incorrect. 'Only component testing' does not match the correct concept: Confirmation testing (retesting) checks that the fix works, while regression ...",
                "C": "Incorrect. 'Acceptance testing and integration testing' does not match the correct concept: Confirmation testing (retesting) checks that the fix works, while regression ...",
                "D": "Incorrect. 'Only functional testing' does not match the correct concept: Confirmation testing (retesting) checks that the fix works, while regression ..."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.3",
            "learningObjective": "FL-2.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "confirmation testing",
                "regression testing"
            ],
            "examTip": "Fix = confirm. Side effects = regress.",
            "memoryAid": "Confirm + regress after each change."
        },
        {
            "id": "Q010",
            "statement": "Which of the following is an example of a component test?",
            "options": {
                "A": "Testing the entire application from end to end",
                "B": "Testing the user interface for usability",
                "C": "Testing a single function that calculates the square root of a number",
                "D": "Testing the interaction between two microservices"
            },
            "correctAnswer": "C",
            "explanation": "Component testing (also known as unit testing) focuses on testing individual components in isolation, such as a single function, method, class, or module. Testing a square root function is a classic example of component-level testing.",
            "whyWrong": "Testing interactions between services is integration testing, not component testing.",
            "optionExplanations": {
                "A": "End-to-end testing is system testing.",
                "B": "UI usability testing is a type of system or acceptance testing.",
                "C": "Component testing verifies individual elements like functions, methods, or classes in isolation.",
                "D": "Testing interaction between services is integration testing."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "component testing",
                "unit testing",
                "test levels"
            ],
            "examTip": "Component testing = testing the smallest testable parts in isolation.",
            "memoryAid": "Component = individual building block."
        },
        {
            "id": "Q364",
            "statement": "During which test level is interoperability with external systems MOST commonly evaluated?",
            "options": {
                "A": "System integration testing",
                "B": "Component testing",
                "C": "Acceptance testing only",
                "D": "Unit testing"
            },
            "correctAnswer": "A",
            "explanation": "System integration testing evaluates interactions between the tested system and external systems, including interoperability, data exchange, and protocol compliance.",
            "whyWrong": "Component testing (B): Integration testing evaluates interfaces and interactions between components ...; Acceptance testing only (C): Integration testing evaluates interfaces and interactions between components ...; Unit testing (D): Integration testing evaluates interfaces and interactions between components or systems.",
            "optionExplanations": {
                "A": "System integration testing evaluates interactions between the tested system and external systems, including interoperability, data exchange, and protocol compliance.",
                "B": "Incorrect. 'Component testing' does not match the correct concept: System integration testing evaluates interactions between the tested system a...",
                "C": "Incorrect. 'Acceptance testing only' does not match the correct concept: System integration testing evaluates interactions between the tested system a...",
                "D": "Incorrect. 'Unit testing' does not match the correct concept: System integration testing evaluates interactions between the tested system a..."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "integration testing",
                "interoperability"
            ],
            "examTip": "Integration = interaction between systems.",
            "memoryAid": "Integration connects systems."
        },
        {
            "id": "Q211",
            "statement": "A team verifies that two microservices exchange contract-compliant messages after each service has passed its own tests. Which test level is this?",
            "options": {
                "A": "Component testing",
                "B": "Acceptance testing",
                "C": "Maintenance testing",
                "D": "Integration testing"
            },
            "correctAnswer": "D",
            "explanation": "Integration testing evaluates interfaces and interactions between components or systems.",
            "whyWrong": "Component testing (A): Acceptance testing validates fitness for use.; Acceptance testing (B): Functional testing checks correct behavior of features.; Maintenance testing (C): Component testing tests individual units.",
            "optionExplanations": {
                "A": "Integration testing evaluates interfaces and interactions between components ...",
                "B": "Integration testing evaluates interfaces and interactions between components ...",
                "C": "Integration testing evaluates interfaces and interactions between components ...",
                "D": "Integration testing evaluates interfaces and interactions between components or systems."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "integration testing",
                "interfaces"
            ],
            "examTip": "Interfaces and interactions point to integration.",
            "memoryAid": "Integration = connections."
        },
        {
            "id": "Q146",
            "statement": "A company is migrating its customer database from an on-premise system to a cloud platform. What type of maintenance testing is most relevant during this migration?",
            "options": {
                "A": "Usability testing of the cloud platform interface",
                "B": "No testing is needed if the migration tool is certified",
                "C": "Data migration testing to verify data integrity and completeness after migration",
                "D": "Only functional testing of the new cloud interface"
            },
            "correctAnswer": "C",
            "explanation": "Data migration testing is a critical maintenance testing activity that verifies data is correctly transferred, transformed, and loaded into the target system. It checks data integrity, completeness, and consistency. This is essential when migrating from one system to another.",
            "whyWrong": "Certification of a migration tool does not guarantee correct data migration for specific data structures.",
            "optionExplanations": {
                "A": "Usability is secondary to data integrity during migration.",
                "B": "Testing is essential regardless of tool certification, as every migration is unique.",
                "C": "Data migration testing ensures data integrity, completeness, and correctness after migration.",
                "D": "Functional testing alone does not verify that existing data was correctly migrated."
            },
            "chapter": 2,
            "section": "2.3",
            "subsection": "2.3.1",
            "learningObjective": "FL-2.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "maintenance testing",
                "data migration",
                "data integrity"
            ],
            "examTip": "Data migration testing = verify data moved correctly, no loss, no corruption.",
            "memoryAid": "Migration testing = count, compare, validate."
        },
        {
            "id": "Q173",
            "statement": "A development team is integrating a payment gateway module with the existing order management system. They decide to integrate the payment module first, then the inventory module, then the shipping module, verifying at each step. What integration strategy are they using?",
            "options": {
                "A": "System testing",
                "B": "Incremental integration testing",
                "C": "Big-bang integration testing",
                "D": "Component testing"
            },
            "correctAnswer": "B",
            "explanation": "Incremental integration testing integrates components one at a time, testing after each addition. This allows defects to be localized to the newly added component, making debugging easier. The described approach (adding modules one by one with testing at each step) is incremental integration.",
            "whyWrong": "Big-bang integration would integrate all modules at once before testing.",
            "optionExplanations": {
                "A": "System testing tests the complete system, not the integration process.",
                "B": "Incremental integration adds and tests components one by one.",
                "C": "Big-bang integrates everything at once before testing.",
                "D": "Component testing tests individual modules in isolation."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "incremental integration",
                "integration testing",
                "strategy"
            ],
            "examTip": "Incremental = one at a time. Big-bang = all at once.",
            "memoryAid": "Incremental = step by step; Big-bang = all or nothing."
        }
    ],
    "exam3": [
        {
            "id": "Q174",
            "statement": "What are the two main categories of static testing?",
            "options": {
                "A": "Statement testing and decision testing",
                "B": "Exploratory testing and error guessing",
                "C": "Equivalence partitioning and boundary value analysis",
                "D": "Reviews and static analysis"
            },
            "correctAnswer": "D",
            "explanation": "The two main categories of static testing are reviews (human examination of work products) and static analysis (tool-based evaluation). Reviews include informal reviews, walkthroughs, technical reviews, and inspections. Static analysis uses tools to detect potential defects in code or other artifacts without executing them.",
            "whyWrong": "Equivalence partitioning, boundary value analysis, statement testing, decision testing, exploratory testing, and error guessing are all dynamic testing techniques that require code execution.",
            "optionExplanations": {
                "A": "Statement testing and decision testing are dynamic white-box structural techniques.",
                "B": "Exploratory testing and error guessing are dynamic experience-based techniques.",
                "C": "Both equivalence partitioning and boundary value analysis are dynamic black-box techniques.",
                "D": "Reviews and static analysis are the two main categories of static testing."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.1",
            "learningObjective": "FL-3.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "static testing",
                "reviews",
                "static analysis",
                "categories"
            ],
            "examTip": "Static testing = no code execution. Dynamic testing = code execution required.",
            "memoryAid": "Static = don't run it; Dynamic = run it and watch."
        },
        {
            "id": "Q308",
            "statement": "A team finds that 40% of the defects in their last release could have been detected by reviewing requirements and design documents before coding began. This finding emphasizes the value of:",
            "options": {
                "A": "Using more automated test tools",
                "B": "Adding more testers to the execution phase",
                "C": "Performing static testing on early work products",
                "D": "Increasing dynamic test execution time"
            },
            "correctAnswer": "C",
            "explanation": "The finding shows that many defects originate from decisions made early in the lifecycle. Static testing on requirements and design documents can detect such defects before they propagate into code, where they are more expensive to fix.",
            "whyWrong": "Static testing on early work products catches defects at their source.",
            "optionExplanations": {
                "A": "Automation helps execution but does not address requirement defects.",
                "B": "More testers executing tests would still find defects later rather than earlier.",
                "C": "Static testing on early work products prevents defects from propagating.",
                "D": "More dynamic testing would find these defects later, at higher cost."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.2",
            "learningObjective": "FL-3.1.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "static testing",
                "early work products",
                "defect prevention"
            ],
            "examTip": "Review early work products to catch defects before coding.",
            "memoryAid": "Catch defects at the source."
        },
        {
            "id": "Q366",
            "statement": "Which of the following is a typical objective of a static analysis tool?",
            "options": {
                "A": "Detecting code constructs that may lead to defects, such as infinite loops or unreachable code",
                "B": "Measuring the response time of the application under test",
                "C": "Executing test cases and comparing actual vs. expected results",
                "D": "Managing test execution schedules and resource allocation"
            },
            "correctAnswer": "A",
            "explanation": "Static analysis tools examine source code or models without execution, detecting potential defects such as infinite loops, unreachable code, syntax violations, and security vulnerabilities.",
            "whyWrong": "Static analysis tools examine code or models without execution; the other options describe dynamic testing, performance measurement, or test management activities.",
            "optionExplanations": {
                "A": "Static analysis tools examine source code or models without execution, detecting potential defects such as infinite loops, unreachable code, syntax violations, and security vulnerabilities.",
                "B": "Incorrect. 'Measuring the response time of the application under test' does not match the correct concept: Static analysis tools examine source code or models without execution, detect...",
                "C": "Incorrect. 'Executing test cases and comparing actual vs. expected re...' does not match the correct concept: Static analysis tools examine source code or models without execution, detect...",
                "D": "Incorrect. 'Managing test execution schedules and resource allocation' does not match the correct concept: Static analysis tools examine source code or models without execution, detect..."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.1",
            "learningObjective": "FL-3.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "static analysis",
                "static testing tools"
            ],
            "examTip": "Static analysis = find bugs without running code.",
            "memoryAid": "Analyze code without executing."
        },
        {
            "id": "Q128",
            "statement": "Which of the following is a benefit of static testing compared to dynamic testing?",
            "options": {
                "A": "Static testing measures performance characteristics of the system",
                "B": "Defects can be found directly in the work product without executing the code",
                "C": "Static testing requires a fully functional test environment",
                "D": "Static testing can only be performed after the code is compiled"
            },
            "correctAnswer": "B",
            "explanation": "Static testing finds defects directly in work products (requirements, design, code) without executing the software. This allows defects to be detected earlier in the development lifecycle, before dynamic testing can begin, and at a lower cost.",
            "whyWrong": "Static testing does not require a test environment or code execution.",
            "optionExplanations": {
                "A": "Performance measurement requires dynamic testing.",
                "B": "Static testing finds defects directly in work products without execution.",
                "C": "Static testing does not require a test environment.",
                "D": "Static testing can be performed before code is compiled or even written."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.1",
            "learningObjective": "FL-3.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "static testing",
                "benefits",
                "early defect detection"
            ],
            "examTip": "Static testing = find defects early, no execution, no test environment needed.",
            "memoryAid": "Static = early, cheap, no setup."
        },
        {
            "id": "Q254",
            "statement": "Which is a typical benefit of static testing?",
            "options": {
                "A": "Confirming a runtime memory leak",
                "B": "Replacing all dynamic tests",
                "C": "Finding defects in requirements before code is written",
                "D": "Measuring actual response time under load"
            },
            "correctAnswer": "C",
            "explanation": "Static testing can detect defects early in non-executable work products such as requirements, designs, and user stories.",
            "whyWrong": "Static testing can detect defects early in non-executable work products such as requirements, designs, and user stories. Confirming a runtime memory leak (option A): Static testing can detect defects early in non-executable work products such ...; Replacing all dynamic tests (option B): Static testing can detect defects early in non-executable work products such ...; Measuring actual response time under load (option D): Static testing can detect defects early in non-executable work products s...",
            "optionExplanations": {
                "A": "Runtime memory leaks are found by dynamic testing, not by static testing.",
                "B": "Static testing complements, not replaces, dynamic testing.",
                "C": "Static testing finds defects early in non-executable work products such as requirements, designs, and user stories.",
                "D": "Response time under load is measured by dynamic performance testing, not static testing."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.1",
            "learningObjective": "FL-3.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "static testing",
                "early defects"
            ],
            "examTip": "Static testing finds defects before execution.",
            "memoryAid": "Review before run."
        },
        {
            "id": "Q177",
            "statement": "Which of the following is a benefit of performing reviews during the requirements phase?",
            "options": {
                "A": "Automatically generating test cases from the reviewed requirements",
                "B": "Fixing ambiguous requirements early, preventing costly rework during development",
                "C": "Replacing the need for user acceptance testing",
                "D": "Eliminating the need for all dynamic testing"
            },
            "correctAnswer": "B",
            "explanation": "Reviews during the requirements phase can identify ambiguous, incomplete, or contradictory requirements early. Fixing these issues at this stage is significantly cheaper than discovering them during development or testing. This aligns with the principle of early testing.",
            "whyWrong": "Reviews complement but do not eliminate the need for dynamic testing.",
            "optionExplanations": {
                "A": "Reviews do not automatically generate test cases.",
                "B": "Early review of requirements reduces costly rework and clarifies expectations.",
                "C": "UAT remains necessary to validate that the system meets user needs.",
                "D": "Dynamic testing is still needed to verify actual system behavior."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.1",
            "learningObjective": "FL-3.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "reviews",
                "requirements",
                "early defect detection"
            ],
            "examTip": "Reviews at requirements phase = catch problems before they become expensive.",
            "memoryAid": "Requirements review = fix the blueprint before you build the house."
        },
        {
            "id": "Q256",
            "statement": "A moderator checks that reviewers received the design document and checklist before the meeting. Which review activity is this?",
            "options": {
                "A": "Planning and preparation support",
                "B": "Test execution",
                "C": "Defect fixing",
                "D": "Tool procurement"
            },
            "correctAnswer": "A",
            "explanation": "Review preparation includes distributing work products, defining scope, and ensuring participants are ready to review effectively.",
            "whyWrong": "Using suitable checklists and focusing on defined review objectives (B): Review preparation includes distributing work products, defining scope, and e...",
            "optionExplanations": {
                "A": "Review preparation includes distributing work products, defining scope, and ensuring participants are ready to review effectively.",
                "B": "Test execution is a separate testing activity, not review preparation.",
                "C": "Defect fixing happens after review findings, not during preparation.",
                "D": "Tool procurement is unrelated to distributing review materials."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.1",
            "learningObjective": "FL-3.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "review process",
                "preparation"
            ],
            "examTip": "Review meetings work only if preparation happens first.",
            "memoryAid": "Prepare before review."
        },
        {
            "id": "Q016",
            "statement": "During a code review, a senior developer identifies that a loop may continue indefinitely under certain conditions. What type of defect has been found?",
            "options": {
                "A": "A data flow defect",
                "B": "A usability defect",
                "C": "A requirements defect",
                "D": "A control flow defect"
            },
            "correctAnswer": "D",
            "explanation": "An infinite loop is a control flow defect because it involves incorrect logic in the flow of program execution. Control flow defects include infinite loops, unreachable code, and incorrect branching logic. Such control flow defects are commonly detected by static analysis and code reviews (ISTQB static testing).",
            "whyWrong": "A data flow defect would involve incorrect data usage, such as using a variable before initialization.",
            "optionExplanations": {
                "A": "Data flow defects involve improper handling of variable values.",
                "B": "Usability defects relate to user interface and user experience issues.",
                "C": "Requirements defects are errors in the specification, not in the code.",
                "D": "Control flow defects involve incorrect sequencing or looping in program execution."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.2",
            "learningObjective": "FL-3.1.1",
            "kLevel": "K2",
            "difficulty": "Easy",
            "keywords": [
                "static testing",
                "control flow",
                "defect types",
                "code review"
            ],
            "examTip": "Control flow = decisions and loops; Data flow = variable usage.",
            "memoryAid": "Control flow = the path the program walks; Data flow = what it carries."
        },
        {
            "id": "Q216",
            "statement": "During a formal review, who is primarily responsible for recording anomalies, decisions, and open points?",
            "options": {
                "A": "Scribe",
                "B": "Author",
                "C": "Manager",
                "D": "Moderator"
            },
            "correctAnswer": "A",
            "explanation": "The scribe records review information, including identified anomalies, decisions, and action items.",
            "whyWrong": "Author (B): The scribe records review information, including identified anomalies, decisi...; Manager (C): The scribe records review information, including identified anomalies, decisi...; Moderator (D): The scribe records review information, including identified anomalies, decisi...",
            "optionExplanations": {
                "A": "The scribe records review information, including identified anomalies, decisions, and action items.",
                "B": "The scribe records review information, including identified anomalies, decisi...",
                "C": "The scribe records review information, including identified anomalies, decisi...",
                "D": "The scribe records review information, including identified anomalies, decisi..."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.2",
            "learningObjective": "FL-3.2.2",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "review roles",
                "scribe"
            ],
            "examTip": "The scribe writes the review record.",
            "memoryAid": "Scribe = recorder."
        },
        {
            "id": "Q312",
            "statement": "In a formal inspection, who is responsible for fixing the defects found during the review?",
            "options": {
                "A": "The moderator",
                "B": "The tester who found the defect",
                "C": "The review team as a whole",
                "D": "The author of the work product"
            },
            "correctAnswer": "D",
            "explanation": "The author is responsible for correcting defects found in their work product during the review. Reviewers identify defects, the moderator facilitates the process, and the scribe records findings - but fixing is the author\\'s responsibility.",
            "whyWrong": "The author fixes defects in their own work product.",
            "optionExplanations": {
                "A": "The moderator facilitates the process but does not fix defects.",
                "B": "The tester or reviewer reports defects but does not fix them.",
                "C": "The team identifies defects; the author fixes them.",
                "D": "The author fixes the defects found during the review."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.2",
            "learningObjective": "FL-3.2.2",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "review roles",
                "author",
                "defect fixing"
            ],
            "examTip": "The author fixes their own work product defects.",
            "memoryAid": "Author finds and fixes."
        },
        {
            "id": "Q311",
            "statement": "In a formal review, which role is responsible for deciding whether to proceed to the next review phase and for ensuring that review objectives are met?",
            "options": {
                "A": "Scribe",
                "B": "Moderator (review leader)",
                "C": "Author",
                "D": "Reviewer"
            },
            "correctAnswer": "B",
            "explanation": "The moderator (or review leader) is responsible for the overall success of the review, including deciding on readiness to proceed, managing the review meeting, and ensuring objectives are achieved. The moderator plans the review, coordinates activities, and makes go/no-go decisions.",
            "whyWrong": "The moderator leads the review process and makes key decisions.",
            "optionExplanations": {
                "A": "The scribe records defects and decisions but does not lead the review.",
                "B": "The moderator manages the review process and decides on phase transitions.",
                "C": "The author creates the work product and may answer questions.",
                "D": "Reviewers examine the work product and identify potential defects."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.2",
            "learningObjective": "FL-3.2.2",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "review roles",
                "moderator",
                "review leader"
            ],
            "examTip": "Moderator leads the review process and makes decisions.",
            "memoryAid": "Moderator = review leader."
        },
        {
            "id": "Q214",
            "statement": "Which defect is static testing most likely to find before test execution?",
            "options": {
                "A": "A timeout caused by production network latency",
                "B": "A race condition visible only under load",
                "C": "An inconsistent term in two requirement sections",
                "D": "A memory leak occurring after six hours of runtime"
            },
            "correctAnswer": "C",
            "explanation": "Static testing examines work products without executing software and is well suited to finding ambiguity, inconsistency, omissions, and standards violations.",
            "whyWrong": "A walkthrough requires detailed preparation by all participants (A): Static testing examines work products without executing software and is well ...",
            "optionExplanations": {
                "A": "Static testing examines work products without executing software and is well ...",
                "B": "Static testing examines work products without executing software and is well ...",
                "C": "Static testing examines work products without executing software and is well suited to finding ambiguity, inconsistency, omissions, and standards violations.",
                "D": "Static testing examines work products without executing software and is well ..."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.1",
            "learningObjective": "FL-3.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "static testing",
                "reviews"
            ],
            "examTip": "No execution means documents and code are inspected, not run.",
            "memoryAid": "Static finds paper defects early."
        },
        {
            "id": "Q217",
            "statement": "A checklist for reviewing user stories asks whether each story has clear acceptance criteria, business value, and testability. What review success factor is being applied?",
            "options": {
                "A": "Limiting reviews to managers only",
                "B": "Using suitable checklists and focusing on defined review objectives",
                "C": "Replacing dynamic testing with reviews",
                "D": "Avoiding preparation to save time"
            },
            "correctAnswer": "B",
            "explanation": "Effective reviews use appropriate techniques such as checklists and focus on objectives relevant to the work product.",
            "whyWrong": "Performing static testing on early work products (A): Effective reviews use appropriate techniques such as checklists and focus on ...",
            "optionExplanations": {
                "A": "Effective reviews use appropriate techniques such as checklists and focus on ...",
                "B": "Effective reviews use appropriate techniques such as checklists and focus on objectives relevant to the work product.",
                "C": "Effective reviews use appropriate techniques such as checklists and focus on ...",
                "D": "Effective reviews use appropriate techniques such as checklists and focus on ..."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.4",
            "learningObjective": "FL-3.2.4",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "review success factors",
                "checklists"
            ],
            "examTip": "Checklists help reviewers focus.",
            "memoryAid": "Good checklist, better review."
        },
        {
            "id": "Q065",
            "statement": "Which of the following is a key difference between a formal inspection and a technical review?",
            "options": {
                "C": "Inspections follow a defined process with formal entry and exit criteria, while technical reviews are less formal",
                "D": "Inspections do not involve the author",
                "A": "Technical reviews require management approval to proceed",
                "B": "Inspections are always performed by external auditors"
            },
            "correctAnswer": "C",
            "explanation": "Inspections are the most formal type of review, with defined roles, formal entry and exit criteria, a defined process, and detailed data collection. Technical reviews are also formal but less rigorous than inspections, with fewer formal checks and procedures.",
            "whyWrong": "The author participates in an inspection by presenting the work product.",
            "optionExplanations": {
                "C": "Inspections are the most formal review type with strict entry/exit criteria.",
                "D": "The author presents and participates in inspections.",
                "A": "Technical reviews are typically managed within the team, not requiring management approval.",
                "B": "Inspections are performed by trained team members, not necessarily external auditors."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.1",
            "learningObjective": "FL-3.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "inspection",
                "technical review",
                "formality",
                "review types"
            ],
            "examTip": "Formality level (low to high): Informal, Walkthrough, Technical Review, Inspection.",
            "memoryAid": "Review formality: I W T I (Informal, Walkthrough, Technical, Inspection)."
        },
        {
            "id": "Q129",
            "statement": "A review is being conducted on a requirements specification. The moderator notices that most meeting time is spent on suggesting improvements rather than identifying defects. Which type of review is likely being conducted?",
            "options": {
                "A": "Static analysis",
                "B": "Walkthrough",
                "C": "Inspection",
                "D": "Technical review"
            },
            "correctAnswer": "B",
            "explanation": "Walkthroughs are author-led review meetings that focus on knowledge sharing, gathering suggestions, and improving the work product. Unlike inspections or technical reviews that focus on defect detection, walkthroughs emphasize learning and collaborative improvement.",
            "whyWrong": "Inspections focus on rigorous defect detection using formal entry/exit criteria.",
            "optionExplanations": {
                "A": "Static analysis is a tool-based technique, not a review meeting.",
                "B": "Inspections focus on formal defect detection with defined roles and metrics.",
                "C": "Walkthroughs emphasize knowledge sharing, suggestions, and improvement ideas.",
                "D": "Technical reviews focus on defect detection with trained moderators."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.1",
            "learningObjective": "FL-3.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "walkthrough",
                "review types",
                "knowledge sharing"
            ],
            "examTip": "Walkthrough = learning and suggestions. Inspection = rigorous defect finding.",
            "memoryAid": "Walkthrough = walk and talk through the document."
        },
        {
            "id": "Q368",
            "statement": "A walkthrough is being conducted on a requirements specification. The author actively presents each section while participants ask questions. What is the PRIMARY purpose of this type of review?",
            "options": {
                "A": "To share understanding, gather feedback, and identify potential ambiguities",
                "B": "To formally approve the document for release",
                "C": "To measure the author's presentation skills",
                "D": "To replace dynamic testing of the requirements"
            },
            "correctAnswer": "A",
            "explanation": "A walkthrough is an informal review led by the author to share knowledge, gather feedback, and identify issues such as ambiguities, inconsistencies, and omissions.",
            "whyWrong": "A walkthrough is an informal review led by the author to share knowledge, gather feedback, and identify issues such as ambiguities, inconsistencies... To formally approve the document for release (option B); To measure the author's presentation skills (option C); To replace dynamic testing of the requirements (option D).",
            "optionExplanations": {
                "A": "A walkthrough is an informal review led by the author to share knowledge, gather feedback, and identify issues such as ambiguities, inconsistencies, and omissions.",
                "B": "Incorrect. 'To formally approve the document for release' does not match the correct concept: A walkthrough is an informal review led by the author to share knowledge, gat...",
                "C": "Incorrect. 'To measure the author's presentation skills' does not match the correct concept: A walkthrough is an informal review led by the author to share knowledge, gat...",
                "D": "Incorrect. 'To replace dynamic testing of the requirements' does not match the correct concept: A walkthrough is an informal review led by the author to share knowledge, gat..."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.3",
            "learningObjective": "FL-3.2.3",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "walkthrough",
                "review types"
            ],
            "examTip": "Walkthrough = author-led feedback session.",
            "memoryAid": "Author walks through; reviewers comment."
        },
        {
            "id": "Q316",
            "statement": "Using a checklist-based review, evaluate this requirement: \"The system shall process orders quickly and efficiently.\" Which defect is most apparent?",
            "options": {
                "A": "The requirement is too detailed",
                "B": "The requirement conflicts with another requirement",
                "C": "The requirement is ambiguous and not testable because it does not define what \\'quickly\\' and \\'efficiently\\' mean in measurable terms",
                "D": "The requirement is technically impossible to implement"
            },
            "correctAnswer": "C",
            "explanation": "A good requirement must be testable (verifiable). \\'Quickly\\' and \\'efficiently\\' are subjective terms that cannot be objectively measured. The requirement should specify concrete, measurable criteria such as \\'95% of orders shall be processed within 2 seconds.\\'",
            "whyWrong": "The requirement is not testable due to subjective, unmeasurable terms.",
            "optionExplanations": {
                "A": "The requirement is vague, not detailed.",
                "B": "No information indicates a conflict.",
                "C": "Good requirements must be testable; subjective terms make this requirement untestable.",
                "D": "There is no evidence the requirement is technically impossible."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.4",
            "learningObjective": "FL-3.2.4",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "requirement review",
                "testability",
                "ambiguity",
                "checklist-based review"
            ],
            "examTip": "Check each requirement for testability and ambiguity.",
            "memoryAid": "If you cannot test it, it is not a good requirement."
        },
        {
            "id": "Q017",
            "statement": "What is the primary difference between a walkthrough and a technical review?",
            "options": {
                "A": "A walkthrough requires detailed preparation by all participants",
                "B": "A walkthrough is led by the author and focuses on knowledge sharing; a technical review is led by a trained moderator and focuses on finding defects",
                "C": "A technical review does not involve the author",
                "D": "A walkthrough is formal; a technical review is informal"
            },
            "correctAnswer": "B",
            "explanation": "A walkthrough is an informal review led by the author to share knowledge and gather feedback. A technical review is a more formal review led by a trained moderator, with defined roles and a focus on defect detection.",
            "whyWrong": "Walkthroughs are less formal than technical reviews, not more formal.",
            "optionExplanations": {
                "A": "Walkthroughs require less formal preparation than technical reviews.",
                "B": "Walkthroughs are author-led and informal; technical reviews are moderator-led and formal.",
                "C": "The author typically participates in all review types.",
                "D": "Walkthroughs are informal; technical reviews are more formal."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.1",
            "learningObjective": "FL-3.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "walkthrough",
                "technical review",
                "review types",
                "static testing"
            ],
            "examTip": "Informal walkthrough (author-led) vs formal technical review (moderator-led).",
            "memoryAid": "Walkthrough = walk in the park (informal); Technical review = serious business (formal)."
        },
        {
            "id": "Q371",
            "statement": "What is the PRIMARY difference between static testing and dynamic testing?",
            "options": {
                "A": "Static testing examines work products without executing code; dynamic testing executes code and observes behavior",
                "B": "Static testing is only performed on requirements; dynamic testing is only performed on code",
                "C": "Static testing finds functional defects; dynamic testing finds only non-functional defects",
                "D": "Static testing requires automated tools; dynamic testing can only be performed manually"
            },
            "correctAnswer": "A",
            "explanation": "The key distinction is execution: static testing (reviews, static analysis) does not involve executing the software, while dynamic testing runs the software and observes its behavior.",
            "whyWrong": "The key distinction is execution: static testing (reviews, static analysis) does not involve executing the software, while dynamic testing runs the... Static testing is only performed on requirements; dynamic testing is only performed on code (option B); Static testing finds functional defects; dynamic testing finds only non-functional defects (option C); Static testing requires automated tools; dynamic testing can only be performed manually (option D).",
            "optionExplanations": {
                "A": "The key distinction is execution: static testing (reviews, static analysis) does not involve executing the software, while dynamic testing runs the software and observes its behavior.",
                "B": "Incorrect. 'Static testing is only performed on requirements; dynamic...' does not match the correct concept: The key distinction is execution: static testing (reviews, static analysis) d...",
                "C": "Incorrect. 'Static testing finds functional defects; dynamic testing ...' does not match the correct concept: The key distinction is execution: static testing (reviews, static analysis) d...",
                "D": "Incorrect. 'Static testing requires automated tools; dynamic testing ...' does not match the correct concept: The key distinction is execution: static testing (reviews, static analysis) d..."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.1",
            "learningObjective": "FL-3.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "static testing",
                "dynamic testing"
            ],
            "examTip": "Static = no execution; Dynamic = execution.",
            "memoryAid": "Static = review; Dynamic = run."
        },
        {
            "id": "Q310",
            "statement": "A team reviews a design document to check for logical inconsistencies, while another team runs system tests on the built application. These activities represent:",
            "options": {
                "A": "White-box testing and black-box testing",
                "B": "Functional testing and non-functional testing",
                "C": "Component testing and integration testing",
                "D": "Static testing and dynamic testing"
            },
            "correctAnswer": "D",
            "explanation": "Reviewing a design document is static testing (examining a work product without execution). Running system tests is dynamic testing (executing the application and comparing results). They are complementary approaches that find different types of defects.",
            "whyWrong": "Design review = static; System test execution = dynamic.",
            "optionExplanations": {
                "A": "Both review and system test could be black-box, but the key difference is execution vs. non-execution.",
                "B": "Both functional and non-functional testing are dynamic.",
                "C": "Component testing tests individual units; integration tests interfaces.",
                "D": "Static = no execution review; Dynamic = execution-based testing."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.3",
            "learningObjective": "FL-3.1.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "static vs dynamic",
                "reviews",
                "system testing"
            ],
            "examTip": "No execution = static; Execution = dynamic.",
            "memoryAid": "Static testing = review work products; Dynamic testing = execute code and observe behavior."
        },
        {
            "id": "Q314",
            "statement": "A review type is described as: led by the author, intended to educate participants and gather feedback, with no formal preparation required. Which review type is this?",
            "options": {
                "A": "Inspection",
                "B": "Technical review",
                "C": "Walkthrough",
                "D": "Informal review"
            },
            "correctAnswer": "C",
            "explanation": "A walkthrough is typically led by the author, focuses on explaining the work product to gather feedback and consensus, and participants may not need formal preparation. Walkthroughs are less formal than inspections but more structured than informal reviews.",
            "whyWrong": "Walkthrough = author-led, educational, feedback-oriented.",
            "optionExplanations": {
                "A": "Inspections are formal, with defined roles and entry/exit criteria.",
                "B": "Technical reviews are led by a moderator, not the author.",
                "C": "Walkthroughs are author-led, educational, and feedback-focused.",
                "D": "Informal reviews have no defined process or role structure."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.3",
            "learningObjective": "FL-3.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "walkthrough",
                "review types",
                "author-led"
            ],
            "examTip": "Walkthrough = author presents and gathers feedback.",
            "memoryAid": "Author walks through."
        },
        {
            "id": "Q369",
            "statement": "Which of the following review activities occurs AFTER the review meeting?",
            "options": {
                "A": "Follow-up and fixing of identified defects",
                "B": "Preparation by individual reviewers",
                "C": "Selection of reviewers and scheduling",
                "D": "Kick-off and distribution of work products"
            },
            "correctAnswer": "A",
            "explanation": "The follow-up phase occurs after the review meeting, where the author addresses identified defects, the moderator checks that corrections are made, and the review is formally closed.",
            "whyWrong": "A walkthrough is typically led by the author to share understanding and gather comments or feedback on a work product. To formally measure branch coverage (option A): The follow-up phase occurs after the review meeting, where the author addresses identified defects, the moderator checks that corrections are made, and the review is formally closed.; To execute test cases against the system (option B); To approve tool procurement (option C).",
            "optionExplanations": {
                "A": "The follow-up phase occurs after the review meeting, where the author addresses identified defects, the moderator checks that corrections are made, and the review is formally closed.",
                "B": "Incorrect. 'Preparation by individual reviewers' does not match the correct concept: The follow-up phase occurs after the review meeting, where the author address...",
                "C": "Incorrect. 'Selection of reviewers and scheduling' does not match the correct concept: The follow-up phase occurs after the review meeting, where the author address...",
                "D": "Incorrect. 'Kick-off and distribution of work products' does not match the correct concept: The follow-up phase occurs after the review meeting, where the author address..."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.1",
            "learningObjective": "FL-3.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "review process",
                "follow-up"
            ],
            "examTip": "After the meeting comes fixing and follow-up.",
            "memoryAid": "Fix and confirm."
        },
        {
            "id": "Q257",
            "statement": "Which behavior supports successful reviews?",
            "options": {
                "A": "Skip follow-up on agreed actions",
                "B": "Discuss defects objectively and avoid personal criticism",
                "C": "Use the meeting to evaluate employee performance",
                "D": "Allow only managers to speak"
            },
            "correctAnswer": "B",
            "explanation": "Successful reviews require trust, objectivity, respectful communication, and focus on the work product rather than the author.",
            "whyWrong": "To share understanding, gather feedback, and identify potential ambiguities (A): Successful reviews require trust, objectivity, respectful communication, and ...; To measure the author's presentation skills (C): Successful reviews require trust, objectivity, respectful communication, and ...; To replace dynamic testing of the requirements (D): Successful reviews require trust, objectivity, resp...",
            "optionExplanations": {
                "A": "Successful reviews require trust, objectivity, respectful communication, and ...",
                "B": "Successful reviews require trust, objectivity, respectful communication, and focus on the work product rather than the author.",
                "C": "Successful reviews require trust, objectivity, respectful communication, and ...",
                "D": "Successful reviews require trust, objectivity, respectful communication, and ..."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.4",
            "learningObjective": "FL-3.2.4",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "review success",
                "communication"
            ],
            "examTip": "Review the product, not the person.",
            "memoryAid": "Objective and respectful."
        },
        {
            "id": "Q315",
            "statement": "Review the following user story: \"As a registered user, I want to reset my password so that I can regain access to my account.\" Acceptance criteria: \"User receives an email with a reset link. The link expires after 24 hours.\" Which potential defect is present in this user story?",
            "options": {
                "A": "The story is too long and detailed",
                "B": "The story has too many acceptance criteria",
                "C": "The acceptance criteria are too technical for stakeholders",
                "D": "The story does not define what happens if the email does not arrive or if the link has expired"
            },
            "correctAnswer": "D",
            "explanation": "The acceptance criteria only describe the happy path. Missing are alternative flows: what happens if the email is not delivered, if the link has expired before use, or if the user tries to use a link after already resetting the password. A well-defined user story should include both happy and alternative paths or reference where they are defined.",
            "whyWrong": "The story lacks handling for failure scenarios such as missing email or expired links.",
            "optionExplanations": {
                "A": "The story is appropriately sized for a single feature.",
                "B": "If anything, the story has too few acceptance criteria.",
                "C": "The criteria are appropriate for any audience.",
                "D": "The story is incomplete without describing alternative/error flows for email delivery and link expiration."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.4",
            "learningObjective": "FL-3.2.4",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "review technique",
                "user story",
                "acceptance criteria",
                "defect identification"
            ],
            "examTip": "Look for missing error handling in acceptance criteria.",
            "memoryAid": "Happy path + missing errors = defect."
        },
        {
            "id": "Q095",
            "statement": "A development team uses a tool to detect unreachable code, unused variables, and potential null pointer dereferences in their source code. What type of analysis is being performed?",
            "options": {
                "C": "Static analysis",
                "D": "Usability analysis",
                "A": "Performance analysis",
                "B": "Dynamic analysis"
            },
            "correctAnswer": "C",
            "explanation": "Static analysis tools examine source code without executing it to identify potential defects such as unreachable code, unused variables, null pointer dereferences, coding standard violations, and security vulnerabilities. These tools find defects early in the development process.",
            "whyWrong": "Dynamic analysis requires code execution; static analysis does not execute the code.",
            "optionExplanations": {
                "C": "Static analysis detects code issues without execution, finding defects early.",
                "D": "Usability analysis evaluates user interface and user experience.",
                "A": "Performance analysis measures system responsiveness and resource usage.",
                "B": "Dynamic analysis observes runtime behavior during execution."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.2",
            "learningObjective": "FL-3.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "static analysis",
                "code analysis",
                "unreachable code"
            ],
            "examTip": "Static analysis tools find issues like unreachable code, null pointers, and coding violations without running the program.",
            "memoryAid": "Static analysis = code inspection by tools, no execution needed."
        },
        {
            "id": "Q149",
            "statement": "Which of the following is a benefit of using static analysis tools during development?",
            "options": {
                "A": "Replacing the need for all dynamic testing activities",
                "B": "Identifying coding standard violations and potential security vulnerabilities before code execution",
                "C": "Measuring the performance of the application under load",
                "D": "Automatically fixing all defects found in the code"
            },
            "correctAnswer": "B",
            "explanation": "Static analysis tools examine source code without executing it. They can identify coding standard violations, potential security vulnerabilities, syntax errors, and other issues early in development. This complements but does not replace dynamic testing.",
            "whyWrong": "Static analysis cannot replace dynamic testing, which is needed to verify runtime behavior.",
            "optionExplanations": {
                "A": "Dynamic testing is still needed to verify runtime behavior and non-functional characteristics.",
                "B": "Static analysis detects code issues, standard violations, and potential vulnerabilities early.",
                "C": "Performance measurement requires dynamic testing tools, not static analysis.",
                "D": "Tools identify defects but do not automatically fix them."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.2",
            "learningObjective": "FL-3.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "static analysis",
                "static testing",
                "coding standards",
                "security"
            ],
            "examTip": "Static analysis = find issues early without running the code.",
            "memoryAid": "Static analysis = code inspection by tool, no execution needed."
        },
        {
            "id": "Q148",
            "statement": "During an informal review of a requirements document, a reviewer notices several ambiguous statements. What is the primary goal of this type of review?",
            "options": {
                "A": "To formally approve the requirements document",
                "B": "To collect detailed metrics for process improvement",
                "C": "To assign corrective actions to specific team members",
                "D": "To detect defects informally without a formal meeting, at low cost"
            },
            "correctAnswer": "D",
            "explanation": "An informal review is a lightweight, inexpensive review technique that does not follow a formal process. It typically involves the author sharing the document with colleagues who provide comments. The goal is to detect defects early with minimal overhead.",
            "whyWrong": "Formal approval, detailed metrics, and assigned corrective actions are characteristics of formal reviews.",
            "optionExplanations": {
                "A": "Formal approval is a goal of inspections, not informal reviews.",
                "B": "Detailed metrics collection is associated with formal reviews.",
                "C": "Corrective action assignment is more typical of formal review processes.",
                "D": "Informal reviews are low-cost, flexible, and aim to find defects without process overhead."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.1",
            "learningObjective": "FL-3.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "informal review",
                "review types",
                "defect detection"
            ],
            "examTip": "Informal reviews = no formal process, no meeting required, low cost, flexible.",
            "memoryAid": "Informal = no suits, no meeting room, just feedback."
        },
        {
            "id": "Q372",
            "statement": "Which of the following BEST describes the value of static testing in a software development lifecycle?",
            "options": {
                "A": "It can find defects early in the lifecycle when they are cheaper to fix, and provides information about quality without executing the system",
                "B": "It replaces the need for all dynamic testing activities",
                "C": "It guarantees that the delivered system will have zero defects",
                "D": "It is only useful for safety-critical systems and does not add value in Agile projects"
            },
            "correctAnswer": "A",
            "explanation": "Static testing adds value across all lifecycle models by detecting defects early (requirements, design) when they are significantly cheaper to fix, and it assesses code quality without execution.",
            "whyWrong": "Static testing adds value across all lifecycle models by detecting defects early (requirements, design) when they are significantly cheaper to fix, and it assesses code quality without execution.",
            "optionExplanations": {
                "A": "Static testing adds value across all lifecycle models by detecting defects early (requirements, design) when they are significantly cheaper to fix, and it assesses code quality without execution.",
                "B": "Incorrect. 'It replaces the need for all dynamic testing activities' does not match the correct concept: Static testing adds value across all lifecycle models by detecting defects ea...",
                "C": "Incorrect. 'It guarantees that the delivered system will have zero de...' does not match the correct concept: Static testing adds value across all lifecycle models by detecting defects ea...",
                "D": "Incorrect. 'It is only useful for safety-critical systems and does no...' does not match the correct concept: Static testing adds value across all lifecycle models by detecting defects ea..."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.3",
            "learningObjective": "FL-3.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "static testing value",
                "early defect detection"
            ],
            "examTip": "Find defects early, fix them cheaply.",
            "memoryAid": "Shift-left: find defects early when they cost less to fix."
        },
        {
            "id": "Q317",
            "statement": "Which factor is most likely to contribute to a successful review?",
            "options": {
                "C": "Adequate preparation time for all reviewers before the review meeting",
                "D": "Using the review meeting to evaluate individual performance",
                "A": "Inviting as many people as possible regardless of their role",
                "B": "Skipping preparation to allow more time for the meeting"
            },
            "correctAnswer": "C",
            "explanation": "Adequate preparation time is a critical success factor for reviews. Reviewers need sufficient time to study the work product, understand it, and identify potential defects before the meeting. Without preparation, the review meeting is less effective and may miss important defects.",
            "whyWrong": "Preparation is essential for effective reviews.",
            "optionExplanations": {
                "C": "Sufficient preparation time enables reviewers to find more defects.",
                "D": "Performance evaluation during reviews destroys trust and openness.",
                "A": "Participants should have relevant roles and expertise, not just be numerous.",
                "B": "Skipping preparation reduces defect detection effectiveness."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.5",
            "learningObjective": "FL-3.2.5",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "review success factors",
                "preparation",
                "effective reviews"
            ],
            "examTip": "Good preparation leads to good review results.",
            "memoryAid": "Prepare well, review well."
        },
        {
            "id": "Q048",
            "statement": "Which of the following roles is responsible for ensuring that a review meeting runs effectively and that all participants follow the review process?",
            "options": {
                "A": "Reviewer",
                "B": "Moderator",
                "C": "Author",
                "D": "Scribe"
            },
            "correctAnswer": "B",
            "explanation": "The moderator (also called the review leader) is responsible for planning the review, leading the review meeting, ensuring the process is followed, mediating discussions, and ensuring the review achieves its objectives.",
            "whyWrong": "The author is the creator of the work product being reviewed, not the process leader.",
            "optionExplanations": {
                "A": "Reviewers examine the work product and identify defects.",
                "B": "The moderator leads and manages the review process.",
                "C": "The author created the work product and participates as a reviewer of their own work.",
                "D": "The scribe documents defects and decisions during the review."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.1",
            "learningObjective": "FL-3.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "moderator",
                "review roles",
                "review roles"
            ],
            "examTip": "Moderator = the leader/manager of the review. Author = the creator. Reviewer = the inspector. Scribe = the recorder.",
            "memoryAid": "MARS: Moderator, Author, Reviewer, Scribe."
        },
        {
            "id": "Q015",
            "statement": "Which of the following is a benefit of static testing?",
            "options": {
                "A": "Finding defects early in the development process when they are cheaper to fix",
                "B": "Executing the code to verify its behavior",
                "C": "Validating the system against user acceptance criteria",
                "D": "Testing the system under realistic load conditions"
            },
            "correctAnswer": "A",
            "explanation": "Static testing (reviews and static analysis) finds defects without executing code. This allows defects to be detected early in the development lifecycle when they are significantly less expensive to fix than if found during dynamic testing.",
            "whyWrong": "Static testing does not involve code execution; that is dynamic testing.",
            "optionExplanations": {
                "A": "Static testing finds defects early, reducing cost and effort.",
                "B": "Code execution is dynamic testing, not static testing.",
                "C": "UAT is a dynamic testing activity performed by end users.",
                "D": "Load testing is a dynamic testing activity."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.1",
            "learningObjective": "FL-3.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "static testing",
                "reviews",
                "early defect detection"
            ],
            "examTip": "Static = no code execution; Dynamic = code execution.",
            "memoryAid": "Static = sitting still, reading; Dynamic = running the code."
        },
        {
            "id": "Q215",
            "statement": "What is the main objective of a walkthrough?",
            "options": {
                "A": "To formally measure branch coverage",
                "B": "To execute test cases against the system",
                "C": "To approve tool procurement",
                "D": "To explain a work product and obtain feedback from participants"
            },
            "correctAnswer": "D",
            "explanation": "A walkthrough is typically led by the author to share understanding and gather comments or feedback on a work product.",
            "whyWrong": "To formally measure branch coverage (A): A walkthrough is typically led by the author to share understanding and gathe...; To execute test cases against the system (B): A walkthrough is typically led by the author to share understanding and gathe...; To approve tool procurement (C): A walkthrough is typically led by the author to share understanding and gathe...",
            "optionExplanations": {
                "A": "A walkthrough is typically led by the author to share understanding and gathe...",
                "B": "A walkthrough is typically led by the author to share understanding and gathe...",
                "C": "A walkthrough is typically led by the author to share understanding and gathe...",
                "D": "A walkthrough is typically led by the author to share understanding and gather comments or feedback on a work product."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.3",
            "learningObjective": "FL-3.2.3",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "walkthrough",
                "review types"
            ],
            "examTip": "Walkthroughs are author-led explanation and feedback sessions.",
            "memoryAid": "Walk through the work product."
        },
        {
            "id": "Q046",
            "statement": "During a formal review, a participant identifies a significant defect in the design document. The moderator determines the review cannot proceed until the defect is resolved. What should happen next?",
            "options": {
                "A": "The document should be approved with comments",
                "B": "The review should be suspended or adjourned until the defect is resolved",
                "C": "The author should fix the defect immediately while the review continues",
                "D": "The review should continue and the defect can be fixed later"
            },
            "correctAnswer": "B",
            "explanation": "When a significant defect is found during a review that prevents meaningful continuation, the moderator may suspend or adjourn the review. The author fixes the defect, and the review is rescheduled. This prevents wasting participants' time reviewing a known-problematic document.",
            "whyWrong": "Continuing the review when a fundamental defect exists wastes participants' time as the document may change significantly.",
            "optionExplanations": {
                "A": "Approval cannot happen with unresolved major defects.",
                "B": "Continuing ignores the major issue and wastes effort.",
                "C": "Suspending the review is appropriate for major defects that affect reviewability.",
                "D": "Fixing during the review disrupts the process and is not standard practice."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.1",
            "learningObjective": "FL-3.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "formal review",
                "formal review",
                "formal review"
            ],
            "examTip": "Major defect found? Suspend the review, fix the document, then reschedule.",
            "memoryAid": "Big problem = pause review, fix, restart."
        },
        {
            "id": "Q255",
            "statement": "Which review type is usually the most formal and uses defined roles, entry criteria, and documented results?",
            "options": {
                "A": "Informal review",
                "B": "Pair programming",
                "C": "Ad hoc reading",
                "D": "Inspection"
            },
            "correctAnswer": "D",
            "explanation": "Inspections are formal reviews with defined roles, process, criteria, and documented outcomes.",
            "whyWrong": "Informal review (A): Inspections are formal reviews with defined roles, process, criteria, and doc...; Pair programming (B): Inspections are formal reviews with defined roles, process, criteria, and doc...; Ad hoc reading (C): Inspections are formal reviews with defined roles, process, criteria, and doc...",
            "optionExplanations": {
                "A": "Inspections are formal reviews with defined roles, process, criteria, and doc...",
                "B": "Inspections are formal reviews with defined roles, process, criteria, and doc...",
                "C": "Inspections are formal reviews with defined roles, process, criteria, and doc...",
                "D": "Inspections are formal reviews with defined roles, process, criteria, and documented outcomes."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.3",
            "learningObjective": "FL-3.2.3",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "inspection",
                "review types"
            ],
            "examTip": "Inspection is the formal review type.",
            "memoryAid": "Inspect formally."
        },
        {
            "id": "Q176",
            "statement": "During a code review, a reviewer notices that a variable is declared but never used in the method. What type of defect is this?",
            "options": {
                "C": "A data flow defect",
                "D": "A control flow defect",
                "A": "A requirements defect",
                "B": "A usability defect"
            },
            "correctAnswer": "C",
            "explanation": "An unused variable is a data flow defect because it relates to how data is handled in the code. Data flow defects include unused variables, variables used before initialization, and variables that are assigned but never read.",
            "whyWrong": "Control flow defects involve incorrect execution paths, such as unreachable code or infinite loops.",
            "optionExplanations": {
                "C": "Data flow defects include unused variables and improper data usage.",
                "D": "Control flow defects involve loops, branches, and execution sequences.",
                "A": "Requirements defects are errors in specifications.",
                "B": "Usability defects relate to user interface and experience."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.2",
            "learningObjective": "FL-3.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "data flow",
                "defect types",
                "code review",
                "static testing"
            ],
            "examTip": "Data flow = variable usage. Control flow = decision paths.",
            "memoryAid": "Data flow = what happens to data; Control flow = which path is taken."
        },
        {
            "id": "Q313",
            "statement": "Which of the following correctly distinguishes an informal review from a technical review?",
            "options": {
                "A": "An informal review has no formal documented process; a technical review follows a defined procedure with roles and documented results",
                "B": "A technical review is always led by the author; an informal review is led by a moderator",
                "C": "An informal review produces a formal inspection report",
                "D": "A technical review requires no preparation by participants"
            },
            "correctAnswer": "A",
            "explanation": "Informal reviews are casual, with no defined process, no formal roles, and minimal documentation. Technical reviews follow a defined procedure with identified roles (moderator, reviewers, author, scribe) and produce documented results. They differ in formality, structure, and documentation requirements.",
            "whyWrong": "Informal = no defined process; Technical = defined procedure with roles and documented results.",
            "optionExplanations": {
                "A": "Informal reviews have no formal process; technical reviews have defined procedures.",
                "B": "The author may lead informal reviews, but technical reviews are led by a moderator.",
                "C": "Informal reviews do not produce formal reports.",
                "D": "Technical reviews require participant preparation before the meeting."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.3",
            "learningObjective": "FL-3.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "review types",
                "informal review",
                "technical review"
            ],
            "examTip": "Informal = casual; Technical = structured.",
            "memoryAid": "No formality vs. defined structure."
        },
        {
            "id": "Q309",
            "statement": "Which statement correctly compares static and dynamic testing?",
            "options": {
                "A": "Static testing requires the software to be compiled; dynamic testing does not",
                "B": "Both static and dynamic testing require test cases to be executed",
                "C": "Static testing examines work products without executing code; dynamic testing executes code with defined test cases",
                "D": "Static testing is only applicable to source code"
            },
            "correctAnswer": "C",
            "explanation": "Static testing reviews work products (requirements, design documents, code) without executing the software. Dynamic testing executes the software with specific inputs and compares actual results against expected results. Both are essential for comprehensive quality assurance.",
            "whyWrong": "Static = no execution; Dynamic = execute and compare results.",
            "optionExplanations": {
                "A": "Static testing does not require compilation; dynamic testing does.",
                "B": "Static testing does not execute anything; it involves review and analysis.",
                "C": "Static = review without execution; Dynamic = execute with test cases.",
                "D": "Static testing applies to any work product, including requirements and designs."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.3",
            "learningObjective": "FL-3.1.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "static testing",
                "dynamic testing",
                "comparison"
            ],
            "examTip": "Static = inspect; Dynamic = execute.",
            "memoryAid": "No code run vs. code run."
        },
        {
            "id": "Q370",
            "statement": "A review team is preparing for a technical review of a design document. Which factor is MOST critical for the success of this review?",
            "options": {
                "A": "Each reviewer prepares individually using a defined checklist or focus area before the meeting",
                "B": "The manager attends to evaluate individual performance",
                "C": "All defects found during the review are immediately fixed during the meeting",
                "D": "The review meeting is conducted without distributing the document beforehand to ensure fresh perspectives"
            },
            "correctAnswer": "A",
            "explanation": "Effective reviews require adequate preparation by reviewers using checklists, defined objectives, and focus areas to identify defects before and during the meeting.",
            "whyWrong": "Effective reviews require adequate preparation by reviewers using checklists, defined objectives, and focus areas to identify defects before and during the meeting.",
            "optionExplanations": {
                "A": "Effective reviews require adequate preparation by reviewers using checklists, defined objectives, and focus areas to identify defects before and during the meeting.",
                "B": "Incorrect. 'The manager attends to evaluate individual performance' does not match the correct concept: Effective reviews require adequate preparation by reviewers using checklists,...",
                "C": "Incorrect. 'All defects found during the review are immediately fixed...' does not match the correct concept: Effective reviews require adequate preparation by reviewers using checklists,...",
                "D": "Incorrect. 'The review meeting is conducted without distributing the ...' does not match the correct concept: Effective reviews require adequate preparation by reviewers using checklists,..."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.4",
            "learningObjective": "FL-3.2.4",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "review success factors",
                "preparation"
            ],
            "examTip": "Preparation separates effective reviews from ineffective ones.",
            "memoryAid": "Prepare before you review."
        },
        {
            "id": "Q175",
            "statement": "What is the correct sequence of phases in a formal review process?",
            "options": {
                "A": "Review meeting, Individual preparation, Planning, Rework, Follow-up",
                "B": "Planning, Kick-off, Individual preparation, Review meeting, Rework, Follow-up",
                "C": "Planning, Review meeting, Kick-off, Individual preparation, Rework",
                "D": "Individual preparation, Planning, Kick-off, Review meeting, Follow-up, Rework"
            },
            "correctAnswer": "B",
            "explanation": "The formal review process follows these phases: 1) Planning (defining scope, selecting participants), 2) Kick-off (communicating logistics), 3) Individual preparation (each reviewer examines the work product), 4) Review meeting (discussing defects), 5) Rework (author fixes defects), 6) Follow-up (verifying fixes).",
            "whyWrong": "The review meeting occurs after individual preparation, not before.",
            "optionExplanations": {
                "A": "Planning must come before the review meeting.",
                "B": "Planning, Kick-off, Individual preparation, Review meeting, Rework, Follow-up is the correct order.",
                "C": "Individual preparation occurs before the review meeting.",
                "D": "Planning must come first, and follow-up after rework."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.1",
            "learningObjective": "FL-3.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "formal review",
                "review process",
                "phases"
            ],
            "examTip": "Formal review phases: Plan, Kick-off, Prepare, Meeting, Rework, Follow-up.",
            "memoryAid": "PKPMRF: Plan, Kick-off, Prepare, Meeting, Rework, Follow-up."
        },
        {
            "id": "Q047",
            "statement": "What is the main difference between static analysis and dynamic analysis?",
            "options": {
                "A": "Static analysis requires a test environment; dynamic analysis does not",
                "B": "Static analysis is automated; dynamic analysis is manual",
                "C": "Static analysis finds defects at runtime; dynamic analysis finds defects at compile time",
                "D": "Static analysis is performed without executing the code; dynamic analysis requires code execution"
            },
            "correctAnswer": "D",
            "explanation": "Static analysis examines source code or other work products without executing them. Dynamic analysis involves executing the code and observing its behavior. Static analysis detects issues like coding standard violations, while dynamic analysis detects runtime failures.",
            "whyWrong": "Both static and dynamic analysis can be automated or manual depending on the tools and context.",
            "optionExplanations": {
                "A": "Static analysis does not require a test environment; dynamic analysis typically does.",
                "B": "Both can be automated or performed manually.",
                "C": "This describes compile-time vs runtime, which is a different distinction.",
                "D": "Static = no execution; Dynamic = execution required."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.2",
            "learningObjective": "FL-3.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "static analysis",
                "dynamic analysis",
                "code execution"
            ],
            "examTip": "Static = don't run the code; Dynamic = run the code and watch what happens.",
            "memoryAid": "Static = read-only; Dynamic = run-time."
        }
    ],
    "exam4": [
        {
            "id": "Q218",
            "statement": "A field accepts integer order quantities from 1 to 99 inclusive. Using two-value boundary value analysis, which set is most appropriate?",
            "options": {
                "A": "50, 51, 52, 53",
                "B": "-1, 0, 100, 101",
                "C": "1, 2, 98, 99",
                "D": "0, 1, 99, 100"
            },
            "correctAnswer": "C",
            "explanation": "Two-value BVA for valid boundaries uses the boundary value and the nearest valid neighbor on each side inside the valid range.",
            "whyWrong": "50, 51, 52, 53 (A): Two-value BVA for valid boundaries uses the boundary value and the nearest va...; -1, 0, 100, 101 (B): Two-value BVA for valid boundaries uses the boundary value and the nearest va...; 0, 1, 99, 100 (D): Two-value BVA for valid boundaries uses the boundary value and the nearest va...",
            "optionExplanations": {
                "A": "50, 51, 52, 53 are interior values, not boundary values.",
                "B": "-1, 0, 100, 101 include invalid adjacent values (not two-value BVA for valid boundaries).",
                "C": "1, 2, 98, 99 cover each boundary (1, 99) with its nearest valid neighbor inside the range (2, 98).",
                "D": "0, 1, 99, 100 includes invalid adjacent values (0 and 100) instead of valid neighbors (2 and 98)."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.2",
            "learningObjective": "FL-4.2.2",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "boundary value analysis",
                "BVA"
            ],
            "examTip": "Two-value BVA uses boundary and adjacent in-range values.",
            "memoryAid": "In-range pairs hug the edges."
        },
        {
            "id": "Q069",
            "statement": "During exploratory testing, a tester discovers an unexpected behavior that causes the application to display incorrect currency formatting for certain locales. What should the tester do?",
            "options": {
                "A": "Document the finding with steps to reproduce and report it as a defect",
                "B": "Ignore it since there were no predefined test cases for locale formatting",
                "C": "Fix the formatting issue in the code immediately",
                "D": "Wait for a developer to discover the same issue"
            },
            "correctAnswer": "A",
            "explanation": "Even during exploratory testing, any defect found should be properly documented and reported. The tester should record the steps to reproduce, expected versus actual behavior, and environment details. Findings from exploratory testing are valuable and should not be ignored.",
            "whyWrong": "Whether a test was planned or exploratory does not affect the importance of reporting defects found.",
            "optionExplanations": {
                "A": "Waiting for someone else to find it wastes time and allows the defect to persist.",
                "B": "Defects found during exploratory testing are valid and should be documented.",
                "C": "All defects found during testing, regardless of technique, should be reported.",
                "D": "Fixing code is a developer responsibility, not the tester's role."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.2",
            "learningObjective": "FL-4.4.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "exploratory testing",
                "defect reporting",
                "ad-hoc"
            ],
            "examTip": "All defects matter, regardless of how they were found. Document everything.",
            "memoryAid": "Found a bug? Report it. Method does not matter."
        },
        {
            "id": "Q155",
            "statement": "Given the following pseudocode: INPUT x; INPUT y; IF x > 0 THEN PRINT 'Positive'; ELSE PRINT 'Non-positive'; ENDIF; IF y > 0 THEN PRINT 'Positive Y'; ENDIF; What is the minimum number of test cases needed for 100% statement coverage?",
            "options": {
                "A": "3",
                "B": "4",
                "C": "1",
                "D": "2"
            },
            "correctAnswer": "D",
            "explanation": "There are four executable statements: PRINT 'Positive', PRINT 'Non-positive', PRINT 'Positive Y'. However, PRINT 'Non-positive' and PRINT 'Positive' are mutually exclusive (only one executes depending on x). To cover all statements, we need: Test 1 (x > 0, y > 0) covering 'Positive' and 'Positive Y', and Test 2 (x <= 0) covering 'Non-positive'.",
            "whyWrong": "One test case can only cover one branch of the first IF, missing either 'Positive' or 'Non-positive'.",
            "optionExplanations": {
                "A": "Three test cases is more than the minimum; two are sufficient because x<=0 covers 'Non-positive' and x>0,y>0 covers both 'Positive' and 'Positive Y'.",
                "B": "Four test cases is more than necessary; statement coverage only requires each statement to be executed at least once.",
                "C": "A single test case cannot cover both branches of the IF-ELSE; it would miss either 'Positive' or 'Non-positive'.",
                "D": "Two test cases are sufficient: Test 1 (x>0, y>0) covers 'Positive' and 'Positive Y'; Test 2 (x<=0) covers 'Non-positive'."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.1",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K2",
            "difficulty": "Hard",
            "keywords": [
                "statement coverage",
                "white-box",
                "test cases"
            ],
            "examTip": "For statement coverage, ensure every executable line runs at least once.",
            "memoryAid": "Statement coverage = every line executed at least once."
        },
        {
            "id": "Q187",
            "statement": "Which of the following is a key difference between checklist-based testing and exploratory testing?",
            "options": {
                "A": "Checklist-based testing is automated; exploratory testing is manual",
                "B": "Checklist-based testing follows a predefined list; exploratory testing involves concurrent learning, design, and execution",
                "C": "Checklist-based testing cannot find defects; exploratory testing always finds defects",
                "D": "Exploratory testing requires predefined test cases; checklist-based testing does not"
            },
            "correctAnswer": "B",
            "explanation": "Checklist-based testing uses a predefined list of items to verify, providing structured coverage. Exploratory testing involves simultaneous learning about the application, designing tests, and executing them in real time. Both are experience-based techniques but differ in structure and approach.",
            "whyWrong": "Both techniques can find defects; neither guarantees defect discovery.",
            "optionExplanations": {
                "A": "Both techniques are typically performed manually.",
                "B": "Checklists provide structure; exploratory testing is dynamic and adaptive.",
                "C": "Both techniques are capable of finding defects.",
                "D": "Exploratory testing does not require predefined cases; it creates them on the fly."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.3",
            "learningObjective": "FL-4.4.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "checklist-based testing",
                "exploratory testing",
                "experience-based"
            ],
            "examTip": "Checklist = structured from experience; Exploratory = learn and test simultaneously.",
            "memoryAid": "Checklist = follow the list; Exploratory = make the list as you go."
        },
        {
            "id": "Q100",
            "statement": "A system accepts transaction amounts from $0.01 to $9,999.99 inclusive. Using 2-value boundary value analysis, what is the minimum set of values that must be tested?",
            "options": {
                "A": "$0.01, $0.02, $9,999.98, $9,999.99",
                "B": "$0.01, $100.00, $5,000.00, $9,999.99",
                "C": "$0.00, $0.01, $9,999.99, $10,000.00",
                "D": "$0.00, $0.01, $9,999.99"
            },
            "correctAnswer": "C",
            "explanation": "2-value BVA tests the boundary values of each partition. For the valid range $0.01 to $9,999.99, we test: $0.00 (just below minimum, invalid), $0.01 (minimum, valid), $9,999.99 (maximum, valid), $10,000.00 (just above maximum, invalid). These four values cover both valid and invalid boundaries.",
            "whyWrong": "Option B includes internal values that are not boundary values for BVA.",
            "optionExplanations": {
                "A": "$0.02 and $9,999.98 are internal values, not the boundary values required by BVA.",
                "B": "Internal values such as $100.00 and $5,000.00 are not boundary values.",
                "C": "These four values cover both valid boundaries ($0.01, $9,999.99) and the adjacent invalid values ($0.00, $10,000.00) — the correct 2-value BVA set.",
                "D": "Missing the invalid value just above the maximum ($10,000.00); it only includes $0.00 and $0.01 (below the minimum) plus the maximum, omitting the just-above boundary."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.2",
            "learningObjective": "FL-4.2.2",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "boundary value analysis",
                "BVA",
                "monetary values"
            ],
            "examTip": "2-value BVA: test min, max, min-1, max+1.",
            "memoryAid": "BVA 2-value = both sides of each boundary."
        },
        {
            "id": "Q099",
            "statement": "A system categorizes parcels by weight for shipping. The categories are: Light (0 to 500g), Medium (501g to 2000g), Heavy (2001g to 5000g), and Oversized (over 5000g). Using equivalence partitioning, which set of weight values provides the most complete coverage of valid partitions?",
            "options": {
                "A": "250g, 1250g, 3500g, 6000g",
                "B": "500g, 2000g, 5000g",
                "C": "100g, 1000g, 3000g, 7000g",
                "D": "0g, 500g, 2000g, 5000g"
            },
            "correctAnswer": "A",
            "explanation": "The four valid equivalence partitions are: Light (0-500g), Medium (501-2000g), Heavy (2001-5000g), and Oversized (>5000g). Option A provides one representative from each valid partition: 250g (Light), 1250g (Medium), 3500g (Heavy), and 6000g (Oversized).",
            "whyWrong": "Option B only covers boundary values, not representative values from each partition.",
            "optionExplanations": {
                "A": "One representative value from each of the four valid partitions: 250g (Light), 1250g (Medium), 3500g (Heavy), 6000g (Oversized).",
                "B": "These are boundary values (500g, 2000g, 5000g), not one representative from every partition; they also omit the Oversized partition.",
                "C": "7000g is a valid Oversized value, but the set otherwise covers each partition; still, A is the cleaner full-coverage example.",
                "D": "0g and 500g are boundary values, not representative partition values; 0g sits at the edge of Light."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.1",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "equivalence partitioning",
                "weight categories",
                "valid partitions"
            ],
            "examTip": "Equivalence partitioning: choose one representative from each partition, not boundaries.",
            "memoryAid": "EP = one from each group, avoiding the edges."
        },
        {
            "id": "Q023",
            "statement": "Which white-box test technique measures the percentage of executable statements executed by a test suite?",
            "options": {
                "A": "Equivalence partitioning",
                "B": "Statement testing",
                "C": "Decision table testing",
                "D": "Branch testing"
            },
            "correctAnswer": "B",
            "explanation": "Statement testing is a white-box technique where test cases are designed to execute statements in the code. Statement coverage measures the percentage of executable statements that have been exercised by the test suite.",
            "whyWrong": "Branch testing measures decision outcomes, not individual statements.",
            "optionExplanations": {
                "A": "Equivalence partitioning is a black-box technique.",
                "B": "Statement testing ensures each executable statement is executed at least once.",
                "C": "Decision table testing is a black-box technique.",
                "D": "Branch testing ensures each decision outcome (true/false) is tested."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.1",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "statement testing",
                "white-box",
                "coverage"
            ],
            "examTip": "Statement coverage = every line of code executed at least once.",
            "memoryAid": "Statement = lines of code; Branch = decisions (if/else)."
        },
        {
            "id": "Q024",
            "statement": "Given the following code: if (a > 10) { x = 1; } else { x = 0; } if (b < 5) { y = 2; } else { y = 3; }, what is the minimum number of test cases needed to achieve 100% branch coverage?",
            "options": {
                "B": "3",
                "C": "4",
                "D": "2",
                "A": "1"
            },
            "correctAnswer": "D",
            "explanation": "There are two if statements, each with two outcomes (true/false). To achieve 100% branch coverage, we need to exercise all four branches. With two test cases, we can cover all branches: Test 1 (a>10 is true, b<5 is true) and Test 2 (a>10 is false, b<5 is false).",
            "whyWrong": "One test case can only cover two of the four branches at most.",
            "optionExplanations": {
                "B": "3 is more than the minimum needed.",
                "C": "4 would also work but is not the minimum.",
                "D": "2 test cases can cover all four branches by choosing opposite values for each condition.",
                "A": "One test case covers at most two branches (50% branch coverage)."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.2",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K2",
            "difficulty": "Hard",
            "keywords": [
                "branch testing",
                "white-box",
                "coverage",
                "test cases"
            ],
            "examTip": "For N independent decisions, you may need as few as 2 test cases to achieve 100% branch coverage.",
            "memoryAid": "Branch coverage = test both the 'yes' and 'no' of every decision."
        },
        {
            "id": "Q180",
            "statement": "A ticketing system for a museum offers discounted entry for visitors aged 6-17 ($5) and seniors aged 65+ ($8). Standard tickets ($12) apply to ages 18-64. Children under 6 enter free. Using three-value boundary value analysis, which set of ages should be tested for the boundary between free entry and children's tickets?",
            "options": {
                "B": "5, 6, 7",
                "C": "4, 5, 6",
                "D": "6, 7, 8",
                "A": "0, 5, 6"
            },
            "correctAnswer": "B",
            "explanation": "The boundary between free (under 6) and children's tickets (6-17) is at age 6. Three-value BVA tests the values just below the boundary, at the boundary, and just above: 5 (just below - free), 6 (at boundary - $5 children), and 7 (just above - $5 children).",
            "whyWrong": "Option B tests 4, 5, 6 which misses the value just above the boundary (7).",
            "optionExplanations": {
                "B": "5 (min-1), 6 (min), 7 (min+1) is correct 3-value BVA for this boundary.",
                "C": "4 is further from the boundary than needed; missing 7.",
                "D": "6 (min), 7 (min+1), 8 is missing the below-boundary value (5).",
                "A": "0 is far from the boundary."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.2",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "boundary value analysis",
                "BVA",
                "ticketing",
                "age verification"
            ],
            "examTip": "3-value BVA = A-1, A, A+1 for each boundary where A is the boundary value.",
            "memoryAid": "Three-value BVA: just below, at, just above."
        },
        {
            "id": "Q334",
            "statement": "Which statement is true about checklist-based testing?",
            "options": {
                "A": "Checklists must be created from scratch for each project",
                "B": "Checklist-based testing cannot find defects that are not on the checklist",
                "C": "Checklist-based testing requires test automation",
                "D": "Checklists can be derived from experience, standards, and historical defect data to provide a structured approach to testing"
            },
            "correctAnswer": "D",
            "explanation": "Checklists are often reused and refined across projects. They can be derived from various sources including tester experience, industry standards, regulatory requirements, and historical defect analysis. While checklists provide structure, testers can still notice issues outside the checklist during testing.",
            "whyWrong": "Good checklists evolve from multiple sources of knowledge.",
            "optionExplanations": {
                "A": "Checklists should be refined and reused across projects.",
                "B": "Testers should still use their judgment to find issues beyond the checklist.",
                "C": "Checklist-based testing is manual or with some tool support, not inherently automated.",
                "D": "Experience, standards, and defect data are valuable checklist sources."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.3",
            "learningObjective": "FL-4.4.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "checklist-based testing",
                "test design",
                "experience-based"
            ],
            "examTip": "Checklists come from experience and standards.",
            "memoryAid": "Checklists capture collective experience."
        },
        {
            "id": "Q073",
            "statement": "What does the test technique 'error guessing' primarily rely on?",
            "options": {
                "A": "The internal structure of the source code",
                "B": "Statistical analysis of past project data",
                "C": "The tester's experience, knowledge of common defects, and intuition",
                "D": "A formal decision table derived from requirements"
            },
            "correctAnswer": "C",
            "explanation": "Error guessing relies on the tester's experience with similar systems, knowledge of common defect patterns (e.g., boundary errors, null pointer issues), and intuition about where defects are likely to hide. It is an experience-based technique.",
            "whyWrong": "Error guessing does not require formal analysis of requirements, code structure, or statistical data.",
            "optionExplanations": {
                "A": "Code structure analysis is white-box testing.",
                "B": "Statistical analysis is not the basis of error guessing.",
                "C": "Experience, defect pattern knowledge, and intuition drive error guessing.",
                "D": "Decision tables are a formal black-box technique."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.1",
            "learningObjective": "FL-4.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "error guessing",
                "experience-based",
                "intuition"
            ],
            "examTip": "Error guessing = asking 'what could possibly go wrong here?' based on what went wrong before.",
            "memoryAid": "Error guessing = learning from past mistakes."
        },
        {
            "id": "Q330",
            "statement": "A safety-critical system requires the highest level of structural coverage. The test manager should prioritize which coverage metric?",
            "options": {
                "A": "Decision/branch coverage, because it ensures all decision outcomes are tested and subsumes statement coverage",
                "B": "Statement coverage, because it is easier to achieve",
                "C": "Use case coverage, because it tests real user scenarios",
                "D": "Equivalence partition coverage, because it tests input ranges"
            },
            "correctAnswer": "A",
            "explanation": "For safety-critical systems, structural coverage of code is often mandated by standards. Decision coverage is stronger than statement coverage and is typically the minimum requirement for such systems. It ensures that both outcomes of each decision are tested, providing greater confidence in the code\\'s behavior.",
            "whyWrong": "Decision coverage is essential for safety-critical systems.",
            "optionExplanations": {
                "A": "Decision coverage provides stronger structural coverage than statement coverage.",
                "B": "Statement coverage is the minimum; safety-critical systems require branch coverage.",
                "C": "Use case coverage is functional and does not provide structural coverage.",
                "D": "Equivalence partitioning is a black-box technique with no structural coverage."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.3",
            "learningObjective": "FL-4.3.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "coverage metrics",
                "safety-critical",
                "decision coverage"
            ],
            "examTip": "Safety-critical needs decision/branch coverage.",
            "memoryAid": "Safety = branch coverage."
        },
        {
            "id": "Q325",
            "statement": "A use case for a banking ATM includes: Main flow - \\'Customer inserts card, enters PIN, selects withdrawal, enters amount, receives cash, card returned.\\' Alternative flow - \\'Insufficient funds: display message, return card without cash.\\' Which test scenario is derived from the alternative flow?",
            "options": {
                "A": "Insert card, enter correct PIN, withdraw $100, receive cash",
                "B": "Insert card, enter correct PIN, request $500 when balance is $200, see insufficient funds message, get card back",
                "C": "Insert card, enter wrong PIN three times",
                "D": "Insert card and cancel immediately"
            },
            "correctAnswer": "B",
            "explanation": "The alternative flow for insufficient funds describes what happens when the requested amount exceeds the balance. Test scenario B directly exercises this alternative flow. The main flow is exercised by scenario A, while C and D describe different scenarios not defined in the given use case.",
            "whyWrong": "Alternative flows describe exception or error handling paths that must also be tested.",
            "optionExplanations": {
                "A": "This exercises the main flow (happy path), not the alternative flow.",
                "B": "This tests the alternative flow where insufficient funds are detected.",
                "C": "PIN errors are not described in the given use case.",
                "D": "Cancellation is not described in the given use case."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.5",
            "learningObjective": "FL-4.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "use case testing",
                "alternative flow",
                "ATM scenario"
            ],
            "examTip": "Test both main and alternative flows from use cases.",
            "memoryAid": "Happy path + exceptions."
        },
        {
            "id": "Q153",
            "statement": "A decision table has four conditions, each with two possible values (true/false). Using the classical approach, how many columns would the complete decision table contain?",
            "options": {
                "A": "32",
                "B": "4",
                "C": "16",
                "D": "8"
            },
            "correctAnswer": "C",
            "explanation": "For a decision table with n conditions, the classical approach uses all possible combinations, which equals 2^n. With 4 conditions, this is 2^4 = 16 columns. Each column represents a unique combination of condition values.",
            "whyWrong": "The number of columns doubles with each additional condition: 2^n, not n^2 or n*2.",
            "optionExplanations": {
                "A": "32 would be 2^5, which is for five conditions.",
                "B": "4 is just the number of conditions, not the number of tests.",
                "C": "2^4 = 16 unique combinations of four boolean conditions.",
                "D": "8 would be 2^3, which is for three conditions."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.3",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "decision table",
                "conditions",
                "combinations"
            ],
            "examTip": "Complete decision table = 2^(number of conditions) columns.",
            "memoryAid": "n conditions = 2^n test cases in classical decision table."
        },
        {
            "id": "Q150",
            "statement": "Which of the following correctly classifies the test techniques?",
            "options": {
                "A": "State transition testing and statement testing are both white-box techniques",
                "B": "Decision table testing and statement testing are both black-box techniques",
                "C": "Branch testing and error guessing are both white-box techniques",
                "D": "Equivalence partitioning and boundary value analysis are black-box techniques"
            },
            "correctAnswer": "D",
            "explanation": "Equivalence partitioning and boundary value analysis are black-box (specification-based) techniques that derive test cases from the functional specification without reference to internal code structure.",
            "whyWrong": "Statement testing is a white-box technique, not a black-box technique.",
            "optionExplanations": {
                "A": "State transition testing is a black-box technique, not white-box.",
                "B": "Statement testing is a white-box technique, not black-box.",
                "C": "Error guessing is experience-based, not white-box.",
                "D": "Both EP and BVA are specification-based black-box techniques."
            },
            "chapter": 4,
            "section": "4.1",
            "subsection": "4.1.1",
            "learningObjective": "FL-4.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "black-box",
                "white-box",
                "test techniques",
                "classification"
            ],
            "examTip": "Black-box = specification-based. White-box = structure-based. Experience-based = tester intuition.",
            "memoryAid": "Black = external spec; White = internal code; Experience = gut feeling."
        },
        {
            "id": "Q098",
            "statement": "Which of the following correctly categorizes test techniques?",
            "options": {
                "A": "Black-box: equivalence partitioning, decision tables; White-box: statement testing, branch testing",
                "B": "Black-box: exploratory testing, error guessing; White-box: checklist-based testing",
                "C": "Black-box: state transition testing; White-box: equivalence partitioning",
                "D": "Black-box: statement testing, branch testing; White-box: equivalence partitioning, decision tables"
            },
            "correctAnswer": "A",
            "explanation": "Black-box techniques (equivalence partitioning, boundary value analysis, decision table testing, state transition testing) are based on specifications without code knowledge. White-box techniques (statement testing, branch testing) are based on internal code structure.",
            "whyWrong": "Statement and branch testing are white-box techniques, not black-box.",
            "optionExplanations": {
                "A": "This reverses the categories incorrectly.",
                "B": "Exploratory testing, error guessing, and checklist-based testing are experience-based, a separate category.",
                "C": "Correct categorization of black-box and white-box techniques.",
                "D": "Equivalence partitioning is black-box, not white-box."
            },
            "chapter": 4,
            "section": "4.1",
            "subsection": "4.1.1",
            "learningObjective": "FL-4.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "black-box",
                "white-box",
                "test techniques",
                "categorization"
            ],
            "examTip": "Black-box = specification-based (no code). White-box = structure-based (code). Experience-based = intuition and experience.",
            "memoryAid": "Black-box = outside view; White-box = inside view; Experience = gut feel."
        },
        {
            "id": "Q332",
            "statement": "A tester using exploratory testing discovers an unexpected behavior and immediately adjusts the test focus to investigate it further. This ability to adapt and respond to discoveries is a key characteristic of:",
            "options": {
                "A": "Automated regression testing",
                "B": "Boundary value analysis",
                "C": "Use case testing",
                "D": "Exploratory testing"
            },
            "correctAnswer": "D",
            "explanation": "Exploratory testing is flexible and adaptive, allowing testers to follow leads and investigate unexpected behaviors as they emerge. This contrasts with scripted testing where deviations are typically noted but not immediately explored. Session-based test management provides structure for such exploration.",
            "whyWrong": "Adaptability and real-time investigation are hallmarks of exploratory testing.",
            "optionExplanations": {
                "A": "Automated regression testing follows predefined scripts with no adaptive exploration.",
                "B": "BVA is a systematic black-box technique with predetermined inputs.",
                "C": "Use case testing follows predefined scenarios.",
                "D": "Exploratory testing allows real-time adaptation based on discoveries."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.2",
            "learningObjective": "FL-4.4.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "exploratory testing",
                "adaptability",
                "real-time investigation"
            ],
            "examTip": "Exploratory testing = follow the unexpected.",
            "memoryAid": "Discover and adapt."
        },
        {
            "id": "Q186",
            "statement": "A tester needs to select a test technique for a safety-critical system where the internal code structure must be thoroughly exercised. Which technique should the tester choose?",
            "options": {
                "A": "Equivalence partitioning (black-box)",
                "B": "Use case testing (black-box)",
                "C": "Statement and branch testing (white-box)",
                "D": "Error guessing (experience-based)"
            },
            "correctAnswer": "C",
            "explanation": "For safety-critical systems, structural coverage of the code is often mandatory (e.g., DO-178C for aviation requires specific coverage levels). White-box techniques like statement testing and branch testing ensure that the code structure is thoroughly exercised, providing confidence that no code path remains untested.",
            "whyWrong": "Black-box and experience-based techniques do not provide structural coverage measurements.",
            "optionExplanations": {
                "A": "EP does not measure or guarantee code structure coverage.",
                "B": "Use case testing does not ensure code structure is exercised.",
                "C": "White-box techniques are essential when thorough structural coverage is required.",
                "D": "Error guessing does not provide systematic code coverage."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.3",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "white-box testing",
                "safety-critical",
                "statement coverage",
                "statement coverage"
            ],
            "examTip": "Safety-critical often requires white-box techniques to meet coverage mandates.",
            "memoryAid": "Safety-critical = you must know every code path is tested."
        },
        {
            "id": "Q077",
            "statement": "In a state transition model, what is the difference between a state and a transition?",
            "options": {
                "A": "A state is a condition of the system at a given time; a transition is a movement from one state to another triggered by an event",
                "B": "A state is a change; a transition is a condition",
                "C": "There is no difference; both terms describe the same concept",
                "D": "A state occurs between transitions; a transition occurs after a state"
            },
            "correctAnswer": "A",
            "explanation": "A state represents a condition or situation of the system during its lifecycle (e.g., 'Logged In'). A transition is a change from one state to another, triggered by an event (e.g., 'Logout' triggers transition from 'Logged In' to 'Logged Out').",
            "whyWrong": "The terms are distinct and describe different aspects of the state transition model.",
            "optionExplanations": {
                "A": "This is a circular description that does not clarify the distinction.",
                "B": "They are distinct concepts in state transition diagrams.",
                "C": "This reverses the definitions.",
                "D": "States are conditions; transitions are movements between states triggered by events."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.4",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "state transition",
                "states",
                "transitions"
            ],
            "examTip": "States = where you are; Transitions = how you get somewhere else.",
            "memoryAid": "State = noun; Transition = verb."
        },
        {
            "id": "Q049",
            "statement": "A test design technique that systematically tests combinations of input conditions is called:",
            "options": {
                "A": "Error guessing",
                "B": "Decision table testing",
                "C": "Equivalence partitioning",
                "D": "Statement testing"
            },
            "correctAnswer": "B",
            "explanation": "Decision table testing is a black-box technique that systematically tests combinations of inputs (conditions) to determine the corresponding outputs (actions). It is especially useful for testing business logic with multiple conditions.",
            "whyWrong": "Equivalence partitioning tests representative values from partitions, not combinations of conditions.",
            "optionExplanations": {
                "A": "Error guessing is an experience-based technique.",
                "B": "Decision tables handle combinations of conditions and their corresponding actions.",
                "C": "Equivalence partitioning divides inputs into classes, not combinations.",
                "D": "Statement testing is a white-box technique for code coverage."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.3",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "decision table",
                "black-box",
                "condition combinations"
            ],
            "examTip": "Combinations of conditions = decision table testing.",
            "memoryAid": "Decision table = grid of conditions and actions."
        },
        {
            "id": "Q323",
            "statement": "A ticket vending machine has states: Idle, Selecting, Payment, Dispensing, and OutOfService. From Idle, inserting money transitions to Selecting. Selecting a ticket transitions to Payment. Completing payment transitions to Dispensing. After dispensing, the machine returns to Idle. A system error at any state transitions to OutOfService. From Selecting, which transitions are valid?",
            "options": {
                "A": "Selecting to Idle and Selecting to OutOfService only",
                "B": "Selecting to Payment only",
                "C": "Selecting to Payment (ticket selected) and Selecting to OutOfService (error)",
                "D": "Selecting to Dispensing directly"
            },
            "correctAnswer": "C",
            "explanation": "From the Selecting state, selecting a ticket transitions to Payment (normal flow). A system error at any state transitions to OutOfService. Selecting to Idle would typically not be valid (once selection starts, you must cancel or proceed). Selecting directly to Dispensing skips the required Payment state.",
            "whyWrong": "From Selecting: valid transitions are to Payment (happy path) or OutOfService (error).",
            "optionExplanations": {
                "A": "Selecting to Idle is likely not a direct transition; OutOfService is correct for errors.",
                "B": "Missing the error transition to OutOfService.",
                "C": "Selecting -> Payment (happy path) and Selecting -> OutOfService (error) are complete.",
                "D": "Dispensing requires Payment to be completed first."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.4",
            "learningObjective": "FL-4.2.4",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "state transition",
                "vending machine",
                "valid transitions"
            ],
            "examTip": "From Selecting, go to Payment or OutOfService.",
            "memoryAid": "Select -> Pay or Error."
        },
        {
            "id": "Q182",
            "statement": "An order processing system has states: New, Verified, Shipped, Delivered, Cancelled. From the Verified state, which of the following transitions is most likely valid?",
            "options": {
                "A": "Verified to New",
                "B": "Verified to Shipped",
                "C": "Verified to Delivered",
                "D": "Shipped to Cancelled"
            },
            "correctAnswer": "B",
            "explanation": "In an order processing system, a verified order can be shipped. The typical flow is: New -> Verified -> Shipped -> Delivered. Cancellation is usually only possible from New or Verified states, not after shipping.",
            "whyWrong": "Delivered comes after Shipped, not directly from Verified.",
            "optionExplanations": {
                "A": "Going back to New from Verified would not make sense in a forward-flowing process.",
                "B": "A verified order can proceed to being shipped, which is the next logical state.",
                "C": "Delivered can only be reached after Shipped.",
                "D": "Cancelling after shipping is typically not allowed in standard order processing."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.4",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "state transition",
                "order processing",
                "valid transitions"
            ],
            "examTip": "Valid transitions follow the logical flow of the business process.",
            "memoryAid": "Order flow: New -> Verified -> Shipped -> Delivered."
        },
        {
            "id": "Q224",
            "statement": "A program has 20 executable statements. A test suite executes 15 of them at least once. What is the statement coverage?",
            "options": {
                "A": "75%",
                "B": "25%",
                "C": "80%",
                "D": "133%"
            },
            "correctAnswer": "A",
            "explanation": "Statement coverage is executed statements divided by total executable statements: 15/20 = 75%.",
            "whyWrong": "25% (B): Use case testing derives tests from interactions between actors and the syste...; 80% (C): Use case testing derives tests from interactions between actors and the syste...; 133% (D): Use case testing derives tests from interactions between actors and the system to achieve user goals.",
            "optionExplanations": {
                "A": "Statement coverage is executed statements divided by total executable statements: 15/20 = 75%.",
                "B": "Statement coverage is executed statements divided by total executable stateme...",
                "C": "Statement coverage is executed statements divided by total executable stateme...",
                "D": "Statement coverage is executed statements divided by total executable stateme..."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.1",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "statement coverage",
                "calculation"
            ],
            "examTip": "Coverage equals covered items divided by total items.",
            "memoryAid": "15 of 20 = three quarters."
        },
        {
            "id": "Q105",
            "statement": "For the code: if (a > 10 OR b < 5) { x = 1; } else { x = 0; } if (c == 0) { y = 2; } else { y = 3; }, what is the minimum number of test cases needed for 100% branch coverage?",
            "options": {
                "A": "1",
                "B": "3",
                "C": "4",
                "D": "2"
            },
            "correctAnswer": "D",
            "explanation": "There are two independent decisions: (a > 10 OR b < 5) with two outcomes (true/false), and (c == 0) with two outcomes. For 100% branch coverage each branch outcome must be exercised at least once. Test 1 (a=20, b=0, c=0) covers decision 1 true and decision 2 true. Test 2 (a=5, b=10, c=1) covers decision 1 false (both sub-conditions false) and decision 2 false. Thus 2 test cases are sufficient.",
            "whyWrong": "Two test cases could cover all branch outcomes if carefully chosen, but with OR conditions, you need a case where both sides of OR are false for the false outcome.",
            "optionExplanations": {
                "A": "3 test cases: (true branch of 1st, true of 2nd), (false of 1st, false of 2nd), (false of 1st, true of 2nd).",
                "B": "One test case covers only one path through all decisions.",
                "C": "4 would also achieve coverage but is not the minimum.",
                "D": "2 can cover 4 branch outcomes only if each test covers two distinct branch outcomes."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.2",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K2",
            "difficulty": "Hard",
            "keywords": [
                "branch coverage",
                "OR condition",
                "white-box"
            ],
            "examTip": "With compound conditions using OR, to get a false outcome, you need all sub-conditions false.",
            "memoryAid": "OR = one true makes all true; ALL false makes it false."
        },
        {
            "id": "Q184",
            "statement": "Given the code: if (temperature > 100) { alarm = 1; } else if (temperature > 80) { warning = 1; } else { normal = 1; } print('Done'); How many test cases are needed for 100% statement coverage?",
            "options": {
                "A": "1",
                "B": "3",
                "C": "4",
                "D": "2"
            },
            "correctAnswer": "B",
            "explanation": "There are four executable statements: alarm = 1, warning = 1, normal = 1, and print('Done'). However, the print statement is always executed regardless of the condition. The three assignment statements are mutually exclusive (only one executes based on temperature). Therefore, we need 3 test cases: one for temperature > 100, one for 80 < temperature <= 100, and one for temperature <= 80.",
            "whyWrong": "One test case can only execute one of the three assignment statements.",
            "optionExplanations": {
                "A": "Four is more than the minimum needed.",
                "B": "One test case covers only one path (33% statement coverage of conditional assignments).",
                "C": "Three test cases cover all three branches and thus all four statements.",
                "D": "Two test cases miss one of the three assignment statements."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.1",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K2",
            "difficulty": "Hard",
            "keywords": [
                "statement coverage",
                "multi-branch",
                "white-box"
            ],
            "examTip": "For IF-ELSE IF chains, you need one test case per branch for full statement coverage.",
            "memoryAid": "n mutually exclusive branches = n test cases for full statement coverage."
        },
        {
            "id": "Q227",
            "statement": "A user can search for a product, add it to a basket, change quantity, checkout, and receive confirmation. Which technique best derives end-to-end scenario tests from this interaction?",
            "options": {
                "A": "Statement testing",
                "B": "Syntax testing",
                "C": "Static analysis",
                "D": "Use case testing"
            },
            "correctAnswer": "D",
            "explanation": "Use case testing derives tests from interactions between actors and the system to achieve user goals.",
            "whyWrong": "Use case testing derives tests from interactions between actors and the system to achieve user goals. Statement testing (option A): Use case testing derives tests from interactions between actors and the syste...; Syntax testing (option B): Use case testing derives tests from interactions between actors and the syste...; Static analysis (option C): Use case testing derives tests from interactions between actors and the syste....",
            "optionExplanations": {
                "A": "Use case testing derives tests from interactions between actors and the syste...",
                "B": "Use case testing derives tests from interactions between actors and the syste...",
                "C": "Use case testing derives tests from interactions between actors and the syste...",
                "D": "Use case testing derives tests from interactions between actors and the system to achieve user goals."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.6",
            "learningObjective": "FL-4.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "use case testing",
                "scenario"
            ],
            "examTip": "Actor goal and steps point to use cases.",
            "memoryAid": "Use cases follow user goals."
        },
        {
            "id": "Q052",
            "statement": "A ticket vending machine has the following states: Idle, SelectingTicket, ProcessingPayment, DispensingTicket, and OutOfService. A transition exists from ProcessingPayment to DispensingTicket if payment is successful. The machine can go from ProcessingPayment back to SelectingTicket if payment fails. How many test cases are needed to achieve 100% transition coverage in this scenario?",
            "options": {
                "A": "At least one test case per transition, so 2 test cases for these two transitions",
                "B": "Exactly 1 test case covering all states",
                "C": "Exactly 5 test cases for 5 states",
                "D": "At least 3 test cases to cover all transitions and states"
            },
            "correctAnswer": "A",
            "explanation": "Transition coverage requires that each transition be executed at least once. From the scenario, we have at least two transitions from ProcessingPayment: to DispensingTicket (success) and back to SelectingTicket (failure). These can be covered by two test cases: one with successful payment and one with failed payment.",
            "whyWrong": "One test case cannot cover both the success and failure paths from ProcessingPayment.",
            "optionExplanations": {
                "A": "Each transition must be exercised at least once for 100% transition coverage.",
                "B": "One test case can only follow one path through the state machine.",
                "C": "State coverage (visit each state) is different from transition coverage.",
                "D": "Two test cases are sufficient for these two specific transitions."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.4",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "state transition",
                "transition coverage",
                "test cases"
            ],
            "examTip": "Transition coverage = number of transitions. State coverage = number of states.",
            "memoryAid": "Transitions = arrows; States = circles. Cover each arrow at least once."
        },
        {
            "id": "Q321",
            "statement": "An insurance system applies a surcharge based on these conditions: Driver Age >= 25 (yes/no), Previous Claims in last 3 years (yes/no), Vehicle Type = Sports (yes/no). A surcharge applies if the driver is under 25 OR has previous claims OR drives a sports car. How many test cases are needed for a complete decision table?",
            "options": {
                "A": "4",
                "B": "2",
                "C": "8",
                "D": "3"
            },
            "correctAnswer": "C",
            "explanation": "With 3 conditions (Age >= 25, Previous Claims, Sports Car), a complete decision table requires 2^3 = 8 test cases (one per combination of condition values). The surcharge rule (OR of any condition) means surcharge = yes in 7 out of 8 cases (only no surcharge when all conditions are false).",
            "whyWrong": "Full decision table = 2^(number of conditions) test cases.",
            "optionExplanations": {
                "A": "4 is 2^2, but there are 3 conditions requiring 2^3 = 8.",
                "B": "2 covers only one condition fully.",
                "C": "8 combinations are needed for 3 binary conditions.",
                "D": "3 does not cover all condition combinations."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.3",
            "learningObjective": "FL-4.2.3",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "decision table",
                "conditions",
                "insurance",
                "surcharge"
            ],
            "examTip": "n conditions = 2^n test cases in full decision table.",
            "memoryAid": "3 conditions = 8 test cases."
        },
        {
            "id": "Q265",
            "statement": "A tester designs tests from a checklist of common web security mistakes such as missing authorization checks and weak session timeout. Which technique is used?",
            "options": {
                "A": "Boundary value analysis",
                "B": "Checklist-based testing",
                "C": "State transition testing",
                "D": "Statement testing"
            },
            "correctAnswer": "B",
            "explanation": "Checklist-based testing uses a list of items, rules, or past experience to guide test design and execution.",
            "whyWrong": "Use case testing covers main, alternate, and exception flows through user-system interactions. Branch coverage (option A): Checklist-based testing uses a list of items, rules, or past experience to gu...; Static analysis (option B): Checklist-based testing uses a list of items, rules, or past experience to guide test design and execution.; Pairwise testing (option C): Checklist-based testing uses a list of items, rules, or past experience to gu....",
            "optionExplanations": {
                "A": "Checklist-based testing uses a list of items, rules, or past experience to gu...",
                "B": "Checklist-based testing uses a list of items, rules, or past experience to guide test design and execution.",
                "C": "Checklist-based testing uses a list of items, rules, or past experience to gu...",
                "D": "Checklist-based testing uses a list of items, rules, or past experience to gu..."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.3",
            "learningObjective": "FL-4.4.3",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "checklist-based testing",
                "experience-based"
            ],
            "examTip": "A checklist guiding tests is checklist-based testing.",
            "memoryAid": "Checklist guides attention."
        },
        {
            "id": "Q222",
            "statement": "For a login feature, three failed attempts lock the account; a successful login before that resets the count. Which technique best models this behavior?",
            "options": {
                "A": "Statement testing",
                "B": "Pairwise testing",
                "C": "State transition testing",
                "D": "Equivalence partitioning"
            },
            "correctAnswer": "C",
            "explanation": "State transition testing is suitable when behavior depends on current state and events, such as failed-attempt counts and lockout.",
            "whyWrong": "State transition testing is suitable when behavior depends on current state and events, such as failed-attempt counts and lockout. Statement testing (option A): State transition testing is suitable when behavior depends on current state a...; Pairwise testing (option B): State transition testing is suitable when behavior depends on current state a...; Equivalence partitioning (option D): State transition testing is suitable when behavior depends on current state a....",
            "optionExplanations": {
                "A": "State transition testing is suitable when behavior depends on current state a...",
                "B": "State transition testing is suitable when behavior depends on current state a...",
                "C": "State transition testing is suitable when behavior depends on current state and events, such as failed-attempt counts and lockout.",
                "D": "State transition testing is suitable when behavior depends on current state a..."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.4",
            "learningObjective": "FL-4.2.4",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "state transition",
                "login"
            ],
            "examTip": "If history changes behavior, think states.",
            "memoryAid": "Events move states."
        },
        {
            "id": "Q267",
            "statement": "A business process has alternate flows for payment failure, address validation failure, and successful order placement. Which technique is most suitable for deriving scenario tests?",
            "options": {
                "A": "Branch coverage",
                "B": "Static analysis",
                "C": "Pairwise testing",
                "D": "Use case testing"
            },
            "correctAnswer": "D",
            "explanation": "Use case testing covers main, alternate, and exception flows through user-system interactions.",
            "whyWrong": "Use case testing covers main, alternate, and exception flows through user-system interactions. Branch coverage (option A): Use case testing covers main, alternate, and exception flows through user-sys...; Static analysis (option B): Use case testing covers main, alternate, and exception flows through user-sys...; Pairwise testing (option C): Use case testing covers main, alternate, and exception flows through user-sys....",
            "optionExplanations": {
                "A": "Use case testing covers main, alternate, and exception flows through user-sys...",
                "B": "Use case testing covers main, alternate, and exception flows through user-sys...",
                "C": "Use case testing covers main, alternate, and exception flows through user-sys...",
                "D": "Use case testing covers main, alternate, and exception flows through user-system interactions."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.6",
            "learningObjective": "FL-4.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "use case testing",
                "alternate flows"
            ],
            "examTip": "Main and alternate user flows indicate use cases.",
            "memoryAid": "User flows become tests."
        },
        {
            "id": "Q178",
            "statement": "Which test technique is most appropriate for testing a system with well-defined business rules involving multiple conditions that produce specific actions?",
            "options": {
                "A": "Decision table testing",
                "B": "Error guessing",
                "C": "Statement testing",
                "D": "Checklist-based testing"
            },
            "correctAnswer": "A",
            "explanation": "Decision table testing is ideal for systems with defined business rules where combinations of conditions determine specific actions. It systematically covers all combinations of condition values and their corresponding expected actions, making it perfect for complex business logic.",
            "whyWrong": "Error guessing relies on experience and intuition, not systematic coverage of conditions.",
            "optionExplanations": {
                "A": "Decision table testing systematically covers condition combinations and expected actions.",
                "B": "Error guessing is experience-based and less systematic.",
                "C": "Statement testing is a white-box technique focused on code coverage.",
                "D": "Checklist-based testing follows predefined lists without combinatorial analysis."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.3",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "decision table",
                "business rules",
                "test technique selection"
            ],
            "examTip": "Business rules with multiple conditions = decision table testing.",
            "memoryAid": "Business rules + conditions = decision table."
        },
        {
            "id": "Q320",
            "statement": "A web form accepts a password length between 8 and 128 characters. Using two-value boundary value analysis, which pairs represent the optimal test set?",
            "options": {
                "A": "8 and 128",
                "B": "7 and 129",
                "C": "7 and 8 for the lower boundary; 128 and 129 for the upper boundary",
                "D": "1 and 8"
            },
            "correctAnswer": "C",
            "explanation": "Two-value BVA tests the boundary value and the value immediately adjacent (just below or just above). For the lower boundary (8): test 7 (just below, invalid) and 8 (the boundary value, valid). For the upper boundary (128): test 128 (the boundary value, valid) and 129 (just above, invalid).",
            "whyWrong": "Two-value BVA = the boundary and its immediate neighbor.",
            "optionExplanations": {
                "A": "Both valid values, missing the invalid neighbors that define the boundary.",
                "B": "Both invalid values, missing the valid boundary values.",
                "C": "7,8 covers the lower boundary; 128,129 covers the upper boundary.",
                "D": "1 is too far from the boundary to be relevant for BVA."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.2",
            "learningObjective": "FL-4.2.2",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "boundary value analysis",
                "two-value BVA",
                "password length"
            ],
            "examTip": "Two-value BVA = boundary + neighbor.",
            "memoryAid": "BVA2 = on and off."
        },
        {
            "id": "Q333",
            "statement": "A QA team maintains a list of common security vulnerabilities they have encountered across multiple projects, such as SQL injection, cross-site scripting, and missing authentication checks. They use this list to design tests for new features. This is an example of:",
            "options": {
                "A": "Checklist-based testing",
                "B": "State transition testing",
                "C": "Exploratory testing",
                "D": "Equivalence partitioning"
            },
            "correctAnswer": "A",
            "explanation": "Checklist-based testing uses a predefined list of items, defect categories, or areas of concern derived from experience, past defects, or known risks. The list of common security vulnerabilities serves as a testing checklist to guide test design and execution.",
            "whyWrong": "A predefined list based on experience is checklist-based testing.",
            "optionExplanations": {
                "A": "A checklist of common vulnerabilities guides the test design.",
                "B": "State transition testing models system states and transitions.",
                "C": "Exploratory testing is unstructured and adaptive.",
                "D": "Equivalence partitioning divides input data into partitions."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.3",
            "learningObjective": "FL-4.4.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "checklist-based testing",
                "experience-based",
                "security testing"
            ],
            "examTip": "Checklist of common issues guides testing.",
            "memoryAid": "Experience in a list."
        },
        {
            "id": "Q051",
            "statement": "A system calculates shipping costs based on weight. If weight <= 1kg, shipping is $5. If 1kg < weight <= 5kg, shipping is $10. If 5kg < weight <= 10kg, shipping is $15. If weight > 10kg, shipping is $20. Using equivalence partitioning, how many valid partitions exist?",
            "options": {
                "A": "2",
                "B": "3",
                "C": "5",
                "D": "4"
            },
            "correctAnswer": "D",
            "explanation": "The valid partitions are: (0 to 1kg], (1kg to 5kg], (5kg to 10kg], and (10kg to +infinity). Each partition represents a range of inputs that are treated equivalently by the system, producing the same shipping cost.",
            "whyWrong": "There are four weight ranges defined in the specification, each producing a different shipping cost.",
            "optionExplanations": {
                "A": "Four distinct input ranges produce four distinct outputs.",
                "B": "Three partitions would miss one of the defined weight ranges.",
                "C": "Five would include an extra partition not defined.",
                "D": "Two would miss the intermediate weight ranges."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.1",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "equivalence partitioning",
                "valid partitions",
                "weight calculation"
            ],
            "examTip": "Each output behavior usually corresponds to a separate partition.",
            "memoryAid": "Different output = different partition."
        },
        {
            "id": "Q102",
            "statement": "A turnstile has two states: Locked and Unlocked. In the Locked state, inserting a coin transitions to Unlocked. Pushing in Locked does nothing. In the Unlocked state, pushing transitions to Locked. Inserting a coin in Unlocked does nothing. What is the expected behavior when a push occurs in the Locked state?",
            "options": {
                "A": "The turnstile transitions to the Unlocked state",
                "B": "The turnstile remains in the Locked state",
                "C": "The turnstile transitions to an error state",
                "D": "The turnstile breaks"
            },
            "correctAnswer": "B",
            "explanation": "According to the state transition model, when the turnstile is in the Locked state and a push occurs, the transition is not defined (or is self-looping), meaning the turnstile remains in Locked. Only inserting a coin in Locked causes a transition to Unlocked.",
            "whyWrong": "Only a coin insertion transitions from Locked to Unlocked; pushing in Locked has no effect.",
            "optionExplanations": {
                "A": "A transition to Unlocked requires inserting a coin, not pushing.",
                "B": "In the Locked state, pushing does not cause a state change; the turnstile stays Locked.",
                "C": "No error state is defined in this model; the turnstile simply remains Locked.",
                "D": "There is no reason for the turnstile to break from a push in Locked."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.4",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "state transition",
                "turnstile",
                "invalid transition"
            ],
            "examTip": "When an event has no defined transition in a state, the system typically ignores it or remains in the same state.",
            "memoryAid": "No transition defined = stay where you are."
        },
        {
            "id": "Q226",
            "statement": "Which test design approach is most directly based on tester knowledge of common developer mistakes and past defect patterns?",
            "options": {
                "A": "Branch testing",
                "B": "Boundary value analysis",
                "C": "Error guessing",
                "D": "Decision table testing"
            },
            "correctAnswer": "C",
            "explanation": "Error guessing is an experience-based technique using knowledge of likely defects, previous failures, and common mistakes.",
            "whyWrong": "Error guessing is an experience-based technique that uses knowledge of likely defects and common mistakes. It does not derive tests from formal models, equivalence partitions, or state transitions - those are systematic techniques.",
            "optionExplanations": {
                "A": "Error guessing is an experience-based technique using knowledge of likely def...",
                "B": "Error guessing is an experience-based technique using knowledge of likely def...",
                "C": "Error guessing is an experience-based technique using knowledge of likely defects, previous failures, and common mistakes.",
                "D": "Error guessing is an experience-based technique using knowledge of likely def..."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.1",
            "learningObjective": "FL-4.4.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "error guessing",
                "experience-based"
            ],
            "examTip": "Past defects and intuition indicate error guessing.",
            "memoryAid": "Experience predicts errors."
        },
        {
            "id": "Q263",
            "statement": "For a delivery fee rule, orders below $50 pay a fee, orders $50 and above ship free. Which boundary values are most useful for two-value BVA?",
            "options": {
                "A": "1.00 and 2.00",
                "B": "25.00 and 75.00",
                "C": "50.00 and 100.00",
                "D": "49.99 and 50.00"
            },
            "correctAnswer": "D",
            "explanation": "Two-value BVA focuses on values at and immediately adjacent to the boundary where behavior changes.",
            "whyWrong": "Two-value BVA focuses on values at and immediately adjacent to the boundary where behavior changes. 1.00 and 2.00 (option A): Two-value BVA focuses on values at and immediately adjacent to the boundary w...; 25.00 and 75.00 (option B): Two-value BVA focuses on values at and immediately adjacent to the boundary w...; 50.00 and 100.00 (option C): Two-value BVA focuses on values at and immediately adjacent to the boundary w....",
            "optionExplanations": {
                "A": "Two-value BVA focuses on values at and immediately adjacent to the boundary w...",
                "B": "Two-value BVA focuses on values at and immediately adjacent to the boundary w...",
                "C": "Two-value BVA focuses on values at and immediately adjacent to the boundary w...",
                "D": "Two-value BVA focuses on values at and immediately adjacent to the boundary where behavior changes."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.2",
            "learningObjective": "FL-4.2.2",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "boundary value analysis",
                "currency"
            ],
            "examTip": "Test around the decision edge.",
            "memoryAid": "Hug the boundary."
        },
        {
            "id": "Q133",
            "statement": "For the code: if (score >= 70) { grade = 'Pass'; } else { grade = 'Fail'; } print(grade);, how many test cases are needed for 100% statement coverage?",
            "options": {
                "A": "4",
                "B": "2",
                "C": "1",
                "D": "3"
            },
            "correctAnswer": "B",
            "explanation": "There are three statements: grade = 'Pass', grade = 'Fail', and print(grade). To execute all three, we need Test 1 (score >= 70, e.g., 85) which executes 'Pass' and print, and Test 2 (score < 70, e.g., 50) which executes 'Fail' and print. Two test cases cover all statements.",
            "whyWrong": "One test case can execute either the 'Pass' or 'Fail' branch, but not both.",
            "optionExplanations": {
                "A": "Four is more than necessary.",
                "B": "Three is more than the minimum needed.",
                "C": "One test case covers only one branch, missing the other assignment statement.",
                "D": "Two test cases cover both branches, executing all three statements."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.1",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K2",
            "difficulty": "Hard",
            "keywords": [
                "statement coverage",
                "if-else",
                "test cases"
            ],
            "examTip": "For an if-else statement, you need at least 2 test cases for 100% statement coverage.",
            "memoryAid": "If-else = 2 test cases minimum for full statement coverage."
        },
        {
            "id": "Q131",
            "statement": "A patient monitoring system displays alerts based on vital signs. The rules are:\\n- If heart rate > 120 AND blood pressure > 180, alert 'CRITICAL'\\n- If heart rate > 120 OR blood pressure > 180, alert 'WARNING'\\n- Otherwise, alert 'NORMAL'\\n\\nUsing a decision table approach, how many unique combinations of conditions exist for the two boolean inputs (heart rate > 120, blood pressure > 180)?",
            "options": {
                "A": "4",
                "B": "2",
                "C": "6",
                "D": "3"
            },
            "correctAnswer": "A",
            "explanation": "With two boolean conditions (heart rate > 120: T/F, blood pressure > 180: T/F), there are 2^2 = 4 unique combinations: (F,F) → NORMAL, (T,F) → WARNING, (F,T) → WARNING, (T,T) → CRITICAL.",
            "whyWrong": "The three outputs (NORMAL, WARNING, CRITICAL) might suggest 3, but there are 4 input combinations.",
            "optionExplanations": {
                "A": "2^2 = 4 combinations of two boolean conditions.",
                "B": "2 is the number of conditions, not the number of combinations.",
                "C": "6 is not a power of 2 and does not correspond to the number of conditions.",
                "D": "3 corresponds to the number of outputs, not input combinations."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.3",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "decision table",
                "vital signs",
                "conditions",
                "combinations"
            ],
            "examTip": "Number of combinations = 2^(number of boolean conditions).",
            "memoryAid": "n boolean conditions = 2^n combinations."
        }
    ],
    "exam5": [
        {
            "id": "Q351",
            "statement": "A product risk analysis reveals that the payment gateway integration is high-risk due to third-party dependencies, while the profile page is low-risk. How should this influence the testing approach?",
            "options": {
                "A": "Both areas should receive the same level of testing",
                "B": "Testing should focus only on the low-risk areas",
                "C": "The payment gateway should receive minimal testing because it has external dependencies",
                "D": "The payment gateway should receive more thorough and earlier testing, while the profile page receives a lighter test effort"
            },
            "correctAnswer": "D",
            "explanation": "Product risk analysis should influence the thoroughness and scope of testing. High-risk areas should be tested more extensively and earlier. Low-risk areas may receive less rigorous testing. This risk-based approach optimizes the use of limited testing resources.",
            "whyWrong": "Test more where risk is higher.",
            "optionExplanations": {
                "A": "Testing effort should be proportional to risk level.",
                "B": "Low-risk areas should be tested, but with less intensity.",
                "C": "High-risk areas need more testing, not less.",
                "D": "Risk-based testing allocates more effort to high-risk areas."
            },
            "chapter": 5,
            "section": "5.5",
            "subsection": "5.5.3",
            "learningObjective": "FL-5.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "risk analysis",
                "test thoroughness",
                "risk-based testing",
                "scope"
            ],
            "examTip": "Higher risk = more thorough testing.",
            "memoryAid": "Risk drives scope."
        },
        {
            "id": "Q272",
            "statement": "A dashboard shows rising blocked tests because the test environment is unavailable. What control action is most appropriate?",
            "options": {
                "A": "Escalate the environment issue and replan affected testing",
                "B": "Mark all blocked tests as passed",
                "C": "Delete the blocked tests",
                "D": "Stop reporting status"
            },
            "correctAnswer": "A",
            "explanation": "Test control uses monitoring information to take corrective action, such as resolving blockers and replanning.",
            "whyWrong": "Test control uses monitoring information to take corrective action, such as resolving blockers and replanning. Mark all blocked tests as passed (option B): Test control uses monitoring information to take corrective action, such as r...; Delete the blocked tests (option C): Test control uses monitoring information to take corrective action, such as r...; Stop reporting status (option D): Test control uses monitoring information to take corrective action, such as r....",
            "optionExplanations": {
                "A": "Test control uses monitoring information to take corrective action, such as resolving blockers and replanning.",
                "B": "Marking blocked tests as passed hides risk and is dishonest; control addresses the blocker.",
                "C": "Deleting blocked tests loses coverage information; control resolves the blocker.",
                "D": "Stopping status reporting removes visibility; control maintains monitoring."
            },
            "chapter": 5,
            "section": "5.3",
            "subsection": "5.3",
            "learningObjective": "FL-5.3.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test control",
                "blocked tests"
            ],
            "examTip": "Control reacts to monitoring data.",
            "memoryAid": "Blocked work needs action."
        },
        {
            "id": "Q056",
            "statement": "A test metric shows that the number of passed test cases increased by 15% this week, but the number of identified defects also increased by 10%. What does this indicate?",
            "options": {
                "A": "The project should be cancelled",
                "B": "Testing is making progress, but the software still has quality issues being uncovered",
                "C": "Testing is not effective because defects are still being found",
                "D": "The testers are creating too many test cases"
            },
            "correctAnswer": "B",
            "explanation": "An increase in passed tests indicates progress in test execution. An increase in defect discovery indicates that testing continues to find quality issues. This is a normal pattern during active testing - progress is being made while quality information is still being gathered.",
            "whyWrong": "Finding defects is a goal of testing, not a sign of ineffectiveness.",
            "optionExplanations": {
                "A": "This data does not indicate a project cancellation need.",
                "B": "Both progress and defect discovery are normal, expected outcomes of active testing.",
                "C": "Finding defects is a primary purpose of testing, not a sign of failure.",
                "D": "More test cases may be needed to cover the newly discovered defect areas."
            },
            "chapter": 5,
            "section": "5.3",
            "subsection": "5.3.1",
            "learningObjective": "FL-5.3.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test metrics",
                "progress monitoring",
                "defect discovery"
            ],
            "examTip": "Increasing pass rate + increasing defect count = testing is working and quality issues remain.",
            "memoryAid": "More passing = progress; More defects = testing is still effective."
        },
        {
            "id": "Q195",
            "statement": "A test completion report should include which of the following?",
            "options": {
                "A": "The marketing plan for the product launch",
                "B": "The complete source code of the application",
                "C": "Summary of testing performed, deviations from plan, and lessons learned",
                "D": "A list of all personal emails of team members"
            },
            "correctAnswer": "C",
            "explanation": "A test completion report (or test summary report) summarizes the testing effort, including what was tested, results, deviations from the plan, unresolved defects, and lessons learned. It provides stakeholders with a comprehensive view of the testing outcomes.",
            "whyWrong": "Source code and marketing plans are outside the scope of a test completion report.",
            "optionExplanations": {
                "A": "Marketing is outside the testing scope.",
                "B": "Source code is a development artifact, not part of test reporting.",
                "C": "Test summary, deviations, and lessons learned are standard completion report content.",
                "D": "Personal information is not included in test reports."
            },
            "chapter": 5,
            "section": "5.3",
            "subsection": "5.3.2",
            "learningObjective": "FL-5.3.2",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test completion report",
                "test summary",
                "lessons learned"
            ],
            "examTip": "Test completion report = what was done, what was found, what was learned.",
            "memoryAid": "Completion report = results + deviations + lessons."
        },
        {
            "id": "Q338",
            "statement": "A project uses a test strategy where test cases are designed based on a thorough analysis of the functional and technical risks identified during a product risk assessment. This is best described as:",
            "options": {
                "A": "A methodical test strategy following predefined checklists",
                "B": "An analytical test strategy based on risk analysis",
                "C": "A reactive test strategy responding to failures",
                "D": "A model-based test strategy using formal system models"
            },
            "correctAnswer": "B",
            "explanation": "An analytical test strategy uses analysis of some factor (such as risk, requirements, or specifications) to drive test design. Risk-based testing, where tests are designed based on product risk analysis, is a classic example of an analytical strategy.",
            "whyWrong": "Risk-based testing is an analytical test strategy.",
            "optionExplanations": {
                "A": "Methodical strategies follow predefined checklists or standards.",
                "B": "Risk-based test design is a hallmark of analytical strategies.",
                "C": "Reactive strategies wait for failures to guide further testing.",
                "D": "Model-based strategies use formal models of system behavior."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.2",
            "learningObjective": "FL-5.2.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test strategy",
                "analytical",
                "risk-based",
                "risk analysis"
            ],
            "examTip": "Analytical = analysis-driven (e.g. risk-based).",
            "memoryAid": "Analyze risks -> design tests."
        },
        {
            "id": "Q236",
            "statement": "A defect causes a rare spelling error on an internal page. It is easy to fix but has little business impact. Which severity is most appropriate?",
            "options": {
                "A": "Low severity",
                "B": "High severity",
                "C": "Critical severity",
                "D": "Severity cannot be assigned"
            },
            "correctAnswer": "A",
            "explanation": "Severity reflects the impact of the defect on the component or system; a minor spelling issue typically has low severity.",
            "whyWrong": "Severity reflects the technical impact of a defect (how badly it affects the system). Priority reflects business urgency (when it should be fixed). Confusing these two leads to poor defect management decisions.",
            "optionExplanations": {
                "A": "Severity reflects the impact of the defect on the component or system; a minor spelling issue typically has low severity.",
                "B": "Severity reflects the impact of the defect on the component or system; a mino...",
                "C": "Severity reflects the impact of the defect on the component or system; a mino...",
                "D": "Severity reflects the impact of the defect on the component or system; a mino..."
            },
            "chapter": 5,
            "section": "5.6",
            "subsection": "5.6.1",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "defect severity",
                "impact"
            ],
            "examTip": "Severity is technical/business impact, not fix effort.",
            "memoryAid": "Minor impact, low severity."
        },
        {
            "id": "Q234",
            "statement": "Which defect report information is most useful for reproducing a failure?",
            "options": {
                "A": "The project budget code",
                "B": "A statement that the system is bad",
                "C": "Exact steps, test data, environment, actual result, and expected result",
                "D": "The tester's preferred fix"
            },
            "correctAnswer": "C",
            "explanation": "Useful defect reports include enough objective information for investigation and reproduction, including steps, data, environment, actual, and expected results.",
            "whyWrong": "A test plan documents the test objectives, scope (what is in and out of scope), test approach (strategy, techniques, levels), resource requirements... The complete source code of the application under test (option A): Useful defect reports include enough objective information for investigation ...; The marketing plan for the software release (option B): Useful defect reports include enough objective information for investigation ...; The project budget for software development (option D): Use...",
            "optionExplanations": {
                "A": "Useful defect reports include enough objective information for investigation ...",
                "B": "Useful defect reports include enough objective information for investigation ...",
                "C": "Useful defect reports include enough objective information for investigation and reproduction, including steps, data, environment, actual, and expected results.",
                "D": "Useful defect reports include enough objective information for investigation ..."
            },
            "chapter": 5,
            "section": "5.6",
            "subsection": "5.6.1",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "defect report",
                "reproducibility"
            ],
            "examTip": "Reproduction needs steps, data, and environment.",
            "memoryAid": "Make the failure repeatable."
        },
        {
            "id": "Q275",
            "statement": "A defect report says only 'checkout broken'. What is the main problem with this report?",
            "options": {
                "A": "It has too many reproduction steps",
                "B": "It includes the expected result",
                "C": "It identifies the environment too precisely",
                "D": "It lacks objective details needed to reproduce and investigate the failure"
            },
            "correctAnswer": "D",
            "explanation": "A useful defect report must include clear summary, steps, data, environment, actual result, expected result, and other investigation information.",
            "whyWrong": "A useful defect report must include clear summary, steps, data, environment, actual result, expected result, and other investigation information. To link test cases to requirements, providing coverage analysis and impact assessment (option A): A useful defect report must include clear summary, steps, data, environment, ...; To calculate the budget for the testing project (option B): A useful defect report must include clear summary, steps, data, environment, ....",
            "optionExplanations": {
                "A": "A useful defect report must include clear summary, steps, data, environment, ...",
                "B": "A useful defect report must include clear summary, steps, data, environment, ...",
                "C": "A useful defect report must include clear summary, steps, data, environment, ...",
                "D": "A useful defect report must include clear summary, steps, data, environment, actual result, expected result, and other investigation information."
            },
            "chapter": 5,
            "section": "5.6",
            "subsection": "5.6.1",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "defect reporting",
                "quality"
            ],
            "examTip": "Defect reports must be actionable.",
            "memoryAid": "Vague reports slow fixes."
        },
        {
            "id": "Q110",
            "statement": "Which of the following is typically included in a test plan?",
            "options": {
                "A": "The complete source code of the application under test",
                "B": "The marketing plan for the software release",
                "C": "Test objectives, scope, approach, resources, schedule, and risks",
                "D": "The project budget for software development"
            },
            "correctAnswer": "C",
            "explanation": "A test plan documents the test objectives, scope (what is in and out of scope), test approach (strategy, techniques, levels), resource requirements, schedule, and risk assessments. It serves as the master plan for all testing activities.",
            "whyWrong": "Source code and marketing plans are not part of a test plan.",
            "optionExplanations": {
                "A": "Source code is a development artifact, not part of the test plan.",
                "B": "Marketing plans are unrelated to test planning.",
                "C": "Test objectives, scope, approach, resources, schedule, and risks are standard test plan elements.",
                "D": "The development budget is a project management artifact."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.1",
            "learningObjective": "FL-5.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test plan",
                "test objectives",
                "scope",
                "schedule"
            ],
            "examTip": "Test plan = what, how, who, when, and risks of testing.",
            "memoryAid": "Test plan: OSARRS (Objectives, Scope, Approach, Resources, Risks, Schedule)."
        },
        {
            "id": "Q197",
            "statement": "Which of the following is a key responsibility of configuration management in testing?",
            "options": {
                "A": "Creating the test schedule",
                "B": "Deciding which test cases to automate",
                "C": "Hiring and training test team members",
                "D": "Ensuring all test artifacts are uniquely identified and version-controlled"
            },
            "correctAnswer": "D",
            "explanation": "Configuration management in testing involves identifying, controlling, and tracking test artifacts and their versions. This ensures that test cases, test data, test scripts, and other work products are properly versioned, changes are controlled, and traceability is maintained.",
            "whyWrong": "Test case automation decisions are made during test planning and design, not CM.",
            "optionExplanations": {
                "A": "Scheduling is part of test planning.",
                "B": "Automation decisions are part of test planning, not CM.",
                "C": "Hiring is a human resources responsibility.",
                "D": "CM ensures identification, version control, and traceability of test artifacts."
            },
            "chapter": 5,
            "section": "5.4",
            "subsection": "5.4.1",
            "learningObjective": "FL-5.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "configuration management",
                "version control",
                "test artifacts"
            ],
            "examTip": "CM = identify, control, track, and trace all test artifacts.",
            "memoryAid": "CM = know what you have and what changed."
        },
        {
            "id": "Q349",
            "statement": "A project faces the risk that a key testing tool license may not be renewed on time, potentially delaying test execution. This is an example of:",
            "options": {
                "A": "Product risk",
                "B": "Project risk",
                "C": "Security risk",
                "D": "Quality risk"
            },
            "correctAnswer": "B",
            "explanation": "Tool license availability is a project risk because it threatens the project\\'s ability to execute testing on schedule. Project risks relate to management, resources, scheduling, and external factors that could impede project success.",
            "whyWrong": "Project risks affect project management and delivery; product risks affect software quality.",
            "optionExplanations": {
                "A": "Product risks concern the quality of the software (e.g., potential defects).",
                "B": "Tool license availability is a resource/project risk.",
                "C": "Security risk is a type of product risk (non-functional).",
                "D": "Quality risk is another term for product risk."
            },
            "chapter": 5,
            "section": "5.5",
            "subsection": "5.5.2",
            "learningObjective": "FL-5.2.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "project risk",
                "test tool",
                "resource risk"
            ],
            "examTip": "Tool license = project risk (resource).",
            "memoryAid": "Project risk = schedule, resources, budget."
        },
        {
            "id": "Q341",
            "statement": "A test manager has 10 test cases with the following priorities (1 = highest): P1: Login, Payment; P2: Search, Profile, Logout; P3: Help, About, Contact, Settings, Theme. The test execution must account for the dependency that Payment depends on Login. The team can execute 6 test cases in the available time. What is the optimal execution order?",
            "options": {
                "A": "Login, Payment, Search, Profile, Logout, Help",
                "B": "Help, About, Contact, Settings, Theme, Login",
                "C": "Payment, Login, Search, Profile, Logout, Help",
                "D": "Login, Search, Profile, Logout, Help, About"
            },
            "correctAnswer": "A",
            "explanation": "Optimal scheduling considers priority and dependencies. Login (P1) must run before Payment (P1) due to the dependency. After P1 tests, include P2 tests (Search, Profile, Logout) since capacity allows. Then include one P3 test (e.g., Help) for remaining capacity.",
            "whyWrong": "Prioritization by risk/priority, respecting dependencies, maximizes value within time constraints.",
            "optionExplanations": {
                "A": "Login -> Payment (P1 with dependency), then P2 tests, then P3.",
                "B": "Low priority first wastes limited testing capacity on less important tests.",
                "C": "Payment cannot run before Login due to dependency.",
                "D": "Missing Payment (P1) would leave a critical risk unaddressed."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.4",
            "learningObjective": "FL-5.2.4",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "prioritization",
                "scheduling",
                "dependencies",
                "risk-based"
            ],
            "examTip": "Schedule by priority, respect dependencies, fill remaining capacity.",
            "memoryAid": "Priority first, dependency second."
        },
        {
            "id": "Q352",
            "statement": "After a product risk analysis, a team decides to include additional regression tests for the high-risk modules and to run them in every test cycle. Low-risk modules run regression tests only before release. This illustrates:",
            "options": {
                "A": "That risk analysis has no impact on testing decisions",
                "B": "That all modules should be tested identically",
                "C": "How product risk analysis influences the scope and frequency of testing",
                "D": "How product risk analysis eliminates the need for regression testing"
            },
            "correctAnswer": "C",
            "explanation": "The decision to test high-risk modules more frequently and thoroughly, while reducing testing on low-risk modules, is a direct application of risk-based testing. Risk analysis helps determine not just what to test, but how thoroughly and how often.",
            "whyWrong": "Risk analysis determines test scope, depth, and frequency.",
            "optionExplanations": {
                "A": "Risk analysis directly influenced the testing decisions.",
                "B": "Risk-based testing differentiates test effort by risk level.",
                "C": "Higher risk modules get more frequent and thorough testing.",
                "D": "Risk analysis informs regression testing; it does not replace it."
            },
            "chapter": 5,
            "section": "5.5",
            "subsection": "5.5.3",
            "learningObjective": "FL-5.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "risk analysis",
                "test frequency",
                "test scope"
            ],
            "examTip": "Risk analysis = different test effort for different risk levels.",
            "memoryAid": "Risk = scope + frequency."
        },
        {
            "id": "Q136",
            "statement": "A test manager needs to estimate testing effort for a project with incomplete requirements. Which estimation technique would be most appropriate in this situation?",
            "options": {
                "A": "Work breakdown structure with detailed task decomposition",
                "B": "Metrics-based estimation using function points",
                "C": "Parametric estimation using lines of code",
                "D": "Expert judgment based on similar past projects"
            },
            "correctAnswer": "D",
            "explanation": "When requirements are incomplete, expert judgment is often the most appropriate estimation technique. Experts with experience in similar projects can provide reasonable estimates even with limited information, using their domain knowledge and experience with analogous situations.",
            "whyWrong": "WBS, function points, and parametric models typically require more detailed information than is available with incomplete requirements.",
            "optionExplanations": {
                "A": "WBS requires detailed task decomposition that needs more complete requirements.",
                "B": "Function point analysis requires reasonably stable requirements.",
                "C": "Lines of code estimation is not typically used for test effort estimation.",
                "D": "Expert judgment works well with incomplete information by relying on past experience."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.1",
            "learningObjective": "FL-5.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "estimation",
                "expert judgment",
                "incomplete requirements"
            ],
            "examTip": "When details are scarce, rely on expert judgment and analogy-based estimation.",
            "memoryAid": "No details = ask the experts."
        },
        {
            "id": "Q192",
            "statement": "In a defect management workflow, what typically happens immediately after a defect is discovered and reported?",
            "options": {
                "A": "The release is immediately canceled",
                "B": "The defect is triaged to assess severity, priority, and assign ownership",
                "C": "The test case that found the defect is deleted",
                "D": "The defect is automatically fixed by the system"
            },
            "correctAnswer": "B",
            "explanation": "After a defect is reported, it enters a triage or assessment phase where the defect is reviewed to determine its severity, priority, and the appropriate action (fix, defer, reject). It is then assigned to the appropriate person for resolution.",
            "whyWrong": "Defects are not automatically fixed; they require human analysis and resolution.",
            "optionExplanations": {
                "A": "Canceling a release is an extreme measure taken only for critical issues.",
                "B": "Triage assesses the defect's impact and determines next steps.",
                "C": "Test cases are valuable artifacts and should not be deleted because they found defects.",
                "D": "Defects require human intervention to fix."
            },
            "chapter": 5,
            "section": "5.6",
            "subsection": "5.6.1",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "defect management",
                "triage",
                "workflow"
            ],
            "examTip": "Defect workflow: Discover -> Report -> Triage -> Assign -> Fix -> Verify -> Close.",
            "memoryAid": "Defect lifecycle: Report, Assess, Assign, Fix, Verify, Close."
        },
        {
            "id": "Q138",
            "statement": "A defect is reported as 'High severity' because it causes the application to crash when a specific report is generated. However, the report is only used by one client once per quarter. What priority should this defect likely receive?",
            "options": {
                "A": "Low priority because the business impact is limited despite the high technical severity",
                "B": "High priority because any crash is unacceptable",
                "C": "Medium priority because severity and priority must always match",
                "D": "No priority needed since it only affects one client"
            },
            "correctAnswer": "A",
            "explanation": "Priority reflects business urgency and impact. While the technical severity is high (crash), the business impact is limited (one client, quarterly use). Therefore, the priority would likely be lower than a defect that crashes a core feature used daily by all clients.",
            "whyWrong": "Technical severity and business priority are independent dimensions that can differ.",
            "optionExplanations": {
                "A": "Priority considers business context, not just technical impact.",
                "B": "Every defect should be prioritized to guide resolution timing.",
                "C": "Severity and priority can differ based on business context.",
                "D": "Priority considers business impact; limited usage means lower urgency to fix."
            },
            "chapter": 5,
            "section": "5.6",
            "subsection": "5.6.1",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "priority",
                "severity",
                "defect triage"
            ],
            "examTip": "Severity = technical impact; Priority = business urgency. A severe crash can be low priority if rarely used.",
            "memoryAid": "High severity crash + low usage = low priority."
        },
        {
            "id": "Q350",
            "statement": "A risk assessment identifies that the payment module has complex business rules and historically had a high defect density. The team decides to apply more thorough testing to this module. This is an example of managing:",
            "options": {
                "D": "Product risk, because the risk relates to potential defects in the software",
                "A": "Project risk, because the risk affects the testing schedule",
                "B": "Organizational risk, because it involves team processes",
                "C": "Budget risk, because more testing costs more money"
            },
            "correctAnswer": "D",
            "explanation": "Product risk (or quality risk) relates to the possibility that the software may not meet its quality objectives. Complex modules with high historical defect density present a product risk. More thorough testing is an appropriate mitigation.",
            "whyWrong": "Product risks relate to potential quality issues in the software.",
            "optionExplanations": {
                "D": "Potential defects in a module due to complexity and history is a product risk.",
                "A": "The risk is about defect potential, not schedule impact.",
                "B": "Organizational risks involve company-level factors.",
                "C": "Budget is a project risk, not the primary concern here."
            },
            "chapter": 5,
            "section": "5.5",
            "subsection": "5.5.2",
            "learningObjective": "FL-5.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "product risk",
                "risk-based testing",
                "defect-prone modules"
            ],
            "examTip": "Complex code with defect history = product risk.",
            "memoryAid": "Product risk = software quality risk."
        },
        {
            "id": "Q112",
            "statement": "After two weeks of test execution, a test manager reports that 80% of test cases have been executed and 45 defects have been found, with 30 already fixed and verified. Which type of information does this provide to stakeholders?",
            "options": {
                "A": "Test progress information, including execution status and defect resolution status",
                "B": "Final test completion report",
                "C": "Project budget information",
                "D": "Configuration management status"
            },
            "correctAnswer": "A",
            "explanation": "This is test progress information that shows how much testing has been completed (80% execution), defect discovery progress (45 defects), and defect resolution status (30 fixed and verified). Stakeholders use this to assess the current quality status and project progress.",
            "whyWrong": "This is an interim progress report, not a final test completion report.",
            "optionExplanations": {
                "A": "Progress reporting includes execution metrics, defect findings, and resolution status.",
                "B": "A final report would be produced at test completion, not after two weeks.",
                "C": "Budget information is not included in this progress update.",
                "D": "Configuration management tracks version control, not execution progress."
            },
            "chapter": 5,
            "section": "5.3",
            "subsection": "5.3.1",
            "learningObjective": "FL-5.3.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test progress",
                "reporting",
                "metrics"
            ],
            "examTip": "Test progress reporting = execution %, defects found/fixed, remaining risks.",
            "memoryAid": "Progress = how much done, how many bugs, how many fixed."
        },
        {
            "id": "Q079",
            "statement": "Which of the following best describes the purpose of a traceability matrix?",
            "options": {
                "C": "To link test cases to requirements, providing coverage analysis and impact assessment",
                "D": "To calculate the budget for the testing project",
                "A": "To replace the need for test case documentation",
                "B": "To assign testers to specific test cases"
            },
            "correctAnswer": "C",
            "explanation": "A traceability matrix maps the relationship between requirements and test cases. It helps assess test coverage, identify the impact of requirement changes, provide evidence that all requirements are tested, and support reporting.",
            "whyWrong": "A traceability matrix supplements test documentation but does not replace it.",
            "optionExplanations": {
                "C": "Traceability matrices link requirements to test cases for coverage and impact analysis.",
                "D": "Budget calculation is a separate activity.",
                "A": "Test cases still need to be documented; the matrix links them to requirements.",
                "B": "Tester assignment is a resourcing activity, not the purpose of traceability."
            },
            "chapter": 5,
            "section": "5.3",
            "subsection": "5.3.1",
            "learningObjective": "FL-5.3.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "traceability matrix",
                "coverage",
                "requirements"
            ],
            "examTip": "Traceability matrix = connects requirements to tests for coverage and impact analysis.",
            "memoryAid": "Matrix = map from requirements to test cases."
        },
        {
            "id": "Q116",
            "statement": "A defect report is submitted and the development team fixes the defect. The tester then verifies the fix in the new build and confirms it works correctly. What should the tester do next?",
            "options": {
                "B": "Update the defect report status to 'Verified Closed' or 'Resolved'",
                "C": "Delete the defect report since the issue is fixed",
                "D": "Ignore the defect report and move on to the next test",
                "A": "Reopen the defect report for confirmation"
            },
            "correctAnswer": "B",
            "explanation": "After verifying that a defect fix works correctly, the tester should update the defect report status to indicate that the fix has been confirmed and the defect can be closed. This provides a clear audit trail of the defect's lifecycle from discovery through resolution and verification.",
            "whyWrong": "Deleting defect reports is not a standard practice; the history should be preserved.",
            "optionExplanations": {
                "B": "Updating the status to verified/closed provides proper tracking and audit trail.",
                "C": "Reopening would be incorrect since the fix has been confirmed.",
                "D": "The report must be formally updated to reflect the verification result.",
                "A": "Defect reports should be preserved for historical analysis and process improvement."
            },
            "chapter": 5,
            "section": "5.6",
            "subsection": "5.6.1",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "defect lifecycle",
                "defect report",
                "verification"
            ],
            "examTip": "After verifying a fix, update the defect status to reflect confirmed resolution.",
            "memoryAid": "Defect lifecycle: Found → Reported → Assigned → Fixed → Verified → Closed."
        },
        {
            "id": "Q135",
            "statement": "A test team is structured so that testers report to a test manager who is separate from the development teams. The test manager allocates testers to various projects as needed. This is an example of which type of test organization?",
            "options": {
                "A": "Hybrid test organization",
                "B": "Outsourced test organization",
                "C": "Decentralized test organization",
                "D": "Centralized test organization"
            },
            "correctAnswer": "D",
            "explanation": "In a centralized test organization, all testers belong to a single test department and are allocated to projects by a test manager. This provides consistency in testing practices, career paths for testers, and easier resource management.",
            "whyWrong": "Decentralized would have testers embedded within individual project teams reporting to project managers.",
            "optionExplanations": {
                "A": "Hybrid combines project-embedded teams with central coordination.",
                "B": "Outsourced involves external organizations performing testing.",
                "C": "Decentralized has testers embedded in and reporting to individual project teams.",
                "D": "A central test department with a test manager allocating resources is centralized."
            },
            "chapter": 5,
            "section": "5.1",
            "subsection": "5.1.1",
            "learningObjective": "FL-5.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test organization",
                "centralized",
                "test management"
            ],
            "examTip": "Centralized = one test department. Decentralized = testers in project teams. Hybrid = both.",
            "memoryAid": "Centralized = central hub; Decentralized = distributed; Hybrid = both."
        },
        {
            "id": "Q339",
            "statement": "Which of the following is a valid example of an entry criterion for system testing?",
            "options": {
                "A": "All unit tests have passed with at least 95% statement coverage and no critical integration defects remain open",
                "B": "All testers are tired and want to finish",
                "C": "The project manager has approved the test plan informally",
                "D": "The test environment is being set up"
            },
            "correctAnswer": "A",
            "explanation": "Entry criteria define the conditions that must be met before testing can begin. Quantitative criteria such as \\'unit tests passed with specific coverage\\' are objective and measurable. Vague criteria like \\'testers are tired\\' or informal approvals are not valid entry criteria.",
            "whyWrong": "Entry criteria must be measurable and objective.",
            "optionExplanations": {
                "A": "Measurable coverage and defect status are objective entry criteria.",
                "B": "Subjective states are not valid entry criteria.",
                "C": "Approvals should be formal and documented.",
                "D": "The environment must be ready, not being set up."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.3",
            "learningObjective": "FL-5.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "entry criteria",
                "test planning",
                "test readiness"
            ],
            "examTip": "Entry criteria = measurable conditions to start testing.",
            "memoryAid": "Measurable start conditions."
        },
        {
            "id": "Q115",
            "statement": "Which of the following describes the correct sequence of risk management activities?",
            "options": {
                "C": "Risk identification, risk analysis, risk mitigation, risk monitoring",
                "D": "Risk mitigation, risk identification, risk analysis, risk monitoring",
                "A": "Risk monitoring, risk identification, risk analysis, risk mitigation",
                "B": "Risk analysis, risk identification, risk monitoring, risk mitigation"
            },
            "correctAnswer": "C",
            "explanation": "Risk management follows this sequence: 1) Risk identification (find potential risks), 2) Risk analysis (assess likelihood and impact), 3) Risk mitigation (plan and implement actions to address risks), 4) Risk monitoring (track risks and mitigation effectiveness throughout the project).",
            "whyWrong": "Risks must be identified before they can be analyzed, and analyzed before mitigation can be planned.",
            "optionExplanations": {
                "C": "Analysis cannot occur before identification.",
                "D": "Identify → Analyze → Mitigate → Monitor is the correct sequence.",
                "A": "Monitoring occurs after mitigation is implemented.",
                "B": "Mitigation before identification is impossible."
            },
            "chapter": 5,
            "section": "5.5",
            "subsection": "5.5.2",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "risk management",
                "risk process",
                "sequence"
            ],
            "examTip": "Risk management: Identify, Analyze, Mitigate, Monitor.",
            "memoryAid": "I A M M: Identify, Analyze, Mitigate, Monitor."
        },
        {
            "id": "Q031",
            "statement": "Which type of risk is directly related to the software itself, such as potential defects or poor performance?",
            "options": {
                "A": "Business risk",
                "B": "Product risk",
                "C": "Schedule risk",
                "D": "Project risk"
            },
            "correctAnswer": "B",
            "explanation": "Product risks (also called quality risks) are risks related to the quality of the software product itself. These include potential defects, poor performance, security vulnerabilities, or usability problems.",
            "whyWrong": "Project risks relate to management and organizational aspects, not the software itself.",
            "optionExplanations": {
                "A": "Business risk is a type of project risk related to business impact.",
                "B": "Product risks are quality-related risks inherent in the software product.",
                "C": "Project risks involve schedule, budget, resources, and organizational factors.",
                "D": "Schedule risk is a type of project risk related to timelines."
            },
            "chapter": 5,
            "section": "5.5",
            "subsection": "5.5.1",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "product risk",
                "quality risk",
                "risk management"
            ],
            "examTip": "Product risk = what could go wrong with the software. Project risk = what could go wrong with the project.",
            "memoryAid": "Product = the 'what'; Project = the 'how'."
        },
        {
            "id": "Q032",
            "statement": "A defect report should typically include which of the following?",
            "options": {
                "A": "A clear description of the defect, steps to reproduce, and expected vs actual results",
                "B": "The test case ID and the name of the tester who found it",
                "C": "The estimated cost of fixing the defect",
                "D": "The name of the developer who should fix the defect"
            },
            "correctAnswer": "A",
            "explanation": "A good defect report includes a concise description of the defect, precise steps to reproduce it, and what was expected versus what actually happened. Additional useful information includes severity, priority, environment details, and supporting attachments.",
            "whyWrong": "The developer assignment is determined by the project manager or team lead, not included in the initial defect report.",
            "optionExplanations": {
                "A": "Steps to reproduce, expected vs actual results, and clear description are essential.",
                "B": "Tester name and test case ID may be useful metadata but are not the primary content.",
                "C": "Cost estimation is a management activity, not part of defect reporting.",
                "D": "Assignment is a triage decision, not typically part of the defect report itself."
            },
            "chapter": 5,
            "section": "5.6",
            "subsection": "5.6.1",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "defect report",
                "defect management",
                "bug report"
            ],
            "examTip": "A good defect report should make the defect reproducible by anyone reading it.",
            "memoryAid": "Defect report = What + How to reproduce + Expected vs Actual."
        },
        {
            "id": "Q271",
            "statement": "Which exit criterion is objective and testable?",
            "options": {
                "A": "Everyone feels testing is enough",
                "B": "The team is tired",
                "C": "The release date has arrived",
                "D": "No unresolved critical defects and at least 95% of high-priority tests passed"
            },
            "correctAnswer": "D",
            "explanation": "Exit criteria should be measurable, such as defect status, coverage, and pass rates.",
            "whyWrong": "Exit criteria should be measurable, such as defect status, coverage, and pass rates. Everyone feels testing is enough (option A): Exit criteria should be measurable, such as defect status, coverage, and pass...; The team is tired (option B): Exit criteria should be measurable, such as defect status, coverage, and pass...; The release date has arrived (option C): Exit criteria should be measurable, such as defect status, coverage, and pass....",
            "optionExplanations": {
                "A": "Exit criteria should be measurable, such as defect status, coverage, and pass...",
                "B": "Exit criteria should be measurable, such as defect status, coverage, and pass...",
                "C": "Exit criteria should be measurable, such as defect status, coverage, and pass...",
                "D": "Exit criteria should be measurable, such as defect status, coverage, and pass rates."
            },
            "chapter": 5,
            "section": "5.1",
            "subsection": "5.1.2",
            "learningObjective": "FL-5.1.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "exit criteria",
                "measurable"
            ],
            "examTip": "Good criteria can be checked objectively.",
            "memoryAid": "Measurable means manageable."
        },
        {
            "id": "Q345",
            "statement": "A test manager estimates the testing effort for a new project by analyzing the effort spent on similar projects in the past, adjusting for differences in complexity and scope. Which estimation technique is being used?",
            "options": {
                "A": "Expert-based estimation using Delphi technique",
                "B": "Metrics-based estimation using historical project data",
                "C": "Work breakdown structure estimation",
                "D": "Expert judgment of a single person"
            },
            "correctAnswer": "B",
            "explanation": "Metrics-based estimation uses historical data from previous projects (e.g., defects per function point, test hours per requirement) to project effort for new projects. This technique relies on quantitative data rather than subjective judgment.",
            "whyWrong": "Metrics-based estimation uses historical data to project future effort.",
            "optionExplanations": {
                "A": "Delphi uses expert consensus, not historical data.",
                "B": "Using historical project data is metrics-based estimation.",
                "C": "WBS decomposes work but the estimation basis is the technique.",
                "D": "A single expert would rely on personal judgment, not data."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.6",
            "learningObjective": "FL-5.1.4",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "estimation techniques",
                "metrics-based",
                "historical data"
            ],
            "examTip": "Metrics-based = past data drives future estimates.",
            "memoryAid": "Past data predicts future effort."
        },
        {
            "id": "Q076",
            "statement": "What is the primary purpose of a defect management process?",
            "options": {
                "A": "To assign blame for each defect found",
                "B": "To eliminate all defects from the software immediately",
                "C": "To provide a systematic way to track and manage defects from discovery to resolution",
                "D": "To punish developers who introduce defects"
            },
            "correctAnswer": "C",
            "explanation": "The defect management process provides a structured workflow for recording, tracking, prioritizing, assigning, resolving, and verifying defects. It ensures defects are properly managed and provides data for process improvement.",
            "whyWrong": "The goal is to improve quality and process, not to assign blame or punish.",
            "optionExplanations": {
                "A": "Defect management focuses on resolution, not blame.",
                "B": "Punishment is not a goal of defect management.",
                "C": "Defect management is a systematic process for tracking defects throughout their lifecycle.",
                "D": "Defects are prioritized and resolved based on severity and resources."
            },
            "chapter": 5,
            "section": "5.6",
            "subsection": "5.6.1",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "defect management",
                "defect lifecycle",
                "tracking"
            ],
            "examTip": "Defect management = systematic tracking and resolution, not blame.",
            "memoryAid": "Defect management = find, track, fix, verify, learn."
        },
        {
            "id": "Q340",
            "statement": "Which of the following is the best example of an exit criterion for a test phase?",
            "options": {
                "A": "The team feels confident about the release",
                "B": "All test cases have been reviewed",
                "C": "The project budget has been fully spent",
                "D": "All planned tests have been executed, no critical defects remain open, and achieved coverage meets the defined targets"
            },
            "correctAnswer": "D",
            "explanation": "Exit criteria are measurable conditions that must be met to conclude a test phase. They typically include completion of planned tests, achievement of coverage targets, and resolution of defects at defined severity levels. Subjective feelings or budget consumption are not valid exit criteria.",
            "whyWrong": "Exit criteria must be measurable and objectively verifiable.",
            "optionExplanations": {
                "A": "Feelings are subjective and not measurable.",
                "B": "Test case review is an entry criterion, not exit.",
                "C": "Budget consumption does not indicate testing completeness.",
                "D": "Execution completion, defect status, and coverage targets are objective exit criteria."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.3",
            "learningObjective": "FL-5.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "exit criteria",
                "test phase",
                "completion criteria"
            ],
            "examTip": "Exit criteria = measurable conditions to stop testing.",
            "memoryAid": "Measurable stop conditions."
        },
        {
            "id": "Q273",
            "statement": "Which traceability link is most useful for impact analysis after a requirement changes?",
            "options": {
                "A": "Meeting room to chair count",
                "B": "Requirement to related test cases and defects",
                "C": "Office location to employee badge number",
                "D": "Tool vendor to invoice color"
            },
            "correctAnswer": "B",
            "explanation": "Traceability between requirements, tests, and defects helps identify affected tests and quality information when changes occur.",
            "whyWrong": "Traceability links requirements, tests, and defects bidirectionally. It helps assess change impact and provide quality information; it does not replace test execution or defect reporting.",
            "optionExplanations": {
                "A": "Traceability between requirements, tests, and defects helps identify affected...",
                "B": "Traceability between requirements, tests, and defects helps identify affected tests and quality information when changes occur.",
                "C": "Traceability between requirements, tests, and defects helps identify affected...",
                "D": "Traceability between requirements, tests, and defects helps identify affected..."
            },
            "chapter": 5,
            "section": "5.4",
            "subsection": "5.4.1",
            "learningObjective": "FL-5.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "traceability",
                "impact analysis"
            ],
            "examTip": "Traceability supports change impact analysis.",
            "memoryAid": "Connect requirement to tests."
        },
        {
            "id": "Q342",
            "statement": "A test suite has these test cases with dependencies: T1 (no deps), T2 (needs T1), T3 (needs T1), T4 (needs T2 and T3), T5 (no deps). If the team can execute only 3 test cases, which set maximizes coverage of the dependency chain?",
            "options": {
                "A": "T1, T2, T3",
                "B": "T1, T5, T2",
                "C": "T1, T2, T4",
                "D": "T5, T1, T2"
            },
            "correctAnswer": "C",
            "explanation": "To maximize dependency coverage: T1 enables both T2 and T3. T2 enables T4. With 3 slots: T1 -> T2 -> T4 exercises the longest chain. T5 is independent and should be included if capacity allows, but T1, T2, T4 exercises more dependency relationships.",
            "whyWrong": "Targeting dependent test chains provides more coverage of integration behavior.",
            "optionExplanations": {
                "A": "T1, T2, T3 covers dependencies but does not reach the final dependent test T4.",
                "B": "T5 consumes a slot that could be used for the chain.",
                "C": "T1 -> T2 -> T4 exercises the full dependency chain to the final test.",
                "D": "T5 wastes the limited capacity on an independent test."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.4",
            "learningObjective": "FL-5.2.4",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "dependencies",
                "prioritization",
                "test scheduling",
                "chain coverage"
            ],
            "examTip": "With limited slots, target the longest dependency chain.",
            "memoryAid": "Chain tests give more coverage per slot."
        },
        {
            "id": "Q189",
            "statement": "What is the primary purpose of a test strategy?",
            "options": {
                "A": "To define the overall approach and objectives for testing at the organizational or program level",
                "B": "To replace the need for individual test plans",
                "C": "To list every test case that will be executed",
                "D": "To assign specific testers to test cases"
            },
            "correctAnswer": "A",
            "explanation": "A test strategy defines the overall testing approach, including test levels, test types, techniques, and resource requirements at an organizational or program level. It provides high-level guidance, while test plans provide detail for specific projects or iterations.",
            "whyWrong": "Detailed test case lists are part of test documentation, not the test strategy.",
            "optionExplanations": {
                "A": "The test strategy sets the high-level testing approach and objectives.",
                "B": "Test cases are detailed in test plans and test specifications.",
                "C": "Resource assignment is typically done in test plans.",
                "D": "Test plans provide project-specific detail that complements the strategy."
            },
            "chapter": 5,
            "section": "5.1",
            "subsection": "5.1.1",
            "learningObjective": "FL-5.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test strategy",
                "test approach",
                "test management"
            ],
            "examTip": "Test strategy = big picture approach. Test plan = detailed execution plan.",
            "memoryAid": "Strategy = the 'how' at high level; Plan = the 'how' in detail."
        },
        {
            "id": "Q348",
            "statement": "A test completion report is prepared at the end of a project. Which audience would primarily use this report?",
            "options": {
                "A": "The end users of the system",
                "B": "The network operations team monitoring production",
                "C": "Project management, product owners, and other stakeholders who need to understand overall testing outcomes and lessons learned",
                "D": "The external auditors reviewing financial transactions"
            },
            "correctAnswer": "C",
            "explanation": "A test completion report summarizes testing outcomes, coverage, defects, and lessons learned. Its primary audience includes project management and stakeholders who need to understand what was tested, what was found, and what can be improved for future projects.",
            "whyWrong": "Completion reports inform management about outcomes and process improvement.",
            "optionExplanations": {
                "A": "End users need release notes, not detailed test completion reports.",
                "B": "Operations monitoring uses dashboards, not completion reports.",
                "C": "Management and stakeholders use completion reports for decisions and improvement.",
                "D": "Financial auditors review financial records, not test reports."
            },
            "chapter": 5,
            "section": "5.3",
            "subsection": "5.3.2",
            "learningObjective": "FL-5.3.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test completion report",
                "stakeholders",
                "test summary"
            ],
            "examTip": "Completion reports = outcomes + lessons for management.",
            "memoryAid": "End of project = summary for management."
        },
        {
            "id": "Q159",
            "statement": "Which of the following is a test control activity?",
            "options": {
                "A": "Reprioritizing tests to focus on high-risk areas when schedule pressure increases",
                "B": "Defining the test objectives in the test plan",
                "C": "Measuring the percentage of test cases executed so far",
                "D": "Archiving test artifacts at the end of the project"
            },
            "correctAnswer": "A",
            "explanation": "Test control involves taking corrective actions when monitoring reveals deviations from the plan. Reprioritizing tests due to schedule pressure is a control action that adjusts the testing approach based on current conditions.",
            "whyWrong": "Measuring test execution progress is test monitoring, not test control.",
            "optionExplanations": {
                "A": "Taking corrective action to adjust testing based on changing conditions is test control.",
                "B": "Defining objectives is part of test planning.",
                "C": "Measuring progress is test monitoring, which precedes control.",
                "D": "Archiving artifacts is a test completion activity."
            },
            "chapter": 5,
            "section": "5.3",
            "subsection": "5.3.1",
            "learningObjective": "FL-5.3.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test control",
                "corrective action",
                "prioritization"
            ],
            "examTip": "Control = act on what monitoring reveals. If behind schedule, take corrective action.",
            "memoryAid": "Control = steer the ship when you see you are off course."
        },
        {
            "id": "Q029",
            "statement": "A test manager is reviewing test progress and notices that only 60% of planned tests have been executed, but the release date is in two days. What should the test manager do?",
            "options": {
                "A": "Ask developers to fix all remaining defects immediately",
                "B": "Skip all remaining tests and release on time",
                "C": "Ignore the situation and hope the remaining tests pass quickly",
                "D": "Report the status to stakeholders and recommend options such as extending the schedule or reducing scope"
            },
            "correctAnswer": "D",
            "explanation": "When test progress deviates from the plan, the test manager should report the status transparently to stakeholders and propose actionable options. This is part of test monitoring and control - measuring progress and taking corrective actions.",
            "whyWrong": "Skipping tests or ignoring the situation is irresponsible and could lead to quality issues.",
            "optionExplanations": {
                "A": "Asking developers to fix defects does not address the test execution gap.",
                "B": "Skipping tests ignores quality risks and is not responsible behavior.",
                "C": "Ignoring the situation is unprofessional and risky.",
                "D": "Transparent reporting and proposing options demonstrates proper test management."
            },
            "chapter": 5,
            "section": "5.3",
            "subsection": "5.3.1",
            "learningObjective": "FL-5.3.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test monitoring",
                "test control",
                "progress reporting"
            ],
            "examTip": "Test control = when actual progress deviates from plan, take corrective action.",
            "memoryAid": "Monitor = measure; Control = adjust."
        },
        {
            "id": "Q058",
            "statement": "Which of the following is a project risk?",
            "options": {
                "A": "The payment gateway may crash under heavy load",
                "B": "The test environment may not be available when needed",
                "C": "The login module may contain security vulnerabilities",
                "D": "The search function may return incorrect results"
            },
            "correctAnswer": "B",
            "explanation": "Project risks are management-related risks that could affect the project's success. Test environment availability is a project risk because it relates to resources and infrastructure needed for testing. Product risks (B, C, D) are related to the quality of the software itself.",
            "whyWrong": "Security vulnerabilities, incorrect results, and crashes are all product risks (quality risks).",
            "optionExplanations": {
                "A": "Performance issues are product risks related to non-functional quality.",
                "B": "Test environment availability is a project risk (resource/organizational).",
                "C": "Security vulnerabilities are product risks related to software quality.",
                "D": "Incorrect results are product risks related to functional correctness."
            },
            "chapter": 5,
            "section": "5.5",
            "subsection": "5.5.1",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "project risk",
                "product risk",
                "risk types"
            ],
            "examTip": "Project risk = management, schedule, budget, resources. Product risk = software quality.",
            "memoryAid": "Project = the project itself; Product = the software being built."
        },
        {
            "id": "Q346",
            "statement": "Which is a key difference between metrics-based estimation and expert-based estimation?",
            "options": {
                "A": "Expert-based estimation is always more accurate than metrics-based",
                "B": "Metrics-based estimation relies on subjective judgment; expert-based relies on data",
                "C": "Expert-based estimation requires historical data; metrics-based does not",
                "D": "Metrics-based estimation uses quantitative data from past projects; expert-based relies on the experience and intuition of knowledgeable individuals"
            },
            "correctAnswer": "D",
            "explanation": "Metrics-based estimation is data-driven, using measurements from past projects. Expert-based estimation relies on the experience, knowledge, and intuition of domain experts. Both have strengths and weaknesses; they are often used together for more reliable estimates.",
            "whyWrong": "Metrics = data; Expert = judgment.",
            "optionExplanations": {
                "A": "Neither is always more accurate; context determines which is more appropriate.",
                "B": "This reverses the definitions of both techniques.",
                "C": "Expert-based does not require historical data; metrics-based does.",
                "D": "Metrics = data; Expert = judgment. They are complementary approaches."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.6",
            "learningObjective": "FL-5.1.4",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "metrics-based",
                "expert-based",
                "estimation comparison"
            ],
            "examTip": "Metrics = data points; Expert = human judgment.",
            "memoryAid": "Data vs. Intuition."
        },
        {
            "id": "Q194",
            "statement": "Which of the following is an example of a product risk assessment activity?",
            "options": {
                "A": "Assessing the budget risk for the testing phase",
                "B": "Evaluating the risk that a key tester might leave the project",
                "C": "Analyzing which features are most critical to business operations and may contain defects",
                "D": "Identifying the risk that the test environment will not be ready on time"
            },
            "correctAnswer": "C",
            "explanation": "Product risk assessment focuses on identifying risks related to the quality of the software product itself. Analyzing which features are critical to business operations and may contain defects is a product risk activity because it addresses potential quality issues in the software.",
            "whyWrong": "Test environment readiness, tester attrition, and budget concerns are project risks, not product risks.",
            "optionExplanations": {
                "A": "Budget risk is a project risk.",
                "B": "Personnel risks are project risks.",
                "C": "Assessing critical features for potential defects is a product risk activity.",
                "D": "Test environment availability is a project risk."
            },
            "chapter": 5,
            "section": "5.5",
            "subsection": "5.5.1",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "product risk",
                "risk assessment",
                "quality risk"
            ],
            "examTip": "Product risk = what could go wrong with the software. Project risk = what could go wrong with the project.",
            "memoryAid": "Product = software quality; Project = management and resources."
        },
        {
            "id": "Q113",
            "statement": "A tester needs to reproduce a defect that was found three weeks ago. They need to use the exact version of the test script that was used at that time. Which configuration management practice enables this?",
            "options": {
                "A": "Storing all test scripts in email attachments",
                "B": "Version control and baseline management of all test artifacts",
                "C": "Keeping only the latest version of each test script",
                "D": "Using shared network folders without version tracking"
            },
            "correctAnswer": "B",
            "explanation": "Configuration management includes version control, which tracks changes to artifacts over time and allows retrieval of specific versions. Baselines mark specific points in time, enabling testers to recreate the exact conditions under which a defect was found.",
            "whyWrong": "Without version control, retrieving an exact previous version of a test artifact would be impossible.",
            "optionExplanations": {
                "A": "Email storage is unreliable and not a proper configuration management practice.",
                "B": "Version control and baselines enable recreation of historical test conditions.",
                "C": "Keeping only the latest version prevents access to historical versions.",
                "D": "Shared folders without version control do not preserve version history."
            },
            "chapter": 5,
            "section": "5.4",
            "subsection": "5.4.1",
            "learningObjective": "FL-5.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "configuration management",
                "version control",
                "baselines"
            ],
            "examTip": "CM enables reproducibility through version control, baselines, and change control.",
            "memoryAid": "CM = ability to rewind time and recreate any past state."
        },
        {
            "id": "Q196",
            "statement": "A test manager is estimating effort for a new project and decides to ask three experienced test managers to provide independent estimates, then discuss them to reach consensus. Which estimation technique is this?",
            "options": {
                "A": "Delphi technique (or Wideband Delphi)",
                "B": "Work breakdown structure",
                "C": "Expert judgment by a single person",
                "D": "Metrics-based estimation"
            },
            "correctAnswer": "A",
            "explanation": "The Delphi technique (Wideband Delphi) involves multiple experts providing independent estimates anonymously, followed by discussion and re-estimation until consensus is reached. This reduces bias from any single expert and produces more reliable estimates.",
            "whyWrong": "Single expert judgment involves only one person, not multiple independent estimates.",
            "optionExplanations": {
                "A": "Delphi uses multiple independent experts with iterative consensus-building.",
                "B": "WBS decomposes work into smaller components for estimation.",
                "C": "This involves multiple experts, not just one.",
                "D": "Metrics-based uses historical data, not expert consensus."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.1",
            "learningObjective": "FL-5.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "Delphi technique",
                "estimation",
                "expert consensus"
            ],
            "examTip": "Delphi = multiple experts, anonymous estimates, consensus through iteration.",
            "memoryAid": "Delphi = many experts, one estimate."
        }
    ],
    "exam6": [
        {
            "id": "Q389",
            "statement": "A test team is evaluating a model-based testing tool. What is the MAIN advantage of using such a tool?",
            "options": {
                "D": "It can automatically generate test cases from system models, improving coverage and reducing manual effort",
                "A": "It executes tests faster than any other type of tool",
                "B": "It eliminates the need for requirements documentation",
                "C": "It guarantees defect-free software"
            },
            "correctAnswer": "D",
            "explanation": "Model-based testing tools derive test cases from models of system behavior, which can improve coverage and reduce time spent on manual test design.",
            "whyWrong": "It executes tests faster than any other type of tool (A): Incorrect. 'It executes tests faster than any other type of tool' does not match the correct concept: Model-based testing tools derive test cases from models of system behavior, w...; It eliminates the need for requirements documentation (B): Incorrect. 'It eliminates the need for requirements documentation' does not match the correct co...",
            "optionExplanations": {
                "D": "Model-based testing tools derive test cases from models of system behavior, which can improve coverage and reduce time spent on manual test design.",
                "A": "Incorrect. 'It executes tests faster than any other type of tool' does not match the correct concept: Model-based testing tools derive test cases from models of system behavior, w...",
                "B": "Incorrect. 'It eliminates the need for requirements documentation' does not match the correct concept: Model-based testing tools derive test cases from models of system behavior, w...",
                "C": "Incorrect. 'It guarantees defect-free software' does not match the correct concept: Model-based testing tools derive test cases from models of system behavior, w..."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "model-based testing",
                "test generation"
            ],
            "examTip": "Models generate tests automatically.",
            "memoryAid": "Model = test source."
        },
        {
            "id": "Q386",
            "statement": "A test team adopts a tool for continuous integration and automated test execution. Which practice is ESSENTIAL for maintaining the value of this tool over time?",
            "options": {
                "A": "Regularly reviewing and updating automated test scripts to reflect application changes",
                "B": "Running all automated tests only once before release",
                "C": "Disabling automated tests that fail frequently",
                "D": "Using the tool only for manual test management"
            },
            "correctAnswer": "A",
            "explanation": "Automated test scripts require ongoing maintenance to stay aligned with application changes. Regular review and updates are essential for long-term value.",
            "whyWrong": "Automated test scripts require ongoing maintenance to stay aligned with application changes. Running all automated tests only once before release (option B); Disabling automated tests that fail frequently (option C); Using the tool only for manual test management (option D).",
            "optionExplanations": {
                "A": "Automated test scripts require ongoing maintenance to stay aligned with application changes. Regular review and updates are essential for long-term value.",
                "B": "Incorrect. 'Running all automated tests only once before release' does not match the correct concept: Automated test scripts require ongoing maintenance to stay aligned with appli...",
                "C": "Incorrect. 'Disabling automated tests that fail frequently' does not match the correct concept: Automated test scripts require ongoing maintenance to stay aligned with appli...",
                "D": "Incorrect. 'Using the tool only for manual test management' does not match the correct concept: Automated test scripts require ongoing maintenance to stay aligned with appli..."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "CI tools",
                "test maintenance"
            ],
            "examTip": "Keep scripts in sync with the application.",
            "memoryAid": "Maintain or decay."
        },
        {
            "id": "Q390",
            "statement": "What is the PRIMARY risk of introducing a test execution tool without adequate training for the testing team?",
            "options": {
                "B": "The tool may be underutilized, scripts may be poorly designed, and maintenance costs may be high",
                "C": "The tool will automatically improve test quality",
                "D": "The team will stop doing any manual testing",
                "A": "The tool will be too easy to use"
            },
            "correctAnswer": "B",
            "explanation": "Inadequate training leads to poor script design, inefficient use, high maintenance costs, and low adoption rates, undermining the ROI of the tool investment.",
            "whyWrong": "Inadequate training is the primary risk because it leads to poor script design, low adoption, and high maintenance cost; the other options misstate the consequence of insufficient training.",
            "optionExplanations": {
                "B": "Inadequate training leads to poor script design, inefficient use, high maintenance costs, and low adoption rates, undermining the ROI of the tool investment.",
                "C": "Incorrect. 'The tool will automatically improve test quality' does not match the correct concept: Inadequate training leads to poor script design, inefficient use, high mainte...",
                "D": "Incorrect. 'The team will stop doing any manual testing' does not match the correct concept: Inadequate training leads to poor script design, inefficient use, high mainte...",
                "A": "Incorrect. 'The tool will be too easy to use' does not match the correct concept: Inadequate training leads to poor script design, inefficient use, high mainte..."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "tool introduction risks",
                "training"
            ],
            "examTip": "Untrained teams waste tools.",
            "memoryAid": "Train before you automate."
        },
        {
            "id": "Q034",
            "statement": "Which of the following is a risk of test automation?",
            "options": {
                "A": "Automation always reduces testing time immediately",
                "B": "Automation eliminates the need for skilled testers",
                "C": "Unrealistic expectations that automation will find many new defects",
                "D": "Automated tests never need maintenance"
            },
            "correctAnswer": "C",
            "explanation": "A common risk of test automation is unrealistic expectations. Automation does not find many new defects (it mostly checks for regressions), requires significant initial investment, and needs ongoing maintenance. Mismanaged expectations can lead to disillusionment with automation.",
            "whyWrong": "Automated tests require regular maintenance and updates as the software changes.",
            "optionExplanations": {
                "A": "Automation requires upfront investment before benefits are realized.",
                "B": "Skilled testers are needed to design, implement, and maintain automated tests.",
                "C": "Expecting automation to find many new defects is unrealistic; it primarily checks for regressions.",
                "D": "Automated tests require significant maintenance effort as the application evolves."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test automation risks",
                "unrealistic expectations",
                "maintenance"
            ],
            "examTip": "Automation risks: unrealistic expectations, maintenance costs, false sense of security.",
            "memoryAid": "Automation = high maintenance, not a magic wand."
        },
        {
            "id": "Q377",
            "statement": "A coverage tool reports that 85% of executable statements were exercised during testing. What type of tool is this?",
            "options": {
                "A": "Coverage measurement tool",
                "B": "Static analysis tool",
                "C": "Test management tool",
                "D": "Performance testing tool"
            },
            "correctAnswer": "A",
            "explanation": "Coverage measurement tools monitor the execution of code during testing and provide metrics such as statement, branch, or condition coverage achieved.",
            "whyWrong": "Coverage measurement tools monitor the execution of code during testing and provide metrics such as statement, branch, or condition coverage achieved. Static analysis tool (option B); Test management tool (option C); Performance testing tool (option D).",
            "optionExplanations": {
                "A": "Coverage measurement tools monitor the execution of code during testing and provide metrics such as statement, branch, or condition coverage achieved.",
                "B": "Incorrect. 'Static analysis tool' does not match the correct concept: Coverage measurement tools monitor the execution of code during testing and p...",
                "C": "Incorrect. 'Test management tool' does not match the correct concept: Coverage measurement tools monitor the execution of code during testing and p...",
                "D": "Incorrect. 'Performance testing tool' does not match the correct concept: Coverage measurement tools monitor the execution of code during testing and p..."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "coverage tools",
                "code coverage"
            ],
            "examTip": "Coverage tools measure how much code was tested.",
            "memoryAid": "Measure what you tested."
        },
        {
            "id": "Q379",
            "statement": "A team implements test automation for their regression suite. After several months, they find that scripts fail frequently due to UI changes. What is the MOST likely root cause?",
            "options": {
                "C": "The automated scripts were not designed with maintainability in mind, using fragile locators and hard-coded values",
                "D": "Automation tools are inherently unreliable",
                "A": "Regression testing should never be automated",
                "B": "The team should use manual testing exclusively"
            },
            "correctAnswer": "C",
            "explanation": "Poor script design, hard-coded values, and fragile element locators are common causes of high maintenance costs in test automation, not a limitation of automation itself.",
            "whyWrong": "High maintenance costs in test automation are a common challenge, not a limitation of automation itself. With good script design, parameterization, and regular maintenance, costs can be managed.",
            "optionExplanations": {
                "C": "Poor script design, hard-coded values, and fragile element locators are common causes of high maintenance costs in test automation, not a limitation of automation itself.",
                "D": "Incorrect. 'Automation tools are inherently unreliable' does not match the correct concept: Poor script design, hard-coded values, and fragile element locators are commo...",
                "A": "Incorrect. 'Regression testing should never be automated' does not match the correct concept: Poor script design, hard-coded values, and fragile element locators are commo...",
                "B": "Incorrect. 'The team should use manual testing exclusively' does not match the correct concept: Poor script design, hard-coded values, and fragile element locators are commo..."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "automation maintenance",
                "script maintainability"
            ],
            "examTip": "Fragile scripts = high maintenance.",
            "memoryAid": "Design for change."
        },
        {
            "id": "Q358",
            "statement": "What is a primary objective of conducting a pilot project for a test tool?",
            "options": {
                "B": "To learn how the tool works in practice, assess costs and benefits, and gather information for a wider rollout decision",
                "C": "To immediately replace all existing manual testing",
                "D": "To train all employees on the tool simultaneously",
                "A": "To make a final purchase commitment without further evaluation"
            },
            "correctAnswer": "B",
            "explanation": "The pilot project evaluates the tool against defined criteria, assesses its fit with existing processes, measures actual benefits and costs, identifies training and infrastructure needs, and provides data for a go/no-go decision on wider deployment.",
            "whyWrong": "Pilot = learn, assess, and decide on wider rollout.",
            "optionExplanations": {
                "B": "Pilots evaluate real-world fit, costs, benefits, and inform rollout decisions.",
                "C": "Pilots are limited in scope; full replacement is evaluated after pilot.",
                "D": "Training is part of the pilot, not the primary objective.",
                "A": "The pilot informs the purchase decision; it is not a commitment."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "pilot project objectives",
                "tool evaluation",
                "rollout decision"
            ],
            "examTip": "Pilot = evaluation data for rollout decision.",
            "memoryAid": "Pilot informs decisions."
        },
        {
            "id": "Q040",
            "statement": "A company is developing an e-commerce website. The team is deciding whether to use open-source or commercial test management tools. Which factor should most influence their decision?",
            "options": {
                "A": "The number of certifications available for the tool",
                "B": "The color scheme of the tool's user interface",
                "C": "The popularity of the tool on social media",
                "D": "The tool's ability to integrate with their existing development and CI/CD environment"
            },
            "correctAnswer": "D",
            "explanation": "When selecting a test tool, the most important factor is how well it integrates with the existing development environment, processes, and tools. Compatibility, integration capabilities, and organizational fit are critical considerations.",
            "whyWrong": "UI color scheme and social media popularity are not valid criteria for tool selection.",
            "optionExplanations": {
                "A": "Certifications are less important than technical fit and integration.",
                "B": "Aesthetics are not a valid technical decision factor.",
                "C": "Popularity does not equate to suitability or effectiveness.",
                "D": "Integration with existing tools and processes is a primary selection criterion."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "tool selection",
                "integration",
                "test management"
            ],
            "examTip": "Tool selection: fit with processes, integration, costs, support, and organizational maturity.",
            "memoryAid": "Tool selection = fit first, features second."
        },
        {
            "id": "Q374",
            "statement": "A team uses a tool to track reported defects, assign them to developers, monitor resolution status, and verify fixes. What type of tool is this?",
            "options": {
                "C": "Incident management tool",
                "D": "Test execution tool",
                "A": "Performance monitoring tool",
                "B": "Static analysis tool"
            },
            "correctAnswer": "C",
            "explanation": "Incident management tools (also called defect management tools) record, track, and manage incidents, defects, and enhancement requests throughout their lifecycle.",
            "whyWrong": "Incident management tools help track, manage, and resolve defects throughout their lifecycle. They cover discovery, assignment, fix, verification, and closure - not just bug reporting.",
            "optionExplanations": {
                "C": "Incident management tools (also called defect management tools) record, track, and manage incidents, defects, and enhancement requests throughout their lifecycle.",
                "D": "Incorrect. 'Test execution tool' does not match the correct concept: Incident management tools (also called defect management tools) record, track...",
                "A": "Incorrect. 'Performance monitoring tool' does not match the correct concept: Incident management tools (also called defect management tools) record, track...",
                "B": "Incorrect. 'Static analysis tool' does not match the correct concept: Incident management tools (also called defect management tools) record, track..."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "incident management tool",
                "defect tracking"
            ],
            "examTip": "Track defects from discovery to closure.",
            "memoryAid": "Track incidents."
        },
        {
            "id": "Q385",
            "statement": "A configuration management tool is used during testing. What is its PRIMARY contribution to the testing effort?",
            "options": {
                "A": "It ensures that all test objects, test data, and test scripts are properly versioned and traceable",
                "B": "It automatically generates test reports for stakeholders",
                "C": "It replaces the need for a test management tool",
                "D": "It executes test cases and records pass/fail results"
            },
            "correctAnswer": "A",
            "explanation": "Configuration management tools identify and control versions of test items and testware, enabling repeatable testing and traceability of what was tested with which version.",
            "whyWrong": "Configuration management tools identify and control versions of test items and testware, enabling repeatable testing and traceability of what was t... It automatically generates test reports for stakeholders (option B); It replaces the need for a test management tool (option C); It executes test cases and records pass/fail results (option D).",
            "optionExplanations": {
                "A": "Configuration management tools identify and control versions of test items and testware, enabling repeatable testing and traceability of what was tested with which version.",
                "B": "Incorrect. 'It automatically generates test reports for stakeholders' does not match the correct concept: Configuration management tools identify and control versions of test items an...",
                "C": "Incorrect. 'It replaces the need for a test management tool' does not match the correct concept: Configuration management tools identify and control versions of test items an...",
                "D": "Incorrect. 'It executes test cases and records pass/fail results' does not match the correct concept: Configuration management tools identify and control versions of test items an..."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "configuration management",
                "version control"
            ],
            "examTip": "Configuration management = version control for testware.",
            "memoryAid": "Version everything."
        },
        {
            "id": "Q119",
            "statement": "A team is evaluating several test automation tools. One tool has excellent technical capabilities but requires significant changes to their existing build process. Another tool has fewer features but integrates seamlessly with their current CI/CD pipeline. What should be the primary deciding factor?",
            "options": {
                "B": "How well the tool fits the existing processes and technology stack",
                "C": "The number of features the tool offers",
                "D": "The popularity of the tool in online forums",
                "A": "The cost of training materials for the tool"
            },
            "correctAnswer": "B",
            "explanation": "Tool fit with existing processes and technology is the most important selection criterion. A tool that integrates well with the current environment will have lower adoption costs, faster implementation, and higher long-term success than a tool that requires substantial process changes, even if the latter has more features.",
            "whyWrong": "Features are important but integration and process fit are more critical for successful adoption.",
            "optionExplanations": {
                "B": "Process and technology fit is crucial for successful tool adoption and long-term value.",
                "C": "More features do not compensate for poor integration and high adoption friction.",
                "D": "Popularity does not guarantee suitability for the specific organizational context.",
                "A": "Training costs are a consideration but not the primary factor."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "tool selection",
                "integration",
                "CI/CD",
                "process fit"
            ],
            "examTip": "Tool selection: fit with process > features. A well-fitting tool with fewer features beats a poor-fitting tool with more features.",
            "memoryAid": "Tool selection: Fit first, features second."
        },
        {
            "id": "Q160",
            "statement": "Which type of test tool is specifically designed to simulate thousands of virtual users accessing a system simultaneously to measure system behavior under load?",
            "options": {
                "A": "Static analysis tool",
                "B": "Unit test framework",
                "C": "Test management tool",
                "D": "Performance testing tool"
            },
            "correctAnswer": "D",
            "explanation": "Performance testing tools (also called load testing tools) can simulate large numbers of virtual users to apply specified levels of load to a system. They measure response times, throughput, resource utilization, and help identify performance bottlenecks.",
            "whyWrong": "Test management tools organize test artifacts but do not generate virtual user load.",
            "optionExplanations": {
                "A": "Static analysis tools examine code without executing it.",
                "B": "Unit test frameworks support component-level automated testing.",
                "C": "Test management tools manage test cases, plans, and reports.",
                "D": "Performance testing tools simulate load and measure system performance characteristics."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "performance testing",
                "load testing",
                "test tools"
            ],
            "examTip": "Performance testing tools = simulate load, measure speed, find bottlenecks.",
            "memoryAid": "Performance tools = many virtual users, one real system."
        },
        {
            "id": "Q382",
            "statement": "A test execution tool is used to run automated regression tests every night. What is a realistic expectation for this type of tool?",
            "options": {
                "C": "It performs repetitive test execution quickly and consistently, freeing testers for more exploratory work",
                "D": "It automatically generates new test cases based on requirements",
                "A": "It eliminates the need for any manual testing activities",
                "B": "It guarantees that no defects will escape to production"
            },
            "correctAnswer": "C",
            "explanation": "Test execution tools excel at running predefined test cases repeatedly with consistent results, but they do not replace test design or exploratory manual testing.",
            "whyWrong": "Database testing tools verify data integrity, queries, and stored procedures. Performance testing tools measure response times; test management tools organize testware; defect management tools track bugs.",
            "optionExplanations": {
                "C": "Test execution tools excel at running predefined test cases repeatedly with consistent results, but they do not replace test design or exploratory manual testing.",
                "D": "Incorrect. 'It automatically generates new test cases based on requir...' does not match the correct concept: Test execution tools excel at running predefined test cases repeatedly with c...",
                "A": "Incorrect. 'It eliminates the need for any manual testing activities' does not match the correct concept: Test execution tools excel at running predefined test cases repeatedly with c...",
                "B": "Incorrect. 'It guarantees that no defects will escape to production' does not match the correct concept: Test execution tools excel at running predefined test cases repeatedly with c..."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test execution tools",
                "automation benefits"
            ],
            "examTip": "Automation = consistent repetition, not magic.",
            "memoryAid": "Repeat reliably."
        },
        {
            "id": "Q200",
            "statement": "Which test tool would be most appropriate for monitoring and analyzing the logs generated by a web server during a load test?",
            "options": {
                "B": "A log analysis tool integrated with a performance testing tool",
                "C": "A test management tool",
                "D": "A unit test framework",
                "A": "A static analysis tool"
            },
            "correctAnswer": "B",
            "explanation": "Log analysis tools can parse and analyze server logs to extract performance metrics, error patterns, and system behavior during load testing. When integrated with performance testing tools, they provide comprehensive insights into how the server handled the load.",
            "whyWrong": "Test management tools organize artifacts but do not analyze server logs.",
            "optionExplanations": {
                "B": "Log analysis tools process server logs and can identify issues during load tests.",
                "C": "Test management tools do not perform log analysis.",
                "D": "Unit test frameworks are for component-level testing.",
                "A": "Static analysis tools examine source code, not runtime logs."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "log analysis",
                "performance testing",
                "test tools"
            ],
            "examTip": "Log analysis tools help diagnose issues found during performance testing.",
            "memoryAid": "Log analysis = finding clues in system logs."
        },
        {
            "id": "Q387",
            "statement": "Which tool category would BEST support a team that needs to analyze database schemas, queries, and referential integrity during testing?",
            "options": {
                "A": "Database testing tools",
                "B": "Performance testing tools",
                "C": "Web browser automation tools",
                "D": "Incident management tools"
            },
            "correctAnswer": "A",
            "explanation": "Database testing tools support testing of database schemas, queries, stored procedures, referential integrity, and data comparisons.",
            "whyWrong": "Performance testing tools (B): Incorrect. 'Performance testing tools' does not match the correct concept: Database testing tools support testing of database schemas, queries, stored p...",
            "optionExplanations": {
                "A": "Database testing tools support testing of database schemas, queries, stored procedures, referential integrity, and data comparisons.",
                "B": "Incorrect. 'Performance testing tools' does not match the correct concept: Database testing tools support testing of database schemas, queries, stored p...",
                "C": "Incorrect. 'Web browser automation tools' does not match the correct concept: Database testing tools support testing of database schemas, queries, stored p...",
                "D": "Incorrect. 'Incident management tools' does not match the correct concept: Database testing tools support testing of database schemas, queries, stored p..."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "database testing",
                "data integrity"
            ],
            "examTip": "Database tools validate data and schema.",
            "memoryAid": "Test the data layer."
        },
        {
            "id": "Q060",
            "statement": "Which test tool category would be most appropriate for managing test cases, test execution schedules, and generating test reports?",
            "options": {
                "D": "Test management tool",
                "A": "Test execution tool",
                "B": "Performance testing tool",
                "C": "Static analysis tool"
            },
            "correctAnswer": "D",
            "explanation": "Test management tools provide capabilities for managing test cases, creating test plans and schedules, tracking test execution, managing defects, and generating test reports. They serve as the central repository for all testing-related artifacts.",
            "whyWrong": "Test execution tools focus on running automated tests, not managing the overall testing process.",
            "optionExplanations": {
                "D": "Test management tools handle planning, cases, execution tracking, and reporting.",
                "A": "Test execution tools run automated scripts but do not manage the full process.",
                "B": "Performance testing tools focus on load and stress testing.",
                "C": "Static analysis tools analyze code without executing it."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test management tool",
                "tool categories",
                "test planning"
            ],
            "examTip": "Test management tools are the 'control center' for testing activities.",
            "memoryAid": "Management tool = the command center."
        },
        {
            "id": "Q381",
            "statement": "A team plans to introduce a new test management tool. What approach is MOST likely to lead to successful adoption?",
            "options": {
                "C": "Assess current processes, define requirements, run a pilot project, train users, and roll out incrementally",
                "D": "Roll the tool out to the entire organization immediately",
                "A": "Let each tester decide independently whether to use the tool",
                "B": "Hire external consultants to use the tool without internal involvement"
            },
            "correctAnswer": "C",
            "explanation": "Incremental introduction with needs assessment, pilot, training, and phased rollout gives the best chance of successful tool adoption and ROI.",
            "whyWrong": "ALM platforms integrate requirements, tests, defects, and builds into one system. A standalone static analysis tool only checks code; a test execution tool runs scripts; a performance tool measures load.",
            "optionExplanations": {
                "C": "Incremental introduction with needs assessment, pilot, training, and phased rollout gives the best chance of successful tool adoption and ROI.",
                "D": "Incorrect. 'Roll the tool out to the entire organization immediately' does not match the correct concept: Incremental introduction with needs assessment, pilot, training, and phased r...",
                "A": "Incorrect. 'Let each tester decide independently whether to use the tool' does not match the correct concept: Incremental introduction with needs assessment, pilot, training, and phased r...",
                "B": "Incorrect. 'Hire external consultants to use the tool without interna...' does not match the correct concept: Incremental introduction with needs assessment, pilot, training, and phased r..."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "tool introduction",
                "pilot project"
            ],
            "examTip": "Pilot, learn, train, then expand.",
            "memoryAid": "Small start, big finish."
        },
        {
            "id": "Q391",
            "statement": "Which of the following is an example of a tool that supports both test management AND incident management?",
            "options": {
                "A": "An integrated ALM (Application Lifecycle Management) platform",
                "B": "A standalone static analysis tool",
                "C": "A performance monitoring dashboard",
                "D": "A packet analyzer tool"
            },
            "correctAnswer": "A",
            "explanation": "ALM platforms integrate test management, incident management, requirements management, and configuration management in a single environment.",
            "whyWrong": "A standalone static analysis tool (B): Incorrect. 'A standalone static analysis tool' does not match the correct concept: ALM platforms integrate test management, incident management, requirements ma...",
            "optionExplanations": {
                "A": "ALM platforms integrate test management, incident management, requirements management, and configuration management in a single environment.",
                "B": "Incorrect. 'A standalone static analysis tool' does not match the correct concept: ALM platforms integrate test management, incident management, requirements ma...",
                "C": "Incorrect. 'A performance monitoring dashboard' does not match the correct concept: ALM platforms integrate test management, incident management, requirements ma...",
                "D": "Incorrect. 'A packet analyzer tool' does not match the correct concept: ALM platforms integrate test management, incident management, requirements ma..."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "ALM",
                "integrated tools"
            ],
            "examTip": "ALM = all-in-one testing platform.",
            "memoryAid": "All-in-one platform."
        },
        {
            "id": "Q198",
            "statement": "In a keyword-driven test automation framework, what is the purpose of keywords?",
            "options": {
                "B": "Keywords represent actions or operations that can be reused across multiple test cases",
                "C": "Keywords are reserved words in the programming language used for automation",
                "D": "Keywords replace the need for any test data",
                "A": "Keywords are used only for naming test reports"
            },
            "correctAnswer": "B",
            "explanation": "In keyword-driven testing, keywords represent high-level actions (such as 'Login', 'ClickButton', 'VerifyText') that are defined once and reused across test cases. This approach allows test cases to be created using business-readable keywords without programming knowledge.",
            "whyWrong": "Keywords are not programming language reserved words; they are user-defined action names.",
            "optionExplanations": {
                "B": "Keywords encapsulate actions that can be reused in multiple test scenarios.",
                "C": "Keywords are user-defined action names, not language reserved words.",
                "D": "Test data is still needed to parameterize keywords.",
                "A": "Keywords define test actions, not report names."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "keyword-driven",
                "test automation",
                "framework",
                "keywords"
            ],
            "examTip": "Keyword-driven = actions as keywords, reusable, readable by non-technical stakeholders.",
            "memoryAid": "Keywords = reusable action words for test steps."
        },
        {
            "id": "Q392",
            "statement": "A testing team notices that their automated regression suite takes 8 hours to run, delaying the CI pipeline. What is the BEST approach to address this?",
            "options": {
                "D": "Analyze test suite efficiency, parallelize execution, prioritize high-value tests, and retire redundant scripts",
                "A": "Cancel all automated regression testing",
                "B": "Reduce the CI pipeline frequency to weekly",
                "C": "Run only smoke tests forever"
            },
            "correctAnswer": "D",
            "explanation": "Optimizing test suites by prioritizing tests based on risk, parallelizing execution, removing duplication, and using efficient test design improves pipeline speed without sacrificing coverage.",
            "whyWrong": "Optimizing test suites by prioritizing tests based on risk, parallelizing execution, removing duplication, and using efficient test design improves pipeline speed without sacrificing coverage.",
            "optionExplanations": {
                "D": "Optimizing test suites by prioritizing tests based on risk, parallelizing execution, removing duplication, and using efficient test design improves pipeline speed without sacrificing coverage.",
                "A": "Incorrect. 'Cancel all automated regression testing' does not match the correct concept: Optimizing test suites by prioritizing tests based on risk, parallelizing exe...",
                "B": "Incorrect. 'Reduce the CI pipeline frequency to weekly' does not match the correct concept: Optimizing test suites by prioritizing tests based on risk, parallelizing exe...",
                "C": "Incorrect. 'Run only smoke tests forever' does not match the correct concept: Optimizing test suites by prioritizing tests based on risk, parallelizing exe..."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test suite optimization",
                "CI pipeline"
            ],
            "examTip": "Optimize, parallelize, prioritize.",
            "memoryAid": "Fast pipeline = fast feedback."
        },
        {
            "id": "Q072",
            "statement": "An organization is introducing a test automation tool for regression testing. What should be done first?",
            "options": {
                "A": "Automate all existing manual test cases in one week",
                "B": "Conduct a pilot project to evaluate the tool's fit with the organization's processes and technology",
                "C": "Replace all manual testers with the automation tool",
                "D": "Purchase the most popular tool on the market immediately"
            },
            "correctAnswer": "B",
            "explanation": "Before committing to a test tool, a pilot project should be conducted to assess how well the tool works with the organization's technology stack, processes, and team skills. This helps identify issues early and verify that the tool provides the expected benefits.",
            "whyWrong": "Purchasing based on popularity ignores the specific needs and compatibility of the organization.",
            "optionExplanations": {
                "A": "Automating all tests immediately without evaluation is risky.",
                "B": "A pilot project validates the tool's fit and reduces adoption risks.",
                "C": "Automation complements manual testing, does not replace testers.",
                "D": "Popularity does not guarantee suitability for the specific context."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "tool selection",
                "pilot project",
                "automation adoption"
            ],
            "examTip": "Always pilot a new tool before full adoption. Proof of concept first.",
            "memoryAid": "Pilot before you pilot (implement)."
        },
        {
            "id": "Q139",
            "statement": "A team uses a tool that automatically runs a predefined set of tests every night and emails a report of failures to the team. This is an example of which type of test tool integration?",
            "options": {
                "A": "Test data management integrated with production",
                "B": "Manual test execution with manual reporting",
                "C": "Static analysis integrated with the build process",
                "D": "Continuous integration and automated regression testing"
            },
            "correctAnswer": "D",
            "explanation": "Running automated tests every night with automated reporting is a classic continuous integration practice. The tests are executed automatically on a schedule (nightly build), and results are communicated to the team without manual intervention.",
            "whyWrong": "Static analysis examines code without execution; this scenario involves test execution.",
            "optionExplanations": {
                "A": "This involves test execution, not test data management.",
                "B": "This scenario is automated, not manual.",
                "C": "Static analysis does not involve test execution or runtime behavior.",
                "D": "Nightly automated test execution with reporting is a CI and regression testing practice."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "continuous integration",
                "automated testing",
                "nightly build"
            ],
            "examTip": "Automated night runs + email reporting = CI regression testing.",
            "memoryAid": "Nightly automation = CI + regression testing."
        },
        {
            "id": "Q360",
            "statement": "An organization introduces a test management tool but does not define guidelines for how test cases should be structured, named, or organized in the tool. What risk does this create?",
            "options": {
                "A": "The tool will automatically correct any organizational issues",
                "B": "The tool will become self-documenting over time",
                "C": "Inconsistent usage leading to difficulty in finding, reusing, and reporting on test cases",
                "D": "The tool will prevent any test execution"
            },
            "correctAnswer": "C",
            "explanation": "Without standards and guidelines for tool usage, teams may adopt inconsistent practices that undermine the tool\\'s value. Naming conventions, folder structures, field usage, and workflow definitions should be agreed upon to ensure the tool supports rather than hinders testing activities.",
            "whyWrong": "Standards and guidelines are essential for consistent and effective tool use.",
            "optionExplanations": {
                "A": "Tools do not automatically correct organizational or naming issues.",
                "B": "Tools require deliberate organization; they do not self-document.",
                "C": "Inconsistent usage reduces the tool\\'s value for finding and reporting.",
                "D": "The tool\\'s test management functions are separate from execution."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "tool deployment",
                "standards",
                "consistency"
            ],
            "examTip": "Standards ensure consistent and effective tool use.",
            "memoryAid": "Standards prevent chaos."
        },
        {
            "id": "Q240",
            "statement": "A team is piloting a new tool with a small representative project before organization-wide rollout. What good practice is this?",
            "options": {
                "A": "Introducing a tool incrementally after evaluating fit",
                "B": "Skipping training to reduce cost",
                "C": "Replacing all existing processes immediately",
                "D": "Selecting tools only by vendor popularity"
            },
            "correctAnswer": "A",
            "explanation": "Tool introduction should evaluate organizational fit and benefits, often through a pilot before wider deployment.",
            "whyWrong": "Tool introduction should evaluate organizational fit and benefits, often through a pilot before wider deployment. Skipping training to reduce cost (option B): Tool introduction should evaluate organizational fit and benefits, often thro...; Replacing all existing processes immediately (option C): Tool introduction should evaluate organizational fit and benefits, often thro...; Selecting tools only by vendor popularity (option D): Tool introduction should evaluate organizational fit and benefi...",
            "optionExplanations": {
                "A": "Tool introduction should evaluate organizational fit and benefits, often through a pilot before wider deployment.",
                "B": "Tool introduction should evaluate organizational fit and benefits, often thro...",
                "C": "Tool introduction should evaluate organizational fit and benefits, often thro...",
                "D": "Tool introduction should evaluate organizational fit and benefits, often thro..."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "tool introduction",
                "pilot"
            ],
            "examTip": "Pilot before rollout reduces adoption risk.",
            "memoryAid": "Try small before scaling."
        },
        {
            "id": "Q356",
            "statement": "A team is selecting a test management tool. Which special consideration applies specifically to test management tools?",
            "options": {
                "B": "The tool must support traceability between requirements, tests, and defects, and provide customizable reporting for different stakeholders",
                "C": "The tool must execute test cases automatically",
                "D": "The tool must analyze source code for vulnerabilities",
                "A": "The tool must simulate network traffic"
            },
            "correctAnswer": "B",
            "explanation": "Test management tools organize test artifacts, maintain traceability, manage test execution schedules, and provide reporting. They do not execute tests, analyze code, or simulate networks. Key features include requirement-traceability, defect-tracking integration, and configurable dashboards.",
            "whyWrong": "Test management tools organize, trace, and report on testing activities.",
            "optionExplanations": {
                "B": "Traceability, organization, and reporting are core test management functions.",
                "C": "Test execution tools, not management tools, execute tests.",
                "D": "Static analysis tools, not management tools, analyze code.",
                "A": "Performance testing tools simulate network traffic."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test management tool",
                "traceability",
                "reporting"
            ],
            "examTip": "Management tools organize, trace, and report.",
            "memoryAid": "Organize and trace."
        },
        {
            "id": "Q140",
            "statement": "An organization decides to automate all their regression tests. After six months, they find that the automated tests require significant maintenance every time the application UI changes. What went wrong in their automation approach?",
            "options": {
                "A": "They should have hired more manual testers instead",
                "B": "They used the wrong programming language for automation",
                "C": "They did not account for the maintenance effort required when the application evolves",
                "D": "Automated tests should never need maintenance"
            },
            "correctAnswer": "C",
            "explanation": "A common risk of test automation is underestimating the maintenance effort. Automated tests, especially UI-level tests, need regular updates when the application changes. The organization failed to account for ongoing maintenance costs in their automation planning.",
            "whyWrong": "Automated tests do require maintenance; no automation approach is maintenance-free.",
            "optionExplanations": {
                "A": "Manual testing also has its place, but the issue is about proper automation planning.",
                "B": "The programming language is unlikely to be the root cause of maintenance issues.",
                "C": "Maintenance cost is a well-known risk that should be factored into automation planning.",
                "D": "All automated tests require maintenance as the application evolves."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test automation",
                "maintenance",
                "risks",
                "UI automation"
            ],
            "examTip": "Automation maintenance is a significant ongoing cost that must be planned for.",
            "memoryAid": "UI changes = test maintenance. Plan for it."
        },
        {
            "id": "Q357",
            "statement": "An organization is considering introducing a new test automation tool. They want to evaluate the tool in a controlled manner before committing to a full rollout. Which approach is most appropriate?",
            "options": {
                "A": "Immediately deploy the tool to all teams",
                "B": "Ask a vendor to guarantee success without evaluation",
                "C": "Run a comparison between the tool and manual testing for a single day",
                "D": "Conduct a pilot project with a single team to evaluate the tool against defined objectives"
            },
            "correctAnswer": "D",
            "explanation": "A pilot project is recommended when introducing new test tools. It allows the organization to evaluate the tool in a real project context, identify issues, learn best practices, and assess benefits before wider deployment. The pilot should have clear success criteria.",
            "whyWrong": "Pilot projects reduce the risk of tool introduction failure.",
            "optionExplanations": {
                "A": "Full rollout without evaluation risks widespread failure and wasted investment.",
                "B": "Vendors cannot guarantee success without understanding the organization\\'s context.",
                "C": "A single-day comparison is insufficient for meaningful evaluation.",
                "D": "A pilot project provides real-world evaluation before committing to full rollout."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "pilot project",
                "tool introduction",
                "evaluation"
            ],
            "examTip": "Pilot before full rollout reduces risk.",
            "memoryAid": "Pilot first, then scale."
        },
        {
            "id": "Q393",
            "statement": "When considering test tool support for an organization, which factor should be evaluated FIRST?",
            "options": {
                "A": "The organization's specific needs, current processes, and the problems that the tool should solve",
                "B": "The tool's popularity on social media",
                "C": "The number of features in the latest tool version",
                "D": "The tool vendor's office location"
            },
            "correctAnswer": "A",
            "explanation": "Before selecting any tool, organizations should clearly understand their needs, pain points, existing processes, and objectives to ensure the tool addresses real problems.",
            "whyWrong": "Before selecting any tool, organizations should clearly understand their needs, pain points, existing processes, and objectives to ensure the tool ... The tool's popularity on social media (option B); The number of features in the latest tool version (option C); The tool vendor's office location (option D).",
            "optionExplanations": {
                "A": "Before selecting any tool, organizations should clearly understand their needs, pain points, existing processes, and objectives to ensure the tool addresses real problems.",
                "B": "Incorrect. 'The tool's popularity on social media' does not match the correct concept: Before selecting any tool, organizations should clearly understand their need...",
                "C": "Incorrect. 'The number of features in the latest tool version' does not match the correct concept: Before selecting any tool, organizations should clearly understand their need...",
                "D": "Incorrect. 'The tool vendor's office location' does not match the correct concept: Before selecting any tool, organizations should clearly understand their need..."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "tool evaluation",
                "needs assessment"
            ],
            "examTip": "Understand the problem before choosing the tool.",
            "memoryAid": "Need before tool."
        },
        {
            "id": "Q278",
            "statement": "Which tool category is most appropriate for checking source code against coding standards without executing it?",
            "options": {
                "A": "Test execution tool",
                "B": "Incident management tool",
                "C": "Static analysis tool",
                "D": "Performance testing tool"
            },
            "correctAnswer": "C",
            "explanation": "Static analysis tools analyze code or other work products without executing them and can identify coding standard violations.",
            "whyWrong": "The tool should change the behavior of the software under test (A): Static analysis tools analyze code or other work products without executing t...; The tool should support only one scripting language (B): Static analysis tools analyze code or other work products without executing t...",
            "optionExplanations": {
                "A": "Static analysis tools analyze code or other work products without executing t...",
                "B": "Static analysis tools analyze code or other work products without executing t...",
                "C": "Static analysis tools analyze code or other work products without executing them and can identify coding standard violations.",
                "D": "Static analysis tools analyze code or other work products without executing t..."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "static analysis tool",
                "coding standards"
            ],
            "examTip": "No execution means static analysis.",
            "memoryAid": "Static tools inspect code."
        },
        {
            "id": "Q375",
            "statement": "Which risk is MOST associated with relying heavily on record-and-playback tools for test automation?",
            "options": {
                "D": "High maintenance costs when the system under test changes frequently",
                "A": "Complete elimination of manual testing",
                "B": "Automatic generation of perfect test data",
                "C": "Reduced need for test design skills"
            },
            "correctAnswer": "D",
            "explanation": "Record-and-playback tools create scripts that are tightly coupled to the UI or interface structure, leading to high maintenance effort when the application changes.",
            "whyWrong": "Record-and-playback tools create scripts that are tightly coupled to the UI or interface structure, leading to high maintenance effort when the application changes.",
            "optionExplanations": {
                "D": "Record-and-playback tools create scripts that are tightly coupled to the UI or interface structure, leading to high maintenance effort when the application changes.",
                "A": "Incorrect. 'Complete elimination of manual testing' does not match the correct concept: Record-and-playback tools create scripts that are tightly coupled to the UI o...",
                "B": "Incorrect. 'Automatic generation of perfect test data' does not match the correct concept: Record-and-playback tools create scripts that are tightly coupled to the UI o...",
                "C": "Incorrect. 'Reduced need for test design skills' does not match the correct concept: Record-and-playback tools create scripts that are tightly coupled to the UI o..."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "record-and-playback",
                "automation risks"
            ],
            "examTip": "Record-and-playback scripts are fragile and hard to maintain.",
            "memoryAid": "Brittle scripts break easily."
        },
        {
            "id": "Q359",
            "statement": "Which factor is most critical for the successful deployment and ongoing support of a test tool in an organization?",
            "options": {
                "A": "Choosing the most expensive tool available",
                "B": "Providing adequate training and coaching for all tool users",
                "C": "Letting each team use the tool however they want without standards",
                "D": "Deploying the tool to all teams simultaneously without a pilot"
            },
            "correctAnswer": "B",
            "explanation": "Adequate training and coaching are critical success factors for tool deployment. Users need to understand not just how to operate the tool, but how to use it effectively within the test process. Without proper training, even the best tool may be underutilized or misused.",
            "whyWrong": "Training is essential for successful tool adoption.",
            "optionExplanations": {
                "A": "Cost does not determine success; fit and adoption do.",
                "B": "Proper training ensures users can use the tool effectively.",
                "C": "Standards and guidelines help ensure consistent and effective tool use.",
                "D": "Phased deployment with a pilot is recommended over simultaneous full rollout."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "tool deployment",
                "training",
                "success factors"
            ],
            "examTip": "Training drives successful tool adoption.",
            "memoryAid": "Train to succeed."
        },
        {
            "id": "Q384",
            "statement": "Which of the following is an example of a static analysis tool finding a defect?",
            "options": {
                "A": "Reporting a variable that is declared but never used",
                "B": "Measuring the response time of a web page",
                "C": "Simulating 1000 concurrent users accessing the system",
                "D": "Recording a test execution and playing it back"
            },
            "correctAnswer": "A",
            "explanation": "Static analysis tools detect code-level issues such as unused variables, unreachable code, null pointer dereferences, and security vulnerabilities without executing the code.",
            "whyWrong": "Static analysis tools detect code-level issues such as unused variables, unreachable code, null pointer dereferences, and security vulnerabilities ... Measuring the response time of a web page (option B); Simulating 1000 concurrent users accessing the system (option C); Recording a test execution and playing it back (option D).",
            "optionExplanations": {
                "A": "Static analysis tools detect code-level issues such as unused variables, unreachable code, null pointer dereferences, and security vulnerabilities without executing the code.",
                "B": "Incorrect. 'Measuring the response time of a web page' does not match the correct concept: Static analysis tools detect code-level issues such as unused variables, unre...",
                "C": "Incorrect. 'Simulating 1000 concurrent users accessing the system' does not match the correct concept: Static analysis tools detect code-level issues such as unused variables, unre...",
                "D": "Incorrect. 'Recording a test execution and playing it back' does not match the correct concept: Static analysis tools detect code-level issues such as unused variables, unre..."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "static analysis",
                "unused variables"
            ],
            "examTip": "Static tools find code issues without running.",
            "memoryAid": "Find code smells statically."
        },
        {
            "id": "Q353",
            "statement": "Which of the following is a known benefit of test automation?",
            "options": {
                "A": "Automation eliminates the need for manual testing entirely",
                "B": "Automation enables fast and consistent execution of repetitive regression tests",
                "C": "Automation automatically generates all test data without human input",
                "D": "Automation guarantees that all defects will be found"
            },
            "correctAnswer": "B",
            "explanation": "Test automation benefits include fast, repeatable execution of regression tests, consistent test execution (no human variation), and the ability to run tests at times when manual testing is not feasible. However, automation does not eliminate the need for manual testing, and it cannot guarantee finding all defects.",
            "whyWrong": "Automation = fast, consistent regression execution; does not replace manual testing.",
            "optionExplanations": {
                "A": "Manual testing remains essential for exploratory, usability, and other human-judgment-based testing.",
                "B": "Repeatable, consistent regression execution is a primary benefit of automation.",
                "C": "Test data often requires manual specification or comes from production data.",
                "D": "Automation finds defects that tests are designed to find; it cannot guarantee finding all."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test automation benefits",
                "regression testing",
                "repeatability"
            ],
            "examTip": "Automation = fast, consistent regression execution.",
            "memoryAid": "Repeatable regression runs."
        },
        {
            "id": "Q280",
            "statement": "A test execution tool is introduced, but testers receive no training and scripts are created without coding standards. What risk is most likely?",
            "options": {
                "A": "Low adoption and high maintenance costs",
                "B": "Immediate complete coverage",
                "C": "Elimination of exploratory testing risks",
                "D": "Guaranteed defect prevention"
            },
            "correctAnswer": "A",
            "explanation": "Poor tool introduction, insufficient training, and weak standards commonly lead to ineffective use and costly maintenance.",
            "whyWrong": "Poor tool introduction, insufficient training, and weak standards commonly lead to ineffective use and costly maintenance. Ask a vendor to guarantee success without evaluation (option B): Poor tool introduction, insufficient training, and weak standards commonly le...; Run a comparison between the tool and manual testing for a single day (option C): Poor tool introduction, insufficient training, and weak standards commonly le...; Conduct a pilot project with a single team to evaluate the tool...",
            "optionExplanations": {
                "A": "Poor tool introduction, insufficient training, and weak standards commonly lead to ineffective use and costly maintenance.",
                "B": "Poor tool introduction, insufficient training, and weak standards commonly le...",
                "C": "Poor tool introduction, insufficient training, and weak standards commonly le...",
                "D": "Poor tool introduction, insufficient training, and weak standards commonly le..."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "tool risks",
                "automation maintenance"
            ],
            "examTip": "Tools need process, skills, and standards.",
            "memoryAid": "Bad rollout, bad ROI."
        },
        {
            "id": "Q279",
            "statement": "Which is a realistic benefit of test automation?",
            "options": {
                "A": "Automatic discovery of all missing requirements",
                "B": "Removal of all maintenance effort",
                "C": "Guaranteed improvement of test design quality",
                "D": "Repeatable execution of regression tests with consistent results"
            },
            "correctAnswer": "D",
            "explanation": "Automation can improve repeatability and efficiency for suitable regression tests, but it does not remove design or maintenance needs.",
            "whyWrong": "Automation can improve repeatability and efficiency for suitable regression tests, but it does not remove design or maintenance needs. Automatic discovery of all missing requirements (option A): Automation can improve repeatability and efficiency for suitable regression t...; Removal of all maintenance effort (option B): Automation can improve repeatability and efficiency for suitable regression t...; Guaranteed improvement of test design quality (option C): Automation can improve repeatabili...",
            "optionExplanations": {
                "A": "Automation can improve repeatability and efficiency for suitable regression t...",
                "B": "Automation can improve repeatability and efficiency for suitable regression t...",
                "C": "Automation can improve repeatability and efficiency for suitable regression t...",
                "D": "Automation can improve repeatability and efficiency for suitable regression tests, but it does not remove design or maintenance needs."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test automation benefits",
                "regression"
            ],
            "examTip": "Automation is strong for repeatable checks.",
            "memoryAid": "Repeatable and consistent."
        },
        {
            "id": "Q355",
            "statement": "Which consideration is particularly important when selecting a test execution tool?",
            "options": {
                "A": "The tool should change the behavior of the software under test",
                "B": "The tool should support only one scripting language",
                "C": "The tool should integrate well with the existing development and CI/CD environment",
                "D": "The tool should run on the release manager\\'s personal laptop"
            },
            "correctAnswer": "C",
            "explanation": "Test execution tools must integrate with existing build, deployment, and CI/CD pipelines. They need to be deployable in test environments, produce results consumable by existing reporting systems, and work with the team\\'s version control and workflow.",
            "whyWrong": "Integration with existing infrastructure is a key consideration for test tools.",
            "optionExplanations": {
                "A": "Tools should observe without affecting system behavior.",
                "B": "Supporting multiple languages or recording methods is often beneficial.",
                "C": "CI/CD integration is crucial for continuous testing.",
                "D": "Tools should be accessible to the team, not limited to one person."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test execution tool",
                "tool selection",
                "CI/CD integration"
            ],
            "examTip": "Test tools must integrate with the development pipeline.",
            "memoryAid": "Tool + pipeline = value."
        },
        {
            "id": "Q388",
            "statement": "A manager expects test automation to find the same proportion of new defects as manual testing. Why is this expectation unrealistic?",
            "options": {
                "A": "Automation is best at regression checking, not discovering new defects, while manual testing excels at exploratory and ad-hoc testing",
                "B": "Automation always finds more defects than manual testing",
                "C": "Automation tools are designed to fix defects, not find them",
                "D": "Manual testing cannot find any new defects"
            },
            "correctAnswer": "A",
            "explanation": "Automated tests follow predefined scripts and are most effective for regression, while manual exploratory testing is better at discovering unexpected behavior and new defects.",
            "whyWrong": "Automated tests follow predefined scripts and are most effective for regression, while manual exploratory testing is better at discovering unexpect... Automation always finds more defects than manual testing (option B); Automation tools are designed to fix defects, not find them (option C); Manual testing cannot find any new defects (option D).",
            "optionExplanations": {
                "A": "Automated tests follow predefined scripts and are most effective for regression, while manual exploratory testing is better at discovering unexpected behavior and new defects.",
                "B": "Incorrect. 'Automation always finds more defects than manual testing' does not match the correct concept: Automated tests follow predefined scripts and are most effective for regressi...",
                "C": "Incorrect. 'Automation tools are designed to fix defects, not find them' does not match the correct concept: Automated tests follow predefined scripts and are most effective for regressi...",
                "D": "Incorrect. 'Manual testing cannot find any new defects' does not match the correct concept: Automated tests follow predefined scripts and are most effective for regressi..."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "automation limitations",
                "exploratory testing"
            ],
            "examTip": "Automation checks; humans discover.",
            "memoryAid": "Automate regression, explore for new bugs."
        },
        {
            "id": "Q120",
            "statement": "Which of the following is a realistic benefit of test automation?",
            "options": {
                "A": "Automatic discovery of all defects in the application",
                "B": "Faster execution of repetitive regression tests, freeing testers for exploratory testing",
                "C": "Guaranteed 100% test coverage of all requirements",
                "D": "Complete elimination of manual testing from the software development process"
            },
            "correctAnswer": "B",
            "explanation": "A key benefit of test automation is the ability to run repetitive tests quickly and consistently, particularly regression tests. This frees human testers to focus on activities that require human judgment, such as exploratory testing, usability testing, and complex scenario testing.",
            "whyWrong": "Automation cannot replace manual testing entirely; many testing activities require human insight and creativity.",
            "optionExplanations": {
                "A": "Automation only finds defects in the specific checks it performs.",
                "B": "Automation excels at repetitive tasks, allowing testers to focus on higher-value activities.",
                "C": "100% coverage is not guaranteed by automation; coverage depends on test design.",
                "D": "Manual testing remains essential for exploratory, usability, and ad-hoc testing."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test automation",
                "regression testing",
                "benefits"
            ],
            "examTip": "Automation = fast, consistent regression checks, freeing humans for exploratory testing.",
            "memoryAid": "Automation = robot for repetitive checks; Humans = creative exploratory testing."
        },
        {
            "id": "Q238",
            "statement": "Which tool is most directly used to manage test cases, execution status, and traceability to requirements?",
            "options": {
                "A": "Screen reader",
                "B": "Packet sniffer",
                "C": "Test management tool",
                "D": "Compiler"
            },
            "correctAnswer": "C",
            "explanation": "Test management tools support managing testware, execution results, reporting, and traceability.",
            "whyWrong": "Test management tools support managing testware, execution results, reporting, and traceability. Screen reader (option A): Test management tools support managing testware, execution results, reporting...; Packet sniffer (option B): Test management tools support managing testware, execution results, reporting...; Compiler (option D): Test management tools support managing testware, execution results, reporting....",
            "optionExplanations": {
                "A": "Test management tools support managing testware, execution results, reporting...",
                "B": "Test management tools support managing testware, execution results, reporting...",
                "C": "Test management tools support managing testware, execution results, reporting, and traceability.",
                "D": "Test management tools support managing testware, execution results, reporting..."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test management tool",
                "traceability"
            ],
            "examTip": "Managing test artifacts points to test management tools.",
            "memoryAid": "Manage tests with a test management tool."
        },
        {
            "id": "Q354",
            "statement": "A team implements automated API tests that run every night and generate a report of failures by the next morning. This provides value through:",
            "options": {
                "D": "Early detection of regressions introduced by the previous day\\'s changes",
                "A": "Complete elimination of manual functional testing",
                "B": "Automatic fixing of any detected failures",
                "C": "Reducing the need for a test environment"
            },
            "correctAnswer": "D",
            "explanation": "Running automated tests nightly provides rapid feedback on regressions, allowing teams to detect and fix issues soon after they are introduced. This speeds up the feedback loop and reduces the cost of fixing defects.",
            "whyWrong": "Nightly automation provides early regression detection.",
            "optionExplanations": {
                "D": "Nightly runs catch regressions early, accelerating feedback.",
                "A": "Manual testing is still needed for new features and exploratory testing.",
                "B": "Automation detects failures but does not fix them.",
                "C": "A stable test environment is still required for automation."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test automation",
                "continuous testing",
                "regression detection"
            ],
            "examTip": "Nightly automation = early regression feedback.",
            "memoryAid": "Run overnight, fix by morning."
        }
    ],
    "exam7": [
        {
            "id": "Q037",
            "statement": "A test team consistently finds that most defects are concentrated in 3 out of 20 modules. Which testing principle does this observation illustrate?",
            "options": {
                "A": "Pesticide paradox",
                "B": "Defect clustering",
                "C": "Absence-of-errors fallacy",
                "D": "Exhaustive testing is impossible"
            },
            "correctAnswer": "B",
            "explanation": "Defect clustering is the principle that defects tend to concentrate in a small number of modules or areas within a system. This observation helps test teams focus their testing efforts on high-risk areas.",
            "whyWrong": "The pesticide paradox relates to repeated tests becoming ineffective, not defect concentration.",
            "optionExplanations": {
                "A": "Pesticide paradox concerns tests losing effectiveness when repeated.",
                "B": "Defect clustering reflects the Pareto principle applied to testing: 80% of defects found in 20% of modules.",
                "C": "Absence-of-errors fallacy means no defects found does not mean the system meets needs.",
                "D": "Exhaustive testing impossibility is about not being able to test everything."
            },
            "chapter": 1,
            "section": "1.3",
            "subsection": "1.3.1",
            "learningObjective": "FL-1.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "defect clustering",
                "testing principles",
                "Pareto"
            ],
            "examTip": "Defect clustering = most bugs are in a few places. Focus testing there.",
            "memoryAid": "Defect clustering = the 80/20 rule: 80% of defects in 20% of modules."
        },
        {
            "id": "Q228",
            "statement": "A tester explores a new reporting feature using a charter focused on exporting large datasets and notes new ideas during the session. Which approach is this?",
            "options": {
                "A": "Exploratory testing",
                "B": "Formal inspection",
                "C": "Branch testing",
                "D": "Maintenance testing"
            },
            "correctAnswer": "A",
            "explanation": "Exploratory testing involves simultaneous learning, test design, and execution, often guided by charters and time boxes.",
            "whyWrong": "Formal inspection (B): Exploratory testing involves simultaneous learning, test design, and executio...; Branch testing (C): Exploratory testing involves simultaneous learning, test design, and executio...; Maintenance testing (D): Exploratory testing involves simultaneous learning, test design, and executio...",
            "optionExplanations": {
                "A": "Exploratory testing involves simultaneous learning, test design, and execution, often guided by charters and time boxes.",
                "B": "Exploratory testing involves simultaneous learning, test design, and executio...",
                "C": "Exploratory testing involves simultaneous learning, test design, and executio...",
                "D": "Exploratory testing involves simultaneous learning, test design, and executio..."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.2",
            "learningObjective": "FL-4.4.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "exploratory testing",
                "charter"
            ],
            "examTip": "Charters and learning while testing are clues.",
            "memoryAid": "Explore, learn, test."
        },
        {
            "id": "Q164",
            "statement": "A team is testing a safety-critical medical device and decides to use formal inspections, extensive documentation, and thorough coverage analysis. Which testing principle does this approach reflect?",
            "options": {
                "A": "Defect clustering",
                "B": "Pesticide paradox",
                "C": "Testing is context dependent",
                "D": "Exhaustive testing is impossible"
            },
            "correctAnswer": "C",
            "explanation": "The context dependency principle states that testing is performed differently in different contexts. A safety-critical medical device requires a more rigorous, formal, and documented approach than, for example, a simple mobile game. The testing approach must be tailored to the specific context and risks.",
            "whyWrong": "Exhaustive testing is always impossible, but that is not why the team chose a rigorous approach.",
            "optionExplanations": {
                "A": "Defect clustering refers to uneven defect distribution across modules.",
                "B": "Pesticide paradox concerns test effectiveness dropping when tests are repeated.",
                "C": "The rigor and formality of testing depend on the context, including safety-criticality and risks.",
                "D": "Exhaustive testing impossibility is unrelated to choosing a rigorous approach."
            },
            "chapter": 1,
            "section": "1.3",
            "subsection": "1.3.1",
            "learningObjective": "FL-1.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "context dependent",
                "safety-critical",
                "testing principles"
            ],
            "examTip": "Context dependency = approach depends on the type of application and its risks.",
            "memoryAid": "Context = medical device testing is NOT like testing a game."
        },
        {
            "id": "Q122",
            "statement": "A tester finds that the system behaves differently in the production environment compared to the test environment. Which testing concept does this highlight?",
            "options": {
                "B": "Test environments are always identical to production",
                "C": "Testing is context dependent",
                "D": "Environment configuration does not affect testing",
                "A": "Exhaustive testing is possible in production"
            },
            "correctAnswer": "C",
            "explanation": "Different environments can produce different results due to variations in configuration, data, network settings, and other factors. This illustrates that testing is context dependent - the environment is part of the testing context that can affect outcomes.",
            "whyWrong": "Test environments are rarely identical to production, which is why environment differences must be considered.",
            "optionExplanations": {
                "B": "Test environments often differ from production in scale, data, and configuration.",
                "C": "Environment differences demonstrate that testing context (including environment) matters.",
                "D": "Environment configuration significantly affects test results.",
                "A": "Exhaustive testing is impossible in any environment."
            },
            "chapter": 1,
            "section": "1.3",
            "subsection": "1.3.1",
            "learningObjective": "FL-1.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "context dependent",
                "test environment",
                "production"
            ],
            "examTip": "Environment differences can cause different test results - consider context.",
            "memoryAid": "Different environment = different results = context matters."
        },
        {
            "id": "Q154",
            "statement": "In a state transition diagram for an elevator system, the states are: Idle, MovingUp, MovingDown, DoorOpen. Which of the following transitions is most likely invalid?",
            "options": {
                "A": "From DoorOpen directly to MovingUp",
                "B": "From Idle to MovingUp",
                "C": "From MovingUp to Idle",
                "D": "From MovingDown to Idle"
            },
            "correctAnswer": "A",
            "explanation": "A transition from DoorOpen directly to MovingUp is typically invalid because the doors must be closed before the elevator can move. The correct sequence would be DoorOpen to DoorClosed (or Idle) first, then to MovingUp. Safety rules require doors to be closed before movement.",
            "whyWrong": "Moving from Idle to MovingUp is valid when the elevator receives a call and doors are closed.",
            "optionExplanations": {
                "A": "Doors must be closed before the elevator can move; DoorOpen to MovingUp skips this safety step.",
                "B": "MovingUp can transition to Idle when the elevator stops at a floor with no requests.",
                "C": "From Idle, the elevator can start moving up when called.",
                "D": "MovingDown can transition to Idle when the elevator reaches the lowest floor or stops."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.4",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "state transition",
                "invalid transitions",
                "elevator"
            ],
            "examTip": "Always check guard conditions - transitions must be logically and physically possible.",
            "memoryAid": "Invalid transitions = impossible or unsafe changes from one state to another."
        },
        {
            "id": "Q001",
            "statement": "What is the main purpose of testing?",
            "options": {
                "B": "To ensure user satisfaction",
                "C": "To prove the software is error-free",
                "D": "To find defects and provide information about quality",
                "A": "To fix all bugs before release"
            },
            "correctAnswer": "D",
            "explanation": "Testing is primarily aimed at finding defects and providing information about the level of quality of the software. It cannot prove the absence of defects, nor can it fix all bugs, and while user satisfaction is a goal of quality, it is not the direct purpose of testing.",
            "whyWrong": "Testing cannot prove software is error-free; it only reveals the presence of defects, not their absence.",
            "optionExplanations": {
                "B": "User satisfaction is an outcome of quality, not the direct purpose of testing activities.",
                "C": "Exhaustive testing is impossible; testing can show defects exist but cannot prove they do not.",
                "D": "Testing reveals defects and gives stakeholders information about quality levels.",
                "A": "Fixing bugs is a development activity, not the primary purpose of testing."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1.1",
            "learningObjective": "FL-1.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "testing purpose",
                "defects",
                "quality information"
            ],
            "examTip": "Remember that testing provides information, not proof of correctness.",
            "memoryAid": "Testing = detective work (find clues/defects), not a proof of innocence."
        },
        {
            "id": "Q318",
            "statement": "Which practice is essential for maintaining a constructive atmosphere during a review meeting?",
            "options": {
                "A": "Focusing discussion on the author\\'s skill level",
                "B": "Allowing only managers to speak during the meeting",
                "C": "Keeping the focus on finding defects in the work product, not criticizing the author",
                "D": "Recording every spoken comment in detail without filtering"
            },
            "correctAnswer": "C",
            "explanation": "Successful reviews maintain a focus on the work product, not the author. Defects should be discussed objectively. Personal criticism destroys trust and reduces participation. A blameless culture where issues are attributed to process rather than individuals encourages openness.",
            "whyWrong": "Review the product, not the person.",
            "optionExplanations": {
                "A": "Discussions about the author\\'s skill are counterproductive and personal.",
                "B": "All participants should be able to contribute; restricting to managers limits effectiveness.",
                "C": "Constructive reviews focus on the work product and avoid personal criticism.",
                "D": "Real-time verbatim recording may slow the meeting; the scribe records key issues."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.5",
            "learningObjective": "FL-3.2.5",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "review success factors",
                "constructive atmosphere",
                "blameless culture"
            ],
            "examTip": "Defects belong to the product, not the person.",
            "memoryAid": "Product focus, not personal."
        },
        {
            "id": "Q205",
            "statement": "Which work product is most likely produced during test implementation?",
            "options": {
                "A": "A corrected source-code module",
                "B": "Automated test scripts and prioritized test procedures",
                "C": "A signed business case for the project",
                "D": "The deployed production package"
            },
            "correctAnswer": "B",
            "explanation": "Test implementation prepares testware needed for execution, including procedures, suites, data, and automated scripts.",
            "whyWrong": "Pesticide paradox (A): Test implementation prepares testware needed for execution, including procedu...; Defect clustering (C): Test implementation prepares testware needed for execution, including procedu...; Absence-of-errors fallacy (D): Test implementation prepares testware needed for execution, including procedu...",
            "optionExplanations": {
                "A": "Test implementation prepares testware needed for execution, including procedu...",
                "B": "Test implementation prepares testware needed for execution, including procedures, suites, data, and automated scripts.",
                "C": "Test implementation prepares testware needed for execution, including procedu...",
                "D": "Test implementation prepares testware needed for execution, including procedu..."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.1",
            "learningObjective": "FL-1.4.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test implementation",
                "testware"
            ],
            "examTip": "Implementation prepares execution assets.",
            "memoryAid": "Implement the tests before running them."
        },
        {
            "id": "Q291",
            "statement": "A test plan and a test schedule are examples of which type of work product in the test process?",
            "options": {
                "B": "Test monitoring and control work products",
                "C": "Test execution work products",
                "D": "Test planning work products",
                "A": "Test completion work products"
            },
            "correctAnswer": "D",
            "explanation": "Test planning produces work products such as the test plan, test schedule, risk analysis documentation, and the test approach. These define the scope, strategy, resources, and schedule for testing.",
            "whyWrong": "The test plan and schedule are created during planning, not during monitoring, execution, or completion.",
            "optionExplanations": {
                "B": "Test monitoring produces metrics and status reports, not plans.",
                "C": "Execution produces test logs and defect reports.",
                "D": "Test planning produces the test plan, test schedule, and test approach.",
                "A": "Completion produces summary reports and lessons learned."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.3",
            "learningObjective": "FL-1.4.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test planning",
                "test plan",
                "work products"
            ],
            "examTip": "Plans and schedules are planning work products.",
            "memoryAid": "Plan = planning output."
        },
        {
            "id": "Q084",
            "statement": "Which testing principle states that it is impossible to test all possible inputs, outputs, and combinations of conditions in a software system?",
            "options": {
                "A": "Pesticide paradox",
                "B": "Exhaustive testing is impossible",
                "C": "Defect clustering",
                "D": "Absence-of-errors fallacy"
            },
            "correctAnswer": "B",
            "explanation": "The principle of 'Exhaustive testing is impossible' states that testing everything (all combinations of inputs, outputs, preconditions, and paths) is not feasible except for trivial systems. Therefore, risk analysis and test techniques must be used to focus testing efforts.",
            "whyWrong": "Defect clustering means defects concentrate in a few modules, not that exhaustive testing is impossible.",
            "optionExplanations": {
                "A": "The pesticide paradox concerns tests becoming ineffective when repeated.",
                "B": "Exhaustive testing is impossible for all but the most trivial systems due to the infinite number of input combinations.",
                "C": "Defect clustering refers to the concentration of defects in specific modules.",
                "D": "Absence-of-errors fallacy means a defect-free system may still not meet user needs."
            },
            "chapter": 1,
            "section": "1.3",
            "subsection": "1.3.1",
            "learningObjective": "FL-1.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "exhaustive testing",
                "testing principles",
                "impossible"
            ],
            "examTip": "Exhaustive testing is impossible, so use risk-based approaches and techniques to focus testing.",
            "memoryAid": "Exhaustive = impossible = prioritize by risk."
        },
        {
            "id": "Q097",
            "statement": "During a review, participants have been assigned to prepare individually before the review meeting. Which phase of the review process does this describe?",
            "options": {
                "A": "Rework",
                "B": "Kick-off",
                "C": "Individual review",
                "D": "Planning"
            },
            "correctAnswer": "C",
            "explanation": "The individual review (also called individual preparation or solo review) is the phase where each reviewer examines the work product independently, identifies potential defects, and prepares comments before the review meeting. This is a critical phase for effective defect detection.",
            "whyWrong": "Planning occurs before individual review and includes selecting participants and scheduling.",
            "optionExplanations": {
                "A": "Rework is the phase after the meeting where the author fixes identified defects.",
                "B": "Kick-off is the meeting where the review is explained to participants.",
                "C": "Individual review involves each participant examining the work product independently.",
                "D": "Planning defines the scope, roles, and logistics of the review."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.1",
            "learningObjective": "FL-3.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "review process",
                "individual review",
                "preparation"
            ],
            "examTip": "Individual preparation is where most defects are found in formal reviews.",
            "memoryAid": "Review phases: Plan, Kick-off, Prepare, Meeting, Rework, Follow-up."
        },
        {
            "id": "Q108",
            "statement": "Which of the following is a limitation of checklist-based testing?",
            "options": {
                "A": "Checklists may become outdated and miss new or changed functionality",
                "B": "Checklists provide too much structure and reduce tester creativity",
                "C": "Checklists require automated tool support to be effective",
                "D": "Checklists cannot be used for regression testing"
            },
            "correctAnswer": "A",
            "explanation": "A key limitation of checklist-based testing is that checklists can become outdated as the system evolves. If new features are added or existing behavior changes, the checklist may not cover these areas unless it is regularly reviewed and updated.",
            "whyWrong": "Checklists actually provide beneficial structure while still allowing tester judgment.",
            "optionExplanations": {
                "A": "Outdated checklists can miss defects in changed or new functionality.",
                "B": "Structure is an advantage, not a limitation; checklists still allow tester creativity.",
                "C": "Checklists can be effective with or without tool support.",
                "D": "Checklists are commonly used for regression testing."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.3",
            "learningObjective": "FL-4.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "checklist-based testing",
                "limitations",
                "maintenance"
            ],
            "examTip": "Checklists need regular updates to remain effective as the system evolves.",
            "memoryAid": "Old checklist = blind spots."
        },
        {
            "id": "Q251",
            "statement": "Which is an example of confirmation testing?",
            "options": {
                "A": "Testing unrelated unchanged features after a fix",
                "B": "Reviewing a requirements document",
                "C": "Estimating future testing effort",
                "D": "Rerunning a failed test after a defect fix to check the fix works"
            },
            "correctAnswer": "D",
            "explanation": "Confirmation testing checks whether a defect has been successfully fixed by rerunning relevant tests.",
            "whyWrong": "Collaborating with developers and product owners throughout each iteration to ensure quality (A): Confirmation testing checks whether a defect has been successfully fixed by r...; Waiting until the end of the project to test everything (B): Confirmation testing checks whether a defect has been successfully fixed by r...",
            "optionExplanations": {
                "A": "Confirmation testing checks whether a defect has been successfully fixed by r...",
                "B": "Confirmation testing checks whether a defect has been successfully fixed by r...",
                "C": "Confirmation testing checks whether a defect has been successfully fixed by r...",
                "D": "Confirmation testing checks whether a defect has been successfully fixed by rerunning relevant tests."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.3",
            "learningObjective": "FL-2.2.3",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "confirmation testing",
                "retesting"
            ],
            "examTip": "Confirmation testing verifies the fix; regression testing checks unchanged areas still work.",
            "memoryAid": "Same failure, fixed?"
        },
        {
            "id": "Q183",
            "statement": "Which of the following best describes use case testing?",
            "options": {
                "A": "Testing based on scenarios that describe how a user interacts with the system to achieve a specific goal",
                "B": "Testing each individual function of the system in isolation",
                "C": "Testing random inputs to find unexpected failures",
                "D": "Testing the internal code structure to achieve high coverage"
            },
            "correctAnswer": "A",
            "explanation": "Use case testing is a black-box technique that designs test cases based on use cases - descriptions of how users interact with the system to accomplish specific goals. It covers the main flow (happy path) and alternative flows (error handling, exceptions).",
            "whyWrong": "Testing functions in isolation describes component testing, not use case testing.",
            "optionExplanations": {
                "A": "Use case testing validates user-system interactions for specific goals.",
                "B": "Individual function testing is component-level testing.",
                "C": "Random input testing is fuzz testing, not use case testing.",
                "D": "Internal code coverage is white-box testing."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.5",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "use case testing",
                "scenarios",
                "user interaction"
            ],
            "examTip": "Use case testing = testing user stories or scenarios from the user's perspective.",
            "memoryAid": "Use case = user's journey through the system."
        },
        {
            "id": "Q038",
            "statement": "Which of the following is a good practice in testing?",
            "options": {
                "B": "Applying a risk-based approach to prioritize test activities",
                "C": "Delaying testing until the system is fully complete",
                "D": "Testing everything with equal priority regardless of risk",
                "A": "Using only automated testing for all test levels"
            },
            "correctAnswer": "B",
            "explanation": "A risk-based approach is a recognized good practice in testing. It helps optimize the use of limited resources by focusing testing effort on areas with the highest product risks, ensuring the most critical functionality is tested thoroughly.",
            "whyWrong": "Testing everything with equal priority ignores that some features have higher business impact than others.",
            "optionExplanations": {
                "B": "Risk-based prioritization is a key good practice in testing.",
                "C": "Delaying testing violates the early testing principle.",
                "D": "Equal priority ignores risk differences and wastes resources.",
                "A": "Automation is not appropriate for all test levels (e.g., exploratory testing)."
            },
            "chapter": 1,
            "section": "1.5",
            "subsection": "1.5.2",
            "learningObjective": "FL-1.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "good practices",
                "risk-based testing",
                "prioritization"
            ],
            "examTip": "Good practices: risk-based, early testing, independent testing, process improvement.",
            "memoryAid": "Good testing = risk-aware, early, and continuous."
        },
        {
            "id": "Q327",
            "statement": "Which of the following best describes the difference between statement coverage and decision coverage?",
            "options": {
                "A": "Statement coverage measures the percentage of decisions tested; decision coverage measures the percentage of statements executed",
                "B": "Statement coverage is stronger than decision coverage",
                "C": "Decision coverage requires each decision outcome (true/false) to be executed at least once; statement coverage only requires each executable statement to be executed at least once",
                "D": "Statement coverage and decision coverage are two names for the same metric"
            },
            "correctAnswer": "C",
            "explanation": "Statement coverage measures what percentage of executable statements are executed by tests. Decision coverage (also called branch coverage) measures what percentage of decision outcomes (true/false branches) have been executed. Decision coverage subsumes statement coverage: 100% decision coverage guarantees 100% statement coverage, but not vice versa.",
            "whyWrong": "Decision coverage requires both true and false branches; statement coverage requires statements to be reached.",
            "optionExplanations": {
                "A": "This reverses the definitions of both coverage types.",
                "B": "Statement coverage is weaker, not stronger, than decision coverage.",
                "C": "Decision coverage requires all branch outcomes; statement coverage requires all statements.",
                "D": "They are distinct metrics with different strengths."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.2",
            "learningObjective": "FL-4.3.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "decision coverage",
                "statement coverage",
                "branch coverage"
            ],
            "examTip": "Decision coverage = both true/false; Statement coverage = reached.",
            "memoryAid": "Decisions > Statements."
        },
        {
            "id": "Q020",
            "statement": "A function calculates the price of a ticket based on age: Children (0-12): $5, Adults (13-64): $10, Seniors (65-120): $7. Using boundary value analysis, what is the minimum set of age values to test?",
            "options": {
                "A": "0, 1, 12, 13, 64, 65, 120, 121",
                "B": "12, 13, 64, 65",
                "C": "0, 12, 13, 64, 65, 120",
                "D": "1, 12, 13, 64, 65, 120"
            },
            "correctAnswer": "A",
            "explanation": "Boundary value analysis tests the boundaries at the edges of equivalence partitions. The partitions are: below valid (0 and below), Child (0-12), Adult (13-64), Senior (65-120), and above valid (121+). The boundary values to test are: 0 (just below child), 1 (first child), 12 (last child), 13 (first adult), 64 (last adult), 65 (first senior), 120 (last senior), 121 (just above senior).",
            "whyWrong": "Option C is missing the invalid boundaries (0 and 120/121 are partially covered).",
            "optionExplanations": {
                "A": "This misses the boundaries at 0, 1, and 120-121.",
                "B": "Includes both valid and invalid boundaries for complete BVA coverage.",
                "C": "Missing 0 (just below child) and 121 (just above senior).",
                "D": "Missing 1 (first valid child) and 121 (just above senior)."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.1",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "boundary value analysis",
                "BVA",
                "black-box"
            ],
            "examTip": "BVA: Test the minima and maxima of each partition, plus one just above and below.",
            "memoryAid": "BVA = test the edges, not the middle."
        },
        {
            "id": "Q230",
            "statement": "A test manager compares planned versus actual executed tests and defect trends each week, then changes priorities. Which activity is this?",
            "options": {
                "A": "Static analysis",
                "B": "Tool selection",
                "C": "Test monitoring and control",
                "D": "Test completion"
            },
            "correctAnswer": "C",
            "explanation": "Monitoring gathers status information; control uses that information to guide corrective actions and reprioritization.",
            "whyWrong": "Static analysis (A): Monitoring gathers status information; control uses that information to guide...; Tool selection (B): Monitoring gathers status information; control uses that information to guide...",
            "optionExplanations": {
                "A": "Monitoring gathers status information; control uses that information to guide...",
                "B": "Monitoring gathers status information; control uses that information to guide...",
                "C": "Monitoring gathers status information; control uses that information to guide corrective actions and reprioritization.",
                "D": "Monitoring gathers status information; control uses that information to guide..."
            },
            "chapter": 5,
            "section": "5.3",
            "subsection": "5.3.1",
            "learningObjective": "FL-5.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "monitoring",
                "control"
            ],
            "examTip": "Measure status, then adjust.",
            "memoryAid": "Monitor to control."
        },
        {
            "id": "Q093",
            "statement": "A legacy payroll system is being migrated to a new platform. The business logic remains the same, but the database and user interface are completely replaced. Which testing approach is most appropriate?",
            "options": {
                "B": "Maintenance testing including confirmation testing of changes and regression testing of unaffected areas",
                "C": "Only testing the new user interface",
                "D": "Performing only exploratory testing on the new system",
                "A": "Skipping testing because the business logic is unchanged"
            },
            "correctAnswer": "B",
            "explanation": "Maintenance testing is required when changes are made to an existing system. Even though the business logic is unchanged, the new database and UI introduce risks. Confirmation testing verifies the changes work correctly, and regression testing ensures the unchanged business logic still functions properly.",
            "whyWrong": "Even unchanged business logic can be affected by changes to the database and UI, so regression testing is essential.",
            "optionExplanations": {
                "B": "Confirmation testing of changes plus regression testing provides comprehensive coverage for maintenance releases.",
                "C": "Changes to database and UI can introduce defects that affect seemingly unchanged functionality.",
                "D": "Exploratory testing alone lacks systematic coverage of the changes.",
                "A": "Testing only the UI ignores potential issues with the database migration affecting business logic."
            },
            "chapter": 2,
            "section": "2.3",
            "subsection": "2.3.1",
            "learningObjective": "FL-2.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "maintenance testing",
                "regression testing",
                "migration"
            ],
            "examTip": "Any change (even to infrastructure) needs confirmation + regression testing.",
            "memoryAid": "Migration = big change = thorough maintenance testing."
        },
        {
            "id": "Q298",
            "statement": "A project has very stable requirements but strict regulatory documentation requirements. Which development lifecycle consideration is most relevant?",
            "options": {
                "D": "A sequential model may be appropriate given stable requirements and need for documented phase gates",
                "A": "An Agile model must be used regardless of regulatory needs",
                "B": "The project should use no defined lifecycle model",
                "C": "Only maintenance testing is needed in this scenario"
            },
            "correctAnswer": "D",
            "explanation": "Stable requirements and regulatory documentation needs favor a sequential model where phases are completed with documented outputs before proceeding. Agile iterative approaches may be less suitable when requirements are well understood up front and formal documentation is critical.",
            "whyWrong": "Project characteristics like requirement stability and regulatory needs influence SDLC model selection.",
            "optionExplanations": {
                "D": "Sequential models work well with stable requirements and formal documentation needs.",
                "A": "Agile is not mandatory; the model should fit the context.",
                "B": "Every project benefits from a defined lifecycle model.",
                "C": "Maintenance testing is for operational changes, not new development."
            },
            "chapter": 2,
            "section": "2.1",
            "subsection": "2.1.2",
            "learningObjective": "FL-2.1.2",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "sequential model",
                "regulatory",
                "stable requirements"
            ],
            "examTip": "Stable requirements + regulation = sequential model fits.",
            "memoryAid": "Regulation favors phase gates."
        },
        {
            "id": "Q268",
            "statement": "Why can branch testing provide stronger coverage than statement testing?",
            "options": {
                "A": "It requires decision outcomes to be exercised, not just executable statements",
                "B": "It ignores source code structure",
                "C": "It is only performed by users",
                "D": "It eliminates the need for test data"
            },
            "correctAnswer": "A",
            "explanation": "Branch testing covers the outcomes of decisions, which can reveal paths missed by statement coverage alone.",
            "whyWrong": "It ignores source code structure (B): Branch testing covers the outcomes of decisions, which can reveal paths misse...; It is only performed by users (C): Branch testing covers the outcomes of decisions, which can reveal paths misse...; It eliminates the need for test data (D): Branch testing covers the outcomes of decisions, which can reveal paths misse...",
            "optionExplanations": {
                "A": "Branch testing covers the outcomes of decisions, which can reveal paths missed by statement coverage alone.",
                "B": "Branch testing covers the outcomes of decisions, which can reveal paths misse...",
                "C": "Branch testing covers the outcomes of decisions, which can reveal paths misse...",
                "D": "Branch testing covers the outcomes of decisions, which can reveal paths misse..."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.2",
            "learningObjective": "FL-4.3.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "branch testing",
                "white-box"
            ],
            "examTip": "Branches exercise decision outcomes.",
            "memoryAid": "Statements say ran; branches say which way."
        },
        {
            "id": "Q190",
            "statement": "A test plan should include all of the following EXCEPT:",
            "options": {
                "A": "The test approach and techniques to be used",
                "B": "The resource and schedule requirements",
                "C": "The personal contact information of every team member",
                "D": "The test scope and objectives"
            },
            "correctAnswer": "C",
            "explanation": "A test plan includes scope, objectives, approach, techniques, resources, schedule, risks, and deliverables. While team member roles may be mentioned, personal contact information is not a standard component of a test plan.",
            "whyWrong": "Test scope, approach, and resources are all standard test plan components.",
            "optionExplanations": {
                "A": "Test approach and techniques are key planning decisions.",
                "B": "Resource and schedule management are essential planning elements.",
                "C": "Personal contact details are not part of a professional test plan.",
                "D": "Scope and objectives are fundamental to test planning."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.1",
            "learningObjective": "FL-5.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test plan",
                "test planning",
                "contents"
            ],
            "examTip": "Test plan = objectives, scope, approach, resources, schedule, risks, deliverables.",
            "memoryAid": "Test plan contents = OASRSD (Objectives, Approach, Scope, Resources, Schedule, Deliverables)."
        },
        {
            "id": "Q064",
            "statement": "In an Agile development environment, what is the role of a tester typically focused on?",
            "options": {
                "B": "Collaborating with developers and product owners throughout each iteration to ensure quality",
                "C": "Waiting until the end of the project to test everything",
                "D": "Managing the defect tracking system without direct testing involvement",
                "A": "Only documenting test cases without participating in development discussions"
            },
            "correctAnswer": "B",
            "explanation": "In Agile development, testers collaborate closely with developers and product owners throughout the iteration. They participate in planning, review user stories, write and automate tests, and provide continuous feedback on quality. Testing is integrated into the development process.",
            "whyWrong": "Waiting until the end contradicts the Agile principle of continuous testing and integration.",
            "optionExplanations": {
                "B": "Agile testers are integrated team members who collaborate continuously.",
                "C": "Agile testers actively participate in all team activities.",
                "D": "Agile testers are hands-on with testing, not just managing tools.",
                "A": "Late testing violates Agile principles of early and continuous testing."
            },
            "chapter": 2,
            "section": "2.1",
            "subsection": "2.1.1",
            "learningObjective": "FL-2.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "Agile testing",
                "tester role",
                "collaboration"
            ],
            "examTip": "In Agile, testing is a team responsibility with continuous collaboration.",
            "memoryAid": "Agile tester = teammate, not a separate department."
        },
        {
            "id": "Q013",
            "statement": "When performing maintenance testing on a system after a security patch is applied, what is the most important consideration?",
            "options": {
                "A": "Re-running all existing tests in their entirety",
                "B": "Only testing the security patch itself",
                "C": "Skipping testing because the patch was provided by a trusted vendor",
                "D": "Testing the changed areas and the impact on unchanged areas through regression testing"
            },
            "correctAnswer": "D",
            "explanation": "Maintenance testing must verify both the changes (the patch) and the impact on unchanged areas through regression testing. Changes often introduce side effects in previously working functionality.",
            "whyWrong": "Only testing the patch ignores potential side effects and regression issues.",
            "optionExplanations": {
                "A": "Running all tests may be impractical; risk-based selection is more appropriate.",
                "B": "This ignores regression risks introduced by the change.",
                "C": "Trusting a vendor does not eliminate the need for testing in your specific environment.",
                "D": "Both confirmation testing of the change and regression testing of impacted areas are essential."
            },
            "chapter": 2,
            "section": "2.3",
            "subsection": "2.3.1",
            "learningObjective": "FL-2.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "maintenance testing",
                "regression testing",
                "impact analysis"
            ],
            "examTip": "Maintenance testing = test the change + test for side effects (regression).",
            "memoryAid": "Maintenance testing: Change + Impact = Complete testing."
        },
        {
            "id": "Q300",
            "statement": "A tester is designing white-box tests for a critical algorithm during component testing, and also plans white-box coverage measurement during integration testing of module interfaces. This approach is:",
            "options": {
                "B": "Valid, because white-box testing can be applied at multiple test levels",
                "C": "Invalid, because white-box testing is only applicable at component level",
                "D": "Invalid, because white-box testing cannot be applied to interfaces",
                "A": "Valid, but only if the project uses a sequential lifecycle"
            },
            "correctAnswer": "B",
            "explanation": "White-box testing can be applied at any test level as appropriate. At component level it covers internal code structure; at integration level it can cover interface paths, call pairs, or interaction coverage.",
            "whyWrong": "White-box testing is not limited to a single test level.",
            "optionExplanations": {
                "B": "White-box techniques are applicable at all test levels as needed.",
                "C": "White-box testing applies beyond component testing.",
                "D": "White-box testing can address interface coverage at integration level.",
                "A": "Applicability is independent of the lifecycle model used."
            },
            "chapter": 2,
            "section": "2.3",
            "subsection": "2.3.2",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "white-box testing",
                "test levels",
                "component",
                "integration"
            ],
            "examTip": "White-box works at any level.",
            "memoryAid": "Code coverage at any level."
        },
        {
            "id": "Q030",
            "statement": "What is the primary purpose of configuration management in testing?",
            "options": {
                "A": "To establish and maintain the integrity of test artifacts and control changes",
                "B": "To configure the test automation framework",
                "C": "To manage the configuration of servers in the test environment",
                "D": "To track which version of the operating system is being used"
            },
            "correctAnswer": "A",
            "explanation": "Configuration management ensures that all test artifacts (test plans, test cases, test data, test scripts) and the items being tested are properly identified, controlled, and tracked. It provides traceability and the ability to reproduce test conditions.",
            "whyWrong": "Configuration management is broader than just managing servers or automation frameworks.",
            "optionExplanations": {
                "A": "CM ensures integrity, traceability, and control of test artifacts and items under test.",
                "B": "Automation framework configuration is only a small part of CM.",
                "C": "Server configuration is part of environment management, not full CM.",
                "D": "OS tracking is a minor detail, not the primary purpose of CM."
            },
            "chapter": 5,
            "section": "5.4",
            "subsection": "5.4.1",
            "learningObjective": "FL-5.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "configuration management",
                "test artifacts",
                "integrity"
            ],
            "examTip": "Configuration management = version control + traceability + change control for all test work products.",
            "memoryAid": "CM = Know what you have, know what changed, know how to get back."
        },
        {
            "id": "Q053",
            "statement": "For the code: if (x > 0 && y < 10) { z = x + y; } else { z = 0; }, how many test cases are needed for 100% statement coverage?",
            "options": {
                "D": "2",
                "A": "4",
                "B": "3",
                "C": "1"
            },
            "correctAnswer": "D",
            "explanation": "There are two statements to cover: z = x + y (inside the if block) and z = 0 (inside the else block). To execute both statements, we need two test cases: one where the condition (x > 0 && y < 10) is true, and one where it is false.",
            "whyWrong": "One test case can only execute one branch, reaching only one of the two statements.",
            "optionExplanations": {
                "D": "Two test cases cover both the true and false branches, executing all statements.",
                "A": "One test case covers only one branch (50% statement coverage).",
                "B": "Three is more than the minimum needed.",
                "C": "Four is also more than necessary."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.1",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K2",
            "difficulty": "Hard",
            "keywords": [
                "statement testing",
                "statement coverage",
                "white-box"
            ],
            "examTip": "For simple if-else, you need 2 test cases for 100% statement coverage.",
            "memoryAid": "One test per branch = all statements covered."
        },
        {
            "id": "Q193",
            "statement": "A test manager is conducting a risk analysis and identifies that the login module has a high likelihood of security defects but a low business impact because the system is for internal use only. How should the risk level be determined?",
            "options": {
                "A": "Risk level = likelihood + impact",
                "B": "Risk level = likelihood x impact",
                "C": "Risk level is always high if likelihood is high",
                "D": "Risk level = impact divided by likelihood"
            },
            "correctAnswer": "B",
            "explanation": "Risk level is typically calculated as the product of likelihood (probability of failure) and impact (consequence of failure). In this case, high likelihood combined with low impact would result in a medium risk level, guiding how much testing effort to allocate.",
            "whyWrong": "Risk level is a multiplicative function of likelihood and impact, not additive or divisive.",
            "optionExplanations": {
                "A": "Risk considers both likelihood and impact, not likelihood alone.",
                "B": "Division does not reflect the combined effect of likelihood and impact.",
                "C": "Risk is computed as product, not sum.",
                "D": "Risk = Likelihood x Impact is the standard risk calculation formula."
            },
            "chapter": 5,
            "section": "5.5",
            "subsection": "5.5.2",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "risk analysis",
                "risk level",
                "likelihood",
                "impact"
            ],
            "examTip": "Risk = Likelihood x Impact. Both factors determine the final risk level.",
            "memoryAid": "Risk = How likely x How bad."
        },
        {
            "id": "Q057",
            "statement": "What is the relationship between test monitoring and test control?",
            "options": {
                "A": "Monitoring measures and tracks progress; control takes corrective actions when deviations occur",
                "B": "Monitoring and control are the same activity",
                "C": "Control measures progress; monitoring takes corrective actions",
                "D": "Monitoring is done by testers; control is done by management"
            },
            "correctAnswer": "A",
            "explanation": "Test monitoring involves collecting and tracking metrics to measure progress against the test plan. Test control involves taking corrective actions when monitoring reveals significant deviations from the plan. They are complementary activities.",
            "whyWrong": "They are distinct but related activities; monitoring precedes and informs control.",
            "optionExplanations": {
                "A": "Monitor = track; Control = act on what you tracked.",
                "B": "This reverses the definitions of monitoring and control.",
                "C": "They are distinct but related activities in the test process.",
                "D": "Both testers and managers participate in both activities."
            },
            "chapter": 5,
            "section": "5.3",
            "subsection": "5.3.1",
            "learningObjective": "FL-5.3.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test monitoring",
                "test monitoring",
                "corrective action"
            ],
            "examTip": "Monitor = check the map; Control = steer the wheel.",
            "memoryAid": "Monitor = measure; Control = adjust."
        },
        {
            "id": "Q074",
            "statement": "A test manager is creating a test plan for a project with high product risks. Which test approach would be most appropriate?",
            "options": {
                "A": "Use only exploratory testing with no documentation",
                "B": "Skip testing and rely on developer code reviews",
                "C": "Conduct in-depth testing focused on high-risk areas with detailed test documentation",
                "D": "Test only the simplest features to save time"
            },
            "correctAnswer": "C",
            "explanation": "For high-risk projects, a more thorough and documented approach is appropriate. This includes detailed test planning, structured test techniques, comprehensive test case design, rigorous execution, and thorough defect tracking to mitigate the high risks.",
            "whyWrong": "Exploratory testing alone may not provide the coverage and traceability needed for high-risk projects.",
            "optionExplanations": {
                "A": "Exploratory testing is valuable but may not provide sufficient coverage alone for high risks.",
                "B": "High-risk projects demand thorough, well-documented, and structured testing.",
                "C": "Skipping testing is never appropriate, especially for high-risk projects.",
                "D": "Focusing only on simple features ignores the areas most likely to fail."
            },
            "chapter": 5,
            "section": "5.5",
            "subsection": "5.5.2",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "risk-based testing",
                "test approach",
                "high risk"
            ],
            "examTip": "Higher risk = more thorough testing. Lower risk = lighter testing.",
            "memoryAid": "Risk level drives test intensity."
        },
        {
            "id": "Q307",
            "statement": "A requirements document is reviewed before development begins. The review identifies a missing validation rule that would have cost $15,000 to fix if found during system testing. This example illustrates the value of:",
            "options": {
                "A": "Dynamic testing",
                "B": "Static testing",
                "C": "Performance testing",
                "D": "Boundary value analysis"
            },
            "correctAnswer": "B",
            "explanation": "Static testing (including reviews) finds defects in work products without executing the software. Detecting defects early in the lifecycle prevents the cost of finding and fixing them later. The earlier a defect is found, the cheaper it is to correct.",
            "whyWrong": "Static testing saves money by finding defects early in non-executable work products.",
            "optionExplanations": {
                "A": "Dynamic testing requires executable code; the defect was found in requirements.",
                "B": "Static testing examines requirements, designs, and other work products without execution.",
                "C": "Performance testing measures system behavior under load.",
                "D": "Boundary value analysis is a dynamic test design technique."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.2",
            "learningObjective": "FL-3.1.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "static testing value",
                "early defect detection",
                "cost savings"
            ],
            "examTip": "Static testing finds defects early when they are cheap to fix.",
            "memoryAid": "Find early, fix cheap."
        },
        {
            "id": "Q329",
            "statement": "100% statement coverage is achieved but a defect in the false branch of an IF statement is not detected. What does this scenario illustrate?",
            "options": {
                "A": "Statement coverage is stronger than decision coverage",
                "B": "The defect is impossible to detect through testing",
                "C": "More test cases are always needed regardless of coverage",
                "D": "Statement coverage alone may be insufficient because it does not require every decision outcome to be exercised"
            },
            "correctAnswer": "D",
            "explanation": "Statement coverage only requires that each executable statement has been executed at least once. It does not require that both outcomes of each decision be exercised. Decision coverage (branch coverage) is stronger and subsumes statement coverage, ensuring all outcomes are tested.",
            "whyWrong": "Statement coverage can miss untested decision outcomes.",
            "optionExplanations": {
                "A": "Decision coverage is stronger than statement coverage, not the reverse.",
                "B": "The defect could be detected with appropriate branch testing.",
                "C": "Targeted testing of missing branches is better than adding random tests.",
                "D": "Statement coverage does not guarantee all branch outcomes are covered."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.3",
            "learningObjective": "FL-4.3.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "statement coverage limitations",
                "branch coverage",
                "coverage strength"
            ],
            "examTip": "Statement coverage misses untested branches.",
            "memoryAid": "Statements are only half the picture."
        },
        {
            "id": "Q274",
            "statement": "Which statement best distinguishes product risk from project risk?",
            "options": {
                "A": "Project risk is found only after release",
                "B": "Product risk cannot influence testing",
                "C": "Product risk relates to product quality; project risk relates to project success factors such as schedule or staffing",
                "D": "Product risk is always lower than project risk"
            },
            "correctAnswer": "C",
            "explanation": "Product risks concern possible quality problems in the product; project risks threaten project objectives such as budget, schedule, skills, and environments.",
            "whyWrong": "Project risk is found only after release (A): Product risks concern possible quality problems in the product; project risks...; Product risk cannot influence testing (B): Product risks concern possible quality problems in the product; project risks...",
            "optionExplanations": {
                "A": "Product risks concern possible quality problems in the product; project risks...",
                "B": "Product risks concern possible quality problems in the product; project risks...",
                "C": "Product risks concern possible quality problems in the product; project risks threaten project objectives such as budget, schedule, skills, and environments.",
                "D": "Product risks concern possible quality problems in the product; project risks..."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.1",
            "learningObjective": "FL-5.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "product risk",
                "project risk"
            ],
            "examTip": "Product quality versus project delivery.",
            "memoryAid": "Product vs project."
        },
        {
            "id": "Q376",
            "statement": "A test team wants to adopt a new performance testing tool. What is the FIRST step they should take to ensure successful tool adoption?",
            "options": {
                "A": "Assess organizational needs, evaluate the tool against defined criteria, and run a proof of concept on a representative project",
                "B": "Purchase the most popular tool on the market immediately",
                "C": "Require all testers to attend tool training before evaluating the tool",
                "D": "Replace all existing test processes to fit the tool's capabilities"
            },
            "correctAnswer": "A",
            "explanation": "Successful tool adoption starts with a needs assessment, followed by evaluation against criteria, and a proof-of-concept or pilot on a representative project before wider rollout.",
            "whyWrong": "Purchase the most popular tool on the market immediately (B): Incorrect. 'Purchase the most popular tool on the market immediately' does not match the correct concept: Successful tool adoption starts with a needs assessment, followed by evaluati...; Require all testers to attend tool training before evaluating the tool (C): Incorrect. 'Require all testers to attend tool training before evalua.....",
            "optionExplanations": {
                "A": "Successful tool adoption starts with a needs assessment, followed by evaluation against criteria, and a proof-of-concept or pilot on a representative project before wider rollout.",
                "B": "Incorrect. 'Purchase the most popular tool on the market immediately' does not match the correct concept: Successful tool adoption starts with a needs assessment, followed by evaluati...",
                "C": "Incorrect. 'Require all testers to attend tool training before evalua...' does not match the correct concept: Successful tool adoption starts with a needs assessment, followed by evaluati...",
                "D": "Incorrect. 'Replace all existing test processes to fit the tool's cap...' does not match the correct concept: Successful tool adoption starts with a needs assessment, followed by evaluati..."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "tool selection",
                "tool adoption"
            ],
            "examTip": "Assess, evaluate, pilot, then roll out.",
            "memoryAid": "Pilot before full rollout."
        },
        {
            "id": "Q239",
            "statement": "What is a common risk of test automation?",
            "options": {
                "A": "Automation removes the need for test design",
                "B": "Automation always finds more defects than human testing",
                "C": "Automation guarantees complete coverage",
                "D": "Automated tests can require significant maintenance when the system changes"
            },
            "correctAnswer": "D",
            "explanation": "Automated tests and scripts can become costly to maintain as interfaces, workflows, or data change.",
            "whyWrong": "Automation removes the need for test design (A): Automated tests and scripts can become costly to maintain as interfaces, work...; Automation always finds more defects than human testing (B): Automated tests and scripts can become costly to maintain as interfaces, work...; Automation guarantees complete coverage (C): Automated tests and scripts can become costly to maintain as interfaces, work...",
            "optionExplanations": {
                "A": "Automated tests and scripts can become costly to maintain as interfaces, work...",
                "B": "Automated tests and scripts can become costly to maintain as interfaces, work...",
                "C": "Automated tests and scripts can become costly to maintain as interfaces, work...",
                "D": "Automated tests and scripts can become costly to maintain as interfaces, workflows, or data change."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test automation",
                "maintenance risk"
            ],
            "examTip": "Automation has costs as well as benefits.",
            "memoryAid": "Scripts age with the product."
        },
        {
            "id": "Q068",
            "statement": "For the code snippet: if (a > 5) { if (b < 10) { print('Both conditions met'); } else { print('Second condition failed'); } } else { print('First condition failed'); }, what is the minimum number of test cases for 100% branch coverage?",
            "options": {
                "A": "4",
                "B": "1",
                "C": "2",
                "D": "3"
            },
            "correctAnswer": "D",
            "explanation": "There are three branch outcomes: the outer if (a > 5) true/false, and the inner if (b < 10) true/false. To cover all three decision outcomes, we need test case 1 (a > 5 and b < 10), test case 2 (a > 5 and b >= 10), and test case 3 (a <= 5).",
            "whyWrong": "Two test cases can cover at most if both inner branches are exercised, but the outer else branch would be missed.",
            "optionExplanations": {
                "A": "Three test cases cover: outer true + inner true, outer true + inner false, and outer false.",
                "B": "One test case covers only one path through the nested conditions.",
                "C": "Two test cases cannot cover all three branch outcomes.",
                "D": "Four would also work but is not the minimum."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.2",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K2",
            "difficulty": "Hard",
            "keywords": [
                "branch coverage",
                "nested conditions",
                "white-box"
            ],
            "examTip": "Nested conditions increase the number of test cases needed for branch coverage.",
            "memoryAid": "Nest branches = more paths to test."
        },
        {
            "id": "Q199",
            "statement": "A team has automated 500 regression tests and the automation execution time has decreased from 8 hours to 45 minutes. However, the team spends 15 hours per week maintaining the automated tests. What should the team evaluate?",
            "options": {
                "A": "Whether the automation tool has a better color scheme",
                "B": "Whether the tests can be run on a faster computer",
                "C": "The return on investment (ROI) of test automation, comparing maintenance costs against time savings",
                "D": "Whether more tests should be automated immediately"
            },
            "correctAnswer": "C",
            "explanation": "When automation maintenance costs are high, the team should evaluate the ROI of test automation. Even though execution time decreased, the maintenance effort may reduce or negate the benefits. The team should analyze whether the automation investment is providing net value.",
            "whyWrong": "The tool's appearance is irrelevant to evaluating automation effectiveness.",
            "optionExplanations": {
                "A": "Appearance does not affect automation value.",
                "B": "Faster hardware does not address the maintenance cost issue.",
                "C": "ROI analysis compares benefits (time saved) against costs (maintenance effort).",
                "D": "Adding more tests without addressing maintenance costs could worsen the problem."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test automation",
                "ROI",
                "maintenance",
                "cost-benefit"
            ],
            "examTip": "Automation ROI = (savings from automation) - (cost of creation + cost of maintenance).",
            "memoryAid": "ROI = benefits - costs; if negative, rethink automation strategy."
        },
        {
            "id": "Q378",
            "statement": "Which statement BEST describes a benefit of using test management tools?",
            "options": {
                "A": "They provide traceability between requirements, tests, incidents, and test results",
                "B": "They automatically fix all defects found during testing",
                "C": "They replace the need for a test plan document",
                "D": "They guarantee 100% test coverage of all requirements"
            },
            "correctAnswer": "A",
            "explanation": "Test management tools enable traceability across the testing lifecycle, linking requirements to test cases, execution results, incidents, and reports.",
            "whyWrong": "Test management tools enable traceability across the testing lifecycle, linking requirements to test cases, execution results, incidents, and reports.",
            "optionExplanations": {
                "A": "Test management tools enable traceability across the testing lifecycle, linking requirements to test cases, execution results, incidents, and reports.",
                "B": "Incorrect. 'They automatically fix all defects found during testing' does not match the correct concept: Test management tools enable traceability across the testing lifecycle, linki...",
                "C": "Incorrect. 'They replace the need for a test plan document' does not match the correct concept: Test management tools enable traceability across the testing lifecycle, linki...",
                "D": "Incorrect. 'They guarantee 100% test coverage of all requirements' does not match the correct concept: Test management tools enable traceability across the testing lifecycle, linki..."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test management tool",
                "traceability"
            ],
            "examTip": "Management tools link requirements to tests and issues.",
            "memoryAid": "Connect everything."
        },
        {
            "id": "Q071",
            "statement": "Which of the following is NOT a typical task performed during test planning?",
            "options": {
                "A": "Writing the production code for the application",
                "B": "Defining the test objectives and scope",
                "C": "Identifying test resources and schedules",
                "D": "Determining test approaches and techniques"
            },
            "correctAnswer": "A",
            "explanation": "Writing production code is a development activity, not a test planning activity. Test planning involves defining objectives, scope, resources, schedule, approach (strategy), techniques, and risk assessments.",
            "whyWrong": "All other options are standard test planning activities.",
            "optionExplanations": {
                "A": "Production code development is outside the scope of test planning.",
                "B": "Test objectives and scope are fundamental to test planning.",
                "C": "Resource and schedule identification is part of test planning.",
                "D": "Test approach and technique selection are key planning decisions."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.1",
            "learningObjective": "FL-5.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test planning",
                "test plan",
                "scope",
                "resources"
            ],
            "examTip": "Test planning = what, how, who, when, and risks. NOT writing code.",
            "memoryAid": "Planning = objectives + scope + schedule + resources + approach."
        },
        {
            "id": "Q061",
            "statement": "What is the main risk of relying solely on record-and-playback tools for test automation?",
            "options": {
                "A": "They require no programming skills at all",
                "B": "Automated tests become fragile and difficult to maintain when the application changes",
                "C": "Record-and-playback tools are too expensive",
                "D": "Record-and-playback tools cannot record any interactions"
            },
            "correctAnswer": "B",
            "explanation": "Record-and-playback tools create tests by recording user interactions. These tests capture low-level details (like screen coordinates and exact timing), making them very fragile. Any UI change can break the tests, requiring complete re-recording. This results in high maintenance costs.",
            "whyWrong": "Record-and-playback tools are often inexpensive or free, but the maintenance cost is the real issue.",
            "optionExplanations": {
                "A": "Even without programming, the maintenance challenge remains.",
                "B": "Cost is not the primary issue; maintenance effort is.",
                "C": "Fragility and high maintenance are the primary risks of record-and-playback approaches.",
                "D": "They can record interactions, but the recordings are often too specific and fragile."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "record-and-playback",
                "test automation risks",
                "maintenance"
            ],
            "examTip": "Record-and-playback = easy to create, hard to maintain.",
            "memoryAid": "Record-and-playback = quick start, slow disaster."
        }
    ],
    "exam8": [
        {
            "id": "Q283",
            "statement": "Which statement best describes the relationship between testing and quality assurance?",
            "options": {
                "A": "Testing and quality assurance are the same activity performed by different roles",
                "B": "Quality assurance focuses on finding defects in the finished product",
                "C": "Testing is a process-focused activity that prevents defects from being introduced",
                "D": "Quality assurance is process-oriented and focuses on defect prevention; testing is product-oriented and focuses on defect detection"
            },
            "correctAnswer": "D",
            "explanation": "Quality assurance (QA) is a process-oriented discipline that focuses on preventing defects by improving the development and test processes. Testing is a product-oriented activity that focuses on detecting defects in the product. QA provides the framework and processes within which testing operates effectively.",
            "whyWrong": "Testing and QA are complementary but distinct: QA prevents defects through process improvement, testing detects defects in the product.",
            "optionExplanations": {
                "A": "QA and testing have different primary objectives: process vs. product focus.",
                "B": "QA is process-oriented and aims to prevent defects, not find them after the fact.",
                "C": "Testing is product-oriented defect detection; process improvement is QA.",
                "D": "QA prevents defects through process management; testing detects defects in the product."
            },
            "chapter": 1,
            "section": "1.2",
            "subsection": "1.2.2",
            "learningObjective": "FL-1.2.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "quality assurance",
                "testing",
                "defect prevention",
                "defect detection"
            ],
            "examTip": "QA prevents defects; testing detects them.",
            "memoryAid": "QA = process; Testing = product."
        },
        {
            "id": "Q204",
            "statement": "A team repeatedly executes a regression pack for unchanged features but periodically adds tests for new workflows and recent defect patterns. Which principle is mainly being addressed?",
            "options": {
                "A": "Tests wear out and should be maintained",
                "B": "Testing proves there are no remaining defects",
                "C": "Defects are always evenly distributed",
                "D": "Quality is independent of context"
            },
            "correctAnswer": "A",
            "explanation": "The pesticide paradox says repeated unchanged tests become less effective, so regression suites should be reviewed and refreshed.",
            "whyWrong": "Testing proves there are no remaining defects (B): Test analysis produces test conditions - what should be tested.; Defects are always evenly distributed (C): Execution logs are produced during test execution.; Quality is independent of context (D): Test cases with input values are designed during test design.",
            "optionExplanations": {
                "A": "The pesticide paradox says repeated unchanged tests become less effective, so regression suites should be reviewed and refreshed.",
                "B": "The pesticide paradox says repeated unchanged tests become less effective, so...",
                "C": "The pesticide paradox says repeated unchanged tests become less effective, so...",
                "D": "The pesticide paradox says repeated unchanged tests become less effective, so..."
            },
            "chapter": 1,
            "section": "1.3",
            "subsection": "1.3.1",
            "learningObjective": "FL-1.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "pesticide paradox",
                "regression"
            ],
            "examTip": "Same tests forever is the clue.",
            "memoryAid": "Refresh stale tests."
        },
        {
            "id": "Q292",
            "statement": "Which work product is most closely associated with test execution activities?",
            "options": {
                "D": "Test strategy document",
                "A": "Project schedule",
                "B": "Test case specifications",
                "C": "Test log containing execution results and pass/fail status"
            },
            "correctAnswer": "C",
            "explanation": "Test execution produces work products such as test logs, defect reports, and execution status updates. Test logs record which tests were run, their results (pass/fail), and any anomalies observed.",
            "whyWrong": "Test logs document execution outcomes; test cases are created during implementation, not execution.",
            "optionExplanations": {
                "D": "The test strategy is a planning work product.",
                "A": "The project schedule is a planning work product.",
                "B": "Test case specifications are created during implementation.",
                "C": "Test logs are produced during execution and document results."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.3",
            "learningObjective": "FL-1.4.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test execution",
                "test log",
                "work products"
            ],
            "examTip": "Execution produces logs and defect reports.",
            "memoryAid": "Run tests = log results."
        },
        {
            "id": "Q161",
            "statement": "Which of the following best defines quality in the context of software testing?",
            "options": {
                "A": "The speed at which the software executes its functions",
                "B": "The degree to which a component or system meets specified requirements and user needs",
                "C": "The number of features implemented in the software",
                "D": "The absence of all defects in the software"
            },
            "correctAnswer": "B",
            "explanation": "Quality is defined as the degree to which a component, system, or process meets specified requirements and user/customer needs and expectations. It encompasses both meeting specifications (verification) and satisfying actual user needs (validation).",
            "whyWrong": "Absence of defects alone does not guarantee quality, as the system may still fail to meet user needs.",
            "optionExplanations": {
                "A": "Performance is one aspect of quality, not its complete definition.",
                "B": "Quality is a measure of how well the system meets requirements and satisfies user needs.",
                "C": "Feature count does not correlate with quality.",
                "D": "A system can be defect-free but still not meet user needs (absence-of-errors fallacy)."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1.1",
            "learningObjective": "FL-1.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "quality",
                "definition",
                "requirements",
                "user needs"
            ],
            "examTip": "Quality = meeting requirements AND satisfying user needs.",
            "memoryAid": "Quality = specs met + users happy."
        },
        {
            "id": "Q367",
            "statement": "In a formal review, who is responsible for deciding whether identified defects are severe enough to require rework before the review can close?",
            "options": {
                "A": "The moderator, based on review entry and exit criteria",
                "B": "The author, since they wrote the document",
                "C": "The manager, who approves the final budget",
                "D": "The scribe, who records the defects"
            },
            "correctAnswer": "A",
            "explanation": "The moderator leads the review meeting and, based on the review plan and entry/exit criteria, determines when the review is complete and whether follow-up action is needed.",
            "whyWrong": "The moderator leads the review meeting and, based on the review plan and entry/exit criteria, determines when the review is complete and whether fo... The author, since they wrote the document (option B); The manager, who approves the final budget (option C); The scribe, who records the defects (option D).",
            "optionExplanations": {
                "A": "The moderator leads the review meeting and, based on the review plan and entry/exit criteria, determines when the review is complete and whether follow-up action is needed.",
                "B": "Incorrect. 'The author, since they wrote the document' does not match the correct concept: The moderator leads the review meeting and, based on the review plan and entr...",
                "C": "Incorrect. 'The manager, who approves the final budget' does not match the correct concept: The moderator leads the review meeting and, based on the review plan and entr...",
                "D": "Incorrect. 'The scribe, who records the defects' does not match the correct concept: The moderator leads the review meeting and, based on the review plan and entr..."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.2",
            "learningObjective": "FL-3.2.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "review roles",
                "moderator",
                "review process"
            ],
            "examTip": "Moderator manages the review process.",
            "memoryAid": "Moderator leads the review."
        },
        {
            "id": "Q121",
            "statement": "Which of the following activities is part of the test process?",
            "options": {
                "A": "Software design and architecture",
                "B": "Production deployment planning",
                "C": "Test monitoring and control",
                "D": "Database schema design"
            },
            "correctAnswer": "C",
            "explanation": "Test monitoring and control is one of the main test activities in the test process. It involves measuring progress against the test plan (monitoring) and taking corrective actions when deviations occur (control).",
            "whyWrong": "Software design, database design, and deployment planning are development and operations activities, not test process activities.",
            "optionExplanations": {
                "A": "Software design is a development activity.",
                "B": "Deployment planning is an operations activity.",
                "C": "Test monitoring and control is a core test process activity.",
                "D": "Database schema design is a data architecture activity."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.1",
            "learningObjective": "FL-1.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test activities",
                "test monitoring",
                "test control"
            ],
            "examTip": "Six test activities: Planning, Monitoring & Control, Analysis, Design, Implementation, Execution, Completion.",
            "memoryAid": "PMaADIEC: Plan, Monitor, Analysis, Design, Implement, Execute, Complete."
        },
        {
            "id": "Q168",
            "statement": "During test analysis, a tester reviews the requirements document and identifies testable aspects of the system. What is the primary output of test analysis?",
            "options": {
                "A": "Test summary reports",
                "B": "Test conditions derived from the test basis",
                "C": "Test execution logs",
                "D": "Detailed test cases with specific input values"
            },
            "correctAnswer": "B",
            "explanation": "Test analysis is the activity where the test basis (requirements, specifications, etc.) is analyzed to identify testable aspects called test conditions. These are 'what to test' items that form the foundation for subsequent test design activities.",
            "whyWrong": "Detailed test cases with specific values are produced during test design, not analysis.",
            "optionExplanations": {
                "A": "Summary reports are produced during test completion.",
                "B": "Test analysis produces test conditions - what should be tested.",
                "C": "Execution logs are produced during test execution.",
                "D": "Test cases with input values are designed during test design."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.2",
            "learningObjective": "FL-1.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test analysis",
                "test conditions",
                "test conditions"
            ],
            "examTip": "Test analysis = what to test. Test design = how to test it.",
            "memoryAid": "Analysis = identify targets; Design = create ammunition."
        },
        {
            "id": "Q203",
            "statement": "Which statement best explains why exhaustive testing is generally impossible?",
            "options": {
                "A": "Testers are not allowed to execute all planned tests",
                "B": "Automation tools cannot run tests overnight",
                "C": "Developers should perform exhaustive testing before system testing",
                "D": "Input combinations, paths, timing, and data states are usually too numerous to test completely"
            },
            "correctAnswer": "D",
            "explanation": "The number of possible combinations is normally too large, so testing uses risk, priorities, and techniques to select representative tests.",
            "whyWrong": "The number of possible combinations is normally too large, so testing uses risk, priorities, and techniques to select representative tests.",
            "optionExplanations": {
                "A": "The number of possible combinations is normally too large, so testing uses ri...",
                "B": "The number of possible combinations is normally too large, so testing uses ri...",
                "C": "The number of possible combinations is normally too large, so testing uses ri...",
                "D": "The number of possible combinations is normally too large, so testing uses risk, priorities, and techniques to select representative tests."
            },
            "chapter": 1,
            "section": "1.3",
            "subsection": "1.3.1",
            "learningObjective": "FL-1.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "exhaustive testing",
                "test principles"
            ],
            "examTip": "Look for impractical combinations, not lack of effort.",
            "memoryAid": "Too many combinations."
        },
        {
            "id": "Q303",
            "statement": "A legacy system is being migrated from an on-premise server to a cloud platform. This scenario is a trigger for which type of testing?",
            "options": {
                "A": "Component testing",
                "B": "Acceptance testing",
                "C": "Maintenance testing",
                "D": "Integration testing"
            },
            "correctAnswer": "C",
            "explanation": "System migration (moving from one platform to another) is a common trigger for maintenance testing. Other triggers include modifications, enhancements, bug fixes, and retirement of a system. Maintenance testing ensures that changes do not introduce new defects and that the system still meets its requirements.",
            "whyWrong": "Migration, modification, and retirement are all triggers for maintenance testing.",
            "optionExplanations": {
                "A": "Component testing verifies individual components during new development.",
                "B": "Acceptance testing validates user requirements before release.",
                "C": "Maintenance testing is triggered by platform migration, enhancements, and fixes.",
                "D": "Integration testing focuses on interface interactions, not migration."
            },
            "chapter": 2,
            "section": "2.4",
            "subsection": "2.4.1",
            "learningObjective": "FL-2.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "maintenance testing",
                "migration",
                "legacy system"
            ],
            "examTip": "Platform migration is a maintenance testing trigger.",
            "memoryAid": "Change = maintenance test."
        },
        {
            "id": "Q132",
            "statement": "A login system has three states: LoggedOut, LoggedIn, and Locked. From LoggedOut, correct credentials transition to LoggedIn; incorrect credentials remain in LoggedOut; three consecutive failed attempts transition to Locked. From LoggedIn, logout transitions to LoggedOut. Which of the following is an invalid transition?",
            "options": {
                "A": "From Locked directly to LoggedIn without any intervening event",
                "B": "From LoggedOut to Locked after three failed login attempts",
                "C": "From LoggedIn to LoggedOut by selecting logout",
                "D": "From LoggedOut to LoggedOut by entering incorrect credentials"
            },
            "correctAnswer": "A",
            "explanation": "A transition directly from Locked to LoggedIn is not described in the scenario. Once an account is locked, some external action (like admin unlock or waiting) would typically be required. The scenario does not define a transition from Locked to LoggedIn, making it invalid.",
            "whyWrong": "All the other transitions are explicitly defined in the scenario.",
            "optionExplanations": {
                "A": "No transition from Locked to LoggedIn is defined; an unlock mechanism would be needed.",
                "B": "Three failed attempts transitioning from LoggedOut to Locked is defined.",
                "C": "Logout from LoggedIn to LoggedOut is a valid transition.",
                "D": "Incorrect credentials remaining in LoggedOut is defined (self-transition)."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.4",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "state transition",
                "login system",
                "state transition"
            ],
            "examTip": "Identify transitions that are not defined in the specification; those are invalid.",
            "memoryAid": "Undefined transition = not allowed by the specification."
        },
        {
            "id": "Q304",
            "statement": "Which of the following is a common trigger for maintenance testing?",
            "options": {
                "B": "A planned system retirement requiring data migration",
                "C": "The initial requirements review meeting",
                "D": "The first release of a new product",
                "A": "The completion of unit testing"
            },
            "correctAnswer": "B",
            "explanation": "System retirement or decommissioning with data migration is a maintenance testing trigger. Other triggers include operational changes, bug fixes, enhancements, and regulatory updates that affect an already deployed system.",
            "whyWrong": "Maintenance testing is triggered by changes to an operational system.",
            "optionExplanations": {
                "B": "Retirement with migration is a standard maintenance testing trigger.",
                "C": "Requirements review occurs during initial development, not maintenance.",
                "D": "First release is new development, not maintenance.",
                "A": "Unit testing completion is part of initial development testing."
            },
            "chapter": 2,
            "section": "2.4",
            "subsection": "2.4.1",
            "learningObjective": "FL-2.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "maintenance testing triggers",
                "system retirement"
            ],
            "examTip": "Retirement, migration, and modifications trigger maintenance testing.",
            "memoryAid": "Change after release = maintenance."
        },
        {
            "id": "Q041",
            "statement": "What is the primary difference between a test condition and a test case?",
            "options": {
                "A": "There is no difference; the terms are interchangeable",
                "B": "A test case is a condition; a test condition is a set of test cases",
                "C": "A test condition is documented in the test plan; a test case is documented in requirements",
                "D": "A test condition is something that can be tested; a test case specifies inputs, outputs, and execution conditions"
            },
            "correctAnswer": "D",
            "explanation": "A test condition (also known as a test situation) is an aspect of the system that can be verified. A test case is a more detailed artifact that includes specific input values, expected results, preconditions, and postconditions designed to test one or more test conditions.",
            "whyWrong": "The terms are not interchangeable; they represent different levels of detail in the test process.",
            "optionExplanations": {
                "A": "They are distinct concepts at different abstraction levels.",
                "B": "This reverses the hierarchy; test cases are derived from test conditions.",
                "C": "Test cases are documented as part of test implementation, not requirements.",
                "D": "Test conditions identify what to test; test cases define how to test it with specific data."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.2",
            "learningObjective": "FL-1.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test condition",
                "test case",
                "test documentation"
            ],
            "examTip": "Test condition = what to test; Test case = how to test it.",
            "memoryAid": "Condition = the target; Case = the ammunition."
        },
        {
            "id": "Q232",
            "statement": "Which metric directly supports test progress reporting?",
            "options": {
                "A": "Number of planned test cases executed and passed",
                "B": "Number of employees in the company",
                "C": "Color of the test management dashboard",
                "D": "Number of office locations"
            },
            "correctAnswer": "A",
            "explanation": "Executed, passed, failed, blocked, and remaining tests are common metrics for monitoring test progress.",
            "whyWrong": "Number of employees in the company (B): Executed, passed, failed, blocked, and remaining tests are common metrics for...; Color of the test management dashboard (C): Executed, passed, failed, blocked, and remaining tests are common metrics for...; Number of office locations (D): Executed, passed, failed, blocked, and remaining tests are common metrics for...",
            "optionExplanations": {
                "A": "Executed, passed, failed, blocked, and remaining tests are common metrics for monitoring test progress.",
                "B": "Executed, passed, failed, blocked, and remaining tests are common metrics for...",
                "C": "Executed, passed, failed, blocked, and remaining tests are common metrics for...",
                "D": "Executed, passed, failed, blocked, and remaining tests are common metrics for..."
            },
            "chapter": 5,
            "section": "5.3",
            "subsection": "5.3.1",
            "learningObjective": "FL-5.3.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test metrics",
                "progress"
            ],
            "examTip": "Progress metrics relate to test work and outcomes.",
            "memoryAid": "Executed versus planned."
        },
        {
            "id": "Q301",
            "statement": "A tester runs a set of tests to verify that a recent bug fix works correctly. Then the tester runs a broader set of tests to ensure the fix did not break any existing functionality. These are examples of:",
            "options": {
                "A": "Functional testing and non-functional testing",
                "B": "Component testing and system testing",
                "C": "Static testing and dynamic testing",
                "D": "Confirmation testing and regression testing"
            },
            "correctAnswer": "D",
            "explanation": "Confirmation testing (also called re-testing) verifies that a specific defect fix works. Regression testing checks that unchanged parts of the system still work correctly after changes. They serve different purposes and both are essential after a change.",
            "whyWrong": "Confirmation testing checks the fix; regression testing checks everything else.",
            "optionExplanations": {
                "A": "Both activities are dynamic testing, not a distinction between functional and non-functional.",
                "B": "These activities describe test purposes, not test levels.",
                "C": "Both are dynamic testing techniques.",
                "D": "Confirmation testing verifies fixes; regression testing checks for unintended side effects."
            },
            "chapter": 2,
            "section": "2.3",
            "subsection": "2.3.3",
            "learningObjective": "FL-2.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "confirmation testing",
                "regression testing",
                "bug fix validation"
            ],
            "examTip": "Confirm the fix; regress the rest.",
            "memoryAid": "Fix = confirm; Side effects = regress."
        },
        {
            "id": "Q302",
            "statement": "After fixing a defect in the payment calculation module, the team re-runs all existing test cases for that module plus selected tests across related modules. Which statements are true?",
            "options": {
                "A": "Both activities are confirmation testing",
                "B": "Re-running payment tests is confirmation testing; running tests on related modules is regression testing",
                "C": "Running tests on related modules is confirmation testing",
                "D": "Both activities are regression testing"
            },
            "correctAnswer": "B",
            "explanation": "Re-running the specific tests that failed due to the defect is confirmation testing (verifying the fix). Running tests on related modules to check for side effects is regression testing. They address different risks and are both needed.",
            "whyWrong": "Confirmation = was the bug fixed? Regression = did anything break?",
            "optionExplanations": {
                "A": "Only the tests that directly verify the fix are confirmation testing.",
                "B": "The fix verification is confirmation; the broader impact check is regression.",
                "C": "Tests on related modules check for side effects (regression).",
                "D": "Verifying the specific fix is confirmation, not regression testing."
            },
            "chapter": 2,
            "section": "2.3",
            "subsection": "2.3.3",
            "learningObjective": "FL-2.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "confirmation testing",
                "regression testing",
                "defect verification"
            ],
            "examTip": "Confirmation = check fix; Regression = check neighbors.",
            "memoryAid": "Fix = confirm; Surrounding = regress."
        },
        {
            "id": "Q266",
            "statement": "Which set best represents valid boundary-focused tests for a date field allowing days 1 through 31 inclusive using three-value BVA?",
            "options": {
                "A": "2, 3, 4, 5",
                "B": "10, 20, 30, 40",
                "C": "0, 1, 2, 30, 31, 32",
                "D": "1, 15, 31"
            },
            "correctAnswer": "C",
            "explanation": "Three-value BVA includes below, on, and above each boundary: 0,1,2 and 30,31,32.",
            "whyWrong": "8 (A): Three-value BVA includes below, on, and above each boundary: 0,1,2 and 30,31,32.; 4 (B): Three-value BVA includes below, on, and above each boundary: 0,1,2 and 30,31,32.; 3 (D): Three-value BVA includes below, on, and above each boundary: 0,1,2 and 30,31,32.",
            "optionExplanations": {
                "A": "Three-value BVA includes below, on, and above each boundary: 0,1,2 and 30,31,32.",
                "B": "Three-value BVA includes below, on, and above each boundary: 0,1,2 and 30,31,32.",
                "C": "Three-value BVA includes below, on, and above each boundary: 0,1,2 and 30,31,32.",
                "D": "Three-value BVA includes below, on, and above each boundary: 0,1,2 and 30,31,32."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.2",
            "learningObjective": "FL-4.2.2",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "boundary value analysis",
                "date field"
            ],
            "examTip": "Below, on, and above both limits.",
            "memoryAid": "Three around each edge."
        },
        {
            "id": "Q126",
            "statement": "Which of the following is the primary focus of acceptance testing?",
            "options": {
                "A": "Measuring system performance under load",
                "B": "Testing individual components in isolation",
                "C": "Verifying the internal code structure and logic",
                "D": "Validating that the system meets business requirements and is ready for operational use"
            },
            "correctAnswer": "D",
            "explanation": "Acceptance testing focuses on validating whether the system meets the business needs and user requirements, and whether it is ready for deployment into the production environment. It is typically performed by or on behalf of the customers or end users.",
            "whyWrong": "Verifying internal code structure is component testing, not acceptance testing.",
            "optionExplanations": {
                "A": "Performance testing is a non-functional test type, not acceptance testing.",
                "B": "Component testing tests individual components in isolation.",
                "C": "Code structure is verified through white-box testing at component level.",
                "D": "Acceptance testing validates business fitness and readiness for operational use."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "acceptance testing",
                "validation",
                "business requirements"
            ],
            "examTip": "Acceptance testing = 'Is this the right product for the users?'",
            "memoryAid": "Acceptance = user approval, final go/no-go."
        },
        {
            "id": "Q021",
            "statement": "A system has three boolean conditions: A, B, and C. A decision table is used to define the behavior. How many columns (test cases) are needed for a complete decision table using the classical approach?",
            "options": {
                "C": "8",
                "D": "4",
                "A": "6",
                "B": "3"
            },
            "correctAnswer": "C",
            "explanation": "For a decision table with three conditions, the classical approach uses all combinations, which is 2^3 = 8 columns. Each column represents a unique combination of true/false values for the three conditions.",
            "whyWrong": "The number of columns is 2^n where n is the number of conditions, not the number of conditions multiplied or added.",
            "optionExplanations": {
                "C": "2^3 = 8 combinations of three boolean conditions.",
                "D": "4 would be 2^2, which is for two conditions.",
                "A": "6 might be an attempt at 3×2, but the correct formula is 2^3.",
                "B": "3 is just the number of conditions, not the number of test cases."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.3",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "decision table",
                "black-box",
                "combinatorial testing"
            ],
            "examTip": "Decision table columns = 2^(number of conditions) for full coverage.",
            "memoryAid": "n conditions = 2^n test cases for a complete decision table."
        },
        {
            "id": "Q091",
            "statement": "Which of the following is a typical objective of system testing?",
            "options": {
                "A": "Testing individual functions in isolation from the rest of the system",
                "B": "Verifying end-to-end business processes and system behavior against requirements",
                "C": "Determining whether the system is acceptable to end users",
                "D": "Verifying interfaces between integrated components"
            },
            "correctAnswer": "B",
            "explanation": "System testing evaluates the behavior of the complete, integrated system against its specified requirements. It includes both functional and non-functional testing of end-to-end scenarios, business processes, and system-level behaviors.",
            "whyWrong": "Testing individual functions in isolation is component testing, not system testing.",
            "optionExplanations": {
                "A": "Component testing tests individual functions in isolation.",
                "B": "System testing verifies the complete system against requirements, including end-to-end scenarios.",
                "C": "Acceptance testing determines user acceptability.",
                "D": "Integration testing verifies interfaces between components."
            },
            "chapter": 2,
            "section": "2.2",
            "subsection": "2.2.1",
            "learningObjective": "FL-2.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "system testing",
                "end-to-end",
                "business processes"
            ],
            "examTip": "System testing = the whole system, end-to-end, against requirements.",
            "memoryAid": "System testing = the big picture, everything working together."
        },
        {
            "id": "Q191",
            "statement": "Which metric would best help a test manager track the effectiveness of testing in finding defects?",
            "options": {
                "A": "Defect detection percentage (DDP)",
                "B": "Number of test cases executed per day",
                "C": "Percentage of automated test cases",
                "D": "Number of testers on the team"
            },
            "correctAnswer": "A",
            "explanation": "Defect Detection Percentage (DDP) measures the number of defects found during testing compared to the total defects found (including those found in production). A higher DDP indicates that testing is effective at finding defects before release.",
            "whyWrong": "Test cases executed per day measures execution speed, not defect-finding effectiveness.",
            "optionExplanations": {
                "A": "DDP = defects found during testing / (defects found during testing + defects found in production).",
                "B": "Execution rate does not indicate how many defects are being found.",
                "C": "Automation percentage measures process efficiency, not effectiveness.",
                "D": "Team size is a resource metric, not an effectiveness indicator."
            },
            "chapter": 5,
            "section": "5.3",
            "subsection": "5.3.1",
            "learningObjective": "FL-5.3.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test metrics",
                "defect detection percentage",
                "DDP",
                "effectiveness"
            ],
            "examTip": "DDP = how good is testing at catching bugs before release.",
            "memoryAid": "DDP = defects caught by testing / total defects."
        },
        {
            "id": "Q094",
            "statement": "Which of the following is a static testing technique?",
            "options": {
                "A": "Executing unit tests on a code module",
                "B": "Performing boundary value analysis on input fields",
                "C": "Running a load test against a web server",
                "D": "Informal review of a requirements document"
            },
            "correctAnswer": "D",
            "explanation": "Static testing involves examining work products without executing code. Reviews (including informal reviews) of requirements, design, code, or other documents are a form of static testing. The other options all involve code execution, which is dynamic testing.",
            "whyWrong": "All other options involve executing code or running tests, which is dynamic testing.",
            "optionExplanations": {
                "A": "Executing unit tests is dynamic testing.",
                "B": "Boundary value analysis is a dynamic test design technique.",
                "C": "Load testing is dynamic testing involving code execution.",
                "D": "Reviews are static testing techniques that do not require code execution."
            },
            "chapter": 3,
            "section": "3.1",
            "subsection": "3.1.1",
            "learningObjective": "FL-3.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "static testing",
                "reviews",
                "dynamic testing"
            ],
            "examTip": "Static = no execution (reviews, static analysis). Dynamic = execution required.",
            "memoryAid": "Static = sitting still, reading. Dynamic = running the code."
        },
        {
            "id": "Q276",
            "statement": "Which factor should be considered when selecting a test technique?",
            "options": {
                "A": "The test objective, risks, test basis, regulatory needs, and available skills",
                "B": "Only the tester's favorite method",
                "C": "The alphabetical order of techniques",
                "D": "The color of the application interface"
            },
            "correctAnswer": "A",
            "explanation": "Technique selection depends on objectives, risks, lifecycle, test basis, standards, skills, and constraints.",
            "whyWrong": "Only the tester's favorite method (B): Technique selection depends on objectives, risks, lifecycle, test basis, stan...; The alphabetical order of techniques (C): Technique selection depends on objectives, risks, lifecycle, test basis, stan...",
            "optionExplanations": {
                "A": "Technique selection depends on objectives, risks, lifecycle, test basis, standards, skills, and constraints.",
                "B": "Technique selection depends on objectives, risks, lifecycle, test basis, stan...",
                "C": "Technique selection depends on objectives, risks, lifecycle, test basis, stan...",
                "D": "Technique selection depends on objectives, risks, lifecycle, test basis, stan..."
            },
            "chapter": 5,
            "section": "5.5",
            "subsection": "5.5.1",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "technique selection",
                "context"
            ],
            "examTip": "Choose techniques based on context and objective.",
            "memoryAid": "Fit technique to need."
        },
        {
            "id": "Q096",
            "statement": "Which type of review is the most formal and follows a rigorous process with formal entry and exit criteria?",
            "options": {
                "B": "Informal review",
                "C": "Inspection",
                "D": "Walkthrough",
                "A": "Technical review"
            },
            "correctAnswer": "C",
            "explanation": "Inspections are the most formal type of review. They follow a well-defined process with trained participants, defined roles, formal entry and exit criteria, data collection, and process improvement feedback. Inspections have the highest level of rigor.",
            "whyWrong": "Walkthroughs and informal reviews are less formal. Technical reviews are formal but less rigorous than inspections.",
            "optionExplanations": {
                "B": "Walkthroughs are author-led, informal, and focus on knowledge sharing.",
                "C": "Informal reviews are the least formal, often done as pair reviews without documented process.",
                "D": "Inspections have the highest formality with strict entry/exit criteria and defined roles.",
                "A": "Technical reviews are formal but less rigorous than inspections."
            },
            "chapter": 3,
            "section": "3.2",
            "subsection": "3.2.1",
            "learningObjective": "FL-3.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "inspection",
                "review types",
                "formality"
            ],
            "examTip": "Formality: Informal < Walkthrough < Technical Review < Inspection.",
            "memoryAid": "Inspection = the formal heavyweight champion of reviews."
        },
        {
            "id": "Q152",
            "statement": "A medical device monitors patient temperature and triggers an alert if the temperature is outside the normal range of 36.0\\u00b0C to 37.5\\u00b0C inclusive. Using two-value boundary value analysis, which temperature values should be tested?",
            "options": {
                "C": "35.9, 36.0, 37.5, 37.6",
                "D": "36.0, 36.5, 37.0, 37.5",
                "A": "35.5, 36.0, 37.5, 38.0",
                "B": "35.9, 36.0, 36.1, 37.4, 37.5, 37.6"
            },
            "correctAnswer": "C",
            "explanation": "Two-value BVA tests the boundary values and values just outside each boundary. The valid range is 36.0 to 37.5. The boundaries are at 36.0 (minimum) and 37.5 (maximum). The values to test are: 35.9 (just below min), 36.0 (minimum), 37.5 (maximum), and 37.6 (just above max).",
            "whyWrong": "Option C uses 35.5 and 38.0 which are too far from the boundaries to be effective BVA values.",
            "optionExplanations": {
                "C": "35.9 (below min), 36.0 (min), 37.5 (max), 37.6 (above max) - correct 2-value BVA.",
                "D": "36.5 and 37.0 are internal values, not boundary values.",
                "A": "35.5 is too far below min; 38.0 is too far above max.",
                "B": "36.1 and 37.4 are internal, not boundary values (3-value BVA)."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.2",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "boundary value analysis",
                "BVA",
                "medical device",
                "temperature"
            ],
            "examTip": "2-value BVA = min-1, min, max, max+1 for each boundary.",
            "memoryAid": "BVA: just below, at, just above each boundary."
        },
        {
            "id": "Q324",
            "statement": "A document workflow has states: Draft, UnderReview, Approved, Rejected, Published. From Draft, submitting to review transitions to UnderReview. From UnderReview, the reviewer can Approve (-> Approved) or Reject (-> Rejected). From Approved, publishing transitions to Published. From Rejected, the author can revise and resubmit (-> UnderReview). Which 0-switch transitions are valid from UnderReview?",
            "options": {
                "A": "UnderReview to Draft and UnderReview to Published",
                "B": "UnderReview to Draft only",
                "C": "UnderReview to Approved only",
                "D": "UnderReview to Approved, UnderReview to Rejected"
            },
            "correctAnswer": "D",
            "explanation": "From UnderReview, the reviewer makes a decision: approve (-> Approved) or reject (-> Rejected). These are the only valid 0-switch transitions from UnderReview. Going back to Draft or jumping to Published from UnderReview are not valid transitions.",
            "whyWrong": "From UnderReview: only Approved or Rejected are valid outcomes.",
            "optionExplanations": {
                "A": "Draft and Published cannot be reached directly from UnderReview.",
                "B": "Rejected is also a valid outcome from UnderReview.",
                "C": "Rejected is also a valid outcome.",
                "D": "UnderReview -> Approved (approve) and UnderReview -> Rejected (reject) are the valid transitions."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.4",
            "learningObjective": "FL-4.2.4",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "state transition",
                "document workflow",
                "approval process"
            ],
            "examTip": "UnderReview -> Approved or Rejected.",
            "memoryAid": "Review ends with approve or reject."
        },
        {
            "id": "Q380",
            "statement": "Which of the following is a key consideration when selecting a test automation tool?",
            "options": {
                "A": "Compatibility with the technologies and platforms used in the application under test",
                "B": "The tool's ability to make testing unnecessary",
                "C": "The vendor's market share alone, regardless of technical fit",
                "D": "The tool's price being the lowest available"
            },
            "correctAnswer": "A",
            "explanation": "Tool selection should consider technical compatibility, organizational fit, skill requirements, vendor support, and total cost of ownership, not just market share or price.",
            "whyWrong": " The tools cannot measure response times (option B); Performance tools only work on desktop applications (option C); Performance testing does not require any planning (option D).",
            "optionExplanations": {
                "A": "Tool selection should consider technical compatibility, organizational fit, skill requirements, vendor support, and total cost of ownership, not just market share or price.",
                "B": "Incorrect. 'The tool's ability to make testing unnecessary' does not match the correct concept: Tool selection should consider technical compatibility, organizational fit, s...",
                "C": "Incorrect. 'The vendor's market share alone, regardless of technical fit' does not match the correct concept: Tool selection should consider technical compatibility, organizational fit, s...",
                "D": "Incorrect. 'The tool's price being the lowest available' does not match the correct concept: Tool selection should consider technical compatibility, organizational fit, s..."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "tool selection criteria",
                "compatibility"
            ],
            "examTip": "Technology fit matters more than price.",
            "memoryAid": "Fit over price."
        },
        {
            "id": "Q179",
            "statement": "A library charges late fees for books returned after the due date. The fee is: $0 for 0 days late, $1 per day for 1-7 days late, $2 per day for 8-14 days late, and $5 per day for 15+ days late. Using equivalence partitioning, which set of values provides the best coverage of all valid partitions?",
            "options": {
                "C": "0, 4, 10, 20",
                "D": "1, 7, 8, 15",
                "A": "0, 1, 8, 15",
                "B": "5, 12, 18, 25"
            },
            "correctAnswer": "C",
            "explanation": "The valid partitions are: 0 days (no fee), 1-7 days ($1/day), 8-14 days ($2/day), and 15+ days ($5/day). Option A provides one representative from each: 0 (first partition), 4 (1-7 range), 10 (8-14 range), and 20 (15+ range).",
            "whyWrong": "Option C includes 0 (valid), but 1, 8, and 15 are boundary values, not typical EP representatives.",
            "optionExplanations": {
                "C": "0, 4, 10, and 20 each represent one distinct valid partition.",
                "D": "1, 7, 8, and 15 are boundary values at the edges of partitions.",
                "A": "1, 8, and 15 are boundary values rather than partition representatives.",
                "B": "5, 12, 18, and 25 all fall within partitions but miss the 0-day partition."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.1",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "equivalence partitioning",
                "library fines",
                "late fees"
            ],
            "examTip": "Equivalence partitioning = one representative from each partition, not specifically boundaries.",
            "memoryAid": "One from each group, any value in the range will do."
        },
        {
            "id": "Q221",
            "statement": "A loan is approved if credit score is high and income is verified, or if a manager override is present. Which technique is most suitable to design tests for these rule combinations?",
            "options": {
                "A": "Error guessing only",
                "B": "Decision table testing",
                "C": "State transition testing",
                "D": "Statement testing"
            },
            "correctAnswer": "B",
            "explanation": "Decision table testing is appropriate when combinations of conditions determine actions or outcomes.",
            "whyWrong": "UnderReview to Draft and UnderReview to Published (A): Decision table testing is appropriate when combinations of conditions determi...; UnderReview to Approved only (C): Decision table testing is appropriate when combinations of conditions determi...; UnderReview to Approved, UnderReview to Rejected (D): Decision table testing is appropriate when combinations of conditions determi...",
            "optionExplanations": {
                "A": "Decision table testing is appropriate when combinations of conditions determi...",
                "B": "Decision table testing is appropriate when combinations of conditions determine actions or outcomes.",
                "C": "Decision table testing is appropriate when combinations of conditions determi...",
                "D": "Decision table testing is appropriate when combinations of conditions determi..."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.3",
            "learningObjective": "FL-4.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "decision table",
                "business rules"
            ],
            "examTip": "Multiple conditions plus actions point to decision tables.",
            "memoryAid": "Rules table decisions."
        },
        {
            "id": "Q022",
            "statement": "In state transition testing, what is the minimum number of test cases needed to cover all states in a system with 5 states?",
            "options": {
                "C": "At least one test case to visit each state",
                "D": "It depends on the number of transitions between states",
                "A": "Exactly 10 test cases for all transitions",
                "B": "Exactly 5 test cases"
            },
            "correctAnswer": "C",
            "explanation": "At minimum, one test case can visit all states if the path covers each state at least once. The test case would traverse transitions that lead through all five states. The minimum is not fixed at 5 because a single path can pass through multiple states.",
            "whyWrong": "The exact number depends on the state transition diagram structure, but at least one test case is needed to cover all states.",
            "optionExplanations": {
                "C": "A single test case could visit all states if the path is designed correctly.",
                "D": "This is the most accurate - the number depends on the specific transition model.",
                "A": "The number depends on the transition diagram, not a fixed value.",
                "B": "A single test case can potentially visit all states through a well-designed path."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.4",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "state transition",
                "state coverage",
                "black-box"
            ],
            "examTip": "State coverage: visit each state at least once. Transition coverage: exercise each transition at least once.",
            "memoryAid": "States = places you visit; Transitions = roads you take."
        },
        {
            "id": "Q158",
            "statement": "What is the purpose of defining exit criteria in a test plan?",
            "options": {
                "A": "To define the conditions that must be met before testing can be considered complete",
                "B": "To specify the minimum requirements for starting test execution",
                "C": "To list all the features that will not be tested",
                "D": "To identify the test environment requirements"
            },
            "correctAnswer": "A",
            "explanation": "Exit criteria define the conditions that must be achieved to conclude a specific test level or set of tests. Examples include achieving a certain percentage of test case pass rate, meeting coverage targets, or resolving critical defects. They help make objective completion decisions.",
            "whyWrong": "Entry criteria define the conditions for starting testing, which is the opposite of exit criteria.",
            "optionExplanations": {
                "A": "Entry criteria define what must be in place before testing begins.",
                "B": "Exit criteria specify measurable conditions for completing testing.",
                "C": "Features not tested are described in the test scope or risk analysis.",
                "D": "Environment requirements are part of test planning but separate from exit criteria."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.1",
            "learningObjective": "FL-5.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "exit criteria",
                "test plan",
                "completion conditions"
            ],
            "examTip": "Entry criteria = start conditions; Exit criteria = done conditions.",
            "memoryAid": "Exit = when can I stop? Entry = when can I start?"
        },
        {
            "id": "Q383",
            "statement": "What is a common challenge when introducing tools for performance and load testing?",
            "options": {
                "A": "Creating realistic test data and environments that accurately simulate production conditions",
                "B": "The tools cannot measure response times",
                "C": "Performance tools only work on desktop applications",
                "D": "Performance testing does not require any planning"
            },
            "correctAnswer": "A",
            "explanation": "Performance testing challenges include creating realistic workloads, simulating production data volumes, configuring test environments, and interpreting results accurately.",
            "whyWrong": "The tools cannot measure response times (B): Incorrect. 'The tools cannot measure response times' does not match the correct concept: Performance testing challenges include creating realistic workloads, simulati...; Performance tools only work on desktop applications (C): Incorrect. 'Performance tools only work on desktop applications' does not match the correct concept: Performance testing cha...",
            "optionExplanations": {
                "A": "Performance testing challenges include creating realistic workloads, simulating production data volumes, configuring test environments, and interpreting results accurately.",
                "B": "Incorrect. 'The tools cannot measure response times' does not match the correct concept: Performance testing challenges include creating realistic workloads, simulati...",
                "C": "Incorrect. 'Performance tools only work on desktop applications' does not match the correct concept: Performance testing challenges include creating realistic workloads, simulati...",
                "D": "Incorrect. 'Performance testing does not require any planning' does not match the correct concept: Performance testing challenges include creating realistic workloads, simulati..."
            },
            "chapter": 6,
            "section": "6.2",
            "subsection": "6.2",
            "learningObjective": "FL-6.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "performance testing",
                "load testing challenges"
            ],
            "examTip": "Realistic data and environments are critical for performance testing.",
            "memoryAid": "Simulate reality for meaningful results."
        },
        {
            "id": "Q229",
            "statement": "Which item is most appropriate in a test plan?",
            "options": {
                "A": "The marketing launch announcement",
                "B": "Test objectives, scope, resources, schedule, risks, and approach",
                "C": "Only the final pass or fail result",
                "D": "A list of every line of production code"
            },
            "correctAnswer": "B",
            "explanation": "A test plan describes the objectives, scope, resources, schedule, approach, risks, and deliverables for testing.",
            "whyWrong": "The marketing launch announcement (A): A test plan describes the objectives, scope, resources, schedule, approach, r...; Only the final pass or fail result (C): A test plan describes the objectives, scope, resources, schedule, approach, r...",
            "optionExplanations": {
                "A": "A test plan describes the objectives, scope, resources, schedule, approach, r...",
                "B": "A test plan describes the objectives, scope, resources, schedule, approach, risks, and deliverables for testing.",
                "C": "A test plan describes the objectives, scope, resources, schedule, approach, r...",
                "D": "A test plan describes the objectives, scope, resources, schedule, approach, r..."
            },
            "chapter": 5,
            "section": "5.1",
            "subsection": "5.1.1",
            "learningObjective": "FL-5.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test plan",
                "planning"
            ],
            "examTip": "Plans define how testing will be managed.",
            "memoryAid": "Plan the scope, approach, and control."
        },
        {
            "id": "Q018",
            "statement": "Which of the following is a black-box test technique?",
            "options": {
                "A": "Statement testing",
                "B": "Code coverage analysis",
                "C": "Equivalence partitioning",
                "D": "Branch testing"
            },
            "correctAnswer": "C",
            "explanation": "Equivalence partitioning is a black-box test technique that divides input data into partitions (classes) from which test cases can be derived. It is based on the specification, not on the internal code structure.",
            "whyWrong": "Statement testing and branch testing are white-box techniques that rely on internal code structure.",
            "optionExplanations": {
                "A": "Statement testing requires knowledge of the code structure (white-box).",
                "B": "Code coverage analysis is a white-box measurement technique.",
                "C": "Equivalence partitioning is a black-box technique based on input/output specifications.",
                "D": "Branch testing requires knowledge of decision points in the code (white-box)."
            },
            "chapter": 4,
            "section": "4.1",
            "subsection": "4.1.1",
            "learningObjective": "FL-4.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "black-box",
                "equivalence partitioning",
                "test techniques"
            ],
            "examTip": "Black-box = no code knowledge needed; White-box = code knowledge required.",
            "memoryAid": "Black-box = looking from outside; White-box = looking inside the code."
        },
        {
            "id": "Q373",
            "statement": "Which of the following tool categories is MOST suitable for automatically generating test inputs based on boundary value analysis and equivalence partitioning?",
            "options": {
                "A": "Test design tools",
                "B": "Test execution tools",
                "C": "Performance testing tools",
                "D": "Configuration management tools"
            },
            "correctAnswer": "A",
            "explanation": "Test design tools help derive test cases from requirements, models, or specifications, including generating inputs based on techniques like equivalence partitioning and boundary value analysis.",
            "whyWrong": "Test design tools help derive test cases from requirements, models, or specifications, including generating inputs based on techniques like equival... Test execution tools (option B); Performance testing tools (option C); Configuration management tools (option D).",
            "optionExplanations": {
                "A": "Test design tools help derive test cases from requirements, models, or specifications, including generating inputs based on techniques like equivalence partitioning and boundary value analysis.",
                "B": "Incorrect. 'Test execution tools' does not match the correct concept: Test design tools help derive test cases from requirements, models, or specif...",
                "C": "Incorrect. 'Performance testing tools' does not match the correct concept: Test design tools help derive test cases from requirements, models, or specif...",
                "D": "Incorrect. 'Configuration management tools' does not match the correct concept: Test design tools help derive test cases from requirements, models, or specif..."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test design tools",
                "test generation"
            ],
            "examTip": "Design tools generate test inputs.",
            "memoryAid": "Generate inputs automatically."
        },
        {
            "id": "Q231",
            "statement": "A product risk has high impact but low likelihood. How should risk-based testing generally treat it?",
            "options": {
                "A": "Ignore it because likelihood is low",
                "B": "Test it only after all low-impact risks",
                "C": "Transfer it automatically to development",
                "D": "Consider both impact and likelihood when setting test priority"
            },
            "correctAnswer": "D",
            "explanation": "Product risk level depends on likelihood and impact, and both dimensions should influence testing priorities.",
            "whyWrong": "Ignore it because likelihood is low (A): Product risk level depends on likelihood and impact, and both dimensions shou...; Test it only after all low-impact risks (B): Product risk level depends on likelihood and impact, and both dimensions shou...; Transfer it automatically to development (C): Product risk level depends on likelihood and impact, and both dimensions shou...",
            "optionExplanations": {
                "A": "Product risk level depends on likelihood and impact, and both dimensions shou...",
                "B": "Product risk level depends on likelihood and impact, and both dimensions shou...",
                "C": "Product risk level depends on likelihood and impact, and both dimensions shou...",
                "D": "Product risk level depends on likelihood and impact, and both dimensions should influence testing priorities."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.1",
            "learningObjective": "FL-5.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "risk-based testing",
                "impact",
                "likelihood"
            ],
            "examTip": "Risk combines probability and consequence.",
            "memoryAid": "Risk = likelihood x impact."
        },
        {
            "id": "Q233",
            "statement": "A team estimates testing by comparing the new release with three similar completed releases. Which estimation approach is used?",
            "options": {
                "A": "Defect severity estimation only",
                "B": "Estimation based on ratios or historical data",
                "C": "Boundary value estimation",
                "D": "Branch coverage estimation"
            },
            "correctAnswer": "B",
            "explanation": "Using data from similar past projects is a recognized basis for test estimation.",
            "whyWrong": "Defect severity estimation only (A): Using data from similar past projects is a recognized basis for test estimation.; Boundary value estimation (C): Using data from similar past projects is a recognized basis for test estimation.",
            "optionExplanations": {
                "A": "Using data from similar past projects is a recognized basis for test estimation.",
                "B": "Using data from similar past projects is a recognized basis for test estimation.",
                "C": "Using data from similar past projects is a recognized basis for test estimation.",
                "D": "Using data from similar past projects is a recognized basis for test estimation."
            },
            "chapter": 5,
            "section": "5.1",
            "subsection": "5.1.4",
            "learningObjective": "FL-5.1.4",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test estimation",
                "historical data"
            ],
            "examTip": "Past similar work can estimate future effort.",
            "memoryAid": "History informs estimates."
        },
        {
            "id": "Q118",
            "statement": "Which type of test tool is specifically designed to simulate multiple users accessing a system simultaneously to measure response times and throughput?",
            "options": {
                "A": "Test data preparation tool",
                "B": "Test management tool",
                "C": "Static analysis tool",
                "D": "Performance testing tool"
            },
            "correctAnswer": "D",
            "explanation": "Performance testing tools generate load by simulating multiple virtual users accessing the system concurrently. They measure response times, throughput, resource utilization, and help identify performance bottlenecks under various load conditions.",
            "whyWrong": "Test management tools organize and track testing activities, not simulate user load.",
            "optionExplanations": {
                "A": "Test data preparation tools generate and manage test data.",
                "B": "Test management tools manage test cases, plans, and execution tracking.",
                "C": "Static analysis tools analyze source code without execution.",
                "D": "Performance testing tools simulate load and measure system performance characteristics."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "performance testing tool",
                "load testing",
                "virtual users"
            ],
            "examTip": "Performance tools = simulate load, measure response times and throughput.",
            "memoryAid": "Performance tool = many virtual users at once."
        },
        {
            "id": "Q054",
            "statement": "Which of the following is an advantage of checklist-based testing?",
            "options": {
                "C": "It provides systematic coverage based on a predefined list of items to check",
                "D": "It always finds more defects than other techniques",
                "A": "It automatically generates test cases from requirements",
                "B": "It ensures 100% code coverage"
            },
            "correctAnswer": "C",
            "explanation": "Checklist-based testing uses a predefined list of items, scenarios, or conditions to check. It provides systematic coverage of important aspects, is easy to use, and helps ensure consistency across testers. It is a valuable experience-based technique.",
            "whyWrong": "Checklist-based testing does not guarantee finding more defects; no technique does.",
            "optionExplanations": {
                "C": "Checklists provide structured, systematic coverage of key test items.",
                "D": "No test technique guarantees finding more defects than others.",
                "A": "Checklists are manually created, not automatically generated.",
                "B": "Code coverage is a white-box measurement, not related to checklists."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.3",
            "learningObjective": "FL-4.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "checklist-based testing",
                "experience-based",
                "systematic"
            ],
            "examTip": "Checklist-based testing = structured but informal, based on tester experience.",
            "memoryAid": "Checklist = to-do list for testing."
        },
        {
            "id": "Q033",
            "statement": "Which of the following is a benefit of using test tools?",
            "options": {
                "A": "Reduction of repetitive manual work through automation",
                "B": "Elimination of the need for manual testing entirely",
                "C": "Automatic fixing of all defects found during testing",
                "D": "Guaranteed improvement in software quality"
            },
            "correctAnswer": "A",
            "explanation": "Test tools can reduce repetitive manual tasks such as test execution, data generation, and results comparison. This frees testers to focus on more complex testing activities like exploratory testing and test analysis.",
            "whyWrong": "Tools cannot eliminate manual testing; many testing activities require human judgment.",
            "optionExplanations": {
                "A": "Automation of repetitive tasks is a key benefit of test tools.",
                "B": "Manual testing is still needed for exploratory, usability, and ad-hoc testing.",
                "C": "Tools can find defects but cannot automatically fix code defects.",
                "D": "Tools support quality improvement but cannot guarantee it."
            },
            "chapter": 6,
            "section": "6.1",
            "subsection": "6.1",
            "learningObjective": "FL-6.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test tools",
                "automation",
                "benefits"
            ],
            "examTip": "Tools support testing but do not replace testers or guarantee quality.",
            "memoryAid": "Tools = helpers, not replacements."
        },
        {
            "id": "Q343",
            "statement": "Which of the following is a factor that influences the effort required for testing?",
            "options": {
                "A": "The color scheme of the application user interface",
                "B": "The quality of the test basis and the complexity of the product",
                "C": "The personal holidays of the test manager",
                "D": "The office temperature"
            },
            "correctAnswer": "B",
            "explanation": "Testing effort is influenced by factors such as product complexity, quality of the test basis (requirements clarity and completeness), required coverage levels, regulatory requirements, tool support, and team skills. UI colors, personal holidays, and office temperature are not relevant factors.",
            "whyWrong": "Product complexity, test basis quality, and coverage requirements drive test effort.",
            "optionExplanations": {
                "A": "UI colors do not affect testing effort.",
                "B": "Product complexity and test basis quality significantly affect testing effort.",
                "C": "Personal holidays affect availability but not the inherent effort needed.",
                "D": "Office environment does not factor into effort estimation."
            },
            "chapter": 5,
            "section": "5.2",
            "subsection": "5.2.5",
            "learningObjective": "FL-5.1.4",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test effort",
                "product complexity",
                "test basis",
                "effort factors"
            ],
            "examTip": "Complexity, basis quality, and coverage drive effort.",
            "memoryAid": "Complexity + quality = effort."
        }
    ],
    "exam9": [
        {
            "id": "Q294",
            "statement": "Which of the following is a benefit of maintaining traceability between test cases and requirements?",
            "options": {
                "A": "Assessing the completeness of test coverage and supporting change impact analysis",
                "B": "Eliminating the need for regression testing",
                "C": "Automatically generating all test data",
                "D": "Replacing the need for test plans"
            },
            "correctAnswer": "A",
            "explanation": "Traceability supports assessment of test coverage (identifying untested requirements) and enables impact analysis when changes occur. It also provides evidence for audits and supports reporting on testing progress and quality.",
            "whyWrong": "Traceability helps measure coverage and manage change impact; it does not eliminate regression testing or replace planning.",
            "optionExplanations": {
                "A": "Coverage assessment and impact analysis are key benefits of traceability.",
                "B": "Traceability supports regression testing but does not eliminate it.",
                "C": "Test data generation is independent of traceability.",
                "D": "Test plans are separate work products; traceability complements them."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.4",
            "learningObjective": "FL-1.4.4",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "traceability benefits",
                "coverage",
                "impact analysis"
            ],
            "examTip": "Traceability = see what is covered and what breaks when things change.",
            "memoryAid": "Trace = coverage + impact."
        },
        {
            "id": "Q245",
            "statement": "Which activity belongs to test completion?",
            "options": {
                "A": "Approving the product budget",
                "B": "Archiving testware and documenting lessons learned",
                "C": "Creating the first test charter",
                "D": "Compiling the application"
            },
            "correctAnswer": "B",
            "explanation": "Test completion includes collecting and archiving testware, reporting completion information, and recording lessons learned.",
            "whyWrong": "Approving the product budget (A): Code compilation is a development activity, not a testing activity.; Creating the first test charter (C): Software deployment is an operational activity after testing.; Compiling the application (D): Test analysis and design is a core test activity where test conditions and test cases are defined.",
            "optionExplanations": {
                "A": "Test completion includes collecting and archiving testware, reporting complet...",
                "B": "Test completion includes collecting and archiving testware, reporting completion information, and recording lessons learned.",
                "C": "Test completion includes collecting and archiving testware, reporting complet...",
                "D": "Test completion includes collecting and archiving testware, reporting complet..."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.1",
            "learningObjective": "FL-1.4.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "test completion",
                "lessons learned"
            ],
            "examTip": "Completion closes and preserves testing work.",
            "memoryAid": "Finish, archive, learn."
        },
        {
            "id": "Q165",
            "statement": "An organization has testing performed by a team that reports to the project manager but is separate from the development team. What level of independence does this represent?",
            "options": {
                "A": "Testing is independent from the development team but within the same organization",
                "B": "Testing is performed by the developers themselves",
                "C": "Testing is outsourced to an external organization",
                "D": "Testing is performed by business analysts"
            },
            "correctAnswer": "A",
            "explanation": "This represents a medium level of independence where testing is performed by a separate team from development but still within the same organization. Independence helps avoid the author bias where developers may overlook their own defects.",
            "whyWrong": "Outsourcing to an external organization would represent a higher level of independence.",
            "optionExplanations": {
                "A": "A separate test team within the organization provides independence from development.",
                "B": "Developers testing their own code is the lowest level of independence.",
                "C": "External testing represents the highest level of independence.",
                "D": "Business analysts performing testing is not a standard independence level."
            },
            "chapter": 1,
            "section": "1.5",
            "subsection": "1.5.1",
            "learningObjective": "FL-1.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "independence",
                "test organization",
                "testing levels"
            ],
            "examTip": "Independence levels: self-testing < colleague < separate team < external organization.",
            "memoryAid": "More independence = more objectivity, less author bias."
        },
        {
            "id": "Q143",
            "statement": "Which statement correctly differentiates quality assurance from testing?",
            "options": {
                "A": "Quality assurance happens after testing is complete",
                "B": "Quality assurance and testing are interchangeable terms for the same activity",
                "C": "Quality assurance is performed by testers; testing is performed by developers",
                "D": "Quality assurance focuses on process adherence to prevent defects; testing focuses on detecting defects in the product"
            },
            "correctAnswer": "D",
            "explanation": "Quality assurance (QA) is a process-oriented activity that focuses on establishing and following processes to prevent defects from being introduced. Testing is a product-oriented activity that detects defects in the software. QA is proactive (prevention), testing is reactive (detection).",
            "whyWrong": "Both QA and testing involve multiple roles; QA is not exclusive to testers nor is testing exclusive to developers.",
            "optionExplanations": {
                "A": "QA activities occur throughout the development lifecycle, not after testing.",
                "B": "They are distinct but complementary activities with different goals.",
                "C": "Both QA and testing involve various stakeholders including developers and testers.",
                "D": "QA prevents defects through process improvement; testing detects defects through execution."
            },
            "chapter": 1,
            "section": "1.2",
            "subsection": "1.2.1",
            "learningObjective": "FL-1.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "quality assurance",
                "testing",
                "prevention",
                "detection"
            ],
            "examTip": "QA = process-oriented, defect prevention. Testing = product-oriented, defect detection.",
            "memoryAid": "QA = Quality process; Testing = Product check."
        },
        {
            "id": "Q002",
            "statement": "Which of the following best describes the difference between debugging and testing?",
            "options": {
                "A": "Debugging and testing are the same activity with different names",
                "B": "Testing is done after debugging is complete",
                "C": "Testing finds defects; debugging locates and fixes the cause of those defects",
                "D": "Debugging is performed by testers; testing is performed by developers"
            },
            "correctAnswer": "C",
            "explanation": "Testing is the process of finding defects through systematic execution of test cases. Debugging is the development activity that identifies the root cause of a known defect and fixes it. These are distinct activities with different goals.",
            "whyWrong": "Debugging is performed by developers, not testers, and testing can reveal defects that developers then debug.",
            "optionExplanations": {
                "A": "They are fundamentally different activities with different objectives.",
                "B": "Testing often triggers the need for debugging, but they can overlap in time.",
                "C": "Testing reveals failures; debugging analyzes root causes and removes defects.",
                "D": "Developers debug; testers test. These roles are distinct."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1.2",
            "learningObjective": "FL-1.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "testing",
                "debugging",
                "defects"
            ],
            "examTip": "Testing finds defects; debugging fixes them. These are complementary but distinct.",
            "memoryAid": "Testing = detection; Debugging = correction."
        },
        {
            "id": "Q005",
            "statement": "Which of the following is a test activity within the test process?",
            "options": {
                "A": "Code compilation",
                "B": "Requirements gathering",
                "C": "Software deployment",
                "D": "Test analysis and design"
            },
            "correctAnswer": "D",
            "explanation": "The test process includes six main activities: test planning, test monitoring and control, test analysis, test design, test implementation, test execution, and test completion. Test analysis and design is the activity where test conditions are identified and test cases are designed.",
            "whyWrong": "Code compilation is a development activity, not part of the test process.",
            "optionExplanations": {
                "A": "Code compilation is a development activity, not a testing activity.",
                "B": "Requirements gathering is part of the requirements engineering process.",
                "C": "Software deployment is an operational activity after testing.",
                "D": "Test analysis and design is a core test activity where test conditions and test cases are defined."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.1",
            "learningObjective": "FL-1.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test activities",
                "test process",
                "test analysis",
                "test design"
            ],
            "examTip": "Remember the six test activities: Planning, Monitoring & Control, Analysis, Design, Implementation, Execution, Completion.",
            "memoryAid": "PMaADIEC: Plan, Monitor, Analysis, Design, Implement, Execute, Complete."
        },
        {
            "id": "Q322",
            "statement": "A login system has the following business rules: (1) If the account is locked, access is denied regardless of credentials. (2) If the account is not locked and credentials are valid, access is granted. (3) If the account is not locked and credentials are invalid, access is denied. How many unique test cases are needed for a complete decision table?",
            "options": {
                "A": "2",
                "B": "4",
                "C": "3",
                "D": "6"
            },
            "correctAnswer": "B",
            "explanation": "There are 2 conditions (Account Locked: yes/no; Credentials Valid: yes/no). A complete decision table requires 2^2 = 4 test cases. The collapsed table has 3 unique outcomes (rule 1 applies regardless of credentials), but the table still has 4 rows to cover all combinations.",
            "whyWrong": "Two conditions = 4 test cases even with collapsed rules.",
            "optionExplanations": {
                "A": "2 does not cover all condition combinations.",
                "B": "Two conditions = 2^2 = 4 test cases.",
                "C": "3 rules but 4 condition combinations exist.",
                "D": "6 would be needed for a different condition count or extended entry."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.3",
            "learningObjective": "FL-4.2.3",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "decision table",
                "login",
                "access control",
                "test design"
            ],
            "examTip": "Two binary conditions = 4 test cases.",
            "memoryAid": "2 conditions = 4 rows."
        },
        {
            "id": "Q296",
            "statement": "A tester reviews requirements and identifies several ambiguities and missing edge cases before development begins. Which aspect of the tester\\'s mindset is most clearly demonstrated?",
            "options": {
                "A": "Critical thinking and attention to detail",
                "B": "Driving development decisions unilaterally",
                "C": "Assuming the requirements are always correct",
                "D": "Avoiding communication with stakeholders"
            },
            "correctAnswer": "A",
            "explanation": "The tester\\'s mindset includes analytical thinking, skepticism, and attention to detail. Reviewing requirements critically to find ambiguities before they become defects is a hallmark of effective testing. Good testers question assumptions and seek to understand edge cases.",
            "whyWrong": "Critical thinking and constructive skepticism are key elements of the testing mindset.",
            "optionExplanations": {
                "A": "Critical thinking and attention to detail are essential testing mindset traits.",
                "B": "Testers inform decisions but do not drive them unilaterally.",
                "C": "A good tester questions assumptions rather than accepting them.",
                "D": "Communication with stakeholders is vital for effective testing."
            },
            "chapter": 1,
            "section": "1.5",
            "subsection": "1.5.2",
            "learningObjective": "FL-1.5.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "critical thinking",
                "test mindset",
                "analytical thinking"
            ],
            "examTip": "Testers think critically and question assumptions.",
            "memoryAid": "Question everything, constructively."
        },
        {
            "id": "Q295",
            "statement": "A developer who is asked to test their own code focuses on confirming that the code works correctly rather than trying to find problems. This illustrates:",
            "options": {
                "A": "The importance of independent testing at all levels",
                "B": "The pesticide paradox in software testing",
                "C": "The difference between the development mindset and the testing mindset",
                "D": "The need for exhaustive testing"
            },
            "correctAnswer": "C",
            "explanation": "Developers naturally have a confirmation or constructive mindset focused on building solutions. Testing requires a critical, analytical mindset focused on finding problems. This difference in mindset is why independent testing and separate test roles add value.",
            "whyWrong": "The scenario illustrates confirmation bias (development mindset) vs. critical thinking (testing mindset).",
            "optionExplanations": {
                "A": "Independent testing is a practice, not the mindset difference itself.",
                "B": "The pesticide paradox concerns test effectiveness over time, not mindset.",
                "C": "The development mindset seeks to confirm; the testing mindset seeks to find problems.",
                "D": "Exhaustive testing is impossible and unrelated to mindset."
            },
            "chapter": 1,
            "section": "1.5",
            "subsection": "1.5.2",
            "learningObjective": "FL-1.5.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test mindset",
                "development mindset",
                "confirmation bias",
                "psychology of testing"
            ],
            "examTip": "Development mindset = build and confirm; Test mindset = find and critique.",
            "memoryAid": "Builder vs. Inspector."
        },
        {
            "id": "Q062",
            "statement": "Which of the following best describes independence in testing?",
            "options": {
                "A": "Testing performed automatically without human intervention",
                "B": "Testing performed by the developer who wrote the code",
                "C": "Testing without any test documentation",
                "D": "Testing performed by someone other than the author of the code being tested"
            },
            "correctAnswer": "D",
            "explanation": "Independence in testing means the testing activities are performed by people who are not the authors of the work product being tested. Different levels of independence exist, from testing by the developer's colleague to testing by an external organization.",
            "whyWrong": "Testing by the original developer lacks independence, which can lead to blind spots.",
            "optionExplanations": {
                "A": "This is the opposite of independence.",
                "B": "Automation is a separate concept from independence.",
                "C": "Independence is about who tests, not about documentation.",
                "D": "Independence means the tester is separate from the developer of the item being tested."
            },
            "chapter": 1,
            "section": "1.5",
            "subsection": "1.5.1",
            "learningObjective": "FL-1.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "independence",
                "testing roles",
                "objectivity"
            ],
            "examTip": "Independence = different person, different perspective, fewer blind spots.",
            "memoryAid": "Independence = fresh eyes on the code."
        },
        {
            "id": "Q290",
            "statement": "During which test activity are test cases organized into test procedures and test environment preparation is completed?",
            "options": {
                "D": "Test analysis",
                "A": "Test implementation",
                "B": "Test execution",
                "C": "Test completion"
            },
            "correctAnswer": "A",
            "explanation": "Test implementation is the activity where test cases are organized into test suites and test procedures, test data is prepared, automated scripts are created or updated, and the test environment is verified and ready for execution.",
            "whyWrong": "Organizing test cases and preparing the environment happens during implementation, not analysis or execution.",
            "optionExplanations": {
                "D": "Test analysis identifies test conditions but does not organize them into procedures.",
                "A": "Test implementation creates test procedures, prepares data, and verifies the test environment.",
                "B": "Test execution runs the test procedures and logs results.",
                "C": "Test completion closes activities and reports results."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.2",
            "learningObjective": "FL-1.4.2",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test implementation",
                "test procedures",
                "test environment"
            ],
            "examTip": "Implementation prepares what is needed for execution.",
            "memoryAid": "Implement = organize and prepare."
        },
        {
            "id": "Q104",
            "statement": "Consider the following pseudocode:\\nif (temperature > 100) {\\n    print('DANGER: HIGH TEMPERATURE');\\n    soundAlarm();\\n}\\nif (temperature < 0) {\\n    print('WARNING: LOW TEMPERATURE');\\n}\\nprint('Temperature reading complete.');\\n\\nWhat is the minimum number of test cases needed to achieve 100% statement coverage?",
            "options": {
                "A": "4",
                "B": "1",
                "C": "2",
                "D": "3"
            },
            "correctAnswer": "C",
            "explanation": "There are five statements: print('DANGER...'), soundAlarm(), print('WARNING...'), and print('Temperature...') appears in all paths. To cover both print statements inside the two if blocks, we need Test 1 (temperature > 100, e.g., 150), Test 2 (temperature < 0, e.g., -10), and Test 3 (temperature between 0 and 100, e.g., 50) to ensure the last print executes when neither condition is true.",
            "whyWrong": "One test case can only follow one path and will miss statements in the other branches.",
            "optionExplanations": {
                "A": "Two test cases could miss the normal temperature path where both if conditions are false.",
                "B": "Four is more than the minimum needed.",
                "C": "Three test cases cover: high temp path, low temp path, and normal temp path (all statements).",
                "D": "One test case covers at most one branch, missing other statements."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.1",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K2",
            "difficulty": "Hard",
            "keywords": [
                "statement coverage",
                "white-box",
                "test cases"
            ],
            "examTip": "For independent if statements, you may need a test case where neither condition is true to cover statements after both.",
            "memoryAid": "Statement coverage = every line of code executed at least once."
        },
        {
            "id": "Q123",
            "statement": "Which of the following is a test work product typically produced during test analysis?",
            "options": {
                "B": "Final test summary report",
                "C": "Test conditions derived from requirements",
                "D": "Automated test scripts",
                "A": "Test execution logs"
            },
            "correctAnswer": "C",
            "explanation": "Test analysis is the activity where test conditions are identified. Test conditions are derived from requirements, specifications, and other test bases. They describe what needs to be tested at a high level, before detailed test cases are designed.",
            "whyWrong": "Automated test scripts are created during test implementation, not test analysis.",
            "optionExplanations": {
                "B": "Test summary reports are produced during test completion.",
                "C": "Test analysis identifies test conditions from the test basis.",
                "D": "Test scripts are created during test implementation.",
                "A": "Execution logs are produced during test execution."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.2",
            "learningObjective": "FL-1.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "test analysis",
                "test conditions",
                "test work products"
            ],
            "examTip": "Test analysis = identify WHAT to test (conditions). Test design = define HOW to test (test cases).",
            "memoryAid": "Analysis = what to test; Design = how to test."
        },
        {
            "id": "Q142",
            "statement": "After investigating a series of failures in a banking application, the team determines that all failures trace back to incorrect handling of decimal rounding in currency calculations. What is this an example of?",
            "options": {
                "A": "Failure clustering",
                "B": "Debugging",
                "C": "Dynamic analysis",
                "D": "Root cause analysis"
            },
            "correctAnswer": "D",
            "explanation": "Root cause analysis (RCA) is the process of identifying the underlying cause of defects or failures. In this case, the team traced multiple failures back to a single root cause (incorrect decimal rounding), which allows them to fix the fundamental problem rather than treating individual symptoms.",
            "whyWrong": "Debugging is the process of locating and fixing a known defect, not tracing multiple failures to a common cause.",
            "optionExplanations": {
                "A": "RCA identifies the fundamental reason behind one or more defects to enable permanent correction.",
                "B": "Debugging focuses on locating and fixing one specific defect.",
                "C": "Dynamic analysis involves executing code to analyze behavior.",
                "D": "Failure clustering describes a pattern of failures, not the analysis of their cause."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1.1",
            "learningObjective": "FL-1.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "root cause analysis",
                "banking",
                "defect analysis"
            ],
            "examTip": "Root cause analysis finds the 'why' behind defects to prevent recurrence.",
            "memoryAid": "RCA = keep asking 'why' until you find the source."
        },
        {
            "id": "Q185",
            "statement": "For the code: if (a > 0 OR b < 5) { x = 1; } else { x = 0; } if (c == 10) { y = 2; } else { y = 3; }, what is the minimum number of test cases for 100% branch coverage?",
            "options": {
                "A": "2",
                "B": "3",
                "C": "4",
                "D": "1"
            },
            "correctAnswer": "A",
            "explanation": "There are two decision points. The first if (with OR condition) has two outcomes (true/false). The second if has two outcomes (true/false). To achieve 100% branch coverage: Test 1 (a > 0, c == 10) covers first IF true and second IF true. Test 2 (a > 0, c != 10) covers first IF true and second IF false. Test 3 (a <= 0, b >= 5, any c) covers first IF false. So 3 test cases.",
            "whyWrong": "Two test cases cannot cover all branch outcomes because you need a case where both sides of the OR are false.",
            "optionExplanations": {
                "A": "One test case covers at most 2 branch outcomes.",
                "B": "Two test cases cannot cover the false outcome of the first IF if both have a > 0.",
                "C": "Three test cases cover all 4 branch outcomes.",
                "D": "Four is more than the minimum needed."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.2",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K2",
            "difficulty": "Hard",
            "keywords": [
                "branch coverage",
                "compound conditions",
                "white-box"
            ],
            "examTip": "For branch coverage, test all true/false outcomes of each decision point.",
            "memoryAid": "Branch = both sides of each decision, regardless of condition complexity."
        },
        {
            "id": "Q063",
            "statement": "Which of the following is true about the testing principle 'Testing is context dependent'?",
            "options": {
                "A": "All software should be tested using the same methodology",
                "B": "Different types of software require different testing approaches",
                "C": "Testing context is irrelevant to test design",
                "D": "Testing should always be done in the production environment"
            },
            "correctAnswer": "B",
            "explanation": "The context dependency principle states that testing is performed differently in different contexts. For example, testing for a safety-critical medical system is vastly different from testing an e-commerce website. The approach depends on risks, regulations, and application type.",
            "whyWrong": "Using the same methodology for all software ignores the unique risks and characteristics of each project.",
            "optionExplanations": {
                "A": "Context is fundamental to determining what and how to test.",
                "B": "Context drives the testing approach - no single approach fits all situations.",
                "C": "Each project context demands a tailored testing approach.",
                "D": "Most testing should be done in a controlled test environment."
            },
            "chapter": 1,
            "section": "1.3",
            "subsection": "1.3.1",
            "learningObjective": "FL-1.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "context dependent",
                "testing principles",
                "approach"
            ],
            "examTip": "Context matters: safety-critical, e-commerce, games - each needs a different testing approach.",
            "memoryAid": "Context = one size does NOT fit all."
        },
        {
            "id": "Q006",
            "statement": "What is testware?",
            "options": {
                "D": "A type of malware that affects test environments",
                "A": "Artifacts produced during the test process, such as test plans, test cases, and test scripts",
                "B": "The software being tested",
                "C": "The hardware on which tests are executed"
            },
            "correctAnswer": "A",
            "explanation": "Testware refers to all artifacts produced during the testing process, including test plans, test cases, test scripts, test data, and test reports. These are the work products of testing activities.",
            "whyWrong": "Testware is not hardware or the application under test; it is the collection of testing artifacts and documentation.",
            "optionExplanations": {
                "D": "Testware is unrelated to malware.",
                "A": "Testware encompasses all documents and artifacts created for and during testing.",
                "B": "The software under test is known as the test object or SUT.",
                "C": "The physical hardware is not testware."
            },
            "chapter": 1,
            "section": "1.4",
            "subsection": "1.4.2",
            "learningObjective": "FL-1.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "testware",
                "test artifacts",
                "test documentation"
            ],
            "examTip": "Testware = all test-related documents and artifacts. Think of it as 'software for testing.'",
            "memoryAid": "Testware = test + software (all test artifacts)."
        },
        {
            "id": "Q004",
            "statement": "A test team has been testing the same module for several releases using the same set of test cases. They notice that no new defects are being found. Which testing principle does this scenario illustrate?",
            "options": {
                "C": "Absence-of-errors fallacy",
                "D": "Pesticide paradox",
                "A": "Defect clustering",
                "B": "Testing is context dependent"
            },
            "correctAnswer": "D",
            "explanation": "The pesticide paradox states that if the same tests are repeated over and over, they will eventually stop finding new defects. To find new defects, test cases must be regularly reviewed and updated to cover new or changed functionality.",
            "whyWrong": "Defect clustering refers to the tendency for defects to concentrate in a few modules, not to tests becoming stale.",
            "optionExplanations": {
                "C": "The absence-of-errors fallacy means finding no defects does not mean the system is fit for use.",
                "D": "Repeating the same tests becomes ineffective over time, just as pesticides become ineffective when used repeatedly.",
                "A": "Defect clustering means most defects are found in a small number of modules.",
                "B": "Context dependency means testing approaches differ based on the application type."
            },
            "chapter": 1,
            "section": "1.3",
            "subsection": "1.3.1",
            "learningObjective": "FL-1.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "pesticide paradox",
                "testing principles",
                "test case review"
            ],
            "examTip": "When you see 'same tests, no new defects,' think pesticide paradox.",
            "memoryAid": "Pesticide paradox = stale tests find no new bugs."
        },
        {
            "id": "Q261",
            "statement": "A function contains 12 executable statements and tests execute all 12 at least once. What statement coverage is achieved?",
            "options": {
                "A": "Cannot exceed 90%",
                "B": "100%",
                "C": "12%",
                "D": "50%"
            },
            "correctAnswer": "B",
            "explanation": "Executing all executable statements at least once gives 100% statement coverage.",
            "whyWrong": "Cannot exceed 90% (A): Executing all executable statements at least once gives 100% statement coverage.; 12% (C): Executing all executable statements at least once gives 100% statement coverage.; 50% (D): Executing all executable statements at least once gives 100% statement coverage.",
            "optionExplanations": {
                "A": "Executing all executable statements at least once gives 100% statement coverage.",
                "B": "Executing all executable statements at least once gives 100% statement coverage.",
                "C": "Executing all executable statements at least once gives 100% statement coverage.",
                "D": "Executing all executable statements at least once gives 100% statement coverage."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.1",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "statement coverage",
                "coverage"
            ],
            "examTip": "100% statement coverage does not mean all defects are found — coverage measures code execution, not defect detection.",
            "memoryAid": "100% statement coverage executes all lines but doesn't find all defects."
        },
        {
            "id": "Q019",
            "statement": "A system accepts age values between 1 and 120 inclusive. Using equivalence partitioning, which of the following sets of values would provide the most valid partition coverage?",
            "options": {
                "A": "1, 60, 120",
                "B": "-1, 1, 120",
                "C": "25, 60, 100",
                "D": "0, 50, 121"
            },
            "correctAnswer": "C",
            "explanation": "Equivalence partitioning divides input data into partitions that should be treated equivalently. For ages 1-120, there are three partitions: below valid (0 and below), valid (1-120), and above valid (121+). To test the valid partition, any single value within 1-120 suffices, but using multiple values (25, 60, 100) provides broader coverage of the valid range without redundancy.",
            "whyWrong": "Option D includes the boundary values but equivalence partitioning does not require boundaries - that is boundary value analysis.",
            "optionExplanations": {
                "A": "1 and 120 are boundary values; equivalence partitioning typically uses one representative per partition.",
                "B": "-1 is invalid, 1 is a boundary, 120 is a boundary.",
                "C": "All three values are in the valid partition (1-120), providing good coverage of the valid range.",
                "D": "0 and 121 are boundary values for invalid partitions, but 50 alone covers valid."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.1",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "equivalence partitioning",
                "black-box",
                "input partitions"
            ],
            "examTip": "Pick one representative from each equivalence class. For valid partitions, any value works.",
            "memoryAid": "Equivalence = same behavior = one test is enough per group."
        },
        {
            "id": "Q039",
            "statement": "Which of the following correctly describes the relationship between verification and validation?",
            "options": {
                "D": "Verification is done by developers; validation is done by testers",
                "A": "Verification checks if the product is built correctly; validation checks if the right product is built",
                "B": "Verification and validation are synonyms",
                "C": "Verification occurs after validation"
            },
            "correctAnswer": "A",
            "explanation": "Verification answers the question 'Are we building the product right?' by checking that work products conform to specifications. Validation answers 'Are we building the right product?' by checking that the product meets stakeholder needs.",
            "whyWrong": "Both developers and testers can perform both verification and validation activities.",
            "optionExplanations": {
                "D": "Both roles can perform both types of activities.",
                "A": "Verification confirms specification compliance; validation confirms stakeholder needs are met.",
                "B": "They are distinct but complementary concepts.",
                "C": "Verification typically precedes validation but they often overlap."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1.1",
            "learningObjective": "FL-1.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "verification",
                "validation",
                "quality"
            ],
            "examTip": "Verification = 'Are we building it right?' Validation = 'Are we building the right thing?'",
            "memoryAid": "Verification = check the specs; Validation = check the needs."
        },
        {
            "id": "Q134",
            "statement": "A tester is testing a word processing application. Without predefined test cases, the tester starts by opening various file formats, then tries editing features, and follows interesting paths based on what they discover. Which test technique is being used?",
            "options": {
                "C": "Decision table testing",
                "D": "Exploratory testing",
                "A": "Checklist-based testing",
                "B": "Error guessing"
            },
            "correctAnswer": "D",
            "explanation": "The tester is simultaneously learning the application, designing tests on the fly, and executing them based on observations. This is the defining characteristic of exploratory testing - concurrent test design, execution, and learning.",
            "whyWrong": "Error guessing focuses on predicting defects based on past experience, not on real-time discovery.",
            "optionExplanations": {
                "C": "Decision table testing systematically tests condition combinations.",
                "D": "Concurrent learning, design, and execution is the essence of exploratory testing.",
                "A": "Checklist-based testing follows a predefined list of items to check.",
                "B": "Error guessing uses past experience to target likely defect areas."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.2",
            "learningObjective": "FL-4.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "exploratory testing",
                "concurrent learning",
                "word processing"
            ],
            "examTip": "Simultaneous learning + designing + executing = exploratory testing.",
            "memoryAid": "Exploratory = discover as you go."
        },
        {
            "id": "Q319",
            "statement": "A system accepts an integer discount percentage between 0 and 50 inclusive. Using three-value boundary value analysis, which set of inputs should be tested?",
            "options": {
                "A": "0, 25, 50",
                "B": "-1, 0, 1, 49, 50, 51",
                "C": "0, 50",
                "D": "-1, 0, 50, 51"
            },
            "correctAnswer": "B",
            "explanation": "Three-value BVA tests the values just below, at, and just above each boundary. For the boundary at 0 (lower limit): -1, 0, 1. For the boundary at 50 (upper limit): 49, 50, 51. This gives the full set: -1, 0, 1, 49, 50, 51.",
            "whyWrong": "Three-value BVA requires below, at, and above each boundary for both limits.",
            "optionExplanations": {
                "A": "0 and 50 are boundary values but missing the values just outside.",
                "B": "-1, 0, 1 cover the lower boundary; 49, 50, 51 cover the upper boundary.",
                "C": "Only two values miss the adjacent boundary values needed for BVA.",
                "D": "Missing 1 and 49 which are just above/below the boundaries respectively."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.2",
            "learningObjective": "FL-4.2.2",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "boundary value analysis",
                "three-value BVA",
                "integer range"
            ],
            "examTip": "Three-value BVA: below, on, above each boundary.",
            "memoryAid": "BVA = 3 around each edge."
        },
        {
            "id": "Q107",
            "statement": "A tester is given 90 minutes to test a new feature without any predefined test cases. The tester takes notes on areas explored, defects found, and coverage achieved during the session. Which approach is being used?",
            "options": {
                "A": "Checklist-based testing",
                "B": "Regression testing",
                "C": "Session-based exploratory testing",
                "D": "Ad-hoc testing without documentation"
            },
            "correctAnswer": "C",
            "explanation": "Session-based exploratory testing is a structured approach to exploratory testing where testers work in time-boxed sessions (typically 60-120 minutes), with specific charters, and document their findings, coverage, and issues discovered. It combines the flexibility of exploratory testing with some structure and documentation.",
            "whyWrong": "The session is documented with notes and charter, so it is not ad-hoc testing without documentation.",
            "optionExplanations": {
                "A": "Checklist-based testing follows a predefined checklist, not exploratory testing.",
                "B": "Regression testing checks existing functionality, not new features.",
                "C": "Session-based exploratory testing uses time-boxed sessions with charters and documentation.",
                "D": "Ad-hoc testing lacks the structure of time-boxed sessions and charters."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.2",
            "learningObjective": "FL-4.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "exploratory testing",
                "session-based",
                "time-boxed"
            ],
            "examTip": "Session-based exploratory testing = structured exploration with time-boxing and documentation.",
            "memoryAid": "Session-based = explorer with a map and a time limit."
        },
        {
            "id": "Q080",
            "statement": "What is the main benefit of early involvement of testers in the software development lifecycle?",
            "options": {
                "D": "Testers can write all the production code",
                "A": "Developers do not need to perform unit testing",
                "B": "Defects are detected earlier when they are less expensive to fix",
                "C": "Testing can be completely avoided"
            },
            "correctAnswer": "B",
            "explanation": "Early tester involvement (the 'early testing' principle) allows defects to be found in requirements, design, and early code stages. The cost of fixing a defect increases exponentially the later it is found, so early detection saves significant time and money.",
            "whyWrong": "Testers do not write production code; that is the developer's role.",
            "optionExplanations": {
                "D": "Developers write production code; testers focus on quality activities.",
                "A": "Unit testing by developers remains important regardless of tester involvement.",
                "B": "Early defect detection significantly reduces the cost of fixing defects.",
                "C": "Testing cannot be avoided; early testing complements later testing activities."
            },
            "chapter": 1,
            "section": "1.2",
            "subsection": "1.2.1",
            "learningObjective": "FL-1.2.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "early testing",
                "cost of defects",
                "tester involvement"
            ],
            "examTip": "The earlier a defect is found, the cheaper it is to fix. This is a key economic argument for early testing.",
            "memoryAid": "Early catch = cheap fix; Late catch = expensive fix."
        },
        {
            "id": "Q078",
            "statement": "A team is using a tool that measures the percentage of decision outcomes exercised during testing. What type of coverage is being measured?",
            "options": {
                "A": "State coverage",
                "B": "Branch coverage",
                "C": "Statement coverage",
                "D": "Requirement coverage"
            },
            "correctAnswer": "B",
            "explanation": "Branch coverage (also called decision coverage) measures the percentage of decision outcomes (true/false branches) that have been exercised during testing. It is a white-box coverage metric that ensures each possible decision outcome has been tested.",
            "whyWrong": "Statement coverage measures executable statements, not decision outcomes.",
            "optionExplanations": {
                "A": "State coverage = percentage of states visited in a state machine.",
                "B": "Branch coverage = percentage of decision outcomes (true/false) exercised.",
                "C": "Statement coverage = percentage of executable statements executed.",
                "D": "Requirement coverage = percentage of requirements tested."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.2",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "branch coverage",
                "decision coverage",
                "white-box"
            ],
            "examTip": "Branch coverage = decision outcomes (yes/no of each if statement).",
            "memoryAid": "Branch = both sides of the fork in the road."
        },
        {
            "id": "Q219",
            "statement": "A password length rule allows 8 to 20 characters inclusive. Which values best support three-value boundary value analysis?",
            "options": {
                "A": "8, 14, 20",
                "B": "1, 2, 3, 4, 5, 6",
                "C": "0, 10, 30, 40",
                "D": "7, 8, 9, 19, 20, 21"
            },
            "correctAnswer": "D",
            "explanation": "Three-value BVA uses below, on, and above each boundary: 7, 8, 9 around the lower boundary and 19, 20, 21 around the upper boundary.",
            "whyWrong": "8, 14, 20 (A): Three-value BVA uses below, on, and above each boundary: 7, 8, 9 around the l...; 1, 2, 3, 4, 5, 6 (B): Three-value BVA uses below, on, and above each boundary: 7, 8, 9 around the l...; 0, 10, 30, 40 (C): Three-value BVA uses below, on, and above each boundary: 7, 8, 9 around the l...",
            "optionExplanations": {
                "A": "Three-value BVA uses below, on, and above each boundary: 7, 8, 9 around the l...",
                "B": "Three-value BVA uses below, on, and above each boundary: 7, 8, 9 around the l...",
                "C": "Three-value BVA uses below, on, and above each boundary: 7, 8, 9 around the l...",
                "D": "Three-value BVA uses below, on, and above each boundary: 7, 8, 9 around the lower boundary and 19, 20, 21 around the upper boundary."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.2",
            "learningObjective": "FL-4.2.2",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "boundary value analysis",
                "three-value BVA"
            ],
            "examTip": "Below, on, above each boundary.",
            "memoryAid": "BOA at both ends."
        },
        {
            "id": "Q162",
            "statement": "A developer makes a mistake while writing code, resulting in an incorrect calculation in the payroll module. When the incorrect code executes with specific input values, the system produces wrong salary amounts. Which sequence correctly describes this scenario?",
            "options": {
                "A": "Error -> Defect -> Failure",
                "B": "Error -> Failure -> Defect",
                "C": "Failure -> Error -> Defect",
                "D": "Defect -> Error -> Failure"
            },
            "correctAnswer": "A",
            "explanation": "The correct sequence is: a human error (mistake) introduces a defect (fault) in the code, and when the defective code is executed under specific conditions, a failure (observable incorrect behavior) occurs. In this scenario: the developer's mistake is the error, the incorrect calculation code is the defect, and the wrong salary is the failure.",
            "whyWrong": "The error comes first (human mistake), not the defect.",
            "optionExplanations": {
                "A": "Error (mistake) leads to Defect (in code) which leads to Failure (observable behavior).",
                "B": "The failure is the observable outcome, not the initial cause.",
                "C": "The error precedes the defect; the mistake causes the coding error.",
                "D": "The failure occurs after execution, not before the defect."
            },
            "chapter": 1,
            "section": "1.1",
            "subsection": "1.1.1",
            "learningObjective": "FL-1.1.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "error",
                "defect",
                "failure",
                "sequence"
            ],
            "examTip": "Remember the order: Human Error -> Code Defect -> Runtime Failure.",
            "memoryAid": "Error (person) -> Defect (code) -> Failure (behavior)."
        },
        {
            "id": "Q066",
            "statement": "A system calculates discounts based on customer type (Regular, Premium, VIP) and purchase amount (>= $100). Using equivalence partitioning, which of the following input combinations should be tested?",
            "options": {
                "A": "Regular with $150, Premium with $150, VIP with $150",
                "B": "Regular with $100, Premium with $100, VIP with $100",
                "C": "Regular with $50, Regular with $150, Premium with $50, Premium with $150, VIP with $50, VIP with $150",
                "D": "Regular with $50, Premium with $150, VIP with $200"
            },
            "correctAnswer": "C",
            "explanation": "There are two conditions: customer type (3 values) and purchase amount relative to $100 (2 partitions: below $100 and >= $100). The Cartesian product gives 3 x 2 = 6 combinations to test all partitions thoroughly.",
            "whyWrong": "Testing only the boundary condition fails to cover the customer type variations comprehensively.",
            "optionExplanations": {
                "A": "Only tests the >= $100 partition; misses the below $100 partition.",
                "B": "Only tests >= $100; misses below $100 and the boundary.",
                "C": "All 6 combinations of customer type (3) and amount partition (2) are covered.",
                "D": "Incomplete coverage - only one value per customer type with mixed amount conditions."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.1",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "equivalence partitioning",
                "combinations",
                "discount calculation"
            ],
            "examTip": "When multiple conditions exist, consider combining partitions from each condition.",
            "memoryAid": "Multiple conditions = multiple partitions = more test combinations."
        },
        {
            "id": "Q999",
            "statement": "Which of the following is a key characteristic of pairwise testing?",
            "options": {
                "A": "It tests all possible combinations of input parameters",
                "B": "It tests all pairs of parameter values to reduce the number of test cases while maintaining effective defect detection",
                "C": "It focuses exclusively on boundary values of input parameters",
                "D": "It requires testing every parameter with every other parameter at least three times"
            },
            "correctAnswer": "B",
            "explanation": "Pairwise testing (also called all-pairs testing) is a combinatorial test design technique that tests all possible discrete combinations of each pair of input parameters. This reduces the number of test cases dramatically while still providing effective defect detection.",
            "whyWrong": "Pairwise testing covers pairs, not all combinations.",
            "optionExplanations": {
                "A": "Testing all combinations would be exhaustive.",
                "B": "Correct - pairwise testing covers all pairs of parameter values.",
                "C": "Boundary value analysis is a separate technique.",
                "D": "Exactly one test per pair is sufficient."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.7",
            "learningObjective": "FL-4.1.1",
            "kLevel": "K1",
            "difficulty": "Medium",
            "keywords": [
                "pairwise testing",
                "all-pairs testing",
                "combinatorial testing"
            ],
            "examTip": "Pairwise covers all pairs, not all combinations.",
            "memoryAid": "Pairs, not all combinations."
        },
        {
            "id": "Q258",
            "statement": "A numeric input accepts valid values 10 through 30 inclusive. Which values represent invalid equivalence partitions on both sides?",
            "options": {
                "A": "11 and 29",
                "B": "20 and 21",
                "C": "9 and 31",
                "D": "10 and 30"
            },
            "correctAnswer": "C",
            "explanation": "Values below 10 and above 30 are in the two invalid partitions outside the valid range.",
            "whyWrong": "11 and 29 (A): Values below 10 and above 30 are in the two invalid partitions outside the va...; 20 and 21 (B): Values below 10 and above 30 are in the two invalid partitions outside the va...; 10 and 30 (D): Values below 10 and above 30 are in the two invalid partitions outside the va...",
            "optionExplanations": {
                "A": "Values below 10 and above 30 are in the two invalid partitions outside the va...",
                "B": "Values below 10 and above 30 are in the two invalid partitions outside the va...",
                "C": "Values below 10 and above 30 are in the two invalid partitions outside the valid range.",
                "D": "Values below 10 and above 30 are in the two invalid partitions outside the va..."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.1",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "equivalence partitioning",
                "invalid partitions"
            ],
            "examTip": "Outside each end gives invalid partitions.",
            "memoryAid": "Below and above."
        },
        {
            "id": "Q328",
            "statement": "Given the code: if (x > 0) { print(\"Positive\"); } else { print(\"Non-positive\"); } print(\"Done\"); A test with x = 5 achieves 100% statement coverage but only 50% decision coverage. Which additional test is needed for 100% decision coverage?",
            "options": {
                "A": "x = -1",
                "B": "x = 0",
                "C": "x = 10",
                "D": "No additional test is needed"
            },
            "correctAnswer": "A",
            "explanation": "With x = 5, the true branch is executed (prints \\'Positive\\'), covering statements 1 and 3. However, the false branch (else) has not been exercised. To achieve 100% decision coverage, the false outcome must also be tested. x = -1 exercises the false branch (prints \\'Non-positive\\').",
            "whyWrong": "Decision coverage requires both branches of the IF statement to be executed.",
            "optionExplanations": {
                "A": "x = -1 executes the else branch, covering the false outcome.",
                "B": "x = 0 also triggers the else (0 is not > 0), but -1 is clearer.",
                "C": "x = 10 also exercises the true branch only.",
                "D": "The false branch has not been exercised yet."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.2",
            "learningObjective": "FL-4.3.2",
            "kLevel": "K2",
            "difficulty": "Hard",
            "keywords": [
                "decision coverage",
                "branch testing",
                "conditional logic"
            ],
            "examTip": "Decision coverage = test both branches.",
            "memoryAid": "Test both sides of every IF."
        },
        {
            "id": "Q181",
            "statement": "A loan system has two conditions: Credit Score (>= 700 is good) and Employment Status (Employed or Unemployed). A loan is approved only if both conditions are favorable. How many test cases are needed for a complete decision table?",
            "options": {
                "A": "2",
                "B": "8",
                "C": "3",
                "D": "4"
            },
            "correctAnswer": "D",
            "explanation": "With two conditions, there are 2^2 = 4 possible combinations: (Good, Employed) = Approved, (Good, Unemployed) = Not Approved, (Below 700, Employed) = Not Approved, (Below 700, Unemployed) = Not Approved. The complete decision table has 4 columns.",
            "whyWrong": "The number of test cases for a complete decision table with 2 conditions is 2^2 = 4.",
            "optionExplanations": {
                "A": "2 is insufficient to cover all condition combinations.",
                "B": "8 would be for 3 conditions (2^3).",
                "C": "3 would miss one combination of the four possibilities.",
                "D": "2 conditions x 2 values each = 4 combinations in the complete decision table."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.3",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "decision table",
                "loan approval",
                "conditions"
            ],
            "examTip": "Number of test cases = 2^(number of conditions) for full decision table.",
            "memoryAid": "n conditions = 2^n test cases."
        },
        {
            "id": "Q998",
            "statement": "In the context of pairwise testing, what is the minimum number of test cases needed to cover all pairs of values for three parameters each having two possible values?",
            "options": {
                "A": "8",
                "B": "4",
                "C": "2",
                "D": "6"
            },
            "correctAnswer": "B",
            "explanation": "For three parameters each with two values (2x2x2 = 8 full combinations), pairwise testing reduces this to 4 test cases.",
            "whyWrong": "Pairwise reduces the 8 full combinations to 4 test cases.",
            "optionExplanations": {
                "A": "8 would be exhaustive (all combinations), not pairwise.",
                "B": "Correct - 4 test cases cover all pairs for 3 parameters x 2 values.",
                "C": "2 is too few to cover all pairs.",
                "D": "6 is more than necessary."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.7",
            "learningObjective": "FL-4.1.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "pairwise testing",
                "test case reduction"
            ],
            "examTip": "Pairwise dramatically reduces test cases vs. exhaustive.",
            "memoryAid": "Pairs reduce: 3x2 values = 4 tests."
        },
        {
            "id": "Q103",
            "statement": "Which of the following is a white-box test technique?",
            "options": {
                "A": "Decision table testing",
                "B": "State transition testing",
                "C": "Branch testing",
                "D": "Equivalence partitioning"
            },
            "correctAnswer": "C",
            "explanation": "Branch testing is a white-box technique that tests decision outcomes in the source code. It requires knowledge of the internal code structure to design test cases that exercise all possible branches.",
            "whyWrong": "Equivalence partitioning, decision table testing, and state transition testing are all black-box techniques.",
            "optionExplanations": {
                "A": "Decision table testing is a black-box technique based on business logic.",
                "B": "State transition testing is a black-box technique based on system states.",
                "C": "Branch testing requires knowledge of code structure (white-box).",
                "D": "Equivalence partitioning is a black-box technique based on specifications."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.1",
            "learningObjective": "FL-4.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "white-box",
                "branch testing",
                "code structure"
            ],
            "examTip": "White-box = code-based. Black-box = specification-based.",
            "memoryAid": "White-box = transparent (can see the code)."
        },
        {
            "id": "Q101",
            "statement": "A decision table has 6 conditions, each with boolean values. Using the classical approach, how many test cases would the complete decision table contain?",
            "options": {
                "A": "6",
                "B": "32",
                "C": "12",
                "D": "64"
            },
            "correctAnswer": "D",
            "explanation": "For a decision table with n boolean conditions, the complete table contains 2^n columns (test cases). With 6 conditions, this is 2^6 = 64 test cases. In practice, many of these combinations may be impossible or redundant, allowing the table to be collapsed.",
            "whyWrong": "12 would be 6x2, which is not the formula for boolean combinations.",
            "optionExplanations": {
                "A": "6 is just the number of conditions, not the number of test cases.",
                "B": "32 = 2^5, which would be for 5 conditions.",
                "C": "12 = 6x2, which is not how condition combinations work.",
                "D": "2^6 = 64 combinations of six boolean conditions."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.3",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Medium",
            "keywords": [
                "decision table",
                "conditions",
                "combinations"
            ],
            "examTip": "n conditions = 2^n columns in a complete decision table.",
            "memoryAid": "n boolean conditions = 2^n test case columns."
        },
        {
            "id": "Q220",
            "statement": "A fare system charges child fare for ages 0-11, youth fare for 12-17, adult fare for 18-64, and senior fare for 65+. Which set has one representative from each valid equivalence partition?",
            "options": {
                "A": "5, 15, 40, 70",
                "B": "11, 12, 17, 18",
                "C": "0, 1, 2, 3",
                "D": "64, 65, 66, 67"
            },
            "correctAnswer": "A",
            "explanation": "Equivalence partitioning selects representative values from each partition expected to be treated similarly.",
            "whyWrong": "11, 12, 17, 18 (B): Equivalence partitioning selects representative values from each partition ex...; 0, 1, 2, 3 (C): Equivalence partitioning selects representative values from each partition ex...; 64, 65, 66, 67 (D): Equivalence partitioning selects representative values from each partition ex...",
            "optionExplanations": {
                "A": "Equivalence partitioning selects representative values from each partition expected to be treated similarly.",
                "B": "Equivalence partitioning selects representative values from each partition ex...",
                "C": "Equivalence partitioning selects representative values from each partition ex...",
                "D": "Equivalence partitioning selects representative values from each partition ex..."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.1",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "equivalence partitioning",
                "age ranges"
            ],
            "examTip": "Pick one from each class, not only boundaries.",
            "memoryAid": "One sample per partition."
        },
        {
            "id": "Q188",
            "statement": "A tester is testing a new feature with no documentation available. The tester starts by learning the feature through hands-on use, then designs and executes tests based on discoveries. Which technique is being applied?",
            "options": {
                "A": "Equivalence partitioning",
                "B": "Decision table testing",
                "C": "State transition testing",
                "D": "Exploratory testing"
            },
            "correctAnswer": "D",
            "explanation": "Exploratory testing is characterized by concurrent learning, test design, and test execution. When documentation is unavailable, exploratory testing is particularly valuable because testers can learn the application through direct interaction and adapt their testing based on what they discover.",
            "whyWrong": "Decision table testing requires documented business rules and conditions.",
            "optionExplanations": {
                "A": "Equivalence partitioning requires knowledge of input ranges and partitions.",
                "B": "Decision table testing requires defined conditions from specifications.",
                "C": "State transition testing requires a known state model.",
                "D": "Exploratory testing is ideal when documentation is limited or unavailable."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.2",
            "learningObjective": "FL-4.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "exploratory testing",
                "no documentation",
                "learning"
            ],
            "examTip": "No docs? No problem - exploratory testing works without predefined scripts.",
            "memoryAid": "No docs = explore and discover."
        },
        {
            "id": "Q262",
            "statement": "A test suite executes every statement but never takes the false outcome of one decision. Which coverage is not yet complete?",
            "options": {
                "A": "Use case coverage",
                "B": "Review coverage",
                "C": "Branch coverage",
                "D": "Statement coverage"
            },
            "correctAnswer": "C",
            "explanation": "Complete statement coverage does not guarantee complete branch coverage; every decision outcome must be covered for branch coverage.",
            "whyWrong": "Complete statement coverage means every executable line has been executed, but this does not guarantee complete branch coverage. Branch coverage additionally requires that each decision outcome (true/false) is exercised.",
            "optionExplanations": {
                "A": "Complete statement coverage does not guarantee complete branch coverage; ever...",
                "B": "Complete statement coverage does not guarantee complete branch coverage; ever...",
                "C": "Complete statement coverage does not guarantee complete branch coverage; every decision outcome must be covered for branch coverage.",
                "D": "Complete statement coverage does not guarantee complete branch coverage; ever..."
            },
            "chapter": 4,
            "section": "4.3",
            "subsection": "4.3.2",
            "learningObjective": "FL-4.3.2",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "branch coverage",
                "statement coverage"
            ],
            "examTip": "Statement coverage can miss decision outcomes.",
            "memoryAid": "Branches need each outcome."
        },
        {
            "id": "Q997",
            "statement": "A test manager asks the team to estimate test effort using three-point estimation. Which of the following best describes this approach?",
            "options": {
                "A": "The estimate is based on the average of the best-case and worst-case scenarios",
                "B": "The estimate is computed as a weighted average of optimistic, most likely, and pessimistic estimates",
                "C": "The estimate is always the most pessimistic value to ensure sufficient time is allocated",
                "D": "The estimate is derived by multiplying the number of test cases by a fixed productivity factor"
            },
            "correctAnswer": "B",
            "explanation": "Three-point estimation uses three values: optimistic (O), most likely (M), and pessimistic (P). The expected effort is calculated as (O + 4M + P) / 6 (weighted average).",
            "whyWrong": "Three-point estimation uses a weighted average of three scenarios.",
            "optionExplanations": {
                "A": "A simple average of best and worst cases is not three-point estimation.",
                "B": "Correct - the weighted average (O + 4M + P) / 6 is the formula.",
                "C": "Using only the pessimistic value is not three-point estimation.",
                "D": "Multiplying test cases by a factor is a different technique."
            },
            "chapter": 5,
            "section": "5.3",
            "subsection": "5.3.1",
            "learningObjective": "FL-5.3.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "three-point estimation",
                "test estimation",
                "effort estimation"
            ],
            "examTip": "Formula: (O + 4M + P) / 6.",
            "memoryAid": "O4P: (Optimistic + 4x Most likely + Pessimistic) / 6."
        },
        {
            "id": "Q151",
            "statement": "An insurance company calculates annual premiums based on age groups: 18-25: $800, 26-40: $600, 41-65: $700, 66+: $900. Using equivalence partitioning, which set of values provides coverage of each valid partition?",
            "options": {
                "A": "22, 30, 50, 70",
                "B": "25, 26, 65, 66",
                "C": "17, 25, 41, 66",
                "D": "18, 40, 65, 67"
            },
            "correctAnswer": "A",
            "explanation": "The valid partitions are: 18-25, 26-40, 41-65, and 66+. Option A provides one representative from each partition: 22 (18-25), 30 (26-40), 50 (41-65), and 70 (66+). Each value falls within a distinct valid partition.",
            "whyWrong": "Option C includes 17 which is below the minimum valid age of 18.",
            "optionExplanations": {
                "A": "22, 30, 50, and 70 each represent one of the four valid age partitions.",
                "B": "25, 26, 65, 66 are boundary or near-boundary values.",
                "C": "17 is in an invalid partition (below minimum age requirement).",
                "D": "18 and 40 are boundary values; 67 is valid but 18 is a boundary."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.1",
            "learningObjective": "FL-4.2.1",
            "kLevel": "K3",
            "difficulty": "Hard",
            "keywords": [
                "equivalence partitioning",
                "insurance",
                "premiums"
            ],
            "examTip": "Pick one value from each partition. Any value in the range works for equivalence partitioning.",
            "memoryAid": "One representative per group, any member will do."
        },
        {
            "id": "Q259",
            "statement": "An insurance discount is applied when the customer is over 25, has no claims, and has held a license for at least two years. Which technique best handles the combinations?",
            "options": {
                "A": "State transition testing",
                "B": "Statement coverage",
                "C": "Exploratory testing only",
                "D": "Decision table testing"
            },
            "correctAnswer": "D",
            "explanation": "Decision tables are suitable for combinations of business rule conditions leading to actions.",
            "whyWrong": "Decision tables are suitable for business rule combinations where conditions lead to specific actions. They are not derived from code paths, user stories alone, or state transitions - those require different techniques.",
            "optionExplanations": {
                "A": "Decision tables are suitable for combinations of business rule conditions lea...",
                "B": "Decision tables are suitable for combinations of business rule conditions lea...",
                "C": "Decision tables are suitable for combinations of business rule conditions lea...",
                "D": "Decision tables are suitable for combinations of business rule conditions leading to actions."
            },
            "chapter": 4,
            "section": "4.2",
            "subsection": "4.2.3",
            "learningObjective": "FL-4.2.3",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "decision table",
                "conditions"
            ],
            "examTip": "Several yes/no conditions suggest a decision table.",
            "memoryAid": "Conditions drive actions."
        },
        {
            "id": "Q995",
            "statement": "A defect is found in a rarely used reporting feature that causes incorrect totals. The customer is not expecting a release for another six months. What is the most appropriate classification for this defect?",
            "options": {
                "A": "High severity, high priority",
                "B": "Low severity, high priority",
                "C": "High severity, low priority",
                "D": "Low severity, low priority"
            },
            "correctAnswer": "C",
            "explanation": "High severity because the defect affects data accuracy. Low priority because the feature is rarely used and the next release is six months away.",
            "whyWrong": "Severity depends on impact; priority depends on urgency.",
            "optionExplanations": {
                "A": "The priority is low because there is no urgent need to fix.",
                "B": "The impact on data accuracy makes this high severity, not low severity.",
                "C": "Correct - high severity (significant impact) and low priority (not urgent).",
                "D": "The impact on data accuracy is high severity."
            },
            "chapter": 5,
            "section": "5.6",
            "subsection": "5.6.2",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "severity",
                "priority",
                "defect classification"
            ],
            "examTip": "Think: impact vs. urgency.",
            "memoryAid": "High impact but not urgent = high severity, low priority."
        },
        {
            "id": "Q130",
            "statement": "Which of the following test techniques is classified as experience-based?",
            "options": {
                "A": "Exploratory testing",
                "B": "Decision table testing",
                "C": "Equivalence partitioning",
                "D": "Statement testing"
            },
            "correctAnswer": "A",
            "explanation": "Exploratory testing is an experience-based technique where testers simultaneously learn, design, and execute tests based on their knowledge, intuition, and real-time observations. The other options are specification-based (equivalence partitioning, decision table) or structure-based (statement testing).",
            "whyWrong": "Equivalence partitioning and decision table testing are black-box (specification-based) techniques.",
            "optionExplanations": {
                "A": "Exploratory testing relies on tester experience, intuition, and concurrent learning.",
                "B": "Decision table testing is a black-box (specification-based) technique.",
                "C": "Equivalence partitioning is a black-box (specification-based) technique.",
                "D": "Statement testing is a white-box (structure-based) technique."
            },
            "chapter": 4,
            "section": "4.4",
            "subsection": "4.4.2",
            "learningObjective": "FL-4.4.1",
            "kLevel": "K2",
            "difficulty": "Medium",
            "keywords": [
                "experience-based",
                "exploratory testing",
                "test techniques"
            ],
            "examTip": "Experience-based = exploratory, error guessing, checklist-based.",
            "memoryAid": "Experience-based = tester's knowledge and intuition."
        },
        {
            "id": "Q996",
            "statement": "Which of the following is the primary difference between severity and priority of a defect?",
            "options": {
                "A": "Severity is assigned by the tester, while priority is assigned by the project manager based on business impact",
                "B": "Severity indicates how critical the defect is to the system, while priority indicates how urgently it should be fixed",
                "C": "Severity and priority are interchangeable terms used to describe defect impact",
                "D": "Severity is always high for functional defects, while priority is always high for performance defects"
            },
            "correctAnswer": "B",
            "explanation": "Severity describes the degree of impact a defect has on the system. Priority describes the urgency with which the defect should be fixed.",
            "whyWrong": "Severity and priority are related but distinct concepts.",
            "optionExplanations": {
                "A": "While severity is typically assigned by testers and priority by managers, this is a process observation.",
                "B": "Correct - severity = impact on system, priority = urgency to fix.",
                "C": "They are not interchangeable; a defect can have high severity but low priority.",
                "D": "These generalizations are not always true."
            },
            "chapter": 5,
            "section": "5.6",
            "subsection": "5.6.2",
            "learningObjective": "FL-5.5.1",
            "kLevel": "K1",
            "difficulty": "Easy",
            "keywords": [
                "severity",
                "priority",
                "defect management"
            ],
            "examTip": "Severity = impact level; Priority = fix urgency.",
            "memoryAid": "Severity = Severity of the problem; Priority = when to fix it."
        }
    ]
};

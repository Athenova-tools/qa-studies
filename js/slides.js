window.slidesData = {
    chapter1: {
        title: "Fundamentals of Testing",
        weight: "20%",
        questions: 8,
        sections: [
            {
                id: "1.1",
                title: "What is Testing?",
                kLevel: "K1, K2",
                concepts: [
                    "Software testing comprises static and dynamic activities that evaluate test objects and related work products, find defects, and provide information about quality and risk.",
                    "Testing includes dynamic execution of the test object as well as static activities such as reviews and static analysis; testware supports these activities.",
                    "The primary objectives of testing: finding defects, gaining confidence about quality, providing information for decision-making, and preventing defects.",
                    "Testing and debugging are different: dynamic testing can reveal failures, while static testing can identify defects directly; debugging identifies causes, reproduces and fixes defects, and is followed by confirmation testing.",
                    "Testing can show that defects exist but cannot prove that no defects exist (exhaustive testing is impossible).",
                    "Testing provides information to assess quality, but it does not objectively prove overall software quality or demonstrate the absence of defects.",
                    "Testing activities span the entire software development lifecycle, from requirements review through post-release monitoring.",
                    "Testers analyze test items, design test cases, execute tests, compare actual vs expected results, and report discrepancies."
                ],
                keyTerms: [
                    "Testing: A set of activities that evaluate the quality of a test object and its related work products; activities can be static or dynamic.",
                    "Defect: An imperfection or deficiency in a work product where it does not meet its requirements or specifications",
                    "Quality: The degree to which a component, system, or process meets specified requirements and user needs",
                    "Debugging: The process of locating, analyzing, and fixing the root cause of a known defect",
                    "Test Case: A set of input values, execution preconditions, expected results, and execution postconditions",
                    "Test Object: A work product to be tested, such as a component, system or documentation.",
                    "Verification: Confirming that work products properly reflect the specified requirements",
                    "Validation: Confirming that the system meets the actual needs and expectations of stakeholders"
                ],
                examTips: [
                    "The exam often asks to distinguish testing from debugging: remember testing finds failures, debugging fixes root causes.",
                    "Common trap: 'Testing proves software is correct' is FALSE; testing can reveal the presence, not establish the absence, of defects.",
                    "Questions about testing objectives often include 'preventing defects' as a key objective alongside detection.",
                    "FL-1.1.1 (K1): identify typical test objectives; there is no requirement to quote a single one-sentence definition verbatim.",
                    "FL-1.1.2 (K2): distinguish testing from debugging, including failures found dynamically, defects detected statically, and confirmation testing after fixes."
                ],
                memoryAid: "Testing = evaluate and reveal evidence; debugging = diagnose and fix. Static testing can identify defects without execution; dynamic testing may reveal failures.",
                linkedTo: [
                    { id: "1.2", reason: "Why testing is necessary builds on understanding what testing is" },
                    { id: "1.3", reason: "Testing principles govern how testing is performed" },
                    { id: "2.1", reason: "Testing in SDLC context depends on understanding testing objectives" }
                ]
            },
            {
                id: "1.2",
                title: "Why is Testing Necessary?",
                kLevel: "K1, K2",
                concepts: [
                    "Testing is necessary because humans make mistakes (errors) that can introduce defects in code, requirements, documentation, or other work products.",
                    "A human error may introduce a defect in a work product; when relevant conditions trigger that defect during execution, a failure may occur. Not every defect causes a failure.",
                    "Rigorous testing of critical systems (medical, automotive, aviation) can reduce the risk of failures that could cause significant economic or human costs.",
                    "Testing supports quality control (a product-oriented, corrective approach); quality assurance is process-oriented and preventive. Both contribute to quality.",
                    "Testing provides information to stakeholders about the level of quality, supporting informed release decisions.",
                    "Without testing, organizations risk delivering defective software that damages their reputation, causes legal liability, or incurs high rework costs.",
                    "Testing also fulfills contractual, legal, or regulatory requirements (e.g., safety-critical systems, financial auditing).",
                    "Root cause analysis of defects found during testing helps prevent similar defects in the future.",
                    "Not all failures are caused by errors or defects in work products: adverse environmental conditions can also produce failures."
                ],
                keyTerms: [
                    "Error: A human action that produces an incorrect result (mistake)",
                    "Defect: An imperfection in a work product introduced by an error",
                    "Failure: An actual deviation of the system from its expected delivery, service, or result",
                    "Root Cause: The underlying source of a defect that, if removed, prevents recurrence",
                    "Cost of Quality: The total costs incurred on quality activities (prevention, appraisal, internal/external failure costs)",
                    "Risk: The possibility of a negative or undesirable outcome occurring",
                    "Quality Assurance: Activities focused on providing confidence that quality requirements will be fulfilled"
                ],
                examTips: [
                    "Error -> defect -> possible failure: a defect may cause a failure when executed under triggering conditions, but not every defect causes an observed failure.",
                    "Common trap: a defect is a flaw in a work product; a failure is the deviation in actual behavior or service from the expected one. They are not synonymous.",
                    "Questions about 'why test' often include 'reduce risk of failures' as a key answer.",
                    "FL-1.2.1 (K2): exemplify why testing is necessary; FL-1.2.2 (K1): recall the relationship between testing and QA.",
                    "FL-1.2.3 (K2): distinguish root cause, human error, defect, and failure."
                ],
                memoryAid: "E-D-F: Error (human mistake) can create a Defect (flaw); a Defect may lead to a Failure (observed deviation) when triggered. Root cause explains why the error occurred.",
                linkedTo: [
                    { id: "1.1", reason: "Testing objectives clarify its contribution to quality" },
                    { id: "1.3", reason: "Testing principles explain the limits of detection" },
                    { id: "5.2", reason: "Risk management guides testing priorities" }
                ]
            },
            {
                id: "1.3",
                title: "Testing Principles",
                kLevel: "K2",
                concepts: [
                    "Principle 1 — Testing shows the presence of defects: Testing can show defects exist but cannot prove they do not exist.",
                    "Principle 2 — Exhaustive testing is impossible: Testing everything (all combinations of inputs and preconditions) is not feasible except in trivial cases.",
                    "Principle 3 — Early testing saves time and money: Testing activities should start as early as possible in the SDLC.",
                    "Principle 4 — Defect clustering: A small number of modules typically contains most of the defects found during testing (Pareto principle).",
                    "Principle 5 — Tests wear out: Repeating identical tests tends to find fewer new defects. Modify existing tests and design new ones to discover different defects.",
                    "Principle 6 — Testing is context dependent: Testing is done differently in different contexts (e.g., safety-critical vs e-commerce).",
                    "Principle 7 — Absence-of-defects fallacy: Thoroughly verifying requirements and fixing defects does not guarantee success if the system does not meet user needs and expectations.",
                    "These principles apply across all development lifecycles, test levels, and test types.",
                    "Repeated tests can remain valuable for regression testing even when they have become less effective at discovering new defects."
                ],
                keyTerms: [
                    "Exhaustive Testing: The impractical attempt to test all possible inputs, preconditions, and combinations",
                    "Defect Clustering: The tendency for defects to concentrate in a small number of modules",
                    "Tests Wear Out: Tests repeatedly executed without updating them become less effective at finding new defects.",
                    "Context Dependency: The principle that testing approach varies based on the application domain and risk profile",
                    "Absence-of-Defects Fallacy: The mistaken belief that finding and fixing many defects ensures success even when user needs are unmet.",
                    "Early Testing: The practice of involving testing from the beginning of the SDLC",
                    "Defect clustering (Pareto illustration): A relatively small number of components often contain most of the defects; 80/20 is illustrative, not a universal fixed ratio."
                ],
                examTips: [
                    "ALL seven principles are frequently tested — memorize them by number and by name.",
                    "Common trap: 'Exhaustive testing is possible with automated tools' — FALSE. No tool can test every combination.",
                    "Principle 5 is named 'Tests wear out' in CTFL v4.0.1: unchanged repeated tests tend to find fewer new defects.",
                    "Absence-of-defects fallacy: a product with few detected defects may still fail to satisfy users and business needs.",
                    "FL-1.3.1 (K2): explain and recognize each of the seven principles in realistic testing situations."
                ],
                memoryAid: "7 principles (in syllabus order): Presence, Exhaustive impossible, Early, Defect clustering, Tests wear out, Context-dependent, Absence-of-defects fallacy. Mnemonic: P-E-E-D-T-C-A (Presence, Exhaustive, Early, Defects, Tests, Context, Absence).",
                linkedTo: [
                    { id: "1.1", reason: "Principles guide how testing is performed" },
                    { id: "1.2", reason: "Testing is needed despite inability to prove defect absence" },
                    { id: "4.2", reason: "Black-box techniques help reduce combinatorial explosion" },
                    { id: "5.2", reason: "Risk-based testing and context-aware prioritization" }
                ]
            },
            {
                id: "1.4",
                title: "Test Activities, Testware, and Test Roles",
                kLevel: "K2",
                concepts: [
                    "The seven activity groups are test planning; test monitoring and control; test analysis; test design; test implementation; test execution; and test completion. These activities may overlap, iterate, and run in parallel.",
                    "Test planning: Defining the test objectives, approach, resource requirements, and schedule in a test plan.",
                    "Test monitoring & control: Comparing actual progress against the plan and taking corrective actions as needed.",
                    "Test analysis: Analyzing test basis (requirements, risks) to identify testable features and conditions.",
                    "Test design elaborates test conditions into test cases and other testware, identifies coverage items and test data requirements, and designs the required test environment.",
                    "Test implementation: Assembling testware (test cases, test scripts, test environments) for test execution.",
                    "Test execution: Running test procedures in the specified environment and comparing actual vs expected results.",
                    "Test completion: Collecting data from completed test activities, closing incident reports, and archiving testware.",
                    "Testware comprises work products created during testing, such as test plans, test conditions, test cases, test procedures, test data, test logs, defect reports, and test reports.",
                    "The CTFL distinguishes two principal roles: test management (planning, monitoring, control, completion) and testing (analysis, design, implementation, execution). Responsibilities depend on context and may be shared.",
                    "Context factors (stakeholders, lifecycle, domain, constraints, risks and organizational policies) influence which test activities are performed and how they are tailored.",
                    "Maintain traceability between test basis elements, associated testware, results, defects and risks to evaluate coverage, assess change impact, support audits, and make reports understandable."
                ],
                keyTerms: [
                    "Test Plan: A document describing the scope, approach, resources, and schedule of intended test activities",
                    "Test Basis: The body of knowledge used as the basis for test analysis and design (e.g., requirements, specifications)",
                    "Test Condition: A testable aspect of a component or system identified as a basis for testing",
                    "Test Case: A set of input values, preconditions, expected results, and postconditions for a particular test objective",
                    "Test Procedure: A sequence of actions for the execution of a test (also called test script)",
                    "Test Data: Data that exists before tests are run and that affects or is affected by the test object",
                    "Testware: All artifacts produced during the test process (documents, scripts, data, logs)",
                    "Test Completion: The activity that closes the test process and collects lessons learned",
                    "Test Manager: The person responsible for managing test activities and resources",
                    "Tester: A professional who performs test analysis, design, execution, and reporting",
                    "Traceability: The ability to identify relationships between the test basis, testware, test results and defects."
                ],
                examTips: [
                    "Recognize all seven activity groups, but remember that the activities can be concurrent and iterative rather than strictly sequential.",
                    "Common trap: confusing test analysis (WHAT to test) with test design (HOW to test).",
                    "Testware is tested just like any other work product — it can contain defects too.",
                    "All FL-1.4.1 through FL-1.4.5 learning objectives are K2: activities, process context, testware, traceability, and test roles.",
                    "Know which activity produces which testware, and explain how traceability links requirements or risks to test cases, execution results and defects."
                ],
                memoryAid: "Seven activity groups: Plan -> Monitor & Control -> Analyze -> Design -> Implement -> Execute -> Complete (not a mandatory sequence). Analyze = what to test; Design = how; Traceability = basis <-> cases <-> results/defects.",
                linkedTo: [
                    { id: "1.5", reason: "Effective collaboration and skills support test activities" },
                    { id: "5.1", reason: "Planning includes responsibilities and test processes" },
                    { id: "5.3", reason: "Test monitoring and test control are core test activities" },
                    { id: "5.4", reason: "Configuration management supports traceability and testware" }
                ]
            },
            {
                id: "1.5",
                title: "Essential Skills and Good Practices in Testing",
                kLevel: "K1, K2",
                concepts: [
                    "Testers need a combination of technical, analytical, and interpersonal skills to be effective.",
                    "Key skills for testers: curiosity, attention to detail, critical thinking, domain knowledge, communication, and technical proficiency.",
                    "Testers must communicate effectively with developers, business analysts, product owners, and other stakeholders.",
                    "Good testing practices include cross-functional collaboration, constructive communication, a whole-team approach, and appropriate testing independence. Risk-based approaches and test techniques are addressed elsewhere in the syllabus.",
                    "Independence of testing ranges from testing by the work product author to testing by someone from the same team, a separate organizational team, or an external organization.",
                    "Different levels of independence provide different perspectives and can reveal distinct kinds of defects; greater independence is not automatically better, because it can introduce communication and ownership problems.",
                    "However, developers can also benefit from testing their own code due to their deep understanding of the implementation.",
                    "Whole-team approach: quality is everyone's responsibility, not just the test team's.",
                    "Testers should advocate for quality throughout the project, not just during the testing phase."
                ],
                keyTerms: [
                    "Independence in Testing: Separation of testing activities from development to reduce bias",
                    "Whole-Team Approach: The practice where all team members share responsibility for quality",
                    "Critical Thinking: The objective analysis and evaluation of an issue to form a judgment",
                    "Domain Knowledge: Understanding of the specific application domain being tested",
                    "Test Independence: Levels ranging from test by the author through independent testers at different organizational levels"
                ],
                examTips: [
                    "FL-1.5.1 (K2): identify useful tester skills; FL-1.5.2 (K1): recall advantages of the whole-team approach; FL-1.5.3 (K2): compare benefits and drawbacks of test independence.",
                    "Common trap: 'Developers should never test' — FALSE. Developers can test but independence helps find more defects.",
                    "Independence does not mean isolation — testers must still collaborate with the team."
                ],
                memoryAid: "Skills + team + independence: effective testers combine analytical, technical and communication skills; the whole team owns quality; independence brings fresh perspectives but may weaken collaboration if poorly managed.",
                linkedTo: [
                    { id: "1.4", reason: "Testing roles depend on team capabilities and skills" },
                    { id: "4.4", reason: "Experience-based techniques depend on tester knowledge" },
                    { id: "5.1", reason: "Test planning describes responsibilities and the required independence" }
                ]
            }
        ]
    },
    chapter2: {
        title: "Testing Throughout the SDLC",
        weight: "12.5%",
        questions: 5,
        sections: [
            {
                id: "2.1",
                title: "Testing in the Context of a Software Development Lifecycle (SDLC)",
                kLevel: "K1, K2",
                concepts: [
                    "Testing activities must be integrated into every development lifecycle model, from waterfall to agile.",
                    "In sequential models, review, analysis, and test design can begin early; executable dynamic tests generally occur after relevant code becomes available.",
                    "In iterative models (agile, Scrum), testing is continuous and integrated throughout each iteration/sprint.",
                    "The V-model relates development work products to corresponding test activities and levels; both verification and validation can occur throughout the lifecycle.",
                    "In any lifecycle, early test planning and analysis reduce the cost of defects found later.",
                    "Test levels correspond to development activities at different levels of abstraction (component, integration, system, acceptance).",
                    "Shift-left testing: Performing testing activities earlier in the lifecycle to find defects sooner.",
                    "Operational monitoring and testing in production or production-like environments may complement pre-release tests; shift right is additional industry context, not a separate CTFL v4.0.1 learning objective.",
                    "Good testing requires adaptation to the chosen development lifecycle, not a one-size-fits-all approach.",
                    "Test-first examples: TDD, ATDD and BDD. Their objectives differ; acceptance criteria are central to ATDD.",
                    "DevOps promotes collaboration and CI/CD, enabling faster feedback and automation, but also introduces challenges such as keeping test environments and pipelines reliable.",
                    "Retrospectives support continual improvement by examining completed work, identifying changes to processes and testware, and following up on agreed actions."
                ],
                keyTerms: [
                    "V-Model: A sequential SDLC model that relates development work products to associated test activities and levels.",
                    "Sequential Lifecycle: A development approach where phases are completed one after another",
                    "Iterative Lifecycle: A development approach where development and testing occur in repeated cycles",
                    "Shift-Left: Testing earlier in the lifecycle to reduce cost and time of defect removal",
                    "Shift-Right: Testing in production or production-like environments after deployment",
                    "Verification: Are we building the product right?",
                    "Validation: Are we building the right product?"
                ],
                examTips: [
                    "The V-model is a common exam topic: understand the pairing of development and test phases.",
                    "Common trap: 'Testing only starts after coding' — FALSE. Testing activities (planning, analysis) start from day one.",
                    "Shift left means moving test activities earlier; the syllabus also tests DevOps impacts, test-first approaches, and retrospectives.",
                    "FL-2.1.2 and FL-2.1.3 are K1; FL-2.1.1, FL-2.1.4, FL-2.1.5 and FL-2.1.6 are K2."
                ],
                memoryAid: "SDLC adapts testing; shift-left = earlier feedback; TDD/ATDD/BDD = test-first examples; DevOps = collaboration and CI/CD; retrospective = inspect, improve, follow up. In the V-model, verification and validation are not confined to opposite sides.",
                linkedTo: [
                    { id: "1.4", reason: "Test activities apply across all lifecycles" },
                    { id: "2.2", reason: "Test levels are defined within the lifecycle context" },
                    { id: "1.3", reason: "Principle of early testing relates to shift-left" }
                ]
            },
            {
                id: "2.2",
                title: "Test Levels and Test Types",
                kLevel: "K2",
                concepts: [
                    "CTFL v4.0.1 describes five test levels: component testing, component integration testing, system testing, system integration testing, and acceptance testing.",
                    "Component testing assesses individual components, often in isolation and normally by developers using unit-test frameworks or test harnesses.",
                    "Component integration testing assesses interactions and interfaces between integrated components; system integration testing assesses interfaces with other systems and external services.",
                    "System testing evaluates the behavior and capabilities of the integrated system, including functional and non-functional characteristics.",
                    "Acceptance testing validates business needs and deployment readiness; examples include UAT, operational, contractual and regulatory acceptance, alpha and beta testing.",
                    "CTFL v4.0.1 describes four test types: functional testing, non-functional testing, black-box testing, and white-box testing.",
                    "Functional testing evaluates what the test object should do, including functional completeness, correctness, and appropriateness.",
                    "Non-functional testing evaluates how well a test object behaves against quality characteristics such as performance efficiency, security, usability, and reliability.",
                    "Black-box testing derives tests from specified external behavior, without reference to internal structure.",
                    "White-box testing derives tests from internal structure or processing, such as statement and branch coverage.",
                    "Confirmation testing checks that a specific defect has been fixed; regression testing detects adverse consequences of changes in previously tested software.",
                    "Test types can be applied at different test levels; confirmation and regression testing are addressed separately in syllabus section 2.2.3."
                ],
                keyTerms: [
                    "Component Testing: Testing individual components, also called unit testing",
                    "Component Integration Testing: Testing interactions and interfaces between integrated components",
                    "System Testing: Testing the overall behavior and capabilities of a complete system",
                    "System Integration Testing: Testing a system’s interfaces with other systems and external services",
                    "Acceptance Testing: Testing whether a system meets acceptance criteria and business needs",
                    "Functional Testing: Testing what functions the test object should perform",
                    "Non-Functional Testing: Testing quality characteristics other than functionality",
                    "Black-Box Testing: Testing based on external specifications, without using internal structure",
                    "White-Box Testing: Testing based on internal structure or processing",
                    "Confirmation Testing: Testing to confirm that an identified defect has been fixed",
                    "Regression Testing: Testing to detect adverse effects of a change on previously tested software",
                    "Test Level: A group of test activities organized and managed together for a given development phase",
                    "Test Type: A group of test activities aimed at particular quality characteristics or structures"
                ],
                examTips: [
                    "Five levels in CTFL v4.0.1: component, component integration, system, system integration, acceptance. Do not merge the two integration levels.",
                    "Four test types: functional, non-functional, black-box, white-box. Confirmation and regression are addressed separately in 2.2.3, not as a fifth type.",
                    "Component testing is normally performed by developers, but it is not restricted to developers only.",
                    "Confirmation = verify that a specific fix works; regression = check for adverse effects of a change, including in modified and unchanged areas.",
                    "FL-2.2.1, FL-2.2.2 and FL-2.2.3 are all K2."
                ],
                memoryAid: "5 levels: C-CI-S-SI-A (Component, Component Integration, System, System Integration, Acceptance). 4 types: F-N-B-W (Functional, Non-functional, Black-box, White-box). Confirmation = fix? Regression = side effects?",
                linkedTo: [
                    { id: "2.1", reason: "Test levels map to development phases in lifecycle" },
                    { id: "3.1", reason: "Static testing complements dynamic testing at all levels" },
                    { id: "4.2", reason: "Test techniques are applied across different levels" }
                ]
            },
            {
                id: "2.3",
                title: "Maintenance Testing",
                kLevel: "K2",
                concepts: [
                    "Maintenance testing is performed on a deployed system after changes (modifications, enhancements, patches, or migration).",
                    "Reasons for maintenance: corrective (fixing defects), adaptive (environment changes), perfective (new features), and preventive (proactive improvement).",
                    "Maintenance testing includes testing changes and testing the impact of changes on unchanged parts (regression testing).",
                    "Impact analysis determines the scope of maintenance testing by identifying which parts of the system may be affected.",
                    "Maintenance testing should consider: size/type of change, existing testware reuse, and the risk of changes to existing functionality.",
                    "Specific challenges in maintenance testing: incomplete regression test suites, outdated documentation, and tight schedules.",
                    "Data migration testing validates that data is correctly migrated between systems or versions.",
                    "Retirement can trigger testing of data archiving, restoration and retrieval procedures where long-term retention is required."
                ],
                keyTerms: [
                    "Maintenance Testing: Testing after changes to an operational system",
                    "Impact Analysis: Evaluation of the potential consequences of a change to identify affected areas",
                    "Corrective Maintenance: Fixing defects found after deployment",
                    "Adaptive Maintenance: Adapting the system to changes in the environment",
                    "Perfective Maintenance: Adding new features or improving performance",
                    "Preventive Maintenance: Proactive changes to prevent future defects",
                    "Regression Testing: Testing to verify that unchanged parts still work after changes",
                    "Data Migration: Moving data from one system or format to another",
                    "Retirement Testing: Testing related to decommissioning a system"
                ],
                examTips: [
                    "Maintenance testing is NOT just regression testing — it also includes testing the changes themselves.",
                    "Common trap: 'Maintenance testing only happens after major releases' — FALSE. Maintenance happens for any post-deployment change.",
                    "Impact analysis is key to determining the scope of maintenance testing.",
                    "FL-2.3.1 (K2): summarize maintenance testing, its triggers (modification, migration, retirement), and factors influencing its scope."
                ],
                memoryAid: "Maintenance triggers: M-U-R = Modifications (enhancements and fixes), Upgrades or migrations (platforms and data), Retirement (archiving, restore/retrieval). Test the change AND regression impact; use risk, system size and change size to scope.",
                linkedTo: [
                    { id: "2.2", reason: "Regression testing is a change-related activity discussed in 2.2.3" },
                    { id: "5.2", reason: "Product risk helps determine maintenance test scope" },
                    { id: "1.4", reason: "Archived testware supports future maintenance and reuse" }
                ]
            }
        ]
    },
    chapter3: {
        title: "Static Testing",
        weight: "10%",
        questions: 4,
        sections: [
            {
                id: "3.1",
                title: "Static Testing Basics",
                kLevel: "K1, K2",
                concepts: [
                    "Static testing involves examining work products without executing code (reviews, static analysis, tool-based checking).",
                    "Static testing finds defects in work products such as requirements, design specifications, user stories, code, test cases, and user manuals.",
                    "Static testing can detect defects earlier and more cost-effectively than dynamic testing.",
                    "Benefits of static testing: early defect detection, reduced development costs, improved communication, and identification of ambiguities in requirements.",
                    "Static analysis tools automatically examine code or documentation for potential defects without executing the program.",
                    "Static analysis can find: coding standard violations, syntax errors, security vulnerabilities, interface inconsistencies, and dead code.",
                    "Data flow analysis and control flow analysis are common static analysis techniques for code.",
                    "Static and dynamic testing are complementary: static testing can directly identify defects in work products, while dynamic testing can reveal failures and assess run-time behavior.",
                    "Defects found by static testing: requirements contradictions, gaps, ambiguities, design flaws, coding errors, and test case deficiencies."
                ],
                keyTerms: [
                    "Static Testing: Testing without executing the code (reviews and static analysis)",
                    "Dynamic Testing: Testing that involves execution of the test object",
                    "Static Analysis: Tool-based analysis of code or documentation without execution",
                    "Review: A static test technique where work products are examined by people",
                    "Data Flow Analysis: Static analysis that tracks variable definitions and usage",
                    "Control Flow Analysis: Static analysis that examines program structure for unreachable code or infinite loops",
                    "Dead Code: Code that is never executed during any operation of the system"
                ],
                examTips: [
                    "Distinguish static testing (no execution) from dynamic testing (execution required).",
                    "Common trap: 'Static testing is only for code' — FALSE. It applies to any work product (requirements, docs, test cases).",
                    "Static analysis is TOOL-BASED; reviews are PEOPLE-BASED. Both are forms of static testing.",
                    "FL-3.1.1 is K1 (work products); FL-3.1.2 and FL-3.1.3 are K2 (value of static testing and comparison with dynamic testing)."
                ],
                memoryAid: "Static = examine work products without executing the test object; Dynamic = execute the test object and observe behavior. Static may detect defects early; dynamic may reveal failures at any suitable SDLC stage.",
                linkedTo: [
                    { id: "3.2", reason: "Reviews are the primary manual static technique" },
                    { id: "1.3", reason: "Early testing principle supports static testing benefits" },
                    { id: "4.3", reason: "Static analysis complements white-box testing" }
                ]
            },
            {
                id: "3.2",
                title: "Feedback and Review Process",
                kLevel: "K1, K2",
                concepts: [
                    "Early and frequent stakeholder feedback helps prevent requirement misunderstandings, reduce rework, and align the product with stakeholder needs.",
                    "CTFL v4.0.1 describes five review process activities: planning; review initiation; individual review; communication and analysis; fixing and reporting.",
                    "Planning defines scope, objectives, quality focus, roles, effort, timelines and exit criteria.",
                    "Review initiation ensures participants have the work product, background information, resources, and understanding of their responsibilities.",
                    "In individual review, each reviewer examines the work product and records anomalies, questions and improvement suggestions.",
                    "During communication and analysis, reviewers discuss anomalies, agree on their status and ownership, and determine necessary actions; a review meeting may be used.",
                    "Fixing and reporting means recording defects and corrective actions, verifying exit criteria, and reporting review results.",
                    "Six principal roles: manager (resources/what to review), author (creates and fixes), moderator/facilitator (effective meetings), scribe/recorder (records), reviewer (examines), review leader (overall organization).",
                    "Common review types: informal review, walkthrough (author-led), technical review (moderator-led, technical experts), and inspection (most formal).",
                    "In an inspection, the author must not act as review leader or scribe. The exact degree of formality depends on purpose and context.",
                    "Review success factors include clear objectives, small work-product chunks, sufficient preparation, appropriate participants, management support, training, and constructive communication."
                ],
                keyTerms: [
                    "Review: Examination of a work product to identify anomalies and opportunities for improvement",
                    "Informal Review: Review that does not follow a defined process and requires no formal documented output",
                    "Walkthrough: A review led by the author of the work product",
                    "Technical Review: Review by technically qualified reviewers, led by a moderator",
                    "Inspection: The most formal review type, following the complete generic review process",
                    "Review Initiation: Preparation of participants, materials and resources before individual review",
                    "Individual Review: Independent examination and recording of anomalies by each reviewer",
                    "Communication and Analysis: Assessing identified anomalies, their status, ownership and actions",
                    "Fixing and Reporting: Following up defects and reporting review outcomes",
                    "Manager: Decides what to review and provides review resources",
                    "Author: Creates and fixes the work product",
                    "Moderator: Facilitates effective and safe review meetings",
                    "Scribe: Records anomalies, decisions and other review information",
                    "Reviewer: Examines the work product to identify anomalies",
                    "Review Leader: Takes overall responsibility for organizing the review"
                ],
                examTips: [
                    "Five review activities (v4.0.1): Planning -> Review initiation -> Individual review -> Communication and analysis -> Fixing and reporting.",
                    "Six principal roles: manager, author, moderator, scribe, reviewer, and review leader. Moderator and review leader have different responsibilities.",
                    "Technical reviews are led by a moderator; walkthroughs are author-led; inspections are the most formal.",
                    "In inspections, the author cannot be the review leader or scribe. Do not generalize this rule to all review types.",
                    "FL-3.2.1 (K1), FL-3.2.2 (K2), FL-3.2.3 (K1), FL-3.2.4 (K2), FL-3.2.5 (K1)."
                ],
                memoryAid: "Five review activities: P-R-I-C-F (Planning, Review initiation, Individual review, Communication/analysis, Fixing/reporting). Four review types: I-W-T-I. Six roles: Manager, Author, Moderator, Scribe, Reviewer, Review leader.",
                linkedTo: [
                    { id: "3.1", reason: "Reviews are a key static testing technique" },
                    { id: "1.4", reason: "Reviews are part of test analysis and design activities" },
                    { id: "1.5", reason: "Review skills require critical thinking and communication" }
                ]
            }
        ]
    },
    chapter4: {
        title: "Test Analysis and Design",
        weight: "27.5%",
        questions: 11,
        sections: [
            {
                id: "4.1",
                title: "Test Techniques Overview",
                kLevel: "K2",
                concepts: [
                    "Test techniques are systematic methods for deriving test cases from various sources (requirements, code, experience).",
                    "Three main categories of test techniques: Black-box (specification-based), White-box (structure-based), and Experience-based.",
                    "Black-box techniques derive test cases from external specifications without considering internal code structure.",
                    "White-box techniques derive test cases from the internal structure (code, architecture) of the test object.",
                    "Experience-based techniques rely on the knowledge, intuition, and expertise of the tester.",
                    "Choosing the right technique depends on factors: context, risk, complexity, regulations, time, and tester skills.",
                    "Combining techniques from different categories provides more comprehensive coverage and higher defect detection.",
                    "Many test techniques have defined coverage criteria that indicate the proportion of relevant coverage items exercised; coverage criteria differ between techniques."
                ],
                keyTerms: [
                    "Black-Box Testing: Test case design based on specifications, requirements, and functionality",
                    "White-Box Testing: Test case design based on internal structure and implementation",
                    "Experience-Based Testing: Test case design based on tester knowledge, intuition, and experience",
                    "Coverage: The degree to which a test technique's criteria are satisfied by test cases",
                    "Test Oracle: The source used to determine expected results (requirements, specifications, domain knowledge)"
                ],
                examTips: [
                    "FL-4.1.1 (K2): distinguish black-box, white-box, and experience-based techniques, including the information used to derive tests.",
                    "Common trap: 'Black-box testing is only for system level' — FALSE. It applies at all levels.",
                    "You don't need to memorize all factors for choosing a technique, just understand that multiple factors apply."
                ],
                memoryAid: "3 Technique Categories: B-W-E (Black-box, White-box, Experience) -> 'Big White Elephant'.",
                linkedTo: [
                    { id: "4.2", reason: "Black-box techniques are detailed in this section" },
                    { id: "4.3", reason: "White-box techniques are detailed in this section" },
                    { id: "4.4", reason: "Experience-based techniques are detailed in this section" },
                    { id: "1.4", reason: "Test design is a key test activity" }
                ]
            },
            {
                id: "4.2",
                title: "Black-Box Test Techniques",
                kLevel: "K3",
                concepts: [
                    "Equivalence Partitioning (EP): Divides input data into partitions (equivalence classes) where values in each partition are expected to be treated the same way by the system.",
                    "EP procedure: Identify partitions, select one representative value from each partition, and design test cases for valid and invalid partitions.",
                    "Boundary Value Analysis (BVA): Tests values at the boundaries between equivalence partitions, where defects most commonly occur.",
                    "For every boundary value in ordered equivalence partitions, 2-value BVA covers the boundary and closest neighbor in the adjacent partition; 3-value BVA covers the boundary and both immediate neighbors.",
                    "Decision Table Testing: Tests combinations of inputs (conditions) to determine their effects on outputs (actions).",
                    "Decision table structure: Conditions (inputs) in the top rows, Actions (outputs) in the bottom rows, Columns represent rules.",
                    "Decision tables are ideal for testing complex business rules with multiple logical conditions.",
                    "State Transition Testing: Tests the behavior of a system as it moves through different states in response to events.",
                    "State transition elements: States (conditions at a given time), Transitions (movement between states), Events (triggers), and Actions (results).",
                    "State transition coverage in CTFL v4.0.1: all states; valid transitions (0-switch); all transitions (all valid plus attempts at invalid transitions)."
                ],
                keyTerms: [
                    "Equivalence Partitioning: Dividing input data into partitions from which test cases can be derived",
                    "Equivalence Class: A set of values expected to be processed the same way by the system",
                    "Boundary Value Analysis: Testing at the boundaries between equivalence partitions",
                    "Decision Table: A table showing combinations of inputs and their corresponding outputs",
                    "State Transition: A model showing how a system moves between states based on events",
                    "Coverage Criteria: The percentage of elements (partitions, boundaries, rules, transitions, pairs) exercised by test cases"
                ],
                examTips: [
                    "EP and BVA are the most frequently tested techniques — practice deriving test cases from requirements.",
                    "BVA is for ordered partitions: 2-value selects each boundary value and its closest adjacent-partition neighbor; 3-value selects each boundary value and both neighbors.",
                    "A full limited-entry decision table with n independent Boolean conditions initially has 2^n combinations; omit infeasible rules and merge equivalent rules where appropriate.",
                    "For state transition diagrams, identify valid and invalid transitions; tests should cover both valid and invalid transitions.",
                    "FL-4.2.1–FL-4.2.4 are K3: derive test cases using EP, BVA, decision tables and state transitions; K4 is not examined."
                ],
                memoryAid: "4 black-box techniques in CTFL 4.2: E-B-D-S (Equivalence, Boundary, Decision table, State transition). 2-value BVA = boundary + adjacent-partition neighbor; 3-value = boundary + both neighbors. 0-switch = valid-transition coverage.",
                linkedTo: [
                    { id: "4.1", reason: "Black-box is a major test-technique category" },
                    { id: "4.3", reason: "Black-box and white-box techniques complement each other" },
                    { id: "1.3", reason: "Equivalence partitioning reduces the need for exhaustive input testing" }
                ]
            },
            {
                id: "4.3",
                title: "White-Box Test Techniques",
                kLevel: "K2",
                concepts: [
                    "White-box test techniques derive test cases from the internal structure (source code, control flow, architecture) of the test object.",
                    "Statement Testing: Exercises executable statements in the code so that each statement is executed at least once.",
                    "Statement Coverage: The percentage of executable statements exercised by the test cases (100% = every statement executed).",
                    "Branch testing exercises control-flow branches, including conditional decision outcomes and unconditional transfers of control.",
                    "Branch coverage: the number of exercised conditional and unconditional control-flow branches divided by all identified branches.",
                    "100% branch coverage implies 100% statement coverage, but the reverse is not necessarily true.",
                    "Branch coverage is a stronger structural coverage criterion than statement coverage; neither establishes that the test suite can detect every defect.",
                    "Decision testing is related to branch testing, but CTFL v4.0.1 explicitly focuses on statement testing and branch testing; do not treat all decision/branch coverage formulations as universally synonymous.",
                    "Control flow diagrams are used to visualize the structure of code and identify statements, branches, and paths.",
                    "White-box testing provides visibility into tested control-flow structures and helps identify missing structural coverage; 100% statement or branch coverage does not imply coverage of all execution paths."
                ],
                keyTerms: [
                    "Statement Testing: Testing designed to execute all executable statements in the code",
                    "Statement Coverage: The proportion of executable statements executed by the test suite",
                    "Branch Testing: Testing designed to exercise branches, i.e., conditional and unconditional transfers in the control-flow graph.",
                    "Branch Coverage: The proportion of conditional and unconditional control-flow branches exercised by a test suite.",
                    "Decision: A point where execution may follow different outcomes, such as an if or switch statement.",
                    "Control Flow: The sequence in which individual statements, instructions, or function calls are executed",
                    "Control Flow Diagram: A graphical representation of the control flow through a program"
                ],
                examTips: [
                    "100% branch coverage gives 100% statement coverage, but 100% statement coverage does NOT give 100% branch coverage.",
                    "Common trap: 'Statement coverage is stronger than branch coverage' — FALSE. Branch coverage is stronger (subsumes statement coverage).",
                    "FL-4.3.1–FL-4.3.3 are K2: explain statement testing, branch testing, and the value of white-box techniques. Calculations can support understanding, but no K3 LO is assigned here.",
                    "For the exam, be able to trace through simple code and determine which statements/branches are covered."
                ],
                memoryAid: "Branch > Statement. 'BS' backwards: Statement is the basis, Branch is the upgrade. Branch subsumes Statement = 'Big Sister' takes care of 'Little Sister'.",
                linkedTo: [
                    { id: "4.1", reason: "White-box is one category of test techniques" },
                    { id: "4.2", reason: "White-box complements black-box for thorough testing" },
                    { id: "3.1", reason: "Static analysis shares structural analysis goals" }
                ]
            },
            {
                id: "4.4",
                title: "Experience-Based Test Techniques",
                kLevel: "K2",
                concepts: [
                    "Experience-based techniques use the tester's knowledge, experience, and intuition to design and execute test cases.",
                    "Error Guessing: The tester anticipates defects based on past experience with similar systems, common mistakes, and known error patterns.",
                    "Error guessing is often used to complement systematic techniques, targeting areas where defects are likely to occur.",
                    "Exploratory Testing: The tester simultaneously designs and executes tests, learning about the system while testing.",
                    "Exploratory tests are designed, executed and evaluated while learning; they may be guided by a test charter, but an explicit charter or timebox is not universally mandatory.",
                    "A test charter defines the mission, scope, and timebox for an exploratory testing session.",
                    "Checklist-Based Testing: The tester uses a list of items, criteria, or questions to guide testing.",
                    "Checklists can be derived from experience, standards, requirements, or common failure modes.",
                    "Experience-based techniques can find defects not easily found by systematic techniques, especially usability and real-world scenario issues.",
                    "These techniques rely heavily on the tester's domain knowledge, analytical skills, and creativity.",
                    "Combining systematic and experience-based techniques provides the best overall defect detection."
                ],
                keyTerms: [
                    "Error Guessing: Test design based on anticipating defects from experience",
                    "Exploratory Testing: Concurrent test design and execution based on learning and exploration",
                    "Test Charter: A statement of the mission, scope, and objectives of an exploratory testing session",
                    "Checklist-Based Testing: Testing guided by a list of items or criteria",
                    "Session-Based Testing: A structured approach to exploratory testing using time-boxed sessions"
                ],
                examTips: [
                    "FL-4.4.1–FL-4.4.3 are K2: explain error guessing, exploratory testing, and checklist-based testing.",
                    "Exploratory testing is purposeful learning, design and execution; it can use charters and timeboxes but these are not mandatory in every session.",
                    "Error guessing is NOT random — it is based on systematic reasoning about what could go wrong.",
                    "Experience-based techniques are complementary, not replacements, for systematic techniques."
                ],
                memoryAid: "3 Experience Techniques: E-E-C (Error guessing, Exploratory, Checklist-based). Exploratory = 'Learn as you test'. Error Guessing = 'Where there's smoke, there's fire'.",
                linkedTo: [
                    { id: "4.1", reason: "Experience-based is one category of test techniques" },
                    { id: "4.2", reason: "Experience-based complements black-box techniques" },
                    { id: "4.3", reason: "Experience-based complements white-box techniques" },
                    { id: "1.5", reason: "Tester skills directly impact experience-based testing effectiveness" }
                ]
            },
            {
                id: "4.5",
                title: "Collaboration-based Test Approaches",
                kLevel: "K2, K3",
                concepts: [
                    "Collaboration-based approaches focus on defect avoidance through collaboration and communication, while sections 4.2 to 4.4 focus on defect detection.",
                    "A user story represents a feature that will be valuable to a user or purchaser of a system or software.",
                    "The 3 C's of a user story: Card (the medium describing the story), Conversation (how the software will be used) and Confirmation (the acceptance criteria).",
                    "Common user story format: \"As a [role], I want [goal], so that I can [resulting business value]\", followed by the acceptance criteria.",
                    "Collaborative authorship uses techniques such as brainstorming and mind mapping, taking into account the business, development and testing perspectives.",
                    "Good user stories should be INVEST: Independent, Negotiable, Valuable, Estimable, Small and Testable.",
                    "If a stakeholder does not know how to test a user story, the story may be unclear or not valuable, or the stakeholder may just need help in testing it.",
                    "Acceptance criteria are the conditions that an implementation of a user story must meet to be accepted by stakeholders.",
                    "Acceptance criteria are the test conditions that should be exercised by the tests, and are usually the result of the Conversation.",
                    "Acceptance criteria define the scope of the user story, reach consensus among stakeholders, describe positive and negative scenarios, serve as the basis for acceptance testing and allow accurate planning and estimation.",
                    "Two most common formats for acceptance criteria: scenario-oriented (Given/When/Then, as used in BDD) and rule-oriented (verification list or tabulated input-output mapping).",
                    "ATDD is a test-first approach: test cases are created before implementing the user story, by team members with different perspectives such as customers, developers and testers.",
                    "ATDD starts with a specification workshop where the user story and its acceptance criteria are analysed, discussed and written; incompleteness, ambiguities and defects are resolved there.",
                    "ATDD test cases are examples of how the software works: positive tests first, then negative testing, then non-functional quality characteristics."
                ],
                keyTerms: [
                    "User Story: A representation of a feature that will be valuable to a user or purchaser of a system or software",
                    "3 C's: Card, Conversation and Confirmation - the three critical aspects of a user story",
                    "INVEST: Independent, Negotiable, Valuable, Estimable, Small and Testable - qualities of good user stories",
                    "Acceptance Criteria: The conditions that an implementation of a user story must meet to be accepted by stakeholders",
                    "Scenario-Oriented Format: Acceptance criteria written in Given/When/Then form, as used in BDD",
                    "Rule-Oriented Format: Acceptance criteria written as a verification list or a tabulated input-output mapping",
                    "ATDD: Acceptance Test-driven Development - a test-first approach that derives test cases from acceptance criteria before implementation",
                    "Specification Workshop: A team session in which the user story and its acceptance criteria are analysed, discussed and written"
                ],
                examTips: [
                    "FL-4.5.1 (K2): collaborative user stories; FL-4.5.2 (K2): acceptance criteria formats; FL-4.5.3 (K3): derive test cases using ATDD.",
                    "Mapping: Card, Conversation (which produces the acceptance criteria) and Confirmation (the acceptance criteria themselves).",
                    "Common trap: 'acceptance criteria are only for the developers' - FALSE. They are the test conditions stakeholders use to accept the story.",
                    "ATDD derives tests from acceptance criteria as part of the system design process; TDD directs the coding through test cases. Do not swap them.",
                    "The user story itself is not an acceptance criterion: the criteria are the conditions the implementation of the story must meet."
                ],
                memoryAid: "3 C's = Card, Conversation, Confirmation. INVEST = qualities of the story. ATDD = Acceptance criteria first, then the code (test-first).",
                linkedTo: [
                    { id: "4.1", reason: "Collaboration-based approaches complement the systematic techniques of sections 4.2-4.4" },
                    { id: "4.4", reason: "Experience-based techniques also rely on collaboration during test design" },
                    { id: "2.1", reason: "TDD, ATDD and BDD are described as test-first approaches in section 2.1.3" },
                    { id: "1.5", reason: "Collaboration requires the business, development and testing perspectives" }
                ]
            }
        ]
    },
    chapter5: {
        title: "Managing the Test Activities",
        weight: "22.5%",
        questions: 9,
        sections: [
            {
                id: "5.1",
                title: "Test Planning",
                concepts: [
                    "Test planning defines test objectives and the test approach needed to achieve them within constraints; plans are updated throughout the project.",
                    "A test plan covers scope, test basis, objectives, constraints, stakeholders, communication, risks, approach, resources, budget and schedule.",
                    "Release planning covers the product backlog and testing across iterations; iteration planning covers the current iteration, including user-story testability, risks and testing tasks.",
                    "Entry criteria define preconditions for starting an activity; exit criteria define when the activity is considered complete. In Agile, Definition of Ready and Definition of Done commonly correspond to these concepts.",
                    "Testing effort estimation techniques in CTFL: estimation based on ratios; extrapolation; Wideband Delphi (Planning Poker is a variant); and three-point estimation.",
                    "Ratio example: if development:test effort is 3:2 and development effort is 600 person-days, estimate testing at 400 person-days.",
                    "Three-point estimate: E = (a + 4m + b) / 6; standard-deviation approximation SD = (b - a) / 6, where a, m, b are optimistic, most likely and pessimistic estimates.",
                    "Test case prioritization methods include risk-based, coverage-based, and requirements-based approaches; dependencies and resource availability can change execution order.",
                    "The test pyramid illustrates relative test granularity: many small, fast tests at the base and fewer complex, slower end-to-end tests toward the top.",
                    "The testing quadrants classify tests along business-facing versus technology-facing and supporting the team versus critiquing the product: Q1 to Q4.",
                    "Q1: technology-facing, team-supporting component/integration tests; Q2: business-facing, team-supporting story and functional tests; Q3: business-facing, product-critiquing exploratory/usability/UAT; Q4: technology-facing, product-critiquing non-functional and smoke tests."
                ],
                keyTerms: [
                    "Test Plan: Document describing test objectives, scope, approach, resources and schedule",
                    "Test Planning: Activity of defining objectives and selecting a test approach within constraints",
                    "Release Planning: Planning delivery and testing across iterations up to a release",
                    "Iteration Planning: Planning work and testing for one iteration",
                    "Entry Criteria: Preconditions for starting an activity",
                    "Exit Criteria: Conditions that must be achieved to complete an activity",
                    "Definition of Ready: Entry criteria used for a user story in Agile development",
                    "Definition of Done: Objective exit criteria for a releasable work item in Agile development",
                    "Ratio-Based Estimation: Estimating from historical development-to-test effort ratios",
                    "Extrapolation: Estimating remaining effort using early current-project measurements",
                    "Wideband Delphi: Consensus-based expert estimation; Planning Poker is a variant",
                    "Three-Point Estimation: E = (a + 4m + b) / 6; SD = (b - a) / 6",
                    "Test Case Prioritization: Ordering tests based on risk, coverage, requirements or dependencies",
                    "Test Pyramid: Model relating the granularity and typical quantity of automated tests",
                    "Testing Quadrants: Four categories formed by business/technology facing and support/critique aims"
                ],
                examTips: [
                    "FL-5.1.1 (K2): purpose and content of a test plan; FL-5.1.2 (K1): testers in release and iteration planning.",
                    "FL-5.1.3 (K2): entry versus exit criteria, including DoR and DoD.",
                    "FL-5.1.4 (K3): calculate effort using ratios, extrapolation, Wideband Delphi and three-point estimation E=(a+4m+b)/6.",
                    "FL-5.1.5 (K3): apply risk-based, coverage-based and requirements-based prioritization, respecting dependencies.",
                    "FL-5.1.6 (K1): recall test-pyramid granularity; FL-5.1.7 (K2): distinguish testing quadrants Q1–Q4."
                ],
                memoryAid: "5.1 checklist: Plan -> Release/Iteration -> Entry/Exit -> Estimate -> Prioritize -> Pyramid -> Quadrants. Estimation R-E-W-3 (Ratio, Extrapolation, Wideband Delphi, Three-point). 3-point E=(a+4m+b)/6; SD=(b-a)/6.",
                linkedTo: [
                    { id: "1.4", reason: "Test planning is a core test activity" },
                    { id: "4.5", reason: "User stories and acceptance criteria feed iteration/release planning" },
                    { id: "5.2", reason: "Product risks influence planning and prioritization" },
                    { id: "5.3", reason: "Monitoring compares progress with plan" }
                ]
            },
            {
                id: "5.2",
                title: "Risk Management",
                concepts: [
                    "Risk is the potential for a negative outcome, characterized by its probability and impact.",
                    "Two categories of risk relevant to testing: Product risks and Project risks.",
                    "Product risks relate to the quality of the product itself: potential defects, performance issues, security vulnerabilities, and usability problems.",
                    "Project risks relate to the management of the project: resource shortages, schedule pressure, budget constraints, and technical challenges.",
                    "Risk-based testing selects, prioritizes and manages testing activities based on risk analysis and risk control.",
                    "For quantitative assessment, risk level can be calculated as likelihood x impact; qualitative assessment may instead use a risk matrix.",
                    "Testing can mitigate product risks by identifying and reporting defects.",
                    "Testing can identify and help mitigate project risks (e.g., uncovering requirement ambiguities, identifying skill gaps).",
                    "Risk analysis consists of risk identification and risk assessment; risk control consists of risk mitigation and risk monitoring.",
                    "Risk analysis involves assessing the probability and impact of identified risks.",
                    "Risk control consists of risk mitigation and ongoing risk monitoring; responses can include risk acceptance, transfer, contingency planning or testing activities."
                ],
                examTips: [
                    "Distinguish product risks (quality-related) from project risks (management-related).",
                    "Common trap: 'Testing eliminates all risks' — FALSE. Testing reduces risk but cannot eliminate it entirely.",
                    "Risk-based testing is about PRIORITIZATION, not about testing everything.",
                    "FL-5.2.1 (K1): likelihood and impact; FL-5.2.2–FL-5.2.4 (K2): types, analysis and control of product risks."
                ],
                memoryAid: "Risk = Likelihood x Impact (quantitative model). Product = quality risk; Project = delivery risk. Analysis = Identify + Assess. Control = Mitigate + Monitor.",
                linkedTo: [
                    { id: "1.2", reason: "Testing contributes to reducing product risk" },
                    { id: "5.1", reason: "Risk assessment shapes scope and test prioritization" },
                    { id: "2.3", reason: "Risk influences maintenance-test scope" },
                    { id: "5.3", reason: "Progress reports may include residual risks" }
                ]
            },
            {
                id: "5.3",
                title: "Test Monitoring, Test Control and Test Completion",
                concepts: [
                    "Test monitoring involves tracking testing progress against the test plan, collecting metrics, and checking if test activities are on schedule.",
                    "Test control involves taking corrective actions based on monitoring data to meet testing objectives.",
                    "Key metrics for test monitoring: percentage of test cases executed, passed, failed, blocked; defect density; requirement coverage; and test completion percentage.",
                    "Test reporting communicates testing progress, results, and quality assessments to stakeholders.",
                    "Test reports include: test progress reports (periodic updates during testing) and test completion reports (end of testing).",
                    "The test completion report summarizes the test results, provides quality assessments, and documents lessons learned.",
                    "Deviation from the test plan may require control actions: re-prioritizing tests, allocating more resources, adjusting schedules, or changing test approach.",
                    "Monitoring and control are continuous activities throughout the test process.",
                    "Effective test monitoring enables early detection of issues and data-driven decision-making.",
                    "Test completion includes consolidating outcomes, archiving testware, closing relevant work products, documenting lessons learned, and communicating the completion status.",
                    "Testing status can be communicated using formal reports, dashboards, verbal updates or other channels suited to the audience."
                ],
                examTips: [
                    "Distinguish monitoring (measuring/tracking) from control (taking corrective action).",
                    "Common trap: 'Test reports are only created at the end of testing' — FALSE. Progress reports are periodic; completion reports are final.",
                    "FL-5.3.1 (K1): metrics; FL-5.3.2 (K2): purposes, contents and audiences for test reports; FL-5.3.3 (K2): communicate test status."
                ],
                linkedTo: [
                    { id: "5.1", reason: "Monitoring evaluates progress against the test plan" },
                    { id: "5.5", reason: "Defect status and metrics inform monitoring" },
                    { id: "1.4", reason: "Test monitoring, control and completion are activities within the test process" }
                ]
            },
            {
                id: "5.4",
                kLevel: "K2",
                examTips: [
                    "FL-5.4.1 (K2): summarize how configuration management supports testing, including versioning, traceability and reproducibility.",
                    "Common trap: 'CM is only for source code' — FALSE. CM applies to ALL work products (requirements, test cases, test data, etc.).",
                    "CM is important for reproducibility: knowing what was tested with which version of what.",
                    "Traceability is a key CM concept for the exam."
                ],
                linkedTo: [
                    { id: "5.1", reason: "A test plan defines environments and version-controlled testware" },
                    { id: "2.3", reason: "Maintenance and regression testing depend on controlled baselines" },
                    { id: "1.4", reason: "Traceability and testware are supported by configuration management" }
                ]
            },
            {
                id: "5.5",
                kLevel: "K3",
                concepts: [
                    "Defect management covers recording, classifying, tracking and resolving anomalies and confirmed defects identified during testing and beyond.",
                    "A defect report documents the details of a defect: ID, summary, description, steps to reproduce, expected/actual results, severity, priority, status, and environment.",
                    "Defect lifecycle typically includes: Discovered -> Reported -> Triaged -> Assigned -> Fixed -> Verified -> Closed.",
                    "A defect may be recorded, triaged, fixed, re-tested, re-opened, deferred or closed; the actual workflow depends on the organization and is not prescribed as one mandatory lifecycle.",
                    "Severity describes impact on stakeholder interests or requirements, not only the technical impact of a failure.",
                    "High severity does not always mean high priority, and vice versa.",
                    "Defect management benefits include: tracking defects to closure, analyzing defect patterns, improving processes, and providing metrics.",
                    "A defect management system (bug tracking tool) is used to record and track defects throughout the lifecycle.",
                    "Defect meetings (triage) review defects to determine priority, assignment, and resolution approach.",
                    "Defect process improvement: Root cause analysis of defects helps prevent similar defects in future projects.",
                    "Defect reports should be clear, informative and reproducible whenever possible; relevant evidence or logs can help investigate intermittent or non-reproducible failures."
                ],
                keyTerms: [
                    "Defect Report: A document reporting the details of a defect (ID, description, severity, priority, status)",
                    "Severity: The degree of impact on stakeholder interests or requirements.",
                    "Priority: The business urgency assigned to fixing a defect",
                    "Defect Triage: A meeting to review and prioritize defects for resolution",
                    "Defect Lifecycle: The stages a defect goes through from discovery to closure",
                    "Root Cause Analysis: An analysis to identify the underlying cause of a defect to prevent recurrence"
                ],
                examTips: [
                    "Severity measures the impact on stakeholder interests or requirements; priority reflects the urgency with which a defect should be fixed.",
                    "Common trap: 'High severity defects must always be fixed first' — FALSE. A high-severity defect with low priority may be deprioritized.",
                    "A high-quality report records reproducible steps when available, expected/actual behavior, environment, evidence, severity, priority, identifiers and references; lack of exact steps does not make a defect unfixed or unreportable.",
                    "FL-5.5.1 is K3: prepare a clear and actionable defect report with sufficient evidence and context."
                ],
                memoryAid: "Defect report checklist: ID + summary + date/reporter + test object/environment + context + steps/evidence + expected/actual + severity/priority + status + references. Severity = stakeholder impact; Priority = fix urgency.",
                linkedTo: [
                    { id: "5.3", reason: "Defect metrics support test progress and completion reporting" },
                    { id: "1.2", reason: "Root causes, defects and failures are related but distinct" },
                    { id: "5.2", reason: "Defect trends inform product risk assessment" }
                ]
            }
        ]
    },
    chapter6: {
        title: "Test Tools",
        weight: "7.5%",
        questions: 3,
        sections: [
            {
                id: "6.1",
                title: "Tool Support for Testing",
                kLevel: "K2",
                concepts: [
                    "Test tools support various test activities: test management, test design, test execution, test data, and defect tracking.",
                    "Tool classification by test activity: Test management tools (planning, monitoring, reporting), Test design tools (creating test cases), Test execution tools (automated test scripts), and Defect tracking tools.",
                    "Test management tools: Manage test plans, test cases, test execution schedules, and generate test reports.",
                    "Test design tools: Generate test cases from specifications or models (e.g., model-based testing tools).",
                    "Test data preparation tools: Generate, anonymize, or load test data for testing.",
                    "Test execution tools: Execute test scripts automatically and compare actual vs expected results.",
                    "Automated test execution tools (test automation frameworks) support regression testing at scale.",
                    "Performance testing tools: Generate load, measure response times, and identify performance bottlenecks.",
                    "Static analysis tools: Analyze code without execution to find defects, security vulnerabilities, and coding standard violations.",
                    "Dynamic analysis tools: Analyze code during execution to detect memory leaks, pointer errors, and runtime issues.",
                    "Test tools need to be evaluated before selection: consider organizational needs, technical compatibility, cost, and support.",
                    "Proof-of-concept (POC) or pilot projects help evaluate whether a tool fits the organization's context.",
                    "The CTFL groups tools by support provided: management; static testing; design/implementation; execution/coverage; non-functional testing; DevOps; collaboration; scalability and deployment standardization."
                ],
                keyTerms: [
                    "Test Management Tool: A tool supporting test planning, execution tracking, and reporting",
                    "Test Execution Tool: A tool that automates test script execution and result comparison",
                    "Performance Testing Tool: A tool for generating load and measuring system performance",
                    "Static Analysis Tool: A tool that examines code without execution to find potential defects",
                    "Dynamic Analysis Tool: A tool that examines code during execution to find runtime defects",
                    "Model-Based Testing Tool: A tool that generates test cases from system models",
                    "Proof-of-Concept (POC): A preliminary evaluation to determine tool feasibility",
                    "Pilot Project: A small-scale implementation to gain experience before full deployment"
                ],
                examTips: [
                    "Know which tool type supports which test activity (e.g., performance tools for load testing, management tools for planning).",
                    "Common trap: 'Tools replace testers' — FALSE. Tools support and enhance testing but do not replace human judgment.",
                    "Static analysis tools find defects WITHOUT executing code; dynamic analysis tools find defects DURING execution.",
                    "FL-6.1.1 (K2): explain how different tool categories support test activities, including CI/CD, collaboration and environments."
                ],
                memoryAid: "Tools support M-S-D-E-N-D-C-S: Management, Static, Design/implementation, Execution/coverage, Non-functional, DevOps, Collaboration, Scalability. Match the tool to its supported activity.",
                linkedTo: [
                    { id: "6.2", reason: "Tool introduction brings benefits and risks" },
                    { id: "3.1", reason: "Static analysis tools support static testing" },
                    { id: "5.5", reason: "Defect management tools help track reported defects" }
                ]
            },
            {
                id: "6.2",
                title: "Benefits and Risks of Test Automation",
                kLevel: "K1",
                concepts: [
                    "Test automation benefits: reduces repetitive manual effort, enables more frequent regression testing, accelerates test execution, and increases test coverage.",
                    "Automation increases consistency and repeatability and can prevent some simple human errors; it does not eliminate all human or test-design errors.",
                    "Automation supports CI/CD pipelines by enabling rapid feedback on code changes.",
                    "Risks of test automation: high initial investment (tools, training, framework), ongoing maintenance costs, and false expectations.",
                    "Automated tests can give a false sense of security — they only test what is programmed, not all scenarios.",
                    "Not all tests should be automated: tests that are run once, tests requiring human judgment, and tests with unstable objects are poor automation candidates.",
                    "Test automation requires skilled resources to develop, maintain, and evolve the automation framework.",
                    "Repeated, stable regression tests are often good automation candidates, but ROI depends on context, frequency, maintenance effort and cost; no test category universally provides the highest ROI.",
                    "Data-driven automation separates test data from test scripts, allowing more test cases with less code.",
                    "Keyword-driven automation uses action words to define test steps, making tests more readable for non-technical stakeholders.",
                    "Maintenance of automated tests is a significant ongoing cost — changing applications require test script updates."
                ],
                keyTerms: [
                    "Test Automation: The use of software tools to control test execution and compare results",
                    "Test Automation Framework: A set of guidelines, tools, and practices for automated testing",
                    "Data-Driven Testing: An automation approach where test data is stored separately from test scripts",
                    "Keyword-Driven Testing: An automation approach using action keywords to define test steps",
                    "Return on Investment (ROI): The benefit gained from automation relative to its cost",
                    "Continuous Integration (CI): A practice where code changes are automatically tested and integrated frequently"
                ],
                examTips: [
                    "Memorize benefits AND risks of automation — questions often ask for both.",
                    "Common trap: 'Automation eliminates the need for manual testing' — FALSE. Many tests (exploratory, usability) require human judgment.",
                    "Repeated regression tests may offer good ROI, but consider maintenance, application stability, test criticality and alternatives before automating.",
                    "FL-6.2.1 (K1): recall representative benefits and risks of test automation; K2 is not specified for this section."
                ],
                memoryAid: "Automation = 'R-C-R' (Repeatable, Consistent, Rapid). Risks = 'C-M-F' (Cost, Maintenance, False expectations). Remember: Automation is a tool, not a replacement.",
                linkedTo: [
                    { id: "6.1", reason: "Tool choice should support the test process" },
                    { id: "2.2", reason: "Regression testing is often a useful automation candidate" },
                    { id: "5.1", reason: "Automation costs and risks influence the test approach" }
                ]
            }
        ]
    }
};









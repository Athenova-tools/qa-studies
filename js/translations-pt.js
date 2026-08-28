/** ISTQB CTFL v4.0.1 — Traduções PT-PT (Estrutura Espelhada) */
window.questionSets = {
    exam1: [
        {
            id: "Q001",
            statement: "Qual é o principal objetivo do teste?",
            options: {
                A: "Encontrar defeitos e fornecer informação sobre a qualidade",
                B: "Provar que o software não têm erros",
                C: "Corrigir todos os erros antes da disponibilização",
                D: "Garantir a satisfação do utilizador"
            },
            correctAnswer: "A",
            explanation: "Testing is primarily aimed at finding defects and providing information about the level of quality of the software. It cannot prove the absence of defects, nor can it fix all bugs, and while user satisfaction is a goal of quality, it is not the direct purpose of testing.",
            whyWrong: "Testing cannot prove software is error-free; it only reveals the presence of defects, not their absence.",
            optionExplanations: {
                A: "Testing reveals defects and gives stakeholders information about quality levels.",
                B: "Exhaustive testing is impossible; testing can show defects exist but cannot prove they do not.",
                C: "Fixing bugs is a development activity, not the primary purpose of testing.",
                D: "User satisfaction is an outcome of quality, not the direct purpose of testing activities."
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["testing purpose", "defects", "quality information"],
            examTip: "Remember that testing provides information, not proof of correctness.",
            memoryAid: "Testing = detective work (find clues/defects), not a proof of innocence."
        },
        {
            id: "Q002",
            statement: "Qual das seguintes descreve melhor a diferença entre depuração e teste?",
            options: {
                A: "O teste encontra defeitos; a depuração localiza e corrige a causa desses defeitos",
                B: "A depuração é realizada por testadores; o teste é realizado por programadores",
                C: "O teste é feito após a depuração estar completa",
                D: "A depuração e o teste são a mesma atividade com nomes diferentes"
            },
            correctAnswer: "A",
            explanation: "Testing is the process of finding defects through systematic execution of test cases. Debugging is the development activity that identifies the root cause of a known defect and fixes it. These are distinct activities with different goals.",
            whyWrong: "Debugging is performed by developers, not testers, and testing can reveal defects that developers then debug.",
            optionExplanations: {
                A: "Testing reveals failures; debugging analyzes root causes and removes defects.",
                B: "Developers debug; testers test. These roles are distinct.",
                C: "Testing often triggers the need for debugging, but they can overlap in time.",
                D: "They are fundamentally different activities with different objectives."
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.2",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["testing", "debugging", "defects"],
            examTip: "Testing finds defects; debugging fixes them. These are complementary but distinct.",
            memoryAid: "Testing = detection; Debugging = correction."
        },
        {
            id: "Q003",
            statement: "Qual das seguintes é um princípio fundamental de teste?",
            options: {
                A: "O teste deve começar o mais cedo possível no ciclo de vida de desenvolvimento de software",
                B: "O teste só é necessário após o código estar completo",
                C: "O teste automatizado elimina a necessidade de teste manual",
                D: "Todos os defeitos serão encontrados se forem executados testes suficientes"
            },
            correctAnswer: "A",
            explanation: "One of the seven fundamental testing principles is 'Early testing saves time and money.' Testing activities should start as early as possible in the SDLC to find defects when they are least expensive to fix.",
            whyWrong: "The statement about all defects being found if enough tests are executed contradicts the principle of defect clustering and the impossibility of exhaustive testing.",
            optionExplanations: {
                A: "The principle of early testing states that testing should begin as early as possible.",
                B: "This contradicts the 'early testing' principle.",
                C: "Automation supports but does not replace manual testing.",
                D: "Exhaustive testing is impossible; no amount of testing can find all defects."
            },
            chapter: 1,
            section: "1.3",
            subsection: "1.3.1",
            learningObjective: "FL-1.3.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["testing principles", "early testing", "SDLC"],
            examTip: "Memorize all seven testing principles for the exam.",
            memoryAid: "7 principles: Early, Exhaustive impossible, Defect clustering, Pesticide paradox, Context dependent, Absence-of-errors fallacy, Testing shows presence."
        },
        {
            id: "Q004",
            statement: "Uma equipa de teste têm estado a testar o mesmo módulo durante várias versões usando o mesmo conjunto de casos de teste. Eles notam que nenhum novo defeito está a ser encontrado. Qual princípio de teste este cenário ilustra?",
            options: {
                A: "Paradoxo do pesticida",
                B: "Agrupamento de defeitos",
                C: "Falácia da ausência de erros",
                D: "O teste depende do contexto"
            },
            correctAnswer: "A",
            explanation: "The pesticide paradox states that if the same tests are repeated over and over, they will eventually stop finding new defects. To find new defects, test cases must be regularly reviewed and updated to cover new or changed functionality.",
            whyWrong: "Defect clustering refers to the tendency for defects to concentrate in a few modules, not to tests becoming stale.",
            optionExplanations: {
                A: "Repeating the same tests becomes ineffective over time, just as pesticides become ineffective when used repeatedly.",
                B: "Defect clustering means most defects are found in a small number of modules.",
                C: "The absence-of-errors fallacy means finding no defects does not mean the system is fit for use.",
                D: "Context dependency means testing approaches differ based on the application type."
            },
            chapter: 1,
            section: "1.3",
            subsection: "1.3.1",
            learningObjective: "FL-1.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["pesticide paradox", "testing principles", "test case review"],
            examTip: "When you see 'same tests, no new defects,' think pesticide paradox.",
            memoryAid: "Pesticide paradox = stale tests find no new bugs."
        },
        {
            id: "Q005",
            statement: "Qual das seguintes é uma atividade de teste dentro do processo de teste?",
            options: {
                A: "Análise e conceção de teste",
                B: "Compilação de código",
                C: "Recolha de requisitos",
                D: "Implementação de software"
            },
            correctAnswer: "A",
            explanation: "The test process includes six main activities: test planning, test monitoring and control, test analysis, test design, test implementation, test execution, and test completion. Test analysis and design is the activity where test conditions are identified and test cases are designed.",
            whyWrong: "Code compilation is a development activity, not part of the test process.",
            optionExplanations: {
                A: "Test analysis and design is a core test activity where test conditions and test cases are defined.",
                B: "Code compilation is a development activity, not a testing activity.",
                C: "Requirements gathering is part of the requirements engineering process.",
                D: "Software deployment is an operational activity after testing."
            },
            chapter: 1,
            section: "1.4",
            subsection: "1.4.1",
            learningObjective: "FL-1.4.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["test activities", "test process", "test analysis", "test design"],
            examTip: "Remember the six test activities: Planning, Monitoring & Control, Analysis, Design, Implementation, Execution, Completion.",
            memoryAid: "PMaADIEC: Plan, Monitor, Analysis, Design, Implement, Execute, Complete."
        },
        {
            id: "Q006",
            statement: "O que é testware?",
            options: {
                A: "Artefactos produzidos durante o processo de teste, como planos de teste, casos de teste e scripts de teste",
                B: "O hardware no qual os testes são executados",
                C: "O software que está a ser testado",
                D: "Um tipo de malware que afeta ambientes de teste"
            },
            correctAnswer: "A",
            explanation: "Testware refers to all artifacts produced during the testing process, including test plans, test cases, test scripts, test data, and test reports. These are the work products of testing activities.",
            whyWrong: "Testware is not hardware or the application under test; it is the collection of testing artifacts and documentation.",
            optionExplanations: {
                A: "Testware encompasses all documents and artifacts created for and during testing.",
                B: "The physical hardware is not testware.",
                C: "The software under test is known as the test object or SUT.",
                D: "Testware is unrelated to malware."
            },
            chapter: 1,
            section: "1.4",
            subsection: "1.4.2",
            learningObjective: "FL-1.4.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["testware", "test artifacts", "test documentation"],
            examTip: "Testware = all test-related documents and artifacts. Think of it as 'software for testing.'",
            memoryAid: "Testware = test + software (all test artifacts)."
        },
        {
            id: "Q007",
            statement: "Qual das seguintes é uma competência essencial para um testador?",
            options: {
                A: "Ser orientado para o detalhe e ter boas capacidades de comunicação",
                B: "Conhecimento de programação a nível de especialista",
                C: "Certificação em gestão de projetos",
                D: "competências avançadas de administração de base de dados"
            },
            correctAnswer: "A",
            explanation: "Testers need a combination of skills including attention to detail, good communication, analytical thinking, creativity, and domain knowledge. While programming can be helpful, it is not the primary essential skill.",
            whyWrong: "Expert-level programming is not essential for all testers; many testing roles focus on manual testing and analytical skills.",
            optionExplanations: {
                A: "Attention to detail and communication are universally essential for testers.",
                B: "Programming is useful for automation but not essential for all testers.",
                C: "PM certification is not a standard requirement for testers.",
                D: "DBA skills are not generally required for testing roles."
            },
            chapter: 1,
            section: "1.5",
            subsection: "1.5.1",
            learningObjective: "FL-1.5.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["tester skills", "communication", "attention to detail"],
            examTip: "Focus on analytical skills, curiosity, and communication as key tester traits.",
            memoryAid: "A tester is a curious detective with excellent communication skills."
        },
        {
            id: "Q008",
            statement: "Um sistema que calcula bónus de funcionários foi testado e nenhum defeito foi encontrado. No entanto, os utilizadores reportam que os cálculos dos bónus não satisfazem as suas necessidades de negócio. Qual princípio de teste este cenário ilustra?",
            options: {
                A: "Falácia da ausência de erros",
                B: "Agrupamento de defeitos",
                C: "Paradoxo do pesticida",
                D: "Teste precoce"
            },
            correctAnswer: "A",
            explanation: "The absence-of-errors fallacy states that finding and fixing defects does not guarantee that the system meets user needs. Even a system with no defects can be unusable or fail to satisfy customer requirements.",
            whyWrong: "Defect clustering would mean many defects were found in a few modules, which is not the case here.",
            optionExplanations: {
                A: "A defect-free system can still fail to meet stakeholder needs or business requirements.",
                B: "Defect clustering means most defects are found in a small number of modules.",
                C: "The pesticide paradox concerns tests becoming ineffective over time.",
                D: "Early testing is about starting testing activities early in the lifecycle."
            },
            chapter: 1,
            section: "1.3",
            subsection: "1.3.1",
            learningObjective: "FL-1.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["absence-of-errors fallacy", "testing principles", "user needs"],
            examTip: "If the system works but nobody wants it, think absence-of-errors fallacy.",
            memoryAid: "Zero defects can still mean zero value."
        },
        {
            id: "Q009",
            statement: "Num ciclo de vida de desenvolvimento em V, quando deve começar o planeamento do teste?",
            options: {
                A: "Durante a fase de requisitos, em paralelo com as atividades de desenvolvimento correspondentes",
                B: "Apenas após o código estar completamente escrito",
                C: "Durante a fase de execução do teste",
                D: "Apos o sistema ter sido implementado em produção"
            },
            correctAnswer: "A",
            explanation: "In the V-model, each development phase has a corresponding test planning phase. Test planning begins early, typically during the requirements phase, with test conditions derived from requirements documents. This aligns with the principle of early testing.",
            whyWrong: "Waiting until after coding is complete violates the early testing principle and the V-model structure.",
            optionExplanations: {
                A: "The V-model pairs each development phase with a corresponding test planning activity.",
                B: "This contradicts the V-model approach of parallel test planning.",
                C: "Test execution is a later phase; planning comes much earlier.",
                D: "Deployment happens after testing is complete."
            },
            chapter: 2,
            section: "2.1",
            subsection: "2.1.1",
            learningObjective: "FL-2.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["V-model", "test planning", "development lifecycle"],
            examTip: "In V-model, test planning mirrors development phases on the opposite side of the V.",
            memoryAid: "V-model: Left side = planning, Right side = execution."
        },
        {
            id: "Q010",
            statement: "Qual das seguintes é um exemplo de um teste de componente?",
            options: {
                A: "Testar uma única função que calcula a raiz quadrada de um número",
                B: "Testar a interacao entre dois microsservicos",
                C: "Testar a aplicação completa do início ao fim",
                D: "Testar a interface do utilizador para usabilidade"
            },
            correctAnswer: "A",
            explanation: "Component testing (also known as unit testing) focuses on testing individual components in isolation, such as a single function, method, class, or module. Testing a square root function is a classic example of component-level testing.",
            whyWrong: "Testing interactions between services is integration testing, not component testing.",
            optionExplanations: {
                A: "Component testing verifies individual elements like functions, methods, or classes in isolation.",
                B: "Testing interaction between services is integration testing.",
                C: "End-to-end testing is system testing.",
                D: "UI usability testing is a type of system or acceptance testing."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.1",
            learningObjective: "FL-2.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["component testing", "unit testing", "test levels"],
            examTip: "Component testing = testing the smallest testable parts in isolation.",
            memoryAid: "Component = individual building block."
        },
        {
            id: "Q011",
            statement: "Qual é o principal objetivo do teste de integração?",
            options: {
                A: "Expor defeitos nas interfaces e interacoes entre componentes integrados",
                B: "Testar o sistema como um todo contra os requisitos",
                C: "Verificar se as funções individuais funcionam corretamente em isolamento",
                D: "Avaliar características não funcionais como o desempenho"
            },
            correctAnswer: "A",
            explanation: "Integration testing focuses on the interactions between components or systems. It aims to find defects in interfaces, data flow between modules, and communication protocols that cannot be detected during component testing.",
            whyWrong: "Testing the system as a whole is system testing, not integration testing.",
            optionExplanations: {
                A: "Integration testing specifically targets interface defects and interaction problems.",
                B: "Testing the complete system against requirements is system testing.",
                C: "Verifying individual functions is component testing.",
                D: "Non-functional testing can occur at any level but is not the primary purpose of integration testing."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.1",
            learningObjective: "FL-2.2.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["integration testing", "interfaces", "interactions"],
            examTip: "Integration testing = testing the connections between pieces.",
            memoryAid: "Integration = how pieces fit together."
        },
        {
            id: "Q012",
            statement: "Qual das seguintes é um tipo de teste funcional?",
            options: {
                A: "Verificar se um formulário de início de sessaO autentica corretamente utilizadores validos",
                B: "Medir o tempo de resposta de uma pagina web sob carga intensa",
                C: "Verificar como o sistema se comporta quando a conectividade de rede e perdida",
                D: "Avaliar a manutibilidade do código fonte"
            },
            correctAnswer: "A",
            explanation: "Functional testing evaluates what the system does - its functions and features. Testing that a login form correctly authenticates users verifies a specific function against its requirements.",
            whyWrong: "Response time measurement is a performance test, which is non-functional testing.",
            optionExplanations: {
                A: "Functional testing verifies that the system performs its specified functions correctly.",
                B: "Performance testing is a non-functional test type.",
                C: "Reliability or resilience testing is non-functional.",
                D: "Maintainability assessment is a non-functional test type."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.2",
            learningObjective: "FL-2.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["functional testing", "test types", "verification"],
            examTip: "Functional = WHAT the system does. Non-functional = HOW WELL it does it.",
            memoryAid: "Functional = features; Non-functional = performance, security, usability."
        },
        {
            id: "Q013",
            statement: "Ao realizar teste de manutenção num sistema após a aplicação de um patch de segurança, qual é a consideração mais importante?",
            options: {
                A: "Testar as areas alteradas e o impacto nas areas não alteradas atraves de teste de regressão",
                B: "Testar apenas o próprio patch de segurança",
                C: "Reexecutar todos os testes existentes na sua totalidade",
                D: "Saltar o teste porque o patch foi fornecido por um fornecedor de confianca"
            },
            correctAnswer: "A",
            explanation: "Maintenance testing must verify both the changes (the patch) and the impact on unchanged areas through regression testing. Changes often introduce side effects in previously working functionality.",
            whyWrong: "Only testing the patch ignores potential side effects and regression issues.",
            optionExplanations: {
                A: "Both confirmation testing of the change and regression testing of impacted areas are essential.",
                B: "This ignores regression risks introduced by the change.",
                C: "Running all tests may be impractical; risk-based selection is more appropriate.",
                D: "Trusting a vendor does not eliminate the need for testing in your specific environment."
            },
            chapter: 2,
            section: "2.3",
            subsection: "2.3.1",
            learningObjective: "FL-2.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["maintenance testing", "regression testing", "impact analysis"],
            examTip: "Maintenance testing = test the change + test for side effects (regression).",
            memoryAid: "Maintenance testing: Change + Impact = Complete testing."
        },
        {
            id: "Q014",
            statement: "Uma equipa está a desenvolver uma aplicação bancaria. Apos completar o teste de componente, eles realizam o teste de integração. Qual abordagem de teste de integração envolve integrar todos os componentes de uma só vez e depois testar o sistema completo?",
            options: {
                A: "Teste de integração big-bang",
                B: "Teste de integração incremental",
                C: "Teste de integração top-down",
                D: "Teste de integração bottom-up"
            },
            correctAnswer: "A",
            explanation: "Big-bang integration testing integrates all components simultaneously and then tests the entire system. This approach is risky because if a failure occurs, it is difficult to isolate which component caused the failure.",
            whyWrong: "Incremental approaches (top-down, bottom-up) integrate components one by one, which is the opposite of big-bang.",
            optionExplanations: {
                A: "Big-bang combines all components at once, making defect isolation difficult.",
                B: "Incremental integration adds components one at a time, easing defect localization.",
                C: "Top-down starts with high-level components and adds lower-level ones.",
                D: "Bottom-up starts with low-level components and builds upward."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.1",
            learningObjective: "FL-2.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["big-bang integration", "integration testing", "approaches"],
            examTip: "Big-bang = all at once (risky); Incremental = one by one (safer, easier debugging).",
            memoryAid: "Big-bang = Big risk of big headaches finding the bug."
        },
        {
            id: "Q015",
            statement: "Qual das seguintes é um benefício do teste estático?",
            options: {
                A: "Encontrar defeitos precocemente no processo de desenvolvimento, quando são mais baratos de corrigir",
                B: "Executar o código para verificar o seu comportamento",
                C: "Testar o sistema sob condições de carga realistas",
                D: "Validar o sistema contra os critérios de aceitação do utilizador"
            },
            correctAnswer: "A",
            explanation: "Static testing (reviews and static analysis) finds defects without executing code. This allows defects to be detected early in the development lifecycle when they are significantly less expensive to fix than if found during dynamic testing.",
            whyWrong: "Static testing does not involve code execution; that is dynamic testing.",
            optionExplanations: {
                A: "Static testing finds defects early, reducing cost and effort.",
                B: "Code execution is dynamic testing, not static testing.",
                C: "Load testing is a dynamic testing activity.",
                D: "UAT is a dynamic testing activity performed by end users."
            },
            chapter: 3,
            section: "3.1",
            subsection: "3.1.1",
            learningObjective: "FL-3.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["static testing", "reviews", "early defect detection"],
            examTip: "Static = no code execution; Dynamic = code execution.",
            memoryAid: "Static = sitting still, reading; Dynamic = running the code."
        },
        {
            id: "Q016",
            statement: "Durante uma revisão de código, um programador senior identifica que um ciclo pode continuar indefinidamente sob certas condições. Que tipo de defeito foi encontrado?",
            options: {
                A: "Um defeito de fluxo de controlo",
                B: "Um defeito de fluxo de dados",
                C: "Um defeito de requisitos",
                D: "Um defeito de usabilidade"
            },
            correctAnswer: "A",
            explanation: "An infinite loop is a control flow defect because it involves incorrect logic in the flow of program execution. Control flow defects include infinite loops, unreachable code, and incorrect branching logic.",
            whyWrong: "A data flow defect would involve incorrect data usage, such as using a variable before initialization.",
            optionExplanations: {
                A: "Control flow defects involve incorrect sequencing or looping in program execution.",
                B: "Data flow defects involve improper handling of variable values.",
                C: "Requirements defects are errors in the specification, not in the code.",
                D: "Usability defects relate to user interface and user experience issues."
            },
            chapter: 3,
            section: "3.1",
            subsection: "3.1.2",
            learningObjective: "FL-3.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["static testing", "control flow", "defect types", "code review"],
            examTip: "Control flow = decisions and loops; Data flow = variable usage.",
            memoryAid: "Control flow = the path the program walks; Data flow = what it carries."
        },
        {
            id: "Q017",
            statement: "Qual é a diferença principal entre um percurso é uma revisão técnica?",
            options: {
                A: "Um percurso e liderado pelo autor e foca-se na partilha de conhecimento; uma revisão técnica é liderada por um moderador formado e foca-se em encontrar defeitos",
                B: "Um percurso e formal; uma revisão técnica e informal",
                C: "Uma revisão técnica não envolve o autor",
                D: "Um percurso requer preparação detalhada por parte de todos os participantes"
            },
            correctAnswer: "A",
            explanation: "A walkthrough is an informal review led by the author to share knowledge and gather feedback. A technical review is a more formal review led by a trained moderator, with defined roles and a focus on defect detection.",
            whyWrong: "Walkthroughs are less formal than technical reviews, not more formal.",
            optionExplanations: {
                A: "Walkthroughs are author-led and informal; technical reviews are moderator-led and formal.",
                B: "Walkthroughs are informal; technical reviews are more formal.",
                C: "The author typically participates in all review types.",
                D: "Walkthroughs require less formal preparation than technical reviews."
            },
            chapter: 3,
            section: "3.2",
            subsection: "3.2.1",
            learningObjective: "FL-3.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["walkthrough", "technical review", "review types", "static testing"],
            examTip: "Informal walkthrough (author-led) vs formal technical review (moderator-led).",
            memoryAid: "Walkthrough = walk in the park (informal); Technical review = serious business (formal)."
        },
        {
            id: "Q018",
            statement: "Qual das seguintes é uma técnica de teste de caixa-preta?",
            options: {
                A: "Particionamento por equivalências",
                B: "Teste de instruções",
                C: "Teste de ramos",
                D: "Análise de cobertura de código"
            },
            correctAnswer: "A",
            explanation: "Equivalence partitioning is a black-box test technique that divides input data into partitions (classes) from which test cases can be derived. It is based on the specification, not on the internal code structure.",
            whyWrong: "Statement testing and branch testing are white-box techniques that rely on internal code structure.",
            optionExplanations: {
                A: "Equivalence partitioning is a black-box technique based on input/output specifications.",
                B: "Statement testing requires knowledge of the code structure (white-box).",
                C: "Branch testing requires knowledge of decision points in the code (white-box).",
                D: "Code coverage analysis is a white-box measurement technique."
            },
            chapter: 4,
            section: "4.1",
            subsection: "4.1.1",
            learningObjective: "FL-4.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["black-box", "equivalence partitioning", "test techniques"],
            examTip: "Black-box = no code knowledge needed; White-box = code knowledge required.",
            memoryAid: "Black-box = looking from outside; White-box = looking inside the code."
        },
        {
            id: "Q019",
            statement: "Um sistema aceita valores de idade entre 1 e 120 inclusive. Usando particionamento por equivalências, qual dos seguintes conjuntos de valores forneceria a melhor cobertura das particoes validas?",
            options: {
                A: "0, 50, 121",
                B: "25, 60, 100",
                C: "-1, 1, 120",
                D: "1, 60, 120"
            },
            correctAnswer: "B",
            explanation: "Equivalence partitioning divides input data into partitions that should be treated equivalently. For ages 1-120, there are three partitions: below valid (0 and below), valid (1-120), and above valid (121+). To test the valid partition, any single value within 1-120 suffices, but using multiple values (25, 60, 100) provides broader coverage of the valid range without redundancy.",
            whyWrong: "Option D includes the boundary values but equivalence partitioning does not require boundaries - that is boundary value analysis.",
            optionExplanations: {
                A: "0 and 121 are boundary values for invalid partitions, but 50 alone covers valid.",
                B: "All three values are in the valid partition (1-120), providing good coverage of the valid range.",
                C: "-1 is invalid, 1 is a boundary, 120 is a boundary.",
                D: "1 and 120 are boundary values; equivalence partitioning typically uses one representative per partition."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.1",
            learningObjective: "FL-4.2.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["equivalence partitioning", "black-box", "input partitions"],
            examTip: "Pick one representative from each equivalence class. For valid partitions, any value works.",
            memoryAid: "Equivalence = same behavior = one test is enough per group."
        },
        {
            id: "Q020",
            statement: "Uma função calcula o preco de um bilhete com base na idade: Criancas (0-12): $5, Adultos (13-64): $10, Seniores (65-120): $7. Usando análise de valor fronteira, qual é o conjunto mínimo de valores de idade para testar?",
            options: {
                A: "0, 1, 12, 13, 64, 65, 120, 121",
                B: "12, 13, 64, 65",
                C: "0, 12, 13, 64, 65, 120",
                D: "1, 12, 13, 64, 65, 120"
            },
            correctAnswer: "A",
            explanation: "Boundary value analysis tests the boundaries at the edges of equivalence partitions. The partitions are: below valid (0 and below), Child (0-12), Adult (13-64), Senior (65-120), and above valid (121+). The boundary values to test are: 0 (just below child), 1 (first child), 12 (last child), 13 (first adult), 64 (last adult), 65 (first senior), 120 (last senior), 121 (just above senior).",
            whyWrong: "Option C is missing the invalid boundaries (0 and 120/121 are partially covered).",
            optionExplanations: {
                A: "Includes both valid and invalid boundaries for complete BVA coverage.",
                B: "This misses the boundaries at 0, 1, and 120-121.",
                C: "Missing 1 (first valid child) and 121 (just above senior).",
                D: "Missing 0 (just below child) and 121 (just above senior)."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.1",
            learningObjective: "FL-4.2.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["boundary value analysis", "BVA", "black-box"],
            examTip: "BVA: Test the minima and maxima of each partition, plus one just above and below.",
            memoryAid: "BVA = test the edges, not the middle."
        },
        {
            id: "Q021",
            statement: "Um sistema têm tres condições booleanas: A, B e C. Uma tabela de decisão é utilizada para definir o comportamento. Quantas colunas (casos de teste) são necessarias para uma tabela de decisão completa usando a abordagem classica?",
            options: {
                A: "8",
                B: "6",
                C: "3",
                D: "4"
            },
            correctAnswer: "A",
            explanation: "For a decision table with three conditions, the classical approach uses all combinations, which is 2^3 = 8 columns. Each column represents a unique combination of true/false values for the three conditions.",
            whyWrong: "The number of columns is 2^n where n is the number of conditions, not the number of conditions multiplied or added.",
            optionExplanations: {
                A: "2^3 = 8 combinations of three boolean conditions.",
                B: "6 might be an attempt at 3×2, but the correct formula is 2^3.",
                C: "3 is just the number of conditions, not the number of test cases.",
                D: "4 would be 2^2, which is for two conditions."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.3",
            learningObjective: "FL-4.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["decision table", "black-box", "combinatorial testing"],
            examTip: "Decision table columns = 2^(number of conditions) for full coverage.",
            memoryAid: "n conditions = 2^n test cases for a complete decision table."
        },
        {
            id: "Q022",
            statement: "Em teste de transição de estados, qual é o número mínimo de casos de teste necessário para cobrir todos os estados num sistema com 5 estados?",
            options: {
                A: "Pelo menos um caso de teste para visitar cada estado",
                B: "Exatamente 5 casos de teste",
                C: "Exatamente 10 casos de teste para todas as transições",
                D: "Isso depende do número de transições entre estados"
            },
            correctAnswer: "A",
            explanation: "At minimum, one test case can visit all states if the path covers each state at least once. The test case would traverse transitions that lead through all five states. The minimum is not fixed at 5 because a single path can pass through multiple states.",
            whyWrong: "The exact number depends on the state transition diagram structure, but at least one test case is needed to cover all states.",
            optionExplanations: {
                A: "A single test case can potentially visit all states through a well-designed path.",
                B: "A single test case could visit all states if the path is designed correctly.",
                C: "The number depends on the transition diagram, not a fixed value.",
                D: "This is the most accurate - the number depends on the specific transition model."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.4",
            learningObjective: "FL-4.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["state transition", "state coverage", "black-box"],
            examTip: "State coverage: visit each state at least once. Transition coverage: exercise each transition at least once.",
            memoryAid: "States = places you visit; Transitions = roads you take."
        },
        {
            id: "Q023",
            statement: "Qual das seguintes é uma teTcnica de conceção de teste baseada na experiência?",
            options: {
                A: "Antecipacao de erros",
                B: "Particionamento por equivalências",
                C: "Teste de instruções",
                D: "Teste de tabela de decisão"
            },
            correctAnswer: "A",
            explanation: "Statement testing is a white-box technique where test cases are designed to execute statements in the code. Statement coverage measures the percentage of executable statements that have been exercised by the test suite.",
            whyWrong: "Branch testing measures decision outcomes, not individual statements.",
            optionExplanations: {
                A: "Statement testing ensures each executable statement is executed at least once.",
                B: "Branch testing ensures each decision outcome (true/false) is tested.",
                C: "Decision table testing is a black-box technique.",
                D: "Equivalence partitioning is a black-box technique."
            },
            chapter: 4,
            section: "4.3",
            subsection: "4.3.1",
            learningObjective: "FL-4.3.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["statement testing", "white-box", "coverage"],
            examTip: "Statement coverage = every line of code executed at least once.",
            memoryAid: "Statement = lines of code; Branch = decisions (if/else)."
        },
        {
            id: "Q024",
            statement: "Um testador está a testar um formulário de início de sessão e decide testar com sessões abertas, cookies expirados e dados de formulário vazios com base na sua experiência com erros comuns de aplicacoes web. Que técnica de teste está a ser utilizada?",
            options: {
                A: "Antecipacao de erros",
                B: "Particionamento por equivalências",
                C: "Teste de tabela de decisão",
                D: "Teste de instruções"
            },
            correctAnswer: "A",
            explanation: "There are two if statements, each with two outcomes (true/false). To achieve 100% branch coverage, we need to exercise all four branches. With two test cases, we can cover all branches: Test 1 (a>10 is true, b<5 is true) and Test 2 (a>10 is false, b<5 is false).",
            whyWrong: "One test case can only cover two of the four branches at most.",
            optionExplanations: {
                A: "2 test cases can cover all four branches by choosing opposite values for each condition.",
                B: "One test case covers at most two branches (50% branch coverage).",
                C: "3 is more than the minimum needed.",
                D: "4 would also work but is not the minimum."
            },
            chapter: 4,
            section: "4.3",
            subsection: "4.3.2",
            learningObjective: "FL-4.3.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["branch testing", "white-box", "coverage", "test cases"],
            examTip: "For N independent decisions, you may need as few as 2 test cases to achieve 100% branch coverage.",
            memoryAid: "Branch coverage = test both the 'yes' and 'no' of every decision."
        },
        {
            id: "Q025",
            statement: "Qual das seguintes opções descreve melhor uma condição de teste?",
            options: {
                A: "Um aspeto da base de teste que pode ser verificado por um ou mais casos de teste",
                B: "Um conjunto de valores de entrada para um caso de teste",
                C: "O resultado esperado de um caso de teste",
                D: "O ambiente de teste onde os testes são executados"
            },
            correctAnswer: "A",
            explanation: "Error guessing is an experience-based technique where testers use their knowledge of past defects, common error patterns, and intuition to guess what defects might exist in the software. It is often used as a supplement to more formal techniques.",
            whyWrong: "Exploratory testing is also experience-based but involves simultaneous learning, test design, and execution.",
            optionExplanations: {
                A: "Error guessing relies on experience and intuition to identify likely defect areas.",
                B: "Exploratory testing involves concurrent test design and execution with learning.",
                C: "Checklist-based testing follows a predefined list of checks.",
                D: "Equivalence partitioning is a black-box technique, not experience-based."
            },
            chapter: 4,
            section: "4.4",
            subsection: "4.4.1",
            learningObjective: "FL-4.4.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["error guessing", "experience-based", "test techniques"],
            examTip: "Error guessing = 'what could go wrong here?' based on past experience.",
            memoryAid: "Error guessing = educated guess about where bugs hide."
        },
        {
            id: "Q026",
            statement: "Qual é o objetivo principal do teste de aceitação?",
            options: {
                A: "Determinar se o sistema satisfaz as necessidades do utilizador e está pronto para uso operacional",
                B: "Encontrar o máximo número de defeitos no sistema",
                C: "Verificar o funcionamento de componentes individuais",
                D: "Medir o desempenho do sistema sob carga"
            },
            correctAnswer: "A",
            explanation: "Exploratory testing is characterized by concurrent test design, execution, and learning. Testers explore the application dynamically, creating and executing tests based on their observations and discoveries in real time.",
            whyWrong: "Error guessing is more focused on predicting defects based on past experience, not on simultaneous learning and testing.",
            optionExplanations: {
                A: "Exploratory testing involves simultaneous learning, test design, and test execution.",
                B: "Error guessing relies on predicting defects from past experience.",
                C: "Checklist-based testing follows a predefined checklist of items to verify.",
                D: "Decision table testing is a formal black-box technique."
            },
            chapter: 4,
            section: "4.4",
            subsection: "4.4.2",
            learningObjective: "FL-4.4.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["exploratory testing", "experience-based", "simultaneous learning"],
            examTip: "Exploratory testing = learn, design, and execute all at the same time.",
            memoryAid: "Exploratory = explore like an explorer discovering new territory."
        },
        {
            id: "Q027",
            statement: "Qual das seguintes é um exemplo de teste não funcional?",
            options: {
                A: "Medir o tempo de resposta de um sistema quando 1000 utilizadores acedem simultaneamente",
                B: "Verificar se um formulário de início de sessão aceita credenciais validas",
                C: "Testar se uma função de cálculo produz o resultado correto",
                D: "Validar o fluxo de um processo de negócio do início ao fim"
            },
            correctAnswer: "A",
            explanation: "A test leader (or test manager) is responsible for test planning, including creating the test strategy and test plan, coordinating testing activities, and reporting test progress to stakeholders.",
            whyWrong: "Writing source code is a developer responsibility, not a test leader's role.",
            optionExplanations: {
                A: "Test planning and strategy creation are key test leadership responsibilities.",
                B: "Coding is a development role, not a testing role.",
                C: "Requirements approval is typically a product owner or stakeholder responsibility.",
                D: "Deployment is usually handled by operations or release management."
            },
            chapter: 5,
            section: "5.1",
            subsection: "5.1.1",
            learningObjective: "FL-5.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["test leader", "test planning", "test management"],
            examTip: "Test leader = manage people, plan testing, report progress. Tester = design, implement, execute tests.",
            memoryAid: "Leader = plans and manages; Tester = does the testing."
        },
        {
            id: "Q028",
            statement: "Num projeto de desenvolvimento de software, quais são os níveis de teste tipicos?",
            options: {
                A: "Teste de componente, teste de integração, teste de sistema e teste de aceitação",
                B: "Teste unitario, teste de sistema e teste de aceitação apenas",
                C: "Teste de componente, teste de integração e teste de aceitação apenas",
                D: "Teste de sistema e teste de aceitação apenas"
            },
            correctAnswer: "A",
            explanation: "Test estimation techniques include expert judgment (using the experience of experts), work breakdown structure (decomposing work into smaller components), analogy-based estimation (comparing with similar projects), and metrics-based estimation (using historical data).",
            whyWrong: "Code compilation time has no relation to testing effort estimation.",
            optionExplanations: {
                A: "WBS and expert judgment are recognized test estimation techniques.",
                B: "Compilation time is unrelated to test effort estimation.",
                C: "Developer count is not a standard test estimation metric.",
                D: "Comment lines are irrelevant to estimating testing effort."
            },
            chapter: 5,
            section: "5.2",
            subsection: "5.2.1",
            learningObjective: "FL-5.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test estimation", "WBS", "expert judgment"],
            examTip: "Common estimation techniques: expert judgment, analogy, WBS, and metrics-based.",
            memoryAid: "Test estimation = WBS + Expert + Historical data."
        },
        {
            id: "Q029",
            statement: "Uma equipa está a desenvolver um novo sistema de processamento de encomendas. Eles decidem que os programadores testarao cada módulo individualmente, depois testarao as interacoes entre módulos e, finalmente, testarao todo o sistema. Que sequência de níveis de teste estão a seguir?",
            options: {
                A: "Componente, integração, sistema",
                B: "Sistema, integração, componente",
                C: "Integracao, componente, sistema",
                D: "Componente, sistema, integração"
            },
            correctAnswer: "A",
            explanation: "When test progress deviates from the plan, the test manager should report the status transparently to stakeholders and propose actionable options. This is part of test monitoring and control - measuring progress and taking corrective actions.",
            whyWrong: "Skipping tests or ignoring the situation is irresponsible and could lead to quality issues.",
            optionExplanations: {
                A: "Transparent reporting and proposing options demonstrates proper test management.",
                B: "Skipping tests ignores quality risks and is not responsible behavior.",
                C: "Asking developers to fix defects does not address the test execution gap.",
                D: "Ignoring the situation is unprofessional and risky."
            },
            chapter: 5,
            section: "5.3",
            subsection: "5.3.1",
            learningObjective: "FL-5.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test monitoring", "test control", "progress reporting"],
            examTip: "Test control = when actual progress deviates from plan, take corrective action.",
            memoryAid: "Monitor = measure; Control = adjust."
        },
        {
            id: "Q030",
            statement: "Qual é o principal objetivo de uma revisão de código?",
            options: {
                A: "Encontrar defeitos no código e melhorar a qualidade do código",
                B: "Substituir a necessidade de teste dinanmico",
                C: "Medir o desempenho do código",
                D: "Documentar o código para referência futura"
            },
            correctAnswer: "A",
            explanation: "Configuration management ensures that all test artifacts (test plans, test cases, test data, test scripts) and the items being tested are properly identified, controlled, and tracked. It provides traceability and the ability to reproduce test conditions.",
            whyWrong: "Configuration management is broader than just managing servers or automation frameworks.",
            optionExplanations: {
                A: "CM ensures integrity, traceability, and control of test artifacts and items under test.",
                B: "Automation framework configuration is only a small part of CM.",
                C: "Server configuration is part of environment management, not full CM.",
                D: "OS tracking is a minor detail, not the primary purpose of CM."
            },
            chapter: 5,
            section: "5.4",
            subsection: "5.4.1",
            learningObjective: "FL-5.4.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["configuration management", "test artifacts", "integrity"],
            examTip: "Configuration management = version control + traceability + change control for all test work products.",
            memoryAid: "CM = Know what you have, know what changed, know how to get back."
        },
        {
            id: "Q031",
            statement: "Qual dos seguintes é um exemplo de teste estático?",
            options: {
                A: "Rever um documento de requisitos para identificar ambiguidades",
                B: "Executar casos de teste para encontrar defeitos",
                C: "Medir o desempenho da aplicação sob carga",
                D: "Realizar teste de aceitação com utilizadores"
            },
            correctAnswer: "A",
            explanation: "Product risks (also called quality risks) are risks related to the quality of the software product itself. These include potential defects, poor performance, security vulnerabilities, or usability problems.",
            whyWrong: "Project risks relate to management and organizational aspects, not the software itself.",
            optionExplanations: {
                A: "Product risks are quality-related risks inherent in the software product.",
                B: "Project risks involve schedule, budget, resources, and organizational factors.",
                C: "Business risk is a type of project risk related to business impact.",
                D: "Schedule risk is a type of project risk related to timelines."
            },
            chapter: 5,
            section: "5.5",
            subsection: "5.5.1",
            learningObjective: "FL-5.5.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["product risk", "quality risk", "risk management"],
            examTip: "Product risk = what could go wrong with the software. Project risk = what could go wrong with the project.",
            memoryAid: "Product = the 'what'; Project = the 'how'."
        },
        {
            id: "Q032",
            statement: "Qual é a principal diferença entre uma revisão informal é uma revisão formal?",
            options: {
                A: "Uma revisão informal não têm um processo definido e não requer reuniões formais; uma revisão formal segue um processo definido com papéis e reuniões",
                B: "Uma revisão informal é realizada por gestores; uma revisão formal é realizada por testadores",
                C: "Uma revisão informal só pode ser feita após a revisão formal",
                D: "Uma revisão formal não requer preparação"
            },
            correctAnswer: "A",
            explanation: "A good defect report includes a concise description of the defect, precise steps to reproduce it, and what was expected versus what actually happened. Additional useful information includes severity, priority, environment details, and supporting attachments.",
            whyWrong: "The developer assignment is determined by the project manager or team lead, not included in the initial defect report.",
            optionExplanations: {
                A: "Steps to reproduce, expected vs actual results, and clear description are essential.",
                B: "Assignment is a triage decision, not typically part of the defect report itself.",
                C: "Cost estimation is a management activity, not part of defect reporting.",
                D: "Tester name and test case ID may be useful metadata but are not the primary content."
            },
            chapter: 5,
            section: "5.6",
            subsection: "5.6.1",
            learningObjective: "FL-5.6.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["defect report", "defect management", "bug report"],
            examTip: "A good defect report should make the defect reproducible by anyone reading it.",
            memoryAid: "Defect report = What + How to reproduce + Expected vs Actual."
        },
        {
            id: "Q033",
            statement: "Qual das seguintes é uma das sete princípios fundamentais de teste?",
            options: {
                A: "O teste exaustivo e impossível",
                B: "O teste só é necessário após o código estar completo",
                C: "Todos os defeitos serão encontrados se forem executados testes suficientes",
                D: "O teste automatizado substitui o teste manual"
            },
            correctAnswer: "A",
            explanation: "Test tools can reduce repetitive manual tasks such as test execution, data generation, and results comparison. This frees testers to focus on more complex testing activities like exploratory testing and test analysis.",
            whyWrong: "Tools cannot eliminate manual testing; many testing activities require human judgment.",
            optionExplanations: {
                A: "Automation of repetitive tasks is a key benefit of test tools.",
                B: "Manual testing is still needed for exploratory, usability, and ad-hoc testing.",
                C: "Tools can find defects but cannot automatically fix code defects.",
                D: "Tools support quality improvement but cannot guarantee it."
            },
            chapter: 6,
            section: "6.1",
            subsection: "6.1.1",
            learningObjective: "FL-6.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["test tools", "automation", "benefits"],
            examTip: "Tools support testing but do not replace testers or guarantee quality.",
            memoryAid: "Tools = helpers, not replacements."
        },
        {
            id: "Q034",
            statement: "O paradoxo do pesticida no teste refere-se a:",
            options: {
                A: "Repetir os mesmos testes repetidamente acaba por deixar de encontrar novos defeitos",
                B: "Os pesticidas são usados para remover defeitos do software",
                C: "Os testadores devem usar pesticidas para proteger os seus ambientes de teste",
                D: "Os defeitos estão concentrados em alguns módulos como pragas"
            },
            correctAnswer: "A",
            explanation: "A common risk of test automation is unrealistic expectations. Automation does not find many new defects (it mostly checks for regressions), requires significant initial investment, and needs ongoing maintenance. Mismanaged expectations can lead to disillusionment with automation.",
            whyWrong: "Automated tests require regular maintenance and updates as the software changes.",
            optionExplanations: {
                A: "Expecting automation to find many new defects is unrealistic; it primarily checks for regressions.",
                B: "Automation requires upfront investment before benefits are realized.",
                C: "Automated tests require significant maintenance effort as the application evolves.",
                D: "Skilled testers are needed to design, implement, and maintain automated tests."
            },
            chapter: 6,
            section: "6.2",
            subsection: "6.2.1",
            learningObjective: "FL-6.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test automation risks", "unrealistic expectations", "maintenance"],
            examTip: "Automation risks: unrealistic expectations, maintenance costs, false sense of security.",
            memoryAid: "Automation = high maintenance, not a magic wand."
        },
        {
            id: "Q035",
            statement: "Qual das seguintes é uma boa pratica para gerir defeitos?",
            options: {
                A: "Registar cada defeito com passos de reprodução claros, resultado esperado e resultado real",
                B: "Fechar defeitos sem investigacao se parecem menores",
                C: "Atribuir todos os defeitos ao testador que os encontrou",
                D: "Eliminar casos de teste que encontram defeitos"
            },
            correctAnswer: "A",
            explanation: "Risk-based testing prioritizes test activities based on the risk level of each feature or component. Features with higher likelihood of failure or higher impact of failure are tested more thoroughly. This approach optimizes testing effort under resource constraints.",
            whyWrong: "Exhaustive testing is impossible and would not help with budget constraints.",
            optionExplanations: {
                A: "Risk-based testing focuses effort on the most critical areas.",
                B: "Exhaustive testing is impractical and impossible.",
                C: "Ad-hoc testing lacks the systematic prioritization needed.",
                D: "Full regression testing may not be feasible with limited resources."
            },
            chapter: 5,
            section: "5.5",
            subsection: "5.5.2",
            learningObjective: "FL-5.5.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["risk-based testing", "prioritization", "test management"],
            examTip: "Risk-based testing = test more where risk is higher.",
            memoryAid: "Risk-based = high risk = high priority."
        },
        {
            id: "Q036",
            statement: "Qual é o objetivo de uma reuniao de início (kick-off) no processo de revisão?",
            options: {
                A: "Distribuir o produto de trabalho, explicar os objetivos da revisão e atribuir papéis",
                B: "Executar formalmente o teste",
                C: "Corrigir todos os defeitos encontrados durante a revisão",
                D: "Aprovar o produto de trabalho para produção"
            },
            correctAnswer: "A",
            explanation: "Test completion activities include archiving testware, handing over test artifacts to maintenance teams, evaluating the test process, documenting lessons learned, and closing defect reports. This marks the formal end of the testing effort for a given test level or project.",
            whyWrong: "Deploying to production is not a testing activity; it is an operations activity.",
            optionExplanations: {
                A: "Archiving, evaluation, and lessons learned are key test completion activities.",
                B: "Code completion is a development activity.",
                C: "Deployment is an operations or release management activity.",
                D: "Starting the next iteration is a planning activity, not test completion."
            },
            chapter: 1,
            section: "1.4",
            subsection: "1.4.1",
            learningObjective: "FL-1.4.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["test completion", "test process", "lessons learned"],
            examTip: "Test completion = archive, evaluate, learn, and close.",
            memoryAid: "Completion = Clean up, Learn, and Move on."
        },
        {
            id: "Q037",
            statement: "Qual técnica de teste é mais adequada para um sistema com um número limitado de condições de entrada que produzem ações específicas com base em regras de negócio?",
            options: {
                A: "Teste de tabela de decisão",
                B: "Particionamento por equivalências",
                C: "Teste de instruções",
                D: "Teste exploratório"
            },
            correctAnswer: "A",
            explanation: "Defect clustering is the principle that defects tend to concentrate in a small number of modules or areas within a system. This observation helps test teams focus their testing efforts on high-risk areas.",
            whyWrong: "The pesticide paradox relates to repeated tests becoming ineffective, not defect concentration.",
            optionExplanations: {
                A: "Defect clustering reflects the Pareto principle applied to testing: 80% of defects found in 20% of modules.",
                B: "Pesticide paradox concerns tests losing effectiveness when repeated.",
                C: "Absence-of-errors fallacy means no defects found does not mean the system meets needs.",
                D: "Exhaustive testing impossibility is about not being able to test everything."
            },
            chapter: 1,
            section: "1.3",
            subsection: "1.3.1",
            learningObjective: "FL-1.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["defect clustering", "testing principles", "Pareto"],
            examTip: "Defect clustering = most bugs are in a few places. Focus testing there.",
            memoryAid: "Defect clustering = the 80/20 rule: 80% of defects in 20% of modules."
        },
        {
            id: "Q038",
            statement: "Qual técnica de conceção de teste utiliza tipicamente um diagrama para representar diferentes estados do sistema e as transições entre eles?",
            options: {
                A: "Teste de transição de estados",
                B: "Particionamento por equivalências",
                C: "Teste de tabela de decisão",
                D: "Análise de valor fronteira"
            },
            correctAnswer: "A",
            explanation: "A risk-based approach is a recognized good practice in testing. It helps optimize the use of limited resources by focusing testing effort on areas with the highest product risks, ensuring the most critical functionality is tested thoroughly.",
            whyWrong: "Testing everything with equal priority ignores that some features have higher business impact than others.",
            optionExplanations: {
                A: "Risk-based prioritization is a key good practice in testing.",
                B: "Equal priority ignores risk differences and wastes resources.",
                C: "Delaying testing violates the early testing principle.",
                D: "Automation is not appropriate for all test levels (e.g., exploratory testing)."
            },
            chapter: 1,
            section: "1.5",
            subsection: "1.5.2",
            learningObjective: "FL-1.5.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["good practices", "risk-based testing", "prioritization"],
            examTip: "Good practices: risk-based, early testing, independent testing, process improvement.",
            memoryAid: "Good testing = risk-aware, early, and continuous."
        },
        {
            id: "Q039",
            statement: "Qual é o número mínimo de casos de teste necessarios para 100 por cento de cobertura de instruções no seguinte código? se (a maior que 0) { imprimir (Positivo) } senao { imprimir (Não positivo) } imprimir (Feito)",
            options: {
                A: "2",
                B: "1",
                C: "3",
                D: "4"
            },
            correctAnswer: "A",
            explanation: "Verification answers the question 'Are we building the product right?' by checking that work products conform to specifications. Validation answers 'Are we building the right product?' by checking that the product meets stakeholder needs.",
            whyWrong: "Both developers and testers can perform both verification and validation activities.",
            optionExplanations: {
                A: "Verification confirms specification compliance; validation confirms stakeholder needs are met.",
                B: "Both roles can perform both types of activities.",
                C: "Verification typically precedes validation but they often overlap.",
                D: "They are distinct but complementary concepts."
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["verification", "validation", "quality"],
            examTip: "Verification = 'Are we building it right?' Validation = 'Are we building the right thing?'",
            memoryAid: "Verification = check the specs; Validation = check the needs."
        },
        {
            id: "Q040",
            statement: "Qual é a cobertura de instruções quando um conjunto de testes executa 15 de 20 instruções executaveis pelo menos uma vez?",
            options: {
                A: "75 por cento",
                B: "25 por cento",
                C: "80 por cento",
                D: "133 por cento"
            },
            correctAnswer: "A",
            explanation: "When selecting a test tool, the most important factor is how well it integrates with the existing development environment, processes, and tools. Compatibility, integration capabilities, and organizational fit are critical considerations.",
            whyWrong: "UI color scheme and social media popularity are not valid criteria for tool selection.",
            optionExplanations: {
                A: "Integration with existing tools and processes is a primary selection criterion.",
                B: "Aesthetics are not a valid technical decision factor.",
                C: "Popularity does not equate to suitability or effectiveness.",
                D: "Certifications are less important than technical fit and integration."
            },
            chapter: 6,
            section: "6.1",
            subsection: "6.1.2",
            learningObjective: "FL-6.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["tool selection", "integration", "test management"],
            examTip: "Tool selection: fit with processes, integration, costs, support, and organizational maturity.",
            memoryAid: "Tool selection = fit first, features second."
        },
    ],
    exam2: [
        {
            id: "Q041",
            statement: "Uma empresa está a desenvolver um sistema de gestão de encomendas e os testadores encontram vários defeitos. Qual das seguintes sequencias descreve corretamente o processo desde um erro humano até uma falha observavel?",
            options: {
                A: "Erro, defeito, falha",
                B: "Defeito, erro, falha",
                C: "Falha, erro, defeito",
                D: "Erro, falha, defeito"
            },
            correctAnswer: "A",
            explanation: "A test condition (also known as a test situation) is an aspect of the system that can be verified. A test case is a more detailed artifact that includes specific input values, expected results, preconditions, and postconditions designed to test one or more test conditions.",
            whyWrong: "The terms are not interchangeable; they represent different levels of detail in the test process.",
            optionExplanations: {
                A: "Test conditions identify what to test; test cases define how to test it with specific data.",
                B: "This reverses the hierarchy; test cases are derived from test conditions.",
                C: "They are distinct concepts at different abstraction levels.",
                D: "Test cases are documented as part of test implementation, not requirements."
            },
            chapter: 1,
            section: "1.4",
            subsection: "1.4.2",
            learningObjective: "FL-1.4.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test condition", "test case", "test documentation"],
            examTip: "Test condition = what to test; Test case = how to test it.",
            memoryAid: "Condition = the target; Case = the ammunition."
        },
        {
            id: "Q042",
            statement: "Qual das seguintes é uma responsabilidade principal de um gestor de teste?",
            options: {
                A: "Planear, monitorizar e controlar as atividades de teste",
                B: "Escrever todo o código da aplicação",
                C: "Realizar todos os testes manualmente",
                D: "Gerir a base de dados de produção"
            },
            correctAnswer: "A",
            explanation: "Non-functional testing evaluates how the system behaves, including performance, security, usability, reliability, and maintainability. Testing page load time is a performance test, which is a type of non-functional testing.",
            whyWrong: "Checking that the login button redirects is functional testing (verifying a specific function).",
            optionExplanations: {
                A: "Performance testing is a non-functional test type measuring response time.",
                B: "Testing login redirection is functional testing.",
                C: "Search function correctness is functional testing.",
                D: "Email format validation is functional testing."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.2",
            learningObjective: "FL-2.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["non-functional testing", "performance testing", "test types"],
            examTip: "Non-functional = HOW WELL (performance, security, usability). Functional = WHAT it does.",
            memoryAid: "Non-functional = quality attributes; Functional = features."
        },
        {
            id: "Q043",
            statement: "Qual é o objetivo principal dos critérios de saida no teste?",
            options: {
                A: "Definir as condições que devem ser satisfeitas para que o teste possa ser considerado completo",
                B: "Especificar os valores de entrada para cada caso de teste",
                C: "Definir o formato do relatório de defeitos",
                D: "Determinar o número de testadores necessarios"
            },
            correctAnswer: "A",
            explanation: "Maintenance testing is required when changes are made to an existing system. The addition of encryption is a change that requires both confirmation testing (verifying the encryption works) and regression testing (ensuring existing functionality is not broken).",
            whyWrong: "Only testing the encryption module ignores potential side effects on other parts of the system.",
            optionExplanations: {
                A: "Maintenance testing with regression testing ensures the change works without breaking existing features.",
                B: "Unit testing alone does not cover integration and system-level impacts.",
                C: "Testing is always needed when changes are introduced to a system.",
                D: "Acceptance testing alone may not catch technical regressions."
            },
            chapter: 2,
            section: "2.3",
            subsection: "2.3.1",
            learningObjective: "FL-2.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["maintenance testing", "regression testing", "impact analysis"],
            examTip: "Any change to a production system requires maintenance testing = confirmation + regression.",
            memoryAid: "Change = confirm the change + check nothing else broke."
        },
        {
            id: "Q044",
            statement: "O que é um risco de projeto no contexto de teste?",
            options: {
                A: "Risco relacionado com a gestão do projeto, como calendario, orcamento ou disponibilidade de recursos",
                B: "O risco de o software ter defeitos após a sua disponibilização",
                C: "O risco de o ambiente de produção falhar",
                D: "O risco de os utilizadores não gostarem da interface"
            },
            correctAnswer: "A",
            explanation: "Test levels are groups of testing activities organized and managed together based on the development lifecycle phase. The four main test levels are component (unit), integration, system, and acceptance testing.",
            whyWrong: "Functional testing, performance testing, and security testing are test types, not test levels.",
            optionExplanations: {
                A: "Component, integration, system, and acceptance are the standard test levels.",
                B: "These are examples of test types, not test levels.",
                C: "These are categories of test techniques, not test levels.",
                D: "These are modes of execution, not test levels."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.1",
            learningObjective: "FL-2.2.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["test levels", "component", "integration", "system", "acceptance"],
            examTip: "Test levels = phases of testing (CISA). Test types = what you test (functional/non-functional).",
            memoryAid: "CISA: Component, Integration, System, Acceptance."
        },
        {
            id: "Q045",
            statement: "Um gestor de teste identifica que o ambiente de teste não estara pronto a tempo para o início da execução do teste. Que tipo de risco é este?",
            options: {
                A: "Risco de projeto",
                B: "Risco de produto",
                C: "Risco de segurança",
                D: "Risco regulatório"
            },
            correctAnswer: "A",
            explanation: "Acceptance testing is the final test level, performed by or on behalf of users, to determine whether the system is ready for deployment and use. It focuses on validating that the system meets business needs and user requirements.",
            whyWrong: "Acceptance testing is performed by users or business representatives, not developers.",
            optionExplanations: {
                A: "Acceptance testing validates business requirements and fitness for use.",
                B: "Acceptance testing involves users or customers, not typically developers.",
                C: "System testing differs from acceptance testing in scope, audience, and objectives.",
                D: "Acceptance testing covers both functional and non-functional requirements."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.1",
            learningObjective: "FL-2.2.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["acceptance testing", "user acceptance", "validation"],
            examTip: "Acceptance testing = 'Are we building the right product?' from the user's perspective.",
            memoryAid: "Acceptance = user says 'Yes, this works for us.'"
        },
        {
            id: "Q046",
            statement: "Qual das seguintes métricas é mais utilizada para medir a eficacia do teste na detecao de defeitos?",
            options: {
                A: "Percentagem de detecao de defeitos",
                B: "Numero de casos de teste executados por hora",
                C: "Numero de linhas de código no sistema",
                D: "Percentagem de cobertura de código"
            },
            correctAnswer: "A",
            explanation: "When a significant defect is found during a review that prevents meaningful continuation, the moderator may suspend or adjourn the review. The author fixes the defect, and the review is rescheduled. This prevents wasting participants' time reviewing a known-problematic document.",
            whyWrong: "Continuing the review when a fundamental defect exists wastes participants' time as the document will need to change significantly.",
            optionExplanations: {
                A: "Suspending the review is appropriate for major defects that affect reviewability.",
                B: "Continuing ignores the major issue and wastes effort.",
                C: "Approval cannot happen with unresolved major defects.",
                D: "Fixing during the review disrupts the process and is not standard practice."
            },
            chapter: 3,
            section: "3.2",
            subsection: "3.2.1",
            learningObjective: "FL-3.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["formal review", "review process", "review procedures"],
            examTip: "Major defect found? Suspend the review, fix the document, then reschedule.",
            memoryAid: "Big problem = pause review, fix, restart."
        },
        {
            id: "Q047",
            statement: "Qual ferramenta é mais adequada para gerir casos de teste, executar testes e reportar resultados?",
            options: {
                A: "Ferramenta de gestão de teste",
                B: "Compilador",
                C: "Ferramenta de análise estática",
                D: "Sistema de controlo de versões"
            },
            correctAnswer: "A",
            explanation: "Static analysis examines source code or other work products without executing them. Dynamic analysis involves executing the code and observing its behavior. Static analysis detects issues like coding standard violations, while dynamic analysis detects runtime failures.",
            whyWrong: "Both static and dynamic analysis can be automated or manual depending on the tools and context.",
            optionExplanations: {
                A: "Static = no execution; Dynamic = execution required.",
                B: "Both can be automated or performed manually.",
                C: "This describes compile-time vs runtime, which is a different distinction.",
                D: "Static analysis does not require a test environment; dynamic analysis typically does."
            },
            chapter: 3,
            section: "3.1",
            subsection: "3.1.2",
            learningObjective: "FL-3.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["static analysis", "dynamic analysis", "code execution"],
            examTip: "Static = don't run the code; Dynamic = run the code and watch what happens.",
            memoryAid: "Static = read-only; Dynamic = run-time."
        },
        {
            id: "Q048",
            statement: "Qual é o objetivo principal de uma ferramenta de análise estática?",
            options: {
                A: "Analisar código fonte ou outros produtos de trabalho sem os executar",
                B: "Executar testes automaticamente",
                C: "Gerir requisitos e casos de teste",
                D: "Medir o desempenho do sistema em execução"
            },
            correctAnswer: "A",
            explanation: "The moderator (also called the review leader) is responsible for planning the review, leading the review meeting, ensuring the process is followed, mediating discussions, and ensuring the review achieves its objectives.",
            whyWrong: "The author is the creator of the work product being reviewed, not the process leader.",
            optionExplanations: {
                A: "The moderator leads and manages the review process.",
                B: "The author created the work product and participates as a reviewer of their own work.",
                C: "Reviewers examine the work product and identify defects.",
                D: "The scribe documents defects and decisions during the review."
            },
            chapter: 3,
            section: "3.2",
            subsection: "3.2.1",
            learningObjective: "FL-3.2.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["moderator", "review roles", "review process"],
            examTip: "Moderator = the leader/manager of the review. Author = the creator. Reviewer = the inspector. Scribe = the recorder.",
            memoryAid: "MARS: Moderator, Author, Reviewer, Scribe."
        },
        {
            id: "Q049",
            statement: "Quando se deve considerar a automação de testes?",
            options: {
                A: "Quando os testes são repetitivos, demorados e exigem execução frequente",
                B: "Quando se quer eliminar completamente o teste manual",
                C: "Para todos os tipos de teste, independentemente da situação",
                D: "Apenas para teste de aceitação"
            },
            correctAnswer: "A",
            explanation: "Decision table testing is a black-box technique that systematically tests combinations of inputs (conditions) to determine the corresponding outputs (actions). It is especially useful for testing business logic with multiple conditions.",
            whyWrong: "Equivalence partitioning tests representative values from partitions, not combinations of conditions.",
            optionExplanations: {
                A: "Decision tables handle combinations of conditions and their corresponding actions.",
                B: "Equivalence partitioning divides inputs into classes, not combinations.",
                C: "Statement testing is a white-box technique for code coverage.",
                D: "Error guessing is an experience-based technique."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.3",
            learningObjective: "FL-4.2.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["decision table", "black-box", "condition combinations"],
            examTip: "Combinations of conditions = decision table testing.",
            memoryAid: "Decision table = grid of conditions and actions."
        },
        {
            id: "Q050",
            statement: "Qual é um risco comum associado a automação de testes?",
            options: {
                A: "Os scripts de teste automatizados podem exigir manutenção significativa quando a aplicação muda",
                B: "A automação garante que todos os defeitos serão encontrados",
                C: "A automação elimina a necessidade de testadores qualificados",
                D: "A automação é sempre mais barata do que o teste manual"
            },
            correctAnswer: "A",
            explanation: "For a valid range of 8-20 characters, the boundaries are: minimum (8), maximum (20), just below minimum (7), and just above maximum (21). These four values test the boundaries of both the valid and invalid partitions.",
            whyWrong: "Option D includes internal values (9, 19) which are not boundary values.",
            optionExplanations: {
                A: "7 (below min), 8 (min), 20 (max), 21 (above max) - the standard BVA boundary set.",
                B: "Missing the invalid boundary values (7 and 21).",
                C: "1 is far below the boundary; 30 is far above. Not true boundary values.",
                D: "9 and 19 are internal values, not boundaries. This is more than needed."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.2",
            learningObjective: "FL-4.2.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["boundary value analysis", "BVA", "password validation"],
            examTip: "2-value BVA: test min, max, min-1, max+1.",
            memoryAid: "BVA = test the edges: just below, at, and just above each boundary."
        },
        {
            id: "Q051",
            statement: "Qual das seguintes atividades faz parte da execução do teste?",
            options: {
                A: "Comparar os resultados reais com os resultados esperados",
                B: "Definir os critérios de aceitação",
                C: "Estimar o esforço de teste",
                D: "Planear o calendario de teste"
            },
            correctAnswer: "A",
            explanation: "The valid partitions are: (0 to 1kg], (1kg to 5kg], (5kg to 10kg], and (10kg to +infinity). Each partition represents a range of inputs that are treated equivalently by the system, producing the same shipping cost.",
            whyWrong: "There are four weight ranges defined in the specification, each producing a different shipping cost.",
            optionExplanations: {
                A: "Four distinct input ranges produce four distinct outputs.",
                B: "Three partitions would miss one of the defined weight ranges.",
                C: "Five would include an extra partition not defined.",
                D: "Two would miss the intermediate weight ranges."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.1",
            learningObjective: "FL-4.2.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["equivalence partitioning", "valid partitions", "weight calculation"],
            examTip: "Each output behavior usually corresponds to a separate partition.",
            memoryAid: "Different output = different partition."
        },
        {
            id: "Q052",
            statement: "O que é um oraculo de teste?",
            options: {
                A: "Uma fonte para determinar o resultado esperado de um caso de teste",
                B: "Uma ferramenta de automação de testes",
                C: "Um tipo de defeito encontrado durante o teste",
                D: "Um papel na equipa de teste"
            },
            correctAnswer: "A",
            explanation: "Transition coverage requires that each transition be executed at least once. From the scenario, we have at least two transitions from ProcessingPayment: to DispensingTicket (success) and back to SelectingTicket (failure). These can be covered by two test cases: one with successful payment and one with failed payment.",
            whyWrong: "One test case cannot cover both the success and failure paths from ProcessingPayment.",
            optionExplanations: {
                A: "Each transition must be exercised at least once for 100% transition coverage.",
                B: "One test case can only follow one path through the state machine.",
                C: "State coverage (visit each state) is different from transition coverage.",
                D: "Two test cases are sufficient for these two specific transitions."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.4",
            learningObjective: "FL-4.2.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["state transition", "transition coverage", "test cases"],
            examTip: "Transition coverage = number of transitions. State coverage = number of states.",
            memoryAid: "Transitions = arrows; States = circles. Cover each arrow at least once."
        },
        {
            id: "Q053",
            statement: "Qual das seguintes opções descreve melhor a rastreabilidade no teste?",
            options: {
                A: "A capacidade de ligar a documentação de teste aos requisitos e vice-versa",
                B: "O processo de encontrar a causa raiz de um defeito",
                C: "A capacidade de executar testes em diferentes ambientes",
                D: "O processo de estimar o esforço de teste"
            },
            correctAnswer: "A",
            explanation: "There are two statements to cover: z = x + y (inside the if block) and z = 0 (inside the else block). To execute both statements, we need two test cases: one where the condition (x > 0 && y < 10) is true, and one where it is false.",
            whyWrong: "One test case can only execute one branch, reaching only one of the two statements.",
            optionExplanations: {
                A: "Two test cases cover both the true and false branches, executing all statements.",
                B: "One test case covers only one branch (50% statement coverage).",
                C: "Three is more than the minimum needed.",
                D: "Four is also more than necessary."
            },
            chapter: 4,
            section: "4.3",
            subsection: "4.3.1",
            learningObjective: "FL-4.3.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["statement testing", "statement coverage", "white-box"],
            examTip: "For simple if-else, you need 2 test cases for 100% statement coverage.",
            memoryAid: "One test per branch = all statements covered."
        },
        {
            id: "Q054",
            statement: "Qual é o objetivo principal de um relatório de sintese de teste?",
            options: {
                A: "Resumir os resultados do teste e fornecer informação para decisões sobre a disponibilização",
                B: "Listar todos os defeitos encontrados durante o teste",
                C: "Fornecer uma descricao detalhada de cada caso de teste",
                D: "Substituir o plano de teste"
            },
            correctAnswer: "A",
            explanation: "Checklist-based testing uses a predefined list of items, scenarios, or conditions to check. It provides systematic coverage of important aspects, is easy to use, and helps ensure consistency across testers. It is a valuable experience-based technique.",
            whyWrong: "Checklist-based testing does not guarantee finding more defects; no technique does.",
            optionExplanations: {
                A: "Checklists provide structured, systematic coverage of key test items.",
                B: "No test technique guarantees finding more defects than others.",
                C: "Checklists are manually created, not automatically generated.",
                D: "Code coverage is a white-box measurement, not related to checklists."
            },
            chapter: 4,
            section: "4.4",
            subsection: "4.4.3",
            learningObjective: "FL-4.4.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["checklist-based testing", "experience-based", "systematic"],
            examTip: "Checklist-based testing = structured but informal, based on tester experience.",
            memoryAid: "Checklist = to-do list for testing."
        },
        {
            id: "Q055",
            statement: "Um testador está a testar uma aplicação movei e seleciona técnicas de teste com base nos riscos identificados, no nível de teste e nas restricoes de tempo. Este cenário ilustra qual princípio de teste?",
            options: {
                A: "O teste depende do contexto",
                B: "O teste exaustivo e impossível",
                C: "Paradoxo do pesticida",
                D: "Agrupamento de defeitos"
            },
            correctAnswer: "A",
            explanation: "A test plan is a living document that should be updated whenever significant changes occur that affect testing. This includes changes in project scope, schedule adjustments, new risks, changes in resources, or modifications to requirements.",
            whyWrong: "A test plan created only at the beginning would become outdated as the project evolves.",
            optionExplanations: {
                A: "Test plans need updates throughout the project lifecycle as conditions change.",
                B: "The test plan must evolve with the project.",
                C: "Updating only at completion defeats the purpose of planning.",
                D: "Customer requests are one reason, but not the only trigger for updates."
            },
            chapter: 5,
            section: "5.2",
            subsection: "5.2.1",
            learningObjective: "FL-5.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test plan", "planning", "updates"],
            examTip: "A test plan is a living document that evolves with the project.",
            memoryAid: "Test plan = live document, not a one-time artifact."
        },
        {
            id: "Q056",
            statement: "Um módulo de software contem vários defeitos, mas a maioria das falhas em produção ocorre num pequeno número de módulos. Qual princípio de teste isto ilustra?",
            options: {
                A: "Agrupamento de defeitos",
                B: "Paradoxo do pesticida",
                C: "Falácia da ausência de erros",
                D: "O teste precoce poupa tempo e dinheiro"
            },
            correctAnswer: "A",
            explanation: "An increase in passed tests indicates progress in test execution. An increase in defect discovery indicates that testing continues to find quality issues. This is a normal pattern during active testing - progress is being made while quality information is still being gathered.",
            whyWrong: "Finding defects is a goal of testing, not a sign of ineffectiveness.",
            optionExplanations: {
                A: "Both progress and defect discovery are normal, expected outcomes of active testing.",
                B: "Finding defects is a primary purpose of testing, not a sign of failure.",
                C: "More test cases may be needed to cover the newly discovered defect areas.",
                D: "This data does not indicate a project cancellation need."
            },
            chapter: 5,
            section: "5.3",
            subsection: "5.3.1",
            learningObjective: "FL-5.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test metrics", "progress monitoring", "defect discovery"],
            examTip: "Increasing pass rate + increasing defect count = testing is working and quality issues remain.",
            memoryAid: "More passing = progress; More defects = testing is still effective."
        },
        {
            id: "Q057",
            statement: "Qual das seguintes atividades é realizada durante o planeamento do teste?",
            options: {
                A: "Definir o ambito, os objetivos e a abordagem do teste",
                B: "Executar casos de teste",
                C: "Analisar os resultados do teste",
                D: "Arquivar os artefactos de teste"
            },
            correctAnswer: "A",
            explanation: "Test monitoring involves collecting and tracking metrics to measure progress against the test plan. Test control involves taking corrective actions when monitoring reveals significant deviations from the plan. They are complementary activities.",
            whyWrong: "They are distinct but related activities; monitoring precedes and informs control.",
            optionExplanations: {
                A: "Monitor = track; Control = act on what you tracked.",
                B: "They are distinct but related activities in the test process.",
                C: "This reverses the definitions of monitoring and control.",
                D: "Both testers and managers participate in both activities."
            },
            chapter: 5,
            section: "5.3",
            subsection: "5.3.1",
            learningObjective: "FL-5.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test monitoring", "test control", "corrective action"],
            examTip: "Monitor = check the map; Control = steer the wheel.",
            memoryAid: "Monitor = measure; Control = adjust."
        },
        {
            id: "Q058",
            statement: "Qual é o principal objetivo de uma estratégia de teste?",
            options: {
                A: "Definir a abordagem geral e os objetivos para o teste a nível organizacional ou de programa",
                B: "Listar todos os casos de teste que serão executados",
                C: "Fornecer instruções detalhadas passo a passo para a execução do teste",
                D: "Substituir a necessidade de planos de teste individuais"
            },
            correctAnswer: "A",
            explanation: "Project risks are management-related risks that could affect the project's success. Test environment availability is a project risk because it relates to resources and infrastructure needed for testing. Product risks (B, C, D) are related to the quality of the software itself.",
            whyWrong: "Security vulnerabilities, incorrect results, and crashes are all product risks (quality risks).",
            optionExplanations: {
                A: "Test environment availability is a project risk (resource/organizational).",
                B: "Security vulnerabilities are product risks related to software quality.",
                C: "Incorrect results are product risks related to functional correctness.",
                D: "Performance issues are product risks related to non-functional quality."
            },
            chapter: 5,
            section: "5.5",
            subsection: "5.5.1",
            learningObjective: "FL-5.5.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["project risk", "product risk", "risk types"],
            examTip: "Project risk = management, schedule, budget, resources. Product risk = software quality.",
            memoryAid: "Project = the project itself; Product = the software being built."
        },
        {
            id: "Q059",
            statement: "Qual das seguintes é uma carateristica do teste de sistema?",
            options: {
                A: "Testar o sistema completo e integrado para avaliar a conformidade com os requisitos especificados",
                B: "Testar componentes individuais em isolamento",
                C: "Testar as interacoes entre componentes integrados",
                D: "Teste realizado pelos utilizadores finais para determinar a aceitação"
            },
            correctAnswer: "A",
            explanation: "Severity measures the impact of a defect on the system. A crash that causes data loss or application termination is typically high severity because it significantly impacts system functionality and may result in loss of work.",
            whyWrong: "User behavior does not reduce the severity of a defect; the system should handle invalid input gracefully.",
            optionExplanations: {
                A: "Application crashes are generally high severity due to data loss and workflow interruption.",
                B: "The system should handle invalid input without crashing, regardless of user behavior.",
                C: "Severity is based on technical impact, not fault assignment.",
                D: "A crash is always significant, not medium."
            },
            chapter: 5,
            section: "5.6",
            subsection: "5.6.1",
            learningObjective: "FL-5.6.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["defect severity", "crash", "defect management"],
            examTip: "Severity = how bad it is technically. Priority = how urgently it must be fixed.",
            memoryAid: "Severity = damage; Priority = urgency."
        },
        {
            id: "Q060",
            statement: "Qual dos seguintes é um exemplo de teste de integração?",
            options: {
                A: "Testar a interacao entre um módulo de pagamentos é um módulo de inventário",
                B: "Testar uma única função que calcula impostos",
                C: "Testar todo o sistema de gestão de encomendas",
                D: "Testar a interface do utilizador com utilizadores finais"
            },
            correctAnswer: "A",
            explanation: "Test management tools provide capabilities for managing test cases, creating test plans and schedules, tracking test execution, managing defects, and generating test reports. They serve as the central repository for all testing-related artifacts.",
            whyWrong: "Test execution tools focus on running automated tests, not managing the overall testing process.",
            optionExplanations: {
                A: "Test management tools handle planning, cases, execution tracking, and reporting.",
                B: "Test execution tools run automated scripts but do not manage the full process.",
                C: "Performance testing tools focus on load and stress testing.",
                D: "Static analysis tools analyze code without executing it."
            },
            chapter: 6,
            section: "6.1",
            subsection: "6.1.1",
            learningObjective: "FL-6.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["test management tool", "tool categories", "test planning"],
            examTip: "Test management tools are the 'control center' for testing activities.",
            memoryAid: "Management tool = the command center."
        },
        {
            id: "Q061",
            statement: "Qual das seguintes é uma vantagem do envolvimento precoce dos testadores num projeto?",
            options: {
                A: "Os defeitos podem ser encontrados mais cedo, quando são mais baratos de corrigir",
                B: "Os testadores podem escrever todo o código",
                C: "O teste pode ser completamente eliminado",
                D: "Os requisitos não precisam de ser revistos"
            },
            correctAnswer: "A",
            explanation: "Record-and-playback tools create tests by recording user interactions. These tests capture low-level details (like screen coordinates and exact timing), making them very fragile. Any UI change can break the tests, requiring complete re-recording. This results in high maintenance costs.",
            whyWrong: "Record-and-playback tools are often inexpensive or free, but the maintenance cost is the real issue.",
            optionExplanations: {
                A: "Fragility and high maintenance are the primary risks of record-and-playback approaches.",
                B: "Cost is not the primary issue; maintenance effort is.",
                C: "They can record interactions, but the recordings are often too specific and fragile.",
                D: "Even without programming, the maintenance challenge remains."
            },
            chapter: 6,
            section: "6.2",
            subsection: "6.2.1",
            learningObjective: "FL-6.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["record-and-playback", "test automation risks", "maintenance"],
            examTip: "Record-and-playback = easy to create, hard to maintain.",
            memoryAid: "Record-and-playback = quick start, slow disaster."
        },
        {
            id: "Q062",
            statement: "O modelo em V no desenvolvimento de software enfatiza:",
            options: {
                A: "Uma relação entre cada fase de desenvolvimento é uma fase de teste correspondente",
                B: "Que o teste só começa após todo o desenvolvimento estar completo",
                C: "A utilização de automação de testes desde o início",
                D: "Que o teste é opcional em projetos mais pequenos"
            },
            correctAnswer: "A",
            explanation: "Independence in testing means the testing activities are performed by people who are not the authors of the work product being tested. Different levels of independence exist, from testing by the developer's colleague to testing by an external organization.",
            whyWrong: "Testing by the original developer lacks independence, which can lead to blind spots.",
            optionExplanations: {
                A: "Independence means the tester is separate from the developer of the item being tested.",
                B: "Independence is about who tests, not about documentation.",
                C: "Automation is a separate concept from independence.",
                D: "This is the opposite of independence."
            },
            chapter: 1,
            section: "1.5",
            subsection: "1.5.1",
            learningObjective: "FL-1.5.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["independence", "testing roles", "objectivity"],
            examTip: "Independence = different person, different perspective, fewer blind spots.",
            memoryAid: "Independence = fresh eyes on the code."
        },
        {
            id: "Q063",
            statement: "Qual dos seguintes é um benefício do teste de manutenção?",
            options: {
                A: "Verificar se as alterações no sistema não introduziram novos defeitos em areas inalteradas",
                B: "Eliminar a necessidade de testes futuros",
                C: "Garantir que todos os defeitos conhecidos foram corrigidos",
                D: "Reduzir o número de testadores necessarios"
            },
            correctAnswer: "A",
            explanation: "The context dependency principle states that testing is performed differently in different contexts. For example, testing for a safety-critical medical system is vastly different from testing an e-commerce website. The approach depends on risks, regulations, and application type.",
            whyWrong: "Using the same methodology for all software ignores the unique risks and characteristics of each project.",
            optionExplanations: {
                A: "Context drives the testing approach - no single approach fits all situations.",
                B: "Most testing should be done in a controlled test environment.",
                C: "Each project context demands a tailored testing approach.",
                D: "Context is fundamental to determining what and how to test."
            },
            chapter: 1,
            section: "1.3",
            subsection: "1.3.1",
            learningObjective: "FL-1.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["context dependent", "testing principles", "approach"],
            examTip: "Context matters: safety-critical, e-commerce, games - each needs a different testing approach.",
            memoryAid: "Context = one size does NOT fit all."
        },
        {
            id: "Q064",
            statement: "Durante o teste de manutenção, o que é teste de confirmação?",
            options: {
                A: "Reexecutar um caso de teste que falhou após a correção do defeito para verificar que o defeito foi corrigido",
                B: "Testar todo o sistema após cada alteração",
                C: "Testar apenas as areas inalteradas do sistema",
                D: "Realizar testes de desempenho após a manutenção"
            },
            correctAnswer: "A",
            explanation: "In Agile development, testers collaborate closely with developers and product owners throughout the iteration. They participate in planning, review user stories, write and automate tests, and provide continuous feedback on quality. Testing is integrated into the development process.",
            whyWrong: "Waiting until the end contradicts the Agile principle of continuous testing and integration.",
            optionExplanations: {
                A: "Agile testers are integrated team members who collaborate continuously.",
                B: "Late testing violates Agile principles of early and continuous testing.",
                C: "Agile testers actively participate in all team activities.",
                D: "Agile testers are hands-on with testing, not just managing tools."
            },
            chapter: 2,
            section: "2.1",
            subsection: "2.1.1",
            learningObjective: "FL-2.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["Agile testing", "tester role", "collaboration"],
            examTip: "In Agile, testing is a team responsibility with continuous collaboration.",
            memoryAid: "Agile tester = teammate, not a separate department."
        },
        {
            id: "Q065",
            statement: "Um sistema foi alterado para corrigir um defeito de segurança. Que tipo de teste deve ser realizado após a correção?",
            options: {
                A: "Teste de confirmação e teste de regressão",
                B: "Apenas teste de confirmação",
                C: "Apenas teste de regressão",
                D: "Nenhum teste é necessário porque a correção é pequena"
            },
            correctAnswer: "A",
            explanation: "Inspections are the most formal type of review, with defined roles, formal entry and exit criteria, a defined process, and detailed data collection. Technical reviews are also formal but less rigorous than inspections, with fewer formal checks and procedures.",
            whyWrong: "The author participates in an inspection by presenting the work product.",
            optionExplanations: {
                A: "Inspections are the most formal review type with strict entry/exit criteria.",
                B: "The author presents and participates in inspections.",
                C: "Technical reviews are typically managed within the team, not requiring management approval.",
                D: "Inspections are performed by trained team members, not necessarily external auditors."
            },
            chapter: 3,
            section: "3.2",
            subsection: "3.2.1",
            learningObjective: "FL-3.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["inspection", "technical review", "formality", "review types"],
            examTip: "Formality level (low to high): Informal, Walkthrough, Technical Review, Inspection.",
            memoryAid: "Review formality: I W T I (Informal, Walkthrough, Technical, Inspection)."
        },
        {
            id: "Q066",
            statement: "Qual é o principal objetivo de um teste de aceitação operacional?",
            options: {
                A: "Verificar se o sistema pode ser operado pelos utilizadores no ambiente de produção",
                B: "Validar se o sistema cumpre os requisitos funcionais",
                C: "Encontrar defeitos no código fonte",
                D: "Medir o desempenho do sistema sob carga"
            },
            correctAnswer: "A",
            explanation: "There are two conditions: customer type (3 values) and purchase amount relative to $100 (2 partitions: below $100 and >= $100). The Cartesian product gives 3 x 2 = 6 combinations to test all partitions thoroughly.",
            whyWrong: "Testing only the boundary condition fails to cover the customer type variations comprehensively.",
            optionExplanations: {
                A: "All 6 combinations of customer type (3) and amount partition (2) are covered.",
                B: "Only tests the >= $100 partition; misses the below $100 partition.",
                C: "Only tests >= $100; misses below $100 and the boundary.",
                D: "Incomplete coverage - only one value per customer type with mixed amount conditions."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.1",
            learningObjective: "FL-4.2.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["equivalence partitioning", "combinations", "discount calculation"],
            examTip: "When multiple conditions exist, consider combining partitions from each condition.",
            memoryAid: "Multiple conditions = multiple partitions = more test combinations."
        },
        {
            id: "Q067",
            statement: "Que tipo de revisão é geralmente liderada pelo autor do produto de trabalho e têm como objetivo principal a obtenção de feedback?",
            options: {
                A: "Percurso",
                B: "Inspecao",
                C: "Revisao técnica",
                D: "Análise estática"
            },
            correctAnswer: "A",
            explanation: "After identifying conditions and actions, the next step in decision table testing is to enumerate all possible combinations of condition values and determine the expected action(s) for each combination. This creates the complete decision table.",
            whyWrong: "Test cases are derived from the completed decision table, not written before the table is complete.",
            optionExplanations: {
                A: "Enumerating condition combinations and defining actions for each creates the decision table.",
                B: "Test case creation comes after the decision table is complete.",
                C: "Prioritization is not a standard step in decision table creation.",
                D: "Decision table testing is a black-box technique; code review is not required."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.3",
            learningObjective: "FL-4.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["decision table", "conditions", "actions", "process"],
            examTip: "Decision table steps: 1) Identify conditions and actions, 2) Enumerate combinations, 3) Define expected actions, 4) Derive test cases.",
            memoryAid: "Conditions + Actions + Combinations = Decision Table."
        },
        {
            id: "Q068",
            statement: "Durante uma inspeção formal, qual é o papel do moderador?",
            options: {
                A: "Planear, facilitar e garantir que a inspeção segue o processo definido",
                B: "Apresentar o produto de trabalho e responder a perguntas",
                C: "Registar todos os defeitos encontrados durante a inspeção",
                D: "Decidir se o produto de trabalho e aprovado"
            },
            correctAnswer: "A",
            explanation: "There are three branch outcomes: the outer if (a > 5) true/false, and the inner if (b < 10) true/false. To cover all three decision outcomes, we need test case 1 (a > 5 and b < 10), test case 2 (a > 5 and b >= 10), and test case 3 (a <= 5).",
            whyWrong: "Two test cases can cover at most if both inner branches are exercised, but the outer else branch would be missed.",
            optionExplanations: {
                A: "Three test cases cover: outer true + inner true, outer true + inner false, and outer false.",
                B: "One test case covers only one path through the nested conditions.",
                C: "Two test cases cannot cover all three branch outcomes.",
                D: "Four would also work but is not the minimum."
            },
            chapter: 4,
            section: "4.3",
            subsection: "4.3.2",
            learningObjective: "FL-4.3.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["branch coverage", "nested conditions", "white-box"],
            examTip: "Nested conditions increase the number of test cases needed for branch coverage.",
            memoryAid: "Nest branches = more paths to test."
        },
        {
            id: "Q069",
            statement: "Qual é a diferença entre cobertura de instruções e cobertura de ramos?",
            options: {
                A: "A cobertura de ramos requer que cada resultado de decisão seja executado; a cobertura de instruções requer que cada instrucao executavel seja executada",
                B: "cobertura de instruções é mais forte do que a cobertura de ramos",
                C: "Cobertura de ramos é usada em teste de caixa-preta; cobertura de instruções é usada em teste de caixa-branca",
                D: "Não ha diferença entre as duas"
            },
            correctAnswer: "A",
            explanation: "Even during exploratory testing, any defect found should be properly documented and reported. The tester should record the steps to reproduce, expected versus actual behavior, and environment details. Findings from exploratory testing are valuable and should not be ignored.",
            whyWrong: "Whether a test was planned or exploratory does not affect the importance of reporting defects found.",
            optionExplanations: {
                A: "All defects found during testing, regardless of technique, should be reported.",
                B: "Defects found during exploratory testing are valid and should be documented.",
                C: "Fixing code is a developer responsibility, not the tester's role.",
                D: "Waiting for someone else to find it wastes time and allows the defect to persist."
            },
            chapter: 4,
            section: "4.4",
            subsection: "4.4.2",
            learningObjective: "FL-4.4.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["exploratory testing", "defect reporting", "ad-hoc"],
            examTip: "All defects matter, regardless of how they were found. Document everything.",
            memoryAid: "Found a bug? Report it. Method does not matter."
        },
        {
            id: "Q070",
            statement: "Qual das seguintes situações exige a realizacao de teste de regressão?",
            options: {
                A: "Apos qualquer alteração, mesmo pequena, para garantir que as funcionalidades existentes continuam a funcionar",
                B: "Apenas após alterações importantes no sistema",
                C: "Apenas quando solicitado pelo gestor do projeto",
                D: "Quando todos os outros testes foram concluidos com sucesso"
            },
            correctAnswer: "A",
            explanation: "Test closure activities formally conclude the testing effort. This includes finalizing and archiving test artifacts, handing over testware to maintenance teams, analyzing lessons learned, documenting project knowledge, and closing all defect reports appropriately.",
            whyWrong: "Test closure is about completing testing properly, not terminating teams or ignoring defects.",
            optionExplanations: {
                A: "Archiving, lessons learned, and formal closure are the goals of test completion.",
                B: "Defect reports should be resolved (fixed, deferred, or rejected), not just closed.",
                C: "Test closure is about completing the work, not disbanding the team.",
                D: "Artifacts are archived, not necessarily moved to other projects."
            },
            chapter: 1,
            section: "1.4",
            subsection: "1.4.1",
            learningObjective: "FL-1.4.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["test closure", "test completion", "lessons learned"],
            examTip: "Test closure = archive, evaluate, learn, and formally complete.",
            memoryAid: "Closure = clean up, then close the book."
        },
        {
            id: "Q071",
            statement: "O que é um defeito no contexto de teste de software?",
            options: {
                A: "Um problema no código ou num produto de trabalho que pode causar uma falha",
                B: "Um erro cometido por um utilizador ao usar o sistema",
                C: "Uma medida de qualidade do software",
                D: "Um tipo de teste realizado pela equipa de desenvolvimento"
            },
            correctAnswer: "A",
            explanation: "Writing production code is a development activity, not a test planning activity. Test planning involves defining objectives, scope, resources, schedule, approach (strategy), techniques, and risk assessments.",
            whyWrong: "All other options are standard test planning activities.",
            optionExplanations: {
                A: "Production code development is outside the scope of test planning.",
                B: "Test objectives and scope are fundamental to test planning.",
                C: "Resource and schedule identification is part of test planning.",
                D: "Test approach and technique selection are key planning decisions."
            },
            chapter: 5,
            section: "5.2",
            subsection: "5.2.1",
            learningObjective: "FL-5.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test planning", "test plan", "scope", "resources"],
            examTip: "Test planning = what, how, who, when, and risks. NOT writing code.",
            memoryAid: "Planning = objectives + scope + schedule + resources + approach."
        },
        {
            id: "Q072",
            statement: "Qual das seguintes opções descreve corretamente a diferença entre validação e verificação?",
            options: {
                A: "Verificacao confirma se o produto foi construido corretamente; validação confirma se o produto certo foi construido",
                B: "Verificacao é realizada por testadores; validação é realizada por programadores",
                C: "Validacao é feita antes da verificação",
                D: "Não ha diferença entre verificação e validação"
            },
            correctAnswer: "A",
            explanation: "Before committing to a test tool, a pilot project should be conducted to assess how well the tool works with the organization's technology stack, processes, and team skills. This helps identify issues early and verify that the tool provides the expected benefits.",
            whyWrong: "Purchasing based on popularity ignores the specific needs and compatibility of the organization.",
            optionExplanations: {
                A: "A pilot project validates the tool's fit and reduces adoption risks.",
                B: "Popularity does not guarantee suitability for the specific context.",
                C: "Automating all tests immediately without evaluation is risky.",
                D: "Automation complements manual testing, does not replace testers."
            },
            chapter: 6,
            section: "6.1",
            subsection: "6.1.2",
            learningObjective: "FL-6.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["tool selection", "pilot project", "automation adoption"],
            examTip: "Always pilot a new tool before full adoption. Proof of concept first.",
            memoryAid: "Pilot before you pilot (implement)."
        },
        {
            id: "Q073",
            statement: "Qual técnica de teste é mais adequada para testar um campo de entrada que aceita números de 1 a 100, onde o comportamento e o mesmo para números dentro de intervalos específicos?",
            options: {
                A: "Particionamento por equivalências",
                B: "Teste de transição de estados",
                C: "Teste de tabela de decisão",
                D: "Teste de instruções"
            },
            correctAnswer: "A",
            explanation: "Error guessing relies on the tester's experience with similar systems, knowledge of common defect patterns (e.g., boundary errors, null pointer issues), and intuition about where defects are likely to hide. It is an experience-based technique.",
            whyWrong: "Error guessing does not require formal analysis of requirements, code structure, or statistical data.",
            optionExplanations: {
                A: "Experience, defect pattern knowledge, and intuition drive error guessing.",
                B: "Decision tables are a formal black-box technique.",
                C: "Code structure analysis is white-box testing.",
                D: "Statistical analysis is not the basis of error guessing."
            },
            chapter: 4,
            section: "4.4",
            subsection: "4.4.1",
            learningObjective: "FL-4.4.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["error guessing", "experience-based", "intuition"],
            examTip: "Error guessing = asking 'what could possibly go wrong here?' based on what went wrong before.",
            memoryAid: "Error guessing = learning from past mistakes."
        },
        {
            id: "Q074",
            statement: "Um sistema de emprestimos aceita pedidos com valores entre 1000 e 50000 euros. Usando análise de valor fronteira, quais valores devem ser testados para as fronteiras inferior e superior?",
            options: {
                A: "999, 1000, 50000, 50001",
                B: "1000, 25000, 50000",
                C: "999, 1000, 1001, 49999, 50000, 50001",
                D: "1000, 50000"
            },
            correctAnswer: "A",
            explanation: "For high-risk projects, a more thorough and documented approach is appropriate. This includes detailed test planning, structured test techniques, comprehensive test case design, rigorous execution, and thorough defect tracking to mitigate the high risks.",
            whyWrong: "Exploratory testing alone may not provide the coverage and traceability needed for high-risk projects.",
            optionExplanations: {
                A: "High-risk projects demand thorough, well-documented, and structured testing.",
                B: "Exploratory testing is valuable but may not provide sufficient coverage alone for high risks.",
                C: "Focusing only on simple features ignores the areas most likely to fail.",
                D: "Skipping testing is never appropriate, especially for high-risk projects."
            },
            chapter: 5,
            section: "5.5",
            subsection: "5.5.2",
            learningObjective: "FL-5.5.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["risk-based testing", "test approach", "high risk"],
            examTip: "Higher risk = more thorough testing. Lower risk = lighter testing.",
            memoryAid: "Risk level drives test intensity."
        },
        {
            id: "Q075",
            statement: "Qual das seguintes é uma técnica de teste de caixa-branca?",
            options: {
                A: "Teste de instruções",
                B: "Particionamento por equivalências",
                C: "Teste de tabela de decisão",
                D: "Antecipacao de erros"
            },
            correctAnswer: "A",
            explanation: "Good test documentation should be clear and understandable by all stakeholders, concise enough to be useful, accurate in its descriptions, and detailed enough to allow anyone to reproduce the tests. It should be maintainable and serve its intended purpose.",
            whyWrong: "Excessive detail makes documentation hard to maintain and use.",
            optionExplanations: {
                A: "Clarity, conciseness, accuracy, and reproducibility are key quality attributes.",
                B: "Excessive detail creates maintenance burden and reduces usability.",
                C: "Test documentation serves multiple stakeholders (testers, developers, managers, auditors).",
                D: "Jargon reduces readability and accessibility."
            },
            chapter: 1,
            section: "1.4",
            subsection: "1.4.2",
            learningObjective: "FL-1.4.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test documentation", "testware", "quality"],
            examTip: "Good test documentation = understandable, reproducible, and maintainable.",
            memoryAid: "Test docs: CRCA - Clear, Reproducible, Concise, Accurate."
        },
        {
            id: "Q076",
            statement: "Qual é o proposito do teste de usabilidade?",
            options: {
                A: "Avaliar a facilidade com que os utilizadores aprendem e utilizam o sistema",
                B: "Encontrar defeitos de segurança no sistema",
                C: "Medir o desempenho do sistema sob carga",
                D: "Verificar se o sistema cumpre os requisitos funcionais"
            },
            correctAnswer: "A",
            explanation: "The defect management process provides a structured workflow for recording, tracking, prioritizing, assigning, resolving, and verifying defects. It ensures defects are properly managed and provides data for process improvement.",
            whyWrong: "The goal is to improve quality and process, not to assign blame or punish.",
            optionExplanations: {
                A: "Defect management is a systematic process for tracking defects throughout their lifecycle.",
                B: "Punishment is not a goal of defect management.",
                C: "Defects are prioritized and resolved based on severity and resources.",
                D: "Defect management focuses on resolution, not blame."
            },
            chapter: 5,
            section: "5.6",
            subsection: "5.6.1",
            learningObjective: "FL-5.6.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["defect management", "defect lifecycle", "tracking"],
            examTip: "Defect management = systematic tracking and resolution, not blame.",
            memoryAid: "Defect management = find, track, fix, verify, learn."
        },
        {
            id: "Q077",
            statement: "Um sistema têm várias interfaces com outros sistemas. O que deve ser testado para garantir que a troca de dados entre os sistemas e correta?",
            options: {
                A: "Teste de integração",
                B: "Teste de componente",
                C: "Teste de aceitação",
                D: "Teste de sistema"
            },
            correctAnswer: "A",
            explanation: "A state represents a condition or situation of the system during its lifecycle (e.g., 'Logged In'). A transition is a change from one state to another, triggered by an event (e.g., 'Logout' triggers transition from 'Logged In' to 'Logged Out').",
            whyWrong: "The terms are distinct and describe different aspects of the state transition model.",
            optionExplanations: {
                A: "States are conditions; transitions are movements between states triggered by events.",
                B: "This reverses the definitions.",
                C: "They are distinct concepts in state transition diagrams.",
                D: "This is a circular description that does not clarify the distinction."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.4",
            learningObjective: "FL-4.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["state transition", "states", "transitions"],
            examTip: "States = where you are; Transitions = how you get somewhere else.",
            memoryAid: "State = noun; Transition = verb."
        },
        {
            id: "Q078",
            statement: "Qual é o objetivo principal de um piloto de automação de testes?",
            options: {
                A: "Avaliar a adequacao de uma ferramenta de automação de testes num contexto específico antes da adoção completa",
                B: "Substituir imediatamente todos os testes manuais por testes automatizados",
                C: "Eliminar a necessidade de formação na ferramenta",
                D: "Garantir que a ferramenta funciona sem qualquer configuração"
            },
            correctAnswer: "A",
            explanation: "Branch coverage (also called decision coverage) measures the percentage of decision outcomes (true/false branches) that have been exercised during testing. It is a white-box coverage metric that ensures each possible decision outcome has been tested.",
            whyWrong: "Statement coverage measures executable statements, not decision outcomes.",
            optionExplanations: {
                A: "Branch coverage = percentage of decision outcomes (true/false) exercised.",
                B: "Statement coverage = percentage of executable statements executed.",
                C: "Requirement coverage = percentage of requirements tested.",
                D: "State coverage = percentage of states visited in a state machine."
            },
            chapter: 4,
            section: "4.3",
            subsection: "4.3.2",
            learningObjective: "FL-4.3.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["branch coverage", "decision coverage", "white-box"],
            examTip: "Branch coverage = decision outcomes (yes/no of each if statement).",
            memoryAid: "Branch = both sides of the fork in the road."
        },
        {
            id: "Q079",
            statement: "Uma equipa de teste está a selecionar uma ferramenta de automação de testes. Qual critério deve ser prioritário?",
            options: {
                A: "A adequacao da ferramenta ao contexto e aos requisitos específicos do projeto",
                B: "O custo da ferramenta ser o mais baixo possível",
                C: "A ferramenta ser a mais popular no mercado",
                D: "A ferramenta ter o maior número de funcionalidades"
            },
            correctAnswer: "A",
            explanation: "A traceability matrix maps the relationship between requirements and test cases. It helps assess test coverage, identify the impact of requirement changes, provide evidence that all requirements are tested, and support reporting.",
            whyWrong: "A traceability matrix supplements test documentation but does not replace it.",
            optionExplanations: {
                A: "Traceability matrices link requirements to test cases for coverage and impact analysis.",
                B: "Test cases still need to be documented; the matrix links them to requirements.",
                C: "Budget calculation is a separate activity.",
                D: "Tester assignment is a resourcing activity, not the purpose of traceability."
            },
            chapter: 5,
            section: "5.3",
            subsection: "5.3.1",
            learningObjective: "FL-5.3.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["traceability matrix", "coverage", "requirements"],
            examTip: "Traceability matrix = connects requirements to tests for coverage and impact analysis.",
            memoryAid: "Matrix = map from requirements to test cases."
        },
        {
            id: "Q080",
            statement: "O que é o retorno do investimento (ROI) no contexto da automação de testes?",
            options: {
                A: "A comparacao entre os custos de automação e os benefícios obtidos, como tempo poupado e aumento de cobertura",
                B: "O lucro gerado pela venda da ferramenta de automação",
                C: "O número de defeitos encontrados pelos testes automatizados",
                D: "A percentagem de testes automatizados em relação aos testes manuais"
            },
            correctAnswer: "A",
            explanation: "Early tester involvement (the 'early testing' principle) allows defects to be found in requirements, design, and early code stages. The cost of fixing a defect increases exponentially the later it is found, so early detection saves significant time and money.",
            whyWrong: "Testers do not write production code; that is the developer's role.",
            optionExplanations: {
                A: "Early defect detection significantly reduces the cost of fixing defects.",
                B: "Developers write production code; testers focus on quality activities.",
                C: "Testing cannot be avoided; early testing complements later testing activities.",
                D: "Unit testing by developers remains important regardless of tester involvement."
            },
            chapter: 1,
            section: "1.2",
            subsection: "1.2.1",
            learningObjective: "FL-1.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["early testing", "cost of defects", "tester involvement"],
            examTip: "The earlier a defect is found, the cheaper it is to fix. This is a key economic argument for early testing.",
            memoryAid: "Early catch = cheap fix; Late catch = expensive fix."
        },
    ],
    exam3: [
        {
            id: "Q081",
            statement: "Qual das seguintes é uma desvantagem do teste de integração big-bang?",
            options: {
                A: "E dificil isolar a causa dos defeitos porque todos os componentes são integrados ao mesmo tempo",
                B: "Requer mais tempo do que a integração incremental",
                C: "Pode ser usado apenas em projetos pequenos",
                D: "Não requer planeamento"
            },
            correctAnswer: "A",
            explanation: "Testing provides information about the quality of the software product and the risk of failure to stakeholders. It cannot guarantee the absence of defects, but rather provides visibility into the quality level and residual risks.",
            whyWrong: "Testing cannot guarantee defect-free software; it can only reveal the presence of defects and provide quality information to support informed decision-making.",
            optionExplanations: {
                A: "Testing reveals defects and gives stakeholders information about quality levels and residual risks.",
                B: "Exhaustive testing is impossible; testing cannot prove the absence of defects.",
                C: "Testing is a professional discipline needed regardless of developer skill level.",
                D: "Testing should start early in the SDLC and covers both functional and non-functional aspects."
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["testing purpose", "quality information", "risk of failure"],
            examTip: "Testing provides information and reveals defects; it does not prove correctness.",
            memoryAid: "Testing = quality information provider, not correctness certifier."
        },
        {
            id: "Q082",
            statement: "Qual das seguintes é uma vantagem do teste de integração incremental?",
            options: {
                A: "Os defeitos são mais faceis de localizar porque os componentes são integrados um de cada vez",
                B: "Todos os componentes são integrados de uma só vez",
                C: "Não requer stubs ou drivers",
                D: "E mais rapido do que a integração big-bang"
            },
            correctAnswer: "A",
            explanation: "The test execution revealed the failure (incorrect total). The developer then debugged the code to find and fix the root cause. Testing and debugging are complementary but distinct activities.",
            whyWrong: "Debugging is the process of finding and fixing the root cause of a known defect, which is what the developer performed.",
            optionExplanations: {
                A: "Test execution found the defect; debugging locates the root cause and fixes it.",
                B: "No requirements review occurred in this scenario.",
                C: "Test planning occurs before execution; code inspection is a static technique.",
                D: "This scenario involves dynamic testing and debugging, not static analysis."
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.2",
            learningObjective: "FL-1.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["testing", "debugging", "root cause analysis"],
            examTip: "Testing reveals defects; debugging identifies and fixes the root cause.",
            memoryAid: "Testing = find failure; Debugging = find cause and fix."
        },
        {
            id: "Q083",
            statement: "Qual é a diferença entre um stube um driver no teste de integração?",
            options: {
                A: "Um stub simula um componente chamado; um driver simula um componente chamador",
                B: "Um drive é usado em teste de sistema; um stub é usado em teste de componente",
                C: "Um stub é uma ferramenta; um driver é uma pessoa",
                D: "Ambos são o mesmo tipo de simulação"
            },
            correctAnswer: "A",
            explanation: "The cost of fixing a defect increases exponentially the later it is found in the development lifecycle. Early testing (reviews, static analysis, early test execution) finds defects when they are cheapest to fix, providing significant economic benefits.",
            whyWrong: "While developers may appreciate early feedback, the primary economic argument is the significantly lower cost of fixing early defects.",
            optionExplanations: {
                A: "Early defect detection significantly reduces cost of quality. This is the key economic argument.",
                B: "The goal is not just more test cases, but earlier and cheaper defect detection.",
                C: "Early testing complements but does not replace acceptance testing.",
                D: "This is a secondary benefit, not the primary economic argument."
            },
            chapter: 1,
            section: "1.2",
            subsection: "1.2.1",
            learningObjective: "FL-1.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["early testing", "cost of defects", "economics of testing"],
            examTip: "The earlier a defect is found, the cheaper it is to fix. This is the key argument for early testing.",
            memoryAid: "Early test = cheap fix; Late test = expensive fix."
        },
        {
            id: "Q084",
            statement: "Qual das seguintes é um exemplo de teste funcional?",
            options: {
                A: "Verificar se uma função de transferencia bancaria transfere corretamente o valor especificado",
                B: "Medir o tempo de carregamento de uma pagina",
                C: "Verificar a segurança da palavra-passe",
                D: "Testar a usabilidade da interface"
            },
            correctAnswer: "A",
            explanation: "The principle of 'Exhaustive testing is impossible' states that testing everything (all combinations of inputs, outputs, preconditions, and paths) is not feasible except for trivial systems. Therefore, risk analysis and test techniques must be used to focus testing efforts.",
            whyWrong: "Defect clustering means defects concentrate in a few modules, not that exhaustive testing is impossible.",
            optionExplanations: {
                A: "Exhaustive testing is impossible for all but the most trivial systems due to the infinite number of input combinations.",
                B: "Defect clustering refers to the concentration of defects in specific modules.",
                C: "The pesticide paradox concerns tests becoming ineffective when repeated.",
                D: "Absence-of-errors fallacy means a defect-free system may still not meet user needs."
            },
            chapter: 1,
            section: "1.3",
            subsection: "1.3.1",
            learningObjective: "FL-1.3.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["exhaustive testing", "testing principles", "impossible"],
            examTip: "Exhaustive testing is impossible, so use risk-based approaches and techniques to focus testing.",
            memoryAid: "Exhaustive = impossible = prioritize by risk."
        },
        {
            id: "Q085",
            statement: "O teste de regressão deve ser realizado:",
            options: {
                A: "Sempre que o software é alterado, incluindo correções de defeitos e novas funcionalidades",
                B: "Apenas no final do projeto",
                C: "Apenas quando solicitado pelo cliente",
                D: "Nunca, se os testes de confirmação forem realizados"
            },
            correctAnswer: "A",
            explanation: "Test implementation is the activity where test cases are organized, prioritized, and assembled into test procedures and test execution schedules. It also involves creating test data and setting up the test environment.",
            whyWrong: "Test analysis involves identifying test conditions, not organizing test cases into execution schedules.",
            optionExplanations: {
                A: "Test implementation creates test procedures, schedules, and prepares test data.",
                B: "Test analysis identifies test conditions from requirements.",
                C: "Test planning defines objectives, approach, and resources.",
                D: "Test completion archives artifacts and evaluates the process."
            },
            chapter: 1,
            section: "1.4",
            subsection: "1.4.1",
            learningObjective: "FL-1.4.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test implementation", "test process", "test scheduling"],
            examTip: "Test implementation = organize, prioritize, schedule, and prepare test execution.",
            memoryAid: "Implementation = organize and schedule for execution."
        },
        {
            id: "Q086",
            statement: "Qual das seguintes opções descreve melhor o teste baseado no risco?",
            options: {
                A: "Priorizar e focar os testes com base no nível de risco dos componentes ou funcionalidades",
                B: "Testar apenas as funcionalidades que o cliente mencionou",
                C: "Testar todas as funcionalidades com o mesmo nível de detalhe",
                D: "Realizar testes apenas para os riscos de projeto"
            },
            correctAnswer: "A",
            explanation: "Testware includes all artifacts produced during the test process such as test plans, test cases, test scripts, test data, test logs, and test reports. These are the work products of testing activities.",
            whyWrong: "Source code is a development artifact, not testware. Testware is produced by the testing process.",
            optionExplanations: {
                A: "Test scripts and test data are testware produced during test implementation.",
                B: "Source code is a development artifact, not testware.",
                C: "Database schema is a design or development artifact.",
                D: "User manuals are documentation artifacts, typically not classified as testware."
            },
            chapter: 1,
            section: "1.4",
            subsection: "1.4.2",
            learningObjective: "FL-1.4.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["testware", "test artifacts", "test data", "test scripts"],
            examTip: "Testware = all testing artifacts: plans, cases, scripts, data, logs, reports.",
            memoryAid: "Testware = everything testers create."
        },
        {
            id: "Q087",
            statement: "Um analista de negócios escreveu uma história de utilizador, mas a equipa de teste não consegue determinar como testa-la. Qual é o problema mais provável?",
            options: {
                A: "A história de utilizador não têm critérios de aceitação claros",
                B: "A história de utilizador e muito longa",
                C: "A equipa de teste não têm experiência suficiente",
                D: "A história de utilizador está escrita na lingua errada"
            },
            correctAnswer: "A",
            explanation: "Identifying ambiguity in requirements requires critical thinking and analytical skills. A good tester questions assumptions, identifies inconsistencies, and thinks about how requirements could be interpreted in multiple ways.",
            whyWrong: "Programming ability is not required to identify requirements ambiguity; analytical thinking is the key skill.",
            optionExplanations: {
                A: "Critical thinking allows testers to identify ambiguities, inconsistencies, and risks in requirements.",
                B: "Programming is useful for automation but not for requirements analysis.",
                C: "Project management skills are not directly relevant to requirements review.",
                D: "Database expertise is domain-specific and not essential for all testers."
            },
            chapter: 1,
            section: "1.5",
            subsection: "1.5.1",
            learningObjective: "FL-1.5.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["critical thinking", "analytical skills", "tester skills"],
            examTip: "Testers need analytical thinking, communication, curiosity, and domain knowledge.",
            memoryAid: "Tester skills: Think critically, communicate clearly, question everything."
        },
        {
            id: "Q088",
            statement: "Qual dos seguintes é um exemplo de um bom critério de aceitação?",
            options: {
                A: "O sistema deve processar encomendas de forma rapida e correta",
                B: "O sistema deve ser facil de usar",
                C: "Não ha erros no sistema",
                D: "O formulário de início de sessão deve autenticar utilizadores com credenciais validas em menos de 2 segundos"
            },
            correctAnswer: "A",
            explanation: "Higher independence levels (e.g., testing by an external organization) bring fresh perspectives and can find different types of defects, but may also face challenges like communication gaps and lack of deep project knowledge. There is a trade-off between independence and collaboration.",
            whyWrong: "Testing by the original developer offers no independence, which is the opposite of the goal.",
            optionExplanations: {
                A: "Greater independence improves defect detection but can reduce collaboration and increase communication overhead.",
                B: "Independence exists on a spectrum; external testing is the highest level but not always required.",
                C: "Testing by the original developer lacks independence entirely.",
                D: "Independence does not eliminate the need for communication and collaboration."
            },
            chapter: 1,
            section: "1.5",
            subsection: "1.5.2",
            learningObjective: "FL-1.5.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["independence", "test organization", "collaboration"],
            examTip: "Independence levels range from same-team to external. More independence = more objectivity, but also more distance.",
            memoryAid: "Independence = objectivity vs. distance trade-off."
        },
        {
            id: "Q089",
            statement: "Qual das seguintes opções descreve melhor um caso de teste?",
            options: {
                A: "Um conjunto de valores de entrada, condições de execução e resultados esperados concebidos para verificar um aspeto específico do sistema",
                B: "Um documento que descreve o plano geral de teste",
                C: "Um relatório de defeitos encontrados durante o teste",
                D: "Uma ferramenta usada para executar testes automaticamente"
            },
            correctAnswer: "A",
            explanation: "In a sequential development model (e.g., waterfall or V-model), system testing is performed after integration testing is complete. At this point, the entire system has been assembled, and testing verifies the complete system against its specified requirements.",
            whyWrong: "System testing occurs after integration, not during requirements or before component testing.",
            optionExplanations: {
                A: "System testing follows integration testing and verifies the complete integrated system.",
                B: "Requirements phase is when test planning begins, not system test execution.",
                C: "Component testing precedes integration, which precedes system testing.",
                D: "System testing occurs before deployment to production."
            },
            chapter: 2,
            section: "2.1",
            subsection: "2.1.1",
            learningObjective: "FL-2.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["sequential model", "system testing", "V-model"],
            examTip: "In sequential lifecycles: Component → Integration → System → Acceptance.",
            memoryAid: "CISA order: Component, Integration, System, Acceptance."
        },
        {
            id: "Q090",
            statement: "O que é a base de teste?",
            options: {
                A: "Toda a documentação a partir da qual os casos de teste podem ser concebidos",
                B: "O ambiente onde os testes são executados",
                C: "A equipa que realiza os testes",
                D: "O calendario de execução dos testes"
            },
            correctAnswer: "A",
            explanation: "A stub is a minimal implementation of a component that is called by the component under test. It simulates the behavior of the called component, allowing testing of the calling component to proceed even when the called component is not yet available.",
            whyWrong: "A driver simulates a calling component, not a called component. Stubs replace called components.",
            optionExplanations: {
                A: "Stubs simulate lower-level or called components during component and integration testing.",
                B: "Stubs enable testing to proceed without waiting for all components to be ready.",
                C: "System testing occurs much later and is not a substitute for component testing.",
                D: "Drivers simulate calling components, not called components."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.1",
            learningObjective: "FL-2.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["stubs", "drivers", "component testing", "test infrastructure"],
            examTip: "Stub = called component simulator. Driver = calling component simulator.",
            memoryAid: "Stub = simulates what is below; Driver = simulates what is above."
        },
        {
            id: "Q091",
            statement: "Qual é o principal objetivo de uma reuniao de conclusão do teste?",
            options: {
                A: "Finalizar e arquivar os artefactos de teste, documentar as licoes aprendidas e fechar as atividades de teste",
                B: "Planear os proximos ciclos de teste",
                C: "Executar os restantes casos de teste",
                D: "Corrigir todos os defeitos encontrados"
            },
            correctAnswer: "A",
            explanation: "System testing evaluates the behavior of the complete, integrated system against its specified requirements. It includes both functional and non-functional testing of end-to-end scenarios, business processes, and system-level behaviors.",
            whyWrong: "Testing individual functions in isolation is component testing, not system testing.",
            optionExplanations: {
                A: "System testing verifies the complete system against requirements, including end-to-end scenarios.",
                B: "Component testing tests individual functions in isolation.",
                C: "Integration testing verifies interfaces between components.",
                D: "Acceptance testing determines user acceptability."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.1",
            learningObjective: "FL-2.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["system testing", "end-to-end", "business processes"],
            examTip: "System testing = the whole system, end-to-end, against requirements.",
            memoryAid: "System testing = the big picture, everything working together."
        },
        {
            id: "Q092",
            statement: "Uma equipa concluiu um ciclo de teste e está a documentar o que correu bem e o que pode ser melhorado. Que atividade de teste está a ser realizada?",
            options: {
                A: "Conclusao do teste",
                B: "Planeamento do teste",
                C: "Execução do teste",
                D: "Monitorizacao do teste"
            },
            correctAnswer: "A",
            explanation: "Usability testing is a type of non-functional testing. Non-functional testing evaluates how the system behaves, including usability, performance, reliability, security, and maintainability. Usability assesses how intuitive and user-friendly the system is.",
            whyWrong: "Functional testing verifies what the system does, not how well users can interact with it.",
            optionExplanations: {
                A: "Usability is a non-functional quality characteristic related to user experience.",
                B: "Functional testing verifies specific functions and features.",
                C: "White-box testing is based on internal code structure.",
                D: "Structural testing is another term for white-box testing."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.2",
            learningObjective: "FL-2.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["non-functional testing", "usability testing", "test types"],
            examTip: "Usability, performance, security, reliability = non-functional test types.",
            memoryAid: "Usability = user experience, not what the system does but how well users can use it."
        },
        {
            id: "Q093",
            statement: "Qual das seguintes opções descreve melhor uma ferramenta de captura e reprodução?",
            options: {
                A: "Uma ferramenta que regista as ações do testador e permite reproduzi-las automaticamente",
                B: "Uma ferramenta que captura screenshots durante o teste",
                C: "Uma ferramenta que grava a atividade da rede para análise",
                D: "Uma ferramenta que gera automaticamente casos de teste"
            },
            correctAnswer: "A",
            explanation: "Maintenance testing is required when changes are made to an existing system. Even though the business logic is unchanged, the new database and UI introduce risks. Confirmation testing verifies the changes work correctly, and regression testing ensures the unchanged business logic still functions properly.",
            whyWrong: "Even unchanged business logic can be affected by changes to the database and UI, so regression testing is essential.",
            optionExplanations: {
                A: "Confirmation testing of changes plus regression testing provides comprehensive coverage for maintenance releases.",
                B: "Testing only the UI ignores potential issues with the database migration affecting business logic.",
                C: "Exploratory testing alone lacks systematic coverage of the changes.",
                D: "Changes to database and UI can introduce defects that affect seemingly unchanged functionality."
            },
            chapter: 2,
            section: "2.3",
            subsection: "2.3.1",
            learningObjective: "FL-2.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["maintenance testing", "regression testing", "migration"],
            examTip: "Any change (even to infrastructure) needs confirmation + regression testing.",
            memoryAid: "Migration = big change = thorough maintenance testing."
        },
        {
            id: "Q094",
            statement: "O que é a complexidade ciclomatica?",
            options: {
                A: "Uma medida da complexidade estrutural de um programa, baseada no número de caminhos independentes",
                B: "Uma medida da complexidade do teste funcional",
                C: "O número de defeitos encontrados num módulo",
                D: "O tempo necessário para executar todos os testes"
            },
            correctAnswer: "A",
            explanation: "Static testing involves examining work products without executing code. Reviews (including informal reviews) of requirements, design, code, or other documents are a form of static testing. The other options all involve code execution, which is dynamic testing.",
            whyWrong: "All other options involve executing code or running tests, which is dynamic testing.",
            optionExplanations: {
                A: "Reviews are static testing techniques that do not require code execution.",
                B: "Executing unit tests is dynamic testing.",
                C: "Load testing is dynamic testing involving code execution.",
                D: "Boundary value analysis is a dynamic test design technique."
            },
            chapter: 3,
            section: "3.1",
            subsection: "3.1.1",
            learningObjective: "FL-3.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["static testing", "reviews", "dynamic testing"],
            examTip: "Static = no execution (reviews, static analysis). Dynamic = execution required.",
            memoryAid: "Static = sitting still, reading. Dynamic = running the code."
        },
        {
            id: "Q095",
            statement: "Qual das seguintes técnicas de teste é mais adequada para verificar a estrutura interna de um programa?",
            options: {
                A: "Teste de caixa-branca",
                B: "Teste de caixa-preta",
                C: "Teste de aceitação",
                D: "Teste exploratório"
            },
            correctAnswer: "A",
            explanation: "Static analysis tools examine source code without executing it to identify potential defects such as unreachable code, unused variables, null pointer dereferences, coding standard violations, and security vulnerabilities. These tools find defects early in the development process.",
            whyWrong: "Dynamic analysis requires code execution; static analysis does not execute the code.",
            optionExplanations: {
                A: "Static analysis detects code issues without execution, finding defects early.",
                B: "Dynamic analysis observes runtime behavior during execution.",
                C: "Performance analysis measures system responsiveness and resource usage.",
                D: "Usability analysis evaluates user interface and user experience."
            },
            chapter: 3,
            section: "3.1",
            subsection: "3.1.2",
            learningObjective: "FL-3.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["static analysis", "code analysis", "unreachable code"],
            examTip: "Static analysis tools find issues like unreachable code, null pointers, and coding violations without running the program.",
            memoryAid: "Static analysis = code inspection by tools, no execution needed."
        },
        {
            id: "Q096",
            statement: "Qual é o objetivo principal do registo de defeitos?",
            options: {
                A: "Fornecer informação suficiente para reproduzir, diagnosticar e corrigir o defeito",
                B: "Atribuir culpa ao programador que introduziu o defeito",
                C: "Substituir a comunicação entre a equipa de teste e a equipa de desenvolvimento",
                D: "Eliminar a necessidade de teste de regressão"
            },
            correctAnswer: "A",
            explanation: "Inspections are the most formal type of review. They follow a well-defined process with trained participants, defined roles, formal entry and exit criteria, data collection, and process improvement feedback. Inspections have the highest level of rigor.",
            whyWrong: "Walkthroughs and informal reviews are less formal. Technical reviews are formal but less rigorous than inspections.",
            optionExplanations: {
                A: "Inspections have the highest formality with strict entry/exit criteria and defined roles.",
                B: "Walkthroughs are author-led, informal, and focus on knowledge sharing.",
                C: "Informal reviews are the least formal, often done as pair reviews without documented process.",
                D: "Technical reviews are formal but less rigorous than inspections."
            },
            chapter: 3,
            section: "3.2",
            subsection: "3.2.1",
            learningObjective: "FL-3.2.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["inspection", "review types", "formality"],
            examTip: "Formality: Informal < Walkthrough < Technical Review < Inspection.",
            memoryAid: "Inspection = the formal heavyweight champion of reviews."
        },
        {
            id: "Q097",
            statement: "Qual campo é ESSENCIAL num relatório de defeito?",
            options: {
                A: "Passos para reproduzir o defeito",
                B: "O nome do testador que encontrou o defeito",
                C: "O tempo gasto a encontrar o defeito",
                D: "O salario do programador que corrigira o defeito"
            },
            correctAnswer: "A",
            explanation: "The individual review (also called individual preparation or solo review) is the phase where each reviewer examines the work product independently, identifies potential defects, and prepares comments before the review meeting. This is a critical phase for effective defect detection.",
            whyWrong: "Planning occurs before individual review and includes selecting participants and scheduling.",
            optionExplanations: {
                A: "Individual review involves each participant examining the work product independently.",
                B: "Planning defines the scope, roles, and logistics of the review.",
                C: "Kick-off is the meeting where the review is explained to participants.",
                D: "Rework is the phase after the meeting where the author fixes identified defects."
            },
            chapter: 3,
            section: "3.2",
            subsection: "3.2.1",
            learningObjective: "FL-3.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["review process", "individual review", "preparation"],
            examTip: "Individual preparation is where most defects are found in formal reviews.",
            memoryAid: "Review phases: Plan, Kick-off, Prepare, Meeting, Rework, Follow-up."
        },
        {
            id: "Q098",
            statement: "O que é o rastreio de defeitos?",
            options: {
                A: "O processo de registo, triagem e acompanhamento de defeitos desde a descoberta até ao encerramento",
                B: "O processo de criar casos de teste",
                C: "O processo de executar testes",
                D: "O processo de validar o sistema"
            },
            correctAnswer: "A",
            explanation: "Black-box techniques (equivalence partitioning, boundary value analysis, decision table testing, state transition testing) are based on specifications without code knowledge. White-box techniques (statement testing, branch testing) are based on internal code structure.",
            whyWrong: "Statement and branch testing are white-box techniques, not black-box.",
            optionExplanations: {
                A: "Correct categorization of black-box and white-box techniques.",
                B: "This reverses the categories incorrectly.",
                C: "Exploratory testing, error guessing, and checklist-based testing are experience-based, a separate category.",
                D: "Equivalence partitioning is black-box, not white-box."
            },
            chapter: 4,
            section: "4.1",
            subsection: "4.1.1",
            learningObjective: "FL-4.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["black-box", "white-box", "test techniques", "categorization"],
            examTip: "Black-box = specification-based (no code). White-box = structure-based (code). Experience-based = intuition and experience.",
            memoryAid: "Black-box = outside view; White-box = inside view; Experience = gut feel."
        },
        {
            id: "Q099",
            statement: "Qual das seguintes é uma boa pratica para a gestão de defeitos?",
            options: {
                A: "Triar cada defeito para avaliar a sua prioridade e severidade, e atribui-lo para correção",
                B: "Fechar defeitos imediatamente após serem reportados",
                C: "Atribuir todos os defeitos ao gestor de projeto",
                D: "Registar apenas os defeitos mais graves"
            },
            correctAnswer: "A",
            explanation: "The four valid equivalence partitions are: Light (0-500g), Medium (501-2000g), Heavy (2001-5000g), and Oversized (>5000g). Option A provides one representative from each valid partition: 250g (Light), 1250g (Medium), 3500g (Heavy), and 6000g (Oversized).",
            whyWrong: "Option B only covers boundary values, not representative values from each partition.",
            optionExplanations: {
                A: "One representative value from each of the four valid partitions.",
                B: "These are boundary values, not representative values from each partition.",
                C: "7000g is also a valid oversized value, but the set is otherwise fine.",
                D: "0g and 500g are boundary values; 0g is actually at the edge of Light."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.1",
            learningObjective: "FL-4.2.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["equivalence partitioning", "weight categories", "valid partitions"],
            examTip: "Equivalence partitioning: choose one representative from each partition, not boundaries.",
            memoryAid: "EP = one from each group, avoiding the edges."
        },
        {
            id: "Q100",
            statement: "Uma equipa de teste utiliza revisões de código para encontrar defeitos antes da execução. Isto é um exemplo de:",
            options: {
                A: "Teste estático",
                B: "Teste dinâmico",
                C: "Teste funcional",
                D: "Teste de regressão"
            },
            correctAnswer: "A",
            explanation: "2-value BVA tests the boundary values of each partition. For the valid range $0.01 to $9,999.99, we test: $0.00 (just below minimum, invalid), $0.01 (minimum, valid), $9,999.99 (maximum, valid), $10,000.00 (just above maximum, invalid). These four values cover both valid and invalid boundaries.",
            whyWrong: "Option B includes internal values that are not boundary values for BVA.",
            optionExplanations: {
                A: "Tests both valid boundaries (min, max) and the adjacent invalid values.",
                B: "Internal values like $100 and $5,000 are not boundary values.",
                C: "Missing the invalid value just above the maximum ($10,000.00).",
                D: "$0.02 and $9,999.98 are internal, not boundary values."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.2",
            learningObjective: "FL-4.2.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["boundary value analysis", "BVA", "monetary values"],
            examTip: "2-value BVA: test min, max, min-1, max+1.",
            memoryAid: "BVA 2-value = both sides of each boundary."
        },
        {
            id: "Q101",
            statement: "Qual das seguintes opções descreve melhor o teste exploratório?",
            options: {
                A: "Uma abordagem de teste onde os testadores aprendem, concebem e executam testes de forma concorrente, sem casos de teste predefinidos",
                B: "Uma técnica de teste automatizado",
                C: "Um tipo de revisão formal",
                D: "Um método de estimativa de esforço de teste"
            },
            correctAnswer: "A",
            explanation: "For a decision table with n boolean conditions, the complete table contains 2^n columns (test cases). With 6 conditions, this is 2^6 = 64 test cases. In practice, many of these combinations may be impossible or redundant, allowing the table to be collapsed.",
            whyWrong: "12 would be 6x2, which is not the formula for boolean combinations.",
            optionExplanations: {
                A: "2^6 = 64 combinations of six boolean conditions.",
                B: "12 = 6x2, which is not how condition combinations work.",
                C: "32 = 2^5, which would be for 5 conditions.",
                D: "6 is just the number of conditions, not the number of test cases."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.3",
            learningObjective: "FL-4.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["decision table", "conditions", "combinations"],
            examTip: "n conditions = 2^n columns in a complete decision table.",
            memoryAid: "n boolean conditions = 2^n test case columns."
        },
        {
            id: "Q102",
            statement: "Um testador está a usar uma lista de controlo baseada em erros comuns em aplicacoes web para conceber testes. Esta a usar:",
            options: {
                A: "Teste baseado em listas de controlo",
                B: "Teste de tabela de decisão",
                C: "Teste de transição de estados",
                D: "Particionamento por equivalências"
            },
            correctAnswer: "A",
            explanation: "According to the state transition model, when the turnstile is in the Locked state and a push occurs, the transition is not defined (or is self-looping), meaning the turnstile remains in Locked. Only inserting a coin in Locked causes a transition to Unlocked.",
            whyWrong: "Only a coin insertion transitions from Locked to Unlocked; pushing in Locked has no effect.",
            optionExplanations: {
                A: "In the Locked state, pushing does not cause a state change; the turnstile stays Locked.",
                B: "A transition to Unlocked requires inserting a coin, not pushing.",
                C: "There is no reason for the turnstile to break from a push in Locked.",
                D: "No error state is defined in this model; the turnstile simply remains Locked."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.4",
            learningObjective: "FL-4.2.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["state transition", "turnstile", "invalid transition"],
            examTip: "When an event has no defined transition in a state, the system typically ignores it or remains in the same state.",
            memoryAid: "No transition defined = stay where you are."
        },
        {
            id: "Q103",
            statement: "Qual é o objetivo principal de um percurso (walkthrough)?",
            options: {
                A: "Explicar um produto de trabalho e obter feedback dos participantes",
                B: "Medir formalmente a cobertura de código",
                C: "Aprovar a compra de uma ferramenta",
                D: "Executar o sistema para encontrar defeitos"
            },
            correctAnswer: "A",
            explanation: "Branch testing is a white-box technique that tests decision outcomes in the source code. It requires knowledge of the internal code structure to design test cases that exercise all possible branches.",
            whyWrong: "Equivalence partitioning, decision table testing, and state transition testing are all black-box techniques.",
            optionExplanations: {
                A: "Branch testing requires knowledge of code structure (white-box).",
                B: "Equivalence partitioning is a black-box technique based on specifications.",
                C: "Decision table testing is a black-box technique based on business logic.",
                D: "State transition testing is a black-box technique based on system states."
            },
            chapter: 4,
            section: "4.3",
            subsection: "4.3.1",
            learningObjective: "FL-4.3.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["white-box", "branch testing", "code structure"],
            examTip: "White-box = code-based. Black-box = specification-based.",
            memoryAid: "White-box = transparent (can see the code)."
        },
        {
            id: "Q104",
            statement: "Um sistema de controlo de versões é utilizado para gerir o código fonte. Esta pratica faz parte de:",
            options: {
                A: "Gestao de configuração",
                B: "Gestao de defeitos",
                C: "Planeamento de teste",
                D: "Execução de teste"
            },
            correctAnswer: "A",
            explanation: "There are five statements: print('DANGER...'), soundAlarm(), print('WARNING...'), and print('Temperature...') appears in all paths. To cover both print statements inside the two if blocks, we need Test 1 (temperature > 100, e.g., 150), Test 2 (temperature < 0, e.g., -10), and Test 3 (temperature between 0 and 100, e.g., 50) to ensure the last print executes when neither condition is true.",
            whyWrong: "One test case can only follow one path and will miss statements in the other branches.",
            optionExplanations: {
                A: "Three test cases cover: high temp path, low temp path, and normal temp path (all statements).",
                B: "One test case covers at most one branch, missing other statements.",
                C: "Two test cases could miss the normal temperature path where both if conditions are false.",
                D: "Four is more than the minimum needed."
            },
            chapter: 4,
            section: "4.3",
            subsection: "4.3.1",
            learningObjective: "FL-4.3.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["statement coverage", "white-box", "test cases"],
            examTip: "For independent if statements, you may need a test case where neither condition is true to cover statements after both.",
            memoryAid: "Statement coverage = every line of code executed at least once."
        },
        {
            id: "Q105",
            statement: "Qual das seguintes é uma vantagem de utilizar uma ferramenta de gestão de teste?",
            options: {
                A: "Centralizar e organizar todos os artefactos de teste, facilitando o acompanhamento e a geracao de relatorios",
                B: "Eliminar a necessidade de testadores humanos",
                C: "Substituir o controlo de versões",
                D: "Automatizar completamente a escrita de casos de teste"
            },
            correctAnswer: "A",
            explanation: "There are two decisions: (a > 10 OR b < 5) with two outcomes (true/false), and (c == 0) with two outcomes. To cover all four branch outcomes: Test 1 makes the first condition true (a > 10) and c == 0; Test 2 makes the first condition false (a <= 10 AND b >= 5) and c != 0. However, since the OR operator needs only one sub-condition true for the overall to be true, we can cover the first decision's true outcome with Test 1. For the first decision's false outcome, both sub-conditions must be false, which is Test 2. For the second decision, we need c == 0 (Test 1 or 3) and c != 0 (Test 2). So 3 test cases: (a=20,b=0,c=0), (a=5,b=10,c=1), and (a=5,b=10,c=0) or similar.",
            whyWrong: "Two test cases could cover all branch outcomes if carefully chosen, but with OR conditions, you need a case where both sides of OR are false for the false outcome.",
            optionExplanations: {
                A: "3 test cases: (true branch of 1st, true of 2nd), (false of 1st, false of 2nd), (false of 1st, true of 2nd).",
                B: "One test case covers only one path through all decisions.",
                C: "2 can cover 4 branch outcomes only if each test covers two distinct branch outcomes.",
                D: "4 would also achieve coverage but is not the minimum."
            },
            chapter: 4,
            section: "4.3",
            subsection: "4.3.2",
            learningObjective: "FL-4.3.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["branch coverage", "OR condition", "white-box"],
            examTip: "With compound conditions using OR, to get a false outcome, you need all sub-conditions false.",
            memoryAid: "OR = one true makes all true; ALL false makes it false."
        },
        {
            id: "Q106",
            statement: "Uma equipa está a utilizar uma abordagem de desenvolvimento iterativa e incremental. Como deve a equipa de teste abordar o teste?",
            options: {
                A: "Testar em cada iteração, com foco crescente em teste de regressão à medida que as funcionalidades se acumulam",
                B: "Aguardar até que todas as iterações estejam completas antes de testar",
                C: "Testar apenas na primeira e na ultima iteração",
                D: "Realizar apenas teste de aceitação no final"
            },
            correctAnswer: "A",
            explanation: "The tester is using knowledge of past defects (rounding errors in financial systems) to predict where defects are likely to occur in the new application. This is error guessing, an experience-based technique that leverages the tester's domain knowledge and experience with similar systems.",
            whyWrong: "Exploratory testing involves concurrent learning and test execution, which is not the primary activity described here.",
            optionExplanations: {
                A: "Error guessing uses past experience to predict where defects are most likely.",
                B: "Exploratory testing involves simultaneous test design, learning, and execution.",
                C: "Decision table testing systematically tests combinations of conditions.",
                D: "Equivalence partitioning divides inputs into classes based on expected behavior."
            },
            chapter: 4,
            section: "4.4",
            subsection: "4.4.1",
            learningObjective: "FL-4.4.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["error guessing", "financial systems", "domain experience"],
            examTip: "Error guessing = using past experience to target likely defect areas.",
            memoryAid: "Error guessing = been there, found that bug before."
        },
        {
            id: "Q107",
            statement: "Qual é o principal objetivo de um teste de aceitação de utilizador (UAT)?",
            options: {
                A: "Determinar se o sistema satisfaz as necessidades dos utilizadores finais e está pronto para uso",
                B: "Encontrar o máximo número de defeitos técnicos",
                C: "Verificar a cobertura de código",
                D: "Medir o desempenho do sistema"
            },
            correctAnswer: "A",
            explanation: "Session-based exploratory testing is a structured approach to exploratory testing where testers work in time-boxed sessions (typically 60-120 minutes), with specific charters, and document their findings, coverage, and issues discovered. It combines the flexibility of exploratory testing with some structure and documentation.",
            whyWrong: "The session is documented with notes and charter, so it is not ad-hoc testing without documentation.",
            optionExplanations: {
                A: "Session-based exploratory testing uses time-boxed sessions with charters and documentation.",
                B: "Ad-hoc testing lacks the structure of time-boxed sessions and charters.",
                C: "Checklist-based testing follows a predefined checklist, not exploratory testing.",
                D: "Regression testing checks existing functionality, not new features."
            },
            chapter: 4,
            section: "4.4",
            subsection: "4.4.2",
            learningObjective: "FL-4.4.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["exploratory testing", "session-based", "time-boxed"],
            examTip: "Session-based exploratory testing = structured exploration with time-boxing and documentation.",
            memoryAid: "Session-based = explorer with a map and a time limit."
        },
        {
            id: "Q108",
            statement: "Qual das seguintes situações requer o uso de teste de regressão?",
            options: {
                A: "Apos a correção de um defeito, para verificar que outras areas não foram afetadas",
                B: "Apenas quando uma nova versão do sistema e disponibilizada",
                C: "Antes de começar qualquer desenvolvimento",
                D: "Substitui o teste de aceitação"
            },
            correctAnswer: "A",
            explanation: "A key limitation of checklist-based testing is that checklists can become outdated as the system evolves. If new features are added or existing behavior changes, the checklist may not cover these areas unless it is regularly reviewed and updated.",
            whyWrong: "Checklists actually provide beneficial structure while still allowing tester judgment.",
            optionExplanations: {
                A: "Outdated checklists can miss defects in changed or new functionality.",
                B: "Structure is an advantage, not a limitation; checklists still allow tester creativity.",
                C: "Checklists can be effective with or without tool support.",
                D: "Checklists are commonly used for regression testing."
            },
            chapter: 4,
            section: "4.4",
            subsection: "4.4.3",
            learningObjective: "FL-4.4.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["checklist-based testing", "limitations", "maintenance"],
            examTip: "Checklists need regular updates to remain effective as the system evolves.",
            memoryAid: "Old checklist = blind spots."
        },
        {
            id: "Q109",
            statement: "Qual técnica de teste é mais adequada para testar o comportamento de um sistema de portas automaticas que responde a eventos como sensor de movimento e botao de pressao, dependendo do estado atual da porta?",
            options: {
                A: "Teste de transição de estados",
                B: "Particionamento por equivalências",
                C: "Teste de instruções",
                D: "Teste de tabela de decisão"
            },
            correctAnswer: "A",
            explanation: "This describes a hybrid model where test teams are embedded within project teams but receive support, standards, and best practices from a central test center of excellence. This combines the benefits of project proximity (agility, domain knowledge) with organizational consistency (standards, expertise sharing).",
            whyWrong: "A completely centralized organization would have all testers in one department, not embedded in project teams.",
            optionExplanations: {
                A: "Project-integrated teams with central support provide both flexibility and standardization.",
                B: "Centralized testing would have all testers in a single department, not project teams.",
                C: "Outsourced testing involves external organizations, which is not described here.",
                D: "There is a clear test organization described, so this is incorrect."
            },
            chapter: 5,
            section: "5.1",
            subsection: "5.1.1",
            learningObjective: "FL-5.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test organization", "center of excellence", "hybrid model"],
            examTip: "Test organization models: centralized, decentralized, hybrid (integrated + center of excellence).",
            memoryAid: "Hybrid = best of both worlds: local teams + central expertise."
        },
        {
            id: "Q110",
            statement: "Uma equipa de teste decide automatizar os testes de regressão. Qual é um benefício esperado desta deciso?",
            options: {
                A: "Execução mais rapida e consistente dos testes de regressão, libertando os testadores para testes exploratórios",
                B: "Eliminação completa da necessidade de teste manual",
                C: "Descoberta automática de todos os defeitos",
                D: "Garantia de 100 por cento de cobertura de código"
            },
            correctAnswer: "A",
            explanation: "A test plan documents the test objectives, scope (what is in and out of scope), test approach (strategy, techniques, levels), resource requirements, schedule, and risk assessments. It serves as the master plan for all testing activities.",
            whyWrong: "Source code and marketing plans are not part of a test plan.",
            optionExplanations: {
                A: "Test objectives, scope, approach, resources, schedule, and risks are standard test plan elements.",
                B: "Source code is a development artifact, not part of the test plan.",
                C: "The development budget is a project management artifact.",
                D: "Marketing plans are unrelated to test planning."
            },
            chapter: 5,
            section: "5.2",
            subsection: "5.2.1",
            learningObjective: "FL-5.2.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["test plan", "test objectives", "scope", "schedule"],
            examTip: "Test plan = what, how, who, when, and risks of testing.",
            memoryAid: "Test plan: OSARRS (Objectives, Scope, Approach, Resources, Risks, Schedule)."
        },
        {
            id: "Q111",
            statement: "Qual das seguintes é uma desvantagem da automação de testes?",
            options: {
                A: "Os scripts de teste automatizados requerem manutenção quando o sistema muda",
                B: "A automação é sempre mais lenta do que o teste manual",
                C: "A automação não pode ser usada para teste de regressão",
                D: "A automação requer menos planeamento do que o teste manual"
            },
            correctAnswer: "A",
            explanation: "Analogy-based estimation compares the current project to similar past projects. The effort from the historical project is used as a baseline and adjusted for known differences in size, complexity, or other factors. This is a widely used estimation technique.",
            whyWrong: "Expert judgment relies on individuals' experience without necessarily using a structured comparison to a past project.",
            optionExplanations: {
                A: "Analogy compares to similar past projects and adjusts for differences.",
                B: "Expert judgment involves consulting experienced individuals, not specifically comparing to a past project.",
                C: "WBS decomposes work into smaller components and estimates each part.",
                D: "Metrics-based estimation uses quantitative models and historical data."
            },
            chapter: 5,
            section: "5.2",
            subsection: "5.2.1",
            learningObjective: "FL-5.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["estimation", "analogy-based", "effort estimation"],
            examTip: "Analogy = compare to similar past projects and adjust.",
            memoryAid: "Analogy = like the last one, but different."
        },
        {
            id: "Q112",
            statement: "Qual das seguintes opções descreve melhor o teste de desempenho?",
            options: {
                A: "Teste para determinar como o sistema se comporta em termos de rapidez, capacidade de resposta e estabilidade sob uma carga de trabalho",
                B: "Teste para verificar se o sistema cumpre os requisitos funcionais",
                C: "Teste para encontrar defeitos de segurança",
                D: "Teste para avaliar a facilidade de uso do sistema"
            },
            correctAnswer: "A",
            explanation: "This is test progress information that shows how much testing has been completed (80% execution), defect discovery progress (45 defects), and defect resolution status (30 fixed and verified). Stakeholders use this to assess the current quality status and project progress.",
            whyWrong: "This is an interim progress report, not a final test completion report.",
            optionExplanations: {
                A: "Progress reporting includes execution metrics, defect findings, and resolution status.",
                B: "A final report would be produced at test completion, not after two weeks.",
                C: "Configuration management tracks version control, not execution progress.",
                D: "Budget information is not included in this progress update."
            },
            chapter: 5,
            section: "5.3",
            subsection: "5.3.1",
            learningObjective: "FL-5.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test progress", "reporting", "metrics"],
            examTip: "Test progress reporting = execution %, defects found/fixed, remaining risks.",
            memoryAid: "Progress = how much done, how many bugs, how many fixed."
        },
        {
            id: "Q113",
            statement: "O que é o teste de carga?",
            options: {
                A: "Um tipo de teste de desempenho que avalia o comportamento do sistema sob condições normais e de pico esperadas",
                B: "Um teste que verifica a carga maxima que o hardware suporta",
                C: "Um teste que mede o consumo de energia do sistema",
                D: "Um teste que verifica o número de linhas de código"
            },
            correctAnswer: "A",
            explanation: "Configuration management includes version control, which tracks changes to artifacts over time and allows retrieval of specific versions. Baselines mark specific points in time, enabling testers to recreate the exact conditions under which a defect was found.",
            whyWrong: "Without version control, retrieving an exact previous version of a test artifact would be impossible.",
            optionExplanations: {
                A: "Version control and baselines enable recreation of historical test conditions.",
                B: "Email storage is unreliable and not a proper configuration management practice.",
                C: "Keeping only the latest version prevents access to historical versions.",
                D: "Shared folders without version control do not preserve version history."
            },
            chapter: 5,
            section: "5.4",
            subsection: "5.4.1",
            learningObjective: "FL-5.4.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["configuration management", "version control", "baselines"],
            examTip: "CM enables reproducibility through version control, baselines, and change control.",
            memoryAid: "CM = ability to rewind time and recreate any past state."
        },
        {
            id: "Q114",
            statement: "Qual das seguintes é uma ferramenta tipicamente usada em teste de desempenho?",
            options: {
                A: "Ferramenta de teste de carga que simula multiplos utilizadores concorrentes",
                B: "Compilador",
                C: "Ferramenta de análise estática",
                D: "Sistema de gestão de base de dados"
            },
            correctAnswer: "A",
            explanation: "Product risk level is determined by combining the likelihood of a defect occurring with the impact if it does occur. A very high impact (potential patient harm) combined with a medium likelihood results in a high overall risk level. Risk-based testing would prioritize this module for thorough testing.",
            whyWrong: "Medium likelihood does not cancel out very high impact when the potential consequence is patient harm.",
            optionExplanations: {
                A: "High impact risks are always significant, even with medium likelihood.",
                B: "Likelihood alone does not determine risk; impact must also be considered.",
                C: "Risk = likelihood x impact; very high impact outweighs medium likelihood.",
                D: "Previous testing does not eliminate current risk."
            },
            chapter: 5,
            section: "5.5",
            subsection: "5.5.1",
            learningObjective: "FL-5.5.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["product risk", "risk assessment", "healthcare"],
            examTip: "Risk = likelihood x impact. High impact can make even unlikely risks important.",
            memoryAid: "Risk = Likelihood x Impact. High impact = high priority regardless of likelihood."
        },
        {
            id: "Q115",
            statement: "Uma equipa está a decidir entre duas ferramentas de automação de testes. Qual critério de seleção é mais importante?",
            options: {
                A: "A capacidade da ferramenta se integrar com o ambiente de desenvolvimento e processo existente",
                B: "O número de funcionalidades da ferramenta",
                C: "A ferramenta ter a interface mais moderna",
                D: "O fornecedor da ferramenta ter o melhor website"
            },
            correctAnswer: "A",
            explanation: "Risk management follows this sequence: 1) Risk identification (find potential risks), 2) Risk analysis (assess likelihood and impact), 3) Risk mitigation (plan and implement actions to address risks), 4) Risk monitoring (track risks and mitigation effectiveness throughout the project).",
            whyWrong: "Risks must be identified before they can be analyzed, and analyzed before mitigation can be planned.",
            optionExplanations: {
                A: "Identify → Analyze → Mitigate → Monitor is the correct sequence.",
                B: "Mitigation before identification is impossible.",
                C: "Analysis cannot occur before identification.",
                D: "Monitoring occurs after mitigation is implemented."
            },
            chapter: 5,
            section: "5.5",
            subsection: "5.5.2",
            learningObjective: "FL-5.5.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["risk management", "risk process", "sequence"],
            examTip: "Risk management: Identify, Analyze, Mitigate, Monitor.",
            memoryAid: "I A M M: Identify, Analyze, Mitigate, Monitor."
        },
        {
            id: "Q116",
            statement: "Qual é o objetivo principal de uma prova de conceito (PoC) ao selecionar uma ferramenta de teste?",
            options: {
                A: "Avaliar se a ferramenta funciona adequadamente no contexto específico e com os sistemas da organização",
                B: "Comparar o preco de diferentes ferramentas",
                C: "Escolher a ferramenta mais popular do mercado",
                D: "Substituir o processo de seleção formal"
            },
            correctAnswer: "A",
            explanation: "After verifying that a defect fix works correctly, the tester should update the defect report status to indicate that the fix has been confirmed and the defect can be closed. This provides a clear audit trail of the defect's lifecycle from discovery through resolution and verification.",
            whyWrong: "Deleting defect reports is not a standard practice; the history should be preserved.",
            optionExplanations: {
                A: "Updating the status to verified/closed provides proper tracking and audit trail.",
                B: "Defect reports should be preserved for historical analysis and process improvement.",
                C: "The report must be formally updated to reflect the verification result.",
                D: "Reopening would be incorrect since the fix has been confirmed."
            },
            chapter: 5,
            section: "5.6",
            subsection: "5.6.1",
            learningObjective: "FL-5.6.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["defect lifecycle", "defect report", "verification"],
            examTip: "After verifying a fix, update the defect status to reflect confirmed resolution.",
            memoryAid: "Defect lifecycle: Found → Reported → Assigned → Fixed → Verified → Closed."
        },
        {
            id: "Q117",
            statement: "Qual das seguintes é uma consideração importante ao introduzir uma ferramenta de teste numa organização?",
            options: {
                A: "Fornecer formação adequada e começar com um projeto piloto",
                B: "Implementar a ferramenta em toda a organização de imediato",
                C: "Escolher a ferramenta apenas com base no preco",
                D: "Evitar qualquer formação para poupar custos"
            },
            correctAnswer: "A",
            explanation: "Severity measures technical impact on the system - wrong colors are cosmetic (low severity). Priority measures business urgency - brand consistency is important to marketing (high priority). Severity and priority can differ; this defect may need a quick fix despite being technically minor.",
            whyWrong: "It is not high severity because the application still functions correctly; it is a cosmetic issue.",
            optionExplanations: {
                A: "Low severity (cosmetic, no functional impact), High priority (important to business/brand).",
                B: "This assigns low priority, but the business considers it urgent.",
                C: "The application functions correctly, so severity is not high.",
                D: "This ignores the business urgency expressed by marketing."
            },
            chapter: 5,
            section: "5.6",
            subsection: "5.6.1",
            learningObjective: "FL-5.6.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["severity", "priority", "defect management"],
            examTip: "Severity = technical impact; Priority = business urgency. They can differ.",
            memoryAid: "Severity = how bad; Priority = how soon."
        },
        {
            id: "Q118",
            statement: "Uma ferramenta de automação de testes é introduzida sem formação adequada e sem normas de codificação. Qual é o risco mais provável?",
            options: {
                A: "Baixa adoção e altos custos de manutenção",
                B: "Eliminação completa de defeitos",
                C: "Cobertura total de código automática",
                D: "Reducao significativa do tempo de execução sem esforço"
            },
            correctAnswer: "A",
            explanation: "Performance testing tools generate load by simulating multiple virtual users accessing the system concurrently. They measure response times, throughput, resource utilization, and help identify performance bottlenecks under various load conditions.",
            whyWrong: "Test management tools organize and track testing activities, not simulate user load.",
            optionExplanations: {
                A: "Performance testing tools simulate load and measure system performance characteristics.",
                B: "Test management tools manage test cases, plans, and execution tracking.",
                C: "Static analysis tools analyze source code without execution.",
                D: "Test data preparation tools generate and manage test data."
            },
            chapter: 6,
            section: "6.1",
            subsection: "6.1.1",
            learningObjective: "FL-6.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["performance testing tool", "load testing", "virtual users"],
            examTip: "Performance tools = simulate load, measure response times and throughput.",
            memoryAid: "Performance tool = many virtual users at once."
        },
        {
            id: "Q119",
            statement: "Uma equipa está a avaliar várias ferramentas de automação de testes. Uma ferramenta têm excelentes capacidades técnicas mas requer alterações significativas no processo de construção existente. Outra ferramenta têm menos funcionalidades mas integra-se perfeitamente com o pipeline de CI/CD atual. Qual deve ser o fator de decisão principal?",
            options: {
                A: "A adequacao da ferramenta aos processos existentes e a pilha tecnologica",
                B: "O número de funcionalidades que a ferramenta oferece",
                C: "A popularidade da ferramenta em foruns online",
                D: "O custo dos materiais de formação para a ferramenta"
            },
            correctAnswer: "A",
            explanation: "Tool fit with existing processes and technology is the most important selection criterion. A tool that integrates well with the current environment will have lower adoption costs, faster implementation, and higher long-term success than a tool that requires substantial process changes, even if the latter has more features.",
            whyWrong: "Features are important but integration and process fit are more critical for successful adoption.",
            optionExplanations: {
                A: "Process and technology fit is crucial for successful tool adoption and long-term value.",
                B: "More features do not compensate for poor integration and high adoption friction.",
                C: "Popularity does not guarantee suitability for the specific organizational context.",
                D: "Training costs are a consideration but not the primary factor."
            },
            chapter: 6,
            section: "6.1",
            subsection: "6.1.2",
            learningObjective: "FL-6.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["tool selection", "integration", "CI/CD", "process fit"],
            examTip: "Tool selection: fit with process > features. A well-fitting tool with fewer features beats a poor-fitting tool with more features.",
            memoryAid: "Tool selection: Fit first, features second."
        },
        {
            id: "Q120",
            statement: "Qual das seguintes é um benefício realista da automação de testes?",
            options: {
                A: "Execução mais rapida de testes de regressão repetitivos, libertando os testadores para teste exploratório",
                B: "Eliminação completa do teste manual do processo de desenvolvimento de software",
                C: "Descoberta automática de todos os defeitos na aplicação",
                D: "Garantia de 100 por cento de cobertura de teste de todos os requisitos"
            },
            correctAnswer: "A",
            explanation: "A key benefit of test automation is the ability to run repetitive tests quickly and consistently, particularly regression tests. This frees human testers to focus on activities that require human judgment, such as exploratory testing, usability testing, and complex scenario testing.",
            whyWrong: "Automation cannot replace manual testing entirely; many testing activities require human insight and creativity.",
            optionExplanations: {
                A: "Automation excels at repetitive tasks, allowing testers to focus on higher-value activities.",
                B: "Manual testing remains essential for exploratory, usability, and ad-hoc testing.",
                C: "Automation only finds defects in the specific checks it performs.",
                D: "100% coverage is not guaranteed by automation; coverage depends on test design."
            },
            chapter: 6,
            section: "6.2",
            subsection: "6.2.1",
            learningObjective: "FL-6.2.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["test automation", "regression testing", "benefits"],
            examTip: "Automation = fast, consistent regression checks, freeing humans for exploratory testing.",
            memoryAid: "Automation = robot for repetitive checks; Humans = creative exploratory testing."
        },
    ],
    exam4: [
        {
            id: "Q121",
            statement: "Qual das seguintes atividades faz parte do processo de teste?",
            options: {
                A: "Monitorizacao e controlo de teste",
                B: "Concecao e arquitetura de software",
                C: "Concecao de esquemas de base de dados",
                D: "Planeamento da implementação em produção"
            },
            correctAnswer: "A",
            explanation: "Test monitoring and control is one of the main test activities in the test process. It involves measuring progress against the test plan (monitoring) and taking corrective actions when deviations occur (control).",
            whyWrong: "Software design, database design, and deployment planning are development and operations activities, not test process activities.",
            optionExplanations: {
                A: "Test monitoring and control is a core test process activity.",
                B: "Software design is a development activity.",
                C: "Database schema design is a data architecture activity.",
                D: "Deployment planning is an operations activity."
            },
            chapter: 1,
            section: "1.4",
            subsection: "1.4.1",
            learningObjective: "FL-1.4.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["test activities", "test monitoring", "test control"],
            examTip: "Six test activities: Planning, Monitoring & Control, Analysis, Design, Implementation, Execution, Completion.",
            memoryAid: "PMaADIEC: Plan, Monitor, Analysis, Design, Implement, Execute, Complete."
        },
        {
            id: "Q122",
            statement: "Um testador descobre que o sistema se comporta de forma diferente no ambiente de produção em comparacao com o ambiente de teste. Que conceito de teste isto realca?",
            options: {
                A: "O teste depende do contexto",
                B: "O teste exaustivo é possível em produção",
                C: "Os ambientes de teste são sempre identicos a produção",
                D: "A configuração do ambiente não afeta o teste"
            },
            correctAnswer: "A",
            explanation: "Different environments can produce different results due to variations in configuration, data, network settings, and other factors. This illustrates that testing is context dependent - the environment is part of the testing context that can affect outcomes.",
            whyWrong: "Test environments are rarely identical to production, which is why environment differences must be considered.",
            optionExplanations: {
                A: "Environment differences demonstrate that testing context (including environment) matters.",
                B: "Exhaustive testing is impossible in any environment.",
                C: "Test environments often differ from production in scale, data, and configuration.",
                D: "Environment configuration significantly affects test results."
            },
            chapter: 1,
            section: "1.3",
            subsection: "1.3.1",
            learningObjective: "FL-1.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["context dependent", "test environment", "production"],
            examTip: "Environment differences can cause different test results - consider context.",
            memoryAid: "Different environment = different results = context matters."
        },
        {
            id: "Q123",
            statement: "Qual das seguintes é um produto de trabalho de teste tipicamente produzido durante a análise de teste?",
            options: {
                A: "Condicoes de teste derivadas dos requisitos",
                B: "Scripts de teste automatizados",
                C: "Registos de execução de teste",
                D: "Relatorio final de sintese de teste"
            },
            correctAnswer: "A",
            explanation: "Test analysis is the activity where test conditions are identified. Test conditions are derived from requirements, specifications, and other test bases. They describe what needs to be tested at a high level, before detailed test cases are designed.",
            whyWrong: "Automated test scripts are created during test implementation, not test analysis.",
            optionExplanations: {
                A: "Test analysis identifies test conditions from the test basis.",
                B: "Test scripts are created during test implementation.",
                C: "Execution logs are produced during test execution.",
                D: "Test summary reports are produced during test completion."
            },
            chapter: 1,
            section: "1.4",
            subsection: "1.4.2",
            learningObjective: "FL-1.4.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["test analysis", "test conditions", "test work products"],
            examTip: "Test analysis = identify WHAT to test (conditions). Test design = define HOW to test (test cases).",
            memoryAid: "Analysis = what to test; Design = how to test."
        },
        {
            id: "Q124",
            statement: "Um testador demonstra forte curiosidade ao fazer sempre perguntas sobre como as funcionalidades devem funcionar e o que pode correr mal. Qual competência essencial de testador isto demonstra?",
            options: {
                A: "Pensamento analitico e inquisitividade",
                B: "Capacidade de programação a nível de especialista",
                C: "competências avançadas de gestão de projetos",
                D: "Certificação profissional em teste"
            },
            correctAnswer: "A",
            explanation: "Curiosity and inquisitiveness are essential traits for testers. A curious tester asks probing questions, explores edge cases, and challenges assumptions, which leads to more thorough testing and finding defects that others might miss.",
            whyWrong: "Programming ability, project management, and certifications are not the primary skill demonstrated by curiosity.",
            optionExplanations: {
                A: "Curiosity and analytical thinking drive thorough investigation and defect discovery.",
                B: "Programming is a technical skill separate from curiosity.",
                C: "Project management focuses on planning and coordination, not inquisitiveness.",
                D: "Certifications validate knowledge but do not replace curiosity."
            },
            chapter: 1,
            section: "1.5",
            subsection: "1.5.1",
            learningObjective: "FL-1.5.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["curiosity", "analytical thinking", "tester skills"],
            examTip: "Good testers are naturally curious and ask 'what if?' questions.",
            memoryAid: "Curious tester = better defect finder."
        },
        {
            id: "Q125",
            statement: "Num modelo de desenvolvimento iterativo, como difere a abordagem de teste de um modelo sequencial?",
            options: {
                A: "O teste e integrado ao longo de cada iteração em vez de ser realizado como uma única fase no final",
                B: "O teste é realizado apenas no final de todas as iterações",
                C: "O teste não é necessário em modelos iterativos porque as alterações são pequenas",
                D: "O teste é realizado apenas pelos programadores em modelos iterativos"
            },
            correctAnswer: "A",
            explanation: "In iterative models (such as Agile), testing is integrated into each iteration. Testers collaborate with developers throughout each iteration, writing and executing tests continuously. This contrasts with sequential models where testing is a distinct phase that occurs after development.",
            whyWrong: "Testing in iterative models occurs continuously within each iteration, not at the end of all iterations.",
            optionExplanations: {
                A: "Iterative models integrate testing throughout each iteration for continuous feedback.",
                B: "Testing occurs within each iteration, not at the end of all iterations.",
                C: "Testing is still essential in iterative models; small changes still need verification.",
                D: "Both testers and developers perform testing in iterative models."
            },
            chapter: 2,
            section: "2.1",
            subsection: "2.1.1",
            learningObjective: "FL-2.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["iterative development", "Agile testing", "continuous testing"],
            examTip: "Iterative = testing in every iteration. Sequential = testing as a later phase.",
            memoryAid: "Iterative = test as you build. Sequential = build then test."
        },
        {
            id: "Q126",
            statement: "Qual das seguintes e o foco principal do teste de aceitação?",
            options: {
                A: "Validar se o sistema satisfaz os requisitos de negócio e está pronto para uso operacional",
                B: "Verificar a estrutura interna e a lógica do código",
                C: "Testar componentes individuais em isolamento",
                D: "Medir o desempenho do sistema sob carga"
            },
            correctAnswer: "A",
            explanation: "Acceptance testing focuses on validating whether the system meets the business needs and user requirements, and whether it is ready for deployment into the production environment. It is typically performed by or on behalf of the customers or end users.",
            whyWrong: "Verifying internal code structure is component testing, not acceptance testing.",
            optionExplanations: {
                A: "Acceptance testing validates business fitness and readiness for operational use.",
                B: "Code structure is verified through white-box testing at component level.",
                C: "Component testing tests individual components in isolation.",
                D: "Performance testing is a non-functional test type, not acceptance testing."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.1",
            learningObjective: "FL-2.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["acceptance testing", "validation", "business requirements"],
            examTip: "Acceptance testing = 'Is this the right product for the users?'",
            memoryAid: "Acceptance = user approval, final go/no-go."
        },
        {
            id: "Q127",
            statement: "Um sistema recebe uma atualizacao importante que altera o esquema da base de dados subjacente e adiciona novas APIs REST. Qual combinação de teste é mais apropriada para a manutenção deste sistema?",
            options: {
                A: "Teste de confirmação das novas APIs e alterações na base de dados, além de teste de regressão das funcionalidades existentes",
                B: "Apenas teste das novas APIs sem teste de regressão",
                C: "Apenas teste de regressão das funcionalidades existentes sem teste das novas funcionalidades",
                D: "Nenhum teste é necessário se a equipa de desenvolvimento for experiente"
            },
            correctAnswer: "A",
            explanation: "Maintenance testing requires both confirmation testing of the changes (new APIs and database changes work correctly) and regression testing (existing functionality is not broken by the changes). Both aspects are essential for a comprehensive maintenance testing approach.",
            whyWrong: "Skipping either confirmation testing or regression testing leaves significant risk uncovered.",
            optionExplanations: {
                A: "Both confirmation of changes and regression of existing areas are essential.",
                B: "Regression testing is needed because database changes can affect existing functionality.",
                C: "New changes must be confirmed to work correctly.",
                D: "Experience does not eliminate the need for testing."
            },
            chapter: 2,
            section: "2.3",
            subsection: "2.3.1",
            learningObjective: "FL-2.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["maintenance testing", "confirmation testing", "regression testing"],
            examTip: "Maintenance testing = confirm the change + check nothing else broke.",
            memoryAid: "Maintenance = new stuff works + old stuff still works."
        },
        {
            id: "Q128",
            statement: "Qual das seguintes é um benefício do teste estático em comparacao com o teste dinâmico?",
            options: {
                A: "Defeitos podem ser encontrados diretamente no produto de trabalho sem executar o código",
                B: "O teste estático requer um ambiente de teste totalmente funcional",
                C: "O teste estático só pode ser realizado após o código ser compilado",
                D: "O teste estático mede características de desempenho do sistema"
            },
            correctAnswer: "A",
            explanation: "Static testing finds defects directly in work products (requirements, design, code) without executing the software. This allows defects to be detected earlier in the development lifecycle, before dynamic testing can begin, and at a lower cost.",
            whyWrong: "Static testing does not require a test environment or code execution.",
            optionExplanations: {
                A: "Static testing finds defects directly in work products without execution.",
                B: "Static testing does not require a test environment.",
                C: "Static testing can be performed before code is compiled or even written.",
                D: "Performance measurement requires dynamic testing."
            },
            chapter: 3,
            section: "3.1",
            subsection: "3.1.1",
            learningObjective: "FL-3.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["static testing", "benefits", "early defect detection"],
            examTip: "Static testing = find defects early, no execution, no test environment needed.",
            memoryAid: "Static = early, cheap, no setup."
        },
        {
            id: "Q129",
            statement: "Esta a ser realizada uma revisão a uma especificação de requisitos. O moderador nota que a maior parte do tempo da reuniao e gasto a sugerir melhorias em vez de identificar defeitos. Que tipo de revisão está provavelmente a ser conduzida?",
            options: {
                A: "Percurso",
                B: "Inspecao",
                C: "Revisao técnica",
                D: "Análise estática"
            },
            correctAnswer: "A",
            explanation: "Walkthroughs are author-led review meetings that focus on knowledge sharing, gathering suggestions, and improving the work product. Unlike inspections or technical reviews that focus on defect detection, walkthroughs emphasize learning and collaborative improvement.",
            whyWrong: "Inspections focus on rigorous defect detection using formal entry/exit criteria.",
            optionExplanations: {
                A: "Walkthroughs emphasize knowledge sharing, suggestions, and improvement ideas.",
                B: "Inspections focus on formal defect detection with defined roles and metrics.",
                C: "Technical reviews focus on defect detection with trained moderators.",
                D: "Static analysis is a tool-based technique, not a review meeting."
            },
            chapter: 3,
            section: "3.2",
            subsection: "3.2.1",
            learningObjective: "FL-3.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["walkthrough", "review types", "knowledge sharing"],
            examTip: "Walkthrough = learning and suggestions. Inspection = rigorous defect finding.",
            memoryAid: "Walkthrough = walk and talk through the document."
        },
        {
            id: "Q130",
            statement: "Qual das seguintes técnicas de teste e classificada como baseada na experiência?",
            options: {
                A: "Teste exploratório",
                B: "Particionamento por equivalências",
                C: "Teste de instruções",
                D: "Teste de tabela de decisão"
            },
            correctAnswer: "A",
            explanation: "Exploratory testing is an experience-based technique where testers simultaneously learn, design, and execute tests based on their knowledge, intuition, and real-time observations. The other options are specification-based (equivalence partitioning, decision table) or structure-based (statement testing).",
            whyWrong: "Equivalence partitioning and decision table testing are black-box (specification-based) techniques.",
            optionExplanations: {
                A: "Exploratory testing relies on tester experience, intuition, and concurrent learning.",
                B: "Equivalence partitioning is a black-box (specification-based) technique.",
                C: "Statement testing is a white-box (structure-based) technique.",
                D: "Decision table testing is a black-box (specification-based) technique."
            },
            chapter: 4,
            section: "4.4",
            subsection: "4.4.2",
            learningObjective: "FL-4.4.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["experience-based", "exploratory testing", "test techniques"],
            examTip: "Experience-based = exploratory, error guessing, checklist-based.",
            memoryAid: "Experience-based = tester's knowledge and intuition."
        },
        {
            id: "Q131",
            statement: "Um sistema de monitorização de pacientes mostra alertas com base em sinais vitais. As regras são: se frequência cardiaca maior que 120 E tensao arterial maior que 180, alerta CRITICO; se frequência cardiaca maior que 120 OU tensao arterial maior que 180, alerta AVISO; caso contrario, alerta NORMAL. Usando o teste de tabela de decisão, quantas combinações únicas de condições existem para as duas entradas booleanas?",
            options: {
                A: "4",
                B: "2",
                C: "6",
                D: "3"
            },
            correctAnswer: "A",
            explanation: "With two boolean conditions (heart rate > 120: T/F, blood pressure > 180: T/F), there are 2^2 = 4 unique combinations: (F,F) → NORMAL, (T,F) → WARNING, (F,T) → WARNING, (T,T) → CRITICAL.",
            whyWrong: "The three outputs (NORMAL, WARNING, CRITICAL) might suggest 3, but there are 4 input combinations.",
            optionExplanations: {
                A: "2^2 = 4 combinations of two boolean conditions.",
                B: "2 is the number of conditions, not the number of combinations.",
                C: "6 is not a power of 2 and does not correspond to the number of conditions.",
                D: "3 corresponds to the number of outputs, not input combinations."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.3",
            learningObjective: "FL-4.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["decision table", "vital signs", "conditions", "combinations"],
            examTip: "Number of combinations = 2^(number of boolean conditions).",
            memoryAid: "n boolean conditions = 2^n combinations."
        },
        {
            id: "Q132",
            statement: "Um sistema de início de sessão têm tres estados: SessaoEncerrada, SessaoIniciada e Bloqueado. A partir de SessaoEncerrada, credenciais corretas transitam para SessaoIniciada; credenciais incorretas permanecem em SessaoEncerrada; tres tentativas falhadas consecutivas transitam para Bloqueado. De SessaoIniciada, o logout transita para SessaoEncerrada. Qual das seguintes é uma transição inválida?",
            options: {
                A: "De Bloqueado diretamente para SessaoIniciada sem qualquer evento intermediario",
                B: "De SessaoEncerrada para Bloqueado após tres tentativas de início de sessão falhadas",
                C: "De SessaoIniciada para SessaoEncerrada ao selecionar logout",
                D: "De SessaoEncerrada para SessaoEncerrada ao inserir credenciais incorretas"
            },
            correctAnswer: "A",
            explanation: "A transition directly from Locked to LoggedIn is not described in the scenario. Once an account is locked, some external action (like admin unlock or waiting) would typically be required. The scenario does not define a transition from Locked to LoggedIn, making it invalid.",
            whyWrong: "All the other transitions are explicitly defined in the scenario.",
            optionExplanations: {
                A: "No transition from Locked to LoggedIn is defined; an unlock mechanism would be needed.",
                B: "Three failed attempts transitioning from LoggedOut to Locked is defined.",
                C: "Logout from LoggedIn to LoggedOut is a valid transition.",
                D: "Incorrect credentials remaining in LoggedOut is defined (self-transition)."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.4",
            learningObjective: "FL-4.2.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["state transition", "login system", "invalid transition"],
            examTip: "Identify transitions that are not defined in the specification; those are invalid.",
            memoryAid: "Undefined transition = not allowed by the specification."
        },
        {
            id: "Q133",
            statement: "Para o código: se (pontuação maior ou igual a 70) { nota = Aprovado } senao { nota = Reprovado } imprimir(nota), quantos casos de teste são necessarios para 100 por cento de cobertura de instruções?",
            options: {
                A: "2",
                B: "1",
                C: "3",
                D: "4"
            },
            correctAnswer: "A",
            explanation: "There are three statements: grade = 'Pass', grade = 'Fail', and print(grade). To execute all three, we need Test 1 (score >= 70, e.g., 85) which executes 'Pass' and print, and Test 2 (score < 70, e.g., 50) which executes 'Fail' and print. Two test cases cover all statements.",
            whyWrong: "One test case can execute either the 'Pass' or 'Fail' branch, but not both.",
            optionExplanations: {
                A: "Two test cases cover both branches, executing all three statements.",
                B: "One test case covers only one branch, missing the other assignment statement.",
                C: "Three is more than the minimum needed.",
                D: "Four is more than necessary."
            },
            chapter: 4,
            section: "4.3",
            subsection: "4.3.1",
            learningObjective: "FL-4.3.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["statement coverage", "if-else", "test cases"],
            examTip: "For an if-else statement, you need at least 2 test cases for 100% statement coverage.",
            memoryAid: "If-else = 2 test cases minimum for full statement coverage."
        },
        {
            id: "Q134",
            statement: "Um testador está a testar uma aplicação de processamento de texto. Sem casos de teste predefinidos, o testador começa por abrir vários formatos de ficheiro, depois experimenta funcionalidades de edicao e segue caminhos interessantes com base no que descobre. Que técnica de teste está a ser usada?",
            options: {
                A: "Teste exploratório",
                B: "Antecipacao de erros",
                C: "Teste baseado em listas de controlo",
                D: "Teste de tabela de decisão"
            },
            correctAnswer: "A",
            explanation: "The tester is simultaneously learning the application, designing tests on the fly, and executing them based on observations. This is the defining characteristic of exploratory testing - concurrent test design, execution, and learning.",
            whyWrong: "Error guessing focuses on predicting defects based on past experience, not on real-time discovery.",
            optionExplanations: {
                A: "Concurrent learning, design, and execution is the essence of exploratory testing.",
                B: "Error guessing uses past experience to target likely defect areas.",
                C: "Checklist-based testing follows a predefined list of items to check.",
                D: "Decision table testing systematically tests condition combinations."
            },
            chapter: 4,
            section: "4.4",
            subsection: "4.4.2",
            learningObjective: "FL-4.4.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["exploratory testing", "concurrent learning", "word processing"],
            examTip: "Simultaneous learning + designing + executing = exploratory testing.",
            memoryAid: "Exploratory = discover as you go."
        },
        {
            id: "Q135",
            statement: "Uma equipa de teste está estruturada de forma que os testadores reportam a um gestor de teste que é separado das equipas de desenvolvimento. O gestor de teste aloca testadores a vários projetos conforme necessário. Este é um exemplo de que tipo de organização de teste?",
            options: {
                A: "Organização de teste centralizada",
                B: "Organização de teste descentralizada",
                C: "Organização de teste hibrida",
                D: "Organização de teste externalizada"
            },
            correctAnswer: "A",
            explanation: "In a centralized test organization, all testers belong to a single test department and are allocated to projects by a test manager. This provides consistency in testing practices, career paths for testers, and easier resource management.",
            whyWrong: "Decentralized would have testers embedded within individual project teams reporting to project managers.",
            optionExplanations: {
                A: "A central test department with a test manager allocating resources is centralized.",
                B: "Decentralized has testers embedded in and reporting to individual project teams.",
                C: "Hybrid combines project-embedded teams with central coordination.",
                D: "Outsourced involves external organizations performing testing."
            },
            chapter: 5,
            section: "5.1",
            subsection: "5.1.1",
            learningObjective: "FL-5.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test organization", "centralized", "test management"],
            examTip: "Centralized = one test department. Decentralized = testers in project teams. Hybrid = both.",
            memoryAid: "Centralized = central hub; Decentralized = distributed; Hybrid = both."
        },
        {
            id: "Q136",
            statement: "Um gestor de teste precisa de estimar o esforço de teste para um projeto com requisitos incompletos. Que técnica de estimativa seria mais apropriada nesta situação?",
            options: {
                A: "Juizo de especialista baseado em projetos anteriores semelhantes",
                B: "Estrutura de decomposição do trabalho com decomposição detalhada de tarefas",
                C: "Estimativa baseada em métricas usando pontos de função",
                D: "Estimativa parametrica usando linhas de código"
            },
            correctAnswer: "A",
            explanation: "When requirements are incomplete, expert judgment is often the most appropriate estimation technique. Experts with experience in similar projects can provide reasonable estimates even with limited information, using their domain knowledge and experience with analogous situations.",
            whyWrong: "WBS, function points, and parametric models typically require more detailed information than is available with incomplete requirements.",
            optionExplanations: {
                A: "Expert judgment works well with incomplete information by relying on past experience.",
                B: "WBS requires detailed task decomposition that needs more complete requirements.",
                C: "Function point analysis requires reasonably stable requirements.",
                D: "Lines of code estimation is not typically used for test effort estimation."
            },
            chapter: 5,
            section: "5.2",
            subsection: "5.2.1",
            learningObjective: "FL-5.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["estimation", "expert judgment", "incomplete requirements"],
            examTip: "When details are scarce, rely on expert judgment and analogy-based estimation.",
            memoryAid: "No details = ask the experts."
        },
        {
            id: "Q137",
            statement: "A execução do teste está atrasada porque o ambiente de teste têm estado instavel na ultima semana. O gestor de teste decide implementar uma verificação diaria de integridade do ambiente e priorizar os casos de teste que podem ser executados nas configuracoes estáveis disponíveis. Que atividade do processo de teste está a ser realizada?",
            options: {
                A: "Controlo de teste (tomar ações corretivas com base na monitorização)",
                B: "Planeamento de teste (criacao do plano de teste inicial)",
                C: "Conclusao de teste (arquivamento de artefactos de teste)",
                D: "Análise de teste (identificacao de condições de teste)"
            },
            correctAnswer: "A",
            explanation: "The test manager is taking corrective action (implementing health checks, prioritizing tests) in response to a deviation from the plan (environment instability causing delays). This is test control, which follows test monitoring and aims to bring testing back on track.",
            whyWrong: "Test planning occurred earlier; this is an adjustment during execution, not initial planning.",
            optionExplanations: {
                A: "Corrective actions in response to deviations are test control activities.",
                B: "This is a reactive adjustment, not initial test planning.",
                C: "Test completion occurs at the end of testing, not mid-execution.",
                D: "Test analysis occurs before test execution."
            },
            chapter: 5,
            section: "5.3",
            subsection: "5.3.1",
            learningObjective: "FL-5.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test control", "corrective action", "environment issues"],
            examTip: "Any adjustment to the test plan based on monitoring data is test control.",
            memoryAid: "Control = steering the ship when you see you are off course."
        },
        {
            id: "Q138",
            statement: "Um defeito é reportado como de severidade alta porque causa a falha da aplicação quando um relatório específico é gerado. No entanto, o relatório é usado apenas por um cliente uma vez por trimestre. Que prioridade deve este defeito receber?",
            options: {
                A: "Prioridade baixa porque o impacto no negócio e limitado apesar da alta severidade técnica",
                B: "Prioridade alta porque qualquer falha e inaceitavel",
                C: "Prioridade media porque a severidade e a prioridade devem corresponder sempre",
                D: "Nenhuma prioridade é necessária porque afeta apenas um cliente"
            },
            correctAnswer: "A",
            explanation: "Priority reflects business urgency and impact. While the technical severity is high (crash), the business impact is limited (one client, quarterly use). Therefore, the priority would likely be lower than a defect that crashes a core feature used daily by all clients.",
            whyWrong: "Technical severity and business priority are independent dimensions that can differ.",
            optionExplanations: {
                A: "Priority considers business impact; limited usage means lower urgency to fix.",
                B: "Priority considers business context, not just technical impact.",
                C: "Severity and priority can differ based on business context.",
                D: "Every defect should be prioritized to guide resolution timing."
            },
            chapter: 5,
            section: "5.6",
            subsection: "5.6.1",
            learningObjective: "FL-5.6.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["priority", "severity", "defect triage"],
            examTip: "Severity = technical impact; Priority = business urgency. A severe crash can be low priority if rarely used.",
            memoryAid: "High severity crash + low usage = low priority."
        },
        {
            id: "Q139",
            statement: "Uma equipa usa uma ferramenta que executa automaticamente um conjunto predefinido de testes todas as noites e envia um relatório de falhas por email a equipa. Este é um exemplo de que tipo de integração de ferramentas de teste?",
            options: {
                A: "Integracao continua e teste de regressão automatizado",
                B: "Análise estática integrada no processo de compilacao",
                C: "Execução manual de teste com reporte manual",
                D: "Gestao de dados de teste integrada com produção"
            },
            correctAnswer: "A",
            explanation: "Running automated tests every night with automated reporting is a classic continuous integration practice. The tests are executed automatically on a schedule (nightly build), and results are communicated to the team without manual intervention.",
            whyWrong: "Static analysis examines code without execution; this scenario involves test execution.",
            optionExplanations: {
                A: "Nightly automated test execution with reporting is a CI and regression testing practice.",
                B: "Static analysis does not involve test execution or runtime behavior.",
                C: "This scenario is automated, not manual.",
                D: "This involves test execution, not test data management."
            },
            chapter: 6,
            section: "6.1",
            subsection: "6.1.1",
            learningObjective: "FL-6.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["continuous integration", "automated testing", "nightly build"],
            examTip: "Automated night runs + email reporting = CI regression testing.",
            memoryAid: "Nightly automation = CI + regression testing."
        },
        {
            id: "Q140",
            statement: "Uma organização decide automatizar todos os seus testes de regressão. Apos seis meses, descobrem que os testes automatizados requerem manutenção significativa sempre que a interface do utilizador da aplicação muda. O que correu mal na sua abordagem de automação?",
            options: {
                A: "Não consideraram o esforço de manutenção necessário quando a aplicação evolui",
                B: "Deveriam ter contratado mais testadores manuais em vez disso",
                C: "Testes automatizados nunca devem precisar de manutenção",
                D: "Usaram a linguagem de programação errada para automação"
            },
            correctAnswer: "A",
            explanation: "A common risk of test automation is underestimating the maintenance effort. Automated tests, especially UI-level tests, need regular updates when the application changes. The organization failed to account for ongoing maintenance costs in their automation planning.",
            whyWrong: "Automated tests do require maintenance; no automation approach is maintenance-free.",
            optionExplanations: {
                A: "Maintenance cost is a well-known risk that should be factored into automation planning.",
                B: "Manual testing also has its place, but the issue is about proper automation planning.",
                C: "All automated tests require maintenance as the application evolves.",
                D: "The programming language is unlikely to be the root cause of maintenance issues."
            },
            chapter: 6,
            section: "6.2",
            subsection: "6.2.1",
            learningObjective: "FL-6.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test automation", "maintenance", "risks", "UI automation"],
            examTip: "Automation maintenance is a significant ongoing cost that must be planned for.",
            memoryAid: "UI changes = test maintenance. Plan for it."
        },
        {
            id: "Q141",
            statement: "Um testador executa um caso de teste e observa que o resultado real difere do resultado esperado. O que foi encontrado?",
            options: {
                A: "Uma falha",
                B: "Um defeito",
                C: "Um erro",
                D: "Uma causa raiz"
            },
            correctAnswer: "A",
            explanation: "A failure occurs when the software exhibits incorrect behavior during execution. The tester observed an actual result that deviates from the expected result, which is the definition of a failure. The failure is caused by an underlying fault (defect) in the code, which itself was introduced by an error (mistake) made by a human.",
            whyWrong: "An error is a human mistake that introduces a defect; the observable incorrect behavior is a failure.",
            optionExplanations: {
                A: "A failure is the deviation of actual behavior from expected behavior during execution.",
                B: "A fault (defect) is the underlying problem in the code that may cause a failure when executed.",
                C: "An error is a human mistake that introduced the defect.",
                D: "Root cause is the fundamental reason for a defect, determined through analysis."
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["failure", "fault", "error", "defect"],
            examTip: "Remember the sequence: Error (human mistake) -> Defect (in code) -> Failure (observable behavior).",
            memoryAid: "Error -> Defect -> Failure: Mistake causes bug causes crash."
        },
        {
            id: "Q142",
            statement: "Apos investigar uma série de falhas numa aplicação bancaria, a equipa determina que todas as falhas tiveram origem no tratamento incorreto do arredondamento decimal em cálculos de moeda. O que é isto um exemplo de?",
            options: {
                A: "Análise de causa raiz",
                B: "Depuração",
                C: "Análise dinâmica",
                D: "Agrupamento de falhas"
            },
            correctAnswer: "A",
            explanation: "Root cause analysis (RCA) is the process of identifying the underlying cause of defects or failures. In this case, the team traced multiple failures back to a single root cause (incorrect decimal rounding), which allows them to fix the fundamental problem rather than treating individual symptoms.",
            whyWrong: "Debugging is the process of locating and fixing a known defect, not tracing multiple failures to a common cause.",
            optionExplanations: {
                A: "RCA identifies the fundamental reason behind one or more defects to enable permanent correction.",
                B: "Debugging focuses on locating and fixing one specific defect.",
                C: "Dynamic analysis involves executing code to analyze behavior.",
                D: "Failure clustering describes a pattern of failures, not the analysis of their cause."
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["root cause analysis", "banking", "defect analysis"],
            examTip: "Root cause analysis finds the 'why' behind defects to prevent recurrence.",
            memoryAid: "RCA = keep asking 'why' until you find the source."
        },
        {
            id: "Q143",
            statement: "Qual afirmação diferencia corretamente a garantia da qualidade do teste?",
            options: {
                A: "A garantia da qualidade foca-se na adesao ao processo para prevenir defeitos; o teste foca-se em detetar defeitos no produto",
                B: "A garantia da qualidade é realizada por testadores; o teste é realizado por programadores",
                C: "A garantia da qualidade acontece após o teste estar completo",
                D: "Garantia da qualidade e teste são termos intercambiaveis para a mesma atividade"
            },
            correctAnswer: "A",
            explanation: "Quality assurance (QA) is a process-oriented activity that focuses on establishing and following processes to prevent defects from being introduced. Testing is a product-oriented activity that detects defects in the software. QA is proactive (prevention), testing is reactive (detection).",
            whyWrong: "Both QA and testing involve multiple roles; QA is not exclusive to testers nor is testing exclusive to developers.",
            optionExplanations: {
                A: "QA prevents defects through process improvement; testing detects defects through execution.",
                B: "Both QA and testing involve various stakeholders including developers and testers.",
                C: "QA activities occur throughout the development lifecycle, not after testing.",
                D: "They are distinct but complementary activities with different goals."
            },
            chapter: 1,
            section: "1.2",
            subsection: "1.2.1",
            learningObjective: "FL-1.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["quality assurance", "testing", "prevention", "detection"],
            examTip: "QA = process-oriented, defect prevention. Testing = product-oriented, defect detection.",
            memoryAid: "QA = Quality process; Testing = Product check."
        },
        {
            id: "Q144",
            statement: "Um gestor de projeto afirma que executar todas as combinações possíveis de entradas garantira que o software está livre de defeitos. Qual princípio de teste contradiz está afirmação?",
            options: {
                A: "O teste exaustivo e impossível",
                B: "Agrupamento de defeitos",
                C: "Paradoxo do pesticida",
                D: "O teste mostra a presenca de defeitos, não a sua ausência"
            },
            correctAnswer: "A",
            explanation: "The principle 'Exhaustive testing is impossible' states that testing all possible combinations of inputs and preconditions is not feasible except for trivial systems. Therefore, risk analysis and prioritization are used to focus testing efforts on the most important areas.",
            whyWrong: "While 'Testing shows presence, not absence' is also a valid principle, the statement directly contradicts the impossibility of exhaustive testing.",
            optionExplanations: {
                A: "Exhaustive testing is impractical; risk-based prioritization is necessary.",
                B: "Defect clustering refers to defects concentrating in specific modules.",
                C: "Pesticide paradox relates to tests becoming ineffective when repeated.",
                D: "This principle means absence of failures does not prove the software is defect-free."
            },
            chapter: 1,
            section: "1.3",
            subsection: "1.3.1",
            learningObjective: "FL-1.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["exhaustive testing", "testing principles", "complete testing"],
            examTip: "'Exhaustive testing is impossible' means you cannot test everything, so prioritize by risk.",
            memoryAid: "Exhaustive = impossible for anything beyond trivial."
        },
        {
            id: "Q145",
            statement: "Uma equipa está a testar um novo módulo de autenticação. Os programadores escrevem e executam testes para funções individuais, como hashing de palavras-passe e geracao de tokens. Que nível de teste isto representa?",
            options: {
                A: "Teste de componente",
                B: "Teste de integração",
                C: "Teste de sistema",
                D: "Teste de aceitação"
            },
            correctAnswer: "A",
            explanation: "Component testing (also called unit testing) focuses on testing individual components in isolation. Testing individual functions like password hashing and token generation are classic examples of component-level testing, typically performed by developers.",
            whyWrong: "Integration testing would verify interactions between the authentication module and other modules.",
            optionExplanations: {
                A: "Component testing verifies individual units like functions, methods, or classes in isolation.",
                B: "Integration testing checks interactions between components.",
                C: "System testing validates the complete, integrated system against requirements.",
                D: "Acceptance testing evaluates fitness for use from the user's perspective."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.1",
            learningObjective: "FL-2.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["component testing", "unit testing", "test level"],
            examTip: "Component testing = isolated units. Integration testing = connections between units.",
            memoryAid: "Component = single Lego brick; Integration = bricks connected."
        },
        {
            id: "Q146",
            statement: "Uma empresa está a migrar a sua base de dados de clientes de um sistema local para uma plataforma na nuvem. Que tipo de teste de manutenção é mais relevante durante está migração?",
            options: {
                A: "Teste de migração de dados para verificar a integridade e completeza dos dados após a migração",
                B: "Apenas teste funcional da nova interface na nuvem",
                C: "Nenhum teste é necessário se a ferramenta de migração for certificada",
                D: "Teste de usabilidade da interface da plataforma na nuvem"
            },
            correctAnswer: "A",
            explanation: "Data migration testing is a critical maintenance testing activity that verifies data is correctly transferred, transformed, and loaded into the target system. It checks data integrity, completeness, and consistency. This is essential when migrating from one system to another.",
            whyWrong: "Certification of a migration tool does not guarantee correct data migration for specific data structures.",
            optionExplanations: {
                A: "Data migration testing ensures data integrity, completeness, and correctness after migration.",
                B: "Functional testing alone does not verify that existing data was correctly migrated.",
                C: "Testing is essential regardless of tool certification, as every migration is unique.",
                D: "Usability is secondary to data integrity during migration."
            },
            chapter: 2,
            section: "2.3",
            subsection: "2.3.1",
            learningObjective: "FL-2.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["maintenance testing", "data migration", "data integrity"],
            examTip: "Data migration testing = verify data moved correctly, no loss, no corruption.",
            memoryAid: "Migration testing = count, compare, validate."
        },
        {
            id: "Q147",
            statement: "Em que modelo de ciclo de vida de desenvolvimento as atividades de teste são tipicamente realizadas após cada incremento, com cada incremento a adicionar nova funcionalidade?",
            options: {
                A: "Modelo de desenvolvimento iterativo",
                B: "Modelo em cascata",
                C: "Modelo em V",
                D: "Modelo big-bang"
            },
            correctAnswer: "A",
            explanation: "In iterative development models (including Agile), development occurs in increments or iterations, with each iteration producing a potentially shippable product increment. Testing is performed within each iteration to verify the newly added functionality and perform regression testing.",
            whyWrong: "In the V-model, testing activities are planned in parallel with development phases but executed in sequence.",
            optionExplanations: {
                A: "Iterative models test each increment, building functionality progressively.",
                B: "Waterfall performs testing as a single phase after development.",
                C: "The V-model pairs development and test phases but testing is not incremental.",
                D: "Big-bang is an integration approach, not a development lifecycle model."
            },
            chapter: 2,
            section: "2.1",
            subsection: "2.1.1",
            learningObjective: "FL-2.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["iterative development", "Agile", "incremental testing"],
            examTip: "Iterative = build a little, test a little, repeat.",
            memoryAid: "Iterative = repeated cycles of build and test."
        },
        {
            id: "Q148",
            statement: "Durante uma revisão informal de um documento de requisitos, um revisor nota várias afirmacoes ambiguas. Qual é o objetivo principal deste tipo de revisão?",
            options: {
                A: "Detetar defeitos informalmente sem uma reuniao formal, com baixo custo",
                B: "Aprovar formalmente o documento de requisitos",
                C: "Recolher métricas detalhadas para melhoria do processo",
                D: "Atribuir ações corretivas a membros específicos da equipa"
            },
            correctAnswer: "A",
            explanation: "An informal review is a lightweight, inexpensive review technique that does not follow a formal process. It typically involves the author sharing the document with colleagues who provide comments. The goal is to detect defects early with minimal overhead.",
            whyWrong: "Formal approval, detailed metrics, and assigned corrective actions are characteristics of formal reviews.",
            optionExplanations: {
                A: "Informal reviews are low-cost, flexible, and aim to find defects without process overhead.",
                B: "Formal approval is a goal of inspections, not informal reviews.",
                C: "Detailed metrics collection is associated with formal reviews.",
                D: "Corrective action assignment is more typical of formal review processes."
            },
            chapter: 3,
            section: "3.2",
            subsection: "3.2.1",
            learningObjective: "FL-3.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["informal review", "review types", "defect detection"],
            examTip: "Informal reviews = no formal process, no meeting required, low cost, flexible.",
            memoryAid: "Informal = no suits, no meeting room, just feedback."
        },
        {
            id: "Q149",
            statement: "Qual das seguintes é um benefício de usar ferramentas de análise estática durante o desenvolvimento?",
            options: {
                A: "Identificar violações de normas de codificação e potenciais vulnerabilidades de segurança antes da execução do código",
                B: "Substituir a necessidade de todas as atividades de teste dinâmico",
                C: "Corrigir automaticamente todos os defeitos encontrados no código",
                D: "Medir o desempenho da aplicação sob carga"
            },
            correctAnswer: "A",
            explanation: "Static analysis tools examine source code without executing it. They can identify coding standard violations, potential security vulnerabilities, syntax errors, and other issues early in development. This complements but does not replace dynamic testing.",
            whyWrong: "Static analysis cannot replace dynamic testing, which is needed to verify runtime behavior.",
            optionExplanations: {
                A: "Static analysis detects code issues, standard violations, and potential vulnerabilities early.",
                B: "Dynamic testing is still needed to verify runtime behavior and non-functional characteristics.",
                C: "Tools identify defects but do not automatically fix them.",
                D: "Performance measurement requires dynamic testing tools, not static analysis."
            },
            chapter: 3,
            section: "3.1",
            subsection: "3.1.2",
            learningObjective: "FL-3.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["static analysis", "static testing", "coding standards", "security"],
            examTip: "Static analysis = find issues early without running the code.",
            memoryAid: "Static analysis = code inspection by tool, no execution needed."
        },
        {
            id: "Q150",
            statement: "Qual das seguintes classifica corretamente as técnicas de teste?",
            options: {
                A: "Particionamento por equivalências e análise de valor fronteira são técnicas de caixa-preta",
                B: "Teste de tabela de decisão e teste de instruções são ambas técnicas de caixa-preta",
                C: "Teste de ramos e antecipacao de erros são ambas técnicas de caixa-branca",
                D: "Teste de transição de estados e teste de instruções são ambas técnicas de caixa-branca"
            },
            correctAnswer: "A",
            explanation: "Equivalence partitioning and boundary value analysis are black-box (specification-based) techniques that derive test cases from the functional specification without reference to internal code structure.",
            whyWrong: "Statement testing is a white-box technique, not a black-box technique.",
            optionExplanations: {
                A: "Both EP and BVA are specification-based black-box techniques.",
                B: "Statement testing is a white-box technique, not black-box.",
                C: "Error guessing is experience-based, not white-box.",
                D: "State transition testing is a black-box technique, not white-box."
            },
            chapter: 4,
            section: "4.1",
            subsection: "4.1.1",
            learningObjective: "FL-4.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["black-box", "white-box", "test techniques", "classification"],
            examTip: "Black-box = specification-based. White-box = structure-based. Experience-based = tester intuition.",
            memoryAid: "Black = external spec; White = internal code; Experience = gut feeling."
        },
        {
            id: "Q151",
            statement: "Uma companhia de seguros calcula premios anuais com base em grupos etarios: 18-25: $800, 26-40: $600, 41-65: $700, 66 mais: $900. Usando particionamento por equivalências, qual conjunto de valores fornece cobertura de cada particao valida?",
            options: {
                A: "22, 30, 50, 70",
                B: "18, 40, 65, 67",
                C: "17, 25, 41, 66",
                D: "25, 26, 65, 66"
            },
            correctAnswer: "A",
            explanation: "The valid partitions are: 18-25, 26-40, 41-65, and 66+. Option A provides one representative from each partition: 22 (18-25), 30 (26-40), 50 (41-65), and 70 (66+). Each value falls within a distinct valid partition.",
            whyWrong: "Option C includes 17 which is below the minimum valid age of 18.",
            optionExplanations: {
                A: "22, 30, 50, and 70 each represent one of the four valid age partitions.",
                B: "18 and 40 are boundary values; 67 is valid but 18 is a boundary.",
                C: "17 is in an invalid partition (below minimum age requirement).",
                D: "25, 26, 65, 66 are boundary or near-boundary values."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.1",
            learningObjective: "FL-4.2.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["equivalence partitioning", "insurance", "premiums"],
            examTip: "Pick one value from each partition. Any value in the range works for equivalence partitioning.",
            memoryAid: "One representative per group, any member will do."
        },
        {
            id: "Q152",
            statement: "Um dispositivo medico monitoriza a temperatura do paciente e aciona um alerta se a temperatura estiver fora do intervalo normal de 36,0 graus C a 37,5 graus C inclusive. Usando análise de valor fronteira de dois valores, quais valores de temperatura devem ser testados?",
            options: {
                A: "35,9, 36,0, 37,5, 37,6",
                B: "36,0, 36,5, 37,0, 37,5",
                C: "35,5, 36,0, 37,5, 38,0",
                D: "35,9, 36,0, 36,1, 37,4, 37,5, 37,6"
            },
            correctAnswer: "A",
            explanation: "Two-value BVA tests the boundary values and values just outside each boundary. The valid range is 36.0 to 37.5. The boundaries are at 36.0 (minimum) and 37.5 (maximum). The values to test are: 35.9 (just below min), 36.0 (minimum), 37.5 (maximum), and 37.6 (just above max).",
            whyWrong: "Option C uses 35.5 and 38.0 which are too far from the boundaries to be effective BVA values.",
            optionExplanations: {
                A: "35.9 (below min), 36.0 (min), 37.5 (max), 37.6 (above max) - correct 2-value BVA.",
                B: "36.5 and 37.0 are internal values, not boundary values.",
                C: "35.5 is too far below min; 38.0 is too far above max.",
                D: "36.1 and 37.4 are internal, not boundary values (3-value BVA)."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.2",
            learningObjective: "FL-4.2.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["boundary value analysis", "BVA", "medical device", "temperature"],
            examTip: "2-value BVA = min-1, min, max, max+1 for each boundary.",
            memoryAid: "BVA: just below, at, just above each boundary."
        },
        {
            id: "Q153",
            statement: "Uma tabela de decisão têm quatro condições, cada uma com dois valores possíveis (verdadeiro/falso). Usando a abordagem classica, quantas colunas teria a tabela de decisão completa?",
            options: {
                A: "16",
                B: "8",
                C: "4",
                D: "32"
            },
            correctAnswer: "A",
            explanation: "For a decision table with n conditions, the classical approach uses all possible combinations, which equals 2^n. With 4 conditions, this is 2^4 = 16 columns. Each column represents a unique combination of condition values.",
            whyWrong: "The number of columns doubles with each additional condition: 2^n, not n^2 or n*2.",
            optionExplanations: {
                A: "2^4 = 16 unique combinations of four boolean conditions.",
                B: "8 would be 2^3, which is for three conditions.",
                C: "4 is just the number of conditions, not the number of tests.",
                D: "32 would be 2^5, which is for five conditions."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.3",
            learningObjective: "FL-4.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["decision table", "conditions", "combinations"],
            examTip: "Complete decision table = 2^(number of conditions) columns.",
            memoryAid: "n conditions = 2^n test cases in classical decision table."
        },
        {
            id: "Q154",
            statement: "Num diagrama de transição de estados para um sistema de elevador, os estados são: Parado, ASubir, ADescer, PortaAberta. Qual das seguintes transições é mais provavelmente inválida?",
            options: {
                A: "De PortaAberta diretamente para ASubir",
                B: "De Parado para ASubir",
                C: "De ASubir para Parado",
                D: "De ADescer para Parado"
            },
            correctAnswer: "A",
            explanation: "A transition from DoorOpen directly to MovingUp is typically invalid because the doors must be closed before the elevator can move. The correct sequence would be DoorOpen to DoorClosed (or Idle) first, then to MovingUp. Safety rules require doors to be closed before movement.",
            whyWrong: "Moving from Idle to MovingUp is valid when the elevator receives a call and doors are closed.",
            optionExplanations: {
                A: "Doors must be closed before the elevator can move; DoorOpen to MovingUp skips this safety step.",
                B: "From Idle, the elevator can start moving up when called.",
                C: "MovingUp can transition to Idle when the elevator stops at a floor with no requests.",
                D: "MovingDown can transition to Idle when the elevator reaches the lowest floor or stops."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.4",
            learningObjective: "FL-4.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["state transition", "invalid transitions", "elevator"],
            examTip: "Always check guard conditions - transitions must be logically and physically possible.",
            memoryAid: "Invalid transitions = impossible or unsafe changes from one state to another."
        },
        {
            id: "Q155",
            statement: "Dado o seguinte pseudocodigo: INPUT x; INPUT y; SE x maior que 0 ENTAO IMPRIMIR Positivo; SENAO IMPRIMIR Não Positivo; FIMSE; SE y maior que 0 ENTAO IMPRIMIR Positivo Y; FIMSE; Qual é o número mínimo de casos de teste necessário para 100 por cento de cobertura de instruções?",
            options: {
                A: "2",
                B: "1",
                C: "3",
                D: "4"
            },
            correctAnswer: "A",
            explanation: "There are four executable statements: PRINT 'Positive', PRINT 'Non-positive', PRINT 'Positive Y'. However, PRINT 'Non-positive' and PRINT 'Positive' are mutually exclusive (only one executes depending on x). To cover all statements, we need: Test 1 (x > 0, y > 0) covering 'Positive' and 'Positive Y', and Test 2 (x <= 0) covering 'Non-positive'.",
            whyWrong: "One test case can only cover one branch of the first IF, missing either 'Positive' or 'Non-positive'.",
            optionExplanations: {
                A: "Two test cases: one with x>0 and y>0, another with x<=0 (y value can be anything).",
                B: "One test case cannot cover both branches of the IF-ELSE.",
                C: "Three is more than the minimum needed.",
                D: "Four is also more than necessary for statement coverage."
            },
            chapter: 4,
            section: "4.3",
            subsection: "4.3.1",
            learningObjective: "FL-4.3.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["statement coverage", "white-box", "test cases"],
            examTip: "For statement coverage, ensure every executable line runs at least once.",
            memoryAid: "Statement coverage = every line executed at least once."
        },
        {
            id: "Q156",
            statement: "Um gestor de teste está a estimar o esforço para testar um novo módulo e usa dados historicos de tres projetos anteriores semelhantes para calcular o esforço medio por caso de teste. Que técnica de estimativa está a ser usada?",
            options: {
                A: "Estimativa baseada em métricas",
                B: "Juizo de especialista",
                C: "Estrutura de decomposição do trabalho",
                D: "Tecnica Delphi"
            },
            correctAnswer: "A",
            explanation: "Metrics-based estimation uses historical data from past projects to estimate effort for the current project. By analyzing data from similar previous projects (e.g., average effort per test case), the test manager can calculate a data-driven estimate.",
            whyWrong: "Expert judgment relies on individual expertise rather than historical data.",
            optionExplanations: {
                A: "Metrics-based estimation uses quantitative data from past projects to predict future effort.",
                B: "Expert judgment depends on the experience of knowledgeable individuals.",
                C: "WBS involves breaking work into smaller components for estimation.",
                D: "Delphi is a consensus-based technique using multiple experts anonymously."
            },
            chapter: 5,
            section: "5.2",
            subsection: "5.2.1",
            learningObjective: "FL-5.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test estimation", "metrics-based", "historical data"],
            examTip: "Metrics-based = use history from past projects to predict the future.",
            memoryAid: "Metrics = numbers from the past to predict the future."
        },
        {
            id: "Q157",
            statement: "Um defeito e descoberto onde o logótipo da empresa na pagina de início de sessão está desalinhado em 2 píxeis. O defeito têm baixo impacto na funcionalidade, mas o cliente têm uma politica de marca rigorosa. Como deve o defeito ser classificado?",
            options: {
                A: "Severidade baixa, prioridade alta",
                B: "Severidade alta, prioridade alta",
                C: "Severidade baixa, prioridade baixa",
                D: "Severidade alta, prioridade baixa"
            },
            correctAnswer: "A",
            explanation: "Severity measures technical impact (2-pixel misalignment has low technical impact). Priority measures business urgency (branding policy compliance may make this urgent). Therefore, low severity and high priority is the appropriate classification.",
            whyWrong: "The misalignment does not cause data loss or functional failure, so severity is not high.",
            optionExplanations: {
                A: "Low technical severity but high business priority due to branding policy requirements.",
                B: "Severity is not high since functionality is not affected.",
                C: "Priority is high due to customer branding policy, not low.",
                D: "Severity is low, not high, as the technical impact is minimal."
            },
            chapter: 5,
            section: "5.6",
            subsection: "5.6.1",
            learningObjective: "FL-5.6.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["defect severity", "defect priority", "classification"],
            examTip: "Severity = technical damage. Priority = business urgency. They can differ.",
            memoryAid: "Severity = how bad; Priority = how soon."
        },
        {
            id: "Q158",
            statement: "Qual é o objetivo de definir critérios de saida num plano de teste?",
            options: {
                A: "Definir as condições que devem ser satisfeitas antes do teste poder ser considerado completo",
                B: "Especificar os requisitos minimos para iniciar a execução do teste",
                C: "Listar todas as funcionalidades que não serão testadas",
                D: "Identificar os requisitos do ambiente de teste"
            },
            correctAnswer: "A",
            explanation: "Exit criteria define the conditions that must be achieved to conclude a specific test level or set of tests. Examples include achieving a certain percentage of test case pass rate, meeting coverage targets, or resolving critical defects. They help make objective completion decisions.",
            whyWrong: "Entry criteria define the conditions for starting testing, which is the opposite of exit criteria.",
            optionExplanations: {
                A: "Exit criteria specify measurable conditions for completing testing.",
                B: "Entry criteria define what must be in place before testing begins.",
                C: "Features not tested are described in the test scope or risk analysis.",
                D: "Environment requirements are part of test planning but separate from exit criteria."
            },
            chapter: 5,
            section: "5.2",
            subsection: "5.2.1",
            learningObjective: "FL-5.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["exit criteria", "test plan", "completion conditions"],
            examTip: "Entry criteria = start conditions; Exit criteria = done conditions.",
            memoryAid: "Exit = when can I stop? Entry = when can I start?"
        },
        {
            id: "Q159",
            statement: "Qual das seguintes é uma atividade de controlo de teste?",
            options: {
                A: "Repriorizar testes para focar em areas de alto risco quando a pressao do calendario aumenta",
                B: "Medir a percentagem de casos de teste executados até ao momento",
                C: "Definir os objetivos de teste no plano de teste",
                D: "Arquivar artefactos de teste no final do projeto"
            },
            correctAnswer: "A",
            explanation: "Test control involves taking corrective actions when monitoring reveals deviations from the plan. Reprioritizing tests due to schedule pressure is a control action that adjusts the testing approach based on current conditions.",
            whyWrong: "Measuring test execution progress is test monitoring, not test control.",
            optionExplanations: {
                A: "Taking corrective action to adjust testing based on changing conditions is test control.",
                B: "Measuring progress is test monitoring, which precedes control.",
                C: "Defining objectives is part of test planning.",
                D: "Archiving artifacts is a test completion activity."
            },
            chapter: 5,
            section: "5.3",
            subsection: "5.3.1",
            learningObjective: "FL-5.3.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["test control", "corrective action", "prioritization"],
            examTip: "Control = act on what monitoring reveals. If behind schedule, take corrective action.",
            memoryAid: "Control = steer the ship when you see you are off course."
        },
        {
            id: "Q160",
            statement: "Que tipo de ferramenta de teste e especificamente concebida para simular milhares de utilizadores virtuais a aceder a um sistema simultaneamente para medir o comportamento do sistema sob carga?",
            options: {
                A: "Ferramenta de teste de desempenho",
                B: "Ferramenta de gestão de teste",
                C: "Ferramenta de análise estática",
                D: "Framework de teste unitario"
            },
            correctAnswer: "A",
            explanation: "Performance testing tools (also called load testing tools) can simulate large numbers of virtual users to apply specified levels of load to a system. They measure response times, throughput, resource utilization, and help identify performance bottlenecks.",
            whyWrong: "Test management tools organize test artifacts but do not generate virtual user load.",
            optionExplanations: {
                A: "Performance testing tools simulate load and measure system performance characteristics.",
                B: "Test management tools manage test cases, plans, and reports.",
                C: "Static analysis tools examine code without executing it.",
                D: "Unit test frameworks support component-level automated testing."
            },
            chapter: 6,
            section: "6.1",
            subsection: "6.1.1",
            learningObjective: "FL-6.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["performance testing", "load testing", "test tools"],
            examTip: "Performance testing tools = simulate load, measure speed, find bottlenecks.",
            memoryAid: "Performance tools = many virtual users, one real system."
        },
    ],
    exam5: [
        {
            id: "Q161",
            statement: "Qual das seguintes define melhor a qualidade no contexto do teste de software?",
            options: {
                A: "O grau em que um componente ou sistema satisfaz os requisitos especificados e as necessidades do utilizador",
                B: "A ausência de todos os defeitos no software",
                C: "A velocidade a que o software executa as suas funções",
                D: "O número de funcionalidades implementadas no software"
            },
            correctAnswer: "A",
            explanation: "Quality is defined as the degree to which a component, system, or process meets specified requirements and user/customer needs and expectations. It encompasses both meeting specifications (verification) and satisfying actual user needs (validation).",
            whyWrong: "Absence of defects alone does not guarantee quality, as the system may still fail to meet user needs.",
            optionExplanations: {
                A: "Quality is a measure of how well the system meets requirements and satisfies user needs.",
                B: "A system can be defect-free but still not meet user needs (absence-of-errors fallacy).",
                C: "Performance is one aspect of quality, not its complete definition.",
                D: "Feature count does not correlate with quality."
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["quality", "definition", "requirements", "user needs"],
            examTip: "Quality = meeting requirements AND satisfying user needs.",
            memoryAid: "Quality = specs met + users happy."
        },
        {
            id: "Q162",
            statement: "Um programador comete um erro ao escrever código, resultando num cálculo incorreto no módulo de folha de pagamento. Quando o código incorreto é executado com valores de entrada específicos, o sistema produz valores salariais errados. Qual sequência descreve corretamente este cenário?",
            options: {
                A: "Erro, Defeito, Falha",
                B: "Defeito, Erro, Falha",
                C: "Falha, Erro, Defeito",
                D: "Erro, Falha, Defeito"
            },
            correctAnswer: "A",
            explanation: "The correct sequence is: a human error (mistake) introduces a defect (fault) in the code, and when the defective code is executed under specific conditions, a failure (observable incorrect behavior) occurs. In this scenario: the developer's mistake is the error, the incorrect calculation code is the defect, and the wrong salary is the failure.",
            whyWrong: "The error comes first (human mistake), not the defect.",
            optionExplanations: {
                A: "Error (mistake) leads to Defect (in code) which leads to Failure (observable behavior).",
                B: "The error precedes the defect; the mistake causes the coding error.",
                C: "The failure is the observable outcome, not the initial cause.",
                D: "The failure occurs after execution, not before the defect."
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["error", "defect", "failure", "sequence"],
            examTip: "Remember the order: Human Error -> Code Defect -> Runtime Failure.",
            memoryAid: "Error (person) -> Defect (code) -> Failure (behavior)."
        },
        {
            id: "Q163",
            statement: "Qual é o objetivo da análise de causa raiz no contexto da gestão de defeitos?",
            options: {
                A: "Identificar a causa subjacente dos defeitos para que as melhorias no processo possam prevenir a recorrencia",
                B: "Atribuir culpa a pessoa que introduziu o defeito",
                C: "Fechar relatorios de defeitos o mais rapidamente possível",
                D: "Determinar quais casos de teste falharam durante a execução"
            },
            correctAnswer: "A",
            explanation: "Root cause analysis aims to identify the fundamental reason why a defect was introduced. By understanding the root cause, organizations can implement process improvements to prevent similar defects from occurring in future projects, supporting continuous improvement.",
            whyWrong: "Root cause analysis is a constructive learning activity, not a blame assignment process.",
            optionExplanations: {
                A: "RCA identifies systemic causes to enable preventive actions and process improvement.",
                B: "RCA focuses on process improvement, not individual blame.",
                C: "Closing reports quickly does not address prevention.",
                D: "Identifying failed test cases is part of test execution analysis, not RCA."
            },
            chapter: 1,
            section: "1.2",
            subsection: "1.2.1",
            learningObjective: "FL-1.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["root cause analysis", "defect prevention", "process improvement"],
            examTip: "Root cause analysis = find why, fix the process, prevent recurrence.",
            memoryAid: "RCA = treat the cause, not just the symptom."
        },
        {
            id: "Q164",
            statement: "Uma equipa está a testar um dispositivo medico crítico para a segurança e decide usar inspeções formais, documentação extensa e análise de cobertura minuciosa. Qual princípio de teste está abordagem reflete?",
            options: {
                A: "O teste depende do contexto",
                B: "O teste exaustivo e impossível",
                C: "Paradoxo do pesticida",
                D: "Agrupamento de defeitos"
            },
            correctAnswer: "A",
            explanation: "The context dependency principle states that testing is performed differently in different contexts. A safety-critical medical device requires a more rigorous, formal, and documented approach than, for example, a simple mobile game. The testing approach must be tailored to the specific context and risks.",
            whyWrong: "Exhaustive testing is always impossible, but that is not why the team chose a rigorous approach.",
            optionExplanations: {
                A: "The rigor and formality of testing depend on the context, including safety-criticality and risks.",
                B: "Exhaustive testing impossibility is unrelated to choosing a rigorous approach.",
                C: "Pesticide paradox concerns test effectiveness dropping when tests are repeated.",
                D: "Defect clustering refers to uneven defect distribution across modules."
            },
            chapter: 1,
            section: "1.3",
            subsection: "1.3.1",
            learningObjective: "FL-1.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["context dependent", "safety-critical", "testing principles"],
            examTip: "Context dependency = approach depends on the type of application and its risks.",
            memoryAid: "Context = medical device testing is NOT like testing a game."
        },
        {
            id: "Q165",
            statement: "Uma organização têm teste realizado por uma equipa que reporta ao gestor de projeto mas e separada da equipa de desenvolvimento. Que nível de independencia isto representa?",
            options: {
                A: "O teste e independente da equipa de desenvolvimento mas dentro da mesma organização",
                B: "O teste é realizado pelos próprios programadores",
                C: "O teste e externalizado para uma organização externa",
                D: "O teste é realizado por analistas de negócio"
            },
            correctAnswer: "A",
            explanation: "This represents a medium level of independence where testing is performed by a separate team from development but still within the same organization. Independence helps avoid the author bias where developers may overlook their own defects.",
            whyWrong: "Outsourcing to an external organization would represent a higher level of independence.",
            optionExplanations: {
                A: "A separate test team within the organization provides independence from development.",
                B: "Developers testing their own code is the lowest level of independence.",
                C: "External testing represents the highest level of independence.",
                D: "Business analysts performing testing is not a standard independence level."
            },
            chapter: 1,
            section: "1.5",
            subsection: "1.5.1",
            learningObjective: "FL-1.5.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["independence", "test organization", "testing levels"],
            examTip: "Independence levels: self-testing < colleague < separate team < external organization.",
            memoryAid: "More independence = more objectivity, less author bias."
        },
        {
            id: "Q166",
            statement: "Num projeto que utiliza a abordagem de equipa whole-team, qual é o papel do testador?",
            options: {
                A: "O testador colabora com todos os membros da equipa e partilha a responsabilidade pela qualidade com os programadores e outros",
                B: "O testador e unicamente responsável por todas as atividades de qualidade",
                C: "O testador apenas executa casos de teste manuais definidos pelos programadores",
                D: "O testador gere o sistema de rastreio de defeitos sem participar no teste"
            },
            correctAnswer: "A",
            explanation: "In the whole-team approach (common in Agile), quality is a shared responsibility. Testers collaborate with developers, product owners, and other team members. They contribute to requirements refinement, test design, automation, exploratory testing, and quality advocacy.",
            whyWrong: "Quality is a shared responsibility, not solely the tester's burden.",
            optionExplanations: {
                A: "The whole-team approach means everyone shares responsibility for quality.",
                B: "Quality is everyone's responsibility, not just the tester's.",
                C: "Testers do more than manual execution; they design tests and collaborate.",
                D: "Testers are active participants, not just tool administrators."
            },
            chapter: 1,
            section: "1.5",
            subsection: "1.5.2",
            learningObjective: "FL-1.5.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["whole-team approach", "tester role", "collaboration"],
            examTip: "Whole-team = quality is everyone's job, testers are quality advocates.",
            memoryAid: "Whole-team = all hands on quality."
        },
        {
            id: "Q167",
            statement: "Qual das seguintes e a sequência correta das atividades de teste no processo de teste do ISTQB?",
            options: {
                A: "Planeamento de teste, monitorização e controlo de teste, análise de teste, conceção de teste, implementação de teste, execução de teste, conclusão de teste",
                B: "Análise de teste, conceção de teste, planeamento de teste, execução de teste, conclusão de teste",
                C: "Planeamento de teste, execução de teste, análise de teste, conceção de teste, conclusão de teste",
                D: "Concecao de teste, análise de teste, planeamento de teste, execução de teste, monitorização de teste"
            },
            correctAnswer: "A",
            explanation: "The ISTQB test process consists of seven activities in sequence: test planning (defining objectives and approach), test monitoring and control (tracking progress), test analysis (analyzing test basis), test design (designing test cases), test implementation (creating test data and scripts), test execution (running tests), and test completion (archiving and lessons learned).",
            whyWrong: "Test planning must come before analysis and design activities.",
            optionExplanations: {
                A: "This is the correct sequence from the ISTQB test process framework.",
                B: "Test planning must precede test analysis.",
                C: "Test execution comes after design and implementation, not before.",
                D: "Test planning comes before design and analysis."
            },
            chapter: 1,
            section: "1.4",
            subsection: "1.4.1",
            learningObjective: "FL-1.4.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["test process", "test activities", "sequence"],
            examTip: "PMaADIEC: Plan, Monitor, Analysis, Design, Implementation, Execution, Completion.",
            memoryAid: "PMaADIEC = Plan Monitor analysis Design Implement Execute Complete."
        },
        {
            id: "Q168",
            statement: "Durante a análise de teste, um testador revê o documento de requisitos e identifica aspetos testáveis do sistema. Qual é o principal resultado da análise de teste?",
            options: {
                A: "Condicoes de teste derivadas da base de teste",
                B: "Casos de teste detalhados com valores de entrada específicos",
                C: "Registos de execução de teste",
                D: "Relatorios de sintese de teste"
            },
            correctAnswer: "A",
            explanation: "Test analysis is the activity where the test basis (requirements, specifications, etc.) is analyzed to identify testable aspects called test conditions. These are 'what to test' items that form the foundation for subsequent test design activities.",
            whyWrong: "Detailed test cases with specific values are produced during test design, not analysis.",
            optionExplanations: {
                A: "Test analysis produces test conditions - what should be tested.",
                B: "Test cases with input values are designed during test design.",
                C: "Execution logs are produced during test execution.",
                D: "Summary reports are produced during test completion."
            },
            chapter: 1,
            section: "1.4",
            subsection: "1.4.2",
            learningObjective: "FL-1.4.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test analysis", "test conditions", "test basis"],
            examTip: "Test analysis = what to test. Test design = how to test it.",
            memoryAid: "Analysis = identify targets; Design = create ammunition."
        },
        {
            id: "Q169",
            statement: "Qual das seguintes é uma carateristica do teste de sistema?",
            options: {
                A: "Testar o sistema completo e integrado para avaliar a conformidade com os requisitos especificados",
                B: "Testar componentes individuais em isolamento",
                C: "Testar interacoes entre componentes integrados",
                D: "Teste realizado por utilizadores finais para determinar a aceitação"
            },
            correctAnswer: "A",
            explanation: "System testing is a test level that focuses on testing the complete, integrated system against its specified requirements. It evaluates both functional and non-functional requirements and is typically performed by an independent test team in a test environment that mirrors production.",
            whyWrong: "Testing individual components is component testing, not system testing.",
            optionExplanations: {
                A: "System testing validates the complete system against functional and non-functional requirements.",
                B: "Individual component testing is the component test level.",
                C: "Interaction testing between components is integration testing.",
                D: "End-user testing is acceptance testing."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.1",
            learningObjective: "FL-2.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["system testing", "test level", "complete system"],
            examTip: "System testing = test the whole system against requirements.",
            memoryAid: "System = the big picture, everything together."
        },
        {
            id: "Q170",
            statement: "Uma agencia governamental exige que um novo sistema de cálculo de impostos passe num teste de aceitação formal contra requisitos regulatórios específicos antes de poder ser implementado. Que tipo de teste de aceitação é este?",
            options: {
                A: "Teste de aceitação regulatoria",
                B: "Teste de aceitação de utilizador",
                C: "Teste de aceitação operacional",
                D: "Teste de aceitação contratual"
            },
            correctAnswer: "A",
            explanation: "Regulatory acceptance testing is performed to ensure the system complies with relevant regulations, laws, and government standards. Tax calculation systems must comply with tax regulations, making this regulatory acceptance testing. It is often mandatory before deployment.",
            whyWrong: "User acceptance testing focuses on whether the system meets user needs, not regulatory compliance.",
            optionExplanations: {
                A: "Regulatory acceptance testing verifies compliance with laws, regulations, and standards.",
                B: "UAT focuses on user needs and business processes.",
                C: "Operational acceptance testing checks operational readiness (backup, recovery, etc.).",
                D: "Contract acceptance testing verifies compliance with contract terms."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.1",
            learningObjective: "FL-2.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["regulatory acceptance testing", "acceptance testing", "compliance"],
            examTip: "Types of acceptance: User, Operational, Contract, Regulatory.",
            memoryAid: "Acceptance types: User, Operational, Contract, Regulatory (UOCR)."
        },
        {
            id: "Q171",
            statement: "Uma equipa de teste está a verificar se um website pode lidar com 10.000 utilizadores concorrentes sem falhar. Que tipo de teste está a ser realizado?",
            options: {
                A: "Teste não funcional",
                B: "Teste funcional",
                C: "Teste de componente",
                D: "Teste de aceitação"
            },
            correctAnswer: "A",
            explanation: "Non-functional testing evaluates how the system behaves, including performance, reliability, and scalability. Testing the system's ability to handle 10,000 concurrent users is a performance/load test, which falls under non-functional testing.",
            whyWrong: "Functional testing verifies what the system does (specific functions), not how well it performs.",
            optionExplanations: {
                A: "Load/performance testing is a non-functional test type.",
                B: "Functional testing checks correct behavior of features.",
                C: "Component testing tests individual units.",
                D: "Acceptance testing validates fitness for use."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.2",
            learningObjective: "FL-2.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["non-functional testing", "performance", "load testing"],
            examTip: "If the test asks 'how well' or 'how many users,' it is non-functional testing.",
            memoryAid: "Non-functional = How well, how fast, how secure."
        },
        {
            id: "Q172",
            statement: "Uma empresa está a atualizar o seu sistema de CRM e precisa de verificar se todos os registos de clientes foram corretamente transferidos do sistema antigo. Que tipo de teste é mais apropriado?",
            options: {
                A: "Teste de migração de dados como parte do teste de manutenção",
                B: "Teste de usabilidade da nova interface de CRM",
                C: "Teste de desempenho do novo sistema",
                D: "Teste de segurança do módulo de início de sessão"
            },
            correctAnswer: "A",
            explanation: "Data migration testing is a sub-type of maintenance testing that verifies data has been correctly extracted, transformed, and loaded into the new system. It checks data completeness, integrity, and consistency. This is essential when upgrading or replacing systems.",
            whyWrong: "Usability testing evaluates user experience, not data correctness after migration.",
            optionExplanations: {
                A: "Data migration testing verifies correct data transfer as part of maintenance testing.",
                B: "Usability is unrelated to data migration correctness.",
                C: "Performance testing measures system speed, not data accuracy.",
                D: "Security testing checks access control, not data integrity after migration."
            },
            chapter: 2,
            section: "2.3",
            subsection: "2.3.1",
            learningObjective: "FL-2.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["maintenance testing", "data migration", "data integrity"],
            examTip: "Any change to a live system requires maintenance testing, including data migration.",
            memoryAid: "Data migration = move it, then prove it arrived intact."
        },
        {
            id: "Q173",
            statement: "Uma equipa de desenvolvimento está a integrar um módulo de gateway de pagamento com o sistema de gestão de encomendas existente. Eles decidem integrar primeiro o módulo de pagamento, depois o módulo de inventário, depois o módulo de envio, verificando em cada passo. Que estratégia de integração estão a usar?",
            options: {
                A: "Teste de integração incremental",
                B: "Teste de integração big-bang",
                C: "Teste de sistema",
                D: "Teste de componente"
            },
            correctAnswer: "A",
            explanation: "Incremental integration testing integrates components one at a time, testing after each addition. This allows defects to be localized to the newly added component, making debugging easier. The described approach (adding modules one by one with testing at each step) is incremental integration.",
            whyWrong: "Big-bang integration would integrate all modules at once before testing.",
            optionExplanations: {
                A: "Incremental integration adds and tests components one by one.",
                B: "Big-bang integrates everything at once before testing.",
                C: "System testing tests the complete system, not the integration process.",
                D: "Component testing tests individual modules in isolation."
            },
            chapter: 2,
            section: "2.2",
            subsection: "2.2.1",
            learningObjective: "FL-2.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["incremental integration", "integration testing", "strategy"],
            examTip: "Incremental = one at a time. Big-bang = all at once.",
            memoryAid: "Incremental = step by step; Big-bang = all or nothing."
        },
        {
            id: "Q174",
            statement: "Quais são as duas principais categorias de teste estático?",
            options: {
                A: "Revisoes e análise estática",
                B: "Particionamento por equivalências e análise de valor fronteira",
                C: "Teste de instruções e teste de decisões",
                D: "Teste exploratório e antecipacao de erros"
            },
            correctAnswer: "A",
            explanation: "The two main categories of static testing are reviews (human examination of work products) and static analysis (tool-based evaluation). Reviews include informal reviews, walkthroughs, technical reviews, and inspections. Static analysis uses tools to detect potential defects in code or other artifacts without executing them.",
            whyWrong: "Equivalence partitioning, boundary value analysis, statement testing, decision testing, exploratory testing, and error guessing are all dynamic testing techniques that require code execution.",
            optionExplanations: {
                A: "Reviews and static analysis are the two main categories of static testing.",
                B: "Both equivalence partitioning and boundary value analysis are dynamic black-box techniques.",
                C: "Statement testing and decision testing are dynamic white-box structural techniques.",
                D: "Exploratory testing and error guessing are dynamic experience-based techniques."
            },
            chapter: 3,
            section: "3.1",
            subsection: "3.1.1",
            learningObjective: "FL-3.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["static testing", "reviews", "static analysis", "categories"],
            examTip: "Static testing = no code execution. Dynamic testing = code execution required.",
            memoryAid: "Static = don't run it; Dynamic = run it and watch."
        },
        {
            id: "Q175",
            statement: "Qual é a sequência correta de fases num processo de revisão formal?",
            options: {
                A: "Planeamento, arranque, preparação individual, reuniao de revisão, retrabalho, acompanhamento",
                B: "Reuniao de revisão, preparação individual, planeamento, retrabalho, acompanhamento",
                C: "Planeamento, reuniao de revisão, arranque, preparação individual, retrabalho",
                D: "Preparação individual, planeamento, arranque, reuniao de revisão, acompanhamento, retrabalho"
            },
            correctAnswer: "A",
            explanation: "The formal review process follows these phases: 1) Planning (defining scope, selecting participants), 2) Kick-off (communicating logistics), 3) Individual preparation (each reviewer examines the work product), 4) Review meeting (discussing defects), 5) Rework (author fixes defects), 6) Follow-up (verifying fixes).",
            whyWrong: "The review meeting occurs after individual preparation, not before.",
            optionExplanations: {
                A: "Planning, Kick-off, Individual preparation, Review meeting, Rework, Follow-up is the correct order.",
                B: "Planning must come before the review meeting.",
                C: "Individual preparation occurs before the review meeting.",
                D: "Planning must come first, and follow-up after rework."
            },
            chapter: 3,
            section: "3.2",
            subsection: "3.2.1",
            learningObjective: "FL-3.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["formal review", "review process", "phases"],
            examTip: "Formal review phases: Plan, Kick-off, Prepare, Meeting, Rework, Follow-up.",
            memoryAid: "PKPMRF: Plan, Kick-off, Prepare, Meeting, Rework, Follow-up."
        },
        {
            id: "Q176",
            statement: "Durante uma revisão de código, um revisor nota que uma variável é declarada mas nunca usada no método. Que tipo de defeito é este?",
            options: {
                A: "Um defeito de fluxo de dados",
                B: "Um defeito de fluxo de controlo",
                C: "Um defeito de requisitos",
                D: "Um defeito de usabilidade"
            },
            correctAnswer: "A",
            explanation: "An unused variable is a data flow defect because it relates to how data is handled in the code. Data flow defects include unused variables, variables used before initialization, and variables that are assigned but never read.",
            whyWrong: "Control flow defects involve incorrect execution paths, such as unreachable code or infinite loops.",
            optionExplanations: {
                A: "Data flow defects include unused variables and improper data usage.",
                B: "Control flow defects involve loops, branches, and execution sequences.",
                C: "Requirements defects are errors in specifications.",
                D: "Usability defects relate to user interface and experience."
            },
            chapter: 3,
            section: "3.1",
            subsection: "3.1.2",
            learningObjective: "FL-3.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["data flow", "defect types", "code review", "static testing"],
            examTip: "Data flow = variable usage. Control flow = decision paths.",
            memoryAid: "Data flow = what happens to data; Control flow = which path is taken."
        },
        {
            id: "Q177",
            statement: "Qual das seguintes é um benefício de realizar revisões durante a fase de requisitos?",
            options: {
                A: "Corrigir requisitos ambíguos precocemente, prevenindo retrabalho dispendioso durante o desenvolvimento",
                B: "Eliminar a necessidade de todo o teste dinâmico",
                C: "Gerar automaticamente casos de teste a partir dos requisitos revistos",
                D: "Substituir a necessidade de teste de aceitação de utilizador"
            },
            correctAnswer: "A",
            explanation: "Reviews during the requirements phase can identify ambiguous, incomplete, or contradictory requirements early. Fixing these issues at this stage is significantly cheaper than discovering them during development or testing. This aligns with the principle of early testing.",
            whyWrong: "Reviews complement but do not eliminate the need for dynamic testing.",
            optionExplanations: {
                A: "Early review of requirements reduces costly rework and clarifies expectations.",
                B: "Dynamic testing is still needed to verify actual system behavior.",
                C: "Reviews do not automatically generate test cases.",
                D: "UAT remains necessary to validate that the system meets user needs."
            },
            chapter: 3,
            section: "3.2",
            subsection: "3.2.1",
            learningObjective: "FL-3.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["reviews", "requirements", "early defect detection"],
            examTip: "Reviews at requirements phase = catch problems before they become expensive.",
            memoryAid: "Requirements review = fix the blueprint before you build the house."
        },
        {
            id: "Q178",
            statement: "Qual técnica de teste é mais apropriada para testar um sistema com regras de negócio bem definidas envolvendo multiplas condições que produzem ações específicas?",
            options: {
                A: "Teste de tabela de decisão",
                B: "Antecipacao de erros",
                C: "Teste de instruções",
                D: "Teste baseado em listas de controlo"
            },
            correctAnswer: "A",
            explanation: "Decision table testing is ideal for systems with defined business rules where combinations of conditions determine specific actions. It systematically covers all combinations of condition values and their corresponding expected actions, making it perfect for complex business logic.",
            whyWrong: "Error guessing relies on experience and intuition, not systematic coverage of conditions.",
            optionExplanations: {
                A: "Decision table testing systematically covers condition combinations and expected actions.",
                B: "Error guessing is experience-based and less systematic.",
                C: "Statement testing is a white-box technique focused on code coverage.",
                D: "Checklist-based testing follows predefined lists without combinatorial analysis."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.3",
            learningObjective: "FL-4.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["decision table", "business rules", "test technique selection"],
            examTip: "Business rules with multiple conditions = decision table testing.",
            memoryAid: "Business rules + conditions = decision table."
        },
        {
            id: "Q179",
            statement: "Uma biblioteca cobra taxas de atraso para livros devolvidos após a data de vencimento. A taxa e: $0 para 0 dias de atraso, $1 por dia para 1-7 dias de atraso, $2 por dia para 8-14 dias de atraso e $5 por dia para 15 ou mais dias de atraso. Usando particionamento por equivalências, qual conjunto de valores fornece a melhor cobertura de todas as particoes validas?",
            options: {
                A: "0, 4, 10, 20",
                B: "1, 7, 8, 15",
                C: "0, 1, 8, 15",
                D: "5, 12, 18, 25"
            },
            correctAnswer: "A",
            explanation: "The valid partitions are: 0 days (no fee), 1-7 days ($1/day), 8-14 days ($2/day), and 15+ days ($5/day). Option A provides one representative from each: 0 (first partition), 4 (1-7 range), 10 (8-14 range), and 20 (15+ range).",
            whyWrong: "Option C includes 0 (valid), but 1, 8, and 15 are boundary values, not typical EP representatives.",
            optionExplanations: {
                A: "0, 4, 10, and 20 each represent one distinct valid partition.",
                B: "1, 7, 8, and 15 are boundary values at the edges of partitions.",
                C: "1, 8, and 15 are boundary values rather than partition representatives.",
                D: "5, 12, 18, and 25 all fall within partitions but miss the 0-day partition."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.1",
            learningObjective: "FL-4.2.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["equivalence partitioning", "library fines", "late fees"],
            examTip: "Equivalence partitioning = one representative from each partition, not specifically boundaries.",
            memoryAid: "One from each group, any value in the range will do."
        },
        {
            id: "Q180",
            statement: "Um sistema de bilhética para um museu oferece entrada com desconto para visitantes com idades entre 6-17 ($5) e seniores com 65 ou mais ($8). Bilhetes normais ($12) aplicam-se a idades 18-64. Criancas menores de 6 entram gratuitamente. Usando análise de valor fronteira de tres valores, qual conjunto de idades deve ser testado para a fronteira entre a entrada gratuita e os bilhetes de crianca?",
            options: {
                A: "5, 6, 7",
                B: "4, 5, 6",
                C: "6, 7, 8",
                D: "0, 5, 6"
            },
            correctAnswer: "A",
            explanation: "The boundary between free (under 6) and children's tickets (6-17) is at age 6. Three-value BVA tests the values just below the boundary, at the boundary, and just above: 5 (just below - free), 6 (at boundary - $5 children), and 7 (just above - $5 children).",
            whyWrong: "Option B tests 4, 5, 6 which misses the value just above the boundary (7).",
            optionExplanations: {
                A: "5 (min-1), 6 (min), 7 (min+1) is correct 3-value BVA for this boundary.",
                B: "4 is further from the boundary than needed; missing 7.",
                C: "6 (min), 7 (min+1), 8 is missing the below-boundary value (5).",
                D: "0 is far from the boundary."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.2",
            learningObjective: "FL-4.2.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["boundary value analysis", "BVA", "ticketing", "age verification"],
            examTip: "3-value BVA = A-1, A, A+1 for each boundary where A is the boundary value.",
            memoryAid: "Three-value BVA: just below, at, just above."
        },
        {
            id: "Q181",
            statement: "Um sistema de emprestimos têm duas condições: Pontuacao de Credito (maior ou igual a 700 e bom) e Estado de Emprego (Empregado ou Desempregado). Um emprestimo e aprovado apenas se ambas as condições forem favoráveis. Quantos casos de teste são necessarios para uma tabela de decisão completa?",
            options: {
                A: "4",
                B: "2",
                C: "3",
                D: "8"
            },
            correctAnswer: "A",
            explanation: "With two conditions, there are 2^2 = 4 possible combinations: (Good, Employed) = Approved, (Good, Unemployed) = Not Approved, (Below 700, Employed) = Not Approved, (Below 700, Unemployed) = Not Approved. The complete decision table has 4 columns.",
            whyWrong: "The number of test cases for a complete decision table with 2 conditions is 2^2 = 4.",
            optionExplanations: {
                A: "2 conditions x 2 values each = 4 combinations in the complete decision table.",
                B: "2 is insufficient to cover all condition combinations.",
                C: "3 would miss one combination of the four possibilities.",
                D: "8 would be for 3 conditions (2^3)."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.3",
            learningObjective: "FL-4.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["decision table", "loan approval", "conditions"],
            examTip: "Number of test cases = 2^(number of conditions) for full decision table.",
            memoryAid: "n conditions = 2^n test cases."
        },
        {
            id: "Q182",
            statement: "Um sistema de processamento de encomendas têm estados: Novo, Verificado, Enviado, Entregue, Cancelado. A partir do estado Verificado, qual das seguintes transições é mais provavelmente valida?",
            options: {
                A: "Verificado para Enviado",
                B: "Verificado para Novo",
                C: "Verificado para Entregue",
                D: "Enviado para Cancelado"
            },
            correctAnswer: "A",
            explanation: "In an order processing system, a verified order can be shipped. The typical flow is: New -> Verified -> Shipped -> Delivered. Cancellation is usually only possible from New or Verified states, not after shipping.",
            whyWrong: "Delivered comes after Shipped, not directly from Verified.",
            optionExplanations: {
                A: "A verified order can proceed to being shipped, which is the next logical state.",
                B: "Going back to New from Verified would not make sense in a forward-flowing process.",
                C: "Delivered can only be reached after Shipped.",
                D: "Cancelling after shipping is typically not allowed in standard order processing."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.4",
            learningObjective: "FL-4.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["state transition", "order processing", "valid transitions"],
            examTip: "Valid transitions follow the logical flow of the business process.",
            memoryAid: "Order flow: New -> Verified -> Shipped -> Delivered."
        },
        {
            id: "Q183",
            statement: "Qual das seguintes descreve melhor o teste de caso de utilização?",
            options: {
                A: "Teste baseado em cenários que descrevem como um utilizador interage com o sistema para alcançar um objetivo específico",
                B: "Testar cada função individual do sistema em isolamento",
                C: "Testar a estrutura interna do código para alcançar alta cobertura",
                D: "Testar entradas aleatorias para encontrar falhas inesperadas"
            },
            correctAnswer: "A",
            explanation: "Use case testing is a black-box technique that designs test cases based on use cases - descriptions of how users interact with the system to accomplish specific goals. It covers the main flow (happy path) and alternative flows (error handling, exceptions).",
            whyWrong: "Testing functions in isolation describes component testing, not use case testing.",
            optionExplanations: {
                A: "Use case testing validates user-system interactions for specific goals.",
                B: "Individual function testing is component-level testing.",
                C: "Internal code coverage is white-box testing.",
                D: "Random input testing is fuzz testing, not use case testing."
            },
            chapter: 4,
            section: "4.2",
            subsection: "4.2.5",
            learningObjective: "FL-4.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["use case testing", "scenarios", "user interaction"],
            examTip: "Use case testing = testing user stories or scenarios from the user's perspective.",
            memoryAid: "Use case = user's journey through the system."
        },
        {
            id: "Q184",
            statement: "Dado o código: se (temperatura maior que 100) { alarme = 1 } senao se (temperatura maior que 80) { aviso = 1 } senao { normal = 1 } imprimir(Feito). Quantos casos de teste são necessarios para 100 por cento de cobertura de instruções?",
            options: {
                A: "3",
                B: "1",
                C: "2",
                D: "4"
            },
            correctAnswer: "A",
            explanation: "There are four executable statements: alarm = 1, warning = 1, normal = 1, and print('Done'). However, the print statement is always executed regardless of the condition. The three assignment statements are mutually exclusive (only one executes based on temperature). Therefore, we need 3 test cases: one for temperature > 100, one for 80 < temperature <= 100, and one for temperature <= 80.",
            whyWrong: "One test case can only execute one of the three assignment statements.",
            optionExplanations: {
                A: "Three test cases cover all three branches and thus all four statements.",
                B: "One test case covers only one path (33% statement coverage of conditional assignments).",
                C: "Two test cases miss one of the three assignment statements.",
                D: "Four is more than the minimum needed."
            },
            chapter: 4,
            section: "4.3",
            subsection: "4.3.1",
            learningObjective: "FL-4.3.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["statement coverage", "multi-branch", "white-box"],
            examTip: "For IF-ELSE IF chains, you need one test case per branch for full statement coverage.",
            memoryAid: "n mutually exclusive branches = n test cases for full statement coverage."
        },
        {
            id: "Q185",
            statement: "Para o código: se (a maior que 0 OU b menor que 5) { x = 1 } senao { x = 0 } se (c igual a 10) { y = 2 } senao { y = 3 }, qual é o número mínimo de casos de teste para 100 por cento de cobertura de ramos?",
            options: {
                A: "3",
                B: "1",
                C: "2",
                D: "4"
            },
            correctAnswer: "A",
            explanation: "There are two decision points. The first if (with OR condition) has two outcomes (true/false). The second if has two outcomes (true/false). To achieve 100% branch coverage: Test 1 (a > 0, c == 10) covers first IF true and second IF true. Test 2 (a > 0, c != 10) covers first IF true and second IF false. Test 3 (a <= 0, b >= 5, any c) covers first IF false. So 3 test cases.",
            whyWrong: "Two test cases cannot cover all branch outcomes because you need a case where both sides of the OR are false.",
            optionExplanations: {
                A: "Three test cases cover all 4 branch outcomes.",
                B: "One test case covers at most 2 branch outcomes.",
                C: "Two test cases cannot cover the false outcome of the first IF if both have a > 0.",
                D: "Four is more than the minimum needed."
            },
            chapter: 4,
            section: "4.3",
            subsection: "4.3.2",
            learningObjective: "FL-4.3.1",
            kLevel: "K3",
            difficulty: "Hard",
            keywords: ["branch coverage", "compound conditions", "white-box"],
            examTip: "For branch coverage, test all true/false outcomes of each decision point.",
            memoryAid: "Branch = both sides of each decision, regardless of condition complexity."
        },
        {
            id: "Q186",
            statement: "Um testador precisa de selecionar uma técnica de teste para um sistema crítico de segurança onde a estrutura interna do código deve ser minuciosamente exercitada. Qual técnica deve o testador escolher?",
            options: {
                A: "Teste de instruções e ramos (caixa-branca)",
                B: "Particionamento por equivalências (caixa-preta)",
                C: "Antecipacao de erros (baseada na experiência)",
                D: "Teste de caso de utilização (caixa-preta)"
            },
            correctAnswer: "A",
            explanation: "For safety-critical systems, structural coverage of the code is often mandatory (e.g., DO-178C for aviation requires specific coverage levels). White-box techniques like statement testing and branch testing ensure that the code structure is thoroughly exercised, providing confidence that no code path remains untested.",
            whyWrong: "Black-box and experience-based techniques do not provide structural coverage measurements.",
            optionExplanations: {
                A: "White-box techniques are essential when thorough structural coverage is required.",
                B: "EP does not measure or guarantee code structure coverage.",
                C: "Error guessing does not provide systematic code coverage.",
                D: "Use case testing does not ensure code structure is exercised."
            },
            chapter: 4,
            section: "4.3",
            subsection: "4.3.3",
            learningObjective: "FL-4.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["white-box testing", "safety-critical", "statement coverage", "branch coverage"],
            examTip: "Safety-critical often requires white-box techniques to meet coverage mandates.",
            memoryAid: "Safety-critical = you must know every code path is tested."
        },
        {
            id: "Q187",
            statement: "Qual das seguintes é uma diferença chave entre o teste baseado em listas de controlo e o teste exploratório?",
            options: {
                A: "O teste baseado em listas de controlo segue uma lista predefinida; o teste exploratório envolve aprendizagem, conceção e execução concorrentes",
                B: "O teste baseado em listas de controlo não pode encontrar defeitos; o teste exploratório encontra sempre defeitos",
                C: "O teste exploratório requer casos de teste predefinidos; o teste baseado em listas de controlo não requer",
                D: "O teste baseado em listas de controlo é automatizado; o teste exploratório é manual"
            },
            correctAnswer: "A",
            explanation: "Checklist-based testing uses a predefined list of items to verify, providing structured coverage. Exploratory testing involves simultaneous learning about the application, designing tests, and executing them in real time. Both are experience-based techniques but differ in structure and approach.",
            whyWrong: "Both techniques can find defects; neither guarantees defect discovery.",
            optionExplanations: {
                A: "Checklists provide structure; exploratory testing is dynamic and adaptive.",
                B: "Both techniques are capable of finding defects.",
                C: "Exploratory testing does not require predefined cases; it creates them on the fly.",
                D: "Both techniques are typically performed manually."
            },
            chapter: 4,
            section: "4.4",
            subsection: "4.4.3",
            learningObjective: "FL-4.4.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["checklist-based testing", "exploratory testing", "experience-based"],
            examTip: "Checklist = structured from experience; Exploratory = learn and test simultaneously.",
            memoryAid: "Checklist = follow the list; Exploratory = make the list as you go."
        },
        {
            id: "Q188",
            statement: "Um testador está a testar uma nova funcionalidade sem documentação disponível. O testador começa por aprender a funcionalidade atraves da utilização pratica, depois concebe e executa testes com base nas descobertas. Qual técnica está a ser aplicada?",
            options: {
                A: "Teste exploratório",
                B: "Teste de tabela de decisão",
                C: "Teste de transição de estados",
                D: "Particionamento por equivalências"
            },
            correctAnswer: "A",
            explanation: "Exploratory testing is characterized by concurrent learning, test design, and test execution. When documentation is unavailable, exploratory testing is particularly valuable because testers can learn the application through direct interaction and adapt their testing based on what they discover.",
            whyWrong: "Decision table testing requires documented business rules and conditions.",
            optionExplanations: {
                A: "Exploratory testing is ideal when documentation is limited or unavailable.",
                B: "Decision table testing requires defined conditions from specifications.",
                C: "State transition testing requires a known state model.",
                D: "Equivalence partitioning requires knowledge of input ranges and partitions."
            },
            chapter: 4,
            section: "4.4",
            subsection: "4.4.2",
            learningObjective: "FL-4.4.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["exploratory testing", "no documentation", "learning"],
            examTip: "No docs? No problem - exploratory testing works without predefined scripts.",
            memoryAid: "No docs = explore and discover."
        },
        {
            id: "Q189",
            statement: "Qual é o objetivo principal de uma estratégia de teste?",
            options: {
                A: "Definir a abordagem geral e os objetivos para o teste a nível organizacional ou de programa",
                B: "Listar todos os casos de teste que serão executados",
                C: "Substituir a necessidade de planos de teste individuais",
                D: "Atribuir testadores específicos a casos de teste"
            },
            correctAnswer: "A",
            explanation: "A test strategy defines the overall testing approach, including test levels, test types, techniques, and resource requirements at an organizational or program level. It provides high-level guidance, while test plans provide detail for specific projects or iterations.",
            whyWrong: "Detailed test case lists are part of test documentation, not the test strategy.",
            optionExplanations: {
                A: "The test strategy sets the high-level testing approach and objectives.",
                B: "Test cases are detailed in test plans and test specifications.",
                C: "Test plans provide project-specific detail that complements the strategy.",
                D: "Resource assignment is typically done in test plans."
            },
            chapter: 5,
            section: "5.1",
            subsection: "5.1.1",
            learningObjective: "FL-5.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test strategy", "test approach", "test management"],
            examTip: "Test strategy = big picture approach. Test plan = detailed execution plan.",
            memoryAid: "Strategy = the 'how' at high level; Plan = the 'how' in detail."
        },
        {
            id: "Q190",
            statement: "Um plano de teste deve incluir todos os seguintes EXCETO:",
            options: {
                A: "A informação de contacto pessoal de cada membro da equipa",
                B: "O ambito e os objetivos do teste",
                C: "A abordagem e as técnicas de teste a serem utilizadas",
                D: "Os requisitos de recursos e calendario"
            },
            correctAnswer: "A",
            explanation: "A test plan includes scope, objectives, approach, techniques, resources, schedule, risks, and deliverables. While team member roles may be mentioned, personal contact information is not a standard component of a test plan.",
            whyWrong: "Test scope, approach, and resources are all standard test plan components.",
            optionExplanations: {
                A: "Personal contact details are not part of a professional test plan.",
                B: "Scope and objectives are fundamental to test planning.",
                C: "Test approach and techniques are key planning decisions.",
                D: "Resource and schedule management are essential planning elements."
            },
            chapter: 5,
            section: "5.2",
            subsection: "5.2.1",
            learningObjective: "FL-5.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test plan", "test planning", "contents"],
            examTip: "Test plan = objectives, scope, approach, resources, schedule, risks, deliverables.",
            memoryAid: "Test plan contents = OASRSD (Objectives, Approach, Scope, Resources, Schedule, Deliverables)."
        },
        {
            id: "Q191",
            statement: "Qual métrica ajudaria melhor um gestor de teste a acompanhar a eficacia do teste em encontrar defeitos?",
            options: {
                A: "Percentagem de detecao de defeitos (DDP)",
                B: "Numero de casos de teste executados por dia",
                C: "Percentagem de casos de teste automatizados",
                D: "Numero de testadores na equipa"
            },
            correctAnswer: "A",
            explanation: "Defect Detection Percentage (DDP) measures the number of defects found during testing compared to the total defects found (including those found in production). A higher DDP indicates that testing is effective at finding defects before release.",
            whyWrong: "Test cases executed per day measures execution speed, not defect-finding effectiveness.",
            optionExplanations: {
                A: "DDP = defects found during testing / (defects found during testing + defects found in production).",
                B: "Execution rate does not indicate how many defects are being found.",
                C: "Automation percentage measures process efficiency, not effectiveness.",
                D: "Team size is a resource metric, not an effectiveness indicator."
            },
            chapter: 5,
            section: "5.3",
            subsection: "5.3.1",
            learningObjective: "FL-5.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test metrics", "defect detection percentage", "DDP", "effectiveness"],
            examTip: "DDP = how good is testing at catching bugs before release.",
            memoryAid: "DDP = defects caught by testing / total defects."
        },
        {
            id: "Q192",
            statement: "Num fluxo de trabalho de gestão de defeitos, o que acontece tipicamente imediatamente após um defeito ser descoberto é reportado?",
            options: {
                A: "O defeito e triado para avaliar a severidade, prioridade e atribuir propriedade",
                B: "O defeito e automaticamente corrigido pelo sistema",
                C: "O caso de teste que encontrou o defeito e eliminado",
                D: "A versão e imediatamente cancelada"
            },
            correctAnswer: "A",
            explanation: "After a defect is reported, it enters a triage or assessment phase where the defect is reviewed to determine its severity, priority, and the appropriate action (fix, defer, reject). It is then assigned to the appropriate person for resolution.",
            whyWrong: "Defects are not automatically fixed; they require human analysis and resolution.",
            optionExplanations: {
                A: "Triage assesses the defect's impact and determines next steps.",
                B: "Defects require human intervention to fix.",
                C: "Test cases are valuable artifacts and should not be deleted because they found defects.",
                D: "Canceling a release is an extreme measure taken only for critical issues."
            },
            chapter: 5,
            section: "5.6",
            subsection: "5.6.1",
            learningObjective: "FL-5.6.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["defect management", "triage", "workflow"],
            examTip: "Defect workflow: Discover -> Report -> Triage -> Assign -> Fix -> Verify -> Close.",
            memoryAid: "Defect lifecycle: Report, Assess, Assign, Fix, Verify, Close."
        },
        {
            id: "Q193",
            statement: "Um gestor de teste está a conduzir uma análise de risco e identifica que o módulo de início de sessão têm uma alta probabilidade de defeitos de segurança mas um baixo impacto no negócio porque o sistema e apenas para uso interno. Como deve o nível de risco ser determinado?",
            options: {
                A: "Nivel de risco = probabilidade x impacto",
                B: "Nivel de risco = probabilidade + impacto",
                C: "Nivel de risco = impacto dividido por probabilidade",
                D: "O nível de risco é sempre alto se a probabilidade é alta"
            },
            correctAnswer: "A",
            explanation: "Risk level is typically calculated as the product of likelihood (probability of failure) and impact (consequence of failure). In this case, high likelihood combined with low impact would result in a medium risk level, guiding how much testing effort to allocate.",
            whyWrong: "Risk level is a multiplicative function of likelihood and impact, not additive or divisive.",
            optionExplanations: {
                A: "Risk = Likelihood x Impact is the standard risk calculation formula.",
                B: "Risk is computed as product, not sum.",
                C: "Division does not reflect the combined effect of likelihood and impact.",
                D: "Risk considers both likelihood and impact, not likelihood alone."
            },
            chapter: 5,
            section: "5.5",
            subsection: "5.5.2",
            learningObjective: "FL-5.5.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["risk analysis", "risk level", "likelihood", "impact"],
            examTip: "Risk = Likelihood x Impact. Both factors determine the final risk level.",
            memoryAid: "Risk = How likely x How bad."
        },
        {
            id: "Q194",
            statement: "Qual das seguintes é um exemplo de uma atividade de avaliação de risco de produto?",
            options: {
                A: "Analisar quais funcionalidades são mais criticas para as operações de negócio e podem conter defeitos",
                B: "Identificar o risco de que o ambiente de teste não estara pronto a tempo",
                C: "Avaliar o risco de que um testador chave possa sair do projeto",
                D: "Avaliar o risco orcamental para a fase de teste"
            },
            correctAnswer: "A",
            explanation: "Product risk assessment focuses on identifying risks related to the quality of the software product itself. Analyzing which features are critical to business operations and may contain defects is a product risk activity because it addresses potential quality issues in the software.",
            whyWrong: "Test environment readiness, tester attrition, and budget concerns are project risks, not product risks.",
            optionExplanations: {
                A: "Assessing critical features for potential defects is a product risk activity.",
                B: "Test environment availability is a project risk.",
                C: "Personnel risks are project risks.",
                D: "Budget risk is a project risk."
            },
            chapter: 5,
            section: "5.5",
            subsection: "5.5.1",
            learningObjective: "FL-5.5.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["product risk", "risk assessment", "quality risk"],
            examTip: "Product risk = what could go wrong with the software. Project risk = what could go wrong with the project.",
            memoryAid: "Product = software quality; Project = management and resources."
        },
        {
            id: "Q195",
            statement: "Um relatório de conclusão de teste deve incluir qual das seguintes opções?",
            options: {
                A: "Resumo do teste realizado, desvios do plano e licoes aprendidas",
                B: "Uma lista de todos os emails pessoais dos membros da equipa",
                C: "O código fonte completo da aplicação",
                D: "O plano de marketing para o lançamento do produto"
            },
            correctAnswer: "A",
            explanation: "A test completion report (or test summary report) summarizes the testing effort, including what was tested, results, deviations from the plan, unresolved defects, and lessons learned. It provides stakeholders with a comprehensive view of the testing outcomes.",
            whyWrong: "Source code and marketing plans are outside the scope of a test completion report.",
            optionExplanations: {
                A: "Test summary, deviations, and lessons learned are standard completion report content.",
                B: "Personal information is not included in test reports.",
                C: "Source code is a development artifact, not part of test reporting.",
                D: "Marketing is outside the testing scope."
            },
            chapter: 5,
            section: "5.3",
            subsection: "5.3.1",
            learningObjective: "FL-5.3.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test completion report", "test summary", "lessons learned"],
            examTip: "Test completion report = what was done, what was found, what was learned.",
            memoryAid: "Completion report = results + deviations + lessons."
        },
        {
            id: "Q196",
            statement: "Um gestor de teste está a estimar o esforço para um novo projeto e decide pedir a tres gestores de teste experientes que fornecam estimativas independentes, depois discuti-las para alcançar consenso. Que técnica de estimativa e está?",
            options: {
                A: "Tecnica Delphi (ou Delphi alargado)",
                B: "Estrutura de decomposição do trabalho",
                C: "Juizo de especialista por uma única pessoa",
                D: "Estimativa baseada em métricas"
            },
            correctAnswer: "A",
            explanation: "The Delphi technique (Wideband Delphi) involves multiple experts providing independent estimates anonymously, followed by discussion and re-estimation until consensus is reached. This reduces bias from any single expert and produces more reliable estimates.",
            whyWrong: "Single expert judgment involves only one person, not multiple independent estimates.",
            optionExplanations: {
                A: "Delphi uses multiple independent experts with iterative consensus-building.",
                B: "WBS decomposes work into smaller components for estimation.",
                C: "This involves multiple experts, not just one.",
                D: "Metrics-based uses historical data, not expert consensus."
            },
            chapter: 5,
            section: "5.2",
            subsection: "5.2.1",
            learningObjective: "FL-5.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["Delphi technique", "estimation", "expert consensus"],
            examTip: "Delphi = multiple experts, anonymous estimates, consensus through iteration.",
            memoryAid: "Delphi = many experts, one estimate."
        },
        {
            id: "Q197",
            statement: "Qual das seguintes é uma responsabilidade chave da gestão de configuração no teste?",
            options: {
                A: "Garantir que todos os artefactos de teste são unicamente identificados e controlados por versão",
                B: "Decidir quais casos de teste automatizar",
                C: "Contratar e formar membros da equipa de teste",
                D: "Criar o calendario de teste"
            },
            correctAnswer: "A",
            explanation: "Configuration management in testing involves identifying, controlling, and tracking test artifacts and their versions. This ensures that test cases, test data, test scripts, and other work products are properly versioned, changes are controlled, and traceability is maintained.",
            whyWrong: "Test case automation decisions are made during test planning and design, not CM.",
            optionExplanations: {
                A: "CM ensures identification, version control, and traceability of test artifacts.",
                B: "Automation decisions are part of test planning, not CM.",
                C: "Hiring is a human resources responsibility.",
                D: "Scheduling is part of test planning."
            },
            chapter: 5,
            section: "5.4",
            subsection: "5.4.1",
            learningObjective: "FL-5.4.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["configuration management", "version control", "test artifacts"],
            examTip: "CM = identify, control, track, and trace all test artifacts.",
            memoryAid: "CM = know what you have and what changed."
        },
        {
            id: "Q198",
            statement: "Num framework de automação de testes orientado por palavras-chave, qual é o objetivo das palavras-chave?",
            options: {
                A: "As palavras-chave representam ações ou operações que podem ser reutilizadas em vários casos de teste",
                B: "As palavras-chave são palavras reservadas na linguagem de programação usada para automação",
                C: "As palavras-chave substituem a necessidade de qualquer dado de teste",
                D: "As palavras-chave são usadas apenas para nomear relatorios de teste"
            },
            correctAnswer: "A",
            explanation: "In keyword-driven testing, keywords represent high-level actions (such as 'Login', 'ClickButton', 'VerifyText') that are defined once and reused across test cases. This approach allows test cases to be created using business-readable keywords without programming knowledge.",
            whyWrong: "Keywords are not programming language reserved words; they are user-defined action names.",
            optionExplanations: {
                A: "Keywords encapsulate actions that can be reused in multiple test scenarios.",
                B: "Keywords are user-defined action names, not language reserved words.",
                C: "Test data is still needed to parameterize keywords.",
                D: "Keywords define test actions, not report names."
            },
            chapter: 6,
            section: "6.1",
            subsection: "6.1.1",
            learningObjective: "FL-6.1.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["keyword-driven", "test automation", "framework", "keywords"],
            examTip: "Keyword-driven = actions as keywords, reusable, readable by non-technical stakeholders.",
            memoryAid: "Keywords = reusable action words for test steps."
        },
        {
            id: "Q199",
            statement: "Uma equipa automatizou 500 testes de regressão e o tempo de execução da automação diminuiu de 8 horas para 45 minutos. No entanto, a equipa gasta 15 horas por semana a manter os testes automatizados. O que deve a equipa avaliar?",
            options: {
                A: "O retorno do investimento (ROI) da automação de testes, comparando os custos de manutenção com as poupanças de tempo",
                B: "Se a ferramenta de automação têm um melhor esquema de cores",
                C: "Se os testes podem ser executados num computador mais rapido",
                D: "Se mais testes devem ser automatizados imediatamente"
            },
            correctAnswer: "A",
            explanation: "When automation maintenance costs are high, the team should evaluate the ROI of test automation. Even though execution time decreased, the maintenance effort may reduce or negate the benefits. The team should analyze whether the automation investment is providing net value.",
            whyWrong: "The tool's appearance is irrelevant to evaluating automation effectiveness.",
            optionExplanations: {
                A: "ROI analysis compares benefits (time saved) against costs (maintenance effort).",
                B: "Appearance does not affect automation value.",
                C: "Faster hardware does not address the maintenance cost issue.",
                D: "Adding more tests without addressing maintenance costs could worsen the problem."
            },
            chapter: 6,
            section: "6.2",
            subsection: "6.2.1",
            learningObjective: "FL-6.2.1",
            kLevel: "K2",
            difficulty: "Medium",
            keywords: ["test automation", "ROI", "maintenance", "cost-benefit"],
            examTip: "Automation ROI = (savings from automation) - (cost of creation + cost of maintenance).",
            memoryAid: "ROI = benefits - costs; if negative, rethink automation strategy."
        },
        {
            id: "Q200",
            statement: "Qual ferramenta de teste seria mais apropriada para monitorizar e analisar os registos gerados por um servidor web durante um teste de carga?",
            options: {
                A: "Uma ferramenta de análise de registos integrada com uma ferramenta de teste de desempenho",
                B: "Uma ferramenta de gestão de teste",
                C: "Um framework de teste unitario",
                D: "Uma ferramenta de análise estática"
            },
            correctAnswer: "A",
            explanation: "Log analysis tools can parse and analyze server logs to extract performance metrics, error patterns, and system behavior during load testing. When integrated with performance testing tools, they provide comprehensive insights into how the server handled the load.",
            whyWrong: "Test management tools organize artifacts but do not analyze server logs.",
            optionExplanations: {
                A: "Log analysis tools process server logs and can identify issues during load tests.",
                B: "Test management tools do not perform log analysis.",
                C: "Unit test frameworks are for component-level testing.",
                D: "Static analysis tools examine source code, not runtime logs."
            },
            chapter: 6,
            section: "6.1",
            subsection: "6.1.1",
            learningObjective: "FL-6.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: ["log analysis", "performance testing", "test tools"],
            examTip: "Log analysis tools help diagnose issues found during performance testing.",
            memoryAid: "Log analysis = finding clues in system logs."
        },
    ],
    exam6: [
        {
            id: "Q201",
            statement: "Uma equipa de banca móvel pretende que as partes interessadas compreendam o risco residual do produto antes da disponibilização. Qual objetivo de teste é mais diretamente abordado?",
            options: {
                A: "Fornecer informação para a tomada de decisão",
                B: "Provar que a aplicação está livre de defeitos",
                C: "Substituir a gestão de risco do projeto",
                D: "Garantir a satisfação do cliente"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q202",
            statement: "Durante a execução do teste, um testador observa que o total de um carrinho de compras está errado apenas quando um cupao é um cartao presente são ambos aplicados. Como se chama o comportamento incorreto observavel?",
            options: {
                A: "Falha",
                B: "Defeito",
                C: "Erro",
                D: "Causa raiz"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q203",
            statement: "Qual afirmação explica melhor porque o teste exaustivo é geralmente impossível?",
            options: {
                A: "Combinacoes de entrada, caminhos, temporizacao e estados de dados são normalmente demasiado numerosos para testar completamente",
                B: "Os testadores não estão autorizados a executar todos os testes planeados",
                C: "As ferramentas de automação não podem executar testes durante a noite",
                D: "Os programadores devem realizar teste exaustivo antes do teste de sistema"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q204",
            statement: "Uma equipa executa repetidamente um pacote de regressão para funcionalidades inalteradas, mas adiciona periodicamente testes para novos fluxos de trabalho e padroes de defeitos recentes. Qual princípio está a ser principalmente abordado?",
            options: {
                A: "Os testes desgastam-se e devem ser mantidos",
                B: "O teste prova que não existem defeitos restantes",
                C: "Os defeitos estão sempre uniformemente distribuidos",
                D: "A qualidade e independente do contexto"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q205",
            statement: "Qual produto de trabalho é mais provavelmente produzido durante a implementação de teste?",
            options: {
                A: "Scripts de teste automatizados e procedimentos de teste priorizados",
                B: "Um caso de negócio assinado para o projeto",
                C: "O pacote de produção implementado",
                D: "Um módulo de código fonte corrigido"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q206",
            statement: "Um testador desafia um requisito ambíguo numa reuniao de refinamento sem culpar o analista. Qual competência de testador é mais claramente demonstrada?",
            options: {
                A: "Comunicacao eficaz e pensamento crítico",
                B: "Administracao de base de dados",
                C: "Negociacao de contratos",
                D: "Autorizacao de disponibilização"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q207",
            statement: "Qual é um provável benefício do teste independente?",
            options: {
                A: "Vies reduzido do autor ao avaliar o objeto de teste",
                B: "Remocao de todas as necessidades de comunicação do projeto",
                C: "Garantia de que mais defeitos serão corrigidos",
                D: "Eliminação do teste por programadores"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q208",
            statement: "Um produto passou em todos os testes de requisitos especificados, mas os utilizadores não conseguem concluir a sua tarefa mais importante de forma eficiente. Qual princípio e ilustrado?",
            options: {
                A: "Ausência de erros é uma falácia",
                B: "O teste exaustivo é possível",
                C: "Agrupamento de defeitos",
                D: "O teste precoce e desnecessario"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q209",
            statement: "Num modelo sequencial, qual atividade de teste deve começar durante o trabalho de requisitos em vez de esperar pelo código executavel?",
            options: {
                A: "Rever requisitos e derivar condições de teste iniciais",
                B: "Executar scripts de desempenho em produção",
                C: "Fechar todos os relatorios de defeitos",
                D: "Substituir o teste de aceitação pelo teste unitario"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q210",
            statement: "Qual exemplo representa melhor o teste de componente?",
            options: {
                A: "Um programador testa uma única função de cálculo de imposto usando um framework de teste unitario",
                B: "Utilizadores validam um processo completo de folha de pagamento",
                C: "A equipa de operações monitoriza incidentes em produção",
                D: "Um testador avalia interacoes entre vários servicos implementados"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q211",
            statement: "Uma equipa verifica que dois microsservicos trocam mensagens em conformidade com o contrato após cada servico ter passado nos seus próprios testes. Qual nível de teste é este?",
            options: {
                A: "Teste de integração",
                B: "Teste de componente",
                C: "Teste de aceitação",
                D: "Teste de manutenção"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q212",
            statement: "Qual afirmação distingue corretamente o teste funcional do teste não funcional?",
            options: {
                A: "O teste funcional verifica o que o sistema faz; o teste não funcional verifica qualidades como desempenho ou usabilidade",
                B: "O teste funcional é sempre manual; o teste não funcional é sempre automatizado",
                C: "O teste funcional é feito apenas ao nível de aceitação",
                D: "O teste não funcional não pode revelar falhas"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q213",
            statement: "Uma regra fiscal muda após a disponibilização e os testes de regressão são selecionados em torno dos cálculos de fatura afetados. Que tipo de contexto de teste é este?",
            options: {
                A: "Teste de manutenção",
                B: "Teste de confirmação",
                C: "Apenas teste de componente",
                D: "Apenas teste estático"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q214",
            statement: "Qual defeito é mais provável que o teste estático encontre antes da execução do teste?",
            options: {
                A: "Um termo inconsistente em duas secoes de requisitos",
                B: "Uma fuga de memória que ocorre após seis horas de execução",
                C: "Um timeout causado por latencia da rede de produção",
                D: "Uma condição de corrida visivel apenas sob carga"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q215",
            statement: "Qual é o principal objetivo de um percurso?",
            options: {
                A: "Explicar um produto de trabalho e obter feedback dos participantes",
                B: "Medir formalmente a cobertura de ramos",
                C: "Executar casos de teste contra o sistema",
                D: "Aprovar a aquição de ferramentas"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q216",
            statement: "Durante uma revisão formal, quem e o principal responsável por registar anomalias, decisões e pontos em aberto?",
            options: {
                A: "Escriturario",
                B: "Autor",
                C: "Gestor",
                D: "Moderador"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q217",
            statement: "Uma lista de controlo para rever historias de utilizador pergunta se cada história têm critérios de aceitação claros, valor de negócio e testabilidade. Que fator de sucesso de revisão está a ser aplicado?",
            options: {
                A: "Usar listas de controlo adequadas e focar nos objetivos de revisão definidos",
                B: "Substituir o teste dinâmico por revisões",
                C: "Evitar a preparação para poupar tempo",
                D: "Limitar as revisões apenas a gestores"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q218",
            statement: "Um campo aceita quantidades de encomenda inteiras de 1 a 99 inclusive. Usando análise de valor fronteira de dois valores, qual conjunto é mais apropriado?",
            options: {
                A: "1, 2, 98, 99",
                B: "0, 1, 99, 100",
                C: "50, 51, 52, 53",
                D: "-1, 0, 100, 101"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q219",
            statement: "Uma regra de comprimento de palavra-passe permite 8 a 20 caracteres inclusive. Que valores suportam melhor a análise de valor fronteira de tres valores?",
            options: {
                A: "7, 8, 9, 19, 20, 21",
                B: "8, 14, 20",
                C: "1, 2, 3, 4, 5, 6",
                D: "0, 10, 30, 40"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q220",
            statement: "Um sistema de tarifas cobra tarifa de crianca para idades 0-11, tarifa jovem para 12-17, tarifa adulta para 18-64 e tarifa senior para 65 mais. Qual conjunto têm um representante de cada particao de equivalência valida?",
            options: {
                A: "5, 15, 40, 70",
                B: "11, 12, 17, 18",
                C: "0, 1, 2, 3",
                D: "64, 65, 66, 67"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q221",
            statement: "Um emprestimo e aprovado se a pontuação de credito for alta e o rendimento for verificado, ou se houver uma autorizacao do gestor. Qual técnica é mais adequada para conceber testes para estas combinações de regras?",
            options: {
                A: "Teste de tabela de decisão",
                B: "Teste de transição de estados",
                C: "Teste de instruções",
                D: "Apenas antecipacao de erros"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q222",
            statement: "Para uma funcionalidade de início de sessão, tres tentativas falhadas bloqueiam a conta; um início de sessão bem-sucedido antes disso reinicia a contagem. Qual técnica melhor modela este comportamento?",
            options: {
                A: "Teste de transição de estados",
                B: "Particionamento por equivalências",
                C: "Teste de instruções",
                D: "Teste de pares combinados"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q223",
            statement: "Dado um código com uma instrucao se contendo resultados verdadeiro e falso, qual cobertura requer que os testes executem ambos os resultados pelo menos uma vez?",
            options: {
                A: "Cobertura de ramos",
                B: "Cobertura de instruções",
                C: "Particionamento por equivalências",
                D: "Teste baseado em listas de controlo"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q224",
            statement: "Um programa têm 20 instruções executaveis. Um conjunto de testes executa 15 delas pelo menos uma vez. Qual é a cobertura de instruções?",
            options: {
                A: "75 por cento",
                B: "25 por cento",
                C: "80 por cento",
                D: "133 por cento"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q225",
            statement: "Uma configuração têm opções de navegador, sistema operativo e idioma. O teste de combinação completa e demasiado caro, mas cada par de valores de opcao deve aparecer junto pelo menos uma vez. Qual técnica se adequa?",
            options: {
                A: "Teste de pares combinados",
                B: "Análise de valor fronteira",
                C: "Teste de caso de utilização",
                D: "Teste de instruções"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q226",
            statement: "Qual abordagem de conceção de teste é mais diretamente baseada no conhecimento do testador sobre erros comuns de programadores e padroes de defeitos passados?",
            options: {
                A: "Antecipacao de erros",
                B: "Teste de tabela de decisão",
                C: "Teste de ramos",
                D: "Análise de valor fronteira"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q227",
            statement: "Um utilizador pode pesquisar um produto, adiciona-lo a um cesto, alterar a quantidade, finalizar a compra e receber confirmação. Qual técnica melhor deriva testes de cenário fim-a-fim a partir desta interacao?",
            options: {
                A: "Teste de caso de utilização",
                B: "Teste de instruções",
                C: "Teste de sintaxe",
                D: "Análise estática"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q228",
            statement: "Um testador explora uma nova funcionalidade de relatório usando uma carta focada na exportacao de grandes conjuntos de dados e anota novas ideias durante a sessão. Qual abordagem e está?",
            options: {
                A: "Teste exploratório",
                B: "Inspecao formal",
                C: "Teste de ramos",
                D: "Teste de manutenção"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q229",
            statement: "Qual item é mais apropriado num plano de teste?",
            options: {
                A: "Objetivos de teste, ambito, recursos, calendario, riscos e abordagem",
                B: "Apenas o resultado final de aprovado ou reprovado",
                C: "Uma lista de cada linha de código de produção",
                D: "O anuncio de lançamento de marketing"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q230",
            statement: "Um gestor de teste compara os testes planeados versus os realmente executados e as tendencias de defeitos cada semana, depois altera as prioridades. Qual atividade e está?",
            options: {
                A: "Monitorizacao e controlo de teste",
                B: "Conclusao de teste",
                C: "Análise estática",
                D: "Seleção de ferramentas"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q231",
            statement: "Um risco de produto têm alto impacto mas baixa probabilidade. Como deve o teste baseado no risco trata-lo geralmente?",
            options: {
                A: "Considerar tanto o impacto como a probabilidade ao definir a prioridade do teste",
                B: "Ignora-lo porque a probabilidade é baixa",
                C: "Testa-lo apenas após todos os riscos de baixo impacto",
                D: "Transferi-lo automaticamente para o desenvolvimento"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q232",
            statement: "Qual métrica suporta diretamente o relatório de progresso do teste?",
            options: {
                A: "Numero de casos de teste planeados executados e aprovados",
                B: "Numero de funcionários na empresa",
                C: "Cor do painel de gestão de teste",
                D: "Numero de locais de escritorio"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q233",
            statement: "Uma equipa estima o teste comparando a nova versão com tres versões anteriores semelhantes concluidas. Qual abordagem de estimativa é utilizada?",
            options: {
                A: "Estimativa baseada em racios ou dados historicos",
                B: "Estimativa de valor fronteira",
                C: "Estimativa de cobertura de ramos",
                D: "Apenas estimativa de severidade de defeitos"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q234",
            statement: "Qual informação do relatório de defeito é mais útil para reproduzir uma falha?",
            options: {
                A: "Passos exatos, dados de teste, ambiente, resultado real e resultado esperado",
                B: "A correção preferida do testador",
                C: "O código do orcamento do projeto",
                D: "Uma afirmação de que o sistema e mau"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q235",
            statement: "Por que é que a gestão de configuração é importante para o teste?",
            options: {
                A: "Identifica e controla os itens de teste, testware e versões usadas durante o teste",
                B: "Garante que todos os defeitos são corrigidos",
                C: "Substitui a gestão de defeitos",
                D: "Decide a precificacao do mercado"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q236",
            statement: "Um defeito causa um erro ortografico raro numa pagina interna. E facil de corrigir mas têm pouco impacto no negócio. Qual severidade é mais apropriada?",
            options: {
                A: "Severidade baixa",
                B: "Severidade alta",
                C: "Severidade crítica",
                D: "Severidade não pode ser atribuida"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q237",
            statement: "Qual fator têm maior probabilidade de aumentar o esforço de teste?",
            options: {
                A: "Alto risco de produto e interfaces complexas",
                B: "Requisitos estáveis e componentes reutilizados",
                C: "Criterios de aceitação claros",
                D: "Equipa experiente usando ferramentas familiares"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q238",
            statement: "Qual ferramenta é mais diretamente usada para gerir casos de teste, estado de execução e rastreabilidade para requisitos?",
            options: {
                A: "Ferramenta de gestão de teste",
                B: "Compilador",
                C: "Leitor de ecra",
                D: "Sniffer de pacotes"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q239",
            statement: "Qual é um risco comum da automação de testes?",
            options: {
                A: "Testes automatizados podem exigir manutenção significativa quando o sistema muda",
                B: "A automação remove a necessidade de conceção de teste",
                C: "A automação encontra sempre mais defeitos do que o teste humano",
                D: "A automação garante cobertura completa"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q240",
            statement: "Uma equipa está a testar uma nova ferramenta com um pequeno projeto representativo antes da implementação em toda a organização. Que boa pratica e está?",
            options: {
                A: "Introduzir uma ferramenta incrementalmente após avaliar a adequacao",
                B: "Saltar a formação para reduzir custos",
                C: "Substituir todos os processos existentes imediatamente",
                D: "Selecionar ferramentas apenas pela popularidade do fornecedor"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
    ],
    exam7: [
        {
            id: "Q241",
            statement: "Qual afirmação descreve melhor a validação em teste?",
            options: {
                A: "Verificar se o produto satisfaz as necessidades do utilizador no seu uso pretendido",
                B: "Verificar apenas se o código segue normas de nomenclatura",
                C: "Contar o número de casos de teste executados",
                D: "Depurar cada falha observada"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q242",
            statement: "Uma suposicao errada num documento de conceção leva mais tarde a código incorreto. Como se chama a suposicao errada?",
            options: {
                A: "Erro",
                B: "Falha",
                C: "Condicao de teste",
                D: "Item de cobertura"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q243",
            statement: "Uma equipa começa revisões durante o refinamento do backlog e encontra critérios de aceitação em falta antes do desenvolvimento. Qual princípio de teste e demonstrado?",
            options: {
                A: "O teste precoce poupa tempo e dinheiro",
                B: "O teste e exaustivo",
                C: "A ausência de defeitos prova qualidade",
                D: "A automação substitui as revisões"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q244",
            statement: "Os incidentes mais graves em produção vêm do componente de importacao de faturacao. Qual princípio isto ilustra?",
            options: {
                A: "Agrupamento de defeitos",
                B: "Paradoxo do pesticida",
                C: "Teste exaustivo",
                D: "Independencia do contexto"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q245",
            statement: "Qual atividade pertence a conclusão de teste?",
            options: {
                A: "Arquivar testware e documentar licoes aprendidas",
                B: "Criar a primeira carta de teste",
                C: "Compilar a aplicação",
                D: "Aprovar o orcamento do produto"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q246",
            statement: "O que é uma condição de teste?",
            options: {
                A: "Um aspeto da base de teste que pode ser verificado por um ou mais testes",
                B: "A temperatura da sala durante o teste",
                C: "Uma regra fixa de que todos os defeitos devem ser graves",
                D: "Apenas uma condição de licenca de ferramenta"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q247",
            statement: "Qual situação mostra melhor uma desvantagem de demasiada independencia do testador?",
            options: {
                A: "Os programadores podem sentir menos responsabilidade pela qualidade se o teste for visto como apenas o trabalho da equipa de teste",
                B: "Os testadores tornam-se incapazes de encontrar falhas",
                C: "Os testadores independentes não podem usar requisitos",
                D: "Os programadores estão proibidos de depurar"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q248",
            statement: "Num abordagem de equipa whole-team, quem e responsável pela qualidade?",
            options: {
                A: "Toda a equipa, com os testadores a contribuir com competências especializadas de teste",
                B: "Apenas o gestor de teste",
                C: "Apenas o dono do produto",
                D: "Apenas um grupo de auditoria externo"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q249",
            statement: "Qual produto de trabalho é mais apropriado como base de teste para o teste de aceitação?",
            options: {
                A: "Descricoes de processos de negócio e critérios de aceitação",
                B: "Apenas avisos do compilador",
                C: "O calendario de ferias do testador",
                D: "Comentarios não relacionados no código fonte"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q250",
            statement: "Qual afirmação é verdadeira sobre o teste em desenvolvimento iterativo e incremental?",
            options: {
                A: "As atividades de teste ocorrem em cada iteração e o teste de regressão é importante à medida que os incrementos se acumulam",
                B: "O teste é adiado até que todos os incrementos estejam completos",
                C: "O teste estático não pode ser usado",
                D: "Apenas o teste de aceitação é permitido"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q251",
            statement: "Qual é um exemplo de teste de confirmação?",
            options: {
                A: "Reexecutar um teste que falhou após uma correção de defeito para verificar se a correção funciona",
                B: "Testar funcionalidades inalteradas não relacionadas após uma correção",
                C: "Rever um documento de requisitos",
                D: "Estimar o esforço futuro de teste"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q252",
            statement: "Qual é um exemplo de teste de regressão?",
            options: {
                A: "Testar métodos de pagamento existentes após adicionar uma nova opcao de pagamento por carteira",
                B: "Testar apenas a linha corrigida",
                C: "Rever um diagrama de conceção",
                D: "Escrever a carta de projeto inicial"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q253",
            statement: "Uma migração de plataforma altera o motor de base de dados mas nenhuma funcionalidade de negócio está planeada. Que teste ainda é necessário?",
            options: {
                A: "Teste de manutenção focado nos riscos de migração e regressão",
                B: "Nenhum teste porque as funcionalidades não mudaram",
                C: "Apenas teste de usabilidade pelo marketing",
                D: "Apenas teste de componente de novas funcionalidades"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q254",
            statement: "Qual é um benefício tipico do teste estático?",
            options: {
                A: "Encontrar defeitos em requisitos antes de o código ser escrito",
                B: "Medir o tempo de resposta real sob carga",
                C: "Confirmar uma fuga de memória em tempo de execução",
                D: "Substituir todos os testes dinamicos"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q255",
            statement: "Qual tipo de revisão é geralmente o mais formal e usa papéis definidos, critérios de entrada e resultados documentados?",
            options: {
                A: "Inspecao",
                B: "Revisao informal",
                C: "Programacao a pares",
                D: "Leitura ad hoc"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q256",
            statement: "Um moderador verifica se os revisores receberam o documento de conceção e a lista de controlo antes da reuniao. Qual atividade de revisão e está?",
            options: {
                A: "Apoio ao planeamento e preparação",
                B: "Execução de teste",
                C: "Correcao de defeitos",
                D: "Aquisicao de ferramentas"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q257",
            statement: "Qual comportamento suporta revisões bem-sucedidas?",
            options: {
                A: "Discutir defeitos objetivamente e evitar criticas pessoais",
                B: "Usar a reuniao para avaliar o desempenho dos funcionários",
                C: "Permitir que apenas gestores falem",
                D: "Saltar o acompanhamento de ações acordadas"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q258",
            statement: "Uma entrada numerica aceita valores validos de 10 a 30 inclusive. Que valores representam particoes de equivalência invalidas em ambos os lados?",
            options: {
                A: "9 e 31",
                B: "10 e 30",
                C: "11 e 29",
                D: "20 e 21"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q259",
            statement: "Um desconto de seguro e aplicado quando o cliente têm mais de 25 anos, não têm reclamacoes e possui carta de conducao ha pelo menos dois anos. Qual técnica melhor lida com as combinações?",
            options: {
                A: "Teste de tabela de decisão",
                B: "Teste de transição de estados",
                C: "Cobertura de instruções",
                D: "Apenas teste exploratório"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q260",
            statement: "Um leitor de media pode estar Parado, A Reproduzir ou Em Pausa. Premir Reproduzir têm resultados diferentes dependendo do estado atual. Qual técnica e melhor?",
            options: {
                A: "Teste de transição de estados",
                B: "Análise de valor fronteira",
                C: "Teste de pares combinados",
                D: "Cobertura de instruções"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q261",
            statement: "Uma função contem 12 instruções executaveis e os testes executam todas as 12 pelo menos uma vez. Que cobertura de instruções e alcancada?",
            options: {
                A: "100 por cento",
                B: "12 por cento",
                C: "50 por cento",
                D: "Não pode exceder 90 por cento"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q262",
            statement: "Um conjunto de testes executa todas as instruções mas nunca segue o resultado falso de uma decisão. Qual cobertura ainda não está completa?",
            options: {
                A: "Cobertura de ramos",
                B: "Cobertura de instruções",
                C: "Cobertura de casos de utilização",
                D: "Cobertura de revisão"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q263",
            statement: "Para uma regra de taxa de entrega, encomendas abaixo de $50 pagam uma taxa, encomendas de $50 ou mais enviam gratis. Que valores fronteira são mais úteis para AVF de dois valores?",
            options: {
                A: "49.99 e 50.00",
                B: "1.00 e 2.00",
                C: "25.00 e 75.00",
                D: "50.00 e 100.00"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q264",
            statement: "Uma aplicação móvel deve ser testada em diferentes tipos de dispositivo, tipo de rede e método de autenticação. A equipa quer cobertura de cada par de valores de parametro. Qual técnica se aplica?",
            options: {
                A: "Teste de pares combinados",
                B: "Antecipacao de erros",
                C: "Cobertura de decisões",
                D: "Revisao de lista de controlo"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q265",
            statement: "Um testador concebe testes a partir de uma lista de controlo de erros comuns de segurança web, como verificacoes de autorizacao em falta e timeout fraco de sessão. Qual técnica é usada?",
            options: {
                A: "Teste baseado em listas de controlo",
                B: "Teste de transição de estados",
                C: "Teste de instruções",
                D: "Análise de valor fronteira"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q266",
            statement: "Qual conjunto representa melhor testes focados na fronteira para um campo de data que permite dias de 1 a 31 inclusive, usando AVF de tres valores?",
            options: {
                A: "0, 1, 2, 30, 31, 32",
                B: "1, 15, 31",
                C: "2, 3, 4, 5",
                D: "10, 20, 30, 40"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q267",
            statement: "Um processo de negócio têm fluxos alternativos para falha de pagamento, falha de validação de morada e colocacao de encomenda bem-sucedida. Qual técnica é mais adequada para derivar testes de cenário?",
            options: {
                A: "Teste de caso de utilização",
                B: "Cobertura de ramos",
                C: "Análise estática",
                D: "Teste de pares combinados"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q268",
            statement: "Porque e que o teste de ramos pode fornecer uma cobertura mais forte do que o teste de instruções?",
            options: {
                A: "Requer que os resultados das decisões sejam exercitados, não apenas as instruções executaveis",
                B: "Ignora a estrutura do código fonte",
                C: "E realizado apenas por utilizadores",
                D: "Elimina a necessidade de dados de teste"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q269",
            statement: "Qual é um exemplo de um objetivo de teste?",
            options: {
                A: "Avaliar se os riscos de pagamento criticos estão suficientemente reduzidos para a disponibilização",
                B: "Garantir que os programadores nunca cometem erros",
                C: "Garantir que não ha incidentes operacionais",
                D: "Evitar comunicar informação de qualidade"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q270",
            statement: "Uma equipa têm tempo limitado antes da disponibilização. Qual ação baseada no risco é mais apropriada?",
            options: {
                A: "Priorizar testes para funcionalidades com maior risco de produto",
                B: "Executar testes por ordem alfabetica do nome do ficheiro",
                C: "Saltar todos os testes de regressão",
                D: "Testar apenas os casos mais faceis primeiro"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q271",
            statement: "Qual critério de saida e objetivo e testável?",
            options: {
                A: "Nenhum defeito crítico por resolver e pelo menos 95 por cento dos testes de alta prioridade aprovados",
                B: "Todos sentem que o teste é suficiente",
                C: "A equipa está cansada",
                D: "A data de disponibilização chegou"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q272",
            statement: "Um painel mostra um aumento de testes bloqueados porque o ambiente de teste está indisponivel. Qual ação de controlo é mais apropriada?",
            options: {
                A: "Escalar o problema do ambiente e replanejar o teste afetado",
                B: "Marcar todos os testes bloqueados como aprovados",
                C: "Eliminar os testes bloqueados",
                D: "Parar de reportar o estado"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q273",
            statement: "Qual ligacao de rastreabilidade é mais útil para análise de impacto após uma alteração de requisito?",
            options: {
                A: "Requisito para casos de teste e defeitos relacionados",
                B: "Localização do escritorio para número de crachá do funcionário",
                C: "Fornecedor da ferramenta para cor da fatura",
                D: "Sala de reuniões para contagem de cadeiras"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q274",
            statement: "Qual afirmação distingue melhor o risco de produto do risco de projeto?",
            options: {
                A: "O risco de produto relaciona-se com a qualidade do produto; o risco de projeto relaciona-se com fatores de sucesso do projeto, como calendario ou afetacao de pessoal",
                B: "O risco de produto é sempre menor do que o risco de projeto",
                C: "O risco de projeto só é encontrado após a disponibilização",
                D: "O risco de produto não pode influenciar o teste"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q275",
            statement: "Um relatório de defeito diz apenas finalizar compra estragado. Qual é o principal problema com este relatório?",
            options: {
                A: "Falta detalhes objetivos necessarios para reproduzir e investigar a falha",
                B: "Tem demasiados passos de reprodução",
                C: "Inclui o resultado esperado",
                D: "Identifica o ambiente com demasiada precisao"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q276",
            statement: "Qual fator deve ser considerado ao selecionar uma técnica de teste?",
            options: {
                A: "O objetivo de teste, riscos, base de teste, necessidades regulatorias e competências disponíveis",
                B: "Apenas o método favorito do testador",
                C: "A ordem alfabetica das técnicas",
                D: "A cor da interface da aplicação"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q277",
            statement: "Uma equipa armazena ficheiros de dados de teste, resultados esperados e scripts sob controlo de versões com etiquetas de versão. Qual pratica de gestão e suportada?",
            options: {
                A: "Gestao de configuração",
                B: "Apenas análise de causa raiz",
                C: "Teste de usabilidade",
                D: "Escrita de critérios de aceitação"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q278",
            statement: "Qual categoria de ferramenta é mais apropriada para verificar o código fonte contra normas de codificação sem o executar?",
            options: {
                A: "Ferramenta de análise estática",
                B: "Ferramenta de teste de desempenho",
                C: "Ferramenta de execução de testes",
                D: "Ferramenta de gestão de incidentes"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q279",
            statement: "Qual é um benefício realista da automação de testes?",
            options: {
                A: "Execução repetivel de testes de regressão com resultados consistentes",
                B: "Descoberta automática de todos os requisitos em falta",
                C: "Remocao de todo o esforço de manutenção",
                D: "Melhoria garantida da qualidade da conceção de teste"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
        {
            id: "Q280",
            statement: "Uma ferramenta de execução de testes é introduzida, mas os testadores não recebem formação e os scripts são criados sem normas de codificação. Qual é o risco mais provável?",
            options: {
                A: "Baixa adoção e altos custos de manutenção",
                B: "Cobertura completa imediata",
                C: "Eliminação dos riscos de teste exploratório",
                D: "Prevenção garantida de defeitos"
            },
            correctAnswer: "A",
            explanation: "",
            whyWrong: "",
            optionExplanations: {
                A: "",
                B: "",
                C: "",
                D: ""
            },
            chapter: 1,
            section: "1.1",
            subsection: "1.1.1",
            learningObjective: "FL-1.1.1",
            kLevel: "K1",
            difficulty: "Easy",
            keywords: [],
            examTip: "",
            memoryAid: ""
        },
    ],
};
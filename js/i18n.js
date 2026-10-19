/**
 * ISTQB CTFL v4.0.1 — Landing page language switch (EN default / PT-PT).
 * Elements carry data-i18n="key" (text), data-i18n-aria-label="key" and
 * data-i18n-title="key" (attributes). Choice persists in localStorage.
 * Exam pages stay in English (landing-only scope).
 */
window.AppI18n = (function () {
  'use strict';

  var STORAGE_KEY = 'istqb_ctfl_lang';

  var DICT = {
    en: {
      'nav.skip': 'Skip to main content',
      'nav.theme': 'Toggle dark mode',
      'hero.subtitle': 'Prepare for the ISTQB Certified Tester Foundation Level certification with realistic practice exams,<br>detailed explanations, study slides, and performance tracking — all offline, zero setup required.',
      'hero.androidPill': 'Also available as a native Android app',
      'hero.donatePill': 'Donate',
      'donate.openAria': 'Open donation options',
      'donate.closeAria': 'Close dialog',
      'donate.title': 'Support the Project',
      'donate.sub': 'Free to use, funded by donations. Payments run entirely on PayPal — we never see card details.',
      'donate.amountsAria': 'Donation amounts',
      'donate.customChip': 'Custom',
      'donate.customLabel': 'Your amount (€)',
      'donate.giving': 'You’re giving',
      'donate.via': 'via PayPal',
      'donate.go': 'Donate with PayPal',
      'donate.fine': 'Payments are processed by PayPal. We never see or store your card details.',
      'donate.errEmpty': 'Enter an amount to continue.',
      'donate.errInvalid': 'Invalid value — numbers only.',
      'donate.errZero': 'The amount must be greater than zero.',
      'donate.errMin': 'Minimum donation is €1.',
      'hero.syncNote': 'Sync your progress: export your results to JSON on one platform and import them on the other — web and mobile always stay in sync.',
      'hero.start': 'Start Practicing',
      'hero.stats': 'View Statistics',
      'hero.study': 'Study Materials',
      'hero.statExams': 'Practice Exams',
      'hero.statQuestions': 'Total Questions',
      'hero.statChapters': 'Study Chapters',
      'hero.statThreshold': 'Pass Threshold',
      'exams.title': 'Practice Exams',
      'exams.subtitle': 'Each exam contains 40 multiple-choice questions with a 60-minute time limit. A score of 65% or higher is required to pass.',
      'exam.start': 'Start Exam',
      'card1.title': 'Exam 1 — Ch.1: Fundamentals',
      'card1.text': '40 exclusive questions on Chapter 1: Fundamentals of Testing. Principles, test process, psychology and ethics.',
      'card2.title': 'Exam 2 — Ch.2: SDLC',
      'card2.text': '40 exclusive questions on Chapter 2: Testing Throughout the SDLC. Test levels and types, maintenance testing.',
      'card3.title': 'Exam 3 — Ch.3: Static Testing',
      'card3.text': '40 exclusive questions on Chapter 3: Static Testing. Static analysis, reviews, review types and process.',
      'card4.title': 'Exam 4 — Ch.4: Techniques',
      'card4.text': '40 exclusive questions on Chapter 4: Test Techniques. Black-box, white-box, experience-based.',
      'card5.title': 'Exam 5 — Ch.5: Management',
      'card5.text': '40 exclusive questions on Chapter 5: Test Management. Planning, estimation, monitoring, risks and defects.',
      'card6.title': 'Exam 6 — Ch.6: Tools',
      'card6.text': '40 exclusive questions on Chapter 6: Tool Support. Tool categories, automation, selection and risks.',
      'cert.title': 'Certification Exams',
      'cert.subtitle': 'Full exams covering all chapters with ISTQB weighting.',
      'card7.title': 'Exam 7 — Comprehensive',
      'card7.text': 'Full exam with standard ISTQB distribution: 8 questions Ch.1, 6 Ch.2, 3 Ch.3, 10 Ch.4, 8 Ch.5, 5 Ch.6.',
      'card8.title': 'Exam 8 — Certification Practice',
      'card8.text': 'CTFL-style exam with official syllabus weighting and practical test design scenarios.',
      'card9.title': 'Exam 9 — Extra Practice',
      'card9.text': 'Extra exam with surplus questions from all syllabus chapters.',
      'card10.title': 'Exam 10 — ASTQB Sample #3',
      'card10.text': 'Official ASTQB Sample Exam #3 (CTFL v4.0.1) — 40 questions with official answers and justifications.',
      'card11.title': 'Exam 11 — ASTQB Sample #4',
      'card11.text': 'Official ASTQB Sample Exam #4 (CTFL v4.0.1) — 40 questions with official answers and justifications.',
      'card12.title': 'Exam 12 — Claude - Hard level',
      'card12.text': 'Challenging AI-generated exam — 40 advanced questions from all chapters, aligned with syllabus v4.0.1.',
      'card13.title': 'Exam 13 — Claude - Hard level',
      'card13.text': 'Challenging AI-generated exam — 40 advanced questions from all chapters, aligned with syllabus v4.0.1.',
      'syllabus.title': 'Syllabus Overview',
      'syllabus.subtitle': 'The ISTQB CTFL v4.0.1 syllabus is organized into six chapters. Each chapter contributes a specific weight to the final exam.',
      'ch1.title': 'Fundamentals of Testing',
      'ch1.desc': 'Testing principles, the test process, the psychology of testing, and ethics. Foundation for all testing activities.',
      'ch1.meta': '8 questions',
      'ch2.title': 'Testing Throughout the SDLC',
      'ch2.desc': 'Test levels, test types, maintenance testing, and the relationship between development and testing activities.',
      'ch2.meta': '6 questions',
      'ch3.title': 'Static Testing',
      'ch3.desc': 'Static analysis, review processes, review types, and the role of reviews in quality assurance.',
      'ch3.meta': '3 questions',
      'ch4.title': 'Test Techniques',
      'ch4.desc': 'Black-box, white-box, and experience-based test techniques. Equivalence partitioning, BVA, decision tables, and state transition testing.',
      'ch4.meta': '10 questions',
      'ch5.title': 'Test Management',
      'ch5.desc': 'Test planning, estimation, monitoring, configuration management, risk management, and defect reporting.',
      'ch5.meta': '8 questions',
      'ch6.title': 'Tool Support for Testing',
      'ch6.desc': 'Test tool categories, benefits and risks of test automation, and considerations for tool selection and deployment.',
      'ch6.meta': '5 questions',
      'perf.title': 'Performance Statistics',
      'perf.subtitle': 'Your exam history, pass rates, and per-chapter performance are saved locally and displayed below.',
      'perf.loading': 'Loading statistics…',
      'slides.title': 'Study Slides',
      'slides.subtitle': 'Covering key concepts and learning objectives from each syllabus chapter.',
      'slides.view': 'View Slides',
      'sl1.title': 'Fundamentals of Testing',
      'sl1.desc': 'Testing principles, test process, psychology, and ethics.',
      'sl2.title': 'Testing Throughout the SDLC',
      'sl2.desc': 'Test levels, test types, and maintenance testing.',
      'sl3.title': 'Static Testing',
      'sl3.desc': 'Static analysis, reviews, and the review process.',
      'sl4.title': 'Test Techniques',
      'sl4.desc': 'Black-box, white-box, and experience-based techniques.',
      'sl5.title': 'Test Management',
      'sl5.desc': 'Planning, estimation, risk management, and defect reporting.',
      'sl6.title': 'Tool Support for Testing',
      'sl6.desc': 'Test tool categories, benefits, risks, and selection.',
      'footer.home': 'Home',
      'footer.exams': 'Exams',
      'footer.stats': 'Statistics',
      'footer.slides': 'Study Slides',
      'footer.copy': '© 2026 ISTQB CTFL v4.0.1 Exam Simulator. This is an independent study tool and is not affiliated with the ISTQB.',
      'top.aria': 'Back to top',
      'hero.apk': 'Download APK'
    },
    pt: {
      'nav.skip': 'Saltar para o conteúdo principal',
      'nav.theme': 'Alternar modo escuro',
      'hero.subtitle': 'Prepara-te para a certificação ISTQB Certified Tester Foundation Level com exames práticos realistas,<br>explicações detalhadas, slides de estudo e acompanhamento de desempenho — tudo offline, sem configuração.',
      'hero.androidPill': 'Também disponível como app nativa Android',
      'hero.donatePill': 'Doar',
      'donate.openAria': 'Abrir opções de donativo',
      'donate.closeAria': 'Fechar janela',
      'donate.title': 'Apoia o Projeto',
      'donate.sub': 'Uso gratuito, mantido com donativos. Os pagamentos são feitos inteiramente pelo PayPal — nunca vemos dados de cartão.',
      'donate.amountsAria': 'Montantes de donativo',
      'donate.customChip': 'Livre',
      'donate.customLabel': 'O teu valor (€)',
      'donate.giving': 'Vais doar',
      'donate.via': 'via PayPal',
      'donate.go': 'Doar com o PayPal',
      'donate.fine': 'Os pagamentos são processados pelo PayPal. Nunca vemos nem guardamos dados do teu cartão.',
      'donate.errEmpty': 'Introduz um montante para continuares.',
      'donate.errInvalid': 'Valor inválido — apenas números.',
      'donate.errZero': 'O montante tem de ser superior a zero.',
      'donate.errMin': 'O montante mínimo é de €1.',
      'hero.syncNote': 'Sincroniza o teu progresso: exporta os teus resultados para JSON numa plataforma e importa-os na outra — web e mobile sempre sincronizados.',
      'hero.start': 'Começar a Praticar',
      'hero.stats': 'Ver Estatísticas',
      'hero.study': 'Materiais de Estudo',
      'hero.statExams': 'Exames Práticos',
      'hero.statQuestions': 'Perguntas no Total',
      'hero.statChapters': 'Capítulos de Estudo',
      'hero.statThreshold': 'Nota Mínima',
      'exams.title': 'Exames Práticos',
      'exams.subtitle': 'Cada exame contém 40 perguntas de escolha múltipla com limite de 60 minutos. É necessária nota igual ou superior a 65% para aprovar.',
      'exam.start': 'Iniciar Exame',
      'card1.title': 'Exame 1 — Cap.1: Fundamentos',
      'card1.text': '40 perguntas exclusivas sobre o Capítulo 1: Fundamentos do Teste. Princípios, processo de teste, psicologia e ética.',
      'card2.title': 'Exame 2 — Cap.2: SDLC',
      'card2.text': '40 perguntas exclusivas sobre o Capítulo 2: Testes ao Longo do SDLC. Níveis e tipos de teste, testes de manutenção.',
      'card3.title': 'Exame 3 — Cap.3: Teste Estático',
      'card3.text': '40 perguntas exclusivas sobre o Capítulo 3: Teste Estático. Análise estática, revisões, tipos e processo de revisão.',
      'card4.title': 'Exame 4 — Cap.4: Técnicas',
      'card4.text': '40 perguntas exclusivas sobre o Capítulo 4: Técnicas de Teste. Caixa-preta, caixa-branca, baseadas na experiência.',
      'card5.title': 'Exame 5 — Cap.5: Gestão',
      'card5.text': '40 perguntas exclusivas sobre o Capítulo 5: Gestão de Testes. Planeamento, estimativa, monitorização, riscos e defeitos.',
      'card6.title': 'Exame 6 — Cap.6: Ferramentas',
      'card6.text': '40 perguntas exclusivas sobre o Capítulo 6: Suporte Ferramental. Categorias de ferramentas, automação, seleção e riscos.',
      'cert.title': 'Exames de Certificação',
      'cert.subtitle': 'Exames completos com todos os capítulos e ponderação ISTQB.',
      'card7.title': 'Exame 7 — Completo',
      'card7.text': 'Exame completo com distribuição ISTQB standard: 8 perguntas Cap.1, 6 Cap.2, 3 Cap.3, 10 Cap.4, 8 Cap.5, 5 Cap.6.',
      'card8.title': 'Exame 8 — Prática de Certificação',
      'card8.text': 'Exame estilo CTFL com ponderação oficial do syllabus e cenários práticos de desenho de testes.',
      'card9.title': 'Exame 9 — Prática Extra',
      'card9.text': 'Exame adicional com perguntas excedentes de todos os capítulos do syllabus.',
      'card10.title': 'Exame 10 — ASTQB Exemplo #3',
      'card10.text': 'Exame oficial ASTQB Sample Exam #3 (CTFL v4.0.1) — 40 perguntas com respostas e justificações oficiais.',
      'card11.title': 'Exame 11 — ASTQB Exemplo #4',
      'card11.text': 'Exame oficial ASTQB Sample Exam #4 (CTFL v4.0.1) — 40 perguntas com respostas e justificações oficiais.',
      'card12.title': 'Exame 12 — Claude - Nível difícil',
      'card12.text': 'Exame exigente gerado com apoio de IA — 40 perguntas avançadas de todos os capítulos, alinhadas com o syllabus v4.0.1.',
      'card13.title': 'Exame 13 — Claude - Nível difícil',
      'card13.text': 'Exame exigente gerado com apoio de IA — 40 perguntas avançadas de todos os capítulos, alinhadas com o syllabus v4.0.1.',
      'syllabus.title': 'Resumo do Syllabus',
      'syllabus.subtitle': 'O syllabus ISTQB CTFL v4.0.1 está organizado em seis capítulos. Cada capítulo tem um peso específico no exame final.',
      'ch1.title': 'Fundamentos do Teste',
      'ch1.desc': 'Princípios de teste, processo de teste, psicologia do teste e ética. Base de todas as atividades de teste.',
      'ch1.meta': '8 perguntas',
      'ch2.title': 'Testes ao Longo do SDLC',
      'ch2.desc': 'Níveis de teste, tipos de teste, testes de manutenção e a relação entre desenvolvimento e teste.',
      'ch2.meta': '6 perguntas',
      'ch3.title': 'Teste Estático',
      'ch3.desc': 'Análise estática, processos de revisão, tipos de revisão e o papel das revisões na garantia de qualidade.',
      'ch3.meta': '3 perguntas',
      'ch4.title': 'Técnicas de Teste',
      'ch4.desc': 'Técnicas de teste caixa-preta, caixa-branca e baseadas na experiência. Particionamento por equivalência, BVA, tabelas de decisão e testes de transição de estados.',
      'ch4.meta': '10 perguntas',
      'ch5.title': 'Gestão de Testes',
      'ch5.desc': 'Planeamento de testes, estimativa, monitorização, gestão de configuração, gestão de riscos e reporte de defeitos.',
      'ch5.meta': '8 perguntas',
      'ch6.title': 'Suporte Ferramental aos Testes',
      'ch6.desc': 'Categorias de ferramentas de teste, benefícios e riscos da automação, e seleção e implementação de ferramentas.',
      'ch6.meta': '5 perguntas',
      'perf.title': 'Estatísticas de Desempenho',
      'perf.subtitle': 'O histórico de exames, taxas de aprovação e desempenho por capítulo são guardados localmente e apresentados abaixo.',
      'perf.loading': 'A carregar estatísticas…',
      'slides.title': 'Slides de Estudo',
      'slides.subtitle': 'Cobre os conceitos-chave e os objetivos de aprendizagem de cada capítulo.',
      'slides.view': 'Ver Slides',
      'sl1.title': 'Fundamentos do Teste',
      'sl1.desc': 'Princípios de teste, processo de teste, psicologia e ética.',
      'sl2.title': 'Testes ao Longo do SDLC',
      'sl2.desc': 'Níveis de teste, tipos de teste e testes de manutenção.',
      'sl3.title': 'Teste Estático',
      'sl3.desc': 'Análise estática, revisões e processo de revisão.',
      'sl4.title': 'Técnicas de Teste',
      'sl4.desc': 'Técnicas caixa-preta, caixa-branca e baseadas na experiência.',
      'sl5.title': 'Gestão de Testes',
      'sl5.desc': 'Planeamento, estimativa, gestão de riscos e reporte de defeitos.',
      'sl6.title': 'Suporte Ferramental aos Testes',
      'sl6.desc': 'Categorias de ferramentas, benefícios, riscos e seleção.',
      'footer.home': 'Início',
      'footer.exams': 'Exames',
      'footer.stats': 'Estatísticas',
      'footer.slides': 'Slides de Estudo',
      'footer.copy': '© 2026 Simulador de Exames ISTQB CTFL v4.0.1. Esta é uma ferramenta de estudo independente, sem afiliação ao ISTQB.',
      'top.aria': 'Voltar ao topo',
      'hero.apk': 'Descarregar APK'
    }
  };

  function getLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'pt' || stored === 'en') return stored;
    } catch (e) { /* storage unavailable — fall through */ }
    return 'en';
  }

  function apply(lang) {
    var dict = DICT[lang] || DICT.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key && dict[key] !== undefined) el.textContent = dict[key];
    });
    /* HTML content (own trusted strings only — supports <br> breaks) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (key && dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria-label');
      if (key && dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (key && dict[key] !== undefined) el.setAttribute('title', dict[key]);
    });
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-PT' : 'en');
    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('lang-switch__btn--active', active);
      if (active) btn.setAttribute('aria-pressed', 'true');
      else btn.removeAttribute('aria-pressed');
    });
  }

  function setLang(lang) {
    if (lang !== 'pt' && lang !== 'en') return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    apply(lang);
  }

  function init() {
    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });
    apply(getLang());
  }

  return { init: init, setLang: setLang, getLang: getLang, apply: apply, DICT: DICT };
})();

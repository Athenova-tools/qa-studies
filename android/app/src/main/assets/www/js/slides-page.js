(function () {
  'use strict';

  var match = window.location.pathname.match(/chapter([1-6])\.html$/);
  var chapter = match ? Number(match[1]) : 0;
  var data = window.slidesData && window.slidesData['chapter' + chapter];
  var app = document.getElementById('app');
  if (!data || !app) return;

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function section(title) {
    var wrapper = element('div', 'flashcard__section');
    wrapper.appendChild(element('div', 'flashcard__section-title', title));
    return wrapper;
  }

  function addList(card, title, items) {
    if (!Array.isArray(items) || !items.length) return;
    var wrapper = section(title);
    var list = document.createElement('ul');
    items.forEach(function (item) { list.appendChild(element('li', null, item)); });
    wrapper.appendChild(list);
    card.appendChild(wrapper);
  }

  function addKeyTerms(card, terms) {
    if (!Array.isArray(terms) || !terms.length) return;
    var wrapper = section('Key Terms');
    var termsList = element('div', 'flashcard__keyterms');
    terms.forEach(function (term) {
      var parts = String(term).split(':');
      var label = (parts.shift() || term).trim();
      var definition = parts.join(':').trim();
      var button = element('button', 'flashcard__keyterm', label);
      button.type = 'button';
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', definition ? label + ': ' + definition : label);
      if (definition) {
        button.addEventListener('click', function () {
          var open = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', open ? 'false' : 'true');
          button.classList.toggle('is-active', !open);
          var description = button.nextElementSibling;
          if (description) description.classList.toggle('is-visible', !open);
        });
        var description = element('div', 'flashcard__keyterm-def', definition);
        termsList.appendChild(button);
        termsList.appendChild(description);
      } else {
        button.disabled = true;
        termsList.appendChild(button);
      }
    });
    wrapper.appendChild(termsList);
    card.appendChild(wrapper);
  }

  function learningObjectiveIds(examTips) {
    var objectives = [];
    (examTips || []).forEach(function (tip) {
      var matches = String(tip).match(/FL-\d+\.\d+\.\d+/g) || [];
      matches.forEach(function (id) {
        if (objectives.indexOf(id) === -1) objectives.push(id);
      });
    });
    return objectives;
  }

  function addLearningObjectiveAnchors(card, objectives) {
    objectives.forEach(function (id) {
      var anchor = element('span', 'flashcard__objective-anchor');
      anchor.id = id;
      card.appendChild(anchor);
    });
  }

  function addLearningObjectives(card, objectives) {
    if (!objectives.length) return;

    var wrapper = section('Learning Objectives');
    var links = element('div', 'flashcard__linked');
    objectives.forEach(function (id) {
      var link = element('a', 'flashcard__linked-item flashcard__objective-link', id);
      link.href = '#' + id;
      links.appendChild(link);
    });
    wrapper.appendChild(links);
    card.appendChild(wrapper);
  }

  function render() {
    app.textContent = '';
    var nav = element('div', 'chapter-nav');
    for (var i = 1; i <= 6; i++) {
      var link = element('a', i === chapter ? 'active' : '', 'Ch ' + i);
      link.href = 'chapter' + i + '.html';
      if (i === chapter) link.setAttribute('aria-current', 'page');
      nav.appendChild(link);
    }
    app.appendChild(nav);

    var header = element('div', 'slides-header');
    header.appendChild(element('div', 'slides-header__title', data.title || ('Chapter ' + chapter)));
    header.appendChild(element('div', 'slides-header__counter',
      'Exam Weight: ' + (data.weight || '—') + ' | ' + (data.questions || 0) + ' questions'));
    app.appendChild(header);

    (data.sections || []).forEach(function (sectionData, index) {
      var card = element('article', 'flashcard animate-fade-in');
      card.id = sectionData.id;
      card.style.animationDelay = (index * 100) + 'ms';
      var objectives = learningObjectiveIds(sectionData.examTips);
      addLearningObjectiveAnchors(card, objectives);

      var cardHeader = element('div', 'flashcard__header');
      cardHeader.appendChild(element('span', 'flashcard__chapter', 'Section ' + sectionData.id));
      cardHeader.appendChild(element('span', 'flashcard__slide-num', (index + 1) + ' of ' + data.sections.length));
      card.appendChild(cardHeader);

      var body = element('div', 'flashcard__body');
      var title = element('div', 'flashcard__title', sectionData.title || ('Section ' + sectionData.id));
      if (sectionData.kLevel) title.appendChild(element('span', 'flashcard__klevel', sectionData.kLevel));
      body.appendChild(title);
      if (sectionData.kLevel) body.appendChild(element('div', 'flashcard__subtitle', 'K-Level: ' + sectionData.kLevel));

      addLearningObjectives(body, objectives);
      addList(body, 'Core Concepts', sectionData.concepts);
      addKeyTerms(body, sectionData.keyTerms);
      addList(body, 'Exam Tips', sectionData.examTips);
      if (sectionData.memoryAid) {
        var memory = section('Memory Aid');
        memory.appendChild(element('div', 'info-box', sectionData.memoryAid));
        body.appendChild(memory);
      }

      if (Array.isArray(sectionData.linkedTo) && sectionData.linkedTo.length) {
        var related = section('Related Sections');
        var links = element('div', 'flashcard__linked');
        sectionData.linkedTo.forEach(function (item) {
          var relatedLink = element('a', 'flashcard__linked-item', item.id + ': ' + item.reason);
          relatedLink.href = 'chapter' + String(item.id).split('.')[0] + '.html#' + item.id;
          links.appendChild(relatedLink);
        });
        related.appendChild(links);
        body.appendChild(related);
      }

      card.appendChild(body);
      app.appendChild(card);
    });

    if (window.location.hash) {
      var target = document.getElementById(window.location.hash.slice(1));
      var targetCard = target && target.closest ? target.closest('.flashcard') : null;
      var scrollTarget = targetCard || target;
      if (scrollTarget && scrollTarget.scrollIntoView) scrollTarget.scrollIntoView();
    }
  }

  render();

  var themeButton = document.getElementById('themeToggle');
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeButton) themeButton.innerHTML = theme === 'light' ? '&#9790;' : '&#9728;';
    try { localStorage.setItem('istqb-theme', theme); } catch (error) { /* storage is optional */ }
  }
  try {
    var savedTheme = localStorage.getItem('istqb-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme);
  } catch (error) { /* storage is optional */ }
  if (themeButton) {
    themeButton.addEventListener('click', function () {
      setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });
  }

  var backTo = new URLSearchParams(window.location.search).get('backTo');
  if (backTo) {
    var bar = element('div', 'slides-backbar');
    var backLink = element('a', 'slides-backbar__link', '← Back to Question Review');
    backLink.href = backTo;
    bar.appendChild(backLink);
    document.body.insertBefore(bar, document.body.firstChild);
  }
})();

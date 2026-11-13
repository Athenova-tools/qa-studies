'use strict';

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const android = path.join(root, 'android', 'app', 'src', 'main', 'assets', 'www');
const files = [
  'js/questions.js',
  'js/slides.js',
  'js/slides-page.js',
  'slides/chapter1.html',
  'slides/chapter2.html',
  'slides/chapter3.html',
  'slides/chapter4.html',
  'slides/chapter5.html',
  'slides/chapter6.html',
];

files.forEach(function (relative) {
  const source = path.join(root, relative);
  const destination = path.join(android, relative);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
});

console.log('Synchronized question bank and Study Slides to Android assets.');

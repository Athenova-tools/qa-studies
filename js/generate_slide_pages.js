'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const loaders = '\n<script src="../js/slides.js"></script>\n<script src="../js/slides-page.js"></script>';

for (let chapter = 1; chapter <= 6; chapter++) {
  const file = path.join(ROOT, 'slides', 'chapter' + chapter + '.html');
  const html = fs.readFileSync(file, 'utf8');
  const start = html.indexOf('\n<script>\n(function() {\nvar slidesData = { chapter' + chapter + ': {');
  if (start < 0) {
    if (html.includes('../js/slides-page.js')) continue;
    throw new Error('Cannot find embedded slide data in ' + file);
  }
  const end = html.indexOf('\n</script>', start);
  if (end < 0) throw new Error('Cannot find embedded slide script end in ' + file);
  const updated = html.slice(0, start) + loaders + html.slice(end + '\n</script>'.length);
  fs.writeFileSync(file, updated, 'utf8');
}

console.log('Generated chapter pages from shared js/slides.js data.');

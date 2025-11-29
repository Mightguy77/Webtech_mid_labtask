const sample = document.getElementById('sample');
const bgBtn = document.getElementById('bgBtn');
const incBtn = document.getElementById('incBtn');
const centerBtn = document.getElementById('centerBtn');
const resetBtn = document.getElementById('resetBtn');

// capture the initial computed font size so we can step from it and reset later
const computed = window.getComputedStyle(sample);
let initialFontSize = parseFloat(computed.fontSize) || 16; // in px
let currentFontSize = initialFontSize;

// background color choices (cycles through them each click)
const colors = ['#fff59d', '#c8e6c9', '#bbdefb', '#ffcdd2', '#e1bee7'];
let colorIndex = -1;

function changeBackgroundColor() {
  colorIndex = (colorIndex + 1) % colors.length;
  sample.style.backgroundColor = colors[colorIndex];
}

function increaseFontSize() {
  currentFontSize = (currentFontSize || initialFontSize) + 2;
  sample.style.fontSize = currentFontSize + 'px';
}

function centerText() {
  sample.style.textAlign = 'center';
}

function resetStyle() {
  // remove inline styles to revert to defaults
  sample.style.backgroundColor = '';
  sample.style.fontSize = '';
  sample.style.textAlign = '';

  // reset tracking variables
  currentFontSize = initialFontSize;
  colorIndex = -1;
}

// wire up buttons
bgBtn.addEventListener('click', changeBackgroundColor);
incBtn.addEventListener('click', increaseFontSize);
centerBtn.addEventListener('click', centerText);
resetBtn.addEventListener('click', resetStyle);
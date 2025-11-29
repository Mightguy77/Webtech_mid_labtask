const input = document.getElementById('text');
const btn = document.getElementById('analyze');
const results = document.getElementById('results');
const charsEl = document.getElementById('chars');
const wordsEl = document.getElementById('words');
const revEl = document.getElementById('reversed');

function analyzeText() {
  const raw = input.value;

  const charCount = raw.length;


  const pieces = raw.split(" ");
  const wordPieces = pieces.filter(s => s.trim() !== "");
  const wordCount = raw.trim().length === 0 ? 0 : wordPieces.length;


  const reversed = raw.length === 0 ? '(no text to reverse)' : raw.split('').reverse().join('');

  charsEl.innerText = charCount;
  wordsEl.innerText = wordCount;
  revEl.innerText = reversed;
  results.style.display = 'block';
  
}

btn.addEventListener('click', analyzeText);

const themes = {
  light: {
    bg: '#ffffff',
    text: '#111111',
    sectionBg: '#f4f4f4',
    border: '#dddddd'
  },
  dark: {
    bg: '#121212',
    text: '#e6e6e6',
    sectionBg: '#1b1b1f',
    border: '#333333'
  }
};

let current = 'light';

const btn = document.getElementById('themeToggle');
const body = document.body;
const header = document.getElementById('header');
const main = document.getElementById('content');
const footer = document.getElementById('footer');



function applyTheme(name) {
  const t = themes[name];
  body.style.backgroundColor = t.bg;
  body.style.color = t.text;
  header.style.backgroundColor = t.sectionBg;
  footer.style.backgroundColor = t.sectionBg;
  header.style.borderBottomColor = t.border;
  main.style.borderTopColor = t.border;
  main.style.borderBottomColor = t.border;
  btn.textContent = name === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
  current = name;
}

btn.addEventListener('click', () => {
  applyTheme(current === 'light' ? 'dark' : 'light');
});

applyTheme(current);
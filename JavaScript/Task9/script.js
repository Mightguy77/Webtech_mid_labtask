// Theme switcher, greeting/clock, section toggling, dynamic projects, and contact validation.

(() => {
  // ---------- Elements ----------
  const body = document.body;
  const themeSwitch = document.getElementById('themeSwitch');
  const themeLabel = document.getElementById('themeLabel');

  const greetingText = document.getElementById('greetingText');
  const liveClock = document.getElementById('liveClock');

  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.section');

  const projectsList = document.getElementById('projectsList');
  const aboutText = document.getElementById('aboutText');

  // Contact form elements
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const errorName = document.getElementById('errorName');
  const errorEmail = document.getElementById('errorEmail');
  const errorMessage = document.getElementById('errorMessage');
  const formStatus = document.getElementById('formStatus');
  const resetBtn = document.getElementById('resetBtn');

  // ---------- Theme Handling ----------
  function applyTheme(isDark) {
    if (isDark) {
      body.classList.add('dark');
      themeSwitch.checked = true;
      themeLabel.textContent = 'Dark';
    } else {
      body.classList.remove('dark');
      themeSwitch.checked = false;
      themeLabel.textContent = 'Light';
    }
    // Persist choice
    try { localStorage.setItem('themeDark', isDark ? '1' : '0'); } catch (e) {}
  }

  // initialize theme from localStorage or prefers-color-scheme
  (function initTheme() {
    let stored = null;
    try { stored = localStorage.getItem('themeDark'); } catch (e) {}
    if (stored !== null) {
      applyTheme(stored === '1');
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark);
    }
  })();

  themeSwitch.addEventListener('change', () => {
    applyTheme(themeSwitch.checked);
  });

  // ---------- Clock & Greeting ----------
  function pad(n) { return String(n).padStart(2, '0'); }

  function updateClockAndGreeting() {
    const now = new Date();
    let h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    // live clock (24-hour displayed as HH:MM:SS)
    liveClock.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;

    // greeting based on hour (local time)
    // Morning: 5 - 11 ; Afternoon: 12 - 16 ; Evening: 17 - 4
    let greet = 'Hello';
    if (h >= 5 && h < 12) greet = 'Good Morning';
    else if (h >= 12 && h < 17) greet = 'Good Afternoon';
    else greet = 'Good Evening';

    greetingText.textContent = `${greet},`;
  }

  updateClockAndGreeting();
  setInterval(updateClockAndGreeting, 1000);

  // ---------- Section Toggling ----------
  function showSection(id) {
    sections.forEach(s => {
      const show = s.id === id;
      s.classList.toggle('active', show);
      s.setAttribute('aria-hidden', show ? 'false' : 'true');
    });
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const sec = btn.dataset.section;
      showSection(sec);
    });
  });

  // default show About
  showSection('about');

  // ---------- Dynamic Projects (rendered by JS) ----------
  const sampleProjects = [
    { title: 'Todo App', desc: 'Small todo list with localStorage persistence.' },
    { title: 'Portfolio Site', desc: 'This site demonstrates DOM, styling, and validation.' },
    { title: 'Weather Widget', desc: 'Fetches weather and displays a simple forecast.' }
  ];

  function renderProjects() {
    projectsList.innerHTML = '';
    sampleProjects.forEach(p => {
      const card = document.createElement('div');
      card.className = 'project';
      const h = document.createElement('h3');
      h.textContent = p.title;
      const d = document.createElement('p');
      d.textContent = p.desc;
      card.appendChild(h);
      card.appendChild(d);
      projectsList.appendChild(card);
    });
  }
  renderProjects();

  // Example of dynamic text update (demonstration)
  aboutText.textContent += ' (Updated: ' + new Date().toLocaleDateString() + ')';

  // ---------- Contact Form Validation ----------
  function validateEmail(email) {
    // Simple regex for demonstration (good enough for basic checks)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearErrors() {
    errorName.textContent = '';
    errorEmail.textContent = '';
    errorMessage.textContent = '';
    formStatus.textContent = '';
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const msg = messageInput.value.trim();

    let valid = true;

    if (!name) {
      errorName.textContent = 'Please enter your name.';
      valid = false;
    }

    if (!email) {
      errorEmail.textContent = 'Please enter your email.';
      valid = false;
    } else if (!validateEmail(email)) {
      errorEmail.textContent = 'Please enter a valid email address.';
      valid = false;
    }

    if (msg.length < 10) {
      errorMessage.textContent = 'Message must be at least 10 characters.';
      valid = false;
    }

    if (!valid) {
      formStatus.textContent = 'Please fix the errors above.';
      return;
    }

    // If valid: simulate a send and show a success message (no real network)
    formStatus.textContent = 'Sending...';
    // simple simulated delay
    setTimeout(() => {
      formStatus.textContent = 'Message sent! Thank you.';
      contactForm.reset();
    }, 600);
  });

  // Reset button clears form and messages
  resetBtn.addEventListener('click', () => {
    contactForm.reset();
    clearErrors();
  });

  // Accessibility: allow keyboard navigation to activate nav buttons with Enter/Space
  navButtons.forEach(btn => {
    btn.tabIndex = 0;
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
})();
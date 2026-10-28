'use strict';
(() => {
  const sizes = [100, 112.5, 125, 150];
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
  let size = Number(read('eco-fonte')) || 100;
  if (!sizes.includes(size)) size = 100;
  let contrast = read('eco-contraste') === '1';
  const preferences = document.querySelector('[data-reading-preferences]');
  const apply = () => {
    document.documentElement.style.fontSize = `${size}%`;
    document.documentElement.classList.toggle('alto-contraste', contrast);
    if (preferences) {
      const label = preferences.querySelector('#rotulo-fonte');
      if (label) label.textContent = `Tamanho do texto: ${size}%`;
      const smaller = preferences.querySelector('[aria-label="Diminuir texto"]');
      const larger = preferences.querySelector('[aria-label="Aumentar texto"]');
      if (smaller) smaller.disabled = size === sizes[0];
      if (larger) larger.disabled = size === sizes[sizes.length - 1];
      const checkbox = preferences.querySelector('input[type="checkbox"]');
      if (checkbox) checkbox.checked = contrast;
    }
  };
  apply();
  if (preferences) {
    preferences.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
      const label = button.getAttribute('aria-label');
      const index = sizes.indexOf(size);
      size = label === 'Diminuir texto' ? sizes[Math.max(0, index - 1)] : label === 'Aumentar texto' ? sizes[Math.min(sizes.length - 1, index + 1)] : 100;
      save('eco-fonte', String(size)); apply();
    }));
    preferences.querySelector('input[type="checkbox"]')?.addEventListener('change', event => {
      contrast = event.target.checked;
      save('eco-contraste', contrast ? '1' : '0'); apply();
    });
  }
  const toggle = document.querySelector('[aria-controls="menu-mobile"]');
  const desktopNav = document.querySelector('nav[aria-label="Navegação principal"]');
  if (toggle && desktopNav) {
    const menu = desktopNav.cloneNode(true);
    menu.id = 'menu-mobile';
    menu.className = 'html-mobile-menu';
    menu.setAttribute('aria-label', 'Navegação principal móvel');
    menu.hidden = true;
    toggle.closest('header').append(menu);
    const close = () => { menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menu'); };
    toggle.addEventListener('click', () => {
      menu.hidden = !menu.hidden;
      toggle.setAttribute('aria-expanded', String(!menu.hidden));
      toggle.setAttribute('aria-label', menu.hidden ? 'Abrir menu' : 'Fechar menu');
    });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') { close(); toggle.focus(); } });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  }
  const form = document.querySelector('[data-demo-contact]');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const status = form.parentElement.querySelector('[role="status"]');
    if (status) status.textContent = 'Obrigado! Esta é uma demonstração — sua mensagem não foi enviada nem armazenada.';
    form.reset();
  });
})();

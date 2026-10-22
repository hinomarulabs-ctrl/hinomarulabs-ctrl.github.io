(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const languages = document.querySelector('.language-menu');
  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  // The language links and native FAQ disclosures work without JavaScript.
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    if (open) languages.open = false;
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  languages.addEventListener('toggle', () => {
    if (languages.open) closeMenu();
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.language-menu')) languages.open = false;
    if (!event.target.closest('.site-header')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (languages.open) {
      languages.open = false;
      languages.querySelector('summary').focus();
    } else if (toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
})();

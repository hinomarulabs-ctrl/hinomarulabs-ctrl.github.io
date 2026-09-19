(() => {
  const menu = document.querySelector('.language-menu');
  if (!menu) return;
  const links = [...menu.querySelectorAll('[data-language-link]')];
  // Keep the nearest shared section when changing language.
  function updateLinks() {
    const sections = [...document.querySelectorAll('main[id], main section[id]')];
    const section = sections.filter(el => {
      const bounds = el.getBoundingClientRect();
      return bounds.top <= Math.max(150, innerHeight / 2) && bounds.bottom > 90;
    }).at(-1);
    const hash = section && section.id !== 'main' ? '#' + section.id : '';
    for (const link of links) {
      const target = new URL(link.href);
      target.hash = hash;
      link.href = target.href;
    }
  }
  menu.addEventListener('toggle', () => { if (menu.open) updateLinks(); });
  for (const link of links) link.addEventListener('click', updateLinks);
  document.addEventListener('click', event => {
    if (!menu.contains(event.target)) menu.open = false;
  });
  menu.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
})();

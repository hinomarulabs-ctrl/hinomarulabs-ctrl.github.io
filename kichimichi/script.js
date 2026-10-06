(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');

  if (toggle && nav) {
    const language = document.documentElement.lang;
    const menuLabels = language === 'en'
      ? { open: 'Open menu', close: 'Close menu' }
      : language === 'zh-TW' || language === 'zh-Hant'
        ? { open: '開啟選單', close: '關閉選單' }
      : language.startsWith('zh')
        ? { open: '打开菜单', close: '关闭菜单' }
        : { open: 'メニューを開く', close: 'メニューを閉じる' };
    const menuLabel = toggle.querySelector('.sr-only');

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
      if (menuLabel) menuLabel.textContent = isOpen ? menuLabels.open : menuLabels.close;
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        if (menuLabel) menuLabel.textContent = menuLabels.open;
      });
    });
  }

  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();

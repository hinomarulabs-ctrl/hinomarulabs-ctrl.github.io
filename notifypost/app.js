'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
const languagePicker = document.querySelector('.language-picker');
const languageSummary = languagePicker.querySelector('summary');
const localizedMenuLabels = {
  ja: { open: 'メニューを開く', close: 'メニューを閉じる' },
  en: { open: 'Open menu', close: 'Close menu' },
  'zh-CN': { open: '打开菜单', close: '关闭菜单' },
  'zh-TW': { open: '開啟選單', close: '關閉選單' },
  ko: { open: '메뉴 열기', close: '메뉴 닫기' }
};
const menuLabels = localizedMenuLabels[document.documentElement.lang] || localizedMenuLabels.ja;
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', menuLabels.open);
  nav.classList.remove('open');
}
function closeLanguagePicker() {
  languagePicker.open = false;
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  if (open) closeLanguagePicker();
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? menuLabels.close : menuLabels.open);
  nav.classList.toggle('open', open);
});
languagePicker.addEventListener('toggle', () => {
  if (languagePicker.open) closeMenu();
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
languagePicker.querySelectorAll('a').forEach(link => link.addEventListener('click', closeLanguagePicker));
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (languagePicker.open) {
    closeLanguagePicker();
    languageSummary.focus();
  } else if (menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
  if (!event.target.closest('.language-picker')) closeLanguagePicker();
});
window.matchMedia('(min-width: 1101px)').addEventListener('change', closeMenu);

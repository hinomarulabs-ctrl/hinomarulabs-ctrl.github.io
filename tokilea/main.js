const buttons = [...document.querySelectorAll('[data-theme]')];
buttons.forEach(button => button.addEventListener('click', () => {
  const dark = button.dataset.theme === 'dark';
  buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  const screen = document.querySelector('#theme-screen');
  screen.src = dark ? './assets/dark.webp' : './assets/collection.webp';
  screen.alt = `Tokileaの${dark ? 'ダーク' : 'ライト'}モードのコレクション画面`;
  document.querySelector('.experience-stage').dataset.mode = dark ? 'dark' : 'light';
  document.querySelector('.mode-label').textContent = dark ? 'DARK MODE' : 'LIGHT MODE';
}));

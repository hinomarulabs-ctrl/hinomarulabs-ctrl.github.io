(() => {
  const menu = document.querySelector('.mobile-menu');
  menu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => { menu.open = false; });
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  document.addEventListener('click', event => {
    if (menu?.open && !menu.contains(event.target)) menu.open = false;
  });

  const dialog = document.querySelector('.screen-dialog');
  if (!dialog) return;
  const title = dialog.querySelector('h2');
  const image = dialog.querySelector('.dialog-image');
  let opener;
  document.querySelectorAll('[data-screen]').forEach(button => {
    button.addEventListener('click', () => {
      opener = button;
      title.textContent = button.dataset.title;
      image.src = button.dataset.screen;
      image.alt = button.querySelector('img').alt;
      const source = button.querySelector('img');
      image.width = source.naturalWidth;
      image.height = source.naturalHeight;
      dialog.showModal();
      dialog.scrollTop = 0;
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => opener?.focus({ preventScroll: true }));
})();

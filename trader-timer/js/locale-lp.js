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

  const audio = document.querySelector('#countdown-preview');
  const preview = document.querySelector('.voice-preview__button');
  if (audio && preview) {
    audio.controls = false;
    preview.hidden = false;
    const resetPreview = () => {
      preview.setAttribute('aria-pressed', 'false');
      preview.textContent = preview.dataset.playLabel;
    };
    const showPreviewError = () => {
      audio.pause();
      resetPreview();
      document.querySelector('[data-audio-status]').textContent = preview.dataset.errorLabel;
      document.querySelector('.voice-preview__fallback').hidden = false;
    };
    preview.addEventListener('click', async () => {
      if (!audio.paused) {
        audio.pause();
        return;
      }
      try {
        if (audio.ended) audio.currentTime = 0;
        await audio.play();
      } catch {
        showPreviewError();
      }
    });
    audio.addEventListener('play', () => {
      preview.setAttribute('aria-pressed', 'true');
      preview.textContent = preview.dataset.pauseLabel;
    });
    audio.addEventListener('pause', resetPreview);
    audio.addEventListener('ended', resetPreview);
    audio.addEventListener('error', showPreviewError);
    audio.querySelector('source').addEventListener('error', showPreviewError);
    // A visitor starts the demo; switching away from the page stops it.
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) audio.pause();
    });
  }
})();

(() => {
  const languageMenus = Array.from(document.querySelectorAll(".language-switch"));
  if (!languageMenus.length) return;

  const mobileMenus = Array.from(document.querySelectorAll(".mobile-menu"));

  languageMenus.forEach((menu) => {
    menu.addEventListener("toggle", () => {
      if (!menu.open) return;
      [...languageMenus, ...mobileMenus].forEach((other) => {
        if (other !== menu) other.open = false;
      });
    });

    menu.addEventListener("focusout", (event) => {
      if (event.relatedTarget && !menu.contains(event.relatedTarget)) menu.open = false;
    });
  });

  mobileMenus.forEach((menu) => {
    menu.addEventListener("toggle", () => {
      if (menu.open) languageMenus.forEach((languageMenu) => { languageMenu.open = false; });
    });
  });

  document.addEventListener("click", (event) => {
    languageMenus.forEach((menu) => {
      if (!menu.contains(event.target)) menu.open = false;
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const menu = languageMenus.find((candidate) => candidate.open);
    if (!menu) return;
    menu.open = false;
    menu.querySelector("summary").focus();
    event.preventDefault();
  });
})();


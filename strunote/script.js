const menuButton = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const languageMenu = document.querySelector(".language-menu");
const languageButton = languageMenu?.querySelector("summary");

if (menuButton && primaryNav) {
  const setMenuExpanded = (expanded) => {
    menuButton.setAttribute("aria-expanded", String(expanded));
    menuButton.setAttribute("aria-label", expanded ? menuButton.dataset.labelClose : menuButton.dataset.labelOpen);
    primaryNav.classList.toggle("is-open", expanded);
  };

  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") !== "true";
    if (expanded && languageMenu) languageMenu.open = false;
    setMenuExpanded(expanded);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuExpanded(false));
  });

  languageButton?.addEventListener("click", () => {
    if (!languageMenu.open) setMenuExpanded(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    if (languageMenu?.open) {
      languageMenu.open = false;
      languageButton.focus();
    } else if (menuButton.getAttribute("aria-expanded") === "true") {
      setMenuExpanded(false);
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (languageMenu?.open && !languageMenu.contains(event.target)) {
      languageMenu.open = false;
    }
  });

  const desktopLayout = window.matchMedia("(min-width: 761px)");
  desktopLayout.addEventListener("change", () => setMenuExpanded(false));
}

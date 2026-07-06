const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu]");
const nav = document.querySelector("[data-nav]");

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (menuButton && nav && header) {
  const menuOpenLabel = menuButton.dataset.menuOpenLabel || "メニューを開く";
  const menuCloseLabel = menuButton.dataset.menuCloseLabel || "メニューを閉じる";

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? menuOpenLabel : menuCloseLabel);
    nav.classList.toggle("is-open", !isOpen);
    header.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", menuOpenLabel);
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  });
}

const faq = document.querySelector("[data-faq]");

if (faq) {
  faq.addEventListener("toggle", (event) => {
    const item = event.target;
    if (!(item instanceof HTMLDetailsElement) || !item.open) return;
    faq.querySelectorAll("details").forEach((detail) => {
      if (detail !== item) detail.removeAttribute("open");
    });
  }, true);
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

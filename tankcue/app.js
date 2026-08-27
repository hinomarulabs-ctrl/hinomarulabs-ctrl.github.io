(() => {
  document.querySelectorAll(".faq-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
      const indicator = button.querySelector("b");
      if (indicator) indicator.textContent = isOpen ? "−" : "+";
    });
  });
})();

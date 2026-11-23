const viewer = document.querySelector(".screen-viewer");

if (typeof viewer?.showModal === "function") {
  const title = viewer.querySelector("h2");
  const image = viewer.querySelector("img");
  let opener;

  for (const link of document.querySelectorAll(".screen-link")) {
    link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      opener = link;
      title.textContent = link.closest(".guide-step").querySelector("h3").textContent;
      image.src = link.href;
      image.alt = link.querySelector("img").alt;
      viewer.showModal();
    });
  }

  viewer.addEventListener("close", () => opener.focus({ preventScroll: true }));
}

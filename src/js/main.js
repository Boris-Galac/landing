///// HAM BTN AND NAV OPEN/CLOSEDS

const hamBtn = document.querySelector(".ham-btn");
const nav = document.querySelector(".nav");
hamBtn.addEventListener("click", (e) => {
  if (nav.getAttribute("aria-expanded") === "false") {
    nav.setAttribute("aria-expanded", "true");
    hamBtn.setAttribute("data-active", "true");
  } else {
    nav.setAttribute("aria-expanded", "false");
    hamBtn.setAttribute("data-active", "false");
  }
});

const articleBtn = document.querySelectorAll(".article-btn");
articleBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (overlay.getAttribute("data-active") === "false") {
      overlay.setAttribute("data-active", "true");
    } else {
      overlay.setAttribute("data-active", "false");
    }
  });
  const overlay = document.querySelector(".overlay");
  overlay.addEventListener("click", (e) => {
    overlay.setAttribute("data-active", "false");
  });
});

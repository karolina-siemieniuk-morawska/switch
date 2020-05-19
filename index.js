const login = document.querySelector(".login-menu");
const hamburger = document.querySelector(".button_active_menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  login.toggleAttribute("hidden");
});

const login = document.querySelector(".login-menu");

document.querySelector(".button_active_menu").addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  login.toggleAttribute("hidden");
});

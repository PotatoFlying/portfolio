// Navigation : fermeture du menu avec Échap ou un clic extérieur.
const navigationMenu = document.querySelector(".site-menu");
document.addEventListener("click", (event) => {
  if (!navigationMenu.contains(event.target)) navigationMenu.open = false;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigationMenu.open) {
    navigationMenu.open = false;
    navigationMenu.querySelector("summary").focus();
  }
});

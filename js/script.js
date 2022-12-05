// Pre-Loader
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  // Making 5s delay in website loading
  setTimeout(() => {
    loader.classList.add("fadeOut");
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2500);
});


// Share icon
let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".social-menu");

toggle.onclick = function () {
  menu.classList.toggle("active")
}
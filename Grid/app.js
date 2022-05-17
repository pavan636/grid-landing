let menu = document.querySelector("nav ul");
let hamburger = document.querySelector("nav .mobile");

hamburger.addeventListener("click", function () {
  menu.classList.toggle("show");
});

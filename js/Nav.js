let navParts = document.querySelectorAll(".navPart");
let navButton = document.querySelector(".navButton");
let closeButton = document.querySelector(".closeButton");
let navContainer = document.querySelector(".navItems");
let navItems = document.querySelectorAll(".navItem");

function toggleMenu() {
  navParts.forEach((navPart) => {
    navPart.classList.toggle("active");
  });
  navContainer.classList.toggle("active");
  closeButton.classList.toggle("active");
  navButton.classList.toggle("active");
}

navButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);
navItems.forEach((navItem) => {
  navItem.addEventListener("click", toggleMenu);
});

//Theme toggle
const button = document.getElementById("theme-toggle");

button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});

//Nav bar
const sidenav = document.getElementById("mySidenav");
const hamburger = document.getElementById("hamburger");
const navLinks = sidenav.querySelectorAll("a");

// Toggle sidebar open/close when clicking hamburger
function openCloseNav() {
  const isOpen = sidenav.style.width === "250px";

  if (isOpen) {
    sidenav.style.width = "0";
    hamburger.classList.remove("active"); // remove "active" style
  } else {
    sidenav.style.width = "250px";
    hamburger.classList.add("active"); // keep icon highlighted
  }
}

// Close sidebar when a link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidenav.style.width = "0";
    hamburger.classList.remove("active");
  });
});

//Opening and closing accordions
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active"); // toggle margin change
    let panel = this.nextElementSibling;
    panel.classList.toggle("open"); // toggle flex display
  });
}

//Date
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();
});
// This script reveals content after scroll down //
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Page Switching// // Page FadeIn animation //
const def_page = "home";
let new_page = "";
let old_page = "";
function init() {
  document.getElementById(def_page).style.display = "block";
  old_page = def_page;
}
function shw_page(new_page) {
  if (old_page) {
    document.getElementById(old_page).classList.remove("animationDisplayBlock");
    document.getElementById(old_page).style.display = "none";
  }
  document.getElementById(new_page).style.display = "block";
  document.getElementById(new_page).classList.add("animationDisplayBlock");

  old_page = new_page;
}

//hamburger//
const menu = document.querySelector(".hamburger");

menu.addEventListener("click", () => {
  menu.classList.toggle("hamburger--active");
});
//menu click//
function mobileMenu() {
  if (document.getElementById("mobileMenu").style.display == "block") {
    document.getElementById("mobileMenu").style.display = "none";
  } else {
    document.getElementById("mobileMenu").style.display = "block";
  }
}
document.getElementById("menuicon").addEventListener("click", mobileMenu);

function resetMenu() {
  if (window.innerWidth >= 900) {
    document.getElementById("mobileMenu").style.display = "block";
  } else if (window.innerwidth < 900) {
    document.getElementById("mobileMenu").style.display = "none";
  }
}

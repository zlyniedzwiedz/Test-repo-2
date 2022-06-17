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

// This changes content on button press//

function init() {
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("contact").style.display = "none";
}
function showHome() {
  console.log("btn1");
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("contact").style.display = "none";
}
function showAbout() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "block";
  document.getElementById("skills").style.display = "none";
  document.getElementById("contact").style.display = "none";
}
function showSkills() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "block";
  document.getElementById("contact").style.display = "none";
}
function showContact() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("contact").style.display = "block";
}

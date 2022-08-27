import subTopNavbar from "../components/subtopnavbar.js";
import topnav from "../components/topnav.js";
import card from "../scripts/card.js";
import footer from "../components/footer.js";
let navContainer = document.getElementById("navbar-container");
navContainer.innerHTML = subTopNavbar();
let tnav = document.getElementById("tnav");
tnav.innerHTML = topnav();
card();

let fantasyLogoBtn = document.getElementById("fantasy-logo-btn");
fantasyLogoBtn.addEventListener("click", () => {
  window.location.href = "../log_in.html";
});

let d4 = document.getElementById("drop-news-4");
d4.addEventListener("click", () => {
  window.location.href = "../News.html";
});

let news1 = document.getElementById("ahn");
news1.addEventListener("click", () => {
  window.location.href = "../news1.html";
});

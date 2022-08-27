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

let news1 = document.getElementById("ahn-1");
news1.addEventListener("click", () => {
  window.location.href = "../news1.html";
});
let news2 = document.getElementById("ahn-2");
news2.addEventListener("click", () => {
  window.location.href = "../news2.html";
});
let news3 = document.getElementById("ahn-3");
news3.addEventListener("click", () => {
  window.location.href = "../news3.html";
});
let news4 = document.getElementById("ahn-4");
news4.addEventListener("click", () => {
  window.location.href = "../news4.html";
});
let news5 = document.getElementById("ahn-5");
news5.addEventListener("click", () => {
  window.location.href = "../news5.html";
});
footer();

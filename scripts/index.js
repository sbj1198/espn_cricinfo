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

let ifooter = document.getElementById("ifooter");

ifooter.innerHTML = footer();
let navlogo = document.getElementById("sub-top-navbar-espn-logo");
navlogo.addEventListener("click", () => {
  window.location.href = "../index.html";
});

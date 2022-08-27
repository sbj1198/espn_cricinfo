import subTopNavbar from "../components/subtopnavbar.js";
import topnav from "../components/topnav.js";
import card from "../scripts/card.js";
let navContainer = document.getElementById("navbar-container");
navContainer.innerHTML = subTopNavbar();
let tnav = document.getElementById("tnav");
tnav.innerHTML = topnav();
card();

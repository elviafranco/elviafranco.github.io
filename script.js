require("dotenv").config();
const activePage = window.location.pathname;

const navLinks = document.querySelectorAll("nav li a");
navLinks.forEach((link) => {
  if (link.href.includes(activePage)) {
    link.parentNode.classList.add("active");
  }
});

// Fetch from Spotify API
fetch("https://api.spotify.com/v1/me/top/tracks?limit=10&offset=5", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Bearer " + process.env.TOKEN
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

// Dark Mode Toggle
function toggleMode(mode) {
  mode.classList.toggle("fa-moon-stars");
  document.body.classList.toggle("dark");
}

// Buttons
let discoverbtn = document.getElementById("discover-btn");
let definebtn = document.getElementById("define-btn");
let developbtn = document.getElementById("develop-btn");

// Sections
let discover = document.getElementById("discover");
let define = document.getElementById("define");
let develop = document.getElementById("develop");

// Section Toggles
function openDiscover() {
  discover.classList.toggle("hidden");
  define.classList.add("hidden");
  develop.classList.add("hidden");
  deliver.classList.add("hidden");
}

function openDefine() {
  define.classList.toggle("hidden");
  discover.classList.add("hidden");
  develop.classList.add("hidden");
  deliver.classList.add("hidden");
}

function openDevelop() {
  develop.classList.toggle("hidden");
  discover.classList.add("hidden");
  define.classList.add("hidden");
  deliver.classList.add("hidden");
}

discoverbtn.onclick = openDiscover;
definebtn.onclick = openDefine;
developbtn.onclick = openDevelop;

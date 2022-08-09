const activePage = window.location.pathname;

const navLinks = document.querySelectorAll("nav li a");
navLinks.forEach((link) => {
  if (link.href.includes(activePage)) {
    link.parentNode.classList.add("active");
  }
});

if (activePage.includes('index')){
  document.querySelector('.portrait-container').classList.add('on');
}

// Fetch from Spotify API
fetch("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10&offset=0", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Bearer BQCGD8K-K7jRECk9qpSLYpKZvLCHrGs7NI0PwZIySYIXSJgkyElDK3Tb4YKGtd0NJyFAcVFcuZMOxXzHjuU8u5_dwiT6UJydb8Z-yjqGkjuLhiidbx2BqfL4yw7QOZPaGcMUE-49xrGwaBHhpYK18gXW8nN0c4yySL0y1hBH55BNgkTJhFoqDMh3RasRJ9WkIw"
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.items.forEach(element => {
      console.log(element.album.name);
      const img = document.createElement('img');
      // make an a tag and adjust href so it's clickable!
      img.src = element.album.images[0].url;
      img.setAttribute ('href', element.album.external_urls.spotify);
      img.classList.add('album');
      document.querySelector('.image-container').appendChild(img);
    });
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

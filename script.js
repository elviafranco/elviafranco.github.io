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
      "Bearer BQDO2Mq1uefgQmb9aPLWBR-2e9cFVgHBw16ioMH-1whgUT4WdX9SXgBNyK5R1Gib0lbwfKjAXdK_G2KLGlxIdX9RZ-LXeS2BLToNLwH5rnNvr3-0V_G0yLjFNf0hxIWUz7uHmzC7SQY928UP6uYg_lJ6n8BhIGiEbhSeqlui9gvYJsxX7kQevZqYSeOZTbCq-A"
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




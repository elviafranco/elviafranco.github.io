// Dark Mode Toggle
function toggleMode(mode) {
    mode.classList.toggle('fa-moon-stars');
    document.body.classList.toggle('dark');
}

// Buttons
let discoverbtn = document.getElementById('discover-btn');
let definebtn = document.getElementById('define-btn');
let developbtn = document.getElementById('develop-btn');
let deliverbtn = document.getElementById('deliver-btn');

// Sections
let discover = document.getElementById('discover');
let define = document.getElementById('define');
let develop = document.getElementById('develop');
let deliver = document.getElementById('deliver');

// Section Toggles

function openDiscover() {
    discover.classList.toggle('hidden');
    define.classList.add('hidden');
    develop.classList.add('hidden');
    deliver.classList.add('hidden');
}

function openDefine() {
    define.classList.toggle('hidden');
    discover.classList.add('hidden');
    develop.classList.add('hidden');
    deliver.classList.add('hidden');
}

function openDevelop() {
    develop.classList.toggle('hidden');
    discover.classList.add('hidden');
    define.classList.add('hidden');
    deliver.classList.add('hidden');
}

function openDeliver() {
    deliver.classList.toggle('hidden');
    discover.classList.add('hidden');
    define.classList.add('hidden');
    develop.classList.add('hidden');
}

// btn.addEventListener('click', open);
// btn.addEventListener('click', close);
discoverbtn.onclick = openDiscover;
definebtn.onclick = openDefine;
developbtn.onclick = openDevelop;
deliverbtn.onclick = openDeliver;
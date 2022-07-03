function toggleMode(mode) {
    mode.classList.toggle('fa-moon-stars');
    document.body.classList.toggle('dark');
}

function showContent() {
    let section = document.getElementById('test');
    section.style.display = 'block';
}

function showSection() {
    let section = document.getElementsByClassName('section-phase');
    section.show();
}
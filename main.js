const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = navLinks.querySelectorAll('a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

document.addEventListener('submit', (e) => {
    e.preventDefault();
});

links.forEach(link => {
    link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    });
});

const scrollContainer = document.getElementById('specialsScroll');
const cards = scrollContainer.innerHTML;

scrollContainer.innerHTML += cards;
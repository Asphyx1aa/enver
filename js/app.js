const menuButton = document.querySelector('#menu-toggle');
const nav = document.querySelector('#nav');
const header = document.querySelector('#header');



window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
})


menuButton.addEventListener('click', () => {
    if (nav.classList.contains('fade-in')) {
        nav.classList.remove('fade-in');
        nav.classList.add('fade-out');
    } else {
        nav.classList.remove('fade-out');
        nav.classList.add('fade-in');
    }
});


const titles = document.querySelectorAll('.text__title');

titles.forEach( item => {
    item.addEventListener('click', addClassActive);   
});

function addClassActive(e) {
    e.target.classList.toggle('active');
    e.target.nextElementSibling.classList.toggle('active');
}
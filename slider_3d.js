let delta = 0;
const h1 = document.querySelector('h1');

document.querySelector('.test').addEventListener('wheel', myscroll);
document.querySelector('.div').addEventListener('wheel', (e) => e.stopPropagation());
// window.addEventListener('scroll', myscroll);

function myscroll(e) {
    delta += e.deltaY;
    h1.style.transition = '1s all ease-out';
    h1.style.transform = 'perspective(500px) translateZ(700px)';
    console.log(e.target);
    // h1.style.transform = 'translateX(-800px) scale(9) ';
    // h1.style.transform = '';
    h1.style.opacity = 0;
    // h1.style.visibility = 'hidden';
    
}

h1.addEventListener('click', () => console.log('aaa'));
document.querySelector('.inner-test1').addEventListener('click', () => console.log('bbb'));
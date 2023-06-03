const menu_div = document.querySelector('.menu-div');
const menuNav = document.querySelector('nav');
const menu_ul = document.querySelector('ul');

menu_div.addEventListener('click', () =>{
    menu_div.classList.toggle('open');
});

window.addEventListener('resize', ()=> {
    if (window.innerWidth >= 768) {
        menuNav.classList.remove('mobile-nav');
        menu_ul.classList.remove('mobile-ul');
        menu_ul.classList.add('md-ul');
    } else {
        menu_ul.classList.remove('md-ul');
        menuNav.classList.add('mobile-nav');
        menu_ul.classList.add('mobile-ul');
    }
});

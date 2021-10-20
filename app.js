// mobile menu
const burgerMenu = document.querySelector('div.hamburgerMenu img');
const burgerMenuActive = document.querySelector('div.links');
const close = document.querySelector('.exit img');
const backdrop = document.querySelector('.backdrop');


burgerMenu.addEventListener('click', function(){
    burgerMenuActive.classList.add('active');
    backdrop.classList.add('active');
    console.log('clicked');
});

close.addEventListener('click', function(){
    burgerMenuActive.classList.remove('active');
    backdrop.classList.remove('active');
});

backdrop.addEventListener('click', function(){
    burgerMenuActive.classList.remove('active');
    backdrop.classList.remove('active');
});


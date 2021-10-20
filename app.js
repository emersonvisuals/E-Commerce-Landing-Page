// mobile menu
const burgerMenu = document.querySelector('div.hamburgerMenu img');
const burgerMenuActive = document.querySelector('div.links');
const close = document.querySelector('.exit img');
const backdrop = document.querySelector('.backdrop');
const body = document.body; 


burgerMenu.addEventListener('click', function(){
    burgerMenuActive.classList.add('active');
    backdrop.classList.add('active');
    body.classList.add('active');
});

close.addEventListener('click', function(){
    burgerMenuActive.classList.remove('active');
    backdrop.classList.remove('active');
    body.classList.remove('active');
});

backdrop.addEventListener('click', function(){
    burgerMenuActive.classList.remove('active');
    backdrop.classList.remove('active');
    body.classList.remove('active');
});


// quantity of shoes
const plus = document.querySelector('button.plus');
const minus = document.querySelector('button.minus');
const value = document.querySelector('span.value');

let number = 1;

function shoeCount() {
    plus.addEventListener('click', function(){
        console.log('clicked');
        value.innerText = +value.innerText + number;
    });

    minus.addEventListener('click', function(){
        if (+value.innerText  > 0) {
            value.innerText = +value.innerText - number;
        } else {        
            value.innerText = 0;
        }
    })
}

shoeCount();
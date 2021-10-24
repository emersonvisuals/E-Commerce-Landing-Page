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

// add to cart
const addToCart = document.querySelector('button.addToCart');
const navValueContainer = document.querySelector('.shoppingCartValueContainer');
const navValue = document.querySelector('span.shoppingCartValue');
const cartQuantity = document.querySelector('span.cartQuantity');
const cartValue = document.querySelector('span.cartCost');
const shoppingCartEmpty = document.querySelector('.cartEmpty');
const shoppingCartItem = document.querySelector('.cartItem');
const shoppingCartButton = document.querySelector('.cartButtonContainer');
const shoppingCartDelete = document.querySelector('.cartDelete img');

addToCart.addEventListener('click', function(){
    function quantityCheck(){
        if (value.innerText > 0) {
            navValueContainer.classList.add('active');
            shoppingCartItem.classList.add('active');
            shoppingCartEmpty.classList.add('active');
            shoppingCartButton.classList.add('active');

        } else {
            navValueContainer.classList.remove('active');
            shoppingCartItem.classList.remove('active');
            shoppingCartEmpty.classList.remove('active');
            shoppingCartButton.classList.remove('active');
        }
    }
    quantityCheck();

    navValue.innerText = value.innerText;
    cartQuantity.innerText = value.innerText;
    cartValue.innerText = '$' + value.innerText * 125 + '.00';

    value.innerText = 0;
});

shoppingCartDelete.addEventListener('click', function(){
    navValueContainer.classList.remove('active');
    shoppingCartItem.classList.remove('active');
    shoppingCartEmpty.classList.remove('active');
    shoppingCartButton.classList.remove('active');
});




// shopping cart
const shoppingCart = document.querySelector('.shoppingCart img');
const shoppingMenu = document.querySelector('.cartContainer');
const shoppingDelete = document.querySelector('.cartDelete img');


shoppingCart.addEventListener('click', function(){
    shoppingMenu.classList.toggle('active');
    backdrop.classList.toggle('shoppingCart');
});

navValueContainer.addEventListener('click', function(){
    shoppingMenu.classList.toggle('active');
    backdrop.classList.toggle('shoppingCart');
});


backdrop.addEventListener('click', function(){
    shoppingMenu.classList.remove('active');
    backdrop.classList.remove('shoppingCart');
});
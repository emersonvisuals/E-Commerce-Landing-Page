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


// image changes
const imageOne = document.querySelector('.image01');
const imageTwo = document.querySelector('.image02');
const imageThree = document.querySelector('.image03');
const imageFour = document.querySelector('.image04');
const mainImage = document.querySelector('.desktopImage');


imageTwo.addEventListener('click', function(){
    imageTwo.classList.add('active');
    imageOne.classList.remove('active');
    imageThree.classList.remove('active');
    imageFour.classList.remove('active');
    mainImage.src = 'images/image-product-2.jpg';

});

imageOne.addEventListener('click', function(){
    imageOne.classList.add('active');
    imageTwo.classList.remove('active');
    imageThree.classList.remove('active');
    imageFour.classList.remove('active');
    mainImage.src = 'images/image-product-1.jpg';
});

imageThree.addEventListener('click', function(){
    imageThree.classList.add('active');
    imageTwo.classList.remove('active');
    imageOne.classList.remove('active');
    imageFour.classList.remove('active');
    mainImage.src = 'images/image-product-3.jpg';
});

imageFour.addEventListener('click', function(){
    imageFour.classList.add('active');
    imageThree.classList.remove('active');
    imageOne.classList.remove('active');
    imageTwo.classList.remove('active');
    mainImage.src = 'images/image-product-4.jpg';
});


// image zoom 
const carouselContainer = document.querySelector('.imageContainer');

mainImage.addEventListener('click', function(){
    carouselContainer.classList.add('active');
    backdrop.classList.add('active');
});

backdrop.addEventListener('click', function(){
    carouselContainer.classList.remove('active');
    backdrop.classList.remove('active');
});
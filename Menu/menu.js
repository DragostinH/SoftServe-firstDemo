import createProductElement from "../scripts/createProductElement.js";
import getProductImg from "./getProductImg.js";

const menu = (() => {
    const productImgs = getProductImg();
    const productsWrapper = document.querySelector('.products');

    const randomProduct = createProductElement('black pepper beef',
        productImgs.entrees.mainDishes.blackPepperBeef,
        'This thing is awesome',
        '$13.99'
    );

    const cartShowBtn = document.querySelector('.shopping-cart-btn');
    const shoppingCartView = document.querySelector('.shopping-cart-view');
    const hideShoppingCart = document.querySelector('.hide-shopping-cart-icon');

    cartShowBtn.addEventListener('click', () => {
        cartShowBtn.style.display = 'none';
        shoppingCartView.style.transform = `translateX(${0}%)`;
    });

    hideShoppingCart.addEventListener('click', () => {
        shoppingCartView.style.transform = `translateX(${115}%)`;
        cartShowBtn.style.display = 'flex';
    })

    productsWrapper.appendChild(randomProduct.productContainer);

})();
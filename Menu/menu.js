import getFullMenuObj from "../scripts/getFullMenuObj.js";
import createPageTitles from "../scripts/createPageTitles.js";
import createProductSpread from "../scripts/createProductSpread.js";
import createShoppingCartStructure from "../scripts/createShoppingCardStructure.js";
import createOrderItem from "../scripts/createOrderItem.js";
import addItemToStorage from "../scripts/addItemToStorage.js";
import refreshShoppingCart from "../scripts/refreshShoppingCart.js";
import calculateTotalBasketValue from "../scripts/calculateTotalBasketValue.js";
const menu = (() => {
    // Shopping cart transition
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
    });
    // Functions:
    createPageTitles();
    createProductSpread();
    createShoppingCartStructure();
    refreshShoppingCart();
    calculateTotalBasketValue();



})();
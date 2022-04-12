const menu = (() => {
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
})();
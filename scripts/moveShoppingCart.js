export default function moveShoppingCart() {
    const cartShowBtn = document.querySelector('.shopping-cart-btn');
    const shoppingCartView = document.querySelector('.shopping-cart-view');

    cartShowBtn.style.display = 'none';
    shoppingCartView.style.transform = `translateX(${0}%)`;
    
    setTimeout(() => {
        shoppingCartView.style.transform = `translateX(${115}%)`;
        cartShowBtn.style.display = 'flex';

    }, 2500);



}
export default function calculateTotalBasketValue() {
    let total = 0;
    const totalValueBigCart = document.querySelector('.total-value');
    const totalValueSmallCart = document.querySelector('.cart-total');
    const parsedStorage = JSON.parse(localStorage.shoppingCart);

    if (Object.keys(localStorage).length > 0) {
        for (const key in parsedStorage) {
            const element = parsedStorage[key];
            if(element.qty > 1){
                total += (element.price * element.qty);
            }else{
                total += element.price;
            };
        };
    };
    totalValueBigCart.textContent = `$${total.toFixed(2)}`;
    totalValueSmallCart.textContent = `$${total.toFixed(2)}`;
}
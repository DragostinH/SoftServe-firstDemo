import calculateTotalBasketValue from "./calculateTotalBasketValue.js";
import createBtn from "./createElementsFunctions/createBtn.js";
import createDiv from "./createElementsFunctions/createDiv.js";
import createP from "./createElementsFunctions/createParagraph.js";
import refreshShoppingCart from "./refreshShoppingCart.js";

export default function createOrderItem(name, price, qty) {
    const itemListCont = document.querySelector('.item-list-container');
    const orderEntry = createDiv('order-entry');
    const priceAndRemoveCont = createDiv('price-and-remove-container');
    const quantity = createP('item-list-qty');
    quantity.textContent = qty;
    const itemName = createP('item-list-product-name');
    itemName.textContent = name;
    const itemPrice = createP('item-list-price');
    itemPrice.textContent = `$${price}`;
    const removeBtn = createBtn('item-list-remove');

    removeBtn.addEventListener('click', ()=>{
        const parsedStorage = JSON.parse(localStorage.shoppingCart);
        if(name in parsedStorage){
            if(parsedStorage[name].qty > 1){
                parsedStorage[name].qty--;
            }else if(parsedStorage[name].qty === 1){
                delete parsedStorage[name];
                itemListCont.removeChild(orderEntry);
            }
        }
        localStorage.shoppingCart = JSON.stringify(parsedStorage);
        refreshShoppingCart();
        calculateTotalBasketValue();
    })
    orderEntry.appendChild(quantity);
    orderEntry.appendChild(itemName);
    orderEntry.appendChild(priceAndRemoveCont);
    priceAndRemoveCont.appendChild(itemPrice);
    priceAndRemoveCont.appendChild(removeBtn);

    return orderEntry;

}
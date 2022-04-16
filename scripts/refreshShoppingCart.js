import createOrderItem from "./createOrderItem.js";

export default function refreshShoppingCart(){
    const itemListCont = document.querySelector('.item-list-container');

    const parsedStorage = JSON.parse(localStorage.shoppingCart);
    
    while(itemListCont.hasChildNodes()){
        itemListCont.removeChild(itemListCont.firstChild);
    }
    for (const key in parsedStorage) {
        const element = parsedStorage[key];
        const orderItem = createOrderItem(element.name,
            element.price,
            element.qty);
        itemListCont.appendChild(orderItem);

    }
}
import createBtn from "./createElementsFunctions/createBtn.js";
import createDiv from "./createElementsFunctions/createDiv.js";
import createP from "./createElementsFunctions/createParagraph.js";

export default function createOrderItem(qty, name, price) {
    const orderEntry = createDiv('order-entry');
    const quantity = createP('item-list-qty');
    quantity.textContent = qty;
    const itemName = createP('item-list-product-name');
    itemName.textContent = name;
    const itemPrice = createP('item-list-price');
    itemPrice.textContent = price;
    const removeBtn = createBtn('item-list-remove');

    orderEntry.appendChild(quantity);
    orderEntry.appendChild(itemName);
    orderEntry.appendChild(itemPrice);
    orderEntry.appendChild(removeBtn);

    return orderEntry;
}
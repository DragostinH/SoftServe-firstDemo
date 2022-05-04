import createArticle from "./createElementsFunctions/createArticle.js";
import createBtn from "./createElementsFunctions/createBtn.js";
import createDiv from "./createElementsFunctions/createDiv.js";
import createParagraph from "./createElementsFunctions/createParagraph.js";


const createOrderSummary = (() => {
    const orderItemsContainer = document.querySelector('.order-items-container');
    const totalValueElement = document.querySelector('.total-value');
    let total = 0;
    const parsedStorage = JSON.parse(localStorage.shoppingCart);

    for (const key in parsedStorage) {
        if (Object.hasOwnProperty.call(parsedStorage, key)) {
            const element = parsedStorage[key];
            orderItemsContainer.appendChild(createOrderSummaryElement(element.qty, element.name, element.price, orderItemsContainer));
            total += (element.price * element.qty);
        }
    }
    
    totalValueElement.textContent += `$${total.toFixed(2)}`;

})();


function createOrderSummaryElement(qty, name, price, main) {
    const orderItemDiv = createDiv("order-item");
    const orderItemLeft = createDiv("order-item-left");
    const qtyP = createParagraph("order-summary-qty");
    qtyP.textContent = `${qty} x `;
    const itemName = createParagraph("order-summery-item-name");
    itemName.textContent = name.toUpperCase();
    const orderItemRight = createDiv("order-item-right");
    const itemPrice = createParagraph("order-summary-item-price");
    itemPrice.textContent = `$${price}`;
    const removeItem = createBtn("remove-item-summary");
    removeItem.textContent = "Remove";

    removeItem.addEventListener('click', () => {
        const parsedStorage = JSON.parse(localStorage.shoppingCart);
        if (name in parsedStorage) {
            if (parsedStorage[name].qty > 1) {
                parsedStorage[name].qty--;
            } else if (parsedStorage[name].qty === 1) {
                delete parsedStorage[name];
                main.removeChild(orderItemDiv)
            }
        }
        calculateTotal(price)
        localStorage.shoppingCart = JSON.stringify(parsedStorage);

    })
    orderItemDiv.appendChild(orderItemLeft);
    orderItemDiv.appendChild(orderItemRight);
    orderItemLeft.appendChild(qtyP);
    orderItemLeft.appendChild(itemName);
    orderItemRight.appendChild(itemPrice);
    orderItemRight.appendChild(removeItem);

    return orderItemDiv;

}
function calculateTotal(amountToSubtract) {
    const totalEl = document.querySelector('.total-value');
    let currTotal = totalEl.textContent.split(" ")[1].split("$")[1] * 1;
    let newTotal = currTotal - amountToSubtract
    totalEl.textContent = `Total: $${newTotal.toFixed(2)}`
}
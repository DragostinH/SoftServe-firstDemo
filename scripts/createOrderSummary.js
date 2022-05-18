import createBtn from "./createElementsFunctions/createBtn.js";
import createDiv from "./createElementsFunctions/createDiv.js";
import createParagraph from "./createElementsFunctions/createParagraph.js";

const parsedStorage = JSON.parse(localStorage.shoppingCart);
const totalValueElement = document.querySelector('.total-value');
const orderItemsContainer = document.querySelector('.order-items-container');
let total = 0;


const createOrderSummary = (() => {

    for (const key in parsedStorage) {
        if (Object.hasOwnProperty.call(parsedStorage, key)) {
            const element = parsedStorage[key];
            orderItemsContainer.appendChild(
                createOrderSummaryElement(
                    element.qty,
                    element.name,
                    element.price,
                    orderItemsContainer));
            total += (element.price * element.qty);
        };
    };
    totalValueElement.textContent += `$${total.toFixed(2)}`;

})();




function createOrderSummaryElement(qty, name, price, main) {

    const orderItemDiv = createDiv("order-item");
    const orderItemLeft = createDiv("order-item-left");
    const qtyP = createParagraph("order-summary-qty");
    const itemName = createParagraph("order-summery-item-name");
    const orderItemRight = createDiv("order-item-right");
    const itemPrice = createParagraph("order-summary-item-price");
    const removeItem = createBtn("remove-item-summary");

    qtyP.textContent = `${qty} x `;
    itemName.textContent = name.toUpperCase();
    itemPrice.textContent = `$${price}`;
    removeItem.textContent = "Remove";

    removeItem.addEventListener('click', () => {
        if (parsedStorage[name].qty > 1) {
            parsedStorage[name].qty--;
            refreshSummaryPage();
        } else if (parsedStorage[name].qty === 1) {
            delete parsedStorage[name];
            main.removeChild(orderItemDiv);
        };
        calculateTotal(price);
        localStorage.shoppingCart = JSON.stringify(parsedStorage);
    });

    if (name === "click&collect discount") {
        orderItemDiv.appendChild(orderItemLeft);
        orderItemDiv.appendChild(orderItemRight);
        orderItemLeft.appendChild(qtyP);
        orderItemLeft.appendChild(itemName);
        orderItemRight.appendChild(itemPrice);

        itemPrice.classList.add('discount-value');

        orderItemDiv.classList.add('discount-element');
        return orderItemDiv;

    }

    orderItemDiv.appendChild(orderItemLeft);
    orderItemDiv.appendChild(orderItemRight);
    orderItemLeft.appendChild(qtyP);
    orderItemLeft.appendChild(itemName);
    orderItemRight.appendChild(itemPrice);
    orderItemRight.appendChild(removeItem);

    return orderItemDiv;
};

function calculateTotal(amountToSubtract) {
    let currTotal = totalValueElement.textContent.split(" $")[1] * 1;
    let newTotal = currTotal - amountToSubtract;
    totalValueElement.textContent = `Total: $${newTotal.toFixed(2)}`;
};

function refreshSummaryPage() {
    while (orderItemsContainer.hasChildNodes()) {
        orderItemsContainer.removeChild(orderItemsContainer.firstChild);
    };

    for (const key in parsedStorage) {
        const element = parsedStorage[key];
        const orderItem = createOrderSummaryElement(
            element.qty,
            element.name,
            element.price,
            orderItemsContainer);
        orderItemsContainer.appendChild(orderItem);
    };
};

function addDiscount(orderValue) {
    orderItemsContainer.appendChild(createOrderSummaryElement(
        1,
        "click&collect discount",
        `${-(orderValue * 0.1).toFixed(2)}`));

    totalValueElement.textContent = `Total: $${(orderValue * 0.9).toFixed(2)}`
}

document.querySelector('#clickCollect-option').addEventListener('click', () => {
    if (document.querySelector('.discount-element') === null) {
        let orderValue = totalValueElement.textContent.split(" ")[1].split("$")[1] * 1;
        addDiscount(orderValue * 1);
    };
});

document.querySelector('#homeDelivery-option').addEventListener('click', () => {
    removeDiscount();
});

function removeDiscount() {
    let discountValue = document.querySelector('.discount-value');
    if (discountValue !== null) {
        orderItemsContainer.removeChild(document.querySelector('.discount-element'));
        totalValueElement.textContent = `Total: $${total.toFixed(2)}`
    }
}




import createDiv from "./createElementsFunctions/createDiv.js"
import createP from "./createElementsFunctions/createParagraph.js";
import createImg from "./createElementsFunctions/createImg.js";
import createBtn from "./createElementsFunctions/createBtn.js";
import createOrderItem from "./createOrderItem.js";
import addItemToStorage from "./addItemToStorage.js";
import refreshShoppingCart from "./refreshShoppingCart.js";
import calculateTotalBasketValue from "./calculateTotalBasketValue.js";
import moveShoppingCart from "./moveShoppingCart.js";

export default function createProductElement(title, img, descr, price) {
    const productContainer = createDiv('product-container');
    const productMidContainer = createDiv('product-mid-container');
    const productBottomContainer = createDiv('product-bottom-container');

    const productTitle = createP('product-title');
    const productImg = createImg('product-img');
    const productDesc = createP('product-description');

    const productPrice = createP('product-price');
    const productBtnContainer = createDiv('product-btn-container');
    const addToBstkCont = createDiv('add-to-bskt-btn-container');
    const addToBsktBtn = createBtn('add-to-basket-btn product-btn');
    const addBtnIcon = createImg('add-btn-icon');

    productTitle.textContent = title;
    productImg.src = `${img}`;
    productDesc.textContent = descr;
    productPrice.textContent = `$${price}`;
    addToBsktBtn.textContent = 'ADD';
    addBtnIcon.src = `${"./img/shopping-cart-icon.png"}`;


    addToBsktBtn.addEventListener('click', () => {
        const orderObj = {
            name: title,
            price: price,
            qty: 1
        };
        addItemToStorage(orderObj);
        refreshShoppingCart();
        moveShoppingCart();
        calculateTotalBasketValue();
    });

    // Appends
    productContainer.appendChild(productTitle);
    productContainer.appendChild(productMidContainer);
    productContainer.appendChild(productBottomContainer);

    productMidContainer.appendChild(productImg);
    productMidContainer.appendChild(productDesc);

    productBottomContainer.appendChild(productPrice);
    productBottomContainer.appendChild(productBtnContainer);

    productBtnContainer.appendChild(addToBstkCont);

    addToBstkCont.appendChild(addToBsktBtn);
    addToBstkCont.appendChild(addBtnIcon);


    return { productContainer };

}
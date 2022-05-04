import createArticle from "./createElementsFunctions/createArticle";
import createDiv from "./createElementsFunctions/createDiv";
import createParagraph from "./createElementsFunctions/createParagraph";


const createOrderSummary = (() => {
    const orderSummaryMain = document.querySelector('.order-summary');
    const parsedStorage = JSON.parse(localStorage.shoppingCart);
    console.log(parsedStorage);
    // <article class="order-items-container">
    //         <div class="order-item">
    //             <div class="order-item-left">
    //                 <p>1 x </p>
    //                 <p>Item name</p>
    //             </div>
    //             <div class="order-item-right">
    //                 <p>price</p>
    //                 <button>X</button>
    //             </div>
    //         </div>
    //     </article>
})();

createOrderSummaryElement = (qty, name, price) => {
    const articleContainer = createArticle("order-items-container");
    const orderItemDiv = createDiv("order-item");
    const orderItemLeft = createDiv("order-item-left");
    const qtyP = createParagraph();
    const itemName = createParagraph();
    const orderItemRight = createDiv("order-item-right");
    const itemPrice = createParagraph
}
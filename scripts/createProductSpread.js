import getFullMenuObj from "./getFullMenuObj.js";

export default function createProductSpread(){
     // Product elements:
    const menu = {
        entrees: getFullMenuObj().entrees,
        sushi: getFullMenuObj().sushi,
        drinks: getFullMenuObj().drinks
    }
    const arrCategories = Array.from(document.querySelectorAll('.li-active'));
    const selectedCategory = arrCategories[0].textContent.toLowerCase();
    const selectedSubCategory = arrCategories[1].textContent.toLowerCase().split(' ').join('_');
    const currentProductsObj = menu[selectedCategory][selectedSubCategory];

    const productsWrapper = document.querySelector('.products');
    for (const key in currentProductsObj) {
        if (Object.hasOwnProperty.call(currentProductsObj, key)) {
            productsWrapper.appendChild(currentProductsObj[key].productContainer);
        }
    }
}
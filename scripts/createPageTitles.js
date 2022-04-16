import createDiv from "./createElementsFunctions/createDiv.js";
import createH1 from "./createElementsFunctions/createH1.js";
import createH4 from "./createElementsFunctions/createH4.js";

export default function createPageTitles() {
    const titlesArray = Array.from(document.querySelectorAll('.li-active'));
    const category = titlesArray[0].textContent;
    const subCategory = titlesArray[1].textContent;
    const productsItemsContainer = document.querySelector('.products-items-container');

    const selectedCategoryContainer = createDiv('selected-category');
    const categoryTitle = createH1('category-title');
    const subCategoryTitle = createH4('sub-category');
    
    categoryTitle.textContent = category;
    subCategoryTitle.textContent = subCategory;
    // Appends---
    productsItemsContainer.insertBefore(selectedCategoryContainer
        , productsItemsContainer.firstChild);
    selectedCategoryContainer.appendChild(categoryTitle)
    selectedCategoryContainer.appendChild(subCategoryTitle);
}
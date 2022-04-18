export default function createShoppingCartStructure() {
    const myStorage = window.localStorage;
    const shopCartStructure = {
    };
    if (Object.keys(myStorage).length === 0) {
        myStorage.setItem('shoppingCart', shopCartStructure);
    } else if (Object.keys(myStorage).length > 0) {
        if (!('shoppingCart' in myStorage)) {
            myStorage['shoppingCart'] = JSON.stringify(shopCartStructure);
        }
    }
}
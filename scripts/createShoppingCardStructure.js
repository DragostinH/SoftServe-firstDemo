export default function createShoppingCartStructure() {
    const myStorage = window.localStorage;
    const shopCartStructure = [{
        qty:1,
        name:'aki',
        price:18.99
    }];
    const stingified = JSON.stringify(shopCartStructure);
    myStorage.setItem('shoppingCart', stingified);
}
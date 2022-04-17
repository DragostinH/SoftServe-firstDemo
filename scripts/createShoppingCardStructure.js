export default function createShoppingCartStructure() {
    const myStorage = window.localStorage;
    const parsedStorage = JSON.parse(JSON.stringify(myStorage));
    if (Object.keys(myStorage).length === 0) {
        const shopCartStructure = {
        };
        const stingified = JSON.stringify(shopCartStructure);
        myStorage.setItem('shoppingCart', stingified);
    } else if (Object.keys(myStorage) > 0) {
        if (!'shoppingCart' in myStorage) {
            const shopCartStructure = {
            };
            const stingified = JSON.stringify(shopCartStructure);
            myStorage.setItem('shoppingCart', stingified);
        }
    }
}
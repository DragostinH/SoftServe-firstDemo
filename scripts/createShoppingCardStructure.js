export default function createShoppingCartStructure() {
    const myStorage = window.localStorage;
    if(Object.keys(myStorage).length === 0){
        const shopCartStructure = {
        };
        const stingified = JSON.stringify(shopCartStructure);
        myStorage.setItem('shoppingCart', stingified);

    }else{
        console.log('There is storage data');
    }
}
export default function addItemToStorage(item) {
    const parsedStorage = JSON.parse(localStorage.shoppingCart);

    if (item.name in parsedStorage) {
        parsedStorage[item.name].qty++;
    } else {
        parsedStorage[item.name] = item;
    }

    localStorage.shoppingCart = JSON.stringify(parsedStorage);
}
export default function createH1(className = '') {
    const h1 = document.createElement('h1');
    const arr = className.split(' ');
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        h1.classList.add(`${element}`);
    }

    return h1;
}
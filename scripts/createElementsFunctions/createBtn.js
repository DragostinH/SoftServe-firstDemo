export default function createBtn(className = '') {
    const btn = document.createElement('button');
    const arr = className.split(' ');
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        btn.classList.add(`${element}`);
    }

    return btn;
}
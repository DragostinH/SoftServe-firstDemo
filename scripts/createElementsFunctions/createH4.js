export default function createH4(className = '') {
    const h4 = document.createElement('h4');
    if(className!==''){
        const arr = className.split(' ');
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            h4.classList.add(`${element}`);
        }
    }

    return h4;
}
export default function createParagraph(className = '') {
    const paragraph = document.createElement('p');
    const arr = className.split(' ');
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        paragraph.classList.add(`${element}`);
    }

    return paragraph;
}
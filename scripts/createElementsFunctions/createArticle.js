export default function createArticle(className = '') {
    const article = document.createElement('article');
    if(className!==''){
        const arr = className.split(' ');
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            article.classList.add(`${element}`);
        }
    }

    return article;
}
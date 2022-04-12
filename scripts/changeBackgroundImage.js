import getRandomNum from "./getRandomNum.js";

export async function changeBackgroundImage(element, keyword = 'sushi') {
    // Unsplash API Key:
    //  hgdmiUvKsmbNHKlCic3DKw3NL-6h-b3xalEMQrfPfkY

    // Fetch image from Unsplash
    // https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id={API KEY}

    // const get = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${'sushi'}&client_id={API KEY}`)

    try {
        const randomImageNum = getRandomNum(9);
        const randomPageNum = getRandomNum(20);

        const image = await fetch(`https://api.unsplash.com/search/photos?page=${randomPageNum}&query=${keyword}&client_id=z6n1MJxv6cPcsv2k2k_57DD3etDzVh517LMv1Bwl0rI`);
        const imageList = await image.json();
        element.style.backgroundImage = `url(${imageList.results[randomImageNum].urls.regular})`;

    } catch (error) {
        console.error("Unsplash didn't work as planned.")
    }
}
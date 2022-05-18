import { changeBackgroundImage } from "./changeBackgroundImage.js";


const indexPage = (() => {
    // translate value for gallery slider
    let translateValue = 0;

    const imageSliderContainer = document.querySelector('.image-slider-container');
    const galleryContainer = document.querySelector('.gallery-container');
    const header = document.querySelector('header');
    changeBackgroundImage(header);


    const leftBtn = document.querySelector('.left-img')
    const rightBtn = document.querySelector('.right-img')

    const slide = document.querySelectorAll('.slide');
    const galleryArr = Array.from(slide);

    // Gallery slider -------------
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 1027) {
            imageSliderContainer.classList.remove('hidden');
            galleryContainer.classList.add('hidden');
        } else {
            imageSliderContainer.classList.add('hidden');
            galleryContainer.classList.remove('hidden');
        }
    });

    leftBtn.addEventListener('click', () => {
        translateValue += 100;
        if (translateValue >= 100) {
            translateValue = -800;
        }

        galleryArr.forEach(e => {
            e.style.transform = `translateX(${translateValue}%)`;
        });
    });

    rightBtn.addEventListener('click', () => {
        translateValue -= 100;

        if (translateValue <= -900) {
            translateValue = 0;
        }

        galleryArr.forEach(e => {
            e.style.transform = `translateX(${translateValue}%)`;
        });
    });

})();
const carousel = () => {
    const serviceCarouselBlock = document.querySelector('.services-carousel');
    const arrowRight = document.querySelector('.arrow-right');
    const arrowLeft = document.querySelector('.arrow-left');
    
    const turnRight = () =>{
        const itemList = serviceCarouselBlock.querySelectorAll('.col-sm-6');
        itemList[5].toggleAttribute('hidden');
        itemList[2].toggleAttribute('hidden');
        itemList[5].remove();
        itemList[0].before(itemList[5]);
    };

    const turnLeft = () =>{
        const itemList = serviceCarouselBlock.querySelectorAll('.col-sm-6');
        itemList[0].toggleAttribute('hidden');
        itemList[3].toggleAttribute('hidden');
        itemList[0].remove();
        itemList[5].after(itemList[0]);
    };

    arrowRight.addEventListener('click', turnRight);
    arrowLeft.addEventListener('click', turnLeft);
};

export default carousel;
const slider = () => {
    const topSlider = document.querySelector('.top-slider');
    const slides = topSlider.querySelectorAll('.item');
    const textCells = topSlider.querySelectorAll('.table');
    let i = 0;

    const sliderInterval = setInterval(() => {
        let timerId = setTimeout(() => {
            textCells[0].classList.toggle('active');
            textCells[1].classList.toggle('active');
            textCells[2].classList.toggle('active');
            timerId = setTimeout(() => {
                slides[i].toggleAttribute('hidden');
                i++;
                if (i >= 2) {
                    i = 0;
                }
            }, 1500);

        }, 1000);
    }, 3000);


};

export default slider;
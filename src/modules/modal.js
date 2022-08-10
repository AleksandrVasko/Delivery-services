import {
    animate
} from "./helper";

const modal = () => {
    const serviceBlock = document.querySelector('.services-elements');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal-callback');
    const closeBtn = document.querySelector('.modal-close');
    const header = document.querySelector('.header');
    const callbackBtn = header.querySelector('.callback-btn');
    const buttonServices = document.querySelector('.button-services');
    let bounceEaseOut;

    const animation = () => {
        modalOverlay.style.display = 'block';
        modal.style.display = 'block';
        animate({
            duration: 1500,
            timing: bounceEaseOut,
            draw: function (progress) {
                modal.style.left = progress * 50 + '%';
            }
        });
    };

    const makeEaseOut = (timing) => {
        return function (timeFraction) {
            return 1 - timing(1 - timeFraction);
        };
    };

    const bounce = (timeFraction) => {
        for (let a = 0, b = 1; 1; a += b, b /= 2) {
            if (timeFraction >= (7 - 4 * a) / 11) {
                return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
            }
        }
    };

    const showModal = () => {
        callbackBtn.addEventListener('click', (e) => {
            bounceEaseOut = makeEaseOut(bounce);
            if (e.target.classList.contains('fancyboxModal')) {
                animation();
            } else if (e.target.classList.contains('modal-close')) {

            }
        });
        serviceBlock.addEventListener('click', (e) => {
            bounceEaseOut = makeEaseOut(bounce);
            if (e.target.classList.contains('fancyboxModal')) {
                animation();
            } else if (e.target.classList.contains('modal-close')) {

            }
        });
        buttonServices.addEventListener('click', (e) => {
            bounceEaseOut = makeEaseOut(bounce);
            if (e.target.classList.contains('fancyboxModal')) {
                animation();
            } else if (e.target.classList.contains('modal-close')) {

            }
        });
    };

    const closeModal = () => {
        modalOverlay.addEventListener('click', (e) => {
            if (!e.target.closest('.modal-callback')) {
                modal.style.display = 'none';
                modalOverlay.style.display = 'none';
            }
        });
        closeBtn.addEventListener('click', (e) => {
            modal.style.display = 'none';
            modalOverlay.style.display = 'none';
        });
    };


    showModal();
    closeModal();
};

export default modal;
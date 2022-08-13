const upScroller = () => {
    const goTopBtn = document.querySelector('.up');

    const trackScroll = () => {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.removeAttribute('hidden', '');
        }
        if (scrolled < coords) {
            goTopBtn.setAttribute('hidden', '');
        }
    };

    const backToTop = () => {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    };

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
};

export default upScroller;
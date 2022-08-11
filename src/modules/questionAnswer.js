const questionAnswer = () => {
    const accordeon = document.querySelector('.accordeon');
    const elementsList = accordeon.querySelectorAll('.element-content');
    const elements = accordeon.querySelectorAll('.element');
    

    accordeon.addEventListener('click', (e) => {
        if(e.target.closest('.element')){
            const content = e.target.closest('.element').querySelector('.element-content');

        if (content.style.getPropertyValue("display") === "block") {
            content.style.display = "none";
        } else {
            elements.forEach(el => {
                if(el.classList.contains('active')) {
                    el.classList.toggle('active');
                    el.querySelector('.element-content').style.display ="none";
                }
            });

            content.style.display = "block";
        }
        e.target.closest('.element').classList.toggle('active');
        }
    });
};

export default questionAnswer;
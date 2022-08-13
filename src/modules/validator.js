const validator = () => {
    const modal = document.querySelector('.modal-callback');
    modal.addEventListener('input', (e) => {
        if (e.target.getAttribute('name') === 'tel') {
            e.target.value = e.target.value.replace(/[^\d-+-]/, '').replace(/^\s*/g, "");
        }
        if (e.target.getAttribute('name') === 'fio') {
            e.target.value = e.target.value.replace(/[^А-яA-z ]/, '').replace(/^\s*/g, "");
        }
    });
};

export default validator;
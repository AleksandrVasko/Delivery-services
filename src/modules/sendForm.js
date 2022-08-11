const sendForm = () => {
    const form = document.querySelector('form');
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка';
    let successText = 'Спасибо! Наш менеджер свяжется с вами!';

    const sendData = async (data)  => {
        if (data.fio.length > 1 && data.tel.length > 6) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await res.json();
        } else {
            successText = 'Данные не подходят, для отправки';
        }
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('.form-group>input');
        const formData = new FormData(form);
        const formBody = {};
        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            if (val != '') {
                formBody[key] = val;
            }
        });

        sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText;
                formElements.forEach(input => {
                    console.log(input);
                    input.value = '';
                });
            })
            .catch(error => {
                statusBlock.textContent = errorText;
            });
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitForm();
    });
};

export default sendForm;
const form = document.getElementById('userForm');

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('https://script.google.com/macros/s/AKfycbwYBSPnk5J-UK2D5CcDPnCPyv93LcoKOTNLh-D5Vw0RHhEy-oDRqV2R6ZX6ajeacWuw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(() => {
        alert('Form submitted successfully!');
        form.reset();
    }).catch(error => {
        alert('There was an error submitting the form.');
        console.error(error);
    });
});

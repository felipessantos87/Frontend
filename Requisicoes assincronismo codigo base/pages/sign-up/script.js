const form = document.querySelector('#form-sign-up');
const inputName = document.querySelector('#name-sign-up');
const inputEmail = document.querySelector('#email-sign-up');
const inputPassword = document.querySelector('#password-sign-up');
const btnCancel = document.querySelector('#form-sign-up .btn-cancel');

async function registerUser() {
try {
    const response = await api.post('/usuarios', {
        nome: inputName.value,
        email: inputEmail.value,
        senha: inputPassword.value
    });

    if (response.status === 200) {
        window.location.href = '../../index.html'
    }
} catch (error) {
    console.log(error.response.data);
}
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!inputName.value) {
        alert("Preencha o campo nome!");
        return;
    }
    
    if (!inputEmail.value) {
        alert("Preencha o campo Email!");
        return;
    }

    if (!inputPassword.value) {
        alert("Preencha o campo senha!");
        return;
    }

    registerUser();

});

btnCancel.addEventListener('click', () => {
    inputName.value = '';
    inputEmail.value = '';
    inputPassword.value = '';
});
const form = document.querySelector('form');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const btnSign = document.querySelector('.sign');
const btnDelete = document.querySelector('.delete');

btnSign.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!inputName.value) {
        alert('Preencha o campo Nome !')
        return;
    }
    if (!inputEmail.value) {
        alert('Preencha o campo E-mail !')
        return;
    }
    if (!inputPassword.value) {
        alert('Preencha o campo Senha !')
        return;
    }
    alert('Seu cadastro foi realizado com sucesso!')

    window.location = '../../index.html'
});

btnDelete.addEventListener('click' , (event) => {
    alert('Cadastro cancelado, você está sendo redirecionando a tela de login!')
    window.location = '../../index.html'
});



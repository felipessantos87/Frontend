const form = document.querySelector('form');
const inputEmail = document.querySelector('#input-email')
const inputPassword = document.querySelector('#input-password')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!inputEmail.value || !inputPassword.value) {
        alert('Você precisa preencher todos os campos!');
        return;
    }
    window.location = "./pages/main/index.html"
});
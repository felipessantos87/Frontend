const button = document.querySelector('button');
const h1 = document.querySelector('h1');

//button.addEventListener('click', () => {
//    h1.textContent = 'Usuário salvo com sucesso';
//});

function confirmSave() {
    h1.textContent = 'Usuário salvo com sucesso';
}

button.addEventListener('click', confirmSave);

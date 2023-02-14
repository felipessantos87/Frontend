const formRegister = document.querySelector("form");
const inputEmail = document.querySelector('#input-email');
const spanEmail = document.querySelector('#span-email');

formRegister.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (inputEmail.value.indexOf("gmail") === -1) {
        console.log('E-mail inválido');
        inputEmail.classList.toggle("error");
        spanEmail.textContent = "E-mail inválido";
        return;
    }
    inputEmail.classList.toggle("sucess");
     spanEmail.textContent = "E-mail válido";
});
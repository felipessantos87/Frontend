const form = document.querySelector("form");
const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const inputConfirmPassword = document.querySelector("#input-confirm-password");
const accepTerms = document.querySelector("#accept");
const strong = document.querySelector("strong");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    strong.textContent = "";

    if (inputName.value.length < 10) {
        strong.textContent = "O nome precisa de mais de 10 caracteres!";
        return;
    }
    if (inputEmail.value.indexOf("hotmail") === -1) {
        strong.textContent = "Só aceitamos e-mails da hotmail!";
        return;
    }

    if (inputPassword.value !== inputConfirmPassword.value) {
        strong.textContent = "As senhas não correspondem!";
        return;
    }

    if (!accepTerms.checked) {
        strong.textContent = "Você precisa aceitar os termos!";
    }

    const data = {
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value,
        accepTerms: true,
    };
    console.log(data);

    strong.textContent = 'Parabéns, cadastro efetuado com sucesso!'
});
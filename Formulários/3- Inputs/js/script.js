const form = document.querySelector("form");
const radios = document.getElementsByName("period");
const inputEmail = document.querySelector('#input-email');

//for (const radio of radios) {
//    radio.addEventListener("change", (event) => {
//        console.log(`O periodo selecionado é o ${event.target.value}`);
//    });
//};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (inputEmail.value.indexOf("gmail") === -1) {
        console.log ("E-mail inválido")
    }

    for (const radio of radios) {
        if (radio.checked) {
            console.log(`O periodo selecionado é o ${radio.value}`);
        }      
    } 
});

inputEmail.addEventListener('keyup', (event) => {
    if (event.target.value.indexOf("gmail") === -1) {
        console.log("E-mail inválido");
        return;
    }
    console.log("E-mail válido")

});
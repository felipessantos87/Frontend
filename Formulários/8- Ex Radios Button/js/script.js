const radios = document.getElementsByName("type");
const inputPj = document.querySelector("#input-cnpj");
const inputCpf = document.querySelector("#input-cpf")

for (const radio of radios) {
    radio.addEventListener("change" , (event) => {
        if (event.target.value === 'company') {
            inputPj.classList.value = "show";
            inputCpf.classList.value = "hide";
            return;
        }
        inputPj.classList.value = "hide";
        inputCpf.classList.value = "show";
});
}

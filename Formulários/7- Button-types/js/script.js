const input = document.querySelector("input");
const btnClear = document.querySelector('#btn-clear');

btnClear.addEventListener("click", () => {
    input.value = "";
})
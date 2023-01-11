import {Api} from "./api.js";

let select = document.getElementById("selectBusca")
let btnDeletar = document.getElementById("excluir")

async function procurar() {
    const card = await Api.listarClientes()
    card.forEach(element => {
    trazer(element)
});
}
procurar()

function trazer(element) {
    const {
    id,
    nome,
    } = element

let option = document.createElement("option")
    option.label = nome
    option.value = id

select.appendChild(option)
}
btnDeletar.addEventListener("click", async (event) => {
    event.preventDefault()

await Api.deletarCliente(select.value)
})
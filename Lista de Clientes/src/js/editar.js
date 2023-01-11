import {Api} from "./api.js";

let select = document.getElementById("selectPesquisar")
let btnLocalizar = document.getElementById("btnLocalizar")
let btnAtualizar = document.getElementById("atualizar")
let nomeInsert = document.getElementById('nome')
let emailInsert = document.getElementById('email')
let numeroInsert = document.getElementById('numero')
let cpfInsert = document.getElementById('cpf')
let sexoInsert = document.getElementById('sexo')
let cepInsert = document.getElementById('cep')
let ruaInsert = document.getElementById('rua')
let numeroEnderecoInsert = document.getElementById('numeroEndereco')
let bairroInsert = document.getElementById('bairro')
let cidadeInsert = document.getElementById('cidade')
let estadoInsert = document.getElementById('estado')

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
btnLocalizar.addEventListener('click', async (event) => {
    event.preventDefault()
    if (select.value) {
    select.parentElement.lastElementChild.innerText = ""

let {
    cpf,
    email,
    nome,
    endereco,
    idade,
    sexo
} = await Api.buscarCliente(select.value)

    nomeInsert.value = nome
    emailInsert.value = email
    numeroInsert.value = idade
    cpfInsert.value = cpf
    sexoInsert.value = sexo
    cepInsert.value = endereco.cep
    ruaInsert.value = endereco.rua
    numeroEnderecoInsert.value = endereco.numero
    bairroInsert.value = endereco.bairro
    cidadeInsert.value = endereco.cidade
    estadoInsert.value = endereco.estado
} else {
    select.parentElement.lastElementChild.innerText = "Selecione um cliente primeiro"
}
})
btnAtualizar.addEventListener("click", async (event) => {
    event.preventDefault()

const dados = {
    "nome": nomeInsert.value,
    "email": emailInsert.value,
    "sexo": sexoInsert.value,
    "idade": parseInt(numeroInput.value),
    "cpf": cpfInsert.value,
    "endereco": {
    "estado": estadoInsert.value,
    "cidade": cidadeInsert.value,
    "bairro": bairroInsert.value,
    "numero": numeroEnderecoInsert.value,
    "rua": ruaInsert.value,
    "cep": cepInsert.value
}
}
    await Api.editarCliente(dados, select.value)
})
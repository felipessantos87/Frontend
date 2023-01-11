import {Api} from "./api.js";

class inserirNovo {
    static usuario() {
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
    let bntCadastroNovo = document.querySelector(".cadastro")
        bntCadastroNovo.addEventListener('click', async (event) => {
        event.preventDefault()
const dados = {
    "nome": nomeInsert.value,
    "email": emailInsert.value,
    "sexo": sexoInsert.value,
    "idade": parseInt(numeroInsert.value),
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
await Api.cadastrarCliente(dados).then(res => {
    if (res.error) {
        bntCadastroNovo.parentElement.lastElementChild.innerText = "Todos os campos são de preenchimento obrigatório"
        }
    })
})
}
}
inserirNovo.usuario()
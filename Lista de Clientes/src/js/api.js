class Api {
    static baseUrl = "https://atividade-api-clientes.herokuapp.com/clientes"
    static headers = {
        "Content-Type": "application/json",
}
    static async listarClientes() {
        const catalogar = await fetch(`${this.baseUrl}`)
            .then((res) => res.json())
            .then((res) => res)
            .catch((erro) => console.log(erro))

    return catalogar
}
    static async cadastrarCliente(data) {
        const inscrever = await fetch(`${this.baseUrl}`, {
            headers: this.headers,
            method: "POST",
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((res) => {
            window.location.assign('../../index.html')
    return res
        })
            .catch((erro) => console.log(erro))
    return inscrever
}
    static async buscarCliente(id) {
        const usuario = await fetch(`${this.baseUrl}/${id}`, {
            headers: this.headers,
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => res)
            .catch((erro) => console.log(erro))
    return usuario
}
    static async editarCliente(data, id) {
        const edite = await fetch(`${this.baseUrl}/${id}`, {
            headers: this.headers,
            method: "PATCH",
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((res) => {
            window.location.assign('../../index.html')
    return res
        })
            .catch((erro) => console.log(erro))
    return edite
}
    static async deletarCliente(id) {
        const excluir = await fetch(`${this.baseUrl}/${id}`, {
            headers: this.headers,
            method: "DELETE",
        })
            .then((res) => {
            window.location.assign('../../index.html')
    return res
        })
            .catch((erro) => console.log(erro))

    return excluir
}
}
export {Api}
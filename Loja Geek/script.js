let listPainting = []
let listFigure = []

function createPaintingItem(imagemProduto, nomeProduto, valorProduto) {
    let item = {
        imagem:imagemProduto,
        nome:nomeProduto,
        valor:valorProduto
    }
    listPainting.push(item)
    return listPainting
}

createPaintingItem('./assets/img/painting/clock.jpg','Pintura Apple Watch','R$ 22,00')
createPaintingItem('./assets/img/painting/gamepad.jpg','Pintura Joystick','R$ 35,00')
createPaintingItem('./assets/img/painting/personagem.jpg','Pintura StarWars C-3PO','R$ 23,00')

for(let i = 0; i<3;i++){
    createPaintingItem('./assets/img/sem imagem.jpg','Nome do item','Valor do item')
}

function createActionItem(imagemProduto, nomeProduto, valorProduto, ) {
    let item = {
        imagem:imagemProduto,
        nome:nomeProduto,
        valor:valorProduto
    }
    listFigure.push(item)
    return listFigure
}

createActionItem('./assets/img/actions/animewoman.jpg','Action figure Anime Covers','R$ 88,00')
createActionItem('./assets/img/actions/dragonballpersonagem.jpg','Action Figure Goku','R$ 189,00')
createActionItem('./assets/img/actions/starwarspersonagem.jpg','Action Figure Baby Yoda','R$ 175,00')

for(let i = 0; i<3;i++){
    createActionItem('./assets/img/sem imagem.jpg','Nome do item','Valor do item')
}

let secaoListPainting = document.getElementsByClassName('secaoPainting')[0]
let secaoListFigures = document.getElementsByClassName('secaoFigure')[0]

function listarItem (listaProduto, seletor){
    for (let i = 0; i<listaProduto.length;i++){
        criarItem(listaProduto[i], seletor)
    }
}

function criarItem (objeto, seletor){
    let elementoLista = document.createElement('li')
    let imagem = document.createElement('img')
    let nome = document.createElement('h2')
    let valor = document.createElement('p')
    elementoLista.className = 'produto'
    imagem.className = 'imagemProduto'
    imagem.src = objeto.imagem
    nome.className = 'nomeProduto'
    nome.innerText = objeto.nome
    valor.className = 'valorProduto'
    valor.innerText = objeto.valor
    elementoLista.appendChild(imagem)
    elementoLista.appendChild(nome)
    elementoLista.appendChild(valor)
    if(seletor.toLowerCase() == 'painting'.toLowerCase()){
        secaoListPainting.appendChild(elementoLista)
    }if(seletor.toLowerCase() == 'figure'.toLowerCase()){
        secaoListFigures.appendChild(elementoLista)
    }
}

listarItem(listPainting, 'painting')
listarItem(listFigure, 'figure')
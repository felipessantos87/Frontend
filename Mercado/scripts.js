const secaoFruitas = document.querySelector(".fruits")
const secaoDrinks = document.querySelector(".drinks")
const secaoHygiene = document.querySelector(".hygiene")
secaoFruitas.appendChild(document.createElement("ul"))
secaoDrinks.appendChild(document.createElement("ul"))
secaoHygiene.appendChild(document.createElement("ul"))


function listandoProdutos (listarProdutos) {

    for (let i = 0; i < listarProdutos.length; i++) {
        let produto = listarProdutos[i]
        let card = createCard (produto)
        let categoria = listarProdutos[i].category.toLowerCase()

        if (categoria == "frutas") {
            secaoFruitas.querySelector("ul").appendChild(card)
        } else if (categoria == "bebidas" ) {
            secaoDrinks.querySelector("ul").appendChild(card)
        } else if (categoria == "higiene") {
            secaoHygiene.querySelector("ul").append(card)
        }
    }

}
listandoProdutos(products)

function createCard (objProduto) {
    const productCard = document.createElement("li")
    const productImg = document.createElement("img")
    const productMain = document.createElement("main")
    const productTitle = document.createElement("h1")
    const productCategory = document.createElement("h5")
    const productPrice = document.createElement("strong")

    productCard.classList.add("product")
    productImg.classList.add("product-img")
    productMain.classList.add("product-main")
    productTitle.classList.add("product-title")
    productCategory.classList.add("product-category")
    productPrice.classList.add("product-price")

    objProduto.imageDescription = `${objProduto.title}, ${objProduto.category}`
    productImg.setAttribute("alt", `${objProduto.imageDescription}`)
    productImg.setAttribute("title", `${objProduto.imageDescription}`)

    if (objProduto.image == undefined) {
        productImg.src = `img/products/no-img.svg`
    } else {
        productImg.src = objProduto.image
    }

    productTitle.innerText = objProduto.title
    productCategory.innerText = objProduto.category
    productPrice.innerText = `R$ ${objProduto.price.toFixed(2).replace(".", ",")}`

    productMain.append(productTitle, productCategory, productPrice)
    productCard.append(productImg ,productMain)

    return productCard
    
}
class scope{    
static card(arr){
const ul         = document.getElementById("news")
const ulevidence = document.getElementById("evidence")
    arr.forEach(element => {
    const li    = document.createElement("li")
    const h2    = document.createElement("h2")
    const p     = document.createElement("p")
    const h3    = document.createElement("h3")
    const span  = document.createElement("span")
    const img   = document.createElement("img")
    const div   = document.createElement("div")
    const a     = document.createElement("a")

if(element.id == 3){
    li.id   = "li__evidence"
    img.id  = "img__evidence"
    div.id  = "div__evidence"
    h2.id   = "titulo__evidence"
    p.id    = "resumo__evidence"
    h3.id   = "categoria__evidence"
    span.id = "fonte__evidence"
    img.src         = element.imagem
    img.alt         = element.titulo
    h2.innerText    = element.titulo
    p.innerText     = element.resumo
    h3.innerText    = element.categoria
    span.innerText  = `Fonte: ${element.fonte}`            
    div.append(h3,h2,p,span)
    li.append(img,div)
return ulevidence.append(li)
}

    img.src         = element.imagem
    img.alt         = element.titulo
    a.href          = element.noticia_completa
    h2.innerText    = element.titulo
    p.innerText     = element.resumo
    h3.innerText    = element.categoria
    span.innerText  = `Fonte: ${element.fonte}`
    a.append(h2)
    div.append(h3,a,p,span)
    li.append(img,div)
    ul.append(li)
});
}
}

export default scope
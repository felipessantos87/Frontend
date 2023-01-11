let precoRefrigerante = parseFloat(prompt("Digite o valor do refrigerante"));
let quantidadeRefrigerante = parseInt(prompt("Quantas Unidades?"));
let totalRefrigerante = precoRefrigerante * quantidadeRefrigerante;

let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão"));
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades?"));
let totalMacarrao = precoMacarrao * quantidadeMacarrao;

let precoErvilha = parseFloat(prompt("Digite o valor da ervilha"));
let quantidadeErvilha = parseFloat(prompt("Quantas Unidades?"));
let totalErvilha = precoErvilha * quantidadeErvilha;

let precoArroz = parseFloat(prompt("Digite o valor do arroz"));
let quantidadeArroz = parseFloat(prompt("Quantas Unidades?"));
let totalArroz = precoArroz * quantidadeArroz;

let precoFeijao = parseFloat(prompt("Digite o valor do feijão"));
let quantidadeFeijao = parseFloat(prompt("Quantas Unidades?"));
let totalFeijao = precoFeijao * quantidadeFeijao;

let precoVinho = parseFloat(prompt("Digite o preco do vinho"));
let quantidadeVinho = parseFloat(prompt("Quantas Unidades?"));
let totalVinho = precoVinho * quantidadeVinho;

let total = totalArroz + totalErvilha + totalFeijao + totalMacarrao + totalRefrigerante + totalVinho;
let voce;
let amigo;

if((total) % 2 == 0){
    voce = (total - totalVinho)/2;
    amigo = (total - totalVinho)/2 + totalVinho;
}else{
    voce = total/2;
    amigo = total/2;
}
alert(`Total da compra R$ ${total}`);
alert(`Voce deve pagar  R$ ${voce} e seu amigo deve pagar R$ ${amigo}`);

console.log(`Valor total a ser pago: R$${total}`)
console.log(`Você deve pagar: R$${voce} e seu amigo deve pagar: R$${amigo}`)
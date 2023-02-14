const meses =
    ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const janeiro = meses[0];
const fevereiro = meses[1];
const marco = meses[2];
const abril = meses[3];


console.log("-----------------Sem Desestruturação---------------------");
console.log(meses[0]);
console.log(meses[1]);
console.log(meses[2]);
console.log(meses[3]);

console.log(janeiro);
console.log(fevereiro);
console.log(marco);
console.log(abril);

console.log("-----------------Com Desestruturação---------------------");

const [primeiroMes, segundoMes, terceiroMes, quartoMes, quintoMes, sextoMes] = meses;

console.log(primeiroMes);
console.log(segundoMes);
console.log(terceiroMes);
console.log(quartoMes);
console.log(quintoMes);
console.log(sextoMes);
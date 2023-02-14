const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];

const [janeiro, fevereiro, marco, ...restante] = meses;

console.log(janeiro);
console.log(fevereiro);
console.log(marco);
console.log(restante);
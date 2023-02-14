const primeiroTrimestre = ["Jan", "Fev", "Mar"];
const segundoTrimmestre = ["Abr", "Mai", "Jun"];
const terceiroTrimestre = ["Jul", "Ago", "Set"];

console.log('--------------Sem Spread---------------');
const copiaPrimeiroTrimestre = primeiroTrimestre;
const primeiroSemestre = primeiroTrimestre.concat(segundoTrimmestre).concat(terceiroTrimestre);

console.log(primeiroSemestre);

console.log('--------------Com Spread---------------');
const primeiroSemestreSpread = [...primeiroTrimestre, ...segundoTrimmestre, ...terceiroTrimestre];

console.log(primeiroSemestreSpread)

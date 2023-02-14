function soma(n1, n2, n3) {
    return n1 + n2 + n3;
}

console.log('----------sem rest----------');
console.log(soma(1, 4, 9));

console.log('-------com rest-------');
function soma(...args) {
    const somaNumeros = args.reduce((acum, val) => acum + val);
    return somaNumeros
}
console.log(soma(1, 4, 9, 11, 9, 9, 13, 5 , 4, 189));


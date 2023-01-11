function snapCrackle(maxValue) {
    let resultado = ""
    for (let i = 1; i <= maxValue; i++) {
    if (i % 2 !== 0 && i % 5 === 0) {
    resultado += "SnapCrackle, "
    } else if (i % 2 !== 0) {
    resultado += "Snap, "
    } else if (i % 5 === 0) {
    resultado += "Crackle, "
    } else {
    resultado += i + ", "
    }
    }
    return resultado
  }
console.log('SnapCrackle: ' + snapCrackle(12))

function verificaPrimo (numero) {
    let primo = true
    for (i = 2; i < numero; i++){
    if (numero % i === 0){
    primo = false
    }
    }
    return primo
}
function snapCracklePrime (maxValue) {
    let string = ''
    for (let i = 1; i <= maxValue; i++){
    if (verificaPrimo(i) === true && i % 2 != 0 && i % 5 === 0) {
    string += "SnapCracklePrime"
    }
    else if (verificaPrimo(i) === true && i % 2 != 0) {
    string += "SnapPrime"
    }
    else if (verificaPrimo(i) === true) {
    string += "Prime"
    }
    else if (i % 2 != 0 && i % 5 === 0) {
    string += "SnapCrackle"
    }
    else if (i % 2 != 0) {
    string += "Snap"
    }
    else if (i % 5 === 0) {
    string += "Crackle"
    }
    else string += i
    if (i < maxValue) {
    string += ", "
    }
    }
    return string
}
console.log('SnapCrackle Prime: ' + snapCracklePrime(15))
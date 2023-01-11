function add (num1,num2){
    return num1 + num2;
}
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


function multiply(num1, num2){
    let multiply1 = 0;
    for(let i = 0; i < num2; i++){
        multiply1 += add(0, num1)
    }
    return multiply1
}
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


function power (num1, num2 ){
    let power1 = 1;

    for(let i = 0; i < num2; i++){
        power1 = multiply(num1,power1)
    }
    return power1
}
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


function factorial(num1){
    let factorial1 = 1;
    for(let i = 1; i <= num1; i++){
        factorial1 = multiply(factorial1, i)
    }
    return factorial1
}
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


function fibonacci (num) {
    if(num < 1) return 0
    if(num <= 2) return 1

    let fibonacci1  = 0;
    let fibbonacci2 = 1;
    let num1 = num;

    for(let i = 2; i <= num; i++){
       num1 = add(fibbonacci2, fibonacci1)
       fibonacci1 = fibbonacci2
       fibbonacci2 = num1
    }
    return num1
}  
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
const numberOne = document.querySelector('#n1');
const numberTwo = document.querySelector('#n2');
const addUp = document.querySelector('#add');
const subtraction = document.querySelector('#minus');
const division = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const result = document.querySelector('h2')


function validacaoDeNumero() {
	if (!numberOne.valueAsNumber || !numberTwo.valueAsNumber) {
        result.textContent = 'Necessário preencher os dois campos';
        return false;
	}
    return true;
};

addUp.addEventListener('click', (event) => {
    event.stopPropagation()
    if (!validacaoDeNumero()) {
        return;
    }
    result.textContent = `Resultado: ${numberOne.valueAsNumber + numberTwo.valueAsNumber}`;
});

subtraction.addEventListener('click', (event) => {
    event.stopPropagation()
    if (!validacaoDeNumero()) {
        return;
    }
    result.textContent = `Resultado: ${numberOne.valueAsNumber - numberTwo.valueAsNumber}`;
});

division.addEventListener('click', (event) => {
    event.stopPropagation()
    if (!validacaoDeNumero()) {
        return;
    }
    result.textContent = `Resultado: ${numberOne.valueAsNumber / numberTwo.valueAsNumber}`;
});

multiply.addEventListener('click', (event) => {
    event.stopPropagation()
    if (!validacaoDeNumero()) {
        return
    }
    result.textContent = `Resultado: ${numberOne.valueAsNumber * numberTwo.valueAsNumber}`;
});
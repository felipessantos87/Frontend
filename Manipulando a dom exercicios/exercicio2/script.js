const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const purple = document.querySelector('.purple');
const orange = document.querySelector('.orange');
const box = document.querySelectorAll('.box');
const random = document.querySelector('.container-random > button');
const result = document.querySelector('.h2-result');

const colors = ['red', 'blue', 'purple', 'orange'];
const unselectAll = () => {
    for (let i of box) {
        i.classList.remove('selected')
    }
};

red.onclick = () => {
    unselectAll()
    red.classList.add('selected')
};
blue.onclick = () => {
    unselectAll()
    blue.classList.add('selected')
};
purple.onclick = () => {
    unselectAll()
    purple.classList.add('selected')
};
orange.onclick = () => {
    unselectAll()
    orange.classList.add('selected')
};
random.onclick = () => {
    let color = "";
    let selection = false;
    const aleatoryPosition = Math.floor(Math.random() * 4);

    for (let i of box) {
        if (i.classList.contains('selected')) {
            let color = i.classList[1];
            selection = true;
            if (color === colors[aleatoryPosition]) {
                result.innerHTML = "";
                result.innerHTML += " Parabéns você acertou!";
            } else {
                result.innerHTML = "";
                result.innerHTML += "Tente novamente!";
            }
        }
    }
    if (!selection) {
        result.innerHTML = "";
        result.innerHTML += "Selecione uma cor para sortear.";
            }
};
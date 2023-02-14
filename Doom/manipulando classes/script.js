const first = document.querySelectorAll('strong')[0];
const second = document.querySelectorAll('strong')[1];
const third = document.querySelectorAll('strong')[2];
const fourth = document.querySelectorAll('strong')[3];


first.onclick = () => {
    // listando o nome da classe
    //console.log(first.className);

    // trocando nome da classe
    //first.className = 'user-inactive';

    // adicionando uma classe na sequência
    //first.classList.add('font-22');

    // remover uma classe
    first.classList.remove('font-22');
}

second.onclick = () => {
    // alternando entre classes
    second.classList.toggle('user-deleted');
}

third.onclick = () => {
    // validando se existe a classe dentro do elemento
    if (third.classList.contains('user')) {
        console.log('tem')
    } else {
        console.log('não tem')
    }
}

fourth.onclick = () => {
    fourth.classList.replace('user-inactive', 'user-deleted')
}
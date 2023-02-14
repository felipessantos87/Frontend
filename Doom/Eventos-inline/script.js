const h1 = document.querySelector('h1');

function observerMouseover() {
    h1.textContent ='Passou o mouse em cima!';
};

function observerMouseleave() {
    h1.textContent =  'Tirou o mouse de cima!'
}
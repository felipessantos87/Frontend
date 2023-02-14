const contentUser = document.querySelector('.content-user');
const button = document.querySelector('button');

const h1Second = contentUser.querySelector('h1:last-child');

const h1Third = document.createElement('h1')

h1Third.textContent = 'Terceiro h1';

button.addEventListener('click',() => {
    contentUser.replaceChild(h1Third, h1Second)
});
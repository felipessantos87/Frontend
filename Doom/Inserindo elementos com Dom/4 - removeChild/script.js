const contentUser = document.querySelector('.content-user');
const button = document.querySelector('button');

const userProfileImg = document.createElement('img');
const h3Text = document.createElement('h3');

h3Text.textContent = 'Meu único h3';

contentUser.appendChild(h3Text);

button.addEventListener('click',() => {
   contentUser.removeChild(h3Text) 
});
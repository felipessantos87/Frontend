const btnSign = document.querySelector('.btn-sign');
const spanCount = document.querySelector('.btn-sign span');

let count = 10;

function showMessage() {
    btnSign.classList.toggle('success');
    spanCount.style.display = 'none';
    btnSign.textContent = 'Você está inscrito';

    btnSign.removeEventListener('click', showMessage);
}

btnSign.addEventListener('click', showMessage);

const myInterval = setInterval(() => {
     
     if (count <= 0) {
         clearInterval(myInterval);

         btnSign.classList.toggle('disable');
         btnSign.textContent = 'Tempo esgotado';
         spanCount.style.display = 'none';

         btnSign.removeEventListener('click', showMessage);
         return
    }
    count--;
    spanCount.textContent = count;
}, 1000);
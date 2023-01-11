const anime = document.querySelector('.anime img');
let upright = 100;
let flat = -1804;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && flat < -650) {
        flat += 92;
        anime.src = '/2 - Exercício 2/assets/left.png';
        anime.style.right = `${flat}px`;
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && flat > -1800) {
        flat -= 92;
        anime.src = '/2 - Exercício 2/assets/right.png';
        anime.style.right = `${flat}px`;
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' && upright < 910) {
        upright += 95;
        anime.src = '/2 - Exercício 2/assets/front.png';
        anime.style.top = `${upright}px`;
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && upright > 25) {
        upright -= 90;
        anime.src = '/2 - Exercício 2/assets/back.png';
        anime.style.top = `${upright}px`;
    }
});
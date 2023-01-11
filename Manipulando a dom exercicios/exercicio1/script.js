const walking = document.querySelector('.walking')
const body = document.querySelector('body')

let startingPosition = 1
const startWalking = () => {
    if (startingPosition <= 10) {
        let newPosition = (body.offsetWidth * 0.1 * startingPosition) - 100
        walking.src = `assets/${startingPosition}.png`
        walking.style.left = `${newPosition}px`
        startingPosition++
    }
};

setInterval(startWalking, 450);
let numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const input = document.querySelector('input')
const rollButton = document.querySelector('button')
const graphic = document.querySelector('.graphic')
const graphicDescription = document.querySelector('.graphic-description')

function rollDice (nTimes) {
    for(let index = 0; index < nTimes; index++) {
        let dice1 = Math.floor((Math.random() * (7 - 1) + 1))
        let dice2 = Math.floor((Math.random() * (7 - 1) + 1))

        let finalResult = dice1 + dice2

        numbers[finalResult-2]++
    }
}

function renderGraphics () {
    graphic.innerHTML = ''

    let inputValue = input.value
    rollDice(inputValue)
    graphicDescription.classList.add('visible')

    numbers.forEach((value, index) => {
        const dataBar = document.createElement('div')
        dataBar.classList.add('graphic-data')
        graphic.appendChild(dataBar)
        dataBar.style.width = value*3+'px'

        dataBar.insertAdjacentHTML('beforeend', `
            <h5>${index+2}</h5>
            <h6>${value}</h6>
        `)
    })

    numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}

rollButton.addEventListener('click', renderGraphics)

renderGraphics()

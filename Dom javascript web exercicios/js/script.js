const paragraph = document.querySelector('p')
const underlined = document.querySelector('.underlined')
const italic = document.querySelector('.italic')
const boldType = document.querySelector('.boldType')
const redButton = document.querySelector('.red')
const blueButton = document.querySelector('.blue')
const purpleButton = document.querySelector('.purple')
const blackButton = document.querySelector('.black')
const lowerButton = document.querySelector('.lower')
const upButton = document.querySelector('.up')
const size = document.querySelector('.size')
let und = false;
let ita = false;
let bol = false;

const underline = () => {
    if (!und) {
        paragraph.style.textDecoration = 'underline'
        und = true;
    } else {
        paragraph.style.textDecoration = 'none'
        und = false;
    }
};
const italics = () => {
    if (!ita) {
        paragraph.style.fontStyle = 'italic'
        ita = true;
    } else {
        paragraph.style.fontStyle = 'normal'
        ita = false;
    }
};
const bold = () => {
    if (!bol) {
        paragraph.style.fontWeight = 'bold';
        bol = true;
    } else {
        paragraph.style.fontWeight = 'normal'
        bol = false;
    }
};
const red = () => {
    paragraph.style.color = 'red'
};
const blue = () => {
    paragraph.style.color = 'blue'
};
const purple = () => {
    paragraph.style.color = 'purple'
};
const black = () => {
    paragraph.style.color = 'black'
};

let fontSize = 12;
const lower = () => {
    if (fontSize > 12) {
        paragraph.style.fontSize = `${fontSize--}px`
        size.textContent = `${fontSize}`
    }
};
const up = () => {
    paragraph.style.fontSize = `${fontSize++}px`
    size.textContent = `${fontSize}`

};

underlined.onclick = underline;
italic.onclick = italics;
boldType.onclick = bold;
redButton.onclick = red;
blueButton.onclick = blue;
purpleButton .onclick = purple;
blackButton.onclick = black;
lowerButton.onclick = lower;
upButton.onclick = up;

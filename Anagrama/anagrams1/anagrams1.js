function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

function showResults(typedText, array){

    let container = document.getElementById('result-container');
    container.innerHTML = "";
    let title = document.createElement('h1');
    title.innerText = typedText;
    title.classList.add("title");
    container.appendChild(title);

    let ul = document.createElement('ul');
    for(let i = 0; i < array.length; i++){

        let line = document.createElement('li');
        line.textContent = array[i]; 
        line.classList.add('line')
        ul.appendChild(line);
    }
    container.appendChild(ul)


 return array
}

function getAnagramsOf(typedText){

    let alphabetized = alphabetize(typedText)
    let arrResult = []

    //percorre cada elemento da lista, ordena as letras e compara com typedText, se(igual){adicionar em arrResult} 
    for(let i = 0; i < palavras.length; i++){
        let wordAlpha = alphabetize(palavras[i])
        if(wordAlpha === alphabetized){
            arrResult.push(palavras[i])
        }
    }
    showResults(typedText, arrResult)
    return arrResult
}

const button = document.getElementById("findButton");
button.addEventListener("click", function(){
    let inputText = document.getElementById('input').value
    getAnagramsOf(inputText);
});
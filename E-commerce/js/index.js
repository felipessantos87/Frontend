const main = document.querySelector("main");
const shopCart = document.querySelector("#shopCart");

function listEverything() {
    main.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
    let currImg = document.createElement("figure");
    currImg.id = `img${i + 1}`;
    currImg.style.backgroundImage = `url(${data[i].img})`;
    currImg.style.backgroundPosition = "center";
    currImg.style.backgroundRepeat = "no-repeat";

    main.innerHTML += `
    <div class="product" id="${i + 1}">
    ${currImg.outerHTML}
    <div class="productDetails">
    <h5 class="tag">${data[i].tag[0]}</h5>
    <h2 class="nameItem" id="NI${i + 1}">${data[i].nameItem}</h2>
    <p class="description">
    ${data[i].description}
    </p>
    <p class="value" id="V${i}">R$${data[i].value.toFixed(2)}</p>
    <button class="addButton" id="${i}">Adicionar ao carrinho</button>
    </div>
    </div>
    `;
  }
}
listEverything();
const cartDetails = document.querySelector("#cartDetails");
const hideEmpty = document.querySelector(".hideEmpty");
const hideAbs = document.querySelector(".hideAbs");
  let totalQuant = 0;
  let totalPrice = 0;

// adicionando itens no carrinho
let allSelected = [];
let selectedTimes = [];
    data.forEach((i) => selectedTimes.push(0));
let selectedPrices = [];
    data.forEach((i) => selectedPrices.push(0));
let totalQuantAbs = 0;
let totalPriceAbs = 0;


function addButtonFunction(category = "") {
const addButtons = document.querySelectorAll(".addButton");
    addButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
    event.preventDefault();

let idNum = parseInt(button.id);
let quantTag = document.querySelector("#abstractQuantity");
let ValueTag = document.querySelector("#abstractValue");
let CurrPrice = data[idNum].value;

if (selectedTimes[idNum] == 0) {
    selectedTimes[idNum]++;
    selectedPrices[idNum] += CurrPrice;
    allSelected.push(idNum);
    addToCart(idNum, category, selectedTimes[idNum]);
    formatCart();

// Remover item do carrinho 
const remove = document.querySelector(`#rmv${category + idNum}`);
      remove.addEventListener("click", (event) => {
      event.preventDefault();

let removeSelect = remove.parentNode.parentNode;
    removeSelect.parentNode.removeChild(removeSelect);

    totalQuantAbs -= selectedTimes[idNum];
    quantTag.innerText = totalQuantAbs;

    totalPriceAbs -= selectedTimes[idNum] * CurrPrice;
    ValueTag.innerText = `R$${totalPriceAbs.toFixed(2)}`;

    allSelected.pop();
    formatCart();
    selectedTimes[idNum] = 0;
});
} else {
    selectedTimes[idNum]++;
    selectedPrices[idNum] += CurrPrice;

// quantidade de itens iguais
let currRepeat = document.querySelector(`#QC${idNum}`);
    currRepeat.innerHTML = `Quantidade: <strong>${selectedTimes[idNum]}</strong>`;

// valor total dos itens iguais
let singleItemPrice = document.querySelector(`#V${idNum}`);
let actualItemPrice = document.querySelector(`#value${idNum}`);
let valueSingle = parseFloat(singleItemPrice.innerText.slice(2));
    actualItemPrice.innerText = `R$${(
    valueSingle * selectedTimes[idNum]
    ).toFixed(2)}`;
}
    totalQuantAbs++;
    quantTag.innerText = totalQuantAbs;

    totalPriceAbs += CurrPrice;
    ValueTag.innerText = `R$${totalPriceAbs.toFixed(2)}`;
    });
  });
}
addButtonFunction();
function formatCart() {
if (allSelected.length > 0) {
    hideAbs.style.display = "flex";
    hideEmpty.style.display = "none";
    cartDetails.style.justifyContent = "flex-start";
    cartDetails.style.alignItems = "flex-start";
} else if (allSelected.length == 0) {
    hideAbs.style.display = "none";
    hideEmpty.style.display = "flex";
    cartDetails.style.justifyContent = "center";
    cartDetails.style.alignItems = "center";
  }
}

function addToCart(btnID, category, quantity) {
let qtCount = document.createElement("p");
    qtCount.classList.add("quantCount");
    qtCount.id = `QC${btnID}`;
    qtCount.innerHTML = `Quantidade: <strong>${quantity}</strong>`;

cartDetails.insertAdjacentHTML(
    "beforeend",
    `
    <div class="itemSelected" id="select${category + btnID}">
    ${document.querySelector(`#img${btnID + 1}`).outerHTML}
    <div class="selectText" id="select${btnID}Details">
    <h5>${document.querySelector(`#NI${btnID + 1}`).innerText}</h5>
    <p class="selectValue" id="value${btnID}">${
    document.querySelector(`#V${btnID}`).innerText
    }</p>
    ${qtCount.outerHTML}
    <h6 class="remove" id="rmv${category + btnID}">Remover produto</h6>
    </div>
    </div>
    `
  );
}

// Pesquisar

let input = document.querySelector("input");
let inputBtn = document.querySelector("form button");

inputBtn.addEventListener("click", function (){
   let resultadoBusca = []
  
  for(let i = 0; i < data.length; i++){
  
    if(input.value == data[i].nameItem){
      resultadoBusca.push(data[i])
      
    }
  }
  listEverything(resultadoBusca)
  })

// menu nav
const all = document.querySelector("#all");
    all.addEventListener("click", (event) => {
    event.preventDefault();
    listEverything();
    addButtonFunction("All");
});

const acessories = document.querySelector("#acessories");
  acessories.addEventListener("click", (event) => {
  event.preventDefault();
  filterTag("Acessórios");
  addButtonFunction("Acs");
});

const watch = document.querySelector("#watch"); 
    watch.addEventListener("click", (event) => {
    event.preventDefault();
    filterTag("Relógios");
    addButtonFunction("Shoe");
});

const cell = document.querySelector("#cell");
    cell.addEventListener("click", (event) => {
    event.preventDefault();
    filterTag("Celulares");
    addButtonFunction("cell");
});
// Filtro por categoria
function filterTag(category) {
    main.innerHTML = "";
for (let i = 0; i < data.length; i++) {
let currImg = document.createElement("figure");
    currImg.id = `img${i + 1}`;
    currImg.style.backgroundImage = `url(${data[i].img})`;
    currImg.style.backgroundPosition = "center";
    currImg.style.backgroundRepeat = "no-repeat";

if (data[i].tag[0] == category) {
    main.innerHTML += `
    <div class="product" id="${i + 1}">
    ${currImg.outerHTML}
    <div class="productDetails">
    <h5 class="tag">${data[i].tag[0]}</h5>
    <h2 class="nameItem" id="NI${i + 1}">${
    data[i].nameItem
    }</h2>
    <p class="description">
    ${data[i].description}
    </p>
    <p class="value" id="V${i}">R$${data[i].value.toFixed(
    2
    )}</p>
    <button class="addButton" id="${i}">Adicionar ao carrinho</button>
    </div>
    </div>
    `;
    }
  }
}


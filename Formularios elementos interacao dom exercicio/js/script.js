const form = document.querySelector("form");
const informName= document.querySelector("#name-inform");
const inforEmail = document.querySelector("#email-inform");
const ageInform = document.querySelector("#age-birth");
const cityInform = document.querySelector("#city");
const radioClass = document.querySelector(".radio");
const checkbox = document.querySelector(".checkbox");



const strong = document.querySelector("strong");

form.addEventListener('submit', (event) => {
    event.preventDefault(submit);
    strong.textContent = "";
    

    const data = {
        name: informName.value,
        email: inforEmail.value,
        age: ageInform.value,
        city: cityInform.value,
        radioClass: true,
        checkbox:true,
        
    };
    console.log(data);

    strong.textContent = 'Parabéns, inscrição feita com sucesso!'
});
const form = document.querySelector('form');
const select = document.querySelector("select");

form.addEventListener("submit" , (event) => {
    event.preventDefault();

    console.log(select.selectedIndex,);
    console.log(select.options[select.selectedIndex].text);
    console.log(select.options[select.selectedIndex].value);
});

select.addEventListener( "change", (event) => {
    console.log(select.selectedIndex,);
    console.log(select.options[select.selectedIndex].text);
    console.log(select.options[select.selectedIndex].value);
});
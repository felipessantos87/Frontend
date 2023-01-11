import Api from "./models/Api.js";
import Table from "./models/dom.js";

const nacoes = await Api.requestCountries();
function ordenaPaises(){
      nacoes.sort((a,b)=>{
const resultado1 = (a.medal_gold+a.medal_silver+a.medal_bronze);
const resultado2 = (b.medal_gold+b.medal_silver+b.medal_bronze);
      if(resultado2 == resultado1){
      if(b.medal_gold - a.medal_gold > 0){
        return 1;
      }else{
        return -1;
      }
    }else{
      return resultado2-resultado1;
    }
  });
}
ordenaPaises();

const estrutura = document.querySelector('.table--body');
function listarInfo(arr){
      arr.forEach(async (element, index) => {
      await Table.createRowInfo(index, element);
  });
}
listarInfo(nacoes);

const comando = document.querySelectorAll('.text');
      comando.forEach((element)=>{
      element.addEventListener('click', ()=>{
      estrutura.innerHTML = "";
      comando.forEach((botao)=> botao.classList.remove("click"));
      element.classList.add("click");

const criterio = element.getAttribute('name');
      if(criterio == 'ranking' || criterio == 'total'){
        ordenaPaises();
        listarInfo(nacoes);
      }else if(criterio == 'country'){
      nacoes.sort((a,b)=> a.country.localeCompare(b.country));
        listarInfo(nacoes);
      }else{
      nacoes.sort((a,b)=>b[criterio]-a[criterio]);
        listarInfo(nacoes);
    }
  });
});
const btnPesquisar = document.getElementById("btnPesquisar");
const input = document.getElementById("inputPesquisar");
btnPesquisar.addEventListener('click', (event)=>{
      event.preventDefault();
      const pesquisa = input.value;
      const resultado = nacoes.find((pais)=> pais.country.toLowerCase().includes(pesquisa.toLowerCase()));
      estrutura.innerHTML = "";
      const arr = [resultado];
        listarInfo(arr);
});
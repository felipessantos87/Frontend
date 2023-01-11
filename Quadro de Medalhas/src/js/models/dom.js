import Api from "./Api.js";

class Table{
static async createRowInfo(index, data){

const tabletSructure = document.querySelector(".table--body");
const alignment = document.createElement("tr");

const placing = document.createElement("td");
      placing.innerText = `${index+1}°`;

const countryDescription = document.createElement("td");
const countryName = document.createElement("span");
      countryName.innerText = data.country;
const flag = document.createElement("img");
      flag.src = data.flag_url;
      countryDescription.append(flag, countryName);
      countryDescription.classList.add("country");

const gold = document.createElement("td");
      gold.innerText = data.medal_gold;

const silver = document.createElement("td");
      silver.innerText = data.medal_silver;

const bronze = document.createElement("td");
      bronze.innerText = data.medal_bronze;

const total = document.createElement("td");
      total.innerText = data.medal_bronze+data.medal_silver+data.medal_gold;
      alignment.append(placing, countryDescription, gold, silver, bronze, total);
      tabletSructure.appendChild(alignment);
  }
}
export default Table;
class Api{
static urlBase =  'https://kenzie-olympics.herokuapp.com/paises'
static async requestCountries(){
const dados = await fetch(this.urlBase, {
    method: "GET",
    "Content-Type": "application/json",
  })
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);
  return dados;
}
}
export default Api;
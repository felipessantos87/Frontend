import dom from "./dom.js"
class dados {
static notice (){
    fetch("https://kenzie-news-api.herokuapp.com/api/news")
    .then((res) => res.json())
    .then(res => {
    dom.card(res)
        })
    }
}
export default dados
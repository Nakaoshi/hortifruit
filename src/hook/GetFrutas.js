/* 
A API estava bloqueada,testei com uma API do Star Wars (swapi.api) e funcionou....a api que voces escolheram nao estava sendo aceita 

Access to XMLHttpRequest at 'https://www.fruityvice.com/api/fruit/all' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. 
*/
import axios from "axios";
export function APIFrutas() {
  var Frutas;
  axios.get("https://www.fruityvice.com/api/fruit/all").then((response) => {
    this.Frutas = response.data;
  }).catch((error)=>{
    console.log(error)
  });
  return Frutas
}



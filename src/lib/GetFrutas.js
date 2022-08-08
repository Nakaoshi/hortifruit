import axios from "axios";

/* 
A API estava bloqueada
Access to XMLHttpRequest at 'https://www.fruityvice.com/api/fruit/all' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. 

*/
export function APIFrutas() {
  var Frutas = "";
  axios.get("https://www.fruityvice.com/api/fruit/all").then((response) => {
    this.Frutas = response.data;
  });
  return { Frutas };
}

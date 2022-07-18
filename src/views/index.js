"use strict";
import { renderCards } from "../components/card";

var productState;
/* var productState = [
  {id: 8, name: 'PISCO ALTO DEL CARMEN 35º', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg', price: 7990.0, discount: 10, category: 2}, 
  {id: 9, name: 'PISCO ALTO DEL CARMEN 40º ', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/alto408581.jpg', price: 5990.0, 'discount': 0, category: 2}, 
  {id: 10, name: 'PISCO ARTESANOS 35º ', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/artesanos8818.jpg', price: 3990.0, 'discount': 0, category: 2}, 
  {id: 11, name: 'PISCO BAUZA 40º ', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/bauza408831.jpg', price: 4990.0, 'discount': 0, category: 2}, 
  {id: 12, name: 'PISCO CAMPANARIO 35º', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/campanario8845.jpg', price: 2990.0, 'discount': 20, category: 2}, 
  {id: 13, name: 'PISCO CAMPANARIO 40º', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/campanario408881.jpg', price: 3990.0, 'discount': 20, category: 2}, 
  {id: 14, name: 'PISCO ESPIRITU DEL ELQUI 40º', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/espiritu8936.jpg', price: 5990.0, 'discount': 20, category: 2}, 
  {id: 15, name: 'PISCO ESPIRITU DEL ELQUI 45º', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/espiritu8957.jpg', price: 6990.0, 'discount': 5, category: 2}, 
  {id: 16, name: 'PISCO HORCON QUEMADO 35º', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/horcon359049.jpg', price: 6990.0, 'discount': 20, category: 2}, 
  {id: 17, name: 'PISCO HORCON QUEMADO 40º', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/horcon409062.jpg', price: 7990.0, 'discount': 20, category: 2}, 
  {id: 18, name: 'PISCO HORCON QUEMADO 46º', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/horcon469075.jpg', price: 8990.0, 'discount': 20, category: 2}, 
  {id: 19, name: 'PISCO MISTRAL 35º',url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/mistral359200.jpg', price: 4990.0, 'discount': 20, category: 2}, 
  {id: 20, name: 'PISCO MISTRAL 40º ', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/mistral409215.jpg', price: 4990.0, 'discount': 20, category: 2}, 
  {id: 21, name: 'PISCO TRES ERRES 35º', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/rrr359305.jpg', price: 4590.0, 'discount': 20, category: 2}, 
  {id: 22, name: 'PISCO TRES ERRES 40º', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/rrr409319.jpg', price: 4990.0, 'discount': 20, category: 2}, 
  {id: 87, name: 'PISCO MISTRAL 35°', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/358978.jpg', price: 4990.0, 'discount': 0, category: 2}, 
  {id: 88, name: 'PISCO MISTRAL GRAN NOBEL 40°', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/grannobel9104.jpg', price: 19900.0, 'discount': 0, category: 2}, 
  {id: 89, name: 'PISCO MISTRAL 40°', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/409346.jpg', price: 4990.0, 'discount': 0, category: 2}, 
  {id: 90, name: 'PISCO MISTRAL 46°', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/469463.jpg', price: 7890.0, 'discount': 0, category: 2}, 
  {id: 91, name: 'PISCO MISTRAL NOBEL 40°', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/nobel409551.jpg', price: 19990.0, 'discount': 0, category: 2}, 
  {id: 92, name: 'PISCO MISTRAL NOBEL 46', url_image: 'https://dojiw2m9tvv09.cloudfront.net/11132/product/nobelanejado9639.jpg', price: 15990.0, 'discount': 15, category: 2}
]; */

const map = {
  "BEBIDAS ENERGÉTICAS": "bebida energetica",
  PISCOS: "pisco",
  RON: "ron",
  BEBIDAS: "bebida",
  SNACKS: "snack",
  CERVEZAS: "cerveza",
  VODKAS: "vodka"
};
//var productState = [];
export default class App {
  constructor(elem) {
    if (!elem) return;
    this.elem = elem;
  }

  render() {
    if (this.elem)
      this.elem.innerHTML = `
        <section data-component="app">
        <h1 id="categoryName"><b><i>TODOS LOS PRODUCTOS</i></b></h1>  
        <div class="container">
          <div id="categoryButtons">      
          </div>            
        </div>
        </section>
        `;
    addButton("BEBIDAS ENERGÉTICAS");
    addButton("PISCOS");
    addButton("RON");
    addButton("BEBIDAS");
    addButton("SNACKS");
    addButton("CERVEZAS");
    addButton("VODKAS");
  }
}
const changeTitle = category => {
  let categoryNames = document.getElementById("categoryName");
  categoryNames.innerHTML = `<b><i>${category}</i></b>`;
};
export const select = () => {
  var select = document.querySelector("#categorySelector");
  select.addEventListener("change", e => {
    let inputValue = document.querySelector("input").value;
    let selected = document.querySelector("#categorySelector").options[
      document.querySelector("#categorySelector").selectedIndex
    ].value;
    bringProductsSearch(inputValue, selected);
    console.log("soy select", e.target.value);
  });
};
export const search = () => {
  const input = document.querySelector("input");
  input.addEventListener("keyup", function(e) {
    let categorySelected = document.querySelector("#categorySelector").value;
    bringProductsSearch(e.target.value, categorySelected);
    console.log("soy search");
    changeTitle("BÚSQUEDA");
  });
};

export const renderProducts = () => {
  renderCards([...productState]);
};

const addButton = category => {
  let newButton = document.createElement("button");
  newButton.setAttribute("id", category);
  newButton.setAttribute("value", category);
  newButton.className = "btn btnCategory btn-light";
  newButton.innerHTML = category;
  newButton.addEventListener("click", function(e) {
    changeTitle(e.target.value);
    bringProductsByCategory(map[e.target.value]);
  });
  let categoryButtons = document.getElementById("categoryButtons");
  categoryButtons.appendChild(newButton);
};

const bringProductsByCategory = category => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    category: category
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch(
    "https://tienda-online-backend.herokuapp.com/categories/getbycategory",
    requestOptions
  )
    .then(response => response.json())
    .then(result => {
      productState = [...result.products];
      renderProducts();
    })
    .catch(error => console.log("error", error));
};

const bringProductsSearch = (search, category) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    search: search,
    category: category
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("https://tienda-online-backend.herokuapp.com/search", requestOptions)
    .then(response => response.json())
    .then(result => {
      {
        productState = [...result.products];
        renderCards(productState);
      }
      if (productState.length === 0) {
        let content = document.getElementById("card");
        let message = document.createElement("h1");
        message.setAttribute("id", "message");
        message.innerHTML = "No se encontró el producto!";
        content.appendChild(message);

        console.log("prueba");
      }
    })
    .catch(error => console.log("error", error));
};

export const bringAllProducts = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch("https://tienda-online-backend.herokuapp.com/getall", requestOptions)
    .then(response => response.json())
    .then(result => {
      renderCards([...result.products]);
    })
    .catch(error => console.log("error", error));
};

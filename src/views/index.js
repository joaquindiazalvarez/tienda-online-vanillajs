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
  VODKAS: "vodka",
  "TODOS LOS PRODUCTOS": "todos"
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
        <h1 id="categoryName"><b><i id="categoryPressed">TODOS LOS PRODUCTOS</i></b></h1>  
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
  categoryNames.innerHTML = `<b><i id="categoryPressed">${category}</i></b>`;
};
export const selectCategory = () => {
  var select = document.querySelector("#categorySelector");
  select.addEventListener("change", e => {
    var checked = document.querySelector("#check").checked;
    let inputValue = document.getElementById("searchInput").value;
    let categorySelected = document.querySelector("#categorySelector").value;
    let orderSelectedValue = document.getElementById("orderSelector").value;
    bringProductsSearch(
      inputValue,
      categorySelected,
      orderSelectedValue,
      checked
    );
  });
};
export const search = () => {
  const input = document.getElementById("searchInput");
  input.addEventListener("keyup", function(e) {
    var checked = document.querySelector("#check").checked;
    let categorySelected = document.querySelector("#categorySelector").value;
    let orderSelectedValue = document.getElementById("orderSelector").value;
    bringProductsSearch(
      e.target.value,
      categorySelected,
      orderSelectedValue,
      checked
    );
    changeTitle("BÚSQUEDA");
  });
};
export const selectOrder = () => {
  let parent = document.getElementById("orderSelector");
  parent.addEventListener("change", e => {
    var checked = document.querySelector("#check").checked;
    let orderSelectedValue = document.getElementById("orderSelector").value;
    let categoryPressed = document.getElementById("categoryPressed").innerHTML;
    if (categoryPressed === "BÚSQUEDA") {
      let inputValue = document.getElementById("searchInput").value;
      let categorySelected = document.querySelector("#categorySelector").value;
      bringProductsSearch(
        inputValue,
        categorySelected,
        orderSelectedValue,
        checked
      );
    } else
      bringProductsByCategory(
        map[categoryPressed],
        orderSelectedValue,
        checked
      );
  });
};

export const checkDiscount = () => {
  let parent = document.getElementById("check");
  parent.addEventListener("change", e => {
    console.log("prueba");
    var checked = document.querySelector("#check").checked;
    let orderSelectedValue = document.getElementById("orderSelector").value;
    let categoryPressed = document.getElementById("categoryPressed").innerHTML;
    if (categoryPressed === "BÚSQUEDA") {
      let inputValue = document.getElementById("searchInput").value;
      let categorySelected = document.querySelector("#categorySelector").value;
      bringProductsSearch(
        inputValue,
        categorySelected,
        orderSelectedValue,
        checked
      );
    } else
      bringProductsByCategory(
        map[categoryPressed],
        orderSelectedValue,
        checked
      );
  });
};
const mountPageSelector = pages => {
  let parent = document.getElementById("pageSelector");
  parent.innerHTML = "";
  for (let i = 0; i < pages; i++) {
    let page = i + 1;
    let newPill = document.createElement("li");
    newPill.setAttribute("class", "nav-item");
    newPill.innerHTML = `<button class="btn btn-primary">${page.toString()}</button>`;
    newPill.addEventListener("click", function(e) {
      var checked = document.querySelector("#check").checked;
      let categoryPressed = document.getElementById("categoryPressed")
        .innerHTML;
      let orderSelectedValue = document.getElementById("orderSelector").value;
      if (categoryPressed === "BÚSQUEDA") {
        let inputValue = document.getElementById("searchInput").value;
        let categorySelected = document.querySelector("#categorySelector")
          .value;
        bringProductsSearch(
          inputValue,
          categorySelected,
          orderSelectedValue,
          checked,
          page
        );
      } else {
        let categoryPressed = document.getElementById("categoryPressed")
          .innerHTML;
        bringProductsByCategory(
          map[categoryPressed],
          orderSelectedValue,
          checked,
          page
        );
      }
    });

    parent.appendChild(newPill);
  }
};

const addButton = category => {
  let newButton = document.createElement("button");
  newButton.setAttribute("id", category);
  newButton.setAttribute("value", category);
  newButton.className = "btn btnCategory btn-light";
  newButton.innerHTML = category;
  newButton.addEventListener("click", function(e) {
    changeTitle(e.target.value);
    var checked = document.querySelector("#check").checked;
    let orderSelectorValue = document.getElementById("orderSelector").value;
    bringProductsByCategory(map[e.target.value], orderSelectorValue, checked);
  });
  let categoryButtons = document.getElementById("categoryButtons");
  categoryButtons.appendChild(newButton);
};

const bringProductsByCategory = (category, order, discount, page = 1) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    category: category,
    order: order,
    discount: discount
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch(
    `http://127.0.0.1:5000/categories/getbycategory/${page}/`,
    requestOptions
  )
    .then(response => response.json())
    .then(result => {
      renderCards([...result.products]);
      let parent = document.getElementById("pageSelector");
      parent.innerHTML = "";
      if (result.pages > 1) {
        mountPageSelector(result.pages);
        let parent = document.getElementById("pageSelector");
        let pageAmount = document.createElement("p");
        pageAmount.innerHTML = `Página ${page} de ${result.pages}`;
        parent.appendChild(pageAmount);
      }
    })
    .catch(error => console.log("error", error));
};

const bringProductsSearch = (search, category, order, discount, page = 1) => {
  console.log(order);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    search: search,
    category: category,
    order: order,
    discount: discount
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch(`http://127.0.0.1:5000/search/${page}/`, requestOptions)
    .then(response => response.json())
    .then(result => {
      renderCards([...result.products]);
      if (result.products.length === 0) {
        let content = document.getElementById("card");
        let message = document.createElement("h1");
        message.setAttribute("id", "message");
        message.innerHTML = "No se encontró el producto!";
        content.appendChild(message);
      }
      let parent = document.getElementById("pageSelector");
      parent.innerHTML = "";
      if (result.pages > 1) {
        mountPageSelector(result.pages);
        let parent = document.getElementById("pageSelector");
        let pageAmount = document.createElement("p");
        pageAmount.innerHTML = `Página ${page} de ${result.pages}`;
        parent.appendChild(pageAmount);
      }
    })
    .catch(error => console.log("error", error));
};

export const bringAllProducts = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch("https://backend-tienda-online.herokuapp.com/getall", requestOptions)
    .then(response => response.json())
    .then(result => {
      renderCards([...result.products]);
    })
    .catch(error => console.log("error", error));
};

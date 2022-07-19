"use strict";
/* eslint-disable */
import { renderCards } from "../components/card";

/* 
este archivo es el que contiene la mayoría de las funciones
-importa el método para renderizar cards
-contiene la clas App, que renderiza el título de la página
  y los botones por categoría
-contiene las funciones que habilitan los elementos Html
  como inputs y selectors
-contiene los fetchs que traen los productos de la db 

- tiene dos fetch: 
  bringProductsSearch() se ejecuta cuando se busca en la barra buscadora
  bringProductsByCategory() se ejecuta cuando se presiona un boton de categoría
*/

const map = {
  TODOS: "todos",
  "BEBIDAS ENERGÉTICAS": "bebida energetica",
  PISCOS: "pisco",
  RON: "ron",
  BEBIDAS: "bebida",
  SNACKS: "snack",
  CERVEZAS: "cerveza",
  VODKAS: "vodka",
  "TODOS LOS PRODUCTOS": "todos"
};
//objeto que traduce los strings de categorías, para que los entienda el backend

export default class App {
  /* 
  clase que recibe un nodo y renderiza el título de la app 
  y los botones por categoría 
  initialization: elem -> nodo padre
  functions: render -> renderiza el título y los botones por categoria
    que al clickearlo traen los productos de la categoría presionada
  */
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
    addButton("TODOS");
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
  /* 
  Función que cambia el título de la app 
  args: category -> nombre que llevará el título
  returns: no returns
  */
  let categoryNames = document.getElementById("categoryName");
  categoryNames.innerHTML = `<b><i id="categoryPressed">${category}</i></b>`;
};
export const selectCategory = () => {
  /*
  Función que agrega un evento al selector de categoría de la búsqueda
  El evento renderiza los productos cada vez que cambia la opción del selector
  args: no args
  return: no return
  */
  var parent = document.getElementById("categorySelector");
  parent.addEventListener("change", e => {
    let checked = document.getElementById("check").checked;
    let inputValue = document.getElementById("searchInput").value;
    let categorySelected = document.getElementById("categorySelector").value;
    let orderSelectedValue = document.getElementById("orderSelector").value;
    //se traen todos los valores que son argumentos para la búsqueda
    //son los valores que tienen los elementos HTML
    //checkbox, barra de búsqueda, categoría seleccionada y orden
    bringProductsSearch(
      inputValue,
      categorySelected,
      orderSelectedValue,
      checked
    );
  });
};
export const search = () => {
  /* 
  Función que agrega un evento al input de barra de búsqueda
  renderiza los productos cada vez que se ingresa o se quita un caracter
  args: no args
  return: no return
  */
  const parent = document.getElementById("searchInput");
  parent.addEventListener("keyup", e => {
    let checked = document.getElementById("check").checked;
    let categorySelected = document.getElementById("categorySelector").value;
    let orderSelectedValue = document.getElementById("orderSelector").value;
    //se traen los valores de los elementos HTML que son argumentos para la búsqueda
    bringProductsSearch(
      e.target.value,
      categorySelected,
      orderSelectedValue,
      checked
      //se busca lo ingresado en el input (e.target.value) de la barra buscadora
    );
    changeTitle("BÚSQUEDA");
  });
};
export const selectOrder = () => {
  /*
  Función que agrega un evento al selector de orden
  renderiza los productos cada vez que se cambia el orden
  args: no args
  return: no return
  */
  let parent = document.getElementById("orderSelector");
  parent.addEventListener("change", e => {
    let checked = document.getElementById("check").checked;
    let orderSelectedValue = document.getElementById("orderSelector").value;
    let categoryPressed = document.getElementById("categoryPressed").innerHTML;
    //se traen los valores de los elementos HTML que son argumentos para la búsqueda
    if (categoryPressed === "BÚSQUEDA") {
      //si se está buscando, se ejecuta la función de fetch de búsqueda
      let inputValue = document.getElementById("searchInput").value;
      let categorySelected = document.querySelector("#categorySelector").value;
      bringProductsSearch(
        inputValue,
        categorySelected,
        orderSelectedValue,
        checked
      );
    }
    //si no se está buscando, se ejecuta la función de fetch de elementos por categoría
    else
      bringProductsByCategory(
        map[categoryPressed],
        orderSelectedValue,
        checked
      );
  });
};

export const checkDiscount = () => {
  /*
  Función que agrega un evento al checkbox de descuento
  renderiza los productos cada vez que se presiona el checkbox
  args: no args
  return: no return
   */
  let parent = document.getElementById("check");
  parent.addEventListener("change", e => {
    console.log("prueba");
    let checked = document.getElementById("check").checked;
    let orderSelectedValue = document.getElementById("orderSelector").value;
    let categoryPressed = document.getElementById("categoryPressed").innerHTML;
    //se traen los valores de los elementos HTML que son argumentos para la búsqueda
    if (categoryPressed === "BÚSQUEDA") {
      //si se está buscando, se ejecuta la función de fetch de búsqueda
      let inputValue = document.getElementById("searchInput").value;
      let categorySelected = document.getElementById("categorySelector").value;
      bringProductsSearch(
        inputValue,
        categorySelected,
        orderSelectedValue,
        checked
      );
    }
    //si no se está buscando, se ejecuta la función de fetch de traer productos por categoría
    else
      bringProductsByCategory(
        map[categoryPressed],
        orderSelectedValue,
        checked
      );
  });
};
const mountPageSelector = pages => {
  /*
  Función que agrega botones de navegación de página
  para las búsquedas que tienen más de una página.
  renderiza las páginas cuando se clickean los botones
  args: pages -> número de páginas
  return: no return 
  */
  let parent = document.getElementById("pageSelector");
  parent.innerHTML = "";
  //se borran los selectores de páginas anteriores
  for (let i = 0; i < pages; i++) {
    //se itera tantas veces como número de páginas hayan
    let page = i + 1;
    let newPill = document.createElement("li");
    newPill.setAttribute("class", "nav-item");
    newPill.innerHTML = `<button class="btn btn-primary pill">${page.toString()}</button>`;
    //se crea un botón nuevo
    newPill.addEventListener("click", function(e) {
      let checked = document.getElementById("check").checked;
      let categoryPressed = document.getElementById("categoryPressed")
        .innerHTML;
      let orderSelectedValue = document.getElementById("orderSelector").value;
      //se traen los elementos HTML que son argumentos para la búsqueda
      if (categoryPressed === "BÚSQUEDA") {
        //si se está buscando, se ejecuta la función fetch de búsqueda
        let inputValue = document.getElementById("searchInput").value;
        let categorySelected = document.getElementById("categorySelector")
          .value;
        bringProductsSearch(
          inputValue,
          categorySelected,
          orderSelectedValue,
          checked,
          page
        );
      } else {
        //si no se está buscando se traen elementos por categoría
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
    //se van renderizando los selectores de página
  }
};

const addButton = category => {
  /*
  Función que renderiza los botones de categoría
  que van bajo el título de la página
  args: category -> este argumento es pasado en el render de App
    le da un nombre al botón
  returns: no return
  */
  let newButton = document.createElement("button");
  newButton.setAttribute("id", category);
  newButton.setAttribute("value", category);
  newButton.className = "btn btnCategory btn-light";
  newButton.innerHTML = category;
  //se crea un nuevo botón
  newButton.addEventListener("click", function(e) {
    changeTitle(e.target.value);
    //se cambia el título de la app
    var checked = document.getElementById("check").checked;
    let orderSelectorValue = document.getElementById("orderSelector").value;
    bringProductsByCategory(map[e.target.value], orderSelectorValue, checked);
  });
  let categoryButtons = document.getElementById("categoryButtons");
  categoryButtons.appendChild(newButton);
  //se renderizan los botones
};

const bringProductsByCategory = (category, order, discount, page = 1) => {
  /*
  Esta función renderiza productos cuando se clickea un botón de categoría.
  contiene un fetch a la API backend-tienda-online.
  recibe argumentos y los pasa como JSON y también el número de página se agrega a la url.
  recibe los productos y con el resultado realiza lo siguiente:
    -renderiza productos
    -borra el selector de página existente y lo reemplaza por otro, si es que
      la búsqueda tiene más de una página
  args: category, order, discount, page
  returns: no return
  */
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
    `https://backend-tienda-online.herokuapp.com/categories/getbycategory/${page}/`,
    requestOptions
  )
    .then(response => response.json())
    .then(result => {
      renderCards([...result.products]);
      let parent = document.getElementById("pageSelector");
      parent.innerHTML = "";
      //se borra el selector de página anterior
      if (result.pages > 1) {
        //si el número de páginas es mayor a uno se renderiza un selector de página
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
  /*
  Esta función realiza una búsqueda que consiste en mostrar los productos
    que contengan el string que se está tipeando en el nommbre.
  contiene un fetch a la API backend-tienda-online.
  recibe argumentos y los pasa como JSON y también el número de página se agrega a la url.
  recibe los productos y con el resultado realiza lo siguiente:
    -renderiza productos
    -borra el selector de página existente y lo reemplaza por otro, si es que
      la búsqueda tiene más de una página
  args: category, order, discount, page
  returns: no return
  */
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

  fetch(
    `https://backend-tienda-online.herokuapp.com/search/${page}/`,
    requestOptions
  )
    .then(response => response.json())
    .then(result => {
      renderCards([...result.products]);
      if (result.products.length === 0) {
        // si la búsqueda no arroja resultados, se
        //renderiza un h1 que indica que no han habido resultados
        let content = document.getElementById("card");
        let message = document.createElement("h1");
        message.setAttribute("id", "message");
        message.innerHTML = "No se encontró el producto!";
        content.appendChild(message);
      }
      let parent = document.getElementById("pageSelector");
      parent.innerHTML = "";
      //se borra el selector de página anterior
      if (result.pages > 1) {
        //si la búsqueda tiene más de una página, se renderiza un selector de página
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
  /*
  Función que se exporta a app.js para que se renderizen
    todos los productos en la primera carga de la página
  */
  bringProductsByCategory("todos", "az", false, 1);
};

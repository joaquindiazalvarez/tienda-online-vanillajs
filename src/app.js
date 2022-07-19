"use strict";
/*
este archivo es el padre de los demás.
renderiza el titulo de la app(#app que contiene los botones por categooría) 
en la primera carga de la página
también ejecuta las funciones search, selectCategory, selectOrder 
y chackDiscount, que habilitan los distintos elementos HTML
de la página(como barra buscadores, selector, checkbox), para
que puedan utilizarse

 */
import * as css from "./style.css";
import App, {
  bringAllProducts,
  search,
  selectCategory,
  selectOrder,
  checkDiscount
} from "./views/index.js";

window.addEventListener("load", () => {
  search();
  selectCategory();
  selectOrder();
  checkDiscount();

  const app = new App(document.getElementById("app"));
  app.render();
  //renderiza el título de la página(#app, que contiene los botones por categoría)

  bringAllProducts();
  //trae todos los productos al iniciar la página
});

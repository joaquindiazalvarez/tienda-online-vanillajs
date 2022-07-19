"use strict";
/**
 * The entry point
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

  // A very simple component setup
  app.render();

  bringAllProducts();
});

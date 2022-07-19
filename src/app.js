"use strict";
/**
 * The entry point
 */
import * as css from "./style.css";
import App, {
  bringAllProducts,
  search,
  selectCategory,
  selectOrder
} from "./views/index.js";

window.addEventListener("load", () => {
  search();
  selectCategory();
  selectOrder();
  const app = new App(document.getElementById("app"));

  // A very simple component setup
  app.render();

  bringAllProducts();
});

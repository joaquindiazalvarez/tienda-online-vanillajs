"use strict";
/**
 * The entry point
 */
import * as css from "./style.css";
import App, { bringAllProducts, search, select } from "./views/index.js";

window.addEventListener("load", () => {
  search();
  select();
  const app = new App(document.getElementById("app"));

  // A very simple component setup
  app.render();

  bringAllProducts();
});

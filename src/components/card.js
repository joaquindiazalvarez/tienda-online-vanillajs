"use strict";

/* 
este archivo contiene la clase card, que es el componente
que muestra el producto en sí
además, este archivo exporta el método que renderiza
todos los productos dado el arreglo traído por fetch 
*/

export default class Card {
  /* 
  clase que se inicializa con todos los datos de un producto
  y los puede renderizar en un elemento card de bootstrap 
  initialization: elem, id, name, url_image, price, discount
    elem es el nodo en el cual se renderizará la carta
  functions: render
  */
  constructor(elem, id, name, url_image, price, discount) {
    if (!elem) return;
    this.elem = elem;
    this.id = id;
    this.name = name;
    this.url_image = url_image;
    this.price = price;
    this.discount = discount;
  }

  render() {
    //renderiza una carta con los elementos o variables del producto
    if (this.elem)
      this.elem.innerHTML = `
        <div class="card pb-3" style="width: 18rem;">
            <img src="${this.url_image}" class="card-img-top">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title mb-auto">${this.name}</h5>
                <p class="card-text ${this.discount > 0 ? "labeled" : ""}">$${
        this.price
      }</p>
                <!--si el producto tiene descuento se tacha el precio original(se le agrega una clase)-->
                ${
                  this.discount > 0
                    ? '<p class="card-text mb-0">$' +
                      Math.floor(
                        (this.price * (100 - this.discount)).toString() / 100
                      ) +
                      "</p>"
                    : ""
                }
                <!--si el producto tiene descuento se calcula el precio con el descuento aplicado y se muestra-->
                <a href="#" class="btn btn-primary mt-auto mt-2">Agregar <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        `;
  }
}
export const renderCards = products => {
  /* 
  Función que renderiza las cartas dado un arreglo de productos
  args: arreglo de productos
  returns: no returns
  */
  let objectsArray = [];
  //se crea un arreglo donde iran los objetos de la clase Card
  //para luegorenderizarlos
  const parent = document.getElementById("card");
  parent.innerHTML = "";
  //se resetea el div con id = card
  products.forEach((element, i) => {
    const child = document.createElement("div");
    parent.appendChild(child);
    //se crea un nodo, el cual se pasará como argumento para la clase objeto Card
    //es decir, la carta se renderiza en este div
    objectsArray.push(
      new Card(
        child,
        element.id,
        element.name,
        element.url_image,
        element.price,
        element.discount
      )
    );
    objectsArray[i].render();
  });
};

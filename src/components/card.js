"use strict";

export default class Card {
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
    if (this.elem)
      this.elem.innerHTML = `
        <div class="card col" style="width: 18rem;">
            <img src="${this.url_image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text ${this.discount > 0 ? "labeled" : ""}">$${
        this.price
      }</p>
                ${
                  this.discount > 0
                    ? '<h4 class="card-title-labeled">$' +
                      Math.floor(
                        (this.price * (100 - this.discount)).toString() / 100
                      ) +
                      "</h4>"
                    : ""
                }
                <a href="#" class="btn btn-primary">Agregar <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        `;
  }
}
export const renderCards = products => {
  let objectsArray = [];
  const parent = document.getElementById("card");
  parent.innerHTML = "";
  products.forEach((element, i) => {
    const child = document.createElement("div");
    parent.appendChild(child);
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

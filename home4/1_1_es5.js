'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price *= .75;
}

let prod = new Product('Яблоки', 200);
prod.make25PercentDiscount();
console.log(prod)
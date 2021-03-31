'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= .75;
    }
}

let prod = new Product('Яблоки', 200);
prod.make25PercentDiscount();
console.log(prod)
'use strict';

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

/**
 * Возвращает товары с фото
 * @param {Object[]} products - массив продуктов
 * @param {string[]|string} products[].photos - строка или массив фотографий товара
 * @returns {Object[]} - массив товаров с фото
 */
function getWithPhoto(products) {
    let withPhoto = [];
    for (const product of products) {
        if ('photos' in product //содержит ключ
            // является массивом или строкой
            && ((Array.isArray(product.photos)
                || typeof product.photos === 'string'))
            //что-то содержит
            && product.photos.length > 0) {
            withPhoto.push(product);
        }
    }
    return withPhoto;
}

console.log(getWithPhoto(products));

products.sort(function (a, b) {
    return a.price - b.price;
});

console.log(products);
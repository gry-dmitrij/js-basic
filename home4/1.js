'use strict';

/**
 * Целочисленное деление   
 * @param {Number} val - делимое
 * @param {Number} by - делитель
 * @returns {Number} результат целочисленного деления
 */
function div(val, by) {
    return val / by >= 0 ? 
        Math.floor(val / by) : Math.ceil(val / by);
}

/**
 * @typedef {Object} NumberObj
 * @property {Number} units - единицы числа
 * @property {Number} tens - десятки числа
 * @property {Number} hundreds - сотни числа
 */

/**
 * Возвращает объект со свойствами, содержащими разряды числа
 * @param {Number} num - число в диапазоне [0, 999]
 * @returns {NumberObj}
 */
function convertNumToObj(num) {
    let obj = {};
    if (Number.isInteger(num)
        && num >= 0
        && num <= 999) {
        obj.units = num % 10;
        obj.tens = div(num, 10) % 10;
        obj.hundreds = div(num, 100) % 10;
    } else {
        console.log('Неверный формат входных данных.\nЧисло должно быть в диапазоне [0, 999]');
    }
    return obj;
}

console.log(convertNumToObj(873));
console.log(convertNumToObj(NaN));
console.log(convertNumToObj('строка'));
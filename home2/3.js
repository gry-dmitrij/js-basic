'use strict';

/* Если a и b положительные, возвращает разность,
 * если a и b отрицательные, возвращает произведение,
 * если a и b разных знаков, возвращает сумму */
function getValue(a, b) {
    // Пытаемся привести к числу
    a = Number(a);
    b = Number(b);
    // Если не число, возвращаем ошибку
    if (!checkNumber(a)
        || !checkNumber(b)) {
        throw new Error("Передано не число");
    }
    if (a >= 0 && b >= 0) {
        return a - b;
    } else if (a < 0 && b < 0) {
        return a * b;
    } else {
        /* то, что это задание сложнее - 
         * это был сарказм? Или я что-то не понял? 
         * Можно было бы, конечно, ставить условие a * b < 0,
         * но с учетом того, что ноль считаем положительным числом,
         * то других вариантов просто не остается.*/
        return a + b;
    }
}

/**
 * Функция проверяет, является ли value числом, 
 * не NaN и не бесконечностью
 * @param  {*} Любое значение
 * @return {boolean} true - если value - число
 */
function checkNumber(value) {
    return (typeof value === 'number'
        && isFinite(value));

}

console.log(getValue(5, 8));
console.log(getValue(-5, -8));
console.log(getValue(-5, 8));
console.log(getValue("5", 8));
console.log(getValue("ajf", 8));
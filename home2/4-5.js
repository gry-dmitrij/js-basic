'use strict';

// Складывает два числа
function add(num1, num2) {
    return num1 + num2;
}

// Вычитает num2 из num1
function sub(num1, num2) {
    return num1 - num2;
}

// Умножает два числа
function mul(num1, num2) {
    return num1 * num2;
}

// Делит num1 на num2
function div(num1, num2) {
    return num1 / num2;
}

/* Производит операции над числами в зависимости
 * от operation */
function exeqOperation(num1, num2, operation) {
    let func;
    switch (operation) {
        case "add":
            func = add;
            break;
        case "sub":
            func = sub;
            break;
        case "mul":
            func = mul;
            break;
        case "div":
            func = div;
            break;
        default:
            func = null;
            break;
    }
    if (func) {
        return func(num1, num2);
    }
}

let num1 = 8,
    num2 = 2;
console.log(`${num1} + ${num2} = ${exeqOperation(num1, num2, "add")}`);
console.log(`${num1} - ${num2} = ${exeqOperation(num1, num2, "sub")}`);
console.log(`${num1} * ${num2} = ${exeqOperation(num1, num2, "mul")}`);
console.log(`${num1} / ${num2} = ${exeqOperation(num1, num2, "div")}`);
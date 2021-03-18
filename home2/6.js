'use strict';

/**
 * Возвращает валюту в нужном падеже в зависимости от суммы
 * @param {number} sum - целое число
 * @returns {String} - название валюты в нужном падеже
 */
function formatCurrency(sum) {
    if (sum % 100 >= 5
        && sum % 100 < 21) {
        return "рублей";
    }
    switch (sum % 10) {
        case 1:
            return "рубль";
        case 2:
        case 3:
        case 4:
            return "рубля";
        default:
            return "рублей";
    }
}

let sum = +prompt("Сколько денег вы хотите положить на счет?");
if (isNaN(sum)) {
    alert("Неверно введена сумма.");
} else {
    alert(`Ваша сумма в ${sum} ${formatCurrency(sum)} успешно зачислена.`);
}
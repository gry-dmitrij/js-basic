'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
const text = document.querySelector('.text');
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', clickHandler);
});

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    event.preventDefault();
    if (changeActiveClass(event)) {
        changeText(event);
    }
   
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    const link = document.querySelector('.nav-link.active');
    // если щелкнули по активному элементу, ничего не меняем
    if (link === event.target) {
        return false;
    }
    // если активный элемент был, то делаем его неактивным
    if (link) {
        link.classList.remove('active');
    }
    // делаем элемент, по которому кликали, активным
    event.target.classList.add('active');
    return true;
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    // читаем текст в ссылке
    let linkText = event.target.textContent;
    // найдем начало числа
    const index = linkText.indexOf(' ') + 1;
    // формируем имя свойства
    let propName = 'text';
    if (index > 0) {
        propName += linkText.slice(index);
    }
    // если свойство есть, берем из него текст
    if (propName in texts) {
        text.innerText = texts[propName];
    }
}
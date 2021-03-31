'use strict';

let game = {

    /**
     * Запускает игру
     */
    run() {
        this.init();
        while (true) {
            const win = this.ask(count.step + 1);
            // проверяем правильность ответа
            if (!win){
                count.lose();
                this.showResult();
                break;
            } else if (count.win()) { // если игра завершена выводим результат
                this.showResult();
                break;
            }
        }
    },

    /**
     * Иницализация для игры
     */
    init() {
        questions.createList();
        // TODO: Добавить вывод правил
    },

    /**
     * Задает пользователю вопрос
     * @param {Number} step текущий шаг в игре
     * @returns {Boolean || null} - при верном ответе возвращает true, 
     * при неверном - false, если введена не цифра - null
     */
    ask(step) {
        const question = questions.list[step];
        let num = +prompt('Ваш текущий выигрыш: ' + count.sum + '\n'
            + question.toString());
        if (!Number.isInteger(num)) {
            return null;
        }
        return num === question.trueAnswer;
    },

    /**
     * Показыавет результат
     */
    showResult() {
        alert('Игра завершена.\n'
            + 'Ваш выигрыш составил '
            + count.sum);
    }
}

game.run();
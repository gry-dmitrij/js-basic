'use strict';

let game = {

    /**
     * Запускает игру
     */
    run() {
        this.init();
        while (true) {
            const flag = this.ask(count.step + 1);
            if (!flag){
                count.lose();
                this.showResult();
                break;
            } else if (count.win()) {
                this.showResult();
                break;
            }
        }
    },

    init() {
        questions.createList();
    },

    ask(step) {
        const question = questions.list[step];
        let num = +prompt('Ваш текущий выигрыш: ' + count.sum + '\n'
            + question.toString());
        if (!Number.isInteger(num)) {
            return null;
        }
        return num === question.trueAnswer;
    },

    showResult() {
        alert('Игра завершена.\n'
            + 'Ваш выигрыш составил '
            + count.sum);
    }
}

game.run();
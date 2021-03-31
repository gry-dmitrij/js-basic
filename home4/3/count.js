let count = {
    // номер шага
    step: -1,
    // выигрыш
    sum: 0,

    /**
     * Вызывается при верном ответе
     * @returns {Boolean} возвращает true при достижении максимального выигрыша
     */
    win() {
        this.step++;
        this.sum = config.sum[this.step];
        return this.step >= config.sum.length - 1;
    },

    /**
     * Вызывается при неверном ответе,
     * сбрасывает сумму до несгорающей или до 0,
     * если несгорающая не была достигнута 
     */
    lose() {
        for (let index = config.saveSteps.length - 1; index >= 0; index--) {
            const minStep = config.saveSteps[index];
            if (this.step >= minStep) {
                this.sum = config.sum[minStep];
                return;
            }
        }
        this.sum = 0;
    }
}
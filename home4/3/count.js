let count = {
    step: -1,
    sum: 0,

    win() {
        this.step++;
        this.sum = config.sum[this.step];
        return this.step >= config.sum.length - 1;
    },

    lose() {
        for (let index = config.saveSteps.length - 1; index >= 0; index--) {
            const minStep = config.saveSteps[index];
            if (this.step >= minStep) {
                sum = config.sum[minStep];
                break;
            }
        }
    }
}
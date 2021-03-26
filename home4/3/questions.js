let questions = {
    //список вопросов
    list:[],

    createList() {
        let max = questionList.questionCount;
        // max не может быть меньше вопросов в конфиге
        if (max < config.sum.length) {
            max = config.sum.length;
        }
        let questionNums = [];
        // заполняем массив вопросов
        this.fillQuestionNums(questionNums, max);
        this.list.length = 0;
        questionNums.forEach(element => {
            let question = questionList.getQuestion(element);
            question.toString = function () {
                let str = this.question + '\n';
                for (let index = 0; index < this.answers.length; index++) {
                    str += (index + 1)+ '. ' + this.answers[index] + '\n';
                    
                }
                return str;
            }
            this.list.push(question);
        });
    },

    fillQuestionNums(questionNums, max) {
        // два алгоритма заполнения
        if (max < 100) {
            this.fillSmallQuestionNums(questionNums, max)
        } else {
            this.fillBigQuestionNums(questionNums, max);
        }
    },

    fillSmallQuestionNums(questionNums, max) {
        if (max < config.sum.length) {
            throw new Error('Слишком маленькое значение max.\n'
                + 'Невозможно сформировать массив');
        }
        let array = [];
        for (let index = 0; index <= max - 1; index++) {
            array.push(index);
        }
        for (let index = 0; index < config.sum.length; index++) {
            let num = getRandomInt(array.length);
            questionNums.push(array[num]);
            array.splice(num, 1);
        }
    },

    fillBigQuestionNums(questionNums, max) {
        if (max < config.sum.length) {
            throw new Error('Слишком маленькое значение max.\n'
                + 'Невозможно сформировать массив');
        }
        for (let index = 0; index < config.sum.length; index++) {
            do {
                let num = getRandomInt(max);    
            } while (questionNums.includes(num));
            questionNums.push(num);
        }
    }
}
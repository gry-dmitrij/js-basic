let questions = {
    //список вопросов
    list:[],

    /**
     * Создает список вопросов
     */
    createList() {
        let max = questionList.questionCount;
        // max не может быть меньше вопросов в конфиге
        if (max < config.sum.length) {
            max = config.sum.length;
        }
        let questionNums = [];
        // заполняем массив номеров вопросов
        this.fillQuestionNums(questionNums, max);
        this.list.length = 0;
        // создаем массив объектов с вопросами
        questionNums.forEach(element => {
            // получаем вопрос от эмулятора сервера
            let question = questionList.getQuestion(element);
            // добавляем метод вывода 
            question.toString = this.toString;
            // добавляем в массив вопросов
            this.list.push(question);
        });
    },

    toString(){
        let str = this.question + '\n';
        for (let index = 0; index < this.answers.length; index++) {
            str += (index + 1)+ '. ' + this.answers[index] + '\n';
            
        }
        return str;
    },

    /**
     * 
     * @param {Array} questionNums - массив, в который будет записывать 
     * номера вопросов
     * @param {NUmber} max - максимальное число вопросов в базе
     */
    fillQuestionNums(questionNums, max) {
        // два алгоритма заполнения
        if (max < 100) {
            this.fillSmallQuestionNums(questionNums, max)
        } else {
            this.fillBigQuestionNums(questionNums, max);
        }
    },

    /**
     * Алгоритм заполнения при малом количестве вопросов в базе,
     * когда при запросе Math.random числа могут часто повторяться
     * @param {Array} questionNums - массив, в который будет записывать 
     * номера вопросов
     * @param {NUmber} max - максимальное число вопросов в базе
     */
    fillSmallQuestionNums(questionNums, max) {
        if (max < config.sum.length) {
            throw new Error('Слишком маленькое значение max.\n'
                + 'Невозможно сформировать массив');
        }
        let array = [];
        // Создаем массив заполненный по порядку числами от 0 до max
        for (let index = 0; index <= max - 1; index++) {
            array.push(index);
        }
        // Выдергиваем из массива случайные значения
        for (let index = 0; index < config.sum.length; index++) {
            let num = getRandomInt(array.length);
            questionNums.push(array[num]);
            // удаляем выбранное значение из массива
            array.splice(num, 1);
        }
    },

    /**
     * Алгоритм заполнения при большом количестве вопросов в базе,
     * когда при запросе Math.random числа с большой вероятностью не 
     * будут повторяться
     * @param {Array} questionNums - массив, в который будет записывать 
     * номера вопросов
     * @param {NUmber} max - максимальное число вопросов в базе
     */
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
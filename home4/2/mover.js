let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        //const availableDirections = [2, 4, 6, 8];
        const availableDirections = [];
        for (let index = 1; index < 10; index++) {
            if (index === 5) {
                continue;
            }
            availableDirections.push(index);
            
        }

        while (true) {
            // Получаем от пользователя направление.
            let direction = parseInt(prompt('Введите число ('
                + availableDirections
                +'), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел '
                + availableDirections);
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        // Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        switch (direction) {
            case 1:
                if (nextPosition.x > 0 
                    && nextPosition.y < config.rowsCount - 1) {
                    nextPosition.x--;
                    nextPosition.y++;
                }
                break;
            case 2:
                if (nextPosition.y < config.rowsCount - 1) {
                    nextPosition.y++;
                }
                break;
            case 3:
                if (nextPosition.y < config.rowsCount - 1
                    && nextPosition.x < config.colsCount - 1) {
                    nextPosition.x++;
                    nextPosition.y++;
                }
                break;
            case 4:
                if (nextPosition.x > 0) {
                    nextPosition.x--;    
                }
                break;
            case 6:
                if (nextPosition.x < config.colsCount - 1) {
                    nextPosition.x++;    
                }
                break;
            case 7:
                if (nextPosition.x > 0 
                    && nextPosition.y > 0) {
                    nextPosition.x--;
                    nextPosition.y--;
                }
                break;
            case 8:
                if (nextPosition.y > 0) {
                    nextPosition.y--;    
                }
                break;
            case 9:
                if (nextPosition.x < config.colsCount - 1
                    && nextPosition.y > 0) {
                    nextPosition.x++;
                    nextPosition.y--
                }
                break;
        }

        return nextPosition;
    },
};
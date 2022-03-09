// Задание 1
const VALUE_FIRST = prompt('Введите значение 1!');
const VALUE_SECOND = prompt('Введите значение 2!');
const RESULT = +VALUE_FIRST;
const IS_VALID = +VALUE_SECOND < 2 && +VALUE_SECOND > 36 && isNaN(+VALUE_SECOND) && isNaN(+VALUE_SECOND)
    
if (IS_VALID) {
    console.log('Некорректный ввод!');
} else {
    console.log(RESULT.toString(+VALUE_SECOND));
}

// Задание 2
const VALUE_THIRD = prompt('Введите значение 1!');
const VALUE_FOURTH = prompt('Введите значение 2!');

if (isNaN(+VALUE_THIRD) || isNaN(+VALUE_FOURTH)) {
    console.log('Некорректный ввод!');
} else {
    console.log(`Ответ: ${+VALUE_THIRD + +VALUE_FOURTH}, ${+VALUE_THIRD / +VALUE_FOURTH}.`);    
}

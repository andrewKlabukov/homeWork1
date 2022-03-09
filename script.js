// Задание 1
const valueFirst = prompt('Введите значение 1!');
const valueSecond = prompt('Введите значение 2!');
const result = +valueFirst;
const IS_VALID = +valueSecond < 2 && +valueSecond > 36 && isNaN(+valueSecond) && isNaN(+valueSecond)
    
if (IS_VALID) {
    console.log('Некорректный ввод!');
} else {
    console.log(result.toString(+valueSecond));
}

// Задание 2
const valueThird = prompt('Введите значение 1!');
const valueFourth = prompt('Введите значение 2!');

if (isNaN(+valueThird) || isNaN(+valueFourth)) {
    console.log('Некорректный ввод!');
} else {
    console.log(`Ответ: ${+valueThird + +valueFourth}, ${+valueThird / +valueFourth}.`);    
}

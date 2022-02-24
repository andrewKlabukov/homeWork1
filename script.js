// Задание 1
let valueFirst = prompt('Введите значение 1!');
let valueSecond = prompt('Введите значение 2!');
let result = +valueFirst;
    
if (+valueSecond < 2 || +valueSecond > 36 || isNaN(+valueSecond) || isNaN(result)) {
    console.log('Некорректный ввод!');
} else {
    console.log(result.toString(+valueSecond));
}

// Задание 2
let valueThird = prompt('Введите значение 1!');
let valueFourth = prompt('Введите значение 2!');

if (isNaN(+valueThird) || isNaN(+valueFourth)) {
    console.log('Некорректный ввод!');
} else {
    console.log(`Ответ: ${+valueThird + +valueFourth}, ${+valueThird / +valueFourth}.`);    
}

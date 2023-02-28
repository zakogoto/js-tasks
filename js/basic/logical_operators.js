'use strict';

// 1
alert( null || 2 || undefined ); // 2

// 2
alert( alert(1) || 2 || alert(3) ); // 1 2

// 3
alert( 1 && null && 2 ); // null

// 4
alert( alert(1) && alert(2) ); // 1 undefined

// 5
alert( null || 2 && 3 || 4 ); // 3

// 6

14 <= age && age <= 90

// 7

age < 14 && age > 90

!(age <= 14 || age <= 90)

// 8

if (-1 || 0) alert( 'first' ); //выполняется сразу, т.к -1 в начале и равно true, дальше код не вычисляется
if (-1 && 0) alert( 'second' ); //не выполняется, возвращает false на 0
if (null || 1 && -1) console.log( 'third' ); // выполняется, сначала проверка -1 && 1, после сравнивает null || 1

//9

let userLogin = prompt('Введите ваш логин');

let password;

if(userLogin === 'Админ') {

    password = prompt('Введите пароль');

    if (!(password === '' || password === null)) {

        password === 'Я главный' ? alert('Здравствуйте!') : alert('Неверный пароль');

    } else {

        alert('Отменено')
    }

} else if (userLogin === '' || userLogin === null) {

    alert('Отменено')

} else {

    alert('Я вас не знаю');
    
}



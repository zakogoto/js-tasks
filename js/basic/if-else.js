'use strict';
// 1
if ("0") {
  alert( 'Привет' ); //Да, код выведется
}

// 2
let UserAnswer = prompt('Какое "официальное" название JavaScript?');
if( UserAnswer === 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? “ECMAScript”!');
};

// 3
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

let result = (a + b < 4) ? 'Мало' : 'Много';

// 4

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

let message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' :  '';
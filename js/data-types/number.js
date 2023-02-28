'use strict';

// 1

let x = +prompt("Введите первое число", "");
let y = +prompt("Введите второе число", "");

alert( x + y );

// 2

console.log( 1.35.toFixed(1) ); // 1.4
// Но почему в примере ниже 6.35 округляется до 6.3?

console.log(6.35.toFixed(1) ); // 6.3
console.log((6.35 * 10).toFixed(1) /10); // 6.35

// 3

function readNumber() {
    let userAnswer = prompt('Введите число', 0);

    if (userAnswer === null || userAnswer === '') return null;

    do {
        userAnswer = prompt('Введите число', '')
    } while (!isFinite(userAnswer))

    return +userAnswer;
}

alert(readNumber());

// 4

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}


// 5

function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log( random(1, 5) );
console.log( random(3, 9) );
console.log( random(8, 11) );

// 6

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1))
}

console.log( randomInteger(1, 5) );
console.log( randomInteger(3, 9) );
console.log( randomInteger(8, 11) );
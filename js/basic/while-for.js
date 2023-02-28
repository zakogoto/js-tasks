'use strict';

// 1

let i = 3;

while (i) {
  alert( i-- ); // 1
} 

// 2

let i = 0;
while (++i < 5) alert( i );  // 1, 2, 3, 4

let i = 0;
while (i++ < 5) alert( i );  //1, 2, 3, 4, 5

// 3
for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4

// 4

for (let i = 1; i <= 10; i++) {
    if( i % 2 != 0) continue;
    console.log(i);
}

// 5
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

let i = 0;
while(i < 3) {
    alert(`number ${i}!`);
    i++;
}

// 6

let MoreThenHundred;

do{

    MoreThenHundred = prompt('введите число больше 100', 0);

} while(MoreThenHundred <= 100 && MoreThenHundred);

// 7

let primeNumberInterval = 10,
    result = [];

isPrime:
for(let i = 2; i <= primeNumberInterval; i++) {
    for(let j = 2; j < i; j++) {
        if (i % j === 0) continue isPrime;
    }
    result.push(i);
}

console.log(...result);
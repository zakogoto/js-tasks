'use strict';

// 1

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log( fruits.length ); // 4

// 2
const styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles[Math.round(styles.length / 2 - 1)] = 'Классика';

console.log(styles);

console.log(styles.shift(0));

console.log(styles);

styles.unshift('Рэп', 'Регги');

console.log(styles);
// 3
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ['a', 'b', function() {alert( this )}]

// 4

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
    let arr = [];

    while(true) {
        let input = prompt('Введите число', 0);

        if(!isFinite(input) || input === '' || input === null) break;

        arr.push(+input);
   }

    let result = 0;

    for(item of arr) {
        result += item;
    }

    return result;
}

alert(sumInput());
// 5

function getMaxSubSum(arr) {
    let maxSum = 0,
        currentSum = 0;

    arr.forEach(item => {
        currentSum += item;
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) {
            currentSum = 0;
        }
    })
    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));  // == 5 
console.log(getMaxSubSum([2, -1, 2, 3, -9]));  // == 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));  // == 11
console.log(getMaxSubSum([-2, -1, 1, 2]));  //== 3
console.log(getMaxSubSum([100, -9, 2, -3, 5]));  //== 100
console.log(getMaxSubSum([1, 2, 3]));  //== 6
'use strict';

// 1

function camelize(str) {
    return str
        .split('-')
        .map((item, i) => {
            if (i === 0) {
                return item;
            } else {
                return item[0].toUpperCase() + item.slice(1);
            }
        })
        .join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// 2
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b );
}


let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)

// 3

function filterRangeInPlace(arr, a, b) {
    arr.forEach((item, i, arr) => {
        if ( a > item || item > b ) {
            arr.splice(i, 1);
            i--;
        }
    });
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr );

//4

let arr = [5, 2, 1, -10, 8];

function compareNumeric(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
  }

arr.sort(compareNumeric);

console.log( arr ); // 8, 5, 2, 1, -10

// 5

function copySorted(arr) {
    let newCopy = arr.slice()
    return newCopy.sort()
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)

// 6

function Calculator() {
    this.method = {
        "+" : (a, b) => a + b,
        "-" : (a, b) => a - b
    }
    this.calculate = (str) => {
        let arr = str.split(' '),
            a = isFinite(+arr[0]) ? +arr[0] : NaN,
            b = isFinite(+arr[2]) ? +arr[2] : NaN,
            operator = arr[1];
        if ( !this.method[operator] || isNaN(a) || isNaN(b) ) return NaN;
        return this.method[operator](a, b);
    }

    this.addMethod = (name, func) => {
        this.method[name] = func;
    }
}

let calc = new Calculator;

console.log( calc.calculate("3 - 7") );

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result );

// 7

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name)

console.log( names ); // Вася, Петя, Маша

// 8

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}))

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName )

// 9

function sortByAge(users) {
    users.sort((a, b) => a.age > b.age ? 1 : -1)
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя

// 10

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

arr = [3, 1, 2]
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));


// 11
// первый вариант
function getAverageAge(users){
    let averageAge = 0;
    users.forEach(user => {
        averageAge += user.age
    })
    return averageAge / users.length
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) );

// второй вариант

function getAverageAge(users){
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) );

// 12

function unique(arr) {

}

function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}
  
let strings = ["кришна", "кришна", "харе", "харе",
"харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );

// 13

function groupById(arr) {
    return arr.reduce((object, value) => {
        object[value.id] = value;
        return object;
    }, {})
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById);

/*
// после вызова у нас должно получиться:

usersById = {
john: {id: 'john', name: "John Smith", age: 20},
ann: {id: 'ann', name: "Ann Smith", age: 24},
pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
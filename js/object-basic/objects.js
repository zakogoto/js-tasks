// 1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const user = {};

user.name = 'John';
console.log(user);

user.surname = 'Smith';
console.log(user);

user.name = 'Pete';
console.log(user);

delete user.name;
console.log(user);

// 2
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for(key in obj) {
        return false;
    }
    return true;
}

// 3
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";

// Это будет работать, нельзя изенить именно тип переменной, сделав числом, строкой или булиновым значением.

// 4

// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function calcObjectKeysSum(obj) {
    let result = 0;
    for(key in obj) {
        result += obj[key];
    }
    return result;
}

console.log(calcObjectKeysSum(salaries));

// 5

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
console.log(menu);
multiplyNumeric(menu);
console.log(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

function multiplyNumeric(obj) {
    for(key in obj) {
        if(typeof(obj[key]) === 'number') obj[key] *= 2;
    }
}

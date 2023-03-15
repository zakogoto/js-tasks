'use strict';

// 1

{function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  console.log( counter2() ); // 0
  console.log( counter2() ); // 1
}
// 2
{
function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
let counter = new Counter();

console.log( counter.up() ); // 1
console.log( counter.up() ); // 2
console.log( counter.down() ); // 1
}

// 3

{
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {  // функция создана в цикле, поэтому существует только в его окружении и не может быть вызвана извне
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); 
}

// 4

{
    function sum(a){
        return function(b) {
            return a + b
        }
    }

    console.log(sum(1)(2));
    console.log(sum(5)(-1));
}

// 5

{

function inBetween(a, b) {
    return function(item) {
        return item >= a && item <= b;
    }
}

function inArray(arr) {
    return function(item) {
        return arr.includes(item)
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
}

// 6

{
    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" }
      ];

    function byField(fieldName) {

        return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
    }

    console.log(users);
    users.sort(byField('name'));
    
    console.log(users);
    users.sort(byField('age'));
    console.log(users);
}

// 7

function makeArmy() {
    let shooters = [];
    
    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            console.log( i );
        };
        shooters.push(shooter);
    }
    
    return shooters;
}
    
let army = makeArmy();

army[0]();
army[5]();

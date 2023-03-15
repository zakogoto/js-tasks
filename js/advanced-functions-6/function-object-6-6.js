'use strict';

// 1

function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    };
    
    counter.set = value => count = value;
    
    counter.decrease = () => --count;

    return counter;
}
let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter.set(10));
console.log(counter.decrease());
console.log(counter.decrease());

// 2
{
    function sum(a) {
        let currentSum = a;

        function f(b) {
          currentSum += b;
          return f;
        }

        f.toString = function () {
            return currentSum;
        }
      
        return f;
    }
    
    console.log(JSON.parse( sum(1)(2) )); // 1 + 2
    console.log(JSON.parse( sum(1)(2)(3) )); // 1 + 2 + 3
    console.log(JSON.parse( sum(5)(-1)(2)) ); //6
    console.log(JSON.parse( sum(6)(-1)(-2)(-3)) ); // 0
    console.log(JSON.parse( sum(0)(1)(2)(3)(4)(5)) ); // 15
}

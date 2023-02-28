'use strict';

// 1

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalariesMethod(salaries) {
    return Object.values(salaries).reduce((sum, curr) => sum + curr, 0)
}
  
console.log( sumSalariesMethod(salaries) );

function sumSalariesCycle(salaries) {
    let sum = 0;

    for(let salary of Object.values(salaries)) {
        sum += salary;
    }
    
    return sum;
}

console.log( sumSalariesCycle(salaries) );

// 2

let user = {
    name: 'John',
    age: 30
};

function count(obj) {
    return Object.keys(obj).length;
}
  
console.log( count(user) );
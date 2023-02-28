'use strict';

// 1

let user = {
    name: "John",
    years: 30
};

let {name: userName, years: age, isAdmin = false} = user;

console.log(userName);
console.log(age);
console.log(isAdmin);

// 2

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let maxSalaries = 0,
        maxEmployeeName = null;
    for(const [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalaries) {
            maxSalaries = salary;
            maxEmployeeName = name;
        }
    }
    return maxEmployeeName;
}

console.log(topSalary(salaries));
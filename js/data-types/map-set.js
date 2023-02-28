'use strict';

// 1

function unique(arr) {
    let set = new Set(arr)
    return Array.from(set);   
}
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O

// 2

function aclean(arr) {

    let map = new Map();
    arr.forEach((value) => {
        map.set(value.toLowerCase().split('').sort().join(''), value);
    })

    return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );

// 3

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

console.log(keys);
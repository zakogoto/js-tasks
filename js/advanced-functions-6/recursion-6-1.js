'use strict';

// 1

// function sumTo(n) {
//     let sum = 0;
//     if (n === 1) {
//         return sum += n;
//     } else {
//         return n + sumTo(n - 1); // max 9666
//     }
// }

// function sumTo(n) {
//     let sum = 0;
//     for (let i = 0; i < n; i++ ) {  //max 1000 000 000 на 100 000 000 000 завис ноутбук))) выполнение за 1.35 с
//         sum += (n - i)
//     }
//     return sum;
// }

// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) sum += i; // выполнение за 1.33 с
//     return sum;
// }

function sumTo(n) {
    return (n * (n + 1)) / 2  // самый быстрый вариант, выполнение за 153 мс
}

console.log(sumTo(1));// = 1
console.log(sumTo(2));// = 2 + 1 = 3
console.log(sumTo(3)); //= 3 + 2 + 1 = 6
console.log(sumTo(4)); //= 4 + 3 + 2 + 1 = 10
console.log(sumTo(1000000000)); 

// 2

function factorial(n) {
    return n === 1 ? n : n * factorial(n - 1);
}

console.log(factorial(0))

// 3

function fib(n) {
    return n <= 1 ? n : fib(n -1) + fib(n - 2);
}

function fib(n) {
    let a = 1,
        b = 1;

    for( let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77));

// 4

function printList(list) {
    console.log(list.value);
    if (list.next) {
        return printList(list.next);
    }
}

function printList(list) {
    console.log(list.value);
    do {
        list = list.next;
        console.log(list.value);
    } while (list.next)
}

function printList(list) {
    let tmp = list;
    while(tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

printList(list);

// 5
{
function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
      }
    
    console.log(list.value);
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

printReverseList(list);
}
'use strict';

// 1
function printNumbers(from, to) {
    let num = from;

    let timerId = setInterval(()=> {
        console.log(num);
        num++;
        if (num > to) clearInterval(timerId);
    }, 1000)
}

printNumbers(1, 5)

function printNumbers(from, to) {
    let current = from;
    
    function updateCurrent() {
        console.log(current);
        if (current < to) {
            timerId = setTimeout(updateCurrent, 1000);
        }
        current++;
    }
    setTimeout(updateCurrent, 1000)

}

printNumbers(1, 5)

// 2

let i = 0;

setTimeout(() => alert(i), 100); 
// Таймер запланирует выполнение функции и будет ждать выполнения следующего блока кода, чтобы вывести значение.
//  alert выведет последнее значение i, 100000000
for(let j = 0; j < 100000000; j++) {
  i++;
}
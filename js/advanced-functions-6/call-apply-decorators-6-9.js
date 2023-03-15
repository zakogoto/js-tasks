'use strict';

// 1

function work(...arr) {
    let sum = arr.reduce((curr, next) => curr + next, 0)
    console.log(sum);
}
  

function spy(f) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return f.apply(this, args);
    }
    
    wrapper.calls = [];
    
    return wrapper;
}

work = spy(work);
  
work(1, 2, 3, 5);
work(4, 5);
work(4, 5);
work(4, 59);
work();

for (let args of work.calls) {
    console.log( 'call:' + args.join() );
}

// 2

function debounce(f, ms) {
    let isCooldown = false;

    return function() {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
  };
}

let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 1100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 500); // выполняется
setTimeout( () => f(5), 3000); 

// 3

function throttle(f, ms) {
    let isWaiting = false,
        savedArgs,
        savedThis;

    function wrapper() {
        if (isWaiting){
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        f.apply(this, arguments);

        isWaiting = true;

        setTimeout(function () {
            isWaiting = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
            };
            savedArgs = null;
            savedThis = null;
        }, ms);
    };
    return wrapper;
}

function f(a) {
    console.log(a);
}
  
let f1000 = throttle(f, 1000);
let f2000 = throttle(f, 2000);

f1000(1);
// f2000(1);
setTimeout(() => f1000(2), 500);
// f2000(2);
f1000(3);
// f2000(3);

console.log(Math.round(Math.random() * 10));
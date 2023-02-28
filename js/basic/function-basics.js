// 1
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
}

function checkAge(age) {
if (age > 18) {
    return true;
}
// ...
return confirm('Родители разрешили?');
}

// разницы между поведением функций нет

// 2
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
}

function checkAge(age) {
    age > 18 ?  true :  confirm('Родители разрешили?');
};

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
};

// 3

function min(a, b) {
    return a < b ? a : b; 
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// 4

function pow(x, n) {
    return x**n;
}
function getNumbers() {
    let x = +prompt('Введите число которое будем возводить'),
        n = +prompt('Введите в какую степень будем возводить');

        if (n < 1) {
            while(n < 1) {
                alert(`${n} не может быть использованов качестве степени, введите натуральное число`);
                
                n = +prompt('Введите в какую степень будем возводить');
        }
    } else {
        alert(pow(x, n));

        let askToRepeat = confirm('Хотите повторить заново?');

        if (askToRepeat) getNumbers();
    }
}

getNumbers();
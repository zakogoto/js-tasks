// 2
function Calculator() {
    this.read = function () {
        this.number1 = +prompt('первое число', '0'),
        this.number2 = +prompt('второе число', '0')
    },
    this.sum = function () {
        return this.number1 + this.number2;
    },
    this.mul = function () {
        return this.number1 * this.number2;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); 

// 3
function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function() {
        return this.value += +prompt('Прибавляемое значение', '0')
    }
}
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
// 2
let calculator = {
    read() {
        this.number1 = +prompt('первое число', '0'),
        this.number2 = +prompt('второе число', '0')
    },
    sum() {
        return this.number1 + this.number2;
    },
    mul() {
        return this.number1 * this.number2;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

// 3

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        console.log( this.step );
        return this;
    }
  };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
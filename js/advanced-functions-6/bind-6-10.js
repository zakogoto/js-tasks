'use strict';

// 1
function f() {
    console.log( this ); // ? null при strict mode, объект window без строгого режима.
}
  
let user = {
    g: f.bind(null)
};
  
user.g();


//   2

// Можем ли мы изменить this дополнительным связыванием?

// Что выведет этот код?

function f() {
    console.log(this.name);
}
  
f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } ); // Вася. т.к контекст устанавливается при первом вызове и изменение этого н к чему не приведет.
  
f();  

//   3

function sayHi() {
    console.log( this.name );
}

sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log( bound.test ); // undefined. У данного объекта, к которому обращается вызов нет свойства test

// 4

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
  
let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },
  
};
  
// Было - askPassword(user.loginOk, user.loginFail);
askPassword(() => user.loginOk(), () => user.loginFail()); //добавление оберток позволит не потерять контекст.
// либо можно использовать bind
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 5

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(user.login.bind(user, true), user.login.bind(user, false));
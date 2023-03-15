'use strict';

// 1

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

// Rabbit.prototype = {}; //при изменении prototype новые данные будут в новых объектах, в старых оно не меняется и сохраняется прежним.

Rabbit.prototype.eats = false; // изменения вносятся в объект prototype, на который ссылкается  Rabbit, такое изменение отразится во всех ссылках на этот объект

delete rabbit.eats; // у rabbit нет свойства eats, оно берется из Rabbit.prototype, поэтому удаление ничего не дает

delete Rabbit.prototype.eats; //удаление из прототипа, такого свойтсва больше нет, поэтому возвращает undefined

console.log( rabbit.eats ); // true 

// 2

function Obj(name) {
    this.name = name;
}

let obj = new Obj('SomeName')

let obj2 = new obj.constructor('AnotherName');

console.log(obj.name)
console.log(obj2.name)

// без изменения конструктора и прототипа все работает
{
    'use strict';
function User(name) {
    this.name = name;
}
User.prototype = {}; // если не указывать на какой объект ссылкаться конструктору при прототипировании, подобная конструкция не создаст новый объект

let obj = new User('John')

let obj2 = new obj.constructor('Mike');

console.log(obj.name)
console.log(obj2.name) // вернет undefined, и создается свойство 'string' со значением Mike
}
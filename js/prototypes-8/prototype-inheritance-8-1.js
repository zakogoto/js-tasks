'use strict';

// 1

let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  console.log( rabbit.jumps ); // ? true
  
  delete rabbit.jumps;
  
  console.log( rabbit.jumps ); // ? null
  
  delete animal.jumps;
  
  console.log( rabbit.jumps ); // ? undefined

//   2

    let head = {
        glasses: 1
};
  
    let table = {
        pen: 3,
        __proto__: head
};
  
    let bed = {
        sheet: 1,
        pillow: 2,
        __proto__: table
};
  
    let pockets = {
        money: 2000,
        __proto__: bed
};

console.log(pockets.glasses) // pockets => bed => table => head. 3 шага
console.log(table.glasses); // table => head. 1 шаг. Но на практике не имеет значения, js запоминает где нашел glasses в первый раз и потом сразу ищет так

// 3

let animal = {
        eat() {
        this.full = true;
    }
};
  
let rabbit = {
    __proto__: animal
};
  
rabbit.eat();

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
// ответ: rabbit, т.к он стоит перед точкой вызова метода и метод обращает к объекту вызывающему его

// 4

let hamster = {
        stomach: [],
  
        eat(food) {
        this.stomach.push(food);
    }
};
  
let speedy = {
    stomach: [],
    __proto__: hamster,
};
  
let lazy = {
    stomach: [],
    __proto__: hamster
};
  
  // Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
  console.log( lazy.stomach ); // apple
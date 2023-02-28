'use strict';

// 1

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);

console.log(readMessages.has(messages[0]));

messages.shift(0);
console.log(readMessages.has(messages[0]));

// 2

let anotherMessages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readAnotherMessages = new WeakMap();

readAnotherMessages.set(anotherMessages[0], new Date())
'use strict';

// 1

let user = {
    name: "Василий Иванович",
    age: 35
};

console.log(JSON.stringify(user));

let anotherUser = JSON.parse(JSON.stringify(user));

console.log(anotherUser);

// 2

let room = {
    number: 23
};
  
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};
  
room.occupiedBy = meetup;
meetup.self = meetup;
  
console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key != '' && value == meetup) ? undefined : value
}));
  
  /* в результате должно быть:
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
  */
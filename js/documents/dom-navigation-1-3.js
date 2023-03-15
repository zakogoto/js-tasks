;'use strict';

// 1

{/* <html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html> */}

// Напишите код, как получить…

// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

document.body.firstElementChild
// или
document.body.children[0]

document.body.children[1]

document.body.children[1].children[1]
// или
document.body.children[1].lastElementChild

// 2

// Если elem – произвольный узел DOM-элемента…

// Правда, что elem.lastChild.nextSibling всегда равен null? Да - это правда
// Правда, что elem.children[0].previousSibling всегда равен null ? Нет, т.к это первый элемент, но перед ним могут быть узлы

// 3
let table = document.body.firstElementChild;
for(let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.background = 'red';
    // так же можно вынести в отдельную переменную table.rows[i] и немного сократить код
    // let rows = table.rows[i]
    // rows.cells[i].style.background = 'red';
}
'use strict';

// 1

document.querySelectorAll('li').forEach(li => {
    // получаем название из текстового узла
  let title = li.firstChild.data;

  title = title.trim(); // удаляем лишние пробелы c конца строки

    // считаем количество потомков
  let count = li.getElementsByTagName('li').length;

  alert(title + ': ' + count);
}) 

// 2

// Что выведет этот код?

// <html>

// <body>
//   <script>
//     alert(document.body.lastChild.nodeType);
//   </script>
// </body>

// </html>

// Ответ: 1

// 3

// Что выведет этот код?

// <script>
//   let body = document.body;

//   body.innerHTML = "<!--" + body.tagName + "-->";

//   alert( body.firstChild.data ); // что выведет?
// </script>

// Ответ: BODY

// 4

// Объектом какого класса является document? HTMLDocument

// Какое место он занимает в DOM-иерархии? Сразу после Node

// Наследует ли он от Node или от Element, или может от HTMLElement? 
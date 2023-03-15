'use strict';

// 1 createTextNode vs innerHTML vs textContent

// У нас есть пустой DOM-элемент elem и строка text.
// Какие из этих 3-х команд работают одинаково?
// elem.append(document.createTextNode(text)) 
// elem.innerHTML = text
// elem.textContent = text

// Ответ: 1, 3

// 2 Очистите элемент

{/* <ol id="elem">
  <li>Привет</li>
  <li>Мир</li>
</ol> */}

function clear(elem) {
    elem.innerHTML ='';
}

clear(elem);

//   3 Почему остаётся "aaa"?

// В примере ниже вызов table.remove() удаляет таблицу из документа.

// Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.

// Почему так происходит?

{/* <table id="table">
  aaa
  <tr>
    <td>Тест</td>
  </tr>
</table>

<script>
  alert(table); // таблица, как и должно быть

  table.remove();
  // почему в документе остался текст "ааа"?
</script> */}

// 'ааа' в таблице находится без табличного тэга, и выводится выше таблицы

// 4 Создайте список

let list = document.createElement('ul');

document.body.append(li);


while (true) {
    let newListItem = prompt('Введите текст для элемента списка', '');
    
    if(!newListItem) {
        break;
    }

    let li = document.createElement('li');

    li.textContent = newListItem;
    list.append(li);
}

// 5 Создайте дерево из объекта

let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
};

function createTree(container, data) {
    container.innerHTML = createLists(data);
  }

  function createLists(data) {
      let li = '';
      let ul;
      for(let key in data) {
        li += '<li>' + key + createLists(data[key]) + '</li>'
      }
      if (li) {
        ul = '<ul>' + li + '</ul>';
      }
      return ul || '';
  }

console.log(createTree(document.getElementById('tree'), data))


function createTree(container, data) {
    container.append(createLists(data));
}

function createLists(data) {
    if (!Object.keys(data).length) return;

    let ul = document.createElement('ul');

    for (let key in data) {
      let li = document.createElement('li');
      li.innerHTML = key;

      let innerList = createLists(data[key]);
      if (innerList) {
        li.append(innerList);
      };

      ul.append(li);
    }

    return ul;
}

// 6 Выведите список потомков в дереве

function addAmountOfChilds() {

    let listElements = document.getElementsByTagName('li');

    for (let li of listElements) {
      let childsAmount = li.getElementsByTagName('li').length;
      if (!childsAmount) continue;

      li.firstChild.data += `[${childsAmount}]`;
    }
  }

  addAmountOfChilds();

//   7 Создайте календарь в виде таблицы

function createCalendar(elem, year, month) {

    let curMonth = month - 1; 
    let curDate = new Date(year, curMonth);
  
    let table = document.createElement('table');
    let tableRow = document.createElement('tr')
  
    function getDay(curDate) {
      let day = curDate.getDay();
      if (day == 0) day = 7;
      return day - 1;
    }
  
    function createHead() {
      let days = ['пн','вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
      let headRow = document.createElement('tr');
      for (let day of days) {
        let tableHead = document.createElement('th');
        tableHead.textContent = day;
        headRow.append(tableHead);
      };
      table.append(headRow);
    }
  
  
    function createEmptyCells(endOfMonth) {
      if(endOfMonth) {
        for (let i = getDay(curDate); i < 7; i++) {
          let emptyCells = document.createElement('td');
          tableRow.append(emptyCells);
        }
      } else {
        for (let i = 0; i < getDay(curDate); i++) {
          let emptyCells = document.createElement('td');
          tableRow.append(emptyCells);
        }
      }
    }
  
    function createDateCells() {
      while (curDate.getMonth() == curMonth) {
        let dateCells = document.createElement('td');
        dateCells.textContent = curDate.getDate();
        tableRow.append(dateCells);
  
        if (getDay(curDate) % 7 == 6) { 
          table.append(tableRow);
          tableRow = document.createElement('tr');
        }
  
        curDate.setDate(curDate.getDate() + 1);
      }
      if (getDay(curDate) != 0) {
        createEmptyCells(true);
        
        table.append(tableRow);
      }
    }
  
    createHead();
    createEmptyCells();
    createDateCells();
  
    elem.append(table);
  }
  
  
  createCalendar(calendar, 2012, 1);

//   8 Цветные часы с использованием setInterval

function updateWatch() {
    let hours = document.querySelector('#hours'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds'),
        now = new Date();
  
    let h =  now.getHours(),
        m = now.getMinutes(),
        s = now.getSeconds();
  
    hours.textContent = (h < 10) ?  '0' + h : h;
    minutes.textContent = (m < 10) ? '0' + m : m;
    seconds.textContent = (s < 10) ? '0' + s : s;
}
  
let timeInterval;
  
function clockStart() {
timeInterval = setInterval(updateWatch, 1000)
updateWatch();
}
  
function clockStop() {
clearInterval(timeInterval)
}

// 9 Вставьте HTML в список
let newLi = '<li>2</li><li>3</li>',
    firtItem = document.querySelector('#one');

firtItem.insertAdjacentHTML('afterend', newLi);

// 10 Сортировка таблицы

let table = document.querySelector('#table'),
    rows = table.querySelectorAll('tr');

let sortedRows = Array.from(rows)
  .slice(1)
  .sort((a, b) => a.cells[0].innerHTML > b.cells[0].innerHTML ? 1 : -1);

table.append(...sortedRows);
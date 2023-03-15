// 1

// Как найти?…

// Таблицу с id="age-table".
const table = document.querySelector('#age-table');
document.getElementById('age-table');
// Все элементы label внутри этой таблицы (их три).
table.getElementsByTagName('label')
table.querySelectorAll('label')
document.querySelectorAll('#age-table label')
// Первый td в этой таблице (со словом «Age»).
document.querySelector('#age-table').querySelector('td')
// Форму form с именем name="search".
document.getElementsByName('search')[0]
// Первый input в этой форме.
document.getElementsByName('search')[0].getElementsByTagName('input')[0]
// Последний input в этой форме.
document.getElementsByName('search')[0].lastElementChild;
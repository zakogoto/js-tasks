// 1

let someDate = new Date(2012, 1, 20, 3, 12)

console.log(someDate)

// 2

let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()]
}

console.log( getWeekDay(date) ); 

// 3

function getLocalDay(date) {
    return date.getDay() === 0 ? 7 : date.getDay()
}
let date = new Date(2012, 0, 3);
 // 3 января 2012 года
 console.log( getLocalDay(date) );

//  4

function getDateAgo(date, days) {
    let newDate = new Date(date);

    newDate.setDate(date.getDate() - days);
    return newDate.getDate()
}

let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// 5

function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 1);
}

console.log(getLastDayOfMonth(2019, 11));

// 6
function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    return Math.round((now - today) / 1000);
}

console.log(getSecondsToday())

// 7

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    return Math.round((tomorrow - now) / 1000);
}

console.log(getSecondsToTomorrow())

// 8

function formatDate(date) {
    let different = new Date() - date;

    if (different < 1000) {
      return 'прямо сейчас';
    }
  
    let sec = Math.floor(different / 1000);
  
    if (sec < 60) {
      return `${sec} сек. назад`;
    }
  
    let min = Math.floor(different / 60000);
    if (min < 60) {
    return `${min} мин. назад`;
    }

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) )
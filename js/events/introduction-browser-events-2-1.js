// 1

function hideText() {
    text.style.display = 'none'
}

document.querySelector('#hider').addEventListener('click', hideText);

// 2

document.querySelector('#hider').addEventListener("click", e => e.target.style.display = 'none')

{/* <input type="button" id="hider" onclick="this.hidden=true" value="Нажмите, чтобы спрятать кнопку" /> */}

// 3

// В переменной button находится кнопка. Изначально на ней нет обработчиков.

// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

button.addEventListener("click", () => alert("1")); //сначала этот

button.removeEventListener("click", () => alert("1")); // первый обработчик не удалится, т.к эта функция не удаляет его

button.onclick = () => alert(2); //потом этот

// 4

field.addEventListener('click',(e) => {
    let fieldCoord = e.target.getBoundingClientRect();

    let top = e.clientY - fieldCoord.top - field.clientTop - ball.offsetHeight/2;
    let left = e.clientX - fieldCoord.left - field.clientLeft - ball.offsetWidth/2;

    if (top < 0) top = 0;
    if (left < 0) left = 0;
    if (left + ball.clientWidth > field.clientWidth) {
      left = field.clientWidth - ball.clientWidth;
    }
    if (top + ball.clientHeight > field.clientHeight) {
      top = field.clientHeight - ball.clientHeight;
    }
    field.style.position = 'relative';
    ball.style.position = 'absolute';
    ball.style.top = top + 'px';
    ball.style.left = left + 'px';
    //так же в стилях указывается высота и ширина мяча
})

// 5

// <!DOCTYPE HTML>
// <html>
// <head>
//   <meta charset="utf-8">
//   <style>
//     .menu .title::before{
//       content: '▶';
//       color: green;
//     }
//     .menu .active {
//       display: block;
//     }
//     .menu.active .title::before{
//       content: '▼';
//       color: green;
//     }
//     .menu ul {
//       display: none;
//     } 
//     .menu.active ul {
//       display: block;
//     }
//     .title {
//       cursor: pointer
//     }
//   </style>
// </head>
// <body>
//   <div class='menu'>
//     <span class='title'> Сладости (нажми меня)!</span>
//     <ul>
//       <li>Пирожное</li>
//       <li>Пончик</li>
//       <li>Мёд</li>
//     </ul>
//   </div>
//   <script>
    let menu = document.querySelector('.menu'),
        title = menu.querySelector('.title');

    title.addEventListener('click', ()=> menu.classList.toggle('active'));
  {/* </script>
</body>
</html> */}

// 6

// В css:
//  .pane {
//   background: #edf5e1;
//   padding: 10px 20px 10px;
//   border-top: solid 2px #c4df9b;
//   position: relative;
// }

// .remove-button {
//   position: absolute;
//   font-size: 110%;
//   color: darkred;
//   top: 10px;
//   right: 10px;
//   width: 24px;
//   height: 24px;
//   border: none;
//   background: transparent;
//   cursor: pointer;
// }
// .close {
//   display: none;

// В HTML к элементам pane добавлял в начало
{/* <button class="remove-button">[x]</button> */}

let closeBtns = document.querySelectorAll(".remove-button");

function closePane(e) {
  e.target.parentElement.classList.add('close');
}
closeBtns.forEach(btn => {
  btn.addEventListener('click', closePane)
})

// Так же можно создавать кнопку закрытия динамически во всех блоках, тогда код будет следующий

let panes = document.querySelectorAll('.pane');

panes.forEach( pane => {
    let closeBtn = '<button class="remove-button">[x]</button>';
    pane.insertAdjacentHTML('afterbegin', closeBtn);
  pane.firstChild.addEventListener('click', ()=> pane.classList.add('close'))
})

// 7
let i = 1;
for(let li of slider.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* конфигурация */
let width = 130; // ширина картинки
let count = 3; // видимое количество изображений

let sliderInner = slider.querySelector('ul');

let slide = slider.querySelectorAll('li');
let offset = 0; // положение ленты прокрутки

slider.querySelector('.prev').onclick = function() {
  // сдвиг влево
  offset += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  offset = Math.min(offset, 0)
  sliderInner.style.marginLeft = offset + 'px';
};

slider.querySelector('.next').onclick = function() {
  // сдвиг вправо
  offset -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  sliderInner.style.marginLeft = offset + 'px';
  offset = Math.max(offset, -width * (slide.length - count));
};
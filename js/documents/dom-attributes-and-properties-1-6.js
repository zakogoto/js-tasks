// 1

// Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

// <!DOCTYPE html>
// <html>
// <body>

//   <div data-widget-name="menu">Choose the genre</div>

//   <script>
    let menu = document.querySelector('[data-widget-name]');
        alert(menu.dataset.widgetName)
//   </script>
// </body>
// </html>

// 2

let links = document.querySelectorAll('a');
for(let link of links) {
    let arg = link.getAttribute('href');
    if (!arg) continue;

    if (!arg.includes('://') || arg.startsWith('http://internal.com')) continue;

    link.style.color = 'orange';
}
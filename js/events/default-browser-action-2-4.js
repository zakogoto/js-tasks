// 1

// Почему в коде ниже return false не работает?

{/* <script>
  function handler() {
    alert( "..." );
    return false;
  }
</script>

<a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a> */}

// один из способов решения, добавить event и прописать e.preventDefault()
{/* <script> */}
  function handler(e) {
    alert( "..." );
    e.preventDefault();
  }
// </script>

{/* <a href="https://w3.org" onclick="handler(e)">браузер откроет w3.org</a> */}

// 2

let contents = document.querySelector('#contents');

contents.addEventListener('click', (event) => {
  let target = event.target.closest('A');
  if(target && contents.contains(target)) {
    let isVisited = confirm(`Do you want to visit ${target.getAttribute('href')}?`);
    if(!isVisited) {
      event.preventDefault();
    }
  }
});

// 3

let thumbs = document.querySelector("#thumbs"),
    largeImg = document.querySelector("#largeImg");

thumbs.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target.closest("a");
    let href = target.href;
    let title = target.title;
    largeImg.setAttribute("src", `${href}`);
    largeImg.setAttribute("title", `${title}`);
});
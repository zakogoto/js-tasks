// 1

let view = document.querySelector("#view"),
    area;

view.addEventListener('click', (e)=> {
    let target = e.target;
    area = document.createElement('textarea');
    area.classList.add('edit');
    area.value = target.innerHTML;
    
    target.replaceWith(area);
    area.focus();

    area.addEventListener('keydown', (e)=> {
    if (e.key == 'Enter') {
        e.target.blur();
    }
    })

    area.addEventListener('blur', () => {
    view.innerHTML = area.value;
    area.replaceWith(view);
    })
})

// 2

let table = document.getElementById('bagua-table'),
    editArea;

table.addEventListener('click', (e) => {
  let target = e.target.closest('.edit-cancel, .edit-submit, td');

  if (!table.contains(target)) return;

  if (target.className == 'edit-cancel') {
    finishTdEdit(editArea.elem, false);
  } else if (target.className == 'edit-submit') {
    finishTdEdit(editArea.elem, true);
  } else if (target.nodeName == 'TD') {
    if (editArea) return;

    editTable(target);
  }
})

function editTable(td) {
    editArea = {
    elem: td,
    data: td.innerHTML
  };

  td.classList.add('edit-td');

  let textArea = document.createElement('textarea');
  textArea.style.width = td.clientWidth + 'px';
  textArea.style.height = td.clientHeight + 'px';
  textArea.className = 'edit-area';

  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML("beforeEnd",
    '<div class="edit-controls"><button class="edit-submit">OK</button><button class="edit-cancel">CANCEL</button></div>'
  );
}

function finishTdEdit(td, isOk) {
  td.innerHTML = isOk ? td.firstChild.value : editArea.data;

  td.classList.remove('edit-td');
  editArea = null;
}

// 3

mouse.tabIndex = 0;
mouse.addEventListener('focus', (e)=> {
  let target = e.target,
      style = target.style;

  style.position = 'fixed';
  style.top = target.getBoundingClientRect().top + 'px';
  style.left = target.getBoundingClientRect().left + 'px';
  
  target.addEventListener('keydown', (e)=> {
    let target = e.target,
        style = target.style;
        
    switch (e.key) {
      case 'ArrowDown':
        style.top = parseInt(style.top) + target.offsetHeight + 'px';
          return false;

      case 'ArrowUp':
        style.top = parseInt(style.top) - target.offsetHeight + 'px';
          return false;

      case 'ArrowLeft':
        style.left = parseInt(style.left) - target.offsetWidth + 'px';
          return false;
          
      case 'ArrowRight':
        style.left = parseInt(style.left) + target.offsetWidth + 'px';
          return false;
    }
  })
})
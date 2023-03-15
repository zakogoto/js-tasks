// 1

document.addEventListener('click', (e)=> {
    let closeBtn = e.target.closest('.remove-button');

    if (!closeBtn) return;

    let pane = closeBtn.closest('.pane');
    pane.remove();
  })

//   2

let tree = document.getElementById('tree');

tree.querySelectorAll('li').forEach(li => {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling);
})

tree.addEventListener('click', (e)=> {
  let target = e.target;
  if(target.tagName !== "SPAN") return;

  let childList = target.parentNode.querySelector('ul');

  if(!childList) return;

  childList.hidden = !childList.hidden;
})

// 3

let table = document.querySelector('#grid');

function sortTable(cellIndex, sortType) {
  let tableBody = document.querySelector('tbody');
  let rows = tableBody.querySelectorAll('tr');

  let rowsArr = Array.from(rows);

  let compare;

  switch(sortType) {
    case 'number':
      compare = function(a, b) {
        return a.cells[cellIndex].innerHTML - b.cells[cellIndex].innerHTML
      }
      break;
    case 'string':
      compare = function(a, b) {
        return a.cells[cellIndex].innerHTML > b.cells[cellIndex].innerHTML ? 1 : -1;
      }
      break;
  }
  rowsArr.sort(compare);
  tableBody.append(...rowsArr);
}

table.addEventListener('click', (e)=> {
  let target = e.target;

  if(target.tagName !== 'TH') return;

  sortTable(target.cellIndex, target.dataset.type);
})

// 4

let tooltipElem = document.createElement('div');

document.addEventListener('mouseover', addToolTip)

document.addEventListener('mouseout', removeTooltip);

function addToolTip(e) {

  if(e.target.tagName === 'BUTTON') {
    let btn = e.target;
    let tooltipValue = btn.dataset.tooltip;

    if(!tooltipValue) return;

    tooltipElem.classList.add('tooltip');
    tooltipElem.innerHTML = tooltipValue;
    document.body.append(tooltipElem);

    let coords = btn.getBoundingClientRect();
    let left = coords.left + (btn.offsetWidth - tooltipElem.offsetWidth) / 2;

    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    
    if (top < 0) {
      top = coords.top + btn.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

  }
}
function removeTooltip() {
    tooltipElem.remove();
}
// 1

let modalContainer = document.querySelector('#prompt-form-container'),
    openModalBtn = document.querySelector('#show-modal');

showCover = () => {
  modalContainer.style.visibility = 'visible';
  document.body.style.overflowY = 'hidden';
}

hideCover = () => {
  modalContainer.style.visibility = 'hidden';
  document.body.style.overflowY = '';
}

hideCover();

openModalBtn.addEventListener('click', ()=> {
  showPrompt("Введите что-нибудь<br>...умное :)", 
  value => alert("Вы ввели: " + value)
)})

function showPrompt(html, callback) {
  showCover();

  let form = document.querySelector("#prompt-form"),
      modalMessage = form.querySelector("#prompt-message"),
      modalInput = form.text,
      cancelBtn = form.cancel;

  modalInput.value = '';

  modalMessage.innerHTML = html;
  modalInput.focus();

  cancelBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      modalInput.focus();
      e.preventDefault();
    }
  });

  modalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && e.shiftKey) {
      cancelBtn.focus();
      e.preventDefault();
    }
  });

  cancelBtn.addEventListener('click', ()=> showMessage(null));

  document.addEventListener('keydown', (e)=> {
    if (e.key === 'Escape') showMessage(null);
  });

  form.addEventListener('submit', (e)=> {
    let value = modalInput.value;
    if (value === '') {
      e.preventDefault();
      return;
    };
    showMessage(value);
    e.preventDefault();
  })

  function showMessage(value) {
    callback(value);
    value = '';
    hideCover();
  }
}
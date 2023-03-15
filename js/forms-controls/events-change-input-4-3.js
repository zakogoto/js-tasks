// 1

let form = document.forms.calculator;

form.money.addEventListener('input', calculate);
form.months.addEventListener('change', calculate);
form.interest.addEventListener('input', calculate);

function calculate() {

    let initial = +form.money.value;
    if(!initial) return;

    let interest = form.interest.value * 0.01;
    if (!interest) return;

    let years = form.months.value / 12;
    if (!years) return;

    let result = Math.round(initial * (1 + interest) ** years);

    heightAfter = document.querySelector('#height-after');
    heightAfter.style.height = result / initial * 100 +'px';
    document.querySelector('#money-before').textContent = initial;
    document.querySelector('#money-after').textContent = result;
}

calculate();
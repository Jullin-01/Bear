const bear = document.querySelector('#bear');
const sweets = document.querySelector('#sweets');

let inputs = document.querySelectorAll('input');
inputs = Array.from(inputs);
const buttonsChoseBear = inputs.filter(input => input.id.indexOf('bear_color_choice_') === 0);
const buttonsChoseSweets = inputs.filter(input => input.id.indexOf('sweets_choice_') === 0);

function choseSweetsHandler() {
    sweets.classList.remove(sweets.classList[0]);
    sweets.classList.add(this.value);
}

buttonsChoseSweets.forEach(button => { button.addEventListener('change', choseSweetsHandler) });

function choseBearHandler() {
    bear.classList.remove(bear.classList[0]);
    bear.classList.add(this.value);
}

buttonsChoseBear.forEach(button => { button.addEventListener('change', choseBearHandler) });

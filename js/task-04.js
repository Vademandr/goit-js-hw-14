const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');

let counterValue = 0;

valueSpan.style.backgroundColor = 'grey';
valueSpan.style.padding = '32px';
valueSpan.style.fontSize = '20px';

decrementBtn.style.backgroundColor = 'tomato';
decrementBtn.style.padding = '20px';
decrementBtn.style.fontSize = '20px';
decrementBtn.style.borderRadius = `50%`;

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});

incrementBtn.style.backgroundColor = 'green';
incrementBtn.style.padding = '20px';
incrementBtn.style.fontSize = '20px';
incrementBtn.style.borderRadius = `50%`;

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});
const result = document.getElementById('calc_result');
const calcButton = document.getElementById('calcButton');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

function calc (num1, num2) {
  result.innerText = num1 + num2
}

calcButton.addEventListener('click', () => {
  const num1Val = Number(num1.value);
  const num2Val = Number(num2.value);
  calc(num1Val, num2Val);
});


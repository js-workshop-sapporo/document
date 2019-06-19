const result = document.getElementById('calc_result');
const calcButton = document.getElementById('calcButton');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

function calc (num1, num2) {
  result.innerText = Number(num1) + Number(num2)
}

calcButton.addEventListener('click', () => {
  const num1Val = num1.value;
  const num2Val = num2.value;
  calc(num1Val, num2Val);
});


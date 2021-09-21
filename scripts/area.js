const input1Page1 = document.getElementById('input-1');
const input2Page2 = document.getElementById('input-2');
const input3Page3 = document.getElementById('input-3');
const outputPage1 = document.getElementById('output-1');
const buttonPage1 = document.getElementById('btn-3');

const area = () => {
  let a = Number(input1Page1.value);
  let b = Number(input2Page2.value);
  let c = Number(input3Page3.value);
  if (a + b > c && b + c > a && a + c > b) {
    let s = (a + b + c) / 2;
    let res = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    outputPage1.innerText = `Area of a triangle using heron's formula is ${res.toFixed(
      4
    )} units`;
  } else {
    outputPage1.innerText =
      'Enter valid side lengths such that each side lengths is same';
  }
};

buttonPage1.addEventListener('click', area);

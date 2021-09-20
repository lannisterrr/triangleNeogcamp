const input1Page1 = document.getElementById('input-1');
const input2Page2 = document.getElementById('input-2');
const outputPage1 = document.getElementById('output-1');
const buttonPage1 = document.getElementById('btn-2');

const hypotenuse = () => {
  let a = Number(input1Page1.value);
  let b = Number(input2Page2.value);
  let add = Math.pow(b, 2) + Math.pow(a, 2);
  let res = Math.sqrt(add);
  console.log(res);
  outputPage1.innerText = `The length of hypotenuse is: ${res.toFixed(2)}`;
};

buttonPage1.addEventListener('click', hypotenuse);

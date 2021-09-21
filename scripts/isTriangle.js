// Page-1 (isTriangle)

const input1Page1 = document.getElementById('input-1');
const input2Page2 = document.getElementById('input-2');
const input3Page3 = document.getElementById('input-3');
const outputPage1 = document.getElementById('output-1');
const buttonPage1 = document.getElementById('btn-1');

const isTriangle = () => {
  let a = Number(input1Page1.value);
  let b = Number(input2Page2.value);
  let c = Number(input3Page3.value);
  let res = a + b + c;
  if (res === 180) {
    outputPage1.innerText = 'Yes! it is a triangle';
  } else {
    outputPage1.innerText = 'Not a triangle.';
  }
};

buttonPage1.addEventListener('click', isTriangle);

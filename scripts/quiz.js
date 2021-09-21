const quizform = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('#output');

const correctAnswers = [
  '90°',
  'right angled',
  'Equilateral',
  'Two sides are equal',
];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formData = new FormData(quizform);
  for (let value of formData.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }
  outputEl.innerText = `Your Score is: ${score}`;
}

submitAnswerBtn.addEventListener('click', calculateScore);

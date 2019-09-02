const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  scrollTo(0, 0);
  let output = 0;
  setTimeout(() => {
    const timer = setInterval(() => {
      result.querySelector('span').textContent = `${output}%`;
      if (output === score) {
        clearInterval(timer);
      } else {
        output++;
      }
    }, 10);
  }, 500);
  result.classList.remove('d-none');
});

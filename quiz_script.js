
const quizData = [
  {
    question: "What is resin bound surfacing?",
    options: ["Loose gravel", "Tarmac", "Aggregate mixed with resin", "Tiles"],
    answer: 2
  },
  {
    question: "How long does it take resin to cure?",
    options: ["1 hour", "12–24 hours", "3 days", "1 week"],
    answer: 1
  }
];

function renderQuiz() {
  const container = document.getElementById("quiz-questions");
  quizData.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>${i+1}. ${q.question}</strong></p>`;
    q.options.forEach((opt, j) => {
      div.innerHTML += `<label><input type="radio" name="q${i}" value="${j}"> ${opt}</label>`;
    });
    container.appendChild(div);
  });
}

function gradeQuiz() {
  let score = 0;
  quizData.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) score++;
  });
  return score;
}

document.getElementById("quiz-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const score = gradeQuiz();
  const percent = (score / quizData.length) * 100;
  document.getElementById("result").innerHTML = `<h3>Score: ${percent}%</h3>` +
    (percent >= 80 ? "<p>✅ Passed</p>" : "<p>❌ Try Again</p>");
});

renderQuiz();

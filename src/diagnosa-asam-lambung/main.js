const questionList = [
  { text: 'Perut sering kembung (begah) / distensi abdominal', score: 5 },
  {
    text:
      'Heartburn (sensasi seperti terbakar) di perut, dada, dan tenggorokan ',
    score: 5,
  },
  {
    text: 'Nyeri di bagian perut atas sampai dada (nyeri di ulu hati)',
    score: 5,
  },
  { text: 'Muda lelah, letih, dan lesu', score: 5 },
  { text: 'Sering sendawa', score: 5 },
  { text: 'Sesak nafas ringan sampai berat (sulit bernafas lega)', score: 5 },
  {
    text: 'Rasa tidak nyaman saat beraktivitas maupun  beristirahat',
    score: 5,
  },
  { text: 'Sering mual dan muntah ', score: 5 },
  { text: 'Rasa nyeri atau panas di perut ', score: 5 },
  { text: 'Emosi menjadi tidak stabil (cemas berlebih)', score: 5 },
  { text: 'Jantung berdebar â€“ debar', score: 3 },
  { text: 'Kehilangan nafsu makan atau justru mudah lapar', score: 3 },
  { text: 'Anggota badan terasa berat (tangan, kaki, dan kepala)', score: 3 },
  { text: 'Sering keluar kringat dingin', score: 3 },
  { text: 'Gangguan tidur (insomnia)', score: 3 },
  { text: 'Borborygmus (perut sering berbunyi)', score: 2 },
  { text: 'Mulut terasa kering, asam dan atau pahit', score: 2 },
  { text: 'Berat badan turun ', score: 2 },
  { text: 'Sering sariawan di bibir dan mulut', score: 2 },
  {
    text: 'Telapak tangan dan kaki sering terasa panas atau dingin ',
    score: 2,
  },
]
var totalScore = 0
var questionIndex = 0

const questionSection = document.getElementById('question-section')
const scoreSection = document.getElementById('score-section')
const btnAnswerQuestion = document.getElementById('btn-answer-question')

const questionText = document.getElementById('question-text')
const questionCount = document.getElementById('question-count')
const scoreText = document.getElementById('score-text')

const btnYa = document.getElementById('btn-1')
const btnTidak = document.getElementById('btn-0')
const btnReset = document.getElementById('btn-reset')

function showQuestion() {
  questionText.innerText = `${questionIndex+1}. ${questionList[questionIndex].text}`
  questionCount.innerText = `${questionIndex+1} / ${questionList.length} Pertanyaan`
  btnAnswerQuestion.style.display = 'block'
}

function toggleTestDisplay(showQuestion) {
  if (showQuestion) {
    questionSection.style.display = 'block'
    scoreSection.style.display = 'none'
  } else {
    scoreSection.style.display = 'block'
    questionSection.style.display = 'none'
  }
}

function showScore() {
  const gejala =
    totalScore >= 41 ? 'Berat' : totalScore >= 25 ? 'Sedang' : 'Ringan'
  scoreText.innerHTML = `Anda memliki <span style="font-weight: bold">Gejala ${gejala}</span> Asam Lambung`
  console.log(totalScore)
}

function btnClick(value) {
  totalScore = value
    ? totalScore + questionList[questionIndex].score
    : totalScore
  if (questionIndex >= questionList.length-1) {
    showScore()
    toggleTestDisplay(false)
  } else {
    questionIndex++
    showQuestion()
  }
}

function resetTest() {
  totalScore = 0
  questionIndex = 0
  showQuestion()
  toggleTestDisplay(true)
}

btnYa.addEventListener('click', function () {
  btnClick(1)
})
btnTidak.addEventListener('click', function () {
  btnClick(0)
})
btnReset.addEventListener('click', function () {
  resetTest()
})

toggleTestDisplay(true)
showQuestion()
questions = document.querySelectorAll('.question-container')

questions.forEach(question => {
  question.addEventListener('click', () => {
    removeActiveClasses()
    let classes = Array.from(question.parentElement.classList)
    question.parentElement.classList.add('active')
  })
})

const removeActiveClasses = () => questions
  .forEach(question => question.parentElement.classList.remove('active'))
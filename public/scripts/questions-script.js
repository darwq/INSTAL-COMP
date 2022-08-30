const questions = document.querySelectorAll(".questions .question");

questions.forEach(question => {
    question.addEventListener("click", (e) => {
        question.classList.toggle("open");
    })
})
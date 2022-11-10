// Getting all the required elements

const start_btn = document.querySelector(".start_btn button");
const info = document.querySelector(".info");
const continue_btn = info.querySelector(".buttons .continue");
const quiz = document.querySelector(".quiz");

//When start button is clicked
start_btn.onclick = () => {
    info.classList.add("activeInfo");
}

//When continue button is clicked
continue_btn.onclick = () => {
    start_btn.classList.add("unactive")
    info.classList.remove("activeInfo")
    quiz.classList.add("activeQuiz")
}

//When next button is clicked

// When replay button is clicked

//Getting questions and options from array
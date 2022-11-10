// Getting all the required elements

const start_btn = document.querySelector(".start_btn button");
const info = document.querySelector(".info");
const continue_btn = info.querySelector(".buttons .continue");
const quiz = document.querySelector(".quiz");

const option_area = document.querySelector(".option_area")

//When start button is clicked
start_btn.onclick = () => {
    info.classList.add("activeInfo");
}

//When continue button is clicked
continue_btn.onclick = () => {
    start_btn.classList.add("unactive")
    info.classList.remove("activeInfo")
    quiz.classList.add("activeQuiz")
    showQuestions(0);
}

//When next button is clicked

// When replay button is clicked

//Getting questions and options from array
function showQuestions(index){
    const question_area = document.querySelector(".question_area");
    let que_tag = '<span>' + questions[index].numb + '.' + questions[index].question + '</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] + '<span></span></div>'
                    +'<div class="option">'+ questions[index].options[1] + '<span></span></div>'
                    +'<div class="option">'+ questions[index].options[2] + '<span></span></div>'
                    +'<div class="option">'+ questions[index].options[3] + '<span></span></div>';
    question_area.innerHTML = que_tag;
    option_area.innerHTML = option_tag;
    const option = option_area.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
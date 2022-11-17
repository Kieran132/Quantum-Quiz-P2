// Getting all the required elements

const home_page = document.querySelector(".home_page")
const start_btn = document.querySelector(".start_btn button");
const info = document.querySelector(".info");
const continue_btn = info.querySelector(".buttons .continue");
const quiz = document.querySelector(".quiz");

const option_area = document.querySelector(".option_area")
const next_btn = quiz.querySelector(".next_btn")
const results = document.querySelector(".results")

const quit = results.querySelector(".buttons_end .stop")

const username = document.querySelector(".username_inupt")
const submit = document.querySelector(".submit")
const storedUsername = localStorage.getItem("text")

let que_count = 0;
let que_number = 1;
let userScore = 0;


//When start button is clicked
start_btn.onclick = () => {
    info.classList.add("activeInfo");
    home_page.classList.add("unactive");
}

//When continue button is clicked
continue_btn.onclick = () => {
    home_page.classList.add("unactive")
    info.classList.remove("activeInfo")
    quiz.classList.add("activeQuiz")
    showQuestions(0);
    questionCounter(1);
}

//When next button is clicked
next_btn.onclick = () =>{
    if(que_count < questions.length - 1){
        que_count++;
         que_number++;
        showQuestions(que_count)
        questionCounter(que_number);
    } else {
        console.log("Questions ended");
        showResults();
    }
}

// When exit button is clicked
quit.onclick = () =>{
    window.location.reload();
}



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

//Function for when user chooses and answer

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[que_count].answer;
    let allOptions = option_area.children.length;
    if(userAnswer == correctAnswer){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("correct");
    } else{
        answer.classList.add("incorrect");
        console.log("incorrect");

        //Shows the user the correct answer if they choose incorrectly
        for(let i = 0; i < allOptions; i++){
            if(option_area.children[i].textContent == correctAnswer){
                option_area.children[i].setAttribute("class", "option correct");
            }
        }
    }

    //Disable all options once user has selected answer

    for(let i = 0; i < allOptions; i++){
        option_area.children[i].classList.add("disabled");
    }   
}

function questionCounter(index){
    const bottom_ques_count = quiz.querySelector(".question_count");
    let totalQuesCount =  '<span>'+ index + '<p>of</p>' + questions.length + '<p>Questions</p></span>'
    bottom_ques_count.innerHTML = totalQuesCount;
}

// Results box

function showResults(){
    start_btn.classList.add("unactive")
    info.classList.remove("activeInfo")
    quiz.classList.remove("activeQuiz")
    results.classList.add("activeResults")
    const score_info = results.querySelector(".score_text")
    if(userScore > 4){
        let scoreMsg = '<span>Well Done, <p>' + storedUsername + '!</p>' + userScore + '</p>out of<p>' + questions.length + '</p></span>'
        score_info.innerHTML = scoreMsg
    } else if (userScore > 2){
        let scoreMsg = '<span>Not Bad, Not Good <p>' + userScore + '</p>out of<p>' + questions.length + '</p></span>'
        score_info.innerHTML = scoreMsg
    } else {
        let scoreMsg = '<span>Back To School For You <p>' + storedUsername + '!</p>' + userScore + '</p>out of<p>' + questions.length + '</p></span>'
        score_info.innerHTML = scoreMsg
    }
}

submit.onclick = () => {
    localStorage.setItem("text", username.value);
}

var startBtn = document.getElementById("start-button");
var homeP = document.getElementById("start-text");
var buttonC = document.getElementById("button-cont");
var timerEle = document.getElementById("timer");
var button1 = document.getElementById("qbutton1");
var button2 = document.getElementById("qbutton2");
var button3 = document.getElementById("qbutton3");
var button4 = document.getElementById("qbutton4");
var showQ = document.getElementById("questions");
var displayQ = document.getElementById("continueQ");
var ifCorrect = document.getElementById("roW");
var end = document.getElementById("endPage");
var initials1 = document.getElementById("initials");
var button5 = document.getElementById("clearButton");
var button6 = document.getElementById("homebutton");
var button7 = document.getElementById("submit-button");
var displayI = document.getElementById("display-int");
var displayHS= document.getElementById("highScore");
var endQuote = document.getElementById("ending");
var HSquote = document.getElementById("highScorePostInt");
var HSquote2 = document.getElementById("highScorePostTime");
var userAns;

var showHS = document.getElementById("highScore");

var timerCount;
var timer;
var i = 0;
var initialL;
JSON.parse(localStorage.getItem("int"));
var timerMem;
JSON.parse(localStorage.getItem("time"));
var highScoreArrayInt=[];
var highScoreArrayTime=[];
if(JSON.parse(localStorage.getItem("time"))){
    highScoreArrayTime = JSON.parse(localStorage.getItem("time"));
}
if(JSON.parse(localStorage.getItem("int"))){
    highScoreArrayInt = JSON.parse(localStorage.getItem("int"));
}
var questionArray = [
    {
        question: "Commonly used Data types does NOT inclue",
        choices: ["String", "Boolean", "Numbers", "Alerts"],
        correct: "Alerts"
    },
    {
        question: "Conditions for and if/else statement are enclosed within _________",
        choices: ["Quotes", "Curly Brackets", "Parentheses", "All the above"],
        correct: "Parentheses"
    },
    {
        question: "Arrays can contain which of the following",
        choices: ["Other Arrays", "Booleans", "Strings", "All the above"],
        correct: "All the above"
    },
    {
        question: "String values are enclosed within _________ when asigning it to a variable",
        choices: ["Quotes", "Curly Brackets", "Parentheses", "Commas"],
        correct: "Quotes"
    },
    {
        question: "A very useful tool used in debugging and development for printing content to the debugger is:",
        choices: ["Java Script", "Terminal/Bash", "For Loops", "console.log"],
        correct: "console.log"
    }];
function startQuiz() {

    homeP.style.visibility = 'hidden';
    startBtn.style.visibility = 'hidden';
    timerCount = 80;

    askquestion();
    startTimer();
}

function askquestion() {
    displayQ.style.visibility = 'visible';


    showQ.textContent = questionArray[i].question;
    button1.textContent = questionArray[i].choices[0];
    button2.textContent = questionArray[i].choices[1];
    button3.textContent = questionArray[i].choices[2];
    button4.textContent = questionArray[i].choices[3];



    buttonC.addEventListener("click", compare);
    console.log(userAns);


}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerEle.textContent = timerCount
    }, 1000)
}
function stoptimer() {
    clearInterval(timer);
    timerEle.style.visibility = 'hidden';
}






function compare(e) {
    console.log(e.target.textContent);
    userAns = e.target.textContent;
    console.log(questionArray[i].correct);
    if (userAns === questionArray[i].correct) {
        ifCorrect.textContent = "Correct!";
    } else {
        ifCorrect.textContent = "Wrong!";
        timerCount -= 10;
    }
    i++;
    if (timerCount === 0 || i < questionArray.length) {
        askquestion();

    } else {
        displayQ.style.visibility = 'hidden';
        end.style.visibility = 'visible';
        stoptimer();
        timerMem = timerEle.textContent;
        highScoreArrayTime.push(timerMem);
        localStorage.setItem("time",JSON.stringify(highScoreArrayTime));
        ending();
    }
    ifCorrect.style.visibility = 'visible';

}


function ending() {
    setInterval(function(){ ifCorrect.style.visibility = 'hidden';},1000);
    
    endQuote.textContent = "Good Job! your score is" + " " + timerMem;

}
function getInitials(){
    console.log(initials1);
    initialL = initials1.value;
    highScoreArrayInt.push(initialL);
    localStorage.setItem("int", JSON.stringify(highScoreArrayInt));
    displayI.textContent = initialL + " " + timerMem;
}
function clear() {
    localStorage.clear();
    localStorage.removeItem("int");

}
function returnHome() {
    location.reload();

}
function highScorePage(){
    showHS.style.visibility= 'visible';
    HSquote.textContent = highScoreArrayInt;
    HSquote2.textContent = highScoreArrayTime;

}
displayHS.addEventListener("click", highScorePage);
startBtn.addEventListener("click", startQuiz);
button5.addEventListener("click", clear);
button6.addEventListener("click", returnHome);
button7.addEventListener("click", getInitials);
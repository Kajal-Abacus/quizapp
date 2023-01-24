const quizDB= [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "Hyper Text Markup language",
        ans: "ans4"
    },
    {
        question: "Q2: HTML is a subset of ___________",
        a: "SGMT",
        b: "SGML",
        c:"GME",
        d: "XHTML",
        ans: "ans2"
    },
    {
        question: "Q3: Which element is used for or styling HTML5 layout?",
        a: "CSS",
        b: "jQuery",
        c: "JavaScript",
        d: "PHP",
        ans: "ans1"
    },
    {
        question: "Q4: Which of the following is not the element associated with the HTML table layout?",
        a: "alignment",
        b: "color",
        c: "size",
        d: "spanning",
        ans: "ans2"
    },
    {
        question: "Q5: In which part of the HTML metadata is contained?",
        a: "head tag",
        b: "title tag",
        c: "html tag",
        d: "body tag",
        ans: "ans1"
    },
    {
        question: "Q6: What is DOM in HTML?",
        a: "Language dependent application programming",
        b:"Hierarchy of objects in ASP.NET",
        c: "Application programming interface",
        d: "Convention for representing and interacting with objects in html documents",
        ans: "ans4"
    },
    {
        question: "Q7:  Which of the following tag is used for inserting the largest heading in HTML?",
        a :"head",
        b: "<h1>",
        c: "<h6>",
        d: "heading",
        ans: "ans2"
    },
    {
        question: "Q8:  Which of the following is used to read an HTML page and render it?",
        a: "Web server",
        b: "Web network",
        c: "Web browser",
        d: "Web matrix",
        ans: "ans3"
    },
    {
        question: "Q9: The tags in HTML are ....?",
        a: "case-sensitive",
        b: "in upper case",
        c: "not case sensitive",
        d: "in lowercase",
        ans: "ans3"
    },
    {
        question: "Q10: Which of the following tag is used to insert a line-break in HTML?",
        a: "<br>",
        b: "<a>",
        c: "<pre>",
        d: "<b>",
        ans: "ans1"
    },
    {
        question: "Q11: Which of the following element is responsible for making the text bold in HTML?",
        a: "<pre>",
        b:"<a>",
        c: "<b>",
        d : "<br>",
        ans: "ans3"
    },
    {
        question: "Q12: The correct sequence of HTML tags for starting a webpage is ?",

        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d :"HTML, Head, Title, Body",
        ans: "ans4"
    },
    {
        question: "Q13: What are the types of lists available in HTML?",
        a: "Ordered, UnOrdered list",
        b: "Bulleted, Numbered list",
        c: "None of these",
        d: "Named, UnNamed list",
        ans: "ans1"
    },
    {
        question: "Q14: What is the smallest header in HTML by default?",
        a: "h6",
        b: "h1",
        c: "h2",
        d: "h4",
        ans: "ans1"
    },
    {
        question: "Q15:How many sizes of headers are available in HTML by default?",
        a: "5",
        b: "1",
        c: "3",
        d: "6",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers= document.querySelectorAll('.answer');
const timeText= document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

const showScore = document.querySelector('#showScore');

//define the questuon
let questionCount = 0;
let score=0;
//let timeValue=15;
let counter=0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText=quizDB[questionCount].question;

    option1.innerText= questionList.a;
    option2.innerText= questionList.b;
    option3.innerText= questionList.c;
    option4.innerText= questionList.d;

    startTimer(15);//calling start timer
}
loadQuestion();

const getCheckAnswer =() => {
    let timeValue= 15;
    let answer;

    answers.forEach((currentAnsElem)=> {
        if(currentAnsElem.checked){
            answer = currentAnsElem.id;
        }
        
    });
    return answer;
};

const deselectAll = () => {
    answer.forEach((currentAnsElem) => currentAnsElem.checked = false);
}

function startTimer(time){
    counter= setInterval(timer,1000);
    function timer() {
        timeCount.textContent=time;
        time--;

        if(time<9){
            timeCount.textContent='0'+timeCount.textContent;
        }
        
        if(time<0){
            clearInterval(counter);
            timeText.textContent='Time Off';


          
        }

    }
}

submit.addEventListener('click', () => {
    
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer ===quizDB[questionCount].ans){
        score++;

    };

    questionCount++;
   

    if(questionCount < quizDB.length){
        clearInterval(counter)//stopping timer when user selected options
        clearInterval(counter);
        loadQuestion();
        
        timeText.textContent='Time left';//change timetext to timeleft
        startTimer(timeValue);
    }else{
        showScore.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');

    }
});

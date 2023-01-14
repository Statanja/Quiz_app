let National;
const quizData =[{
        question:'National Game in Sri lanka ?',
        a:'Cricket',
        b:'Football',
        c:'Volley Ball',
        d:'Carom',
        correct:'c'
    },
    {
        question: 'President of sri lanka ?',
        a:'Mahinda Rajapakshe',
        b:'Gotabaya Rajapakshe',
        c:'Ranil Wickramashige',
        d:'Dinesh Gunawardana',
        correct:'c'
    },
    {
        question:'Capital city of sri lanka?',
        a:'Anuradapura',
        b:'Sri jawaradheanapura',
        c:'Galle',
        d:'Jaffa',
        correct:'b'
    },
    {
        question: 'How many Provinces in sri lanka',
        a:'5',
        b:'9',
        c:'7',
        d:'8',
        correct: 'b'
    },
    {
        question: 'what is the longest water fall in sri lanka?',
        a:'Babarakanada',
        b:'Diyaluma',
        c:'Dunhida',
        d:'Ravana Ella',
        correct: 'a'
    }
]

const answerEls = document.querySelectorAll(".Answer")
const quiz=document.getElementById('quiz')
const questionEl=document.getElementById('question')
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.getElementById('submit_button')

let currentQuiz = 0;
let score =0;


function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML =currentQuizData.a;
    b_text.innerHTML =currentQuizData.b;
    c_text.innerHTML =currentQuizData.c;
    d_text.innerHTML =currentQuizData.d;

}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
        return answer;
}

submitBtn.addEventListener('click',()=>{

    const answer = getSelected();
    correctAnswer(answer)
    console.log(answer)

    if (answer){
        currentQuiz++
    if(currentQuiz<quizData.length){
        loadQuiz();
    } else {
       quiz.innerHTML=`<h2> You Answered correctly &nbsp;&nbsp;${score}/${quizData.length}</h2>
             <button class="submit-button" onclick="location.reload()" >Reload</button>`
    }}
})

function correctAnswer(givenAns){
    if(givenAns===quizData[currentQuiz].correct){
        alert('Correct Answer')
        score++;
    }else {
        alert('Wrong Answer')
    }
    return score;
}

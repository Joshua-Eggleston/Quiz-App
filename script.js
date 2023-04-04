const quizData =[
    {
        question: 'What is the purpose of the <plaintext><track> tag, and when should it be used?',
        a: 'The <track> tag is used for specifying subtitles. It is typically applied as a child of the <audio> and <video> tags.',
        b: 'The <track> tag is used for specifying subtitles. It is typically applied as a child of the <video> tag.',
        c: 'The <track> tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the <video> tag.',
        d: 'The <track> tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the <audio> and <video> tag.',
        answer: 'd'
    },
    {
        question: 'What are the best examples of void elements?',
        a: '<link><meta><title>',
        b: ' <br><base><source>',
        c: '<input><br><p>',
        d: '<area><embed><strong>',
        answer: 'b'
    },
    {
        question: 'In HTML5, which tag or tags embed a webpage inside of a webpage?',
        a: '<iframe>, <frame>, and <frameset>',
        b: '<frame>',
        c: '<iframe>',
        d: '<frame> and <frameset>',
        answer: 'c'
    },
    {
        question: 'Where do <plaintext><header> and <footer> tags typically occur?',
        a: 'as children of <body>, <article>, <aside>, and <section> tags',
        b: ' as children of <body>, <article>, and <section> tags',
        c: 'as children of <body>, <article>, <aside>, <nav>, and <section> tags',
        d: 'as children of <body>, <article>, <table>, and <section> tags',
        answer: 'b'
    },
    {
        question: 'What is the best way to apply bold styling to text?',
        a: '<strong>',
        b: 'use CSS',
        c: '<bold>',
        d: '<b>',
        answer: 'a'
    }

];
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


    
}
function getSelected() { 
    const answerEls = document.querySelectorAll('.answer');
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    });
    
    return answer;
 }

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer =  getSelected();
    console.log(answer);
    if(answer) {
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
            } else {
                //TODO: show Quiz results
                alert('You Finished!');
            }
       }
    

   

   
    

    

    
});
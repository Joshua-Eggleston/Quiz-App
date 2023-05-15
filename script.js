const quizData =[
    {
        question: 'Q1. What is the purpose of the track tag, and when should it be used?',
        a: 'The <track> tag is used for specifying subtitles. It is typically applied as a child of the <audio> and <video> tags.',
        b: 'The <track> tag is used for specifying subtitles. It is typically applied as a child of the <video> tag.',
        c: 'The <track> tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the <video> tag.',
        d: 'The <track> tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the <audio> and <video> tag.',
        answer: 'd'
    },
    {
        question: ' Q2. What are the best examples of void elements?',
        a: '<link><meta><title>',
        b: ' <br><base><source>',
        c: '<input><br><p>',
        d: '<area><embed><strong>',
        answer: 'b'
    },
    {
        question: ' Q3. In HTML5, which tag or tags embed a webpage inside of a webpage?',
        a: '<iframe>, <frame>, and <frameset>',
        b: '<frame>',
        c: '<iframe>',
        d: '<frame> and <frameset>',
        answer: 'c'
    },
    {
        question: ' Q4. Where do header and footer tags typically occur?',
        a: 'as children of <body>, <article>, <aside>, and <section> tags',
        b: ' as children of <body>, <article>, and <section> tags',
        c: 'as children of <body>, <article>, <aside>, <nav>, and <section> tags',
        d: 'as children of <body>, <article>, <table>, and <section> tags',
        answer: 'b'
    },
    {
        question: ' Q5. What is the best way to apply bold styling to text?',
        a: '<strong>',
        b: 'use CSS',
        c: '<bold>',
        d: '<b>',
        answer: 'a'
    },
    {
        question: 'Q6. When is the link tag used?',
        a: 'when linking style sheets, JavaScript, and icons for mobile apps',
        b: 'when linking style sheets, favicons, and preloading assets',
        c: 'when linking one webpage to another',
        d: 'when linking style sheets, external URLs, and favicons',
        answer: 'b'
    },
    {
        question: 'Q8. When should you use the aside element?',
        a: 'when the content can be removed without detracting from the pages message',
        b: 'for anything you want to move to the side, like a pull quote box, a sidebar, or an image with text wrapping around it',
        c: 'for anything in parentheses',
        d: 'for anything in a sidebar',
        answer: 'a'
    },
    {
        question: 'Q9. With which tags is the source element associated?',
        a: `<svg>, <picture>, <audio>, and <video>`,
        b: `<picture>, <audio>, and <video>`,
        c: 'It is interchangeable with the `src` attribute, so any element which uses `src` may use `<source>',
        d: `<audio> and <video>`,
        answer: 'b'
    },
    {
        question: 'Q10. What is NOT a valid attribute for the textarea element?',
        a: 'readonly',
        b: 'max',
        c: 'form',
        d: 'spellcheck',
        answer: 'b'
    },
    {
        question: 'Q12. What is the purpose of the samp element?',
        a: 'It connects the web browser to a SA-MP server.',
        b: 'It identifies enclosed text as a sampler or an example.',
        c: 'It identifies sample output from a computer program.',
        d: 'It uses a simple application messaging protocol to connect the browser to a texting device.',
        answer: 'c'
    },
    {
        question: 'Q13. When should you use ol and ul elements?',
        a:'Use `<ul>` when you want a bulleted list and `<ol>` when you want a numbered list.',
        b: 'Use `<ol>` when you want a bulleted list and `<ul>` when you want a numbered list.',
        c: 'Use `<ol>` when you have a list of items in which the order of the items matters. Use `<ul>` when you have a list of items that could go in any order.',
        d: 'Use `<ul>` when you have a list of items in which the order of the items matters. Use `<ol>` when you have a list of items that could go in any order.',
        answer: 'a'
    },
    {
        question: 'Q14. What is the difference between the post and get methods in a form?',
        a: 'post is used for sending information to the server. get is used for retrieving form information from the server.',
        b: 'get is used for sending information to the server. post is used for retrieving form information from the server.',
        c: 'With get, data is included in the form body when send to the server. With post, the data goes through the URL.',
        d: 'With post, data is included in the form body when send to the server. With get, the data goes through the URL.',
    },
    {
        question: 'Q15. What is the difference between the div and span tags?',

        a: '`<div>` is used where a generic block-level tag is needed, while `<span>` is used where a generic inline tag is needed.',
        b: '`<div>` is used for major divisions on a page, while `<span>` is used to span across columns.',
        c: '`<div>` is the industry-standard default tag, but you could use `<span>` if you prefer.',
        d: '`<div>` is used where a generic inline tag is needed, while `<span>` is used where a generic block-level tag is needed.',
        answer: 'a'
    },
    {
        question: 'Q17. What is the correct markup for alt attribute of an image?',

         a: `<img src="cubism.jpg" alt="Version of ""Whistler's Mother"" in cubist style">`,
        b: `<img src="cubism.jpg" alt="Version of "Whistler's Mother" in cubist style">`,
        c: `<img src="cubism.jpg" alt='Version of "Whistlers Mother" in cubist style'>`,
        d: `<img src="cubism.jpg" alt="Version of Whistler's Mother in cubist style">`,
        answer: 'c'
    },

    {
        question: 'Q22. What is the best way to code three choices within a form so that the user can select only one item?',
        
        a:`html
        <label for="example">Make a choice:</label>
        <datalist id="example">
          <option value="Choice 1"></option>
          <option value="Choice 2"></option>
          <option value="Choice 3"></option>
        </datalist>`,
        b: `html
        <p>Make a choice:</p>
        <input id="choices" name="example" />
        
        <datalist value="choices">
          <option value="Choice 1"></option>
          <option value="Choice 2"></option>
          <option value="Choice 3"></option>
        </datalist>`,
        
        c: `html
        <label for="example">Make a choice:</label>
        <input list="example" id="choices" name="choices" />
        
        <datalist id="choices">
          <option value="Choice 1">Choice 1</option>
          <option value="Choice 2">Choice 2</option>
          <option value="Choice 3">Choice 3</option>
        </datalist>`,
        d: `html
        <label for="example">Make a choice:</label>
        <input list="choices" id="example" name="example" />
        
        <datalist id="choices">
          <option value="Choice 1"></option>
          <option value="Choice 2"></option>
          <option value="Choice 3"></option>
        </datalist>`,
        answer: 'd'
    },
    {
        question: 'Q23. How do you confirm that a document is written in HTML5?',

        a: 'The server wraps the webpage in an HTML5 wrapper.',
        b: 'Use the `<!DOCTYPE html>` declaration that starts the document.',
        c: 'The browser receives encoding from the server to display the document with HTML5.',
        d: 'It is enclosed in a `<html>` tag.',
        answer: 'b'
    },
     {
         question: 'Q26. What is the hr tag typically used for? / Alt.: What is the semantic meaning of the hr tag?',

        
         a: 'This tag is depreciated (alt.: deprecated) and should not be used.',
         b: 'It designates a topic shift within a section at the paragraph level.',
         c: 'It draws a horizontal line.',
         d: 'It designates a shift of topic at the section level. / Alt.: It designates a separation of sections within an `<article>`.',
         answer: 'b'
     }
    // {
    //     question:
        
    //     a:
    //     b:
    //     c:
    //     d:
    //     answer:
    // },
    //{
    //     question:
        
    //     a:
    //     b:
    //     c:
    //     d:
    //     answer:
    // },
    // {
    //     question:
        
    //     a:
    //     b:
    //     c:
    //     d:
    //     answer:
    // },
    // {
    //     question:
        
    //     a:
    //     b:
    //     c:
    //     d:
    //     answer:
    // },
    // {
    //     question:
        
    //     a:
    //     b:
    //     c:
    //     d:
    //     answer:
    // },
    // {
    //     question:
        
    //     a:
    //     b:
    //     c:
    //     d:
    //     answer:
    // },
    // {
    //     question:
        
    //     a:
    //     b:
    //     c:
    //     d:
    //     answer:
    // },
    // {
    //     question:
        
    //     a:
    //     b:
    //     c:
    //     d:
    //     answer:
    // },
    // {
    //     question:
        
    //     a:
    //     b:
    //     c:
    //     d:
    //     answer:
    // },
    // {
    //     question:
        
    //     a:
    //     b:
    //     c:
    //     d:
    //     answer:
    // },
    // {
    //     question:
        
    //     a:
    //     b:
    //     c:
    //     d:
    //     answer:
    // },
    // {
    //     question:
        
    //     a:
    //     b:
    //     c:
    //     d:
    //     answer:
    // },
    


];
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer')

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0

loadQuiz();


function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


    
}
function getSelected() { 
    
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    });
    
    return answer;
 }

 function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
 }

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer =  getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].answer) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
            } else {
              quiz.innerHTML = `<h2 style = "text-align: center; padding: 1rem;">You answered ${score} out of ${quizData.length} questions correctly!</h2>`
            }
       }
    

   

   
    

    

    
});
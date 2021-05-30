class PageState {
   constructor() {
      let currentState = new homeState(this);

      this.init = function () {
         this.change(new homeState());
      };

      this.change = function (state) {
         currentState = state;
      };
   }
}

// Home State
const homeState = function (page) {
   document.querySelector('#mainApp').innerHTML = `
   <div id="header">
      <div class="container">
         <a id="home" class="btnHome btn">Home</a>
         <a id="credits" class="btnCredits btn">Credits</a>
      </div>
   </div>

   <div class="mainContainer">
      <div id="content" class="btnContainer">
         <div class="mainPageGrid">
            <a id="safety" class="btnItem item-1"></a>
            <a id="wash" class="btnItem item-2"></a>
            <a id="covidUpdates" class="btnItem item-3"></a>
            <a id="quiz" class="btnItem item-4"></a>
         </div>
      </div>
   </div>
    `;
};

const creditsState = function () {
   document.querySelector('.mainContainer').innerHTML = `
   <div id="content" class="container">
      <div class="personContainer">
         <div class="person">
            <img src="./img/fayaz.jpg" height="200" width="200" alt="" />
            <h3>Hassan Fayaz</h3>
            <p>s058771</p>
         </div>
         <div class="person">
            <img src="./img/enas.jpg" alt="" height="200" width="200"/>
            <h3>Enas Abdulla</h3>
            <p>S065442</p>
         </div>

         <div class="person p3">
            <img src="./img/isam.jpg" height="200" width="200" alt="" />
            <h3>Isam</h3>
            <p>s060688</p>
         </div>
      </div>
   </div>
`;
};

// Safety State
const safetyState = function (page) {
   document.querySelector('.mainContainer').innerHTML = `
   <div class="container">
      <div class='safetyPic'>
      <img src="img/precautions.jpg" width="700" height="600">
      </div>
   </div>
`;
};

// Wash State
const washState = function (page) {
   let html = '';
   let textArray = [
      'Apply soap',
      'Make sure to wash for at least 20 seconds',
      'Make sure to wash Palm and back of each hand',
      'Make sure to wash between fingers',
      'Make sure to wash under nails',
      'Make sure to wash thumbs',
      'Rinse well',
      'Dry hands with paper towel',
      'Turn off tap with paper towel',
   ];
   for (let i = 2; i < 11; i++) {
      html += `
      <div class="slide">
         <div class="washContainer">
            <div class="washContent">
               <img src="img/wash/${i}.jpg" alt="" />
               <p class="number">${i}</p>
               <p class="text">${textArray[i - 2]}</p>
            </div>
         </div>
      </div>`;
   }
   document.querySelector('.mainContainer').innerHTML = `
   <div class="washbox">
   <button class='btn btnStartSlides'>START</button>
      <div class="slidershow middle">
         <div class="slides">
            <input type="radio" name="r" id="r1" checked />
            <input type="radio" name="r" id="r2" />
            <input type="radio" name="r" id="r3" />
            <input type="radio" name="r" id="r4" />
            <input type="radio" name="r" id="r5" />
            <input type="radio" name="r" id="r6" />
            <input type="radio" name="r" id="r7" />
            <input type="radio" name="r" id="r8" />
            <input type="radio" name="r" id="r9" />
            <input type="radio" name="r" id="r10" />
            <div class="slide s1">
               <div class="washContainer">
                  <div class="washContent">
                     <img src="img/wash/1.jpg" alt="" />
                     <p class="number">1</p>
                     <p class="text">Wet hands with water</p>
                  </div>
               </div>
            </div>
            ${html}
         </div>

         <div class="navigation">
            <label for="r1" class="bar bar1">1</label>
            <label for="r2" class="bar bar2">2</label>
            <label for="r3" class="bar bar3">3</label>
            <label for="r4" class="bar bar4">4</label>
            <label for="r5" class="bar bar5">5</label>
            <label for="r6" class="bar bar6">6</label>
            <label for="r7" class="bar bar7">7</label>
            <label for="r8" class="bar bar8">8</label>
            <label for="r9" class="bar bar9">9</label>
            <label for="r10" class="bar bar10">10</label>
         </div>
      </div>
   </div>`;
};

const covidUpdatesState = function () {
   document.querySelector('.mainContainer').innerHTML = `
   <div class="container">
      <div class='safetyPic'>
      <img src="img/covidupdateimage.jpg" width="700" height=600">
      </div>
   </div>
`;
};

const quizState = function () {
   document.querySelector('.mainContainer').innerHTML = `<div class="container">
   <div id="question-container" class="hide">
   <div id="ans"></div>
      <div id="question">Question</div>
      <div id="answer-buttons" class="btn-grid">
         <button class="btnQuiz">Answer 1</button>
         <button class="btnQuiz">Answer 2</button>
         <button class="btnQuiz">Answer 3</button>
      </div>
   </div>
   <div class="controls">
      <button id="start-btn" class="start-btn btnQuiz">Start</button>
      <button id="next-btn" class="next-btn btnQuiz hide">Next</button>
   </div>
</div>
`;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const mainApp = document.getElementById('mainApp');
const home = document.getElementById('home');
const credits = document.getElementById('credits');
const safety = document.getElementById('safety');
const wash = document.getElementById('wash');
const covidUpdates = document.getElementById('covidUpdates');
const quiz = document.getElementById('quiz');

/* On starup, make user select a theme for the app. (also make user enter color name in the text box). */
// --------- USE THIS CODE ----------------
const style = document.querySelector('style');
// style.innerHTML += `
//    .btnContainer {
//       background-color: #1e7160;
//    }
//    `;

mainApp.addEventListener('click', (e) => {
   if (e.target.classList.contains('btnHome')) {
      page.change(new homeState());
   }
   if (e.target.classList.contains('btnCredits')) {
      page.change(new creditsState());
   }
   if (e.target.classList.contains('item-1')) {
      page.change(new safetyState());
   }
   if (e.target.classList.contains('item-2')) {
      page.change(new washState());
      document.querySelector('#mainApp').addEventListener('click', (e) => {
         for (let i = 1; i < 11; i++) {
            if (e.target.classList.contains(`bar${i}`)) {
               new Audio(`./assets/washaudio/wash${i}.mp3`).play();
            }
         }
      });

      // implementing start/stop function for hand washing auto sliding part
      const btnStartSlides = mainApp.querySelector('.btnStartSlides');
      let interval = null;
      let iteratorWhenSliding = 0;
      let btnClickCounter = 0;
      btnStartSlides.addEventListener('click', (e) => {
         e.target.innerText = 'STOP';
         e.target.style.backgroundColor = 'red';
         console.log(`btnClickCounter: ${btnClickCounter}`);
         if (btnClickCounter % 2 === 0) {
            mainApp.querySelector(`.bar1`).click();
            interval = setInterval(() => {
               if (iteratorWhenSliding < 11) {
                  mainApp
                     .querySelector(`.bar${iteratorWhenSliding + 2}`)
                     .click();
                  iteratorWhenSliding++;
                  console.log(`iterator: ${iteratorWhenSliding}`);
               }
            }, 2700);
            btnClickCounter++;
         } else if (btnClickCounter % 2 === 1) {
            clearInterval(interval);
            iteratorWhenSliding = 0;
            btnClickCounter++;
            e.target.innerText = 'START';
            e.target.style.backgroundColor = 'green';
         }
      });
   }

   if (e.target.classList.contains('item-3')) {
      page.change(new covidUpdatesState());
   }
   if (e.target.classList.contains('item-4')) {
      quizCodes();
   }
});

// --------- TODO: SHOW SCORE AT THE END OF THE GAME --------------
function quizCodes() {
   page.change(new quizState());
   // Quiz code
   let score = 0;
   const startButton = document.getElementById('start-btn');
   const nextButton = document.getElementById('next-btn');
   const ans = document.getElementById('ans');
   const questionContainerElement =
      document.getElementById('question-container');
   const questionElement = document.getElementById('question');
   const answerButtonsElement = document.getElementById('answer-buttons');

   let shuffledQuestions, currentQuestionIndex;

   startButton.addEventListener('click', startGame);
   nextButton.addEventListener('click', () => {
      currentQuestionIndex++;
      setNextQuestion();
   });

   function startGame() {
      startButton.classList.add('hide');
      shuffledQuestions = questions.sort(() => Math.random() - 0.5);
      currentQuestionIndex = 0;
      questionContainerElement.classList.remove('hide');
      setNextQuestion();
   }

   function setNextQuestion() {
      resetState();
      ans.textContent = '';
      showQuestion(shuffledQuestions[currentQuestionIndex]);
   }

   function showQuestion(question) {
      questionElement.innerText = question.question;
      question.answers.forEach((answer) => {
         const button = document.createElement('button');
         button.innerText = answer.text;
         button.classList.add('btnQuiz');
         if (answer.correct) {
            button.dataset.correct = answer.correct;
         }
         button.addEventListener('click', selectAnswer);
         answerButtonsElement.appendChild(button);
      });
   }

   function resetState() {
      clearStatusClass(document.body);
      nextButton.classList.add('hide');
      while (answerButtonsElement.firstChild) {
         answerButtonsElement.removeChild(answerButtonsElement.firstChild);
      }
   }

   function selectAnswer(e) {
      const selectedButton = e.target;
      const correct = selectedButton.dataset.correct;

      if (correct) {
         ans.className = 'txt-green';
         ans.textContent = 'CORRECT!';
         new Audio('./assets/audio/correct.mp3').play();
         selectedButton.classList.add('bg-green');
         score++;
         console.log(score);
      } else {
         ans.className = 'txt-red';
         ans.textContent = 'WRONG!';
         new Audio('./assets/audio/wrong.mp3').play();
         selectedButton.classList.add('bg-red');
      }
      if (shuffledQuestions.length > currentQuestionIndex + 1) {
         nextButton.classList.remove('hide');
      } else {
         startButton.innerText = 'Restart';
         startButton.classList.add('restart-btn');
         startButton.classList.remove('hide');
      }
   }

   function clearStatusClass(element) {
      element.classList.remove('correct');
      element.classList.remove('wrong');
   }

   const questions = [
      {
         question: `What is HPA's phone number?`,
         answers: [
            { text: '7915423', correct: false },
            { text: '1676', correct: true },
            { text: '3332525', correct: false },
         ],
      },
      {
         question:
            'Which one of the following are the most common symptoms of Covid-19?',
         answers: [
            { text: 'Fever, cough, tiredness', correct: true },
            { text: 'dizziness, body ache', correct: false },
         ],
      },
      {
         question: 'What test tells you if you previously had covid?',
         answers: [
            { text: 'PCR', correct: false },
            { text: 'Antibody', correct: true },
         ],
      },
      {
         question: 'Can you always tell if someone has COVID-19?',
         answers: [
            { text: 'Yes', correct: false },
            { text: 'No', correct: true },
         ],
      },
      {
         question:
            'Which of the following people is COVID-19 more dangerous for?',
         answers: [
            { text: 'Children', correct: false },
            { text: 'Older People', correct: true },
         ],
      },
      {
         question: 'What other viruses belong to the coronavirus family?',
         answers: [
            { text: 'SARS and HIV', correct: false },
            { text: 'SARS and influenza', correct: false },
            { text: 'SARS and MERS', correct: true },
         ],
      },
      {
         question:
            'Which of the following is an example of physical distancing?',
         answers: [
            {
               text: 'You stop talking to the people you live with',
               correct: false,
            },
            {
               text: 'You stop speaking to your friends on the phone',
               correct: false,
            },
            {
               text: `You stop going to crowded places and visiting other people’s houses`,
               correct: true,
            },
         ],
      },
   ];
}

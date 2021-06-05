/* -------------- QUIZ --------------- */

let btnAnsCount = 0;
let quizScore = 0;

mainApp.addEventListener('click', (e) => {
   if (e.target.id === 'quiz') {
      mainContainer.innerHTML =
         /* had to insert the html code here, it fixed a problem of btn not found.
            The quiz html must be inserted only after the quiz section in clicked.
            The html code must be loaded before the quiz code does or else the 
            can't use querySelector/getElementsByID on the elements */
         /* html */ `
         <div class='container'>
         <div class="quizStartText">
            <h3>Test Your COVID-19 Knowledge</h3>
            <p>When you click the correct answer as your first option, you will gain a score point</p>
            <p>You can still check other answers to see which one is correct before click 'Next'</p>
         </div>
            <div class='scoreCounter'>
               <div>
                  <p class='questionNumberParent'>
                     Question <span class='questionNumber'>0</span>/7
                  </p>
                  <p class='liveScoreCount'>
                     Score: <span class='scoreNum'>0</span>
                  </p>
               </div>
               <div class='endingScore'>
                  <p>
                     Your score is <span>0</span> out of 7
                  </p>
                  <p>Click the Restart button below to start the quiz again</p>
               </div>
            </div>
            <div id='question-container' class='hide'>
               <div id='ans'></div>
               <div id='question'>Question</div>
               <div id='answer-buttons' class='btn-grid'>
                  <button class='btnQuiz'>Answer 1</button>
                  <button class='btnQuiz'>Answer 2</button>
                  <button class='btnQuiz'>Answer 3</button>
               </div>
            </div>
            <div class='controls'>
               <button id='start-btn' class='start-btn btnQuiz'>
                  Start
               </button>
               <button id='next-btn' class='next-btn btnQuiz hide'>
                  Next
               </button>
            </div>
         </div>`;
      quizCodes();
   }
});

const correctAnswerAudio = new Audio('./assets/audio/correct.mp3');
const wrongAnswerAudio = new Audio('./assets/audio/wrong.mp3');

function quizCodes() {
   // Quiz code

   let totalQuestionCounter = 1;
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
      mainApp.querySelector('.liveScoreCount').style.visibility = 'visible';
      mainApp.querySelector('.questionNumberParent').style.visibility =
         'visible';
      mainApp.querySelector('.quizStartText').style.display = 'none';
      startButton.classList.add('hide');
      shuffledQuestions = questions.sort(() => Math.random() - 0.5);
      currentQuestionIndex = 0;
      questionContainerElement.classList.remove('hide');
      setNextQuestion();
   }

   function setNextQuestion() {
      mainApp.querySelector('.questionNumber').innerText =
         totalQuestionCounter++;
      console.log(totalQuestionCounter);
      // totalQuestionCounter .num {}
      btnAnsCount = 0;
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
      btnAnsCount++;

      if (correct) {
         ans.className = 'txt-green';
         ans.textContent = 'CORRECT!';
         correctAnswerAudio.play();
         selectedButton.classList.add('bg-green');
         if (btnAnsCount <= 1) {
            quizScore++;
            mainApp.querySelector('.scoreNum').innerText = quizScore;
         }
      } else {
         ans.className = 'txt-red';
         ans.textContent = 'WRONG!';
         wrongAnswerAudio.play();
         selectedButton.classList.add('bg-red');
      }
      if (shuffledQuestions.length > currentQuestionIndex + 1) {
         nextButton.classList.remove('hide');
      } else {
         setTimeout(() => {
            totalQuestionCounter = 1;
            mainApp.querySelector('.liveScoreCount').style.visibility =
               'hidden';
            mainApp.querySelector('.endingScore').style.display = 'block';
            mainApp.querySelector('.questionNumberParent').style.visibility =
               'hidden';
            questionContainerElement.style.display = 'none';
            /* html */
            startButton.innerText = 'Restart';
            startButton.classList.add('restart-btn');
            startButton.classList.remove('hide');
            mainApp.querySelector('.endingScore span').innerText = quizScore;
            startButton.addEventListener('click', (e) => {
               mainApp.querySelector('.scoreNum').innerText = 0;
               mainApp.querySelector('.endingScore').style.display = 'none';
               quizScore = 0;
               questionContainerElement.style.display = 'block';
            });
         }, 1000);
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
            { text: 'Older People', correct: true },
            { text: 'Children', correct: false },
         ],
      },
      {
         question: 'What other viruses belong to the coronavirus family?',
         answers: [
            { text: 'SARS and HIV', correct: false },
            { text: 'SARS and MERS', correct: true },
            { text: 'SARS and influenza', correct: false },
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

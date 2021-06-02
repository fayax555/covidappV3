/* ------------- HOME -------------------- */
// Home State
const homeHTML = /* html */ `
<div id="content" class="btnContainer">
   <div class="mainPageGrid">
      <a id="safety" class="btnItem item-1"></a>
      <a id="wash" class="btnItem item-2"></a>
      <a id="covidUpdates" class="btnItem item-3"></a>
      <a id="quiz" class="btnItem item-4"></a>
   </div>
   <img style="display: none" src="img/wash.gif" alt="" />
</div>`;

const home = mainApp.querySelector('#home');
home.addEventListener('click', (e) => {
   mainContainer.innerHTML = homeHTML;
   quizScore = 0;
   currentQuestionIndex = 0;
});

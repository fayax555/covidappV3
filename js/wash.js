/* --------------------- WASH -------------------- */
const mainContainer = document.querySelector('.mainContainer');

// Wash State
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
let WashhtmlCode = '';
for (let i = 2; i < 11; i++) {
   /*html*/
   WashhtmlCode += `
   <div class="slide">
      <div class="washContainer">
         <div class="washContent">
            <img src="img/washSvg/${i}.svg" alt="" />
            <p class="number">${i}</p>
            <p class="text">${textArray[i - 2]}</p>
         </div>
      </div>
   </div>`;
}

/* ------------------------------------------- */
const mainApp = document.querySelector('#mainApp');
mainApp.addEventListener('click', (e) => {
   if (e.target.id === 'wash') {
      mainApp.querySelector('.mainContainer').innerHTML = /* html */ `
      <h2 class="washH2">HOW TO WASH YOUR HANDS</h2>
         <div class="washbox">
            <div class="btnStartBox">
               <button class='btnStartSlides'>START</button>
               <p>The slideshow is current playing. Stop the slideshow before going back!</p>
            </div>
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
                           <img src="img/washSvg/1.svg" alt="" />
                           <p class="number">1</p>
                           <p class="text">Wet hands with water</p>
                        </div>
                     </div>
                  </div>
                  ${WashhtmlCode}
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
      mainApp.querySelector('.btnStartBox p').style.display = 'none';

      const btnStartSlides = mainApp.querySelector('.btnStartSlides');

      let interval = null;
      let i = 0;
      let btnClickCounter = 0;
      const home = mainApp.querySelector('#home');
      const credits = mainApp.querySelector('#credits');
      btnStartSlides.addEventListener('click', (e) => {
         home.disabled = true;
         credits.disabled = true;
         mainApp.querySelector('.btnStartBox p').style.display = 'block';

         e.target.innerText = 'STOP';
         e.target.style.backgroundColor = 'red';
         if (btnClickCounter % 2 === 0) {
            mainApp.querySelector(`.bar1`).click();
            new Audio(`./assets/washaudio/wash1.mp3`).play();
            interval = setInterval(() => {
               if (i < 9) {
                  mainApp.querySelector(`.bar${i + 2}`).click();
                  new Audio(`./assets/washaudio/wash${i + 2}.mp3`).play();
                  i++;
               } else if (i >= 9) {
                  clearInterval(interval);
                  i = 0;
                  btnClickCounter++;
                  e.target.innerText = 'START';
                  e.target.style.backgroundColor = 'green';
                  mainApp.querySelector('.btnStartBox p').style.display =
                     'none';
                  home.disabled = false;
                  credits.disabled = false;
               }
            }, 2900);
            btnClickCounter++;
         } else if (btnClickCounter % 2 === 1) {
            clearInterval(interval);
            i = 0;
            btnClickCounter++;
            e.target.innerText = 'START';
            e.target.style.backgroundColor = 'green';
            mainApp.querySelector('.btnStartBox p').style.display = 'none';
            home.disabled = false;
            credits.disabled = false;
         }
      });
   }
});

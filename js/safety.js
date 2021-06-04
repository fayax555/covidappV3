// Safety

const safetyHTML = /*html*/ `
   <div id="safety">
      <i class="fas fa-arrow-left" id="prevBtn"></i>
      <i class="fas fa-arrow-right" id="nextBtn"></i>
      <div class="safetyContainer">
         <div class="s6" id="lastClone">
            <h3>
               PRACTICE OTHER GOOD HEALTH HABITS
            </h3>
            <div class="box">
               <p>
                  Routinely clean and disinfect frequently touched objects
                  and surfaces.
               </p>
               <img src="img/safetySvg/s6.svg" />
            </div>
         </div>
         <div class="s1">
            <h3>AVOID CLOSE CONTACT</h3>
            <div class="box">
               <p>
                  Avoid close contact with sick people, and when you're sick,
                  maintain distance at least 6-ft
               </p>
               <img src="img/safetySvg/s1.svg" />
            </div>
         </div>
         <div class="s2">
            <h3>STAY HOME WHEN YOU ARE SICK</h3>
               <div class="box">
                  <p>
                     If you feel sick, go home to prevent the spread of germs,
                     and remain at home until better
                  </p>
                  <img src="img/safetySvg/s2.svg" />
               </div>
         </div>
         <div class="s3">
            <h3>COVER YOUR MOUTH AND NOSE</h3>
               <div class="box">
                  <p>
                     Cough or sneeze into a tissue, then throw the tissue in the
                     trash
                  </p>
                  <img src="img/safetySvg/s3.svg" />
               </div>
         </div>
         <div class="s4">
            <h3>CLEAN YOUR HANDS</h3>
               <div class="box">
                  <p>
                     Wash your hands with soap and water for 20 seconds. Or use
                     an alcohol-based hand rub
                  </p>
                  <img src="img/safetySvg/s4.svg" />
               </div>
         </div>
         <div class="s5">
            <h3>
               AVOID TOUCHING, YOUR EYES, NOSE OR MOUTH
            </h3>
            <div class="box">
               <p>
                  Cough or sneeze into a tissue, then throw the tissue in the
                  trash
               </p>
               <img src="img/safetySvg/s5.svg" />
            </div>
         </div>
         <div class="s6">
            <h3>
               PRACTICE OTHER GOOD HEALTH HABITS
            </h3>
               <div class="box">
                  <p>
                     Routinely clean and disinfect frequently touched objects
                     and surfaces.
                  </p>
                  <img src="img/safetySvg/s6.svg" />
               </div>
         </div>
         <div class="s1" id="firstClone">
            <h3>AVOID CLOSE CONTACT</h3>
               <div class="box">
                  <p>
                     Avoid close contact with sick people, and when you're sick,
                     maintain distance at least 6-ft
                  </p>
                  <img src="img/safetySvg/s1.svg" />
               </div>
         </div>
      </div>
   </div>
`;

mainApp.addEventListener('click', (e) => {
   if (e.target.id === 'btnSafety') {
      mainContainer.innerHTML = safetyHTML;
      const safetyContainer = document.querySelector('.safetyContainer');
      const imgContent = document.querySelectorAll('.safetyContainer > div');

      const prevBtn = document.querySelector('#prevBtn');
      const nextBtn = document.querySelector('#nextBtn');

      let counter = 1;
      const size = imgContent[0].clientWidth;

      safetyContainer.style.transform = `translateX(${-size * counter}px)`;

      nextBtn.addEventListener('click', (e) => {
         if (counter >= imgContent.length - 1) return;
         safetyContainer.style.transition = 'transform 0.4s ease-in-out';
         counter++;
         safetyContainer.style.transform = `translateX(${-size * counter}px)`;
      });

      prevBtn.addEventListener('click', (e) => {
         if (counter <= 0) return;
         safetyContainer.style.transition = 'transform 0.4s ease-in-out';
         counter--;
         safetyContainer.style.transform = `translateX(${-size * counter}px)`;
      });

      safetyContainer.addEventListener('transitionend', (e) => {
         console.log('fired');
         if (imgContent[counter].id === 'lastClone') {
            safetyContainer.style.transition = 'none';
            counter = imgContent.length - 2;
            safetyContainer.style.transform = `translateX(${
               -size * counter
            }px)`;
         }
         if (imgContent[counter].id === 'firstClone') {
            safetyContainer.style.transition = 'none';
            counter = imgContent.length - counter;
            safetyContainer.style.transform = `translateX(${
               -size * counter
            }px)`;
         }
      });
   }
});

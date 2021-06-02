const creditsHTML = /*html*/ `
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

const credits = mainApp.querySelector('#credits');
credits.addEventListener('click', (e) => {
   mainContainer.innerHTML = creditsHTML;
});

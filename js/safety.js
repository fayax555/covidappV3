// Safety

const safetyHTML = /*html*/ `
   <div class="container">
      <div class='safetyPic'>
         <img src="img/precautions.jpg" width="700" height="600">
      </div>
   </div>
`;

mainApp.addEventListener('click', (e) => {
   if (e.target.id === 'safety') {
      mainContainer.innerHTML = safetyHTML;
   }
});

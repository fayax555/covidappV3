const covidContent = mainApp.querySelector('#covidContent');

const getCovidData = async () => {
   const response = await fetch(
      'https://fayaxcovidapimv.herokuapp.com/mihaaru'
   );
   return await response.json();
};

getCovidData()
   .then((res) => {
      console.log(res);
      const {
         date,
         wTotal,
         wRecovered,
         wActive,
         wDeaths,
         newCases,
         total,
         active,
         recovered,
         deaths,
         vaccinated,
      } = res;
      console.log(newCases, total, active, recovered, deaths);

      covidContent.innerHTML = /* html */ ` 
      <div id="mainCard">
         <h1 class="heading">Latest Update <span class="date">${date}</span></h1>
         <div class="heading">
            <div class="left">
               <h2>Maldives</h2>
               <p></p>
            </div>
         </div>
         <div class="col col-1">
            <div class="newCasesToday highlight">
               <p class="num">${newCases}</p>
               <p class="text">New Cases <br />Today</p>
            </div>
            <div class="totalNumberOfCases highlight">
               <p class="num">${total}</p>
               <p class="text">
                  Total Number<br />
                  of Cases
               </p>
            </div>
            <div class="activeCases">
               <p class="num">${active}</p>
               <p class="text">
                  Active<br />
                  Cases
               </p>
            </div>
            <div class="recoveries">
               <p class="num">${recovered}</p>
               <p class="text">Recoveries</p>
            </div>
            <div class="deaths">
               <p class="num">${deaths}</p>
               <p class="text">Deaths</p>
            </div>
            <div class="vaccinated">
               <p class="num">${vaccinated}</p>
               <p class="text">Vaccinated</p>
            </div>
         </div>
         <div class="heading c2">
            <div class="left">
               <h2>Worldwide</h2>
               <p></p>
            </div>
         </div>
         <div class="col col-2">
            
            <div >
               <p class="num">${wTotal}</p>
               <p class="text">
                  Total Number<br />
                  of Cases
               </p>
            </div>
            <div>
               <p class="num">${wActive}</p>
               <p class="text">
                  Active Cases
               </p>
            </div>
            <div >
               <p class="num">${wRecovered}</p>
               <p class="text">Recoveries</p>
            </div>
            <div>
               <p class="num">${wDeaths}</p>
               <p class="text">Deaths</p>
            </div>
         </div>

         <div class="bottomText">
            <p>
               source: mihaaru.com
            </p>
         </div>
      </div>
`;
   })
   .catch((error) => console.error(error));

if (covidContent.innerHTML === '') {
   /* html */
   covidContent.innerHTML = `<img src="img/loading.gif" style="display: block;
   margin-left: auto;
   margin-right: auto;
   width: 50%; padding-top: 4rem">`;
}

mainApp.addEventListener('click', (e) => {
   if (e.target.id === 'covidUpdates') {
      mainContainer.innerHTML = '';
      covidContent.style.display = 'block';
   } else if (e.target.id === 'home' || e.target.id === 'credits') {
      covidContent.style.display = 'none';
   }
});

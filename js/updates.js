const covidData = axios.get('https://fayaxcovidapimv.herokuapp.com/');
const covidContent = mainApp.querySelector('#covidContent');

covidData.then((res) => {
   const {
      total,
      activeCases: active,
      recoveries,
      totalDeaths: deaths,
   } = res.data;
   console.log(total, active, recoveries, deaths);

   covidContent.innerHTML = /* html */ ` 
    <div id="mainCard">
      <div class="col col-1">
         <div class="newCasesToday highlight">
            <p class="num">-</p>
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
            <p class="num">${recoveries}</p>
            <p class="text">Recoveries</p>
         </div>
         <div class="deaths">
            <p class="num">${deaths}</p>
            <p class="text">Deaths</p>
         </div>
      </div>
   </div>
`;
});

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

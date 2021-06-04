let settingsBtnClickCount = 0;

document.querySelector('#settings').addEventListener('click', (e) => {
   if (settingsBtnClickCount < 1) alert('Coming soon!');
   settingsBtnClickCount++;
});

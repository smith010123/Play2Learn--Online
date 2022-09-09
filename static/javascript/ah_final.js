let addScore = "0"
let addScoreM = "0"

window.addEventListener('load', function() {
   const csrfInput =  document.querySelector("input[name='csrfmiddlewaretoken']");
   const csrfToken = csrfInput.value;
   addScore = sessionStorage.getItem("addScore");
   addScoreM = sessionStorage.getItem("addScoreM");
   const addZero = "0"
   if (isNaN(addScore) || addScore < "1") {
      addScore = addScoreM
      addScoreM = addZero
   } else {
      addScoreM = addZero
   }
   const data = { "addScore" : addScore, "addScoreM" : addScoreM }
   fetch(ajaxURL, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken
      },
      body: JSON.stringify(data),
      })

   console.log(data);

   if (isNaN(addScore)) {
      let score = 0;
      score.innerText = addScore;

   } else {
      let score = document.getElementById('score');
         score.innerText = addScore;

   }
   if (isNaN(addScoreM)) {
      let scoreM = 0;
      scoreM.innerText = addScoreM;

   } else {
      let scoreM = document.getElementById('scoreM');
      scoreM.innerText = addScore;
   }

});
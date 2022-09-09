//let addScore = "0"
//let addScoreM = "0"

window.addEventListener('load', function() {
const csrfInput =  document.querySelector("input[name='csrfmiddlewaretoken']");
const csrfToken = csrfInput.value;
addScore = sessionStorage.getItem("addScore");
addScoreM = sessionStorage.getItem("addScoreM");
op = sessionStorage.getItem("op");
const addZero = "0"
if (addScore < "1") {
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
   let op = sessionStorage.getItem("op");
   let opFin = document.getElementById('op');
   opFin.innerText = op;
   console.log(op)
   opFin.innerText = op;
} else {
      let score = document.getElementById('score');
      score.innerText = addScore;
      let op = sessionStorage.getItem("op");
      let opFin = document.getElementById('op');
      opFin.innerText = op;
   }

if (isNaN(addScoreM)) {
   let scoreM = 0;
   scoreM.innerText = addScoreM;
   let opM = sessionStorage.getItem("op");
   let opFinM = document.getElementById('op');
   opFinM.innerText = opM;
   opFinM.innerText = opM;
} else {
      let scoreM = document.getElementById('scoreM');
      scoreM.innerText = addScore;
      let opM = sessionStorage.getItem("op");
      let opFinM = document.getElementById('op');
      opFinM.innerText = opM;
   }

});
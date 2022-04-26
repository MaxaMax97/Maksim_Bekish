/* ------- begin view -------- */

let view={
  divTchk: document.createElement("div"),
  

  //divTchk.id = "tchk" + i;
  //divTchk.innerHTML = i;
}






/* ------- end view -------- */


/* ------- begin modal -------- */

/* ------- end  modal -------- */


/* ------- begin controler -------- */



/* ------- end controler -------- */

let divClock = document.createElement("div");
divClock.className = "clock";

let divSek = document.createElement("div");
divSek.id = "sek";
let divMin = document.createElement("div");
divMin.id = "min";
let divHour = document.createElement("div");
divHour.id = "hour";
let divCircles = document.createElement("div");
divCircles.id = "circles";

divClock.append(divSek, divMin, divHour, divCircles);
document.body.prepend(divClock);




let angle = 0;
for (i = 1; i <= 12; i++) {
  let divTchk = document.createElement("div");

  divTchk.id = "tchk" + i;
  divTchk.innerHTML = i;
  divClock.append(divTchk);

  angle = angle + 30;

  const circle = document.getElementById("circles");
  const tchk = document.getElementById("tchk" + i);

  let angleRadians = (parseFloat(angle) / 180) * Math.PI;

  let redCenterX = circle.offsetLeft + circle.offsetWidth / 2;
  let redCenterY = circle.offsetTop + circle.offsetHeight / 2;

  let CenterX = redCenterX + 145 * Math.sin(angleRadians);
  let CenterY = redCenterY - 145 * Math.cos(angleRadians);

  tchk.style.left = Math.round(CenterX - circles.offsetWidth / 2) + "px";
  tchk.style.top = Math.round(CenterY - circles.offsetHeight / 2) + "px";
}

const secArrow = document.getElementById("sek");
const minArrow = document.getElementById("min");
const hourArrow = document.getElementById("hour");
secondArrow();
setInterval(secondArrow, 1000);
function secondArrow() {
  let data = new Date();
  let sec = data.getSeconds() * 6;
  let min = data.getMinutes() * 6;
  let hour = data.getHours() * 30;

  secArrow.style.transform = "rotate(" + (sec - 90) + "deg)";
  minArrow.style.transform = "rotate(" + (min - 90) + "deg)";
  hourArrow.style.transform = "rotate(" + (hour - 90) + "deg)";
}

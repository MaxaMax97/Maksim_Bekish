const svgNS = "http://www.w3.org/2000/svg";

const svg = document.createElementNS(svgNS, "svg");
svg.setAttributeNS(null, "width", 700);
svg.setAttributeNS(null, "height", 700);
svg.setAttributeNS(null, "id", "clock");
document.body.append(svg);

function drawSVGElements() {
  const svg = document.getElementById("clock");

  const w = parseFloat(svg.getAttributeNS(null, "width"));
  const h = parseFloat(svg.getAttributeNS(null, "height"));

  let circle = document.createElementNS(svgNS, "circle");

  circle.setAttributeNS(null, "cx", w / 2);
  circle.setAttributeNS(null, "cy", h / 2);
  circle.setAttributeNS(null, "r", w > h ? h / 2 : w / 2);
  circle.setAttributeNS(null, "fill", "red");
  circle.setAttributeNS(null, "stroke", "none");

  let dot = document.createElementNS(svgNS, "circle");
  dot.setAttributeNS(null, "cx", w / 2);
  dot.setAttributeNS(null, "cy", h / 2);
  dot.setAttributeNS(null, "r", 1);
  dot.id = "dots";
  svg.prepend(circle, dot);
}

let angle = 0;
for (i = 1; i <= 12; i++) {
  let circlemini = document.createElementNS(svgNS, "circle");

  circlemini.setAttributeNS(null, "cx", 70);
  circlemini.setAttributeNS(null, "cy", 300);
  circlemini.setAttributeNS(null, "r", 40);
  circlemini.setAttributeNS(null, "id", `tchk${i}`);
  circlemini.setAttributeNS(null, "fill", "green");
  circlemini.setAttributeNS(null, "stroke", "none");

  let text = document.createElementNS(svgNS, "text");

  text.setAttributeNS(null, "id", `tchkz${i}`);

  text.textContent = i;

  angle = angle + 30;

  let angleRadians = (parseFloat(angle) / 180) * Math.PI;

  let redCenterX = 350 + 0 / 2;
  let redCenterY = 350 + 0 / 2;

  let CenterX = redCenterX + 270 * Math.sin(angleRadians);
  let CenterY = redCenterY - 270 * Math.cos(angleRadians);

  let tchkCx = Math.round(CenterX - 0 / 2);
  let tchkCy = Math.round(CenterY - 0 / 2);
  circlemini.setAttributeNS(null, "cx", tchkCx);
  circlemini.setAttributeNS(null, "cy", tchkCy);
  text.setAttribute("x", tchkCx - 28);
  text.setAttribute("y", tchkCy + 20);

  svg.append(circlemini, text);
}

let stepSec = document.createElementNS(svgNS, "line");
stepSec.setAttributeNS(null, "x1", 700 / 2);
stepSec.setAttributeNS(null, "y1", 700 / 2);
stepSec.setAttributeNS(null, "x2", 350);
stepSec.setAttributeNS(null, "y2", 100); // длина
stepSec.setAttribute("class", "lineee");
stepSec.setAttributeNS(null, "stroke", "black");
stepSec.setAttributeNS(null, "stroke-width", 5);

let stepMin = document.createElementNS(svgNS, "line");
stepMin.setAttributeNS(null, "x1", 700 / 2);
stepMin.setAttributeNS(null, "y1", 700 / 2);
stepMin.setAttributeNS(null, "x2", 300);
stepMin.setAttributeNS(null, "y2", 20);
stepMin.setAttributeNS(null, "stroke", "orange");
stepMin.setAttributeNS(null, "stroke-width", 9);

let stepHour = document.createElementNS(svgNS, "line");
stepHour.setAttributeNS(null, "x1", 700 / 2);
stepHour.setAttributeNS(null, "y1", 700 / 2);
stepHour.setAttributeNS(null, "x2", 300);
stepHour.setAttributeNS(null, "y2", 230);
stepHour.setAttributeNS(null, "stroke", "green");
stepHour.setAttributeNS(null, "stroke-width", 13);

svg.append(stepSec, stepMin, stepHour);

secondArrow();
setInterval(secondArrow, 1000);
function secondArrow() {

  let data = new Date();
  let sec = data.getSeconds();
  let min = data.getMinutes();
  let hour = data.getHours();
  let second = 6 * sec + 1;
  let minutes = 6 * min + 1;
  let hours = 30 * hour + 1;

  stepMin.setAttribute("transform", `translate(0) rotate(${minutes} 350 350)`);
  stepSec.setAttribute("transform", `translate(0) rotate(${second} 350 350)`);
  stepHour.setAttribute("transform", `translate(0) rotate(${hours} 350 350)`);
}
drawSVGElements();

import { allPers } from "../test/func.js";
let urle = "https://rickandmortyapi.com/api/character";
let alive = "https://rickandmortyapi.com/api/character/?status=alive";
const dead = "https://rickandmortyapi.com/api/character/?status=dead";
allPers("GET", urle);

const deadOP = document.getElementById("status");

document.getElementById("input").addEventListener("click", fff);
function fff() {
  switch (deadOP.value) {
    case "all":
      allPers("GET", urle);
      break;
    case "dead":
      allPers("GET", dead);
      break;
    case "alive":
      allPers("GET", alive);
      break;
  }
}

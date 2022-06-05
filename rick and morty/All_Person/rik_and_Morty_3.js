import {
   header,
   statusCharacter,
   //getInfo,
   //getURLParameter,
   status,
   getInfo
 } from "../function.js";

 const alive = "https://rickandmortyapi.com/api/character/?status=alive";
 const character = "https://rickandmortyapi.com/api/character";
 const dead = "https://rickandmortyapi.com/api/character/?status=dead";
 const unknown = "https://rickandmortyapi.com/api/character/?status=unknown";
 
 header();
 statusCharacter("GET", character);
// getInfo()
 document.getElementById("aliveee").addEventListener("change", ()=> status());
 
 
 
 //function status() {
 //  const deadOP = document.getElementById("aliveee");
 //  let x = deadOP.value;
 //  switch (deadOP.value) {
 //    case "all":
 //      statusCharacter("GET", character);
 
 //      break;
 //    case "dead":
 //      //console.log(deadOP.value);
 //      statusCharacter("GET", dead);
 //      getInfo();
 //      break;
 //    case "alive":
 //      //console.log(deadOP.value);
 //      statusCharacter("GET", alive);
 //      break;
 //    case "unknown":
 //      //console.log(deadOP.value);
 //      statusCharacter("GET", unknown);
 //  }
 //}
 
 input.addEventListener("focus", function () {
   this.classList.add("focus");
   console.log("focus");
 });
 input.addEventListener("blur", function () {
   this.classList.remove("focus");
   console.log("no focus");
 });


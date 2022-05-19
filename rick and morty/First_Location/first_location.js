import getURLParameter from '/function/getURLParameter.js'
let source = getURLParameter('id')




let fann = async function (www) {
   const api = await fetch(www);
   const person = await api.json();
 
   const allContent = document.getElementById("allcontent");
   
   let className = "";
   if (person.status === "Dead") {
     className = "red";
   }
   if (person.status === "unknown") {
     className = "gray";
   }
  console.log(person)
   allContent.innerHTML += `
 
    <div class="person">
    <div class="mainmenu">
       <a class='mainmenubutton' href="index.html"> Главное меню </a>
    </div>
    <div class="aLLcontent" >
    <div class="image">
       <img src="${person.image}" alt="">
    </div>
    <div class="id-persen">
       Сharacter number: ${person.id}
    </div>
    <div class="episode">
       <a href="${person.episode[0]}" class="first-episode"> first-episode </a>
       <a href="${
         person.episode[Object.keys(person.episode).length - 1]
       }" class="last-episode"> last-episode </a>
    </div>
    <div class="gender">
       gender: ${person.gender}
    </div>
    <div class="location">
       <span> Location: </span>
       <a href="  ">${person.name}</a>
    </div>
    <div class="name">
       <span> Name: </span>
       <a href="https://rickandmortyapi.com/api/character/${person.id}"> ${
     person.name
   }</a>
    </div>
    <div class="origin">
       <span> Origin: </span>
       <a href="${person.url}">${person.name}</a>
    </div>
    <div class="species"> species: ${person.species}</div>
    <div class="status ${className}"> status: ${person.status} </div>
 </div>
 </div>
 `;
 };
 
 
 
 fann(`https://rickandmortyapi.com/api/episode/${sourcce}`);
 
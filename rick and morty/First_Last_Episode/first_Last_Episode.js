import getURLParameter from '/function/getURLParameter.js'
let source = getURLParameter('id')



let fann = async function (www) {
   const api = await fetch(www);
   const location = await api.json();
   const allContent = document.getElementById("allcontent");
  console.log(location)
   allContent.innerHTML += `
   <div class="person">
   <div class="mainmenu">
      <a class='mainmenubutton' href="/All_Person/all_Person.html"> Главное меню </a>
   </div>
   <div class="aLLcontent">
      <div class="name">
         Название серии ${location.name}
      </div>
      <div class="episode">
         Номер серии ${location.episode}
      </div>
      <div class="gender">
         Дата выхода в эфир ${location.air_date}
      </div>
   </div>
</div>

 `;
 };
 
 
 
 fann(`https://rickandmortyapi.com/api/episode/${source}`);
 
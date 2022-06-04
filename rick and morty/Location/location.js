import {getURLParameter} from "/function.js"
let source = getURLParameter("id");

let fann = async function (www) {
  const api = await fetch(www);
  const location = await api.json();
  const allContent = document.getElementById("allcontent");
  console.log(location);

  allContent.innerHTML += `
   
<div class="dataInfoCard">
<p class="dataLocation" >   <i> Тип локации: </i>${location.type}</i> </p>
<p class="dataLocation" > <i>Измерение:</i> ${
    location.dimension == "unknown" ? "Неизвестно" : location.dimension
  }  </p>
<p class="dataLocation" > <i>Последнее место этого пересонажа:</i> ${
    location.name
  } </p>

</div>

 `;
};

fann(`https://rickandmortyapi.com/api/location/${source}`);

import { header,getURLParameter } from "../function.js";
let source = getURLParameter("id");

header()
let pointpagin = true;
async function getResponse(url) {
  const response = await fetch(url);
  const content = await response.json();
  const allcontent = content["results"];
  const infoallcontent = content["info"];

  const infoallcontents = infoallcontent.pages;

  console.log('нужный   '+infoallcontents);

  if (pointpagin) {
    getInfo(infoallcontents);
  }

  const template = document.querySelector(".content");
  const poisk = document.querySelector(".poisk");
  template.innerHTML = " ";

  for (let key in allcontent) {
    const episodeLast =
      allcontent[key].episode[allcontent[key].episode.length - 1];

    let episodeLastFetch = await fetch(episodeLast);

    let contentEpisodeLastFetch = await episodeLastFetch.json();

    const episodeFirst = allcontent[key].episode[0];
    let episodeFirstFetch = await fetch(episodeFirst);
    let contentEpisodeFirstFetch = await episodeFirstFetch.json();
    let className = "";
    if (allcontent[key].status === "Dead") {
      className = "red";
    }
    if (allcontent[key].status === "unknown") {
      className = "gray";
    }

    let data = ` 
<div  class="card " >
  <div class="img1">
    <img src="${allcontent[key].image}" alt="картинка">
  </div>
  <div class="text">
    <div>
      <a class="titlee" id="adataid" data-id="${
        allcontent[key].id
      }"  id="titlee" href="/Person/person.html?id=${allcontent[key].id}" >   ${
      allcontent[key].id
    }   ${allcontent[key].name}
      </a>
      <p class=" status ${className}">${allcontent[key].status}  ${
      allcontent[key].status === "unknown" ? "" : "- " + allcontent[key].species
    }</p>
    </div>
    <div>
        <p class="subtitle">Last known location (Последнее известное местоположение в серии):</p>
        <a class="last-location-link" href="/First_Last_Episode/first_Last_Episode.html?id=${
          contentEpisodeLastFetch.id
        }">${contentEpisodeLastFetch.name}
        </a>
    </div>
    <div>
    <p class="subtitle">First seen in (Впервый замечен в серии):</p>
    <a class="first-location-link" href="/First_Last_Episode/first_Last_Episode.html?id=${
      contentEpisodeFirstFetch.id
    }">${contentEpisodeFirstFetch.name}
    </a>
    </div>
  </div>
  </div>`;


    let input = document.querySelector("input");
    function infoDataOnePers() {
      if (
        input.value.toLocaleLowerCase() ==
        allcontent[key].name.toLocaleLowerCase()
      ) {
        template.innerHTML = " ";
        input.value = "";
        input.placeholder = "Input name";
        poisk.style.display = "flex";
        document.getElementById("allcCharacter").disabled = false;
        poisk.innerHTML = data;
      }
    }

    document
      .getElementById("allcCharacter")
      .addEventListener("click", function () {
        template.style.display = "flex";
        poisk.style.display = "none";
        template.innerHTML += data;
        this.disabled = true;
        input.value = "";
        input.placeholder = "Input name";
      });
    const inputButton = document.getElementById("inputButton");
    inputButton.addEventListener("click", infoDataOnePers);
    document.addEventListener("keydown", function (event) {
      if (event.code == "Enter") {
        infoDataOnePers();
      }
    });

    template.innerHTML += data;
  }
}

async function getInfo(pages) {
  for (let i = 1; i <= pages; i++) {
    let a = document.createElement("a");
    a.href = `https://rickandmortyapi.com/api/character?page=${i}`;

    a.innerText = `${i}`;
    a.className = "paginA";
    a.addEventListener("click", async function (event) {
      event.preventDefault();

      const url = event.target.href;
      a.classList.add("pagin_a");
      getResponse(url);

      pointpagin = false;
    });

    pagination.append(a);
  }
}


let alive= '/?status=alive'
let character = "https://rickandmortyapi.com/api/character";



getResponse(character );


document.getElementById('aliveee').addEventListener("click", function (){
getResponse(character+alive)
getInfo(infoallcontents)
})

input.addEventListener("focus", function () {
  this.classList.add("focus");
  console.log("focus");
});
input.addEventListener("blur", function () {
  this.classList.remove("focus");
  console.log("no focus");
});










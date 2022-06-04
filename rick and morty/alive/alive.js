import { header } from "../function.js";

header()
async function alive(url) {
  const respns = await fetch(url);
  const dat = await respns.json();
  const allcontent = dat["results"];
  const infoallcontent = dat["info"];
  console.log(infoallcontent);
  const infoallcontents = infoallcontent.pages;

  if (pointpagin) {
    getInfo(infoallcontents);
  }

  const template = document.querySelector(".content");
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

    template.innerHTML += data;
  }
}

//let pointpagin = true;

//async function getInfo(pages) {
//  for (let i = 1; i <= pages; i++) {
//    let a = document.createElement("a");
//    a.href = `https://rickandmortyapi.com/api/character?page=${i}&status=alive`;
//    a.innerText = `${i}`;
//    a.className = "paginA";
//    a.addEventListener("click", async function (event) {
//      event.preventDefault();

//      const url = event.target.href;
//      a.classList.add("pagin_a");
//      alive(url);

//      pointpagin = false;
//    });

//    pagination.append(a);
//  }
//}






alive("https://rickandmortyapi.com/api/character/?status=alive");

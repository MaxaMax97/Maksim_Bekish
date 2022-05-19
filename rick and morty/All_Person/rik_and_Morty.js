
async function getResponse(url) {
  const response = await fetch(url);
  const content = await response.json();
  const allcontent = content["results"];
  const infoallcontent = content["info"];

  const infoallcontents = infoallcontent.pages;



  if (pointpagin) {
    getInfo(infoallcontents);
  }
  const template = document.querySelector(".content");


  template.innerHTML = " ";
  for (let key in allcontent) {
    const episodeLast =
      allcontent[key].episode[allcontent[key].episode.length - 1];
      //console.log(episodeLast)
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
  console.log(contentEpisodeFirstFetch)
    template.innerHTML += `
<div  class="card " >
  <div class="img1">
    <img src="${allcontent[key].image}" alt="картинка">
  </div>
  <div class="text">
    <div>
      <a class="titlee" id="adataid" data-id="${
        allcontent[key].id
      }"  id="titlee" href="/Person/person.html?id=${allcontent[key].id}" >   ${allcontent[key].id}   ${
      allcontent[key].name
    }
      </a>
      <p class=" status ${className}">${allcontent[key].status}  ${
      allcontent[key].status === "unknown" ? "" : "- " + allcontent[key].species
    }</p>
    </div>
    <div>
        <p class="subtitle">Last known location (Последнее известное местоположение):</p>
        <a class="last-location-link" href="#">${contentEpisodeLastFetch.name}
        </a>
    </div>
    <div>
    <p class="subtitle">First seen in (Впервый замечен):</p>
    <a class="first-location-link" href="/First_Location/first_location.html?id=${contentEpisodeFirstFetch.id}">${contentEpisodeFirstFetch.name}
    </a>
    </div>
  </div>
</div>`;
  }
  //let adataid= document.getElementById('adataid')
  //let rere=adataid.dataset.id
  //console.log("Э   " +rere)
  //for (let i = 0; i <= arr.length - 1; i++) {
  //  arr[i].addEventListener("click", function () {
  //    allcontennt.innerHTML = " ";
  //    persone("https://rickandmortyapi.com/api/character/" +arr[i].id);
  //  });
  //}
}

let pointpagin = true;
async function getInfo(pages) {
  for (let i = 1; i <= pages; i++) {
    let a = document.createElement("a");
    a.href = `https://rickandmortyapi.com/api/character?page=${i}`;
    a.innerText = `${i}`;
    a.className = "paginA";
    a.addEventListener("click", async function (event) {
      event.preventDefault();
      const url = event.target.href;
      getResponse(url);

      pointpagin = false;
    });
    pagination.append(a);
  }
}
getResponse("https://rickandmortyapi.com/api/character");

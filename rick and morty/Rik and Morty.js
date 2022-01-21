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

    template.innerHTML += `
<div  class="card " >
  <div class="img1">
    <img src="${allcontent[key].image}" alt="картинка">
  </div>
  <div class="text">
    <div>
      <a class="title"  href="#" >  ${allcontent[key].name}
      </a>
      <p class=" status ${className}">${allcontent[key].status}  ${
      allcontent[key].status === "unknown" ? "" : "- " + allcontent[key].species
    }</p>
    </div>
    <div>
        <p class="subtitle">Last known location:</p>
        <a class="last-location-link" href="#">${contentEpisodeLastFetch.name}
        </a>
    </div>
    <div>
    <p class="subtitle">First seen in:</p>
    <a class="first-location-link" href="#">${contentEpisodeFirstFetch.name}
    </a>
    </div>
  </div>
</div>`;
  }

  const title = document.querySelectorAll(".title");
  const arr = Array.from(title);
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i].addEventListener("click", function () {
      const num = i + 1;
      console.log(num);
      person("https://rickandmortyapi.com/api/character/" + num);
    });
  }
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
      console.log(url + " jkjkjk");
      pointpagin = false;
    });
    pagination.append(a);
  }
}
getResponse("https://rickandmortyapi.com/api/character");
//person('https://rickandmortyapi.com/api/character/3')

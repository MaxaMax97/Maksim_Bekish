const helpers = {
  getURLParameters: function (name) {
    return decodeURIComponent(
      (RegExp(name + "=" + "(.+?)(&|$)").exec(location.search) || [
        ,
        null,
      ])[1] || ""
    );
  },
  header: function () {
    const hed = document.createElement("header");
    hed.className = "ban";

    hed.innerHTML = `


    <h1 class="textRic"> <img src="/Rick_and_Morty.svg" alt="rik_and_Morty"> </h1>
    <div class="menuBlok">


       <ul class="menu">
          <li><a class="iksweb"
                href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B8%D0%BA_%D0%B8_%D0%9C%D0%BE%D1%80%D1%82%D0%B8">О
                сериале</a></li>
          <li><a class="iksweb" href="/Mein/main.html">Вернуться в главное окно</a></li>
          <li><a class="iksweb" href="#">link3</a></li>
       </ul>
    </div>


    <div>
       <input id="input" class="input" placeholder="Input name character" type="text"></input>
       <input type="button" id="inputButton" value="поиск" class="iksweb"></input>
       <input type="button" id="allcCharacter" value="Показать всех" class="iksweb"></input>

       <select id="aliveee" class="iksweb">
       <option id="all" value="all">all</option>
       <option id="dead" value="dead">dead</option>
       <option id="alive" value="alive">alive</option>
       <option id="unknown" value="unknown">unknown</option>
    </select>

    </div>


`;
    document.body.prepend(hed);
  },
  pointpagin: true,
  statusCharacter: function (mtd, url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(mtd, url);
      xhr.responseType = "json";
      xhr.onload = () => {
        resolve(xhr.response);

        const allcontent = xhr.response["results"];
        const infoallcontent = xhr.response["info"];
        //console.log( infoallcontent,next)

        const infoallcontents = infoallcontent.pages;
        const nextURL = infoallcontent.next;
        if (helpers.pointpagin) {
          getInfo(infoallcontents, nextURL);
        }

        const template = document.querySelector(".content");
        const poisk = document.querySelector(".poisk");
        template.innerHTML = " ";

        for (let key in allcontent) {
          //const episodeLast =
          //  allcontent[key].episode[allcontent[key].episode.length - 1];
          //let episodeLastFetch = await fetch(episodeLast);
          //let contentEpisodeLastFetch = await episodeLastFetch.json();

          //const episodeFirst = allcontent[key].episode[0];
          //let episodeFirstFetch = await fetch(episodeFirst);
          //let contentEpisodeFirstFetch = await episodeFirstFetch.json();
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
            allcontent[key].status === "unknown"
              ? ""
              : "- " + allcontent[key].species
          }</p>
    </div>
    <div>
        <p class="subtitle">Last known location (Последнее известное местоположение в серии):</p>
        <a class="last-location-link" href="/First_Last_Episode/first_Last_Episode.html?id=${"contentEpisodeLastFetch.id"}">${"contentEpisodeLastFetch.name"}
        </a>
    </div>
    <div>
    <p class="subtitle">First seen in (Впервый замечен в серии):</p>
    <a class="first-location-link" href="/First_Last_Episode/first_Last_Episode.html?id=${" contentEpisodeFirstFetch.id"}">${"contentEpisodeFirstFetch.name"}
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
      };
      xhr.send();
    });
  },

  getInfo: (pages, next) => {
    let urlares = next.split("&");
    //console.log( `pages  ${pages}`)
    document.querySelectorAll('.paginA').innerHTML=''
    for (let i = 1; i <= pages; i++) {
    
     let a = document.createElement("a");
    // console.log(Boolean(typeof a))
      a.href = `https://rickandmortyapi.com/api/character?page=${i}&${
        urlares[1] ? urlares[1] : ""}`;

      a.innerText = `${i}`;
      a.className = "paginA";
      a.id = "aloxa";

      a.addEventListener("click", function (event) {
        event.preventDefault();
        const url = event.target.href;

        a.classList.add("pagin_a");
        helpers.statusCharacter("GET", url);
        helpers.pointpagin = false;
      });
      pagination.append(a);
    }  
  },
  status: function () {
    const deadOP = document.getElementById("aliveee");
    let x = deadOP.value;
    switch (deadOP.value) {
      case "all":
        statusCharacter("GET", character);

        break;
      case "dead":
        //console.log(deadOP.value);
        statusCharacter(
          "GET",
          "https://rickandmortyapi.com/api/character/?status=dead"
        );
        //getInfo();
        break;
      case "alive":
        //console.log(deadOP.value);
        statusCharacter("GET", 'https://rickandmortyapi.com/api/character/?status=alive');
        break;
      case "unknown":
        //console.log(deadOP.value);
        statusCharacter("GET", unknown);
    }
  },
};
export const status = helpers.status;
export const getInfo = helpers.getInfo;
export const getURLParameter = helpers.getURLParameters;
export const header = helpers.header;
export const statusCharacter = helpers.statusCharacter;

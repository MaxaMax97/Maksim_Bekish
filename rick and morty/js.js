async function getResponse() {
  let response = await fetch("https://rickandmortyapi.com/api/character");
  let content = await response.json();
  let allcontent = content["results"];

  const template = document.querySelector(".template");

  let key;
  for (key in allcontent) {
    const episodeLast =
      allcontent[key].episode[allcontent[key].episode.length - 1];

    let episodeLastFetch = await fetch(episodeLast);
    let contentEpisodeLastFetch = await episodeLastFetch.json();

    const episodeFirst = allcontent[key].episode[0];
    let episodeFirstFetch = await fetch(episodeFirst);
    let contentEpisodeFirstFetch = await episodeFirstFetch.json();
let className='';
    if(allcontent[key].status==='Dead'){
      className='red';
   }
   if(allcontent[key].status==='unknown'){
      className='gray';
   }
   

    template.innerHTML += `
    <div class="content template">
    <div  class="card " >
<div class="img1">
               <img src="${allcontent[key].image}" alt="картинка">
            </div>
            <div class="text">
               <div>
                  <a class="title" href="#">${allcontent[key].name}</a>
                  <p class=" status ${className}">${allcontent[key].status}  ${
      allcontent[key].status === "unknown" ? "" : "- " + allcontent[key].species
    }</p>
               </div>
               <div>
                  <p class="subtitle">Last known location:
                  </p>
                  <a class="last-location-link" href="#">${
                    contentEpisodeLastFetch.name
                  }</a>
               </div>
               <div>
                  <p class="subtitle">First seen in:</p>
                  <a class="first-location-link" href="#">${
                    contentEpisodeFirstFetch.name
                  }</a>
               </div>
            </div>
            </div>
            </div>
`;
  }
  console.log(content);
}

getResponse();

// const cod=fetch(urlric);
//  (cod)
// console.log(cod)
// .then((response) => {
//  return response.json();
//})
//.then((data) => {
//  const array = Object.entries(data);

// console.log(array)
//  array.forEach(function (item) {

//  });
//});

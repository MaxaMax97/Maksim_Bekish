async function person(urla) {
  const api = await fetch(urla);
  const person = await api.json();
  const allContent = document.createElement("div");
  allContent.className = "allContent";
 
  document.body.append(allContent);
 
  allContent.innerHTML = `
         <div class="person">
         <div>
            <img src="${person.image}" alt="">
         </div>
         <div class="id-persen">
         Сharacter number: ${person.id}
         </div>
         <div class="episode">
            <a href="${
              person.episode[0]
            }" class="first-episode"> first-episode </a>
            <a href="${
              person.episode[Object.keys(person.episode).length - 1]
            }" class="last-episode"> last-episode </a>
         </div>
         <div class="gender">
            gender: ${person.gender}
         </div>
         <div class="location">
         <span> Location: </span>
         <a href="  ">${person.location.name}</a>
         </div>
         <div class="name">
         <span> Name: </span>
            <a href="https://rickandmortyapi.com/api/character/${person.id}"> ${person.name}</a>
         </div>
         <div class="origin">
         <span> Origin: </span>
            <a href="${person.origin.url}">${person.origin.name}</a>
         </div>
         <div class="species"> species: ${person.species}</div>
         <div class="status">status: ${person.status} </div>
         </div>
`;
}

'person("https://rickandmortyapi.com/api/character/163")';

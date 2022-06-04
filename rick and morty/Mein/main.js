//const names = document.getElementById("inputName");
//const email = document.querySelector("#inputmail");
//const password = document.querySelector("#inputpassword");

let inputButton = document.getElementById("buttonName");
//document.querySelector  

//inputName.addEventListener('blur', localName)
inputButton.addEventListener("click", localName);

//document.addEventListener("keydown", localName);
let test = true;

function localName(event) {
  //if (event.which == 1 || event.code == "Enter") {
  //  localStorage.setItem("name", inputName.value);

  //  console.log("Value   " + inputName.value);
  //}
  event.preventDefault();


const email= event.target.document.getElementById('inputmail').value

  console.log( email);
}

let url = "https://rickandmortyapi.com/api/character/?name=rick&status=alive";
async function fff(url) {
  const one = await fetch(url);
  const two = await one.json();
  const fri = two["Object"];
  console.log(two);
}
fff(url);

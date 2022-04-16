//////////////------эЛЕМЕНТЫ------/////////////
let modelOpen = document.getElementById("modal-open");
let modalClose = document.getElementById("modal-close");
let model = document.getElementById("modal");
let modalCancel = document.getElementById("modal-cancel");
let modalSave = document.getElementById("modal-save");
let userName = document.getElementById("name");
let birthDay = document.getElementById("birth-day");
birthDay.setAttribute("maxLength", 2);
let birthMonth = document.getElementById("birth-month");
birthMonth.setAttribute("maxLength", 2);
let birthYear = document.getElementById("birth-year");
birthYear.setAttribute("maxLength", 4);
let conteiner = document.querySelector(".container");
let div = document.createElement("div");
let spanName = document.createElement("span");
conteiner.append(div);
div.append(spanName);
//////////////------СОБЫТИЯ------/////////////
userName.addEventListener("blur", dis);
birthDay.addEventListener("blur", dis);
birthMonth.addEventListener("blur", dis);
birthYear.addEventListener("blur", dis);
modalClose.addEventListener("click", close);
modelOpen.addEventListener("click", openn);
modalCancel.addEventListener("click", close);
modalSave.addEventListener("click", saveInfo);

//////////////------ФУНКЦИИ------/////////////

setTimeout(newinfo, 0);

function saveInfo() {
  let obj = {
    name: userName.value,
    day: birthDay.value,
    month: birthMonth.value,
    year: birthYear.value,
  };
  let json = JSON.stringify(obj);
  localStorage.setItem("dataInfo", json);
  modal.classList.toggle("modal_closed");
  newinfo();
}
function openn() {
  modal.classList.toggle("modal_closed");
}
function close() {
  modal.classList.toggle("modal_closed");
  spanName.innerHTML = ``;
}
function newinfo() {
  let json = localStorage.getItem("dataInfo");
  let obj = JSON.parse(json);
  spanName.innerHTML = `Добро пожаловать, ${obj.name} <br/> Твой день pождения ${obj.day}. ${obj.month}. ${obj.year}`;
}
function dis(event) {
  event.preventDefault();
  if (userName.value && birthDay.value && birthMonth.value && birthYear.value) {
    modalSave.disabled = false;
  } else {
    modalSave.disabled = true;
  }
}

//////////////------прочее------/////////////
modalSave.disabled = true;

//////////////////////////////////////////////////---------------------controller---------------------------///////////////////////////////////////////

let controller = {
  modalOpen: document.getElementById("modal-open"),
  modalClose: document.getElementById("modal-close"),
  modalCancel: document.getElementById("modal-cancel"),
  modalSave: document.getElementById("modal-save"),
  userName: document.getElementById("name"),
  birthDay: document.getElementById("birth-day"),
  birthMonth: document.getElementById("birth-month"),
  birthYear: document.getElementById("birth-year"),
  conteiner: document.querySelector(".container"),
  pName: document.createElement("p"),
};

controller.conteiner.append(controller.pName);

controller.modalOpen.addEventListener("click", openn);
controller.userName.addEventListener("blur", disabledButton);
controller.birthDay.addEventListener("blur", disabledButton);
controller.birthMonth.addEventListener("blur", disabledButton);
controller.birthYear.addEventListener("blur", disabledButton);
controller.modalClose.addEventListener("click", close);
controller.modalCancel.addEventListener("click", close);
controller.modalSave.addEventListener("click", saveInfo);

newinfo();

function saveInfo() {
  let obj = {
    name: controller.userName.value,
    day: controller.birthDay.value,
    month: controller.birthMonth.value,
    year: controller.birthYear.value,
  };
  let json = JSON.stringify(obj);
  localStorage.setItem("dataInfo", json);
  openn();
  newinfo();
}

function disabledButton(event) {
  event.preventDefault();
  if (
    controller.userName.value &&
    controller.birthDay.value &&
    controller.birthMonth.value &&
    controller.birthYear.value
  ) {
    controller.modalSave.disabled = false;
  } else {
    controller.modalSave.disabled = true;
  }
}

function newinfo() {
  let json = localStorage.getItem("dataInfo");
  let obj = JSON.parse(json);
  controller.pName.innerHTML = `Добро пожаловать, ${obj.name} <br/> Твой день pождения ${obj.day}. ${obj.month}. ${obj.year}`;
}

function close() {
  openn();
  controller.pName.innerHTML = ``;
}

function openn() {
  modal.classList.toggle("modal_closed");
}

//////////////------прочее------/////////////

controller.modalSave.disabled = true;

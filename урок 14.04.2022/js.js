/* ------- begin view -------- */
function ModalView() {
  let myModal = null;
  let myModalOverlay = null;
  let modalData = null;
  let btnClear = null;

  this.init = function () {
    myModal = document.getElementById("modal");
    myModalOverlay = document.getElementById("modal-overlay");
    modalData = document.getElementById("say-hi");
    btnClear = document.getElementById("clear-data");
  };

  this.toggleModalView = function () {
    myModal.classList.toggle("modal_closed");
    myModalOverlay.classList.toggle("modal_closed");

    this.clearForm();
  };

  this.printViewData = function (userData) {
    modalData.innerHTML = `<h3>Привет, ${userData.name}!!!</h3><p>У тебя день рождения ${userData.day}/${userData.month}/${userData.year}.</p>`;
    btnClear.style.display = "inline-block";
  };

  this.clearViewData = function () {
    modalData.innerHTML = `Данные отсутствуют...`;
    btnClear.style.display = "none";
  };

  this.clearForm = function () {
    document.getElementById("name").value = "";
    document.getElementById("birth-day").value = "";
    document.getElementById("birth-month").value = "";
    document.getElementById("birth-year").value = "";
  };
  this.btnDisabled = function (state) {
    const saveButton = document.getElementById("modal-save");
    saveButton.disabled = state;
  };
}
/* -------- end view --------- */

/* ------- begin model ------- */
function ModalModel() {
  let myModalView = null;
  let userData = {};

  this.init = function (view) {
    myModalView = view;
  };

  this.toggle = function () {
    myModalView.toggleModalView();
  };

  this.saveModalData = function (getInputs) {
    userData.name = getInputs.modalInputName;
    userData.day = getInputs.modalInputDay;
    userData.month = getInputs.modalInputMonth;
    userData.year = getInputs.modalInputYear;
    this.storeData();
  };

  this.storeData = function () {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      let dateExpire = new Date();
      dateExpire.setHours(dateExpire.getHours() + 4);
      document.cookie = `userDataCookie=${JSON.stringify(
        userData
      )};expires=${dateExpire.toUTCString()}`;
    }
    this.updateData();
    this.toggle();
  };

  this.updateData = function () {
    if (localStorage.getItem("userData")) {
      this.userData = JSON.parse(window.localStorage.getItem("userData"));
    } else {
      let cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        let partsArray = cookies[i].split("="),
          name = partsArray[0],
          value = partsArray[1];
        if (name === "userDataCookie") {
          this.userData = JSON.parse(value);
        }
      }
    }
    myModalView.printViewData(this.userData);
  };

  this.clearData = function () {
    if (localStorage.getItem("userData")) {
      localStorage.removeItem("userData");
    } else {
      let dateExpire = new Date(0);
      document.cookie = `userDataCookie=${JSON.stringify(
        userData
      )};expires=${dateExpire.toUTCString()}`;
    }
    myModalView.clearViewData();
  };

  this.btnDisable = function (state) {
    myModalView.btnDisabled(state);
  };
}
/* -------- end model -------- */

/* ----- begin controller ---- */
function ModalController() {
  let myModalModel = null;

  let inputs = {};

  this.init = function (model) {
    myModalModel = model;

    const openButton = document.getElementById("modal-open");
    const closeButton = document.getElementById("modal-close");
    const cancelButton = document.getElementById("modal-cancel");
    const saveButton = document.getElementById("modal-save");
    const clearDataButton = document.getElementById("clear-data");

    const modalInputName = document.getElementById("name");
    const modalInputDay = document.getElementById("birth-day");
    const modalInputMonth = document.getElementById("birth-month");
    const modalInputYear = document.getElementById("birth-year");

    modalInputName.addEventListener("input", disabling);
    modalInputDay.addEventListener("input", disabling);
    modalInputMonth.addEventListener("input", disabling);
    modalInputYear.addEventListener("input", disabling);

    clearDataButton.addEventListener("click", this.clearData);
    closeButton.addEventListener("click", this.toggleModal);
    cancelButton.addEventListener("click", this.toggleModal);
    openButton.addEventListener("click", this.toggleModal);
    saveButton.addEventListener("click", this.saveModal);

    myModalModel.btnDisable(true);

    function disabling() {
      if (
        modalInputName.value &&
        modalInputDay.value > 0 &&
        modalInputDay.value < 32 &&
        modalInputMonth.value > 0 &&
        modalInputMonth.value < 13 &&
        modalInputYear.value > 1900 &&
        modalInputYear.value < 2023
      ) {
        inputs.modalInputName = modalInputName.value;
        inputs.modalInputDay = modalInputDay.value;
        inputs.modalInputMonth = modalInputMonth.value;
        inputs.modalInputYear = modalInputYear.value;

        myModalModel.btnDisable(false);
      } else {
        myModalModel.btnDisable(true);
      }
    }

    if (localStorage.getItem("userData") || document.cookie) {
      myModalModel.updateData();
    }
  };

  this.toggleModal = function () {
    myModalModel.toggle();
  };

  this.saveModal = function () {
    myModalModel.saveModalData(inputs);
  };

  this.clearData = function () {
    myModalModel.clearData();
  };
}
/* ------ end controller ----- */

// глобальная инициализация
const appModalController = new ModalController();
const appModalModel = new ModalModel();
const appModalView = new ModalView();

appModalModel.init(appModalView);
appModalView.init();
appModalController.init(appModalModel);

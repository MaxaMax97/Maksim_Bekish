// model
const grinch = {
  posX: 50,
  posY: 50,
  isRun: false,

  updateView: function () {
    // при любых изменениях модели попадаем сюда
    // представление может быть любым
    // их даже может быть несколько
    webPageView.update(this.posX, this.posY, this.isRun);
  },

  shift: function (x, y) {
    this.posX += (this.isRun ? 30 : 5) * x;
    this.posY += (this.isRun ? 30 : 5) * y;
    this.updateView(); // модель при любых изменениях вызывает обновление представления
  },

  setRun: function (state) {
    this.isRun = state;
    this.updateView(); // модель при любых изменениях вызывает обновление представления
  },
};

// view
const webPageView = {
  runField: document.getElementById("IRun"),
  grinchBox: document.getElementById("IMan"),
  update: function (x, y, run) {
    this.runField.checked = run;
    this.grinchBox.style.left = x + "px";
    this.grinchBox.style.top = y + "px";
  },
};

// controller
const controller = {
  addListeners: function () {
    const container = document.getElementById("buttons");
    const runChecker = document.getElementById("IRun");

    container.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.id;

      switch (btn) {
        case "shiftLeft":
          grinch.shift(-1, 0);
          break;
        case "shiftRight":
          grinch.shift(1, 0);
          break;
        case "shiftUp":
          grinch.shift(0, -1);
          break;
        case "shiftDown":
          grinch.shift(0, 1);
          break;
        default:
      }
    });

    runChecker.addEventListener("change", function () {
      grinch.setRun(this.checked);
    });
  },
};

controller.addListeners();

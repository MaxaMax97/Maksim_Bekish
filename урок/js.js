//---------------view-----------------//

let view = {
  showresult: function (n) {
    let answer = document.getElementById("show-result");
    answer.innerHTML = `Ответ ${n}`;
  },
};

//--------------model------------------//

let model = {
  result: 0,
  calcul: function (x, y) {
    switch (operand.value) {
      case "-":
        this.result = Number(x.value) - Number(y.value);
        break;
      case "+":
        this.result = Number(x.value) + Number(y.value);
        break;
      case "/":
        this.result = Number(x.value) / Number(y.value);
        break;
      case "*":
        this.result = Number(x.value) * Number(y.value);
        break;
    }
    view.showresult(this.result);
  },
};
//-----------------controler-----------------------//
let controler = {
  control: function () {
    let input_1 = document.getElementById("input_1");
    let input_2 = document.getElementById("input_2");
    model.calcul(input_1, input_2);
  },
};
//------------------------------//
(function () {
  let app = {
    event: function () {
      let button = document.getElementById("calculate-btn");
      button.disabled = true;
      let input_2 = document.getElementById("input_2");
      input_2.addEventListener("blur", bluring);
      function bluring() {
        if (input_2.value) {
          button.disabled = false;
        } else {
          button.disabled = true;
        }
      }
      button.onclick = controler.control;
    },
    function() {},
  };
  app.event();
})();

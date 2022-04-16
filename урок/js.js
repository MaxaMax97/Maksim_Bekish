//--------------model------------------//

let model = {
  valueOne: null,
  valueTwo: null,
  result: null,
  buttonDisabled: true,
  calcul: function (x) {
    switch (x) {
      case "+":
        this.result = +this.valueOne + +this.valueTwo;
        break;
      case "-":
        this.result = this.valueOne - this.valueTwo;
        break;
      case "/":
        if(this.valueOne==0 || this.valueTwo==0 ){
        this.result="Error"
        }else{
        this.result = this.valueOne / this.valueTwo;}
        break;
      case "*":
        this.result = this.valueOne * this.valueTwo;
        break;
    }
    this.updateResult();
  },
  disableButton: function (state) {
    this.buttonDisabled = state;
    view.buttonUpdate(this.buttonDisabled);
  },
  updateResult: function () {
    view.showresult(this.result);
  },
};

//---------------view-----------------//

let view = {
  resultField: document.getElementById("show-result"),
  btn: document.getElementById("calculate-btn"),
  showresult: function (result) {
    result === null
      ? (this.resultField.textContent = "")
      : (this.resultField.textContent = "Результат вычислений = " + result);
  },
  buttonUpdate: function (isDisabled) {
    this.btn.disabled = isDisabled;
  },
};

//-----------------controler-----------------------//

let controler = {
  control: function () {
    const button = document.getElementById("calculate-btn");
    const slct = document.getElementById("operand");
    const input_1 = document.getElementById("input_1");
    const input_2 = document.getElementById("input_2");
    input_2.addEventListener("blur", bluring);
    input_1.addEventListener("blur", bluring);
    model.disableButton(true);
    function bluring() {
      if (input_2.value && input_1.value) {
        model.valueOne = input_1.value;
        model.valueTwo = input_2.value;
        model.disableButton(false);
      } else {
        model.disableButton(true);
        model.result = null;
        model.updateResult();
      }
    }
    button.addEventListener("click", function (event) {
      event.preventDefault();
      model.calcul(slct.value);
    });
  },
};

controler.control();

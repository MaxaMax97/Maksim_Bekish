const span = document.createElement("span");
const inputPassword = document.createElement("input");
const inputLogin = document.createElement("input");
const inputSubmit = document.createElement("input");
const br = document.createElement("br");
const div = document.createElement("div");
div.append(span, br, inputLogin, inputPassword, inputSubmit);
span.innerText = "Введите логин и пароль";
inputPassword.type = "text";
inputLogin.type = "text";
inputSubmit.type = "submit";
inputPassword.placeholder = "Пароль";
inputLogin.placeholder = "Логин";
inputLogin.id = "login";
inputPassword.id = "password";
inputSubmit.id = "submit";
document.body.append(div);
document.getElementById("submit").onclick = function () {
  let login = document.getElementById("login").value;
  let password = document.getElementById("password").value;
  if (login == "Настя" && password == "09.01.2000") {
    alert("I Love You");
  } else {
    alert("Попробуй еще");
  }
};

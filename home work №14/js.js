const span = document.createElement("span");
const inputPassword = document.createElement("input");
const inputLogin = document.createElement("input");
const inputSubmit = document.createElement("input");
const br = document.createElement("br");
const div = document.createElement("div");
const div1 = document.createElement("div");
div.append(span, br, inputLogin, inputPassword, inputSubmit);
span.innerText = "Введите логин и пароль";
inputPassword.type = "password";
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

  const p = inputPassword.value;
  const l = inputLogin.value;
  localStorage.setItem("password", p);
  localStorage.setItem("login", l);
  if (
    valid5sim(password.value) &&
    valid1cifra(password.value) &&
    valid1bukva(password.value) &&
    valid5simpassword(login.value) &&
    localStorage.getItem("login") !== null &&
    localStorage.getItem("password") !== null
  ) {
    const h1 = document.createElement("h1");
    h1.innerText = "Ты справился";
    div1.append(h1);
    div.hidden = true;
    document.body.append(div1);
  } else {
    span.innerText = "Не правильно ввели данные";
  }
};

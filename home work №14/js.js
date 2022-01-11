const array = [
  { element: "input", type: "submit", id: "submit" },
  { element: "input", type: "password", id: "password", placeholder: "Пароль" },
  { element: "input", type: "text", id: "login", placeholder: "Логин" },
  { element: "br", id: "br" },
  { element: "sapn", id: "span", innerText: "Введите логин и пароль" },
];

const div = document.createElement("div");
const div1 = document.createElement("div");

array.forEach((item) => {
  const tagName = document.createElement(item.element);
  div.prepend(tagName);
  tagName.innerText = item.innerText;
  tagName.id = item.id;
  tagName.type = item.type;
  tagName.placeholder = item.placeholder;
});
document.body.append(div);

submit.addEventListener("click", validFunction);

function validFunction() {
  let login = document.getElementById("login").value;
  let password = document.getElementById("password").value;
  if (
    validFiveDigit(login) &&
    validFiveDigit(password) &&
    validOneDigit(password) &&
    validOneLetter(password)
  ) {
    localStorage.setItem("password", password.value);
    localStorage.setItem("login", login.value);
    const h1 = document.createElement("h1");
    h1.innerText = "Ты справился";
    div1.append(h1);
    div.hidden = true;
    document.body.append(div1);
  } else {
    span.innerText = "Не правильно ввели данные";
  }
}

const array = [
  { element: "input", type: "submit", id: "submit" },
  { element: "input", type: "text", id: "password", placeholder: "Пароль" },
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
  let loginValue = document.getElementById("login").value;
  let passwordValue = document.getElementById("password").value;
  if (valid(loginValue) && valid(passwordValue)) {
    localStorage.setItem("login", loginValue);
    localStorage.setItem("password", passwordValue);
    const h1 = document.createElement("h1");
    h1.innerText = "Ты справился";
    div1.append(h1);
    div.hidden = true;
    document.body.append(div1);
  } else {
    span.innerText = "Не правильно ввели данные";
  }
}
function valid(value) {
  const valid = value.length >= 5 && /\d/.test(value) && value.match(/[a-z]/i);
  return valid;
}

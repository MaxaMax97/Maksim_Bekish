const form = document.form;
const input = form.input;

const span = document.createElement("span");

const array = [];
input.addEventListener("blur", (event) => {
  let arr = event.target.value.split("");

  const www = arr.includes("@");
  if (www === true) {
    input.className = "green";
    span.innerHTML = "Молодец";
  } else {
    input.className = "red";
    span.innerHTML = "Вы не ввели @";
  }
});
document.body.append(span);
const array = [
  { name: "wolf" },
  { name: "fish" },
  { name: "petuh" },
  { name: "dog" },
];

const h1 = document.createElement("h1");
const div = document.createElement("div");
const ul = document.createElement("ul");

div.append(ul);

h1.innerHTML = "Зажмите Ctrl что бы выделить текст";
array.forEach((item) => {
  const li = document.createElement("li");
  ul.append(li);
  li.innerHTML = item.name;
});

ul.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    if (event.ctrlKey) {
      toggleSelect(event.target);
    } else {
      singleSelect(event.target);
    }
  }
});

function toggleSelect(li) {
  li.classList.toggle("css");
}

function singleSelect(li) {
  let css = ul.querySelectorAll(".css");
  for (let elem of css) {
    elem.classList.remove("css");
  }
  li.classList.add("css");
}
document.body.append(h1);
document.body.append(div);

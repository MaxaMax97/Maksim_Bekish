const formArray = [
  { type: "text", name: "name" },
  { type: "password", name: "password" },
  { type: "submit", name: "submit" },
];

const form = document.createElement("form");

formArray.forEach((item) => {
  const input = document.createElement("input");
  form.append(input);
  input.innerText = item.name ;
  input.type=item.type;
});
console.log(document.form);
document.body.append(form);

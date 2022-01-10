const urlCompany = "https://random-data-api.com/api/company/random_company";
const urlPhone =
  "https://random-data-api.com/api/phone_number/random_phone_number";
const urlUser = "https://random-data-api.com/api/users/random_user";
const div = document.createElement("div");

function allCod(url) {
  const promise = fetch(url);
  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const array = Object.entries(data);
      let ul = document.createElement("ul");
      div.append(ul);
      array.forEach(function (item) {
        let li = document.createElement("li");
        ul.append(li);
        li.innerHTML = `${item[0]}: ${item[1]} `;
      });
    });
}

company.addEventListener("click", update.bind(null, urlCompany));
user.addEventListener("click", update.bind(null, urlUser));
phone.addEventListener("click", update.bind(null, urlPhone));

function update(url) {
  div.innerHTML = ` `;
  allCod(url);
}
document.body.append(div);
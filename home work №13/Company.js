const urlCompany = "https://random-data-api.com/api/company/random_company";
const urlPhone = "https://random-data-api.com/api/phone_number/random_phone_number";
const urlUser = "https://random-data-api.com/api/users/random_user";
const div = document.createElement("div");


company.addEventListener ('click',show_meC );
function show_meC() {
  div.innerHTML = ` `;
  const promiseCompany = fetch(urlCompany);
  promiseCompany
    .then((responseCompany) => {
      return responseCompany.json();
    })
    .then((company) => {
      const arrayCompany = Object.entries(company);
      let ul = document.createElement("ul");
      div.append(ul);
      arrayCompany.forEach(function (item) {
        let li = document.createElement("li");
        ul.append(li);
        li.innerHTML = `${item[0]}: ${item[1]} `;
      });
    });
}
document.body.append(div);
const urlCompany = "https://random-data-api.com/api/company/random_company";
const urlPhone = "https://random-data-api.com/api/phone_number/random_phone_number";
const urlUser = "https://random-data-api.com/api/users/random_user";

const div = document.createElement("div");
div.setAttribute("id", "hide_div");

function show_meC() {
  div.innerHTML = ` `;
  const promiseCompany = fetch(urlCompany);
  promiseCompany
    .then((responseCompany) => {
      return responseCompany.json();
    })
    .then((company) => {
      const arrayCompany = Object.entries(company);
      arrayCompany.forEach(function (item, index) {
        let p = document.createElement("p");
        div.append(p);
        p.setAttribute("class", `p${index}`);
        p.innerHTML = `${item[0]}: ${item[1]} `;
      });
    });
};
document.body.append(div);

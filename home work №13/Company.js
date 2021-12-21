const urlCompany = "https://random-data-api.com/api/company/random_company";

function show_meC(){
  document.getElementById('hide_div')
  console.log(hide_div)


const promiseCompany = fetch(urlCompany);
promiseCompany
  .then((responseCompany) => {
    return responseCompany.json();
  })
  .then((company) => {
    console.log(company);
    const id = document.getElementById("1");
    const uid = document.getElementById("2");
    const type = document.getElementById("3");
    const business_name = document.getElementById("4");
    const suffix = document.getElementById("5");

    id.innerText = `id company: ${company.id}`;
    uid.innerText = `uid: ${company.uid}`;
    type.innerText = `Тип: ${company.type}`;
    business_name.innerText = `Имя фирмы: ${company.business_name}`;
    suffix.innerText = `Суффикс: ${company.suffix}`;
  });}
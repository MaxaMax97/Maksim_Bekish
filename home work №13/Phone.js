const urlPhone ="https://random-data-api.com/api/phone_number/random_phone_number";

function show_meP(){
  document.getElementById('hide_div')
  console.log(hide_div)


const promisePhone = fetch(urlPhone);
promisePhone
  .then((responsePhone) => {
    return responsePhone.json();
  })
  .then((phone) => {
    console.log(phone);
    const id = document.getElementById("1");
    const uid = document.getElementById("2");
    const type = document.getElementById("3");
    const business_name = document.getElementById("4");
    const suffix = document.getElementById("5");

    id.innerText = `id phone: ${phone.id}`;
    uid.innerText = `uid: ${phone.uid}`;
    type.innerText = `Тип: ${phone.type}`;
    business_name.innerText = `Имя фирмы: ${phone.business_name}`;
    suffix.innerText = `Суффикс: ${phone.suffix}`;
  });}
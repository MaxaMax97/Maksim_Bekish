const urlUser = "https://random-data-api.com/api/users/random_user";

function show_meU(){
  document.getElementById('hide_div')
  console.log(hide_div)


const promiseuser = fetch(urlUser);
promiseuser
  .then((responseuser) => {
    return responseuser.json();
  })
  .then((user) => {
    console.log(user);
    const id = document.getElementById("1");
    const uid = document.getElementById("2");
    const type = document.getElementById("3");
    const business_name = document.getElementById("4");
    const suffix = document.getElementById("5");

    id.innerText = `id user: ${user.id}`;
    uid.innerText = `uid: ${user.uid}`;
    type.innerText = `Тип: ${user.type}`;
    business_name.innerText = `Имя фирмы: ${user.business_name}`;
    suffix.innerText = `Суффикс: ${user.suffix}`;
  });
}
const url = "https://random-data-api.com/api/blood/random_blood";
const promise = fetch(url);
promise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const id = document.getElementById("1");
    const uid = document.getElementById("2");
    const type = document.getElementById("3");
    const rh_factor = document.getElementById("4");
    const group = document.getElementById("5");

    id.innerText = `id: ${data.id}`;
    uid.innerText = `uid: ${data.uid}`;
    type.innerText = `Тип: ${data.type}`;
    rh_factor.innerText = `Резус фактор: ${data.rh_factor}`;
    group.innerText = `Группа крови: ${data.group}`;
  });

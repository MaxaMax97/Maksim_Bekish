let url = "https://random-data-api.com/api/coffee/random_coffee";
const promise = fetch(url);
promise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let blend_name = document.getElementById("0");
    let id = document.getElementById("1");
    let intensifier = document.getElementById("2");
    let notes = document.getElementById("3");
    let origin = document.getElementById("4");
    let uid = document.getElementById("5");
    let variety = document.getElementById("6");

    blend_name.innerText = `название смеси: ${data.blend_name}`;
    id.innerText = `идентификатор: ${data.id}`;
    intensifier.innerText = `вкус: ${data.intensifier}`;
    notes.innerText = `вкусовые оттенки: ${data.notes}`;
    origin.innerText = `страна происхождения: ${data.origin}`;
    uid.innerText = `уникальный идентификатор: ${data.uid}`;
    variety.innerText = `сорт: ${data.variety}`;
  }); 
phone.addEventListener ('click',show_meP );
function show_meP() {
    div.innerHTML = ` `;
    const promisePhone = fetch(urlPhone);
    promisePhone
      .then((responsePhone) => {
        return responsePhone.json();
      })
      .then((phone) => {
        const arrayPhone = Object.entries(phone);
        let ul = document.createElement("ul");
        div.append(ul);
        arrayPhone.forEach(function (item) {
          let li = document.createElement("li");
          ul.append(li);
          li.innerHTML = `${item[0]}: ${item[1]} `;
        });
      });
  }

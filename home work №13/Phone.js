function show_meP() {
  div.innerHTML = ` `;
  const promisePhone = fetch(urlPhone);
  promisePhone
    .then((responsePhone) => {
      return responsePhone.json();
    })
    .then((phone) => {
      const arrayPhone = Object.entries(phone);

      arrayPhone.forEach(function (item, index) {
        let p = document.createElement("p");
        div.append(p);
        p.setAttribute("class", `p${index}`);
        p.innerHTML = `${item[0]}: ${item[1]} `;
      });
    });
};
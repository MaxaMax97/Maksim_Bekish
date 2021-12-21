function show_meU() {
  div.innerHTML = ` `;
  const promiseUser = fetch(urlUser);
  promiseUser
    .then((responseUser) => {
      return responseUser.json();
    })
    .then((user) => {
      const arrayUser = Object.entries(user);
      arrayUser.forEach(function (item, index) {
        let p = document.createElement("p");
        div.append(p);
        p.setAttribute("class", `p${index}`);
        p.innerHTML = `${item[0]}: ${item[1]}`;
      });
    });
};
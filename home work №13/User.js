function show_meU() {
  div.innerHTML = ` `;
  const promiseUser = fetch(urlUser);
  promiseUser
    .then((responseUser) => {
      return responseUser.json();
    })
    .then((user) => {
      const arrayUser = Object.entries(user);
      let ul = document.createElement("ul");
      div.append(ul);
      arrayUser.forEach(function (item) {
        let li = document.createElement("li");
        ul.append(li);
        li.innerHTML = `${item[0]}: ${item[1]}`;
      });
    });
}
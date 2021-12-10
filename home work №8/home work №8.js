const headerarray = [
  { name: "Vk.com", href: "https://vk.com/", class: "w1" },
  { name: "Instagram", href: "https://www.instagram.com", class: "w2" },
  { name: "YouTube", href: "https://www.youtube.com", class: "w3" },
  { name: "Facebook", href: "https://www.facebook.com/", class: "w4" },
];

const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

header.prepend(nav);
nav.prepend(ul);

ul.className = "ul";


headerarray.forEach(function (item) {

  const li = document.createElement("li");
    ul.prepend(li);
  li.innerHTML = ` <a target="_blanc" class=${item.class} href=${item.href}>${item.name}</a>`
});

document.body.prepend(header);
console.log(header);

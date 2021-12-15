const headerArray = [
  { name: "Vk.com", href: "https://vk.com/", class: "w" },
  { name: "Instagram", href: "https://www.instagram.com", class: "w" },
  { name: "YouTube", href: "https://www.youtube.com", class: "w" },
  { name: "Facebook", href: "https://www.facebook.com/", class: "w" },
];
const footerArray = [
  { name: "google", href: "https://www.google.com", class: "f" },
  { name: "yandex", href: "https://yandex.com", class: "f" },
  { name: "duckduckgo", href: "https://duckduckgo.com", class: "f" },
  { name: "bing", href: "https://bing.com", class: "f" },
  { name: "yahoo!", href: "https://yahoo.com", class: "f" },
];
const func = (array, classObj) => {
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  nav.prepend(ul);
  ul.className = classObj.ul;

  array.forEach((item) => {
    let li = document.createElement("li");
    ul.append(li);
    li.className = classObj.li;
    li.innerHTML = `<a class="${item.class}" href="${item.href}">"${item.name}"</a>`;
  });
  return nav;
};

const header = document.createElement("header");
const headerHtml = func(headerArray, { ul: "ul", li: "h" });
document.body.prepend(header);
header.append(headerHtml);

const footer = document.createElement("footer");
footer.className = "foo";
const footerHtml = func(footerArray, { ul: "list", li: "li" });
document.body.append(footer);
footer.append(footerHtml);

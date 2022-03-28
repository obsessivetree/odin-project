// import { data, Item } from "./app";

function createEl(type, html = null, id = null, clss = null) {
  const el = document.createElement(type);
  if (html) {
    el.innerHTML = html;
  }
  if (id) {
    el.id = id;
  }
  if (Array.isArray(clss)) {
    el.classList.add(...clss);
  } else {
    el.classList.add(clss);
  }
  return el;
}

const docBody = document.querySelector("body");
const header = createEl("header", "<h1>TO-DOS</h1>");
const main = createEl("main");
const nav = createEl("nav");
const addListBtn = createEl("div", "Add List", "add-list-nav", "nav-item");
const addColBtn = createEl("div", "Add Collection", "add-col-nav", "nav-item");
const colNav = createEl("div", null, "col-nav");
const colAllNav = createEl("div", "All", "all", [
  "col-nav-item",
  "active-col-nav",
]);

docBody.appendChild(header);
header.appendChild(nav);
nav.appendChild(addColBtn);
nav.appendChild(addListBtn);
docBody.appendChild(main);
main.appendChild(colNav);
colNav.appendChild(colAllNav);

export { addColBtn, addListBtn, createEl };

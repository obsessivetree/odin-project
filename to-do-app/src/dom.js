const header = document.querySelector("header");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const body = document.querySelector("body");
const addBtn = document.getElementById("add-list-btn");

function newEl(element, content = null, id = null, cls = null, type = null) {
  const newEl = document.createElement(element);
  if (id) newEl.id = id;
  if (cls) newEl.classList.add(cls);
  if (type) newEl.setAttribute("type", type);
  newEl.innerHTML = content;
  return newEl;
}

function newItem(item) {
  let li = newEl("li", null, item.id, item.type);
  if (item.type === "checkbox") {
    let checkbox = newEl("input", null, null, null, item.type);
    li.appendChild(checkbox);
  }
  li.innerHTML += item.description;

  return li;
}

function clearMain() {
  main.innerHTML = "";
}

function newList(list) {
  const html = `<h3>${list.title}</h3>`;
  const div = newEl("div", html, list.id, "list");
  const ul = newEl("ul");
  if (list.items.length > 0)
    list.items.forEach((item) => ul.appendChild(newItem(item)));
  div.appendChild(ul);
  main.appendChild(div);
}

function showLists(col) {
  col.lists.forEach((list) => newList(list));
}

function showAll(data) {
  clearMain();
  Object.values(data).forEach((col) => showLists(col));
}

function newCollection(col) {
  const html = `${col.name} <img class="x" src="../src/imgs/plus.png">`;
  const div = newEl("div", html, col.id);
  nav.appendChild(div);
}

function toggleVisibility() {
  const dropdown = document.getElementById("dropdown-menu");
  dropdown.classList.toggle("hidden");
}

export {
  header,
  nav,
  main,
  body,
  newEl,
  newCollection,
  newList,
  newItem,
  showLists,
  showAll,
  clearMain,
  addBtn,
  toggleVisibility as toggleDropdown,
};

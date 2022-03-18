// import "./imgs/plus.png";
// import "./style.css";
import { Item } from "./app";
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const body = document.querySelector("body");
const addBtn = document.getElementById("add-list-btn");

function newEl(element, content = null, id = null, cls = null, type = null) {
  const newEl = document.createElement(element);
  if (id) newEl.id = id;
  if (cls) {
    if (typeof cls === typeof []) {
      // console.log(cls);
      cls.forEach((classs) => newEl.classList.add(classs));
    } else {
      newEl.classList.add(cls);
    }
  }
  if (type) newEl.setAttribute("type", type);
  newEl.innerHTML = content;
  return newEl;
}

function newItem(item) {
  let li = newEl("li", null, item.id, [`item`, `${item.type}`]);
  if (item.type === "checkbox") {
    let checkbox = newEl("input", null, null, "checkBox", item.type);
    li.appendChild(checkbox);
  }
  li.innerHTML += item.description;

  return li;
}

function clearMain() {
  main.innerHTML = "";
}

function newList(list, col) {
  const html = `<h3>${list.title}<span id='listof${col.id}' class='list-collection'>${col.name}</span></h3>`;
  const div = newEl("div", html, list.id, "list");
  const ul = newEl("ul");
  const listFooter =
    "<div class='list-footer'><img class='list-x' src='../src/imgs/plus.png'></div>";
  if (list.items.length > 0) {
    list.items.forEach((item) => ul.appendChild(newItem(item)));
  } else {
    ul.appendChild(newItem(new Item("New Item")));
  }

  div.appendChild(ul);
  div.innerHTML += listFooter;
  main.appendChild(div);
}

function showLists(col) {
  Object.values(col.lists).forEach((list) => newList(list, col));
}

function showAll(data) {
  clearMain();
  Object.values(data).forEach((col) => showLists(col));
}

function show(data) {
  clearMain();
  const activeNav = document.querySelector(".active-nav");
  if (activeNav) {
    // console.log(activeNav);
    if (activeNav.id === "all") {
      showAll(data);
    } else {
      try {
        showLists(data[activeNav.id]);
      } catch (error) {
        // console.log(error);
      }
    }
  } else {
    document.querySelector("#all").classList.add("active-nav");
    showAll(data);
  }
}
function newCollection(col) {
  const html = `${col.name} <img class="x nav-item" src="../src/imgs/plus.png">`;
  const div = newEl("div", html, col.id);
  nav.appendChild(div);
}

function toggleVisibility() {
  const dropdown = document.getElementById("dropdown-menu");
  const add = () => addBtn.classList.add("hover");
  const remove = () => addBtn.classList.remove("hover");
  dropdown.classList.toggle("hidden");
  if (dropdown.classList.contains("hidden")) {
    addBtn.addEventListener("mouseenter", add);
    addBtn.addEventListener("mouseout", remove);
  }
  // if (!dropdown.classList.contains("hidden")) {
  //   addBtn.removeEventListener("mouseenter", add);
  //   addBtn.removeEventListener("mouseout", remove);
  //   add();
  // }
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
  show,
};

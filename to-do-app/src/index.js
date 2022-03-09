import {
  Collection,
  List,
  Item,
  addList,
  addItem,
  getData,
  setData,
  toggleComplete,
  unPackData as consTableData,
} from "./app";

import {
  newEl,
  main,
  nav,
  header,
  body,
  newCollection,
  newList,
  newItem,
  showLists,
  showAll,
  clearMain,
  addBtn,
  toggleDropdown,
} from "./dom";

let data = {};

localStorage.clear();

data.col1 = new Collection("Collection 1");
data.col2 = new Collection("Collection 2");

addList(data.col1, new List("Col 1 List 1"));
addList(data.col2, new List("Col 2 List 1"));

addItem(data.col1.lists[0], new Item("Description Item 1", "checkbox"));
addItem(data.col2.lists[0], new Item("Description Item 1", "checkbox"));

setData(data);
data = getData(data);

nav.appendChild(newEl("div", "All", "all", "active-nav"));
newCollection(data.col1);

showAll(data);

// LISTENERS
(() => {
  const xs = document.querySelectorAll(".x");
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((item) =>
    item.addEventListener("click", (e) => {
      console.log(e.target);
    })
  );
  const navItems = document.querySelectorAll("nav div");
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      navItems.forEach((item) => item.classList.remove("active-nav"));
      e.target.classList.add("active-nav");
      console.log(e.target);
    });
  });
  xs.forEach((node) =>
    node.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
      console.log(e.target.parentElement.id, data);
      Object.keys(data).forEach((col) => {
        if (data[col].id === e.target.parentElement.id) {
          delete data[col];
          setData(data);
          showAll(data);
          console.log(data);
        }
      });
    })
  );

  addBtn.addEventListener("click", toggleDropdown);
})();

consTableData(data);

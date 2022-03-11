import {
  Collection,
  List,
  Item,
  addListToObj,
  addItemToObj,
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

localStorage.clear();

let data = {};

function update() {
  nav.innerHTML = "";
  nav.appendChild(newEl("div", "All", "all", "active-nav"));
  Object.values(data).forEach((col) => newCollection(col));
  setData(data);
  data = getData(data);
  showAll(data);
}
data.col0 = new Collection("one");
data.col1 = new Collection("two");
data.col2 = new Collection("three");
data.col3 = new Collection("four");

addListToObj(data.col0, new List("Col 1 List 1"));
addListToObj(data.col0, new List("Col 1 List 2"));
addListToObj(data.col1, new List("Col 2 List 1"));

addItemToObj(data.col0.lists[0], new Item("Item 1", "checkbox"));
addItemToObj(data.col0.lists[0], new Item("Item 2", "checkbox"));
addItemToObj(data.col0.lists[1], new Item("Item 1", "checkbox"));
addItemToObj(data.col0.lists[1], new Item("Item 2", "checkbox"));
addItemToObj(data.col1.lists[0], new Item("Item 1", "checkbox"));
addItemToObj(data.col1.lists[0], new Item("Item 2", "checkbox"));

update();

// LISTENERS
(() => {
  const xs = document.querySelectorAll(".x");
  const checkboxes = document.querySelectorAll(".checkbox");
  const navItems = document.querySelectorAll("nav div");
  const addListBtn = document.getElementById("add-list");
  const addColBtn = document.getElementById("add-col");

  addListBtn.addEventListener("click", () => {
    const listTitle = prompt("Title: ");
    const col = prompt("Which Collection?");
    Object.keys(data).forEach((collection) => {
      // console.log(collection);
      if (col.toLowerCase() === data[collection].name.toLowerCase()) {
        addListToObj(data[collection], new List(listTitle));
      }
    });

    update();
    toggleDropdown();
  });

  addColBtn.addEventListener("click", () => {
    const colName = prompt("Name: ");
    const col = new Collection(colName);
    data[col.id] = col;
    console.log(data);
    update();
    toggleDropdown();
  });

  checkboxes.forEach((item) =>
    item.addEventListener("click", (e) => {
      Object.values(data).forEach((col) => {
        col.lists.forEach((list) => {
          list.items.forEach((item) => {
            if (
              item.id === e.target.id ||
              item.id === e.target.parentElement.id
            ) {
              item.isComplete === false
                ? (item.isComplete = true)
                : (item.isComplete = false);
              console.log(`${item.id} complete? ${item.isComplete}`);
            }
            if (item.id === e.target.id) {
              e.target.children[0].checked = item.isComplete;
            }
          });
        });
      });
    })
  );

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      navItems.forEach((item) => item.classList.remove("active-nav"));
      e.target.classList.add("active-nav");
      console.log(`${e.target.parentElement.id} deleted`);
    });
  });

  xs.forEach((node) =>
    node.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
      console.log(e.target.parentElement.id, data);
      Object.keys(data).forEach((col) => {
        if (data[col].id === e.target.parentElement.id) {
          delete data[col];
          update();
          console.log(data);
        }
      });
    })
  );

  addBtn.addEventListener("click", toggleDropdown);
})();

consTableData(data);

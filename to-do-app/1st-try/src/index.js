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
  unPackData,
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
  show,
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
      // console.log(e.target.parentElement.id, data);
      Object.keys(data).forEach((col) => {
        if (data[col].id === e.target.parentElement.id) {
          delete data[col];
          update();
          // console.log(data);
        }
      });
    }));

    setData(data);
    data = getData(data);
    navItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        navItems.forEach((item) => item.classList.remove("active-nav"));
        e.target.classList.add("active-nav");
        // console.log(e.target);
        show(data);
      });
    });

    navXs.forEach((node) => node.addEventListener("click", xsListenerFunc));
    show(data);

    Object.values(items).forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target.parentElement.classList.contains("checkbox")) {
          const col = e.target.parentElement.parentElement.parentElement
            .querySelector("span")
            .id.slice(6);
          const list = e.target.parentElement.parentElement.parentElement.id;
          const item = e.target.parentElement.id;
          console.log(col, list, item);
          // document.querySelector(`#${item} input`).checked === false
          //   ? (document.querySelector(`#${item} input`).checked = true)
          //   : (document.querySelector(`#${item} input`).checked = false);
          // data[col].lists[list].items[item].isComplete = document.querySelector(
          //   `#${item} input`
          // ).checked;
          console.log(data[col].lists[list].items);
        }
        if (e.target.classList.contains("checkbox")) {
          e.target.querySelector("input").checked === false
            ? (e.target.querySelector("input").checked = true)
            : (e.target.querySelector("input").checked = false);
          const col = e.target.parentElement.parentElement.parentElement
            .querySelector("span")
            .id.slice(6);
          const list = e.target.parentElement.parentElement.id;
          const item = e.target.id;
          console.log(col, list, item);
        }
      });
    });
  };

  const htmlListener = (e) => {
    const menu = document.querySelector("#dropdown-menu");
    if (menu.classList.contains("hidden") === false) {
      if (e.target.id !== menu.id && e.target.id !== addBtn.id) {
        menu.classList.add("hidden");
      }
    }
  };

  document.querySelector("html").addEventListener("click", htmlListener);
  document.querySelector("html").addEventListener("click", (e) => {
    console.log(e.target);
  });

  addBtn.addEventListener("click", () => {
    toggleDropdown();
  });

  addColBtn.addEventListener("click", () => {
    let name = "";
    while (!name) {
      name = prompt("Name for new collection: ");
    }
    const newCol = new Collection(name);
    data[newCol.id] = newCol;
    toggleDropdown();
    newCollection(newCol);
    update();
  });

  addListBtn.addEventListener("click", () => {
    const activeNav = document.querySelector(".active-nav");
    if (activeNav.id !== "all") {
      // console.log(activeNav);
      let title = prompt("Title for new list: ");
      if (!title) {
        title = "new List";
      }
      const newL = new List(title);
      // console.log({ data });

      data[activeNav.id].lists[newL.id] = newL;
      // console.log(data[activeNav.id].lists);
      toggleDropdown();
      // newList(newL);
      update();
    } else {
      alert("Choose a collection first.");
    }
    // console.log(data);
  });

  update();
})();

export { data };

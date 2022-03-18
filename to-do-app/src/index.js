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

let data = {};

localStorage.clear();
nav.appendChild(newEl("div", "All", "all", "active-nav"));

data.col0 = new Collection("Collection 1");
data.col1 = new Collection("Collection 2");

toggleDropdown();
const items = document.getElementsByClassName("item");

// LISTENERS
(() => {
  const addListBtn = document.getElementById("add-list");
  const addColBtn = document.getElementById("add-collection");
  const update = () => {
    const navItems = document.querySelectorAll("nav div");
    const navXs = document.querySelectorAll(".x, .nav-item");
    const xsListenerFunc = (e) => {
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
      // console.log(e.target.parentElement.id, data);
      Object.keys(data).forEach((col) => {
        if (data[col].id === e.target.parentElement.id) {
          delete data[col];
          update();
          // console.log(data);
        }
      });
    };

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

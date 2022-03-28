import { data, Item } from "./app";
function newEl(type, html = null, id = null, clss = null) {
  const el = document.createElement(type);
  if (html) {
    el.innerHTML = html;
  }
  if (id) {
    el.id = id;
  }
  if (clss) {
    typeof clss === Array
      ? clss.forEach((cls) => {
          el.classList.add(cls);
        })
      : el.classList.add(clss);
  }
  return el;
}

const docBody = document.querySelector("body");
const header = newEl("header", "<h1>To-Dos</h1>");
const main = newEl("main");
const nav = newEl("nav");
const addListNav = newEl("div", "Add List", "add-list-nav", "nav-item");
const addColNav = newEl("div", "Add Collection", "add-col-nav", "nav-item");
const colNav = newEl("div", null, "col-nav");
const colAllNav = newEl("div", "All", "all", "col-nav-item");

colAllNav.classList.add("active-col-nav");

["btn", "btn-primary"].forEach((cls) => {
  addListNav.classList.add(cls);
});

["btn", "btn-warning"].forEach((cls) => {
  addColNav.classList.add(cls);
});

docBody.appendChild(header);
header.appendChild(nav);
nav.appendChild(addColNav);
nav.appendChild(addListNav);
docBody.appendChild(main);
main.appendChild(colNav);
colNav.appendChild(colAllNav);

colNav.addEventListener("click", (e) => {
  showCol(e.target.id);
});

const showCol = (col) => {
  main.innerHTML = "";

  const newColNav = newEl(
    "div",
    `${col.title} <img src="" class="del-col">`,
    col.path,
    "col-nav-item"
  );

  // Re Add Nav
  main.appendChild(colNav);
  colNav.appendChild(colAllNav);
  colNav.appendChild(newColNav);

  // Add Nav Listeners
  const colNavItems = document.querySelectorAll(".col-nav-item");
  colNavItems.forEach((item) =>
    item.addEventListener("click", (e) => {
      colNavItems.forEach((nav) => nav.classList.remove("active-col-nav"));
      e.target.classList.add("active-col-nav");
      // showCol(data[e.target.id]);
    })
  );

  // Add List Elements
  Object.values(col.lists).forEach((list) => {
    const newList = newEl(
      "div",
      `<div class="titles"><h3 class="list-title">${
        list.title
      }</h3><h4 class="list-col">${
        data[list.path.split(",")[0]].title
      }</h4></div><ul class='items'></ul>`,
      list.path,
      "list"
    );

    // Add Item Elements
    Object.values(list.items).forEach((item) => {
      const newItem = newEl(
        "li",
        `<input id="check,${item.path}" type="checkbox" class="check-item">${item.description}`,
        item.path,
        "item"
      );
      newList.append(newItem);
      const addItem = newEl("li", "+ <span>Item</span>", null, "addItem");
      newList.append(addItem);

      addItem.addEventListener("click", (e) => {
        e.target.remove();
        const item = new Item();
        const newItem = newEl(
          "li",
          `<input id="check,${item.path}" type="checkbox" class="check-item">${item.description}`,
          item.path,
          "item"
        );
        newList.append(newItem);
        const addItem = newEl("li", "+ <span>Item</span>", null, "addItem");
        newList.append(addItem);
      });

      // Checkbox Listener
      newItem.addEventListener("click", (e) => {
        let check = document.getElementById(`check,${newItem.id}`);
        if (e.target.classList.contains("item")) {
          if (check.checked === false) {
            check.checked = true;
          } else {
            check.checked = false;
          }
        }
        check.checked === true
          ? (check.parentElement.style.textDecoration = "line-through")
          : (check.parentElement.style.textDecoration = "none");
      });

      // Rename Item Listener
      newItem.addEventListener("dblclick", (e) => {
        if (e.target.classList.contains("item")) {
          let check = document.getElementById(`check,${newItem.id}`);
          console.log(check);
          let newDesc = prompt("New description: ");
          newItem.innerHTML = "";
          newItem.appendChild(check);
          newItem.innerHTML += newDesc;
        }
      });
      // Rename List Listener
      newList.querySelector(".list-title").addEventListener("dblclick", (e) => {
        let newTitle = prompt("New title: ");
        e.target.textContent = newTitle;
      });
    });
    main.appendChild(newList);
  });
};

// const listen = () => {
// }
export { showCol, addColNav };

import { Draggable, Sortable, Plugins } from "@shopify/draggable";
import { Collection, Item, List, data } from "./app";

const colog = (text, color = "white") => {
  console.log(`%c${text}`, `color: ${color}`);
};

const sortable = new Sortable(document.querySelectorAll(".list0 ul"), {
  draggable: ".checkbox-li",
  plugins: [Plugins.Snappable],
  mirror: {
    appendTo: document.querySelectorAll(".list0 ul"),
    constrainDimensions: true,
  },
});
sortable.options.delay = 2000;
// sortable.addContainer(document.querySelector(".list0 ul li"));
console.log(sortable);

// const sortableLists = new Sortable(document.querySelectorAll("main"), {
//   draggable: ".list",
//   // plugins: [Plugins.Snappable],
// });
// sortableLists.helper = "none";

const newItemElement = (parent, description = "New Item", manual = false) => {
  const newLi = document.createElement("li");
  newLi.classList.add("checkbox-li");
  newLi.classList.add("item");
  newLi.innerHTML = `<div id="item2" class="checkbox"></div>  <div class="item-description" for="item2">${description}</div>  <!-- DEL ITEM -->  <img class="del-item-btn x" src="../icons/xWhite.svg" alt="" srcset=""  />  <!-- ITEM DRAGGER -->  <img class="item-dragger" src="../icons/menu.svg" alt="" srcset=""  />`;
  if (manual) {
    parent.before(newLi);
  }
  return newLi;
};

const yellow = "rgb(255, 231, 0)";
document.addEventListener("mouseover", (e) => {
  if (e.target.classList !== undefined) {
    if (e.target.classList.contains("checkbox")) {
      if (e.target.firstChild === null) {
        e.target.innerHTML =
          '<img class="check" src="../icons/check.svg" alt="" srcset="" />';
      }
    }
    if (e.target.classList.contains("pin")) {
      if (e.target.style.fill !== yellow) {
        e.target.style.stroke = "gray";
      }
    }
    if (e.target.parentElement) {
      if (e.target.parentElement.classList.contains("pin")) {
        if (e.target.parentElement.style.fill !== yellow) {
          e.target.parentElement.style.stroke = "gray";
        }
      }
    }
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.classList !== undefined) {
    if (e.target.classList.contains("pin")) {
      if (e.target.style.fill !== yellow) {
        e.target.style.stroke = "lightgray";
      }
    }
  }
});

document.addEventListener("click", (e) => {
  colog(e.target.nodeName, yellow);

  if (e.target.classList !== undefined) {
    // item Description Edit
    if (e.target.classList.contains("item-description")) {
      let label = e.target;
      let input = document.createElement("input");
      input.classList.add("item-input");

      if (e.target.parentElement.classList.contains("checkbox-li")) {
        const oldLabel = e.target.textContent.trim();
        input.placeholder = oldLabel;
        e.target.textContent = "";
        e.target.appendChild(input);
        input.focus();
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            if (input.value.trim() !== "") {
              label.textContent = input.value;
            } else {
              label.textContent = oldLabel;
            }
          }
          if (e.key === "Escape") {
            label.textContent = oldLabel;
          }
        });
        input.addEventListener("focusout", (e) => {
          if (input.value.trim() !== "") {
            label.textContent = input.value;
          } else {
            label.textContent = oldLabel;
          }
        });
      } else if (e.target.parentElement.classList.contains("add-item")) {
        input.placeholder = "New Item";
        e.target.appendChild(input);
        input.focus();
        let parent =
          e.target.parentElement.parentElement.parentElement.querySelector(
            ".list-title"
          );
        input.addEventListener("keydown", (f) => {
          if (f.key === "Enter") {
            if (input.value.trim() !== "") {
              const newItem = newItemElement(parent, input.value.trim());
              e.target.parentElement.before(newItem);
            } else {
              const newItem = newItemElement(parent);
              e.target.parentElement.before(newItem);
            }
            input.remove();
          }
          if (f.key === "Escape") {
            input.remove();
          }
        });
        input.addEventListener("focusout", (g) => {
          if (input.value.trim() !== "") {
            const newItem = newItemElement(parent, input.value.trim());
            e.target.parentElement.before(newItem);
          }
          input.remove();
        });
      }
    }

    // list Title Edit
    if (e.target.classList.contains("list-title")) {
      let listTitle = e.target;
      let input = document.createElement("input");
      input.classList.add("list-title-input");
      const oldTitle = e.target.textContent;
      input.placeholder = oldTitle;
      e.target.textContent = "";
      e.target.appendChild(input);
      input.focus();
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          if (input.value.trim() !== "") {
            listTitle.textContent = input.value;
          } else {
            listTitle.textContent = oldTitle;
          }
        }
        if (e.key === "Escape") {
          listTitle.textContent = oldTitle;
        }
      });
      input.addEventListener("focusout", (e) => {
        if (input.value.trim() !== "") {
          listTitle.textContent = input.value;
        } else {
          listTitle.textContent = oldTitle;
        }
      });
    }

    // x
    if (e.target.classList.contains("x")) {
      // if (e.target.classList.contains("del-col-btn")) {
      //   e.target.parentElement.remove();
      // }
      if (e.target.classList.contains("del-list-btn")) {
        e.target.parentElement.parentElement.remove();
      }
      if (e.target.classList.contains("finish-list-btn")) {
        // e.target.parentElement.parentElement.remove();
        e.target.parentElement.parentElement.classList.add("archived");
      }
      if (e.target.classList.contains("del-item-btn")) {
        e.target.parentElement.remove();
      }
    }

    // checkbox check
    if (e.target.classList.contains("checkbox")) {
      if (e.target.firstChild.classList.contains("checked")) {
        e.target.innerHTML =
          '<img class="check" src="../icons/check.svg" alt="" srcset="" />';
      } else {
        e.target.innerHTML =
          '<img class="check checked" src="../icons/check.svg" alt="" srcset="" />';
      }
      e.target.parentElement
        .querySelector("item-description")
        .classList.add("completed-item");
    }

    if (e.target.classList.contains("check")) {
      if (e.target.classList.contains("checked")) {
        e.target.classList.remove("checked");
      } else {
        e.target.classList.add("checked");
      }
    }

    // star pin
    if (e.target.classList.contains("pin")) {
      const star = e.target;
      if (star.style.fill === yellow) {
        star.style.fill = "";
        star.style.stroke = "lightgray";
        star.classList.remove("starred");
        // star.addEventListener("mouseout", mouseoutListener);
        // star.addEventListener("mouseover", mouseoverListener);
      } else {
        star.style.stroke = yellow;
        star.style.fill = yellow;
        star.classList.add("starred");
        // star.removeEventListener("mouseover", mouseoverListener);
        // star.removeEventListener("mouseout", mouseoutListener);
      }
    }
    if (e.target.parentElement) {
      if (e.target.parentElement.classList.contains("pin")) {
        const star = e.target.parentElement;
        if (star.style.fill === yellow) {
          star.style.fill = "";
          star.style.stroke = "lightgray";
          star.classList.remove("starred");
          // star.addEventListener("mouseout", mouseoutListener);
          // star.addEventListener("mouseover", mouseoverListener);
        } else {
          star.style.stroke = yellow;
          star.style.fill = yellow;
          star.classList.add("starred");
          // star.removeEventListener("mouseover", mouseoverListener);
          // star.removeEventListener("mouseout", mouseoutListener);
        }
      }
    }

    // color picker
    if (e.target.classList.contains("color-wheel")) {
      e.target.nextElementSibling.click();
    }

    // add list btn
    if (
      e.target.classList.contains("add-list-div") ||
      e.target.classList.contains("add-list-img")
    ) {
      const newList = (origin) => {
        let list = document.createElement("div");
        list.classList.add("list");
        list.classList.add("card");
        console.log(`Origin ${origin.slice(origin.length - 1)}`);
        const colOrigin = `Collection ${
          Number(origin.slice(origin.length - 1)) + 1
        }`;
        list.innerHTML = `<div class="list-head"><svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="lightgray" stroke-width="1" stroke-linecap="round"            stroke-linejoin="round"            class="feather feather-star pin"          >            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"            ></polygon>          </svg>           <div class="list-titles"><h2 class="list-title">New List</h2><h3 class="collection-origin">${colOrigin}</h3></div>          <svg class="list-menu"            xmlns="http://www.w3.org/2000/svg"            width="24"            height="24"            viewBox="0 0 24 24"            fill="none"            stroke="gray"            stroke-width="2"            stroke-linecap="round"            stroke-linejoin="round"            class="feather feather-more-vertical"          >            <circle cx="12" cy="12" r="1"></circle>            <circle cx="12" cy="5" r="1"></circle>            <circle cx="12" cy="19" r="1"></circle>          </svg></div><div class="list-contents"><ul><li class="checkbox-li item"><div id="item1" class="checkbox"></div><div class="item-description" for="item1">Item 1</div><img class="del-item-btn x"src="../icons/xWhite.svg"alt=""srcset=""/><img class="item-dragger"src="../icons/menu.svg"alt=""srcset=""/></li><li class="add-item item"><img src="../icons/plus-circle.svg" alt="" srcset="" /><div class="item-description"></div></li></ul></div><div class="list-footer"><img class="color-wheel" src="../icons/color-wheel-icon.png" alt="" srcset=""/><input class="color-input" type="color" title="List Background Color Picker" name="list1color" id="list1color" data-content="#FFF"/><img class="finish-list-btn x" src="../icons/check.svg" alt="delete list button" srcset="" title="Finish and Archive List"/></div>`;
        list.querySelector("h3").classList.add(origin);
        return list;
      };
      const origin = document.querySelector(".active-col").classList[0];
      console.table(origin);
      const list = newList(origin);
      const listObj = List();
      list.classList.add(`list${listObj.id}`);
      document.querySelector("main").appendChild(list);
      list.querySelector("h2").click();
      const sortable = new Sortable(
        document.querySelectorAll(`.list${listObj.id} ul`),
        {
          draggable: ".checkbox-li",
          plugins: [Plugins.Snappable],
        }
      );
    }

    // add collection btn
    if (e.target.classList.contains("add-col-btn")) {
      const newNav = document.createElement("li");

      const newCol = Collection();
      newNav.textContent = newCol.name;
      data[newCol.id] = newCol;
      // console.log(data);
      newNav.classList.add(`col${newCol.id}`);
      document.querySelector(".menu-dropdown").appendChild(newNav);
      document
        .querySelectorAll(".active-col")
        .forEach((nav) => nav.classList.remove("active-col"));
      newNav.classList.add("active-col");

      document.querySelector(".active-col").click();
      newNav.parentElement.parentElement.querySelector(
        ".menu-title"
      ).textContent = newNav.textContent;
    }

    // active nav switcher

    const removeActiveNavClasses = () => {
      document
        .querySelectorAll(".active-nav")
        .forEach((nav) => nav.classList.remove("active-nav"));
      document
        .querySelectorAll(".active-col")
        .forEach((nav) => nav.classList.remove("active-col"));
    };
    if (
      e.target.parentElement.parentElement.classList.contains("menu") ||
      e.target.classList.contains("nav-select")
    ) {
      removeActiveNavClasses();
      if (e.target.parentElement.parentElement.classList.contains("menu")) {
        e.target.parentElement.parentElement.classList.add("active-nav");
        e.target.classList.add("active-col");
        document.querySelector(".menu-title").innerText = e.target.innerText;
      } else if (e.target.classList.contains("nav-select")) {
        document.querySelector(".menu-title").innerText = "Select Collection";
        e.target.classList.add("active-nav");
        e.target.classList.add("active-col");
      }
      const activeCol = document.querySelector(".active-col");
      const pattern = /col\d/;
      const desiredCol = pattern.exec(activeCol.classList);
      document.querySelectorAll(".list h3").forEach((listColTitle) => {
        // console.log(listColTitle, activeCol);
        if (
          listColTitle.classList.contains(desiredCol) ||
          e.target.id === "all-col-nav"
        ) {
          listColTitle.parentElement.parentElement.parentElement.style.visibility =
            "visible";
          listColTitle.parentElement.parentElement.parentElement.style.opacity = 1;
          listColTitle.parentElement.parentElement.parentElement.style.display =
            "flex";
        } else {
          listColTitle.parentElement.parentElement.parentElement.style.visibility =
            "hidden";
          listColTitle.parentElement.parentElement.parentElement.style.opacity = 0;
          listColTitle.parentElement.parentElement.parentElement.style.display =
            "none";
        }
      });
    }
  }
});

document.addEventListener("change", (e) => {
  if (e.target.classList.contains("color-input")) {
    e.target.parentElement.parentElement.style.backgroundColor = e.target.value;
  }
});

document.addEventListener("dblclick", (e) => {
  if (
    e.target.classList.contains("menu-title") &&
    e.target.textContent !== "Select Collection"
  ) {
    const findCol = () => document.querySelector(".active-col").classList[0];
    const thisCol = findCol();
    console.log(thisCol);
    let colTitle = e.target;
    let input = document.createElement("input");
    input.classList.add("col-title-input");
    const oldTitle = e.target.textContent;
    input.placeholder = oldTitle;
    e.target.textContent = "";
    e.target.appendChild(input);
    input.focus();
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (input.value.trim() !== "") {
          document.querySelectorAll(`.${thisCol}`).forEach((col) => {
            col.textContent = input.value.trim();
          });
          colTitle.textContent = input.value.trim();
          console.log(thisCol);
          data[thisCol.slice(thisCol.length - 1)].name = input.value.trim();
          console.table(data);
        } else {
          colTitle.textContent = oldTitle;
        }
      }
      if (e.key === "Escape") {
        colTitle.textContent = oldTitle;
      }
    });
    input.addEventListener("focusout", (e) => {
      if (input.value.trim() !== "") {
        colTitle.textContent = input.value;
      } else {
        colTitle.textContent = oldTitle;
      }
    });
  }
});

const test = () => {
  document.querySelector(".add-col-btn").click();
  document.querySelector("#add-list-btn").click();
  newItemElement(
    document.querySelector(".list0 .add-item"),
    "Itemarooni",
    true
  );
  newItemElement(
    document.querySelector(".list1 .add-item"),
    "Rando Item",
    true
  );
  let unfocus = new Event("focusout");
  document.querySelector(".list1 input").dispatchEvent(unfocus);
};
// test();

// COLOR PICKER
// const colorPickerListener = () => {
//   const colorWheels = document.querySelectorAll(".color-wheel");
//   const colorPickers = document.querySelectorAll("input[type=color]");
//   colorWheels.forEach((wheel) =>
//     wheel.addEventListener("click", () => {
//       wheel.nextElementSibling.click();
//     })
//   );
//   colorPickers.forEach((picker) => {
//     picker.addEventListener("change", (e) => {
//       e.target.parentElement.parentElement.style.backgroundColor =
//         e.target.value;
//     });
//   });
// };

// STAR (PIN)

// const starListener = () => {
//   const stars = document.querySelectorAll(".pin");

//   stars.forEach((star) => {
//     const mouseoutListener = (g) => {
//       g.currentTarget.style.stroke = "lightgray";
//     };
//     const mouseoverListener = (f) => {
//       f.currentTarget.style.stroke = "gray";
//     };

//     star.addEventListener("mouseover", mouseoverListener);
//     star.addEventListener("mouseout", mouseoutListener);

//     star.addEventListener("click", (e) => {
//       const yellow = "rgb(255, 231, 0)";

//       if (e.currentTarget.style.fill === yellow) {
//         e.currentTarget.style.fill = "";
//         e.currentTarget.style.stroke = "lightgray";
//         e.currentTarget.classList.remove("starred");
//         e.currentTarget.addEventListener("mouseover", mouseoverListener);
//         e.currentTarget.addEventListener("mouseout", mouseoutListener);
//       } else {
//         e.currentTarget.style.stroke = yellow;
//         e.currentTarget.style.fill = yellow;
//         e.currentTarget.classList.add("starred");
//         e.currentTarget.removeEventListener("mouseover", mouseoverListener);
//         e.currentTarget.removeEventListener("mouseout", mouseoutListener);
//       }
//     });
//   });
// };

// TOGGLE ITEMS' CHECKMARK ON HOVER AND CLICK

// const itemCheckmarkListener = () => {
//   const liItems = document.querySelectorAll(".checkbox-li");
//   liItems.forEach((li) => {
//     const checkbox = li.querySelector("div.checkbox");

//     checkbox.addEventListener("mouseenter", (e) => {
//       if (e.currentTarget.firstChild === null) {
//         e.currentTarget.innerHTML =
//           '<img class="check" src="../icons/check.svg" alt="" srcset="" />';
//       }
//     });

//     checkbox.addEventListener("mouseleave", (f) => {
//       if (
//         f.currentTarget.firstChild !== null &&
//         f.currentTarget.firstChild.classList.contains("checked") === false
//       ) {
//         f.currentTarget.innerHTML = "";
//       }
//     });

//     checkbox.addEventListener("click", (g) => {
//       // console.log(
//       //   g.currentTarget.classList,
//       //   g.currentTarget.firstChild.classList
//       // );
//       if (
//         g.currentTarget.firstChild === null ||
//         g.currentTarget.firstChild.classList.contains("checked")
//       ) {
//         g.currentTarget.innerHTML =
//           '<img class="check" src="../icons/check.svg" alt="" srcset="" />';
//       } else {
//         g.currentTarget.innerHTML =
//           '<img class="check checked" src="../icons/check.svg" alt="" srcset="" />';
//       }
//     });
//   });
// };

// CLICK TO REMOVE LIST/COLLECTION
// actually checkmarks now, not x's

// const xListener = () => {
//   const Xs = document.querySelectorAll(".x");
//   Xs.forEach((x) =>
//     x.addEventListener("click", (e) => {
//       if (e.target.classList.contains("del-col-btn")) {
//         e.target.parentElement.remove();
//       }
//       if (e.target.classList.contains("del-list-btn")) {
//         e.target.parentElement.parentElement.remove();
//       }
//       if (e.target.classList.contains("del-item-btn")) {
//         e.target.parentElement.remove();
//       }
//     })
//   );
// };

// CLICK TO EDIT LIST TITLE

// const listTitles = document.querySelectorAll("h2");
// listTitles.forEach((listTitle) =>
//   listTitle.addEventListener("click", (e) => {
//     let input = document.createElement("input");
//     input.classList.add("list-title-input");
//     const oldTitle = e.currentTarget.textContent;
//     input.placeholder = oldTitle;
//     e.currentTarget.textContent = "";
//     e.currentTarget.appendChild(input);
//     input.focus();
//     input.addEventListener("keydown", (e) => {
//       if (e.key === "Enter") {
//         if (input.value.trim() !== "") {
//           listTitle.textContent = input.value;
//         } else {
//           listTitle.textContent = oldTitle;
//         }
//       }
//       if (e.key === "Escape") {
//         listTitle.textContent = oldTitle;
//       }
//     });
//     input.addEventListener("focusout", (e) => {
//       if (input.value.trim() !== "") {
//         listTitle.textContent = input.value;
//       } else {
//         listTitle.textContent = oldTitle;
//       }
//     });
//   })
// );

// const applyListeners = () => {
//   // itemListen();
//   itemCheckmarkListener();
//   xListener();
//   starListener();
//   colorPickerListener();
// };

// applyListeners();

// if (e.target.classList.contains("nav-select")) {

//   console.table(document.querySelectorAll(".active-col"));

//   // if (e.target.classList.contains("nav-select")) {
//   //   document.querySelectorAll(".nav-select").forEach((nav) => {
//   //     nav.classList.remove("active-nav");
//   //     nav.classList.remove("active-col");
//   //     document
//   //       .querySelector("menu-dropdown")
//   //       .forEach((option) => option.classList.remove("active-col"));
//   //   });
//   //   e.target.classList.add("active-nav");
//   //   document.querySelector(".menu-title").textContent = "Select Collection";
//   // }
//   // if (e.target.parentElement.parentElement.classList.contains("menu")) {
//   //   document.querySelectorAll(".nav-select").forEach((nav) => {
//   //     nav.classList.remove("active-nav");
//   //   });
//   //   e.target.parentElement.parentElement.querySelector(
//   //     ".menu-title"
//   //   ).textContent = e.target.textContent;
//   //   e.target.classList.add("active-col");
//   //   e.target.parentElement.parentElement.classList.add("active-nav");
//   //   console.log(document.querySelectorAll(".active-col"));
//   // }
//   // document.querySelectorAll(".list").forEach((list) => {
//   //   if (
//   //     listCol === navCol ||
//   //     document.querySelector(".active-nav").id === "all-col-nav"
//   //   ) {
//   //     list.style.visibility = "visible";
//   //     list.style.opacity = "1";
//   //   } else {
//   //     // console.log(pattern.test(list.querySelector("h3").classList));
//   //     list.style.opacity = "0";
//   //     list.style.visibility = "hidden";
//   //   }
//   // });
// }

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collection": () => (/* binding */ Collection),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "Item": () => (/* binding */ Item),
/* harmony export */   "addListToObj": () => (/* binding */ addListToObj),
/* harmony export */   "addItemToObj": () => (/* binding */ addItemToObj),
/* harmony export */   "setData": () => (/* binding */ setData),
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "toggleComplete": () => (/* binding */ toggleComplete)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");


function* generator(str, num) {
  while (true) {
    yield `${str}${String(num++)}`;
  }
}
let colGen = generator("col", 0);
let listGen = generator("list", 0);
let itemGen = generator("item", 0);

class Item {
  constructor(description = "", path, type = "checkbox", dueDate = null) {
    this.description = description;
    this.type = type;
    this.dueDate = dueDate;
    this.isComplete = false;
    this.id = itemGen.next().value;
    this.path = path;
  }
}
class List {
  constructor(title, path, color = "default", dueDate = null) {
    this.title = title;
    this.color = color;
    this.dueDate = dueDate;
    this.isComplete = false;
    this.items = {};
    this.id = listGen.next().value;
    this.path = path;
    let firstItem = new Item("Item 1");
    this.items[firstItem.id] = firstItem;
  }
  // init(){

  // }
}
class Collection {
  constructor(name) {
    this.name = name;
    this.lists = {};
    this.id = colGen.next().value;
    let firstList = new List("List 1");
    this.lists[firstList.id] = firstList;
    this.init = () => {
      _index__WEBPACK_IMPORTED_MODULE_1__.data[this.id] = this;
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.newCollection)(_index__WEBPACK_IMPORTED_MODULE_1__.data[this.id]);
      console.log(_index__WEBPACK_IMPORTED_MODULE_1__.data);
    };
    this.init();
  }
}

// function getPath(obj){
//   return JSON.parse(obj.path)
// }
// function setPath(obj){
//   JSON.stringify(obj.path)
//   return obj
// }

function toggleComplete(itemOrList) {
  if (itemOrList.isComplete) {
    itemOrList.isComplete = false;
  } else {
    itemOrList.isComplete = true;
  }
  return itemOrList.isComplete;
}

function addListToObj(col, list) {
  col.lists[list.id] = list;
}

function addItemToObj(list, item) {
  list.items[item.id] = item;
}

function setData(data) {
  localStorage.setItem(data, JSON.stringify(data));
}

function getData(data) {
  return JSON.parse(localStorage.getItem(data));
}

<<<<<<< HEAD
=======
function unPackData(data) {
  const colls = [...Object.keys(data)];
  console.table([data, Object.values(data)[0].name]);
}

>>>>>>> 9977ebc5735f34fcdf7b1429d86dc0cafd8ff1e2



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "nav": () => (/* binding */ nav),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "newEl": () => (/* binding */ newEl),
/* harmony export */   "newCollection": () => (/* binding */ newCollection),
/* harmony export */   "newList": () => (/* binding */ newList),
/* harmony export */   "newItem": () => (/* binding */ newItem),
/* harmony export */   "showLists": () => (/* binding */ showLists),
/* harmony export */   "showAll": () => (/* binding */ showAll),
/* harmony export */   "clearMain": () => (/* binding */ clearMain),
/* harmony export */   "addBtn": () => (/* binding */ addBtn),
/* harmony export */   "toggleDropdown": () => (/* binding */ toggleVisibility),
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
// import "./imgs/plus.png";
// import "./style.css";

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const body = document.querySelector("body");
const addBtn = document.getElementById("add-list-btn");

function newEl(element, content = null, id = null, cls = null, type = null) {
<<<<<<< HEAD
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
=======
  const el = document.createElement(element);
  if (id) el.id = id;
  if (cls) el.classList.add(cls);
  if (type) el.setAttribute("type", type);
  el.innerHTML = content;
  return el;
>>>>>>> 9977ebc5735f34fcdf7b1429d86dc0cafd8ff1e2
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
    ul.appendChild(newItem(new _app__WEBPACK_IMPORTED_MODULE_0__.Item("New Item")));
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
  Object.values(data).forEach((col) => {
    showLists(col);
    // console.log(col);
  });
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




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




let data = {};

localStorage.clear();
_dom__WEBPACK_IMPORTED_MODULE_1__.nav.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.newEl)("div", "All", "all", "active-nav"));

data.col0 = new _app__WEBPACK_IMPORTED_MODULE_0__.Collection("Collection 1");
data.col1 = new _app__WEBPACK_IMPORTED_MODULE_0__.Collection("Collection 2");

(0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleDropdown)();
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

    (0,_app__WEBPACK_IMPORTED_MODULE_0__.setData)(data);
    data = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getData)(data);
    navItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        navItems.forEach((item) => item.classList.remove("active-nav"));
        e.target.classList.add("active-nav");
        // console.log(e.target);
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.show)(data);
      });
    });

    navXs.forEach((node) => node.addEventListener("click", xsListenerFunc));
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.show)(data);

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
      if (e.target.id !== menu.id && e.target.id !== _dom__WEBPACK_IMPORTED_MODULE_1__.addBtn.id) {
        menu.classList.add("hidden");
      }
    }
  };

  document.querySelector("html").addEventListener("click", htmlListener);
  document.querySelector("html").addEventListener("click", (e) => {
    console.log(e.target);
  });

  _dom__WEBPACK_IMPORTED_MODULE_1__.addBtn.addEventListener("click", () => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleDropdown)();
  });

  addColBtn.addEventListener("click", () => {
    let name = "";
    while (!name) {
      name = prompt("Name for new collection: ");
    }
    const newCol = new _app__WEBPACK_IMPORTED_MODULE_0__.Collection(name);
    data[newCol.id] = newCol;
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleDropdown)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.newCollection)(newCol);
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
      const newL = new _app__WEBPACK_IMPORTED_MODULE_0__.List(title);
      // console.log({ data });

      data[activeNav.id].lists[newL.id] = newL;
      // console.log(data[activeNav.id].lists);
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleDropdown)();
      // newList(newL);
      update();
    } else {
      alert("Choose a collection first.");
    }
    // console.log(data);
  });

  update();
})();




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
<<<<<<< HEAD
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEdBQUc7O0FBRUgsRUFBRSx5REFBdUI7QUFDekIsSUFBSSxvREFBYztBQUNsQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNENBQVU7QUFDakM7QUFDQSxJQUFJLG9EQUFjO0FBQ2xCLElBQUksbURBQWE7QUFDakI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQUk7QUFDM0IsdUJBQXVCLE1BQU07O0FBRTdCO0FBQ0E7QUFDQSxNQUFNLG9EQUFjO0FBQ3BCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRWU7Ozs7Ozs7VUNqS2hCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmV3Q29sbGVjdGlvbiB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuL2luZGV4XCI7XG5mdW5jdGlvbiogZ2VuZXJhdG9yKHN0ciwgbnVtKSB7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgeWllbGQgYCR7c3RyfSR7U3RyaW5nKG51bSsrKX1gO1xuICB9XG59XG5sZXQgY29sR2VuID0gZ2VuZXJhdG9yKFwiY29sXCIsIDApO1xubGV0IGxpc3RHZW4gPSBnZW5lcmF0b3IoXCJsaXN0XCIsIDApO1xubGV0IGl0ZW1HZW4gPSBnZW5lcmF0b3IoXCJpdGVtXCIsIDApO1xuXG5jbGFzcyBJdGVtIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24gPSBcIlwiLCBwYXRoLCB0eXBlID0gXCJjaGVja2JveFwiLCBkdWVEYXRlID0gbnVsbCkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5pZCA9IGl0ZW1HZW4ubmV4dCgpLnZhbHVlO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cbn1cbmNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgcGF0aCwgY29sb3IgPSBcImRlZmF1bHRcIiwgZHVlRGF0ZSA9IG51bGwpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgIHRoaXMuaWQgPSBsaXN0R2VuLm5leHQoKS52YWx1ZTtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIGxldCBmaXJzdEl0ZW0gPSBuZXcgSXRlbShcIkl0ZW0gMVwiKTtcbiAgICB0aGlzLml0ZW1zW2ZpcnN0SXRlbS5pZF0gPSBmaXJzdEl0ZW07XG4gIH1cbiAgLy8gaW5pdCgpe1xuXG4gIC8vIH1cbn1cbmNsYXNzIENvbGxlY3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxpc3RzID0ge307XG4gICAgdGhpcy5pZCA9IGNvbEdlbi5uZXh0KCkudmFsdWU7XG4gICAgbGV0IGZpcnN0TGlzdCA9IG5ldyBMaXN0KFwiTGlzdCAxXCIpO1xuICAgIHRoaXMubGlzdHNbZmlyc3RMaXN0LmlkXSA9IGZpcnN0TGlzdDtcbiAgICB0aGlzLmluaXQgPSAoKSA9PiB7XG4gICAgICBkYXRhW3RoaXMuaWRdID0gdGhpcztcbiAgICAgIG5ld0NvbGxlY3Rpb24oZGF0YVt0aGlzLmlkXSk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9O1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG59XG5cbi8vIGZ1bmN0aW9uIGdldFBhdGgob2JqKXtcbi8vICAgcmV0dXJuIEpTT04ucGFyc2Uob2JqLnBhdGgpXG4vLyB9XG4vLyBmdW5jdGlvbiBzZXRQYXRoKG9iail7XG4vLyAgIEpTT04uc3RyaW5naWZ5KG9iai5wYXRoKVxuLy8gICByZXR1cm4gb2JqXG4vLyB9XG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlKGl0ZW1Pckxpc3QpIHtcbiAgaWYgKGl0ZW1Pckxpc3QuaXNDb21wbGV0ZSkge1xuICAgIGl0ZW1Pckxpc3QuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGl0ZW1Pckxpc3QuaXNDb21wbGV0ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGl0ZW1Pckxpc3QuaXNDb21wbGV0ZTtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdFRvT2JqKGNvbCwgbGlzdCkge1xuICBjb2wubGlzdHNbbGlzdC5pZF0gPSBsaXN0O1xufVxuXG5mdW5jdGlvbiBhZGRJdGVtVG9PYmoobGlzdCwgaXRlbSkge1xuICBsaXN0Lml0ZW1zW2l0ZW0uaWRdID0gaXRlbTtcbn1cblxuZnVuY3Rpb24gc2V0RGF0YShkYXRhKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGEsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YShkYXRhKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGEpKTtcbn1cblxuZXhwb3J0IHtcbiAgQ29sbGVjdGlvbixcbiAgTGlzdCxcbiAgSXRlbSxcbiAgYWRkTGlzdFRvT2JqIGFzIGFkZExpc3QsXG4gIGFkZEl0ZW1Ub09iaiBhcyBhZGRJdGVtLFxuICBzZXREYXRhLFxuICBnZXREYXRhLFxuICB0b2dnbGVDb21wbGV0ZSxcbn07XG4iLCIvLyBpbXBvcnQgXCIuL2ltZ3MvcGx1cy5wbmdcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vYXBwXCI7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWxpc3QtYnRuXCIpO1xuXG5mdW5jdGlvbiBuZXdFbChlbGVtZW50LCBjb250ZW50ID0gbnVsbCwgaWQgPSBudWxsLCBjbHMgPSBudWxsLCB0eXBlID0gbnVsbCkge1xuICBjb25zdCBuZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIGlmIChpZCkgbmV3RWwuaWQgPSBpZDtcbiAgaWYgKGNscykge1xuICAgIGlmICh0eXBlb2YgY2xzID09PSB0eXBlb2YgW10pIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNscyk7XG4gICAgICBjbHMuZm9yRWFjaCgoY2xhc3NzKSA9PiBuZXdFbC5jbGFzc0xpc3QuYWRkKGNsYXNzcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdFbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlKSBuZXdFbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xuICBuZXdFbC5pbm5lckhUTUwgPSBjb250ZW50O1xuICByZXR1cm4gbmV3RWw7XG59XG5cbmZ1bmN0aW9uIG5ld0l0ZW0oaXRlbSkge1xuICBsZXQgbGkgPSBuZXdFbChcImxpXCIsIG51bGwsIGl0ZW0uaWQsIFtgaXRlbWAsIGAke2l0ZW0udHlwZX1gXSk7XG4gIGlmIChpdGVtLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgIGxldCBjaGVja2JveCA9IG5ld0VsKFwiaW5wdXRcIiwgbnVsbCwgbnVsbCwgXCJjaGVja0JveFwiLCBpdGVtLnR5cGUpO1xuICAgIGxpLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgfVxuICBsaS5pbm5lckhUTUwgKz0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICByZXR1cm4gbGk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTWFpbigpIHtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBuZXdMaXN0KGxpc3QsIGNvbCkge1xuICBjb25zdCBodG1sID0gYDxoMz4ke2xpc3QudGl0bGV9PHNwYW4gaWQ9J2xpc3RvZiR7Y29sLmlkfScgY2xhc3M9J2xpc3QtY29sbGVjdGlvbic+JHtjb2wubmFtZX08L3NwYW4+PC9oMz5gO1xuICBjb25zdCBkaXYgPSBuZXdFbChcImRpdlwiLCBodG1sLCBsaXN0LmlkLCBcImxpc3RcIik7XG4gIGNvbnN0IHVsID0gbmV3RWwoXCJ1bFwiKTtcbiAgY29uc3QgbGlzdEZvb3RlciA9XG4gICAgXCI8ZGl2IGNsYXNzPSdsaXN0LWZvb3Rlcic+PGltZyBjbGFzcz0nbGlzdC14JyBzcmM9Jy4uL3NyYy9pbWdzL3BsdXMucG5nJz48L2Rpdj5cIjtcbiAgaWYgKGxpc3QuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgIGxpc3QuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gdWwuYXBwZW5kQ2hpbGQobmV3SXRlbShpdGVtKSkpO1xuICB9IGVsc2Uge1xuICAgIHVsLmFwcGVuZENoaWxkKG5ld0l0ZW0obmV3IEl0ZW0oXCJOZXcgSXRlbVwiKSkpO1xuICB9XG5cbiAgZGl2LmFwcGVuZENoaWxkKHVsKTtcbiAgZGl2LmlubmVySFRNTCArPSBsaXN0Rm9vdGVyO1xuICBtYWluLmFwcGVuZENoaWxkKGRpdik7XG59XG5cbmZ1bmN0aW9uIHNob3dMaXN0cyhjb2wpIHtcbiAgT2JqZWN0LnZhbHVlcyhjb2wubGlzdHMpLmZvckVhY2goKGxpc3QpID0+IG5ld0xpc3QobGlzdCwgY29sKSk7XG59XG5cbmZ1bmN0aW9uIHNob3dBbGwoZGF0YSkge1xuICBjbGVhck1haW4oKTtcbiAgT2JqZWN0LnZhbHVlcyhkYXRhKS5mb3JFYWNoKChjb2wpID0+IHNob3dMaXN0cyhjb2wpKTtcbn1cblxuZnVuY3Rpb24gc2hvdyhkYXRhKSB7XG4gIGNsZWFyTWFpbigpO1xuICBjb25zdCBhY3RpdmVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1uYXZcIik7XG4gIGlmIChhY3RpdmVOYXYpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVOYXYpO1xuICAgIGlmIChhY3RpdmVOYXYuaWQgPT09IFwiYWxsXCIpIHtcbiAgICAgIHNob3dBbGwoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNob3dMaXN0cyhkYXRhW2FjdGl2ZU5hdi5pZF0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbFwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLW5hdlwiKTtcbiAgICBzaG93QWxsKGRhdGEpO1xuICB9XG59XG5mdW5jdGlvbiBuZXdDb2xsZWN0aW9uKGNvbCkge1xuICBjb25zdCBodG1sID0gYCR7Y29sLm5hbWV9IDxpbWcgY2xhc3M9XCJ4IG5hdi1pdGVtXCIgc3JjPVwiLi4vc3JjL2ltZ3MvcGx1cy5wbmdcIj5gO1xuICBjb25zdCBkaXYgPSBuZXdFbChcImRpdlwiLCBodG1sLCBjb2wuaWQpO1xuICBuYXYuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVmlzaWJpbGl0eSgpIHtcbiAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duLW1lbnVcIik7XG4gIGNvbnN0IGFkZCA9ICgpID0+IGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XG4gIGNvbnN0IHJlbW92ZSA9ICgpID0+IGFkZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XG4gIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIGlmIChkcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgYWRkKTtcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIHJlbW92ZSk7XG4gIH1cbiAgLy8gaWYgKCFkcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgLy8gICBhZGRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgYWRkKTtcbiAgLy8gICBhZGRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIHJlbW92ZSk7XG4gIC8vICAgYWRkKCk7XG4gIC8vIH1cbn1cblxuZXhwb3J0IHtcbiAgaGVhZGVyLFxuICBuYXYsXG4gIG1haW4sXG4gIGJvZHksXG4gIG5ld0VsLFxuICBuZXdDb2xsZWN0aW9uLFxuICBuZXdMaXN0LFxuICBuZXdJdGVtLFxuICBzaG93TGlzdHMsXG4gIHNob3dBbGwsXG4gIGNsZWFyTWFpbixcbiAgYWRkQnRuLFxuICB0b2dnbGVWaXNpYmlsaXR5IGFzIHRvZ2dsZURyb3Bkb3duLFxuICBzaG93LFxufTtcbiIsImltcG9ydCB7XG4gIENvbGxlY3Rpb24sXG4gIExpc3QsXG4gIEl0ZW0sXG4gIGFkZExpc3QsXG4gIGFkZEl0ZW0sXG4gIGdldERhdGEsXG4gIHNldERhdGEsXG4gIHRvZ2dsZUNvbXBsZXRlLFxuICB1blBhY2tEYXRhIGFzIGNvbnNUYWJsZURhdGEsXG4gIHVuUGFja0RhdGEsXG59IGZyb20gXCIuL2FwcFwiO1xuXG5pbXBvcnQge1xuICBuZXdFbCxcbiAgbWFpbixcbiAgbmF2LFxuICBoZWFkZXIsXG4gIGJvZHksXG4gIG5ld0NvbGxlY3Rpb24sXG4gIG5ld0xpc3QsXG4gIG5ld0l0ZW0sXG4gIHNob3dMaXN0cyxcbiAgc2hvd0FsbCxcbiAgY2xlYXJNYWluLFxuICBhZGRCdG4sXG4gIHRvZ2dsZURyb3Bkb3duLFxuICBzaG93LFxufSBmcm9tIFwiLi9kb21cIjtcblxubGV0IGRhdGEgPSB7fTtcblxubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5uYXYuYXBwZW5kQ2hpbGQobmV3RWwoXCJkaXZcIiwgXCJBbGxcIiwgXCJhbGxcIiwgXCJhY3RpdmUtbmF2XCIpKTtcblxuZGF0YS5jb2wwID0gbmV3IENvbGxlY3Rpb24oXCJDb2xsZWN0aW9uIDFcIik7XG5kYXRhLmNvbDEgPSBuZXcgQ29sbGVjdGlvbihcIkNvbGxlY3Rpb24gMlwiKTtcblxudG9nZ2xlRHJvcGRvd24oKTtcbmNvbnN0IGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW1cIik7XG5cbi8vIExJU1RFTkVSU1xuKCgpID0+IHtcbiAgY29uc3QgYWRkTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWxpc3RcIik7XG4gIGNvbnN0IGFkZENvbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWNvbGxlY3Rpb25cIik7XG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgZGl2XCIpO1xuICAgIGNvbnN0IG5hdlhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi54LCAubmF2LWl0ZW1cIik7XG4gICAgY29uc3QgeHNMaXN0ZW5lckZ1bmMgPSAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCwgZGF0YSk7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgICAgaWYgKGRhdGFbY29sXS5pZCA9PT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCkge1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2NvbF07XG4gICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzZXREYXRhKGRhdGEpO1xuICAgIGRhdGEgPSBnZXREYXRhKGRhdGEpO1xuICAgIG5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIG5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1uYXZcIikpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLW5hdlwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgICBzaG93KGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBuYXZYcy5mb3JFYWNoKChub2RlKSA9PiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB4c0xpc3RlbmVyRnVuYykpO1xuICAgIHNob3coZGF0YSk7XG5cbiAgICBPYmplY3QudmFsdWVzKGl0ZW1zKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja2JveFwiKSkge1xuICAgICAgICAgIGNvbnN0IGNvbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcInNwYW5cIilcbiAgICAgICAgICAgIC5pZC5zbGljZSg2KTtcbiAgICAgICAgICBjb25zdCBsaXN0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgICAgY29uc29sZS5sb2coY29sLCBsaXN0LCBpdGVtKTtcbiAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpdGVtfSBpbnB1dGApLmNoZWNrZWQgPT09IGZhbHNlXG4gICAgICAgICAgLy8gICA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpdGVtfSBpbnB1dGApLmNoZWNrZWQgPSB0cnVlKVxuICAgICAgICAgIC8vICAgOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aXRlbX0gaW5wdXRgKS5jaGVja2VkID0gZmFsc2UpO1xuICAgICAgICAgIC8vIGRhdGFbY29sXS5saXN0c1tsaXN0XS5pdGVtc1tpdGVtXS5pc0NvbXBsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAvLyAgIGAjJHtpdGVtfSBpbnB1dGBcbiAgICAgICAgICAvLyApLmNoZWNrZWQ7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YVtjb2xdLmxpc3RzW2xpc3RdLml0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tib3hcIikpIHtcbiAgICAgICAgICBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuY2hlY2tlZCA9PT0gZmFsc2VcbiAgICAgICAgICAgID8gKGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5jaGVja2VkID0gdHJ1ZSlcbiAgICAgICAgICAgIDogKGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5jaGVja2VkID0gZmFsc2UpO1xuICAgICAgICAgIGNvbnN0IGNvbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcInNwYW5cIilcbiAgICAgICAgICAgIC5pZC5zbGljZSg2KTtcbiAgICAgICAgICBjb25zdCBsaXN0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkO1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBlLnRhcmdldC5pZDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb2wsIGxpc3QsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBodG1sTGlzdGVuZXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duLW1lbnVcIik7XG4gICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpID09PSBmYWxzZSkge1xuICAgICAgaWYgKGUudGFyZ2V0LmlkICE9PSBtZW51LmlkICYmIGUudGFyZ2V0LmlkICE9PSBhZGRCdG4uaWQpIHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaHRtbExpc3RlbmVyKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICB9KTtcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2dnbGVEcm9wZG93bigpO1xuICB9KTtcblxuICBhZGRDb2xCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgbmFtZSA9IFwiXCI7XG4gICAgd2hpbGUgKCFuYW1lKSB7XG4gICAgICBuYW1lID0gcHJvbXB0KFwiTmFtZSBmb3IgbmV3IGNvbGxlY3Rpb246IFwiKTtcbiAgICB9XG4gICAgY29uc3QgbmV3Q29sID0gbmV3IENvbGxlY3Rpb24obmFtZSk7XG4gICAgZGF0YVtuZXdDb2wuaWRdID0gbmV3Q29sO1xuICAgIHRvZ2dsZURyb3Bkb3duKCk7XG4gICAgbmV3Q29sbGVjdGlvbihuZXdDb2wpO1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcblxuICBhZGRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtbmF2XCIpO1xuICAgIGlmIChhY3RpdmVOYXYuaWQgIT09IFwiYWxsXCIpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZU5hdik7XG4gICAgICBsZXQgdGl0bGUgPSBwcm9tcHQoXCJUaXRsZSBmb3IgbmV3IGxpc3Q6IFwiKTtcbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgdGl0bGUgPSBcIm5ldyBMaXN0XCI7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXdMID0gbmV3IExpc3QodGl0bGUpO1xuICAgICAgLy8gY29uc29sZS5sb2coeyBkYXRhIH0pO1xuXG4gICAgICBkYXRhW2FjdGl2ZU5hdi5pZF0ubGlzdHNbbmV3TC5pZF0gPSBuZXdMO1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YVthY3RpdmVOYXYuaWRdLmxpc3RzKTtcbiAgICAgIHRvZ2dsZURyb3Bkb3duKCk7XG4gICAgICAvLyBuZXdMaXN0KG5ld0wpO1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiQ2hvb3NlIGEgY29sbGVjdGlvbiBmaXJzdC5cIik7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9KTtcblxuICB1cGRhdGUoKTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRhdGEgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
=======
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




localStorage.clear();

let data = {};

function update() {
  _dom__WEBPACK_IMPORTED_MODULE_1__.nav.innerHTML = "";
  _dom__WEBPACK_IMPORTED_MODULE_1__.nav.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.newEl)("div", "All", "all", "active-nav"));
  Object.values(data).forEach((col) => (0,_dom__WEBPACK_IMPORTED_MODULE_1__.newCollection)(col));
  (0,_app__WEBPACK_IMPORTED_MODULE_0__.setData)(data);
  data = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getData)(data);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.showAll)(data);
}
data.col0 = new _app__WEBPACK_IMPORTED_MODULE_0__.Collection("one");
data.col1 = new _app__WEBPACK_IMPORTED_MODULE_0__.Collection("two");
data.col2 = new _app__WEBPACK_IMPORTED_MODULE_0__.Collection("three");
data.col3 = new _app__WEBPACK_IMPORTED_MODULE_0__.Collection("four");

(0,_app__WEBPACK_IMPORTED_MODULE_0__.addListToObj)(data.col0, new _app__WEBPACK_IMPORTED_MODULE_0__.List("Col 1 List 1"));
(0,_app__WEBPACK_IMPORTED_MODULE_0__.addListToObj)(data.col0, new _app__WEBPACK_IMPORTED_MODULE_0__.List("Col 1 List 2"));
(0,_app__WEBPACK_IMPORTED_MODULE_0__.addListToObj)(data.col1, new _app__WEBPACK_IMPORTED_MODULE_0__.List("Col 2 List 1"));

(0,_app__WEBPACK_IMPORTED_MODULE_0__.addItemToObj)(data.col0.lists[0], new _app__WEBPACK_IMPORTED_MODULE_0__.Item("Item 1", "checkbox"));
(0,_app__WEBPACK_IMPORTED_MODULE_0__.addItemToObj)(data.col0.lists[0], new _app__WEBPACK_IMPORTED_MODULE_0__.Item("Item 2", "checkbox"));
(0,_app__WEBPACK_IMPORTED_MODULE_0__.addItemToObj)(data.col0.lists[1], new _app__WEBPACK_IMPORTED_MODULE_0__.Item("Item 1", "checkbox"));
(0,_app__WEBPACK_IMPORTED_MODULE_0__.addItemToObj)(data.col0.lists[1], new _app__WEBPACK_IMPORTED_MODULE_0__.Item("Item 2", "checkbox"));
(0,_app__WEBPACK_IMPORTED_MODULE_0__.addItemToObj)(data.col1.lists[0], new _app__WEBPACK_IMPORTED_MODULE_0__.Item("Item 1", "checkbox"));
(0,_app__WEBPACK_IMPORTED_MODULE_0__.addItemToObj)(data.col1.lists[0], new _app__WEBPACK_IMPORTED_MODULE_0__.Item("Item 2", "checkbox"));

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
        (0,_app__WEBPACK_IMPORTED_MODULE_0__.addListToObj)(data[collection], new _app__WEBPACK_IMPORTED_MODULE_0__.List(listTitle));
      }
    });

    update();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleDropdown)();
  });

  addColBtn.addEventListener("click", () => {
    const colName = prompt("Name: ");
    const col = new _app__WEBPACK_IMPORTED_MODULE_0__.Collection(colName);
    data[col.id] = col;
    console.log(data);
    update();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleDropdown)();
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

  _dom__WEBPACK_IMPORTED_MODULE_1__.addBtn.addEventListener("click", _dom__WEBPACK_IMPORTED_MODULE_1__.toggleDropdown);
})();

(0,_app__WEBPACK_IMPORTED_MODULE_0__.unPackData)(data);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUEsRUFBRSx5REFBdUIsVUFBVSxnREFBYztBQUNqRCxDQUFDOztBQUVELGdEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiogZ2VuZXJhdG9yKHN0ciwgbnVtKSB7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgeWllbGQgYCR7c3RyfSR7U3RyaW5nKG51bSsrKX1gO1xuICB9XG59XG5sZXQgY29sR2VuID0gZ2VuZXJhdG9yKFwiY29sXCIsIDApO1xubGV0IGxpc3RHZW4gPSBnZW5lcmF0b3IoXCJsaXN0XCIsIDApO1xubGV0IGl0ZW1HZW4gPSBnZW5lcmF0b3IoXCJpdGVtXCIsIDApO1xuXG5jbGFzcyBDb2xsZWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5saXN0cyA9IFtdO1xuICAgIHRoaXMuaWQgPSBjb2xHZW4ubmV4dCgpLnZhbHVlO1xuICB9XG59XG5cbmNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgY29sb3IgPSBcImRlZmF1bHRcIiwgZHVlRGF0ZSA9IG51bGwpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuaWQgPSBsaXN0R2VuLm5leHQoKS52YWx1ZTtcbiAgfVxufVxuXG5jbGFzcyBJdGVtIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24gPSBcIlwiLCB0eXBlID0gXCJjaGVja2JveFwiLCBkdWVEYXRlID0gbnVsbCkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5pZCA9IGl0ZW1HZW4ubmV4dCgpLnZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlKGl0ZW1Pckxpc3QpIHtcbiAgaWYgKGl0ZW1Pckxpc3QuaXNDb21wbGV0ZSkge1xuICAgIGl0ZW1Pckxpc3QuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGl0ZW1Pckxpc3QuaXNDb21wbGV0ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGl0ZW1Pckxpc3QuaXNDb21wbGV0ZTtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdFRvT2JqKGNvbCwgbGlzdCkge1xuICBjb2wubGlzdHMucHVzaChsaXN0KTtcbn1cblxuZnVuY3Rpb24gYWRkSXRlbVRvT2JqKGxpc3QsIGl0ZW0pIHtcbiAgbGlzdC5pdGVtcy5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiBzZXREYXRhKGRhdGEpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhKGRhdGEpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YSkpO1xufVxuXG5mdW5jdGlvbiB1blBhY2tEYXRhKGRhdGEpIHtcbiAgY29uc3QgY29sbHMgPSBbLi4uT2JqZWN0LmtleXMoZGF0YSldO1xuICBjb25zb2xlLnRhYmxlKFtkYXRhLCBPYmplY3QudmFsdWVzKGRhdGEpWzBdLm5hbWVdKTtcbn1cblxuZXhwb3J0IHtcbiAgQ29sbGVjdGlvbixcbiAgTGlzdCxcbiAgSXRlbSxcbiAgYWRkTGlzdFRvT2JqLFxuICBhZGRJdGVtVG9PYmosXG4gIHNldERhdGEsXG4gIGdldERhdGEsXG4gIHVuUGFja0RhdGEsXG4gIHRvZ2dsZUNvbXBsZXRlLFxufTtcbiIsImNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtbGlzdC1idG5cIik7XG5cbmZ1bmN0aW9uIG5ld0VsKGVsZW1lbnQsIGNvbnRlbnQgPSBudWxsLCBpZCA9IG51bGwsIGNscyA9IG51bGwsIHR5cGUgPSBudWxsKSB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgaWYgKGlkKSBlbC5pZCA9IGlkO1xuICBpZiAoY2xzKSBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIGlmICh0eXBlKSBlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xuICBlbC5pbm5lckhUTUwgPSBjb250ZW50O1xuICByZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIG5ld0l0ZW0oaXRlbSkge1xuICBsZXQgbGkgPSBuZXdFbChcImxpXCIsIG51bGwsIGl0ZW0uaWQsIGl0ZW0udHlwZSk7XG4gIGlmIChpdGVtLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgIGxldCBjaGVja2JveCA9IG5ld0VsKFwiaW5wdXRcIiwgbnVsbCwgbnVsbCwgbnVsbCwgaXRlbS50eXBlKTtcbiAgICBsaS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIH1cbiAgbGkuaW5uZXJIVE1MICs9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBjbGVhck1haW4oKSB7XG4gIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gbmV3TGlzdChsaXN0KSB7XG4gIGNvbnN0IGh0bWwgPSBgPGgzPiR7bGlzdC50aXRsZX08L2gzPmA7XG4gIGNvbnN0IGRpdiA9IG5ld0VsKFwiZGl2XCIsIGh0bWwsIGxpc3QuaWQsIFwibGlzdFwiKTtcbiAgY29uc3QgdWwgPSBuZXdFbChcInVsXCIpO1xuICBpZiAobGlzdC5pdGVtcy5sZW5ndGggPiAwKVxuICAgIGxpc3QuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gdWwuYXBwZW5kQ2hpbGQobmV3SXRlbShpdGVtKSkpO1xuICBkaXYuYXBwZW5kQ2hpbGQodWwpO1xuICBtYWluLmFwcGVuZENoaWxkKGRpdik7XG59XG5cbmZ1bmN0aW9uIHNob3dMaXN0cyhjb2wpIHtcbiAgY29sLmxpc3RzLmZvckVhY2goKGxpc3QpID0+IG5ld0xpc3QobGlzdCkpO1xufVxuXG5mdW5jdGlvbiBzaG93QWxsKGRhdGEpIHtcbiAgY2xlYXJNYWluKCk7XG4gIE9iamVjdC52YWx1ZXMoZGF0YSkuZm9yRWFjaCgoY29sKSA9PiB7XG4gICAgc2hvd0xpc3RzKGNvbCk7XG4gICAgLy8gY29uc29sZS5sb2coY29sKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5ld0NvbGxlY3Rpb24oY29sKSB7XG4gIGNvbnN0IGh0bWwgPSBgJHtjb2wubmFtZX0gPGltZyBjbGFzcz1cInhcIiBzcmM9XCIuLi9zcmMvaW1ncy9wbHVzLnBuZ1wiPmA7XG4gIGNvbnN0IGRpdiA9IG5ld0VsKFwiZGl2XCIsIGh0bWwsIGNvbC5pZCk7XG4gIG5hdi5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVWaXNpYmlsaXR5KCkge1xuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd24tbWVudVwiKTtcbiAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn1cblxuZXhwb3J0IHtcbiAgaGVhZGVyLFxuICBuYXYsXG4gIG1haW4sXG4gIGJvZHksXG4gIG5ld0VsLFxuICBuZXdDb2xsZWN0aW9uLFxuICBuZXdMaXN0LFxuICBuZXdJdGVtLFxuICBzaG93TGlzdHMsXG4gIHNob3dBbGwsXG4gIGNsZWFyTWFpbixcbiAgYWRkQnRuLFxuICB0b2dnbGVWaXNpYmlsaXR5IGFzIHRvZ2dsZURyb3Bkb3duLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgQ29sbGVjdGlvbixcbiAgTGlzdCxcbiAgSXRlbSxcbiAgYWRkTGlzdFRvT2JqLFxuICBhZGRJdGVtVG9PYmosXG4gIGdldERhdGEsXG4gIHNldERhdGEsXG4gIHRvZ2dsZUNvbXBsZXRlLFxuICB1blBhY2tEYXRhIGFzIGNvbnNUYWJsZURhdGEsXG59IGZyb20gXCIuL2FwcFwiO1xuXG5pbXBvcnQge1xuICBuZXdFbCxcbiAgbWFpbixcbiAgbmF2LFxuICBoZWFkZXIsXG4gIGJvZHksXG4gIG5ld0NvbGxlY3Rpb24sXG4gIG5ld0xpc3QsXG4gIG5ld0l0ZW0sXG4gIHNob3dMaXN0cyxcbiAgc2hvd0FsbCxcbiAgY2xlYXJNYWluLFxuICBhZGRCdG4sXG4gIHRvZ2dsZURyb3Bkb3duLFxufSBmcm9tIFwiLi9kb21cIjtcblxubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbmxldCBkYXRhID0ge307XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgbmF2LmlubmVySFRNTCA9IFwiXCI7XG4gIG5hdi5hcHBlbmRDaGlsZChuZXdFbChcImRpdlwiLCBcIkFsbFwiLCBcImFsbFwiLCBcImFjdGl2ZS1uYXZcIikpO1xuICBPYmplY3QudmFsdWVzKGRhdGEpLmZvckVhY2goKGNvbCkgPT4gbmV3Q29sbGVjdGlvbihjb2wpKTtcbiAgc2V0RGF0YShkYXRhKTtcbiAgZGF0YSA9IGdldERhdGEoZGF0YSk7XG4gIHNob3dBbGwoZGF0YSk7XG59XG5kYXRhLmNvbDAgPSBuZXcgQ29sbGVjdGlvbihcIm9uZVwiKTtcbmRhdGEuY29sMSA9IG5ldyBDb2xsZWN0aW9uKFwidHdvXCIpO1xuZGF0YS5jb2wyID0gbmV3IENvbGxlY3Rpb24oXCJ0aHJlZVwiKTtcbmRhdGEuY29sMyA9IG5ldyBDb2xsZWN0aW9uKFwiZm91clwiKTtcblxuYWRkTGlzdFRvT2JqKGRhdGEuY29sMCwgbmV3IExpc3QoXCJDb2wgMSBMaXN0IDFcIikpO1xuYWRkTGlzdFRvT2JqKGRhdGEuY29sMCwgbmV3IExpc3QoXCJDb2wgMSBMaXN0IDJcIikpO1xuYWRkTGlzdFRvT2JqKGRhdGEuY29sMSwgbmV3IExpc3QoXCJDb2wgMiBMaXN0IDFcIikpO1xuXG5hZGRJdGVtVG9PYmooZGF0YS5jb2wwLmxpc3RzWzBdLCBuZXcgSXRlbShcIkl0ZW0gMVwiLCBcImNoZWNrYm94XCIpKTtcbmFkZEl0ZW1Ub09iaihkYXRhLmNvbDAubGlzdHNbMF0sIG5ldyBJdGVtKFwiSXRlbSAyXCIsIFwiY2hlY2tib3hcIikpO1xuYWRkSXRlbVRvT2JqKGRhdGEuY29sMC5saXN0c1sxXSwgbmV3IEl0ZW0oXCJJdGVtIDFcIiwgXCJjaGVja2JveFwiKSk7XG5hZGRJdGVtVG9PYmooZGF0YS5jb2wwLmxpc3RzWzFdLCBuZXcgSXRlbShcIkl0ZW0gMlwiLCBcImNoZWNrYm94XCIpKTtcbmFkZEl0ZW1Ub09iaihkYXRhLmNvbDEubGlzdHNbMF0sIG5ldyBJdGVtKFwiSXRlbSAxXCIsIFwiY2hlY2tib3hcIikpO1xuYWRkSXRlbVRvT2JqKGRhdGEuY29sMS5saXN0c1swXSwgbmV3IEl0ZW0oXCJJdGVtIDJcIiwgXCJjaGVja2JveFwiKSk7XG5cbnVwZGF0ZSgpO1xuXG4vLyBMSVNURU5FUlNcbigoKSA9PiB7XG4gIGNvbnN0IHhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi54XCIpO1xuICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveFwiKTtcbiAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2IGRpdlwiKTtcbiAgY29uc3QgYWRkTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWxpc3RcIik7XG4gIGNvbnN0IGFkZENvbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWNvbFwiKTtcblxuICBhZGRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbGlzdFRpdGxlID0gcHJvbXB0KFwiVGl0bGU6IFwiKTtcbiAgICBjb25zdCBjb2wgPSBwcm9tcHQoXCJXaGljaCBDb2xsZWN0aW9uP1wiKTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChjb2xsZWN0aW9uKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhjb2xsZWN0aW9uKTtcbiAgICAgIGlmIChjb2wudG9Mb3dlckNhc2UoKSA9PT0gZGF0YVtjb2xsZWN0aW9uXS5uYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgYWRkTGlzdFRvT2JqKGRhdGFbY29sbGVjdGlvbl0sIG5ldyBMaXN0KGxpc3RUaXRsZSkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdXBkYXRlKCk7XG4gICAgdG9nZ2xlRHJvcGRvd24oKTtcbiAgfSk7XG5cbiAgYWRkQ29sQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgY29sTmFtZSA9IHByb21wdChcIk5hbWU6IFwiKTtcbiAgICBjb25zdCBjb2wgPSBuZXcgQ29sbGVjdGlvbihjb2xOYW1lKTtcbiAgICBkYXRhW2NvbC5pZF0gPSBjb2w7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgdXBkYXRlKCk7XG4gICAgdG9nZ2xlRHJvcGRvd24oKTtcbiAgfSk7XG5cbiAgY2hlY2tib3hlcy5mb3JFYWNoKChpdGVtKSA9PlxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKGRhdGEpLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgICBjb2wubGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgIGxpc3QuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpdGVtLmlkID09PSBlLnRhcmdldC5pZCB8fFxuICAgICAgICAgICAgICBpdGVtLmlkID09PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaXRlbS5pc0NvbXBsZXRlID09PSBmYWxzZVxuICAgICAgICAgICAgICAgID8gKGl0ZW0uaXNDb21wbGV0ZSA9IHRydWUpXG4gICAgICAgICAgICAgICAgOiAoaXRlbS5pc0NvbXBsZXRlID0gZmFsc2UpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpdGVtLmlkfSBjb21wbGV0ZT8gJHtpdGVtLmlzQ29tcGxldGV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gZS50YXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgZS50YXJnZXQuY2hpbGRyZW5bMF0uY2hlY2tlZCA9IGl0ZW0uaXNDb21wbGV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KVxuICApO1xuXG4gIG5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbmF2SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLW5hdlwiKSk7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLW5hdlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke2UudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWR9IGRlbGV0ZWRgKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgeHMuZm9yRWFjaCgobm9kZSkgPT5cbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCwgZGF0YSk7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgICAgaWYgKGRhdGFbY29sXS5pZCA9PT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCkge1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2NvbF07XG4gICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gICk7XG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVEcm9wZG93bik7XG59KSgpO1xuXG5jb25zVGFibGVEYXRhKGRhdGEpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> 9977ebc5735f34fcdf7b1429d86dc0cafd8ff1e2

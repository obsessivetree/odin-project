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
/* harmony export */   "addList": () => (/* binding */ addListToObj),
/* harmony export */   "addItem": () => (/* binding */ addItemToObj),
/* harmony export */   "setData": () => (/* binding */ setData),
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "unPackData": () => (/* binding */ unPackData),
/* harmony export */   "toggleComplete": () => (/* binding */ toggleComplete)
/* harmony export */ });
function* generator(str, num) {
  while (true) {
    yield `${str}-${String(num++)}`;
  }
}
let colGen = generator("col", 0);
let listGen = generator("list", 0);
let itemGen = generator("item", 0);

class Collection {
  constructor(name) {
    this.name = name;
    this.lists = [];
    this.id = colGen.next().value;
  }
}

class List {
  constructor(title, color = "default", dueDate = null) {
    this.title = title;
    this.color = color;
    this.dueDate = dueDate;
    this.isComplete = false;
    this.items = [];
    this.id = listGen.next().value;
  }
}

class Item {
  constructor(description = "", type = "checkbox", dueDate = null) {
    this.description = description;
    this.type = type;
    this.dueDate = dueDate;
    this.isComplete = false;
    this.id = itemGen.next().value;
  }
}

function toggleComplete(itemOrList) {
  if (itemOrList.isComplete) {
    itemOrList.isComplete = false;
  } else {
    itemOrList.isComplete = true;
  }
  return itemOrList.isComplete;
}

function addListToObj(col, list) {
  col.lists.push(list);
}

function addItemToObj(list, item) {
  list.items.push(item);
}

function setData(data) {
  localStorage.setItem(data, JSON.stringify(data));
}

function getData(data) {
  return JSON.parse(localStorage.getItem(data));
}

function unPackData(data) {
  let cols = [...Object.values(data)];
  cols.forEach((col) => {
    col.lists.forEach((list) => {
      list.items.forEach((item) => {
        console.table({
          Collection: col.name,
          List: list.title,
          Item: item.description,
        });
      });
    });
  });
}




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
/* harmony export */   "toggleDropdown": () => (/* binding */ toggleVisibility)
/* harmony export */ });
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




let data = {};

localStorage.clear();

data.col1 = new _app__WEBPACK_IMPORTED_MODULE_0__.Collection("Collection 1");
data.col2 = new _app__WEBPACK_IMPORTED_MODULE_0__.Collection("Collection 2");

(0,_app__WEBPACK_IMPORTED_MODULE_0__.addList)(data.col1, new _app__WEBPACK_IMPORTED_MODULE_0__.List("Col 1 List 1"));
(0,_app__WEBPACK_IMPORTED_MODULE_0__.addList)(data.col2, new _app__WEBPACK_IMPORTED_MODULE_0__.List("Col 2 List 1"));

(0,_app__WEBPACK_IMPORTED_MODULE_0__.addItem)(data.col1.lists[0], new _app__WEBPACK_IMPORTED_MODULE_0__.Item("Description Item 1", "checkbox"));
(0,_app__WEBPACK_IMPORTED_MODULE_0__.addItem)(data.col2.lists[0], new _app__WEBPACK_IMPORTED_MODULE_0__.Item("Description Item 1", "checkbox"));

(0,_app__WEBPACK_IMPORTED_MODULE_0__.setData)(data);
data = (0,_app__WEBPACK_IMPORTED_MODULE_0__.getData)(data);

_dom__WEBPACK_IMPORTED_MODULE_1__.nav.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.newEl)("div", "All", "all", "active-nav"));
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.newCollection)(data.col1);

(0,_dom__WEBPACK_IMPORTED_MODULE_1__.showAll)(data);

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
          (0,_app__WEBPACK_IMPORTED_MODULE_0__.setData)(data);
          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.showAll)(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxhQUFhLElBQUksR0FBRyxjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQVlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFdBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFVBQVU7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQWdCRTs7Ozs7OztVQzFFRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0llOztBQWdCQTs7QUFFZjs7QUFFQTs7QUFFQSxnQkFBZ0IsNENBQVU7QUFDMUIsZ0JBQWdCLDRDQUFVOztBQUUxQiw2Q0FBTyxnQkFBZ0Isc0NBQUk7QUFDM0IsNkNBQU8sZ0JBQWdCLHNDQUFJOztBQUUzQiw2Q0FBTyx5QkFBeUIsc0NBQUk7QUFDcEMsNkNBQU8seUJBQXlCLHNDQUFJOztBQUVwQyw2Q0FBTztBQUNQLE9BQU8sNkNBQU87O0FBRWQsaURBQWUsQ0FBQywyQ0FBSztBQUNyQixtREFBYTs7QUFFYiw2Q0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFPO0FBQ2pCLFVBQVUsNkNBQU87QUFDakI7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUEsRUFBRSx5REFBdUIsVUFBVSxnREFBYztBQUNqRCxDQUFDOztBQUVELGdEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiogZ2VuZXJhdG9yKHN0ciwgbnVtKSB7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgeWllbGQgYCR7c3RyfS0ke1N0cmluZyhudW0rKyl9YDtcbiAgfVxufVxubGV0IGNvbEdlbiA9IGdlbmVyYXRvcihcImNvbFwiLCAwKTtcbmxldCBsaXN0R2VuID0gZ2VuZXJhdG9yKFwibGlzdFwiLCAwKTtcbmxldCBpdGVtR2VuID0gZ2VuZXJhdG9yKFwiaXRlbVwiLCAwKTtcblxuY2xhc3MgQ29sbGVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGlzdHMgPSBbXTtcbiAgICB0aGlzLmlkID0gY29sR2VuLm5leHQoKS52YWx1ZTtcbiAgfVxufVxuXG5jbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGNvbG9yID0gXCJkZWZhdWx0XCIsIGR1ZURhdGUgPSBudWxsKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmlkID0gbGlzdEdlbi5uZXh0KCkudmFsdWU7XG4gIH1cbn1cblxuY2xhc3MgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uID0gXCJcIiwgdHlwZSA9IFwiY2hlY2tib3hcIiwgZHVlRGF0ZSA9IG51bGwpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaWQgPSBpdGVtR2VuLm5leHQoKS52YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVDb21wbGV0ZShpdGVtT3JMaXN0KSB7XG4gIGlmIChpdGVtT3JMaXN0LmlzQ29tcGxldGUpIHtcbiAgICBpdGVtT3JMaXN0LmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBpdGVtT3JMaXN0LmlzQ29tcGxldGUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBpdGVtT3JMaXN0LmlzQ29tcGxldGU7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RUb09iaihjb2wsIGxpc3QpIHtcbiAgY29sLmxpc3RzLnB1c2gobGlzdCk7XG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub09iaihsaXN0LCBpdGVtKSB7XG4gIGxpc3QuaXRlbXMucHVzaChpdGVtKTtcbn1cblxuZnVuY3Rpb24gc2V0RGF0YShkYXRhKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGEsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YShkYXRhKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGEpKTtcbn1cblxuZnVuY3Rpb24gdW5QYWNrRGF0YShkYXRhKSB7XG4gIGxldCBjb2xzID0gWy4uLk9iamVjdC52YWx1ZXMoZGF0YSldO1xuICBjb2xzLmZvckVhY2goKGNvbCkgPT4ge1xuICAgIGNvbC5saXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICBsaXN0Lml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc29sZS50YWJsZSh7XG4gICAgICAgICAgQ29sbGVjdGlvbjogY29sLm5hbWUsXG4gICAgICAgICAgTGlzdDogbGlzdC50aXRsZSxcbiAgICAgICAgICBJdGVtOiBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgQ29sbGVjdGlvbixcbiAgTGlzdCxcbiAgSXRlbSxcbiAgYWRkTGlzdFRvT2JqIGFzIGFkZExpc3QsXG4gIGFkZEl0ZW1Ub09iaiBhcyBhZGRJdGVtLFxuICBzZXREYXRhLFxuICBnZXREYXRhLFxuICB1blBhY2tEYXRhLFxuICB0b2dnbGVDb21wbGV0ZSxcbn07XG4iLCJjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWxpc3QtYnRuXCIpO1xuXG5mdW5jdGlvbiBuZXdFbChlbGVtZW50LCBjb250ZW50ID0gbnVsbCwgaWQgPSBudWxsLCBjbHMgPSBudWxsLCB0eXBlID0gbnVsbCkge1xuICBjb25zdCBuZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIGlmIChpZCkgbmV3RWwuaWQgPSBpZDtcbiAgaWYgKGNscykgbmV3RWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICBpZiAodHlwZSkgbmV3RWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcbiAgbmV3RWwuaW5uZXJIVE1MID0gY29udGVudDtcbiAgcmV0dXJuIG5ld0VsO1xufVxuXG5mdW5jdGlvbiBuZXdJdGVtKGl0ZW0pIHtcbiAgbGV0IGxpID0gbmV3RWwoXCJsaVwiLCBudWxsLCBpdGVtLmlkLCBpdGVtLnR5cGUpO1xuICBpZiAoaXRlbS50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICBsZXQgY2hlY2tib3ggPSBuZXdFbChcImlucHV0XCIsIG51bGwsIG51bGwsIG51bGwsIGl0ZW0udHlwZSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICB9XG4gIGxpLmlubmVySFRNTCArPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gIHJldHVybiBsaTtcbn1cblxuZnVuY3Rpb24gY2xlYXJNYWluKCkge1xuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIG5ld0xpc3QobGlzdCkge1xuICBjb25zdCBodG1sID0gYDxoMz4ke2xpc3QudGl0bGV9PC9oMz5gO1xuICBjb25zdCBkaXYgPSBuZXdFbChcImRpdlwiLCBodG1sLCBsaXN0LmlkLCBcImxpc3RcIik7XG4gIGNvbnN0IHVsID0gbmV3RWwoXCJ1bFwiKTtcbiAgaWYgKGxpc3QuaXRlbXMubGVuZ3RoID4gMClcbiAgICBsaXN0Lml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHVsLmFwcGVuZENoaWxkKG5ld0l0ZW0oaXRlbSkpKTtcbiAgZGl2LmFwcGVuZENoaWxkKHVsKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG5mdW5jdGlvbiBzaG93TGlzdHMoY29sKSB7XG4gIGNvbC5saXN0cy5mb3JFYWNoKChsaXN0KSA9PiBuZXdMaXN0KGxpc3QpKTtcbn1cblxuZnVuY3Rpb24gc2hvd0FsbChkYXRhKSB7XG4gIGNsZWFyTWFpbigpO1xuICBPYmplY3QudmFsdWVzKGRhdGEpLmZvckVhY2goKGNvbCkgPT4gc2hvd0xpc3RzKGNvbCkpO1xufVxuXG5mdW5jdGlvbiBuZXdDb2xsZWN0aW9uKGNvbCkge1xuICBjb25zdCBodG1sID0gYCR7Y29sLm5hbWV9IDxpbWcgY2xhc3M9XCJ4XCIgc3JjPVwiLi4vc3JjL2ltZ3MvcGx1cy5wbmdcIj5gO1xuICBjb25zdCBkaXYgPSBuZXdFbChcImRpdlwiLCBodG1sLCBjb2wuaWQpO1xuICBuYXYuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVmlzaWJpbGl0eSgpIHtcbiAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duLW1lbnVcIik7XG4gIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59XG5cbmV4cG9ydCB7XG4gIGhlYWRlcixcbiAgbmF2LFxuICBtYWluLFxuICBib2R5LFxuICBuZXdFbCxcbiAgbmV3Q29sbGVjdGlvbixcbiAgbmV3TGlzdCxcbiAgbmV3SXRlbSxcbiAgc2hvd0xpc3RzLFxuICBzaG93QWxsLFxuICBjbGVhck1haW4sXG4gIGFkZEJ0bixcbiAgdG9nZ2xlVmlzaWJpbGl0eSBhcyB0b2dnbGVEcm9wZG93bixcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIENvbGxlY3Rpb24sXG4gIExpc3QsXG4gIEl0ZW0sXG4gIGFkZExpc3QsXG4gIGFkZEl0ZW0sXG4gIGdldERhdGEsXG4gIHNldERhdGEsXG4gIHRvZ2dsZUNvbXBsZXRlLFxuICB1blBhY2tEYXRhIGFzIGNvbnNUYWJsZURhdGEsXG59IGZyb20gXCIuL2FwcFwiO1xuXG5pbXBvcnQge1xuICBuZXdFbCxcbiAgbWFpbixcbiAgbmF2LFxuICBoZWFkZXIsXG4gIGJvZHksXG4gIG5ld0NvbGxlY3Rpb24sXG4gIG5ld0xpc3QsXG4gIG5ld0l0ZW0sXG4gIHNob3dMaXN0cyxcbiAgc2hvd0FsbCxcbiAgY2xlYXJNYWluLFxuICBhZGRCdG4sXG4gIHRvZ2dsZURyb3Bkb3duLFxufSBmcm9tIFwiLi9kb21cIjtcblxubGV0IGRhdGEgPSB7fTtcblxubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbmRhdGEuY29sMSA9IG5ldyBDb2xsZWN0aW9uKFwiQ29sbGVjdGlvbiAxXCIpO1xuZGF0YS5jb2wyID0gbmV3IENvbGxlY3Rpb24oXCJDb2xsZWN0aW9uIDJcIik7XG5cbmFkZExpc3QoZGF0YS5jb2wxLCBuZXcgTGlzdChcIkNvbCAxIExpc3QgMVwiKSk7XG5hZGRMaXN0KGRhdGEuY29sMiwgbmV3IExpc3QoXCJDb2wgMiBMaXN0IDFcIikpO1xuXG5hZGRJdGVtKGRhdGEuY29sMS5saXN0c1swXSwgbmV3IEl0ZW0oXCJEZXNjcmlwdGlvbiBJdGVtIDFcIiwgXCJjaGVja2JveFwiKSk7XG5hZGRJdGVtKGRhdGEuY29sMi5saXN0c1swXSwgbmV3IEl0ZW0oXCJEZXNjcmlwdGlvbiBJdGVtIDFcIiwgXCJjaGVja2JveFwiKSk7XG5cbnNldERhdGEoZGF0YSk7XG5kYXRhID0gZ2V0RGF0YShkYXRhKTtcblxubmF2LmFwcGVuZENoaWxkKG5ld0VsKFwiZGl2XCIsIFwiQWxsXCIsIFwiYWxsXCIsIFwiYWN0aXZlLW5hdlwiKSk7XG5uZXdDb2xsZWN0aW9uKGRhdGEuY29sMSk7XG5cbnNob3dBbGwoZGF0YSk7XG5cbi8vIExJU1RFTkVSU1xuKCgpID0+IHtcbiAgY29uc3QgeHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnhcIik7XG4gIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrYm94XCIpO1xuICBjaGVja2JveGVzLmZvckVhY2goKGl0ZW0pID0+XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICB9KVxuICApO1xuICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgZGl2XCIpO1xuICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIG5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1uYXZcIikpO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1uYXZcIik7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgfSk7XG4gIH0pO1xuICB4cy5mb3JFYWNoKChub2RlKSA9PlxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkLCBkYXRhKTtcbiAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgICBpZiAoZGF0YVtjb2xdLmlkID09PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKSB7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbY29sXTtcbiAgICAgICAgICBzZXREYXRhKGRhdGEpO1xuICAgICAgICAgIHNob3dBbGwoZGF0YSk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gICk7XG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVEcm9wZG93bik7XG59KSgpO1xuXG5jb25zVGFibGVEYXRhKGRhdGEpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
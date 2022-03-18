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
/* harmony export */   "Item": () => (/* binding */ Item),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "tableData": () => (/* binding */ tableData)
/* harmony export */ });
// import { showCol } from "./dom";

function* gen(num) {
  while (true) {
    yield num++;
  }
}
const itemGen = gen(0);
const listGen = gen(0);
const colGen = gen(0);
let data = {};

class Item {
  constructor(description, path) {
    this.id = `item${itemGen.next().value}`;
    this.path = `${path},${this.id}`;
    this.description = description;
    if (this.description === undefined) {
      this.description = "New Item";
    }
    this.init = () => {
      // console.table(this);
    };
    this.init();
  }
}

class List {
  constructor(title, path) {
    this.id = `list${listGen.next().value}`;
    this.path = `${path},${this.id}`;
    this.title = title;
    this.items = {};
    this.init = () => {
      const newItem = new Item("Item 1", this.path);
      this.items[newItem.path] = newItem;
      // console.table(this);
    };
    this.init();
  }
  addItem = (description) => {
    const newItem = new Item(description);
    this.items[newItem.path] = newItem;
  };
}

class Collection {
  constructor(title) {
    this.path = `col${colGen.next().value}`;
    this.title = title;
    this.lists = {};
    this.init = () => {
      const newList = new List("List 1", this.path);
      this.lists[newList.path] = newList;
      data[this.path] = this;
      // showCol(this);
      // console.table(this);
    };
    this.init();
  }
  addList = (title) => {
    const newList = new List(title);
    this.lists[newList.path] = newList;
  };
}

const tableData = () => {
  console.table(data);
};




/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addColBtn": () => (/* binding */ addColBtn),
/* harmony export */   "addListBtn": () => (/* binding */ addListBtn),
/* harmony export */   "createEl": () => (/* binding */ createEl)
/* harmony export */ });
// import { data, Item } from "./app";

function createEl(type, html = null, id = null, clss = null) {
  const el = document.createElement(type);
  if (html) {
    el.innerHTML = html;
  }
  if (id) {
    el.id = id;
  }
  if (Array.isArray(clss)) {
    el.classList.add(...clss);
  } else {
    el.classList.add(clss);
  }
  return el;
}

const docBody = document.querySelector("body");
const header = createEl("header", "<h1>TO-DOS</h1>");
const main = createEl("main");
const nav = createEl("nav");
const addListBtn = createEl("div", "Add List", "add-list-nav", "nav-item");
const addColBtn = createEl("div", "Add Collection", "add-col-nav", "nav-item");
const colNav = createEl("div", null, "col-nav");
const colAllNav = createEl("div", "All", "all", [
  "col-nav-item",
  "active-col-nav",
]);

docBody.appendChild(header);
header.appendChild(nav);
nav.appendChild(addColBtn);
nav.appendChild(addListBtn);
docBody.appendChild(main);
main.appendChild(colNav);
colNav.appendChild(colAllNav);




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
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");




_dom__WEBPACK_IMPORTED_MODULE_0__.addColBtn.addEventListener("click", () => {
  let colTitle = "";
  while (!colTitle) {
    colTitle = prompt("New collection title: \n");
  }
  new _app__WEBPACK_IMPORTED_MODULE_1__.Collection(colTitle);
});

_dom__WEBPACK_IMPORTED_MODULE_0__.addListBtn.addEventListener("click", () => {
  let listTitle = prompt("New list title: \n");
  if (!listTitle) {
    listTitle = "New List";
  }
  const newList = new _app__WEBPACK_IMPORTED_MODULE_1__.List(listTitle);
});

new _app__WEBPACK_IMPORTED_MODULE_1__.Collection("First Collection");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWSxVQUFVOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUMsbUJBQW1CLEtBQUssR0FBRyxRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDLG1CQUFtQixLQUFLLEdBQUcsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVuRCxZQUFZLGFBQWE7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJDOzs7Ozs7O1VDdEMzQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2lEO0FBQ1Q7O0FBRXZELDREQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNENBQVU7QUFDaEIsQ0FBQzs7QUFFRCw2REFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0NBQUk7QUFDMUIsQ0FBQzs7QUFFRCxJQUFJLDRDQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMXRvLWRvLWFnYWluLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8xdG8tZG8tYWdhaW4vLi9zcmMvZG9tLmpzIiwid2VicGFjazovLzF0by1kby1hZ2Fpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8xdG8tZG8tYWdhaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzF0by1kby1hZ2Fpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzF0by1kby1hZ2Fpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzF0by1kby1hZ2Fpbi8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHNob3dDb2wgfSBmcm9tIFwiLi9kb21cIjtcblxuZnVuY3Rpb24qIGdlbihudW0pIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB5aWVsZCBudW0rKztcbiAgfVxufVxuY29uc3QgaXRlbUdlbiA9IGdlbigwKTtcbmNvbnN0IGxpc3RHZW4gPSBnZW4oMCk7XG5jb25zdCBjb2xHZW4gPSBnZW4oMCk7XG5sZXQgZGF0YSA9IHt9O1xuXG5jbGFzcyBJdGVtIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIHBhdGgpIHtcbiAgICB0aGlzLmlkID0gYGl0ZW0ke2l0ZW1HZW4ubmV4dCgpLnZhbHVlfWA7XG4gICAgdGhpcy5wYXRoID0gYCR7cGF0aH0sJHt0aGlzLmlkfWA7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIk5ldyBJdGVtXCI7XG4gICAgfVxuICAgIHRoaXMuaW5pdCA9ICgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUudGFibGUodGhpcyk7XG4gICAgfTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxufVxuXG5jbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIHBhdGgpIHtcbiAgICB0aGlzLmlkID0gYGxpc3Qke2xpc3RHZW4ubmV4dCgpLnZhbHVlfWA7XG4gICAgdGhpcy5wYXRoID0gYCR7cGF0aH0sJHt0aGlzLmlkfWA7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuaXRlbXMgPSB7fTtcbiAgICB0aGlzLmluaXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdJdGVtID0gbmV3IEl0ZW0oXCJJdGVtIDFcIiwgdGhpcy5wYXRoKTtcbiAgICAgIHRoaXMuaXRlbXNbbmV3SXRlbS5wYXRoXSA9IG5ld0l0ZW07XG4gICAgICAvLyBjb25zb2xlLnRhYmxlKHRoaXMpO1xuICAgIH07XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgYWRkSXRlbSA9IChkZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgSXRlbShkZXNjcmlwdGlvbik7XG4gICAgdGhpcy5pdGVtc1tuZXdJdGVtLnBhdGhdID0gbmV3SXRlbTtcbiAgfTtcbn1cblxuY2xhc3MgQ29sbGVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy5wYXRoID0gYGNvbCR7Y29sR2VuLm5leHQoKS52YWx1ZX1gO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmxpc3RzID0ge307XG4gICAgdGhpcy5pbml0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KFwiTGlzdCAxXCIsIHRoaXMucGF0aCk7XG4gICAgICB0aGlzLmxpc3RzW25ld0xpc3QucGF0aF0gPSBuZXdMaXN0O1xuICAgICAgZGF0YVt0aGlzLnBhdGhdID0gdGhpcztcbiAgICAgIC8vIHNob3dDb2wodGhpcyk7XG4gICAgICAvLyBjb25zb2xlLnRhYmxlKHRoaXMpO1xuICAgIH07XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgYWRkTGlzdCA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdCh0aXRsZSk7XG4gICAgdGhpcy5saXN0c1tuZXdMaXN0LnBhdGhdID0gbmV3TGlzdDtcbiAgfTtcbn1cblxuY29uc3QgdGFibGVEYXRhID0gKCkgPT4ge1xuICBjb25zb2xlLnRhYmxlKGRhdGEpO1xufTtcblxuZXhwb3J0IHsgSXRlbSwgTGlzdCwgQ29sbGVjdGlvbiwgdGFibGVEYXRhLCBkYXRhIH07XG4iLCIvLyBpbXBvcnQgeyBkYXRhLCBJdGVtIH0gZnJvbSBcIi4vYXBwXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsKHR5cGUsIGh0bWwgPSBudWxsLCBpZCA9IG51bGwsIGNsc3MgPSBudWxsKSB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYgKGh0bWwpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICB9XG4gIGlmIChpZCkge1xuICAgIGVsLmlkID0gaWQ7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2xzcykpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLmNsc3MpO1xuICB9IGVsc2Uge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzcyk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufVxuXG5jb25zdCBkb2NCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBoZWFkZXIgPSBjcmVhdGVFbChcImhlYWRlclwiLCBcIjxoMT5UTy1ET1M8L2gxPlwiKTtcbmNvbnN0IG1haW4gPSBjcmVhdGVFbChcIm1haW5cIik7XG5jb25zdCBuYXYgPSBjcmVhdGVFbChcIm5hdlwiKTtcbmNvbnN0IGFkZExpc3RCdG4gPSBjcmVhdGVFbChcImRpdlwiLCBcIkFkZCBMaXN0XCIsIFwiYWRkLWxpc3QtbmF2XCIsIFwibmF2LWl0ZW1cIik7XG5jb25zdCBhZGRDb2xCdG4gPSBjcmVhdGVFbChcImRpdlwiLCBcIkFkZCBDb2xsZWN0aW9uXCIsIFwiYWRkLWNvbC1uYXZcIiwgXCJuYXYtaXRlbVwiKTtcbmNvbnN0IGNvbE5hdiA9IGNyZWF0ZUVsKFwiZGl2XCIsIG51bGwsIFwiY29sLW5hdlwiKTtcbmNvbnN0IGNvbEFsbE5hdiA9IGNyZWF0ZUVsKFwiZGl2XCIsIFwiQWxsXCIsIFwiYWxsXCIsIFtcbiAgXCJjb2wtbmF2LWl0ZW1cIixcbiAgXCJhY3RpdmUtY29sLW5hdlwiLFxuXSk7XG5cbmRvY0JvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xubmF2LmFwcGVuZENoaWxkKGFkZENvbEJ0bik7XG5uYXYuYXBwZW5kQ2hpbGQoYWRkTGlzdEJ0bik7XG5kb2NCb2R5LmFwcGVuZENoaWxkKG1haW4pO1xubWFpbi5hcHBlbmRDaGlsZChjb2xOYXYpO1xuY29sTmF2LmFwcGVuZENoaWxkKGNvbEFsbE5hdik7XG5cbmV4cG9ydCB7IGFkZENvbEJ0biwgYWRkTGlzdEJ0biwgY3JlYXRlRWwgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9kb21cIjtcbmltcG9ydCB7IExpc3QsIEl0ZW0sIENvbGxlY3Rpb24sIGRhdGEsIHRhYmxlRGF0YSB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgc2hvd0NvbCwgYWRkQ29sQnRuLCBhZGRMaXN0QnRuIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmFkZENvbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsZXQgY29sVGl0bGUgPSBcIlwiO1xuICB3aGlsZSAoIWNvbFRpdGxlKSB7XG4gICAgY29sVGl0bGUgPSBwcm9tcHQoXCJOZXcgY29sbGVjdGlvbiB0aXRsZTogXFxuXCIpO1xuICB9XG4gIG5ldyBDb2xsZWN0aW9uKGNvbFRpdGxlKTtcbn0pO1xuXG5hZGRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxldCBsaXN0VGl0bGUgPSBwcm9tcHQoXCJOZXcgbGlzdCB0aXRsZTogXFxuXCIpO1xuICBpZiAoIWxpc3RUaXRsZSkge1xuICAgIGxpc3RUaXRsZSA9IFwiTmV3IExpc3RcIjtcbiAgfVxuICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QobGlzdFRpdGxlKTtcbn0pO1xuXG5uZXcgQ29sbGVjdGlvbihcIkZpcnN0IENvbGxlY3Rpb25cIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


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
      console.table(this);
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
      console.table(this);
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
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.showCol)(this);
      console.table(this);
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
/* harmony export */   "addColNav": () => (/* binding */ addColNav),
/* harmony export */   "showCol": () => (/* binding */ showCol)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");

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
const header = newEl("header", "<h1>TO-DOS</h1>");
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
        _app__WEBPACK_IMPORTED_MODULE_0__.data[list.path.split(",")[0]].title
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
        const item = new _app__WEBPACK_IMPORTED_MODULE_0__.Item();
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




_dom__WEBPACK_IMPORTED_MODULE_0__.addColNav.addEventListener("click", () => {
  let colTitle = "";
  while (!colTitle) {
    colTitle = prompt("New collection title: \n");
  }
  new _app__WEBPACK_IMPORTED_MODULE_1__.Collection(colTitle);
});
new _app__WEBPACK_IMPORTED_MODULE_1__.Collection("First Collection");

console.clear();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWdhaW4vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLzF0by1kby1hZ2Fpbi8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vMXRvLWRvLWFnYWluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzF0by1kby1hZ2Fpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMXRvLWRvLWFnYWluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMXRvLWRvLWFnYWluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMXRvLWRvLWFnYWluLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hvd0NvbCB9IGZyb20gXCIuL2RvbVwiO1xuXG5mdW5jdGlvbiogZ2VuKG51bSkge1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHlpZWxkIG51bSsrO1xuICB9XG59XG5jb25zdCBpdGVtR2VuID0gZ2VuKDApO1xuY29uc3QgbGlzdEdlbiA9IGdlbigwKTtcbmNvbnN0IGNvbEdlbiA9IGdlbigwKTtcbmxldCBkYXRhID0ge307XG5cbmNsYXNzIEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgcGF0aCkge1xuICAgIHRoaXMuaWQgPSBgaXRlbSR7aXRlbUdlbi5uZXh0KCkudmFsdWV9YDtcbiAgICB0aGlzLnBhdGggPSBgJHtwYXRofSwke3RoaXMuaWR9YDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgaWYgKHRoaXMuZGVzY3JpcHRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiTmV3IEl0ZW1cIjtcbiAgICB9XG4gICAgdGhpcy5pbml0ID0gKCkgPT4ge1xuICAgICAgY29uc29sZS50YWJsZSh0aGlzKTtcbiAgICB9O1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG59XG5cbmNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgcGF0aCkge1xuICAgIHRoaXMuaWQgPSBgbGlzdCR7bGlzdEdlbi5uZXh0KCkudmFsdWV9YDtcbiAgICB0aGlzLnBhdGggPSBgJHtwYXRofSwke3RoaXMuaWR9YDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgIHRoaXMuaW5pdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgSXRlbShcIkl0ZW0gMVwiLCB0aGlzLnBhdGgpO1xuICAgICAgdGhpcy5pdGVtc1tuZXdJdGVtLnBhdGhdID0gbmV3SXRlbTtcbiAgICAgIGNvbnNvbGUudGFibGUodGhpcyk7XG4gICAgfTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBhZGRJdGVtID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY29uc3QgbmV3SXRlbSA9IG5ldyBJdGVtKGRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLml0ZW1zW25ld0l0ZW0ucGF0aF0gPSBuZXdJdGVtO1xuICB9O1xufVxuXG5jbGFzcyBDb2xsZWN0aW9uIHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnBhdGggPSBgY29sJHtjb2xHZW4ubmV4dCgpLnZhbHVlfWA7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMubGlzdHMgPSB7fTtcbiAgICB0aGlzLmluaXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QoXCJMaXN0IDFcIiwgdGhpcy5wYXRoKTtcbiAgICAgIHRoaXMubGlzdHNbbmV3TGlzdC5wYXRoXSA9IG5ld0xpc3Q7XG4gICAgICBkYXRhW3RoaXMucGF0aF0gPSB0aGlzO1xuICAgICAgc2hvd0NvbCh0aGlzKTtcbiAgICAgIGNvbnNvbGUudGFibGUodGhpcyk7XG4gICAgfTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBhZGRMaXN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KHRpdGxlKTtcbiAgICB0aGlzLmxpc3RzW25ld0xpc3QucGF0aF0gPSBuZXdMaXN0O1xuICB9O1xufVxuY29uc3QgdGFibGVEYXRhID0gKCkgPT4ge1xuICBjb25zb2xlLnRhYmxlKGRhdGEpO1xufTtcblxuZXhwb3J0IHsgSXRlbSwgTGlzdCwgQ29sbGVjdGlvbiwgdGFibGVEYXRhLCBkYXRhIH07XG4iLCJpbXBvcnQgeyBkYXRhLCBJdGVtIH0gZnJvbSBcIi4vYXBwXCI7XG5mdW5jdGlvbiBuZXdFbCh0eXBlLCBodG1sID0gbnVsbCwgaWQgPSBudWxsLCBjbHNzID0gbnVsbCkge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGlmIChodG1sKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgfVxuICBpZiAoaWQpIHtcbiAgICBlbC5pZCA9IGlkO1xuICB9XG4gIGlmIChjbHNzKSB7XG4gICAgdHlwZW9mIGNsc3MgPT09IEFycmF5XG4gICAgICA/IGNsc3MuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgICAgICB9KVxuICAgICAgOiBlbC5jbGFzc0xpc3QuYWRkKGNsc3MpO1xuICB9XG4gIHJldHVybiBlbDtcbn1cblxuY29uc3QgZG9jQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgaGVhZGVyID0gbmV3RWwoXCJoZWFkZXJcIiwgXCI8aDE+VE8tRE9TPC9oMT5cIik7XG5jb25zdCBtYWluID0gbmV3RWwoXCJtYWluXCIpO1xuY29uc3QgbmF2ID0gbmV3RWwoXCJuYXZcIik7XG5jb25zdCBhZGRMaXN0TmF2ID0gbmV3RWwoXCJkaXZcIiwgXCJBZGQgTGlzdFwiLCBcImFkZC1saXN0LW5hdlwiLCBcIm5hdi1pdGVtXCIpO1xuY29uc3QgYWRkQ29sTmF2ID0gbmV3RWwoXCJkaXZcIiwgXCJBZGQgQ29sbGVjdGlvblwiLCBcImFkZC1jb2wtbmF2XCIsIFwibmF2LWl0ZW1cIik7XG5jb25zdCBjb2xOYXYgPSBuZXdFbChcImRpdlwiLCBudWxsLCBcImNvbC1uYXZcIik7XG5jb25zdCBjb2xBbGxOYXYgPSBuZXdFbChcImRpdlwiLCBcIkFsbFwiLCBcImFsbFwiLCBcImNvbC1uYXYtaXRlbVwiKTtcblxuY29sQWxsTmF2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtY29sLW5hdlwiKTtcblxuW1wiYnRuXCIsIFwiYnRuLXByaW1hcnlcIl0uZm9yRWFjaCgoY2xzKSA9PiB7XG4gIGFkZExpc3ROYXYuY2xhc3NMaXN0LmFkZChjbHMpO1xufSk7XG5cbltcImJ0blwiLCBcImJ0bi13YXJuaW5nXCJdLmZvckVhY2goKGNscykgPT4ge1xuICBhZGRDb2xOYXYuY2xhc3NMaXN0LmFkZChjbHMpO1xufSk7XG5cbmRvY0JvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xubmF2LmFwcGVuZENoaWxkKGFkZENvbE5hdik7XG5uYXYuYXBwZW5kQ2hpbGQoYWRkTGlzdE5hdik7XG5kb2NCb2R5LmFwcGVuZENoaWxkKG1haW4pO1xubWFpbi5hcHBlbmRDaGlsZChjb2xOYXYpO1xuY29sTmF2LmFwcGVuZENoaWxkKGNvbEFsbE5hdik7XG5cbmNvbE5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgc2hvd0NvbChlLnRhcmdldC5pZCk7XG59KTtcblxuY29uc3Qgc2hvd0NvbCA9IChjb2wpID0+IHtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IG5ld0NvbE5hdiA9IG5ld0VsKFxuICAgIFwiZGl2XCIsXG4gICAgYCR7Y29sLnRpdGxlfSA8aW1nIHNyYz1cIlwiIGNsYXNzPVwiZGVsLWNvbFwiPmAsXG4gICAgY29sLnBhdGgsXG4gICAgXCJjb2wtbmF2LWl0ZW1cIlxuICApO1xuXG4gIC8vIFJlIEFkZCBOYXZcbiAgbWFpbi5hcHBlbmRDaGlsZChjb2xOYXYpO1xuICBjb2xOYXYuYXBwZW5kQ2hpbGQoY29sQWxsTmF2KTtcbiAgY29sTmF2LmFwcGVuZENoaWxkKG5ld0NvbE5hdik7XG5cbiAgLy8gQWRkIE5hdiBMaXN0ZW5lcnNcbiAgY29uc3QgY29sTmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbC1uYXYtaXRlbVwiKTtcbiAgY29sTmF2SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT5cbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29sTmF2SXRlbXMuZm9yRWFjaCgobmF2KSA9PiBuYXYuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1jb2wtbmF2XCIpKTtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtY29sLW5hdlwiKTtcbiAgICAgIC8vIHNob3dDb2woZGF0YVtlLnRhcmdldC5pZF0pO1xuICAgIH0pXG4gICk7XG5cbiAgLy8gQWRkIExpc3QgRWxlbWVudHNcbiAgT2JqZWN0LnZhbHVlcyhjb2wubGlzdHMpLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBjb25zdCBuZXdMaXN0ID0gbmV3RWwoXG4gICAgICBcImRpdlwiLFxuICAgICAgYDxkaXYgY2xhc3M9XCJ0aXRsZXNcIj48aDMgY2xhc3M9XCJsaXN0LXRpdGxlXCI+JHtcbiAgICAgICAgbGlzdC50aXRsZVxuICAgICAgfTwvaDM+PGg0IGNsYXNzPVwibGlzdC1jb2xcIj4ke1xuICAgICAgICBkYXRhW2xpc3QucGF0aC5zcGxpdChcIixcIilbMF1dLnRpdGxlXG4gICAgICB9PC9oND48L2Rpdj48dWwgY2xhc3M9J2l0ZW1zJz48L3VsPmAsXG4gICAgICBsaXN0LnBhdGgsXG4gICAgICBcImxpc3RcIlxuICAgICk7XG5cbiAgICAvLyBBZGQgSXRlbSBFbGVtZW50c1xuICAgIE9iamVjdC52YWx1ZXMobGlzdC5pdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgbmV3SXRlbSA9IG5ld0VsKFxuICAgICAgICBcImxpXCIsXG4gICAgICAgIGA8aW5wdXQgaWQ9XCJjaGVjaywke2l0ZW0ucGF0aH1cIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrLWl0ZW1cIj4ke2l0ZW0uZGVzY3JpcHRpb259YCxcbiAgICAgICAgaXRlbS5wYXRoLFxuICAgICAgICBcIml0ZW1cIlxuICAgICAgKTtcbiAgICAgIG5ld0xpc3QuYXBwZW5kKG5ld0l0ZW0pO1xuICAgICAgY29uc3QgYWRkSXRlbSA9IG5ld0VsKFwibGlcIiwgXCIrIDxzcGFuPkl0ZW08L3NwYW4+XCIsIG51bGwsIFwiYWRkSXRlbVwiKTtcbiAgICAgIG5ld0xpc3QuYXBwZW5kKGFkZEl0ZW0pO1xuXG4gICAgICBhZGRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtKCk7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXdFbChcbiAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgYDxpbnB1dCBpZD1cImNoZWNrLCR7aXRlbS5wYXRofVwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2staXRlbVwiPiR7aXRlbS5kZXNjcmlwdGlvbn1gLFxuICAgICAgICAgIGl0ZW0ucGF0aCxcbiAgICAgICAgICBcIml0ZW1cIlxuICAgICAgICApO1xuICAgICAgICBuZXdMaXN0LmFwcGVuZChuZXdJdGVtKTtcbiAgICAgICAgY29uc3QgYWRkSXRlbSA9IG5ld0VsKFwibGlcIiwgXCIrIDxzcGFuPkl0ZW08L3NwYW4+XCIsIG51bGwsIFwiYWRkSXRlbVwiKTtcbiAgICAgICAgbmV3TGlzdC5hcHBlbmQoYWRkSXRlbSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ2hlY2tib3ggTGlzdGVuZXJcbiAgICAgIG5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGxldCBjaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaGVjaywke25ld0l0ZW0uaWR9YCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJpdGVtXCIpKSB7XG4gICAgICAgICAgaWYgKGNoZWNrLmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjaGVjay5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2suY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGVjay5jaGVja2VkID09PSB0cnVlXG4gICAgICAgICAgPyAoY2hlY2sucGFyZW50RWxlbWVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCIpXG4gICAgICAgICAgOiAoY2hlY2sucGFyZW50RWxlbWVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW5hbWUgSXRlbSBMaXN0ZW5lclxuICAgICAgbmV3SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIml0ZW1cIikpIHtcbiAgICAgICAgICBsZXQgY2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2hlY2ssJHtuZXdJdGVtLmlkfWApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrKTtcbiAgICAgICAgICBsZXQgbmV3RGVzYyA9IHByb21wdChcIk5ldyBkZXNjcmlwdGlvbjogXCIpO1xuICAgICAgICAgIG5ld0l0ZW0uaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgICAgICAgICBuZXdJdGVtLmlubmVySFRNTCArPSBuZXdEZXNjO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIFJlbmFtZSBMaXN0IExpc3RlbmVyXG4gICAgICBuZXdMaXN0LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC10aXRsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbGV0IG5ld1RpdGxlID0gcHJvbXB0KFwiTmV3IHRpdGxlOiBcIik7XG4gICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gbmV3VGl0bGU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG5ld0xpc3QpO1xuICB9KTtcbn07XG5cbi8vIGNvbnN0IGxpc3RlbiA9ICgpID0+IHtcbi8vIH1cbmV4cG9ydCB7IHNob3dDb2wsIGFkZENvbE5hdiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2RvbVwiO1xuaW1wb3J0IHsgTGlzdCwgSXRlbSwgQ29sbGVjdGlvbiwgZGF0YSwgdGFibGVEYXRhIH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBzaG93Q29sLCBhZGRDb2xOYXYgfSBmcm9tIFwiLi9kb21cIjtcblxuYWRkQ29sTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxldCBjb2xUaXRsZSA9IFwiXCI7XG4gIHdoaWxlICghY29sVGl0bGUpIHtcbiAgICBjb2xUaXRsZSA9IHByb21wdChcIk5ldyBjb2xsZWN0aW9uIHRpdGxlOiBcXG5cIik7XG4gIH1cbiAgbmV3IENvbGxlY3Rpb24oY29sVGl0bGUpO1xufSk7XG5uZXcgQ29sbGVjdGlvbihcIkZpcnN0IENvbGxlY3Rpb25cIik7XG5cbmNvbnNvbGUuY2xlYXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
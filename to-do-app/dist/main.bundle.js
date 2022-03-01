/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {



let data = {};

const getData = () => {
  let data = JSON.parse(localStorage.getItem("data"));

  const methods = {
    newList: (title="Title", color="default", dueDate=null)=>{
      const l = {
        title     : title,
        color     : color,
        isComplete: false,
        dueDate   : dueDate,
        items     : [],
        newListItem: (description="Description", type="check", dueDate=null)=>{
          const i = {
            description: description,
            type       : type,
            isComplete : false,
            dueDate    : dueDate
          }
          this.items.push(i)
          return i
        }
      }
      this.lists.push(l)
      return l  
    }
  }
  // data = Object.keys(data).forEach(collection => {
  //   Object.assign(collection, methods)
  // })

  return data
}
const setData = (data) => {
  localStorage.setItem("data", data)
}



function collection(collectionName) {
  // while (collectionName in Object.keys(collections)){
    // 	if (Number(collectionName.slice(-1)) >= 1){
    // 		collectionName.slice(-1) = String(Number(collectionName.slice(-1)))
    // 	} else {
    // 		collectionName += "_1"
    // 	}
    // };

    // const listItemTypes = ["check", "text", "img"];
    // const listItemTypes = {
    //     "check": "description",
    //     "text" : "description",
    //     "img"  : "source"
    // };
    return {
      name : collectionName,
      lists: [],
      
};}
const newList = (title="Title", color="default", dueDate=null)=>{
  const l = {
    title     : title,
    color     : color,
    isComplete: false,
    dueDate   : dueDate,
    items     : [],
    newListItem: (description="Description", type="check", dueDate=null)=>{
      const i = {
        description: description,
        type       : type,
        isComplete : false,
        dueDate    : dueDate
      }
      this.items.push(i)
      return i
    }

  }
  // this.lists.push(l)
  return l
}


let col = collection("Testypoos")
let col2 = collection("2")


col.lists.push(newList("myotherlist"))

console.table(col)




// function newEl(element, parent="main", html="") {
//     const newEl = document.createElement(element);
//     newEl.innerHTML = html;
//     document.querySelector(parent).appendChild(newEl);
//     return newEl
// }


// const nav              = newEl("nav", "header");
// const defaultProject   = newEl("div", "nav", "Today");
// const addProjectBtn    = newEl("div", "nav", "+")
//       addProjectBtn.id = "add-project-btn";
// let   projects          = [];


// const domManip = () => {
    
//     const addProject = (name) => {
        
//     }

// }


// addProjectBtn.addEventListener("mouseup", ()=>{
//     const div = document.createElement("div");
//     let newProject = Collection(prompt("New Project Title: "))
//     if (newProject){
//         div.textContent = newProject.getName();
//         nav.removeChild(addProjectBtn)
//         nav.appendChild(div)
//         nav.appendChild(addProjectBtn)
//         projects.push(newProject)
        
//         div.classList.add("active-nav")
//     }
// })




// const pubSub = () => {
//     let subs = [];
//     let events = {};
    
//     const addSub = (newSub) => {
//         subs.push(newSub)
//     }
//     const getSubs = () => {
//         return subs
//     }
//     const removeSub = (subscriber) => {
//         subs = subs.filter(sub => sub !== subscriber)
//     }
// }



// document.querySelectorAll("nav div").forEach(div => {
//     if (div.textContent !== "+"){
//         div.addEventListener("dblclick", (e) => {
//             e.target.textContent = prompt("New Project Title: ", e.target.textContent);
//             while (e.target.textContent === ""){
//                 e.target.textContent = prompt("New Project Title: ", e.target.textContent); 
//             }
//         })
//     }
// });



















// const main = document.querySelector("main")



// const newList = () => {
//     const div = document.createElement("div");
//     div.innerHTML = "<div class="list"> \
//                         <h2>Title</h2> \
//                         <ul> \
//                             <li> \
//                                 <input type="checkbox" name="item-1" id=""> \
//                                 <label for="item-1">Item 1</label> \
//                             </li> \
//                             <li> \
//                                 <input type="checkbox" name="item-2" id=""> \
//                                 <label for="item-2">Item 2</label> \
//                             </li> \
//                             <li> \
//                                 <input type="checkbox" name="item-3" id=""> \
//                                 <label for="item-3">Item 3</label> \
//                             </li> \
//                             <li> \
//                                 <input type="checkbox" name="item-3" id=""> \
//                                 <label for="item-3">Item 4</label> \
//                             </li> \
//                             <li> \
//                                 <input type="checkbox" name="item-3" id=""> \
//                                 <label for="item-3">Item 5</label> \
//                             </li> \
//                             <li style="display:flex; justify-content: stretch;"> \
//                                 <input type="checkbox" name="item-3" id=""> \
//                                 <label style="width: 100%; padding: 0 .6rem;" for="item-3">Item 6</label> \
//                                 <img style="height: 1rem; cursor:grab;" src="../src/imgs/draggable-dots.png"> \
//                             </li> \
//                         </ul> \
//                     </div>";
//     return div
// }
// const addListsToMain = (n=1) => {
//     for (let i = 0; i < n; i++){
//         main.appendChild(newList())
//     }
// }
// addListsToMain(6)


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7Ozs7O0FBS0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQko7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCx5QkFBeUI7QUFDakY7QUFDQSw4REFBOEQsaUJBQWlCO0FBQy9FLDZEQUE2RCxZQUFZO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVRW5PQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxubGV0IGRhdGEgPSB7fTtcblxuY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcbiAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGF0YVwiKSk7XG5cbiAgY29uc3QgbWV0aG9kcyA9IHtcbiAgICBuZXdMaXN0OiAodGl0bGU9XCJUaXRsZVwiLCBjb2xvcj1cImRlZmF1bHRcIiwgZHVlRGF0ZT1udWxsKT0+e1xuICAgICAgY29uc3QgbCA9IHtcbiAgICAgICAgdGl0bGUgICAgIDogdGl0bGUsXG4gICAgICAgIGNvbG9yICAgICA6IGNvbG9yLFxuICAgICAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgZHVlRGF0ZSAgIDogZHVlRGF0ZSxcbiAgICAgICAgaXRlbXMgICAgIDogW10sXG4gICAgICAgIG5ld0xpc3RJdGVtOiAoZGVzY3JpcHRpb249XCJEZXNjcmlwdGlvblwiLCB0eXBlPVwiY2hlY2tcIiwgZHVlRGF0ZT1udWxsKT0+e1xuICAgICAgICAgIGNvbnN0IGkgPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0eXBlICAgICAgIDogdHlwZSxcbiAgICAgICAgICAgIGlzQ29tcGxldGUgOiBmYWxzZSxcbiAgICAgICAgICAgIGR1ZURhdGUgICAgOiBkdWVEYXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpKVxuICAgICAgICAgIHJldHVybiBpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdHMucHVzaChsKVxuICAgICAgcmV0dXJuIGwgIFxuICAgIH1cbiAgfVxuICAvLyBkYXRhID0gT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChjb2xsZWN0aW9uID0+IHtcbiAgLy8gICBPYmplY3QuYXNzaWduKGNvbGxlY3Rpb24sIG1ldGhvZHMpXG4gIC8vIH0pXG5cbiAgcmV0dXJuIGRhdGFcbn1cbmNvbnN0IHNldERhdGEgPSAoZGF0YSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGFcIiwgZGF0YSlcbn1cblxuXG5cbmZ1bmN0aW9uIGNvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpIHtcbiAgLy8gd2hpbGUgKGNvbGxlY3Rpb25OYW1lIGluIE9iamVjdC5rZXlzKGNvbGxlY3Rpb25zKSl7XG4gICAgLy8gXHRpZiAoTnVtYmVyKGNvbGxlY3Rpb25OYW1lLnNsaWNlKC0xKSkgPj0gMSl7XG4gICAgLy8gXHRcdGNvbGxlY3Rpb25OYW1lLnNsaWNlKC0xKSA9IFN0cmluZyhOdW1iZXIoY29sbGVjdGlvbk5hbWUuc2xpY2UoLTEpKSlcbiAgICAvLyBcdH0gZWxzZSB7XG4gICAgLy8gXHRcdGNvbGxlY3Rpb25OYW1lICs9IFwiXzFcIlxuICAgIC8vIFx0fVxuICAgIC8vIH07XG5cbiAgICAvLyBjb25zdCBsaXN0SXRlbVR5cGVzID0gW1wiY2hlY2tcIiwgXCJ0ZXh0XCIsIFwiaW1nXCJdO1xuICAgIC8vIGNvbnN0IGxpc3RJdGVtVHlwZXMgPSB7XG4gICAgLy8gICAgIFwiY2hlY2tcIjogXCJkZXNjcmlwdGlvblwiLFxuICAgIC8vICAgICBcInRleHRcIiA6IFwiZGVzY3JpcHRpb25cIixcbiAgICAvLyAgICAgXCJpbWdcIiAgOiBcInNvdXJjZVwiXG4gICAgLy8gfTtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSA6IGNvbGxlY3Rpb25OYW1lLFxuICAgICAgbGlzdHM6IFtdLFxuICAgICAgXG59O31cbmNvbnN0IG5ld0xpc3QgPSAodGl0bGU9XCJUaXRsZVwiLCBjb2xvcj1cImRlZmF1bHRcIiwgZHVlRGF0ZT1udWxsKT0+e1xuICBjb25zdCBsID0ge1xuICAgIHRpdGxlICAgICA6IHRpdGxlLFxuICAgIGNvbG9yICAgICA6IGNvbG9yLFxuICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgIGR1ZURhdGUgICA6IGR1ZURhdGUsXG4gICAgaXRlbXMgICAgIDogW10sXG4gICAgbmV3TGlzdEl0ZW06IChkZXNjcmlwdGlvbj1cIkRlc2NyaXB0aW9uXCIsIHR5cGU9XCJjaGVja1wiLCBkdWVEYXRlPW51bGwpPT57XG4gICAgICBjb25zdCBpID0ge1xuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIHR5cGUgICAgICAgOiB0eXBlLFxuICAgICAgICBpc0NvbXBsZXRlIDogZmFsc2UsXG4gICAgICAgIGR1ZURhdGUgICAgOiBkdWVEYXRlXG4gICAgICB9XG4gICAgICB0aGlzLml0ZW1zLnB1c2goaSlcbiAgICAgIHJldHVybiBpXG4gICAgfVxuXG4gIH1cbiAgLy8gdGhpcy5saXN0cy5wdXNoKGwpXG4gIHJldHVybiBsXG59XG5cblxubGV0IGNvbCA9IGNvbGxlY3Rpb24oXCJUZXN0eXBvb3NcIilcbmxldCBjb2wyID0gY29sbGVjdGlvbihcIjJcIilcblxuXG5jb2wubGlzdHMucHVzaChuZXdMaXN0KFwibXlvdGhlcmxpc3RcIikpXG5cbmNvbnNvbGUudGFibGUoY29sKVxuXG5cblxuXG4vLyBmdW5jdGlvbiBuZXdFbChlbGVtZW50LCBwYXJlbnQ9XCJtYWluXCIsIGh0bWw9XCJcIikge1xuLy8gICAgIGNvbnN0IG5ld0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbi8vICAgICBuZXdFbC5pbm5lckhUTUwgPSBodG1sO1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50KS5hcHBlbmRDaGlsZChuZXdFbCk7XG4vLyAgICAgcmV0dXJuIG5ld0VsXG4vLyB9XG5cblxuLy8gY29uc3QgbmF2ICAgICAgICAgICAgICA9IG5ld0VsKFwibmF2XCIsIFwiaGVhZGVyXCIpO1xuLy8gY29uc3QgZGVmYXVsdFByb2plY3QgICA9IG5ld0VsKFwiZGl2XCIsIFwibmF2XCIsIFwiVG9kYXlcIik7XG4vLyBjb25zdCBhZGRQcm9qZWN0QnRuICAgID0gbmV3RWwoXCJkaXZcIiwgXCJuYXZcIiwgXCIrXCIpXG4vLyAgICAgICBhZGRQcm9qZWN0QnRuLmlkID0gXCJhZGQtcHJvamVjdC1idG5cIjtcbi8vIGxldCAgIHByb2plY3RzICAgICAgICAgID0gW107XG5cblxuLy8gY29uc3QgZG9tTWFuaXAgPSAoKSA9PiB7XG4gICAgXG4vLyAgICAgY29uc3QgYWRkUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIFxuLy8gICAgIH1cblxuLy8gfVxuXG5cbi8vIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCk9Pntcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIGxldCBuZXdQcm9qZWN0ID0gQ29sbGVjdGlvbihwcm9tcHQoXCJOZXcgUHJvamVjdCBUaXRsZTogXCIpKVxuLy8gICAgIGlmIChuZXdQcm9qZWN0KXtcbi8vICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gbmV3UHJvamVjdC5nZXROYW1lKCk7XG4vLyAgICAgICAgIG5hdi5yZW1vdmVDaGlsZChhZGRQcm9qZWN0QnRuKVxuLy8gICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2KVxuLy8gICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bilcbi8vICAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxuICAgICAgICBcbi8vICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbmF2XCIpXG4vLyAgICAgfVxuLy8gfSlcblxuXG5cblxuLy8gY29uc3QgcHViU3ViID0gKCkgPT4ge1xuLy8gICAgIGxldCBzdWJzID0gW107XG4vLyAgICAgbGV0IGV2ZW50cyA9IHt9O1xuICAgIFxuLy8gICAgIGNvbnN0IGFkZFN1YiA9IChuZXdTdWIpID0+IHtcbi8vICAgICAgICAgc3Vicy5wdXNoKG5ld1N1Yilcbi8vICAgICB9XG4vLyAgICAgY29uc3QgZ2V0U3VicyA9ICgpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIHN1YnNcbi8vICAgICB9XG4vLyAgICAgY29uc3QgcmVtb3ZlU3ViID0gKHN1YnNjcmliZXIpID0+IHtcbi8vICAgICAgICAgc3VicyA9IHN1YnMuZmlsdGVyKHN1YiA9PiBzdWIgIT09IHN1YnNjcmliZXIpXG4vLyAgICAgfVxuLy8gfVxuXG5cblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm5hdiBkaXZcIikuZm9yRWFjaChkaXYgPT4ge1xuLy8gICAgIGlmIChkaXYudGV4dENvbnRlbnQgIT09IFwiK1wiKXtcbi8vICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoZSkgPT4ge1xuLy8gICAgICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBwcm9tcHQoXCJOZXcgUHJvamVjdCBUaXRsZTogXCIsIGUudGFyZ2V0LnRleHRDb250ZW50KTtcbi8vICAgICAgICAgICAgIHdoaWxlIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJcIil7XG4vLyAgICAgICAgICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBwcm9tcHQoXCJOZXcgUHJvamVjdCBUaXRsZTogXCIsIGUudGFyZ2V0LnRleHRDb250ZW50KTsgXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gfSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKVxuXG5cblxuLy8gY29uc3QgbmV3TGlzdCA9ICgpID0+IHtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIGRpdi5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9XCJsaXN0XCI+IFxcXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+VGl0bGU8L2gyPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHVsPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gXFxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpdGVtLTFcIiBpZD1cIlwiPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS0xXCI+SXRlbSAxPC9sYWJlbD4gXFxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gXFxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpdGVtLTJcIiBpZD1cIlwiPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS0yXCI+SXRlbSAyPC9sYWJlbD4gXFxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gXFxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpdGVtLTNcIiBpZD1cIlwiPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS0zXCI+SXRlbSAzPC9sYWJlbD4gXFxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gXFxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpdGVtLTNcIiBpZD1cIlwiPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS0zXCI+SXRlbSA0PC9sYWJlbD4gXFxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gXFxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpdGVtLTNcIiBpZD1cIlwiPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS0zXCI+SXRlbSA1PC9sYWJlbD4gXFxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT1cImRpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1wiPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIml0ZW0tM1wiIGlkPVwiXCI+IFxcXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIndpZHRoOiAxMDAlOyBwYWRkaW5nOiAwIC42cmVtO1wiIGZvcj1cIml0ZW0tM1wiPkl0ZW0gNjwvbGFiZWw+IFxcXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJoZWlnaHQ6IDFyZW07IGN1cnNvcjpncmFiO1wiIHNyYz1cIi4uL3NyYy9pbWdzL2RyYWdnYWJsZS1kb3RzLnBuZ1wiPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IFxcXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiBcXFxuLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cIjtcbi8vICAgICByZXR1cm4gZGl2XG4vLyB9XG4vLyBjb25zdCBhZGRMaXN0c1RvTWFpbiA9IChuPTEpID0+IHtcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKyl7XG4vLyAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobmV3TGlzdCgpKVxuLy8gICAgIH1cbi8vIH1cbi8vIGFkZExpc3RzVG9NYWluKDYpXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2luZGV4LmpzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
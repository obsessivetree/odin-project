

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
  };

  data = Object.keys(data).forEach(collection => {
    Object.assign(collection, methods)
  });

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
      lists: []
    }
}
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


let col = collection("Testypoos");
let col2 = collection("2");


col.lists.push(newList("myotherlist"));

console.table(col);




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

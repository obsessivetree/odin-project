import { newCollection } from "./dom";
import { data } from "./index";
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
      data[this.id] = this;
      newCollection(data[this.id]);
      console.log(data);
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

export {
  Collection,
  List,
  Item,
  addListToObj,
  addItemToObj,
  setData,
  getData,
  toggleComplete,
};

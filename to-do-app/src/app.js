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

export {
  Collection,
  List,
  Item,
  addListToObj as addList,
  addItemToObj as addItem,
  setData,
  getData,
  unPackData,
  toggleComplete,
};

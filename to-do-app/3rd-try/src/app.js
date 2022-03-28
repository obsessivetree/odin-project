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

export { Item, List, Collection, tableData, data };

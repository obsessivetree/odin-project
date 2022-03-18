import "./dom";
import { List, Item, Collection, data, tableData } from "./app";
import { showCol, addColBtn, addListBtn } from "./dom";

addColBtn.addEventListener("click", () => {
  let colTitle = "";
  while (!colTitle) {
    colTitle = prompt("New collection title: \n");
  }
  new Collection(colTitle);
});

addListBtn.addEventListener("click", () => {
  let listTitle = prompt("New list title: \n");
  if (!listTitle) {
    listTitle = "New List";
  }
  const newList = new List(listTitle);
});

new Collection("First Collection");
